function addcss(href){
  const link = document.createElement('link'); 
  link.setAttribute('rel', 'stylesheet'); 
  link.href = href;
  document.head.appendChild(link);
}
export default addcss;
