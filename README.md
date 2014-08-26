# gl-texture2d-pixels

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Gets the RGBA pixels from a [gl-texture2d](https://www.npmjs.org/package/gl-texture2d) as a Uint8Array. Same API as [get-image-pixels](https://github.com/mattdesl/get-image-pixels).

```js
var getPixels = require('gl-texture2d-pixels')

var array = getPixels(texture)
console.log(array.length === (texture.shape[0] * texture.shape[1] * 4)) //true
```

**Note:** This is a fairly expensive operation in WebGL. 

## Usage

[![NPM](https://nodei.co/npm/gl-texture2d-pixels.png)](https://nodei.co/npm/gl-texture2d-pixels/)

### `getPixels(texture[, opts])`

Gets the RGBA pixels from [gl-texture2d](https://www.npmjs.org/package/gl-texture2d) object as a Uint8Array with some optional parameters.

- `x` the x position to start clipping, default 0
- `y` the y position to start clipping, default 0
- `width` the width of the source to copy; this will change the returned array's shape. defaults to image width
- `height` the height of the source to copy; this will change the returned array's shape. defaults to image height

The texture object can actually be any generic GL wrapper, as long as it has these fields:
```
{ 
	handle, //the WebGLTexture handle
	gl,     //the gl handle to WebGLRenderingContext
	shape   //an array of [width, height]
}
```

### `getPixels.dispose()`

Release the shared canvas for GC. This is mainly useful if you need to minimize disruptive GC hitches, e.g. in a game loop. 

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/gl-texture2d-pixels/blob/master/LICENSE.md) for details.
