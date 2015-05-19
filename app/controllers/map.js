import Ember from 'ember';

export default Ember.Controller.extend({
	zoom: 15,
	Lng: '',
	Lat: '',
	markers: [],
	init: function() {
		this._super();
		var self = this;
		var result =[];
		var ip = '10.0.5.53:8000';
		var list =[];
		var loc = [];
		var markers = [];
		Ember.$.ajax({
			url: 'http://'+ip+'/get_expense.php',
			dataType:"json"
		}).then(function(response) {
		 
			list= response;
		 
			for(var i =0 ; i< list.length;i++){
				var address = list[i].location;
				address=address.replace(/\s/g, "+");
			
				result.push(address);
			
				Ember.$.ajax({
					url: 'http://maps.googleapis.com/maps/api/geocode/json?address='+result[i]+'&sensor=false',
					dataType:"json"
				}).then(function(response) {
				
					var data1 = response.results;
			
					var lat = data1[0].geometry.location.lat;
					var lng = data1[0].geometry.location.lng;
					var add = data1[0].formatted_address;
					
					loc.push({lat:lat,lng:lng, address:add});
				
							self.set('Lat', loc[0].lat).set('Lng', loc[0].lng);
							for(var j=0;j<loc.length;j++){
								markers.push({lat:loc[j].lat,lng:loc[j].lng, title:"Amount: " + list[j].amount + ", Spent On:" +list[j].moneySpentOn + ", Location:" +loc[j].address});
								} 
                             self.set('markers', markers);

							});
			
						}
   
					});
				}
  
			});
