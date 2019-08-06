$(window).load(function(){

	var win_w = $(window).width();
	var win_h = $(window).height();
	var doc_h = $(document).height();

/*------ �� / ������ ���� ------*/

	var gnb_btn = $(".gnb>li>a");
	var gnb_cont_all = gnb_btn.next(".s_gnb");
	gnb_btn.on("click",function(){
		var cont = $(this).next(":hidden");
		gnb_cont_all.slideUp("fast");
		cont.slideDown("fast");

		$(".gnb>li>a").each(function(){
			$(this).find("img").attr("src",$(this).find("img").attr("src").replace("_on","_off"));
		});
		$(this).find("img").attr("src",$(this).find("img").attr("src").replace("_off","_on"));
	});

	$(".collection_list ul li").on("mouseenter",function(){
		$(this).find(".cover").stop().animate({opacity:0.8},200);
		$(this).find(".item_name").stop().animate({opacity:0.8},200);
	}).on("mouseleave",function(){
		$(this).find(".cover").stop().animate({opacity:0},200);
		$(this).find(".item_name").stop().animate({opacity:0},200);
	});

	$(".wf-box").on("mouseenter",function(){
		$(".img",this).find(".cover").stop().animate({opacity:1},200);
		$(".img",this).find(".glasses").stop().animate({opacity:1},200);
		$(".star_list .img .glasses").each(function(){
			var glasses_h = $(this).height();
			glasses_h = glasses_h/2
			$(this).css({"margin-top":-glasses_h+"px"});
		});
	}).on("mouseleave",function(){
		$(".img",this).find(".cover").stop().animate({opacity:0},200);
		$(".img",this).find(".glasses").stop().animate({opacity:0},200);
	});



	/*�ν�Ÿ�׷�*/
	$('.instagram_tab').flexslider({
		animation: "slide",
		slideshow : false,
		itemWidth: 273,
		itemMargin: 0,
		minItems: 2,
		maxItems: 5
	});

	$(".instagram_tab .flex-viewport ul li").on("click",function(){
		var a = $(this).index();
//		$(".instagram_cont>div").hide();
//		$(".instagram_cont>div").eq(a).show();
		$(".instagram_tab .flex-viewport ul li").removeClass("tab_on");
		$(this).addClass("tab_on");
		return false;
	});

/*
	$(".instagram_list ul li").on("click",function(){
		$(".insta_popup_wrap").show();
		$(".insta_popup_bg").show();
		return false;
	});
*/
	$(".insta_close").on("click",function(){
		$(".insta_popup_wrap").hide();
		$(".insta_popup_bg").hide();
		return false;
	});





/*------ �� ------*/
	if (win_w >768 ){

	/*gnb*/
	$(".menu_open").on("click",function(){
		$(".menu_open").hide();
		var gnb_h = $(".gnb_bg").height();
		if (gnb_h < doc_h){
			$(".gnb_bg").css({"height":doc_h-"px","opacity":"1"});
		} else {
			$(".gnb_bg").css({"height":gnb_h-"px","opacity":"1"});
		}
		$(".gnb_bg").stop().fadeIn("300");
		return false;
	});

	$(".gnb_wrap_close").on("click",function(){
		$(".menu_open").show();
		$(".gnb_bg").stop().fadeOut("200");
		return false;
	});


	$(".main_vs_list ul").carouFredSel({
		prev : ".m_vs_prev",
		next : ".m_vs_next",
		responsive : true,
		swipe:{onTouch:true,onMouse:true},
		items:{height:"variable",visible:1},
		scroll: {
		timeoutDuration:3000,
		duration:500,
		fx:"crossfade"
			}
	});


	var wrap_h = $("#wrap").height();
	if (win_h > wrap_h){
		var win_h = win_h-350;
		$(".sub_container").css({"height":win_h+"px"});
	}



	/*�귣�� �÷���*/
	var collection_w = $(".collection_list").width();
	var collection_big_w = Math.round((collection_w*49)/100);
	var collection_big_h = Math.round((collection_big_w*89.19)/100);
	var collection_small_w = Math.round((collection_w*24)/100);
	var collection_small_h = Math.round((collection_small_w*89.19)/100);
	var collection_mg = collection_big_h-((collection_small_h)*2)

	$(".collection_list ul li img").css({"width":collection_small_w+"px","height":collection_small_h+"px"});
	$(".collection_list .big img").css({"width":collection_big_w+"px","height":collection_big_h+"px"});
	$(".collection_list ul li").css({"margin-bottom":collection_mg+"px"});

	/*�ν�Ÿ�׷�*/
	var instar_w = $(".instagram_list").width();
	var instar_li_w = Math.round((instar_w*24.4)/100);
	var instar_li_h = Math.round((instar_li_w*88.95)/100);
	$(".instagram_list ul li img").css({"width":instar_li_w+"px","height":instar_li_h+"px"});

	/*���̽���*/
	var facebook_w = $(".playing_facebook").width();
	var facebook_li_w = Math.round((facebook_w*24.4)/100);
	var facebook_li_h = Math.round((facebook_li_w*100.8)/100);
	$(".playing_facebook .list .img img").css({"width":facebook_li_w+"px","height":facebook_li_h+"px"});

	/*star*/
	$("<div class='wf-cont_2'></div>").insertAfter(".wf-cont_1");
	$("<div class='wf-cont_3'></div>").insertAfter(".wf-cont_2");

	for (var i=1; i<=1000; i++){
		var num = i% 3;
		if (num==1){
			var a = i
		} else if (num == 2){
			var b = i
		} else if (num == 0){
			var c = i
		}
		$(".wf-cont_1>div").eq(a-1).addClass("li_1");
		$(".wf-cont_1>div").eq(b-1).addClass("li_2");
		$(".wf-cont_1>div").eq(c-1).addClass("li_3");
	}

		$(".wf-cont_1>div.li_2").appendTo(".wf-cont_2");
		$(".wf-cont_1>div.li_3").appendTo(".wf-cont_3");



/*------ �º��� ------*/






/*------ ������ ------*/
} else if (win_w < 768){

	/*gnb*/
	$(".gnb_open").on("click",function(){
		var gnb_h = $(".gnb_bg").height();
		if (gnb_h < doc_h){
			$(".gnb_bg").css({"height":doc_h+"px","opacity":"1"});
		} else {
			$(".gnb_bg").css({"height":gnb_h+"px","opacity":"1"});
		}

		$(".gnb_bg").stop().fadeIn("300");
		return false;
	});

	$(".gnb_wrap_close").on("click",function(){
		$(".gnb_bg").stop().fadeOut("200");
		return false;
	});

	$('.mobile_main_visual').flexslider({
		//pausePlay: true,
	});


	/*�귣�� �÷���*/
	var collection_w = $(".collection_list").width();
	var collection_big_w = Math.round((collection_w*99)/100);
	var collection_big_h = Math.round((collection_big_w*89.19)/100);
	var collection_small_w = Math.round((collection_w*49)/100);
	var collection_small_h = Math.round((collection_small_w*89.19)/100);
	var collection_mg = collection_big_h-((collection_small_h)*2)

	$(".collection_list ul li img").css({"width":collection_small_w+"px","height":collection_small_h+"px"});
	$(".collection_list .big img").css({"width":collection_big_w+"px","height":collection_big_h+"px"});
	$(".collection_list ul li").css({"margin-bottom":collection_mg+"px"});


	/*�ν�Ÿ�׷�*/
	var instar_w = $(".instagram_list").width();
	var instar_li_h = Math.round((instar_w*88.95)/100);
	$(".instagram_list ul li img").css({"height":instar_li_h+"px"});

	/*���̽���*/
	var facebook_w = $(".playing_facebook").width();
	var facebook_li_h = Math.round((facebook_w*100.8)/100);
	$(".playing_facebook .list .img img").css({"width":facebook_w+"px","height":facebook_li_h+"px"});



}



	/*------ ���������� ------*/
	$(window).resize(function(){
		var win_w = $(window).width();
		var win_h = $(window).height();
		var doc_h = $(document).height();

		$(".wf-box").on("mouseenter",function(){
			$(".img",this).find(".cover").stop().animate({opacity:1},200);
			$(".img",this).find(".glasses").stop().animate({opacity:1},200);
		}).on("mouseleave",function(){
			$(".img",this).find(".cover").stop().animate({opacity:0},200);
			$(".img",this).find(".glasses").stop().animate({opacity:0},200);
		});

		$(".star_list .img .glasses").each(function(){
			var glasses_h = $(this).height();
			glasses_h = glasses_h/2
			$(this).css({"margin-top":-glasses_h+"px"});
		});

		var instar_w = $(".instagram_list").width();





		/*------ �� ------*/
			if (win_w > 768 ){

			/*gnb*/
			$(".menu_open").on("click",function(){

				var gnb_h = $(".gnb_bg").height();
				if (gnb_h < doc_h){
					$(".gnb_bg").css({"height":doc_h+"px","opacity":"1"});
				} else {
					$(".gnb_bg").css({"height":gnb_h+"px","opacity":"1"});
				}

				$(".gnb_bg").stop().fadeIn("300");
				return false;
			});

			$(".gnb_wrap_close").on("click",function(){
				$(".gnb_bg").stop().fadeOut("200");
				return false;
			});

			var wrap_h = $("#wrap").height();
			if (win_h > wrap_h){
				var win_h = win_h-350;
				$(".sub_container").css({"height":win_h+"px"});
			}

			/*$('.main_visual').flexslider({
			})*/

			$(".main_vs_list ul").carouFredSel({
				prev : ".m_vs_prev",
				next : ".m_vs_next",
				responsive : true,
				swipe:{onTouch:true,onMouse:true},
				items:{height:"variable",visible:1},
				scroll: {
				timeoutDuration:3000,
				duration:500,
				fx:"crossfade"
					}
			});

			/*�귣�� �÷���*/
			var collection_w = $(".collection_list").width();
			var collection_big_w = Math.round((collection_w*49)/100);
			var collection_big_h = Math.round((collection_big_w*89.19)/100);
			var collection_small_w = Math.round((collection_w*24)/100);
			var collection_small_h = Math.round((collection_small_w*89.19)/100);
			var collection_mg = collection_big_h-((collection_small_h)*2)

			$(".collection_list ul li img").css({"width":collection_small_w+"px","height":collection_small_h+"px"});
			$(".collection_list .big img").css({"width":collection_big_w+"px","height":collection_big_h+"px"});
			$(".collection_list ul li").css({"margin-bottom":collection_mg+"px"});

			/*�ν�Ÿ�׷�*/
			var instar_li_w = Math.round((instar_w*24.4)/100);
			var instar_li_h = Math.round((instar_li_w*88.95)/100);
			$(".instagram_list ul li img").css({"width":instar_li_w+"px","height":instar_li_h+"px"});

			/*���̽���*/
			var facebook_w = $(".playing_facebook").width();
			var facebook_li_w = Math.round((facebook_w*24.4)/100);
			var facebook_li_h = Math.round((facebook_li_w*100.8)/100);
			$(".playing_facebook .list .img img").css({"width":facebook_li_w+"px","height":facebook_li_h+"px"});







		/*------ �º��� ------*/

		/*------ ������ ------*/
		} else if (win_w < 768){

			/*gnb*/
			$(".gnb_open").on("click",function(){

				var gnb_h = $(".gnb_bg").height();
				if (gnb_h < doc_h){
					$(".gnb_bg").css({"height":doc_h+"px","opacity":"1"});
				} else {
					$(".gnb_bg").css({"height":gnb_h+"px","opacity":"1"});
				}

				$(".gnb_bg").stop().fadeIn("300");
				return false;
			});

			$(".gnb_wrap_close").on("click",function(){
				$(".gnb_bg").stop().fadeOut("200");
				return false;
			});

			$('.mobile_main_visual').flexslider({
				//pausePlay: true,
			});

			/*�귣�� �÷���*/
			var collection_w = $(".collection_list").width();
			var collection_big_w = Math.round((collection_w*99)/100);
			var collection_big_h = Math.round((collection_big_w*89.19)/100);
			var collection_small_w = Math.round((collection_w*49)/100);
			var collection_small_h = Math.round((collection_small_w*89.19)/100);
			var collection_mg = collection_big_h-((collection_small_h)*2)

			$(".collection_list ul li img").css({"width":collection_small_w+"px","height":collection_small_h+"px"});
			$(".collection_list .big img").css({"width":collection_big_w+"px","height":collection_big_h+"px"});
			$(".collection_list ul li").css({"margin-bottom":collection_mg+"px"});

			/*�ν�Ÿ�׷�*/
			var instar_li_h = Math.round((instar_w*88.95)/100);
			$(".instagram_list ul li img").css({"width":instar_w+"px","height":instar_li_h+"px"});

			/*���̽���*/
			var facebook_w = $(".playing_facebook").width();
			var facebook_li_h = Math.round((facebook_w*100.8)/100);
			$(".playing_facebook .list .img img").css({"width":facebook_w+"px","height":facebook_li_h+"px"});





		}


	});



});


function quick2(q, d) {
	var q = $(q);
	var mt = q.position().top;
	if (d == null) d = 0;

	$(window).on("scroll", function() {
		var st = $(document).scrollTop();
		var v = st+mt-d;
		if (d==0 || st > d) { //������ ���ų� ������ �̻��� �����϶�
			q.stop().animate({top:v});
		} else { //������ ������ �����϶�
			q.stop().animate({top:mt});
		}
	});
}


function openpop(popWidth,popHeight,url){
	var winHeight = document.body.clientHeight;	// ����â�� ����
	var winWidth = document.body.clientWidth;	// ����â�� �ʺ�
	var winX = window.screenX || window.screenLeft || 0;// ����â�� x��ǥ
	var winY = window.screenY || window.screenTop || 0;	// ����â�� y��ǥ

	var popX = winX + (winWidth - popWidth)/2;
	var popY = winY + (winHeight - popHeight)/2;
	window.open(url,"","width="+popWidth+"px,height="+popHeight+"px,top="+popY+",left="+popX);
}
