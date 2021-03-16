#!/bin/bash
sudo apt install nginx -y
sudo cp -r dist /var/www/
sudo cp apollo-acs.conf /etc/nginx/sites-available
sudo unlink /etc/nginx/sites-enabled/default
sudo ln -s /etc/nginx/sites-available/apollo-acs.conf /etc/nginx/sites-enabled/
sudo systemctl restart nginx
