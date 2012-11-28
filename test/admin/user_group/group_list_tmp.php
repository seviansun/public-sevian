<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>角色管理</title>
<link href="<?=$this->template_file("admin/css.css")?>" rel="stylesheet" type="text/css">
<?=$this->SYSTEM_js("jquery-1.3.2.min.js")?>
<script language="javascript">
function del(id) {
    if (confirm("确定要删除这个角色吗？此步操作不可以恢复"))
    {
        $.ajax({
        url:'<?=$this->SYSTEM_path("admin/user_group/del")?>',
            data:'id='+id,
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
function clean() {
    if (confirm("开始整理各个角色的权限吗？\n在系统的维护和开发过程中，会产生很多已经废弃的权限记录，修改权限的标注\n大量无用的系统信息会导致系统效率降低\n通过此步整理就可以清除这些记录，加快系统的运行，\n并且同步权限的最新标注。"))
    {
        $.ajax({
        url:'<?=$this->SYSTEM_path("admin/user_group/clean")?>',
            data:'',
            dataType:'html',
            type:'post',
            success:function(msg) {
            if (msg == "ok")
            {
                alert("整理完毕");
                window.location.reload();
            }
            else {
                alert("整理失败");
            }
        }
        })
    }
}
function update(id) {
    window.location.href = '<?=$this->SYSTEM_path("admin/user_group/update/")?>'+id;
}
function access(id) {
    window.location.href = '<?=$this->SYSTEM_path("admin/user_group/access/")?>'+id;
}
function add() {
    window.location.href = '<?=$this->SYSTEM_path("admin/user_group/add")?>';
}
</script>
</head>
<body>
<div id="add">
<table  cellspacing="1" cellpadding="5" width="100%" >
<tr><td colspan="4">角色及角色权限管理<input type="button" onclick="clean()" value="权限整理">&nbsp;<input type="button" value="添加角色" onclick="add()"></td></tr>
<tr class="head">
<td width="10%">角色名</td>
<td width="10%">编码</td>
<td width="55%">权限</td>
<td>操作</td>
</tr>
<?php
foreach ($tmp["info"] as $item) {
    ?>
    <tr sid="search_id" vid="<?=$item["code"]?>">
    <td><?=$item["name"]?></td>
    <td><?=$item["code"]?></td>
    <td><?=$item["access_name"]?></td>
    <td><a href="<?=$this->SYSTEM_path("admin/user_group/user/{$item["id"]}")?>" target="_blank">用户</a>&nbsp;<input type="button" value="编辑" onclick="update(<?=$item["id"]?>)"><input type="button" value="组权限管理" onclick="access(<?=$item["id"]?>)"><?php if ($item["locked"] == 0) {?><input type="button" value="删除" onClick="del(<?=$item["id"]?>)"><?php } ?></td>
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