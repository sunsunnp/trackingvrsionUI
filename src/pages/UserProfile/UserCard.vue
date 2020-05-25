<template>
  <card class="card-user">
    <div slot="image">
      <img :src="imglogogit" alt="...">
    </div>
    <div>
      <div class="author">
        <img class="avatar border-white" :src="imglogogit" alt="...">
        <h4 class="title">{{name}}
          <br>
          <a href="#">
            <small>sunsunnp</small>
          </a>
        </h4>
      </div>
      <!-- <p class="description text-center">
        "I like the way you work it
        <br> No diggity
        <br> I wanna bag it up"
      </p> -->
    </div>
    <hr>
    <div class="text-center">
      <div class="row">
        <div v-for="(info, index) in details" :key="index" :class="getClasses(index)">
          <h5>{{info.title}}
            <br>
            <small>{{info.subTitle}}</small>
          </h5>
        </div>
      </div>
    </div>
  </card>
</template>
<script>
import firebase from "firebase";
export default {
  data() {
    return {
      details: [
        {
          title: "",
          subTitle: "Repositories"
        },
        {
          title: "",
          subTitle: "Permissions"
        }
      ],
      imglogogit: '',
      name:''
    };
  },
  methods: {
    getClasses(index) {
      var remainder = index % 3;
      if (remainder === 0) {
        return "col-lg-3 offset-lg-1";
      } else if (remainder === 2) {
        return "col-lg-4";
      } else {
        return "col-lg-3";
      }
    }
  },
  beforeCreate() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.imglogogit = user.photoURL;
          this.name = user.displayName;
          console.log(user);
          var database = firebase.database();
          var messageRef = database.ref("Users");
          var useremail = user.email;
          var emaildb = [];
          var i,j,n=0;
            messageRef.on('child_added',snapshot=>{
                emaildb.push(snapshot.val())
            })
            for(i=0;i<emaildb.length;i++){
                if(useremail == emaildb[i].email){
                  this.details[0].title = emaildb[i].repos.name.length
                  for(j=0;j<emaildb.length;j++){
                    if(emaildb[j].permission == emaildb[i].email){
                      n=n+1;
                    }
                  }
                  console.log(emaildb[i].repos.name.length)
                  this.details[1].title = n;
                }
            }

        }
    });
    }
};
</script>
<style>
</style>
