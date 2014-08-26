var baboon = require('baboon-image')

var gl = require('webgl-context')({
    width: baboon.shape[0],
    height: baboon.shape[1]
})
var test = require('tape').test

var getPixels = require('./')
var createTex = require('gl-texture2d')

test('checking if texture RGBA matches correctly...', function(t) {
    if (!gl)
        throw new Error("no WebGL context available")

    var tex = createTex(gl, baboon)
    var imgWidth = tex.shape[0]/2

    var canvas = document.createElement("canvas")

    var array = getPixels(tex, { x: imgWidth, width: imgWidth })
    canvas.width = imgWidth
    canvas.height = tex.shape[1]

    var context = canvas.getContext("2d")
    var imgData = context.createImageData(imgWidth, tex.shape[1])
    imgData.data.set(array)

    context.putImageData(imgData, 0, 0)

    var result = context.getImageData(0, 0, imgWidth, tex.shape[1])
    t.deepEqual(array, result.data, 'does match RGBA pixels')
    t.end()

    getPixels.dispose()
})
