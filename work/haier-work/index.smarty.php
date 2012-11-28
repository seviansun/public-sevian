<?php
include_once('header.php');

/* init smarty */
include_once('Smarty/libs/Smarty.class.php');
$smarty = new Smarty();
foreach($config['smarty'] as $k=>$v) {
	$smarty->$k = $v;
}

/* 获得三条最新的留言 */
$sql = "SELECT * FROM `comment` ORDER BY `id` DESC LIMIT 3";
$rs = mysql_query($sql);
$comments = array();
while($rss = mysql_fetch_assoc($rs)) {
	$rss['submit_time'] = date('Y-m-d H:i:s', $rss['submit_time']);
	$rss['content'] = cn_substr($rss['content'], 0, 100);
	$comments[] = $rss;
}
$smarty->assign('comments', $comments);

//取图片
$sql_p = "SELECT * FROM `pic_entries` ORDER BY `id` DESC LIMIT 8";
$rs_pic=mysql_query($sql_p);
while($rss_pic = mysql_fetch_assoc($rs_pic))
{
	$pic_entries[]=$rss_pic;
}
$smarty->assign('pic_entries', $pic_entries);

$smarty->display('index.html');