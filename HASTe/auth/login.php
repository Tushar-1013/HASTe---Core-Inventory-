<div class="main">

<?php
session_start();
include("../config/db.php");

if(isset($_POST['email']) && isset($_POST['password'])){

$email=$_POST['email'];
$password=$_POST['password'];

$sql="SELECT * FROM users WHERE email='$email'";
$result=$conn->query($sql);

if($result->num_rows>0){

$user=$result->fetch_assoc();

if($password==$user['password']){

$_SESSION['user']=$user['name'];

header("Location:../dashboard.php");

}

}

}
?>

</div>