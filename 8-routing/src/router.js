import { createRouter, createWebHistory } from 'vue-router'
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import The404 from './components/nav/The404.vue'
import UsersFooter from './components/users/UsersFooter.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // { path: '/', name: 'home', component: TeamsList },
        { path: '/', redirect: '/teams', meta: { needsAuth: true } },
        // {
        //     path: '/teams', name: 'teams', component: TeamsList,
        //     children: [
        //         { path: ':teamId', name: 'view-team', component: TeamMembers, props: true },
        //     ]
        // },
        {
            path: '/teams', name: 'teams', components: { default: TeamsList, footer: TeamsFooter },
            meta: { needsAuth: true },
            children: [
                { path: ':teamId', name: 'view-team', component: TeamMembers, props: true, meta: { needsAuth: true }, },
            ]
        },
        {
            path: '/users', name: 'users', components: { default: UsersList, footer: UsersFooter },
            meta: { needsAuth: false },
            beforeEnter(to, from, next) {
                console.log('User Beforeenter');
                console.log(to, from)
                next();
            }
        },
        // { path: '/teams/:teamId', name: 'view-team', component: TeamMembers, props: true },
        { path: '/:notFound(.*)*', name: 'NotFound', component: The404, meta: { needsAuth: true }, },
    ],
    linkActiveClass: 'active',
    scrollBehavior(_, _2, savedPosition) {
        //console.log(to, from, savedPosition)
        if (savedPosition) {
            return savedPosition;
        }
        return { left: 0, top: 0 }
    }
})

router.beforeEach((to, from, next) => {
    if (to.meta.needsAuth) {
        next();
    } else {
        next({ name: 'NotFound' });
        //next();
    }
    console.log('Global beforeeach');
    console.log(to, from);
    next();
    // if (to.name == 'view-team') {
    //     next()
    // } else {
    //     next({ name: 'view-team', params: { teamId: 't2' } })
    // }
})

router.afterEach((to, from) => {
    console.log('Global aftereach');
    console.log(to, from)
})

export default router
