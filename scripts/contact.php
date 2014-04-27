<?
//the example of inserting data with variable from HTML form
//input.php
mysql_connect("msjrcclub.com","msjcs","Jason#0812");//database connection
mysql_select_db("msjcs");

//inserting data order
$order = "INSERT INTO data_employees
			(name, email, message)
			VALUES
			('$name',
			'$email',
			'message')";

//declare in the order variable
$result = mysql_query($order);	//order executes
if($result){
	echo("<br>Input data is succeed");
} else{
	echo("<br>Input data is fail");
}
?>