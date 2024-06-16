---
title: "Ansible notes"
date: 2024-05-15T11:30:03+00:00
# weight: 1
# aliases: ["/first"]
tags: ["Ansible", "Note", "100daysWithHugo"]
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

## Links

[ansible docs](https://docs.ansible.com/ansible/latest/collections/ansible/builtin/index.html)

[getting started](https://devhints.io/ansible-guide)

[modules cheat sheet](https://devhints.io/ansible-modules)

[ansibe cheat sheet](https://devhints.io/ansible)

## Ansible playbook format

```yaml
- hosts: all
  user: ubuntu
  sudo: yes
  vars:
    env: sandbox
    ver: "0.1.0"
  tasks:
    - ...
  handlers:
    - ...
```

### Adding user

```yaml
- name: add user jeff
  user:
    state: present
    name: jeff
    system: no
    shell: /bin/sh
    groups: sudo,docker
    append: yes
    comment: "jeff is a system admin from 1.01.2024"
    password: temp_pass
```

### Upgrading Ubuntu system using apt

```yaml
- name: upgrade system
  apt:
    upgrade: yes
```

### Installing packages using apt

```yaml
- name: install required packages on new system
  apt:
    pkg:
     - docker.io
     - docker-compose
     - nfs-common
     - ufw
     - fail2ban
    state: present
    update_cache: yes
    install_recommends: yes
```

### Cleanup Ubuntu using apt

```yaml
- name: system cleanup
  apt:
    autoremove: yes
    purge: yes
```

### Pulling git repo

```yaml
- name: pull git repo
  git:
    repo: https://github.com/Hermanowicz/my-repo.git
    dest: /src/my-app
    single_brach: yes
    version: master
```

### Starting fail2ban service

```yaml
- name: start fail2ban service:
  service:
    name: fail2ban
    enabled: yes
    state: started
```

### Running shell command

```yaml
- name: runn shell command
  shell: echo "export foo=5" >> .zshrc
    args:
    # creates: /path/file  # skip if this exists
    # removes: /path/file  # skip if this is missing
    chdir: ~
```

### Exec script

```yaml
- name: exec script.sh
  script: /x/y/script.sh
  args:
    # creates: /path/file  # skip if this exists
    # removes: /path/file  # skip if this is missing
    chdir: ~
```

## Creating handle

```yaml
- name: start nginx
  action:
    service:
        name: nginx
        state: started

- name: restart nginx
  action:
    service:
        name: nginx
        state: reloaded
```
