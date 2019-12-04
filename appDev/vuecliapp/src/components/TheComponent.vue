<template>
  <div class="the-component">
    <h3>{{ attribute || 'No attribute' }}</h3>
    <p>The Component <strong>{{ PrivateValue }}</strong></p>
    <p>Profile: <strong>{{ ProfileString }}</strong></p>
  </div>
</template>

<style scoped lang="scss">
    .the-component {
        padding: 2em;
        margin:  2em 0;
        border:  2px solid rgba(0,0,0,0.25);
    }
</style>

<script>
export default {

    name: 'TheComponent',

 // для получения данных от родителя
    props: ['attribute'],

 // для внутреннего использования
    data() {
        return {
            PrivateValue: "Liza004"
        }
    },

 // вычисление переменной
    computed: {
        ProfileString() {
            return this.attribute + ' ' + this.PrivateValue;
        }
    },

 // наблюдение за переменной
    watch: {
        attribute() {
            console.log('The attribute has changed!');
        }
    },


 // Life flow
    created() {
        console.log('TheComponent was Created')
    },
    mounted() {
        console.log('TheComponent was Mounted')
        console.log(this.$el);
    }

}
</script>
