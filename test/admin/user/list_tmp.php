<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>用户管理</title>
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
                alert("用户删除完毕");
                window.location.href = window.location.href;
            }
        }
        })
    }
}
function add() {
    window.location.href = '<?=$this->SYSTEM_path("admin/user/add")?>';
}
function update(id) {
    window.location.href = '<?=$this->SYSTEM_path("admin/user/update/")?>'+id+"?backurl=<?=$tmp["backurl"]?>";
}
</script>
</head>
<body>
<div id="add">
<form name="form2" id="form2" method="post" action="" onSubmit="return check()">
  <table cellspacing="1" cellpadding="5" width="100%" style="margin:6px 0 0 0;">
  <tr>
  <td>用户名</td>
  <td><input type="text" name="username" value="<?=$tmp["username"]?>"></td>
  </tr>
  <tr>
  <td>姓名</td>
  <td><input type="text" name="name" value="<?=$tmp["name"]?>"></td>
  </tr>
  <tr>
  <td>角色</td>
  <td><?php foreach ($tmp["group"] as $item) { ?><input type="checkbox" name="group[]" value="<?=$item["id"]?>" <?php if (in_array($item["id"], $tmp["group_search"])) { ?>checked<?php } ?>><?=$item["name"]?>&nbsp;<?php } ?></td>
  </tr>
   <tr>
  <td colspan="13"><input type="submit" value="搜索"></td>
  </tr>
  </table>
</form>
<table  cellspacing="1" cellpadding="5" width="100%" >
<tr><td colspan="15" style="color:#FF0000;">用户列表&nbsp;&nbsp;<input type="button" value="添加用户" onclick="add()"></td></tr>
<tr class="head">
<td width="15%">用户名</td>
<td width="12%">姓名</td>
<td width="12%">角色</td>
<td width="12%">注册时间</td>
<td width="12%">最近登录</td>
<td width="8%">禁止登录</td>
<td>操作</td>
</tr>
<?php
foreach ($tmp["info"]["info"] as $item) {
    ?>
    <tr sid="search_id" vid="<?=$item["uid"]?>">
    <td><?=$item["username"]?></td>
    <td><?=$item["name"]?></td>
    <td><?=$item["access_name"]?></td>
    <td><?=date("Y-m-d H:i",$item["registetime"])?></td>
    <td><?=date("Y-m-d H:i",$item["lastlogintime"])?></td>
    <td><?php if ($item["locked"]) { echo "是";} else {echo "否";} ?></td>
    <td><input type="button" value="账号编辑" onclick="update(<?=$item["uid"]?>)"><input type="button" value="密码" onClick="password(<?=$item["uid"]?>)"><input type="button" value="删除" onClick="del(<?=$item["uid"]?>)"></td>
    </tr>
<?php
}
?>
<tr><td colspan="10">
<?php
echo "共{$tmp["info"]["nums"]}条记录&nbsp;当前{$tmp["info"]["current_page"]}页";
?>
<a href="<?=$tmp["action_path"]?>1">第一页</a>
<?php
for ($i = $tmp["info"]["spage"]; $i <= $tmp["info"]["epage"]; $i ++) {
    if ($i == $tmp["info"]["current_page"]) {
        echo "&nbsp;{$i}&nbsp;";
    }
    else {
        echo "&nbsp;<a href=\"{$tmp["action_path"]}{$i}\">{$i}</a>&nbsp;";
    }
}
?>
<a href="<?=$tmp["action_path"].$tmp["info"]["pages"]?>">最后一页</a>
</td></tr>
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