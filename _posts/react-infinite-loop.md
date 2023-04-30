---
title: 'Infinite Loop in React'
excerpt: 'There are a couple of ways to reproduce infinite loop in React. How do we fix them? Here are some solutions you can try.'
coverImage: '/assets/blog/infinite-loop/cover.png'
date: '2023-04-29T02:15:00.322Z'
author:
  name: T. Phithakjarukorn
  picture: '/assets/blog/authors/mu.jpeg'
ogImage:
  url: '/assets/blog/infinite-loop/cover.png'
---
## Infinite Loop

I am certain that many of you have seen an infinite loop (Server Error) before. Too many re-renders!!!

What does it mean?

The following code looks like there is nothing wrong but you're unconditionally setting state during render, the component enters a loop: rendering -> setting states -> rendering -> setting state -> and it goes on forever.


### 1. Updating the state inside the render

```js
import React, { useState } from 'react'

const LinkExample = () => {
  const [links, setLinks] = useState([])

  buttons.forEach((buttonType, index) => {
    if (!buttonType.children.length) {
      setLinks(() => [
        <Link
          to={`#${buttonType.type}`}
          text="First Button"
        />,
      ])
    } else {
      setLinks(() => [
        <OtherLink
          to={`#${buttonType.otherType}`}
          text="Other Button"
        />,
      ])
    }
  })
  
  return (
    <div className="example-links">
      <ul>
        {links}
      </ul>
    </div>
  )
}
```

If you update the state directly inside your render method or a body of a functional component, it will cause an infinite loop.


### Solution 

You can try the following fix and see if it works. Call set state method in useEffect hook.

```js
import React, { useEffect, useState } from 'react'

const LinkExample = () => {
  const [links, setLinks] = useState([])

  useEffect(() => {
    buttons.forEach((buttonType, index) => {
      if (!buttonType.children.length) {
        setLinks(() => [
          <Link
            to={`#${buttonType.type}`}
            text="First Button"
          />,
        ])
      } else {
        setLinks(() => [
          <OtherLink
            to={`#${buttonType.otherType}`}
            text="Other Button"
          />,
        ])
      }
    })
  }, [])

  
  return (
    <div className="example-links">
      <ul>
        {links}
      </ul>
    </div>
  )
}
```

Use useEffect hook with an empty array as a dependency. It will update the state only once.

<img
  src="/assets/blog/infinite-loop/cover.png"
  alt="infinite-loop"
/>

### 2. Setting a state in useEffect 

```js
import React, { useEffect, useState } from 'react'

const LinkExample = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(count + 1)
  }, [count])
  
  return (
    <div className="example-count">
        {count}
    </div>
  )
}
```

If you keep updating a state inside useEffect with a property you update set as a dependency, it will cause an infinite loop.

### Solution 

```js
import React, { useEffect, useState } from 'react'

const CountExample = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount((prevCount) => prevCount + 1)
  }, [])
  
  return (
    <div className="example-count">
        {count}
    </div>
  )
}

```

You can remove state property from the dependency list and prevent an infinite loop.

<img
  src="/assets/blog/infinite-loop/cover.png"
  alt="infinite-loop"
/>

### 3. Calling the event handler during render

```js
import React, { useState } from 'react'

const CountExample = () => {
  const [count, setCount] = useState(0)

  return (
    <button onClick={setCount(1)}>Submit</button>
  )
}
```

By executing a function before setting a handler, you update a state inside the render, which causes an infinite loop.

### Solution 

```js
import React, { useState } from 'react'

const CountExample = () => {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount(1)}>Submit</button>
  )
}
```

Now, this submit button should work as expected.

<img
  src="/assets/blog/infinite-loop/cover.png"
  alt="infinite-loop"
/>

- [***Infinite Loop***](https://react.dev/reference/react/useEffect#my-effect-keeps-re-running-in-an-infinite-cycle)
- [***Too many re-renders***](https://react.dev/reference/react/useReducer#im-getting-an-error-too-many-re-renders/)
