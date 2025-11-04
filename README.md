# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

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

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./desktopscreenshot.png)
![](./mobilescreenshot.jpg)
![](./error.png)
![](./success.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/Lovely1608/newsletter-sign-up-form.git)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- java script

### What I learned

In this project, I learned about the <picture> tag, which helps to show different images for different devices automatically. It works somewhat like a media query but handles the image changes on its own.

I also learned about the classList property, which I used to add or remove classes in JavaScript.

To see how you can add code snippets, see below:

```html
<picture>
  <!--using media for mediaquery -->
  <source
    media="(min-width: 64rem)"
    srcset="images/illustration-sign-up-desktop.svg" />
  <source
    media="(min-width: 30rem)"
    srcset="images/illustration-sign-up-tablet.svg" />
  <img
    srcset="images/illustration-sign-up-mobile.svg"
    alt="red new template with boxes"
/></picture>

<small
  >this is a new tag which I used with input tag for show information
</small>
```

```css
learn this css property :focus {
  outline: none;
}
```

```js
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const [local, domain] = email.value.split("@");

submitBtn.classList.add("successBtn");
```

### Continued development

I am still not good with regular expression uses with js and my if condition can get more good and robust for making my function more readable

### Useful resources

- [FreeCodeCamp resource 1](https://www.freecodecamp.org/news/build-and-validate-beautiful-forms-with-vanilla-html-css-js/) - This helped me for email validation and how to use the advice for making my form look more . I really liked this learning and will use it going forward.
- [MDN Document resource 2](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation) - This is an amazing article which helped me finally understand how to validate simple form. I'd recommend it to anyone still learning this concept it will help you to brush upon your skills .

## Author

- Frontend Mentor - [Lovely]()
