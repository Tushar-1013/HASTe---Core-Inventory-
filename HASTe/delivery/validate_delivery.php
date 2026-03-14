<?php

include("../config/db.php");

$id = $_GET['id'];

/* get delivery details */

$delivery = $conn->query("SELECT * FROM deliveries WHERE id=$id")->fetch_assoc();

$product = $delivery['product_id'];
$warehouse = $delivery['warehouse_id'];
$qty = $delivery['quantity'];
$reference = $delivery['reference'];

/* check stock */

$stock = $conn->query("
SELECT quantity FROM stock
WHERE product_id=$product AND warehouse_id=$warehouse
LIMIT 1
")->fetch_assoc();

$current = $stock['quantity'];

if($current < $qty){

echo "Not enough stock!";
exit();

}

/* decrease stock */

$conn->query("
UPDATE stock
SET quantity = quantity - $qty
WHERE product_id=$product AND warehouse_id=$warehouse
LIMIT 1
");

/* update delivery */

$conn->query("
UPDATE deliveries
SET status='Done'
WHERE id=$id
");

/* move history */

$conn->query("
INSERT INTO move_history
(reference,source,destination,product_id,quantity,status,date)
VALUES('$reference','Warehouse','Customer',$product,$qty,'Done',NOW())
");

header("Location: delivery.php");

?>