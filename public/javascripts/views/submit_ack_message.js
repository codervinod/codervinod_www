var SubmitAckView = Backbone.View.extend({
  // el - stands for element. Every view has an element associated with HTML content, will be rendered.
  el: '#submit_ack_container',
  // It's the first function called when this view is instantiated.
  initialize: function(){
    this.render();
  },
  // $el - it's a cached jQuery object (el), in which you can use jQuery functions to push content. Like the Hello TutorialsPoint in this case.
  render: function(){
    this.$el.html("");
  }
});

var submitAckView = new SubmitAckView();
