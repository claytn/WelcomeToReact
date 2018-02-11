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
(the below is pseduocode, but it gives you some idea of what a component will look like)
```javascript
let user_profile_and_bio = <div>
                                <img src="user_2.png"/>
                                <p>user_2 bio</p>
                           </div>
```

Why would we want to assign this variable to this specific HTML? The answer is that we really wouldn't because the values in the HTML (img src and bio text) are all hardcoded, so this component is only useful for user_2. Ideally, we would like to create a variable like `user_profile_and_bio` containing HTML that would be useful for any user. 

How do we go about doing this? Functions!
Below I've written a function that takes two arguments. The first argument is a string containing a path to the users profile picture, and the second is a string that contains the users bio.
Again, the below is pseduocode and won't actually run, but this is very similar to how real react components work.
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

The key idea here is that react components are just __functions__ that return HTML code. So let's take a look at that same component written as a real react component.

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
What changes were made?
1.) Naming convention changed, but this isn't a big deal. I'll explain why I did this later.
2.) Our function now accepts an object we have called props instead of receiving two separate arguments. However, the user info we need is stored inside of this props object as we can from the usage within the img and p tags.
3.) We're now setting the src property to `{props.user_image}` instead of just `props.user_image`, and we also use the same curly brace syntax within the p tag...
These are both little syntactic structure we will discuss more later on, but the same idea holds that we are assigning these parameter values to src, and using it as text in our p tag.
