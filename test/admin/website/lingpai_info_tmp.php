<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>令牌情况</title>
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
  <table cellspacing="1" cellpadding="5" width="100%" style="margin:6px 0 0 0;">
   <tr>
  <td colspan="13" style="color:#FF0000;font-weight:bold;" >令牌情况</td>
  </tr>
  <tr class="head">
  <td width="10%">表名称</td>
  <td width="15%">令牌名称</td>
  <td width="20%">最后更新</td>
  <td width="15%">领取次数</td>
  <td width="20%">最后领取</td>
  <td>状况</td>
  </tr>

  <?php
  foreach ($tmp["info"] as $item) {
      ?>
  <tr sid="search_id" vid="<?=$item["module_name"]?>">
      <td><?=$item["name"]?></td>
      <td><?=$item["module_name"]?></td>
      <td><?=$item["daytime"]?></td>
      <td><?=$item["nums"]?></td>
      <td><?=date("Y-m-d H:i:s", $item["time1"])?></td>
      <td><?php if ($item["status"]) { echo "已领取";} else {echo "空闲";}?></td>
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
</script>
</body>
</html>