<?php

include("../config/db.php");
include("../includes/sidebar.php");

if(isset($_POST['submit'])){

$name = $_POST['name'];
$code = $_POST['code'];
$address = $_POST['address'];

$conn->query("
INSERT INTO warehouses(name, short_code, address)
VALUES('$name','$code','$address')
");

header("Location: warehouse_list.php");
exit();

}

?>

<div class="main">

<h2>Add Warehouse</h2>

<form method="POST">

<label>Warehouse Name</label>
<input type="text" name="name" placeholder="Enter warehouse name" required>

<label>Short Code</label>
<input type="text" name="code" placeholder="Enter warehouse code">

<label>Address</label>
<textarea name="address" placeholder="Enter warehouse address"></textarea>

<button type="submit" name="submit">Add Warehouse</button>

</form>

</div>