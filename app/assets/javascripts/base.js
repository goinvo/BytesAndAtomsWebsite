(function ($) {
  $.fn.showHide = function (options) {
    //default vars for the plugin
    var defaults = {
      speed: 1000,
      easing: ''
    };
    var options = $.extend(defaults, options);
    var divs = $('.toggleDiv')
    divs.css("position", "absolute");
    divs.hide();
    $(divs[0]).show();


    $(this).click(function () {
      // add the class .toggleDiv to each div you want to automatically close
      $('.toggleDiv').fadeOut(options.speed, options.easing);
      // this reads the rel attribute of the button to determine which div id to toggle
      var toggleDiv = $(this).attr('href');
      // here we toggle show/hide the correct div at the right speed and using which easing effect
      $(toggleDiv).fadeIn(options.speed, options.easing);
      return false;
    });
  };
})(jQuery);

BytesAndAtoms = {
  start: function() {
    $('.show_hide').showHide();
    $('#navigation').scrollToFixed( { marginTop: 0, limit: 40000 } );
  }
};

