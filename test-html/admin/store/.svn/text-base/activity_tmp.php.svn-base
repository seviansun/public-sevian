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
function check(){
    if ($.trim($("#activity_id").val())== "")
    {
        $("#activity_id").focus();
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
  <td colspan="13" style="color:#FF0000;font-weight:bold;">输入活动ID：<input type="text" name="activity_id" id="activity_id"><input type="submit" value="提交查询"></td>
  </tr>
  <tr >
  <td>
<?php
if ($tmp["activity_id"]) {
    if($tmp["info"]["status"]=="success") {
        echo "接口调用：成功<br>";
    }
    else {
        echo "接口调用：失败<br>";
    }

            echo "活动标题：".$tmp["info"]["output"]["title"]."<br>";
            echo "活动图片：".$tmp["info"]["output"]["image"]."<br>";
            echo "活动简介：".$tmp["info"]["output"]["intro"]."<br>";
            echo "活动url：".$tmp["info"]["output"]["url"]."<br>";
            print_r($tmp["info"]);
}
?>
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