import {createApp} from 'vue'
import App from './App.vue'

if (window.minimui) {
    const fragmentCreator = {
        create(element) {
            createApp(App).mount(element)
        }
    }
    window.minimui.registerFragment("vueFragment", fragmentCreator);
} else {
    //means localdev
    createApp(App).mount('#app')
}
