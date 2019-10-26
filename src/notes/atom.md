---
title: Atom
date: '2017-02-23'
categories:
- Apps
---

## Keyboard Shortcuts

- Edit
  - Move Line Up: `CTRL + CMD + Up`
  - Move Line Down: `CTRL + CMD + Down`
  - Duplicate Lines: `Shift + CMD + D`
- Find
  - Find File: `CMD + P`
  - Select Next: Select text, then `CMD + D`
  - Select All: Select text, then `CMD + CTRL + G`
- Select
  - Split into Lines: `Shift + CMD + L`
- Packages
  - Command Palette
    - Toggle: `Shift + CMD + P`
  - Symbols
    - File Symbols: `CMD + R`

- bookmarks: `CMD + F2`
- code folding?

## Package Manager

I use the Stars functionality to keep a list of the packages I use:

- Star all installed packages (you will be prompted for an API token from https://atom.io/account): `apm star --installed`
- List starred packages: `apm stars` or `apm starred`
- Install all starred packages: `apm stars --install` or `apm starred --install`

## Snippets

### Selectors

- ALL Selector: `*`
- HTML Selector: `.text.html.basic` (not `.source.html`)
- PHP Selector: `.text.html.php` (not `.source.php`)
- CSS Selector: `.source.css`
- JS Selector: `.source.js`
- Markdown Selector: `.text.md`

## Show closing brace/tag when folding code blocks

Add below code to `~/.atom/config.cson`:

```cson
".basic.html.text":
  editor:
    foldEndPattern: ""
".css.source":
  editor:
    foldEndPattern: ""
".html.php.text":
  editor:
    foldEndPattern: ""
".js.jsx.source":
  editor:
    foldEndPattern: ""
".js.source":
  editor:
    foldEndPattern: ""
```

## Hide Ignored Names In Tree View

Hide files & directories in Tree View that match glob patterns in `Settings > Core > Ignored Names`:

- `Preferences > Settings > Packages > Tree View > Hide Ignored Names`
