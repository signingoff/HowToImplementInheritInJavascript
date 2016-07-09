Function.prototype.before=function(beforefn){
	var __self=this;
	return function(){
		beforefn.apply(this,arguments);
		var ret=__self.apply(this,arguments);
		return ret;
	};
}

Function.prototype.after=function(afterfn){
	var __self=this;
	return function(){
		var ret=_self.apply(this,arguments);
		afterfn.apply(this,arguments);
		return ret;
	}
}