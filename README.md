# Wordle Solver

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Objectives

- Create a solver for Wordle.
- Learn about different ways to deploy onto AWS and deploy there.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the server and frontend app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run reduceLib PATH/FILENAME.txt`

Takes a list of words in a text file and writes them into a .tsx array, after sorting and removing duplicates.
eg:

```
smash
twice
broil
again
twice
again
```

outputs to...

```tsx
// libOutput.tsx
export const libraryArr = ["again", "broil", "smash", "twice"];
```

## References

- [Typescript server setup with React client](https://medium.com/geekculture/deploying-an-express-node-js-react-app-with-typescript-to-azure-web-apps-using-github-actions-25e4e59203e)
