<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>角色管理</title>
<link href="<?=$this->template_file("admin/css.css")?>" rel="stylesheet" type="text/css">
<?=$this->SYSTEM_js("jquery-1.3.2.min.js")?>
<script language="javascript">
function password(uid) {
    window.location.href = '<?=$this->SYSTEM_path("admin/user/password/")?>'+uid+'/<?=$tmp["current_page"]?>/<?=$tmp["return"]?>';
}
function del(uid) {
    if (confirm("确定要删除这个用户吗？此步操作不可以恢复"))
    {
        $.ajax({
        url:'<?=$this->SYSTEM_path("admin/user/del")?>',
            data:'uid='+uid,
            dataType:'html',
            type:'post',
            success:function(msg) {
            if (msg == "ok")
            {
                alert("删除完毕");
                window.location.reload();
            }
            else {
                alert("删除失败");
            }
        }
        })
    }
}

function update(id) {
    window.location.href = '<?=$this->SYSTEM_path("admin/user/update/")?>'+id+'/<?=$tmp["current_page"]?>/<?=$tmp["return"]?>';
}
</script>
</head>
<body>
<div id="add">
<table  cellspacing="1" cellpadding="5" width="100%" >

<tr class="head">
<td width="15%">角色名</td>
<td width="15%">权限</td>
<td>操作</td>
</tr>
<?php
foreach ($tmp["info"] as $item) {
    ?>
    <tr sid="search_id" vid="<?=$item["code"]?>">
    <td><?=$item["name"]?></td>
    <td><?=$item["access_name"]?></td>
    <td><input type="button" value="编辑" onclick="update(<?=$item["uid"]?>)"><input type="button" value="密码" onClick="password(<?=$item["uid"]?>)"><input type="button" value="删除" onClick="del(<?=$item["uid"]?>)"></td>
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