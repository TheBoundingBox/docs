import{o as e,c as i,n as s,a,t as n}from"./app.38fa1a20.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const r={props:["src","alt","input","label","width","square"],computed:{buttonStyle(){return typeof this.square!="undefined"?`padding: ${this.width/10}em;`:`padding: ${this.width/5}em ${this.width/2}em;`},inputStyle(){return`
                width: ${this.width}em;
                height: ${this.width}em;
            `},iconStyle(){return`
                width: ${this.width}em;
                height: ${this.width}em;
                mask-image: url(${this.src});
                -webkit-mask-image: url(${this.src});
            `}}},d={key:2,class:"epl-label"};function c(h,o,t,_,m,l){return e(),i("div",{class:"epl-button",style:s(l.buttonStyle)},[t.src!=null?(e(),i("div",{key:0,class:"epl-icon",style:s(l.iconStyle)},null,4)):a("",!0),t.input!=null?(e(),i("div",{key:1,class:"epl-input-text",style:s(l.inputStyle)},n(t.input),5)):a("",!0),t.label!=null?(e(),i("div",d,n(t.label),1)):a("",!0)],4)}var w=u(r,[["render",c],["__scopeId","data-v-d784e592"]]);export{w as default};
