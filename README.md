# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

This page, is subscription page.
It should have a email validator for checking if the input it's a valid input(real email).

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

### Screenshot

![](./Screen%20Shot%20images/Mobile%20Screen%20Shot.jpg.png)
![](./Screen%20Shot%20images/Desktop%20Screen%20Shot%20-top.jpg.png)
![](./Screen%20Shot%20images/Desktop%20Screen%20Shot-bottom.jpg.png)

### Links

- Solution URL : [Github URL here   ](https://github.com/Yasser-St/ping-coming-soon-page-using-css-grid--12-columns-)
- Live Site URL: [live site URL here](ping-coming-son.netlify.app)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid(12columns)
- Mobile-first workflow
- Vanila JavaScript

### What I learned

I acullay I learned in this chalange how to do an email validation in JavaScript and how to  display an error message on the bottom of an input, alos how to style it :

```js
function ValidateEmail(inputE){

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 

  if(inputE.value.match(mailformat)){
    document.forms['form1'].submit();
    return true;
    
  }else if(inputE.value === ""){
    emailInput.style.borderColor = "hsl(354, 100%, 66%)";
    errorMessage.innerText = "Whoops! It looks like you forgot to add your emails";
    
  }
  else{
    emailInput.style.borderColor = "hsl(354, 100%, 66%)";
    errorMessage.innerText = "Please provide a valid email address";
  }


}
```
And how to submit the input just once withe this syntax:

```js
   document.forms['form name'].submit();

```

Also in HTML, I understand "form" and "input" better than I was before and how to use them:

```html
         <form name="form1">
            <input type="text" name="email" placeholder="Your email address..." id="email" >
            <div id="eror-message"></div>
            <input type="button" name="validate" value="Notify Me" id="notifyMeBtn" onclick="ValidateEmail(document.form1.email)" >
          </form>
```
finally in CSS, I learned how to style font awesome icons: 

```css
  .icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 7vw;
    height: 7vw;
    color: var(--Primary-Blue);
    font-size: var(--icon-size);
    border-radius: 25vw;
    overflow: hidden;
    border: 1px solid var(--Primary-Blue);
    box-shadow: 0 3px 6px var(--Gray);
    transition: color 3ms, opacity 0.5s, border 0.5s;
}
```
her in the bottom, is the mark up for font awesom icons :

```html
     <ul class="social-grid">

      <li class="social-f ">
        <a href="#" class="icon-wrapper "> 
          <!-- the icon need a wrapper for style it -->
          <i class="fa-brands fa-facebook-f" id="facebook"></i>
        </a>
      </li>

      <li class="social-t">
        <a href="#" class="icon-wrapper ">
          <i class="fa-brands fa-twitter" id="twitter"></i>
        </a>
      </li>

      <li class="social-i">
        <a href="#" class="icon-wrapper ">
          <i class="fa-brands fa-instagram" id="instagram"></i>
        </a>
      </li>

    </ul>
```
And how to use CSS grid white 12 columns, also how to gave them a max-width to stop increasing the widht when the width of browser:

```css
      /* gave a max width to the grid to stop increasing */
    .grid{
        max-width: 760px;
        margin-inline: auto;
        grid-template-rows: 250px 1fr;
    }
```

### Continued development

I have one thing I whant to focus on it, is how can  declare a function thats toik a parrametr inside a JavaScript file not like I did in this chalange.


### Useful resources

- [how to do email validation](https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript) - This helped me allot to understand how the validation it's worke an how to use it.