---
title: "SQL Basics tutorial"
date: 2024-05-15T11:30:03+00:00
# weight: 1
# aliases: ["/first"]
tags: ["sql", "tutorial", "Note", "100daysWithHugo"]
author: ["Herman",] # multiple authors
showToc: flase
TocOpen: false
draft: false
hidemeta: false
comments: false
description: "SQL Basics tutorial, with code examples."
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

## Basic ops

### login to db at default socket address

```bash
mysql -u root -p
```

### login to db at ip and port with root

```bash
mysql -u root -p --host 10.0.123.9 --port 3333
```

### Display available databases on server

```sql
show databases;
-- version from bash
mysql -u user -p -e "show databases;"
-- with filter
show databases like 's%';
```

### Select database to use

```sql
use <my database name>;
```

### Getting tables in database

```sql
show tables;
```

### Describing table

```sql
describe <my_table_name>;
```

### Show indexes

```SQL
show indexes from table_name;
```
