function abrejanela(url,l,a)
{
	var x = parseInt((screen.width-l)/2);
	var y = parseInt((screen.height-a)/2);
	var win = window.open(url,'','width='+l+',height='+a);
	win.moveTo(x,y);
}

function isMobile(){
	var a = navigator.userAgent||navigator.vendor||window.opera;
	if(/android|avantgo|blackberry|blazer|compal|elaine|fennec|hiptop|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile|o2|opera m(ob|in)i|palm( os)?|p(ixi|re)\/|plucker|pocket|psp|smartphone|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce; (iemobile|ppc)|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a))
		return true;
	else
		return false;
}

function escapeHTML(s) {
	s.replace('<', "&lt;");
	s.replace('>', "&gt;");
	s.replace('&', "&amp;");
	s.replace('"', "&quot;");
	s.replace('à', "&agrave;");
	s.replace('À', "&Agrave;");
	s.replace('â', "&acirc;");
	s.replace('Â', "&Acirc;");
	s.replace('ä', "&auml;");
	s.replace('Ä', "&Auml;");
	s.replace('å', "&aring;");
	s.replace('Å', "&Aring;");
	s.replace('æ', "&aelig;");
	s.replace('Æ', "&AElig;");
	s.replace('ç', "&ccedil;");
	s.replace('Ç', "&Ccedil;");
	s.replace('é', "&eacute;");
	s.replace('É', "&Eacute;");
	s.replace('è', "&egrave;");
	s.replace('È', "&Egrave;");
	s.replace('ê', "&ecirc;");
	s.replace('Ê', "&Ecirc;");
	s.replace('ë', "&euml;");
	s.replace('Ë', "&Euml;");
	s.replace('ï', "&iuml;");
	s.replace('Ï', "&Iuml;");
	s.replace('ô', "&ocirc;");
	s.replace('Ô', "&Ocirc;");
	s.replace('ö', "&ouml;");
	s.replace('Ö', "&Ouml;");
	s.replace('ó', "&oacute;");
	s.replace('Ó', "&Oacute;");
	s.replace('ø', "&oslash;");
	s.replace('Ø', "&Oslash;");
	s.replace('ß', "&szlig;");
	s.replace('ù', "&ugrave;");
	s.replace('Ù', "&Ugrave;");
	s.replace('û', "&ucirc;");
	s.replace('Û', "&Ucirc;");
	s.replace('ü', "&uuml;");
	s.replace('Ü', "&Uuml;");
	s.replace('®', "&reg;");
	s.replace('©', "&copy;");
	s.replace('€', "&euro;");
	//be carefull with this one (non-breaking whitee space)
	//s.replace(' ', "&nbsp;");

	return s;
}

function getBandeira(liga) {
	if (liga == "Brasil") {
		return "img/br.gif";
	}
	if (liga == "Argentina") {
		return "img/ar.gif";
	}
	if (liga == "Portugal") {
		return "img/pt.gif.gif";
	}
	if (liga == "Italia") {
		return "img/it.gif";
	}
	if (liga == "Romenia") {
		return "img/ro.gif";
	}
	if (liga == "Grecia") {
		return "img/gr.gif";
	}
	if (liga == "Ucrania") {
		return "img/ua.gif";
	}
	if (liga == "Espanha") {
		return "img/es.gif";
	}
	if (liga == "Turquia") {
		return "img/tr.gif";
	}
	if (liga == "Bosnia") {
		return "img/ba.png";
	}
	if (liga == "Alemanha") {
		return "img/de.gif";
	}
	if (liga == "Peru") {
		return "img/pe.gif";
	}
	if (liga == "Polonia") {
		return "img/pl.gif";
	}
	if (liga == "Franca") {
		return "img/fr.gif";
	}
	if (liga == "Inglaterra") {
		return "img/england.gif";
	}
	if (liga == "Chipre") {
		return "img/cy.gif";
	}
	if (liga == "Sui") {
		return "img/ch.gif";
	}
	if (liga == "Bulgaria") {
		return "img/bg.gif";
	}
	if (liga == "Montenegro") {
		return "img/montenegro.png";
	}
	if (liga == "Holanda") {
		return "img/nl.gif";
	}
	if (liga == "Russia") {
		return "img/ru.gif";
	}
	if (liga == "Mexico") {
		return "img/mx.gif";
	}
	if (liga == "Costa Rica") {
		return "img/cr.gif";
	}
	if (liga == "Colombia") {
		return "img/co.gif";
	}
	if (liga == "Equador") {
		return "img/eq.gif";
	}
	if (liga == "Bolivia") {
		return "img/bo.gif";
	}
	if (liga == "Arabia Saudita") {
		return "img/sarab.gif";
	}
	if (liga == "Estados Unidos") {
		return "img/us.gif";
	}
	if (liga == "Marrocos") {
		return "img/marocco.gif";
	}
	if (liga == "Israel") {
		return "img/il.gif";
	}
	if (liga == "Rep") {
		return "img/cz.gif";
	}
	if (liga == "Champions League") {
		return "img/champ.gif";
	}
	if (liga == "Irao") {
		return "img/iran.png";
	}
	if (liga == "Servia") {
		return "img/sb.gif";
	}
	if (liga == "FIFA") {
		return "img/fifa.gif";
	}
	if (liga == "Paraguay") {
		return "img/py.gif";
	}
	if (liga == "Croacia") {
		return "img/hr.gif";
	}
	if (liga == "Venezuela") {
		return "img/ve.gif";
	}
	if (liga == "Guatemala") {
		return "img/guatemala.png";
	}
	if (liga == "Belgica") {
		return "img/be.gif";
	}
	if (liga == "Australia") {
		return "img/au.gif";
	}
	if (liga == "Japao") {
		return "img/jp.gif";
	}
	if (liga == "Chile") {
		return "img/cl.gif";
	}
	if (liga == "Coreia do Sul") {
		return "img/south_korea.png";
	}
	if (liga == "Austria") {
		return "img/at.gif";
	}
	if (liga == "Outras Ligas") {
		return "img/world.gif";
	}
	if (liga == "Uruguai") {
		return "img/uy.gif";
	}
	if (liga == "Dinamarca") {
		return "img/dk.gif";
	}
	if (liga == "Liga Europa") {
		return "img/europa.gif";
	}
	if (liga == "Hungria") {
		return "img/hu.gif";
	}
	if (liga == "Latvia") {
		return "img/latvia.png";
	}
	if (liga == "Finlandia") {
		return "img/finland.png";
	}
	if (liga == "Noruega") {
		return "img/no.gif";
	}
	if (liga == "Suecia") {
		return "img/se.gif";
	}
	if (liga == "UEFA") {
		return "img/uefa.gif";
	}
	if (liga == "Amigavel") {
		return "img/friendly.gif";
	}
	if (liga == "Copa Libertadores") {
		return "img/libertadores.gif";
	}
}

