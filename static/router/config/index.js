// 首页导航
import NavigationBar from "../../pages/Navigation/navigation.js";

// 个人信息
import CurriculumVitae from "../../pages/CurriculumVitae/curriculumvitae.js"
// 框架工具
import FrameworkTools from "../../pages/FrameworkTools/index.js"
import Nginx from "../../pages/FrameworkTools/Nginx/index.js"

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
  },
  {
    path: '/FrameworkTools',
    component: FrameworkTools,
    beforeEnter: (to, from, next) => {
      addcss("static/pages/FrameworkTools/css/index.css");
      next();
    },
    children: [
      {
        path: '/FrameworkTools/Nginx',
        component: Nginx
      }
    ]
  }
]

export default routes;