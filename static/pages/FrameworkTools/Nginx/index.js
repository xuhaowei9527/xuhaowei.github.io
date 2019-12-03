import md from "./md.js"
const template = `
<div class="content-color" style="padding:20px;" ref="article">
</div>
`
let converter = new showdown.Converter(),
  text = md,
  html = converter.makeHtml(text);

const NginxName = "Nginx";

const Nginx = Vue.component(NginxName, {
  template: template,
  data: function () {
    return {
      article: html
    };
  },
  mounted() {
    this.$refs.article.innerHTML = this.article;
  },
  methods: {
  },
  destroyed() {
    converter = null;
  },
});

export default Nginx;