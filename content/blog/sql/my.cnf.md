---
title: "MySql configuration file example"
date: 2024-05-15T11:30:03+00:00
# weight: 1
# aliases: ["/first"]
tags: ["mysql", "configuration", "Note", "100daysWithHugo"]
author: ["Herman",] # multiple authors
showToc: flase
TocOpen: false
draft: false
hidemeta: false
comments: false
description: "SQL Alter tutorial code examples."
# canonicalURL: "https://canonical.url/to/page"
disableHLJS: false # to disable highlightjs
disableShare: false
hideSummary: false
searchHidden: true
ShowReadingTime: true
ShowBreadCrumbs: true
ShowPostNavLinks: true
ShowWordCount: true
ShowRssButtonInSectionTermList: true
UseHugoToc: true
# cover:
#     image: "<image path/url>" # image path/url
#     alt: "<alt text>" # alt text
#     caption: "<text>" # display caption under cover
#     relative: false # when using page bundles set this to true
#     hidden: true # only hide on current single page
# editPost:
#     URL: "https://github.com/<path_to_repo>/content"
#     Text: "Suggest Changes" # edit text
#     appendFilePath: true # to append file path to Edit link
---
## my.conf file example

```cnf
[mysqld]
#
# /etc/my.cnf
# /etc/mysql/my.cnf
#
# Remove leading # and set to the amount of RAM for the most important data
# cache in MySQL. Start at 70% of total RAM for dedicated server, else 10%.
port=3306
innodb_buffer_pool_size = 128M
datadir = /var/lib/mysql
skip-name-resolve
slow-query-log = 1
slow-query-log-file = /var/log/mysql-slow.log
long_query_time = 1
```
