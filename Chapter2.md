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
(the below is pseduocode, but gives you some idea of what a component will look like)
```javascript
let user_profile_and_bio = <div>
                                <img src="user_2.png"/>
                                <p>user_2 bio</p>
                           </div>
```

Why would we want to assign this variable to this specific HTML? The answer is that we really wouldn't because the values in the HTML (img src and bio text) are all hardcoded, so this component is only useful for user_2. Ideally, we would like to create a variable containing HTML that would be useful for any user. 

How do we go about doing this? Functions!
Below I've written a function that takes two arguments. The first is string containing a path to the users profile picture, and the second is a string that contains the users bio.
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
