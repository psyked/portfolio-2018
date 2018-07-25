webpackJsonp([0x798d29a3ace1],{1270:function(t,a){t.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/rotating-bitmapdata/index.md absPath of file >>> MarkdownRemark",html:"<p>Here's a little snippet - rotating BitmapData (through 90 degrees) with Actionscript 3.</p>\n<pre><code>var matrix:Matrix = new Matrix();\n    matrix.translate(-bmd.width / 2, -bmd.height / 2);\n    matrix.rotate(90 * (Math.PI / 180));\n    matrix.translate(bmd.height / 2, bmd.width / 2);\nvar matriximage:BitmapData = new BitmapData(bmd.height, bmd.width, false, 0x00000000);\n    matriximage.draw(bmd, matrix);\n</code></pre>\n<p>The code above can rotate an images BitmapData, using a Matrix to transform the image when you draw the data.  It's only really designed to rotate the image in 90 degree increments though - so be aware of that.</p>\n<p>How it actually works is to create a new Matrix object, offset the source BitmapData's width and height (so the rotation goes from the center of the bitmap), rotate the BitmapData, move the BitmapData again (to undo the previous offset), create a new BitmapData object to draw the rotated BitmapData into, and finally draw the source BitmapData with our newly created Matrix.</p>\n<p>Simple.</p>",frontmatter:{title:"Rotating BitmapData with Actionscript 3",date:"September 15, 2009",tags:["actionscript","bitmapdata"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/an-overview-of-open-source-media-framework-aka-adobe-strobe/",tags:["flash","framework","osmf"],title:"An overview of Open Source Media Framework (aka. Adobe Strobe)",date:"2009-08-12T18:47:59.000Z"}},next:{frontmatter:{path:"/blog/flash-introduces-drm-to-its-online-video/",tags:["flash","drm"],title:"Flash introduces DRM to its online video",date:"2009-09-16T11:25:43.000Z"}}}}}});
//# sourceMappingURL=path---blog-rotating-bitmapdata-88f60d67ffa3fa885d69.js.map