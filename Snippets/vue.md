# LIBS

	form constructor
	https://vueformulate.com/
	
	V-Click-Outside
	npm install --save v-click-outside
	<div v-show="show" v-click-outside="onClickOutside">Menu</div>

# HTML snippets

```html

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css">
	
<my-component
  v-for="item in items"
  :item="item"
  :index="$index">
</my-component>
	
```

# Router sn

```js
	this.$vuetify.goTo('#ProductList')
```

```html
        <router-link to="/Login"
            v-slot="{ href, route, navigate, isActive, isExactActive }">
            <v-btn text
                @click="navigate"
                :href="href"
                >Login</v-btn>
            </router-link>
```
```js 
    // Router

    import Router from '@/app/router'
    components = { Router, ...components }
```

```js
let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: "Login",
            component: () => import('./Views/Login'),
            meta:{
                isAuth: false
            }
        },
        {
            path: '/home',
            name: "Home",
            component: () => import('./Views/Home'),
            meta:{
                isAuth: true
            }
        },
        {
            path: '*',
            name: "Login2",
            component: () => import('./Views/Login'),
            meta:{
                isAuth: false
            }
        }
    ]
})

router.beforeEach((to,from,next)=>{
    if(to.matched.some(record => record.meta.isAuth)){
        let user = JSON.parse(localStorage.getItem('user'))
        if(!user){
            next('/login')
        }
    }
    next()
})
```


# Мета-компонент Component
```html

<component :is="%componentName%"/>
<component v-for="element in elements" :is="element"/>

```

# Render-функции createElement
```html

<anchored-heading :level="1">Привет, мир!</anchored-heading>
<!-- <h1>Привет, мир!</h1> -->

<script>
	Vue.component('anchored-heading', {
	 render: function (createElement) {
	   return createElement(
		 'h' + this.level,   // имя тега
		 this.$slots.default // массив дочерних элементов
	   )
	 },
	 props: {
	   level: {
		 type: Number,
		 required: true
	   }
	 }
	})
</script>

```