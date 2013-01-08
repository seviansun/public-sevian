<?php
error_reporting(0);
session_start();

/* mock - available users */
$users = array(
	1	=> 'liba',
	2	=> 'photoxu',
	3	=> 'user1',
	4	=> 'user2',
	5	=> 'user3',
);

if(isset($_POST['act']) && $_POST['act'] == 'login') {
	$userid = intval($_POST['userid']);
	$username = $_POST['username'];
	if($users[$userid] == $username) {
		$_SESSION['userid'] = $userid;
		$_SESSION['username'] = $username;
		exit('登录成功');
	}
}
if(@$_GET['act'] == 'logout') {
	$_SESSION['userid'] = 0;
	$_SESSION['username'] = '';
	exit;
}
?>
<pre>
可用用户：
1 / liba
2 / photoxu
3 / user1
4 / user2
5 / user3
</pre>
<form method='post'>
userid:<input type='text' name='userid' value='1'/><br/>
username:<input type='text' name='username' value='liba'/><br/>
<input type='submit' name='act' value='login' />

</form>