<?php

// var_dump($_POST[0]);
$json_todolist = file_get_contents("../data/todolist.json");
$todolist_array = json_decode($json_todolist, true);
unset($todolist_array[$_POST[0]]);
array_values($todolist_array);

$json_result = json_encode($todolist_array);
file_put_contents("../data/todolist.json", $json_result);

header("Content-Type: application/json");
echo $json_result;