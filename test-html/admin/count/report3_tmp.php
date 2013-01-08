<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>竞价结果分析（按品类）</title>
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
    window.location.href="<?=$this->SYSTEM_path("admin/count/report3_download/")?>"+category_id+"/"+data1+"/"+data2;
}
</script>
</head>
<body>
<div id="add">
<form name="form2" id="form2" method="post" action="" onSubmit="return check()">
  <table cellspacing="1" cellpadding="5" width="100%" style="margin:6px 0 0 0;">
   <tr>
  <td colspan="13" style="color:#FF0000;font-weight:bold;">当前：竞价结果分析（按品类）</td>
  </tr>
  <tr>
  <td colspan="11"><form name="form1" id="form1" method="post" action="">&nbsp;品类：<select name="category_id" id="category_id"><option value="0">全部</option><?php foreach ($tmp["all_category"] as $item) { ?><option value="<?=$item["id"]?>" <?php if ($item["id"] == $tmp["category_id"]) { ?>selected<?php } ?>><?=$item["name"]?></option><?php } ?></select>&nbsp;开始时间：<input type="text" name="time1" id="time1" value="<?=$tmp["date1"]?>" readonly="1">&nbsp;结束时间：<input type="text" name="time2" id="time2" value="<?=$tmp["date2"]?>" readonly="1">&nbsp;<input type="submit" value="确定搜索">&nbsp;<input type="button" value="下载报表" onclick="report_download()"></form></td>
  </tr>
  <tr class="head">
  <td width="10%">投放日期</td>
  <td width="10%">品类</td>
  <td width="10%">入围上限</td>
  <td width="10%">参与数<a href="<?=$tmp["current_path"]?>?store_total_sort=<?=$tmp["store_total_sort"]==1?"2":"1"?>">排序</a></td>
  <td width="10%">商家总数<a href="<?=$tmp["current_path"]?>?store_nums_sort=<?=$tmp["store_nums_sort"]==1?"2":"1"?>">排序</a></td>
  <td width="8%">最高有效出价<a href="<?=$tmp["current_path"]?>?max_price_sort=<?=$tmp["max_price_sort"]==1?"2":"1"?>">排序</a></td>
  <td width="8%">最低有效出价<a href="<?=$tmp["current_path"]?>?min_price_sort=<?=$tmp["min_price_sort"]==1?"2":"1"?>">排序</a></td>
  <td width="8%">有效（扣费）点击<a href="<?=$tmp["current_path"]?>?uv_sort=<?=$tmp["uv_sort"]==1?"2":"1"?>">排序</a></td>
  <td width="8%">参与度<a href="<?=$tmp["current_path"]?>?matchs_sort=<?=$tmp["matchs_sort"]==1?"2":"1"?>">排序</a></td>
  <td >热门度</td>
  </tr>

  <?php
  foreach ($tmp["output"] as $key => $item) {
      ?>
  <tr sid="search_id" vid="<?=$key?>">
      <td><?=$item["ymd"]?></td>
      <td><?=$item["category_name"]?></td>
      <td><?=$item["store_max"]?></td>
      <td><?=$item["store_total"]?></td>
      <td><?=$item["store_nums"]?></td>
      <td><?=$item["max_price"]?></td>
      <td><?=$item["min_price"]?></td>
      <td><?=$item["uv"]?></td>
      <td><?=$item["matchs"]?></td>
      <td><span <?php if ($item["hot"] < 100) { ?>style="color:#FF0000;"<?php } elseif ($item["hot"] >= 300) { ?>style="color:#66CC33;"<?php } ?>><?=$item["hot"]?>%</span></td>
  </tr>
      <?php
  }
  ?>
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