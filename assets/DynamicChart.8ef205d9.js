import{_ as i}from"./chart.1ee0164b.js";import{d as s,z as m,o as u,A as p}from"./index.9e8c3cbe.js";const _=s({__name:"DynamicChart",setup(c){const t=[];for(let a=0;a<5;++a)t.push(Math.round(Math.random()*200));const n=m({series:[{type:"bar",data:t}]}),e={xAxis:{max:"dataMax"},yAxis:{type:"category",data:["A","B","C","D","E"],inverse:!0,animationDuration:300,animationDurationUpdate:300,max:2},series:[{realtimeSort:!0,name:"X",type:"bar",data:t,label:{show:!0,position:"right",valueAnimation:!0}}],legend:{show:!0},animationDuration:0,animationDurationUpdate:3e3,animationEasing:"linear",animationEasingUpdate:"linear"};function o(){for(var a=0;a<t.length;++a)Math.random()>.9?t[a]+=Math.round(Math.random()*2e3):t[a]+=Math.round(Math.random()*200)}return(a,d)=>{const r=i;return u(),p(r,{option:e,width:"600px",height:"500px",dynamic:o,dynamicData:n},null,8,["dynamicData"])}}});export{_ as default};