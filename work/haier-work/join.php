<?php
include_once('header.php');
error_reporting(2047);

$arr_mime = array(
	'image/pjpeg'	=> '.jpg',
	'image/gif'		=> '.gif',
);

/* �ύ�������� */
if(isset($_POST['action']) && $_POST['action']=='submit') {
	$userid = @$_SESSION['userid'];
	$username = @$_SESSION['username'];
	if(!$userid) {
		header('Location:login.php');
		exit;
	}

	$romantic = $_POST['romantic'];
	if(!$_FILES['pictures']) {
		echo '��ѡ��������Ƭ��<a href="#" onclick="history.go(-1);">����</a>';
		exit;
	}
	if(!$romantic) {
		echo '�����������������ԡ�<a href="#" onclick="history.go(-1);">����</a>';
		exit;
	}

	$dest_file = md5($userid . time() . mt_rand(1,10));
	$index_dest_file = $dest_file[0];
	$dest_file_ext = $arr_mime[$_FILES['pictures']['type']];

	$img_info = getimagesize ($_FILES['pictures']['tmp_name']);
	if($img_info[0]>=210 || $img_info[1]>=120){
		echo "ͼƬ�������� 210*120���ء�";
		exit;
	}
	if($_FILES['pictures']['size'] > 30000){
		echo "ͼƬ��С���ô���30KB��";
		exit;
	}
	if(!in_array($_FILES['pictures']['type'], array('image/jpeg', 'image/pjpeg'))){
		echo "ֻ����JPG��ʽͼƬ��";
		exit;
	}

	$upload_dir = '/subject/haier/uploads/';
	$upload_file = md5($userid . time() . mt_rand(1,10));
	$upload_file_subdir = $upload_file[0];
	$upload_file_ext = $arr_mime[$_FILES['pictures']['type']];

	move_uploaded_file($_FILES['pictures']['tmp_name'], $upload_dir . $upload_file_subdir . '/' . $upload_file . $upload_file_ext);

	$sql = "INSERT INTO `haier`.`pic_entries` (`userid`, `username`, `pic_path`, `comment`) VALUES ('{$userid}', '{$username}', '" . $upload_file_subdir . '/' . $upload_file . $upload_file_ext . "', '{$romantic}')";
	mysql_query($sql);

	echo "���Գɹ���<a href='review.php'>����</a>";
	
	
	exit;
	
}

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
			<img src="images/index_01.jpg" alt="" width="950" height="433" border="0">
		</td>
	</tr>
	<form name='form_comment' method='post' action='<?=BASE_URL?>join.php' enctype="multipart/form-data">
	<input type='hidden' name='action' value='submit'/>
		<tr>
			<td width="950" height="361" valign="top" background="images/join_02.jpg"><table width="0" border="0">
			  <tr>
				<td colspan="4" width="950" height="65">&nbsp;</td>
				</tr>
			  <tr>
				<td width="85"></td>
				<td width="434"><p>�û�����
				  <label for="textfield"></label>
				  <input type="text" name="username" id="textfield" value="<?php echo @$_SESSION['username']; ?>"/>
				  &nbsp;&nbsp;&nbsp;</p>
				  <p style="color:#999; margin-left:55px;">ע����д��ʻ�Ա��</p></td>
				<td width="434"><p>��Ƭ�ϴ���
				  <label for="fileField"></label>
				  <input type="file" name="pictures" id="fileField" />
				</p>		      <p style="color:#999;">ע��ͼƬ��ʽ����Ϊjpg �������� 210*120���أ���С30k���� </p></td>
				<td width="35">&nbsp;</td>
				</tr>
			  <tr>
				<td>&nbsp;</td>
				<td colspan="2" height="20"></td>
				<td>&nbsp;</td>
				</tr>
			  <tr>
				<td>&nbsp;</td>
				<td colspan="2"><p>�������ԣ�
				  <label for="textarea"></label>
				  <textarea name="romantic" id="textarea" cols="45" rows="5" style="width:750px;"></textarea>
				</p>
				  <p style="color:#999; margin-left:65px;">ע��������100������ </p></td>
				<td>&nbsp;</td>
				</tr>
			  <tr>
				<td>&nbsp;</td>
				<td colspan="2" height="20">&nbsp;</td>
				<td>&nbsp;</td>
				</tr>
			  <tr>
				<td>&nbsp;</td>
				<td colspan="2" align="center" valign="middle"><input type='image' src="images/tj.png" width="148" height="33" /></td>
				<td>&nbsp;</td>
				</tr>
			  <tr>
				<td>&nbsp;</td>
				<td colspan="2">&nbsp;</td>
				<td>&nbsp;</td>
				</tr>
			  </table>
			</td>
		</tr>
	</form>
</table>
</div>
	<div id="foot">
		<p style="padding-bottom:10px;"><a href="http://help.liba.com/?cat=31" target="_blank">�������</a>   <a href="http://help.liba.com/" target="_blank">��������</a>   <a href="http://www.liba.com/main/tell_friend.php" target="_blank">��������</a>   <a href="http://help.liba.com/?cat=45" target="_blank">��ϵ����</a>   <a href="http://www.liba.com/joinus/" target="_blank">��������</a></p>
		<p>Copyright 2003-2008 liba.com All rights reserved. ����� ��Ȩ����<?='$pictures[]';?><br />
		  ����վ�������ݾ��ܰ�Ȩ������δ����Ȩ������--liba.com ��ȷ��������ɣ�<br />
	    �κλ����͸��˲������κη�ʽ��ӡ��ת�ػ�������ҵ��;�� </p>
	</div>
</div>
<map name="Map2" id="Map2">
  <area shape="rect" coords="293,5,448,41" href="join.html" target="_blank" />
</map>
<!-- JiaThis Button BEGIN -->
<script type="text/javascript" src="http://v2.jiathis.com/code/jiathis_r.js?move=0&amp;btn=r1.gif" charset="utf-8"></script>
<!-- JiaThis Button END -->
</body>
</html>