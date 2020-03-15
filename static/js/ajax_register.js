/*
$(function(){
		$('#user_name').change(function(){
			console.log($(this).val());
			var user_name = $(this).val();
			var reg_name = /^[a-zA-Z0-9_-]{4,19}$/;
			//ajax传到后台
			$.ajax({
			   type: "get",
               //写调用验证用户名API的url
			   url: "http://127.0.0.1:8000/check/",
			   data: "user_name="+user_name,
			   dataType:"json",
                //拿到数据执行代码
			   success: function(jieguo){
			     if(reg_name.test(user_name) == false){
			     	$('#error_name').html('用户名应该是5-20位！').removeClass('red').addClass('green')
			     }else if(jieguo.result=='ok'){
			     	$('#error_name').html('欢迎注册！').removeClass('green').addClass('red')
			     }else{
					$('#error_name').html('用户名已被注册请更换').removeClass('green').addClass('red')

				 }
			   },
			});
		})
	})

 */

