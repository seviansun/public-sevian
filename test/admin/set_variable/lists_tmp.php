<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>设置系统变量</title>
<link href="<?=$this->template_file("admin/css.css")?>" rel="stylesheet" type="text/css">
<?=$this->SYSTEM_js("jquery-1.3.2.min.js")?>
<script language="javascript">
function check() {
    if (confirm("确实要修改吗？"))
    {
        return true;
    }
    return false;
}
</script>
</head>
<body>
<div id="add">
<form name="form2" id="form2" method="post" action="" onsubmit="return check()">
  <table cellspacing="1" cellpadding="5" width="100%" style="margin:6px 0 0 0;">
   <tr>
  <td colspan="13" style="color:#FF0000;font-weight:bold;">当前：设置系统变量</td>
  </tr>
  <tr class="head">
  <td colspan="10">设置系统变量</td>
  </tr>
  <tr>
  <td width="15%">包装价格：</td>
  <td><input type="text" name="pack_price" id="pack_price" value="<?=$tmp["pack_price"]?>"></td>
  </tr>
  <tr>
  <td>贺卡价格：</td>
  <td><input type="text" name="card_price" id="card_price" value="<?=$tmp["card_price"]?>"></td>
  </tr>
  <tr>
  <td>订单运费：</td>
  <td><input type="text" name="SYS_yunfei" id="SYS_yunfei" value="<?=$tmp["SYS_yunfei"]?>"></td>
  </tr>
  <tr>
  <td>免运费价格：</td>
  <td><input type="text" name="no_yunfei_price" id="no_yunfei_price" value="<?=$tmp["no_yunfei_price"]?>"></td>
  </tr>
  <tr>
  <td>积分兑现金比例：</td>
  <td><input type="text" name="exchange_price" id="exchange_price" value="<?=$tmp["exchange_price"]?>">（例如：0.1代表1个积分兑换0.1元人民币）</td>
  </tr>
  <tr>
  <td>首页专题的显示个数：</td>
  <td><input type="text" name="subject_index_nums" id="subject_index_nums" value="<?=$tmp["subject_index_nums"]?>"></td>
  </tr>
  <tr>
<td colspan="13"><input type="submit" value="保存设置"></td>
</tr>
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