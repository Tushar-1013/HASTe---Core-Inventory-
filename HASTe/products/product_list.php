<?php
include("../config/db.php");
include("../includes/sidebar.php");

$result=$conn->query("SELECT * FROM products");
?>

<div class="main">

<h2>Products</h2>

<a href="add_product.php">Add Product</a>

<table>

<tr>
<th>ID</th>
<th>Name</th>
<th>Price</th>
</tr>

<?php
while($row=$result->fetch_assoc()){
?>

<tr>

<td><?php echo $row['id']; ?></td>
<td><?php echo $row['name']; ?></td>
<td><?php echo $row['price']; ?></td>

</tr>

<?php } ?>

</table>

</div>