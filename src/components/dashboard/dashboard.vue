<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>Your email address: {{ email }}</p>
  </div>
</template>

<script>
  import axios from '../../plugins/axios'
  import firebase from "firebase";

  export default {
	name:"dashboard",
	props: {
    	username: String
  	},
    data () {
      return {
        email: ''
      }
    },
  //   created () {
  //     firebase.auth().getRedirectResult().then(function(result) {
  //         if (result.credential) {
  //           // This gives you a GitHub Access Token. You can use it to access the GitHub API.
  //           var token = result.credential.accessToken;
  //           // ...
  //         }
  //         // The signed-in user info.
  //         var user = result.user;
  //         alert(result.email);
  //       }).catch(function(error) {
  //         // Handle Errors here.
  //         var errorCode = error.code;
  //         var errorMessage = error.message;
  //         // The email of the user's account used.
  //         var email = error.email;
  //         // The firebase.auth.AuthCredential type that was used.
  //         var credential = error.credential;
  //         // ...
  //     });
  //   //   axios.get('/users.json')
  //   //     .then(res => {
  //   //       console.log(res)
  //   //       const data = res.data
  //   //       const users = []
  //   //       for (let key in data) {
  //   //         const user = data[key]
  //   //         user.id = key
  //   //         users.push(user)
  //   //       }
  //   //       console.log(users)
  //   //       this.email = users[0].email
  //   //     })
  //   //     .catch(error => console.log(error))
  //   // }
  // }
  beforeCreate() {
    firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
         // this.$router.replace("/")
         // alert("You don't have a permission")
        }else{
			var username = user.displayName;
			console.log(username);
			axios.get('https://api.github.com/users/'+username+'/repos:read')
			.then(res => {
			console.log(res)
			
			})
			.catch(error => console.log(error))
        }
    });
  }
  }
</script>

<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>