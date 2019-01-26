# day-view-calander
A day view calendar example inspired by Google Calendar Day View.

## Usage
1. Clone the repo on your local development machine.
``` 
git clone https://github.com/AnjanishKumar/day-view-calander.git
```
2. Install Node.js static file server, for example [serve](https://github.com/zeit/serve) to server the pre-built files in dist folder.
```
npm install -g serve
# -s flag means serve it in Single-Page Application mode
# which deals with the routing problem below
serve -s dist
```

## Development environment setup
This project usages VUE CLI 3 for scaffolding. Please refer to [documentation](https://cli.vuejs.org/guide/cli-service.html#using-the-binary) for detalied build instruction. 
```
# install dependencies
npm install

# start local server @ localhost:8080
npm run dev
```

## Dependency
1. [Vue 2.5.21](https://vuejs.org/)
2. [Vuetify 1.3.0](https://vuetifyjs.com/en/)
