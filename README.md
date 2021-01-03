# MyTyper
A simple wrapper around matt boldt `typed.js` that makes it simple and intuitive to create typing effects with javascript

## Installation
It only works on the browser with a script tag, (and it ships with typed.js as a dependency):

```html
<script src="/path/to"/MyTyper/dep/lib/typed.min.js"> </script>
<script src="/path/to/MyTyper/index.js"> </script>
```

## Usage

```js
const typedWords = `
Welcome to MyTyper |
I am a wrapper around typed.js by Matt Boldt |
I use the pipe character to seperate stuffs |
Thank you and goodbye |
`

const elemID = "#paragraph"
const myTyper = createTyper(typedWords, elemID, {
    backSpeed: 10,
    typeSpeed: 10,
    loop: true
})
```
- `typedWords` takes the content to content that the typing effect would be applied on. The original library ([typed.js]()) seperates content using an array, but `MyTyper` uses the pipe(`|`) character.

- `elemID` is the id of the element on the DOM where the text would be inserted and animated.
- `createTyper()` takes `typedWords` and `elemID` as arguments, along with a third argument that specifies the options that configures the `typed.js` instance that would be returned.


