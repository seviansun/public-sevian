<?php
define('BASE_DIR' , '/subject/haier/');
define('BASE_URL' , 'http://subject.liba.net/haier/');

/* DB */
$cfg_db_host = 'localhost';
$cfg_db_user = 'root';
$cfg_db_password = '123456';
$cfg_db_name = 'haier';


/* Smarty */
$config['smarty']['template_dir'] = BASE_DIR . 'views/';
$config['smarty']['compile_dir'] = BASE_DIR . 'cache/';
$config['smarty']['cache_dir'] = BASE_DIR . 'cache/';
$config['smarty']['left_delimiter'] = '{{';
$config['smarty']['right_delimiter'] = '}}';
$config['smarty']['caching'] = true;
$config['smarty']['force_compile'] = true;
$config['smarty']['compile_check'] = true;
$config['smarty']['debugging'] = false;


/* ·ÖÒ³ */
$rows_per_page = 2;