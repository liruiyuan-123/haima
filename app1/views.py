from django.shortcuts import render,HttpResponse,redirect

# Create your views here.
from django.views.generic import View

# 注册
class Register(View):
    # 注册页面
    def get(self, request):
        return render(request,'register.html')

    # 注册成功后跳转至登录页面
    def post(self, request):
        return redirect('login')

# 登录
class Login(View):
    def get(self,request):
        return render(request,'login.html')
    def post(self,request):
        return redirect('index')


# 首页
def index(request):
    return render(request,'index.html')


# 购物车
def cart(request):
    return render(request,'cart.html')


class Info(View):
    def get(self, request):
        return render(request,'user_center_info.html')





# 404
def page_not_found(request, exception):
    return render(request, '404.html')

# 500
def page_error(request):
    return render(request, '500.html')


# 日志
import logging
# 生成一个以当前文件名为名字的logger实例

logger = logging.getLogger(__name__)

# 生成一个名为collect的logger实例
collect_logger = logging.getLogger("collect")

def index_logger(request):

    logger.debug("debug1。。。。")

    logger.info("info1。。。。")

    logger.debug("debug2")

    collect_logger.info("用户：rose")
    return HttpResponse("OK")
