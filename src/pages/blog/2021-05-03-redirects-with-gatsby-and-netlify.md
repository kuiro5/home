---
templateKey: post
title: 301/302 Redirects with Gatsby and Netlify
date: 2021-05-04T03:52:41.441Z
tags:
  - programming
---

Netlify supports server-side redirects through a top-level file, `_redirects` (no extension). The format of the file is:
```
/old-path /new-path status
```

If you need more advanced options, Netlify also offers [more comprehensive options using TOML](https://docs.netlify.com/routing/redirects/#syntax-for-the-netlify-configuration-file).

In order to serve this file on deploy, you need to utilize [Gatsby's static folder](https://www.gatsbyjs.com/docs/how-to/images-and-media/static-folder/). At the root of your project, create a folder `static/`, and add the file `_redirects` (`/project/static/_redirects`). Anything in `static`, will be copied and served from root on build.

Add your redirects to `_redirects`:

```
/home /home-beta 302
```

Deploy.
