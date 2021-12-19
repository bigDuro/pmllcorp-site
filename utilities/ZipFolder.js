const path = require('path');
const zipFolder = require('zip-a-folder');
const vgdtAPI_zip = 'build/public/api.zip';

const publicHtml = 'build';
const publicHtml_zip = 'build/site-beta.zip';
console.log('zipFolder:: ', zipFolder);
class ZipAFolder {

    static main(from, as) {
        zipFolder.zipFolder(from, as, function(err) {
            if(err) {
                console.log('Something went wrong!', err);
            }
        });
    }
}

ZipAFolder.main(publicHtml, publicHtml_zip);
