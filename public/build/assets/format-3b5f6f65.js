var b={},y={get exports(){return b},set exports(c){b=c}};(function(c){(function(){var o;o=c.exports=i,o.format=i,o.vsprintf=k,typeof console<"u"&&typeof console.log=="function"&&(o.printf=x);function x(){console.log(i.apply(null,arguments))}function k(r,p){return i.apply(null,[r].concat(p))}function i(r){for(var p=1,I=[].slice.call(arguments),t=0,S=r.length,e="",a,f=!1,s,u,l=!1,d,n=function(){return I[p++]},v=function(){for(var g="";/\d/.test(r[t]);)g+=r[t++],a=r[t];return g.length>0?parseInt(g):null};t<S;++t)if(a=r[t],f)switch(f=!1,a=="."?(l=!1,a=r[++t]):a=="0"&&r[t+1]=="."?(l=!0,t+=2,a=r[t]):l=!0,d=v(),a){case"b":e+=parseInt(n(),10).toString(2);break;case"c":s=n(),typeof s=="string"||s instanceof String?e+=s:e+=String.fromCharCode(parseInt(s,10));break;case"d":e+=parseInt(n(),10);break;case"f":u=String(parseFloat(n()).toFixed(d||6)),e+=l?u:u.replace(/^0/,"");break;case"j":e+=JSON.stringify(n());break;case"o":e+="0"+parseInt(n(),10).toString(8);break;case"s":e+=n();break;case"x":e+="0x"+parseInt(n(),10).toString(16);break;case"X":e+="0x"+parseInt(n(),10).toString(16).toUpperCase();break;default:e+=a;break}else a==="%"?f=!0:e+=a;return e}})()})(y);const h=b;export{h as a,b as f};
//# sourceMappingURL=format-3b5f6f65.js.map