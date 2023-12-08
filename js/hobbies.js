
var coll = document.getElementsByClassName("collapsible_button");
var i;

// show more button
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
        content.style.maxHeight = null;
        // console.log(this)
        this.innerText = "More Details";
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        this.innerText = "Less Details";
    } 
  });
}

// second show less button 
var less_buttons = document.getElementsByClassName("show_less_button");
var setHeight;
for (i = 0; i < less_buttons.length; i++) {
  less_buttons[i].addEventListener("click", function() {
    content2 = this.parentElement;
    console.log(content2)
    content2.previousElementSibling.classList.toggle("active");

    // puts the current project at the top of the page
    content2.previousElementSibling.previousElementSibling.scrollIntoView()
    
    content2.style.maxHeight = null;
    content2.previousElementSibling.innerText = "More Details";
  });
}
