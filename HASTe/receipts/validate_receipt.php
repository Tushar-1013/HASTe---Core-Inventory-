<?php

include("../config/db.php");

$id = $_GET['id'];

/* get receipt details */

$receipt = $conn->query("SELECT * FROM receipts WHERE id=$id")->fetch_assoc();

$product = $receipt['product_id'];
$warehouse = $receipt['warehouse_id'];
$qty = $receipt['quantity'];
$reference = $receipt['reference'];

/* update receipt status */

$conn->query("UPDATE receipts SET status='Done' WHERE id=$id");

/* check if stock exists */

$check = $conn->query("
SELECT * FROM stock
WHERE product_id=$product AND warehouse_id=$warehouse
");

if($check->num_rows > 0){

$conn->query("
UPDATE stock
SET quantity = quantity + $qty
WHERE product_id=$product AND warehouse_id=$warehouse
LIMIT 1
");

}else{

$conn->query("
INSERT INTO stock(product_id,warehouse_id,quantity)
VALUES($product,$warehouse,$qty)
");

}

/* move history */

$conn->query("
INSERT INTO move_history
(reference,source,destination,product_id,quantity,status,date)
VALUES('$reference','Supplier','Warehouse',$product,$qty,'Done',NOW())
");

header("Location: receipts.php");

?>