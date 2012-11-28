<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>运营参数设置</title>
<link href="<?=$this->template_file("admin/css.css")?>" rel="stylesheet" type="text/css">
<?=$this->SYSTEM_js("jquery-1.3.2.min.js")?>
<?=$this->SYSTEM_js("jquery.datepick.pack.js")?>
<?=$this->SYSTEM_js("jquery.datepick-zh-CN.js")?>
<link href="<?=SYSTEM_base_url?>js/jquery.datepick.css" rel="stylesheet" type="text/css">
<script language="javascript">

</script>
</head>
<body>
<div id="add">
<form name="form2" id="form2" method="post" action="" onSubmit="return check()">
  <table cellspacing="1" cellpadding="5" width="100%" style="margin:6px 0 0 0;">
   <tr>
  <td colspan="13" style="color:#FF0000;font-weight:bold;">当前：运营参数设置&nbsp;<a href="<?=$this->SYSTEM_path("admin/user_data/category")?>">品类运营参数设置</a></td>
  </tr>
  <tr class="head">
  <td width="15%">ID</td>
  <td width="15%">参数名</td>
  <td width="15%">参数值</td>
  <td>操作</td>
  </tr>
  <tr sid="search_id" vid="<?=$item["id"]?>">
      <td>1</td>
      <td>粉丝推送单价设置</td>
      <td><?=$tmp["price"]?>元/条</td>
      <td><a href="<?=$this->SYSTEM_path("admin/user_data/fans_update")?>">编辑</a</td>
  </tr>
  <tr><td colspan="13"></td></tr>
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