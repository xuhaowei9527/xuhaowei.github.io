import NavigationBar from "../pages/Navigation/navigation.js";
import CurriculumVitae from "../pages/CurriculumVitae/index.js"
const routes = [
  { 
    path: '/', 
    component: NavigationBar 
  },
  {
    path: '/CurriculumVitae',
    component: CurriculumVitae
  }
]

const router = new VueRouter({
  routes
})

export default router