import User from './components/user/User.vue';
import Home from './components/Home.vue';

export const router = [
  { path: '', components: Home },
  { path: '/user', components: User }
];
