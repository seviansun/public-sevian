<?php /* Smarty version 2.6.18, created on 2011-01-19 08:34:17
         compiled from index.html */ ?>
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
		<td colspan="2">
			<img src="images/index_01.jpg" alt="" width="950" height="413" border="0" usemap="#Map"></td>
	</tr>
	<tr>
		<td>
		  <img src="images/index_02.gif" alt="" width="615" height="470" border="0" usemap="#Map3"></td>
		<td>
			<img src="images/index_03.jpg" alt="" width="335" height="470" border="0" usemap="#Map2"></td>
	</tr>
	<tr>
		<td>
			<img src="images/index_04.jpg" width="615" height="488" alt=""></td>
		<td>
			<img src="images/index_05.jpg" alt="" width="335" height="488" border="0" usemap="#Map4"></td>
	</tr>
	<tr>
		<td width="950" height="699" colspan="2" valign="top" background="images/index_06.jpg" >
        <div id="romantic">        
<div id="romantic1"></div>
<div id="romantic2">
<ul>

<?php $_from = $this->_tpl_vars['pic_entries']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['key'] => $this->_tpl_vars['entries']):
?>
	<li>
	<table width="0" border="0">
	  <tr>
		<td width="175" height="20" colspan="2"></td>
	  </tr>
	  <tr>
		<td height="129" width="175" colspan="2" valign="top" style="background:url(images/pc.png) no-repeat;"><img src="images/picture.jpg" style="margin-left:7px; margin-top:9px;"></td>
	  </tr>
	  <tr>
		<td height="6" colspan="2"></td>
	  </tr>
	  <tr>
		<td width="97"><div style="margin-left:3px;">
		  <p><?php echo $this->_tpl_vars['entries']['username']; ?>
</p>
		  <p>������Ʒ</p>
		</div></td>
		<td width="75" height="39" align="center" valign="top" style="background:url(images/vote.png) no-repeat;"><div style="margin-right:3px;">
		<p><?php echo $this->_tpl_vars['entries']['votes']; ?>
Ʊ </p>
		  <p style="color:#FFF">����ͶƱ</p></div></td>
	  </tr>
		<tr>
		<td colspan="2" height="6"></td>
	  </tr>  
		<tr>
		<td width="175" height="75" colspan="2" valign="top" style="background:url(images/show.png) no-repeat;">
		<div style="margin:8px;"><?php echo $this->_tpl_vars['entries']['comment']; ?>
</div></td>
	  </tr>

	</table>
	</li>
<?php endforeach; endif; unset($_from); ?>



</ul>
			<div class="block"></div>
   <div id="romantic3"><div id="color1"><a href="all.html" target="_blank">MORE >></a></div>          
            </div> 
    </div>

</div>
		</td>
	</tr>
	<tr>
		<td colspan="2">
			<img src="images/index_07.jpg" width="950" height="348" alt=""></td>
	</tr>
	<tr>
		<td colspan="2" style="background:url(images/index_08.jpg) no-repeat; width:950px; height:523px;"> <table width="0" border="0">
		  <tr>
		    <td colspan="3" height="10">&nbsp;</td>
		    </tr>
		  <tr>
		    <td width="35">&nbsp;</td>
		    <td width="880" >
			<?php $_from = $this->_tpl_vars['comments']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['key'] => $this->_tpl_vars['comment']):
?>
				<div style='background:url(images/ly.jpg) no-repeat; width:879px; height:92px; margin-bottom:10px;'> 
					<div style=' padding:12px;'> 
						<?php echo $this->_tpl_vars['comment']['content']; ?>

					</div> 
					<div style='text-align:right;margin-right:10px;'> 
						---<?php echo $this->_tpl_vars['comment']['username']; ?>
 <?php echo $this->_tpl_vars['comment']['id']; ?>
¥ <?php echo $this->_tpl_vars['comment']['submit_time']; ?>

					</div>
				</div>
			<?php endforeach; endif; unset($_from); ?>
           <div id="color1" style="margin-left:820px;"><a href="<?php echo @BASE_URL; ?>
review.html" target="_blank">MORE >></a></div>
            <div><textarea name=""  rows="5" style="width:873px;"></textarea></div>   
            <div style="margin-left:730px; margin-top:10px;"><img src="images/ps.jpg" width="149" height="38" /></div>                        
            </td>
		    <td width="35">&nbsp;</td>
		    </tr>
		  <tr>
		    <td>&nbsp;</td>
		    <td>&nbsp;</td>
		    <td>&nbsp;</td>
		    </tr>
		  </table>
		</td>
	</tr>
</table>
<table width="950" height="172" border="0" style="background:url(images/index_09.jpg) no-repeat;">
  <tr>
    <td><div style="width:790px; height:110px; margin-left:80px; margin-right:80px; margin-top:40px;">
      <table width="0" border="0">
        <tr>
          <td><div id="color2"><img src="images/icon.png" width="10" height="10" /><a href="http://msn.yesky.com/a/11186520.shtml" target="_blank"> ��㴥����Ƶ��ʾ��������ȤQ5һ���������</a></div></td>
          <td><div id="color2" style="margin-left:30px;"><img src="images/icon.png" width="10" height="10" /><a href="http://aio.it168.com/a2010/0714/1077/000001077403.shtml" target="_blank"> ����˫�������ﺣ���»���ȤQ5ȫ������</a></div></td>
        </tr>
        <tr>
          <td><div id="color2"><img src="images/icon.png" width="10" height="10" /><a href="http://www.pcpop.com/doc/0/600/600620.shtml" target="_blank"> ����һ�� ���������Ĵ��������콡����������ϵ</a></div></td>
          <td><div id="color2" style="margin-left:30px;"><img src="images/icon.png" width="10" height="10" /><a href="http://www.pcpop.com/doc/0/592/592263.shtml" target="_blank"> ������� �»���Ѻ��񺣶���ȤQ5</a></div></td>
        </tr>
        <tr>
          <td><div id="color2"><img src="images/icon.png" width="10" height="10" /><a href="http://www.pcpop.com/doc/0/588/588717.shtml" target="_blank"> �Ҿ������µ��� һ����Գ��»������</a></div></td>
          <td><div id="color2" style="margin-left:30px;"><img src="images/icon.png" width="10" height="10" /><a href="http://article.pchome.net/content-1201473.html" target="_blank"> �����ؼ� һ�������ע��ɢ������</a></div></td>
        </tr>
        <tr>
          <td><div id="color2"><img src="images/icon.png" width="10" height="10" /><a href="http://www.pcpop.com/doc/0/572/572297.shtml" target="_blank"> ��ȤQ5��Q3������һ  ����һ���������</a></div></td>
          <td><div id="color2" style="margin-left:30px;"></div></td>
        </tr>
      </table>
    </div>
    </td>
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
  <area shape="rect" coords="571,257,824,356" href="join.html" target="_blank" />
</map>

<map name="Map2" id="Map2">
  <area shape="rect" coords="12,242,146,266" href="http://www.ehaier.com/product-7.html" target="_blank" />
  <area shape="rect" coords="76,395,244,437" href="http://www.liba.com/activity/signup.php?gid=1281" target="_blank" />
</map>

<map name="Map3" id="Map3">
  <area shape="rect" coords="38,32,596,375" href="http://www.ithaier.com/products/ProductIntro.aspx?TypeID=27&SeriesID=144&ContentID=1126" target="_blank" />
  <area shape="rect" coords="451,379,596,421" href="http://www.ithaier.com/templates/T_Contentlist/index.aspx?nodeid=81" target="_blank" />
</map>

<map name="Map4" id="Map4">
  <area shape="rect" coords="84,394,269,444" href="join.html" target="_blank" />
</map>
<!-- JiaThis Button BEGIN -->
<script type="text/javascript" src="http://v2.jiathis.com/code/jiathis_r.js?move=0&amp;btn=r1.gif" charset="utf-8"></script>
<!-- JiaThis Button END -->
</body>
</html>