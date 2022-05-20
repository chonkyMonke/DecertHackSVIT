/* eslint-disable */

const scripts = [
  {
    type: 'code',
    body: '"use strict";var _slicedToArray=function(r,e){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r)){var t=e,n=[],i=!0,e=!1,a=void 0;try{for(var o,c=r[Symbol.iterator]();!(i=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(r){e=!0,a=r}finally{try{!i&&c.return&&c.return()}finally{if(e)throw a}}return n}throw new TypeError("Invalid attempt to destructure non-iterable instance")};window.__defineSetter__("Webflow",function(r){function i(t,n){Object.entries(t).forEach(function(r){var r=_slicedToArray(r,2),e=r[0],r=r[1];r instanceof Object&&i(r,n),n(e,r,t)})}var n=r.require;r.require=function(r){var e,t=Object.assign({},n(r));return/^ix2?$/.test(r)&&(e=t.init,t.init=function(r){return i(r,function(r,e,t){"selector"==r&&(t.selector=t.selector.replace(/\\.([\\w_-]+)/g,".af-class-$1").replace(/\\[class(.?)="( ?)([^"]+)( ?)"\\]/g,\'[class$1="$2af-class-$3$4"]\'))}),e(r)}),t},window.__defineGetter__("Webflow",function(){return r})});',
    isAsync: false,
  },
  {
    type: 'src',
    body: 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js',
    isAsync: false,
  },
  {
    type: 'code',
    body: 'WebFont.load({google:{families:["Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic"]}});',
    isAsync: false,
  },
  {
    type: 'code',
    body: '!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);',
    isAsync: false,
  },
]

const loadingScripts = scripts.concat(null).reduce((active, next) => Promise.resolve(active).then((active) => {
  const scriptEl = document.createElement('script')
  scriptEl.type = 'text/javascript'
  let loading

  if (active.type == 'src') {
    scriptEl.src = active.body

    loading = new Promise((resolve, reject) => {
      scriptEl.onload = resolve
      scriptEl.onerror = reject

      return next
    })
  }
  else {
    scriptEl.innerHTML = active.body

    loading = next
  }

  document.head.appendChild(scriptEl)

  return active.isAsync ? next : loading
}))

export default loadingScripts

/* eslint-enable */