<?php

$json_todolist = file_get_contents("../data/todolist.json");

$todolist_array = json_decode($json_todolist, true);
$todolist_array[] = [
    "text" => $_POST["text"],
    "state" => false
];

$json_result = json_encode($todolist_array);

file_put_contents("../data/todolist.json", $json_result);

header("Content-Type: application/json");
echo $json_result;