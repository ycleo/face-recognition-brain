(this["webpackJsonpface-recognition-brain"]=this["webpackJsonpface-recognition-brain"]||[]).push([[0],{105:function(e,t,n){},397:function(e,t,n){},398:function(e,t,n){},399:function(e,t,n){},400:function(e,t,n){},402:function(e,t,n){"use strict";n.r(t);var a=n(11),s=n.n(a),i=n(53),c=n.n(i),r=(n(105),n(94)),l=n(95),o=n(100),b=n(99),d=n(96),u=n.n(d),h=n(97),m=n.n(h),j=n(2),p=function(e){var t=e.onRouteChange;return e.isSignedIn?Object(j.jsx)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:Object(j.jsx)("p",{onClick:function(){return t("signout")},className:"f3 link dim black underline pa3 pointer",children:"Sign Out"})}):Object(j.jsxs)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(j.jsx)("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer",children:"Sign In"}),Object(j.jsx)("p",{onClick:function(){return t("register")},className:"f3 link dim black underline pa3 pointer",children:"Register"})]})},g=function(e){var t=e.onRouteChange;return Object(j.jsx)("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(j.jsx)("main",{className:"pa4 black-80",children:Object(j.jsxs)("div",{className:"measure",children:[Object(j.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(j.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Sign In"}),Object(j.jsxs)("div",{className:"mt3",children:[Object(j.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(j.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})]}),Object(j.jsxs)("div",{className:"mv3",children:[Object(j.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(j.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"})]})]}),Object(j.jsx)("div",{className:"",children:Object(j.jsx)("input",{onClick:function(){return t("home")},className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})}),Object(j.jsx)("div",{className:"lh-copy mt3",children:Object(j.jsx)("p",{onClick:function(){return t("register")},className:"f6 link dim black db pointer",children:"Register"})})]})})})},f=function(e){var t=e.onRouteChange;return Object(j.jsx)("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(j.jsx)("main",{className:"pa4 black-80",children:Object(j.jsxs)("div",{className:"measure",children:[Object(j.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(j.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Register"}),Object(j.jsxs)("div",{className:"mt3",children:[Object(j.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"name",children:"Name"}),Object(j.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name"})]}),Object(j.jsxs)("div",{className:"mt3",children:[Object(j.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(j.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})]}),Object(j.jsxs)("div",{className:"mv3",children:[Object(j.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(j.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"})]})]}),Object(j.jsx)("div",{className:"",children:Object(j.jsx)("input",{onClick:function(){return t("home")},className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})})]})})})},x=(n(397),function(e){var t=e.imageUrl,n=e.boxes;return Object(j.jsx)("div",{className:"center ma pa2",children:Object(j.jsxs)("div",{style:{position:"relative"},children:[Object(j.jsx)("img",{id:"inputimage",alt:"",src:t,width:"500px",height:"auto"}),n.map((function(e,t){var n=e.topRow,a=e.rightCol,s=e.bottomRow,i=e.leftCol;return Object(j.jsx)("div",{id:"face",className:"bounding-box",style:{top:n,right:a,bottom:s,left:i}},t)}))]})})}),O=n(98),v=n.n(O),w=n.p+"static/media/brain.2895702f.png",N=(n(398),function(){return Object(j.jsx)("div",{className:"ma4 mt0",children:Object(j.jsx)(v.a,{className:"Tilt br2 shadow-2",options:{max:45},style:{height:150,width:150},children:Object(j.jsx)("div",{className:"Tilt-inner pa3",children:Object(j.jsx)("img",{style:{paddingTop:"5px"},alt:"log",src:w})})})})}),y=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"white f3",children:"Leo, your current rank is..."}),Object(j.jsx)("div",{className:"white f1",children:"#1"})]})},k=(n(399),function(e){var t=e.onInputChange,n=e.onButtonSubmit;return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:"f3",children:"Give me a picture. I can detect faces ^.^"}),Object(j.jsx)("div",{className:"center",children:Object(j.jsxs)("div",{className:"form center pa4 br3 shadow-5",children:[Object(j.jsx)("input",{className:"f4 pa2 w-70 center",type:"tex",onChange:t}),Object(j.jsx)("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-blue",onClick:n,children:"Detect"})]})})]})}),C=(n(400),new m.a.App({apiKey:"d0a2ab07bf7e439db2b9281fd0f5f603"})),S={particles:{number:{value:40,density:{enable:!0,value_area:1e3}}}},R=function(e){Object(o.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).calculateFaceLocation=function(e){var t=e.outputs[0].data.regions.map((function(e){return e.region_info.bounding_box})),n=document.getElementById("inputimage"),a=Number(n.width),s=Number(n.height);return t.map((function(e){return{leftCol:e.left_col*a,topRow:e.top_row*s,rightCol:a-e.right_col*a,bottomRow:s-e.bottom_row*s}}))},e.displayFaceBox=function(t){e.setState({boxes:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),C.models.predict("a403429f2ddf4b49b307e318f00e528b",e.state.input).then((function(t){return e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){"signout"===t?e.setState({isSignedIn:!1}):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state={input:"",imageUrl:"",boxes:[],route:"signin",isSignedIn:!1},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){fetch("http://localhost:3003/").then((function(e){return e.json()})).then(console.log)}},{key:"render",value:function(){var e=this.state,t=e.isSignedIn,n=e.imageUrl,a=e.route,s=e.boxes;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(u.a,{className:"particles",params:S}),Object(j.jsx)(p,{isSignedIn:t,onRouteChange:this.onRouteChange}),"home"===a?Object(j.jsxs)("div",{children:[Object(j.jsx)(N,{}),Object(j.jsx)(y,{}),Object(j.jsx)(k,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),Object(j.jsx)(x,{boxes:s,imageUrl:n})]}):"signin"===a?Object(j.jsx)(g,{onRouteChange:this.onRouteChange}):Object(j.jsx)(f,{onRouteChange:this.onRouteChange})]})}}]),n}(a.Component),I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,403)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),i(e),c(e)}))};n(401);c.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(R,{})}),document.getElementById("root")),I()}},[[402,1,2]]]);
//# sourceMappingURL=main.75b6488b.chunk.js.map