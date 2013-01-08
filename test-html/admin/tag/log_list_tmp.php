<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title><?=$tmp["page_name"]?></title>
<link href="<?=$this->template_file("admin/css.css")?>" rel="stylesheet" type="text/css">
<?=$this->SYSTEM_js("jquery-1.3.2.min.js")?>
<?=$this->SYSTEM_js("jquery.datepick.pack.js")?>
<?=$this->SYSTEM_js("jquery.datepick-zh-CN.js")?>
<link href="<?=SYSTEM_base_url?>js/jquery.datepick.css" rel="stylesheet" type="text/css">
<link href="<?=SYSTEM_base_url?>js/thickbox.css" rel="stylesheet" type="text/css" />
<script language="javascript" src="<?=SYSTEM_base_url?>js/thickbox-2010-02-26.js"></script>
<script language="javascript">
//转换为日期对象好比较
function setdate(year,month, day) {
    var d = new Date()
    d.setFullYear(year)
    d.setMonth(month);
    d.setDate(day);
    return d;
}

function change_status_message(id, name) {
    var htmls = "<table style=\"width:100%;\"><tr><td>"+name+"备注：<input type=\"text\" name=\"description\" id=\"description\"></td></tr><tr><td style=\"text-align:center;\"><input type=\"button\" value=\"确定\" onclick=\"change_status("+id+")\"><input type=\"button\" value=\"取消\" onclick=\"boxmessage_remove()\"></td></tr></table>";
    boxmessage_message(htmls, 300, 100);
}
function add() {
    window.location.href="<?=$this->SYSTEM_path("admin/tag/add")?>";
}
</script>
</head>
<body>
<div id="add">
  <table cellspacing="1" cellpadding="5" width="100%" style="margin:6px 0 0 0;">
   <tr>
  <td colspan="13" style="color:#FF0000;font-weight:bold;">&nbsp;当前：<?=$tmp["page_name"]?></td>
  </tr>
  <tr class="head">
  <td width="5%">ID</td>
  <td width="10%">tag_id</td>
  <td width="15%">创建日期</td>
  <td>备注内容</td>
  </tr>

  <?php
  if (is_array($tmp["info"]["info"])) {
  foreach ($tmp["info"]["info"] as $item) {
      ?>
  <tr sid="search_id" vid="<?=$item["id"]?>">
      <td><?=$item["id"]?></td>
      <td><?=$item["tag_id"]?></td>
      <td><?=date("Y-m-d H:i", $item["timestamp"])?></td>
      <td><?=$item["description"]?></td>
  </tr>
      <?php
  }
  }
  ?>
<tr>
<td colspan="13">
<?php echo "共{$tmp["info"]["nums"]}<span=\"#FF0000\">个日志</span>&nbsp;&nbsp;当前{$tmp["info"]["current_page"]}/{$tmp["info"]["pages"]}页"; ?>
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

</div>
<script language="javascript">
$("tr[sid=search_id]").hover(
 function(){var vid = $(this).attr("vid"); $("tr[vid="+vid+"] > td").css("background-color", "#DDDDDD")},
 function(){var vid = $(this).attr("vid"); $("tr[vid="+vid+"] > td").css("background-color", "#FFFFFF")}
);
</script>
</body>
</html>