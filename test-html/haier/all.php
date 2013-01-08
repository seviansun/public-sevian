<?php
include_once('header.php');

$sql = "SELECT COUNT(*) as `cnt` FROM `pic_entries`";
$rss = mysql_fetch_assoc(mysql_query($sql));
$total_num = $rss['cnt'];
/* 当前页数 */
$page = intval(@$_GET['page']);
$page = $page>=1 ? $page : 1;

/* 留言记录 */
$offset = ($page-1) * 8;
$limit = 8;

/* 分页条 */
$page_num = ceil($total_num / $limit);
$pager = pager($page, $page_num, BASE_URL . 'all.php');


/*取图片*/
$sql = "SELECT * FROM `pic_entries` ORDER BY `id` DESC LIMIT {$offset},{$limit}";
$rs_pic=mysql_query($sql);
while($rss_pic = mysql_fetch_assoc($rs_pic))
{
	$pic_entries[]=$rss_pic;
}
$pic_entries_num = count($pic_entries);
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>海尔三网一体电脑 乐趣系列触动真心</title>
<meta name="Keywords" content="海尔,一体电脑,乐趣系列,24小时,三网一体,家电">
<meta name=="Description" content="海尔三网一体电脑 乐趣系列触动真心">
<link rel="stylesheet" href="images/style.css" type="text/css" />
<script type='text/javascript' src="jquery.js"></script>
<script type='text/javascript' src='common.js'></script>
<style type="text/css">
body {
	background-color: #FDEEF1;
}
</style>
</head>

<body>
<div id="wrapper">
	<div class="menu">
		<div style="padding:20px 0px 0px 160px;">
			<ul>
				<li><a href="http://www.liba.com/index/" target="_blank">首页</a></li>
				<li><a href="http://deco.liba.com" target="_blank">装饰装修</a></li>
				<li><a href="http://home.liba.com/" target="_blank">家居商城</a></li>
				<li><a href="http://marry.sh.liba.com/" target="_blank">偶要结婚</a></li>
                <li><a href="http://baby.liba.com/" target="_blank">妈妈宝宝</a></li>
				<li><a href="http://car.sh.liba.com/shop/" target="_blank">学车饰车</a></li>
				<li><a href="http://bbs.sh.liba.com/" target="_blank">论坛</a></li>
				<li><a href="http://video.liba.com/" target="_blank">学堂</a></li>
			</ul>
			<div class="block"></div>
		</div>
	</div>
	<div id="columns">
<table  width="950"  border="0" cellpadding="0" cellspacing="0">
	<tr>
		<td>
			<img src="images/index_01.jpg" alt="" width="950" height="433" border="0" usemap="#Map"></td>
	</tr>

</table>

<table  width="950"  border="0" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF">
	<tr>
		<td>
<?php foreach($pic_entries as $k=>$v):?>

	<?php if($k%4 == 0):?>
	<div id="all">
	<ul>
	<?php endif;?>

	<li style="margin-left:5px;">
		<table width="210" border="0">
			<tr>
				<td width="210" height="20" colspan="2"></td>
			</tr>
			<tr>
				<td height="120" width="210" colspan="2" valign="top"><img src="<?php echo "http://subject.liba.net/haier/uploads/" . $v['pic_path'];?>" class="kuang"/></td>
			</tr>
			<tr>
				<td height="6" colspan="2"></td>
			</tr>
			<tr>
				<td width="129">
					<div style="margin-left:3px;">
					<p><?=$v['username']?></p>
					<p>参赛作品</p>
					</div>
				</td>
				<td width="75" height="39" align="center" valign="top" style="background:url(images/vote.png) no-repeat;">
					<div style="margin-right:3px;">
					<p><span id='votes_<?=$v['id']?>'><?php echo $v['votes'];?></span>票 </p>
					<p style="cursor:hand; color:#FFF;" onclick='ajax_vote(<?=$v['id']?>);' >给他投票</p></div>
				</td>
			</tr>
			<tr>
				<td colspan="2" height="6"></td>
			</tr>  
			<tr>
				<td width="210" height="130" colspan="2" valign="top">
				<div style="margin:3px;">
				<?=$v['comment']?>
				</div></td>
			</tr>
			<tr>
				<td colspan="2" height="20">&nbsp;</td>
			</tr>  
		</table>
	</li>

	<?php if(($k%4 == 3) || ($pic_entries_num%4 > 0 && $v+1 == $pic_entries_num)):?>
	</ul>
	<div class="block"></div>
	</div>       
	<div style="color:#ff015b;">--------------------------------------------------------------------------------------------------------------------------------------------------------------</div>
	<?php endif;?>

<?php endforeach;?>

		</td>
	</tr>
	<tr style="width:100%; text-align:center;">
		<td><?=$pager?></td>
	</tr>
</table>

<!-- End Save for Web Slices -->
</div>
	<div id="foot">
		<p style="padding-bottom:10px;"><a href="http://help.liba.com/?cat=31" target="_blank">关于篱笆</a>   <a href="http://help.liba.com/" target="_blank">帮助中心</a>   <a href="http://www.liba.com/main/tell_friend.php" target="_blank">告诉朋友</a>   <a href="http://help.liba.com/?cat=45" target="_blank">联系我们</a>   <a href="http://www.liba.com/joinus/" target="_blank">加入我们</a></p>
		<p>Copyright 2003-2008 liba.com All rights reserved. 篱笆网 版权所有 <br />
		  本网站所有内容均受版权保护。未经版权所有人--liba.com 明确的书面许可，<br />
	    任何机构和个人不得以任何方式翻印、转载或用于商业用途。 </p>
	</div>
</div>

<map name="Map" id="Map">
  <area shape="rect" coords="639,272,790,348" href="join.html" target="_blank" />
</map>
<!-- JiaThis Button BEGIN -->
<script type="text/javascript" src="http://v2.jiathis.com/code/jiathis_r.js?move=0&amp;btn=r1.gif" charset="utf-8"></script>
<!-- JiaThis Button END -->
</body>
</html>