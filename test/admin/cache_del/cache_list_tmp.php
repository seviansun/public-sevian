<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>缓存清理</title>
<link href="<?=$this->template_file("admin/css.css")?>" rel="stylesheet" type="text/css">
<?=$this->SYSTEM_js("jquery-1.3.2.min.js")?>
<script language="javascript">

function checkboxall(){
	$("input[type=checkbox]").attr("checked",'true');
}
function check() {
    if (confirm("确定要删除缓存吗？"))
    {
        return true;
    }
    return false;
}
</script>
</head>
<body>
<div id="add">
<form name="form1" method="post" action="" onSubmit="return check()">
<input type="hidden" value="1" name="group0000sd">
<table cellspacing="1" cellpadding="5" width="100%" >
<tr class="head">
<td width="20%">表名称</td>
<td>缓存数量</td>
</tr>
<?php foreach ($tmp["output"] as $item) { ?>
<tr>
    <td><?=$item["name"]?></td>
    <td><?=$item["nums"]?></td>
</tr>
<?php } ?>
<tr>
    <td colspan="2">一共有<?=$tmp["nums"]?>个缓存&nbsp;&nbsp;<input type="submit" value="开始清理"></td>
</tr>
</table>
</form>
</div>
</body>
</html>