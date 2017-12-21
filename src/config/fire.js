
import * as firebase from 'firebase';

// should go in a secret file
const config = {
    apiKey: "AIzaSyCYWnWPIfj0JnSB1fqWQZg27VaafYnfDKo",
    authDomain: "realtimechatreact.firebaseapp.com",
    databaseURL: "https://realtimechatreact.firebaseio.com",
    projectId: "realtimechatreact",
    storageBucket: "",
    messagingSenderId: "468227521941"
};
firebase.initializeApp(config);
export default firebase;
