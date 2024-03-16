# Sunset - CSS Gradient Generator

This is an intuitive, flexible and performant tool for generating and sharing linear, radial and conic CSS gradients, developed with React.

It's purpose is to help front-end developers produce attractive and visually appealing color gradients by interacting with a simple UI and getting an automatically generated output code that can then be used in their own CSS codebase.

This tool offers a lot of flexibility that allows the application of almost every parameter permitted by CSS to let developers experiment and create beautiful gradients with less effort.

## Development summary

This project was developed using React.js at it's core, as it is a very powerful library that allows organized and predictable state management.
This technology is complemented by clean, organized and up to date code using a functional programming paradigm; alongside best practices for an optimal understanding and readability.

Code organization was a primary focus for development and, therefore, Feature Slice Design was used as the architectural methodology of choice due to it's flexibility and ease of comprehension, making it suitable for this front-end project.

As mentioned before, a functional paradigm approach was used for the whole application, including state management. For that reason, a Flux architecture with a Redux-like pattern was used in order to centralize state in a unique store that describes de application. The state mutations are triggered by actions dispatched to a reducer.

Performance was also a very important goal and, in order to be achieved, many aspects were optimized, such as memoization and prevention of unnecessary component re-renders.
This last was achieved with Zustand library, which is suitable for not so complex state management. Even though it's not as powerful as Redux, it still covers the majority of needed functionality such as subscriptions to a specific state property, preventing unnecesary re-renders from components that use other parts of the state. It also has very low bundle size, which was desired for this project so it can be very lightweight and performant.

Accessibility is another important point that was taken into account during development, and many aspects were focused on the ease of use for all kinds of users, starting with the color selection that ensures readable text and optimal contrast ratio, in both light and dark mode.
The application was also developed to be fully functional for keyboard navigation and every button has readable text for screen readers, although is visually hidden; helping users with any disability still be able to use this tool.

The application is intended to be mainly used on PC. However, it still was developed with mobile devices in mind and users can use this tool on these as well, with some additional interactions to control and visuallize the gradient.

The result is an intuitive, accessible, powerful and performant tool that delivers a lot of flexibility to users; and also features a predictable, scalable and maintainable codebase for continuous improvement.
