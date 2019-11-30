const template = `<div>个人简介</div>`
const CV = "CV";

const CurriculumVitae = Vue.component(CV, {
  template: template,
  data: function () {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    nvrouter() {
      this.$router.push("foo")
      console.log("注册导航");
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
});

export default CurriculumVitae;