<?php
    //Create Database connection
    
    $db = mysql_connect("localhost:3307","root", "root4128");
    if (!$db) {
        die('Could not connect to db: ' . mysql_error());
    }
  
    //Select the Database
    mysql_select_db("chartdb", $db);
     
    //Replace * in the query with the column names.
    $result = mysql_query("select * from employee", $db); 
     
    //Create an array
    $json_response = array();
     
    while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
        $row_array['id_employee'] = $row['id_employee'];
        $row_array['emp_name'] = $row['emp_name'];
        $row_array['designation'] = $row['designation'];
        $row_array['date_joined'] = $row['date_joined'];
        $row_array['salary'] = $row['salary'];
        $row_array['id_dept'] = $row['id_dept'];
         
        //push the values in the array
        array_push($json_response, $row_array);
    }

    echo json_encode($json_response);
     
    //Close the database connection
    mysql_close($db);
  
?>