# Chapter 2: Writing your First Component
___
React relies on this idea that everything in your application is a component. What is a component? Well, a component can be thought of as a simple snippet of html code. For example, let's say we wanted to build a webpage that had hundreds of users profile pictures and bios. You can imagine the HTML code for a single profile picture and bio may look something like...
```html
<div>
    <img src="user_2.png"/>
    <p>user_2 bio</p>
</div>
```
React gives us the power to treat this individual piece of code like a variable:
(the below is pseduocode, but it gives you some idea of what a component will look like in react)
```javascript
let user_profile_and_bio = <div>
                                <img src="user_2.png"/>
                                <p>user_2 bio</p>
                           </div>
```

Why would we want to assign this variable to this specific HTML? The answer is that we really wouldn't because the values in the HTML (img src and bio text) are all hardcoded, so this component is only useful for user_2. Ideally, we would like to create a variable like `user_profile_and_bio` containing HTML that would be useful for **any** user. 

How do we go about doing this? 
Functions!
Below I've written a function that takes two arguments. The first argument is a string containing a path to the users profile picture, and the second is a string that contains the users bio.
Again, this is component pseduocode, and while this would teechnically run without errors, this is just an example to lead you to the final form of a component.

```javascript
const user_profile_and_bio = (user_image, user_bio) => {
    return (
        <div>
            <img src=user_image />
            <p>user_bio</p>
        </div>
    );
}
```

The key idea here is that react components are just __functions__ that return HTML code. So let's take a look at that same component written as a real react component that can be instantiated.

```javascript
const UserProfile = props => {
    return (
        <div>
            <img src={props.user_image} />
            <p>{props.user_bio}</p>
        </div>
    );
}
```
#### What changes were made?
1.) Naming convention changed, but this isn't a big deal. I'll explain why I did this later.
2.) Our function now accepts an object we have called props instead of receiving two separate arguments. However, the user info we need is stored inside of this props object as we can see from the usage of the props object within the img and p tags.
3.) We're now setting the src property to `{props.user_image}` instead of just `props.user_image`, and we also use the same curly brace syntax within the p tag...
These are both little syntactic structures we will discuss more later on, but the same idea holds that we are assigning these parameter values to src, and using it as text in our p tag.

#### Using our Component
An important step to using react is instantiating self written components. We'll be using our previous UserProfile example to show how this is done.

Let's imagine we still want to display users profile and we're handed the following date by our API.

```javascript
const users = [
    {img: 'user_0.png', bio: 'I'm user 0'},
    {img: 'user_1.png', bio: 'I'm user 1'},
    {img: 'user_2.png', bio: 'I'm user 2'},
    {img: 'user_3.png', bio: 'I'm user 3'},
    {img: 'user_4.png', bio: 'I'm user 4'},
    {img: 'user_5.png', bio: 'I'm user 5'},
]
```

First, we'll show an example of using our UserProfile component with the first users data and then we'll refactor it a bit to account for all users.

```javascript
const user_0 = users[0];
const App = () => {
    return (
        <UserProfile img={user_0.img} bio={user_0.bio} />
    );
}
```

So, we've written an outer component we are calling App which we will assume to be our applications root component. Everything returned by App will be directly written on our index.html page. (We will discuss the connection betweeen components and the DOM during our first project set up. For now just know that the html returned by App will be seen on our root html file.)

Instantiating UserProfile looks identical to an html self-closing tag! 

*Quick Sidenote: This is syntactic sugar that is provided through the Babel transpiler (a dev dependency we will be using when writing react apps). I encourage your to see what this code looks like in vanilla javascript by pasting your component instantiations into the [Babel repl](https://babeljs.io/repl/). This isn't necessary to use react, but will give you a peek at what is happening under the hood and will ultimately help your write better code.*
