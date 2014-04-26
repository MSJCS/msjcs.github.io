window.onload=function(){
srcedit();//if we're too lazy to change them all



};

function srcedit(){
var allimgs = document.getElementsByTagName("IMG");
for (var i=0;i<allimgs.length;i++){
allimgs[i].src="/images/"+allimgs[i].src;
}
}

