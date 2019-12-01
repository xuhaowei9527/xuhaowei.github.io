// const NavigationBar = function(){
//   const template = `
//   <div @click="nvrouter">导航页面</div>
//   `
//   const NavigationBarName = "NavigationBar";
//   return Vue.component(NavigationBarName, {
//     template: template,
//     data: function() {
//       return {};
//     },
//     methods: {
//       nvrouter() {
//         console.log("注册导航");
//       }
//     }
//   });
// }
import template from "./template.js"

const NavigationBarName = "NavigationBar";

const NavigationBar = Vue.component(NavigationBarName, {
  template: template,
  data: function() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    routertocv() {
      this.$router.push("/CurriculumVitae")
    },
    routertoft() {
      this.$router.push("/FrameworkTools")
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
});

export default NavigationBar;