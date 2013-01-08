<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>修改个人密码</title>
<link href="<?=$this->template_file("admin/css.css")?>" rel="stylesheet" type="text/css">
<?=$this->SYSTEM_js("jquery-1.3.2.min.js")?>
<link href="<?=SYSTEM_base_url?>js/thickbox.css" rel="stylesheet" type="text/css" />
<script language="javascript" src="<?=SYSTEM_base_url?>js/thickbox-2010-02-26.js"></script>
<script language="javascript">
function check() {
    if ($.trim($("#pass1").val()) == "")
    {
        $("#pass1").focus();
        alert("请输入旧密码");
        return false;
    }
    if ($.trim($("#pass2").val()) == "")
    {
        $("#pass2").focus();
        alert("请输入新密码");
        return false;
    }
    if ($.trim($("#pass2").val()) != $.trim($("#pass3").val()))
    {
        $("#pass2").focus();
        alert("两次密码输入不一致");
        return false;
    }
    return true;
}
</script>
</head>

<body>
<div id="add">
<form action="" method="post" name="adminlogin_form" onsubmit="return check()">

    <table cellspacing="1" cellpadding="1" width="100%">
    <tr class="head">
    <td colspan="2">修改密码</td>
    </tr>
    <tr>
    <td width="10%">旧密码：</td>
    <td><input type="password" name="pass1" id="pass1"></td>
    </tr>
    <tr>
    <td width="10%">新密码：</td>
    <td><input type="password" name="pass2" id="pass2"></td>
    </tr>
    <tr>
    <td>重复新密码：</td>
    <td><input type="password" name="pass3" id="pass3"></td>
    </tr>
    <tr>
    <td colspan="2"><input type="submit" value="确定修改" ></td>
    </tr>
    </table>
</form>
</div>
</body>
</html>