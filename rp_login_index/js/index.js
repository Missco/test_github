window.onload = function () {
	// nav
	//IE8及以下不支持
	var lists = document.getElementsByClassName('li-con');
	for (var i = 0; i < lists.length; i++) {
		var spans = lists[i].getElementsByTagName('span');
		for (var j = 1; j <= spans.length; j++) {
			if(j%3 != 0){
				spans[j-1].setAttribute('style','border-right:1px #999999 solid');
			}
		}
	}	
//左侧导航样式更改
	sideberOnclick();	

//注意这行代码需要在页面加载了id为main的元素才有效，所以需要放在最后面
	setMainHeight();
	window.addEventListener('resize', function() {
        setMainHeight();
    }, false);
}

function sideberOnclick(){
		var li=$('.left-sidebar>ul>li');
		var path_unclick;
		var path_click;
		var path_initial;
		var path_start;


		//点击后背景图片改变
		li.click(function(){
			//点击前背景图片初始化
			$(li).each(function(){
				path_initial=$(this).css('background-image');				
				var num=path_initial.indexOf("sideber_");
				path_start=path_initial.substring(0,num+10)+'1'+path_initial.substring(num+11,path_initial.length);
				$(this).css('background-image',path_start);
				$(this).css('background-color', '#323232');
				$(this).children('a').css("color","#999");
			});

			//点击后加载效果
			$(this).css('background-color', '#f5f5f5');
			$(this).children('a').css("color","#f37022");
			var liId=$(this).attr('id');
			if(liId!="li-2"){
				path_unclick=$(this).css('background-image');
				var num=path_unclick.indexOf("sideber_");/*sideber_在url中的初始位置*/
				if(path_unclick.substring(num+10,num+11)=='1'){
					path_click=path_unclick.substring(0,num+10)+'2'+path_unclick.substring(num+11,path_unclick.length);
					//console.log(path_click);
					$(this).css('background-image',path_click);
				}
				
			}
		});
	}

function setMainHeight() {
			var screenHeight = document.documentElement.clientHeight;
			document.getElementById('main').style['height'] = screenHeight -90 +'px';
			document.getElementById('left-footer').style.marginTop = screenHeight -260 +'px';
			
		}