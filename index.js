const { GoogleSpreadsheet } = require('google-spreadsheet') ;
const credentials = require('./credentials.json');

const docId = '1rBSazhUmaHSdW9F1n5_Za2krkPG4GUpWatNzZZfs660';
const doc = new GoogleSpreadsheet(docId);

const accessSheet = async() => {
    await doc.useServiceAccountAuth({
        client_email: credentials.client_email,
        private_key: credentials.private_key
    });
    await doc.loadInfo(); 
    console.log(info)
}

accessSheet()