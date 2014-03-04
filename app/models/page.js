var Page =  DS.Model.extend({
  title:    DS.attr('string'),
  parent:   DS.belongsTo('page'),
  children: DS.hasMany('page', { async: true }),
  path: function() {
    var parent = this.get('parent');
    var path = "";

    if (parent !== null) {
      path +=  parent.get('path') + "/";
    }

    return path + this.get('id');
  }.property('id')
});

Page.FIXTURES = [
  {
    id: 'home-page',
    title: 'Home Page',
    children: ['child-page']
  },
  {
    id: 'child-page',
    title: 'Child Page',
    parent: 'home-page',
    children: []
  },
];

export default Page;
