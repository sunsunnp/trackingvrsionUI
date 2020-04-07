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
              <input type="checkbox" v-model="member.status"/>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </card>
</template>
<script>
export default {
  data() {
    return {
      title: "Permission members",
      members: [
        {
          image: require("@/assets/img/faces/face-0.jpg"),
          name: "Jirapat",
          status: true
        },
        {
          image: require("@/assets/img/faces/face-1.jpg"),
          name: "Aussamawee",
          status: true
        },
        {
          image: require("@/assets/img/faces/face-1.jpg"),
          name: "Baszaza",
          status: false
        }
      ]
    };
  },
  methods: {
    getStatusClass(status) {
      switch (status) {
        // case :
        //   return "text-muted";
        case true:
          return "text-success";
        case false:
          return "text-danger";
        default:
          return "text-success";
      }
    },
    getStatus2Class(status) {
      switch (status) {
        // case :
        //   return "text-muted";
        case true:
          return "Accept";
        case false:
          return "Decline";
        default:
          return "Accept";
      }
    }

  }
};
</script>
<style>
</style>
