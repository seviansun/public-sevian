<?php
error_reporting(0);
session_start();
include_once('header.php');
$id = intval($_GET['id']);
if(!$id) {
	echo 'RS_INVALID_ID';
	exit;
}

/* TODO */
//判断是否登录
$userid = @$_SESSION['userid'];
$username = @$_SESSION['username'];
if(!$userid) {
	echo "RS_NEED_LOGIN";
	exit;
}


//判断当前用户今日投票数
$start_time = strtotime(date('Y-m-d 00:00:00'));
$sql = "SELECT COUNT(*) AS `cnt` FROM `vote_log` WHERE `submit_time`>='{$start_time}' AND `userid`='{$userid}'";
mysql_query($sql);
$rs = mysql_fetch_assoc(mysql_query($sql));
$count_num = $rs["cnt"];
if($count_num > 10){
	echo "RS_GREATER_THAN_10";
	exit;
}

//写投票LOG
if (!empty($_SERVER['HTTP_CLIENT_IP'])){
	$ip = $_SERVER['HTTP_CLIENT_IP'];
}
else if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])){
	$ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
}
else{
	$ip = $_SERVER['REMOTE_ADDR'];
}




$nowtime = time();
$sql = "INSERT INTO `haier`.`vote_log` (`userid`,`pic_id`,`submit_time`,`ip`) VALUES ('{$userid}','{$id}','{$nowtime}','{$ip}')";
mysql_query($sql);

/* 更新pic_entry的votes计数 */
$sql = "UPDATE `pic_entries` SET `votes`=`votes`+1 WHERE `id`='{$id}' LIMIT 1";
mysql_query($sql);

$sql = "SELECT `votes` FROM `pic_entries` WHERE `id`='{$id}' LIMIT 1";
$rss = mysql_fetch_assoc(mysql_query($sql));
echo $rss['votes'];