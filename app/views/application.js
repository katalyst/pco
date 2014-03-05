export default Ember.View.reopen({
  didInsertElement: function(){
    this._super();

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

  }
});