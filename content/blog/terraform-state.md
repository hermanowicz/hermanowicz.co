---
title: "Terraform state in S3 & DynamoDB"
date: 2024-05-17T11:38:05+00:00
# weight: 1
# aliases: ["/first"]
tags: ["snippet", "terraform", "AWS", "Note", "100daysWithHugo"]
author: ["Herman",] # multiple authors
showToc: flase
TocOpen: false
draft: false
hidemeta: false
comments: false
description: "How to hold terraform state in AWS, soo other users in team can use it also. Example tested in production."
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

Terraform can make life simple & enjoyable or really miserable. State aka. what is currently deployed is one of those things.
Sharing state using zip's, simple bucket uploads can will create huge problem with different state at each of user's workstation.
Lack of "single source of truth" can bring production to grinding halt.

To avoid those problems we can store state in Terraform Cloud or Online in S3, GCS or Azure Blob
This post will show how to do it using AWS services.

## Table of contents

## Setting up S3

```bash
aws s3 mb s3://hermanowicz.co-terrafrom-state \
  --region eu-central-1 --profile hermanowicz.co

# enabling versioning

aws s3api put-bucket-versioning --bucket hermanowicz.co-terrafrom-state --versioning-configuration Status=Enabled
```

## Setting up DynamoDB

```bash
aws dynamodb create-table \
    --table-name Terraform_State \
    --attribute-definitions AttributeName=LockID,AttributeType=S \
    --key-schema AttributeName=LockID,KeyType=HASH \
    --billing-mode PAY_PER_REQUEST \
    --profile hermanowicz.co --region eu-central-1
```

## Terraform state config

```hcl
terraform {

  backend "s3" {
    encrypt = "true"
    region = "eu-west-1"
    bucket = "bucket_for_terrafrom_state" # versioning: om
    dynamodb_table = "Terraform_State" # LockID: string
    key = "dev"
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }

    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "~> 2.25.0"
    }
  }
}

provider "aws" {
  region = "eu-west-1"
}

provider "kubernetes" {
  config_path = "~/.kube/config"
}
```

## Wrap up

Approach taken by me is to create manually resources needed to support later terraform actions.
That way I don't relay completely on terraform, plus create after destroy runs much faster.

