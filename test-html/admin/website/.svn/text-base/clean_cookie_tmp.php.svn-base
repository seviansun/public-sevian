<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>当前账户COOKIE情况</title>
<link href="<?=$this->template_file("admin/css.css")?>" rel="stylesheet" type="text/css">
<?=$this->SYSTEM_js("jquery-1.3.2.min.js")?>
<script language="javascript">
function check() {
    if (confirm("确定要清理吗？"))
    {
        return true;
    }
    return false;
}
</script>
</head>
<body>
<div id="add">
<form name="form2" id="form2" method="post" action="" onSubmit="return check()">
<input type="hidden" name="hidden" value="xxxx">
  <table cellspacing="1" cellpadding="5" width="100%" style="margin:6px 0 0 0;">
   <tr class="head">
  <td colspan="10">当前账户COOKIE情况</td>
  </tr>
  <tr>
  <td width="15%">来源：</td>
  <td><?=$tmp["info"]["source"]?></td>
  </tr>
  <tr>
  <td>合作伙伴顶级域名：</td>
  <td><?=$tmp["info"]["partner_site"]?></td>
  </tr>
  <tr>
  <td>附加信息：</td>
  <td><?=$tmp["info"]["partner_addition"]?></td>
  </tr>
  <tr>
  <td>到期时间：</td>
  <td><?=date("Y-m-d H:i:s", $tmp["info"]["cookie_time"])?></td>
  </tr>
  <tr><td colspan="10"><input type="submit" value="清除"></td></tr>
  </table>
  </form>
</div>
<script language="javascript">
$("tr[sid=search_id]").hover(
 function(){var vid = $(this).attr("vid"); $("tr[vid="+vid+"] > td").css("background-color", "#DDDDDD")},
 function(){var vid = $(this).attr("vid"); $("tr[vid="+vid+"] > td").css("background-color", "#FFFFFF")}
);
$("#date").datepick({dateFormat: 'yy-mm-dd'});
</script>
</body>
</html>