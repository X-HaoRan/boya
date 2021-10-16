window.addEventListener('load',function(){
	var ul=document.querySelector('.index');
	var ol=document.querySelector('.ol');
	setInterval(function(){
	function animate(obj,target,collback){
			clearInterval(obj.times);	
			obj.times=setInterval(function(){	
				if(obj.offsetLeft==target){
					clearInterval(obj.times);
					if(collback){
						collback()
					}
				}
			var stop=(target-obj.offsetLeft)/10;
			stop=stop>0?Math.ceil(stop):Math.floor(stop);
			obj.style.left=obj.offsetLeft+stop+'px';
		},30)
		};
		for(k=0;k<ol.children.length;k++){
		ol.children[k].setAttribute('index',k);
	ol.children[k].addEventListener('click',function(){
		for(i=0;i<ol.children.length;i++){
			ol.children[i].className='';
		}
		this.className='now'
		var index=this.getAttribute('index');
		if(index==0){
			animate(ul,0)
		}else if(index==1){
			animate(ul,-1000)
		}else if(index==2){
			animate(ul,-2000)
		}
	})
}
for(var i=0;i<ol.children.length;i++){
		if(ul.offsetLeft==0){
			animate(ul,-1000)	
			ol.children[i].className='';
			ol.children[1].className='now';
		}else if(ul.offsetLeft==-1000){
			animate(ul,-2000)
			ol.children[i].className='';
			ol.children[2].className='now';
		}else if(ul.offsetLeft==-2000){
			animate(ul,0)
			ol.children[i].className='';
			ol.children[0].className='now';
		}
	}

	},5000)
});