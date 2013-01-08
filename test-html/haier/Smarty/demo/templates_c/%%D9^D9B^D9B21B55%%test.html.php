<?php /* Smarty version 2.6.18, created on 2011-01-14 08:33:20
         compiled from test.html */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('modifier', 'truncate', 'test.html', 13, false),)), $this); ?>



<?php if ($this->_tpl_vars['v'] == 1): ?>
	<?php $_from = $this->_tpl_vars['name']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['key'] => $this->_tpl_vars['item']):
?>
		<?php echo $this->_tpl_vars['item']; ?>

	<?php endforeach; endif; unset($_from); ?>
<?php elseif ($this->_tpl_vars['v'] > 1): ?>
    sadhjkadjkha
<?php endif; ?>

<a href="" title="<?php echo $this->_tpl_vars['string']; ?>
"><?php echo ((is_array($_tmp=$this->_tpl_vars['string'])) ? $this->_run_mod_handler('truncate', true, $_tmp, 20, "...", true) : smarty_modifier_truncate($_tmp, 20, "...", true)); ?>
</a>
