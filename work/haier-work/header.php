<?php
session_start();
header('Content-type:text/html; charset=GBK');

/* 预定义变量过滤 */
defined('MAGIC_QUOTES_GPC') || define('MAGIC_QUOTES_GPC' , get_magic_quotes_gpc());

unset($GLOBALS, $_ENV, $HTTP_GET_VARS, $HTTP_POST_VARS, $HTTP_COOKIE_VARS, $HTTP_SERVER_VARS, $HTTP_ENV_VARS);

$_GET		= daddslashes($_GET, 1, TRUE);
$_POST		= daddslashes($_POST, 1, TRUE);
$_COOKIE	= daddslashes($_COOKIE, 1, TRUE);
$_SERVER	= daddslashes($_SERVER);
$_REQUEST	= daddslashes($_REQUEST, 1, TRUE);

function daddslashes($string, $force = 0, $strip = FALSE) {
	if(!MAGIC_QUOTES_GPC || $force) {
		if(is_array($string)) {
			foreach($string as $key => $val) {
				$string[$key] = daddslashes($val, $force, $strip);
			}
		} else {
			$string = addslashes($strip ? stripslashes($string) : $string);
		}
	}
	return $string;
}


include_once('config.php');
include_once('functions.php');

mysql_connect($cfg_db_host, $cfg_db_user, $cfg_db_password);
mysql_query("SET NAMES GBK");
mysql_select_db($cfg_db_name);

