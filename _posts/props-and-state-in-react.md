---
title: 'Props & State in React'
excerpt: 'Conceptually, components are like JavaScript functions. They accept arbitrary inputs called “props” and return React elements describing what should appear on the screen.'
coverImage: '/assets/blog/props-and-state-in-react/cover.png'
date: '2020-03-16T05:35:07.322Z'
author:
  name: T. Phithakjarukorn
  picture: '/assets/blog/authors/mu.jpeg'
ogImage:
  url: '/assets/blog/props-and-state-in-react/cover.png'
---


## Props & State in React

A couple of words you'll see when you start learning React are `props & state` What are they? Apparently, they are a way to send and store data aroun your apps. Can we not use them? Of course, you can but what's the point of using React and other libraries or frameworks then. Data is key and developers want to pass it around, update, or remove them.

### What does props mean?

It comes from properties. You can pass it down from a parent component to a child component but not vice versa and you probably have heard of the word: `unidirectional data flow`. It means that the child components cannot update or modify the data on their own, making sure that a clean data flow architecture is followed. If you know HTML, it might look similar to attributes in HTML, however, its value can be any JavaScript data types. Most commonly used data types are string, number, object.

- immutable or should not be modified
- used to pass data down from your view-controller
- better performance

### What does state mean?

State acts like a storage for you app. React will detect anything that changes in state and update it accordingly.

- managed in view-controller or top level component
- mutable or can be modified
- should not be accessed from child components but there is a work around.

## Function vs Class Components

The simplest way to define a component is to write a JavaScript function:

```js
import React, { useState }  from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Thierry" />;

// output -> Hello, Thierry
```

```js
import React from 'react';

class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Thierry",
    };
  }

  render() {
    return <h1>Hello {this.state.name}</h1>;
  }
}

const element = <Welcome />;

// output -> Hello, Thierry
```
