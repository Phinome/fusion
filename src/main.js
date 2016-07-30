import Vue from 'vue';
import Router from 'vue-router';
import App from './components/App.vue';
import PageView from './components/PageView.vue';

// install router
Vue.use(Router);

// routing
var router = new Router();

router.map({
  '/view/:page': {
    component: PageView
  }
});

router.beforeEach(function () {
  window.scrollTo(0, 0)
});

router.redirect({
  '*': '/view/init'
});

router.start(App, 'app');
