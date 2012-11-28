<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>编辑角色</title>
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
function returnpath() {
    window.location.href = "<?=$this->SYSTEM_path("admin/user_group/list")?>";
}
</script>
</head>

<body>
<div id="add">
<form action="<?=$tmp["action_path"]?>" method="post" name="adminlogin_form" onsubmit="return check()">
    <table cellspacing="1" cellpadding="1" width="100%">
    <tr class="head">
    <td colspan="2">编辑</td>
    </tr>
    <tr>
    <td width="20%">角色名：</td>
    <td ><input type="text" name="name" id="name" value="<?=$tmp["info"]["name"]?>"></td>
    </tr>
    <tr>
    <td>编码：</td>
    <td><?=$tmp["info"]["code"]?></td>
    </tr>
    <tr><td colspan="2"><input type="submit" value="保存编辑"><input type="button" value="返回列表" onclick="returnpath()"></td></tr>
    </table>
</form>
</div>
</body>
</html>