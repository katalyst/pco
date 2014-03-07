export default Ember.ArrayController.extend({
  rootNav: function() {
    return this.get('model').filter(function(page) {
      return (page.get('parent') === null) && (page.get('hidden') !== true);
    });
  }.property('model.@each')
});
