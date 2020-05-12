import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";

// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import Notifications from "@/pages/Notifications.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import BranchSetting from "@/pages/BranchSetting.vue";
import Typography from "@/pages/Typography.vue";
import TableList from "@/pages/TableList.vue";
import Settingproject from "@/pages/Settingproject.vue";
import Login from "@/pages/Login.vue";
import Signin from "@/pages/Signin.vue"

const routes = [
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/signin",
      name: "signin",
      component: Signin
    },
    {
    path: "/dashboard",
    component: DashboardLayout,
    children: [
      {
        path: "/dashboard/Project",
        name: "Project",
        component: Dashboard
      },
      {
        path: "/dashboard/stats",
        name: "stats",
        component: UserProfile
      },
      {
        path: "/dashboard/notifications",
        name: "notifications",
        component: Notifications
      },
      {
        path: "/dashboard/icons",
        name: "icons",
        component: Icons
      },
      {
        path: "/dashboard/maps",
        name: "maps",
        component: Maps
      },
      {
        path: "/dashboard/branchSetting",
        name: "branchSetting",
        component: BranchSetting
      },
      {
        path: "typography",
        name: "typography",
        component: Typography
      },
      {
        path: "table-list",
        name: "table-list",
        component: TableList
      },
      {
        path: "/dashboard/setting",
        name: "setting",
        component: Settingproject
      }
    ]
  },
  { path: "*", component: NotFound }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
