const fs = require('fs')
const path = require('path')
const TurndownService = require('turndown')
const download = require('image-downloader')

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var turndownService = new TurndownService({
    headingStyle: 'atx',
    hr: '---'
})

const main = async () => {
    const files = await fs.readdirSync(path.resolve(__dirname, 'src/posts'))
    // console.log(files)
    files.map(file => {
        if (!fs.lstatSync(path.resolve(__dirname, 'src/posts', file)).isDirectory()) {
            return
        }
        const fileData = fs.readFileSync(path.resolve(__dirname, 'src/posts', file, 'index.md'), 'utf-8')
        // console.log(fileData)
        const assetsToDownload = []
        // const regex = /!\[(.*)\]\(\/content\/images\/(.*?)[\s|\)]/g
        const regex = /!\[(.*)\]\((http\:\/\/uploads\.psyked\.co\.uk\/[0-9/\w\.\-]*).*\)/g
        let match
        while ((match = regex.exec(fileData)) && assetsToDownload.push(match[2])) { }

        let fn
        // if (images) {
        // console.log(assetsToDownload)
        assetsToDownload.forEach(async (pathFragment) => {
            // const url = `http://uploads.psyked.co.uk/${pathFragment}`
            const url = `${pathFragment}`
            const dest = path.resolve(__dirname, 'src/posts', file)
            console.log(url)
            try {
                const { filename, image } = await download.image({ url, dest })
                fn = filename
            } catch (err) {
                console.error(err)
            }
        })

        const newContent = fileData.replace(/!\[(.*)\]\(http\:\/\/uploads\.psyked\.co\.uk\/[0-9/\w\.\-\/]*\/([0-9/\w\.\-]*).*\)/g, `![$1]($2)`)
        fs.writeFileSync(path.resolve(__dirname, 'src/posts', file, 'index.md'), newContent)
        // }
        // const segments = fileData.split(/\n\n/g)
        // const modifiedSegments = segments.map((segment, index) => {
        //     if (index === 0) {
        //         return segment
        //     }
        //     return turndownService.turndown(segment)
        // })
        // const newData = modifiedSegments.join('\n\n')
        // fs.writeFileSync(path.resolve(__dirname, 'src/posts', file, 'index.md'), newData)
    })
}

main()