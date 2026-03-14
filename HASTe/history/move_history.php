<?php

include("../config/db.php");
include("../includes/sidebar.php");

/* get history with product name */

$result=$conn->query("
SELECT 
move_history.reference,
move_history.source,
move_history.destination,
products.name AS product,
move_history.quantity,
move_history.status
FROM move_history
JOIN products ON move_history.product_id = products.id
ORDER BY move_history.id DESC
");

?>

<div class="main">

<h1>Move History</h1>

<table>

<tr>
<th>Reference</th>
<th>Source</th>
<th>Destination</th>
<th>Product</th>
<th>Qty</th>
<th>Status</th>
</tr>

<?php

while($row = $result->fetch_assoc()){

?>

<tr>

<td><?php echo $row['reference']; ?></td>

<td><?php echo $row['source']; ?></td>

<td><?php echo $row['destination']; ?></td>

<td><?php echo $row['product']; ?></td>

<td><?php echo $row['quantity']; ?></td>

<td><?php echo $row['status']; ?></td>

</tr>

<?php } ?>

</table>

</div>