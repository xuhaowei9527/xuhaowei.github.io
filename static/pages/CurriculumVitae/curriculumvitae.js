const template = `
<div class="card cv-card">
  <div class="card-header cv-header">
    个人简介
  </div>
  <div class="card-body cv-body">
    <p>我不相信一切所谓的人生导师，在这个没有上帝的世界上，谁敢说自己已经贯通一切歧路和绝境，因而不再困惑，也不再寻找了？</p>
    <p>至于我，我将永远困惑，也永远寻找。困惑是我的诚实，寻找是我的勇敢。--周国平</p>
    <div class="cv-wechat"></div>
    <p class="cv-p">一名前端世界冒险者</p>
  </div>
  <div class="card-footer cv-footer">
    <div class="cv-btn" @click="backtotop">回到首页</div>
  </div>
</div>
`
const CV = "CV";

const CurriculumVitae = Vue.component(CV, {
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

export default CurriculumVitae;