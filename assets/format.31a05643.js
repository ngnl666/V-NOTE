var e={nonHighLightList:["*(",")*","_(",")_",'"(','")'],formatWord:(e,l,a)=>{let r=e.split("");switch(a){case"bold":r[l[0]]=`*(${r[l[0]]}`,r[l[1]]=`${r[l[1]]})*`;break;case"underline":r[l[0]]=`_(${r[l[0]]}`,r[l[1]]=`${r[l[1]]})_`;break;case"quote":r[l[0]]=`"(${r[l[0]]}`,r[l[1]]=`${r[l[1]]})"`}return r.join("")},markup:e=>e.replaceAll("*(",'<span class="font-extrabold">').replaceAll(")*","</span>").replaceAll("_(",'<span class="underline">').replaceAll(")_","</span>").replaceAll('"(','<div class="bg-gray-300/30 rounded-md px-4 py-2">').replaceAll(')"',"</div>").replaceAll("\n","<br/>"),selectedArea:(e,l,a)=>[l,l+e.slice(l,a).split("\n")[0].length-1]};export{e as f};
