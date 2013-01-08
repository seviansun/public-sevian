<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>缓存清理</title>
<link href="<?=$this->template_file("admin/css.css")?>" rel="stylesheet" type="text/css">
<?=$this->SYSTEM_js("jquery-1.3.2.min.js")?>
<script language="javascript">
function check() {
    var nums = 0;
    $("input[type=checkbox]").each(function(i) {
        if ($(this).attr("checked") == true)
        {
            nums = 1;
        }
    });
    if (nums == 0)
    {
        alert("请选择你要清理的缓存");
        return false;
    }
    return true;
}
function checkboxall(){
	$("input[type=checkbox]").attr("checked",'true');
}
</script>
</head>
<body>
<div id="add">
<form name="form1" method="post" action="" onSubmit="return check()">
<table cellspacing="1" cellpadding="5" width="100%" >
<tr class="head">
<td width="5%">选择</td>
<td>序列名称</td>
</tr>
<tr>
    <td><input type="checkbox" value="1" name="group[]"></td>
    <td>一级目录的左边目录菜单</td>
</tr>
<tr>
    <td><input type="checkbox" value="2" name="group[]"></td>
    <td>左边主目录菜单</td>
</tr>
<tr>
    <td colspan="2"><a href="#" onClick="checkboxall();">全选</a>&nbsp;一共有<?=$tmp["nums"]?>个block缓存&nbsp;&nbsp;<input type="submit" value="开始清理"></td>
</tr>
</table>
</form>
</div>
</body>
</html>