/* Facebook */
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

/* Twitter */
var twitterscript=document.createElement('script');
twitterscript.setAttribute('src', '//platform.twitter.com/widgets.js');
document.getElementsByTagName('head')[0].appendChild(twitterscript);

/* AdSense */
var adscript = document.createElement('script');
adscript.setAttribute('src', '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js');
document.getElementsByTagName('head')[0].appendChild(adscript);