document.querySelector('.menu').onclick = function() {
  document.querySelector('.menu').style.display = `none`
  document.querySelector('.cross').style.display = `block`
  document.querySelector('h1').style.display = `none`
  document.querySelector('h2').style.display = `none`
  document.querySelector('canvas').style.display = `none`
  document.querySelector('.listmenu').style.display = `block`
}
document.querySelector('.cross').onclick = function() {
  document.querySelector('.menu').style.display = `block`
  document.querySelector('.cross').style.display = `none`
  document.querySelector('h1').style.display = `block`
  document.querySelector('h2').style.display = `block`
  document.querySelector('canvas').style.display = `block`
  document.querySelector('.listmenu').style.display = `none`
}
