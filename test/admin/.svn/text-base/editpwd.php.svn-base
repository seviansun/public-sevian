<form action="<?=SYSTEM_base_url?>admin/user/editpwd" method="post" name="editpwdform" id="editpwdform">新密码：<input type="text" name="pwd" id="pwd" value=""><input type="button" name="submit" id="editbutton" value="修改"></form>
				<script type="text/javascript">
				
		
$("#editbutton").click(function(data) {
			var pwdval = $("#pwd").val();
	$.post("<?=SYSTEM_base_url?>admin/user/editpwd/<?=$tmp['uid']?>",{pwd:pwdval},function(data) {
	  if(data == "1") {
							  alert("修改成功");
							  window.location.href="<?=SYSTEM_base_url?>admin/user/usermanage";

	  }
	})

})

				/* var options = {
	                beforeSubmit:function(data) {
					  alert('dsfasdf---');
					},			
				    success:function(data){
					   if(data == "1") {
					      alert("修改成功");
						  $("#wins").hide();
		               }
					}
				 
				 }
                 $("editpwdform").ajaxForm(options);*/
				</script>