export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('page', params.page_id);
  }
});
