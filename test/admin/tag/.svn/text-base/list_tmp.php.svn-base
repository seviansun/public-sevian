<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title><?=$tmp["page_name"]?></title>
<link href="<?=$this->template_file("admin/css.css")?>" rel="stylesheet" type="text/css">
<?=$this->SYSTEM_js("jquery-1.3.2.min.js")?>
<?=$this->SYSTEM_js("jquery.datepick.pack.js")?>
<?=$this->SYSTEM_js("jquery.datepick-zh-CN.js")?>
<link href="<?=SYSTEM_base_url?>js/jquery.datepick.css" rel="stylesheet" type="text/css">
<link href="<?=SYSTEM_base_url?>js/thickbox.css" rel="stylesheet" type="text/css" />
<script language="javascript" src="<?=SYSTEM_base_url?>js/thickbox-2010-02-26.js"></script>
<script language="javascript">
//转换为日期对象好比较
function setdate(year,month, day) {
    var d = new Date()
    d.setFullYear(year)
    d.setMonth(month);
    d.setDate(day);
    return d;
}
function check() {
    if ($("#time1").val() != "" || $("#time1").val() != "")
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
    if (confirm("确定要提交搜索吗？"))
    {
        return true;
    }
    return false;
}

function del(id) {
    if (confirm("确定要删除已经选择的关键词组吗？此步操作不可以恢复"))
    {
        $.ajax({
            url:"<?=$this->SYSTEM_path("admin/tag/tag_del")?>",
                data:"keyword_id="+id,
                dataType:"html",
                type:"post",
                success:function (msg) {
                if (msg == "ok")
                {
                    window.location.reload();
                }
                else if (msg == "mall")
                {
                    alert("此关键词直接匹配大市场品类，删除失败");
                }
                else {
                    alert("未知错误删除失败");
                }
            }
        })
    }
}
function change_status(id,name) {
    var description = $.trim($("#description").val());
    if (description == "")
    {
        $("#description").focus();
    }
    else {
        boxmessage_remove();
        $.ajax({
            url:"<?=$this->SYSTEM_path("admin/tag/change_status")?>",
                data:"id="+id+"&description="+encodeURIComponent(description),
                dataType:"html",
                type:"post",
                success:function (msg) {
                if (msg == "ok")
                {

                    window.location.reload();
                }
                else {
                    alert("未知错误导致操作失败");
                }
            }
        })
    }
}
function change_status_message(id, name) {
    var htmls = "<table style=\"width:100%;\"><tr><td>"+name+"备注：<input type=\"text\" name=\"description\" id=\"description\"></td></tr><tr><td style=\"text-align:center;\"><input type=\"button\" value=\"确定\" onclick=\"change_status("+id+")\"><input type=\"button\" value=\"取消\" onclick=\"boxmessage_remove()\"></td></tr></table>";
    boxmessage_message(htmls, 300, 100);
}
function add() {
    window.location.href="<?=$this->SYSTEM_path("admin/tag/add")?>";
}
</script>
</head>
<body>
<div id="add">
<form name="form2" id="form2" method="post" action="" onSubmit="return check()">
  <table cellspacing="1" cellpadding="5" width="100%" style="margin:6px 0 0 0;">
   <tr class="head">
  <td colspan="13">维护标签库</td>
  </tr>
  <tr>
  <td width="15%">所在分类</td>
  <td><select name="group_id" id="group_id"><option value="0">请选择</option><?php foreach ($tmp["groups"] as $item) { ?><option value="<?=$item["id"]?>" <?php if ($tmp["group_id"] == $item["id"]) { ?>selected<?php } ?>><?=$item["name"]?></option><?php } ?></select>&nbsp;&nbsp;<a href="<?=$this->SYSTEM_path("admin/tag/group_add")?>">添加分类</a>&nbsp;&nbsp;<a href="<?=$this->SYSTEM_path("admin/tag/group")?>">维护分类</a></td>
  </tr>
  <tr>
  <td>创建时间段</td>
  <td><input type="text" name="time1" id="time1" readonly="1" value="<?=$tmp["time1"]?>">至<input type="text" name="time2" id="time2" readonly="1" value="<?=$tmp["time2"]?>"></td>
  </tr>
  <tr>
  <td>是否有阀值</td>
  <td><input type="radio" name="rank1" value="0" <?php if ($tmp["rank1"] == 0) { ?>checked<?php } ?>>不限<input type="radio" name="rank1" value="1" <?php if ($tmp["rank1"] == 1) { ?>checked<?php } ?>>无<input type="radio" name="rank1" value="2" <?php if ($tmp["rank1"] == 2) { ?>checked<?php } ?>>有</td>
  </tr>
  <tr>
  <td>状态</td>
  <td><input type="radio" name="is_used" value="3" <?php if ($tmp["is_used"] == 3) { ?>checked<?php } ?>>不限<input type="radio" name="is_used" value="1" <?php if ($tmp["is_used"] == 1 || $tmp["is_used"] == 0 ) { ?>checked<?php } ?>>启用中<input type="radio" name="is_used" value="2" <?php if ($tmp["is_used"] == 2) { ?>checked<?php } ?>>停用</td>
  </tr>
  <tr>
  <td>标签名称</td>
  <td><input type="text" name="tag" value="<?=$tmp["tag"]?>"></td>
  </tr>
   <tr>
  <td colspan="13"><input type="submit" value="搜索"></td>
  </tr>
  </table>
</form>
  <table cellspacing="1" cellpadding="5" width="100%" style="margin:6px 0 0 0;">
   <tr>
  <td colspan="13" style="color:#FF0000;font-weight:bold;"><input type="button" value="添加标签" onclick="add()">&nbsp;当前：<?=$tmp["page_name"]?></td>
  </tr>
  <tr class="head">
  <td width="5%">ID</td>
  <td width="10%">名称</td>
  <td width="10%">标签分类</td>
  <td width="10%">匹配人数</td>
  <td width="10%">直接匹配</td>
  <td width="10%">智能匹配</td>
  <td width="12%">创建日期</td>
  <td width="5%">阀值</td>
  <td width="10%">状态</td>
  <td>操作</td>
  </tr>

  <?php
  if (is_array($tmp["info"]["info"])) {
  foreach ($tmp["info"]["info"] as $item) {
      ?>
  <tr sid="search_id" vid="<?=$item["id"]?>">
      <td><?=$item["id"]?></td>
      <td><?=$item["name"]?></td>
      <td><?=$item["group_name"]?></td>
      <td><?=$item["nums"]?></td>
      <td><?=$item["nums1"]?></td>
      <td><?=$item["nums2"]?></td>
      <td><?=date("Y-m-d", $item["timestamp"])?></td>
      <td><?=$item["rank1"]?></td>
      <td><?=$item["is_used"]?"启用中":"停用"?></td>

      <td><a href="<?=$this->SYSTEM_path("admin/tag/update/{$item["id"]}/0/?backurl={$tmp["backurl"]}")?>">编辑</a>&nbsp;<a href="javascript:change_status_message(<?=$item["id"]?>, '<?=$item["is_used"]?"停用":"启用"?>')"><?=$item["is_used"]?"停用":"启用"?></a>&nbsp;<a target="_blank" href="<?=$this->SYSTEM_path("admin/tag/log_list/{$item["id"]}")?>">查看日志</a></td>
  </tr>
      <?php
  }
  }
  ?>
<tr>
<td colspan="13"><input type="button" value="添加标签" onclick="add()">&nbsp;
<?php echo "共{$tmp["info"]["nums"]}<span=\"#FF0000\">个标签</span>&nbsp;&nbsp;当前{$tmp["info"]["current_page"]}/{$tmp["info"]["pages"]}页"; ?>
<?php if ($tmp["info"]["current_page"] != 1) { ?>
&nbsp;<a href="<?=$tmp["action_path"]."/1"?>">首页</a>&nbsp;<a href="<?=$tmp["action_path"]."/".$tmp["info"]["pre_page"]?>">上页</a>&nbsp;
<?php } ?>
<?php
for ($i = $tmp["info"]["spage"]; $i <= $tmp["info"]["epage"]; $i ++) {
    if ($i != $tmp["info"]["current_page"]) {
        echo "&nbsp;<a href=\"{$tmp["action_path"]}/{$i}\">{$i}</a>&nbsp;";
    }
    else {
        echo "&nbsp;{$i}&nbsp;";
    }
    ?>
<?php } ?>
<?php if ($tmp["info"]["current_page"] != $tmp["info"]["pages"]) { ?>
&nbsp;<a href="<?=$tmp["action_path"]."/".$tmp["info"]["next_page"]?>">下页</a>&nbsp;<a href="<?=$tmp["action_path"]."/".$tmp["info"]["pages"]?>">末页</a>
<?php } ?>
</td>
</tr>
  </table>

</div>
<script language="javascript">
$("tr[sid=search_id]").hover(
 function(){var vid = $(this).attr("vid"); $("tr[vid="+vid+"] > td").css("background-color", "#DDDDDD")},
 function(){var vid = $(this).attr("vid"); $("tr[vid="+vid+"] > td").css("background-color", "#FFFFFF")}
);
$("#time1").datepick({dateFormat: 'yy-mm-dd'});
$("#time2").datepick({dateFormat: 'yy-mm-dd'});
//$("#date").datepick({dateFormat: 'yy-mm-dd'});
</script>
</body>
</html>