(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.but3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CC33").ss(1,1,1).p("AF2AAQAACbhtBuQhuBtibAAQiaAAhuhtQhthuAAibQAAiaBthuQBuhtCaAAQCbAABuBtQBtBuAACag");
	this.shape.setTransform(-1.8,9.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC33FF").s().p("AkIEIQhthtAAibQAAiaBthtQBuhuCaAAQCbAABuBuQBtBtAACaQAACbhtBtQhuBuibAAQiaAAhuhug");
	this.shape_1.setTransform(-1.8,9.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.2,-29,76.8,76.8);


(lib.but2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CC33").ss(1,1,1).p("AG0AAQAAC0iACAQh/CAi1AAQizAAiBiAQh/iAAAi0QAAi0B/iAQCBh/CzAAQC1AAB/B/QCACAAAC0g");
	this.shape.setTransform(-3.6,12.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990033").s().p("Ak0E0Qh/h/AAi1QAAi0B/iAQCBh/CzAAQC0AACAB/QCACAAAC0QAAC1iAB/QiACAi0AAQizAAiBiAg");
	this.shape_1.setTransform(-3.6,12.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.2,-32.2,89.2,89.2);


(lib.but1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CC33").ss(1,1,1).p("AGYAAQAACph3B4Qh4B3ipAAQioAAh4h3Qh3h4AAipQAAioB3h4QB4h3CoAAQCpAAB4B3QB3B4AACog");
	this.shape.setTransform(-8,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009933").s().p("AkfEgQh4h3AAipQAAioB4h4QB3h3CoAAQCpAAB4B3QB3B4AACoQAACph3B3Qh4B4ipAAQioAAh3h4g");
	this.shape_1.setTransform(-8,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.8,-40.2,83.6,83.6);


(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACyAAQAABJg0A0Qg0A1hKAAQhIAAg1g1Qg0g0AAhJQAAhJA0g0QA1g0BIAAQBKAAA0A0QA0A0AABJg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah9B+Qg0g0AAhKQAAhIA0g1QA0g0BJAAQBJAAA0A0QA1A1AABIQAABKg1A0Qg0A0hJAAQhJAAg0g0g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.8,-18.8,37.6,37.6);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACyAAQAABJg1A1Qg0A0hJAAQhJAAg0g0Qg0g1AAhJQAAhJA0g0QA0g0BJAAQBJAAA0A0QA1A0AABJg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah9B9Qg0g0AAhJQAAhJA0g0QA1g0BIAAQBKAAA0A0QA0A0AABJQAABJg0A0Qg0A1hKAAQhIAAg1g1g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.8,-18.8,37.6,37.6);


// stage content:
(lib._ActionScript3_HTML5Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();
		
		//запуск воспроизведения анимации щелчком мыши по кнопке but1
		this.but1.addEventListener("click",f1.bind(this));
		function f1(args){this.play();}
		
		//остановка воспроизведения щелчком мыши по кнопке but2
		this.but2.addEventListener("click",f2.bind(this));
		function f2(args){this.stop();}
		
		//переход во второй кадр анимации щелчком мыши по кнопке but3
		this.but3.addEventListener("click",f3.bind(this));
		function f3(args){this.gotoAndStop(1);}*/
		this.stop();
		
		//запуск воспроизведения анимации щелчком мыши по кнопке but1
		this.but1.addEventListener("click",f1.bind(this));
		function f1(args){this.play();}
		
		//остановка воспроизведения щелчком мыши по кнопке but2
		this.but2.addEventListener("click",f2.bind(this));
		function f2(args){this.stop();}
		
		//переход во второй кадр анимации щелчком мыши по кнопке but3
		this.but3.addEventListener("click",f3.bind(this));
		function f3(args){this.gotoAndStop(1);}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40));

	// Слой_3
	this.but3 = new lib.but3();
	this.but3.name = "but3";
	this.but3.parent = this;
	this.but3.setTransform(354.8,314.7);
	new cjs.ButtonHelper(this.but3, 0, 1, 1);

	this.but2 = new lib.but2();
	this.but2.name = "but2";
	this.but2.parent = this;
	this.but2.setTransform(256.1,305.5);
	new cjs.ButtonHelper(this.but2, 0, 1, 1);

	this.but1 = new lib.but1();
	this.but1.name = "but1";
	this.but1.parent = this;
	this.but1.setTransform(152,314.5);
	new cjs.ButtonHelper(this.but1, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CC33").ss(1,1,1).p("AB1AAQAAAxgiAiQgjAigwAAQgwAAgigiQgigiAAgxQAAgvAigjQAigiAwAAQAwAAAjAiQAiAjAAAvg");
	this.shape.setTransform(284.4,309.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC33FF").s().p("AhSBTQgigiAAgxQAAgvAigjQAjgiAvAAQAxAAAhAiQAjAjAAAvQAAAxgjAiQghAigxAAQgvAAgjgig");
	this.shape_1.setTransform(284.4,309.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.but1},{t:this.but2},{t:this.but3}]}).wait(40));

	// Слой_1
	this.instance = new lib.Анимация3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(112.3,244.5);

	this.instance_1 = new lib.Анимация4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(491.2,119.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},39).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,guide:{path:[112.5,244.5,110.7,242.2,108.9,240,102.5,229.6,96,219.2,96,195.6,96,172,110.4,99.9,175.1,69.5,190.7,62.1,209,63.3,231.9,64.9,252.4,76.3,257.2,78.9,262.4,80.9,274.4,90.5,286.4,100.1,294.4,108.5,302.4,116.9,313.6,134,324.9,151.2,333.6,158,342.4,164.8,342.4,166.8,342.4,168.8,345.2,168.8,348.1,168.8,348.1,170.8,348.1,172.8,381.7,187.6,415.9,190.5,445.9,193,467.8,173.4,477.9,164.3,487.3,154.4,489.7,150.4,491.3,148.8,491.3,134,491.3,119.3]}},39).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(368.5,425.7,297.9,136.8);
// library properties:
lib.properties = {
	id: '82EB3C852FD9AF4E8F66BA6E2BA25BB4',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['82EB3C852FD9AF4E8F66BA6E2BA25BB4'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;