<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>IP用户注册情况</title>
<link href="<?=$this->template_file("admin/css.css")?>" rel="stylesheet" type="text/css">
<?=$this->SYSTEM_js("jquery-1.3.2.min.js")?>
</script>
</head>
<body>
<div id="add">
<table  cellspacing="1" cellpadding="5" width="100%" >
<tr class="head">
<td width="10%">用户名</td>
<td width="15%">注册时间</td>
<td width="30%">累计消费</td>
<td>第几个订单</td>
</tr>
<?php
foreach ($tmp["info"]["info"] as $item) {
    ?>
    <tr>
    <td><?=$item["username"]?></td>
    <td><?=date("Y-m-d H:i:s",$item["registetime"])?></td>
    <td><?=$item["totals"]?></td>
    <td><?=$item["order_number"]?></td>
    </tr>
<?php
}
?>
<tr><td colspan="10">
<?php
echo "共{$tmp["info"]["nums"]}个用户&nbsp;当前{$tmp["info"]["current_page"]}页";
for ($i = $tmp["info"]["spage"]; $i <= $tmp["info"]["epage"]; $i ++) {
    if ($i == $tmp["info"]["current_page"]) {
        echo "&nbsp;{$i}&nbsp;";
    }
    else {
        echo "&nbsp;<a href=\"{$tmp["page_path"]}{$i}\">{$i}</a>&nbsp;";
    }
}
?>
</td></tr>
</table>
</div>
</body>
</html>