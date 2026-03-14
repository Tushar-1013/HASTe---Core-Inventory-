<?php
include("../config/db.php");
include("../includes/sidebar.php");

if(isset($_POST['submit'])){

$reference = "WH-OUT-" . rand(1000,9999);

$customer=$_POST['customer'];
$warehouse=$_POST['warehouse'];
$product=$_POST['product'];
$qty=$_POST['qty'];

$conn->query("INSERT INTO deliveries
(reference,customer,warehouse_id,product_id,quantity,date,status)
VALUES
('$reference','$customer','$warehouse','$product','$qty',NOW(),'Draft')");
}
?>

<div class="main">

<h2>Create Delivery</h2>

<form method="POST">

<input type="text" name="customer" placeholder="Customer">

<select name="warehouse">

<?php
$w=$conn->query("SELECT * FROM warehouses");
while($row=$w->fetch_assoc()){
echo "<option value='".$row['id']."'>".$row['name']."</option>";
}
?>

</select>

<select name="product">

<?php
$p=$conn->query("SELECT * FROM products");
while($row=$p->fetch_assoc()){
echo "<option value='".$row['id']."'>".$row['name']."</option>";
}
?>

</select>

<input type="number" name="qty" placeholder="Quantity">

<button name="submit">Create Delivery</button>

</form>

<hr>

<h2>Delivery List</h2>

<table>

<tr>
<th>Reference</th>
<th>Customer</th>
<th>Quantity</th>
<th>Status</th>
<th>Action</th>
</tr>

<?php
$result=$conn->query("SELECT * FROM deliveries ORDER BY id DESC");

while($row=$result->fetch_assoc()){
?>

<tr>

<td><?php echo $row['reference']; ?></td>
<td><?php echo $row['customer']; ?></td>
<td><?php echo $row['quantity']; ?></td>
<td><?php echo $row['status']; ?></td>

<td>

<?php if($row['status']!="Done"){ ?>

<a href="validate_delivery.php?id=<?php echo $row['id']; ?>">
Validate
</a>

<?php } ?>

</td>

</tr>

<?php } ?>

</table>

</div>