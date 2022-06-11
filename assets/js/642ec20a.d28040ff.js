"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6016],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return m}});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=u(e.components);return n.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return t?n.createElement(f,s(s({ref:a},c),{},{components:t})):n.createElement(f,s({ref:a},c))}));function m(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=d;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<r;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7297:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var n=t(7462),o=t(3366),r=(t(7294),t(3905)),s=["components"],i={sidebar_position:2},l="SetConfig",u={unversionedId:"tutorial-basics/lista de comandos API/configuracoes/setconfig",id:"tutorial-basics/lista de comandos API/configuracoes/setconfig",title:"SetConfig",description:"Objetivo: Enviar novas configura\xe7\xf5es para o equipamento.",source:"@site/docs-mc/tutorial-basics/lista de comandos API/configuracoes/2-setconfig.md",sourceDirName:"tutorial-basics/lista de comandos API/configuracoes",slug:"/tutorial-basics/lista de comandos API/configuracoes/setconfig",permalink:"/docs-mc/tutorial-basics/lista de comandos API/configuracoes/setconfig",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"GetConfig",permalink:"/docs-mc/tutorial-basics/lista de comandos API/configuracoes/getconfig"},next:{title:"Introdu\xe7\xe3o",permalink:"/docs-mc/tutorial-basics/lista de comandos API/logicas/intro"}},c=[],p={toc:c};function d(e){var a=e.components,t=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setconfig"},"SetConfig"),(0,r.kt)("p",{align:"justify"},"Objetivo: Enviar novas configura\xe7\xf5es para o equipamento.",(0,r.kt)("p",null,"Sintaxe do comando:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'setConfig {"config": "parametro", "param1": value1, "param2": value2, ...}\n')),(0,r.kt)("p",null,"Resposta do equipamento:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Sucesso ou falha\n")),(0,r.kt)("p",null,"Tipos de par\xe2metros poss\xedveis:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- network: Ajustar os par\xe2metros de rede configurados (necess\xe1rio reboot):\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'setConfig {"config": "network", "dhcp": true/false, "f-ip": "ip_desejado", "f-mask": "mascara_de_rede_desejada", "f-gt": "gateway_desejado", "f-dns1": "dns_primario_desejado", "f-dns2": "dns_secundario_desejado"}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"keepalive: Ajustar os tempos de keepalive configurados;")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'setConfig {"config": "keepalive", "mhocloud": segundosdesejados, "mqttserver": segundosdesejados}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ai: Ajustar os par\xe2metros das entradas anal\xf3gicas configuradas;")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'setConfig {"config": "ai", "AI1": true/false, "AI2": true/false, "AI3": true/false, "AI4": true/false, "AI5": true/false, "AI6": true/false, "AIperiod": segundosdesejados}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"rtc: Ajustar o hor\xe1rio e data reais interno.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'setConfig {"config": "rtc", "time": "xx:yy", "date": "dd/mm/yyyy"}\n')),(0,r.kt)("p",null,"Exemplo 1:"),(0,r.kt)("p",null,"Definir novas configura\xe7\xf5es de rede local do equipamento:"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Preuca\xe7\xf5es!")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Em caso de configura\xe7\xf5es erradas ou incomport\xe1veis com o tipo de rede local o equipamento pode n\xe3o se conectar novamente na rede."))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Aviso!")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\xc9 necess\xe1rio efetuar um comando de reboot ap\xf3s altera\xe7\xf5es desses par\xe2metros (o reboot deve ser feito ap\xf3s efetuar o comando de salvar)."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'setConfig {"config": "network", "dhcp": false, "f-ip": "192.168.1.34", "f-mask": "255.255.255.0", "f-gt": "192.168.1.1", "f-dns1": "8.8.8.8", "f-dns2": "8.8.4.4"}\n')),(0,r.kt)("p",null,"Resposta do equipamento:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sucesso ou erro\n")),(0,r.kt)("p",null,"No exemplo, temos  que o dhcp ser\xe1 desativado e as configura\xe7\xf5es de IP fixo s\xe3o:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"IP: 192.168.1.34"),(0,r.kt)("li",{parentName:"ul"},"M\xe1scara de rede: 255.255.255.0"),(0,r.kt)("li",{parentName:"ul"},"Gateway: 192.168.1.1"),(0,r.kt)("li",{parentName:"ul"},"DNS prim\xe1rio: 8.8.8.8"),(0,r.kt)("li",{parentName:"ul"},"DNS secund\xe1rio: 8.8.4.4")),(0,r.kt)("p",null,"Para que as altera\xe7\xf5es sejam efetivadas \xe9 necess\xe1rio salvar e o equipamento ter\xe1 tais configura\xe7\xf5es no pr\xf3ximo boot."),(0,r.kt)("p",null,"Exemplo 2:"),(0,r.kt)("p",null,"Definir novas configura\xe7\xf5es de keepalive do equipamento:"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Aviso!")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\xc9 necess\xe1rio efetuar um comando de reboot ap\xf3s altera\xe7\xf5es desses par\xe2metros (o reboot deve ser feito ap\xf3s efetuar o comando de salvar)."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'setConfig {"config": "keepalive", "mhocloud": 900, "mqttserver": 600}\n')),(0,r.kt)("p",null,"Resposta do equipamento:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sucesso ou erro\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No exemplo, temos  que o keepalive ser\xe1 configurado como 900 segundos para a conex\xe3o com o MHO Cloud e 600 segundos para a conex\xe3o com o MQTT Server.")),(0,r.kt)("p",null,"Exemplo 3:"),(0,r.kt)("p",null,"Definir novas configura\xe7\xf5es das entradas anal\xf3gicas do equipamento:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'setConfig {"config": "ai", "AI1": true, "AI2": false, "AI3":false, "AI4": false, "AI5": false, "AI6": false, "AIperiod": 300}\n')),(0,r.kt)("p",null,"Resposta do equipamento:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sucesso ou erro\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No exemplo, temos  que as entradas AI1 ser\xe1 habilitadas enquanto as entradas AI2, AI3, AI4, AI5 e AI6 ser\xe3o desabilitadas para o envio de dados. No exemplo temos tamb\xe9m que o per\xedodo de atualiza\xe7\xe3o das entradas anal\xf3gicas habilitadas ser\xe1 de 300 segundos (5 minutos).")),(0,r.kt)("p",null,"Exemplo 4:"),(0,r.kt)("p",null,"Definir novas configura\xe7\xf5es de rel\xf3gio RTC do equipamento:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'setConfig {"config": "rtc", "time": "09:20", "date": "18/03/2020"}\n')),(0,r.kt)("p",null,"Resposta do equipamento:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sucesso ou erro\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No exemplo, temos  que o hor\xe1rio atual do equipamento ser\xe1 configurado para 09:20 e o dia atual para 18/03/2020."))))}d.isMDXComponent=!0}}]);