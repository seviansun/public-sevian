<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>账户编辑</title>
<link href="<?=$this->template_file("admin/css.css")?>" rel="stylesheet" type="text/css">
<?=$this->SYSTEM_js("jquery-1.3.2.min.js")?>
<?=$this->SYSTEM_js("jquery.datepick.pack.js")?>
<?=$this->SYSTEM_js("jquery.datepick-zh-CN.js")?>
<link href="<?=SYSTEM_base_url?>js/jquery.datepick.css" rel="stylesheet" type="text/css">
<script language="javascript">
//转换为日期对象好比较
function setdate(year,month, day) {
    var d = new Date()
    d.setFullYear(year)
    d.setMonth(month);
    d.setDate(day);
    return d;
}
function return_path() {
    window.location.href = '<?=$tmp["backurl"]?>';
}
function check() {
    <?php if (intval($tmp["info"]["uid"]) == 0) { ?>
        var username = $.trim($("#username").val());
        if (username == "")
        {
            $("#username").focus();
            alert("请输入用户名");
            return false;
        }
    <?php } else { ?>
    <?php } ?>
    if ($("#types").val() == "1")
    {
        var time1 = $("#time1").val();
        var time2 = $("#time2").val();
        if (time1 == "")
        {
            $("#time1").focus();
            return false;
        }
        if (time2 == "")
        {
            $("#time2").focus();
            return false;
        }
        var time1_x = time1.split("-");
        var d1 = setdate(time1_x[0],time1_x[1], time1_x[2]);
        var time2_x = time2.split("-");
        var d2 = setdate(time2_x[0],time2_x[1], time2_x[2]);
        if (d1 > d2)
        {
            alert("有效时间的开始时间不能大于有效时间的结束时间，请重新设置");
            return false;
        }
    }
        return true;
}
function show_span() {
    if ($("#types").val() == "1")
    {
        $("#timearea").show();
    }
    else {
        $("#timearea").hide();
    }
}
</script>
</head>

<body>
<div id="add">
<form action="<?=$tmp["action_path"]?>" method="post" name="adminlogin_form" onsubmit="return check()">
    <table cellspacing="1" cellpadding="1" width="100%">
	<tr class="head">
		<td colspan="10" ><?=$tmp["page_name"]?></td>
	</tr>
    <?php if (intval($tmp["info"]["uid"]) == 0) { ?>
<tr>
<td width="15%">用户名:</td>
<td><input type="text" name="username" id="username"><?=SYSTEM_domain?>(初始密码:“<?=SYSTEM_default_password?>”)</td>
</tr>
<?php } else { ?>
    <tr>
    <td colspan="10">用户名：<?=$tmp["info"]["username"]?><input type="hidden" value="2" name="namesss1"></td>
    </tr>
    <?php } ?>
	<tr class="head">
		<td colspan="10">基本信息</td>
	</tr>
    <tr>
        <td colspan="10">姓名<input type="text" id="name" name="name" value="<?=$tmp["info"]["name"] ?>" >&nbsp;Email&nbsp;<input type="text" id="email" name="email" value="<?=$tmp["info"]["email"] ?>" >&nbsp;禁止登录：&nbsp;<input type="checkbox" id="locked" name="locked" value="1" <?php if ($tmp["info"]["locked"]) { ?>checked<?php } ?>>是</td>
    </tr>
    <tr class="head">
    <td colspan="10">权限编辑</td>
    </tr>
    <tr>
    <td colspan="10">
    <?php foreach ($tmp["group"] as $key => $item) {
    echo "<input type=\"checkbox\" value=\"{$item["code"]}\" name=\"group[]\" {$item["checked"]}>{$item["name"]}&nbsp;";
    } ?></td>
    </tr>
    <tr class="head">
    <td colspan="10">登录有效期编辑</td>
    </tr>
  <tr>
  <td width="15%">限制类型：</td>
  <td colspan="3"><select name="types" id="types" onchange="show_span()">  <option value="0">不能登录</option>
  <option value="1" <?php if (intval($tmp["info1"]["types"]) == 1) { ?>selected<?php } ?>>有时间限制</option>
  <option value="2" <?php if (intval($tmp["info1"]["types"]) == 2) { ?>selected<?php } ?>>无时间限制</option>
  </select><span id="timearea">有效时间开始：<input type="text" name="time1" id="time1" value="<?=date("Y-m-d", $tmp["info1"]["time1"]?$tmp["info1"]["time1"]:time())?>" readonly="1">&nbsp;有效时间结束：<input type="text" name="time2" id="time2" value="<?=date("Y-m-d", $tmp["info1"]["time2"]?$tmp["info1"]["time2"]:time())?>" readonly="1"></span></td>
  </tr>
    <tr><td colspan="10"><input type="submit" value="<?=$tmp["button_name"]?>">&nbsp;<input type="button" value="返回" onclick="return_path()"></td></tr>
    </table>
<script language="javascript">
$("#time1").datepick({dateFormat: 'yy-mm-dd'});
$("#time2").datepick({dateFormat: 'yy-mm-dd'});
show_span();
</script>
</form>
</div>
</body>
</html>