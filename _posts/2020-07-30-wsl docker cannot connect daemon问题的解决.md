问题描述:
Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?

解决方法:
使用管理员身份运行terminal
```shell
sudo usermod -aG docker $USER
sudo cgroupfs-mount
sudo service docker start
sudo service docker stop
sudo service docker start
```

注: wsl2 因为内核不够新无法使用最新版docker 时间 :2020/8/1 
Windows有更新wsl2内核的软件 在本机无效 