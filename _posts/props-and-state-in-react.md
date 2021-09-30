---
title: 'Props & State in React'
excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.'
coverImage: '/assets/blog/props-and-state-in-react/cover.png'
date: '2020-03-16T05:35:07.322Z'
author:
  name: T. Phithakjarukorn
  picture: '/assets/blog/authors/mu.jpeg'
ogImage:
  url: '/assets/blog/props-and-state-in-react/cover.png'
---


## What are props in React?

Conceptually, components are like JavaScript functions. They accept arbitrary inputs called “props” and return React elements describing what should appear on the screen.

## Function and Class Components

The simplest way to define a component is to write a JavaScript function:

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
