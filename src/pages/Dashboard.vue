<template>
  <div>

    <!--Stats cards-->
    <div class="row">
      <div class="col-md-6 col-xl-4" v-for="stats in statsCards" :key="stats.title">
        <stats-card>
          <div class="icon-big text-center" :class="`icon-${stats.type}`" slot="header">
            <i :class="stats.icon"></i>
          </div>
          <p>{{stats.title}}</p>
          <div class="number" slot="content">
            <p>{{stats.namerepo}}</p>
            {{stats.fullnamerepo}}
          </div>
          <div class="stats" slot="footer">
            <i :class="stats.footerIcon"></i> {{stats.footerText}}
          </div>
        </stats-card>
      </div>
    </div>

    <!--Charts-->
    <!-- <div class="row">

      <div class="col-12">
        <chart-card title="Users behavior"
                    sub-title="24 Hours performance"
                    :chart-data="usersChart.data"
                    :chart-options="usersChart.options">
          <span slot="footer">
            <i class="ti-reload"></i> Updated 3 minutes ago
          </span>
          <div slot="legend">
            <i class="fa fa-circle text-info"></i> Open
            <i class="fa fa-circle text-danger"></i> Click
            <i class="fa fa-circle text-warning"></i> Click Second Time
          </div>
        </chart-card>
      </div>

      <div class="col-md-6 col-12">
        <chart-card title="Email Statistics"
                    sub-title="Last campaign performance"
                    :chart-data="preferencesChart.data"
                    chart-type="Pie">
          <span slot="footer">
            <i class="ti-timer"></i> Campaign set 2 days ago</span>
          <div slot="legend">
            <i class="fa fa-circle text-info"></i> Open
            <i class="fa fa-circle text-danger"></i> Bounce
            <i class="fa fa-circle text-warning"></i> Unsubscribe
          </div>
        </chart-card>
      </div>

      <div class="col-md-6 col-12">
        <chart-card title="2015 Sales"
                    sub-title="All products including Taxes"
                    :chart-data="activityChart.data"
                    :chart-options="activityChart.options">
          <span slot="footer">
            <i class="ti-check"></i> Data information certified
          </span>
          <div slot="legend">
            <i class="fa fa-circle text-info"></i> Tesla Model S
            <i class="fa fa-circle text-warning"></i> BMW 5 Series
          </div>
        </chart-card>
      </div>

    </div> -->

  </div>
</template>
<script>
import { StatsCard, ChartCard } from "@/components/index";
import Chartist from 'chartist';
import firebase from "firebase";
export default {
  components: {
    StatsCard,
    ChartCard
  },
  /**
   * Chart data used to render stats, charts. Should be replaced with server data
   */
  data() {
    return {
        data:{
            repos:[],
            
        },
      statsCards: [],
      usersChart: {
        data: {
          labels: [
            "9:00AM",
            "12:00AM",
            "3:00PM",
            "6:00PM",
            "9:00PM",
            "12:00PM",
            "3:00AM",
            "6:00AM"
          ],
          series: [
            [287, 385, 490, 562, 594, 626, 698, 895, 952],
            [67, 152, 193, 240, 387, 435, 535, 642, 744],
            [23, 113, 67, 108, 190, 239, 307, 410, 410]
          ]
        },
        options: {
          low: 0,
          high: 1000,
          showArea: true,
          height: "245px",
          axisX: {
            showGrid: false
          },
          lineSmooth: Chartist.Interpolation.simple({
            divisor: 3
          }),
          showLine: true,
          showPoint: false
        }
      },
      activityChart: {
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "Mai",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
          series: [
            [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
            [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
          ]
        },
        options: {
          seriesBarDistance: 10,
          axisX: {
            showGrid: false
          },
          height: "245px"
        }
      },
      preferencesChart: {
        data: {
          labels: ["62%", "32%", "6%"],
          series: [62, 32, 6]
        },
        options: {}
      }
    };
  },
  methods:{
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          router.push({ path: '/'})
          //alert("You don't have a permission")
        }else{
            var database = firebase.database();
            var messageRef = database.ref("Users");
            var useremail = user.email;
            var emaildb = [];
            var i,j,k,l;
            messageRef.on('child_added',snapshot=>{
                emaildb.push(snapshot.val())
                
            })
            for(i=0;i<emaildb.length;i++){
                if(useremail == emaildb[i].email){
                    if(emaildb[i].type==1){
                        for(j=0;j<emaildb[i].repos.name.length;j++){
                            this.statsCards.push({namerepo:emaildb[i].repos.name[j],fullnamerepo:emaildb[i].repos.fullname[j],icon: "ti-github",footerIcon: "ti-calendar"})
                        }
                    }
                    if(emaildb[i].type==2){
                        if(emaildb[i].status==1){
                            for(k=0;k<emaildb.length;k++){
                            if(emaildb[i].permission == emaildb[k].email){
                                for(l=0;l<emaildb[k].repos.name.length;l++){
                                    this.statsCards.push({namerepo:emaildb[k].repos.name[l],fullnamerepo:emaildb[k].repos.fullname[l],icon: "ti-github",footerIcon: "ti-calendar"})
                                }
                            }
                        }
                        }
                    }
                }
            }
          //console.log(this.statsCards)
        }
    });
  }  
};
</script>
<style>
</style>
