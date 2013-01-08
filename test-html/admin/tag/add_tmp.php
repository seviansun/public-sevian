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
    if ($.trim($("#name").val()) == "")
    {
        $("#name").focus();
        return false;
    }
    if ($.trim($("#group_id").val()) == "")
    {
        $("#group_id").focus();
        return false;
    }
    if ($.trim($("#rank1").val()) != "" && $.trim($("#days2").val()) != "" && $.trim($("#rank2").val()) != "" )
    {
        if ( parseInt($.trim($("#rank1").val())) <= 0)
        {
            alert("阀值为大于1的整数");
            $("#rank1").focus();
            return false;
        }
    }
    else if ($.trim($("#rank1").val()) == "" && $.trim($("#days2").val()) == "" && $.trim($("#rank2").val()) == "" )
    {
    }
    else {

    }
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
  <td colspan="2">当前：<?=$tmp["page_name"]?></td>
  </tr>
  <tr>
  <td width="15%">标签名称：</td>
  <td><input type="text" id="name" name="name" value="<?=$tmp["info"]["name"]?>"></td>
  </tr>
  <tr>
  <td>标签分类：</td>
  <td><select name="group_id" id="group_id"><option value="">请选择</option><?php foreach ($tmp["groups"] as $item) { ?><option value="<?=$item["id"]?>" <?php if ($tmp["info"]["group_id"] == $item["id"]) { ?>selected<?php } ?>><?=$item["name"]?></option><?php } ?></select></td>
  </tr>
  <tr>
  <td>阀值设置：</td>
  <td><input onpaste="return false" oncontextmenu = "return false" onkeydown="return onlyNum(event);keyset();" type="text" id="rank1" name="rank1" style="width:50px;ime-mode:disabled;" value="<?=$tmp["info"]["rank1"]?$tmp["info"]["rank1"]:""?>">，会员标签匹配权值大于阀值后，标签将智能匹配激活</td>
  </tr>
  <tr>
  <td>状态：</td>
  <td><input type="radio" name="is_used" value="1" <?php if (intval($tmp["is_used"]) == 1) { ?>checked<?php } ?>> 启用<input type="radio" name="is_used" value="0" <?php if ($tmp["is_used"] == 0) { ?>checked<?php } ?>> 停用</td>
  </tr>
  <tr>
  <td>过期设置：</td>
  <td>连续<input onpaste="return false" oncontextmenu = "return false" onkeydown="return onlyNum(event);keyset();" type="text" style="width:50px;ime-mode:disabled;" name="days2" id="days2" value="<?=$tmp["info"]["days2"]?$tmp["info"]["days2"]:""?>">天会员标签权值变化小于<input onpaste="return false" oncontextmenu = "return false" onkeydown="return onlyNum(event);keyset();" type="text" id="rank2" name="rank2" style="width:50px;ime-mode:disabled;" value="<?=$tmp["info"]["rank2"]?$tmp["info"]["rank2"]:""?>">时，标签自动撤销</td>
  </tr>
  <tr>
  <td>备注：</td>
  <td><textarea name="description" id="description" style="width:75%;height:100px;"><?=$tmp["info"]["description"]?></textarea></td>
  </tr>
  <tr>
      <td colspan="2"><input type="submit" value="<?=$tmp["button_name"]?>">&nbsp;<input type="button" onclick="return_path()" value="返回"></td>
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
