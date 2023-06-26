# Techainer Website

This is source code of Techainer's main website project

## Technology

- Language `Javascript`
- Framework `Next.js`
- Theme [`StartP Envytheme`](https://startp-next.envytheme.com/)

## Need

- Node: version 14.16.1

## Run

Use `npm run dev` or `yarn run dev` to run code

## Deploy

We use [`Vercel`](https://vercel.com/) to deploy frontend code
Learn how to use `Vercel` for more information.

## Domain

We have `2 domain` for website

[`https://techainer.com/`](https://techainer.com/) for public version
Deploy from `master` branch

[`https://techainer-public-website-staging.vercel.app/`](https://techainer-public-website-staging.vercel.app/) for staging version
Deploy from `staging` branch
You can destroy and deploy new staging link and branch whenever you want

## Build

Public and staging domain are deployed by `admin@techainer.com` github account, so when you want to push new code in domain, you need to change your local github account.
To change your local config email with `admin@techainer.com`, run in terminal

```sh
git config --global user.email "admin@techainer.com"
```

In `.git/config` folder, we have
```sh
url = https://Techainer-admin:TOKEN@github.com/Techainer/public-website.git
```

Replace the `TOKEN` in the upper url with token in github `admin@techainer.com`
Now you can push your code into `master` or `staging` branch
Auto build when you push your code into these branch

Any code you want to change into `https://techainer.com`, you need to change in master branch then push into github by `admin@techainer.com` account

Code from other branch expect `master`, just push then merge into `master`. After merge, checkout into `master`, pull new code, do some little change like a space in code then push into `master`. That how I deploy code into `https://techainer.com`. Do same thing with `staging` domain

## Code structure
```
.
├── README.md                       # README file
├── .github                         # GitHub folder
├── .vscode                         # VSCode configuration
├── public                          # Public assets folder
├── components                      #  Pages  components
│       ├──  about                  #  About Page components
│       ├──  blog                   #  Blog page components
│       ├──  blog-details           #  A blog post components
│       ├──  careers                #  Careers Page components
│       ├──  contact                #  Contact Page components
│       ├──  docchain               #  Docchain Page components
│       ├──  ekyc                   #  Ekyc Page components
│       ├──  home                   #  Landing Page components
│       ├──  horus                  #  Horus Page components
│       ├──  docchain               #  Docchain Page components
│       ├──  Layout                 #  Reuse components
│       ├──  docchain               #  Docchain Page components
│       ├──  partnership            #  Partnership Page components
├── locales                         #  Contents
├── pages                           #  Pages
└── utils                           #  Reuse data
```
