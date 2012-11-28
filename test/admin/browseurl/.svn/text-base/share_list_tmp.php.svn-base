<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>公共图库</title>
<link href="<?=$this->template_file("admin/css.css")?>" rel="stylesheet" type="text/css">
<?=$this->SYSTEM_js("jquery-1.3.2.min.js")?>
<script language="javascript">
function add(){
    window.location.href="<?=$this->SYSTEM_path("admin/browseurl/share_add")?>";
}
</script>
</head>
<body>
<div id="add">

<form name="form2" id="form2" method="post" action="" onSubmit="return check()">
  <table cellspacing="1" cellpadding="5" width="100%" style="margin:6px 0 0 0;">
  <tr class="head">
  <td width="12%">上传时间</td>
  <td width="12%">图片备注</td>
  <td width="50%">图片</td>
  <td>操作</td>
  </tr>
  <?php
  foreach ($tmp["list"]["info"] as $item) {
      ?>
      <tr sid="search_id" vid="<?=$item["id"]?>">
      <td><?=date("Y-m-d H:i", $item["timestamp"])?></td>
      <td><?=$item["title"]?></td>
      <td><img height="100" src="<?=SYSTEM_base_url.$item["name"]?>"></td>
      <td><a href="<?=$this->SYSTEM_path("admin/browseurl/share_update/{$item["id"]}")?>">编辑</a></td>
      </tr>
      <?php
  }
  ?>

<tr>
<td colspan="13"><input type="button" onclick="add()" value="添加新图片">&nbsp;
<?php echo "共{$tmp["list"]["nums"]}<span=\"#FF0000\">个</span>&nbsp;&nbsp;当前{$tmp["list"]["current_page"]}/{$tmp["list"]["pages"]}页"; ?>
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
<tr>
<td colspan="13">公共图库用于编辑器快速的编辑插入使用</td>
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