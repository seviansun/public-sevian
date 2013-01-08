<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>添加角色</title>
<link href="<?=$this->template_file("admin/css.css")?>" rel="stylesheet" type="text/css">
<?=$this->SYSTEM_js("jquery-1.3.2.min.js")?>
<script language="javascript">
function check() {
    if ($("#name").val() == "")
    {
        $("#name").focus();
        alert("请输入角色名");
        return false;
    }
    return true;
}
</script>
</head>

<body>
<div id="add">
<form action="<?=$tmp["action_path"]?>" method="post" name="adminlogin_form" onsubmit="return check()">
    <table cellspacing="1" cellpadding="1" width="100%">
    <tr class="head">
    <td colspan="3">新加角色</td>
    </tr>
    <tr>
    <td width="25%">角色名：</td>
    <td colspan="2"><input type="text" name="name" id="name" value="<?=$tmp["info"]["name"]?>"></td>
    </tr>
    <tr>
    <td width="25%">编码：</td>
    <td width="45%"><input type="text" name="code" id="code" value="<?=$tmp["info"]["code"]?>">(字母和数字组成)</td>
    <td width="30%"><input type="submit"  value="<?=$tmp["button_name"]?>"></td>
    </tr>
    </table>
</form>
</div>
</body>
</html>