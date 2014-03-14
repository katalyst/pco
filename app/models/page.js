var Page =  DS.Model.extend({
  title:    DS.attr('string'),
  parent:   DS.belongsTo('page'),
  children: DS.hasMany('page', { async: true }),
  hidden:   DS.attr('boolean'),
  slug:     DS.attr('string'),

  path: function() {
    var parent = this.get('parent');
    var path = "";
    if (parent !== null) {
      path +=  parent.get('path') + "/";
    }
    return path + this.get('id');
  }.property('id'),

  navImage: function(){
    return "images/nav/" + this.get('id') + ".png?2";
  }.property('id'),

  navImageHover: function(){
    return "images/nav/" + this.get('id') + "_roll.png?2";
  }.property('id'),

  navImageActive: function(){
    return "images/nav/" + this.get('id') + "_act.png?2";
  }.property('id'),

  root: function() {
    var parent = this.get('parent');

    if (parent !== null) {
      return parent.get('root');
    } else {
      return this;
    }
  }.property('parent'),

});

Page.FIXTURES = [
  {
    id: "about-us",
    title: "About Us",
    children: ["how-can-we-help-you", "our-customers", "our-values", "commitment-to-quality", "our-people"]
  },
    {
      id: "how-can-we-help-you",
      title: "How Can We Help You?",
      parent: "about-us"
    },
    {
      id: "our-customers",
      title: "Our Customers",
      parent: "about-us"
    },
    {
      id: "our-values",
      title: "Our Values",
      parent: "about-us"
    },
    {
      id: "commitment-to-quality",
      title: "Commitment To Quality",
      parent: "about-us"
    },
    {
      id: "our-people",
      title: "Our People",
      parent: "about-us",
      children: ["management", "our-team"],
    },
      {
        id: "management",
        title: "Management",
        parent: "our-people"
      },
      {
        id: "our-team",
        title: "Our Team",
        parent: "our-people"
      },
  {
    id: "workplace-rehabilitation",
    title: "Workplace Rehabilitation & Injury Management",
    children: ["pre-injury-employer-services","new-employer-services","ppc-works","suitable-employment-assessments","restoration-to-the-community"]
  },
    {
      id: "pre-injury-employer-services",
      title: "Pre-Injury Employer Services: Remain at Work, Return to Work, Complex Return to Work",
      parent: "workplace-rehabilitation"
    },
    {
      id: "new-employer-services",
      title: "New Employer Services",
      parent: "workplace-rehabilitation",
      children: ["employment-transition", "intensive-job-seeking-program", "job-placement"]
    },
      {
        id: "employment-transition",
        title: "Employment Transition",
        parent: "new-employer-services"
      },
      {
        id: "intensive-job-seeking-program",
        title: "Intensive Job Seeking Program",
        parent: "new-employer-services"
      },
      {
        id: "job-placement",
        title: "Job Placement",
        parent: "new-employer-services"
      },
    {
      id: "ppc-works",
      title: "Job Search Training & Facilities",
      parent: "workplace-rehabilitation"
    },
    {
      id: "suitable-employment-assessments",
      title: "Suitable Employment Assessments",
      parent: "workplace-rehabilitation"
    },
    {
      id: "restoration-to-the-community",
      title: "Restoration to the Community",
      parent: "workplace-rehabilitation"
    },
  {
    id: "disability-employment-services",
    title: "Disability Employment Services",
    children: ["des-how-can-we-help-you", "job-seekers-employees", "employers", "wage-subsidies", "des-ppc-works", "job-in-jeopardy"]
  },
    {
      id: "des-how-can-we-help-you",
      title: "How Can We Help You?",
      parent: "disability-employment-services"
    },
    {
      id: "job-seekers-employees",
      title: "Job Seekers & Employees",
      parent: "disability-employment-services"
    },
    {
      id: "employers",
      title: "Employers",
      parent: "disability-employment-services"
    },
    {
      id: "wage-subsidies",
      title: "Wage Subsidies",
      parent: "disability-employment-services"
    },
    {
      id: "job-in-jeopardy",
      title: "Job In Jeopardy",
      parent: "disability-employment-services"
    },
    {
      id: "des-ppc-works",
      title: "Job Search Training & Facilities",
      parent: "disability-employment-services"
    },
  {
    id: "national-panel-of-assessors",
    title: "National Panel of Assessors",
    children: ["supported-wage-system", "ongoing-support-assessments"]
  },
    {
      id: "supported-wage-system",
      title: "Supported Wage System",
      parent: "national-panel-of-assessors"
    },
    {
      id: "ongoing-support-assessments",
      title: "Ongoing Support Assessments",
      parent: "national-panel-of-assessors"
    },
  {
    id: "occupational-therapy",
    title: "Occupational Therapy",
    children: []
  },
  {
    id: "contact",
    title: "Contact Us",
    children: []
  },
  // footer pages
  {
    id: "sitemap",
    title: "Sitemap",
    children: [],
    hidden: true
  },
  {
    id: "copyright",
    title: "Copyright",
    children: [],
    hidden: true
  },
  {
    id: "privacy",
    title: "Privacy",
    children: [],
    hidden: true
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    children: [],
    hidden: true
  },
  {
    id: "links",
    title: "Links",
    children: [],
    hidden: true
  }
];

export default Page;
