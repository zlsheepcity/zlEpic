# Vue General Tips

### Do not use a deep modifier, and do not watch non-primitive-type variables at all
### Restricting reactivity using Object.freeze

This tip is very efficient for vue2 application. Using that only thing reduced the memory usage by 50%. By default vue recursively observes every object property.

source: https://codeburst.io/5-vue-performance-tips-98e184338439

```js

    // Instead of:
    state: () => ({
      items: []
    }),
    mutations: {
      setItems (state, items) {
        state.items = items
      },
      markItemCompleted (state, itemId) {
        const item = state.items.find(item => item.id === itemId)
        if (item) {
          item.completed = true
        }
      }
    }

    // Do this:
    state: () => ({
      items: []
    }),
    mutations: {
      setItems (state, items) {
        state.items = items.map(item => Object.freeze(item))
      },
      markItemCompleted (state, itemId) {
        const itemIndex = state.items.findIndex(item => item.id === itemId)
        if (itemIndex !== -1) {
          // Here it's not possible to update item.completed = true
          // because the object is frozen. 
          // We need to recreate the entire object.
          const newItem = {
            ...state.items[itemIndex],
            completed: true
          }
          state.items.splice(itemIndex, 1, Object.freeze(newItem))
        }
      }
    }
```

### Functional getters are not cached

```js

    // This code will run state.items.find every time it’s called

    // Vuex:
    getters: {
      itemById: (state) => (itemId) => state.items.find(item => item.id === itemId)
    }
    ...
    // Some <Item :item-id="itemId" /> component:
    computed: {
      item () { return this.$store.getters.itemById(this.itemId) }
    }

    // This code will build itemsByIds object the first time it’s called, and then will reuse it

    getters: {
      itemByIds: (state) => state.items.reduce((out, item) => {
        out[item.id] = item
        return out
      }, {})
    }
    // Some <Item :item-id="itemId" /> component:
    computed: {
      item () { return this.$store.getters.itemsByIds[this.itemId] }
    }
```