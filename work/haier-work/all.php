<?php
include_once('header.php');

$sql = "SELECT COUNT(*) as `cnt` FROM `pic_entries`";
$rss = mysql_fetch_assoc(mysql_query($sql));
$total_num = $rss['cnt'];
/* ��ǰҳ�� */
$page = intval(@$_GET['page']);
$page = $page>=1 ? $page : 1;

/* ���Լ�¼ */
$offset = ($page-1) * 8;
$limit = 8;

/* ��ҳ�� */
$page_num = ceil($total_num / $limit);
$pager = pager($page, $page_num, BASE_URL . 'all.php');


/*ȡͼƬ*/
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
<title>��������һ����� ��Ȥϵ�д�������</title>
<meta name="Keywords" content="����,һ�����,��Ȥϵ��,24Сʱ,����һ��,�ҵ�">
<meta name=="Description" content="��������һ����� ��Ȥϵ�д�������">
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
				<li><a href="http://www.liba.com/index/" target="_blank">��ҳ</a></li>
				<li><a href="http://deco.liba.com" target="_blank">װ��װ��</a></li>
				<li><a href="http://home.liba.com/" target="_blank">�Ҿ��̳�</a></li>
				<li><a href="http://marry.sh.liba.com/" target="_blank">żҪ���</a></li>
                <li><a href="http://baby.liba.com/" target="_blank">���豦��</a></li>
				<li><a href="http://car.sh.liba.com/shop/" target="_blank">ѧ���γ�</a></li>
				<li><a href="http://bbs.sh.liba.com/" target="_blank">��̳</a></li>
				<li><a href="http://video.liba.com/" target="_blank">ѧ��</a></li>
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
					<p>������Ʒ</p>
					</div>
				</td>
				<td width="75" height="39" align="center" valign="top" style="background:url(images/vote.png) no-repeat;">
					<div style="margin-right:3px;">
					<p><span id='votes_<?=$v['id']?>'><?php echo $v['votes'];?></span>Ʊ </p>
					<p style="cursor:hand; color:#FFF;" onclick='ajax_vote(<?=$v['id']?>);' >����ͶƱ</p></div>
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
		<p style="padding-bottom:10px;"><a href="http://help.liba.com/?cat=31" target="_blank">�������</a>   <a href="http://help.liba.com/" target="_blank">��������</a>   <a href="http://www.liba.com/main/tell_friend.php" target="_blank">��������</a>   <a href="http://help.liba.com/?cat=45" target="_blank">��ϵ����</a>   <a href="http://www.liba.com/joinus/" target="_blank">��������</a></p>
		<p>Copyright 2003-2008 liba.com All rights reserved. ����� ��Ȩ���� <br />
		  ����վ�������ݾ��ܰ�Ȩ������δ����Ȩ������--liba.com ��ȷ��������ɣ�<br />
	    �κλ����͸��˲������κη�ʽ��ӡ��ת�ػ�������ҵ��;�� </p>
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