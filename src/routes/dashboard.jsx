// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import ContentPaste from "@material-ui/icons/ContentPaste";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";

const dashboardRoutes = [
  {
    path: "/home",
    sidebarName: "Home",
    navbarName: "Home page",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/stats",
    sidebarName: "Statistics",
    navbarName: "Statistics page",
    icon: ContentPaste, // TODO: replace icon
    component: TableList // TODO: replace by statistics page component
  },
  {
    path: "/admin",
    sidebarName: "Admin",
    navbarName: "Admin page",
    icon: Person,
    component: UserProfile // TODO: replace by admin page component
  },
  { redirect: true, path: "/", to: "/home", navbarName: "Redirect" }
];

export default dashboardRoutes;
