export default {
    name: 'colors-menu',
    template: `
    <section  class="colors-menu">
        <ul class="colors-container clean-list flex">
            <li class="color" v-for="(color) in colors" :style="{backgroundColor:color}" @click="setBgc(color)"></li>
        </ul>
    </section>`,

    data() {
        return {
            colors: ['#fffd88', '#ff8888', '#fff', '#92ff88', '#88ffe1', '#88cfff', '#3452ff', '#fa75ff', '#6d3cba']
        }
    },
    methods: {
        setBgc(color) {
            this.$emit('setBgc', color);
        }
    },
}