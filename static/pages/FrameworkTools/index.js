const template = `
<div class="card cv-card">
  <div class="card-header cv-header">
    <ul class="nav justify-content-end">
      <li class="nav-item">
        <div class="nav-link active">Webpack</div>
      </li>
      <li class="nav-item">
        <div class="nav-link">Rollup</div>
      </li>
      <li class="nav-item">
        <div class="nav-link">Eslint+Prettier</div>
      </li>
       <li class="nav-item dropdown">
        <div class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Vue</div>
        <div class="dropdown-menu">
          <div class="dropdown-item">Vue</div>
          <div class="dropdown-item">Vue-Router</div>
          <div class="dropdown-item">Vuex</a>
        </div>
      </li>
      <li class="nav-item">
        <div class="nav-link">React</div>
      </li>
      <li class="nav-item">
        <div class="nav-link">Element-UI</a>
      </li>
      <li class="nav-item">
        <div class="nav-link">Lodash</a>
      </li>
    </ul>
  </div>
  <div class="card-body cv-body">
    
  </div>
  <div class="card-footer cv-footer">
    <div class="cv-btn" @click="backtotop">回到首页</div>
  </div>
</div>
`
const FrameworkToolsName = "FrameworkTools";

const FrameworkTools = Vue.component(FrameworkToolsName, {
  template: template,
  data: function () {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    backtotop() {
      this.$router.push("/")
    }
  }
});

export default FrameworkTools;