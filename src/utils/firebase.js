import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyALzjQPniCn_Ce1VwXU7hrYgQ3fsv0gZ7c",
  authDomain: "divvyapp-d1e5a.firebaseapp.com",
  databaseURL: "https://divvyapp-d1e5a.firebaseio.com",
  projectId: "divvyapp-d1e5a",
  storageBucket: "divvyapp-d1e5a.appspot.com",
  messagingSenderId: "902253517388"
 };
 firebase.initializeApp(config);


 const firebaseListToArray = (firebaseObjectList) => {
   if (!firebaseObjectList) return [];

   return Object.keys(firebaseObjectList)
   .map(k => {
     const obj = {
       id: k
     };
     for (let key in firebaseObjectList[k]) {
       if (firebaseObjectList[k].hasOwnProperty(key)){
         obj[key] = firebaseObjectList[k][key];
       }
     }
     return obj;
   });
 }

 const database = firebase.database();
 const auth = firebase.auth();

 export { firebase, database, auth };
 export { firebaseListToArray };
