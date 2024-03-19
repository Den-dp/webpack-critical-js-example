# webpack-critical-js-example

https://github.com/webpack/webpack/discussions/18216

I have a pretty isolated JS file that is critical to run as early as possible (to reflect persisted theme preferences visually).

What is the best way to do this using webpack?

I've started with the simplest one:
```js
module.exports = {
  mode: "development",
  entry: {
    theme: "./src/theme.js",
    main: "./src/index.js",
  },
  plugins: [new HtmlWebpackPlugin()],
};
```
and it kind of works but breaks the WDS experience, inserting 2 WDS/HMR clients:

https://github.com/webpack/webpack/assets/1770529/7b044f0d-f227-4fba-826f-d9a0fbfc98c3

