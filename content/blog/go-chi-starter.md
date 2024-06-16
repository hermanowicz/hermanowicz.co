---
title: "Golang Chi framewark starter"
date: 2024-05-15T11:30:03+00:00
# weight: 1
# aliases: ["/first"]
tags: ["golang", "snippet", "chi", "Note", "100daysWithHugo"]
author: ["Herman",] # multiple authors
showToc: flase
TocOpen: false
draft: false
hidemeta: false
comments: false
description: "Starter template for Chi freamwork in golang, with make file and all nessacery commands to run new web development project."
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

## Commands:

```bash
# init go module in current dir
go mod init github.com/Hermanowicz/new-app

# install chi freamowk
go get -u github.com/go-chi/chi/v5

# run tidy
go mod tidy
```

## Makefile:

```make
build:
  go build -o app dist/main.go

clanup:
  rm dist/app
```

## main.go

```go
package main

import (
    "net/http"

    "github.com/go-chi/chi/v5"
    "github.com/go-chi/chi/v5/middleware"
)

func main() {
    r := chi.NewRouter()

    r.Use(middleware.Logger)
    r.Use(middleware.Recoverer)
    r.Use(middleware.CleanPath)
    r.Use(middleware.Heartbeat("/ping"))

    r.Get("/", func(w http.ResponseWriter, r *http.Request) {
        w.Write([]byte("Hello World!"))
    })
    http.ListenAndServe(":3000", r)
}
```

## Docs

[Chi main page](https://go-chi.io/#/)

[Chi middlewear](https://go-chi.io/#/pages/middleware)

[Chi examples](https://github.com/go-chi/chi/tree/master/_examples)

[Chi repo](https://github.com/go-chi/chi)
