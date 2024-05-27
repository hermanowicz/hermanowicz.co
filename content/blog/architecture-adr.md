---
title: "ADR - Note"
date: 2024-05-15T11:37:03+00:00
# weight: 1
# aliases: ["/first"]
tags: ["Architecture", "ADR", "Note", "100daysWithHugo"]
author: ["Herman",] # multiple authors
showToc: flase
TocOpen: false
draft: false
hidemeta: false
comments: false
description: "Desc Text for Hello, World post."
# canonicalURL: "https://canonical.url/to/page"
disableHLJS: false # to disable highlightjs
disableShare: false
disableHLJS: false
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

## Origin:

[pmerson/ADR-template](https://github.com/pmerson/ADR-template)

## Usage guidelines:

 - Each ADR is a plain text, 1-2 page document
 - ADRs should be numbered
 - ADRs should be stored within each software project repo
 - Create a separate repo for crosscutting ADRs
 - Track ADRs in the backlog
 - Review ADRs
 - Create ADRs for *significant* design decisions
 - This template is a suggestion that you may want to adopt or adapt. In any case, establishing and sharing a template for ADRs in your team or organization is a good idea.

## ADR template:

```md
# ADR N: brief decision title
Describe here the forces that influence the design decision, including technological, cost-related, and project local.

## Decision
Describe here our response to these forces, that is, the design decision that was made. State the decision in full sentences, with active voice ("We will...").

## Rationale
Describe here the rationale for the design decision. Also indicate the rationale for significant *rejected* alternatives. This section may also indicate assumptions, constraints, requirements, and results of evaluations and experiments.

## Status
[Proposed | Accepted | Deprecated | Superseded]
If deprecated, indicate why. If superseded, include a link to the new ADR.

## Consequences
Describe here the resulting context, after applying the decision. All consequences should be listed, not just the "positive" ones.
