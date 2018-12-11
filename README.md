# Web_Final
## Django运行（For Windows）
### 创建虚拟环境
~~~
python -m venv venv
~~~
### 激活虚拟环境
~~~
cd venv/Scripts  
activate
~~~
### 退出虚拟环境
~~~
cd venv/Scripts
deactivate
~~~
### 依照requirements.txt安装需要的包
~~~
pip install -r requirements.txt
~~~
### 创建数据库
~~~
python manage.py makemigrations app_account
python manage.py migrate
~~~
### 运行
~~~
python manage.py runserver
~~~
