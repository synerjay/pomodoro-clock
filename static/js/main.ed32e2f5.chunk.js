(this["webpackJsonppomodoro-clock"]=this["webpackJsonppomodoro-clock"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),o=n(4),c=n.n(o),i=(n(10),n(2)),a=n(0);var l=function(e){var t=e.increment,n=e.decrement,r=e.breakCount;return r=r<10?"0"+r:r,Object(a.jsxs)("div",{className:"BreakTimer p-2 card hover:shadow-xl md:p-7 flex flex-col justify-center",children:[Object(a.jsx)("h3",{className:"text-2xl uppercase flex justify-center",id:"break-label",children:"Break:"}),Object(a.jsxs)("div",{className:"BreakButtons flex flex-row justify-center",children:[Object(a.jsx)("button",{className:"decrementBreak focus:outline-none | transform hover:translate-y-1 hover:bg-opacity-50 | transition ease-out duration-300",id:"break-decrement",onClick:n,children:Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})}),Object(a.jsx)("h3",{className:"BreakCount text-primary text-2xl uppercase mx-7",id:"break-length",children:r}),Object(a.jsx)("button",{className:"incrementBreak focus:outline-none transform hover:-translate-y-1 hover:bg-opacity-50 | transition ease-out duration-300",id:"break-increment",onClick:t,children:Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 15l7-7 7 7"})})})]})]})};var u=function(e){var t=e.reset,n=e.start,r=e.stop,s=e.isPlaying;return Object(a.jsxs)("div",{className:"buttons flex flex-row justify-center space-x-7 ",children:[Object(a.jsx)("button",{className:"btn md:border-2 hover:bg-gray-900 hover:text-gray-200 | transition ease-out duration-500",id:"start_stop",onClick:s?r:n,children:s?Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-9 w-9",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"})}):Object(a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-9 w-9",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[Object(a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"}),Object(a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})]})}),Object(a.jsx)("button",{className:"btn md:border-2 hover:bg-gray-900 hover:text-gray-200 | transition ease-out duration-500",id:"reset",onClick:t,children:Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-9 w-9",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})})})]})};var d=function(e){var t=e.increment,n=e.decrement,r=e.sessionCount;return r=r<10?"0"+r:r,Object(a.jsxs)("div",{className:"SessionTimer p-2 card hover:shadow-xl md:p-7 flex flex-col justify-center",children:[Object(a.jsx)("h3",{className:"text-2xl uppercase flex justify-center",id:"session-label",children:"Session:"})," ",Object(a.jsxs)("div",{className:"SessionButtons flex flex-row justify-center",children:[Object(a.jsx)("button",{className:"decrementWork focus:outline-none | transform hover:translate-y-1 hover:bg-opacity-50 | transition ease-out duration-300",id:"session-decrement",onClick:n,children:Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})}),Object(a.jsx)("h3",{className:"SessionCount text-primary text-2xl uppercase mx-7",id:"session-length",children:r}),Object(a.jsx)("button",{className:"incrementWork focus:outline-none | transform hover:-translate-y-1 hover:bg-opacity-50 | transition ease-out duration-300",id:"session-increment",onClick:t,children:Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 15l7-7 7 7"})})})]})]})},j=function(e){var t=Math.floor(e/60),n=e%60;return n=n<10?"0"+n:n,"".concat(t=t<10?"0"+t:t,":").concat(n)},x=n.p+"static/media/beep.372995a9.wav",h=n(5);var f=function(){var e=Object(r.useRef)(),t=Object(r.useState)(!1),n=Object(i.a)(t,2),s=n[0],o=n[1],c=Object(r.useState)(1500),f=Object(i.a)(c,2),m=f[0],b=f[1],v=Object(r.useState)("Session"),p=Object(i.a)(v,2),w=p[0],k=p[1],O=Object(r.useState)(0),g=Object(i.a)(O,2),y=g[0],N=g[1],C=Object(r.useState)(5),S=Object(i.a)(C,2),B=S[0],L=S[1],M=Object(r.useState)(25),W=Object(i.a)(M,2),T=W[0],I=W[1],z=function(){!s&&B<60&&(L(B+1),"Break"===w&&(b(60*B+60),N((function(e){return e+1}))))},A=function(){!s&&B>1&&(L(B-1),"Break"===w&&(b(60*B-60),N((function(e){return e+1}))))},J=function(){!s&&T<60&&(I(T+1),"Session"===w&&(b(60*T+60),N((function(e){return e+1}))))},P=function(){!s&&T>1&&(I(T-1),"Session"===w&&(b(60*T-60),N((function(e){return e+1}))))};Object(r.useEffect)((function(){var t;return s&&m>0?t=setInterval((function(){b(m-1)}),1e3):s&&0===m?(t=setInterval((function(){b(m-1)}),1e3),e.current.play(),N((function(e){return e+1})),"Session"===w?(k("Break"),b(60*B),N((function(e){return e+1}))):(k("Session"),b(60*T),N((function(e){return e+1})))):clearInterval(t),function(){return clearInterval(t)}}),[s,B,T,w,m]);var R=function(){o(!0)},E=function(){o(!1)},H=function(){L(5),I(25),k("Session"),b(1500),o(!1),e.current.pause(),e.current.currentTime=0,N((function(e){return e+1}))};return Object(a.jsxs)("div",{className:"flex items-center justify-center flex-col flex-grow w-screen h-screen space-y-10",children:[Object(a.jsxs)("div",{className:"w-full h-full p-5 md:p-10 card hover:shadow-xl flex flex-col items-center justify-center",children:[Object(a.jsx)(h.CountdownCircleTimer,{isPlaying:s,duration:m,size:600,strokeWidth:30,initialRemainingTime:"Session"===w?60*T:60*B,isLinearGradient:!0,trailColor:"#111827",colors:[["#4ab6ff",.33],["#ffc726",.33],["#ff4f4f",.33]],children:function(e){var t=e.remainingTime;return Object(a.jsxs)("div",{className:"flex flex-col gap-y-5",children:[Object(a.jsxs)("div",{className:"flex flex-row",children:[Object(a.jsx)(l,{increment:z,decrement:A,breakCount:B}),Object(a.jsx)(d,{increment:J,decrement:P,sessionCount:T})]}),Object(a.jsxs)("h3",{className:"flex flex-row justify-center text-2xl uppercase",id:"timer-label",children:[w," Timer:"," "]}),Object(a.jsx)("h1",{className:"ClockFace flex flex-row justify-center text-8xl",id:"time-left",children:j(t)}),Object(a.jsx)(u,{reset:H,stop:E,start:R,isPlaying:s})]})}},y),Object(a.jsxs)("h2",{className:"text-xs mt-0 md:text-lg md:mt-7",children:[" ","Made in React and Tailwind CSS by"," ",Object(a.jsx)("a",{className:"underline",target:"_blank",rel:"noreferrer",href:"https://www.jerometo.com",children:"Jerome Tolentino"})]})]}),Object(a.jsx)("audio",{id:"beep",preload:"auto",src:x,ref:e})]})};var m=function(){return Object(a.jsx)("div",{className:"App absolute inset-0 flex flex-grow w-screen items-center justify-center",children:Object(a.jsx)(f,{})})};c.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(m,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.ed32e2f5.chunk.js.map