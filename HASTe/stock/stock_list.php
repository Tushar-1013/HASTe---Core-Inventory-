<?php

include("../config/db.php");
include("../includes/sidebar.php");

$result=$conn->query("
SELECT
products.name,
SUM(stock.quantity) as qty
FROM stock
JOIN products ON stock.product_id=products.id
GROUP BY stock.product_id
");

?>

<div class="main">

<h2>Stock</h2>

<table>

<tr>
<th>Product</th>
<th>On Hand</th>
</tr>

<?php
while($row=$result->fetch_assoc()){
?>

<tr>

<td><?php echo $row['name']; ?></td>
<td><?php echo $row['qty']; ?></td>

</tr>

<?php } ?>

</table>

</div>