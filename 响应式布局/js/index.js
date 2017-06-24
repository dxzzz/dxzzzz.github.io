$(function  () {
	// 轮播图功能函数
	function change() {
		i = i + 1;
		if (i == $('.pics li').length) {
			i = 0;
		}
		change_pic();
	}
	function change_pic() {
		//获取到下一个li元素显示,将其他li元素隐藏.
		$('.pics li').eq(i).fadeIn(100).siblings('li').fadeOut(100);
	}
	
	var i = 0;//图片标识
	var time = setInterval(change, 2000);

	// 鼠标点击切换
	$('.change_next').click(function () {
		change();
	});
	$('.change_prev').click(function () {
		i = i - 1;
		if (i < 0) {
			i = $('.pics li').length - 1;
		}
		change_pic();
	});

	// 光标移动在界面上,停止定时器,显示左右切换标识
	$('.pic_change').mouseover(function () {
		clearInterval(time);
		$(this).children().show();
	});

	// 光标移出界面,开启定时器,隐藏左右切换标识
	$('.pic_change').mouseout(function () {
		time = setInterval(change, 2000);
		$(this).children().hide();
	});

	//菜单显示
	$('.menu_list').children().hover(function () {
		$(this).css("background","#ff6700");
    	// $(this).children(".banner_menu_content").css("border","1px solid #F0F0F0").show();
    	$(this).children(".menu_content").show();
	},function () {
		$(this).css("background","none");
    	// $(this).children(".banner_menu_content").css("border","0px solid #F0F0F0").hide();
    	$(this).children(".menu_content").hide();
	});

})