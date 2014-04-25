

function setupper()
{
script = document.createElement("script");
script.type = "text/javascript";
script.src = "https://script.googleusercontent.com/macros/echo?user_content_key=FWHhDj6hMPlDFEUsn0YIn53tnCWXEg07RGMSqU29aslrvyixk6I5V223_Tr4GOpn8MtoCOv0bWg8LDRDascvfR1utoFgANrtm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFPy_CinLYpS-Kqj8a_RHpj3JKFSKb3u7SxNDYNbHavDb0Hev3Xq6zlapsNmAZ9Jc-PdjoYnFwe0&lib=MviSMgd3EMhpsrOYW7jqhosOmORtKAZOr?callback=loader&set=post";
}
//--------------------------------------------
function addMonths(date, months) {
  date.setMonth(date.getMonth() + months);
  return date;
}
//----------------------------------------------
function loader(request)
{
//Begin JSON load
	
	document.getElementById("pinned").innerHTML="<h1 class=\"content-subhead\">Pinned Posts</h1>";
	document.getElementById("recent").innerHTML="<h1 class=\"content-subhead\">Recent Posts</h1>";
	
	var d = new Date();
	var v = addMonths(new Date(), -3); //this is kinda ugly
	var cpost = 0;
	var posts = JSON.parse(request);
	for (i=0;i<posts.posts.length;i++){
		cpost=posts.posts[i];
		if ((cpost.EventDate.split("/")[2]*10000+cpost.EventDate.split("/")[0]*100+cpost.EventDate.split("/")[1]*1)>((d.getFullYear()*10000)+(d.getMonth()+1)*100+d.getDate())){
			document.getElementById("pinned").innerHTML+=
			"<section class=\"post\">"+//apparently, one can't separate strings with '\n' in JS
                   "<header class=\"post-header\">"+
                       "<img class=\"post-avatar\" alt=\"Val&#x27;s avatar\" height=\"48\" width=\"48\" src=\"Val.JPG\">"+
                       "<h2 class=\"post-title\">"+cpost.Title.replace(/\\\'/g,"\'")+" "+cpost.EventDate.replace(/\\\'/g,"\'")+"</h2>"+
                       "<p class=\"post-meta\">"+
                           "By <a href=\"#\" class=\"post-author\">"+cpost.Author.replace(/\\\'/g,"\'")+"</a>"+
                       "</p>"+
                   "</header>"+
                   "<div class=\"post-description\">"+"<p>"+cpost.Content.replace(/\\\'/g,"\'")+"</p>"+"</div>"+
               "</section>";
		}
		else if((cpost.EventDate.split("/")[2]*10000+cpost.EventDate.split("/")[0]*100+cpost.EventDate.split("/")[1]*1)>((v.getFullYear()*10000)+(v.getMonth()+1)*100+v.getDate())){
			document.getElementById("recent").innerHTML+=
			"<section class=\"post\">"+//apparently, one can't separate strings with '\n' in JS
                   "<header class=\"post-header\">"+
                       "<img class=\"post-avatar\" alt=\"Val&#x27;s avatar\" height=\"48\" width=\"48\" src=\"Val.JPG\">"+
                       "<h2 class=\"post-title\">"+cpost.Title.replace(/\\\'/g,"\'")+" "+cpost.EventDate.replace(/\\\'/g,"\'")+"</h2>"+
                       "<p class=\"post-meta\">"+
                           "By <a href=\"#\" class=\"post-author\">"+cpost.Author.replace(/\\\'/g,"\'")+"</a>"+
                       "</p>"+
                   "</header>"+
                   "<div class=\"post-description\">"+"<p>"+cpost.Content.replace(/\\\'/g,"\'")+"</p>"+"</div>"+
               "</section>";
			}
	}
}
