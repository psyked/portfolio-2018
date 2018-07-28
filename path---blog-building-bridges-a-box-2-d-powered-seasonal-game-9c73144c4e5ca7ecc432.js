webpackJsonp([0x6d4b0084602a],{1077:function(e,a){e.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/building-bridges-a-box2d-powered-seasonal-game/index.md absPath of file >>> MarkdownRemark",html:'<p>It\'s that time of year again - and after a week or so of furiously learning Box2D, we at MMT Digital have just released our seasonal Flash game into the wild.  The idea is all about building bridges across gaps in the terrain, using Box2D to simulate your resulting creation.</p>\n<p>You can check it out here: <a href="http://www.mmtdigital.co.uk/Flash/ChristmasGame2009/Building_Bridges.html">Play "Building_Bridges" now.</a></p>\n<p>[\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/buildingbridges-5b695a0173f3cd6f4aed07fc054dedf7-41a8d.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAACJklEQVQoz23Na0/aYBgG4P6wbdncn1gyk4G6gKizFXE4IXGSiSBykIqsBYqcWqDIoX3hbaHtS3Eu6DDZPGWJJiZuv2Gflq24jX3Ykit3nty5kweLVdDIdlkjK1psfwRFylp4CI1EeLRZ1kJ8j6wgLMxrQ3ejyJ/jl2BJ3Srr/hIKcEqgqAZL2kZRXWO7uf36xTX69v0H5i+q/+Xj1A0OLdKZjTjnzmprrOrKtLcLcr8uX8ooW2G6B11snVOGWOVNoWNYv+NlFU+h7c6p9nTO65gM4KtxHvXq7SulBwRtrag7d/hZywS2zEAnA410ZZSVXGc503bmlEVGJlKSKw23CmomGv3I8R+aqA4OPPkObvTZ9moaEAsLmNA/E/vne+qRN18LpAGZh3SqKlek45p8IiqnEtJE3c9351OSjW4RSfiSkV7tSSvZjpOuYWdfbi5vbwc3Rw3Jd9LUjyE6rEpsXQ+xyutc2/hjpZrTcYhT8mIKziegPQmXGMnBwKW0jPmiW97toDvJEmnwIilb6dYkBc27YGoXTJBwakc0RwVbgptLsROkOEM38SQk7uCJFmbxvrX4U1ZKslHNGQrYKGCJi9MUmIoBT43eBKWQMNA/a2df3/tq757HxblEa5b+DTPtyqaYZCLFZ9Gh8Yj4NCyOh8GTYJ3RGtqngX56eXB+dXhxvX94YszMJBjB7uGNIUL412NHa4yoPsTLhkf26phDeGAX7i/89RPBJZmybjZ0oQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Building Bridges -  a Box2D Christmas Game"\n        title=""\n        src="/static/buildingbridges-5b695a0173f3cd6f4aed07fc054dedf7-41a8d.png"\n        srcset="/static/buildingbridges-5b695a0173f3cd6f4aed07fc054dedf7-bf474.png 158w,\n/static/buildingbridges-5b695a0173f3cd6f4aed07fc054dedf7-d5dd3.png 315w,\n/static/buildingbridges-5b695a0173f3cd6f4aed07fc054dedf7-41a8d.png 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>This years\' game is a bit of a geeky dream – and luckily one that also makes for a fun end game.  Under the hood, you see, ‘Building Bridges’ is all based off a realistic world physics simulator - called <a href="http://box2dflash.sourceforge.net/">Box2D</a>.  All of the interaction between the elves, bridges and environment is handled by the sort of physics engine you’d find in a proper Games Console game, and all of that is based on what would happen in a real Newtonian world.</p>\n<p>[\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/bbtitlescreen-244ed998a677c36abd8f3124d1566ae0-41a8d.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAACqklEQVQozwGfAmD9APjs7ebBvt6/vvK7t+ynoe62tu7ExOq9venAwOm9vvLl5vf///r+/vb7/NLc5vn9/v3///3///v///n+/gDoqarbLSrRX13lR0fhV1jcTk7bV1fXVlXUWVjHLy7OeXnr///h6efAyMyTmJ+lopXS2tXJzsa7wsfb6e4A09PXzkpJ1kpH0FRRzk1IyEM/yVpYv1ZXv19fu0xNsoyUrszcfHNgWD4WWkIcVjsTZ1ArUTQIc2xfrL3RAJi4rYCmY4emZIioaIqkZImjY4mrb4SjaYOjZnyhZZWwupuyy21lVFUyAF4/EWFDF0ouBT0eAGxmWKK4zQB2ln5RfhxWgyhWgiZVgyZVgydUgCNchi1UgSFLeh2Ho6qWtM90dGiGZjeRdUp4Wy5HOyZHOSFtcm+atMgAb5N9QG4OS3cgRXIXR3MZSXUcQW4RO2oLN2cCQW8agqKwi6zGfJOecXx7bXVyWUgrfIaGfYaGgZKYjqvBAGeNe0VuFk11JU51JUVvG0dxHUtzIUZwHDlmCT9rHnqeroOrx3KBg2pRK2ZPLGVNKFxDHFc4ClxOM4itxgBkjIA7YglHbBpGbh1CaxhBahdCbBlAZxNCZw9EbStym696psRpfIB2WCx8XjKAYjR9Xi9NMARbWUqAqcQAc52yXYd6VX9rUXNcXmhJW2pOTm1XVH9yWYV5ZJGZcJy4caLBZXqAhlwjj2YslHE+jGcyRSMAVVtWeqfEAGGUs2aYvGaZvlFsgXd0fHF0fU5fb1+MrGacwV+Ut1uQr12VtlZ7jWVdRGpjS2FLJ2hhS1BSRl5+jWmbugCoxNKcvMuQs8RqorrDrrWojZpTlLVilrJ5pbuStcehv8+mw9GnxNKdvM2JsMVXVkhZfpBppMdunrmIrsIcVUe6mwlgnwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Building Bridges Title Screen"\n        title=""\n        src="/static/bbtitlescreen-244ed998a677c36abd8f3124d1566ae0-41a8d.png"\n        srcset="/static/bbtitlescreen-244ed998a677c36abd8f3124d1566ae0-bf474.png 158w,\n/static/bbtitlescreen-244ed998a677c36abd8f3124d1566ae0-d5dd3.png 315w,\n/static/bbtitlescreen-244ed998a677c36abd8f3124d1566ae0-41a8d.png 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>It’s still complicated to put together a game on top of all that clever physics engine, but using Box2D has made things possible in the Flash Player that I couldn’t have even otherwise considered building.  And that’s all a testament to just how flexible and powerful the Flash Player runtime has become – Box2D for Flash is a ‘port’ (translation) of Box2D for C++ - which was originally made for full-on desktop applications and games, not bad when you consider that Flash runs in a browser, with only a fraction of your systems’ resources.  So it’s not all about animation, video and ‘skip intro’!</p>\n<p>We’ve moulded Box2D to suit our needs for this game, but that’s only a small slice of what it’s capable of.  Go on, get back to playing the game – and don’t just ‘solve’ the levels, solve them with creativity!</p>',frontmatter:{title:'"Building Bridges", a Box2D - powered Seasonal Game',date:"December 18, 2009",tags:["box2d","flash","christmas-game"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/the-flash-platform-in-your-tv/",tags:["flash-platform","open-screen-project","youtube"],title:"The Flash Platform in your TV?",date:"2009-12-10T08:36:18.000Z",description:null,image:null}},next:{frontmatter:{path:"/blog/building-bridges-some-solutions/",tags:["flash","box2","building-bridges","christmas-game","mmt-digital"],title:"Building Bridges: Some solutions",date:"2009-12-23T23:15:54.000Z",description:null,image:null}}}}}});
//# sourceMappingURL=path---blog-building-bridges-a-box-2-d-powered-seasonal-game-9c73144c4e5ca7ecc432.js.map