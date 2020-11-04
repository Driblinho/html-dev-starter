# html-dev-starter

html-dev-starter is a Webpack starter for develop static bootstrap template.
Starter generate low quality Images placeholder from `src/images` to `dist/images/lqip`
Afther build you can use [lazysizes](https://github.com/aFarkas/lazysizes) to place image with blur placeholder.
### Example:
```html
<img src="images/lqip/pexels-tom-verdoot-3181458.jpg" 
     data-src="images/pexels-tom-verdoot-3181458.jpg" 
     class="lazyload"  style="width: 100%;" />   
```
### Frontend `npm` modules: 
* Boostrap
* jQuery
* lazysizes

## Setup

Use `git` to download starter and the package manager [npm](https://www.npmjs.com/) to install `html-dev-starter` depedencies.

```bash
git clone https://github.com/Driblinho/html-dev-starter.git
cd html-dev-starter
npm i
```

## Usage

To start development server use `npm`

```bash
npm start
```

webpack server work on [localhost:9000](http://localhost:9000/) and will be serve static template from `dist` .

To build production build use:
```bash
npm run build
```

Static template will be generated to `dist` folder. 
Html file will be formatted using [Prettier](https://prettier.io/)

## Technologies

Project is created with:
* webpack version: `5.x`
* lqip-modern version: `1.1.3`
* webpack-dev-server version: `3.11.0`
* prettier version: `2.1.2`

Webpack plugins:
* clean-webpack-plugin version: `3.x`
* copy-webpack-plugin version: `6.x`
* mini-css-extract-plugin version: `1.2.1`
* webpack-merge version: `5.3.0`
* webpack-shell-plugin-next version: `2.0.4`
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE.md)