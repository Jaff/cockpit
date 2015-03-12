<?php
    //Create Database connection
    
    include("connect.php");
    
    $db = mysql_connect($host, $username, $passwd);
    if (!$db) {
        die('Idiot..... can\'t find the database' . mysql_error());
    }
  
    //Select the Database
    mysql_select_db($dbname, $db);
     
    //Replace * in the query with the column names.
    $result = mysql_query("select * from sleepdata", $db); 
     
    //Create an array
    $json_response = array();
     
    while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
        $row_array['id'] = $row['id'];
        $row_array['date_range'] = $row['date'];
        $row_array['mins_asleep'] = $row['mins_asleep'];
        $row_array['mins_awake'] = $row['mins_awake'];

        //push the values in the array
        array_push($json_response, $row_array);
    }

    echo json_encode($json_response);
     
    //Close the database connection
    mysql_close($db);
  
?>