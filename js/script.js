$(function() {
  $(window).resize(function() {
    convertToOffcanvas();
  }).trigger('resize');

  $('.navbar-nav a').each(function() {
    if ($(this).prop('href') == window.location.href) {
      $(this).addClass('active');
    }
  });

  printAlphabets();

  // $("#couponModal").modal("show");
});

const convertToOffcanvas = () => {
  const menu = $("#menu");
  $(window).width() < 992 ? menu.addClass('offcanvas offcanvas-end') : menu.removeClass('offcanvas offcanvas-start');
}

const printAlphabets = () => {
  const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0-9"];
  alphabet.forEach(function(el, index) {
    $(".alphabets").append(`<a class="btn secondary light alphabet" href="#store-${el}"><span>${el}</span></a>`);
    $(".all_stores").append(`<div class="col-12 pt-5" id="store-${el}"><h4 class="heading">store from ${el}</h4><div class="stores_grid"><a href="single_store.html" class="store_card"><figure class="store_img"><img src="images/stores/store_1.webp" alt=""></figure><div class="store_content"><h5 class="store_name webkit_box">The Fashion Hub</h5><p>Offers 75</p></div></a><a href="single_store.html" class="store_card"><figure class="store_img"><img src="images/stores/store_2.webp" alt=""></figure><div class="store_content"><h5 class="store_name webkit_box">Tech Haven</h5><p>Offers 62</p></div></a><a href="single_store.html" class="store_card"><figure class="store_img"><img src="images/stores/store_3.webp" alt=""></figure><div class="store_content"><h5 class="store_name webkit_box">Gourmet Delights</h5><p>Offers 88</p></div></a><a href="single_store.html" class="store_card"><figure class="store_img"><img src="images/stores/store_4.webp" alt=""></figure><div class="store_content"><h5 class="store_name webkit_box">Home Elegance</h5><p>Offers 50</p></div></a><a href="single_store.html" class="store_card"><figure class="store_img"><img src="images/stores/store_5.webp" alt=""></figure><div class="store_content"><h5 class="store_name webkit_box">Sports Zone</h5><p>Offers 95</p></div></a><a href="single_store.html" class="store_card"><figure class="store_img"><img src="images/stores/store_6.webp" alt=""></figure><div class="store_content"><h5 class="store_name webkit_box">Book Nook</h5><p>Offers 72</p></div></a><a href="single_store.html" class="store_card"><figure class="store_img"><img src="images/stores/store_7.webp" alt=""></figure><div class="store_content"><h5 class="store_name webkit_box">new store 7</h5><p>Offers 72</p></div></a><a href="single_store.html" class="store_card"><figure class="store_img"><img src="images/stores/store_8.webp" alt=""></figure><div class="store_content"><h5 class="store_name webkit_box">new store 8</h5><p>Offers 72</p></div></a></div></div>`)
  });

  $('.alphabet').first().addClass("active");
}