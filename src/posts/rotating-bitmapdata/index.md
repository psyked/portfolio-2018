---
path: /rotating-bitmapdata/
layout: post
title: Rotating BitmapData with Actionscript 3
date: 2009-09-15T21:00:07Z
tags:
- actionscript
- bitmapdata
- snippets
---

Here's a little snippet - rotating BitmapData (through 90 degrees) with Actionscript 3.

```
var matrix:Matrix = new Matrix();
matrix.translate(-bmd.width / 2, -bmd.height / 2);
matrix.rotate(90 * (Math.PI / 180));
matrix.translate(bmd.height / 2, bmd.width / 2);
var matriximage:BitmapData = new BitmapData(bmd.height, bmd.width, false, 0x00000000);
matriximage.draw(bmd, matrix);
```

The code above can rotate an images BitmapData, using a Matrix to transform the image when you draw the data.  It's only really designed to rotate the image in 90 degree increments though - so be aware of that.

How it actually works is to create a new Matrix object, offset the source BitmapData's width and height (so the rotation goes from the center of the bitmap), rotate the BitmapData, move the BitmapData again (to undo the previous offset), create a new BitmapData object to draw the rotated BitmapData into, and finally draw the source BitmapData with our newly created Matrix.

Simple.