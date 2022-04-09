# Webpack treeshake issue

This project demonstrates a performance issue with webpack regarding treeshaking. The app exports
a react component that references a `Component1` from one of the two possible packages from under
`static_node_modules`. The two packages are ESM modules and marked as side effect free.

### To reproduce:

1. `npm install`
3. `npm run build`
   Initially we build the app referencing a module that has only a simple `Component1` exported.
   In this case compilation takes less than a second.
4. Uncomment line 5 and comment line 3 in index.js.
5. `npm run build`
   This time we are building the app referencing a module containing that same `Component1` but 
   also a `Component2` which is much heavier. Although we are not importing `Component2` the 
   built time gets **~12x** longer.

In addition, note that: in webpack `useExports` optimization is turned off and in both cases we
get the same results in `dist` (without `Component2`), based on this assuming that webpack
indeed doesn't include the subtree of `Component2` based on tree shaking; but compilation or subtree
discovery still happens.
