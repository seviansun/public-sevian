<?php
include_once('header.php');

/* �ύ���� */
if(isset($_POST['action']) && $_POST['action']=='submit'){
	$userid = @$_SESSION['userid'];
	$username = @$_SESSION['username'];
	if(!$userid) {
		header('Location:login.php');
		exit;
	}

	$content = $_POST['content'];
	if(!$content) {
		echo '�������������ݡ�<a href="###" onclick="history.go(-1);">����</a>';
		exit;
	}
	$nowtime = time();

	$sql = "INSERT INTO `comment` (`userid`, `username`, `submit_time`, `content`) VALUES ('{$userid}', '{$username}', '{$nowtime}', '{$content}')";
	mysql_query($sql);

	echo "���Գɹ���<a href='review.php'>����</a>";
	exit;
}

/**
 * ��ʾ�����б�
 */
/* �ܼ�¼�� */
$sql = "SELECT COUNT(*) as `cnt` FROM `comment`";
$rss = mysql_fetch_assoc(mysql_query($sql));
$total_num = $rss['cnt'];
/* ��ǰҳ�� */
$page = intval(@$_GET['page']);
$page = $page>=1 ? $page : 1;
/* ���Լ�¼ */
$offset = ($page-1) * $rows_per_page;
$limit = $rows_per_page;
$sql = "SELECT * FROM `comment` ORDER BY `id` DESC LIMIT {$offset},{$limit}";
$rs = mysql_query($sql);
$comments = array();
while($rss = mysql_fetch_assoc($rs)) {
	$comments[] = $rss;
}
/* ��ҳ�� */
$page_num = ceil($total_num / $rows_per_page);
$pager = pager($page, $page_num, BASE_URL . 'review.php');
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>��������һ����� ��Ȥϵ�д�������</title>
<meta name="Keywords" content="����,һ�����,��Ȥϵ��,24Сʱ,����һ��,�ҵ�">
<meta name=="Description" content="��������һ����� ��Ȥϵ�д�������">
<link rel="stylesheet" href="images/style.css" type="text/css" />
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
	<tr>
		<td>
			<img src="images/index_06b.jpg" width="950"  height="60" alt=""></td>
	</tr>
</table>

<table  width="950"  border="0" cellpadding="0" cellspacing="0">

	<tr>
		<td width="950"  colspan="2" valign="top" background="images/line.jpg"><table width="0" border="0">
		  <tr>
		    <td colspan="3" height="10">&nbsp;</td>
		    </tr>
		  <tr>
		    <td width="35">&nbsp;</td>
		    <td width="880" >

			<?php foreach($comments as $comment):?>
				<div style='background:url(images/ly.jpg) no-repeat; width:879px; height:92px; margin-bottom:10px;'> 
					<div style=' padding:12px;'> 
						<?php echo cn_substr($comment['content'], 0, 100);?>
					</div> 
					<div style='text-align:right;margin-right:10px;'> 
						---<?=$comment['username']?> <?=$comment['id']?>¥ <?=date('Y-m-d H:i:s', $comment['submit_time'])?>
					</div>
				</div>
			<?php endforeach;?>

		   <form name='form_comment' method='post' action='<?=BASE_URL?>review.php'>
		   <input type='hidden' name='action' value='submit'/>
            <div><textarea name="content" rows="5" style="width:873px;"></textarea></div>   
            <div style="margin-left:730px; margin-top:10px;"><input type='image' src='images/ps.jpg'></div>
		   </form>
            </td>
		    <td width="35">&nbsp;</td>
		    </tr>
		  <tr>
		    <td>&nbsp;</td>
		    <td><?=$pager?></td>
		    <td>&nbsp;</td>
		    </tr>
		  </table>
		</td>
	</tr>
</table>
<table  border="0" background="images/btn.jpg" width="950" height="15">
  <tr>
    <td></td>
  </tr>
</table>

</div>
	<div id="foot">
		<p style="padding-bottom:10px;"><a href="http://help.liba.com/?cat=31" target="_blank">�������</a>   <a href="http://help.liba.com/" target="_blank">��������</a>   <a href="http://www.liba.com/main/tell_friend.php" target="_blank">��������</a>   <a href="http://help.liba.com/?cat=45" target="_blank">��ϵ����</a>   <a href="http://www.liba.com/joinus/" target="_blank">��������</a></p>
		<p>Copyright 2003-2008 liba.com All rights reserved. ����� ��Ȩ���� <br />
		  ����վ�������ݾ��ܰ�Ȩ������δ����Ȩ������--liba.com ��ȷ��������ɣ�<br />
	    �κλ����͸��˲������κη�ʽ��ӡ��ת�ػ�������ҵ��;�� </p>
	</div>
</div>

<map name="Map" id="Map">
  <area shape="rect" coords="627,277,806,353" href="join.html" target="_blank" />
</map>
<!-- JiaThis Button BEGIN -->
<script type="text/javascript" src="http://v2.jiathis.com/code/jiathis_r.js?move=0&amp;btn=r1.gif" charset="utf-8"></script>
<!-- JiaThis Button END -->
</body>
</html>