import firebase from 'firebase'

const firebaseConfig = {
	apiKey: "AIzaSyAxOeNsZ0Jsl-y1YlLyvT016Dg6GOVllwU",
	authDomain: "ubereatsrn-b232c.firebaseapp.com",
	projectId: "ubereatsrn-b232c",
	storageBucket: "ubereatsrn-b232c.appspot.com",
	messagingSenderId: "821606356500",
	appId: "1:821606356500:web:dd183fe74e24c63db6b901"
};


!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();


export default firebase