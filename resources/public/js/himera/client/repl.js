goog.provide('himera.client.repl');
goog.require('cljs.core');
goog.require('clojure.zip');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('cljs.reader');
himera.client.repl.map__GT_js = (function map__GT_js(m){
var out = {};
var seq__3971_3977 = cljs.core.seq.call(null,m);
var chunk__3972_3978 = null;
var count__3973_3979 = 0;
var i__3974_3980 = 0;
while(true){
if((i__3974_3980 < count__3973_3979))
{var vec__3975_3981 = cljs.core._nth.call(null,chunk__3972_3978,i__3974_3980);
var k_3982 = cljs.core.nth.call(null,vec__3975_3981,0,null);
var v_3983 = cljs.core.nth.call(null,vec__3975_3981,1,null);
(out[cljs.core.name.call(null,k_3982)] = v_3983);
{
var G__3984 = seq__3971_3977;
var G__3985 = chunk__3972_3978;
var G__3986 = count__3973_3979;
var G__3987 = (i__3974_3980 + 1);
seq__3971_3977 = G__3984;
chunk__3972_3978 = G__3985;
count__3973_3979 = G__3986;
i__3974_3980 = G__3987;
continue;
}
} else
{var temp__4092__auto___3988 = cljs.core.seq.call(null,seq__3971_3977);
if(temp__4092__auto___3988)
{var seq__3971_3989__$1 = temp__4092__auto___3988;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3971_3989__$1))
{var c__3495__auto___3990 = cljs.core.chunk_first.call(null,seq__3971_3989__$1);
{
var G__3991 = cljs.core.chunk_rest.call(null,seq__3971_3989__$1);
var G__3992 = c__3495__auto___3990;
var G__3993 = cljs.core.count.call(null,c__3495__auto___3990);
var G__3994 = 0;
seq__3971_3977 = G__3991;
chunk__3972_3978 = G__3992;
count__3973_3979 = G__3993;
i__3974_3980 = G__3994;
continue;
}
} else
{var vec__3976_3995 = cljs.core.first.call(null,seq__3971_3989__$1);
var k_3996 = cljs.core.nth.call(null,vec__3976_3995,0,null);
var v_3997 = cljs.core.nth.call(null,vec__3976_3995,1,null);
(out[cljs.core.name.call(null,k_3996)] = v_3997);
{
var G__3998 = cljs.core.next.call(null,seq__3971_3989__$1);
var G__3999 = null;
var G__4000 = 0;
var G__4001 = 0;
seq__3971_3977 = G__3998;
chunk__3972_3978 = G__3999;
count__3973_3979 = G__4000;
i__3974_3980 = G__4001;
continue;
}
}
} else
{}
}
break;
}
return out;
});
himera.client.repl.go_compile = (function go_compile(code){
var data = cljs.core.atom.call(null,null);
var params = himera.client.repl.map__GT_js.call(null,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:url","/compile","\uFDD0:data",[cljs.core.str("{:expr "),cljs.core.str(code),cljs.core.str("}")].join(''),"\uFDD0:contentType","application/clojure; charset=utf-8","\uFDD0:async",false,"\uFDD0:type","POST","\uFDD0:dataType","text","\uFDD0:success",((function (data){
return (function (p1__4002_SHARP_){
return cljs.core.reset_BANG_.call(null,data,cljs.reader.read_string.call(null,p1__4002_SHARP_));
});})(data))
], true));
jQuery.ajax(params);
return cljs.core.deref.call(null,data);
});
himera.client.repl.on_validate = (function on_validate(input){
return !(cljs.core.empty_QMARK_.call(null,input));
});
himera.client.repl.build_msg = (function build_msg(title,msg,klass){
return [himera.client.repl.map__GT_js.call(null,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:msg",[cljs.core.str(title),cljs.core.str(msg)].join(''),"\uFDD0:className",klass], true))];
});
himera.client.repl.starts_with_QMARK_ = (function starts_with_QMARK_(o,s){
return cljs.core._EQ_.call(null,clojure.string.trim.call(null,s).slice(0,o.length),o);
});
himera.client.repl.is_comment_QMARK_ = (function is_comment_QMARK_(p1__4003_SHARP_){
return himera.client.repl.starts_with_QMARK_.call(null,";",p1__4003_SHARP_);
});
himera.client.repl.on_handle = (function on_handle(line,report){
if(cljs.core.truth_(himera.client.repl.is_comment_QMARK_.call(null,line)))
{return himera.client.repl.build_msg.call(null,"","","jquery-console-message-value");
} else
{var input = jQuery.trim(line);
var compiled = himera.client.repl.go_compile.call(null,input);
var temp__4090__auto__ = (function (){var and__3941__auto__ = compiled;
if(cljs.core.truth_(and__3941__auto__))
{return (new cljs.core.Keyword("\uFDD0:error")).call(null,compiled);
} else
{return and__3941__auto__;
}
})();
if(cljs.core.truth_(temp__4090__auto__))
{var err = temp__4090__auto__;
return himera.client.repl.build_msg.call(null,"Compilation error: ",err,"jquery-console-message-error");
} else
{try{return himera.client.repl.build_msg.call(null,"",cljs.core.pr_str.call(null,eval((new cljs.core.Keyword("\uFDD0:js")).call(null,compiled))),"jquery-console-message-value");
}catch (e4005){if((e4005 instanceof Error))
{var e = e4005;
return himera.client.repl.build_msg.call(null,"Compilation error: ",e,"jquery-console-message-error");
} else
{if("\uFDD0:else")
{throw e4005;
} else
{return null;
}
}
}}
}
});
himera.client.repl.go = (function go(){
return jQuery(document).ready((function (){
return controller = (function (){var G__4007 = jQuery("#console");
G__4007.console(himera.client.repl.map__GT_js.call(null,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:welcomeMessage","Himera REPL v0.2.5","\uFDD0:promptLabel","cljs.user> ","\uFDD0:commandValidate",himera.client.repl.on_validate,"\uFDD0:commandHandle",himera.client.repl.on_handle,"\uFDD0:autofocus",true,"\uFDD0:animateScroll",true,"\uFDD0:promptHistory",true], true)));
return G__4007;
})();
}));
});
goog.exportSymbol('himera.client.repl.go', himera.client.repl.go);
