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
    if ($("#change_id").val() == "")
    {
        alert("请选择目标组");
        $("#change_id").focus();
        return false;
    }
    if (confirm("确定要转移吗？此步操作不可以恢复"))
    {
        return true;
    }
    return false;
}
function return_path(){
    window.location.href="<?=$tmp["backurl"]?>";
}
</script>
</head>
<body>
<div id="add">
<form name="form2" id="form2" method="post" action="" onSubmit="return check()" enctype= "multipart/form-data">
<input type="hidden" name="xxxx" value="xxxx">
  <table cellspacing="1" cellpadding="5" width="100%" style="margin:6px 0 0 0;">
  <tr>
  <td colspan="13">组<?=$tmp["group_info"]["name"]?>里的关键词转移</td>
  </tr>
   <tr class="head">
  <td>关键词</td>
  <td>创建时间</td>
  <td>转移到</td>
  </tr>
    <?php
  if (is_array($tmp["info"]["info"])) {
  foreach ($tmp["info"]["info"] as $item) {
      ?>
  <tr sid="search_id" vid="<?=$item["id"]?>">
      <td><input type="hidden" name="keyword[]" value="<?=$item["id"]?>"><?=$item["keyword"]?></td>
      <td><?=date("Y-m-d H:i:s", $item["timestamp"])?></td>
      <td><select name="change_id<?=$item["id"]?>" id="change_id<?=$item["id"]?>"><option value="0">请选择</option><?php foreach ($tmp["groups"] as $item) { ?><option value="<?=$item["id"]?>"><?=$item["name"]?></option><?php } ?></select></td>
  </tr>
      <?php
  }
  }
  ?>
  <tr>
      <td colspan="13"><input type="submit" value="确定转移">&nbsp;<input type="button" onclick="return_path()" value="返回"></td>
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