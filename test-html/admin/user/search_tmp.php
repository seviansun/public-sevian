<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>查找用户</title>
<link href="<?=$this->template_file("admin/css.css")?>" rel="stylesheet" type="text/css">
<?=$this->SYSTEM_js("jquery-1.3.2.min.js")?>
<script language="javascript">
function check() {
    if ($("#keyword").val() == "")
    {
        $("#keyword").focus();
        alert("请输入用户名");
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
    <td colspan="2">查找用户</td>
    </tr>
    <tr>
    <td width="25%">用户名：</td>
    <td><input type="text" name="keyword" id="keyword"><input type="submit" value="开始查找"></td>
    </tr>
    </table>
</form>
</div>
</body>
</html>