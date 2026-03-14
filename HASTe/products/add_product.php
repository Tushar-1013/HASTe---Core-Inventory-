<?php

include("../config/db.php");
include("../includes/sidebar.php");

if(isset($_POST['submit'])){

$name = $_POST['name'];
$cost = $_POST['cost'];

$conn->query("
INSERT INTO products(name, price)
VALUES('$name','$cost')
");

header("Location: product_list.php");
exit();

}

?>

<div class="main">

<h2>Add Product</h2>

<form method="POST">

<label>Product Name</label>
<input type="text" name="name" placeholder="Enter product name" required>

<label>Unit Cost</label>
<input type="number" name="cost" placeholder="Enter unit cost" required>

<button type="submit" name="submit">Add Product</button>

</form>

</div>