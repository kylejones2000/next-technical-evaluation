# next-tech-evaluation
Next Principle Engineer technical evaluation

To get it working...

- Clone to local machine
- Make sure you run `yarn install` in both the `client` and `proxy-server` directories
- cd to client directory
- `yarn start`
- Go to `http://localhost:9000` in your browser
- Type into the searchbox

Application returns 10 results at a time with an infinite scroller

Tech stack:

- React (Hooks)
- Typescript
- Redux
- Redux Thunk
- Node & Express (Proxy server)
- Material UI & Styled
- Jest & @testing-library/react


Known issues:

There's an issue with the API returning the same trackId's (which are used as the card key attribute) when changing the search field rapidly before redux can update and then react remove the stale components with the same id. That manifests itself with old cards not being removed.
