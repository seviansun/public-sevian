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
</script>
</head>
<body>
<div id="add">
<form name="form2" id="form2" method="post" action="" onSubmit="return check()">
  <table cellspacing="1" cellpadding="5" width="100%" style="margin:6px 0 0 0;">
   <tr class="head">
  <td colspan="13">查看会员标签</td>
  </tr>
  <tr>
  <td>标签</td>
  <td><input type="text" name="tag" value="<?=$tmp["tag"]?>"></td>
  </tr>
  <tr>
  <td>状态</td>
  <td><input type="radio" name="is_used" value="0" <?php if ($tmp["is_used"] == 0) { ?>checked<?php } ?>>不限<input type="radio" name="is_used" value="1" <?php if ($tmp["is_used"] == 1) { ?>checked<?php } ?>>启用中<input type="radio" name="is_used" value="2" <?php if ($tmp["is_used"] == 2) { ?>checked<?php } ?>>停用</td>
  </tr>
  <tr>
  <td>会员ID</td>
  <td><input type="text" name="user_id" value="<?=$tmp["user_id"]?>"></td>
  </tr>
   <tr>
  <td colspan="13"><input type="submit" value="搜索"></td>
  </tr>
  </table>
</form>
  <table cellspacing="1" cellpadding="5" width="100%" style="margin:6px 0 0 0;">
   <tr>
  <td colspan="13" style="color:#FF0000;font-weight:bold;">当前：<?=$tmp["page_name"]?></td>
  </tr>
  <tr class="head">
  <td width="10%">会员ID</td>
  <td width="10%">标签</td>
  <td width="10%">匹配类型</td>
  <td width="10%">累计权值</td>
  <td width="10%">是否有效</td>
  <td width="10%">生效时间</td>
  <td>失效时间</td>
  </tr>

  <?php
  if (is_array($tmp["info"]["info"])) {
  foreach ($tmp["info"]["info"] as $item) {
      ?>
  <tr sid="search_id" vid="<?=$item["id"]?>">
      <td><?=$item["user_id"]?></td>
      <td><?=$item["tag_name"]?></td>
      <td><?php if ($item["match_type"] == 1) {echo "直接匹配";} elseif ($item["match_type"] == 2) {echo "智能匹配";} elseif ($item["match_type"] == 3) { echo "两者都匹配";}?></td>
      <td><?=$item["tag_rank"]?></td>
      <td><?php if ($item["active"] == 0) {echo "当前无效";} else{echo "当前有效";}?></td>
      <td><?=date("Y-m-d", $item["create_time"])?></td>
      <td><?=date("Y-m-d", $item["cancel_time"])?></td>
  </tr>
      <?php
  }
  }
  ?>
<tr>
<td colspan="13">
<?php echo "共{$tmp["info"]["nums"]}<span=\"#FF0000\">{$tmp["page_name"]}</span>&nbsp;&nbsp;当前{$tmp["info"]["current_page"]}/{$tmp["info"]["pages"]}页"; ?>
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
//$("#date").datepick({dateFormat: 'yy-mm-dd'});
</script>
</body>
</html>