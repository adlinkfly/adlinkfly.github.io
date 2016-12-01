/* Facebook */
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

/* AdSense */
/*var adscript = document.createElement('script');
adscript.setAttribute('src', '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js');
document.getElementsByTagName('head')[0].appendChild(adscript);

/* IncludeHTML ver 1.2 */
function IncludeHTML() {
  var z, i, a, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    if (z[i].getAttribute("include-html")) {
      a = z[i].cloneNode(false);
      file = z[i].getAttribute("include-html");
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          a.removeAttribute("include-html");
          a.innerHTML = this.responseText;
          z[i].parentNode.replaceChild(a, z[i]);
          IncludeHTML();
        }
      };      
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
}