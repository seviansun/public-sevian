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
    if (confirm("确定要搜索吗？"))
    {
        return true;
    }
    return false;
}
function del(id) {
    if (confirm("确定要删除已经选择的关键词组吗？此步操作不可以恢复"))
    {
        $.ajax({
            url:"<?=$this->SYSTEM_path("admin/keyword/keyword_del")?>",
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
function add() {
    window.location.href="<?=$this->SYSTEM_path("admin/keyword/keyword_add")?>";
}
function data_change(){
    window.location.href="<?=$this->SYSTEM_path("admin/keyword/keyword/")?>"+$("#data_type").val();
}
function change_status(id,name) {
    if (confirm("确定要"+name+"这个关键词吗？"))
    {
        $.ajax({
            url:"<?=$this->SYSTEM_path("admin/keyword/change_status")?>",
                data:"id="+id,
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
</script>
</head>
<body>
<div id="add">
<form name="form3" id="form3" method="post" action="" onSubmit="return check()">
  <table cellspacing="1" cellpadding="5" width="100%" style="margin:6px 0 0 0;">
   <tr class="head">
  <td colspan="13">维护关键词库</td>
  </tr>
  <tr>
  <td width="15%">所在分组</td>
  <td><select name="group_id" id="group_id"><option value="0" <?php if ($tmp["group_id"] == "0") { ?>selected<?php } ?>>请选择</option><option value="999999999" <?php if ($tmp["group_id"] == 999999999) { ?>selected<?php } ?>>未分组的</option><?php foreach ($tmp["groups"] as $item) { ?><option value="<?=$item["id"]?>" <?php if ($tmp["group_id"] == $item["id"]) { ?>selected<?php } ?>><?=$item["name"]?></option><?php } ?></select></td>
  </tr>
  <tr>
  <td>创建时间段</td>
  <td><input type="text" name="time1" id="time1" readonly="1" value="<?=$tmp["time1"]?>">至<input type="text" name="time2" id="time2" readonly="1" value="<?=$tmp["time2"]?>"></td>
  </tr>
  <tr>
  <td>状态</td>
  <td><input type="radio" name="is_used" value="3" <?php if ($tmp["is_used"] == 3) { ?>checked<?php } ?>>不限<input type="radio" name="is_used" value="1" <?php if ($tmp["is_used"] == 1 || $tmp["is_used"] == 0 ) { ?>checked<?php } ?>>启用中<input type="radio" name="is_used" value="2" <?php if ($tmp["is_used"] == 2) { ?>checked<?php } ?>>停用</td>
  </tr>
  <tr>
  <td>关键词名称</td>
  <td><input type="text" name="keyword" value="<?=$tmp["keyword"]?>"></td>
  </tr>
   <tr>
  <td colspan="13"><input type="submit" value="搜索"></td>
  </tr>
  </table>
</form>
<form name="form2" id="form2" method="post" action="" >
  <table cellspacing="1" cellpadding="5" width="100%" style="margin:6px 0 0 0;">
   <tr>
  <td colspan="13" style="color:#FF0000;font-weight:bold;"><input type="button" value="添加关键词" onclick="add()">&nbsp;当前：维护关键词库</td>
  </tr>
  <tr class="head">
  <td width="10%">ID</td>
  <td width="15%">名称</td>
  <td width="15%">创建时间</td>
  <td width="15%">关键词组</td>
  <td width="10%">状态</td>
  <td></td>
  </tr>

  <?php
  if (is_array($tmp["info"]["info"])) {
  foreach ($tmp["info"]["info"] as $item) {
      ?>
  <tr sid="search_id" vid="<?=$item["id"]?>">
      <td><?=$item["id"]?></td>
      <td><?=$item["keyword"]?></td>
      <td><?=date("Y-m-d H:i:s", $item["timestamp"])?></td>
      <td><?=$item["group_name"]?></td>
      <td><?=$item["is_used"]?"启用中":"停用"?></td>
      <td><a href="<?=$this->SYSTEM_path("admin/keyword/keyword_update/{$item["id"]}/?backurl={$tmp["backurl"]}")?>">编辑</a>&nbsp;<input type="button" value="删除" onclick="del(<?=$item["id"]?>)">&nbsp;<a href="javascript:change_status(<?=$item["id"]?>, '<?=$item["is_used"]?"停用":"启用"?>')"><?=$item["is_used"]?"停用":"启用"?></a></td>
  </tr>
      <?php
  }
  }
  ?>
<tr>
<td colspan="13"><input type="button" value="添加关键词" onclick="add()">&nbsp;
<?php echo "共{$tmp["info"]["nums"]}<span=\"#FF0000\">关键词</span>&nbsp;&nbsp;当前{$tmp["info"]["current_page"]}/{$tmp["info"]["pages"]}页"; ?>
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
  </form>
</div>
<script language="javascript">
$("tr[sid=search_id]").hover(
 function(){var vid = $(this).attr("vid"); $("tr[vid="+vid+"] > td").css("background-color", "#DDDDDD")},
 function(){var vid = $(this).attr("vid"); $("tr[vid="+vid+"] > td").css("background-color", "#FFFFFF")}
);
$("#time1").datepick({dateFormat: 'yy-mm-dd'});
$("#time2").datepick({dateFormat: 'yy-mm-dd'});
</script>
</body>
</html>