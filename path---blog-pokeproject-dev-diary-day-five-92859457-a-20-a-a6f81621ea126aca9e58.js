webpackJsonp([0x5c835898edaa],{1283:function(a,e){a.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/pok%C3%A9project-dev-diary-day-five-92859457a20a/index.md absPath of file >>> MarkdownRemark",html:'<h1>PokéProject Dev Diary: Day Five</h1>\n<h2>Move fast, change things.</h2>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/1*Kp3dePIQiFvW6HuPg7Dxpg-2d83f5bd82787c33023f29310ff911a6-2f776.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 66.64999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMFAgT/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAABo7W4nnYRX//EABsQAAICAwEAAAAAAAAAAAAAAAIDAAEREhMj/9oACAEBAAEFAk+dNPUGIF5csla9pyCp/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQMBAT8BR//EABcRAQADAAAAAAAAAAAAAAAAAAAREmH/2gAIAQIBAT8BlbH/xAAeEAEAAQIHAAAAAAAAAAAAAAABAAIRAxITITFBof/aAAgBAQAGPwIw+wizUKuSXzeSyzYn/8QAGhABAAMBAQEAAAAAAAAAAAAAAQARUTFxgf/aAAgBAQABPyEGsX2VR3IcpBci7OGDFp+RqFAT/9oADAMBAAIAAwAAABAID//EABgRAAMBAQAAAAAAAAAAAAAAAAABESFh/9oACAEDAQE/EIqtF2f/xAAXEQADAQAAAAAAAAAAAAAAAAAAATEh/9oACAECAQE/EIg9j//EAB0QAQEAAgIDAQAAAAAAAAAAAAERACFBUTFhocH/2gAIAQEAAT8QpKscNU7PucIOztl50HgveI21YAJPdxWEfOmCjmgVf3P/2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 Kp3dePIQiFvW6HuPg7Dxpg"\n        title=""\n        src="/static/1*Kp3dePIQiFvW6HuPg7Dxpg-2d83f5bd82787c33023f29310ff911a6-af57e.jpeg"\n        srcset="/static/1*Kp3dePIQiFvW6HuPg7Dxpg-2d83f5bd82787c33023f29310ff911a6-847f7.jpeg 158w,\n/static/1*Kp3dePIQiFvW6HuPg7Dxpg-2d83f5bd82787c33023f29310ff911a6-93973.jpeg 315w,\n/static/1*Kp3dePIQiFvW6HuPg7Dxpg-2d83f5bd82787c33023f29310ff911a6-af57e.jpeg 630w,\n/static/1*Kp3dePIQiFvW6HuPg7Dxpg-2d83f5bd82787c33023f29310ff911a6-28cf9.jpeg 945w,\n/static/1*Kp3dePIQiFvW6HuPg7Dxpg-2d83f5bd82787c33023f29310ff911a6-0d474.jpeg 1260w,\n/static/1*Kp3dePIQiFvW6HuPg7Dxpg-2d83f5bd82787c33023f29310ff911a6-66f39.jpeg 1890w,\n/static/1*Kp3dePIQiFvW6HuPg7Dxpg-2d83f5bd82787c33023f29310ff911a6-2f776.jpeg 2000w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Cover image by Alice Achterhof / Unsplash: <a href="https://unsplash.com/search/painting?photo=FwF_fKj5tBo">https://unsplash.com/search/painting?photo=FwF_fKj5tBo</a></p>\n<p><a href="https://www.pokeproject.co.uk/">PokéProject</a> has been live for just over a day now, and I’ve had some initial feedback from early users.</p>\n<p>Amongst that feedback was updating the design to include gradients, much like those provided by the <a href="https://sarcadass.github.io/granim.js/">Granim library.</a> Other bits of feedback have been that it’s frustrating, not being able to download or share the generated images, and that the sprites don’t quite scale properly on browsers other than Chrome.</p>\n<p>Armed with this feedback I’ve completely recreated the visuals using the HTML5 Canvas element instead of simple DOM elements; gone are the <strong><div></strong>, <strong><img /></strong> and CSS elements to be replaced by a<strong><canvas /></strong> element, featuring gradients, sprites and web fonts.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/1*BSQJuXDTSgvqHeDOYcSNjw-8e7d8b689f71cbf9f62e1241822076a7-58fd0.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 70.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAIAAACgpqunAAAACXBIWXMAAAsSAAALEgHS3X78AAACyElEQVQoz02SzU/TYBzHe/MfMfHgFT0Qw9g6tnZb99KXde1eOtnGXtjmlHAgwYMJukQjYYYYjAc9majxIHjgxZgQATVGEghRFPAFJY6t3drurRsb+rRgMPldP/l8n+/3gQ4vs4eX6PaQXxmNKWmmnfa0ku5mmlEyvkqarYNLsZU4VUn7KoOe8gApZbhSCBeZvjJjgjpX2E7E1nk0tbaytPdgUpyfzs8+L6yt7i4vbuVuFOdndlbfb88823m7/HPx5d7s9Pbci+/JgEwZSiqcYQ4ThHR96Ft2ZPt+7sfDu2tTE18nxjbu5XZHEr/Gr21M3vqcy37Mju7cyW6Nj30aSfGsWfSYSnQf1EnT7RTdjLlaUWclhDWCaI1DFQ6V/YgctMo+RGZgiTFKHlhwG3ggdMMljRTcRqidpg+SVGuQaiXIVpxUwEXxesTZHHA2QvbqRQxcJWirBKyy3yL5UJE1q7DbKFAw1E66DzSyGSeaUbwx4GqEnfWwo+S37FFonjXXgN+PSF5E9CKgpPKRljIKpAHStEQrTgChAmwRBziZs6yj8BJq/s2YqpxVDNikICIy5iMSaHkK5gkDpAYGZEyFgRY46yEHsC3A3XPd50A31QDSwM9W/V1lb1+ZNgk0CGzkCbiI66EmCBzDj8mISlbDjk0nvDAcWr+aeH2+Sx7W/bl5qk6dKXmQkkrCPGkoEvoC3gs1VS0I7GpE1Kc2+rFS2PWYsL+5nfkwkXqCWpc5uMidFhmjALQgMKnCBVxfcAH4P7IG6u3HAP8Fh5+au1cY46xJt2DTlUnQsLrNsVYj9506SIm6lKPAAO4Hq2BK0Lrpta5i+nc09opAeA8sMto2qtbA45rW2bvv6IH+I+01sCoYhrPWAxYlYBF8qMCaJQ8oSdOScJE40ebtPdBxYI1UPwOnfgbRh5a9iMSaxH+fCQQ+IR0qmccu/AUpCcyuDHItbwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 BSQJuXDTSgvqHeDOYcSNjw"\n        title=""\n        src="/static/1*BSQJuXDTSgvqHeDOYcSNjw-8e7d8b689f71cbf9f62e1241822076a7-082ce.png"\n        srcset="/static/1*BSQJuXDTSgvqHeDOYcSNjw-8e7d8b689f71cbf9f62e1241822076a7-c7cb1.png 158w,\n/static/1*BSQJuXDTSgvqHeDOYcSNjw-8e7d8b689f71cbf9f62e1241822076a7-93041.png 315w,\n/static/1*BSQJuXDTSgvqHeDOYcSNjw-8e7d8b689f71cbf9f62e1241822076a7-082ce.png 630w,\n/static/1*BSQJuXDTSgvqHeDOYcSNjw-8e7d8b689f71cbf9f62e1241822076a7-58fd0.png 800w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/1*jGwMtgUtaZqwVs3rUQhi2Q-5a4974e5ff2d11a9ac8f1b23c90d9cab-58fd0.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 70.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAIAAACgpqunAAAACXBIWXMAAAsSAAALEgHS3X78AAACyUlEQVQoz03RzU/TYBzA8V40Gths+/TpkBcVEmKUEG+ePXjx4MEY/wMl8WLiSUkwxJOJHiDGEIxyMDEYEjBIgBgOGsUXEBgwu47uhZWOjrH3tX3ap1u3+XQzSvK7fvL9/Z6Hqtfaag5wcJ9j9TnG2YreYxfP43yfle6x07CS6cKpS6Z6GSnnbYUz5Qt6tNeInEUSY+6wVLUC6k5PLju1J8/Lu9MhcSEenThMzuxKI0b65qG6KIdfKLE3YXH2UJlKSE9V+WM8cB+Jx8wQR9XKsF5uL2QHJfFhdOeBsHnnYG8gKtxNxm5l4jeiwuN44KoavCIL93YDg4owEN4YSAauIbEViSxVs/ka5uySxy547XxLOd+K016kevGBp5r1WMoJvE/jxCkzdhKFj2uiRwu2aEKrEWSRwFBVzFcRGV9V9zlFX7XIV7LuWPtwdY63VD4ngPQWxHFoxTgc4SyJM0MABRkjQLDFOwbvaNApQqfA5SOncQrWNRBZ7pgZ6v3ysn1ptFuYb8O7jBlmySOZIZZI9Jsxtgg2eUeHTglWCrxTZFP+3rS/U0tw2+Nnwk+6Fx/1L4x0FoIQx1gkuRiJDFmYZI1NhnKzRBZhJeeWS5Iv98GTWmuJTl+3P9/OTlxcedXuJGhTajSbkmS3GcNPUyTryjysZLlyhrNTUF70br87WZKn6pakjvV/Gj8TWu4wRIJdiZpyk9HXCS41JSSynOLsAw4nofLDG5m8HZ0eDgz3vX92buFtR2qNwzsNGXCv1f20vkZTzYVdmW5glauoAClgZsi3PAa+jXbNPvfFfwB34WazKddpfZXgAiyTLJGHjew+IDgjgK+TvKOApdcwMMfWFUb/fWThDTerrRCcg3+bB24WJwCWgb0HaknWirKayKIQ+//UrYZcp7VftPaTpsrZv007ydn7AO+52IoBRH71398cPbUpV2jt+6k/Jj8Y1T7VPrMAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 jGwMtgUtaZqwVs3rUQhi2Q"\n        title=""\n        src="/static/1*jGwMtgUtaZqwVs3rUQhi2Q-5a4974e5ff2d11a9ac8f1b23c90d9cab-082ce.png"\n        srcset="/static/1*jGwMtgUtaZqwVs3rUQhi2Q-5a4974e5ff2d11a9ac8f1b23c90d9cab-c7cb1.png 158w,\n/static/1*jGwMtgUtaZqwVs3rUQhi2Q-5a4974e5ff2d11a9ac8f1b23c90d9cab-93041.png 315w,\n/static/1*jGwMtgUtaZqwVs3rUQhi2Q-5a4974e5ff2d11a9ac8f1b23c90d9cab-082ce.png 630w,\n/static/1*jGwMtgUtaZqwVs3rUQhi2Q-5a4974e5ff2d11a9ac8f1b23c90d9cab-58fd0.png 800w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/1*jK61EEwBmiAzn50G0ni6Jw-a242784c3b4a99b434ccda2754d97231-58fd0.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 70.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAIAAACgpqunAAAACXBIWXMAAAsSAAALEgHS3X78AAADJ0lEQVQozyXS2W4ScRQG8HkEX8MLb9QWGIZhKcsA2tQlarSmNyYm1gvjfqEmGvekiVtiNFWrtTtQ1logXaBAaWspLRSo0AEGhq1My8AUaGuN/6EP8Mv5zvkO1Er8Uyf2T+F7Z6I7reFaW7h+YbXavlI556PP+8qq+bLaTZ2d3TrtKbVMbSqnKJUti47lUEteYMxCrcl9LLZ3Cd8NFMvmpZAtmtLG8rbV9cGlqB8nbnqIySRlDsZ1AcIQSk+s5794IsdGSaE5h+gz0An8ryq6dzK2/9xPvHKvdi3G7zgj9+ZT96dDL9yRy87USy/+zLP+yOrvmll7ZfPdmMD5hgxiyCI6ElLH/qr/7KnCO6KVqtBfRRcZ8VxJ4qVFLgpxUBIHBdvzfFuB9yvfZCk0GUiOnhQAPJrhawCO7qoiO8rQjjJYUy5XMR+j+M3I5ivi2QrqogVOWjRdgu1F1F4UjxeEY3nUlENGs4g2DQ+nIfXarjJcxwI1bKWmWGLkDanybJ12Fa97cp2T8bZx4qMjcsZKwpaG1Gf5ugx/JA0PpSBVuK4M1rGVqmJpW77IKOYrfC9z1k1NLkS6P/9436MZdoWSwUjHeIJjLKDsqgcyzetPQsoQkDXMX1X4tuULjNRbuujeeG2wr72/3SGFOxWCBZPpkzNyVJcSmvLIKMnXkvzhNG+Q4PYREBaoY8vbrPxdkc+VRbOVdgfpf3Nj7kF79xXl0yOH9E8eWr1BbOQPbMghWhIeScGDKV4/we1NQI3AVfliRTZXkc3SLV5GaMGNj24Fn1x9Kz6sv9Y+8O7DXdOyWJtgV9WkWTmQ5PYlOd8BXmZXlS0wMi8t9YCG6LaJ9Duz5+3XocdXO3/ZZrp6tIr+AMe4gWjYI7EYyB8JTk8cagQGsiwFY10liWNLNlWU27LHx/KwtageDiKaOLgwKxurAsntTXJ68OavONTopiz10i1uWuLclExviiYo1E6JrRtCSw42FwTGHHgm8BLwEMEdILg/QeB487d4U3cMAq1KwVh3qWVmSzy9KZ6kRPaicLyAgn8w59hn0mXgRqu8AwkCf8Obu9ePf479ByEYHovvNYMQAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 jK61EEwBmiAzn50G0ni6Jw"\n        title=""\n        src="/static/1*jK61EEwBmiAzn50G0ni6Jw-a242784c3b4a99b434ccda2754d97231-082ce.png"\n        srcset="/static/1*jK61EEwBmiAzn50G0ni6Jw-a242784c3b4a99b434ccda2754d97231-c7cb1.png 158w,\n/static/1*jK61EEwBmiAzn50G0ni6Jw-a242784c3b4a99b434ccda2754d97231-93041.png 315w,\n/static/1*jK61EEwBmiAzn50G0ni6Jw-a242784c3b4a99b434ccda2754d97231-082ce.png 630w,\n/static/1*jK61EEwBmiAzn50G0ni6Jw-a242784c3b4a99b434ccda2754d97231-58fd0.png 800w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Using a canvas element has several advantages — the resulting images can be easily saved, the gradients are always smooth, and the scaling of the sprites can be tightly controlled, avoiding any unwanted blurring.</p>\n<p>Such a significant change takes a little while, so that’s about all I’ve managed for today’s development session.</p>\n<p>One final thing for the day is that I’ve now set up a proper backlog on <a href="https://trello.com/">Trello</a> to keep track of my future development ideas and feedback from users.</p>\n<h4>Retrospective</h4>\n<p>What’s next? Rewriting everything in canvas was a bit of a big step for the second day that the website had been live, so perhaps we’ll not be doing that again in a hurry.</p>\n<p>The next big thing is really to get some traction in Google rankings and drive some traffic towards PokéProject, and for that we need to start considering things like SEO. Next up then, is some SEO work.</p>\n<hr>\n<p>PokéProject is available online @ <a href="https://www.pokeproject.co.uk">https://www.pokeproject.co.uk</a></p>',frontmatter:{title:"PokéProject Dev Diary: Day Five",date:"September 20, 2016",tags:["JavaScript","CSS","Pokemon","Canvas","Agile"],url:"https://medium.com/@psyked/pok%C3%A9project-dev-diary-day-five-92859457a20a",image:"https://cdn-images-1.medium.com/max/1200/1*Kp3dePIQiFvW6HuPg7Dxpg.jpeg",description:"Move fast, change things."}}},pathContext:{prev:{frontmatter:{path:"/blog/pokeproject-dev-diary-day-five-92859457a20a/",tags:null,title:"PokéProject Dev Diary: Day Five",image:"https://cdn-images-1.medium.com/max/1200/1*Kp3dePIQiFvW6HuPg7Dxpg.jpeg",date:"2016-09-20T20:11:03.647Z"}},next:{frontmatter:{path:"/blog/git-zero-to-git-hero/",tags:null,title:"Git Zero to Git Hero",image:null,date:"2016-09-20T20:31:54.000Z"}}}}}});
//# sourceMappingURL=path---blog-pokeproject-dev-diary-day-five-92859457-a-20-a-a6f81621ea126aca9e58.js.map