<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>修改登录密钥</title>
<link href="<?=$this->template_file("admin/css.css")?>" rel="stylesheet" type="text/css">
<?=$this->SYSTEM_js("jquery-1.3.2.min.js")?>
<script language="javascript">
function check() {
    var admin_password = $.trim($("#admin_password").val());
    var admin_password2 = $.trim($("#admin_password2").val());
    if (admin_password == "")
    {
        $("#admin_password").focus();
        alert("请输入密钥");
        return false;
    }

    <?php if ($tmp["uid"] == 1) { ?>
    var admin_password3 = $.trim($("#admin_password3").val());
    var admin_password4 = $.trim($("#admin_password4").val());
    if (admin_password3 == "")
    {
        $("#admin_password3").focus();
        alert("请输入超级管理员密钥");
        return false;
    }

    <?php } ?>
    if (confirm("确定要修改登录密钥吗？"))
    {
        return true;
    }
    return false;
}
</script>
</head>

<body>
<div id="add">
<form action="" method="post" name="adminlogin_form" onsubmit="return check()">
    <table cellspacing="1" cellpadding="1" width="100%">
    <tr class="head">
    <td colspan="3">修改登录密钥</td>
    </tr>
    <tr>
    <td width="15%">填写密钥：</td>
    <td ><input type="password" name="admin_password" id="admin_password"></td>
    </tr>
    <tr>
    <td>确认密钥：</td>
    <td ><input type="password" name="admin_password2" id="admin_password2"></td>
    </tr>
    <?php if ($tmp["uid"] == 1) { ?>
    <tr>
    <td>超级管理员密钥：</td>
    <td ><input type="password" name="admin_password3" id="admin_password3"></td>
    </tr>
    <tr>
    <td>超级管理员确认密钥：</td>
    <td ><input type="password" name="admin_password4" id="admin_password4"></td>
    </tr>
    <?php } ?>
    <tr>
    <td colspan="3"><input type="submit" value="确定"></td>
    </tr>
    </table>
</form>
</div>
</body>
</html>