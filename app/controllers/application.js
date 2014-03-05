export default Ember.ArrayController.extend({
  isCurrentPage: function(id) {
    var currentURL = App.__container__.lookup('router:main').location.lastSetURL;
    if (currentURL = "/" + id) {
      return true;
    } else {
      return false;
    }
  }
});