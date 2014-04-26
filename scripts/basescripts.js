window.onload=function(){




};

function srcedit(){
var allimgs = document.getElementsByTagName("IMG");
for (var i=0;i<allimgs.length;i++){
allimgs[i].src="/images/"+allimgs[i].src;
}
}

