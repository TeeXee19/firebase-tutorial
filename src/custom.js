import SideBar from './components/SidebarPlugin'
import Card from './components/Cards/Card.vue'

// asset imports
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/sass/light-bootstrap-dashboard.scss'
import './assets/css/demo.css'

/**
 * This is the main Light Bootstrap Dashboard Vue plugin where dashboard related plugins are registerd.
 */
export default {
    install (Vue) {
    	Vue.use(SideBar)
    	Vue.component('card',Card)
    }
}