# CirclePe Assignment

This is a simple project which lists all the steps on how CirclePe's App Interface works in just 5 Minutes.


## Preferred Package Manager

I've used [`pnpm`](https://pnpm.io/) as the preferred package manager for the project as it is faster than [`npm`](https://docs.npmjs.com/cli/v10) and [`yarn`](https://classic.yarnpkg.com/en/).

## The Approach

The animations and the design was made in a [Figma Project](https://www.figma.com/proto/dsAjYtJma8Nnpoxd8VuUii/Untitled?page-id=0:1&node-id=1-57&node-type=FRAME&viewport=2073,400,0.2&t=7drkJlj6sjbV83Ao-1&scaling=min-zoom&content-scaling=fixed), sent by the CirclePe team. I've tried to make the project as close to the design as possible.

I choose to scroll through the different pages

I've followed a simple approach where I try and make almost every component and setting reusable and scalable, which is the main point of using a Virtual DOM library like React.

I've used a simple folder structure where I've kept all the components with their names in the `Components` folder.

## Animations

All the animations are handled by [Framer Motion](https://www.framer.com/motion/). As Framer Motion can only be used in a `client` page, the `page.tsx` file is a server side rendered page and other pages like `Tutorial.tsx` and `TutorialRecycler.tsx` are client side rendered pages.

As the figma design had a major animation with the Gradient present in the left side of the screen, I've managed to make the gradient animation using Framer Motion, and added a small pulsing and fade in animation.

There was a progress bar which was present in the design, I've managed to animate the progress bar according to the page and the best part about it is that it is again dynamic. The progress bar in the responsive design spans the whole width of the screen giving a progress of how much content on the website is left.


