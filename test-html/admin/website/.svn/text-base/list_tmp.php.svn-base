<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>所有记录</title>
<link href="<?=$this->template_file("admin/css.css")?>" rel="stylesheet" type="text/css">
<?=$this->SYSTEM_js("jquery-1.3.2.min.js")?>
<?=$this->SYSTEM_js("jquery.datepick.pack.js")?>
<?=$this->SYSTEM_js("jquery.datepick-zh-CN.js")?>
<link href="<?=SYSTEM_base_url?>js/jquery.datepick.css" rel="stylesheet" type="text/css">
<script language="javascript">
function check() {
    var date = $.trim($("#keyword").val());
    if (date == "")
    {
        $("#keyword").focus();
        return false;
    }
    return true;
}
function del() {
    if (confirm("确定要删除吗？删除将不能恢复"))
    {
        $.ajax({
            url:"<?=$this->SYSTEM_path("admin/website/clear1")?>",
                dataType:"html",
                data:"",
                type:"post",
                success:function (msg) {
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
</script>
</head>
<body>
<div id="add">
<form name="form2" id="form2" method="post" action="" onSubmit="return check()">
  <table cellspacing="1" cellpadding="5" width="100%" style="margin:6px 0 0 0;">
   <tr>
  <td colspan="13" style="color:#FF0000;font-weight:bold;">关键词：<input type="text" id="keyword" name="keyword" style="width:120px" value="<?=$tmp["keyword"]?>">&nbsp;搜索依据：<select name="types" id="types"><option value="2" <?php if ($tmp["types"] == 2) { ?>selected<?php } ?>>路径</option><option value="1" <?php if ($tmp["types"] == 1) { ?>selected<?php } ?>>sql次数</option><option value="3" <?php if ($tmp["types"] == 3) { ?>selected<?php } ?>>花费时间</option></select>&nbsp;<input type="submit" value="搜索">&nbsp;<input value="删除2天前的记录" type="button" onclick="del()"></td>
  </tr>
   <tr>
  <td colspan="13" style="color:#FF0000;font-weight:bold;">当前：所有记录</td>
  </tr>
  <tr class="head">
  <td width="45%">路径</td>
  <td width="10%">花费时间</td>
  <td width="10%">总查询</td>
  <td width="10%">block查询</td>
  <td >发生时间</td>
  </tr>

  <?php
  if (is_array($tmp["info"]["info"])) {
  foreach ($tmp["info"]["info"] as $item) {
      ?>
  <tr sid="search_id" vid="<?=$item["id"]?>">
      <td><?=$item["path"]?></td>
      <td><?=$item["querytime"]?></td>
      <td><?=$item["nums"]?></td>
      <td><?=$item["block_nums"]?></td>
      <td><?=date("Y-m-d H:i:s", $item["timestamp"])?></td>
  </tr>
      <?php
  }
  }
  ?>

<tr>
<td colspan="13">
<?php echo "共{$tmp["info"]["nums"]}<span=\"#FF0000\">记录</span>&nbsp;&nbsp;当前{$tmp["info"]["current_page"]}/{$tmp["info"]["pages"]}页"; ?>
<?php if ($tmp["info"]["current_page"] != 1) { ?>
&nbsp;<a href="<?=$tmp["action_path"]."/1?keyword={$tmp["keyword"]}"?>">首页</a>&nbsp;<a href="<?=$tmp["action_path"]."/".$tmp["info"]["pre_page"]."?keyword={$tmp["keyword"]}"?>">上页</a>&nbsp;
<?php } ?>
<?php
for ($i = $tmp["info"]["spage"]; $i <= $tmp["info"]["epage"]; $i ++) {
    if ($i != $tmp["info"]["current_page"]) {
        echo "&nbsp;<a href=\"{$tmp["action_path"]}/{$i}?keyword={$tmp["keyword"]}\">{$i}</a>&nbsp;";
    }
    else {
        echo "&nbsp;{$i}&nbsp;";
    }
    ?>
<?php } ?>
<?php if ($tmp["info"]["current_page"] != $tmp["info"]["pages"]) { ?>
&nbsp;<a href="<?=$tmp["action_path"]."/".$tmp["info"]["next_page"]."?keyword={$tmp["keyword"]}"?>">下页</a>&nbsp;<a href="<?=$tmp["action_path"]."/".$tmp["info"]["pages"]."?keyword={$tmp["keyword"]}"?>">末页</a>
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