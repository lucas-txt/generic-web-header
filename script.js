
var root = document.querySelector(':root')
var rootStyles = getComputedStyle(root)

var $tag = (a) => document.getElementsByTagName(a)
var $id = (a) => document.getElementById(a)
var $class = (a) => document.getElementsByClassName(a)
var $query = (a) => document.querySelector(a)
var $name = (a) => document.getElementsByName(a)


// 1#>header/gedget-1
;(function(){
  let search_button = $tag('ion-icon')

  for (c=0; c<2; c++) {
      search_button[c].style.top = '0%'
      search_button[c].addEventListener('click', procurar)
      search_button[c].addEventListener('mouseenter', entrou)
      search_button[c].addEventListener('mouseout', saiu)
  }

  function procurar() {
      let search_box = $query('input#search-box')
      search_box.value = ''
  }
  
  function entrou() {
      for (c=0; c<2; c++) {
          search_button[c].style.top = '-10%'
      }
  }

  function saiu() {
      for (c=0; c<2; c++) {
          search_button[c].style.top = '0%'
      }
  }
})()