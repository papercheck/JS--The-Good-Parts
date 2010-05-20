var sum=function(){var i,sum=0;for(i=0;i<arguments.length;i+=1){sum+=arguments[i];}
return sum;};document.writeln(sum(4,8,15,16,23,42));var add=function(a,b){if(typeof a!=='number'||typeof b!=='number'){throw{name:'TypeError',message:'add needs numbers'};}
return a+b;}
var try_it=function(){try{add("Seven");}catch(e){document.writeln(e.name+': '+e.message);}}
try_it();document.writeln(add(4,2));