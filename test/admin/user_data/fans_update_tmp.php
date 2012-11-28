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

    return true;
}
function return_path(){
    window.location.href="<?=$tmp["backurl"]?>";
}
function onlyNum(event){
    var isie = (document.all) ? true:false;
    var key;
    if(isie){
        key = window.event.keyCode;
    }
    else{
        key = event.which;
    }
    if ((key >= 48 && key <= 57) || (key >= 96 && key <= 105) || key == 8 || key == 46 || key == 110 || key == 190){
        return true;
    }
    return false;
}
function forbidKey(){
    if ((event.ctrlKey) && (event.keyCode == 86)) {
        event.keyCode = 0;
        event.returnValue = false;
    }
}
</script>
</head>
<body>
<div id="add">
<form name="form2" id="form2" method="post" action="" onSubmit="return check()" enctype= "multipart/form-data">
<input type="hidden" name="xxxx" value="xxxx">
  <table cellspacing="1" cellpadding="5" width="100%" style="margin:6px 0 0 0;">
   <tr class="head">
  <td colspan="2">当前：运营参数设置</td>
  </tr>
  <tr>
  <td width="15%">参数名称：</td>
  <td>粉丝推送单价</td>
  </tr>
  <tr>
  <td>单价设置：</td>
  <td><input onpaste="return false" oncontextmenu = "return false" onkeydown="return onlyNum(event);keyset();" type="text" id="price" name="price" style="width:50px;ime-mode:disabled;" value="<?=$tmp["price"]?>"></td>
  </tr>
  <tr>
      <td colspan="2"><input type="submit" value="保存编辑">&nbsp;<input type="button" onclick="return_path()" value="返回"></td>
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
