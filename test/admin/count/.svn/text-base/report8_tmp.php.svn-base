<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title><?=$tmp["date"]?>竞拍动态</title>
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
    window.location.href="<?=$this->SYSTEM_path("admin/count/report8_download/{$tmp["ymd"]}/{$tmp["category_id"]}")?>";
}
</script>
</head>
<body>
<div id="add">
<form name="form2" id="form2" method="post" action="" onSubmit="return check()">
  <table cellspacing="1" cellpadding="5" width="100%" style="margin:6px 0 0 0;">
   <tr>
  <td colspan="13" style="color:#FF0000;font-weight:bold;">&nbsp;品类：<select name="category_id" id="category_id"><option value="0">全部</option><?php foreach ($tmp["all_category"] as $item) { ?><option value="<?=$item["id"]?>" <?php if ($item["id"] == $tmp["category_id"]) { ?>selected<?php } ?>><?=$item["name"]?></option><?php } ?></select>日期：<input type="text" name="ymd" id="ymd" readonly="1" value="<?=$tmp["date"]?>"><input type="submit" value="提交搜索"></td>
  </tr>
  </table>
  </form>
  <table cellspacing="1" cellpadding="5" width="100%" style="margin:6px 0 0 0;">
   <tr>
  <td colspan="13" style="color:#FF0000;font-weight:bold;">当前：<?=$tmp["date"]?>竞拍动态&nbsp;<input type="button" value="下载报表" onclick="report_download()"></td>
  </tr>
  <tr class="head">
  <td width="8%">投放日期</td>
  <td width="8%">品类</td>
  <td width="8%">出价排名</td>
  <td width="8%">店铺名称</td>
  <td width="8%">出价</td>
  <td width="8%">点击上限</td>
  <td width="8%">预算</td>
  <td width="8%">当前余额</td>
  <td width="8%">活动链接</td>
  <td>是否有后续竞拍</td>
  </tr>

  <?php
  foreach ($tmp["output"] as $key => $item) {
      ?>
  <tr sid="search_id" vid="<?=$key?>">
      <td><?=$item["ymd"]?></td>
      <td><?=$item["category_name"]?></td>
      <td><?=$item["sort"]?></td>
      <td><?=$item["store_name"]?></td>
      <td><?=$item["price"]?></td>
      <td><?=$item["click_nums"]?></td>
      <td><?=$item["total"]?></td>
      <td><span <?php if ($item["store_total"] < $item["category_price"]) { ?>style="color:#FF0000;"<?php } ?>><?=$item["store_total"]?></span></td>
      <td><a href="<?=$item["activity_url"]?>" target="_blank"><?=$item["activity_name"]?></a></td>
      <td><?=$item["have"]?"有":"无"?></td>
  </tr>
      <?php
  }
  ?>

  </table>
</div>
<script language="javascript">
$("tr[sid=search_id]").hover(
 function(){var vid = $(this).attr("vid"); $("tr[vid="+vid+"] > td").css("background-color", "#DDDDDD")},
 function(){var vid = $(this).attr("vid"); $("tr[vid="+vid+"] > td").css("background-color", "#FFFFFF")}
);
$("#ymd").datepick({dateFormat: 'yy-mm-dd'});
</script>
</body>
</html>