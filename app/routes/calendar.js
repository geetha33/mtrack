import Ember from 'ember';

var calendarRoute = Ember.Route.extend({
 
  
  model: function() {
	   var info = [];
	var ip = '10.0.5.53:8000';
   
	
      return Ember.$.ajax({
        url: 'http://'+ip+'/get_expense.php',
		dataType:"json"
      }).then(function(response) {
		
        
        if (response && response.length) {
          for(var i=0; i<response.length; i++) {
            info.push(Ember.Object.create(response[i]));
          }
        }
     
	
        return info;
      });
  },
	  setupController: function(controller, model) {
	
		  controller.set('model', model);
		
	  }

 
});


export default calendarRoute;
