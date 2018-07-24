const fs = require('fs')
const path = require('path')
const TurndownService = require('turndown')

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
        const segments = fileData.split(/\n\n/g)
        const modifiedSegments = segments.map((segment, index) => {
            if (index === 0) {
                return segment
            }
            return turndownService.turndown(segment)
        })
        const newData = modifiedSegments.join('\n\n')
        fs.writeFileSync(path.resolve(__dirname, 'src/posts', file, 'index.md'), newData)
    })
}

main()