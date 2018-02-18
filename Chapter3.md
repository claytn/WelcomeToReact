# Chapter 3: Real Example
___
#### Goals for Chapter 3:

In this chapter we will be using everything we've learned up to this point to build a working react application. We'll also go into deeper discussion on some of the react constructs we saw in previous chapters that went without much explanation.

---

#### Step 1:
Setup a fresh new project. Let's call it **[insert project name here]**. Our goal here is to have a working example running on your local server by the end of this chapter.

First, let's start editing our `App.js` file within the `src/` directory.
You are probably looking at something that looks like this...
```javascript
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
```
What's that class extends Component syntax? We will get to that later. This is another type of component we will work with called a stateful component. Try rewriting this same component using the syntax we used in our last tutorial.

Hopefully you came up with something similar to this...
```javascript
const App = () => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
}
```
