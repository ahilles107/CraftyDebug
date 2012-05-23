Crafty.scene("main", function() {

	var elements = [
        "src/entities/ufo.js",
        "src/interfaces/info.js"
	];
	
	//when everything is loaded, run the main scene
	require(elements, function() {	   
		sc['ufo1'] = new Ufo(); sc['ufo1'].getEntity().setName('Ufo 1')
		sc['ufo2'] = new Ufo();sc['ufo2'].getEntity().setName('Sklonowane ufo')
		infc['info'] = new Info();
	});

});
