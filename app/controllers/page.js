export default Ember.ObjectController.extend({
  isHomepage: function(){
    debugger;
    var currentURL = App.__container__.lookup('router:main').location.lastSetURL;
    if (currentUrl = null) {
      return true;
    } else {
      return false;
    }
  }.property()
});