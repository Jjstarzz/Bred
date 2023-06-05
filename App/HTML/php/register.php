<?php
$connection = mysql_connect("localhost", "root", "Donkeyk0ng"); // Establishing connection with server..
$db = mysql_select_db("g26", $connection); // Selecting Database.
$username=$_POST['username']; // Fetching Values from URL.
$email=$_POST['email'];
$password= sha1($_POST['password']); // Password Encryption, If you like you can also leave sha1.
// Check if e-mail address syntax is valid or not
$email = filter_var($email, FILTER_SANITIZE_EMAIL); // Sanitizing email(Remove unexpected symbol like <,>,?,#,!, etc.)
if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
echo "Invalid Email.......";
}else{
$result = mysql_query("SELECT * FROM g26 WHERE email='$email'");
$data = mysql_num_rows($result);
if(($data)==0){
$query = mysql_query("insert into user(username, email, password) values ('$username', '$email', '$password')"); // Insert query
if($query){
echo "You have successfully registered";
}else
{
echo "Error!";
}
}else{
echo "This email is already registered, please try another email.";
}
}
mysql_close ($connection);
?>
