<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>标签分类</title>
<link href="<?=$this->template_file("admin/css.css")?>" rel="stylesheet" type="text/css">
<?=$this->SYSTEM_js("jquery-1.3.2.min.js")?>
<?=$this->SYSTEM_js("jquery.datepick.pack.js")?>
<?=$this->SYSTEM_js("jquery.datepick-zh-CN.js")?>
<link href="<?=SYSTEM_base_url?>js/jquery.datepick.css" rel="stylesheet" type="text/css">
<script language="javascript">
function del(id) {
    if (confirm("确定要删除已经选择的标签分类吗？此步操作不可以恢复"))
    {
        $.ajax({
            url:"<?=$this->SYSTEM_path("admin/tag/group_del")?>",
                data:"group_id="+id,
                dataType:"html",
                type:"post",
                success:function (msg) {
                if (msg == "ok")
                {
                    window.location.reload();
                }
                else if (msg == "havekeyword")
                {
                    alert("分类里面有标签存在，删除失败");
                }
                else {
                    alert("未知错误删除失败");
                }
            }
        })
    }
}
function add() {
    window.location.href="<?=$this->SYSTEM_path("admin/tag/group_add")?>";
}
</script>
</head>
<body>
<div id="add">
<form name="form2" id="form2" method="post" action="" onSubmit="return check()">
  <table cellspacing="1" cellpadding="5" width="100%" style="margin:6px 0 0 0;">
   <tr>
  <td colspan="13" style="color:#FF0000;font-weight:bold;"><input type="button" value="添加分类" onclick="add()">&nbsp;当前：标签分类</td>
  </tr>
  <tr class="head">
  <td width="15%">ID</td>
  <td width="15%">分类名称</td>
  <td width="15%">时间</td>
  <td width="15%">标签数</td>
  <td></td>
  </tr>

  <?php
  if (is_array($tmp["info"]["info"])) {
  foreach ($tmp["info"]["info"] as $item) {
      ?>
  <tr sid="search_id" vid="<?=$item["id"]?>">
      <td><?=$item["id"]?></td>
      <td><?=$item["name"]?></td>
      <td><?=date("Y-m-d H:i:s", $item["timestamp"])?></td>
      <td><?=$item["keynums"]?></td>
      <td><a href="<?=$this->SYSTEM_path("admin/tag/group_update/{$item["id"]}/?backurl={$tmp["backurl"]}")?>">编辑</a>&nbsp;<input type="button" value="删除" onclick="del(<?=$item["id"]?>)"></td>
  </tr>
      <?php
  }
  }
  ?>
<tr>
<td colspan="13"><input type="button" value="添加分类" onclick="add()">&nbsp;
<?php echo "共{$tmp["info"]["nums"]}<span=\"#FF0000\">记录</span>&nbsp;&nbsp;当前{$tmp["info"]["current_page"]}/{$tmp["info"]["pages"]}页"; ?>
<?php if ($tmp["info"]["current_page"] != 1) { ?>
&nbsp;<a href="<?=$tmp["action_path"]."/1"?>">首页</a>&nbsp;<a href="<?=$tmp["action_path"]."/".$tmp["info"]["pre_page"]?>">上页</a>&nbsp;
<?php } ?>
<?php
for ($i = $tmp["info"]["spage"]; $i <= $tmp["info"]["epage"]; $i ++) {
    if ($i != $tmp["info"]["current_page"]) {
        echo "&nbsp;<a href=\"{$tmp["action_path"]}/{$i}\">{$i}</a>&nbsp;";
    }
    else {
        echo "&nbsp;{$i}&nbsp;";
    }
    ?>
<?php } ?>
<?php if ($tmp["info"]["current_page"] != $tmp["info"]["pages"]) { ?>
&nbsp;<a href="<?=$tmp["action_path"]."/".$tmp["info"]["next_page"]?>">下页</a>&nbsp;<a href="<?=$tmp["action_path"]."/".$tmp["info"]["pages"]?>">末页</a>
<?php } ?>
</td>
</tr>
  </table>
  </form>
</div>
<script language="javascript">
$("tr[sid=search_id]").hover(
 function(){var vid = $(this).attr("vid"); $("tr[vid="+vid+"] > td").css("background-color", "#DDDDDD")},
 function(){var vid = $(this).attr("vid"); $("tr[vid="+vid+"] > td").css("background-color", "#FFFFFF")}
);
//$("#date").datepick({dateFormat: 'yy-mm-dd'});
</script>
</body>
</html>