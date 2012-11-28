function ajax_vote(id) {
	$.get('ajax.php?id='+id+'&'+Math.random(), function(data){
		if(parseInt(data)) {
			$('#votes_'+id).html(data);
			alert('投票成功。');
		}else if(data == 'RS_INVALID_ID'){
			alert('无效ID');
		}else if(data == 'RS_NEED_LOGIN'){
			alert('请先登录。');
		}else if(data == 'RS_GREATER_THAN_10') {
			alert('今天投的票数过多了吧，请休息休息，明天再来^_^')
		}
		else{
			alert(data);
		}
	})
}
