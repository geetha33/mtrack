import Ember from 'ember';

var TransactionDetailsController = Ember.ArrayController.extend({
	actions:{
		
		save:function(){
			var self =this;	
	 	var ip = '10.0.5.53:8000';
		var amount= this.get('amount');
		var paymentmethod=this.get('paymentmethod');
		var moneyspenton=this.get('moneyspenton');
		var creditedtype=this.get('creditedtype');
		var address=this.get('address');
		var date=this.get('date');
		var time=this.get('time');
		
	  Ember.$.ajax({
		
			data:{amount:amount,paymentmethod:paymentmethod,moneyspenton:moneyspenton,creditedtype:creditedtype,address:address,date:date,time:time},
	  		type:"POST",
	  		dataType: 'jsonp',
	  		url: 'http://'+ip+'/add_expense.php',
            
		
	  	}).then(function() {
          self.transitionTo('transaction');
        });
		}	
		
	},
 paymentByOptions: [
      {
        label: '',
        value: ''
      },
      {
        label: 'Cash',
        value: 'cash'
      },
      {
        label: 'Credit Card',
        value: 'credit card'
      },
      {
        label: 'Debit Card',
        value: 'debit card'
      },
  ],
	  
      moneySpentByOptions: [
	      {
	        label: '',
	        value: ''
	      },
        {
          label: 'Bills',
          value: 'bills'
        },
        {
          label: 'Transportation',
          value: 'transportation'
        },
        {
          label: 'Food',
          value: 'food'
        },
        {
          label: 'Education',
          value: 'education'
        },
        {
          label: 'Entertainment',
          value: 'entertainment'
        },
	
  ],
    moneyCreditedByOptions: [
        {
          label: '',
          value: ''
        },
      {
        label: 'Salary',
        value: 'salary'
      },
      {
        label: 'Reimbursement',
        value: 'reimbursement'
      },
      {
        label: 'Personal',
        value: 'personal'
      },
],

});

export default TransactionDetailsController;