---
title: "Simple file server in golang"
date: 2024-05-17T11:38:05+00:00
# weight: 1
# aliases: ["/first"]
tags: ["snippet", "links", "Note", "100daysWithHugo"]
author: ["Herman",] # multiple authors
showToc: flase
TocOpen: false
draft: false
hidemeta: false
comments: false
description: "Snippet with explanation on how to use build in file server in golang using native go package.
Example shows how to host html page embeded in to binary, over kill but hey. TLS supporrt will be added."
# canonicalURL: "https://canonical.url/to/page"
disableHLJS: false # to disable highlightjs
disableShare: false
hideSummary: false
searchHidden: false
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

Snippet with explanation on how to use build in file server in golang using native go package.
Example shows how to host html page embeded in to binary, over kill but hey. TLS supporrt will be added.
at later stage. Two options are at play Makecert and native go script to create dev certs.

I very importent thing to note is that file server can be also used with native filesystem.
Thanks to that we can host files like, css, js or even a downloads for clients and colegues.

---

## Code

```go
package main

import (
 "embed"
 "fmt"
 "io/fs"
 "log"
 "net/http"
)

//go:embed site
var f embed.FS

func main() {
 fmt.Println("starting file server on port: 8090")
 rootF, err := fs.Sub(f, "site")

 if err != nil {
  log.Fatalln("Cannot change root dir to site.", err.Error())
 }

 handler := http.FileServer(http.FS(rootF))
 http.Handle("/", handler)
 log.Fatal(http.ListenAndServe("0.0.0.0:8090", nil))
}
```

## Explanation

"Site" is catalog with embedded static html site. which will be loaded in to binary.

> //go:embed.FS

rootF is filesystem created at sub-branch ("site") from embed.FS

> rootF, err := fs.Sub(f, "site")

handler uses fs.FS via http.FS native go filesystem implementation to return http.Handler.

> handler := http.FileServer(http.FS(rootF))

Mounting site catalog at root path using default mux

> http.Handle("/", handler)
