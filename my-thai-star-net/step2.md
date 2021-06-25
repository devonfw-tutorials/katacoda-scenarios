`apt-get update`{{execute}}

`apt-get install nginx`{{execute}}

`y`{{execute}}

`service nginx start`{{execute}}

`service nginx status`{{execute}}

`nano /etc/nginx/sites-available/default`{{execute}}

add:
`        proxy_pass         http://localhost:8081;
          proxy_http_version 1.1;
          proxy_set_header   Upgrade $http_upgrade;
          proxy_set_header   Connection keep-alive;
          proxy_set_header   Host $host;
          proxy_cache_bypass $http_upgrade;
          proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
          proxy_set_header   X-Forwarded-Proto $scheme;`{{copy}}

`cd /var/www`{{execute}}

`mkdir myThaiStar`{{execute}}

`cd`{{execute}}

`nano /etc/systemd/system/mythaistar.service`{{execute}}

`\[Unit\]
Description=My Thai Star Web App 

[Service]
WorkingDirectory=/var/www/myThaiStar
ExecStart=/usr/bin/dotnet /var/www/myThaiStar/myThaiStar.dll
Restart=always
#Restart service after 10 seconds if the dotnet service crashes:
RestartSec=10
SyslogIdentifier=myThaiStar
Environment=ASPNETCORE_ENVIRONMENT=Production

[Install]
WantedBy=multi-user.target `{{copy}}

`systemctl enable mythaistar.service`{{execute}}

`cd my-thai-star/net/netcore/OASP4Net.Application.WebApi`{{execute}}

`dotnet publish -c release -o /var/www/myThaiStar`{{execute}}

`env DOTNET_CLI_HOME=/root systemctl start mythaistar.service`{{execute}}
