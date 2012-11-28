<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><?=SYSTEM_webname?>-登录</title>
<?=$this->SYSTEM_js("jquery-1.3.2.min.js")?>
<link href="<?=SYSTEM_base_url?>js/thickbox.css" rel="stylesheet" type="text/css" />
<script language="javascript" src="<?=SYSTEM_base_url?>js/thickbox-2010-02-26.js"></script>
<link href="<?=$this->template_file("admin/css.css")?>" rel="stylesheet" type="text/css">
<script type="text/javascript">
function check() {
	if($("#username").val() == '') {
	   alert('请写用户名');
       $("#username").focus();
       return false;
	}
    else if($("#password").val() == '') {
	   alert('请写密码');
       $("#password").focus();
       return false;
	}
    info_show();
    return true;
}
function info_show() {
    boxmessage_message("<div>登录处理中，请稍候</div>", 300, 100);
}
</script>
<style type="text/css">
<!--
body {margin:0px;overflow:hidden;}
.style3 {color: #528311; font-size: 12px; }
.style4 {color: #42870a;font-size: 12px;}
-->
</style></head>

<body>
<div id="add">
<form action="<?=$tmp["action_path"]?>" method="post" name="adminlogin_form" onsubmit="return check()">

<table width="400" border="0" cellpadding="1" cellspacing="1" align="center" style="margin:10% auto">
  <tr class="head">
    <td colspan="10" align="center"><?=SYSTEM_webname?>-后台登录</td>
  </tr>
  <tr>
    <td width="30%">用户名：</td>
    <td><input type="text" name="username" id="username" ></td>
  </tr>
  <tr>
    <td >密码：</td>
    <td><input type="password" name="password" id="password" ></td>
  </tr>
  <tr>
    <td bgcolor="#FFFFFF" colspan="10" align="center"><input type="submit" value="登录">&nbsp;&nbsp;<input type="reset" value="重设"></td>
  </tr>
</table>
</form>
</div>
</body>
</html>
