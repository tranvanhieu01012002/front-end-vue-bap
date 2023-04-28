#! /bin/bash
sudo systemctl restart nginx
sudo chmod -R 750 /var/www/game.g-learning.click/scripts
sudo chmod 755 /var/www/game.g-learning.click/appspec.yml