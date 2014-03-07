var Page =  DS.Model.extend({
  title:    DS.attr('string'),
  parent:   DS.belongsTo('page'),
  children: DS.hasMany('page', { async: true }),
  hidden:   DS.attr('boolean'),

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
    children: ["management", "our-team", "careers"]
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
      id: "careers",
      title: "Careers",
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
      title: "PPC WORKS – Job Search Training & Facilities",
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
    children: ["job-seekers-employees", "des-how-can-we-help-you", "job-in-jeopardy", "ppc-works", "employers", "wage-subsidies"]
  },
    {
      id: "job-seekers-employees",
      title: "Job Seekers & Employees",
      parent: "disability-employment-services"
    },
    {
      id: "des-how-can-we-help-you",
      title: "How Can We Help You?",
      parent: "disability-employment-services"
    },
    {
      id: "job-in-jeopardy",
      title: "Job In Jeopardy",
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
  /*
  {
    id: "services",
    title: "Services",
    children: ["workers-compensation", "supported-wage-system"]
  },
    {
      id: "workers-compensation",
      title: "Workers Compensation",
      children: ["return-to-work", "intensive-job-seeking", "community-restoration", "vocational-and-suitable-employment-assessments"],
      parent: "services"
    },
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
  */
  {
    id: "contact",
    title: "Contact Us",
    children: []
  },
    // {
    //   id: "referrals",
    //   title: "Referrals",
    //   parent: "contact"
    // },
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
