window.addEventListener('load',function(){
	// 顶部
var ul=document.querySelector('.gg').querySelector('ul');
var one=ul.querySelector('.one');
var tow=ul.querySelector('.tow');
var as=document.querySelector('.as');
var ds=document.querySelector('.ds');
var ting=null;
function az(sx,dc){
sx.addEventListener('mouseover',function(){
	dc.style.display='block';
	clearTimeout(ting)
	ting=setInterval(function(){
	dc.style.top=dc.offsetTop-1+'px';
	if(dc.offsetTop<=25){
		clearTimeout(ting);
	}
	},3)
});}
az(one,as)
az(tow,ds)
function eq(we,ww){
	we.addEventListener('mouseout',function(){
		ww.style.display='none';
		ww.style.top=60+'px';
	})
}
eq(one,as);
eq(tow,ds);
// 顶部
var ull=document.querySelector('.zhutu').querySelector('ul');
var zuo=document.querySelector('.zhutu').querySelector('.zuo');
var you=document.querySelector('.zhutu').querySelector('.you');
time2=null;
you.onclick=function(){
	clearTimeout(time2);
	time2=setInterval(function(){
		if(ull.offsetLeft<=0){
		ull.style.left=ull.offsetLeft-21+'px';
		if(ull.offsetLeft==-2562){
			clearTimeout(time2);
		}
		};
		if(ull.offsetLeft<-2562){
		ull.style.left=ull.offsetLeft-21+'px';
		if(ull.offsetLeft<-5124){
		clearTimeout(time2);
}
}
},0.5);
};

});