<template>
  <card class="card" :title="title">
    <div>
      <ul class="list-unstyled team-members">
        <li>
          <div class="row" v-for="member in members" :key="member.name">
            <div class="col-3">
              <div class="avatar">
                <img :src="member.image" alt="Circle Image" class="rounded img-fluid">
              </div>
            </div>
            <div class="col-6">
              {{member.name}}
              <br>
              <span :class="getStatusClass(member.status)">
                <small>{{getStatus2Class(member.status)}}</small>
              </span>
            </div>

            <div class="col-3">              
              <input type="checkbox" v-model="member.status" @click="check(member.id,member.status)"/>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </card>
</template>
<script>
import firebase from "firebase";
export default {
  data() {
    return {
      title: "Permission members",
      members: [],
      email:[]
    };
  },
  methods: {
    getStatusClass(status) {
      switch (status) {
        // case :
        //   return "text-muted";
        case 1:
          return "text-success";
        case 0:
          return "text-danger";
        default:
          return "text-success";
      }
    },
    getStatus2Class(status) {
      switch (status) {
        // case :
        //   return "text-muted";
        case 1:
          return "Accept";
        case 0:
          return "Decline";
        default:
          return "Accept";
      }
    },
    check(id,statususe) {
      var database = firebase.database();
      var messageRef = database.ref("Users");
      alert('change permission success');
      if(statususe==1){
        messageRef.child(id).update({status:0});
      }
      else if(statususe==0){
        messageRef.child(id).update({status:1});
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
                emaildb.push({...snapshot.val(),id:snapshot.key})
            })
            console.log(emaildb)
            for(i=0;i<emaildb.length;i++){
                if(useremail == emaildb[i].email){
                  for(j=0;j<emaildb.length;j++){
                    if(emaildb[j].permission == emaildb[i].email){
                      this.email.push(emaildb[j].email)
                      this.members.push({image: require("@/assets/img/faces/face-1.jpg"),name:emaildb[j].email,status:emaildb[j].status,id:emaildb[j].id})
                    }
                  }
                }
            }
        }
    });
    }
};
</script>
<style>
</style>
