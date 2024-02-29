<?php

$json_todolist = file_get_contents("../data/todolist.json");
header("Content-Type: application/json");
echo $json_todolist;
