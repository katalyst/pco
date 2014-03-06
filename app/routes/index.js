export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('page', 'about-us');
  },
  afterModel: function(page, transition) {
    if (page !== undefined) {
      this.transitionTo('page', page);
    }
  }
});
