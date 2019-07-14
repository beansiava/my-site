import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"

import '../css/landing.css';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD0n8b3zVmOSAOPUre1MItKEHTgPLp1oVg",
    authDomain: "my-site-e3135.firebaseapp.com",
    databaseURL: "https://my-site-e3135.firebaseio.com",
    projectId: "my-site-e3135",
    storageBucket: "my-site-e3135.appspot.com",
    messagingSenderId: "655142939927",
    appId: "1:655142939927:web:05845884e493a9d3"
  };
  // Initialize Firebase
  var fire = firebase.initializeApp(firebaseConfig);
  var db = fire.firestore();
  db.settings({timestampsInSnapshots: true});


class Newsletter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
        
        this.value = ''; // <- clear the input
      }
    
      handleSubmit(event) {
        alert('An email was submitted: ' + this.event.value);
        event.preventDefault(); // <- prevent form submit from reloading the page
        /* Send the message to Firebase */
        //fire.database().ref('emails').push( this.event.value );
        db.collection("emails").add({email: this.event.value})
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
      }
      render(){
        return ( 
            <div className='introText'>
                {/* Still need to create an endpoint for this form.  (Mailchimp subscription) */}
                <form onSubmit={this.handleSubmit}>
                <label className ="label">
                    <input type="email" name="email" placeholder="Email" ref={ el => this.event = el }/>
                </label>
                <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
//Query used on mailchimp:::
// "select":{
//     "fields": []
//   },
//   "orderBy": [
//    {
//      "field" : {
//        "fieldPath": "email"
//      },
//      "direction": "ASCENDING"
//    }
//   ]
 
export default Newsletter;


