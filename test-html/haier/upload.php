<?php
print "<pre>";   

$uploaddir = '/subject/haier/uploads/';
$uploadfile = $uploaddir . basename($_FILES['userfile']['name']);

move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile);

print_r($_FILES);

print "</pre>";   

?>

