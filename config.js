config=new Object;
config.length=screen.height-150;
config.bg='black';

config.gridStrokeWidth=1;

//config.ballFill='red';
config.ballTweenDur=1;
config.ballTweenEasing='BackEaseOut';
config.ballResetEasing='BackEaseInOut';
config.ballRadRadius=70;
config.ballStrokeWidth=1.5;
config.ballRadius= 10;// {x:13,y:9};
config.ballOpacity=1;


function getConfig(n) {
	cf=new Object;
	switch(n){
		case 1:
			cf.gridStroke='red';
			cf.ballColorStops=[0, '#ff0000', 0.4, '#f0f011'];
			cf.ballStroke='#f0f200';
			break;
		case 2:
			cf.gridStroke='green';
			cf.ballColorStops=[0, '#00ff00', 0.4, '#11f0f0'];
			cf.ballStroke='#00f0f2';
			break;
		case 3:
			cf.gridStroke='Blue';
			cf.ballColorStops=[0, '#0000ff', 0.4, '#f011f0'];
			cf.ballStroke='#00f2f0';
			break;
	}
	return cf;
}