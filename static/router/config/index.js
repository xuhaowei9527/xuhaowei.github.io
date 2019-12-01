import NavigationBar from "../../pages/Navigation/navigation.js";
import CurriculumVitae from "../../pages/CurriculumVitae/curriculumvitae.js"
import addcss from "../../utils/css-loader.js"
const routes = [
  {
    path: '/',
    component: NavigationBar
  },
  {
    path: '/CurriculumVitae',
    component: CurriculumVitae,
    beforeEnter: (to, from, next) => {
      addcss("static/pages/CurriculumVitae/curriculumvitae.css");
      next();
    }
  }
]

export default routes;