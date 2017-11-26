<?

    // SETUP DB
    $mysql_db_host          = 'localhost';
    $mysql_db_login         = 'root';
    $mysql_db_password      = '';  
    $mysql_db_databasename  = 'int_rim';


    // CONNECT DB
	$DB_connection_id = mysql_connect($mysql_db_host, $mysql_db_login, $mysql_db_password) or die(mysql_error());
	$DB_select_db = mysql_select_db($mysql_db_databasename) or die(mysql_error());
	$DB_charset = mysql_query("SET NAMES 'utf8'");





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