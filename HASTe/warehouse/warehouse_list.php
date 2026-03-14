<?php
include("../config/db.php");
include("../includes/sidebar.php");

$result=$conn->query("SELECT * FROM warehouses");
?>

<div class="main">

<h2>Warehouses</h2>

<a href="add_warehouse.php">Add Warehouse</a>

<table>

<tr>
<th>Name</th>
<th>Code</th>
<th>Address</th>
</tr>

<?php
while($row=$result->fetch_assoc()){
?>

<tr>

<td><?php echo $row['name']; ?></td>
<td><?php echo $row['short_code']; ?></td>
<td><?php echo $row['address']; ?></td>

</tr>

<?php } ?>

</table>

</div>