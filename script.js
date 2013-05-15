		//----------------Center Div-----------------------//
		function CenterItem (){
			$alturaDaJanelaPor2 = $(window).height() / 2;
				//console.log(" altura da janela "+$alturaDaJanelaPor2+"px");
			$laguraDaJanelaPor2 = $(window).width() / 2;
				//console.log(" largura da janela "+$alturaDaJanelaPor2+"px");
			$alturaObjeto = $('#contentHelicoptero').height() / 2;
				//console.log("altura do objeto "+$alturaObjeto+"px");
			$larguraObjeto = $('#contentHelicoptero').width() / 2;
				//console.log("largura do objeto "+$alturaObjeto+"px");
			$AlturaExata = $alturaDaJanelaPor2 - $alturaObjeto; 
				//console.log("altura exata "+$AlturaExata+"px");
			$LarguraExata = $laguraDaJanelaPor2 - $larguraObjeto;
				//console.log("largura exata "+$LarguraExata+"px");

			$('#contentHelicoptero').css({
				"position" : "absolute",
				"top" : +$AlturaExata+ "px",
				"left" : +$LarguraExata+ "px"
							
						});

		}
		//----------------Key press functions-------------------------//
		function leftArrowPressed() {
			var element = document.getElementById("contentHelicoptero");			
			if(parseInt(element.style.left) > 5){
				element.style.left = parseInt(element.style.left) - 15 + 'px';
			}else{
				return false;
			}
			//console.log("left", $(window).width());
		}
		function rightArrowPressed() {
			var element = document.getElementById("contentHelicoptero");
			var windowWidth = $(window).width();
			if(parseInt(element.style.left) < windowWidth - 350){
				element.style.left = parseInt(element.style.left) + 15 + 'px';
			}else{
				return false;
			}
			//console.log("right" , parseInt(element.style.left));

		}
		function upArrowPressed() {
			var element = document.getElementById("contentHelicoptero");
			if(parseInt(element.style.top) > 10){
				element.style.top = parseInt(element.style.top) - 15 + 'px';
			}else{
				return false;
			}
			//console.log("Up");
		}
		function downArrowPressed() {
			var element = document.getElementById("contentHelicoptero");
			var windowHeight = $(window).height();
			if(parseInt(element.style.top) < (windowHeight - 350) ){
				element.style.top = parseInt(element.style.top) + 15 + 'px';
			}else{
				return false;
			}
			//console.log("down");
		}

		(function(d, s, id) {
		  var js, fjs = d.getElementsByTagName(s)[0];
		  if (d.getElementById(id)) return;
		  js = d.createElement(s); js.id = id;
		  js.src = "//connect.facebook.net/pt_BR/all.js#xfbml=1&appId=249885715079500";
		  fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));

$(function(){		
	CenterItem();

	document.onkeydown = function(evt) {
	evt = evt || window.event; 
		switch (evt.keyCode) {
			case 37:
			leftArrowPressed();
			break;
			case 39:
			rightArrowPressed();
			break;
			case 38:
			upArrowPressed();
			break;
			case 40:
			downArrowPressed();
			break;
		}
	};			
});
//----------------window resize-------------------------//
$(window).resize(function() {
	CenterItem();
});