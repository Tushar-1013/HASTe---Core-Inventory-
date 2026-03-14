<?php

include("config/db.php");
include("includes/sidebar.php");

/* total products */

$total_products = $conn->query("
SELECT COUNT(*) as total FROM products
")->fetch_assoc()['total'];

/* total stock */

$total_stock = $conn->query("
SELECT IFNULL(SUM(quantity),0) as total
FROM stock
")->fetch_assoc()['total'];

/* low stock */

$low_stock = $conn->query("
SELECT COUNT(*) as total
FROM (
SELECT 
products.id,
IFNULL(SUM(stock.quantity),0) as qty
FROM products
LEFT JOIN stock ON products.id = stock.product_id
GROUP BY products.id
HAVING qty < 10
) as low_products
")->fetch_assoc()['total'];

/* pending receipts */

$pending_receipts = $conn->query("
SELECT COUNT(*) as total
FROM receipts
WHERE status!='Done'
")->fetch_assoc()['total'];

/* pending deliveries */

$pending_deliveries = $conn->query("
SELECT COUNT(*) as total
FROM deliveries
WHERE status!='Done'
")->fetch_assoc()['total'];

?>

<div class="main">

<h1>Dashboard</h1>

<div class="card-container">

<div class="card">
<h3>Total Products</h3>
<h2><?php echo $total_products; ?></h2>
</div>

<div class="card">
<h3>Total Stock</h3>
<h2><?php echo $total_stock; ?></h2>
</div>

<div class="card">
<h3>Low Stock</h3>
<h2><?php echo $low_stock; ?></h2>
</div>

<div class="card">
<h3>Pending Receipts</h3>
<h2><?php echo $pending_receipts; ?></h2>
</div>

<div class="card">
<h3>Pending Deliveries</h3>
<h2><?php echo $pending_deliveries; ?></h2>
</div>

</div>

</div>