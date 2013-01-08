<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>用户管理</title>
<link href="<?=$this->template_file("admin/css.css")?>" rel="stylesheet" type="text/css">
<?=$this->SYSTEM_js("jquery-1.3.2.min.js")?>
<script language="javascript">
function download() {
	window.location.href="<?=$this->SYSTEM_path("admin/user_level/download_level/{$tmp["level"]}")?>";
}
</script>
</head>
<body>
<div id="add">
<form action="" name="from2" method="post" enctype="multipart/form-data">
<table  cellspacing="1" cellpadding="5" width="100%" >
<tr>
<td colspan="4">当前：请选择用户等级&nbsp;&nbsp;<select name="level" id="level"  style="width:130px"><option value="5" <?php if($tmp["level"] == 5){?>selected<?php }?>>所有会员</option><option value="4" <?php if($tmp["level"] == 4){?>selected<?php }?>>中级会员</option><option value="1" <?php if($tmp["level"] == 1){?>selected<?php }?>>高级会员</option><option value="2" <?php if($tmp["level"] == 2){?>selected<?php }?>>金卡会员</option><option value="3" <?php if($tmp["level"] == 3){?>selected<?php }?>>铂金会员</option></select>&nbsp;&nbsp;&nbsp;&nbsp;<input type="submit" value="查   询">&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" name="download_level" value="数据下载" onClick="download()"></td>
</tr>
<tr class="head">
<td width="15%">用户名</td>
<td width="15%">注册时间</td>
<td width="15%">最近登录</td>
<td>等级</td>
</tr>
<?php
foreach ($tmp["info"]["info"] as $item) {
    ?>
    <tr sid="search_id" vid="<?=$item["uid"]?>">
    <td><?=$item["username"]?></td>
    <td><?=date("Y-m-d H:i",$item["registetime"])?></td>
    <td><?=date("Y-m-d H:i",$item["lastlogintime"])?></td>
    <td><?=$item["level_name"]?></td>
    </tr>
<?php
}
?>
<tr>
<td colspan="13">
<?php echo "共{$tmp["info"]["nums"]}<span=\"#FF0000\">个用户</span>&nbsp;&nbsp;当前{$tmp["info"]["current_page"]}/{$tmp["info"]["pages"]}页"; ?>
<?php if ($tmp["info"]["current_page"] != 1) { ?>
&nbsp;<a href="<?=$tmp["action_path"]."1"?>">首页</a>&nbsp;<a href="<?=$tmp["action_path"].$tmp["info"]["pre_page"]?>">上页</a>&nbsp;
<?php } ?>
<?php
for ($i = $tmp["info"]["spage"]; $i <= $tmp["info"]["epage"]; $i ++) {
    if ($i != $tmp["info"]["current_page"]) {
        echo "&nbsp;<a href=\"{$tmp["action_path"]}{$i}\">{$i}</a>&nbsp;";
    }
    else {
        echo "&nbsp;{$i}&nbsp;";
    }
    ?>
<?php } ?>
<?php if ($tmp["info"]["current_page"] != $tmp["info"]["pages"]) { ?>
&nbsp;<a href="<?=$tmp["action_path"].$tmp["info"]["next_page"]?>">下页</a>&nbsp;<a href="<?=$tmp["action_path"].$tmp["info"]["pages"]?>">末页</a>
<?php } ?>
</td>
</tr>
</table>
</form>
<script language="javascript">
$("tr[sid=search_id]").hover(
 function(){var vid = $(this).attr("vid"); $("tr[vid="+vid+"] > td").css("background-color", "#DDDDDD")},
 function(){var vid = $(this).attr("vid"); $("tr[vid="+vid+"] > td").css("background-color", "#FFFFFF")}
);
</script>
</div>
</body>
</html>