//inicializo o sdk do facebook
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
	  return;
  }
  js = d.createElement(s); 
  js.id = id;
  js.src = "//connect.facebook.net/pt_BR/all.js#xfbml=1&appId=179155015544329";
  fjs.parentNode.insertBefore(js, fjs);
}
(document, 'script', 'facebook-jssdk'));