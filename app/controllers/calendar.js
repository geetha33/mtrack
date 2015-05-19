import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
	
	
	
	eventData:function(content) {
		var list=this.get('content');
          var eventData =[];
	
		for(var j=0;j<list.length;j++){
        eventData.push({date:list[j].date1 +' '+ list[j].time1,title:"Amount: " + list[j].amount + ", Spent On:" +list[j].moneySpentOn});
	
         } 
		 return eventData;
	
	}.property('model')
});
