import {createRouter, createWebHistory} from "vue-router";

import CoachDetail from './pages/CoachDetail.vue';
import CoachesList from './pages/CoachesList.vue';
import CoachRegistration from './pages/CoachRegistration.vue';
import ContactCoach from './pages/ContactCoach.vue';
import RequestReceived from './pages/RequestReceived.vue';
import Notfound from './pages/Notfound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/coaches'},
        {path: '/coaches', component: CoachesList},
        {
            path: '/coaches/:id',
            component: CoachDetail,
            children: [{path: 'contact', component: ContactCoach}],
        },
        {path: '/register', component: CoachRegistration},
        {path: '/request', component: RequestReceived},
        {path: '/:notFound(.*)', component: Notfound},
    ]
});

export default router;