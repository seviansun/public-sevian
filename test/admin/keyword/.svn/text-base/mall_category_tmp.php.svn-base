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
function check() {
    if (confirm("确定要提交搜索吗？"))
    {
        return true;
    }
    return false;
}
function data_change(){
    window.location.href="<?=$this->SYSTEM_path("admin/keyword/mall_category/")?>"+$("#data_type").val();
}
</script>
</head>
<body>
<div id="add">
<form name="form3" id="form3" method="post" action="" onSubmit="return check()">
  <table cellspacing="1" cellpadding="5" width="100%" style="margin:6px 0 0 0;">
   <tr class="head">
  <td colspan="13">搜索</td>
  </tr>
  <tr>
  <tr>
  <td>状态</td>
  <td><select name="data_type" id="data_type"><option value="0" <?php if ($tmp["type"] == 0) { ?>selected<?php } ?>>所有品类</option><option value="1" <?php if ($tmp["type"] == 1) { ?>selected<?php } ?>>无关键词的品类</option></select></td>
  </tr>
  <tr>
  <td>品类名称</td>
  <td><input type="text" name="keyword" value="<?=$tmp["is_keyword"]?$tmp["keyword"]:""?>"></td>
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
  <td width="5%">ID</td>
  <td width="15%">名称</td>
  <td width="5%">属性数</td>
  <td width="12%">对应关键词</td>
  <td width="8%">规则数</td>
  <td width="8%">规则优先级</td>
  <td></td>
  </tr>

  <?php
  if (is_array($tmp["info"]["info"])) {
  foreach ($tmp["info"]["info"] as $item) {
      ?>
  <tr sid="search_id" vid="<?=$item["id"]?>">
      <td><?=$item["id"]?></td>
      <td><?=$item["name"]?></td>
      <td><?=$item["filter_nums"]?></td>
      <td><?=$item["category_name"]?></td>
      <td><?=$item["rules"]?></td>
      <td><?=$item["rules_nums"]?></td>
      <td>
        <a href="<?=$this->SYSTEM_path("admin/keyword/mall_filter/{$item["id"]}/?backurl={$tmp["backurl"]}")?>">查看属性</a>&nbsp;
        <a href="<?=$this->SYSTEM_path("admin/keyword/change_keyword/{$item["id"]}/?backurl={$tmp["backurl"]}")?>">设置关键词</a>&nbsp;
        <a href="<?=$this->SYSTEM_path("service/rule/category_publish_list.php?category_id={$item['id']}")?>">设置标签投放规则</a>&nbsp;
      </td>
  </tr>
      <?php
  }
  }
  ?>

<tr>
<td colspan="13">
<?php echo "共{$tmp["info"]["nums"]}<span=\"#FF0000\">品类</span>&nbsp;&nbsp;当前{$tmp["info"]["current_page"]}/{$tmp["info"]["pages"]}页"; ?>
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
