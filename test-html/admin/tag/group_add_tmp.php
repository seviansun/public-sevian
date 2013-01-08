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
    var name = $.trim($("#name").val());
    if (name == "")
    {
        $("#name").focus();
        return false;
    }
    return true;
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
   <tr class="head">
  <td colspan="13">当前：<?=$tmp["page_name"]?></td>
  </tr>
  <tr>
  <td colspan="13">分类名称：<input type="text" id="name" name="name" value="<?=$tmp["info"]["name"]?>"></td>
  </tr>
  <tr>
      <td colspan="13"><input type="submit" value="<?=$tmp["button_name"]?>">&nbsp;<input type="button" onclick="return_path()" value="返回"></td>
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