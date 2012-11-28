<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>所有来访统计</title>
<link href="<?=$this->template_file("admin/css.css")?>" rel="stylesheet" type="text/css">
<?=$this->SYSTEM_js("jquery-1.3.2.min.js")?>
<?=$this->SYSTEM_js("jquery.datepick.pack.js")?>
<?=$this->SYSTEM_js("jquery.datepick-zh-CN.js")?>
<link href="<?=SYSTEM_base_url?>js/jquery.datepick.css" rel="stylesheet" type="text/css">
<script language="javascript">
function check() {
    var date = $.trim($("#date").val());
    if (date == "")
    {
        $("#date").focus();
        return false;
    }
    return true;
}
</script>
</head>
<body>
<div id="add">
<form name="form2" id="form2" method="post" action="" onSubmit="return check()">
  <table cellspacing="1" cellpadding="5" width="100%" style="margin:6px 0 0 0;">
   <tr>
  <td colspan="13" style="color:#FF0000;font-weight:bold;">日期：<input type="text" id="date" name="date" style="width:120px" value="<?=$tmp["day"]?>"><input type="submit" value="搜索"></td>
  </tr>
   <tr>
  <td colspan="13" style="color:#FF0000;font-weight:bold;">当前：所有记录</td>
  </tr>
  <tr class="head">
  <td width="15%">域名</td>
  <td width="10%">日期</td>
  <td width="10%">独立IP数目</td>
  <td width="10%">来访链接</td>
  <td>总共来访</td>
  </tr>

  <?php
  if (is_array($tmp["info"]["info"])) {
  foreach ($tmp["info"]["info"] as $item) {
      ?>
  <tr sid="search_id" vid="<?=$item["id"]?>">
      <td><?=$item["domain"]?></td>
      <td><?=$item["days"]?></td>
      <td><?=$item["ip"]?></td>
      <td><?=$item["url"]?></td>
      <td><?=$item["nums"]?></td>
  </tr>
      <?php
  }
  }
  ?>
<tr>
<td colspan="13">
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
$("#date").datepick({dateFormat: 'yy-mm-dd'});
</script>
</body>
</html>