<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>后台登录有效期</title>
<link href="<?=$this->template_file("admin/css.css")?>" rel="stylesheet" type="text/css">
<link href="<?=SYSTEM_base_url?>js/jquery.datepick.css" rel="stylesheet" type="text/css">
<?=$this->SYSTEM_js("jquery-1.3.2.min.js")?>
<?=$this->SYSTEM_js("jquery.datepick.pack.js")?>
<?=$this->SYSTEM_js("jquery.datepick-zh-CN.js")?>
<script language="javascript">
function del(uid) {
    if (confirm("确定要取消登录设置吗？取消后此用户将无法在后台登录"))
    {
        $.ajax({
        url:'<?=$this->SYSTEM_path("admin/user/time_del")?>',
            data:'uid='+uid,
                dataType:'html',
                type:'post',
                success:function(msg) {
                if (msg == "ok")
                {
                    window.location.reload();
                }
                else {
                    alert("取消失败");
                }
        }
        })
    }
}

function update(uid) {
    window.location.href="<?=$this->SYSTEM_path("admin/user/update/")?>"+uid+"?backurl=<?=$tmp["backurl"]?>";
}
function check(){
	var num = 0;
	var time1 = $.trim($("#time1").val());
	var time2 = $.trim($("#time2").val());
	$("input[type=checkbox]").each(function(i) {
        if (this.checked == true)
        {
            num = 1;
        }
    })
    if (num == 0)
    {
        alert("请选择要编辑登录有效期的用户");
        return false;
    }
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
	 return true;
}
function del_check(){
	var num = 0;
	$("input[type=checkbox]").each(function(i) {
        if (this.checked == true)
        {
            num = 1;
        }
    })
    if (num == 0)
    {
        alert("请选择用户");
        return false;
    }
	if (confirm("你确定要把已经选择的用户删除吗？"))
    {
        return true;
    }
	return false;
}
function selectall() {
    $("input[type=checkbox]").each(function(i) {
        $(this).attr("checked","checked");
    })
}
function selectall_no() {
	$("input[type=checkbox]").each(function(i) {
        $(this).attr("checked","");
    })
}
    //转换为日期对象好比较
function setdate(year,month, day) {
    var d = new Date()
    d.setFullYear(year)
    d.setMonth(month);
    d.setDate(day);
    return d;
}
</script>
</head>
<body>
<div id="add">
<form name="form" id="form" method="post" action="" onSubmit="return check();">
  <table cellspacing="1" cellpadding="5" width="100%" style="margin:6px 0 0 0;">
   <tr>
  <td colspan="13" style="color:#FF0000;font-weight:bold;">当前：后台登录有效期用户列表&nbsp;
  有效时间开始：<input type="text" name="time1" id="time1" value="<?=(($tmp["time1"]=="0")?"":$tmp["time1"])?>" style="width:120px;">
  有效时间结束：<input type="text" name="time2" id="time2" value="<?=(($tmp["time2"]=="0")?"":$tmp["time2"])?>" style="width:120px;"/>&nbsp;&nbsp;
  <input type="submit" name="set_number" value="设置有效期"></td>
  </tr></table>
  <table cellspacing="1" cellpadding="5" width="100%">
  <tr class="head">
  <td width="5%">选择</td>
  <td width="10%">用户</td>
  <td width="10%">姓名</td>
  <td width="10%">限制类型</td>
  <td width="25%">登录有效期</td>
  <td width="15%">最后登录</td>
  <td>操作</td>
  </tr>
  <?php
  foreach ($tmp["list"]["info"] as $key => $item) {
      ?>
      <tr sid="search_id" vid="<?=$item["uid"]?>">
	  <td><input type="checkbox" name="cata[]" value="<?=$item["id"]?>"></td>
      <td><?=$item["username"]?></td>
      <td><?=$item["name"]?></td>
      <td><?php if ($item["types"] == 1) { echo "有时间限制";} else { echo "无时间限制";} ?></td>
      <td><?php  if ($item["types"] == 1) { ?><?=date("Y-m-d H:i:s", $item["time1"])?>&nbsp;到&nbsp;<?=date("Y-m-d H:i:s", $item["time2"])?><?php } ?></td>
      <td><?php if ($item["login_time"]) { ?><?=date("Y-m-d H:i:s", $item["login_time"])?><?php } ?></td>
      <td><input type="button" value="编辑" onClick="update(<?=$item["uid"]?>)">&nbsp;<?php  if ($item["types"] == 1) { ?><input type="button" value="取消登录设置" onClick="del(<?=$item["uid"]?>)"><?php } ?></td>
      </tr>
      <?php
  }
  ?>
<tr>
<td colspan="13">&nbsp;<a href="javascript:selectall()">全选</a>/<a href="javascript:selectall_no()">全不选</a></td>
</tr>
<tr>
<td colspan="13">
<?php
echo "共{$tmp["list"]["nums"]}<span=\"#FF0000\">个用户</span>&nbsp;&nbsp;当前{$tmp["list"]["current_page"]}/{$tmp["list"]["pages"]}页";
for ($i = $tmp["list"]["spage"]; $i <= $tmp["list"]["epage"]; $i ++) {
    if ($i != $tmp["list"]["current_page"]) {
        echo "&nbsp;<a href=\"{$tmp["action_path"]}/{$i}\">{$i}</a>&nbsp;";
    }
    else {
        echo "&nbsp;{$i}&nbsp;";
    }
    ?>
<?php } ?>
</td>
</tr>
  </table>
  </form>
</div>
<script language="javascript">
$("#time1").datepick({dateFormat: 'yy-mm-dd'});
$("#time2").datepick({dateFormat: 'yy-mm-dd'});
$("tr[sid=search_id]").hover(
 function(){var vid = $(this).attr("vid"); $("tr[vid="+vid+"] > td").css("background-color", "#DDDDDD")},
 function(){var vid = $(this).attr("vid"); $("tr[vid="+vid+"] > td").css("background-color", "#FFFFFF")}
);

</script>
</body>
</html>