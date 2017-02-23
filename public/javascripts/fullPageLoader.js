
$(document).ready(function() {
    $('#fullpage').fullpage();
});

gest.options.subscribeWithCallback(function(gesture) {
  if (gesture.direction) {
    console.log(gesture.direction);
    if (gesture.direction === 'Long up' || gesture.direction === 'Up') {
      $.fn.fullpage.moveSectionDown();
    }
    else if (gesture.direction === 'Long down' || gesture.direction === 'Down') {
      $.fn.fullpage.moveSectionUp();
    }
    else if (gesture.direction === 'Left') {
      $.fn.fullpage.moveSlideRight();
    }
    else if (gesture.direction === 'Right') {
      $.fn.fullpage.moveSlideLeft();
    }
  } else {
    console.log(gesture.error.message);
  }
});

gest.start()

// const shitFunc = function() {
//   console.log('satan');
//   $.fn.fullpage.moveSlideRight();
// }

// $('#shit').on('click', shitFunc)
