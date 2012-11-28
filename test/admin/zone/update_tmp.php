<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>业主圈-小区更新</title>
<link href="<?=$this->template_file("admin/css.css")?>" rel="stylesheet" type="text/css">
<?=$this->SYSTEM_js("jquery-1.3.2.min.js")?>
<?=$this->SYSTEM_js("jquery.datepick.pack.js")?>
<?=$this->SYSTEM_js("jquery.datepick-zh-CN.js")?>
<link href="<?=SYSTEM_base_url?>js/jquery.datepick.css" rel="stylesheet" type="text/css">
<script language="javascript">
function check() {
    var date = $.trim($("#csv_file").val());
    if (date == "")
    {
        $("#csv_file").focus();
        return false;
    }
    return true;
}
</script>
</head>
<body>
<div id="add">
<form name="form2" id="form2" method="post" action="" onSubmit="return check()" enctype= "multipart/form-data">
<input type="hidden" name="xxxx" value="xxxx">
  <table cellspacing="1" cellpadding="5" width="100%" style="margin:6px 0 0 0;">
   <tr class="head">
  <td colspan="13">当前：业主圈-小区更新</td>
  </tr>
  <tr>
  <td colspan="13">字段顺序：ID,行政区域,商圈,小区名称,地址,价格,物业类别,竣工时间,开发商,物业公司,总户数</td>
  </tr>
  <tr>
      <td colspan="13">请上传csv格式文件<input type="file" name="csv_file" id="csv_file">&nbsp;<input type="checkbox" name="delete" value="1000">删除原有数据&nbsp;<input type="submit" value="确定上传"></td>
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