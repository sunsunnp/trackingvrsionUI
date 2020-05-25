<template>
  <card class="card" title="Add Permission">
    <div>
      <form @submit.prevent>
        <div class="row">
          <!-- <div class="col-md-5">
            <fg-input type="text"
                      label="Username"
                      placeholder="Username"
					  v-model="emailcre"
                      >
            </fg-input>
          </div> -->
         
          <div class="col-md-5">
            <fg-input type="email"
                      label="Email"
                      placeholder="Email"
					  v-model="emailcre"
                      >
            </fg-input>
          </div>
        </div>

         <div class="col-md-5">

            <fg-input type="text"
                      label="Password"
                      placeholder="Password"
					  v-model="password"
                      >
            </fg-input>
          </div>
        <!-- <div class="row">
          <div class="col-md-6">
            <fg-input type="text"
                      label="First Name"
                      placeholder="First Name"
                      v-model="user.firstName">
            </fg-input>
          </div>
          <div class="col-md-6">
            <fg-input type="text"
                      label="Last Name"
                      placeholder="Last Name"
                      v-model="user.lastName">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <fg-input type="text"
                      label="Address"
                      placeholder="Home Address"
                      v-model="user.address">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <fg-input type="text"
                      label="City"
                      placeholder="City"
                      v-model="user.city">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="text"
                      label="Country"
                      placeholder="Country"
                      v-model="user.country">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="number"
                      label="Postal Code"
                      placeholder="ZIP Code"
                      v-model="user.postalCode">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>About Me</label>
              <textarea rows="5" class="form-control border-input"
                        placeholder="Here can be your description"
                        v-model="user.aboutMe">

              </textarea>
            </div>
          </div>
        </div> -->
        <div class="text-center">
          <p-button type="info"
                    round
                    @click.native.prevent="addUser">
            Save
          </p-button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>
<script>
import firebase from "firebase";
export default {
  data() {
    return {
      user: {
        company: "Paper Dashboard",
        username: "Sunsunnp",
        email: "sunsun.np@gmail.com",
        firstName: "Nakorata",
        lastName: "Piathong",
        address: "Melbourne, Australia",
        city: "Melbourne",
        postalCode: "",
        aboutMe: `We must accept finite disappointment, but hold on to infinite hope.`
	  },
	  emailcre:'',
	  password:'',
	  permis:''
    };
  },
  methods: {
    updateProfile() {
      alert("Your data: " + JSON.stringify(this.user));
    },
    addUser(){
		var database = firebase.database();
		var messageRef = database.ref("Users");
		messageRef.push({email:this.emailcre,permission:this.permis,status:1,type:2});
		alert("add permission success");
    	firebase.auth().createUserWithEmailAndPassword(this.emailcre, this.password).catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			// ...
		});
    }
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
		  var useremail = user.email;
		  this.permis = useremail;
		  console.log(this.permis)
        }
    });
    }
};
</script>
<style>
</style>
