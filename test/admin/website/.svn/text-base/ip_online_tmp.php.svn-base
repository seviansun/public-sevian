<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>IP监控</title>
<link href="<?=$this->template_file("admin/css.css")?>" rel="stylesheet" type="text/css">
<?=$this->SYSTEM_js("jquery-1.3.2.min.js")?>
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
  <td colspan="13" style="color:#FF0000;font-weight:bold;">IP监控(异常来访的IP会出现)</td>
  </tr>
  <tr class="head">
  <td width="15%">IP</td>
  <td width="15%">总共在线</td>
  <td>操作</td>
  </tr>

  <?php
  foreach ($tmp["list"] as $item) {
      ?>
  <tr sid="search_id" vid="<?=$item["ip"]?>">
      <td><?=$item["ip"]?></td>
      <td><?=$item["nums"]?></td>
      <td><a href="<?=$this->SYSTEM_path("admin/website/ip_search/{$item["ip"]}")?>" target="_blank">查看详细</a></td>
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
</script>
</body>
</html>