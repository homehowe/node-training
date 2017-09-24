name = "zh";

_this = this;
var test = function(a){
	name = a;

 	function c(){
 		console.log(_this.name);
 	}
 	
 	c();	
}

test('zjh')