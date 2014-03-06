export default Ember.View.reopen({
  didInsertElement: function(){
    this._super();

    // Header rollovers
    $(".rollover").each(function(){
      var $thisImage = $(this);
      var $rolloverImage = $thisImage.data("rollover");
      var $defaultImage = $thisImage.data("default");

      $thisImage.hover(function(){
        $thisImage.attr("src",$rolloverImage);
      }, function(){
        $thisImage.attr("src",$defaultImage);
      });
    });

    // Cycle
    $(".cycle").not(".cycle-init").each(function(){
      var $thisCycle = $(this);
      $thisCycle.cycle({
        cleartypeNoBg: true
      });
    }).addClass("cycle-init");

    // Accordions
    $(".accordions").not(".accordions-init").each(function(){
      var $accordions = $(this);
      var $questions = $accordions.find(".accordion--question");
      $questions.on("click", function(e){
        $(this).toggleClass("accordion_active");
      });
    }).addClass("accordions-init");

  }
});