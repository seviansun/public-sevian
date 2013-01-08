<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>在线用户</title>
<link href="<?=$this->template_file("admin/css.css")?>" rel="stylesheet" type="text/css">
<?=$this->SYSTEM_js("jquery-1.3.2.min.js")?>
</script>
</head>
<body>
<div id="add">
<table  cellspacing="1" cellpadding="5" width="100%" >
<tr class="head">
<td width="10%">用户名</td>
<td width="10%">登陆时间</td>
<td width="10%">最后操作时间</td>
<td width="10%">在线时间(分钟)</td>
<td width="20%">IP所在</td>
<td width="10%">IP</td>
<td>监控</td>
</tr>
<?php
foreach ($tmp["info"] as $item) {
    ?>
    <tr>
    <td><?=$item["username"]?></td>
    <td><?=date("Y-m-d H:i:s",$item["timestamp"])?></td>
    <td><?=date("Y-m-d H:i:s",$item["last_time"])?></td>
    <td><?=ceil(($item["last_time"] - $item["timestamp"])/60)?></td>
    <td><?=$item["ip_data2"]?></td>
    <td><?=$item["ip"]?></td>
    <td><a href="<?=$this->SYSTEM_path("admin/website/ip_from/{$item["ip"]}")?>" target="_blank">反向解析</a>&nbsp;<a href="<?=$this->SYSTEM_path("admin/website/ip_login/{$item["ip"]}")?>" target="_blank">用户详情</a></td>
    </tr>
<?php
}
?>
<tr><td colspan="10">
<?php
echo "共".count($tmp["info"])."个在线用户";

?>
</td></tr>
</table>
</div>
</body>
</html>