webpackJsonp([346],{"/LZM":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e("Pexp"),a=(e("OMJi"),e("Tg7E")),o={components:{cTitle:i.a},data:function(){return{val:0}},activated:function(){this.getData(),this.fun.setWXTitle(this.fun.initWithdrawal())},methods:{getData:function(){var n=this;$http.get("plugin.froze.Frontend.Controllers.page.index",{},"加载中").then(function(t){1===t.result&&(n.val=t.data.thaw)}).catch(function(n){console.log(n)})},submit:function(){var n=this;$http.get("plugin.froze.Frontend.Modules.Froze.Controllers.withdraw.index",{change_value:this.val},this.fun.initWithdrawal()+"中").then(function(t){1===t.result?a.MessageBox.alert(t.msg,"提示").then(function(){n.$router.push(n.fun.getUrl("withdrawal"))}):(a.MessageBox.alert(t.msg,"提示"),n.$router.go(-1))}).catch(function(n){console.log(n)})}}},r={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("section",{attrs:{id:"page"}},[e("c-title",{attrs:{hide:!1,text:""+this.fun.initWithdrawal()}}),n._v(" "),e("div",{staticClass:"content"},[e("ul",{staticClass:"transfer_info"},[e("li",{staticClass:"info_a"},[e("span",[n._v("可"+n._s(this.fun.initWithdrawal())+"：")]),n._v(" "),e("span",[n._v(n._s(n.val)+"元")])])]),n._v(" "),e("button",{staticClass:"btn custom_color",attrs:{type:"button"},on:{click:n.submit}},[n._v("\n      确认转账\n    ")])])],1)},staticRenderFns:[]};var s=e("VU/8")(o,r,!1,function(n){e("V6JZ")},null,null);t.default=s.exports},KSH0:function(n,t,e){(n.exports=e("FZ+f")(!1)).push([n.i,"\n#page {\n  padding-top: 50px;\n}\n#page .content .transfer_info {\n    background: #fff;\n    padding-left: 0.875rem;\n    font-size: 16px;\n}\n#page .content .transfer_info .info_a,\n    #page .content .transfer_info .info_b {\n      line-height: 2.875rem;\n      border-bottom: solid 0.0625rem #ebebeb;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: start;\n          -ms-flex-pack: start;\n              justify-content: flex-start;\n}\n#page .content .transfer_info .info_a span:first-child,\n      #page .content .transfer_info .info_b span:first-child {\n        width: 6.875rem;\n        display: block;\n        text-align: left;\n}\n#page .content .transfer_info .info_a input,\n      #page .content .transfer_info .info_b input {\n        border: none;\n        width: 15.625rem;\n}\n#page .content .transfer_sum {\n    background: #fff;\n    padding: 0.625rem 0.875rem;\n}\n#page .content .transfer_sum span {\n      display: block;\n      font-size: 16px;\n      line-height: 2.5rem;\n      text-align: left;\n}\n#page .content .transfer_sum .sum {\n      text-align: left;\n      font-size: 24px;\n}\n#page .content .transfer_sum .sum input {\n        margin-left: 0.375rem;\n        line-height: 3.75rem;\n        width: 90%;\n        font-size: 36px;\n        border: none;\n}\n#page .content .personal_info {\n    margin-top: 0.625rem;\n    background: #fff;\n    padding-left: 0.875rem;\n}\n#page .content .personal_info li {\n      line-height: 2.875rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      font-size: 16px;\n      border-bottom: solid 0.0625rem #ebebeb;\n      text-align: left;\n}\n#page .content .personal_info li span:first-child {\n        display: block;\n        width: 6.875rem;\n}\n#page .content .personal_info li:last-child {\n      border: none;\n}\n#page .content .btn {\n    width: 21.5625rem;\n    margin: 1.25rem auto;\n    height: 2.875rem;\n    border-radius: 0.25rem;\n    font-size: 16px;\n    color: #fff;\n    background: #f15353;\n    border: none;\n}\n",""])},V6JZ:function(n,t,e){var i=e("KSH0");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e("rjj0")("8c2d3748",i,!0,{})}});