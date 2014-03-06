export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('page', 'about-us');
  },
  afterModel: function(pages, transition) {
    if (pages.length === 1) {
      this.transitionTo('page', pages[0]);
    }
  }
});
