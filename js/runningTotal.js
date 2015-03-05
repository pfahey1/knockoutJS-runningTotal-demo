
$( document ).ready(function() {
	// Assume that the following data came back from a web service call...
	var serverData = [
	    {Year: 2012, Month: 1, Value: .5},
	    {Year: 2012, Month: 2, Value: .5},
	    {Year: 2012, Month: 3, Value: .75},
	    {Year: 2012, Month: 4, Value: .75},
	    {Year: 2012, Month: 5, Value: .5},
	    {Year: 2012, Month: 6, Value: .5},
	    {Year: 2012, Month: 7, Value: .75},
	    {Year: 2012, Month: 8, Value: .75},
	    {Year: 2012, Month: 9, Value: .5},
	    {Year: 2012, Month: 10, Value: .5},
	    {Year: 2012, Month: 11, Value: .75},
	    {Year: 2012, Month: 12, Value: .75},
	    
	    {Year: 2013, Month: 1, Value: .5},
	    {Year: 2013, Month: 2, Value: .5},
	    {Year: 2013, Month: 3, Value: .75},
	    {Year: 2013, Month: 4, Value: .75},
	    {Year: 2013, Month: 5, Value: .5},
	    {Year: 2013, Month: 6, Value: .5},
	    {Year: 2013, Month: 7, Value: .75},
	    {Year: 2013, Month: 8, Value: .75},
	    {Year: 2013, Month: 9, Value: .5},
	    {Year: 2013, Month: 10, Value: .5},
	    {Year: 2013, Month: 11, Value: .75},
	    {Year: 2013, Month: 12, Value: .75},
	    
	    {Year: 2014, Month: 1, Value: .85}
	];
	
	
	function Item(year, yearValue) {
	//    function Item(data) {
	   
	    this.year = ko.observable(year);
	    this.yearValue = ko.observable(yearValue);
	       
	    this.total = ko.computed(function() {
	        return this.yearValue() * this.year();
	    }, this);
	
	 
	}
	
	var vm = {
	    
	    items: ko.observableArray([]),
	
	    display: function() {
	        $('#display').html( ko.toJSON(this.items));
	    },
	    
	     clearDisplay: function() {
	        $('#display').html( "");
	    },
	
	    addItem: function() {
	        this.items.push(new Item(2015, .08));
	    },
	    removeItem: function(itemToRemove) {
	        this.items.remove(itemToRemove);
	    }
	              
	};
	
	for (var x in serverData){
	    
	     vm.items.push(new Item(serverData[x].Year, serverData[x].Value)); 
	}
	
	ko.applyBindings(vm);
});