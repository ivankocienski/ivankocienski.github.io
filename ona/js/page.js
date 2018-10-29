
$(function() {

  var window_width = $(window).width();
  var window_height = $(window).height();
  console.log("window is " + window_width + "x" + window_height + " pixels");

  if(true) {
    // methods and values
    $('#zone-2 .cell .clicker').click(
      function(event) {
        console.log("clicker clicked");

        var target = $(event.target);
        var parent = target.parent();
        var child = parent.find('.hover');

        // hide all the hover boxes that are open but not us
        $("#zone-2 .cell .hover")
          .filter((index, elm ) => { return !($(elm).is(child)) })
          .slideUp(200);

        child.slideToggle(200);
      });
    }
  
  if(false) { //window_width > 1000) {
    // page scroller
    $('#zone-holder').pagepiling({
      menu: '#menu-links',
      anchors: [ 'zone-1', 'zone-2', 'zone-3', 'zone-4', 'zone-5', 'zone-6' ],
      scrollingSpeed: 300,
      //navigation: {
      //  'position': 'right',
      //  'tooltips': [ 'About', 'Methods', 'Clients', 'Video', 'Case Studies', 'Contact' ]
      //}
    });
  }


  console.log("page loaded");

});

