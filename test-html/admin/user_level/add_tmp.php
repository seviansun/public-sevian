<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>添加账户</title>
<link href="<?=$this->template_file("admin/css.css")?>" rel="stylesheet" type="text/css">
<?=$this->SYSTEM_js("jquery-1.3.2.min.js")?>
<script language="javascript">
function check() {
    if ($("#username").val() == "")
    {
        $("#username").focus();
        alert("请输入账号");
        return false;
    }
    if (confirm("确实要对这些用户进行升级吗？"))
    {
        return true;
    }
    return false;
}
</script>
</head>

<body>
<div id="add">
<form action="<?=$tmp["action_path"]?>" method="post" name="adminlogin_form" onsubmit="return check()">
    <table cellspacing="1" cellpadding="1" width="100%">
    <tr class="head">
    <td colspan="3">升级会员等级</td>
    </tr>
    <tr>
    <td width="15%">填写帐号：</td>
    <td><textarea name="username" id="username" style="width:300px; height:300px;"></textarea>(用户名一行一个)</td>
    </tr>
    <tr><td>会员级别</td>
    <td>
    <?php foreach ($tmp["levels"] as $key => $item) {
        if ($key == 0 ) {
            continue;
        }
        if ($key == 3 && date("Y-m-d") != "2011-06-07") {
            //continue;
        }
        ?>
    <input type="radio" name="user_level" value="<?=$key?>" <?php if ($key == 4) { echo "checked";} ?>><?=$item?>
    <?php } ?>
    </td>
    </tr>
    <tr><td>类型</td><td><input type="radio" name="types" value="0" checked>升级账户<input type="radio" name="types" value="1">更加实际消费进行会员等级的保级操作(会员级别会有升有降，铂金会员也会被更新)</td></tr>
    <tr><td colspan="10"><input type="submit" value="确定升级"></td></tr>
    </table>
</form>
</div>
</body>
</html>