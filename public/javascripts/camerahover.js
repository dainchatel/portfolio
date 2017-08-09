let gesticon = $('#gesture-nav-icon');
let gestexplainer = $('.gest-explainer');
let gestbounce = $('.scroll-dir');

let gestfunc = function() {
  gestexplainer.css('opacity', '.95');
  gestbounce.css('animation', 'none');
}

let ungest = function() {
  gestexplainer.css('opacity', '0');
  gestbounce.css('animation', 'bounce 1s infinite');
}

gesticon.on('mouseover', gestfunc);
gesticon.on('mouseout', ungest);
