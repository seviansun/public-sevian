<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><?=SYSTEM_webname?>-管理后台</title>
<link href="<?=$this->template_file("admin/css.css")?>" rel="stylesheet" type="text/css">
<?=$this->SYSTEM_js("jquery-1.3.2.min.js")?>
</head>
<body>
<div id="add">
<table width="100%" height="100%" border="0" cellspacing="0" cellpadding="0">
  <tr><td colspan="5" style="background-color:#DDDDDD;">后台管理系统&nbsp;<a href="<?=$this->SYSTEM_path("admin/password")?>" target="main" style="color:#FF0000;font-weight:bold;">修改密码</a>&nbsp;<a href="<?=$this->SYSTEM_path("admin/logout")?>" target="_parent" style="color:#FF0000;font-weight:bold;">退出登录</a></td></tr>
  <tr><td colspan="5" style="height:5px;background-color:#696969;"></td></tr>
  <tr><td style="background-color:#696969;width:2px;"></td>
    <td width="180" valign="top" id="leftmenu" align="center"><iframe height="100%" width="100%" border="0" frameborder="0" name="left_menu" id="left_menu" src="<?=$this->SYSTEM_path("admin/menu")?>"></iframe></td>
    <td style="background-color:#696969;width:2px;"></td>
    <td valign="top" id="leftmenu2"><iframe height="100%" name="main" id="main" width="100%" border="0" frameborder="0" src="<?=SYSTEM_path?>admin/welcome"></iframe></td>  </tr>
</table>
</div>
<script language="javascript">
function setheight() {
    var heights = $(window).height()- 40;
    $("#leftmenu").height(heights);
    $("#leftmenu2").height(heights);
}
setheight()
$(window).resize(function (){setheight();});
</script>
</body>
</html>
