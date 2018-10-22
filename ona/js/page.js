
$(function() {

  // methods and values
  $('.cell .clicker').click(
    function(event) {
      console.log("clicker clicked");

      var target = $(event.target);
      var parent = target.parent(); 
      var child = parent.find('.hover');
      child.fadeToggle(200);
    });

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


  console.log("page loaded");
});

