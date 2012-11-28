<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>添加账户</title>
<link href="<?=$this->template_file("admin/css.css")?>" rel="stylesheet" type="text/css">
<?=$this->SYSTEM_js("jquery-1.3.2.min.js")?>
<script language="javascript">
function check() {
    if ($("#order_id").val() == "")
    {
        $("#order_id").focus();
        alert("请输入订单号");
        return false;
    }
    return true;
}
</script>
</head>

<body>
<div id="add">
<form action="" method="post" name="adminlogin_form" onsubmit="return check()">
    <table cellspacing="1" cellpadding="1" width="100%">
    <tr class="head">
    <td colspan="3">模拟支付</td>
    </tr>
    <tr>
    <td width="15%">填写订单号：</td>
    <td width="45%"><input type="text" name="order_id" id="order_id" ></td>
    <td width="30%"><input type="submit" value="确定"></td>
    </tr>
    </table>
</form>
</div>
</body>
</html>