"use strict";(self.webpackChunknext_ant_story=self.webpackChunknext_ant_story||[]).push([[955],{"./node_modules/@ant-design/icons/es/icons/CloseOutlined.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>icons_CloseOutlined});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js");const asn_CloseOutlined={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"}}]},name:"close",theme:"outlined"};var AntdIcon=__webpack_require__("./node_modules/@ant-design/icons/es/components/AntdIcon.js"),CloseOutlined_CloseOutlined=function CloseOutlined(props,ref){return react.createElement(AntdIcon.Z,(0,esm_extends.Z)({},props,{ref,icon:asn_CloseOutlined}))};const icons_CloseOutlined=react.forwardRef(CloseOutlined_CloseOutlined)},"./node_modules/antd/es/_util/colors.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o2:()=>isPresetColor,yT:()=>isPresetStatusColor});var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),_theme_interface__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/antd/es/theme/interface/presetColors.js");const inverseColors=_theme_interface__WEBPACK_IMPORTED_MODULE_0__.i.map((color=>`${color}-inverse`)),PresetStatusColorTypes=["success","processing","error","default","warning"];function isPresetColor(color){return!(arguments.length>1&&void 0!==arguments[1])||arguments[1]?[].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.Z)(inverseColors),(0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.Z)(_theme_interface__WEBPACK_IMPORTED_MODULE_0__.i)).includes(color):_theme_interface__WEBPACK_IMPORTED_MODULE_0__.i.includes(color)}function isPresetStatusColor(color){return PresetStatusColorTypes.includes(color)}},"./node_modules/antd/es/tag/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>tag});var CloseOutlined=__webpack_require__("./node_modules/@ant-design/icons/es/icons/CloseOutlined.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),react=__webpack_require__("./node_modules/react/index.js"),colors=__webpack_require__("./node_modules/antd/es/_util/colors.js");var wave=__webpack_require__("./node_modules/antd/es/_util/wave/index.js"),context=__webpack_require__("./node_modules/antd/es/config-provider/context.js");var style=__webpack_require__("./node_modules/antd/es/style/index.js"),genPresetColor=__webpack_require__("./node_modules/antd/es/theme/util/genPresetColor.js"),genComponentStyleHook=__webpack_require__("./node_modules/antd/es/theme/util/genComponentStyleHook.js"),statistic=__webpack_require__("./node_modules/antd/es/theme/util/statistic.js");const genTagStatusStyle=(token,status,cssVariableType)=>{const capitalizedCssVariableType=function capitalize(str){return"string"!=typeof str?str:str.charAt(0).toUpperCase()+str.slice(1)}(cssVariableType);return{[`${token.componentCls}-${status}`]:{color:token[`color${cssVariableType}`],background:token[`color${capitalizedCssVariableType}Bg`],borderColor:token[`color${capitalizedCssVariableType}Border`],[`&${token.componentCls}-borderless`]:{borderColor:"transparent"}}}},genPresetStyle=token=>(0,genPresetColor.Z)(token,((colorKey,_ref)=>{let{textColor,lightBorderColor,lightColor,darkColor}=_ref;return{[`${token.componentCls}-${colorKey}`]:{color:textColor,background:lightColor,borderColor:lightBorderColor,"&-inverse":{color:token.colorTextLightSolid,background:darkColor,borderColor:darkColor},[`&${token.componentCls}-borderless`]:{borderColor:"transparent"}}}})),genBaseStyle=token=>{const{paddingXXS,lineWidth,tagPaddingHorizontal,componentCls}=token,paddingInline=tagPaddingHorizontal-lineWidth,iconMarginInline=paddingXXS-lineWidth;return{[componentCls]:Object.assign(Object.assign({},(0,style.Wf)(token)),{display:"inline-block",height:"auto",marginInlineEnd:token.marginXS,paddingInline,fontSize:token.tagFontSize,lineHeight:token.tagLineHeight,whiteSpace:"nowrap",background:token.defaultBg,border:`${token.lineWidth}px ${token.lineType} ${token.colorBorder}`,borderRadius:token.borderRadiusSM,opacity:1,transition:`all ${token.motionDurationMid}`,textAlign:"start",position:"relative",[`&${componentCls}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:token.defaultColor},[`${componentCls}-close-icon`]:{marginInlineStart:iconMarginInline,color:token.colorTextDescription,fontSize:token.tagIconSize,cursor:"pointer",transition:`all ${token.motionDurationMid}`,"&:hover":{color:token.colorTextHeading}},[`&${componentCls}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${token.iconCls}-close, ${token.iconCls}-close:hover`]:{color:token.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${componentCls}-checkable-checked):hover`]:{color:token.colorPrimary,backgroundColor:token.colorFillSecondary},"&:active, &-checked":{color:token.colorTextLightSolid},"&-checked":{backgroundColor:token.colorPrimary,"&:hover":{backgroundColor:token.colorPrimaryHover}},"&:active":{backgroundColor:token.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${token.iconCls} + span, > span + ${token.iconCls}`]:{marginInlineStart:paddingInline}}),[`${componentCls}-borderless`]:{borderColor:"transparent",background:token.tagBorderlessBg}}},tag_style=(0,genComponentStyleHook.Z)("Tag",(token=>{const{lineWidth,fontSizeIcon}=token,tagFontSize=token.fontSizeSM,tagLineHeight=token.lineHeightSM*tagFontSize+"px",tagToken=(0,statistic.TS)(token,{tagFontSize,tagLineHeight,tagIconSize:fontSizeIcon-2*lineWidth,tagPaddingHorizontal:8,tagBorderlessBg:token.colorFillTertiary});return[genBaseStyle(tagToken),genPresetStyle(tagToken),genTagStatusStyle(tagToken,"success","Success"),genTagStatusStyle(tagToken,"processing","Info"),genTagStatusStyle(tagToken,"error","Error"),genTagStatusStyle(tagToken,"warning","Warning")]}),(token=>({defaultBg:token.colorFillQuaternary,defaultColor:token.colorText})));var __rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const tag_CheckableTag=props=>{const{prefixCls:customizePrefixCls,className,checked,onChange,onClick}=props,restProps=__rest(props,["prefixCls","className","checked","onChange","onClick"]),{getPrefixCls}=react.useContext(context.E_),prefixCls=getPrefixCls("tag",customizePrefixCls),[wrapSSR,hashId]=tag_style(prefixCls),cls=classnames_default()(prefixCls,`${prefixCls}-checkable`,{[`${prefixCls}-checkable-checked`]:checked},className,hashId);return wrapSSR(react.createElement("span",Object.assign({},restProps,{className:cls,onClick:e=>{null==onChange||onChange(!checked),null==onClick||onClick(e)}})))};var tag_rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const InternalTag=(tagProps,ref)=>{const{prefixCls:customizePrefixCls,className,rootClassName,style,children,icon,color,onClose,closeIcon,closable,bordered=!0}=tagProps,props=tag_rest(tagProps,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable","bordered"]),{getPrefixCls,direction,tag}=react.useContext(context.E_),[visible,setVisible]=react.useState(!0);react.useEffect((()=>{"visible"in props&&setVisible(props.visible)}),[props.visible]);const isInternalColor=(0,colors.o2)(color)||(0,colors.yT)(color),tagStyle=Object.assign(Object.assign({backgroundColor:color&&!isInternalColor?color:void 0},null==tag?void 0:tag.style),style),prefixCls=getPrefixCls("tag",customizePrefixCls),[wrapSSR,hashId]=tag_style(prefixCls),tagClassName=classnames_default()(prefixCls,null==tag?void 0:tag.className,{[`${prefixCls}-${color}`]:isInternalColor,[`${prefixCls}-has-color`]:color&&!isInternalColor,[`${prefixCls}-hidden`]:!visible,[`${prefixCls}-rtl`]:"rtl"===direction,[`${prefixCls}-borderless`]:!bordered},className,rootClassName,hashId),handleCloseClick=e=>{e.stopPropagation(),null==onClose||onClose(e),e.defaultPrevented||setVisible(!1)},[,mergedCloseIcon]=function useClosable(closable,closeIcon,customCloseIconRender){let defaultCloseIcon=arguments.length>3&&void 0!==arguments[3]?arguments[3]:react.createElement(CloseOutlined.Z,null);const mergedClosable=function useInnerClosable(closable,closeIcon,defaultClosable){return"boolean"==typeof closable?closable:void 0===closeIcon?!!defaultClosable:!1!==closeIcon&&null!==closeIcon}(closable,closeIcon,arguments.length>4&&void 0!==arguments[4]&&arguments[4]);if(!mergedClosable)return[!1,null];const mergedCloseIcon="boolean"==typeof closeIcon||null==closeIcon?defaultCloseIcon:closeIcon;return[!0,customCloseIconRender?customCloseIconRender(mergedCloseIcon):mergedCloseIcon]}(closable,closeIcon,(iconNode=>null===iconNode?react.createElement(CloseOutlined.Z,{className:`${prefixCls}-close-icon`,onClick:handleCloseClick}):react.createElement("span",{className:`${prefixCls}-close-icon`,onClick:handleCloseClick},iconNode)),null,!1),isNeedWave="function"==typeof props.onClick||children&&"a"===children.type,iconNode=icon||null,kids=iconNode?react.createElement(react.Fragment,null,iconNode,children&&react.createElement("span",null,children)):children,tagNode=react.createElement("span",Object.assign({},props,{ref,className:tagClassName,style:tagStyle}),kids,mergedCloseIcon);return wrapSSR(isNeedWave?react.createElement(wave.Z,null,tagNode):tagNode)},Tag=react.forwardRef(InternalTag);Tag.CheckableTag=tag_CheckableTag;const tag=Tag},"./node_modules/antd/es/theme/interface/presetColors.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>PresetColors});const PresetColors=["blue","purple","cyan","green","magenta","pink","red","orange","yellow","volcano","geekblue","lime","gold"]},"./node_modules/antd/es/theme/util/genPresetColor.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>genPresetColor});var _interface__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/antd/es/theme/interface/presetColors.js");function genPresetColor(token,genCss){return _interface__WEBPACK_IMPORTED_MODULE_0__.i.reduce(((prev,colorKey)=>{const lightColor=token[`${colorKey}1`],lightBorderColor=token[`${colorKey}3`],darkColor=token[`${colorKey}6`],textColor=token[`${colorKey}7`];return Object.assign(Object.assign({},prev),genCss(colorKey,{lightColor,lightBorderColor,darkColor,textColor}))}),{})}},"./stories/components/ProductOverview/ProductOverview.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Sample:()=>Sample,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Sample$parameters,_Sample$parameters2,_Users_muhammadzohaibimtiaz_Documents_Outlook_portfolio_ecommerce_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_Users_muhammadzohaibimtiaz_Documents_Outlook_portfolio_ecommerce_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"SubComponent/ProductOverview",component:__webpack_require__("./stories/components/ProductOverview/ProductOverview.tsx").x,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{type:"string"},discount:{type:"number"},price:{type:"number"},discountedPrice:{type:"number"}}};var Default={args:{name:"Product Name",price:100,discountedPrice:80,discount:20}},Sample={args:{name:"Product Name",price:100,discountedPrice:80,discount:20}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    name: "Product Name",\n    price: 100,\n    discountedPrice: 80,\n    discount: 20\n  }\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),Sample.parameters=_objectSpread(_objectSpread({},Sample.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Sample$parameters=Sample.parameters)||void 0===_Sample$parameters?void 0:_Sample$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    name: "Product Name",\n    price: 100,\n    discountedPrice: 80,\n    discount: 20\n  }\n}'},null===(_Sample$parameters2=Sample.parameters)||void 0===_Sample$parameters2||null===(_Sample$parameters2=_Sample$parameters2.docs)||void 0===_Sample$parameters2?void 0:_Sample$parameters2.source)})})},"./stories/components/ProductOverview/ProductOverview.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>ProductOverview});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),antd__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/antd/es/tag/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,ProductOverview=function ProductOverview(_ref){var name=_ref.name,price=_ref.price,discountedPrice=_ref.discountedPrice,discount=_ref.discount;return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("h2",null,name),__jsx("div",{style:{display:"flex",justifyContent:"space-between"}},__jsx("span",null,discountedPrice),__jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Z,{color:"green"},discount,"% Off")),__jsx("span",null,price))};ProductOverview.__docgenInfo={description:"",methods:[],displayName:"ProductOverview",props:{name:{required:!0,tsType:{name:"string"},description:""},price:{required:!0,tsType:{name:"number"},description:""},discountedPrice:{required:!0,tsType:{name:"number"},description:""},discount:{required:!0,tsType:{name:"number"},description:""},currency:{required:!1,tsType:{name:"string"},description:""}}};try{ProductOverview.displayName="ProductOverview",ProductOverview.__docgenInfo={description:"",displayName:"ProductOverview",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},price:{defaultValue:null,description:"",name:"price",required:!0,type:{name:"number"}},discountedPrice:{defaultValue:null,description:"",name:"discountedPrice",required:!0,type:{name:"number"}},discount:{defaultValue:null,description:"",name:"discount",required:!0,type:{name:"number"}},currency:{defaultValue:null,description:"",name:"currency",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/components/ProductOverview/ProductOverview.tsx#ProductOverview"]={docgenInfo:ProductOverview.__docgenInfo,name:"ProductOverview",path:"stories/components/ProductOverview/ProductOverview.tsx#ProductOverview"})}catch(__react_docgen_typescript_loader_error){}}}]);