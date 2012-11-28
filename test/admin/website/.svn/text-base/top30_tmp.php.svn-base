<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>top30</title>
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
  <tr class="head">
  <td width="20%">时间</td>
  <td width="15%">IP</td>
  <td width="15%">会员在线</td>
  <td width="15%">游客在线</td>
  <td>总共在线</td>
  </tr>
  <?php
  if (is_array($tmp["info"])) {
  foreach ($tmp["info"] as $item) {
      ?>
  <tr sid="search_id" vid="<?=$item["timestamp"]?>">
      <td><?=date("Y-m-d H:i:s", $item["timestamp"])?></td>
      <td><?=$item["ipnums"]?></td>
      <td><?=$item["members"]?></td>
      <td><?=$item["visitors"]?></td>
      <td><?=$item["nums"]?></td>
  </tr>
      <?php
  }
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