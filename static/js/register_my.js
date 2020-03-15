/*
$(function(){
    //为表单添加change事件
    $('form :input').change(function() {
        $(this).parent().find('.red','.green').remove();

        $(this).parent().find('g').remove();
        //验证用户名规则
        // if($(this).is('#user_name')){
        //     var name = $(this).val();
        //     var reg_name = /^[a-zA-Z0-9_-]{4,19}$/;
        //     if(name=='' || reg_name.test(name)==false ){
        //         $('#error_name').remove();
        //         $(this).after("<span class='red '>用户名必须5-20位</span>")
        //     }
        // }
        //验证密码
        if($(this).is('#pwd')){
            var pwd = $(this).val();
            console.log(pwd)
            var reg_pwd = /^[a-zA-Z0-9_-]{7,19}$/;
            if(name=='' || reg_pwd.test(pwd)==false ){
                $(this).after("<span class='red '>密码必须8-20位</span>")
            }else{
                $(this).after("<span class='green '>密码符合规则</span>")
            }
        }

        //确认密码是否正确
        if($(this).is('#cpwd')){
            var cpwd = $(this).val();
            var pwds = $('#pwd').val();
            console.log(cpwd);
            console.log(pwds);
            if(name==''){
                $(this).after("<span class='red'>请重新输入密码！</span>")
            }
            if(cpwd==pwds){
                $(this).after("<span class='red green'>两次密码一致！</span>")
            }else{

                $(this).after("<span class='red'>两次密码不一致！</span>")
            }
        }
        //验证邮箱
        if($(this).is('#email')){
            console.log("邮箱格式不对");
            var email = $(this).val();
            var reg_email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if(name=='' || reg_email.test(email)==false ){
                $(this).after("<span class='red'>邮箱格式不正确</span>")
            }else{
                $(this).after("<span class='red green'>格式正确</span>")
            }
        }
    });

    //提交事件，默认提交True
    $('form').submit(function(event) {
        //默认提交
        flag = true;
        //如果一个不合法 flag=false.自动不跳转
        $("form :input.required").each(function(){
            if($(this).val()==''){
                flag = false;
            }
        })
        if(flag==false){
            $('#err_msg').html("请输入必填项！").addClass('msg')
        }

        return flag;
    });
})

 */
$(function () {
    //表单验证
    $('form :input').change(function () {
        $(this).parent().find('.right').remove();
        $(this).parent().find('.wrong').remove();
        //用户名在ajax验证过了，

        //验证密码
        if($(this).is('#pwd')){
            var pwd = $(this).val();
            var pwds = /^[a-zA-Z0-9_-]{6,16}$/;
            if(pwd=='' || pwds.test(pwd)==false ){
                $(this).after("<span class='wrong'>密码必须在6-16个字符之间</span>")
            }else{
                $(this).after("<span class='right'>可用</span>")
            }
        };
        //验证两次密码是否一致
        if($(this).is('#cpwd')){
            // console.log("密码必须4-6位");
            var pwd = $('#pwd').val();
            var cpwd =$(this).val();
            var pwds = /^[a-zA-Z0-9_-]{6,16}$/;
            if(cpwd=='' || pwds.test(cpwd)==false || cpwd != pwd ){
                $(this).after("<span class='wrong'>两次密码输入不一致</span>")
            }else{
                $(this).after("<span class='right'>两次密码一致</span>")
            }
        };
        // 验证邮箱
        if($(this).is('#email')){
            // console.log("密码必须4-6位");
            var email = $(this).val();
            var emails = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if(email == '' || emails.test(email)==false ){
                $(this).after("<span class='wrong'>邮箱格式不正确</span>")
            }else{
                $(this).after("<span class='right'>可用</span>")
            }
        };

    });

    //提交事件
    $('form').submit(function(event) {
        var user_names = /^[a-zA-Z0-9_-]{5,16}$/;
        var pwds = /^[a-zA-Z0-9_-]{6,16}$/;
        var emails = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        var user_name = $('#user_name').val();
        var pwd = $('#pwd').val();
        var cpwd = $('#cpwd').val();
        var email = $('#email').val();
        //默认提交
        flag = true;
        //alert('点提交了....');
        //如果一个不合法 flag=false.自动不跳转
        $("form :input.required").each(function(){
            if($(this).val()=='' || user_names.test(user_name) == false || pwds.test(pwd) == false || cpwd != pwd || emails.test(email) == false){
                flag = false;
            }
        });
        if(flag==false){
            alert('格式存在!')
        }
        return flag;
    });
})
