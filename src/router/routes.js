const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/about",
        component: () => import("pages/AboutPage.vue"),
      },
      {
        path: "/todo",
        component: () => import("pages/todoPage.vue"),
      },
      {
        path: "/settings",
        component: () => import("pages/settingsPage.vue"),
      },
      {
        path: "login",
        component: () => import("pages/LoginPages.vue"),
      },
      {
        path: "", // This is an empty path to match the root URL "/"
        component: () => import("pages/IndexPage.vue"),
      },
    ],
  },

  //auth
  // {
  //   path: "/auth",
  //   component: () => import("layouts/BlankLayout.vue"),
  //   children: [
  //     {
  //       path: "login",
  //       component: () => import("pages/LoginPages.vue"),
  //     },
  //   ],
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
