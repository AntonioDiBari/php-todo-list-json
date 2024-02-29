<?php

$json_todolist_content = file_get_contents("../data/todolist.json");
header("Content-Type: application/json");
echo $json_todolist_content;
