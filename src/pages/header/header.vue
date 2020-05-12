<template>
  <header id="header">
    <div class="logo">
      <router-link to="/">Tacking Version</router-link>
    </div>
    <nav>
      <ul>
        <!-- <li>
          <router-link to="/signup">Sign Up</router-link>
        </li> -->
        <!-- <li>
          <button @click="logout" type="button">Logout</button>
        </li> -->
        <!-- <li>
          <router-link to="/dashboard">Dashboard</router-link>
        </li> -->
      </ul>
    </nav>
  </header>
</template>
<script>
  import firebase from "firebase";
  export default {
    methods: {
      logout() {
        firebase.auth().signOut().then(function() {
          // Sign-out successful.
          
        }).catch(function(error) {
          // An error happened.
        });
      }
  }
  }
</script>


<style scoped>
  #header {
    height: 56px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    background-color: #521751;
    padding: 0 20px;
  }

  .logo {
    font-weight: bold;
    color: white;
  }

  .logo a {
    text-decoration: none;
    color: white;
  }

  nav {
    height: 100%;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
  }

  li {
    margin: 0 16px;
  }

  li a {
    text-decoration: none;
    color: white;
  }

  li a:hover,
  li a:active,
  li a.router-link-active {
    color: #fa923f;
  }
</style>