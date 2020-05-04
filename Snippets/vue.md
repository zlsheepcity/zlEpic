# LIBS

	form constructor
	https://vueformulate.com/
	

# HTML snippets

```html

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css">
	
```

# Router sn

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