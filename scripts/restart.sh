#! /bin/bash
sudo systemctl restart nginx
chmod -R 750 /var/www/game.g-learning.click/scripts
chmod 755  /var/www/game.g-learning.click/scripts appspec.yml