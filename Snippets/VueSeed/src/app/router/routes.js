/* URL Mapping */

export default

[

  {
    component: () => import(
      /* webpackChunkName: "Home" */
               '../../views/Home.vue'),
    name:                  'Home',
    path:                 '/',
  },

// ------------------------------------------ DB

  {
    component: () => import(
      /* webpackChunkName: "Companies" */
               '../../views/Companies.vue'),
    name:                  'Companies',
    path:                 '/Companies',
  },

  {
    component: () => import(
      /* webpackChunkName: "Products" */
               '../../views/Products.vue'),
    name:                  'Products',
    path:                 '/Products',
  },

  {
    component: () => import(
      /* webpackChunkName: "Certifications" */
               '../../views/Certifications.vue'),
    name:                  'Certifications',
    path:                 '/Certifications',
  },


// ------------------------------------------

];
