import e,{useState as t,useEffect as o}from"react";!function(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===o&&n.firstChild?n.insertBefore(a,n.firstChild):n.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}('body{background-color:#292929;box-sizing:border-box;margin:0;padding:0}a:visited{color:inherit}@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");td,th{padding:5px}table,td,th{font-family:Verdana,Tahoma,sans-serif;font-size:20px}table,td,th{border-collapse:collapse;margin-top:15px}td,th{padding:12px}th{background-color:#cdd6dd;color:#333}td{text-align:center;width:100px}th:hover{background-color:#929dff}td:hover{background-color:#94b4fa}tr:nth-child(2n){background-color:#f2f8fd}label{font-family:Verdana,Tahoma,sans-serif;font-size:20px}nav{background-color:#444;height:50px;justify-content:space-between;width:100vw}nav,nav ul{align-items:center;display:flex}nav ul{justify-content:flex-start;list-style:none;margin:0}nav li{color:#fff;margin-right:15px}nav .nav-option{border-radius:0;color:#fff;font-family:Verdana,Tahoma,sans-serif;font-family:Inter,Roboto,sans-serif;font-size:16px;padding:16px 10px;text-decoration:none;transition:ergb(32,32,32)}.nav-option:hover{background-color:#292929;cursor:pointer}.modal{background-color:#444;border:1px #a3a3a3;border-radius:20px;color:#fff;font-family:Verdana,Tahoma,sans-serif;font-family:Inter,Roboto,sans-serif;left:50%;max-width:600px;min-height:200px;min-width:300px;position:absolute;top:50%;transform:translate(-50%,-50%)}.modal:hover{background-color:#474747;cursor:pointer;position:absolute}.modal-container{font-size:10px;margin:30px;padding:20px}.modal-container input{background-color:#303030;border:none;border-radius:1px;border-radius:5px;color:#d1d1d1;font-family:Verdana,Tahoma,sans-serif;font-size:12px;margin-bottom:4px;min-width:250px;outline:none;padding:8px}.modal-container input:focus{background-color:#373737}#forgotText{color:#fff;float:right;font-size:10px;margin:0 0 5px}#forgotText:hover{color:#e6e6e6}#login{color:#fff;margin-right:20px}#login:hover{background-color:#12d35c}#exitModal{background-color:#fa4c4c;cursor:pointer;font-size:15px;position:absolute;right:4%;top:4%}#exitModal,.button{border:none;border-radius:5px;color:#fff}.button{background-image:linear-gradient(180deg,#12d35c,#0ea748);font-size:16px;padding:6px 16px}');const n=({headers:t,content:o,handleSort:n})=>e.createElement("table",null,e.createElement("tr",null," ",t.map((o=>(console.log(t),e.createElement("th",{onClick:n,name:o.property},o.header))))),o.map((t=>e.createElement("tr",null,Object.keys(t).map((o=>e.createElement("td",null,t[o]))))))),a=({parentData:a,parentHeaders:r})=>{const[i,l]=t([]),[d,c]=t([]),[s,p]=t(""),[f,m]=t([]),[g,u]=t([]);o((()=>{l(a),c(a),u(a),m(r[0].property)}),[]);return console.log(r),e.createElement("div",null,e.createElement("label",{For:"filter"},"Filter by name: "),e.createElement("input",{type:"text",onChange:e=>{p(e.target.value),console.log(e.target.value,typeof e.target.value);const t=g.filter((t=>Object.keys(t).map((e=>t[e])).join().includes(e.target.value)));c(t)},name:"filter",value:s}),e.createElement(n,{headers:r,content:d,handleSort:e=>{const t=e.target.getAttribute("name");console.log(t);const o=[...d].sort(((e,o)=>(""+e[t]).localeCompare(o[t])));u(o),c(o)}}))},r=({event:t,text:o,id:n})=>e.createElement("button",{class:"button",id:n,onClick:()=>{clickAnimation(),t()}},o," ",e.createElement("span",{className:"button-click-effect"}));export{r as Button,a as Table};
