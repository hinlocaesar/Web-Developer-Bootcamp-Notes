const args = process.argv[2];
let franc = require('franc')
let langs = require('langs');

let langCode = 0;
langCode = franc(args)
if (langCode != 'und') {
    let languageStr = langs.where(3, langCode);
    console.log(languageStr.name);
} else {
    console.log("Language not found");
}

