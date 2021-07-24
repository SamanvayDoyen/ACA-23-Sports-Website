var item = document.querySelectorAll(".line li")
function abc(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
 
}
function def(){
for (i = 0;i < item.length;i+=1){
    if (abc(item[i])){
        item[i].classList.add("animation")
    }

}
}
window.addEventListener("scroll",def)