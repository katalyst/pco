export default Ember.ArrayController.extend({
  isHomepage: function(){
    // debugger;
    var currentURL = App.__container__.lookup('router:main').location.lastSetURL;
    if (currentURL = null) {
      return true;
    } else {
      return false;
    }
  }.property()
});