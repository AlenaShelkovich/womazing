 $(window).on('load', function () {
      $('#preloader-active').delay(450).fadeOut('slow');
      $('body').delay(450).css({
        'overflow': 'visible'
      });
    });


$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 90) {
      $(".sticky-header").addClass("fix");
    } else {
      $(".sticky-header").removeClass("fix");
    }
  });
});



$('.burger').on('click',function(){
    $('.head-menu').toggle();
})

$('.close-menu').on('click',function(){
    $('.head-menu').hide();
});



 $('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  dots: true,
  asNavFor: '.slider-gallery'
});
$('.slider-gallery').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.slider',
  centerMode: true,
  focusOnSelect: true,
  fade: true,
  arrows: false,
});





$('.menu-tel__btn').on('click', function() {
  $('.wrapper-modal').fadeIn();
})

$('.form-book').on('click', function() {
  $('.wrapper-modal').fadeOut();
})

$('.overlay').on('click', function() {
  $('.wrapper-modal').fadeOut();
})

$('.close').on('click', function() {
  $('.wrapper-modal').fadeOut();
})

$('.form-book').children().on('click', function(e) {
  e.stopPropagation();
})






$(function(){

$('.offer-btn__down').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('.collection').offset().top }, 1000);
  e.preventDefault();
});

});


/* Slider */

const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.scroll'),
      slidesWrap = document.querySelectorAll('.slider-wrapper');

let index = 0;

const activeSlide = n => {
    for(slide of slides){
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
};

const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
};

const prepareCurrentSlide = indexDot => {
    activeSlide(index);
    activeDot(index);
};

const nextSlide = () => {
    if(index == slides.length - 1){
        index = 0;
        prepareCurrentSlide(index);
    } else{
        index++;
        prepareCurrentSlide(index);
    }
};

const prevSlide = () => {
    if(index == 0){
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else{
        index--;
        prepareCurrentSlide(index);
    }
};

dots.forEach((item,indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    })
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

const interval = setInterval(nextSlide, 2500);




/* Validate */

$('[data-submit]').on('click',function(e){
  e.preventDefault();
  $(this).parent('form').submit();
})

$.validator.addMethod("regex", function(value, element, regexp) {
    let regExsp = new RegExp(regexp);
    return this.optional(element) || regExsp.test(value)
},"Пожалуйста, проверьте данные.");

$('#form-call').validate({
    rules: {
      firstName: {
          required: true,
          minlength: 2,
          regex: "[A-Za-z, А-Яа-яЁё]" 
      },
      email: {
          required: true,
          email: true
      },
      phone: {
          digits : true,
          required: true,
          minlength: 10,
          maxlength: 13,
          regex: "[0-9]+"
      }
  },

     messages: {
      firstName: 'Введите своё имя верно',
      email: 'Введите свой email верно',
      phone: 'Введите свой телефон верно'
  },


submitHandler: function(form) {
  $('#preloader-active').fadeIn();
  var $form = $(form);
  var $formId = $(form).attr('id');
  switch ($formId) {
    case 'form-call':
      $.ajax({
        type: 'POST',
        url: $form.attr('action'),
        data: $form.serialize()
      })
      .done(function() {
        console.log('Success');
      })
      .fail(function() {
        console.log('fail');
      })
      .always(function(){
        console.log('always');
        setTimeout (function() {
        $('.message-for-user').fadeIn();
        $form.trigger('reset');
        }, 1000);
        // setTimeout(function() {
        // $('.message-for-user__btn').on('click', function(e) {
        //     $(this).fadeOut();
        // }) 

      });
      break;

      case 'contact-form':
      $.ajax({
        type: 'POST',
        url: $form.attr('action'),
        data: $form.serialize()
      })
      .done(function() {
        console.log('Success');
      })
      .fail(function() {
        console.log('fail');
      })
      .always(function(){
        setTimeout (function() {
        $('.message').fadeIn();
        $form.trigger('reset');
        }, 1000);

      });
      break;
     
    }
    return false;
  }

});

$('.form-val').each(function() {
  valEll($(this));
})    



var header = document.getElementById("pagination");
var btns = header.getElementsByClassName("pagination__btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("pagination__btn_activ");
    current[0].className = current[0].className.replace(" pagination__btn_activ", "");
    this.className += " pagination__btn_activ";
  });
}