function ajax_vote(id) {
	$.get('ajax.php?id='+id+'&'+Math.random(), function(data){
		if(parseInt(data)) {
			$('#votes_'+id).html(data);
			alert('ͶƱ�ɹ���');
		}else if(data == 'RS_INVALID_ID'){
			alert('��ЧID');
		}else if(data == 'RS_NEED_LOGIN'){
			alert('���ȵ�¼��');
		}else if(data == 'RS_GREATER_THAN_10') {
			alert('����Ͷ��Ʊ�������˰ɣ�����Ϣ��Ϣ����������^_^')
		}
		else{
			alert(data);
		}
	})
}
