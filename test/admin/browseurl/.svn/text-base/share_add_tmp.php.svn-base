<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>添加公共图片库</title>
<link href="<?=$this->template_file("admin/css.css")?>" rel="stylesheet" type="text/css">
<?=$this->SYSTEM_js("jquery-1.3.2.min.js")?>
<script language="javascript">
function check(){
    if ($.trim($("#title").val()) == "")
    {
        $("#title").focus();
        return false;
    }
    <?php if (intval($tmp["info"]["id"]) == 0) { ?>
    if ($.trim($("#upload").val()) == "")
    {
        $("#upload").focus();
        alert("请选择要上传的图片");
        return false;
    }
    <?php } ?>
    if (confirm("确定要提交吗？"))
    {
        $("#post_submit").val("图片上传中，请稍等。。。");
        $("#post_submit").attr("disabled", "disabled");
        return true;
    }
    return false;
}
function return_path(){
    window.location.href="<?=$this->SYSTEM_path("admin/browseurl/share_list")?>";
}
</script>
</head>
<body>
<div id="add">
  <form name="form2" id="form2" method="post" action="" onSubmit="return check()" enctype="multipart/form-data">
  <input type="hidden" id="add_htmlname" value="100000000">
  <table cellspacing="1" cellpadding="5" width="100%" style="margin:6px 0 0 0;">
  <tr class="head"><td colspan="5"><?=$tmp["page_name"]?></td></tr>
  <tr>
  <td width="15%">备注说明：</td>
  <td><input type="text" name="title" id="title" value="<?=$tmp["info"]["title"]?>"></td>
  </tr>
  <tr>
  <td>图片</td>
  <td><input type="file" name="upload" id="upload"></td>
  </tr>
  <tr><td colspan="10"><input type="submit" id="post_submit" name="submit" value="<?=$tmp["button_name"]?>"><?php if ($tmp["info"]["id"]) { ?>&nbsp;<input type="button" name="submit" value="返回列表" onClick="return_path()"><?php } ?></td></tr>
  </table>
</form>
</div>
</body>
</html>