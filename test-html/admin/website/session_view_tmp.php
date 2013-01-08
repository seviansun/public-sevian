<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>session数据</title>
<link href="<?=$this->template_file("admin/css.css")?>" rel="stylesheet" type="text/css">
<?=$this->SYSTEM_js("jquery-1.3.2.min.js")?>
<script language="javascript">

</script>
</script>
</head>
<body>
<div id="add">
<table  cellspacing="1" cellpadding="5" width="100%" >
<tr class="head">
<td width="20%">表名称</td>
<td width="20%">session数量</td>
</tr>
<?php foreach ($tmp["output"] as $item) { ?>
<tr>
<td><?=$item[0]?></td>
<td><?=$item[1]?></td>
</tr>
<?php } ?>
<tr><td colspan="10">共<?=$tmp["nums"]?>条记录</td></tr>
</table>
</div>
</body>
</html>