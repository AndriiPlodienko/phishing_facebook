;/*FB_PKG_DELIM*/

__d("throttle",["TimeSlice","TimeSliceInteractionSV","setTimeout","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g){function a(a,b,d){return h(a,b,d,c("setTimeout"),!1)}Object.assign(a,{acrossTransitions:function(a,b,d){return h(a,b,d,c("setTimeoutAcrossTransitions"),!1)},withBlocking:function(a,b,d){return h(a,b,d,c("setTimeout"),!0)},acrossTransitionsWithBlocking:function(a,b,d){return h(a,b,d,c("setTimeoutAcrossTransitions"),!0)}});function h(a,b,d,e,f){var g=b==null?100:b,h,i=null,j=0,k=null,l=[],m=c("TimeSlice").guard(function(){j=Date.now();if(i){var b=function(b){a.apply(h,b)}.bind(null,i),c=l.length;while(--c>=0)b=l[c].bind(null,b);l=[];b();i=null;k=e(m,g)}else k=null},"throttle_"+g+"_ms",{propagationType:c("TimeSlice").PropagationType.EXECUTION,registerCallStack:!0});m.__SMmeta=a.__SMmeta;return function(){c("TimeSliceInteractionSV").ref_counting_fix&&l.push(c("TimeSlice").getGuardedContinuation("throttleWithContinuation"));for(var a=arguments.length,b=new Array(a),n=0;n<a;n++)b[n]=arguments[n];i=b;h=this;d!==void 0&&(h=d);(k===null||Date.now()-j>g)&&(f===!0?m():k=e(m,0))}}b=a;g["default"]=b}),98);