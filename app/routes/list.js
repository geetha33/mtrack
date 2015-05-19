import Ember from 'ember';

var ListRoute = Ember.Route.extend({
  renderTemplate: function() {
     this.render('list');
  },
  
  model: function() {
	  
	 var ip = '10.0.5.53:8000';
     var self = this;
	
      return Ember.$.ajax({
        url: 'http://'+ip+'/get_expense.php',
		dataType:"json"
      }).then(function(response) {
		 
        var cities = [];
        if (response && response.length) {
          for(var i=0; i<response.length; i++) {
            cities.push(Ember.Object.create(response[i]));
          }
        }
        self.set('cachedCities', cities);
        return cities;
      });
  },
	  setupController: function(controller, model) {
		
		  controller.set('model', model);
		  controller.propertyDidChange('model');
	  }

 
});


export default ListRoute;
