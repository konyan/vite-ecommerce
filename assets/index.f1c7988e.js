var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,i=(e,t)=>{for(var r in t||(t={}))n.call(t,r)&&l(e,r,t[r]);if(a)for(var r of a(t))o.call(t,r)&&l(e,r,t[r]);return e},s=(e,a)=>t(e,r(a));import{u as c,a as d,r as u,b as p,q as m,A as g,R as f,$ as h,c as x,l as v,d as b,J as y,e as E,f as w,t as C,g as k,S as $,h as _,i as M,j as q,T as L,P as S}from"./vendor.b806d342.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const R="E-COMMERCE",z=(e={})=>{const{title:t,suffix:r=R,addSuffix:a=!0,returnAppTitle:n=!0}=e;return void 0===t&&n?R:a?`${t} - ${r}`:t||""},P=({name:e,prefix:t="ActivePage"})=>{const r=document.documentElement,a=`${t}--${e}`;u.exports.useEffect((()=>(r.classList.add(a),()=>{r.classList.remove(a)})),[])},{CancelToken:T,isCancel:j,create:A}=p,O=({data:e})=>e,N=e=>{const t=(({baseURL:e,initialState:t})=>{const r=T.source(),a=r.token,n=A({baseURL:e,cancelToken:a}),[o,l]=u.exports.useState((()=>t));return u.exports.useEffect((()=>()=>{r.cancel()}),[]),{Request:n,state:o,apiSource:r,setState:l,setAuth:(e,t="Bearer")=>{n.defaults.headers.common.Authorization=e?`${t} ${e}`:null},successResolver:O,isCancel:j}})({baseURL:"https://nvy34v633k.execute-api.ap-southeast-1.amazonaws.com/prod",initialState:e}),{Request:r,setAuth:l}=t,s=((e,t)=>{var r={};for(var l in e)n.call(e,l)&&t.indexOf(l)<0&&(r[l]=e[l]);if(null!=e&&a)for(var l of a(e))t.indexOf(l)<0&&o.call(e,l)&&(r[l]=e[l]);return r})(t,["Request","setAuth"]);return i({Request:r},s)},V=m.svg`
    cursor: progress;
    display: block;
    max-width: 100%;
    height: auto;
    margin: 0 auto;

    path {
        transform-origin: center;
        animation: 0.6s linear infinite rotate;
    }

    @keyframes rotate {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
`,B=m.section((({fullPage:e,fullBgColor:t})=>{if(e)return g`
                cursor: progress;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: ${t};
                z-index: 9999999;
                position: fixed;
            `})),F="#687186",D=!0,H=!1,I="rgba(255, 255, 255, 0.7)",K=({active:e=D,color:t=F,fullPage:r=H,fullBgColor:a=I})=>f.createElement(f.Fragment,null,e&&f.createElement(B,{fullPage:r,fullBgColor:a},f.createElement(V,{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 50 50"},f.createElement("path",{fill:t,d:"M30.9 42.993C40.68 39.704 45.94 29.1 42.65 19.33S28.767 4.288 18.987 7.577l1.297 3.856a14.62 14.62 0 0118.512 9.193c2.573 7.65-1.542 15.938-9.193 18.512l1.297 3.856z"})))),Z=m.section`
    width: 100%;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`,U=m.main`
    max-width: 100%;
`,Y=h`
    .ActiveLayout--LayoutCenter {
        body {
            overflow-y: auto;
            overflow-x: hidden;
            background-color: #FDFAE3;
        }
        #root {
            min-height: 100%;
            min-height: 100%;
            display: flex;
        }
    }

`,J=({children:e,BlockName:t="LayoutCenter"})=>((({name:e,prefix:t="ActiveLayout"})=>{const r=document.documentElement,a=`${t}--${e}`;u.exports.useEffect((()=>(r.classList.add(a),()=>{r.classList.remove(a)})),[])})({name:t}),f.createElement(Z,null,f.createElement(Y,null),f.createElement(U,null,e))),G=(e=!0)=>g`
    ${e&&g`
        display: block;
    `}

    cursor: pointer;
    background: none;
    border: none;
    padding: 0;

    &:disabled {
        cursor: not-allowed;
    }
`,Q=()=>g`
    transition: 0.3s all;
`,W=m.h1`
    font-weight: 900;
    font-size: 1.5em;
    text-align: center;
    color: var(--title);

    margin-bottom: 40px;
`,X=m.section`
    padding: 40px 20px;
`,ee=m.section`
    max-width: 307px;

    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: 50px;
`,te=m.article`
    text-align: center;
`,re=m.header`
    width: 60px;
    height: 60px;
    border-radius: 10px;
    background-color: #fcfcfc;
    border: 4px solid var(--dorminant_1);
    box-shadow: var(--product_shadow);

    margin: 0 auto;
    margin-bottom: 4px;
`,ae=m.div`
    font-size: 0.875em;
    font-weight: 700;
    color: var(--product_label);

    margin-bottom: 6px;
`,ne=m.div`
    font-size: 0.6875em;
    font-weight: 500;
    color: var(--dorminant_1);

    margin-bottom: 8px;
`,oe=m.div`
    font-size: 0.75em;
    color: var(--product_description);
`,le=m.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 3px;
`,ie=m.div`
    font-size: 0.875em;
    font-weight: 500;
    color: var(--input_value);

    margin: 0 10px;
`,se=m.button`
    ${G()}
    ${Q()}

    width: 16px;
    height: 16px;
    border: 1px solid var(--input_border);
    border-radius: 3px;

    padding: 3px;

    svg {
        width: 100%;
        height: auto;

        path {
            fill: var(--dorminant_1);
            ${Q()}
        }
    }

    &:disabled {
        svg path {
            fill: var(--input_border);
        }
    }

    &:hover:not(:disabled) {
        border-color: var(--dorminant_1);
    }
`,ce=m.footer`
    margin-top: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;
`,de=m.button`
    ${G()}

    font-size: 0.75em;
    font-weight: 500;
    color: var(--label);
    text-align: center;

    margin-top: 8px;
`,ue=m.span`
    ${Q()}

    font-size: 0.625em;
    line-height: normal;
    text-align: center;

    min-width: 13px;
    padding: 2px;
    padding-right: 3px;

    color: #fff;
    display: block;
    background-color: var(--notification);
    border-radius: 100%;
    pointer-events: none;

    position: absolute;
    z-index: 1;
    right: -4px;
    top: -5px;

    opacity: 1;

    &[hidden] {
        opacity: 0;
    }
`,pe=m.button`
    ${G()}
    ${Q()}

    width: 35px;
    height: 35px;
    border-radius: 10px;

    position: relative;
    z-index: 0;

    padding: 7px;

    background-color: var(--dorminant_1);
    box-shadow: var(--cart_shadow);

    svg {
        width: 100%;
        height: auto;

        path {
            fill: #fff;
            ${Q()}
        }
    }

    &:disabled {
        background-color: var(--input_border);

        svg path {
            fill: var(--color_2);
        }
    }

    &:hover:not(:disabled) {
        background-color: #fff;

        svg path {
            fill: var(--dorminant_1);
        }
    }
`;function me(e){return u.exports.createElement("svg",i({width:5,height:5,viewBox:"0 0 5 5",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),u.exports.createElement("path",{d:"M2 3V5H3V3L5 3V2L3 2V0H2V2L0 2V3L2 3Z",fill:"#6A52FF"}))}function ge(e){return u.exports.createElement("svg",i({width:5,height:1,viewBox:"0 0 5 1",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),u.exports.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 0L5 4.47035e-07V1L0 1V0Z",fill:"#6A52FF"}))}function fe(e){return u.exports.createElement("svg",i({width:21,height:21,viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),u.exports.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.5902 5.36287L16.3875 14.0333L4.49032 14.0332L3 6.03382L17.018 6.0439L17.5373 4H21V5.36287H18.5902ZM15.3346 12.6704L16.6719 7.40653L4.63336 7.39787L5.61566 12.6704H15.3346ZM16.6997 16.8205C16.6997 18.0223 15.7271 19 14.5317 19C13.3363 19 12.3637 18.0223 12.3637 16.8205C12.3637 16.5319 12.42 16.2563 12.5218 16.004H8.37358C8.47538 16.2563 8.53163 16.5319 8.53163 16.8205C8.53163 18.0223 7.5591 19 6.36365 19C5.16822 19 4.19566 18.0223 4.19566 16.8205C4.19566 15.6188 5.16823 14.6411 6.36365 14.6411H14.5317C15.7271 14.6411 16.6997 15.6188 16.6997 16.8205ZM6.36365 17.6371C6.81155 17.6371 7.17593 17.2708 7.17593 16.8205C7.17593 16.3703 6.81155 16.004 6.36365 16.004C5.91574 16.004 5.55135 16.3703 5.55135 16.8205C5.55135 17.2708 5.91575 17.6371 6.36365 17.6371ZM14.5317 17.6371C14.9796 17.6371 15.344 17.2708 15.344 16.8205C15.344 16.3703 14.9796 16.004 14.5317 16.004C14.0838 16.004 13.7195 16.3703 13.7195 16.8205C13.7195 17.2708 14.0838 17.6371 14.5317 17.6371Z",fill:"#6A52FF"}))}const he=(e,t)=>void 0!==e[t],xe=m.section``,ve=m.form`
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 35px;
`,be=m.article`
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 20px;
`,ye=m.section`
    display: grid;
    ${({column:e=2})=>g`
        grid-template-columns: repeat(${e}, 1fr);
    `}

    .fields:not(:last-child) input {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    .fields:not(:first-child) input {
        border-left-width: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`,Ee=m.label`
    display: block;
`,we=m.span`
    display: block;
    margin-bottom: 12px;
    color: var(--label);
    font-size: 0.875em;
    font-weight: 700;

    ${({error:e=!1})=>e&&g`
                color: var(--error);
            `}
`,Ce=m.input`
    ${Q()}
    ${g`
    display: block;
    background: none;
    border: none;
`}

    color: var(--input_value);
    font-size: 0.875em;
    padding: 9px 12px;

    width: 100%;

    background-color: #fff;

    border: 1px solid var(--input_border);
    border-radius: 8px;

    &::placeholder {
        opacity: 0.5;
    }
`,ke=m(Ce)`
    padding-right: 30px;

    background-color: #fff;
    background-repeat: no-repeat;
    background-size: 32px;

    ${({cardType:e})=>null===e?g`
                  background-image: linear-gradient(
                          rgba(255, 255, 255, 0.5),
                          rgba(255, 255, 255, 0.5)
                      ),
                      url("https://raw.githubusercontent.com/aaronfagan/svg-credit-card-payment-icons/main/logo/mastercard.svg"),
                      url("https://raw.githubusercontent.com/aaronfagan/svg-credit-card-payment-icons/main/logo/visa.svg");
                  background-position: 88% 7px, 98% 7px;
              `:"visa"===e?g`
                  background-image: url("https://raw.githubusercontent.com/aaronfagan/svg-credit-card-payment-icons/main/logo/visa.svg");
                  background-position: 98% 7px;
              `:g`
                  background-image: url("https://raw.githubusercontent.com/aaronfagan/svg-credit-card-payment-icons/main/logo/mastercard.svg");
                  background-position: 98% 7px;
              `}
`,$e=m.button`
    color: #fff;
    font-size: 0.875em;
    font-weight: 700;
    padding: 9px 24px;
    background-color: var(--button_bg);
    border: none;
    border-radius: 3px;

    &:disabled {
        opacity: 0.5;
    }
`,_e=m.div`
    color: var(--error);
    font-weight: 500;
    font-size: 0.6875em;
    margin-top: 5px;
`,Me=m.article`
    display: flex;
    justify-content: center;
`,qe=m.article.attrs((()=>({className:"fields"})))``,Le={email:null,card_number:null,card_expire:null,cvv:null,cardType:""},Se=({onSuccess:e,loading:t=!1,submitText:r="Submit"})=>{const{models:a,register:n,updateModel:o}=(({defaultState:e={}})=>{const[t,r]=u.exports.useState((()=>Object.assign({},e))),a=e=>b(t,e),n=(e,t)=>{r((r=>Object.assign({},v(r,e,t))))};return{models:t,register:{input:({name:e,type:t="text",onChange:r=(()=>{})})=>({onChange:t=>{let a=null;he(t,"value")&&(a=t.value),he(t,"target")&&(a=t.target.value),n(e,a),r(t)},value:a(e)||"",name:e,type:t}),textarea:({name:e,onChange:t=(()=>{})})=>({onChange:r=>{const a=r.target.value;n(e,a),t(r)},value:a(e)||"",name:e}),radio:({name:e,value:t=null,onChange:r=(()=>{})})=>({onChange:a=>{a.target.checked&&n(e,t),r(a)},checked:a(e)===t,type:"radio",name:e,value:t}),checkbox:({name:e,truevalue:t=!0,falsevalue:r=!1,onChange:o=(()=>{})})=>({onChange:a=>{const l=a.target.checked?t:r;n(e,l),o(a)},checked:a(e)===t,type:"checkbox",name:e,value:t})},updateModel:n,setModels:r}})({defaultState:Le}),{state:l,setData:c}=(({initialData:e,schema:t,explicitCheck:r={},validationOptions:a={}})=>{const[n,o]=u.exports.useState((()=>Object.assign({},e))),[l,c]=u.exports.useState(!1),[d,p]=u.exports.useState((()=>Object.assign({},r))),m=u.exports.useMemo((()=>{const t={};for(const r in n){let a={};if(r in d&&!d[r])a.$dirty=l;else{const t=e[r],o=n[r],i=!y.any().valid(t).validate(o).error;a.$dirty=l||!i}t[r]=a}return t}),[n,l,d,e,y]),g=u.exports.useMemo((()=>{const e={};return Array.from(t._ids._byKey.keys()).map((r=>{const o=[],l=t.extract(r).validate(n[r],a).error;(null==l?void 0:l.details)&&l.details.map((e=>{o.push({$property:r,$message:e.message})})),e[r]=o})),e}),[n,t]),f=u.exports.useMemo((()=>{const e={};for(const t in g)m[t].$dirty?e[t]=g[t]:e[t]=[];return e}),[g,m]),h=u.exports.useMemo((()=>{const e=[];for(const t in f)f[t].map((t=>{e.push(t)}));return e}),[f]),x=u.exports.useMemo((()=>{const e=[];for(const t in g)g[t].map((t=>{e.push(t)}));return e}),[g]),v=u.exports.useMemo((()=>l&&0!==h.length),[l,h]),b=u.exports.useMemo((()=>0!==x.length),[x]),E=u.exports.useMemo((()=>l&&!v),[l,v]);return{state:u.exports.useMemo((()=>({$data:n,$dirty:l,$explict_fields:d,$data_state:m,$source_errors:g,$errors:f,$all_errors:h,$all_source_errors:x,$invalid:v,$auto_invalid:b,$validation_success:E})),[n,l,d,m,g,f,h,x,v,b,E]),setData:o,setExplicitField:(e,t)=>{p((r=>s(i({},r),{[e]:t})))},validate:()=>{c(!0)}}})({initialData:Le,schema:y.object({email:y.string().email({tlds:{allow:!1}}).required().messages({"string.empty":"Required","string.email":"Must be a valid email","any.required":"Required"}),card_number:y.string().custom(((e,t)=>{if(e){if(!E.exports.validateCardNumber(e))return t.error("string.cardNumber");if("visa"!==E.exports.parseCardType(e)&&"mastercard"!==E.exports.parseCardType(e))return t.error("string.cardType")}return e})).required().messages({"string.empty":"Required","string.cardNumber":"Must be a valid card","string.cardType":"Must be Visa / Master card type","any.required":"Required"}),card_expire:y.string().custom(((e,t)=>{if(e){const[r,a]=e.split("/");if(!E.exports.validateCardExpiry(r,a))return t.error("string.cardExpire")}return e})).required().messages({"string.empty":"Required","string.cardExpire":"Must be a valid expire date","any.required":"Required"}),cvv:y.string().length(3).custom(((e,t)=>e&&!E.exports.validateCardCVC(e)?t.error("string.cvv"):e)).required().messages({"string.empty":"Required","string.length":"Maximum 3 digits","string.cvv":"Must be a valid cvv","any.required":"Required"})})}),d=u.exports.useCallback((e=>l.$errors[e].map((e=>e.$message)).join(",")),[l.$errors]),p={cardNumber:e=>{const t=E.exports.formatCardNumber(e.target.value),r=E.exports.parseCardType(t);o("card_number",t),o("cardType",r)},cardExpire:e=>{const t=E.exports.formatCardExpiry(e.target.value);o("card_expire",t)}};return u.exports.useEffect((()=>{c(a)}),[a]),f.createElement(xe,null,f.createElement(ve,{onSubmit:t=>{t.preventDefault(),e(l.$data)}},f.createElement(qe,null,f.createElement(Ee,null,f.createElement(we,{error:!!d("email")},"Email"),f.createElement(Ce,s(i({},n.input({name:"email"})),{type:"email",placeholder:"you@company.com",autoComplete:"current-email"}))),d("email")&&f.createElement(_e,null,d("email"))),f.createElement(be,null,f.createElement(qe,null,f.createElement(Ee,null,f.createElement(we,{error:!!d("card_number")},"Card information"),f.createElement(ke,s(i({cardType:a.cardType},n.input({name:"card_number",onChange:p.cardNumber})),{type:"text",placeholder:"1234 1234 1234 1234"}))),d("card_number")&&f.createElement(_e,null,d("card_number"))),f.createElement(ye,null,f.createElement(qe,null,f.createElement(Ce,s(i({},n.input({name:"card_expire",onChange:p.cardExpire})),{type:"text",placeholder:"MM / YY"})),d("card_expire")&&f.createElement(_e,null,d("card_expire"))),f.createElement(qe,null,f.createElement(Ce,s(i({},n.input({name:"cvv"})),{type:"text",placeholder:"123"})),d("cvv")&&f.createElement(_e,null,d("cvv"))))),f.createElement(Me,null,f.createElement($e,{disabled:l.$auto_invalid||t},r))))},Re=m.section`
    width: 420px;
    max-width: 100%;
    padding: 40px 20px;
`,ze=m.section`
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 15px;

    margin-bottom: 35px;
`,Pe=m.article`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 20px;
    justify-content: space-between;
`,Te=m.header`
    width: 36px;
    height: 36px;
    border-radius: 5px;
    background-color: #fcfcfc;
    border: 3px solid var(--dorminant_1);

    margin: 0 auto;
    margin-bottom: 4px;
`,je=m.nav`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto 1fr;
    grid-gap: 3px;
`,Ae=m.h3`
    font-size: 0.875em;
    font-weight: 700;
    color: var(--product_label);
`,Oe=m.div`
    font-size: 0.6875em;
    font-weight: 500;
    color: var(--dorminant_1);
`,Ne=m.div`
    text-align: right;

    font-size: 0.875em;
    font-weight: 700;
    color: var(--dorminant_1);
`,Ve=m.div`
    text-align: right;

    font-size: 0.75em;
    font-weight: 500;
    color: var(--product_description);
`,Be=[{path:"/",key:"products",title:"Products",component:({BlockName:e="PageProducts"})=>{P({name:e});const[t,r]=d(),a=x(),{state:n,fetch:o}=(()=>{const e={loading:!1,data:[],error:null},{Request:t,state:r,setState:a,successResolver:n,isCancel:o}=N(e);return{state:r,fetch:u.exports.useCallback((async(r={})=>{a((t=>s(i({},t),{loading:!0,error:e.error})));const l=t({method:"get",url:"/products",params:r}).then(n).then(((t=e.data)=>{a((e=>s(i({},e),{data:t.data.products})))})).catch((e=>{if(o(e))return e;a((t=>{var r,a;return s(i({},t),{error:(null==(a=null==(r=null==e?void 0:e.response)?void 0:r.data)?void 0:a.message)||e.message})}))}));o(await l)||a((e=>s(i({},e),{loading:!1})))}),[a])}})(),l=u.exports.useMemo((()=>n.data.map((e=>s(i({},e),{qty:0})))),[n.data]),[c,p]=u.exports.useState([]),m=u.exports.useMemo((()=>c.reduce(((e,{qty:t})=>e+t),0)),[c]),g=u.exports.useMemo((()=>m<=0),[m]),h=u.exports.useMemo((()=>g||n.loading),[g,n.loading]),v=()=>{console.log("CKIC",t),r("/checkout")};return u.exports.useEffect((()=>{o()}),[o]),u.exports.useEffect((()=>{p(l)}),[l,p]),u.exports.useEffect((()=>{const e=c.filter((({qty:e})=>e>0));a({type:"UPDATE_CART",value:e})}),[c,a]),f.createElement(J,null,f.createElement(X,null,f.createElement(W,null,"Products"),f.createElement(K,{active:n.loading}),!n.loading&&f.createElement(ee,null,c.map((({id:e,name:t,price:r,qty:a})=>f.createElement(te,{key:e},f.createElement(re,null),f.createElement(ae,null,t),f.createElement(ne,null,r.toLocaleString()," MMK"),f.createElement(le,null,f.createElement(se,{disabled:a<=0,onClick:()=>(e=>{p((t=>t.map((t=>{if(e!==t.id)return t;const r=t.qty>0?t.qty-1:0;return s(i({},t),{qty:r})}))))})(e)},f.createElement(ge,null)),f.createElement(ie,null,a),f.createElement(se,{onClick:()=>(e=>{p((t=>t.map((t=>{if(e!==t.id)return t;const r=t.qty+1;return s(i({},t),{qty:r})}))))})(e)},f.createElement(me,null))),f.createElement(oe,null,"quantity"))))),!n.loading&&f.createElement(ce,null,f.createElement(pe,{disabled:g,onClick:v},f.createElement(fe,null),f.createElement(ue,{hidden:g},m)),f.createElement(de,{disabled:h,onClick:v},"Checkout"))))}},{path:"/checkout",key:"checkout",title:"Checkout",component:({BlockName:e="PageCheckout"})=>{P({name:e});const[,t]=d(),{state:{loading:r},post:a}=(()=>{const e={loading:!1,data:[],error:null},{Request:t,state:r,setState:a,successResolver:n}=N(e);return{state:r,post:u.exports.useCallback((async r=>{a((t=>s(i({},t),{loading:!0,error:e.error}))),t({method:"post",url:"/pay",data:r}).then(n).then(((t=e.data)=>{a((e=>s(i({},e),{data:t})))})).catch((e=>{a((t=>{var r,a;return s(i({},t),{error:(null==(a=null==(r=null==e?void 0:e.response)?void 0:r.data)?void 0:a.message)||e.message})}))})),a((e=>s(i({},e),{loading:!1})))}),[a])}})(),n=w((e=>e.cart)),o=u.exports.useMemo((()=>n.filter((e=>e.qty>0)).reduce(((e,{qty:t,price:r})=>e+t*r),0)),[n]);return u.exports.useEffect((()=>{n.length||(t("/"),C.error("Empty products. Please add some."))}),[n]),f.createElement(J,null,f.createElement(Re,null,f.createElement(W,null,"Checkout"),f.createElement(ze,null,n.map((({id:e,name:t,price:r,qty:a})=>f.createElement(Pe,{key:e},f.createElement(Te,null),f.createElement(je,null,f.createElement(Ae,null,t),f.createElement(Oe,null,r.toLocaleString()," MMK")),f.createElement(je,null,f.createElement(Ne,null,(r*a).toLocaleString()," MMK"),f.createElement(Ve,null,"qty: ",a)))))),f.createElement(Se,{onSuccess:e=>{const t=(Math.floor(88888889*Math.random())+11111111).toString();C.promise(a({requestId:t,paymentInfo:{cardInfo:{cardNo:`${e.card_number}`,cardCVV:`${e.cvv}`,cardExpiryDate:`${e.card_expire}`},email:`${e.email}`},products:n.map((e=>({id:e.id.toString(),quantity:e.qty})))}),{loading:"Paying...",success:"Success",error:"Something went wrong"})},submitText:`Pay ${o.toLocaleString()} MMK`,loading:r})))}},{key:"404",title:"Page not found",component:()=>f.createElement(f.Fragment,null,"404, Not Found!")}],Fe=()=>((e=>{const{matcher:t}=c(),[r]=d();u.exports.useEffect((()=>{let a=e.find((({path:e})=>t(e,r)[0]));a||(a=e.find((({path:e})=>null==e))),a&&(document.title=z({title:a.title}))}),[r])})(Be),f.createElement(k,{base:"/vite-ecommerce"},f.createElement($,null,Be.map((({component:e,path:t,key:r})=>f.createElement(_,{key:t||r,path:t,component:e})))))),De=M(((e,t)=>{const{type:r,value:a}=t;switch(r){case"UPDATE_CART":return s(i({},e),{cart:a});default:return e}}),{cart:[]});document.title=z(),q.exports.render(f.createElement(u.exports.StrictMode,null,f.createElement(L,{position:"top-center",reverseOrder:!0}),f.createElement(S,{store:De},f.createElement(Fe,null))),document.getElementById("root"));
