import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import HistoryPage from '../views/HistoryPage.vue';
import SettingsPage from '../views/SettingsPage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/history', component: HistoryPage },
    { path: '/settings', component: SettingsPage },
  ],
});
