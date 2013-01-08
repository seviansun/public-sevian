<?php
/**
 * 截取中文字符串函数
 *
 * @param string $string 原始字符串
 * @param intval $start 起始位置
 * @param intval $sublen 截取长度
 * @return string 截取结果
 */
function cn_substr($string, $start, $sublen) {
	$start = $start*2;
	$strlen = strlen($string);
	$tmpstr = '';
	 
	for($i=0; $i< $strlen; $i++) {
		if($i>=$start && $i< ($start+$sublen)) {
			if(ord(substr($string, $i, 1))>129) {
				$tmpstr.= substr($string, $i, 2);
			}else{
				$tmpstr.= substr($string, $i, 1);
			}
		}
		if(ord(substr($string, $i, 1))>129) {
			$i++;
		}
	}
	if(strlen($tmpstr)< $strlen ) {
		$tmpstr.= "...";
	}
	return $tmpstr;
}

/**
 * 生成分页条
 *
 * @param intval $currentpage 当前页数
 * @param intval $max_page 总页数
 * @param string $base_url URL
 * @return string 分页条
 */
function pager($currentpage, $max_page, $base_url) {
	$result = '';

	if($currentpage<=1) {
		$currentpage=1;
	}

	if($currentpage>=$max_page) {
		$currentpage=$max_page;
	}

	$pre = $sub = '';

	for($i=1; $i<=$max_page; $i++) {

		if( ($i<=$currentpage-3 && $i!=1) || ($i>=$currentpage+3 && $i!=$max_page)) {
			if(($i<=$currentpage-3 && $i!=1) && !$pre) {
				$pre = '... ';
				$result .= $pre;
			}
			if(($i>=$currentpage+3 && $i!=$max_page) && !$sub) {
				$sub = '... ';
				$result .= $sub;
			}
			continue;
		}


		$current_style = ($i==$currentpage) ? 'style="color:red"' : '';
		$result .= "<a href='{$base_url}?page={$i}' {$current_style}>{$i}</a> ";

	}
	return $result;
}

/**
 * 获取IP地址
 *
 */
function GetIP() {
    if ($_SERVER["HTTP_X_FORWARDED_FOR"]){ 
        $ip = $_SERVER["HTTP_X_FORWARDED_FOR"];
	}
    else if ($_SERVER["HTTP_CLIENT_IP"]) {
        $ip = $_SERVER["HTTP_CLIENT_IP"]; 
	}
    else if ($_SERVER["REMOTE_ADDR"]) {
        $ip = $_SERVER["REMOTE_ADDR"]; 
	}
    else if (getenv("HTTP_X_FORWARDED_FOR")) {
        $ip = getenv("HTTP_X_FORWARDED_FOR"); 
	}
    else if (getenv("HTTP_CLIENT_IP")) {
        $ip = getenv("HTTP_CLIENT_IP"); 
	}
    else if (getenv("REMOTE_ADDR")) {
        $ip = getenv("REMOTE_ADDR"); 
	}
    else{ 
        $ip = "Unknown"; 
	}
    return $ip; 
} 
