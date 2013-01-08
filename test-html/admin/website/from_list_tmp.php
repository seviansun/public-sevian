<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>来源一览</title>
<link href="<?=$this->template_file("admin/css.css")?>" rel="stylesheet" type="text/css">
<?=$this->SYSTEM_js("jquery-1.3.2.min.js")?>
<script language="javascript">
function del() {
    if (confirm("确定要删除吗？"))
    {
        $.ajax({
            url:'<?=$this->SYSTEM_path("admin/website/from_delete/")?>',
                data:'',
                dataType:'html',
                type:'post',
                success:function(msg) {
                if (msg == "ok")
                {
                    window.location.reload();
                }
                else {
                    alert("删除失败");
                }
            }
        })
    }
}
function keyword_list(id) {
    window.location.href="<?=$tmp["keyword_path"]?>"+id;
}
</script>
</head>
<body>
<div id="add">
<form name="form2" id="form2" method="post" action="" onSubmit="return check()">
  <table cellspacing="1" cellpadding="5" width="100%" style="margin:6px 0 0 0;">
   <tr>
  <td colspan="13" style="color:#FF0000;font-weight:bold;">当前：来源一览&nbsp;<input value="删除60天前的记录" type="button" onclick="del()"></td>
  </tr>
  <tr class="head">
  <td width="15%">域名</td>
  <td width="30%">URL</td>
  <td width="13%">添加时间</td>
  <td>IP</td>
  </tr>
  <?php
  foreach ($tmp["list"]["info"] as $key => $item) {
      ?>
      <tr sid="search_id" vid="<?=$item["id"]?>">
      <td><?=$item["hostname"]?></td>
      <td><span style="color:#ff0000">来源：</span><?=$item["url"]?><br><span style="color:#ff0000">受访：</span><?=$item["visit_path"]?></td>
      <td><?=date("Y-m-d H:i", $item["timestamp"])?></td>
      <td><?=$item["ip"]?></td>
      </tr>
      <?php
  }
  ?>

<tr>
<td colspan="13">
<?php echo "共{$tmp["list"]["nums"]}<span=\"#FF0000\">个记录</span>&nbsp;&nbsp;当前{$tmp["list"]["current_page"]}/{$tmp["list"]["pages"]}页"; ?>
<?php if ($tmp["list"]["current_page"] != 1) { ?>
&nbsp;<a href="<?=$tmp["action_path"]."/1"?>">首页</a>&nbsp;<a href="<?=$tmp["action_path"]."/".$tmp["list"]["pre_page"]?>">上页</a>&nbsp;
<?php } ?>
<?php
for ($i = $tmp["list"]["spage"]; $i <= $tmp["list"]["epage"]; $i ++) {
    if ($i != $tmp["list"]["current_page"]) {
        echo "&nbsp;<a href=\"{$tmp["action_path"]}/{$i}\">{$i}</a>&nbsp;";
    }
    else {
        echo "&nbsp;{$i}&nbsp;";
    }
    ?>
<?php } ?>
<?php if ($tmp["list"]["current_page"] != $tmp["list"]["pages"]) { ?>
&nbsp;<a href="<?=$tmp["action_path"]."/".$tmp["list"]["next_page"]?>">下页</a>&nbsp;<a href="<?=$tmp["action_path"]."/".$tmp["list"]["pages"]?>">末页</a>
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
</script>
</body>
</html>