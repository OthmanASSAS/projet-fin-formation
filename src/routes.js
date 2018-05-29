/* jshint esversion : 6 */
import Formulaire from "./components/pages/Formulaire.vue";

import Dashboarda from "./components/Dash-board-a";
import Login from "./components/pages/Login";
import Userlist from "./components/pages/Userlist";
import UserFiche from "./components/pages/Userfiche";
import Edit from "./components/pages/Edit";
// import Userfiche from "./components/pages/Userfiche";

export const routes = [
    {
        path: '/formulaire',
        name: 'formulaire',
        component: Formulaire
    },
    {
        path: '/',
        name: 'dashboarda',
        component: Dashboarda
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/userlist',
        name: 'userlist',
        component: Userlist
    },
    {
        path: '/userfiche/:id',
        name: 'userfiche',
        component: UserFiche
    },
    
    {
        path: '/edit/:id',
        name: 'edit',
        component: Edit
    }
];