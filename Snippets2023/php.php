<?php
    $xxx = 'xxx';
?>
<?= $xxx; ?>

<?php

    $v = $_GET['v'];

?>

<?php

function startsWith($haystack, $needle)
{
     $length = strlen($needle);
     return (substr($haystack, 0, $length) === $needle);
}
function endsWith($haystack, $needle)
{
    $length = strlen($needle);

    return $length === 0 ||
    (substr($haystack, -$length) === $needle);
}

?>

<?php if ($insert_lead): ?>
<?php echo $insert_lead; ?>
<?php endif; ?>


// --------------------------------- DATABASE

<?php

// SETUP DB
$mysql_db_host          = 'localhost';
$mysql_db_login         = 'root';
$mysql_db_password      = '';
$mysql_db_databasename  = 'int_rim';
// CONNECT DB
$DB_connection_id = mysql_connect($mysql_db_host, $mysql_db_login, $mysql_db_password) or die(mysql_error());
$DB_select_db = mysql_select_db($mysql_db_databasename) or die(mysql_error());
$DB_charset = mysql_query("SET NAMES 'utf8'");

?>

<?php

// Create connection
$cadasterDB_host = "localhost";
$cadasterDB_user = "username";
$cadasterDB_pass = "password";
$cadasterDB_name = "myDB";
$cadasterDB_port = "";
$conn = new mysqli(
    $cadasterDB_host,
    $cadasterDB_user,
    $cadasterDB_pass,
    $cadasterDB_name,
    $cadasterDB_port
);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT id, firstname, lastname FROM MyGuests";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
  }
} else {
  echo "0 results";
}
$conn->close();
?>

