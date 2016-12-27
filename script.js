
var chess = document.getElementById('chess');
var context = chess.getContext('2d');
var me =true;
var over =false; //结束?
// 二维数组存储棋盘

var chessBoard = [];

for(var i =0;i<15;i++){
	chessBoard[i]=[];
	for(var j =0;j<15;j++){
		chessBoard[i][j]=0;
	}
}
//赢法数组 
// 15*15 572种 
var wins = [];

//赢法的统计数组 
var myWin = [];
var com = [];
for(var i=0;i<15;i++){
	wins[i] = [];
	for(var j=0;j<15;j++){
		wins[i][j] = [];
	}
}
// 赢法 count
var count = 0;
for(var i=0;i<15;i++){
	for(var j=0;j<11;j++){
		// 第0种赢法 连线?
		// win[0][0][0] = true;
		// win[0][1][0] = true;
		// win[0][2][0] = true;
		// win[0][3][0] = true;
		// win[0][4][0] = true;
		//第1种赢法 横线?
		// win[0][1][1] = true;
		// win[0][2][1] = true;
		// win[0][3][1] = true;
		// win[0][4][1] = true;
		// win[0][5][1] = true;
		for(var k=0;k<5;k++){
			wins[i][j+k][count] = true;
		}
		count++;
	}
}
for(var i=0;i<15;i++){
	for(var j=0;j<11;j++){
		// 第0种赢法 连线?
		// win[0][0][0] = true;
		// win[0][1][0] = true;
		// win[0][2][0] = true;
		// win[0][3][0] = true;
		// win[0][4][0] = true;
		//第1种赢法 竖线?
		// win[0][0][1] = true;
		// win[1][0][1] = true;
		// win[2][0][1] = true;
		// win[3][0][1] = true;
		// win[4][0][1] = true;
		for(var k=0;k<5;k++){
			wins[j+k][i][count] = true;
		}
		count++;
	}
}
for(var i=0;i<11;i++){
	for(var j=0;j<11;j++){
		// 第0种赢法 连线?
		// win[0][0][0] = true;
		// win[0][1][0] = true;
		// win[0][2][0] = true;
		// win[0][3][0] = true;
		// win[0][4][0] = true;
		//第1种赢法 横线?
		// win[0][1][1] = true;
		// win[0][2][1] = true;
		// win[0][3][1] = true;
		// win[0][4][1] = true;
		// win[0][5][1] = true;
		for(var k=0;k<5;k++){
			wins[i+k][j+k][count] = true;
		}
		count++;
	}
}
for(var i=0;i<11;i++){
	for(var j=14;j>3;j--){
		// 第0种赢法 连线?
		// win[0][0][0] = true;
		// win[0][1][0] = true;
		// win[0][2][0] = true;
		// win[0][3][0] = true;
		// win[0][4][0] = true;
		//第1种赢法 横线?
		// win[0][1][1] = true;
		// win[0][2][1] = true;
		// win[0][3][1] = true;
		// win[0][4][1] = true;
		// win[0][5][1] = true;
		for(var k=0;k<5;k++){
			wins[i+k][j-k][count] = true;
		}
		count++;
	}
}
console.log(count);
for(var i =0;i<count;i++){
	myWin[i] = 0;
	com[i] = 0;
}

context.strokeStyle = '#BFBFBF';

var logo = new Image();
logo.src = 'canvas.jpg';
// 加载事件 onload 
logo.onload = function(){
	context.drawImage(logo,0,0,450,450);
	drawChessBoard();

	//画圆
	// context.beginPath();
	// context.arc(200,200,100,0,2 * Math.PI);
	// context.closePath();

	// context.fillStyle = 'white';
	// context.fill();
	// oneStep(5,5,true);
	// oneStep(4,4,false);

}	

var drawChessBoard = function(){
	for(var i=0;i<15;i++){
	context.moveTo(15+i*30,15);
	context.lineTo(15+i*30,435);
	context.stroke();
	context.moveTo(15,15+i*30);
	context.lineTo(435,15+i*30);
	context.stroke();
 }
}

//画旗子 me 黑?白

var oneStep = function(i,j,me){

	context.beginPath();
	context.arc(15+i*30,15+j*30,13,0,2 * Math.PI);
	context.closePath();

	if(me){
		context.fillStyle = 'black';
	}else{
		context.fillStyle = 'white';
	}

	// context.fillStyle = '#636766';
	context.fill();
}

chess.onclick = function(eve){

	if(over){
		return;
	}
	if(!me){
		return;
	}

	var e = eve || window.event;
	var x = e.offsetX;
	var y = e.offsetY;
	var i = Math.floor(x/30);
	var j = Math.floor(y/30);

	if(chessBoard[i][j] == 0){
		oneStep(i,j,me);
		// if(me){
			chessBoard[i][j] = 1;
		// }else{
		// 	chessBoard[i][j] = 2;
		// }
		// me =!me;
		for(var k=0;k<count;k++){
			if(wins[i][j][k]){
				myWin[k]++;
				com[k] = 6; //异常情况
				if(myWin[k] == 5){
					window.alert('you win');
					over = true;
				}
			}
		}
			if(!over){
				me = !me;
				comAI(); //电脑
			}
		}
	}
	
	var comAI = function(){
		var myScore = [];
		var comScore = [];
		//最高分
		var max = 0;
		//最高分坐标
		var u = 0;
		var v = 0;

		for(var i =0;i<15;i++){
			myScore[i] = [];
			comScore[i] = [];
			for(var j =0;j<15;j++){
				myScore[i][j] = 0;
				comScore[i][j] = 0;
			}
		}
		//遍历棋盘
		for(var i =0;i<15;i++){
			for(var j=0;j<15;j++){
				if(chessBoard[i][j] == 0){
					//遍历所有赢法
					for(var k=0;k<count;k++){
						if(wins[i][j][k]){
							if(myWin[k] == 1){
								myScore[i][j] += 200;
							}else if(myWin[k] == 2){
								myScore[i][j] += 400;
							}else if(myWin[k] == 3){
								myScore[i][j] += 2000;
							}else if(myWin[k] == 4){
								myScore[i][j] += 1000;
							}
							if(com[k] == 1){
								comScore[i][j] += 220;
							}else if(com[k] == 2){
								comScore[i][j] += 420;
							}else if(com[k] == 3){
								comScore[i][j] += 2100;
							}else if(com[k] == 4){
								comScore[i][j] += 20000;
							}
						}
					}
					if(myScore[i][j] > max){
						max = myScore[i][j];
						u = i;
						v = j;
					}else if(myScore == max){
						if(comScore[i][j] > comScore[u][v]){
						u = i;
						v = j;
						}
					}
					if(comScore[i][j] > max){
						max = comScore[i][j];
						u = i;
						v = j;
					}else if(comScore == max){
						if(myScore[i][j] > myScore[u][v]){
						u = i;
						v = j;
						}
					}
				}
			}
		}

	// }

	// 落子 记录
	oneStep(u,v,false);
	chessBoard[u][v] = 2;
	for(var k=0;k<count;k++){
			if(wins[u][v][k]){
				com[k]++;
				myWin[k] = 6; //异常情况
				if(com[k] == 5){
					
					over = true;
					window.alert('computer win');
				}
			}
		}
			if(!over){
				me = !me;
				// comAI(); //电脑
	}
}



// 15,15  15,435 
// 45,15  45,435 

