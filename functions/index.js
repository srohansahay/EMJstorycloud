const admin = require("firebase-admin");
admin.initializeApp();
const functions = require("firebase-functions");

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

exports.addUserToFirestore = functions.auth.user().onCreate((user)=>{
   var usersRef = admin.firestore().collection("users")
   return usersRef.doc(user.uid).set({
       displayName: user.displayName,
       emojis: '\u{1F43C}\u{1F33F}\u{2764}'
   });
});
