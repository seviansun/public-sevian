<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>测试数据输入</title>
<link href="<?=$this->template_file("admin/css.css")?>" rel="stylesheet" type="text/css">
<?=$this->SYSTEM_js("jquery-1.3.2.min.js")?>
<?=$this->SYSTEM_js("jquery.datepick.pack.js")?>
<?=$this->SYSTEM_js("jquery.datepick-zh-CN.js")?>
<link href="<?=SYSTEM_base_url?>js/jquery.datepick.css" rel="stylesheet" type="text/css">
<script language="javascript">
function check() {
    return true;
}
</script>
</head>
<body>
<div id="add">
<form name="form2" id="form2" method="post" action="" onSubmit="return check()">
  <table cellspacing="1" cellpadding="5" width="100%" style="margin:6px 0 0 0;">
   <tr>
  <td style="color:#FF0000;font-weight:bold;">当前：测试数据输入</td>
  </tr>
  <tr class="head">
  <td>家庭空间-会员浏览数据</td>
  </tr>
  <tr>
  <td><textarea name="content[family_pv]" id="family_pv" style="width:60%;height:150px;"></textarea><br>(文件格式：会员ID|日志广场分类名称|浏览次数
<br>备注：会员ID是会员的userid、整型)</td>
  </tr>
  <tr class="head">
  <td>家庭空间-会员写日记统计</td>
  </tr>
  <tr>
  <td><textarea name="content[family_diary]" id="family_diary" style="width:60%;height:150px;"></textarea><br>会员写日记统计的LOG文件
<br>文件格式：会员ID|日记类型名称|日记数量
<br>备注：会员ID是会员的userid、整型，日记类型名称只包括装修、结婚、妈妈宝宝，如果当天会员没有新发日记则不记录</td>
  </tr>
  <tr class="head">
  <td>家庭空间-会员开通/修改个人信息、设置</td>
  </tr>
  <tr>
  <td><textarea name="content[family_userdata]" id="family_userdata" style="width:60%;height:150px;"></textarea><br>文件格式：会员ID|变更类型|会员生日|会员性别|装修阶段|结婚阶段|备孕阶段|怀孕阶段|已有宝宝
<br>备注：变更类型为create和update, 会员ID是会员的userid、整型, 生日格式为Ymd, 会员性别1为男性、2为女性，阶段信息为布尔类型，值为0或者1</td>
  </tr>
  <tr class="head">
  <td>注册登录我的篱笆-会员注册、修改个人信息</td>
  </tr>
  <tr>
  <td><textarea name="content[user_userdata]" id="user_userdata" style="width:60%;height:150px;"></textarea><br>文件格式：会员ID|变更类型|会员生日|会员性别|城市|区域
<br>备注：变更类型为create、update，会员ID是会员的userid(整型), 生日格式为Ymd，会员性别1为男性、2为女性</td>
  </tr>
  <tr class="head">
  <td>注册登录我的篱笆-会员登录</td>
  </tr>
  <tr>
  <td><textarea name="content[user_login]" id="user_login" style="width:60%;height:150px;"></textarea><br>文件格式：会员ID|登录次数
<br>备注：会员ID是会员的userid(整型)</td>
  </tr>
  <tr class="head">
  <td>论坛-会员(cate, forum, sort)行为</td>
  </tr>
  <tr>
  <td><textarea name="content[club_stats]" id="club_stats" style="width:60%;height:150px;"></textarea><br>文件格式：会员ID|大类名称|分版名称|分类名称|浏览数|发帖数|回帖数
<br>备注：会员ID是会员的userid(整型)</td>
  </tr>
  <tr class="head">
  <td>论坛-会员公分</td>
  </tr>
  <tr>
  <td><textarea name="content[club_userposts]" id="club_userposts" style="width:60%;height:150px;"></textarea><br>文件格式：会员ID|工分
<br>备注：会员ID是会员的userid(整型), 只统计当天公分有变化的会员</td>
  </tr>
  <tr class="head">
  <td>业主圈-会员发帖行为</td>
  </tr>
  <tr>
  <td><textarea name="content[group_posts]" id="group_posts" style="width:60%;height:150px;"></textarea><br>文件格式：会员ID|群组ID|发帖数量|回帖数量
<br>备注：会员ID是会员的userid(整型)</td>
  </tr>
  <tr class="head">
  <td>业主圈-会员加入/退出业主圈</td>
  </tr>
  <tr>
  <td><textarea name="content[group_user]" id="group_user" style="width:60%;height:150px;"></textarea><br>文件格式：会员ID|群组ID|变更类型
<br>备注：会员ID是会员的userid(整型), 变更类型为create、delete(create表示加入业主圈、delete表示退出业主圈)</td>
  </tr>
  <tr class="head">
  <td>大市场xml数据</td>
  </tr>
  <tr>
  <td><textarea name="content[mall]" id="mall" style="width:60%;height:150px;"></textarea></td>
  </tr>
  <tr><td><input type="submit" value="提交数据"></td></tr>
  </table>
  </form>
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