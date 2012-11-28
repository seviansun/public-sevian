<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>粉丝推送点击明细</title>
<link href="<?=$this->template_file("admin/css.css")?>" rel="stylesheet" type="text/css">
<?=$this->SYSTEM_js("jquery-1.3.2.min.js")?>
<?=$this->SYSTEM_js("jquery.datepick.pack.js")?>
<?=$this->SYSTEM_js("jquery.datepick-zh-CN.js")?>
<link href="<?=SYSTEM_base_url?>js/jquery.datepick.css" rel="stylesheet" type="text/css">
<script language="javascript">
function setdate(year,month, day) {
    var d = new Date()
    d.setFullYear(year)
    d.setMonth(month);
    d.setDate(day);
    return d;
}
function check() {
    var time1 = $("#time1").val();
    var time2 = $("#time2").val();
    if (time1 == "")
    {
        $("#time1").focus();
        return false;
    }
    if (time2 == "")
    {
        $("#time2").focus();
        return false;
    }
    var time1_x = time1.split("-");
    var d1 = setdate(time1_x[0],time1_x[1], time1_x[2]);
    var time2_x = time2.split("-");
    var d2 = setdate(time2_x[0],time2_x[1], time2_x[2]);
    if (d1 > d2)
    {
        alert("有效时间的开始时间不能大于有效时间的结束时间，请重新设置");
        return false;
    }
    return true;
}
function report_download(){
    var data1 = $.trim($("#time1").val());
    var data2 = $.trim($("#time2").val());
    var category_id = $.trim($("#category_id").val());
    var store_id = $.trim($("#store_id").val());
    window.location.href="<?=$this->SYSTEM_path("admin/count/report6_download/")?>"+category_id+"/"+store_id+"/"+data1+"/"+data2;
}
</script>
</head>
<body>
<div id="add">
<form name="form2" id="form2" method="post" action="" onSubmit="return check()">
  <table cellspacing="1" cellpadding="5" width="100%" style="margin:6px 0 0 0;">
   <tr>
  <td colspan="13" style="color:#FF0000;font-weight:bold;">当前：粉丝推送点击明细</td>
  </tr>
  <tr>
  <td colspan="11"><form name="form1" id="form1" method="post" action="">&nbsp;品类：<select name="category_id" id="category_id"><option value="0">全部</option><?php foreach ($tmp["all_category"] as $item) { ?><option value="<?=$item["id"]?>" <?php if ($item["id"] == $tmp["category_id"]) { ?>selected<?php } ?>><?=$item["name"]?></option><?php } ?></select>&nbsp;店铺：<select name="store_id" id="store_id"><option value="0">全部</option><?php foreach ($tmp["store_all"] as $item) { ?><option value="<?=$item["store_id"]?>" <?php if ($item["store_id"] == $tmp["store_id"]) { ?>selected<?php } ?>><?=$item["store_name"]?></option><?php } ?></select>&nbsp;开始时间：<input type="text" name="time1" id="time1" value="<?=$tmp["date1"]?>" readonly="1">&nbsp;结束时间：<input type="text" name="time2" id="time2" value="<?=$tmp["date2"]?>" readonly="1">&nbsp;<input type="submit" value="确定搜索">&nbsp;<input type="button" value="下载报表" onclick="report_download()"></form></td>
  </tr>
  <tr class="head">
  <td width="15%">时间</td>
  <td width="10%">品类</td>
  <td width="10%">店铺</td>
  <td width="10%">粉丝推送单价</td>
  <td width="10%">推送内容标题</td>
  <td width="10%">粉丝推送总数</td>
  <td width="10%">唯一点击数</td>
  <td>点击率</td>
  </tr>

  <?php
  foreach ($tmp["info"]["info"] as $key => $item) {
      ?>
  <tr sid="search_id" vid="<?=$key?>">
      <td><?=date("Y-m-d H:i",$item["create_time"])?></td>
      <td><?=$item["category_name"]?></td>
      <td><?=$item["store_name"]?></td>
      <td><?=$item["single_price"]?></td>
      <td><?=$item["title"]?></td>
      <td><?=$item["send_count"]?></td>
      <td><?=$item["views"]?></td>
      <td><?=round(($item["views"]/$item["send_count"]), 3)*100?>%</td>
  </tr>
      <?php
  }
  ?>
  <tr>
<td colspan="13">
<?php echo "共{$tmp["info"]["nums"]}<span=\"#FF0000\">条记录</span>&nbsp;&nbsp;当前{$tmp["info"]["current_page"]}/{$tmp["info"]["pages"]}页"; ?>
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
$("#time1").datepick({dateFormat: 'yy-mm-dd'});
$("#time2").datepick({dateFormat: 'yy-mm-dd'});
</script>
</body>
</html>