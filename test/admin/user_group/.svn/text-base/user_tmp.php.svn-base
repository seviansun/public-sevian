<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>角色管理</title>
<link href="<?=$this->template_file("admin/css.css")?>" rel="stylesheet" type="text/css">
<?=$this->SYSTEM_js("jquery-1.3.2.min.js")?>
<script language="javascript">

</script>
</head>
<body>
<div id="add">
<table  cellspacing="1" cellpadding="5" width="100%" >
<tr><td colspan="4">角色"<?=$tmp["info"]["name"]?>"</td></tr>
<tr class="head">
<td width="20%">用户</td>
<td width="15%">姓名</td>
<td>最后登录</td>
</tr>
<?php
foreach ($tmp["users"] as $item) {
    ?>
    <tr sid="search_id" vid="<?=$item["uid"]?>">
    <td><?=$item["username"]?></td>
    <td><?=$item["name"]?></td>
    <td><?=date("Y-m-d H:i", $item["lastlogintime"])?></td>
    </tr>
<?php
}
?>

</table>
<script language="javascript">
$("tr[sid=search_id]").hover(
 function(){var vid = $(this).attr("vid"); $("tr[vid="+vid+"] > td").css("background-color", "#DDDDDD")},
 function(){var vid = $(this).attr("vid"); $("tr[vid="+vid+"] > td").css("background-color", "#FFFFFF")}
);
</script>
</div>
</body>
</html>