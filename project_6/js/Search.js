const products = {
    components: {},
    data () {
        return {
        }
    },
    methods: { //фильтр метод?
        filter () {
            
        }
    },
    template: `
    <div class="search">
    <form action="#" class="search-form" @submit.prevent='filter'>
    <input type="text" class="search-field" v-model='userSearch'>
    <button class="btn-search" type="submit">
        <i class="fas fa-search"></i>
    </button>
</form>
    </div>
    `
}