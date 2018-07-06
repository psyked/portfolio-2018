const fs = require('fs');
const path = require('path');
const fm = require('front-matter')
const args = process.argv.slice(2);
const dir = './src/posts/';
const match = /([0-9\-]*)(.*?)\.markdown/g;
const replace = '$2/index.md';
const files = fs.readdirSync(dir);
var TurndownService = require('turndown')
var turndownService = new TurndownService()

files
    .filter(file => {
        return file.match(match);
    })
    .forEach(file => {
        // file = file.replace('.markdown', '')
        // fs.readFile(path.join(dir, `${file}/index.md`), 'utf8', function (err, data) {
        fs.readFile(path.join(dir, file), 'utf8', function (err, data) {
            if (err) {
                console.warn(err)
                return
            }

            const newPath = `${file.replace(/([0-9\-]*)(.*?)(\.markdown)/gi, '$2')}`
            // data = data.replace(/(path\: )(.*?)(\n.*?)/, `$1${newPath}$3`)
            console.log(newPath)
            var content = fm(data)

            var bodyContent = content.body
            // var bodyContent = turndownService.turndown(content.body)

            let newContent = `---\npath: /${newPath}/\n${content.frontmatter}\n---\n${bodyContent}`
            newContent = newContent.replace(/(.*)(date\:\s')([0-9\-]*)\s([0-9\:]*)('\n)(.*)/, '$1date: $3T$4Z\n$6')

            try {
                fs.mkdirSync(path.join(dir, newPath));
            } catch (e) {
                console.warn(e)
            }
            // console.log(content)
            fs.writeFile(path.join(dir, `${newPath}/index.md`), newContent, { encoding: 'utf-8' }, function (err) {
                if (err) {
                    console.warn(err)
                    return
                }
                console.log('Written file')
            })
        })
    })
        //     .forEach(file => {
        //         const filePath = path.join(dir, file);
        //         const newFileDir = path.join(dir, file.replace(match, '$2'));
        //         const newFilePath = path.join(dir, file.replace(match, replace));
        //         console.log(filePath, newFilePath)

        //         try {
        //             fs.mkdirSync(newFileDir);
        //         } catch (e) {
        //             console.warn(e)
        //         }

        //         fs.renameSync(filePath, newFilePath);
    // });