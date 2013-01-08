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
  <tr>
  <td colspan="10">购物车详情，共21个购物车</td>
  </tr>
  <tr class="head">
  <td width="20%">购物车</td>
  <td>数量</td>
  </tr>
  <?php
  foreach ($tmp["info"] as $key => $item) {
      ?>
  <tr sid="search_id" vid="<?=$key?>">
      <td><?=$item["table_name"]?></td>
      <td><?=$item["nums"]?></td>
  </tr>
      <?php
  }
  ?>
  <tr><td colspan="10">共<?=$tmp["totals"]?>条记录</td></tr>
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