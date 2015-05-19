import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('transactiondetails');
	
	this.route('calendar');
	this.route('list');
	this.route('map');
	this.route('scanner');
	this.route('transaction',{path:'/'});
});

export default Router;
