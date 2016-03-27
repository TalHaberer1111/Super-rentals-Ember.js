import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
      imageShow: function(){
        this.set('isImageShowing', true);
      },
      imageHIde: function() {
        this.set('isImageShowing', false);
      }
  }
});
