"use strict";function _defineProperty(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function getPageCtx(e){var t=e;if(!t){var o=getCurrentPages();t=o[o.length-1]}return t}function getPageToastConfig(e){return(e.data.jfk||{}).__jfkToastPageConfig||{}}function Toast(e,t){var o=e||{};"string"==typeof e&&(o={title:e});var a=getPageCtx(t),n=getPageToastConfig(a),g=Object.assign({},globalToastUserConfig,n,o);if(g.selector){var i=a.selectComponent(g.selector);i&&i.showWithOptions(g)}}var TOAST_CONFIG_KEY="jfk.__jfkToastPageConfig",globalToastUserConfig={};Toast.setDefaultOptions=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"page",o={selector:e.selector||"",icon:e.icon||"",duration:e.duration||3e3};if("global"===t)globalToastUserConfig=Object.assign({},o);else if("page"===t){var a=getPageCtx();a.setData(_defineProperty({},""+TOAST_CONFIG_KEY,o))}},Toast.resetDefaultOptions=function(){"global"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"page")?globalToastUserConfig={}:getPageCtx().setData(_defineProperty({},""+TOAST_CONFIG_KEY,{}))},module.exports=Toast;