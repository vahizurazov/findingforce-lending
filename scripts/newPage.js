const fs = require('fs');
const moment = require('moment');
const slugify = require('@sindresorhus/slugify');

const title = process.argv[2];
const pagedir = './content/pages';
const pageDate = moment().format('YYYY-MM-DD HH:mm:ss');

if (!title) {
  console.log('❌  Please specify a post title.');
  return;
}

const contents = `---
title: "${title}"
slug:
description: ""
date: ${pageDate}
author: Finding Force
tags:
cover:
fullscreen: false
---
`;

fs.writeFile(`${pagedir}/${title}.md`, contents, () => console.log(`✔ Created ${pagedir}/${title}.md`));
