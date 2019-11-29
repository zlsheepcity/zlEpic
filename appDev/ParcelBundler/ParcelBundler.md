# Initial Workflow

```bash

sudo npm install -g parcel-bundler
npm init
npm install parcel-bundler node-sass --save-dev

parcel src/*.html -p 3000 --open
parcel src/index.html -p 3000 --open

rm -rf dist/*
parcel build src/*.html --public-url "./"
parcel build src/index.html --public-url "./"

```

# Plugins Workflow

- images
- Vue

## images
https://github.com/DeMoorJasper/parcel-plugin-imagemin
```bash
npm install parcel-plugin-imagemin parcel-plugin-svg-sprite
```
imagemin.config.js
```js
module.exports = {
    gifsicle: { optimizationLevel: 2, interlaced: false, colors: 10 },
    jpegtran: { progressive: true, arithmetic: false },
    pngquant: { quality: [0.25, 0.5] },
    svgo: {
        plugins: [{ removeViewBox: false }, { cleanupIDs: false }]
    },
    webp: { quality: 10 }
}
```

## Vue

```bash
npm i @parcel/transformer-babel --save-dev
npm install -D sass-loader
npm install --save vue
```


# Links

https://css-irl.info/a-modern-front-end-workflow-part-2/
https://habr.com/ru/company/ruvds/blog/473764/
