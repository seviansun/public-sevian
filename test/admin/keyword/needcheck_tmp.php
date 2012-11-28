<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title><?=$tmp["page_name"]?></title>
<link href="<?=$this->template_file("admin/css.css")?>" rel="stylesheet" type="text/css">
<?=$this->SYSTEM_js("jquery-1.3.2.min.js")?>
<?=$this->SYSTEM_js("jquery.datepick.pack.js")?>
<?=$this->SYSTEM_js("jquery.datepick-zh-CN.js")?>
<link href="<?=SYSTEM_base_url?>js/jquery.datepick.css" rel="stylesheet" type="text/css">
<script language="javascript">
function check() {
    var nums = 0;
    $("input[types=sss]").each(function(i) {
        if ($(this).attr("checked") == true)
        {
            nums = 1;
        }
    })
        if (nums == 0)
        {
        alert("请选择要标记的关键词");
        return false;
        }
    if (confirm("确定要标记已经选择的关键词吗？"))
    {
        return true;
    }
    return false;
}
function goto_types(){
    var types = $.trim($("#types").val());
    window.location.href="<?=$this->SYSTEM_path("admin/keyword/needcheck/")?>"+types;
}
</script>
</head>
<body>
<div id="add">
<form name="form2" id="form2" method="post" action="" onSubmit="return check()">
  <table cellspacing="1" cellpadding="5" width="100%" style="margin:6px 0 0 0;">
   <tr>
  <td colspan="13" style="color:#FF0000;font-weight:bold;">当前：<?=$tmp["page_name"]?>&nbsp;<select name="types" id="types" onchange="goto_types()"><option value="0" <?php if ($tmp["type"] == 0) { ?>selected<?php }?>>待处理的变更关键词</option><option value="1" <?php if ($tmp["type"] == 1) { ?>selected<?php }?>>已处理的变更关键词</option></select></td>
  </tr>
  <tr class="head">
  <?php if ($tmp["type"] == 0) { ?>
  <td width="10%">选择</td>
  <?php } ?>
  <td width="15%">ID</td>
  <td width="15%">名称</td>
  <td width="15%">时间</td>
  <td width="15%">关键词组</td>
  <td></td>
  </tr>

  <?php
  if (is_array($tmp["info"]["info"])) {
  foreach ($tmp["info"]["info"] as $item) {
      ?>
  <tr sid="search_id" vid="<?=$item["id"]?>">
      <?php if ($tmp["type"] == 0) { ?><td><input type="checkbox" value="<?=$item["id"]?>" name="keywords[]" types="sss"></td><?php } ?>
      <td><?=$item["id"]?></td>
      <td><?=$item["keyword"]?></td>
      <td><?=date("Y-m-d H:i:s", $item["timestamp"])?></td>
      <td><?=$item["group_name"]?></td>
      <td><a href="<?=$this->SYSTEM_path("admin/keyword/keyword_update/{$item["id"]}/?backurl={$tmp["backurl"]}")?>">编辑</a>&nbsp;<input type="button" value="删除" onclick="del(<?=$item["id"]?>)"></td>
  </tr>
      <?php
  }
  }
  ?>
  <?php if ($tmp["type"] == 0) { ?>
<tr>
<td colspan="13"><input type="submit" value="标记为已处理"></td>
</tr>
<?php } ?>
<tr>
<td colspan="13">
<?php echo "共{$tmp["info"]["nums"]}<span=\"#FF0000\">关键词</span>&nbsp;&nbsp;当前{$tmp["info"]["current_page"]}/{$tmp["info"]["pages"]}页"; ?>
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