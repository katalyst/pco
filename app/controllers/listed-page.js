export default Ember.ObjectController.extend({
  needs: ['page'],
  isSelected: function() {
    return this.get('content.id') === this.get('controllers.page.id');
  }.property('content.id', 'controllers.page.id')
});
