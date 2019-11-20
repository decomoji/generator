// Polyfills
String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")});
Array.prototype.forEach||(Array.prototype.forEach=function(c){var d,a;if(null==this)throw new TypeError("this is null or not defined");var b=Object(this),e=b.length>>>0;if("function"!==typeof c)throw new TypeError(c+" is not a function");1<arguments.length&&(d=arguments[1]);for(a=0;a<e;){if(a in b){var f=b[a];c.call(d,f,a,b)}a++}});
Array.prototype.map||(Array.prototype.map=function(c){var e,a;if(null==this)throw new TypeError("this is null or not defined");var b=Object(this),f=b.length>>>0;if("function"!==typeof c)throw new TypeError(c+" is not a function");1<arguments.length&&(e=arguments[1]);var g=Array(f);for(a=0;a<f;){if(a in b){var d=b[a];d=c.call(e,d,a,b);g[a]=d}a++}return g});
Array.prototype.some||(Array.prototype.some=function(c,d){if(null==this)throw new TypeError("Array.prototype.some called on null or undefined");if("function"!==typeof c)throw new TypeError;var b=Object(this),e=b.length>>>0;d=2<=arguments.length?arguments[1]:void 0;for(var a=0;a<e;a++)if(a in b&&c.call(d,b[a],a,b))return!0;return!1});

/*!
 * https://github.com/martindrapeau/csvjson-csv2json
 * @license Copyright (c) 2019 Martin Drapeau, MIT License
 * see https://github.com/martindrapeau/csvjson-csv2json/blob/master/LICENSE
 */
(function(){function z(l){var g={},b;D.forEach(function(c,n){g[c]=(l.match(new RegExp(c,"g"))||[]).length;b=!b||g[c]>g[b]?c:b});return b}function E(){var l=[].slice.call(arguments);return l.reduce(function(g,b){return g.length>b.length?g:b},[]).map(function(g,b){return l.map(function(c){return c[b]})})}function F(l){for(var g={},b=0;b<l.length;b++){var c=l[b];void 0===g[c]?g[c]=0:g[c]++}var n=[];for(b=l.length-1;0<=b;b--)c=l[b],0<g[c]&&(c=c+"__"+g[c]--),n.unshift(c);return n}function v(l,g){g||(g={});if(0==l.length)throw"Empty CSV. Please provide something.";var b=g.separator||z(l);if(!b)throw"We could not detect the separator.";var c=[];try{c=G.parse(l,H[b])}catch(q){c=l.lastIndexOf("\n",q.offset);var n=l.indexOf("\n",q.offset);c=l.substring(-1<=c?c:0,-1<n?n:l.length);throw q.message+" On line "+q.line+" and column "+q.column+".\n"+c;}g.transpose&&(c=E.apply(this,c));b=c.shift();if(0==b.length)throw"Could not detect header. Ensure first row cotains your column headers.";b=b.map(function(b){return b.trim().replace(/(^")|("$)/g,"")});b=F(b);for(var A=g.hash?{}:[],t=0;t<c.length;t++){for(var u={},r=0;r<b.length;r++){var w=(c[t][r]||"").trim().replace(/(^")|("$)/g,""),v=""===w?NaN:w-0;if(g.hash&&0==r)n=w;else if(g.parseJSON||g.parseNumbers&&!isNaN(v))try{u[b[r]]=JSON.parse(w)}catch(q){u[b[r]]=w}else u[b[r]]=w}g.hash?A[n]=u:A.push(u)}return A}var D=[",",";","\t"],H={",":"comma",";":"semicolon","\t":"tab"},G=function(){function l(b){return'"'+b.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E-\x1F\x80-\uFFFF]/g,escape)+'"'}var g={parse:function(b,c){function n(b){a<y||(a>y&&(y=a,B=[]),B.push(b))}function g(){var e,c,d;var h=c=a;var f=[];if(/^[\n\r]/.test(b.charAt(a))){var g=b.charAt(a);a++}else g=null,0===p&&n("[\\n\\r]");for(;null!==g;)f.push(g),/^[\n\r]/.test(b.charAt(a))?(g=b.charAt(a),a++):(g=null,0===p&&n("[\\n\\r]"));if(null!==f)if(g=t(),null!==g){var k=[];var l=d=a;if(/^[\n\r]/.test(b.charAt(a))){var m=b.charAt(a);a++}else m=null,0===p&&n("[\\n\\r]");if(null!==m)for(e=[];null!==m;)e.push(m),/^[\n\r]/.test(b.charAt(a))?(m=b.charAt(a),a++):(m=null,0===p&&n("[\\n\\r]"));else e=null;null!==e?(m=t(),null!==m?e=[e,m]:(e=null,a=l)):(e=null,a=l);null!==e&&(e=e[1]);for(null===e&&(a=d);null!==e;){k.push(e);l=d=a;/^[\n\r]/.test(b.charAt(a))?(m=b.charAt(a),a++):(m=null,0===p&&n("[\\n\\r]"));if(null!==m)for(e=[];null!==m;)e.push(m),/^[\n\r]/.test(b.charAt(a))?(m=b.charAt(a),a++):(m=null,0===p&&n("[\\n\\r]"));else e=null;null!==e?(m=t(),null!==m?e=[e,m]:(e=null,a=l)):(e=null,a=l);null!==e&&(e=e[1]);null===e&&(a=d)}if(null!==k){e=[];/^[\n\r]/.test(b.charAt(a))?(m=b.charAt(a),a++):(m=null,0===p&&n("[\\n\\r]"));for(;null!==m;)e.push(m),/^[\n\r]/.test(b.charAt(a))?(m=b.charAt(a),a++):(m=null,0===p&&n("[\\n\\r]"));null!==e?f=[f,g,k,e]:(f=null,a=h)}else f=null,a=h}else f=null,a=h;else f=null,a=h;null!==f&&(g=f[2],g.unshift(f[1]),f=g);null===f&&(a=c);return f}function t(){var e,g;var d=e=a;var h=u();if(null!==h){var f=[];var c=g=a;if(b.length>a){var k=b.charAt(a);a++}else k=null,0===p&&n("any character");if(null!==k){var l=k==x?"":null;if(null!==l){var m=u();null!==m?k=[k,l,m]:(k=null,a=c)}else k=null,a=c}else k=null,a=c;null!==k&&(k=k[2]);for(null===k&&(a=g);null!==k;)f.push(k),c=g=a,b.length>a?(k=b.charAt(a),a++):(k=null,0===p&&n("any character")),null!==k?(l=k==x?"":null,null!==l?(m=u(),null!==m?k=[k,l,m]:(k=null,a=c)):(k=null,a=c)):(k=null,a=c),null!==k&&(k=k[2]),null===k&&(a=g);null!==f?(k=h||f.length?"":null,null!==k?h=[h,f,k]:(h=null,a=d)):(h=null,a=d)}else h=null,a=d;null!==h&&(f=h[1],f.unshift(h[0]),h=f);null===h&&(a=e);return h}function u(){var e,c;var d=c=a;if(34===b.charCodeAt(a)){var h='"';a++}else h=null,0===p&&n('"\\""');if(null!==h){var f=[];for(e=r();null!==e;)f.push(e),e=r();null!==f?(34===b.charCodeAt(a)?(e='"',a++):(e=null,0===p&&n('"\\""')),null!==e?h=[h,f,e]:(h=null,a=d)):(h=null,a=d)}else h=null,a=d;null!==h&&(h=h[1].join(""));null===h&&(a=c);if(null===h){c=a;h=[];var g=d=a;/^[^\n\r]/.test(b.charAt(a))?(f=b.charAt(a),a++):(f=null,0===p&&n("[^\\n\\r]"));null!==f?(e=f!=x?"":null,null!==e?f=[f,e]:(f=null,a=g)):(f=null,a=g);null!==f&&(f=f[0]);for(null===f&&(a=d);null!==f;)h.push(f),g=d=a,/^[^\n\r]/.test(b.charAt(a))?(f=b.charAt(a),a++):(f=null,0===p&&n("[^\\n\\r]")),null!==f?(e=f!=x?"":null,null!==e?f=[f,e]:(f=null,a=g)):(f=null,a=g),null!==f&&(f=f[0]),null===f&&(a=d);null!==h&&(h=h.join(""));null===h&&(a=c)}return h}function r(){var e;var c=e=a;if(34===b.charCodeAt(a)){var d='"';a++}else d=null,0===p&&n('"\\""');if(null!==d){if(34===b.charCodeAt(a)){var h='"';a++}else h=null,0===p&&n('"\\""');null!==h?d=[d,h]:(d=null,a=c)}else d=null,a=c;null!==d&&(d='"');null===d&&(a=e);null===d&&(/^[^"]/.test(b.charAt(a))?(d=b.charAt(a),a++):(d=null,0===p&&n('[^"]')));return d}function w(a){a.sort();for(var b=null,d=[],e=0;e<a.length;e++)a[e]!==b&&(d.push(a[e]),b=a[e]);return d}function v(){for(var e=1,c=1,d=!1,h=0;h<Math.max(a,y);h++){var f=b.charAt(h);"\n"===f?(d||e++,c=1,d=!1):"\r"===f||"\u2028"===f||"\u2029"===f?(e++,c=1,d=!0):(c++,d=!1)}return{line:e,column:c}}var q={comma:function(){var b;var c=b=a;var d=(x=",","");if(null!==d){var h=g();null!==h?d=[d,h]:(d=null,a=c)}else d=null,a=c;null!==d&&(d=d[1]);null===d&&(a=b);return d},semicolon:function(){var b;var c=b=a;var d=(x=";","");if(null!==d){var h=g();null!==h?d=[d,h]:(d=null,a=c)}else d=null,a=c;null!==d&&(d=d[1]);null===d&&(a=b);return d},tab:function(){var b;var c=b=a;var d=(x="\t","");if(null!==d){var h=g();null!==h?d=[d,h]:(d=null,a=c)}else d=null,a=c;null!==d&&(d=d[1]);null===d&&(a=b);return d},sv:g,line:t,field:u,"char":r};if(void 0!==c){if(void 0===q[c])throw Error("Invalid rule name: "+l(c)+".");}else c="comma";var a=0,p=0,y=0,B=[],x=",";q=q[c]();if(null===q||a!==b.length){q=Math.max(a,y);var z=q<b.length?b.charAt(q):null,C=v();throw new this.SyntaxError(w(B),z,q,C.line,C.column);}return q},toSource:function(){return this._source},SyntaxError:function(b,c,g,v,t){this.name="SyntaxError";this.expected=b;this.found=c;switch(b.length){case 0:b="end of input";break;case 1:b=b[0];break;default:b=b.slice(0,b.length-1).join(", ")+" or "+b[b.length-1]};c=c?l(c):"end of input";this.message="Expected "+b+" but "+c+" found.";this.offset=g;this.line=v;this.column=t}};g.SyntaxError.prototype=Error.prototype;return g}();"undefined"!==typeof exports?("undefined"!==typeof module&&module.exports&&(exports=module.exports=v),exports.csv2json=v):(this.CSVJSON||(this.CSVJSON={}),this.CSVJSON.csv2json=v)}).call(this);

/* 設定 */

var colors = [
  'd60000', // 0
  'ff6600', // 1
  '24aa00', // 2
  '00916a', // 3
  '009da3', // 4
  '008ad9', // 5
  '0066d9', // 6
  '1400a8', // 7
  '6800d3', // 8
  '990099', // 9
  'cd00bc', // 10
  'ff009c' // 11
]

var artboardSize = 64

var gutterSize = 36

var fontAssets = {
  'latin': [
    'Helvetica-Bold'
  ],
  'sans-serif': [
    'HiraKakuProN-W6',
    'HiraKakuPro-W6',
    'NotoSansCJKjp-Bold',
    'SourceHanSansJP-Bold',
    'Meiryo-Bold'
  ],
  'serif': [
    'MatissePro-B',
    'HiraMinProN-W6',
    'HiraMinPro-W6',
    'NotoSerifCJKjp-Bold',
    'SourceHanSerifJP-Bold',
    'YuMin-Demibold'
  ]
}

/* 処理 */

var parsedColors = colors.map(parseColor)

var docRef = app.documents.add(DocumentColorSpace.RGB)

var csvFile = File.openDialog('Choose decomoji CSV')
csvFile.open('r')
var rows = CSVJSON.csv2json(csvFile.read())

var columnCount = Math.min(rows.length, colors.length)

// アートボードを生成
rows.forEach(function(row, i) {
  var x = (i % columnCount) * (artboardSize + gutterSize)
  var y = Math.floor(i / columnCount) * (artboardSize + gutterSize) * -1
  var artboard = docRef.artboards.add([
    x,
    y,
    x + artboardSize,
    y - artboardSize
  ])
  artboard.name = row.yomi
})

// デフォルトのアートボードは削除する
docRef.artboards.remove(0)

// 文字を入れていく
rows.forEach(function(row, i) {
  var calculated = calcDrawingText(row.content)

  var textRef = docRef.textFrames.add()
  textRef.orientation = calculated.orientation
  textRef.contents = calculated.lines.join('\n')

  var charStyle = docRef.characterStyles.add(String(i))
  var attrs = charStyle.characterAttributes

  attrs.fillColor = getColorByIndex(i)
  attrs.textFont = getTextFont(row.font)
  attrs.size =
    calculated.orientation === TextOrientation.HORIZONTAL
      ? artboardSize / calculated.lines.length
      : artboardSize / calculated.lines[0].length
  attrs.autoLeading = false
  attrs.leading = attrs.size
  attrs.akiLeft = 0
  attrs.akiRight = 0

  // この時点のテキスト幅を図る必要があるため、いったんスタイルを適用する
  charStyle.applyTo(textRef.textRange, true)

  attrs.horizontalScale = Math.min(100, (artboardSize / textRef.width) * 100)
  charStyle.applyTo(textRef.textRange, true)

  textRef.left = docRef.artboards[i].artboardRect[0]
  textRef.top = docRef.artboards[i].artboardRect[1]

  // 縦書きの時に中央に寄せる
  if (textRef.width < artboardSize) {
    textRef.left += (artboardSize - textRef.width) / 2
  }

  // 今後必要のないスタイル定義なので削除する
  charStyle.remove()
})

/**
 * Hex color の成分を分解する
 * @param hexColor
 * @returns {{red: number, green: number, blue: number}}
 */
function parseColor(hexColor) {
  return {
    red: parseInt(hexColor.slice(0, 2), 16),
    green: parseInt(hexColor.slice(2, 4), 16),
    blue: parseInt(hexColor.slice(4, 6), 16)
  }
}

/**
 * テキストを分解して書字方向を決定する
 * @param rawText
 * @returns {{orientation: number, lines: Array<string>}}
 */
function calcDrawingText(rawText) {
  var orientation = TextOrientation.HORIZONTAL
  var lines = [rawText]
  // 半角スペースが含まれていれば強制的に改行
  if (rawText.indexOf(' ') >= 0) {
    lines = rawText.split(/ +/g)
  } else {
    var split = splitText(rawText)
    // ２文字かつASCII文字が含まれていなければ、縦書き
    if (split.length === 2 && !split.some(hasAsciiString)) {
      orientation = TextOrientation.VERTICAL
    } else if (split.length > 2) {
      var slicePos = Math.ceil(split.length / 2)
      lines = [split.slice(0, slicePos).join(''), split.slice(slicePos).join('')]
    }
  }
  return {
    orientation: orientation,
    lines: lines
  }
}

/**
 * テキストを分割する。ASCII文字の連続はひとまとまりと見なす。スペースは無視される。
 * 例:「ああhogeああ」→「あ,あ,hoge,あ,あ」
 * @param {String} text 分割するテキスト
 * @returns {Array<string>} 分割されたテキスト
 */
function splitText(text) {
  var split = []
  text.split(/\s*/).forEach(function(fragment) {
    if (split.length === 0) {
      split.push(fragment)
      return
    }
    var lastChar = split[split.length - 1].slice(-1)
    if (hasNonAsciiString(lastChar) || hasNonAsciiString(fragment)) {
      split.push(fragment)
    } else {
      split[split.length - 1] += fragment
    }
  })
  return split
}

/**
 * ASCII 文字を含むかどうか判定
 * @param string
 * @returns {boolean}
 */
function hasAsciiString(string) {
  return /[!-~]/.test(string)
}

/**
 * 非 ASCII 文字を含むかどうか判定
 * @param string
 * @returns {boolean}
 */
function hasNonAsciiString(string) {
  return /[^!-~]/.test(string)
}

/**
 * index から あるべき色を取得する
 * @param index
 * @returns {RGBColor}
 */
function getColorByIndex(index) {
  var colorIndex = index % columnCount
  var color = parsedColors[colorIndex]
  var fillColor = new RGBColor()
  fillColor.red = color.red
  fillColor.green = color.green
  fillColor.blue = color.blue
  return fillColor
}

/**
 * フォントの分類名から TextFont オブジェクトを取得する
 * @param fontName
 * @returns {TextFont}
 */
function getTextFont(fontName) {
  if (!fontName) {
    fontName = 'sans-serif'
  }
  if (fontName in fontAssets) {
    fontName = findAvailableFont(fontAssets[fontName])
  }
  return app.textFonts.getFontByName(fontName)
}

/**
 * 候補のなかから利用可能なフォントを探す
 * @param {Array<string>} targetFonts 候補フォント
 * @return {string} TextFonts.getFontByName に渡すフォント名
 */
function findAvailableFont(targetFonts) {
  for (var i = 0; i < targetFonts.length; i += 1) {
    if (app.textFonts.isFontAvailable(targetFonts[i])) {
      return targetFonts[i]
    }
  }
  // みつからなければ最初のフォントを返す。
  // 最終的に TextFonts.getFontByName メソッドを使うので、
  // 代替フォントの探索は Illustrator に任せるという意味。
  return targetFonts[0]
}
