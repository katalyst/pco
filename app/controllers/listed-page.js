export default Ember.ObjectController.extend({
  needs: ['page'],
  isSelected: function() {
    return this.get('content').get('root') === this.get('controllers.page').get('root');
  }.property('content.id', 'controllers.page.id')
});
