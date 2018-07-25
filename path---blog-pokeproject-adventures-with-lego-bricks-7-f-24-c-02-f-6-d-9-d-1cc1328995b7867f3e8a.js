webpackJsonp([0x6ba9c0f96df9],{1280:function(e,a){e.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/pok%C3%A9project-adventures-with-lego-bricks-7f24c02f6d9d/index.md absPath of file >>> MarkdownRemark",html:'<h1>PokéProject: Adventures with LEGO Bricks</h1>\n<h2>Part 1: Using JavaScript and HTML5 canvas elements to convert images into 2 dimensional LEGO brick plans.</h2>\n<h4>From image sprite to pixel art.</h4>\n<p>What’s the difference between the image sprites included in the original Game Boy games and Retro Pixel art? If you ask me, it’s just a matter of scale — scale the images up, and suddenly it’s art.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/1*ahfgymTGsLrv5DvRElUX4A-433a8ea6d09d1563cbeaa06f2eb3755c-88c8a.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 57.77777777777777%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAACDUlEQVQoz42T70uTURTHB/0nva/ohdWLbNXEmukwjEDEXkSWTEjDos05pyZTqrktqOZiCmIqKZX92EqKpaSktqksk1CDGEGTkkINfH59enw2ysjmLhzuOYd7P/fc7z1XB+hU26ZThzoHVENRFCE1I8vyusPGoebFlHsutU/br0sFmwJlRUbhD2jxyyLDo0PEv8bXQzG1LkMgyQplUSYSi9D9sIuBYC+O2xZCwwO/gVtWqJ6YBEqKsLy8gqvTReCBn+BIH7cmXJRcL6L1jpPvSz80oCRLmwNV0F8V9vZ3CB5fC9ln99Lgs9B018r2ip20vfJQ11nN5ZaLGlCUxK2BP1dXGQqHhdj8WxxtZVT4Synwn2TXid08nu/B3FuO2XY680cZfzOKs9kuPJ3z0/z8AsfNRvbX5pBdm8sBi4H8lkJa+66lB06MjWmJxOdEoP9ZDyXVx4QyRz7FVgNu71VsHXb21R1ix6ksTOV5TM9NJTWU/qPhYCikJaajk4HJaIT24E2hsDQXa815RsbD9L/zo3ceIc9joqipmKXEt/QabryypEjcf31PqHc7eBLtxvmoioO2wxy1FRBfeY9tsJL6G40acE1cS/8o6q8IpLQRZj7M0v7Ci/GKgSyznqIzJl7GglxSdbX7GpJAScisbRRF1hp79tMM3i4POZVGpqJRrO4a9lTpWfi4oAEF8V/gL20SWCM7qwVEAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 ahfgymTGsLrv5DvRElUX4A"\n        title=""\n        src="/static/1*ahfgymTGsLrv5DvRElUX4A-433a8ea6d09d1563cbeaa06f2eb3755c-082ce.png"\n        srcset="/static/1*ahfgymTGsLrv5DvRElUX4A-433a8ea6d09d1563cbeaa06f2eb3755c-c7cb1.png 158w,\n/static/1*ahfgymTGsLrv5DvRElUX4A-433a8ea6d09d1563cbeaa06f2eb3755c-93041.png 315w,\n/static/1*ahfgymTGsLrv5DvRElUX4A-433a8ea6d09d1563cbeaa06f2eb3755c-082ce.png 630w,\n/static/1*ahfgymTGsLrv5DvRElUX4A-433a8ea6d09d1563cbeaa06f2eb3755c-88c8a.png 675w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Art, for reference.</p>\n<p>But simply printing this ‘pixel art’ out at a large size isn’t really impressive. After all, why bother? — you could just as easily go with a higher resolution version of the same image. You could print a version of the pixel art on something the size of a postage stamp, but just as easily print it on a sheet of paper, or on a large poster — there’s no constraints on standard printing, after all. What’s more visually impressive is mixing media. If you made your pixel art out of lego for example; well, that’s more interesting.</p>\n<p>💡 From this idea, PokéProject: LEGO Edition was born.</p>\n<p>LEGO bricks come in a variety of colours and with a fairly rigid set of dimensions. The smallest of these is the 1x1 brick, approximately 8mm square in size. If we could recreate a 32x32 pixel sprite that’d give us something just over 25cm square in size, and a 96x96 sprite would be just under 77cm square, which sounds like it could make some impressive pieces for wall art.</p>\n<p>So, how to make this a reality?</p>\n<h4>Data sources and harvesting</h4>\n<p>The first thing I needed to do was discover what LEGO bricks were available, and in what colours. Information for the available colours is readily available from <a href="https://bricks.stackexchange.com/questions/75/how-many-different-colours-of-lego-bricks-are-there">a variety of sources</a>, including RGB and Hex colour mappings, so it was easy enough to grab that data.</p>\n<p>To find out what bricks were actually available to purchase (given that a lot of bricks are not available to purchase individually and on demand) I had to visit the <a href="https://shop.lego.com/en-GB/Pick-a-Brick">official LEGO Pick-A-Brick service,</a> and essentially scrape the entirety of their search results to collate a data store of the available bricks for use in my calculations.</p>\n<p>I’ve made <a href="https://github.com/psyked/LEGO-Bricks-Data">the results of my data harvesting efforts available on GitHub.</a></p>\n<h4>Palette mapping</h4>\n<p>The original Game Boy Colour could support over 32,000 colours [<a href="https://en.wikipedia.org/wiki/List_of_video_game_console_palettes#Game_Boy_Color">source</a>], but LEGO Bricks only come in 40 or so [<a href="http://lego.wikia.com/wiki/Colour_Palette">source</a>]. The first challenge was to map those two palettes together and visualise the outcome.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/1*m0a0IO5JS4BninOLPPt97A-236dbf93e23dd92f2402a428d45a2a8b-1679e.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 56.29629629629629%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAUCAwQG/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQD/2gAMAwEAAhADEAAAAXFaaRdEZRP/xAAbEAABBAMAAAAAAAAAAAAAAAASAAECAxMyNP/aAAgBAQABBQK0xfKShzwdUaf/xAAYEQACAwAAAAAAAAAAAAAAAAAAAQIhIv/aAAgBAwEBPwGeRWf/xAAWEQEBAQAAAAAAAAAAAAAAAAAAASH/2gAIAQIBAT8BXH//xAAcEAABAwUAAAAAAAAAAAAAAAAAAQIxECJhcYH/2gAIAQEABj8CskbGaPGcF2f/xAAcEAACAQUBAAAAAAAAAAAAAAAAAREQITFBUaH/2gAIAQEAAT8hfRDyUoUdjx0ZFzzseyf/2gAMAwEAAgADAAAAEDv/AP/EABYRAQEBAAAAAAAAAAAAAAAAAAERAP/aAAgBAwEBPxAItygd/8QAFhEBAQEAAAAAAAAAAAAAAAAAAREA/9oACAECAQE/EBsMKm//xAAbEAEBAAMBAQEAAAAAAAAAAAABEQAhMUFh0f/aAAgBAQABPxBhLJ3Q/cXqeTDV6d8wbzKnoI6xKtj2fca1Vh7z/9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 m0a0IO5JS4BninOLPPt97A"\n        title=""\n        src="/static/1*m0a0IO5JS4BninOLPPt97A-236dbf93e23dd92f2402a428d45a2a8b-af57e.jpeg"\n        srcset="/static/1*m0a0IO5JS4BninOLPPt97A-236dbf93e23dd92f2402a428d45a2a8b-847f7.jpeg 158w,\n/static/1*m0a0IO5JS4BninOLPPt97A-236dbf93e23dd92f2402a428d45a2a8b-93973.jpeg 315w,\n/static/1*m0a0IO5JS4BninOLPPt97A-236dbf93e23dd92f2402a428d45a2a8b-af57e.jpeg 630w,\n/static/1*m0a0IO5JS4BninOLPPt97A-236dbf93e23dd92f2402a428d45a2a8b-28cf9.jpeg 945w,\n/static/1*m0a0IO5JS4BninOLPPt97A-236dbf93e23dd92f2402a428d45a2a8b-0d474.jpeg 1260w,\n/static/1*m0a0IO5JS4BninOLPPt97A-236dbf93e23dd92f2402a428d45a2a8b-1679e.jpeg 1350w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Directly mapping colours to colours wasn’t especially hard to implement — and the effects weren’t too bad either.</p>\n<p>For the first pass at this colour mapping, I used what was essentially a <a href="https://stackoverflow.com/a/13587077/377961">Euclidean distance</a> calculation, treating the colour of each pixel in the source image as a number and finding the nearest match in the more limited lego colours palette.</p>\n<h4>Introducing… perceptual Colour Matching theory</h4>\n<p>After a little testing, it emerged that the simple colour matches being used weren’t quite up to scratch. As an example, the lightest of colours — which were quite clearly a grey, green or blue — would be matched with the light pink colour, because that’s the closest match from a programmatic point of view, or important details would get lost when there’s not a lot of contrast.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/1*IHN_O3KWkc8rDCfBRVPSzg-ebfb21f90484cee39f0a464f9163e747-124c0.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 32%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAIAAABM9SnKAAAACXBIWXMAAAsSAAALEgHS3X78AAABbUlEQVQY0y2PW0vCYACG9/+67i7IfkAXnQiC6iZEKfAQiqAiHRQtozYzNfLQdFOn5Kkhn2eXOl1prnmYefia0HP18MB78SIQwli9l652JZlCuIBLpvM5mm5898eSL5YsY7EjuonGYjKbw/+EFDv8hjpwu+ZMaqnAcSiHMwIrYG9lmcJrsmcd7rzTWyhV+50vYVubOJS9hPUAlWcSGFPPdxGMAqv72NmKTbuF6o5c1yof3+wbsMiOJrhniJ1Yo3LLcxDP0cXWpjygXH9V7ZLnCtKg9IAUg3Bc+zKQOvAAPUXLSRqwLFzMigVa/0iYyJLR57eQGeGnOxzweDRx6ijYiIrmKR2kmxNRQMaj4YOfsvjjqjvS6InjoCWdYdudK/u9PRhWW1AUT+TZPoTzCJkzW136m6jO7PXEK0NxhozEX+q9TtdYW4geDMQwaErjD/YTlBt4FsTpersnpKqsFIlkrcJwF6400+IzJY7rDf4Acj8gEyNFp74AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 IHN O3KWkc8rDCfBRVPSzg"\n        title=""\n        src="/static/1*IHN_O3KWkc8rDCfBRVPSzg-ebfb21f90484cee39f0a464f9163e747-082ce.png"\n        srcset="/static/1*IHN_O3KWkc8rDCfBRVPSzg-ebfb21f90484cee39f0a464f9163e747-c7cb1.png 158w,\n/static/1*IHN_O3KWkc8rDCfBRVPSzg-ebfb21f90484cee39f0a464f9163e747-93041.png 315w,\n/static/1*IHN_O3KWkc8rDCfBRVPSzg-ebfb21f90484cee39f0a464f9163e747-082ce.png 630w,\n/static/1*IHN_O3KWkc8rDCfBRVPSzg-ebfb21f90484cee39f0a464f9163e747-c4006.png 945w,\n/static/1*IHN_O3KWkc8rDCfBRVPSzg-ebfb21f90484cee39f0a464f9163e747-124c0.png 1250w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>DeltaE colour matching on the left, Euclidean distance in the middle, source sprite on the right.</p>\n<p>Fortunately lots of smart people have already figured this out and solved it several times over, and come up with standard formulas for calculating colour matches based on human perception. With the help of <a href="https://stackoverflow.com/a/29247003/377961">StackOverflow</a> and the <a href="http://zschuessler.github.io/DeltaE/">DeltaE library</a> I was able to make some great improvements in the colour matching, enabling a much more nuanced palette map.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/1*VEuetcvPBJ0MeubZVG8mpg-ea2abf3a48d61fcac2a04beaec4c7604-78992.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.88235294117647%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAACI0lEQVQoz2P4jwq+ff36+PmzZ6/f/Pj+AyLy7t3bO/fvv3j79t3bd2iKGVB4//6B9F+9+frMMSgXLPL10aPnp079xwAIzX///nv9+cmdt7eOViWdtNX8/uLNn///X39+fffdk0uT+m6GxH988PQvzAI0zSChSbsaddqs1PJMQhyVi2YH7r48a/ruBeZ1gaaZflm+HiUTc+eeXvL/L4bN/8Dmvf/8KXfl5uS1B60aMxNmVnz88vrHl69Zm5cH7FotXpVm21P08PUjuGKwZpDHgG4GGXjv2fO86QtrZ8ypnL+4eMLMd+8+vPz80X/OlIi5Ux2XzLCf0HX9wUOwB/9isfnVu/ePnz39+vnj1YdP3376BBR5+eH9lYcP3n54f+Hh/advXv/5+xclwL59A8bOt0+fP7/7+OHLl69fv3//8u3b31+/fnz79unjJyDn94+fQPLX128/vn778vHTpw8fv3789PvnL5Dm0LCw8vio7WXlD+smfN2z9f/mzcdaO4PCQsMqCjsOTp54dmb+3JaJR3qSO2uKFy5e+eFBz62zCTtWz78AijkGbmFxT26OJTKypzWsf8xc+n9Cw1J/ayY+AQYz5eglTsk7fcTKbCPX+Mj4melml1U8uhd96qTu9M6G7WtAmtXsPUsFRfcxMGxm5/g+4ciHCelTY+UkdC0ZHGTLFoiX7JRjaNaL3Oii56tnFluWe/p19pGnGTOmrNy64s/vvwAPbflK7WnjsQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 VEuetcvPBJ0MeubZVG8mpg"\n        title=""\n        src="/static/1*VEuetcvPBJ0MeubZVG8mpg-ea2abf3a48d61fcac2a04beaec4c7604-082ce.png"\n        srcset="/static/1*VEuetcvPBJ0MeubZVG8mpg-ea2abf3a48d61fcac2a04beaec4c7604-c7cb1.png 158w,\n/static/1*VEuetcvPBJ0MeubZVG8mpg-ea2abf3a48d61fcac2a04beaec4c7604-93041.png 315w,\n/static/1*VEuetcvPBJ0MeubZVG8mpg-ea2abf3a48d61fcac2a04beaec4c7604-082ce.png 630w,\n/static/1*VEuetcvPBJ0MeubZVG8mpg-ea2abf3a48d61fcac2a04beaec4c7604-c4006.png 945w,\n/static/1*VEuetcvPBJ0MeubZVG8mpg-ea2abf3a48d61fcac2a04beaec4c7604-85e68.png 1260w,\n/static/1*VEuetcvPBJ0MeubZVG8mpg-ea2abf3a48d61fcac2a04beaec4c7604-78992.png 1360w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>DeltaE (the 1976 version) colour matching isn’t half bad.</p>\n<p>There are actually three versions of the DeltaE / LAB perceptual colour matching calculations, so with a little experimentation I was able to try them out until I found one that seemed to work well across the board.</p>\n<h4>Expanding the data set</h4>\n<p>It was at this point in time I stumbled across an interesting piece of information — not all of the available LEGO bricks are actually available through Pick-A-Brick, but many of them <em>are</em> available through the <a href="https://www.lego.com/en-gb/service/replacementparts/sale">replacement parts service,</a> providing you know the part id of the brick itself.</p>\n<p>This data set was a little more difficult to put together, but it’s essentially the same principle — scraping the official LEGO website and putting it into a JSON data set for my source code to use.</p>\n<p>The effect of this that it massively expands the available brick colours and dimensions, which in turn greatly improves the quality of the colour matching in our models.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/1*NRj28widDkpcI5InJLhXJA-ca0ac0e8114d7eca0754cae8c82a22d4-c70b5.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 77.61194029850745%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAIAAACZeshMAAAACXBIWXMAAAsSAAALEgHS3X78AAADVElEQVQoz12Te0hTcRTHL0R/REESVPSkTEmsVAIxrUaagdp6Yo9BYioOS6woVGors0wMbWplm5blnGWRZmpmKr6omZqls8l0a5vb3O7d3X3oNrfrtrvbnTORvlwOh3N+n3u+nB8/gKIot9tNRyMEjctkcrlcMzlJzctb12g0IyMSuigbHwdBaLFOC6D+iZibM1stsza7w+labNOy2Wxmq9VKELMOxxxBUEu0ALtJko6IeFicm2e3TNM56XZ5p3tyi0VaVIiNDNO5i3S6qSWTCccsHfU6xRgnp5kRKubc9GJO0ul0Oc2kQycS4RfZQwlpxIz5f9sl7ZzLb6J988P3sDdxA3yeHmYIh8pbhx/XfW9Orr10qigljB2Vd/5E3ZH4msYq/mCVHFR6f+GBe8fEZ/mpscWXIiu5W68eXZkZcpYf+Lrn+oRaeb0ydy83Jawka/vV874sRlhubHpdxoResQCT8x76pCpBn5TXrWAXl8ZkJ/HbxF5jBtCU3NNy+UdPjLB87bVEZgUPmbEuOge82yqs/xzPq8woeJQpEqY/LUu4e1+hUtGtDz/6Qyt4zMK86NqKgMpH2x7cErQ0za+NXIAhBCurb/jS29n3c6Cmtf1J27fBoQEEx+lWUWtzfmO96Gt3rfhrev3r971dowqPZ3IRXiqXy0Vfp8eO9yPd/+7STdhs/x0GDCCkhyCNXq9UT6p1OhhFcXwapWVCcRSfxnDQAMGwCccw1ISYjDAMQqgRRhHEszCpRKIeG9OMSg1KJaLVEiii001pDHoQN+J2FMRh2AzD0/CUEcbssxhhN1qtOgyxEXbPZGagv+honOJ0uq26iqoV6jKzd/hu3xwZwSxNvi/LicpPSnnLZj1L9otPzJH1c7WSc98+Bb0okmMmDxy+ZnVZcPCvUKaltIx6zp9IS13t47MsyD8iL5YjSQ3kMk+8PB3z8LjPoWO3f4tvqCRxHQ1+JXfGTZ4XAjBWbXgArGgCgJlb1ZDgVc2VuPV+QUDIlkjOOsHAxuX3/MOr90Xnhm/afaBDPvJEhV5o6ksrzPqjVZMuEkgKjSr3D+kM2GkpbobffWwoSItknvE7czjp8f660YO7BDGsJlYqnxV98sKQZuLtlJnTNVrwkqcFp2j4LxfRyYVgG6TaAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 NRj28widDkpcI5InJLhXJA"\n        title=""\n        src="/static/1*NRj28widDkpcI5InJLhXJA-ca0ac0e8114d7eca0754cae8c82a22d4-082ce.png"\n        srcset="/static/1*NRj28widDkpcI5InJLhXJA-ca0ac0e8114d7eca0754cae8c82a22d4-c7cb1.png 158w,\n/static/1*NRj28widDkpcI5InJLhXJA-ca0ac0e8114d7eca0754cae8c82a22d4-93041.png 315w,\n/static/1*NRj28widDkpcI5InJLhXJA-ca0ac0e8114d7eca0754cae8c82a22d4-082ce.png 630w,\n/static/1*NRj28widDkpcI5InJLhXJA-ca0ac0e8114d7eca0754cae8c82a22d4-c4006.png 945w,\n/static/1*NRj28widDkpcI5InJLhXJA-ca0ac0e8114d7eca0754cae8c82a22d4-85e68.png 1260w,\n/static/1*NRj28widDkpcI5InJLhXJA-ca0ac0e8114d7eca0754cae8c82a22d4-c70b5.png 1340w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>LEGO Brick colour matching, using the available bricks from the replacement parts service.</p>\n<p>Finally happy with the outcome of mapping sprite pixel colours to LEGO brick colours, I decided to tackle the next challenge — making efficient use of LEGO bricks.</p>\n<hr>\n<p>You can see the code in action here: <a href="https://www.pokeproject.co.uk/lego/">https://www.pokeproject.co.uk/lego/</a></p>\n<p><strong><em>Stay tuned for Part 2!</em></strong></p>\n<p><a href="https://medium.com/@psyked/pok%C3%A9project-adventures-with-lego-bricks-cd9401091239">Read Part 2</a></p>',frontmatter:{title:"PokéProject: Adventures with LEGO Bricks",date:"June 05, 2017",tags:["Lego","Pokemon","Canvas","Side Project","JavaScript"],url:"https://medium.com/@psyked/pok%C3%A9project-adventures-with-lego-bricks-7f24c02f6d9d",image:null,description:"Part 1: Using JavaScript and HTML5 canvas elements to convert images into 2 dimensional LEGO brick plans."}}},pathContext:{prev:{frontmatter:{path:"/blog/pokeproject-adventures-with-lego-bricks-7f24c02f6d9d/",tags:null,title:"PokéProject: Adventures with LEGO Bricks",date:"2017-06-05T11:45:10.366Z"}},next:{frontmatter:{path:"/blog/pokeproject-adventures-with-lego-bricks-cd9401091239/",tags:null,title:"PokéProject: Adventures with LEGO Bricks",date:"2017-06-07T06:48:12.747Z"}}}}}});
//# sourceMappingURL=path---blog-pokeproject-adventures-with-lego-bricks-7-f-24-c-02-f-6-d-9-d-1cc1328995b7867f3e8a.js.map