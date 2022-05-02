# Plank Coding Assessment

A React web app previewing some of [Plank](https://plankdesign.com/en/)'s case studies.

## Created with:

- [Sass](https://www.npmjs.com/package/sass)

- [AOS](https://github.com/michalsnik/aos)
  - The Animate on Scroll library provides simple configurations for implementing scroll animations in React.

- [Axios](https://www.npmjs.com/package/axios)

## Some Notes on the Approach:

- Created the `useApiResponse` custom hook to reuse the API request logic. The hook takes in an `endpoint` string argument to customize the endpoint and access case studies and categories.

- Utilized variable declaration in Sass to create more descriptive values that are easy to remember.

- The `activeCategory` state controls filtering of the case studies array. The state is updated with the slug property of the clicked button. When the state updates, the case studies array is filtered out with the items that have a matching slug property. The `activeCategory` state is also used to determine the active category button to add the 'active' class.

- For categories having few or no case studies, the HTML element's height needed to be set to 100% to attain a more pleasing layout. This was done by creating an `updateHtmlHeight` function inside the `useEffect` hook which fires when the `activeCategory` updates. The `updateHtmlHeight` function checks whether the html height is less than the window height and sets it to 100% if it's true.