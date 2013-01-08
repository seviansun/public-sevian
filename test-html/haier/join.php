<?php
include_once('header.php');
error_reporting(2047);

$arr_mime = array(
	'image/pjpeg'	=> '.jpg',
	'image/gif'		=> '.gif',
);

/* 提交浪漫宣言 */
if(isset($_POST['action']) && $_POST['action']=='submit') {
	$userid = @$_SESSION['userid'];
	$username = @$_SESSION['username'];
	if(!$userid) {
		header('Location:login.php');
		exit;
	}

	$romantic = $_POST['romantic'];
	if(!$_FILES['pictures']) {
		echo '请选择您的照片。<a href="#" onclick="history.go(-1);">返回</a>';
		exit;
	}
	if(!$romantic) {
		echo '请输入您的浪漫宣言。<a href="#" onclick="history.go(-1);">返回</a>';
		exit;
	}

	$dest_file = md5($userid . time() . mt_rand(1,10));
	$index_dest_file = $dest_file[0];
	$dest_file_ext = $arr_mime[$_FILES['pictures']['type']];

	$img_info = getimagesize ($_FILES['pictures']['tmp_name']);
	if($img_info[0]>=210 || $img_info[1]>=120){
		echo "图片长宽限于 210*120像素。";
		exit;
	}
	if($_FILES['pictures']['size'] > 30000){
		echo "图片大小不得大于30KB。";
		exit;
	}
	if(!in_array($_FILES['pictures']['type'], array('image/jpeg', 'image/pjpeg'))){
		echo "只允许JPG格式图片。";
		exit;
	}

	$upload_dir = '/subject/haier/uploads/';
	$upload_file = md5($userid . time() . mt_rand(1,10));
	$upload_file_subdir = $upload_file[0];
	$upload_file_ext = $arr_mime[$_FILES['pictures']['type']];

	move_uploaded_file($_FILES['pictures']['tmp_name'], $upload_dir . $upload_file_subdir . '/' . $upload_file . $upload_file_ext);

	$sql = "INSERT INTO `haier`.`pic_entries` (`userid`, `username`, `pic_path`, `comment`) VALUES ('{$userid}', '{$username}', '" . $upload_file_subdir . '/' . $upload_file . $upload_file_ext . "', '{$romantic}')";
	mysql_query($sql);

	echo "留言成功。<a href='review.php'>返回</a>";
	
	
	exit;
	
}

?>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>海尔三网一体电脑 乐趣系列触动真心</title>
<meta name="Keywords" content="海尔,一体电脑,乐趣系列,24小时,三网一体,家电">
<meta name=="Description" content="海尔三网一体电脑 乐趣系列触动真心">
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
				<td width="434"><p>用户名：
				  <label for="textfield"></label>
				  <input type="text" name="username" id="textfield" value="<?php echo @$_SESSION['username']; ?>"/>
				  &nbsp;&nbsp;&nbsp;</p>
				  <p style="color:#999; margin-left:55px;">注：填写篱笆会员名</p></td>
				<td width="434"><p>照片上传：
				  <label for="fileField"></label>
				  <input type="file" name="pictures" id="fileField" />
				</p>		      <p style="color:#999;">注：图片格式必须为jpg 长宽限于 210*120像素，大小30k以内 </p></td>
				<td width="35">&nbsp;</td>
				</tr>
			  <tr>
				<td>&nbsp;</td>
				<td colspan="2" height="20"></td>
				<td>&nbsp;</td>
				</tr>
			  <tr>
				<td>&nbsp;</td>
				<td colspan="2"><p>浪漫宣言：
				  <label for="textarea"></label>
				  <textarea name="romantic" id="textarea" cols="45" rows="5" style="width:750px;"></textarea>
				</p>
				  <p style="color:#999; margin-left:65px;">注：字数在100字以内 </p></td>
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
		<p style="padding-bottom:10px;"><a href="http://help.liba.com/?cat=31" target="_blank">关于篱笆</a>   <a href="http://help.liba.com/" target="_blank">帮助中心</a>   <a href="http://www.liba.com/main/tell_friend.php" target="_blank">告诉朋友</a>   <a href="http://help.liba.com/?cat=45" target="_blank">联系我们</a>   <a href="http://www.liba.com/joinus/" target="_blank">加入我们</a></p>
		<p>Copyright 2003-2008 liba.com All rights reserved. 篱笆网 版权所有<?='$pictures[]';?><br />
		  本网站所有内容均受版权保护。未经版权所有人--liba.com 明确的书面许可，<br />
	    任何机构和个人不得以任何方式翻印、转载或用于商业用途。 </p>
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