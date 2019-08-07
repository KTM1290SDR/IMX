import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  // mode: "history",
  // base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "home",
      component: () => import('@/views/Home.vue'),
      redirect: 'Message',
      children: [{
        path: "Message",
        name: "Message",
        component: () =>
          import("@/views/Message.vue")
      }, {
        path: "Friendster",
        name: "Friendster",
        component: () =>
          import("@/views/Friendster.vue")
      }, {
        path: "Contact",
        name: "Contact",
        component: () =>
          import("@/views/Contact.vue")
      }, , {
        path: "Aspect",
        name: "Aspect",
        component: () =>
          import("@/views/Aspect.vue")
      }]
    },
    {
      path: "/Register",
      name: "Register",
      component: () =>
        import("./views/Register.vue")
    },
    {
      path: "/Login",
      name: "Login",
      component: () =>
        import("./views/Login.vue")
    },
    {
      path: "/VisitingCard",
      name: "VisitingCard",
      component: () =>
        import("./views/VisitingCard.vue")
    },
    {
      path: "/Chat",
      name: "Chat",
      component: () =>
        import("./views/Chat.vue")
    },
  ]
});

router.beforeEach((to, form, next) => {
  const isLogin = localStorage.imxToken ? true : false;
  if (to.path == "/Login"||to.path=="/Register"){
    next()
  }else{
    isLogin?next():next("/Login");
  }
})

export default router;