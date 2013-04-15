<?php
header("Content-Type:text/html;charset=utf-8");
require_once('M/M_Autoload.php');
require_once('M/M_Startup.php');

$controller= new C_Base();

$controller->Request();


