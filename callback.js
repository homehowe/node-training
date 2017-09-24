

var pet = {
	word:'',
	speak:function(say){
		console.log(say+''+this.word)
	}
}

pet.speak('speak')