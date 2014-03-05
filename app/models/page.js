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
  }.property('id'),

  navImage: function(){
    return "images/nav/" + this.get('id') + ".png";
  }.property('id'),

  navImageHover: function(){
    return "images/nav/" + this.get('id') + "_roll.png";
  }.property('id'),

  navImageActive: function(){
    return "images/nav/" + this.get('id') + "_act.png";
  }.property('id')

});

Page.FIXTURES = [
  {
    id: "about-us",
    title: "About Us",
    children: []
  },
  {
    id: "our-people",
    title: "Our People",
    children: []
  },
  {
    id: "services",
    title: "Services",
    children: ["workers-compensation", "disability-employment-services", "supported-wage-system"]
  },
  {
    id: "quality",
    title: "Quality",
    children: []
  },
  {
    id: "careers",
    title: "Careers",
    children: []
  },
  {
    id: "contact",
    title: "Contact",
    children: []
  },
  {
    id: "referrals",
    title: "Referrals",
    children: []
  },
  // services sub-pages
  {
    id: "workers-compensation",
    title: "Workers Compensation",
    children: ["return-to-work", "intensive-job-seeking", "community-restoration", "vocational-and-suitable-employment-assessments"],
    parent: "services"
  },
  {
    id: "disability-employment-services",
    title: "Disability Employment Services",
    children: [],
    parent: "services"
  },
  {
    id: "supported-wage-system",
    title: "Supported Wage System & On-going Support Assessments",
    children: [],
    parent: "services"
  },
  // workers comp sub-pages
  {
    id: "return-to-work",
    title: "Return To Work",
    children: [],
    parent: 'workers-compensation'
  },
  {
    id: "intensive-job-seeking",
    title: "Intensive Job Seeking",
    children: [],
    parent: 'workers-compensation'
  },
  {
    id: "community-restoration",
    title: "Community Restoration",
    children: [],
    parent: 'workers-compensation'
  },
  {
    id: "vocational-and-suitable-employment-assessments",
    title: "Vocational and Suitable Employment Assessments",
    children: [],
    parent: 'workers-compensation'
  }
];

export default Page;
