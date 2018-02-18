# Chapter 2: Writing your First Component
___
#### Goals for Chapter 2:
I think it is important for developers to understand why you are using the development tools you will be using and how they work under the hood. If you never use a programming construct you don't understand your time spent debugging will be much more tolerable. This chapter will start by finding a problem with traditional web app development and then we will eventually stumble upon the services react provides as being a possible solution to this problem.

---
Imagine a friend from high school approaches you and says, "Hey you know how to code right? I have this *AMAZING* app idea that will make us billionaires." Your friend goes on to explain that the app is like Facebook, but with some minor tweaks. Let's give our friend the benefit of the doubt and start planning out this "innovative" app idea. We are going to need some sort of way to display a list of users throughout multiple parts of the app, right? So let's think how we may do this with a list of users. First, we know we can't just write hardcoded html because the list of users to display will likely change based on the page we are viewing and the currently logged in user. Based on these two things we will make an API request and may get something back similar to this...
```javascript
[
    {img: 'user_0.png', bio: 'I'm user 0'},
    {img: 'user_1.png', bio: 'I'm user 1'},
    {img: 'user_2.png', bio: 'I'm user 2'},
    {img: 'user_3.png', bio: 'I'm user 3'},
    {img: 'user_4.png', bio: 'I'm user 4'},
    {img: 'user_5.png', bio: 'I'm user 5'},
]
```
Alright we have our data, but how can we change the currently viewed HTML page based on this data? We can use direct DOM manipulation!
```html
<html>
    <body>
        <div id="users_list">
        </div>
    </body>
    <script>
         const data_returned_from_api = [
            {img: 'user_0.png', bio: 'I'm user 0'},
            {img: 'user_1.png', bio: 'I'm user 1'},
            {img: 'user_2.png', bio: 'I'm user 2'},
            {img: 'user_3.png', bio: 'I'm user 3'},
            {img: 'user_4.png', bio: 'I'm user 4'},
            {img: 'user_5.png', bio: 'I'm user 5'},
        ];
        const users_list = document.getElementById('users_list');
        data_returned_from_api.forEach((user) => {
            const userWrapper = document.createElement("div");
            
            const userPic    = document.createElement("img", {src: user.img});
            
            const userBio     = document.createElement("p"); 
            const userBioText = document.createTextNode("Hi there and greetings!"); 
            userBio.appendChild(userBioText); 
            
            userWrapper.appendChild(userPic)
                       .appendChild(userBio);
                       
            users_list.appendChild(userWrapper);
        });
    </script>
</html>
```
Finish reading all that? Even with an extremely simple example like this, the code very quickly becomes unmanagable. Now let's walk through how we would do this using react.

React relies on this idea that everything in your application is a component. What is a component? Well, a component can be thought of as a simple snippet of html code. For example, let's go back to the user profile example from above. You can imagine the HTML code for a single profile picture and bio may look something like...
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
1.) Naming convention changed, but this isn't a big deal. It's just common practice to name React components with capital letters.
2.) Our function now accepts an object we have called props instead of receiving two separate arguments. However, the user info we need is stored inside of this props object as we can see from the usage of the props object within the img and p tags.
3.) We're now setting the src property to `{props.user_image}` instead of just `props.user_image`, and we also use the same curly brace syntax within the p tag.
These are both little syntactic structures we will discuss more later on, but the same idea holds that we are assigning these parameter values to src, and using it as text in our p tag.

#### Using our Component
An important step to using react is instantiating self written components. We'll be using our previous UserProfile example to show how this is done.

Let's imagine we still want to display users profile data and our API responds with the same user data we saw earlier.

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
        <div>
            <UserProfile img={user_0.img} bio={user_0.bio} />
        </div>
    );
}
```

So, we've written an outer component we are calling App which we will assume to be our applications root component(you may have seen this App component when you created your first react project). Everything returned by App will be directly written on our index.html page.

Instantiating UserProfile looks identical to an html self-closing tag!

All components you write in react can be used just like regular html elements, and in fact all regular html elements like div, p, and img are also treated as react components when used within other react components.

*Quick Sidenote: The html tag structure for instantiating components in react is syntactic sugar that is provided through the Babel transpiler (a dev dependency we will be using when writing react apps). I encourage your to see what this code looks like in vanilla javascript by pasting your component instantiations into the [Babel repl](https://babeljs.io/repl/). This isn't necessary to use react, but will give you a peek at what is happening under the hood and will ultimately help your write better code.*

Now let's write the App component that will return all of our user's data using the UserProfile component.

```javascript
const App = () => {
    return (
        <div>
            {users.map((user) => <UserProfile img={user.img} bio={user.bio} />}
        </div>
    );
}
```

Now our App component maps all of our users through the function `(user) => <UserProfile img={user.img} bio={user.bio} />` and now we'll get a page showing all of our users instead of just user_0.

Alright, it's time I explain what the curly braces are all about. When writing react code you will often want to add javascript code into the body of components(html tags) like we did in the last example. In order for the transpiler to distinguish between javascript code and plain text inside these tags we wrap our javascript code inside curly braces. You will see multiple examples of this in the react docs and in examples throughout this tutorial series so if you're uncomfortable with it now, you won't be for long.
