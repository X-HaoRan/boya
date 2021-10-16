var that;
class Tab{
	constructor(id){
		that=this;
		this.main=document.querySelector(id);
		this.add=this.main.querySelector('.tian');
		this.ul=this.main.querySelector('.nav ul:first-child');
		this.fse=this.main.querySelector('.scon');		
		this.init();
	}

	init(){
		this.updatnode();
		this.add.onclick=this.addtab;
		for(var i=0;i<this.lis.length;i++){
			this.lis[i].index=i;
		this.lis[i].onclick=this.toggletab;
		this.remove[i].onclick=this.removetab;
		this.spans[i].ondblclick=this.edittab;
	}
};
	updatnode(){
		this.lis=this.main.querySelectorAll('li');
		this.sections=this.main.querySelectorAll('section');
		this.remove=this.main.querySelectorAll('.shan');
		this.spans=this.main.querySelectorAll('.nav li span:first-child');
	}
	toggletab(){
		that.clearclass();
		this.className='now';
		that.sections[this.index].className='now';
	}
	clearclass(){
		for(var i=0;i<this.lis.length;i++){
			this.lis[i].className='';
			this.sections[i].className='';
		}
	}
	addtab(){
		that.clearclass();
		var li='<li class="now"><span>新框</span><span class="shan"></span></li>';
		var section='<section class="now">区一</section>';
		that.fse.insertAdjacentHTML('beforeend',section);
		that.ul.insertAdjacentHTML('beforeend',li);
		that.init();
	}
	removetab(e){
		e.stopPropagation();
		var index=this.parentNode.index;
		that.lis[index].remove();
		that.sections[index].remove();
		that.init();
		if(document.querySelector('.now'))return;
		index--;
		that.lis[index]&&that.lis[index].click();
	}
	edittab(){
		window.getSelection?window.getSelection().removeAllRanges():document.selection.empty();
		this.innerHTML='<input type="text" style=width:60px;>'
	}
}
new Tab('#top');