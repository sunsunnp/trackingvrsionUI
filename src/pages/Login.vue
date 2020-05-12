
<template>
   <body>
  <header-layout></header-layout>
  <div id="welcome">
    <br>
    <div class="row">
    <div class="col-md-4"></div>
    <div class="card col-md-4">
    <h1>Login!</h1>
    <p></p>
    <div class="cta row">
      <div class="col-md-2"></div>
      <div class="col-md-4"><button @click="loginGit" type="button" class="btn">Github</button></div>
      <div class="col-md-4"><button @click="loginGit" type="button" class="btn">Bitucket</button></div>
    </div>
    <div class="cta">
    <router-link to="/signin">Sign in</router-link>
    </div>
    </div>
    </div>
  </div></body> 
</template>

<script>
  import HeaderLayout from './header/header.vue'
  import firebase from "firebase";
  import router from "../router"
  export default {
    components: {
      HeaderLayout
      },
    methods: {
      loginGit() {
        var provider = new firebase.auth.GithubAuthProvider();
        provider.addScope('repo,read:user');
        provider.setCustomParameters({
          'allow_signup': 'false'
        });

        firebase.auth().signInWithPopup(provider).then(function(result) {
          // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        	var token = result.credential.accessToken;
        	// The signed-in user info.
			var user = result.user;
			var username = result.additionalUserInfo.username;
			console.log(result.additionalUserInfo.username);
			router.push({ path: '/dashboard/Project'})
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });

      }
    }
  }
</script>

<style scoped>
  #welcome {
    width: 80%;
    margin: auto;
  }

  h1 {
    text-align: center;
  }

  p {
    text-align: center;
  }

  .cta {
    width: 300px;
    margin: auto;
    text-align: center;
  }

  .cta a {
    margin: 10px;
    text-decoration: none;
    display: inline-block;
    border: 1px solid #521751;
    border-radius: 3px;
    width: 100px;
    padding: 10px;
    box-sizing: border-box;
    color: #521751;
  }

  .cta a:hover,
  .cta a:active {
    background-color: #521751;
    color: white;
  }
</style>