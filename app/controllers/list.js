import Ember from 'ember';

var listController = Ember.ObjectController.extend({
	data:[],
	
	contentDidChange: function(){
		var content = this.get('model');
		
		var data =[];
		var data1 = this.listdata(content);
		data = data1;
		
		this.set('data',data1);
	}.observes('model'),
	
	listdata: function(data){
		var list = data;
	
		var result = [];
		
		for(var i =0 ; i< list.length;i++){
			result.push({amount:list[i].amount,date:list[i].date1,time:list[i].time1});
		}		
		
		return result;
	}
	
	
	
	
});

export default listController;