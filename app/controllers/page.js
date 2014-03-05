export default Ember.ObjectController.extend({
  isCurrentPage: function(id) {
    var currentURL = App.__container__.lookup('router:main').location.lastSetURL;
    if (currentURL = "/" + id) {
      return true;
    } else {
      return false;
    }
  },
  isHomepage: function(){
    console.log("---------------test");
    var currentURL = App.__container__.lookup('router:main').location.lastSetURL;
    if (currentUrl = null) {
      return true;
    } else {
      return false;
    }
  }
});