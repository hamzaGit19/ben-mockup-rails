$(document).on('ready turbolinks:load', () => {
  initRows();
  bindRows();
});

function initRows () {
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
}

function bindRows() {
  $('.collapsible').on('click', function() {
    field = this.getElementsByClassName('container')[0]

    if (field.style.display == 'none') {
      field.style.display = "block";
    } else {
      field.style.display = "none";
    }
  })
}
