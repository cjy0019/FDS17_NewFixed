//find DOM Node
var items = $('.menu-item');
var btn = $('.btn-menu');
var panel = $('.board section');
var tab = $('.tab');

//기능 구현

btn.hover(function (e) {
  e.preventDefault();
  items.removeClass('menu-act');
  $(this).parent().addClass('menu-act');
})

tab.hover(function (e) {
  e.preventDefault();
  panel.removeClass('tab-act');
  $(this).parent().parent().addClass('tab-act');
});