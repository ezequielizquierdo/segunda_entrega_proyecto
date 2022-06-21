const admin = require('firebase-admin');
const serviceAccount = require('./clase20bd-77dfa-firebase-adminsdk-081rj-f65ea0f753.json');

const firebase = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://clase20bd-77dfa-default-rtdb.firebaseio.com"
});

const firebaseDb = firebase.firestore();

module.exports = {
  firebaseDb,
  admin
};
