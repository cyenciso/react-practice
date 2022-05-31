## What is React?
A declarative library: It provides UI functionality that we can incorporate throughout a web project where we want to. When using React, we get things done by describing _what_ we want, rather than _how_ we want things to get done.

With React, we can create reusable snippets of code that updates the DOM (UI) for us rather than writing lengthy amounts of JS that needs to describe exactly what to do.

### How do I incorporate React into my project?
1) You can add in just React components to an existing website using script tags that add React, ReactDOM, and Babel. You'll need to use the package manager `npm`. **This method is not ideal for large-scale projects.**
2) You can use `Create React App` to make a single-page application. It sets up a development environment and creates a front-end pipeline. Behind the scenes, it uses Babel and webpack.

## What is JSX?
JSX, or JavaScript XML, is a syntax extension for JavaScript that allows you to describe your UI in a familiar HTML-like syntax. The React elements we create are actually JS objects that describe what DOM element we want to add.

## What is Babel?
A JS compiler that translates your JSX into vanilla JS so the browser can understand it.

## What is webpack?
A static module bundler: it looks at all of the front-end files in your project and bundles compatible files together so there are much less files after bundling.
