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
    $("input[type=checkbox][idname=category]").each(function(i) {
        if ($(this).attr("checked") == true)
        {
            nums = 1;
        }
    })
    if (nums == 0)
    {
        alert("请选择要编辑的参数");
        return false;
    }
    if (confirm("确定要保存当前的编辑数据吗？"))
    {
        return true;
    }
    return false;
}
function all(){
    $("input[type=checkbox][idname=category]").each(function(i) {
        $(this).attr("checked",true);
    })
}
function all1(){
    $("input[type=checkbox][idname=category]").each(function(i) {
        if ($(this).attr("checked") == true)
        {
            $(this).attr("checked",false);
        }
        else {
            $(this).attr("checked",true);
        }
    })
}
</script>
</head>
<body>
<div id="add">
<form name="form2" id="form2" method="post" action="" onSubmit="return check()">
  <table cellspacing="1" cellpadding="5" width="100%" style="margin:6px 0 0 0;">
  <tr class="head">
  <td width="5%">选择</td>
  <td width="5%">ID</td>
  <td width="15%">品类名称</td>
  <td width="15%">最低竞拍价</td>
  <td width="15%">最低竞价准备金额</td>
  <td >竞价商家上限</td>
  </tr>

  <?php
  if (is_array($tmp["info"]["info"])) {
  foreach ($tmp["info"]["info"] as $item) {
      ?>
  <tr sid="search_id" vid="<?=$item["id"]?>">
      <td><input type="checkbox" idname="category" name="category[<?=$item["id"]?>]" value="<?=$item["id"]?>"></td>
      <td><?=$item["id"]?></td>
      <td><?=$item["name"]?></td>
      <td><input style="width:80px" type="text" name="store_price[<?=$item["id"]?>]" id="store_price_<?=$item["id"]?>" value="<?=$item["store_price"]?>"></td>
      <td><input style="width:80px" type="text" name="min_total[<?=$item["id"]?>]" id="min_total_<?=$item["id"]?>" value="<?=$item["min_total"]?>"></td>
      <td><input style="width:80px" type="text" name="store_max[<?=$item["id"]?>]" id="store_max_<?=$item["id"]?>" value="<?=$item["store_max"]?>"></td>
  </tr>
      <?php
  }
  }
  ?>
<tr>
<td colspan="13"><a href="javascript:all()">全选</a>&nbsp;<a href="javascript:all1()">反选</a>&nbsp;<input type="submit" name="submit" value="保存编辑"></td>
</tr>
<tr>
<td colspan="13">
<?php echo "共{$tmp["info"]["nums"]}<span=\"#FF0000\">品类</span>&nbsp;&nbsp;当前{$tmp["info"]["current_page"]}/{$tmp["info"]["pages"]}页"; ?>
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
