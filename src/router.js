import {createRouter, createWebHistory} from "vue-router";

import CoachDetail from './pages/CoachDetail.vue';
import CoachesList from './pages/CoachesList.vue';
import CoachRegistration from './pages/CoachRegistration.vue';
import ContactCoach from './pages/ContactCoach.vue';
import RequestsReceived from './pages/RequestsReceived.vue';
import Notfound from './pages/Notfound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/coaches'},
        {path: '/coaches', component: CoachesList},
        {
            path: '/coaches/:id',
            component: CoachDetail,
            props: true,
            children: [{path: 'contact', component: ContactCoach}],
        },
        {path: '/register', component: CoachRegistration},
        {path: '/requests', component: RequestsReceived},
        {path: '/:notFound(.*)', component: Notfound},
    ]
});

export default router;