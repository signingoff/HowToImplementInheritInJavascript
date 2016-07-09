var cost=(function(){
	var arg=[];
	
	return function(){
		if(arguments.length==0)
		{
	        var total=0;		
			for(var i=0;i<arg.length;i++){
				total=total+arg[i];
			}
			arg=[];
			return total;
		}else{
			[].push.apply(arg,arguments);
		}
	}
})();

var curry=function(fn){
	var args=[];
	return function(){
		if(arguments.length==0){
			for(var i=0;i<args.length;i++){
				return fn.apply(this,arguments);
			}
		}else{
			[].push.apply(this,arguments);
			return arguments.callee;
		}
	}
}