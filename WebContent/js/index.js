//variaveis globais
var mainDe = 0;
var mainAte = 9;
var paginaSelecionada = 1;
var mainFiltros = "";
var mainAscending = "false";
var mainOrdem = "data";
var listaJogos;
var videoLink = "";

//inicializo o sdk do facebook
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/pt_BR/all.js#xfbml=1&appId=179155015544329";
  fjs.parentNode.insertBefore(js, fjs);
}
(document, 'script', 'facebook-jssdk'));

//inicializo o sdk do twitter
!function(d,s,id) {
	var js,fjs=d.getElementsByTagName(s)[0];
	if (!d.getElementById(id)) {
		js=d.createElement(s);
		js.id=id;
		js.src="//platform.twitter.com/widgets.js";
		fjs.parentNode.insertBefore(js,fjs);
	}
}
(document,"script","twitter-wjs");

function bindModalClick() {
	// seleciona os elementos a com atributo name="modal"
	$('a[name=modal]').click(function(e) {
		if (!isMobile()) {
			// cancela o comportamento padr‹o do link
			e.preventDefault();
	
			// armazena o atributo href do link
			var id = $(this).attr('href');
	
			// armazena a largura e a altura da tela
			var maskHeight = $(document).height();
			var maskWidth = $(window).width();
	
			// Define largura e altura do div#mask iguais ‡s dimens›es da tela
			$('#mask').css({
				'width' : maskWidth,
				'height' : maskHeight
			});
	
			// efeito de transi�‹o
			$('#mask').fadeIn(1000);
			$('#mask').fadeTo("slow", 0.8);
	
			// armazena a largura e a altura da janela
			var winH = $(window).height();
			var winW = $(window).width();
			
			// centraliza na tela a janela popup
			$(id).css('top', winH / 2 - $(id).height() / 2);
			$(id).css('left', winW / 2 - $(id).width() / 2);
			$('#videoPlayer').attr('src', e.srcElement.id);
			$('.fb-comments').attr('data-href', e.srcElement.id);
			// efeito de transi�‹o
			$(id).fadeIn(2000);
			CenterItem('#divPlayer');
		} else {
			location.href = e.srcElement.id;
		}
	});

	// se o bot‹oo fechar for clicado
	$('.window .close').click(function(e) {
		// cancela o comportamento padr‹o do link
		e.preventDefault();
		$('#videoPlayer').attr('src', '');
		$('#mask, .window').hide();
	});

	// se div#mask for clicado
	$('#mask').click(function() {
		$(this).hide();
		$('#videoPlayer').attr('src', '');
		$('.window').hide();
	});
}
function onLoad() {	
	listarJogos(1, "data", "", "false");
}

function reload() {
	location.href = "http://www.vejagol.com/";
}

function limparListaJogos() {
	$('#divListaJogos1').empty();
	$('#divListaJogos2').empty();
	$('#divListaJogos3').empty();
}

function ativarPagina(pagina) {
	for (var i = 0; i < $('#ulPaginas').children().length; i++) {
		if ($($('#ulPaginas').children()[i])[0].innerText == pagina) {
			$($('#ulPaginas').children()[i]).addClass('active');			
		} else {
			$($('#ulPaginas').children()[i]).removeClass('active');
		}
	}
	return true;
}

function onAnteriorClick() {
	if (paginaSelecionada > 1) {
		paginaSelecionada--;
		ativarPagina(paginaSelecionada);
		limparListaJogos();
		listarJogos(paginaSelecionada, mainOrdem, mainFiltros, mainAscending);
		return true;	
	}
	return false;
}

function onProximoClick() {			
	paginaSelecionada++;
	ativarPagina(paginaSelecionada);
	limparListaJogos();
	listarJogos(paginaSelecionada, mainOrdem, mainFiltros, mainAscending);
	return true;	
}

function onClickPaginacao(element) {
	if (element.innerHTML == '...') {
//		if (element.id == 'antes') {
//			for (var i = ($('#ulPaginas').children().length - 1); i >= 0; i--) {
//				if ($($('#ulPaginas').children()[i])[0].innerText != '...') {
//					$($('#ulPaginas').children()[i])[0].innerText = ($($('#ulPaginas').children()[i])[0].innerText - 1);
//				}
//			}
//		} else if (element.id == 'depois') {
//			for (var i = 0; i < $('#ulPaginas').children().length; i++) {
//				if ($($('#ulPaginas').children()[i])[0].innerText != '...') {
//					$($('#ulPaginas').children()[i])[0].innerText = ($($('#ulPaginas').children()[i])[0].innerText + 1);
//				}
//			}
//		}
	} else {
		paginaSelecionada = element.innerHTML;
		ativarPagina(paginaSelecionada);
		limparListaJogos();
		listarJogos(paginaSelecionada, mainOrdem, mainFiltros, mainAscending);		
	}
	return true;
}
	
//function getElementsByClassName(classname, node)  {
//    if(!node) node = document.getElementsByTagName("body")[0];
//    var a = [];
//    var re = new RegExp('\\b' + classname + '\\b');
//    var els = node.getElementsByTagName("*");
//    for(var i=0,j=els.length; i<j; i++)
//        if(re.test(els[i].className))a.push(els[i]);
//    return a;
//}
	
function addJogo(divId, jogo) {
	//var idJogo = jogo.timeCasa;
	var videoThumbnail = "";
	if (jogo.link.indexOf('youtube') != -1) {
		videoThumbnail = jogo.link.replace('http://www.youtube.com/embed/', '//i1.ytimg.com/vi/') + '/hqdefault.jpg';
	} else if (jogo.link.indexOf('dailymotion') != -1) {
		videoThumbnail = jogo.link.replace('embed', 'thumbnail');
	}
	$(divId).append(	
			'<div class="span4">'
			+ '<p>' + jogo.timeCasa + ' ' + jogo.placarCasa + ' X ' + jogo.placarVisitante + ' ' + jogo.timeVisitante + '</p>'
			+ '<img class="ui-corner-all" src="' + videoThumbnail + '" href="' + jogo.link + '"/>'
			+'<p>' + jogo.data.dayOfMonth + "/" + (jogo.data.month + 1) + "/" + jogo.data.year + '</p>'
			+ '<p><a id="' + jogo.link + '" class="btn" href="#dialog" name="modal">Assistir &raquo;</a></p>'
			+ '</div>');
}

		
function listarJogos(pagina, ordem, filtros, ascending) {
	var divNumber = 1;
	$('#divCarregando').show();
	mainDe = ((pagina-1) * 10);
	mainAte = (mainDe + 9);
	mainOrdem = ordem;
	mainFiltros = filtros;
	mainAscending = ascending;
	
	var listaJogosParameters = {"de" : mainDe, 
			"ate" : mainAte,
			"ordem" : mainOrdem,
			"filtros" : mainFiltros,
			"ascending" : mainAscending};
	$.ajax({
		  url: "../VejaGolWS/ListarJogosServlet",
		  type: "POST",
		  async: "true",
		  dataType: "json",	  
		  data: listaJogosParameters,	  
		  success: function(data) {
				if (data.result == "OK") {
					listaJogos = data.listaJogos;
					for (var i = 0; i < listaJogos.length; i++) {
						addJogo('#divListaJogos'+divNumber, data.listaJogos[i]);
						divNumber = Math.floor((i+1)/ 3) + 1;
					}									
				} else {
					//faz nada  
				}
				bindModalClick();
				$('#divCarregando').hide();
			}
		});
} 

function CenterItem(theItem){
    var winWidth=$(window).width();
    var winHeight=$(window).height();
    var windowCenter=winWidth/2;
    var itemCenter=$(theItem).width()/2;
    var theCenter=windowCenter-itemCenter;
    var windowMiddle=winHeight/2;
    var itemMiddle=$(theItem).height()/2;
    var theMiddle=windowMiddle-itemMiddle;
    winWidth>$(theItem).width() ? $(theItem).animate({'left':theCenter},300) : $(theItem).animate({'left':'0'},300);
    winHeight>$(theItem).height() ? $(theItem).animate({'top':theMiddle},300) : $(theItem).animate({'top':'0'},300);
}

//$(window).resize(function() {
//    CenterItem('#videoPlayer');
//});