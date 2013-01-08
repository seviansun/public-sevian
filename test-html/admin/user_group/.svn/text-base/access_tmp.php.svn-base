<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>编辑角色</title>
<link href="<?=$this->template_file("admin/css.css")?>" rel="stylesheet" type="text/css">
<?=$this->SYSTEM_js("jquery-1.3.2.min.js")?>
<script language="javascript">
function returnpath() {
    window.location.href = "<?=$this->SYSTEM_path("admin/user_group/list")?>";
}
</script>
</head>
<body>
<div id="add">
<form action="<?=$tmp["action_path"]?>" method="post" name="adminlogin_form">
    <table cellspacing="1" cellpadding="1" width="100%">
    <tr class="head">
    <td colspan="3">编辑</td>
    </tr>
    <tr>
    <td width="25%">角色名：</td>
    <td colspan="2"><?=$tmp["info"]["name"]?></td>
    </tr>
    <tr>
    <td>权限</td>
    <td >
    <?php foreach ($tmp["access"] as $key => $item) {?>
    <input type="checkbox" name="post_access[]" value="<?=$key?>" <?=$item["checked"]?>><?=$item["name"]?><br />
    <?php } ?>
    </td>
    </tr>
    <tr>
    <td colspan="3"><input type="submit"  value="保存编辑"><input type="button" value="返回列表" onclick="returnpath()"></td>
    </tr>
    </table>
</form>
</div>
</body>
</html>