var sharp = require('sharp');

const imageFolder = '../img/';
var blurryFolder = '../img/blurred';
const fs = require('fs');
console.log("Blurring Images ....")
fs.readdirSync(imageFolder).forEach(file => {
    console.log(file);
    if (!fs.existsSync(blurryFolder)) {
        fs.mkdirSync(blurryFolder);
        sharp("../img/" + file)
            .resize(1600, null)
            .blur(95)
            .toFile('../img/blurred/blury_' + file, function(err) {});
    } else {
        sharp("../img/" + file)
            .resize(1600, null)
            .blur(95)
            .toFile('../img/blurred/blury_' + file, function(err) {});
    }
    console.log("....")
});
console.log("Blurring Images Finished")