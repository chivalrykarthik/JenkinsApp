#!/bin/bash
cd /home/ec2-user/proj/
echo "Path"
pwd
echo "Path"
pm2 stop all
pm2 delete all