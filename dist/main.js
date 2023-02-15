"use strict";

function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
;
(function () {
  var lines = document.querySelectorAll(".colors-acco__item");
  for (var index = 0; index < lines.length; index++) {
    var element = lines[index];
    element.addEventListener("click", function (e) {
      e.preventDefault();
      if (e.target.classList.contains("colors-acco__content")) return;
      var currentLine = e.target.closest(".colors-acco__item");
      for (var i = 0; i < lines.length; i++) {
        if (lines[i] !== currentLine) lines[i].classList.remove("colors-acco__item-active");
      }
      if (currentLine.classList.contains("colors-acco__item-active")) {
        currentLine.classList.remove("colors-acco__item-active");
      } else {
        currentLine.classList.add("colors-acco__item-active");
      }
    });
  }
})();
(function () {
  var openElement = document.querySelector(".hamburger");
  var closeElement = document.querySelector(".cross__logo");
  var body = document.body;
  openElement.addEventListener("click", function (e) {
    e.preventDefault();
    var humburgerMenu = document.querySelector("#humburgerMenu");
    humburgerMenu.classList.remove(".hamburger-menu");
    var hamburgerMain = document.querySelector(".hamburger-menu");
    hamburgerMain.classList.toggle("hamburger-main");
  });
  closeElement.addEventListener("click", function (e) {
    e.preventDefault();
    var hamburgerMain = document.querySelector(".hamburger-menu");
    hamburgerMain.classList.remove("hamburger-main");
  });
  humburgerMenu.addEventListener("click", function (e) {
    if (!e.target.classList.contains("hamburger-menu__link")) {
      closeElement.click();
    }
  });
})();
!function (e, t) {
  "use strict";

  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : void 0, function (C, e) {
  "use strict";

  var t = [],
    r = Object.getPrototypeOf,
    s = t.slice,
    g = t.flat ? function (e) {
      return t.flat.call(e);
    } : function (e) {
      return t.concat.apply([], e);
    },
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    y = n.hasOwnProperty,
    a = y.toString,
    l = a.call(Object),
    v = {},
    m = function m(e) {
      return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
    },
    x = function x(e) {
      return null != e && e === e.window;
    },
    S = C.document,
    c = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0
    };
  function b(e, t, n) {
    var r,
      i,
      o = (n = n || S).createElement("script");
    if (o.text = e, t) for (r in c) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function w(e) {
    return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? n[o.call(e)] || "object" : _typeof(e);
  }
  var f = "3.6.3",
    E = function E(e, t) {
      return new E.fn.init(e, t);
    };
  function p(e) {
    var t = !!e && "length" in e && e.length,
      n = w(e);
    return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
  }
  E.fn = E.prototype = {
    jquery: f,
    constructor: E,
    length: 0,
    toArray: function toArray() {
      return s.call(this);
    },
    get: function get(e) {
      return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function pushStack(e) {
      var t = E.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function each(e) {
      return E.each(this, e);
    },
    map: function map(n) {
      return this.pushStack(E.map(this, function (e, t) {
        return n.call(e, t, e);
      }));
    },
    slice: function slice() {
      return this.pushStack(s.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    even: function even() {
      return this.pushStack(E.grep(this, function (e, t) {
        return (t + 1) % 2;
      }));
    },
    odd: function odd() {
      return this.pushStack(E.grep(this, function (e, t) {
        return t % 2;
      }));
    },
    eq: function eq(e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: u,
    sort: t.sort,
    splice: t.splice
  }, E.extend = E.fn.extend = function () {
    var e,
      t,
      n,
      r,
      i,
      o,
      a = arguments[0] || {},
      s = 1,
      u = arguments.length,
      l = !1;
    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == _typeof(a) || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (E.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || E.isPlainObject(n) ? n : {}, i = !1, a[t] = E.extend(l, o, r)) : void 0 !== r && (a[t] = r));
    return a;
  }, E.extend({
    expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(e) {
      throw new Error(e);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(e) {
      var t, n;
      return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = y.call(t, "constructor") && t.constructor) && a.call(n) === l);
    },
    isEmptyObject: function isEmptyObject(e) {
      var t;
      for (t in e) return !1;
      return !0;
    },
    globalEval: function globalEval(e, t, n) {
      b(e, {
        nonce: t && t.nonce
      }, n);
    },
    each: function each(e, t) {
      var n,
        r = 0;
      if (p(e)) {
        for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break;
      } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
      return e;
    },
    makeArray: function makeArray(e, t) {
      var n = t || [];
      return null != e && (p(Object(e)) ? E.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
    },
    inArray: function inArray(e, t, n) {
      return null == t ? -1 : i.call(t, e, n);
    },
    merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
      return e.length = i, e;
    },
    grep: function grep(e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
      return r;
    },
    map: function map(e, t, n) {
      var r,
        i,
        o = 0,
        a = [];
      if (p(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
      return g(a);
    },
    guid: 1,
    support: v
  }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol.iterator]), E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase();
  });
  var d = function (n) {
    var e,
      d,
      b,
      o,
      i,
      h,
      f,
      g,
      w,
      u,
      l,
      T,
      C,
      a,
      S,
      y,
      s,
      c,
      v,
      E = "sizzle" + 1 * new Date(),
      p = n.document,
      k = 0,
      r = 0,
      m = ue(),
      x = ue(),
      A = ue(),
      N = ue(),
      j = function j(e, t) {
        return e === t && (l = !0), 0;
      },
      D = {}.hasOwnProperty,
      t = [],
      q = t.pop,
      L = t.push,
      H = t.push,
      O = t.slice,
      P = function P(e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
      F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
      $ = new RegExp(M + "+", "g"),
      B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      _ = new RegExp("^" + M + "*," + M + "*"),
      z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      U = new RegExp(M + "|>"),
      X = new RegExp(F),
      V = new RegExp("^" + I + "$"),
      G = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + W),
        PSEUDO: new RegExp("^" + F),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
      },
      Y = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
      ne = function ne(e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function ie(e, t) {
        return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
      },
      oe = function oe() {
        T();
      },
      ae = be(function (e) {
        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
      }, {
        dir: "parentNode",
        next: "legend"
      });
    try {
      H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length ? function (e, t) {
          L.apply(e, O.call(t));
        } : function (e, t) {
          var n = e.length,
            r = 0;
          while (e[n++] = t[r++]);
          e.length = n - 1;
        }
      };
    }
    function se(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
      if (!r && (T(e), e = e || C, S)) {
        if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
          if (9 === p) {
            if (!(a = e.getElementById(i))) return n;
            if (a.id === i) return n.push(a), n;
          } else if (f && (a = f.getElementById(i)) && v(e, a) && a.id === i) return n.push(a), n;
        } else {
          if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
          if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n;
        }
        if (d.qsa && !N[t + " "] && (!y || !y.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
          if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
            (f = ee.test(t) && ve(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = E)), o = (l = h(t)).length;
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
            c = l.join(",");
          }
          try {
            if (d.cssSupportsSelector && !CSS.supports("selector(:is(" + c + "))")) throw new Error();
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === E && e.removeAttribute("id");
          }
        }
      }
      return g(t.replace(B, "$1"), e, n, r);
    }
    function ue() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
      };
    }
    function le(e) {
      return e[E] = !0, e;
    }
    function ce(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }
    function fe(e, t) {
      var n = e.split("|"),
        r = n.length;
      while (r--) b.attrHandle[n[r]] = t;
    }
    function pe(e, t) {
      var n = t && e,
        r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while (n = n.nextSibling) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function ge(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t;
      };
    }
    function ye(a) {
      return le(function (o) {
        return o = +o, le(function (e, t) {
          var n,
            r = a([], e.length, o),
            i = r.length;
          while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]));
        });
      });
    }
    function ve(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    for (e in d = se.support = {}, i = se.isXML = function (e) {
      var t = e && e.namespaceURI,
        n = e && (e.ownerDocument || e).documentElement;
      return !Y.test(t || n && n.nodeName || "HTML");
    }, T = se.setDocument = function (e) {
      var t,
        n,
        r = e ? e.ownerDocument || e : p;
      return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, S = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function (e) {
        return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
      }), d.cssSupportsSelector = ce(function () {
        return CSS.supports("selector(*)") && C.querySelectorAll(":is(:jqfake)") && !CSS.supports("selector(:is(*,:jqfake))");
      }), d.attributes = ce(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), d.getElementsByTagName = ce(function (e) {
        return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
      }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
        return a.appendChild(e).id = E, !C.getElementsByName || !C.getElementsByName(E).length;
      }), d.getById ? (b.filter.ID = function (e) {
        var t = e.replace(te, ne);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && S) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (b.filter.ID = function (e) {
        var n = e.replace(te, ne);
        return function (e) {
          var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return t && t.value === n;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && S) {
          var n,
            r,
            i,
            o = t.getElementById(e);
          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;
            while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
          }
          return [];
        }
      }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
          r = [],
          i = 0,
          o = t.getElementsByTagName(e);
        if ("*" === e) {
          while (n = o[i++]) 1 === n.nodeType && r.push(n);
          return r;
        }
        return o;
      }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && S) return t.getElementsByClassName(e);
      }, s = [], y = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
        var t;
        a.appendChild(e).innerHTML = "<a id='" + E + "'></a><select id='" + E + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + E + "-]").length || y.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || y.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + E + "+*").length || y.push(".#.+[+~]"), e.querySelectorAll("\\\f"), y.push("[\\r\\n\\f]");
      }), ce(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = C.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:");
      })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
        d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F);
      }), d.cssSupportsSelector || y.push(":has"), y = y.length && new RegExp(y.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), v = t || K.test(a.contains) ? function (e, t) {
        var n = 9 === e.nodeType && e.documentElement || e,
          r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) if (t === e) return !0;
        return !1;
      }, j = t ? function (e, t) {
        if (e === t) return l = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && v(p, e) ? -1 : t == C || t.ownerDocument == p && v(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t) return l = !0, 0;
        var n,
          r = 0,
          i = e.parentNode,
          o = t.parentNode,
          a = [e],
          s = [t];
        if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
        if (i === o) return pe(e, t);
        n = e;
        while (n = n.parentNode) a.unshift(n);
        n = t;
        while (n = n.parentNode) s.unshift(n);
        while (a[r] === s[r]) r++;
        return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0;
      }), C;
    }, se.matches = function (e, t) {
      return se(e, null, null, t);
    }, se.matchesSelector = function (e, t) {
      if (T(e), d.matchesSelector && S && !N[t + " "] && (!s || !s.test(t)) && (!y || !y.test(t))) try {
        var n = c.call(e, t);
        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (e) {
        N(t, !0);
      }
      return 0 < se(t, C, null, [e]).length;
    }, se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), v(e, t);
    }, se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !S) : void 0;
      return void 0 !== r ? r : d.attributes || !S ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }, se.escape = function (e) {
      return (e + "").replace(re, ie);
    }, se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(j), l) {
        while (t = e[i++]) t === e[i] && (r = n.push(i));
        while (r--) e.splice(n[r], 1);
      }
      return u = null, e;
    }, o = se.getText = function (e) {
      var t,
        n = "",
        r = 0,
        i = e.nodeType;
      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else while (t = e[r++]) n += o(t);
      return n;
    }, (b = se.selectors = {
      cacheLength: 50,
      createPseudo: le,
      match: G,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(e) {
          return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var t,
            n = !e[6] && e[2];
          return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(e) {
          var t = e.replace(te, ne).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function CLASS(e) {
          var t = m[e + " "];
          return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(n, r, i) {
          return function (e) {
            var t = se.attr(e, n);
            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace($, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function CHILD(h, e, t, g, y) {
          var v = "nth" !== h.slice(0, 3),
            m = "last" !== h.slice(-4),
            x = "of-type" === e;
          return 1 === g && 0 === y ? function (e) {
            return !!e.parentNode;
          } : function (e, t, n) {
            var r,
              i,
              o,
              a,
              s,
              u,
              l = v !== m ? "nextSibling" : "previousSibling",
              c = e.parentNode,
              f = x && e.nodeName.toLowerCase(),
              p = !n && !x,
              d = !1;
            if (c) {
              if (v) {
                while (l) {
                  a = e;
                  while (a = a[l]) if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                  u = l = "only" === h && !u && "nextSibling";
                }
                return !0;
              }
              if (u = [m ? c.firstChild : c.lastChild], m && p) {
                d = (s = (r = (i = (o = (a = c)[E] || (a[E] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];
                while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if (1 === a.nodeType && ++d && a === e) {
                  i[h] = [k, s, d];
                  break;
                }
              } else if (p && (d = s = (r = (i = (o = (a = e)[E] || (a[E] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[E] || (a[E] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
              return (d -= y) === g || d % g == 0 && 0 <= d / g;
            }
          };
        },
        PSEUDO: function PSEUDO(e, o) {
          var t,
            a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
          return a[E] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
            var n,
              r = a(e, o),
              i = r.length;
            while (i--) e[n = P(e, r[i])] = !(t[n] = r[i]);
          }) : function (e) {
            return a(e, 0, t);
          }) : a;
        }
      },
      pseudos: {
        not: le(function (e) {
          var r = [],
            i = [],
            s = f(e.replace(B, "$1"));
          return s[E] ? le(function (e, t, n, r) {
            var i,
              o = s(e, null, r, []),
              a = e.length;
            while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
          }) : function (e, t, n) {
            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
          };
        }),
        has: le(function (t) {
          return function (e) {
            return 0 < se(t, e).length;
          };
        }),
        contains: le(function (t) {
          return t = t.replace(te, ne), function (e) {
            return -1 < (e.textContent || o(e)).indexOf(t);
          };
        }),
        lang: le(function (n) {
          return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) {
            var t;
            do {
              if (t = S ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
            } while ((e = e.parentNode) && 1 === e.nodeType);
            return !1;
          };
        }),
        target: function target(e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function root(e) {
          return e === a;
        },
        focus: function focus(e) {
          return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: ge(!1),
        disabled: ge(!0),
        checked: function checked(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
          return !0;
        },
        parent: function parent(e) {
          return !b.pseudos.empty(e);
        },
        header: function header(e) {
          return J.test(e.nodeName);
        },
        input: function input(e) {
          return Q.test(e.nodeName);
        },
        button: function button(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function text(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: ye(function () {
          return [0];
        }),
        last: ye(function (e, t) {
          return [t - 1];
        }),
        eq: ye(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: ye(function (e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e;
        }),
        odd: ye(function (e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e;
        }),
        lt: ye(function (e, t, n) {
          for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
          return e;
        }),
        gt: ye(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
          return e;
        })
      }
    }).pseudos.nth = b.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) b.pseudos[e] = de(e);
    for (e in {
      submit: !0,
      reset: !0
    }) b.pseudos[e] = he(e);
    function me() {}
    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function be(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && "parentNode" === c,
        p = r++;
      return e.first ? function (e, t, n) {
        while (e = e[u]) if (1 === e.nodeType || f) return s(e, t, n);
        return !1;
      } : function (e, t, n) {
        var r,
          i,
          o,
          a = [k, p];
        if (n) {
          while (e = e[u]) if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
        } else while (e = e[u]) if (1 === e.nodeType || f) if (i = (o = e[E] || (e[E] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;else {
          if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
          if ((i[c] = a)[2] = s(e, t, n)) return !0;
        }
        return !1;
      };
    }
    function we(i) {
      return 1 < i.length ? function (e, t, n) {
        var r = i.length;
        while (r--) if (!i[r](e, t, n)) return !1;
        return !0;
      } : i[0];
    }
    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Ce(d, h, g, y, v, e) {
      return y && !y[E] && (y = Ce(y)), v && !v[E] && (v = Ce(v, e)), le(function (e, t, n, r) {
        var i,
          o,
          a,
          s = [],
          u = [],
          l = t.length,
          c = e || function (e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
            return n;
          }(h || "*", n.nodeType ? [n] : n, []),
          f = !d || !e && h ? c : Te(c, s, d, n, r),
          p = g ? v || (e ? d : l || y) ? [] : t : f;
        if (g && g(f, p, n, r), y) {
          i = Te(p, u), y(i, [], n, r), o = i.length;
          while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
        }
        if (e) {
          if (v || d) {
            if (v) {
              i = [], o = p.length;
              while (o--) (a = p[o]) && i.push(f[o] = a);
              v(null, p = [], i, r);
            }
            o = p.length;
            while (o--) (a = p[o]) && -1 < (i = v ? P(e, a) : s[o]) && (e[i] = !(t[i] = a));
          }
        } else p = Te(p === t ? p.splice(l, p.length) : p), v ? v(null, t, p, r) : H.apply(t, p);
      });
    }
    function Se(e) {
      for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
          return e === i;
        }, a, !0), l = be(function (e) {
          return -1 < P(i, e);
        }, a, !0), c = [function (e, t, n) {
          var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
          return i = null, r;
        }]; s < r; s++) if (t = b.relative[e[s].type]) c = [be(we(c), t)];else {
        if ((t = b.filter[e[s].type].apply(null, e[s].matches))[E]) {
          for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
          return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
            value: " " === e[s - 2].type ? "*" : ""
          })).replace(B, "$1"), t, s < n && Se(e.slice(s, n)), n < r && Se(e = e.slice(n)), n < r && xe(e));
        }
        c.push(t);
      }
      return we(c);
    }
    return me.prototype = b.filters = b.pseudos, b.setFilters = new me(), h = se.tokenize = function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s,
        u,
        l = x[e + " "];
      if (l) return t ? 0 : l.slice(0);
      a = e, s = [], u = b.preFilter;
      while (a) {
        for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace(B, " ")
        }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
          value: n,
          type: o,
          matches: r
        }), a = a.slice(n.length));
        if (!n) break;
      }
      return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
    }, f = se.compile = function (e, t) {
      var n,
        y,
        v,
        m,
        x,
        r,
        i = [],
        o = [],
        a = A[e + " "];
      if (!a) {
        t || (t = h(e)), n = t.length;
        while (n--) (a = Se(t[n]))[E] ? i.push(a) : o.push(a);
        (a = A(e, (y = o, m = 0 < (v = i).length, x = 0 < y.length, r = function r(e, t, n, _r, i) {
          var o,
            a,
            s,
            u = 0,
            l = "0",
            c = e && [],
            f = [],
            p = w,
            d = e || x && b.find.TAG("*", i),
            h = k += null == p ? 1 : Math.random() || .1,
            g = d.length;
          for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
            if (x && o) {
              a = 0, t || o.ownerDocument == C || (T(o), n = !S);
              while (s = y[a++]) if (s(o, t || C, n)) {
                _r.push(o);
                break;
              }
              i && (k = h);
            }
            m && ((o = !s && o) && u--, e && c.push(o));
          }
          if (u += l, m && l !== u) {
            a = 0;
            while (s = v[a++]) s(c, f, t, n);
            if (e) {
              if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(_r));
              f = Te(f);
            }
            H.apply(_r, f), i && !e && 0 < f.length && 1 < u + v.length && se.uniqueSort(_r);
          }
          return i && (k = h, w = p), c;
        }, m ? le(r) : r))).selector = e;
      }
      return a;
    }, g = se.select = function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l = "function" == typeof e && e,
        c = !r && h(e = l.selector || e);
      if (n = n || [], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && S && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length);
        }
        i = G.needsContext.test(e) ? 0 : o.length;
        while (i--) {
          if (a = o[i], b.relative[s = a.type]) break;
          if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ve(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
            break;
          }
        }
      }
      return (l || f(e, c))(r, t, !S, n, !t || ee.test(e) && ve(t.parentNode) || t), n;
    }, d.sortStable = E.split("").sort(j).join("") === E, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
      return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
    }), ce(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || fe("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), d.attributes && ce(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || fe("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ce(function (e) {
      return null == e.getAttribute("disabled");
    }) || fe(R, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), se;
  }(C);
  E.find = d, E.expr = d.selectors, E.expr[":"] = E.expr.pseudos, E.uniqueSort = E.unique = d.uniqueSort, E.text = d.getText, E.isXMLDoc = d.isXML, E.contains = d.contains, E.escapeSelector = d.escape;
  var h = function h(e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
        if (i && E(e).is(n)) break;
        r.push(e);
      }
      return r;
    },
    T = function T(e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    k = E.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function j(e, n, r) {
    return m(n) ? E.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r;
    }) : n.nodeType ? E.grep(e, function (e) {
      return e === n !== r;
    }) : "string" != typeof n ? E.grep(e, function (e) {
      return -1 < i.call(n, e) !== r;
    }) : E.filter(n, e, r);
  }
  E.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? E.find.matchesSelector(r, e) ? [r] : [] : E.find.matches(e, E.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, E.fn.extend({
    find: function find(e) {
      var t,
        n,
        r = this.length,
        i = this;
      if ("string" != typeof e) return this.pushStack(E(e).filter(function () {
        for (t = 0; t < r; t++) if (E.contains(i[t], this)) return !0;
      }));
      for (n = this.pushStack([]), t = 0; t < r; t++) E.find(e, i[t], n);
      return 1 < r ? E.uniqueSort(n) : n;
    },
    filter: function filter(e) {
      return this.pushStack(j(this, e || [], !1));
    },
    not: function not(e) {
      return this.pushStack(j(this, e || [], !0));
    },
    is: function is(e) {
      return !!j(this, "string" == typeof e && k.test(e) ? E(e) : e || [], !1).length;
    }
  });
  var D,
    q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (E.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (n = n || D, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (t = t instanceof E ? t[0] : t, E.merge(this, E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : S, !0)), N.test(r[1]) && E.isPlainObject(t)) for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (i = S.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
    }
    return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this);
  }).prototype = E.fn, D = E(S);
  var L = /^(?:parents|prev(?:Until|All))/,
    H = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  E.fn.extend({
    has: function has(e) {
      var t = E(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (E.contains(this, t[e])) return !0;
      });
    },
    closest: function closest(e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && E(e);
      if (!k.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
        o.push(n);
        break;
      }
      return this.pushStack(1 < o.length ? E.uniqueSort(o) : o);
    },
    index: function index(e) {
      return e ? "string" == typeof e ? i.call(E(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))));
    },
    addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), E.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function parents(e) {
      return h(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return h(e, "parentNode", n);
    },
    next: function next(e) {
      return O(e, "nextSibling");
    },
    prev: function prev(e) {
      return O(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return h(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return h(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return h(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return h(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return T((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return T(e.firstChild);
    },
    contents: function contents(e) {
      return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), E.merge([], e.childNodes));
    }
  }, function (r, i) {
    E.fn[r] = function (e, t) {
      var n = E.map(this, i, e);
      return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = E.filter(t, n)), 1 < this.length && (H[r] || E.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n);
    };
  });
  var P = /[^\x20\t\r\n\f]+/g;
  function R(e) {
    return e;
  }
  function M(e) {
    throw e;
  }
  function I(e, t, n, r) {
    var i;
    try {
      e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  E.Callbacks = function (r) {
    var e, n;
    r = "string" == typeof r ? (e = r, n = {}, E.each(e.match(P) || [], function (e, t) {
      n[t] = !0;
    }), n) : E.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function c() {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
        }
        r.memory || (t = !1), i = !1, a && (s = t ? [] : "");
      },
      f = {
        add: function add() {
          return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
            E.each(e, function (e, t) {
              m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
            });
          }(arguments), t && !i && c()), this;
        },
        remove: function remove() {
          return E.each(arguments, function (e, t) {
            var n;
            while (-1 < (n = E.inArray(t, s, n))) s.splice(n, 1), n <= l && l--;
          }), this;
        },
        has: function has(e) {
          return e ? -1 < E.inArray(e, s) : 0 < s.length;
        },
        empty: function empty() {
          return s && (s = []), this;
        },
        disable: function disable() {
          return a = u = [], s = t = "", this;
        },
        disabled: function disabled() {
          return !s;
        },
        lock: function lock() {
          return a = u = [], t || i || (s = t = ""), this;
        },
        locked: function locked() {
          return !!a;
        },
        fireWith: function fireWith(e, t) {
          return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this;
        },
        fire: function fire() {
          return f.fireWith(this, arguments), this;
        },
        fired: function fired() {
          return !!o;
        }
      };
    return f;
  }, E.extend({
    Deferred: function Deferred(e) {
      var o = [["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2], ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]],
        i = "pending",
        a = {
          state: function state() {
            return i;
          },
          always: function always() {
            return s.done(arguments).fail(arguments), this;
          },
          "catch": function _catch(e) {
            return a.then(null, e);
          },
          pipe: function pipe() {
            var i = arguments;
            return E.Deferred(function (r) {
              E.each(o, function (e, t) {
                var n = m(i[t[4]]) && i[t[4]];
                s[t[1]](function () {
                  var e = n && n.apply(this, arguments);
                  e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
                });
              }), i = null;
            }).promise();
          },
          then: function then(t, n, r) {
            var u = 0;
            function l(i, o, a, s) {
              return function () {
                var n = this,
                  r = arguments,
                  e = function e() {
                    var e, t;
                    if (!(i < u)) {
                      if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                      t = e && ("object" == _typeof(e) || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r));
                    }
                  },
                  t = s ? e : function () {
                    try {
                      e();
                    } catch (e) {
                      E.Deferred.exceptionHook && E.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r));
                    }
                  };
                i ? t() : (E.Deferred.getStackHook && (t.stackTrace = E.Deferred.getStackHook()), C.setTimeout(t));
              };
            }
            return E.Deferred(function (e) {
              o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M));
            }).promise();
          },
          promise: function promise(e) {
            return null != e ? E.extend(e, a) : a;
          }
        },
        s = {};
      return E.each(o, function (e, t) {
        var n = t[2],
          r = t[5];
        a[t[1]] = n.add, r && n.add(function () {
          i = r;
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
        }, s[t[0] + "With"] = n.fireWith;
      }), a.promise(s), e && e.call(s, s), s;
    },
    when: function when(e) {
      var n = arguments.length,
        t = n,
        r = Array(t),
        i = s.call(arguments),
        o = E.Deferred(),
        a = function a(t) {
          return function (e) {
            r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i);
          };
        };
      if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
      while (t--) I(i[t], a(t), o.reject);
      return o.promise();
    }
  });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  E.Deferred.exceptionHook = function (e, t) {
    C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }, E.readyException = function (e) {
    C.setTimeout(function () {
      throw e;
    });
  };
  var F = E.Deferred();
  function $() {
    S.removeEventListener("DOMContentLoaded", $), C.removeEventListener("load", $), E.ready();
  }
  E.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      E.readyException(e);
    }), this;
  }, E.extend({
    isReady: !1,
    readyWait: 1,
    ready: function ready(e) {
      (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0) !== e && 0 < --E.readyWait || F.resolveWith(S, [E]);
    }
  }), E.ready.then = F.then, "complete" === S.readyState || "loading" !== S.readyState && !S.documentElement.doScroll ? C.setTimeout(E.ready) : (S.addEventListener("DOMContentLoaded", $), C.addEventListener("load", $));
  var B = function B(e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === w(n)) for (s in i = !0, n) B(e, t, s, n[s], !0, o, a);else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
        return l.call(E(e), n);
      })), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    _ = /^-ms-/,
    z = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function X(e) {
    return e.replace(_, "ms-").replace(z, U);
  }
  var V = function V(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function G() {
    this.expando = E.expando + G.uid++;
  }
  G.uid = 1, G.prototype = {
    cache: function cache(e) {
      var t = e[this.expando];
      return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function set(e, t, n) {
      var r,
        i = this.cache(e);
      if ("string" == typeof t) i[X(t)] = n;else for (r in t) i[X(r)] = t[r];
      return i;
    },
    get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)];
    },
    access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function remove(e, t) {
      var n,
        r = e[this.expando];
      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
          while (n--) delete r[t[n]];
        }
        (void 0 === t || E.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function hasData(e) {
      var t = e[this.expando];
      return void 0 !== t && !E.isEmptyObject(t);
    }
  };
  var Y = new G(),
    Q = new G(),
    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g;
  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i);
      } catch (e) {}
      Q.set(e, t, n);
    } else n = void 0;
    return n;
  }
  E.extend({
    hasData: function hasData(e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function data(e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function removeData(e, t) {
      Q.remove(e, t);
    },
    _data: function _data(e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function _removeData(e, t) {
      Y.remove(e, t);
    }
  }), E.fn.extend({
    data: function data(n, e) {
      var t,
        r,
        i,
        o = this[0],
        a = o && o.attributes;
      if (void 0 === n) {
        if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
          t = a.length;
          while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
          Y.set(o, "hasDataAttrs", !0);
        }
        return i;
      }
      return "object" == _typeof(n) ? this.each(function () {
        Q.set(this, n);
      }) : B(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
        this.each(function () {
          Q.set(this, n, e);
        });
      }, null, e, 1 < arguments.length, null, !0);
    },
    removeData: function removeData(e) {
      return this.each(function () {
        Q.remove(this, e);
      });
    }
  }), E.extend({
    queue: function queue(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, E.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";
      var n = E.queue(e, t),
        r = n.length,
        i = n.shift(),
        o = E._queueHooks(e, t);
      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        E.dequeue(e, t);
      }, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return Y.get(e, n) || Y.access(e, n, {
        empty: E.Callbacks("once memory").add(function () {
          Y.remove(e, [t + "queue", n]);
        })
      });
    }
  }), E.fn.extend({
    queue: function queue(t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? E.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = E.queue(this, t, n);
        E._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        E.dequeue(this, e);
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, t) {
      var n,
        r = 1,
        i = E.Deferred(),
        o = this,
        a = this.length,
        s = function s() {
          --r || i.resolveWith(o, [o]);
        };
      "string" != typeof e && (t = e, e = void 0), e = e || "fx";
      while (a--) (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      return s(), i.promise(t);
    }
  });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    re = S.documentElement,
    ie = function ie(e) {
      return E.contains(e.ownerDocument, e);
    },
    oe = {
      composed: !0
    };
  re.getRootNode && (ie = function ie(e) {
    return E.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument;
  });
  var ae = function ae(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === E.css(e, "display");
  };
  function se(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r ? function () {
        return r.cur();
      } : function () {
        return E.css(e, t, "");
      },
      u = s(),
      l = n && n[3] || (E.cssNumber[t] ? "" : "px"),
      c = e.nodeType && (E.cssNumber[t] || "px" !== l && +u) && te.exec(E.css(e, t));
    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;
      while (a--) E.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      c *= 2, E.style(e, t, c + l), n = n || [];
    }
    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }
  var ue = {};
  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = E.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  E.fn.extend({
    show: function show() {
      return le(this, !0);
    },
    hide: function hide() {
      return le(this);
    },
    toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ae(this) ? E(this).show() : E(this).hide();
      });
    }
  });
  var ce,
    fe,
    pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i;
  ce = S.createDocumentFragment().appendChild(S.createElement("div")), (fe = S.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), v.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", v.option = !!ce.lastChild;
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  function ye(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? E.merge([e], n) : n;
  }
  function ve(e, t) {
    for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
  }
  ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, v.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;
  function xe(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === w(o)) E.merge(p, o.nodeType ? [o] : o);else if (me.test(o)) {
      a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + E.htmlPrefilter(o) + u[2], c = u[0];
      while (c--) a = a.lastChild;
      E.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
    } else p.push(t.createTextNode(o));
    f.textContent = "", d = 0;
    while (o = p[d++]) if (r && -1 < E.inArray(o, r)) i && i.push(o);else if (l = ie(o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
      c = 0;
      while (o = a[c++]) he.test(o.type || "") && n.push(o);
    }
    return f;
  }
  var be = /^([^.]*)(?:\.(.+)|)/;
  function we() {
    return !0;
  }
  function Te() {
    return !1;
  }
  function Ce(e, t) {
    return e === function () {
      try {
        return S.activeElement;
      } catch (e) {}
    }() == ("focus" === t);
  }
  function Se(e, t, n, r, i, o) {
    var a, s;
    if ("object" == _typeof(t)) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t) Se(e, s, n, r, t[s], o);
      return e;
    }
    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te;else if (!i) return e;
    return 1 === o && (a = i, (i = function i(e) {
      return E().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = E.guid++)), e.each(function () {
      E.event.add(this, t, i, r, n);
    });
  }
  function Ee(e, i, o) {
    o ? (Y.set(e, i, !1), E.event.add(e, i, {
      namespace: !1,
      handler: function handler(e) {
        var t,
          n,
          r = Y.get(this, i);
        if (1 & e.isTrigger && this[i]) {
          if (r.length) (E.event.special[i] || {}).delegateType && e.stopPropagation();else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value;
        } else r.length && (Y.set(this, i, {
          value: E.event.trigger(E.extend(r[0], E.Event.prototype), r.slice(1), this)
        }), e.stopImmediatePropagation());
      }
    })) : void 0 === Y.get(e, i) && E.event.add(e, i, we);
  }
  E.event = {
    global: {},
    add: function add(t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        y = Y.get(t);
      if (V(t)) {
        n.handler && (n = (o = n).handler, i = o.selector), i && E.find.matchesSelector(re, i), n.guid || (n.guid = E.guid++), (u = y.events) || (u = y.events = Object.create(null)), (a = y.handle) || (a = y.handle = function (e) {
          return "undefined" != typeof E && E.event.triggered !== e.type ? E.event.dispatch.apply(t, arguments) : void 0;
        }), l = (e = (e || "").match(P) || [""]).length;
        while (l--) d = g = (s = be.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = E.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = E.event.special[d] || {}, c = E.extend({
          type: d,
          origType: g,
          data: r,
          handler: n,
          guid: n.guid,
          selector: i,
          needsContext: i && E.expr.match.needsContext.test(i),
          namespace: h.join(".")
        }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), E.event.global[d] = !0);
      }
    },
    remove: function remove(e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        y = Y.hasData(e) && Y.get(e);
      if (y && (u = y.events)) {
        l = (t = (t || "").match(P) || [""]).length;
        while (l--) if (d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
          f = E.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
          while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
          a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || E.removeEvent(e, d, y.handle), delete u[d]);
        } else for (d in u) E.event.remove(e, d + t[l], n, r, !0);
        E.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function dispatch(e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = E.event.fix(e),
        l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
        c = E.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
        a = E.event.handlers.call(this, u, l), t = 0;
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          u.currentTarget = i.elem, n = 0;
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((E.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function handlers(e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < E(i, this).index(l) : E.find(i, this, null, [l]).length), a[i] && o.push(r);
        o.length && s.push({
          elem: l,
          handlers: o
        });
      }
      return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s;
    },
    addProp: function addProp(t, e) {
      Object.defineProperty(E.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[t];
        },
        set: function set(e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
          });
        }
      });
    },
    fix: function fix(e) {
      return e[E.expando] ? e : new E.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function setup(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Ee(t, "click", we), !1;
        },
        trigger: function trigger(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Ee(t, "click"), !0;
        },
        _default: function _default(e) {
          var t = e.target;
          return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, E.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, E.Event = function (e, t) {
    if (!(this instanceof E.Event)) return new E.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && E.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[E.expando] = !0;
  }, E.Event.prototype = {
    constructor: E.Event,
    isDefaultPrevented: Te,
    isPropagationStopped: Te,
    isImmediatePropagationStopped: Te,
    isSimulated: !1,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, E.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    code: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: !0
  }, E.event.addProp), E.each({
    focus: "focusin",
    blur: "focusout"
  }, function (t, e) {
    E.event.special[t] = {
      setup: function setup() {
        return Ee(this, t, Ce), !1;
      },
      trigger: function trigger() {
        return Ee(this, t), !0;
      },
      _default: function _default(e) {
        return Y.get(e.target, t);
      },
      delegateType: e
    };
  }), E.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, i) {
    E.event.special[e] = {
      delegateType: i,
      bindType: i,
      handle: function handle(e) {
        var t,
          n = e.relatedTarget,
          r = e.handleObj;
        return n && (n === this || E.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
      }
    };
  }), E.fn.extend({
    on: function on(e, t, n, r) {
      return Se(this, e, t, n, r);
    },
    one: function one(e, t, n, r) {
      return Se(this, e, t, n, r, 1);
    },
    off: function off(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, E(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
      if ("object" == _typeof(e)) {
        for (i in e) this.off(i, t, e[i]);
        return this;
      }
      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function () {
        E.event.remove(this, e, n, t);
      });
    }
  });
  var ke = /<script|<style|<link/i,
    Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ne = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  function je(e, t) {
    return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e;
  }
  function De(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }
  function qe(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }
  function Le(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events)) for (i in Y.remove(t, "handle events"), s) for (n = 0, r = s[i].length; n < r; n++) E.event.add(t, i, s[i][n]);
      Q.hasData(e) && (o = Q.access(e), a = E.extend({}, o), Q.set(t, a));
    }
  }
  function He(n, r, i, o) {
    r = g(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = m(d);
    if (h || 1 < f && "string" == typeof d && !v.checkClone && Ae.test(d)) return n.each(function (e) {
      var t = n.eq(e);
      h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o);
    });
    if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = E.map(ye(e, "script"), De)).length; c < f; c++) u = e, c !== p && (u = E.clone(u, !0, !0), s && E.merge(a, ye(u, "script"))), i.call(n[c], u, c);
      if (s) for (l = a[a.length - 1].ownerDocument, E.map(a, qe), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && E.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? E._evalUrl && !u.noModule && E._evalUrl(u.src, {
        nonce: u.nonce || u.getAttribute("nonce")
      }, l) : b(u.textContent.replace(Ne, ""), u, l));
    }
    return n;
  }
  function Oe(e, t, n) {
    for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || E.cleanData(ye(r)), r.parentNode && (n && ie(r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  E.extend({
    htmlPrefilter: function htmlPrefilter(e) {
      return e;
    },
    clone: function clone(e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = ie(e);
      if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e))) for (a = ye(c), r = 0, i = (o = ye(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
      if (t) if (n) for (o = o || ye(e), a = a || ye(c), r = 0, i = o.length; r < i; r++) Le(o[r], a[r]);else Le(e, c);
      return 0 < (a = ye(c, "script")).length && ve(a, !f && ye(e, "script")), c;
    },
    cleanData: function cleanData(e) {
      for (var t, n, r, i = E.event.special, o = 0; void 0 !== (n = e[o]); o++) if (V(n)) {
        if (t = n[Y.expando]) {
          if (t.events) for (r in t.events) i[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
          n[Y.expando] = void 0;
        }
        n[Q.expando] && (n[Q.expando] = void 0);
      }
    }
  }), E.fn.extend({
    detach: function detach(e) {
      return Oe(this, e, !0);
    },
    remove: function remove(e) {
      return Oe(this, e);
    },
    text: function text(e) {
      return B(this, function (e) {
        return void 0 === e ? E.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function append() {
      return He(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e);
      });
    },
    prepend: function prepend() {
      return He(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = je(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function before() {
      return He(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return He(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (E.cleanData(ye(e, !1)), e.textContent = "");
      return this;
    },
    clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return E.clone(this, e, t);
      });
    },
    html: function html(e) {
      return B(this, function (e) {
        var t = this[0] || {},
          n = 0,
          r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = E.htmlPrefilter(e);
          try {
            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (E.cleanData(ye(t, !1)), t.innerHTML = e);
            t = 0;
          } catch (e) {}
        }
        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith() {
      var n = [];
      return He(this, arguments, function (e) {
        var t = this.parentNode;
        E.inArray(this, n) < 0 && (E.cleanData(ye(this)), t && t.replaceChild(e, this));
      }, n);
    }
  }), E.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, a) {
    E.fn[e] = function (e) {
      for (var t, n = [], r = E(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), E(r[o])[a](t), u.apply(n, t.get());
      return this.pushStack(n);
    };
  });
  var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    Re = /^--/,
    Me = function Me(e) {
      var t = e.ownerDocument.defaultView;
      return t && t.opener || (t = C), t.getComputedStyle(e);
    },
    Ie = function Ie(e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) o[i] = e.style[i], e.style[i] = t[i];
      for (i in r = n.call(e), t) e.style[i] = o[i];
      return r;
    },
    We = new RegExp(ne.join("|"), "i"),
    Fe = "[\\x20\\t\\r\\n\\f]",
    $e = new RegExp("^" + Fe + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Fe + "+$", "g");
  function Be(e, t, n) {
    var r,
      i,
      o,
      a,
      s = Re.test(t),
      u = e.style;
    return (n = n || Me(e)) && (a = n.getPropertyValue(t) || n[t], s && a && (a = a.replace($e, "$1") || void 0), "" !== a || ie(e) || (a = E.style(e, t)), !v.pixelBoxStyles() && Pe.test(a) && We.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o)), void 0 !== a ? a + "" : a;
  }
  function _e(e, t) {
    return {
      get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }
  !function () {
    function e() {
      if (l) {
        u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null;
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = S.createElement("div"),
      l = S.createElement("div");
    l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === l.style.backgroundClip, E.extend(v, {
      boxSizingReliable: function boxSizingReliable() {
        return e(), r;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        return e(), o;
      },
      pixelPosition: function pixelPosition() {
        return e(), n;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        return e(), s;
      },
      scrollboxSize: function scrollboxSize() {
        return e(), i;
      },
      reliableTrDimensions: function reliableTrDimensions() {
        var e, t, n, r;
        return null == a && (e = S.createElement("table"), t = S.createElement("tr"), n = S.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, re.removeChild(e)), a;
      }
    }));
  }();
  var ze = ["Webkit", "Moz", "ms"],
    Ue = S.createElement("div").style,
    Xe = {};
  function Ve(e) {
    var t = E.cssProps[e] || Xe[e];
    return t || (e in Ue ? e : Xe[e] = function (e) {
      var t = e[0].toUpperCase() + e.slice(1),
        n = ze.length;
      while (n--) if ((e = ze[n] + t) in Ue) return e;
    }(e) || e);
  }
  var Ge = /^(none|table(?!-c[ea]).+)/,
    Ye = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    Qe = {
      letterSpacing: "0",
      fontWeight: "400"
    };
  function Je(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Ke(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2) "margin" === n && (u += E.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= E.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= E.css(e, "border" + ne[a] + "Width", !0, i))) : (u += E.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += E.css(e, "border" + ne[a] + "Width", !0, i) : s += E.css(e, "border" + ne[a] + "Width", !0, i));
    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u;
  }
  function Ze(e, t, n) {
    var r = Me(e),
      i = (!v.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, r),
      o = i,
      a = Be(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Pe.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (!v.boxSizingReliable() && i || !v.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === E.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === E.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
  }
  function et(e, t, n, r, i) {
    return new et.prototype.init(e, t, n, r, i);
  }
  E.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var n = Be(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = X(t),
          u = Re.test(t),
          l = e.style;
        if (u || (t = Ve(s)), a = E.cssHooks[t] || E.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = _typeof(n)) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (E.cssNumber[s] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    },
    css: function css(e, t, n, r) {
      var i,
        o,
        a,
        s = X(t);
      return Re.test(t) || (t = Ve(s)), (a = E.cssHooks[t] || E.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), E.each(["height", "width"], function (e, u) {
    E.cssHooks[u] = {
      get: function get(e, t, n) {
        if (t) return !Ge.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : Ie(e, Ye, function () {
          return Ze(e, u, n);
        });
      },
      set: function set(e, t, n) {
        var r,
          i = Me(e),
          o = !v.scrollboxSize() && "absolute" === i.position,
          a = (o || n) && "border-box" === E.css(e, "boxSizing", !1, i),
          s = n ? Ke(e, u, n, a, i) : 0;
        return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = E.css(e, u)), Je(0, t, s);
      }
    };
  }), E.cssHooks.marginLeft = _e(v.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - Ie(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), E.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (i, o) {
    E.cssHooks[i + o] = {
      expand: function expand(e) {
        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
        return n;
      }
    }, "margin" !== i && (E.cssHooks[i + o].set = Je);
  }), E.fn.extend({
    css: function css(e, t) {
      return B(this, function (e, t, n) {
        var r,
          i,
          o = {},
          a = 0;
        if (Array.isArray(t)) {
          for (r = Me(e), i = t.length; a < i; a++) o[t[a]] = E.css(e, t[a], !1, r);
          return o;
        }
        return void 0 !== n ? E.style(e, t, n) : E.css(e, t);
      }, e, t, 1 < arguments.length);
    }
  }), ((E.Tween = et).prototype = {
    constructor: et,
    init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || E.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (E.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var e = et.propHooks[this.prop];
      return e && e.get ? e.get(this) : et.propHooks._default.get(this);
    },
    run: function run(e) {
      var t,
        n = et.propHooks[this.prop];
      return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this;
    }
  }).init.prototype = et.prototype, (et.propHooks = {
    _default: {
      get: function get(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = E.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function set(e) {
        E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !E.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)] ? e.elem[e.prop] = e.now : E.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }).scrollTop = et.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, E.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, E.fx = et.prototype.init, E.fx.step = {};
  var tt,
    nt,
    rt,
    it,
    ot = /^(?:toggle|show|hide)$/,
    at = /queueHooks$/;
  function st() {
    nt && (!1 === S.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, E.fx.interval), E.fx.tick());
  }
  function ut() {
    return C.setTimeout(function () {
      tt = void 0;
    }), tt = Date.now();
  }
  function lt(e, t) {
    var n,
      r = 0,
      i = {
        height: e
      };
    for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function ct(e, t, n) {
    for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r;
  }
  function ft(o, e, t) {
    var n,
      a,
      r = 0,
      i = ft.prefilters.length,
      s = E.Deferred().always(function () {
        delete u.elem;
      }),
      u = function u() {
        if (a) return !1;
        for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
        return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
      },
      l = s.promise({
        elem: o,
        props: E.extend({}, e),
        opts: E.extend(!0, {
          specialEasing: {},
          easing: E.easing._default
        }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: tt || ut(),
        duration: t.duration,
        tweens: [],
        createTween: function createTween(e, t) {
          var n = E.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
          return l.tweens.push(n), n;
        },
        stop: function stop(e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
        }
      }),
      c = l.props;
    for (!function (e, t) {
      var n, r, i, o, a;
      for (n in e) if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = E.cssHooks[r]) && ("expand" in a)) for (n in o = a.expand(o), delete e[r], o) (n in e) || (e[n] = o[n], t[n] = i);else t[r] = i;
    }(c, l.opts.specialEasing); r < i; r++) if (n = ft.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (E._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
    return E.map(c, ct, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), E.fx.timer(E.extend(u, {
      elem: o,
      anim: l,
      queue: l.opts.queue
    })), l;
  }
  E.Animation = E.extend(ft, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return se(n.elem, e, te.exec(t), n), n;
      }]
    },
    tweener: function tweener(e, t) {
      m(e) ? (t = e, e = ["*"]) : e = e.match(P);
      for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t);
    },
    prefilters: [function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = "width" in t || "height" in t,
        p = this,
        d = {},
        h = e.style,
        g = e.nodeType && ae(e),
        y = Y.get(e, "fxshow");
      for (r in n.queue || (null == (a = E._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
        a.unqueued || s();
      }), a.unqueued++, p.always(function () {
        p.always(function () {
          a.unqueued--, E.queue(e, "fx").length || a.empty.fire();
        });
      })), t) if (i = t[r], ot.test(i)) {
        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
          if ("show" !== i || !y || void 0 === y[r]) continue;
          g = !0;
        }
        d[r] = y && y[r] || E.style(e, r);
      }
      if ((u = !E.isEmptyObject(t)) || !E.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = Y.get(e, "display")), "none" === (c = E.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = E.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === E.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1, d) u || (y ? "hidden" in y && (g = y.hidden) : y = Y.access(e, "fxshow", {
        display: l
      }), o && (y.hidden = !g), g && le([e], !0), p.done(function () {
        for (r in g || le([e]), Y.remove(e, "fxshow"), d) E.style(e, r, d[r]);
      })), u = ct(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0));
    }],
    prefilter: function prefilter(e, t) {
      t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
    }
  }), E.speed = function (e, t, n) {
    var r = e && "object" == _typeof(e) ? E.extend({}, e) : {
      complete: n || !n && t || m(e) && e,
      duration: e,
      easing: n && t || t && !m(t) && t
    };
    return E.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in E.fx.speeds ? r.duration = E.fx.speeds[r.duration] : r.duration = E.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      m(r.old) && r.old.call(this), r.queue && E.dequeue(this, r.queue);
    }, r;
  }, E.fn.extend({
    fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(ae).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function animate(t, e, n, r) {
      var i = E.isEmptyObject(t),
        o = E.speed(e, n, r),
        a = function a() {
          var e = ft(this, E.extend({}, t), o);
          (i || Y.get(this, "finish")) && e.stop(!0);
        };
      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function stop(i, e, o) {
      var a = function a(e) {
        var t = e.stop;
        delete e.stop, t(o);
      };
      return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
        var e = !0,
          t = null != i && i + "queueHooks",
          n = E.timers,
          r = Y.get(this);
        if (t) r[t] && r[t].stop && a(r[t]);else for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
        for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
        !e && o || E.dequeue(this, i);
      });
    },
    finish: function finish(a) {
      return !1 !== a && (a = a || "fx"), this.each(function () {
        var e,
          t = Y.get(this),
          n = t[a + "queue"],
          r = t[a + "queueHooks"],
          i = E.timers,
          o = n ? n.length : 0;
        for (t.finish = !0, E.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
        for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
        delete t.finish;
      });
    }
  }), E.each(["toggle", "show", "hide"], function (e, r) {
    var i = E.fn[r];
    E.fn[r] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n);
    };
  }), E.each({
    slideDown: lt("show"),
    slideUp: lt("hide"),
    slideToggle: lt("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, r) {
    E.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n);
    };
  }), E.timers = [], E.fx.tick = function () {
    var e,
      t = 0,
      n = E.timers;
    for (tt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    n.length || E.fx.stop(), tt = void 0;
  }, E.fx.timer = function (e) {
    E.timers.push(e), E.fx.start();
  }, E.fx.interval = 13, E.fx.start = function () {
    nt || (nt = !0, st());
  }, E.fx.stop = function () {
    nt = null;
  }, E.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, E.fn.delay = function (r, e) {
    return r = E.fx && E.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
      var n = C.setTimeout(e, r);
      t.stop = function () {
        C.clearTimeout(n);
      };
    });
  }, rt = S.createElement("input"), it = S.createElement("select").appendChild(S.createElement("option")), rt.type = "checkbox", v.checkOn = "" !== rt.value, v.optSelected = it.selected, (rt = S.createElement("input")).value = "t", rt.type = "radio", v.radioValue = "t" === rt.value;
  var pt,
    dt = E.expr.attrHandle;
  E.fn.extend({
    attr: function attr(e, t) {
      return B(this, E.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        E.removeAttr(this, e);
      });
    }
  }), E.extend({
    attr: function attr(e, t, n) {
      var r,
        i,
        o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? E.prop(e, t, n) : (1 === o && E.isXMLDoc(e) || (i = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void E.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = E.find.attr(e, t)) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (!v.radioValue && "radio" === t && A(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function removeAttr(e, t) {
      var n,
        r = 0,
        i = t && t.match(P);
      if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n);
    }
  }), pt = {
    set: function set(e, t, n) {
      return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, E.each(E.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = dt[t] || E.find.attr;
    dt[t] = function (e, t, n) {
      var r,
        i,
        o = t.toLowerCase();
      return n || (i = dt[o], dt[o] = r, r = null != a(e, t, n) ? o : null, dt[o] = i), r;
    };
  });
  var ht = /^(?:input|select|textarea|button)$/i,
    gt = /^(?:a|area)$/i;
  function yt(e) {
    return (e.match(P) || []).join(" ");
  }
  function vt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }
  function mt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || [];
  }
  E.fn.extend({
    prop: function prop(e, t) {
      return B(this, E.prop, e, t, 1 < arguments.length);
    },
    removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[E.propFix[e] || e];
      });
    }
  }), E.extend({
    prop: function prop(e, t, n) {
      var r,
        i,
        o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && E.isXMLDoc(e) || (t = E.propFix[t] || t, i = E.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var t = E.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), v.optSelected || (E.propHooks.selected = {
    get: function get(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function set(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    E.propFix[this.toLowerCase()] = this;
  }), E.fn.extend({
    addClass: function addClass(t) {
      var e, n, r, i, o, a;
      return m(t) ? this.each(function (e) {
        E(this).addClass(t.call(this, e, vt(this)));
      }) : (e = mt(t)).length ? this.each(function () {
        if (r = vt(this), n = 1 === this.nodeType && " " + yt(r) + " ") {
          for (o = 0; o < e.length; o++) i = e[o], n.indexOf(" " + i + " ") < 0 && (n += i + " ");
          a = yt(n), r !== a && this.setAttribute("class", a);
        }
      }) : this;
    },
    removeClass: function removeClass(t) {
      var e, n, r, i, o, a;
      return m(t) ? this.each(function (e) {
        E(this).removeClass(t.call(this, e, vt(this)));
      }) : arguments.length ? (e = mt(t)).length ? this.each(function () {
        if (r = vt(this), n = 1 === this.nodeType && " " + yt(r) + " ") {
          for (o = 0; o < e.length; o++) {
            i = e[o];
            while (-1 < n.indexOf(" " + i + " ")) n = n.replace(" " + i + " ", " ");
          }
          a = yt(n), r !== a && this.setAttribute("class", a);
        }
      }) : this : this.attr("class", "");
    },
    toggleClass: function toggleClass(t, n) {
      var e,
        r,
        i,
        o,
        a = _typeof(t),
        s = "string" === a || Array.isArray(t);
      return m(t) ? this.each(function (e) {
        E(this).toggleClass(t.call(this, e, vt(this), n), n);
      }) : "boolean" == typeof n && s ? n ? this.addClass(t) : this.removeClass(t) : (e = mt(t), this.each(function () {
        if (s) for (o = E(this), i = 0; i < e.length; i++) r = e[i], o.hasClass(r) ? o.removeClass(r) : o.addClass(r);else void 0 !== t && "boolean" !== a || ((r = vt(this)) && Y.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : Y.get(this, "__className__") || ""));
      }));
    },
    hasClass: function hasClass(e) {
      var t,
        n,
        r = 0;
      t = " " + e + " ";
      while (n = this[r++]) if (1 === n.nodeType && -1 < (" " + yt(vt(n)) + " ").indexOf(t)) return !0;
      return !1;
    }
  });
  var xt = /\r/g;
  E.fn.extend({
    val: function val(n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length ? (i = m(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = i ? n.call(this, e, E(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = E.map(t, function (e) {
          return null == e ? "" : e + "";
        })), (r = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
      })) : t ? (r = E.valHooks[t.type] || E.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0;
    }
  }), E.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = E.find.attr(e, "value");
          return null != t ? t : yt(E.text(e));
        }
      },
      select: {
        get: function get(e) {
          var t,
            n,
            r,
            i = e.options,
            o = e.selectedIndex,
            a = "select-one" === e.type,
            s = a ? null : [],
            u = a ? o + 1 : i.length;
          for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
            if (t = E(n).val(), a) return t;
            s.push(t);
          }
          return s;
        },
        set: function set(e, t) {
          var n,
            r,
            i = e.options,
            o = E.makeArray(t),
            a = i.length;
          while (a--) ((r = i[a]).selected = -1 < E.inArray(E.valHooks.option.get(r), o)) && (n = !0);
          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), E.each(["radio", "checkbox"], function () {
    E.valHooks[this] = {
      set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = -1 < E.inArray(E(e).val(), t);
      }
    }, v.checkOn || (E.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), v.focusin = "onfocusin" in C;
  var bt = /^(?:focusinfocus|focusoutblur)$/,
    wt = function wt(e) {
      e.stopPropagation();
    };
  E.extend(E.event, {
    trigger: function trigger(e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || S],
        d = y.call(e, "type") ? e.type : e,
        h = y.call(e, "namespace") ? e.namespace.split(".") : [];
      if (o = f = a = n = n || S, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + E.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[E.expando] ? e : new E.Event(d, "object" == _typeof(e) && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : E.makeArray(t, [e]), c = E.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !x(n)) {
          for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
          a === (n.ownerDocument || S) && p.push(a.defaultView || a.parentWindow || C);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
        return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), E.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, wt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, wt), E.event.triggered = void 0, a && (n[u] = a)), e.result;
      }
    },
    simulate: function simulate(e, t, n) {
      var r = E.extend(new E.Event(), n, {
        type: e,
        isSimulated: !0
      });
      E.event.trigger(r, null, t);
    }
  }), E.fn.extend({
    trigger: function trigger(e, t) {
      return this.each(function () {
        E.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, t) {
      var n = this[0];
      if (n) return E.event.trigger(e, t, n, !0);
    }
  }), v.focusin || E.each({
    focus: "focusin",
    blur: "focusout"
  }, function (n, r) {
    var i = function i(e) {
      E.event.simulate(r, e.target, E.event.fix(e));
    };
    E.event.special[r] = {
      setup: function setup() {
        var e = this.ownerDocument || this.document || this,
          t = Y.access(e, r);
        t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
      },
      teardown: function teardown() {
        var e = this.ownerDocument || this.document || this,
          t = Y.access(e, r) - 1;
        t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r));
      }
    };
  });
  var Tt = C.location,
    Ct = {
      guid: Date.now()
    },
    St = /\?/;
  E.parseXML = function (e) {
    var t, n;
    if (!e || "string" != typeof e) return null;
    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {}
    return n = t && t.getElementsByTagName("parsererror")[0], t && !n || E.error("Invalid XML: " + (n ? E.map(n.childNodes, function (e) {
      return e.textContent;
    }).join("\n") : e)), t;
  };
  var Et = /\[\]$/,
    kt = /\r?\n/g,
    At = /^(?:submit|button|image|reset|file)$/i,
    Nt = /^(?:input|select|textarea|keygen)/i;
  function jt(n, e, r, i) {
    var t;
    if (Array.isArray(e)) E.each(e, function (e, t) {
      r || Et.test(n) ? i(n, t) : jt(n + "[" + ("object" == _typeof(t) && null != t ? e : "") + "]", t, r, i);
    });else if (r || "object" !== w(e)) i(n, e);else for (t in e) jt(n + "[" + t + "]", e[t], r, i);
  }
  E.param = function (e, t) {
    var n,
      r = [],
      i = function i(e, t) {
        var n = m(t) ? t() : t;
        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !E.isPlainObject(e)) E.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) jt(n, e[n], t, i);
    return r.join("&");
  }, E.fn.extend({
    serialize: function serialize() {
      return E.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = E.prop(this, "elements");
        return e ? E.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !E(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = E(this).val();
        return null == n ? null : Array.isArray(n) ? E.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(kt, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(kt, "\r\n")
        };
      }).get();
    }
  });
  var Dt = /%20/g,
    qt = /#.*$/,
    Lt = /([?&])_=[^&]*/,
    Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ot = /^(?:GET|HEAD)$/,
    Pt = /^\/\//,
    Rt = {},
    Mt = {},
    It = "*/".concat("*"),
    Wt = S.createElement("a");
  function Ft(o) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n,
        r = 0,
        i = e.toLowerCase().match(P) || [];
      if (m(t)) while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
    };
  }
  function $t(t, i, o, a) {
    var s = {},
      u = t === Mt;
    function l(e) {
      var r;
      return s[e] = !0, E.each(t[e] || [], function (e, t) {
        var n = t(i, o, a);
        return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1);
      }), r;
    }
    return l(i.dataTypes[0]) || !s["*"] && l("*");
  }
  function Bt(e, t) {
    var n,
      r,
      i = E.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && E.extend(!0, e, r), e;
  }
  Wt.href = Tt.href, E.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Tt.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": It,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": E.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? Bt(Bt(e, E.ajaxSettings), t) : Bt(E.ajaxSettings, e);
    },
    ajaxPrefilter: Ft(Rt),
    ajaxTransport: Ft(Mt),
    ajax: function ajax(e, t) {
      "object" == _typeof(e) && (t = e, e = void 0), t = t || {};
      var c,
        f,
        p,
        n,
        d,
        r,
        h,
        g,
        i,
        o,
        y = E.ajaxSetup({}, t),
        v = y.context || y,
        m = y.context && (v.nodeType || v.jquery) ? E(v) : E.event,
        x = E.Deferred(),
        b = E.Callbacks("once memory"),
        w = y.statusCode || {},
        a = {},
        s = {},
        u = "canceled",
        T = {
          readyState: 0,
          getResponseHeader: function getResponseHeader(e) {
            var t;
            if (h) {
              if (!n) {
                n = {};
                while (t = Ht.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
              }
              t = n[e.toLowerCase() + " "];
            }
            return null == t ? null : t.join(", ");
          },
          getAllResponseHeaders: function getAllResponseHeaders() {
            return h ? p : null;
          },
          setRequestHeader: function setRequestHeader(e, t) {
            return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this;
          },
          overrideMimeType: function overrideMimeType(e) {
            return null == h && (y.mimeType = e), this;
          },
          statusCode: function statusCode(e) {
            var t;
            if (e) if (h) T.always(e[T.status]);else for (t in e) w[t] = [w[t], e[t]];
            return this;
          },
          abort: function abort(e) {
            var t = e || u;
            return c && c.abort(t), l(0, t), this;
          }
        };
      if (x.promise(T), y.url = ((e || y.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), y.type = t.method || t.type || y.method || y.type, y.dataTypes = (y.dataType || "*").toLowerCase().match(P) || [""], null == y.crossDomain) {
        r = S.createElement("a");
        try {
          r.href = y.url, r.href = r.href, y.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host;
        } catch (e) {
          y.crossDomain = !0;
        }
      }
      if (y.data && y.processData && "string" != typeof y.data && (y.data = E.param(y.data, y.traditional)), $t(Rt, y, t, T), h) return T;
      for (i in (g = E.event && y.global) && 0 == E.active++ && E.event.trigger("ajaxStart"), y.type = y.type.toUpperCase(), y.hasContent = !Ot.test(y.type), f = y.url.replace(qt, ""), y.hasContent ? y.data && y.processData && 0 === (y.contentType || "").indexOf("application/x-www-form-urlencoded") && (y.data = y.data.replace(Dt, "+")) : (o = y.url.slice(f.length), y.data && (y.processData || "string" == typeof y.data) && (f += (St.test(f) ? "&" : "?") + y.data, delete y.data), !1 === y.cache && (f = f.replace(Lt, "$1"), o = (St.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o), y.url = f + o), y.ifModified && (E.lastModified[f] && T.setRequestHeader("If-Modified-Since", E.lastModified[f]), E.etag[f] && T.setRequestHeader("If-None-Match", E.etag[f])), (y.data && y.hasContent && !1 !== y.contentType || t.contentType) && T.setRequestHeader("Content-Type", y.contentType), T.setRequestHeader("Accept", y.dataTypes[0] && y.accepts[y.dataTypes[0]] ? y.accepts[y.dataTypes[0]] + ("*" !== y.dataTypes[0] ? ", " + It + "; q=0.01" : "") : y.accepts["*"]), y.headers) T.setRequestHeader(i, y.headers[i]);
      if (y.beforeSend && (!1 === y.beforeSend.call(v, T, y) || h)) return T.abort();
      if (u = "abort", b.add(y.complete), T.done(y.success), T.fail(y.error), c = $t(Mt, y, t, T)) {
        if (T.readyState = 1, g && m.trigger("ajaxSend", [T, y]), h) return T;
        y.async && 0 < y.timeout && (d = C.setTimeout(function () {
          T.abort("timeout");
        }, y.timeout));
        try {
          h = !1, c.send(a, l);
        } catch (e) {
          if (h) throw e;
          l(-1, e);
        }
      } else l(-1, "No Transport");
      function l(e, t, n, r) {
        var i,
          o,
          a,
          s,
          u,
          l = t;
        h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
          var r,
            i,
            o,
            a,
            s = e.contents,
            u = e.dataTypes;
          while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
          if (r) for (i in s) if (s[i] && s[i].test(r)) {
            u.unshift(i);
            break;
          }
          if (u[0] in n) o = u[0];else {
            for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                o = i;
                break;
              }
              a || (a = i);
            }
            o = o || a;
          }
          if (o) return o !== u[0] && u.unshift(o), n[o];
        }(y, T, n)), !i && -1 < E.inArray("script", y.dataTypes) && E.inArray("json", y.dataTypes) < 0 && (y.converters["text script"] = function () {}), s = function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = {},
            c = e.dataTypes.slice();
          if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
          o = c.shift();
          while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
              !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
              break;
            }
            if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
              t = a(t);
            } catch (e) {
              return {
                state: "parsererror",
                error: a ? e : "No conversion from " + u + " to " + o
              };
            }
          }
          return {
            state: "success",
            data: t
          };
        }(y, s, T, i), i ? (y.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (E.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (E.etag[f] = u)), 204 === e || "HEAD" === y.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(v, [o, l, T]) : x.rejectWith(v, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, y, i ? o : a]), b.fireWith(v, [T, l]), g && (m.trigger("ajaxComplete", [T, y]), --E.active || E.event.trigger("ajaxStop")));
      }
      return T;
    },
    getJSON: function getJSON(e, t, n) {
      return E.get(e, t, n, "json");
    },
    getScript: function getScript(e, t) {
      return E.get(e, void 0, t, "script");
    }
  }), E.each(["get", "post"], function (e, i) {
    E[i] = function (e, t, n, r) {
      return m(t) && (r = r || n, n = t, t = void 0), E.ajax(E.extend({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      }, E.isPlainObject(e) && e));
    };
  }), E.ajaxPrefilter(function (e) {
    var t;
    for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
  }), E._evalUrl = function (e, t, n) {
    return E.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        "text script": function textScript() {}
      },
      dataFilter: function dataFilter(e) {
        E.globalEval(e, t, n);
      }
    });
  }, E.fn.extend({
    wrapAll: function wrapAll(e) {
      var t;
      return this[0] && (m(e) && (e = e.call(this[0])), t = E(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;
        while (e.firstElementChild) e = e.firstElementChild;
        return e;
      }).append(this)), this;
    },
    wrapInner: function wrapInner(n) {
      return m(n) ? this.each(function (e) {
        E(this).wrapInner(n.call(this, e));
      }) : this.each(function () {
        var e = E(this),
          t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n);
      });
    },
    wrap: function wrap(t) {
      var n = m(t);
      return this.each(function (e) {
        E(this).wrapAll(n ? t.call(this, e) : t);
      });
    },
    unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        E(this).replaceWith(this.childNodes);
      }), this;
    }
  }), E.expr.pseudos.hidden = function (e) {
    return !E.expr.pseudos.visible(e);
  }, E.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, E.ajaxSettings.xhr = function () {
    try {
      return new C.XMLHttpRequest();
    } catch (e) {}
  };
  var _t = {
      0: 200,
      1223: 204
    },
    zt = E.ajaxSettings.xhr();
  v.cors = !!zt && "withCredentials" in zt, v.ajax = zt = !!zt, E.ajaxTransport(function (i) {
    var _o, a;
    if (v.cors || zt && !i.crossDomain) return {
      send: function send(e, t) {
        var n,
          r = i.xhr();
        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n];
        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
        _o = function o(e) {
          return function () {
            _o && (_o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
              binary: r.response
            } : {
              text: r.responseText
            }, r.getAllResponseHeaders()));
          };
        }, r.onload = _o(), a = r.onerror = r.ontimeout = _o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
          4 === r.readyState && C.setTimeout(function () {
            _o && a();
          });
        }, _o = _o("abort");
        try {
          r.send(i.hasContent && i.data || null);
        } catch (e) {
          if (_o) throw e;
        }
      },
      abort: function abort() {
        _o && _o();
      }
    };
  }), E.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), E.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(e) {
        return E.globalEval(e), e;
      }
    }
  }), E.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), E.ajaxTransport("script", function (n) {
    var r, _i;
    if (n.crossDomain || n.scriptAttrs) return {
      send: function send(e, t) {
        r = E("<script>").attr(n.scriptAttrs || {}).prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", _i = function i(e) {
          r.remove(), _i = null, e && t("error" === e.type ? 404 : 200, e.type);
        }), S.head.appendChild(r[0]);
      },
      abort: function abort() {
        _i && _i();
      }
    };
  });
  var Ut,
    Xt = [],
    Vt = /(=)\?(?=&|$)|\?\?/;
  E.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var e = Xt.pop() || E.expando + "_" + Ct.guid++;
      return this[e] = !0, e;
    }
  }), E.ajaxPrefilter("json jsonp", function (e, t, n) {
    var r,
      i,
      o,
      a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
    if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
      return o || E.error(r + " was not called"), o[0];
    }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
      o = arguments;
    }, n.always(function () {
      void 0 === i ? E(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Xt.push(r)), o && m(i) && i(o[0]), o = i = void 0;
    }), "script";
  }), v.createHTMLDocument = ((Ut = S.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), E.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((r = (t = S.implementation.createHTMLDocument("")).createElement("base")).href = S.location.href, t.head.appendChild(r)) : t = S), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && E(o).remove(), E.merge([], i.childNodes)));
    var r, i, o;
  }, E.fn.load = function (e, t, n) {
    var r,
      i,
      o,
      a = this,
      s = e.indexOf(" ");
    return -1 < s && (r = yt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (i = "POST"), 0 < a.length && E.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? E("<div>").append(E.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, E.expr.pseudos.animated = function (t) {
    return E.grep(E.timers, function (e) {
      return t === e.elem;
    }).length;
  }, E.offset = {
    setOffset: function setOffset(e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l = E.css(e, "position"),
        c = E(e),
        f = {};
      "static" === l && (e.style.position = "relative"), s = c.offset(), o = E.css(e, "top"), u = E.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, E.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f);
    }
  }, E.fn.extend({
    offset: function offset(t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        E.offset.setOffset(this, t, e);
      });
      var e,
        n,
        r = this[0];
      return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: e.top + n.pageYOffset,
        left: e.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0;
    },
    position: function position() {
      if (this[0]) {
        var e,
          t,
          n,
          r = this[0],
          i = {
            top: 0,
            left: 0
          };
        if ("fixed" === E.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
          while (e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position")) e = e.parentNode;
          e && e !== r && 1 === e.nodeType && ((i = E(e).offset()).top += E.css(e, "borderTopWidth", !0), i.left += E.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - i.top - E.css(r, "marginTop", !0),
          left: t.left - i.left - E.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;
        while (e && "static" === E.css(e, "position")) e = e.offsetParent;
        return e || re;
      });
    }
  }), E.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, i) {
    var o = "pageYOffset" === i;
    E.fn[t] = function (e) {
      return B(this, function (e, t, n) {
        var r;
        if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
      }, t, e, arguments.length);
    };
  }), E.each(["top", "left"], function (e, n) {
    E.cssHooks[n] = _e(v.pixelPosition, function (e, t) {
      if (t) return t = Be(e, n), Pe.test(t) ? E(e).position()[n] + "px" : t;
    });
  }), E.each({
    Height: "height",
    Width: "width"
  }, function (a, s) {
    E.each({
      padding: "inner" + a,
      content: s,
      "": "outer" + a
    }, function (r, o) {
      E.fn[o] = function (e, t) {
        var n = arguments.length && (r || "boolean" != typeof e),
          i = r || (!0 === e || !0 === t ? "margin" : "border");
        return B(this, function (e, t, n) {
          var r;
          return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? E.css(e, t, i) : E.style(e, t, n, i);
        }, s, n ? e : void 0, n);
      };
    });
  }), E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    E.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), E.fn.extend({
    bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function unbind(e, t) {
      return this.off(e, null, t);
    },
    delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    },
    hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    E.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
    };
  });
  var Gt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  E.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function i() {
      return e.apply(t || this, r.concat(s.call(arguments)));
    }).guid = e.guid = e.guid || E.guid++, i;
  }, E.holdReady = function (e) {
    e ? E.readyWait++ : E.ready(!0);
  }, E.isArray = Array.isArray, E.parseJSON = JSON.parse, E.nodeName = A, E.isFunction = m, E.isWindow = x, E.camelCase = X, E.type = w, E.now = Date.now, E.isNumeric = function (e) {
    var t = E.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, E.trim = function (e) {
    return null == e ? "" : (e + "").replace(Gt, "$1");
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return E;
  });
  var Yt = C.jQuery,
    Qt = C.$;
  return E.noConflict = function (e) {
    return C.$ === E && (C.$ = Qt), e && C.jQuery === E && (C.jQuery = Yt), E;
  }, "undefined" == typeof e && (C.jQuery = C.$ = E), E;
});
;
(function () {
  var myMap;
  var init = function init() {
    myMap = new ymaps.Map("yandex-maps", {
      center: [55.751427, 37.617315],
      zoom: 14,
      controls: []
    });
    var coords = [[55.745136, 37.588946], [55.754055, 37.591183], [55.742148, 37.565524]];
    var myCollection = new ymaps.GeoObjectCollection({}, {
      draggable: false,
      iconLayout: 'default#image',
      iconImageHref: "./img/map-marker.png",
      iconImageSize: [30, 42],
      iconImageOffset: [-3, -42]
    });
    coords.forEach(function (coord) {
      myCollection.add(new ymaps.Placemark(coord));
    });
    myMap.geoObjects.add(myCollection);
  };
  ymaps.ready(init);
})();
(function () {
  var validateFields = function validateFields(form, fieldsArray) {
    fieldsArray.forEach(function (field) {
      field.removeClass("input-error");
      if (field.val().trim() === "") {
        field.addClass("input-error");
      }
    });
    var errorFields = form.find(".input-error");
    return errorFields.length === 0;
  };
  $('#form').submit(function (e) {
    e.preventDefault();
    var form = $(e.currentTarget);
    var name = form.find("[name='name']");
    var phone = form.find("[name='phone']");
    var comment = form.find("[name='comment']");
    var to = form.find("[name='to']");
    var modal = $("#modal");
    var content = modal.find(".modal__content");
    modal.removeClass("error-modal");
    var isValid = validateFields(form, [comment, name, phone, to]);
    if (isValid) {
      $.ajax({
        url: "https://webdev-api.loftschool.com/sendmail",
        method: "post",
        data: {
          name: name.val(),
          phone: phone.val(),
          comment: comment.val(),
          to: to.val()
        },
        success: function success(data) {
          content.text(data.message);
          // console.log(data);
          $.fancybox.open({
            src: '#modal',
            type: "inline"
          });
        },
        error: function error(data) {
          // const message = data.responseJSON.messaeg
          // content.text(message);
          // modal.addClass("error-modal");
          content.text('Произошла ошибка, попробуйте снова');
          $.fancybox.open({
            src: '#modal',
            type: "inline"
          });
        }
      });
    }
  });
  $(".app-submit-btn").click(function (e) {
    e.preventDefault();
    $.fancybox.close();
  });
})();
(function () {
  var sections = $("section");
  var display = $(".main-content");
  var sideMenu = $(".fixed-menu");
  var menuItems = sideMenu.find("fixed-menu__item");
  var mobileDetect = new MobileDetect(window.navigator.userAgent);
  var isMobile = mobileDetect.mobile();
  var inScroll = false;
  sections.first().addClass("active");
  var countSectionPosition = function countSectionPosition(sectionsEq) {
    return sectionsEq * -100;
  };
  var resetActiveClassForItem = function resetActiveClassForItem(item, itemEq, activeClass) {
    item.eq(itemEq).addClass(activeClass).siblings().removeClass(activeClass);
  };
  var performTransition = function performTransition(sectionsEq) {
    if (inScroll == false) {
      inScroll = true;
      var position = countSectionPosition(sectionsEq);
      display.css({
        transform: "translateY(".concat(position, "%)")
      });
      resetActiveClassForItem(sections, sectionsEq, "active");
      // sections.eq(sectionsEq).addClass("active").siblings().removeClass("active");	
      setTimeout(function () {
        inScroll = false;
        resetActiveClassForItem(menuItems, sectionsEq, "fixed-menu__item--active");
        sideMenu.find(".fixed-menu__item").eq(sectionsEq).addClass("fixed-menu__item--active").siblings().removeClass("fixed-menu__item--active");
      }, 1300);
    }
  };
  var scrollViewport = function scrollViewport(direction) {
    var activeSection = sections.filter(".active");
    var nextSection = activeSection.next();
    var prevSection = activeSection.prev();
    if (direction == "next" && nextSection.length) {
      performTransition(nextSection.index());
    }
    if (direction == "prev" && prevSection.length) {
      performTransition(prevSection.index());
    }
  };
  $(window).on("wheel", function (e) {
    var deltaY = e.originalEvent.deltaY;
    if (deltaY > 0) {
      scrollViewport("next");
    }
    if (deltaY < 0) {
      scrollViewport("prev");
    }
  });
  $(window).on("keydown", function (e) {
    var tagName = e.target.tagName.toLowerCase();
    if (tagName !== "input" && tagName !== "textarea") {
      switch (e.keyCode) {
        case 38:
          scrollViewport("prev");
          break;
        case 40:
          scrollViewport("next");
          break;
      }
    }
  });
  $(".wrapper").on("touchemove", function (e) {
    return e.preventDefault();
  });
  $("[data-scroll-to]").click(function (e) {
    e.preventDefault();
    var $this = $(e.currentTarget);
    var target = $this.attr("data-scroll-to");
    var reqSection = $("[data-section-id=".concat(target, "]"));
    performTransition(reqSection.index());
    console.log(reqSection.index());
  });
  if (isMobile) {
    $("body").swipe({
      swipe: function swipe(event, direction) {
        var scroller = viewportScroller();
        var scrollDirection = "";
        if (direction === "up") scrollDirection = "next";
        if (direction === "down") scrollDirection = "prev";
        scroller[scrollDirection]();
      }
    });
  }
})();
(function () {
  var player;
  var playerContainer = $(".player");
  var iventsInit = function iventsInit() {
    $(".player__start").click(function (e) {
      e.preventDefault();
      if (playerContainer.hasClass("paused")) {
        player.pauseVideo();
      } else {
        player.playVideo();
      }
    });
    $(".player__playback").click(function (e) {
      var bar = $(e.currentTarget);
      var clickedPosition = e.originalEvent.layerX;
      var newButtonPositionPercent = clickedPosition / bar.width() * 100;
      var newPlayerBackPositionSec = player.getDuration() / 100 * newButtonPositionPercent;
      $(".player__playback-button").css({
        left: "".concat(newButtonPositionPercent, "%")
      });
      player.seekTo(newPlayerBackPositionSec);
    });
    $(".player__splash").click(function (e) {
      player.playVideo();
    });
  };
  var formatTime = function formatTime(timeSec) {
    var roundTime = Math.round(timeSec);
    var minutes = addZero(Math.floor(roundTime / 60));
    var seconds = addZero(roundTime - minutes * 60);
    function addZero(num) {
      return num < 10 ? "0".concat(num) : num;
    }
    return "".concat(minutes, " : ").concat(seconds);
  };
  var onPlayerReady = function onPlayerReady() {
    var interval;
    var durationSec = player.getDuration();
    $(".player__duration-estimate").text(formatTime(durationSec));
    if (typeof interval !== 'undefined') {
      clearInterval(interval);
    }
    interval = setInterval(function () {
      var completedSec = player.getCurrentTime();
      var complitedPercent = completedSec / durationSec * 100;
      $(".player__playback-button").css({
        left: "".concat(complitedPercent, "%")
      });
      $(".player__duration-completed").text(formatTime(completedSec));
    }, 1000);
  };
  var onPlayerStateChange = function onPlayerStateChange(event) {
    switch (event.data) {
      case 1:
        playerContainer.addClass("active");
        playerContainer.addClass("paused");
        break;
      case 2:
        playerContainer.removeClass("active");
        playerContainer.removeClass("paused");
        break;
    }
  };
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('yt-player', _defineProperty({
      height: '405',
      width: '660',
      videoId: 'hk3KPa6zWzo',
      playerVars: {
        'playsinline': 1
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    }, "playerVars", {
      controls: 0,
      disablekb: 0,
      showinfo: 0,
      rel: 0,
      autoplay: 0,
      modestbranding: 0
    }));
  }
  iventsInit();
})();
(function () {
  var findBlockByAlias = function findBlockByAlias(alias) {
    return $(".reviews__item").filter(function (ndx, item) {
      return $(item).attr("data-linked-with") == alias;
    });
  };
  $(".interactive-avatar__link").click(function (e) {
    e.preventDefault();
    var $this = $(e.currentTarget);
    var target = $this.attr("data-open");
    var itemToShow = findBlockByAlias(target);
    var curItem = $this.closest(".reviews__switcher-item");
    itemToShow.addClass("active").siblings().removeClass("active");
    curItem.addClass("active").siblings().removeClass("active");
  });
})();
(function () {
  var left = document.querySelector("#arrow--prew");
  var right = document.querySelector("#arrow--next");
  var itemList = document.querySelector("#slider__list");
  var loop = function loop(direction, e) {
    e.preventDefault();
    if (direction == "right") {
      itemList.appendChild(itemList.firstElementChild);
    } else {
      itemList.insertBefore(itemList.lastElementChild, slider__list.firstElementChild);
    }
  };
  right.addEventListener("click", function (e) {
    loop("right", e);
  });
  left.addEventListener("click", function (e) {
    loop("left", e);
  });
})();
(function () {
  /////////////////////////////////////////////
  // TEAM
  /////////////////////////////////////////////

  var openItem = function openItem(item) {
    var container = item.closest(".team__item");
    var contentBlock = container.find(".team__content");
    var textBlock = contentBlock.find(".team__content-block");
    var reqHeight = textBlock.height();
    container.addClass("active");
    contentBlock.height(reqHeight);
  };
  var closeEveryItem = function closeEveryItem(container) {
    var items = container.find(".team__content");
    var itemContainer = container.find(".team__item");
    itemContainer.removeClass("active");
    items.height(0);
  };
  $(".team__tiltle").click(function (e) {
    var $this = $(e.currentTarget);
    var container = $this.closest(".team");
    var elemContainer = $this.closest(".team__item");
    if (elemContainer.hasClass("active")) {
      closeEveryItem(container);
    } else {
      closeEveryItem(container);
      openItem($this);
    }
  });
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY28uanMiLCJoYW1idXJnZXIuanMiLCJqcXVlcnkuanMiLCJtYXAuanMiLCJtb2RhbC5qcyIsIm9wcy5qcyIsInBsYXllci5qcyIsInJldmlld3MuanMiLCJzbGlkZXIuanMiLCJ0ZWFtLmpzIl0sIm5hbWVzIjpbImxpbmVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5kZXgiLCJsZW5ndGgiLCJlbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiY3VycmVudExpbmUiLCJjbG9zZXN0IiwiaSIsInJlbW92ZSIsImFkZCIsIm9wZW5FbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImNsb3NlRWxlbWVudCIsImJvZHkiLCJodW1idXJnZXJNZW51IiwiaGFtYnVyZ2VyTWFpbiIsInRvZ2dsZSIsImNsaWNrIiwidCIsIm1vZHVsZSIsImV4cG9ydHMiLCJFcnJvciIsIndpbmRvdyIsIkMiLCJyIiwiT2JqZWN0IiwiZ2V0UHJvdG90eXBlT2YiLCJzIiwic2xpY2UiLCJnIiwiZmxhdCIsImNhbGwiLCJjb25jYXQiLCJhcHBseSIsInUiLCJwdXNoIiwiaW5kZXhPZiIsIm4iLCJvIiwidG9TdHJpbmciLCJ5IiwiaGFzT3duUHJvcGVydHkiLCJhIiwibCIsInYiLCJtIiwibm9kZVR5cGUiLCJpdGVtIiwieCIsIlMiLCJjIiwidHlwZSIsInNyYyIsIm5vbmNlIiwibm9Nb2R1bGUiLCJiIiwiY3JlYXRlRWxlbWVudCIsInRleHQiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJ3IiwiZiIsIkUiLCJmbiIsImluaXQiLCJwIiwicHJvdG90eXBlIiwianF1ZXJ5IiwiY29uc3RydWN0b3IiLCJ0b0FycmF5IiwiZ2V0IiwicHVzaFN0YWNrIiwibWVyZ2UiLCJwcmV2T2JqZWN0IiwiZWFjaCIsIm1hcCIsImFyZ3VtZW50cyIsImZpcnN0IiwiZXEiLCJsYXN0IiwiZXZlbiIsImdyZXAiLCJvZGQiLCJlbmQiLCJzb3J0Iiwic3BsaWNlIiwiZXh0ZW5kIiwiaXNQbGFpbk9iamVjdCIsIkFycmF5IiwiaXNBcnJheSIsImV4cGFuZG8iLCJNYXRoIiwicmFuZG9tIiwicmVwbGFjZSIsImlzUmVhZHkiLCJlcnJvciIsIm5vb3AiLCJpc0VtcHR5T2JqZWN0IiwiZ2xvYmFsRXZhbCIsIm1ha2VBcnJheSIsImluQXJyYXkiLCJndWlkIiwic3VwcG9ydCIsIlN5bWJvbCIsIml0ZXJhdG9yIiwic3BsaXQiLCJ0b0xvd2VyQ2FzZSIsImQiLCJoIiwiVCIsIkRhdGUiLCJrIiwidWUiLCJBIiwiTiIsImoiLCJEIiwicSIsInBvcCIsIkwiLCJIIiwiTyIsIlAiLCJSIiwiTSIsIkkiLCJXIiwiRiIsIiQiLCJSZWdFeHAiLCJCIiwiXyIsInoiLCJVIiwiWCIsIlYiLCJHIiwiSUQiLCJDTEFTUyIsIlRBRyIsIkFUVFIiLCJQU0VVRE8iLCJDSElMRCIsImJvb2wiLCJuZWVkc0NvbnRleHQiLCJZIiwiUSIsIkoiLCJLIiwiWiIsImVlIiwidGUiLCJuZSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInJlIiwiaWUiLCJjaGFyQ29kZUF0Iiwib2UiLCJhZSIsImJlIiwiZGlzYWJsZWQiLCJub2RlTmFtZSIsImRpciIsIm5leHQiLCJjaGlsZE5vZGVzIiwic2UiLCJvd25lckRvY3VtZW50IiwiZXhlYyIsImdldEVsZW1lbnRCeUlkIiwiaWQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJxc2EiLCJ0ZXN0IiwidmUiLCJzY29wZSIsInhlIiwiam9pbiIsImNzc1N1cHBvcnRzU2VsZWN0b3IiLCJDU1MiLCJzdXBwb3J0cyIsInJlbW92ZUF0dHJpYnV0ZSIsImNhY2hlTGVuZ3RoIiwic2hpZnQiLCJsZSIsImNlIiwiZmUiLCJhdHRySGFuZGxlIiwicGUiLCJzb3VyY2VJbmRleCIsIm5leHRTaWJsaW5nIiwiZGUiLCJoZSIsImdlIiwiaXNEaXNhYmxlZCIsInllIiwiaXNYTUwiLCJuYW1lc3BhY2VVUkkiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXREb2N1bWVudCIsImRlZmF1bHRWaWV3IiwidG9wIiwiYXR0YWNoRXZlbnQiLCJhdHRyaWJ1dGVzIiwiY2xhc3NOYW1lIiwiY3JlYXRlQ29tbWVudCIsImdldEJ5SWQiLCJnZXRFbGVtZW50c0J5TmFtZSIsImZpbHRlciIsImZpbmQiLCJnZXRBdHRyaWJ1dGVOb2RlIiwidmFsdWUiLCJpbm5lckhUTUwiLCJtYXRjaGVzU2VsZWN0b3IiLCJtYXRjaGVzIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwibW96TWF0Y2hlc1NlbGVjdG9yIiwib01hdGNoZXNTZWxlY3RvciIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwiZGlzY29ubmVjdGVkTWF0Y2giLCJjb21wYXJlRG9jdW1lbnRQb3NpdGlvbiIsInNvcnREZXRhY2hlZCIsInVuc2hpZnQiLCJhdHRyIiwic3BlY2lmaWVkIiwiZXNjYXBlIiwidW5pcXVlU29ydCIsImRldGVjdER1cGxpY2F0ZXMiLCJzb3J0U3RhYmxlIiwiZ2V0VGV4dCIsInRleHRDb250ZW50IiwiZmlyc3RDaGlsZCIsIm5vZGVWYWx1ZSIsInNlbGVjdG9ycyIsImNyZWF0ZVBzZXVkbyIsIm1hdGNoIiwicmVsYXRpdmUiLCJwcmVGaWx0ZXIiLCJsYXN0Q2hpbGQiLCJ1bmlxdWVJRCIsInBzZXVkb3MiLCJzZXRGaWx0ZXJzIiwibm90IiwiaGFzIiwibGFuZyIsImxvY2F0aW9uIiwiaGFzaCIsInJvb3QiLCJmb2N1cyIsImFjdGl2ZUVsZW1lbnQiLCJoYXNGb2N1cyIsImhyZWYiLCJ0YWJJbmRleCIsImVuYWJsZWQiLCJjaGVja2VkIiwic2VsZWN0ZWQiLCJzZWxlY3RlZEluZGV4IiwiZW1wdHkiLCJwYXJlbnQiLCJoZWFkZXIiLCJpbnB1dCIsImJ1dHRvbiIsImx0IiwiZ3QiLCJudGgiLCJyYWRpbyIsImNoZWNrYm94IiwiZmlsZSIsInBhc3N3b3JkIiwiaW1hZ2UiLCJzdWJtaXQiLCJyZXNldCIsIm1lIiwid2UiLCJUZSIsIkNlIiwiU2UiLCJmaWx0ZXJzIiwidG9rZW5pemUiLCJjb21waWxlIiwic2VsZWN0b3IiLCJzZWxlY3QiLCJkZWZhdWx0VmFsdWUiLCJleHByIiwidW5pcXVlIiwiaXNYTUxEb2MiLCJlc2NhcGVTZWxlY3RvciIsImlzIiwicGFyc2VIVE1MIiwicmVhZHkiLCJjaGlsZHJlbiIsImNvbnRlbnRzIiwicHJldiIsInByZXZBbGwiLCJhZGRCYWNrIiwicGFyZW50cyIsInBhcmVudHNVbnRpbCIsIm5leHRBbGwiLCJuZXh0VW50aWwiLCJwcmV2VW50aWwiLCJzaWJsaW5ncyIsImNvbnRlbnREb2N1bWVudCIsImNvbnRlbnQiLCJyZXZlcnNlIiwicHJvbWlzZSIsImRvbmUiLCJmYWlsIiwidGhlbiIsIkNhbGxiYWNrcyIsIm9uY2UiLCJzdG9wT25GYWxzZSIsIm1lbW9yeSIsImRpc2FibGUiLCJsb2NrIiwibG9ja2VkIiwiZmlyZVdpdGgiLCJmaXJlIiwiZmlyZWQiLCJEZWZlcnJlZCIsInN0YXRlIiwiYWx3YXlzIiwicGlwZSIsInByb2dyZXNzIiwibm90aWZ5IiwicmVzb2x2ZSIsInJlamVjdCIsIlR5cGVFcnJvciIsIm5vdGlmeVdpdGgiLCJyZXNvbHZlV2l0aCIsImV4Y2VwdGlvbkhvb2siLCJzdGFja1RyYWNlIiwicmVqZWN0V2l0aCIsImdldFN0YWNrSG9vayIsInNldFRpbWVvdXQiLCJ3aGVuIiwiY29uc29sZSIsIndhcm4iLCJuYW1lIiwibWVzc2FnZSIsInN0YWNrIiwicmVhZHlFeGNlcHRpb24iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVhZHlXYWl0IiwicmVhZHlTdGF0ZSIsImRvU2Nyb2xsIiwidG9VcHBlckNhc2UiLCJ1aWQiLCJjYWNoZSIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwic2V0IiwiYWNjZXNzIiwiaGFzRGF0YSIsIkpTT04iLCJwYXJzZSIsImRhdGEiLCJyZW1vdmVEYXRhIiwiX2RhdGEiLCJfcmVtb3ZlRGF0YSIsInF1ZXVlIiwiZGVxdWV1ZSIsIl9xdWV1ZUhvb2tzIiwic3RvcCIsImNsZWFyUXVldWUiLCJzb3VyY2UiLCJjb21wb3NlZCIsImdldFJvb3ROb2RlIiwic3R5bGUiLCJkaXNwbGF5IiwiY3NzIiwiY3VyIiwiY3NzTnVtYmVyIiwidW5pdCIsInN0YXJ0Iiwic2hvdyIsImhpZGUiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiY2hlY2tDbG9uZSIsImNsb25lTm9kZSIsIm5vQ2xvbmVDaGVja2VkIiwib3B0aW9uIiwidGhlYWQiLCJjb2wiLCJ0ciIsInRkIiwiX2RlZmF1bHQiLCJ0Ym9keSIsInRmb290IiwiY29sZ3JvdXAiLCJjYXB0aW9uIiwidGgiLCJvcHRncm91cCIsImh0bWxQcmVmaWx0ZXIiLCJjcmVhdGVUZXh0Tm9kZSIsIm9mZiIsImV2ZW50IiwiRWUiLCJuYW1lc3BhY2UiLCJoYW5kbGVyIiwiaXNUcmlnZ2VyIiwic3BlY2lhbCIsImRlbGVnYXRlVHlwZSIsInN0b3BQcm9wYWdhdGlvbiIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsInRyaWdnZXIiLCJFdmVudCIsImdsb2JhbCIsImV2ZW50cyIsImNyZWF0ZSIsImhhbmRsZSIsInRyaWdnZXJlZCIsImRpc3BhdGNoIiwiYmluZFR5cGUiLCJvcmlnVHlwZSIsImRlbGVnYXRlQ291bnQiLCJzZXR1cCIsInRlYXJkb3duIiwicmVtb3ZlRXZlbnQiLCJmaXgiLCJkZWxlZ2F0ZVRhcmdldCIsInByZURpc3BhdGNoIiwiaGFuZGxlcnMiLCJpc1Byb3BhZ2F0aW9uU3RvcHBlZCIsImN1cnJlbnRUYXJnZXQiLCJlbGVtIiwiaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQiLCJybmFtZXNwYWNlIiwiaGFuZGxlT2JqIiwicmVzdWx0IiwicG9zdERpc3BhdGNoIiwiYWRkUHJvcCIsImVudW1lcmFibGUiLCJvcmlnaW5hbEV2ZW50Iiwid3JpdGFibGUiLCJsb2FkIiwibm9CdWJibGUiLCJiZWZvcmV1bmxvYWQiLCJyZXR1cm5WYWx1ZSIsImlzRGVmYXVsdFByZXZlbnRlZCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJyZWxhdGVkVGFyZ2V0IiwidGltZVN0YW1wIiwibm93IiwiaXNTaW11bGF0ZWQiLCJhbHRLZXkiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImNoYW5nZWRUb3VjaGVzIiwiY3RybEtleSIsImRldGFpbCIsImV2ZW50UGhhc2UiLCJtZXRhS2V5IiwicGFnZVgiLCJwYWdlWSIsInNoaWZ0S2V5IiwidmlldyIsImNvZGUiLCJjaGFyQ29kZSIsImtleSIsImtleUNvZGUiLCJidXR0b25zIiwiY2xpZW50WCIsImNsaWVudFkiLCJvZmZzZXRYIiwib2Zmc2V0WSIsInBvaW50ZXJJZCIsInBvaW50ZXJUeXBlIiwic2NyZWVuWCIsInNjcmVlblkiLCJ0YXJnZXRUb3VjaGVzIiwidG9FbGVtZW50IiwidG91Y2hlcyIsIndoaWNoIiwiYmx1ciIsIm1vdXNlZW50ZXIiLCJtb3VzZWxlYXZlIiwicG9pbnRlcmVudGVyIiwicG9pbnRlcmxlYXZlIiwib24iLCJvbmUiLCJrZSIsIkFlIiwiTmUiLCJqZSIsIkRlIiwicWUiLCJMZSIsIkhlIiwiaHRtbCIsImNsb25lIiwiX2V2YWxVcmwiLCJPZSIsImNsZWFuRGF0YSIsImRldGFjaCIsImFwcGVuZCIsInByZXBlbmQiLCJpbnNlcnRCZWZvcmUiLCJiZWZvcmUiLCJhZnRlciIsInJlcGxhY2VXaXRoIiwicmVwbGFjZUNoaWxkIiwiYXBwZW5kVG8iLCJwcmVwZW5kVG8iLCJpbnNlcnRBZnRlciIsInJlcGxhY2VBbGwiLCJQZSIsIlJlIiwiTWUiLCJvcGVuZXIiLCJnZXRDb21wdXRlZFN0eWxlIiwiSWUiLCJXZSIsIkZlIiwiJGUiLCJCZSIsImdldFByb3BlcnR5VmFsdWUiLCJwaXhlbEJveFN0eWxlcyIsIndpZHRoIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIl9lIiwiY3NzVGV4dCIsIm1hcmdpbkxlZnQiLCJyaWdodCIsInBvc2l0aW9uIiwib2Zmc2V0V2lkdGgiLCJyb3VuZCIsInBhcnNlRmxvYXQiLCJiYWNrZ3JvdW5kQ2xpcCIsImNsZWFyQ2xvbmVTdHlsZSIsImJveFNpemluZ1JlbGlhYmxlIiwicGl4ZWxQb3NpdGlvbiIsInJlbGlhYmxlTWFyZ2luTGVmdCIsInNjcm9sbGJveFNpemUiLCJyZWxpYWJsZVRyRGltZW5zaW9ucyIsImhlaWdodCIsInBhcnNlSW50IiwiYm9yZGVyVG9wV2lkdGgiLCJib3JkZXJCb3R0b21XaWR0aCIsIm9mZnNldEhlaWdodCIsInplIiwiVWUiLCJYZSIsIlZlIiwiY3NzUHJvcHMiLCJHZSIsIlllIiwidmlzaWJpbGl0eSIsIlFlIiwibGV0dGVyU3BhY2luZyIsImZvbnRXZWlnaHQiLCJKZSIsIm1heCIsIktlIiwiY2VpbCIsIlplIiwiZ2V0Q2xpZW50UmVjdHMiLCJldCIsImNzc0hvb2tzIiwib3BhY2l0eSIsImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50IiwiY29sdW1uQ291bnQiLCJmaWxsT3BhY2l0eSIsImZsZXhHcm93IiwiZmxleFNocmluayIsImdyaWRBcmVhIiwiZ3JpZENvbHVtbiIsImdyaWRDb2x1bW5FbmQiLCJncmlkQ29sdW1uU3RhcnQiLCJncmlkUm93IiwiZ3JpZFJvd0VuZCIsImdyaWRSb3dTdGFydCIsImxpbmVIZWlnaHQiLCJvcmRlciIsIm9ycGhhbnMiLCJ3aWRvd3MiLCJ6SW5kZXgiLCJ6b29tIiwic2V0UHJvcGVydHkiLCJpc0Zpbml0ZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnQiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm9yZGVyIiwiZXhwYW5kIiwiVHdlZW4iLCJwcm9wIiwiZWFzaW5nIiwib3B0aW9ucyIsInByb3BIb29rcyIsInJ1biIsImR1cmF0aW9uIiwicG9zIiwic3RlcCIsImZ4Iiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsImxpbmVhciIsInN3aW5nIiwiY29zIiwiUEkiLCJ0dCIsIm50IiwicnQiLCJpdCIsIm90IiwiYXQiLCJzdCIsImhpZGRlbiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImludGVydmFsIiwidGljayIsInV0IiwiY3QiLCJmdCIsInR3ZWVuZXJzIiwicHJlZmlsdGVycyIsInN0YXJ0VGltZSIsInR3ZWVucyIsInByb3BzIiwib3B0cyIsInNwZWNpYWxFYXNpbmciLCJvcmlnaW5hbFByb3BlcnRpZXMiLCJvcmlnaW5hbE9wdGlvbnMiLCJjcmVhdGVUd2VlbiIsImJpbmQiLCJjb21wbGV0ZSIsInRpbWVyIiwiYW5pbSIsIkFuaW1hdGlvbiIsInR3ZWVuZXIiLCJ1bnF1ZXVlZCIsIm92ZXJmbG93Iiwib3ZlcmZsb3dYIiwib3ZlcmZsb3dZIiwicHJlZmlsdGVyIiwic3BlZWQiLCJzcGVlZHMiLCJvbGQiLCJmYWRlVG8iLCJhbmltYXRlIiwiZmluaXNoIiwidGltZXJzIiwic2xpZGVEb3duIiwic2xpZGVVcCIsInNsaWRlVG9nZ2xlIiwiZmFkZUluIiwiZmFkZU91dCIsImZhZGVUb2dnbGUiLCJzbG93IiwiZmFzdCIsImRlbGF5IiwiY2xlYXJUaW1lb3V0IiwiY2hlY2tPbiIsIm9wdFNlbGVjdGVkIiwicmFkaW9WYWx1ZSIsInB0IiwiZHQiLCJyZW1vdmVBdHRyIiwiYXR0ckhvb2tzIiwiaHQiLCJ5dCIsInZ0IiwibXQiLCJyZW1vdmVQcm9wIiwicHJvcEZpeCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ0b2dnbGVDbGFzcyIsImhhc0NsYXNzIiwieHQiLCJ2YWwiLCJ2YWxIb29rcyIsImZvY3VzaW4iLCJidCIsInd0IiwicGFyZW50V2luZG93Iiwic2ltdWxhdGUiLCJ0cmlnZ2VySGFuZGxlciIsIlR0IiwiQ3QiLCJTdCIsInBhcnNlWE1MIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwiRXQiLCJrdCIsIkF0IiwiTnQiLCJqdCIsInBhcmFtIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2VyaWFsaXplIiwic2VyaWFsaXplQXJyYXkiLCJEdCIsInF0IiwiTHQiLCJIdCIsIk90IiwiUHQiLCJSdCIsIk10IiwiSXQiLCJXdCIsIkZ0IiwiJHQiLCJkYXRhVHlwZXMiLCJCdCIsImFqYXhTZXR0aW5ncyIsImZsYXRPcHRpb25zIiwiYWN0aXZlIiwibGFzdE1vZGlmaWVkIiwiZXRhZyIsInVybCIsImlzTG9jYWwiLCJwcm90b2NvbCIsInByb2Nlc3NEYXRhIiwiYXN5bmMiLCJjb250ZW50VHlwZSIsImFjY2VwdHMiLCJ4bWwiLCJqc29uIiwicmVzcG9uc2VGaWVsZHMiLCJjb252ZXJ0ZXJzIiwiY29udGV4dCIsImFqYXhTZXR1cCIsImFqYXhQcmVmaWx0ZXIiLCJhamF4VHJhbnNwb3J0IiwiYWpheCIsInN0YXR1c0NvZGUiLCJnZXRSZXNwb25zZUhlYWRlciIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsInNldFJlcXVlc3RIZWFkZXIiLCJvdmVycmlkZU1pbWVUeXBlIiwibWltZVR5cGUiLCJzdGF0dXMiLCJhYm9ydCIsIm1ldGhvZCIsImRhdGFUeXBlIiwiY3Jvc3NEb21haW4iLCJob3N0IiwidHJhZGl0aW9uYWwiLCJoYXNDb250ZW50IiwiaWZNb2RpZmllZCIsImhlYWRlcnMiLCJiZWZvcmVTZW5kIiwic3VjY2VzcyIsInRpbWVvdXQiLCJzZW5kIiwiZGF0YUZpbHRlciIsInN0YXR1c1RleHQiLCJnZXRKU09OIiwiZ2V0U2NyaXB0Iiwid3JhcEFsbCIsImZpcnN0RWxlbWVudENoaWxkIiwid3JhcElubmVyIiwid3JhcCIsInVud3JhcCIsInZpc2libGUiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIl90IiwienQiLCJjb3JzIiwib3BlbiIsInVzZXJuYW1lIiwieGhyRmllbGRzIiwib25sb2FkIiwib25lcnJvciIsIm9uYWJvcnQiLCJvbnRpbWVvdXQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZXNwb25zZVR5cGUiLCJyZXNwb25zZVRleHQiLCJiaW5hcnkiLCJyZXNwb25zZSIsInNjcmlwdCIsInNjcmlwdEF0dHJzIiwiY2hhcnNldCIsInNjcmlwdENoYXJzZXQiLCJVdCIsIlh0IiwiVnQiLCJqc29ucCIsImpzb25wQ2FsbGJhY2siLCJjcmVhdGVIVE1MRG9jdW1lbnQiLCJpbXBsZW1lbnRhdGlvbiIsImFuaW1hdGVkIiwib2Zmc2V0Iiwic2V0T2Zmc2V0IiwidXNpbmciLCJwYWdlWU9mZnNldCIsInBhZ2VYT2Zmc2V0Iiwib2Zmc2V0UGFyZW50Iiwic2Nyb2xsVG8iLCJIZWlnaHQiLCJXaWR0aCIsInVuYmluZCIsImRlbGVnYXRlIiwidW5kZWxlZ2F0ZSIsImhvdmVyIiwiR3QiLCJwcm94eSIsImhvbGRSZWFkeSIsInBhcnNlSlNPTiIsImlzRnVuY3Rpb24iLCJpc1dpbmRvdyIsImNhbWVsQ2FzZSIsImlzTnVtZXJpYyIsImlzTmFOIiwidHJpbSIsImRlZmluZSIsImFtZCIsIll0IiwialF1ZXJ5IiwiUXQiLCJub0NvbmZsaWN0IiwibXlNYXAiLCJ5bWFwcyIsIk1hcCIsImNlbnRlciIsImNvbnRyb2xzIiwiY29vcmRzIiwibXlDb2xsZWN0aW9uIiwiR2VvT2JqZWN0Q29sbGVjdGlvbiIsImRyYWdnYWJsZSIsImljb25MYXlvdXQiLCJpY29uSW1hZ2VIcmVmIiwiaWNvbkltYWdlU2l6ZSIsImljb25JbWFnZU9mZnNldCIsImZvckVhY2giLCJjb29yZCIsIlBsYWNlbWFyayIsImdlb09iamVjdHMiLCJ2YWxpZGF0ZUZpZWxkcyIsImZvcm0iLCJmaWVsZHNBcnJheSIsImZpZWxkIiwiZXJyb3JGaWVsZHMiLCJwaG9uZSIsImNvbW1lbnQiLCJ0byIsIm1vZGFsIiwiaXNWYWxpZCIsImZhbmN5Ym94IiwiY2xvc2UiLCJzZWN0aW9ucyIsInNpZGVNZW51IiwibWVudUl0ZW1zIiwibW9iaWxlRGV0ZWN0IiwiTW9iaWxlRGV0ZWN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaXNNb2JpbGUiLCJtb2JpbGUiLCJpblNjcm9sbCIsImNvdW50U2VjdGlvblBvc2l0aW9uIiwic2VjdGlvbnNFcSIsInJlc2V0QWN0aXZlQ2xhc3NGb3JJdGVtIiwiaXRlbUVxIiwiYWN0aXZlQ2xhc3MiLCJwZXJmb3JtVHJhbnNpdGlvbiIsInRyYW5zZm9ybSIsInNjcm9sbFZpZXdwb3J0IiwiZGlyZWN0aW9uIiwiYWN0aXZlU2VjdGlvbiIsIm5leHRTZWN0aW9uIiwicHJldlNlY3Rpb24iLCJkZWx0YVkiLCJ0YWdOYW1lIiwiJHRoaXMiLCJyZXFTZWN0aW9uIiwibG9nIiwic3dpcGUiLCJzY3JvbGxlciIsInZpZXdwb3J0U2Nyb2xsZXIiLCJzY3JvbGxEaXJlY3Rpb24iLCJwbGF5ZXIiLCJwbGF5ZXJDb250YWluZXIiLCJpdmVudHNJbml0IiwicGF1c2VWaWRlbyIsInBsYXlWaWRlbyIsImJhciIsImNsaWNrZWRQb3NpdGlvbiIsImxheWVyWCIsIm5ld0J1dHRvblBvc2l0aW9uUGVyY2VudCIsIm5ld1BsYXllckJhY2tQb3NpdGlvblNlYyIsImdldER1cmF0aW9uIiwic2Vla1RvIiwiZm9ybWF0VGltZSIsInRpbWVTZWMiLCJyb3VuZFRpbWUiLCJtaW51dGVzIiwiYWRkWmVybyIsImZsb29yIiwic2Vjb25kcyIsIm51bSIsIm9uUGxheWVyUmVhZHkiLCJkdXJhdGlvblNlYyIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNvbXBsZXRlZFNlYyIsImdldEN1cnJlbnRUaW1lIiwiY29tcGxpdGVkUGVyY2VudCIsIm9uUGxheWVyU3RhdGVDaGFuZ2UiLCJvbllvdVR1YmVJZnJhbWVBUElSZWFkeSIsIllUIiwiUGxheWVyIiwidmlkZW9JZCIsInBsYXllclZhcnMiLCJkaXNhYmxla2IiLCJzaG93aW5mbyIsInJlbCIsImF1dG9wbGF5IiwibW9kZXN0YnJhbmRpbmciLCJmaW5kQmxvY2tCeUFsaWFzIiwiYWxpYXMiLCJuZHgiLCJpdGVtVG9TaG93IiwiY3VySXRlbSIsIml0ZW1MaXN0IiwibG9vcCIsImxhc3RFbGVtZW50Q2hpbGQiLCJzbGlkZXJfX2xpc3QiLCJvcGVuSXRlbSIsImNvbnRhaW5lciIsImNvbnRlbnRCbG9jayIsInRleHRCbG9jayIsInJlcUhlaWdodCIsImNsb3NlRXZlcnlJdGVtIiwiaXRlbXMiLCJpdGVtQ29udGFpbmVyIiwiZWxl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QUFBQSxDQUFBLEdBQUEsMERBQUEsR0FBQUMsQ0FBQSxHQUFBLE1BQUEsR0FBQUQsQ0FBQSxHQUFBLE1BQUE7TUFBQUcsQ0FBQSxHQUFBLElBQUEsR0FBQUYsQ0FBQSxHQUFBLHVGQUFBLEdBQUFDLENBQUEsR0FBQSxjQUFBO01BQUFFLENBQUEsR0FBQSxJQUFBQyxNQUFBLENBQUFMLENBQUEsR0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBO01BQUFNLENBQUEsR0FBQSxJQUFBRCxNQUFBLENBQUEsR0FBQSxHQUFBTCxDQUFBLEdBQUEsNkJBQUEsR0FBQUEsQ0FBQSxHQUFBLElBQUEsRUFBQSxHQUFBLENBQUE7TUFBQU8sQ0FBQSxHQUFBLElBQUFGLE1BQUEsQ0FBQSxHQUFBLEdBQUFMLENBQUEsR0FBQSxJQUFBLEdBQUFBLENBQUEsR0FBQSxHQUFBLENBQUE7TUFBQVEsQ0FBQSxHQUFBLElBQUFILE1BQUEsQ0FBQSxHQUFBLEdBQUFMLENBQUEsR0FBQSxVQUFBLEdBQUFBLENBQUEsR0FBQSxHQUFBLEdBQUFBLENBQUEsR0FBQSxHQUFBLENBQUE7TUFBQVMsQ0FBQSxHQUFBLElBQUFKLE1BQUEsQ0FBQUwsQ0FBQSxHQUFBLElBQUEsQ0FBQTtNQUFBVSxDQUFBLEdBQUEsSUFBQUwsTUFBQSxDQUFBRixDQUFBLENBQUE7TUFBQVEsQ0FBQSxHQUFBLElBQUFOLE1BQUEsQ0FBQSxHQUFBLEdBQUFKLENBQUEsR0FBQSxHQUFBLENBQUE7TUFBQVcsQ0FBQSxHQUFBO1FBQUFDLEVBQUEsRUFBQSxJQUFBUixNQUFBLENBQUEsS0FBQSxHQUFBSixDQUFBLEdBQUEsR0FBQSxDQUFBO1FBQUFhLEtBQUEsRUFBQSxJQUFBVCxNQUFBLENBQUEsT0FBQSxHQUFBSixDQUFBLEdBQUEsR0FBQSxDQUFBO1FBQUFjLEdBQUEsRUFBQSxJQUFBVixNQUFBLENBQUEsSUFBQSxHQUFBSixDQUFBLEdBQUEsT0FBQSxDQUFBO1FBQUFlLElBQUEsRUFBQSxJQUFBWCxNQUFBLENBQUEsR0FBQSxHQUFBSCxDQUFBLENBQUE7UUFBQWUsTUFB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QUFBQyxPQUFBLEVBQUEsQ0FBQSxDQUFBO0lBQUFDLFVBQUEsRUFBQSxDQUFBLENBQUE7SUFBQUMsY0FBQSxFQUFBLENBQUEsQ0FBQTtJQUFBQyxPQUFBLEVBQUEsQ0FBQSxDQUFBO0lBQUFDLE1BQUEsRUFBQSxDQUFBLENBQUE7SUFBQUMsVUFBQSxFQUFBLENBQUEsQ0FBQTtJQUFBQyxPQUFBLEVBQUEsQ0FBQSxDQUFBO0lBQUFDLEtBQUEsRUFBQSxDQUFBLENBQUE7SUFBQUMsS0FBQSxFQUFBLENBQUEsQ0FBQTtJQUFBQyxRQUFBLEVBQUEsQ0FBQSxDQUFBO0lBQUFDLElBQUEsRUFBQSxDQUFBLENBQUE7SUFBQSxNQUFBLEVBQUEsQ0FBQSxDQUFBO0lBQUFDLElBQUEsRUFBQSxDQUFBLENBQUE7SUFBQUMsUUFBQSxFQUFBLENBQUEsQ0FBQTtJQUFBQyxHQUFBLEVBQUEsQ0FBQSxDQUFBO0lBQUFDLE9BQUEsRUFBQSxDQUFBLENBQUE7SUFBQXRNLE1BQUEsRUFBQSxDQUFBLENBQUE7SUFBQXVNLE9BQUEsRUFBQSxDQUFBLENBQUE7SUFBQUMsT0FBQSxFQUFBLENBQUEsQ0FBQTtJQUFBQyxPQUFBLEVBQUEsQ0FBQSxDQUFBO0lBQUFDLE9BQUEsRUFBQSxDQUFBLENBQUE7SUFBQUMsT0FBQSxFQUFBLENBQUEsQ0FBQTtJQUFBQyxTQUFBLEVBQUEsQ0FBQSxDQUFBO0lBQUFDLFdBQUEsRUFBQSxDQUFBLENBQUE7SUFBQUMsT0FBQSxFQUFBLENBQUEsQ0FBQTtJQUFBQyxPQUFBLEVBQUEsQ0FBQSxDQUFBO0lBQUFDLGFBQUEsRUFBQSxDQUFBLENBQUE7SUFBQUMsU0FBQSxFQUFBLENBQUEsQ0FBQTtJQUFBQyxPQUFBLEVBQUEsQ0FBQSxDQUFBO0lBQUFDLEtBQUEsRUFBQSxDQUFBO0VBQUEsQ0FBQSxFQUFBM1osQ0FBQSxDQUFBOFUsS0FBQSxDQUFBbUMsT0FBQSxDQUFBLEVBQUFqWCxDQUFBLENBQUFZLElBQUEsQ0FBQTtJQUFBK0ssS0FBQSxFQUFBLFNBQUE7SUFBQWlPLElBQUEsRUFBQTtFQUFBLENB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LEVBQUE7SUFDQSxJQUFBSyxLQUFBLEdBQUFMLFNBQUEsQ0FBQTdzQixJQUFBLENBQUEsZ0JBQUEsQ0FBQTtJQUNBLElBQUFtdEIsYUFBQSxHQUFBTixTQUFBLENBQUE3c0IsSUFBQSxDQUFBLGFBQUEsQ0FBQTtJQUVBbXRCLGFBQUEsQ0FBQXhRLFdBQUEsQ0FBQSxRQUFBLENBQUE7SUFDQXVRLEtBQUEsQ0FBQTVZLE1BQUEsQ0FBQSxDQUFBLENBQUE7RUFDQSxDQUFBO0VBRUF4WixDQUFBLENBQUEsZUFBQSxDQUFBLENBQUFuSCxLQUFBLENBQUEsVUFBQWpCLENBQUEsRUFBQTtJQUNBLElBQUE0MkIsS0FBQSxHQUFBeHVCLENBQUEsQ0FBQXBJLENBQUEsQ0FBQTRhLGFBQUEsQ0FBQTtJQUNBLElBQUF1ZixTQUFBLEdBQUF2RCxLQUFBLENBQUF0MkIsT0FBQSxDQUFBLE9BQUEsQ0FBQTtJQUNBLElBQUFvNkIsYUFBQSxHQUFBOUQsS0FBQSxDQUFBdDJCLE9BQUEsQ0FBQSxhQUFBLENBQUE7SUFHQSxJQUFBbzZCLGFBQUEsQ0FBQXZRLFFBQUEsQ0FBQSxRQUFBLENBQUEsRUFBQTtNQUNBb1EsY0FBQSxDQUFBSixTQUFBLENBQUE7SUFDQSxDQUFBLE1BQUE7TUFDQUksY0FBQSxDQUFBSixTQUFBLENBQUE7TUFDQUQsUUFBQSxDQUFBdEQsS0FBQSxDQUFBO0lBQ0E7RUFHQSxDQUFBLENBQUE7QUFFQSxDQUFBLEdBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjsoZnVuY3Rpb24oKSB7XG5cdGNvbnN0IGxpbmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb2xvcnMtYWNjb19faXRlbVwiKTtcblxuXHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGluZXMubGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IGxpbmVzW2luZGV4XVxuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0aWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNvbG9ycy1hY2NvX19jb250ZW50XCIpKSByZXR1cm5cblx0XHRcdGNvbnN0IGN1cnJlbnRMaW5lID0gZS50YXJnZXQuY2xvc2VzdChcIi5jb2xvcnMtYWNjb19faXRlbVwiKTtcblx0XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChsaW5lc1tpXSAhPT0gY3VycmVudExpbmUpXG5cdFx0XHRcdGxpbmVzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJjb2xvcnMtYWNjb19faXRlbS1hY3RpdmVcIilcblx0XHRcdH1cblx0XG5cdFx0XHRpZiAoY3VycmVudExpbmUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY29sb3JzLWFjY29fX2l0ZW0tYWN0aXZlXCIpKSB7XG5cdFx0XHRcdGN1cnJlbnRMaW5lLmNsYXNzTGlzdC5yZW1vdmUoXCJjb2xvcnMtYWNjb19faXRlbS1hY3RpdmVcIilcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN1cnJlbnRMaW5lLmNsYXNzTGlzdC5hZGQoXCJjb2xvcnMtYWNjb19faXRlbS1hY3RpdmVcIik7XG5cdFx0XHR9XG5cdFx0fSlcblx0fVxufSkoKSIsIjsoZnVuY3Rpb24oKSB7XG5cdGNvbnN0IG9wZW5FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oYW1idXJnZXJcIik7XG5cdGNvbnN0IGNsb3NlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3Jvc3NfX2xvZ29cIik7XG5cdGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuXHRcblx0b3BlbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XG5cdFx0dmFyIGh1bWJ1cmdlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2h1bWJ1cmdlck1lbnVcIilcblx0XHRodW1idXJnZXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCIuaGFtYnVyZ2VyLW1lbnVcIilcblx0XHRcblx0XHR2YXIgaGFtYnVyZ2VyTWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGFtYnVyZ2VyLW1lbnVcIik7XG5cdFx0aGFtYnVyZ2VyTWFpbi5jbGFzc0xpc3QudG9nZ2xlKFwiaGFtYnVyZ2VyLW1haW5cIik7XG5cdH0pO1xuXHRcblx0Y2xvc2VFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFxuXHRcdHZhciBoYW1idXJnZXJNYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oYW1idXJnZXItbWVudVwiKTtcblx0XHRoYW1idXJnZXJNYWluLmNsYXNzTGlzdC5yZW1vdmUoXCJoYW1idXJnZXItbWFpblwiKTtcblx0fSk7XG5cdFxuXHRcblx0aHVtYnVyZ2VyTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG5cdFx0aWYoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImhhbWJ1cmdlci1tZW51X19saW5rXCIpKSB7XG5cdFx0XHRjbG9zZUVsZW1lbnQuY2xpY2soKTtcblx0XHR9XG5cdH0pO1xufSkoKVxuXG5cbiIsIiFmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO1wib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1lLmRvY3VtZW50P3QoZSwhMCk6ZnVuY3Rpb24oZSl7aWYoIWUuZG9jdW1lbnQpdGhyb3cgbmV3IEVycm9yKFwialF1ZXJ5IHJlcXVpcmVzIGEgd2luZG93IHdpdGggYSBkb2N1bWVudFwiKTtyZXR1cm4gdChlKX06dChlKX0oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6dGhpcyxmdW5jdGlvbihDLGUpe1widXNlIHN0cmljdFwiO3ZhciB0PVtdLHI9T2JqZWN0LmdldFByb3RvdHlwZU9mLHM9dC5zbGljZSxnPXQuZmxhdD9mdW5jdGlvbihlKXtyZXR1cm4gdC5mbGF0LmNhbGwoZSl9OmZ1bmN0aW9uKGUpe3JldHVybiB0LmNvbmNhdC5hcHBseShbXSxlKX0sdT10LnB1c2gsaT10LmluZGV4T2Ysbj17fSxvPW4udG9TdHJpbmcseT1uLmhhc093blByb3BlcnR5LGE9eS50b1N0cmluZyxsPWEuY2FsbChPYmplY3QpLHY9e30sbT1mdW5jdGlvbihlKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZcIm51bWJlclwiIT10eXBlb2YgZS5ub2RlVHlwZSYmXCJmdW5jdGlvblwiIT10eXBlb2YgZS5pdGVtfSx4PWZ1bmN0aW9uKGUpe3JldHVybiBudWxsIT1lJiZlPT09ZS53aW5kb3d9LFM9Qy5kb2N1bWVudCxjPXt0eXBlOiEwLHNyYzohMCxub25jZTohMCxub01vZHVsZTohMH07ZnVuY3Rpb24gYihlLHQsbil7dmFyIHIsaSxvPShuPW58fFMpLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7aWYoby50ZXh0PWUsdClmb3IociBpbiBjKShpPXRbcl18fHQuZ2V0QXR0cmlidXRlJiZ0LmdldEF0dHJpYnV0ZShyKSkmJm8uc2V0QXR0cmlidXRlKHIsaSk7bi5oZWFkLmFwcGVuZENoaWxkKG8pLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobyl9ZnVuY3Rpb24gdyhlKXtyZXR1cm4gbnVsbD09ZT9lK1wiXCI6XCJvYmplY3RcIj09dHlwZW9mIGV8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGU/bltvLmNhbGwoZSldfHxcIm9iamVjdFwiOnR5cGVvZiBlfXZhciBmPVwiMy42LjNcIixFPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIG5ldyBFLmZuLmluaXQoZSx0KX07ZnVuY3Rpb24gcChlKXt2YXIgdD0hIWUmJlwibGVuZ3RoXCJpbiBlJiZlLmxlbmd0aCxuPXcoZSk7cmV0dXJuIW0oZSkmJiF4KGUpJiYoXCJhcnJheVwiPT09bnx8MD09PXR8fFwibnVtYmVyXCI9PXR5cGVvZiB0JiYwPHQmJnQtMSBpbiBlKX1FLmZuPUUucHJvdG90eXBlPXtqcXVlcnk6Zixjb25zdHJ1Y3RvcjpFLGxlbmd0aDowLHRvQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gcy5jYWxsKHRoaXMpfSxnZXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWU/cy5jYWxsKHRoaXMpOmU8MD90aGlzW2UrdGhpcy5sZW5ndGhdOnRoaXNbZV19LHB1c2hTdGFjazpmdW5jdGlvbihlKXt2YXIgdD1FLm1lcmdlKHRoaXMuY29uc3RydWN0b3IoKSxlKTtyZXR1cm4gdC5wcmV2T2JqZWN0PXRoaXMsdH0sZWFjaDpmdW5jdGlvbihlKXtyZXR1cm4gRS5lYWNoKHRoaXMsZSl9LG1hcDpmdW5jdGlvbihuKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soRS5tYXAodGhpcyxmdW5jdGlvbihlLHQpe3JldHVybiBuLmNhbGwoZSx0LGUpfSkpfSxzbGljZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnB1c2hTdGFjayhzLmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9LGZpcnN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoMCl9LGxhc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgtMSl9LGV2ZW46ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soRS5ncmVwKHRoaXMsZnVuY3Rpb24oZSx0KXtyZXR1cm4odCsxKSUyfSkpfSxvZGQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soRS5ncmVwKHRoaXMsZnVuY3Rpb24oZSx0KXtyZXR1cm4gdCUyfSkpfSxlcTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLmxlbmd0aCxuPStlKyhlPDA/dDowKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2soMDw9biYmbjx0P1t0aGlzW25dXTpbXSl9LGVuZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnByZXZPYmplY3R8fHRoaXMuY29uc3RydWN0b3IoKX0scHVzaDp1LHNvcnQ6dC5zb3J0LHNwbGljZTp0LnNwbGljZX0sRS5leHRlbmQ9RS5mbi5leHRlbmQ9ZnVuY3Rpb24oKXt2YXIgZSx0LG4scixpLG8sYT1hcmd1bWVudHNbMF18fHt9LHM9MSx1PWFyZ3VtZW50cy5sZW5ndGgsbD0hMTtmb3IoXCJib29sZWFuXCI9PXR5cGVvZiBhJiYobD1hLGE9YXJndW1lbnRzW3NdfHx7fSxzKyspLFwib2JqZWN0XCI9PXR5cGVvZiBhfHxtKGEpfHwoYT17fSkscz09PXUmJihhPXRoaXMscy0tKTtzPHU7cysrKWlmKG51bGwhPShlPWFyZ3VtZW50c1tzXSkpZm9yKHQgaW4gZSlyPWVbdF0sXCJfX3Byb3RvX19cIiE9PXQmJmEhPT1yJiYobCYmciYmKEUuaXNQbGFpbk9iamVjdChyKXx8KGk9QXJyYXkuaXNBcnJheShyKSkpPyhuPWFbdF0sbz1pJiYhQXJyYXkuaXNBcnJheShuKT9bXTppfHxFLmlzUGxhaW5PYmplY3Qobik/bjp7fSxpPSExLGFbdF09RS5leHRlbmQobCxvLHIpKTp2b2lkIDAhPT1yJiYoYVt0XT1yKSk7cmV0dXJuIGF9LEUuZXh0ZW5kKHtleHBhbmRvOlwialF1ZXJ5XCIrKGYrTWF0aC5yYW5kb20oKSkucmVwbGFjZSgvXFxEL2csXCJcIiksaXNSZWFkeTohMCxlcnJvcjpmdW5jdGlvbihlKXt0aHJvdyBuZXcgRXJyb3IoZSl9LG5vb3A6ZnVuY3Rpb24oKXt9LGlzUGxhaW5PYmplY3Q6ZnVuY3Rpb24oZSl7dmFyIHQsbjtyZXR1cm4hKCFlfHxcIltvYmplY3QgT2JqZWN0XVwiIT09by5jYWxsKGUpKSYmKCEodD1yKGUpKXx8XCJmdW5jdGlvblwiPT10eXBlb2Yobj15LmNhbGwodCxcImNvbnN0cnVjdG9yXCIpJiZ0LmNvbnN0cnVjdG9yKSYmYS5jYWxsKG4pPT09bCl9LGlzRW1wdHlPYmplY3Q6ZnVuY3Rpb24oZSl7dmFyIHQ7Zm9yKHQgaW4gZSlyZXR1cm4hMTtyZXR1cm4hMH0sZ2xvYmFsRXZhbDpmdW5jdGlvbihlLHQsbil7YihlLHtub25jZTp0JiZ0Lm5vbmNlfSxuKX0sZWFjaDpmdW5jdGlvbihlLHQpe3ZhciBuLHI9MDtpZihwKGUpKXtmb3Iobj1lLmxlbmd0aDtyPG47cisrKWlmKCExPT09dC5jYWxsKGVbcl0scixlW3JdKSlicmVha31lbHNlIGZvcihyIGluIGUpaWYoITE9PT10LmNhbGwoZVtyXSxyLGVbcl0pKWJyZWFrO3JldHVybiBlfSxtYWtlQXJyYXk6ZnVuY3Rpb24oZSx0KXt2YXIgbj10fHxbXTtyZXR1cm4gbnVsbCE9ZSYmKHAoT2JqZWN0KGUpKT9FLm1lcmdlKG4sXCJzdHJpbmdcIj09dHlwZW9mIGU/W2VdOmUpOnUuY2FsbChuLGUpKSxufSxpbkFycmF5OmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gbnVsbD09dD8tMTppLmNhbGwodCxlLG4pfSxtZXJnZTpmdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0rdC5sZW5ndGgscj0wLGk9ZS5sZW5ndGg7cjxuO3IrKyllW2krK109dFtyXTtyZXR1cm4gZS5sZW5ndGg9aSxlfSxncmVwOmZ1bmN0aW9uKGUsdCxuKXtmb3IodmFyIHI9W10saT0wLG89ZS5sZW5ndGgsYT0hbjtpPG87aSsrKSF0KGVbaV0saSkhPT1hJiZyLnB1c2goZVtpXSk7cmV0dXJuIHJ9LG1hcDpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvPTAsYT1bXTtpZihwKGUpKWZvcihyPWUubGVuZ3RoO288cjtvKyspbnVsbCE9KGk9dChlW29dLG8sbikpJiZhLnB1c2goaSk7ZWxzZSBmb3IobyBpbiBlKW51bGwhPShpPXQoZVtvXSxvLG4pKSYmYS5wdXNoKGkpO3JldHVybiBnKGEpfSxndWlkOjEsc3VwcG9ydDp2fSksXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiYoRS5mbltTeW1ib2wuaXRlcmF0b3JdPXRbU3ltYm9sLml0ZXJhdG9yXSksRS5lYWNoKFwiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvciBTeW1ib2xcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oZSx0KXtuW1wiW29iamVjdCBcIit0K1wiXVwiXT10LnRvTG93ZXJDYXNlKCl9KTt2YXIgZD1mdW5jdGlvbihuKXt2YXIgZSxkLGIsbyxpLGgsZixnLHcsdSxsLFQsQyxhLFMseSxzLGMsdixFPVwic2l6emxlXCIrMSpuZXcgRGF0ZSxwPW4uZG9jdW1lbnQsaz0wLHI9MCxtPXVlKCkseD11ZSgpLEE9dWUoKSxOPXVlKCksaj1mdW5jdGlvbihlLHQpe3JldHVybiBlPT09dCYmKGw9ITApLDB9LEQ9e30uaGFzT3duUHJvcGVydHksdD1bXSxxPXQucG9wLEw9dC5wdXNoLEg9dC5wdXNoLE89dC5zbGljZSxQPWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPTAscj1lLmxlbmd0aDtuPHI7bisrKWlmKGVbbl09PT10KXJldHVybiBuO3JldHVybi0xfSxSPVwiY2hlY2tlZHxzZWxlY3RlZHxhc3luY3xhdXRvZm9jdXN8YXV0b3BsYXl8Y29udHJvbHN8ZGVmZXJ8ZGlzYWJsZWR8aGlkZGVufGlzbWFwfGxvb3B8bXVsdGlwbGV8b3BlbnxyZWFkb25seXxyZXF1aXJlZHxzY29wZWRcIixNPVwiW1xcXFx4MjBcXFxcdFxcXFxyXFxcXG5cXFxcZl1cIixJPVwiKD86XFxcXFxcXFxbXFxcXGRhLWZBLUZdezEsNn1cIitNK1wiP3xcXFxcXFxcXFteXFxcXHJcXFxcblxcXFxmXXxbXFxcXHctXXxbXlxcMC1cXFxceDdmXSkrXCIsVz1cIlxcXFxbXCIrTStcIiooXCIrSStcIikoPzpcIitNK1wiKihbKl4kfCF+XT89KVwiK00rXCIqKD86JygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwifChcIitJK1wiKSl8KVwiK00rXCIqXFxcXF1cIixGPVwiOihcIitJK1wiKSg/OlxcXFwoKCgnKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCIpfCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpW1xcXFxdXXxcIitXK1wiKSopfC4qKVxcXFwpfClcIiwkPW5ldyBSZWdFeHAoTStcIitcIixcImdcIiksQj1uZXcgUmVnRXhwKFwiXlwiK00rXCIrfCgoPzpefFteXFxcXFxcXFxdKSg/OlxcXFxcXFxcLikqKVwiK00rXCIrJFwiLFwiZ1wiKSxfPW5ldyBSZWdFeHAoXCJeXCIrTStcIiosXCIrTStcIipcIiksej1uZXcgUmVnRXhwKFwiXlwiK00rXCIqKFs+K35dfFwiK00rXCIpXCIrTStcIipcIiksVT1uZXcgUmVnRXhwKE0rXCJ8PlwiKSxYPW5ldyBSZWdFeHAoRiksVj1uZXcgUmVnRXhwKFwiXlwiK0krXCIkXCIpLEc9e0lEOm5ldyBSZWdFeHAoXCJeIyhcIitJK1wiKVwiKSxDTEFTUzpuZXcgUmVnRXhwKFwiXlxcXFwuKFwiK0krXCIpXCIpLFRBRzpuZXcgUmVnRXhwKFwiXihcIitJK1wifFsqXSlcIiksQVRUUjpuZXcgUmVnRXhwKFwiXlwiK1cpLFBTRVVETzpuZXcgUmVnRXhwKFwiXlwiK0YpLENISUxEOm5ldyBSZWdFeHAoXCJeOihvbmx5fGZpcnN0fGxhc3R8bnRofG50aC1sYXN0KS0oY2hpbGR8b2YtdHlwZSkoPzpcXFxcKFwiK00rXCIqKGV2ZW58b2RkfCgoWystXXwpKFxcXFxkKilufClcIitNK1wiKig/OihbKy1dfClcIitNK1wiKihcXFxcZCspfCkpXCIrTStcIipcXFxcKXwpXCIsXCJpXCIpLGJvb2w6bmV3IFJlZ0V4cChcIl4oPzpcIitSK1wiKSRcIixcImlcIiksbmVlZHNDb250ZXh0Om5ldyBSZWdFeHAoXCJeXCIrTStcIipbPit+XXw6KGV2ZW58b2RkfGVxfGd0fGx0fG50aHxmaXJzdHxsYXN0KSg/OlxcXFwoXCIrTStcIiooKD86LVxcXFxkKT9cXFxcZCopXCIrTStcIipcXFxcKXwpKD89W14tXXwkKVwiLFwiaVwiKX0sWT0vSFRNTCQvaSxRPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksSj0vXmhcXGQkL2ksSz0vXltee10rXFx7XFxzKlxcW25hdGl2ZSBcXHcvLFo9L14oPzojKFtcXHctXSspfChcXHcrKXxcXC4oW1xcdy1dKykpJC8sZWU9L1srfl0vLHRlPW5ldyBSZWdFeHAoXCJcXFxcXFxcXFtcXFxcZGEtZkEtRl17MSw2fVwiK00rXCI/fFxcXFxcXFxcKFteXFxcXHJcXFxcblxcXFxmXSlcIixcImdcIiksbmU9ZnVuY3Rpb24oZSx0KXt2YXIgbj1cIjB4XCIrZS5zbGljZSgxKS02NTUzNjtyZXR1cm4gdHx8KG48MD9TdHJpbmcuZnJvbUNoYXJDb2RlKG4rNjU1MzYpOlN0cmluZy5mcm9tQ2hhckNvZGUobj4+MTB8NTUyOTYsMTAyMyZufDU2MzIwKSl9LHJlPS8oW1xcMC1cXHgxZlxceDdmXXxeLT9cXGQpfF4tJHxbXlxcMC1cXHgxZlxceDdmLVxcdUZGRkZcXHctXS9nLGllPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQ/XCJcXDBcIj09PWU/XCJcXHVmZmZkXCI6ZS5zbGljZSgwLC0xKStcIlxcXFxcIitlLmNoYXJDb2RlQXQoZS5sZW5ndGgtMSkudG9TdHJpbmcoMTYpK1wiIFwiOlwiXFxcXFwiK2V9LG9lPWZ1bmN0aW9uKCl7VCgpfSxhZT1iZShmdW5jdGlvbihlKXtyZXR1cm4hMD09PWUuZGlzYWJsZWQmJlwiZmllbGRzZXRcIj09PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKX0se2RpcjpcInBhcmVudE5vZGVcIixuZXh0OlwibGVnZW5kXCJ9KTt0cnl7SC5hcHBseSh0PU8uY2FsbChwLmNoaWxkTm9kZXMpLHAuY2hpbGROb2RlcyksdFtwLmNoaWxkTm9kZXMubGVuZ3RoXS5ub2RlVHlwZX1jYXRjaChlKXtIPXthcHBseTp0Lmxlbmd0aD9mdW5jdGlvbihlLHQpe0wuYXBwbHkoZSxPLmNhbGwodCkpfTpmdW5jdGlvbihlLHQpe3ZhciBuPWUubGVuZ3RoLHI9MDt3aGlsZShlW24rK109dFtyKytdKTtlLmxlbmd0aD1uLTF9fX1mdW5jdGlvbiBzZSh0LGUsbixyKXt2YXIgaSxvLGEscyx1LGwsYyxmPWUmJmUub3duZXJEb2N1bWVudCxwPWU/ZS5ub2RlVHlwZTo5O2lmKG49bnx8W10sXCJzdHJpbmdcIiE9dHlwZW9mIHR8fCF0fHwxIT09cCYmOSE9PXAmJjExIT09cClyZXR1cm4gbjtpZighciYmKFQoZSksZT1lfHxDLFMpKXtpZigxMSE9PXAmJih1PVouZXhlYyh0KSkpaWYoaT11WzFdKXtpZig5PT09cCl7aWYoIShhPWUuZ2V0RWxlbWVudEJ5SWQoaSkpKXJldHVybiBuO2lmKGEuaWQ9PT1pKXJldHVybiBuLnB1c2goYSksbn1lbHNlIGlmKGYmJihhPWYuZ2V0RWxlbWVudEJ5SWQoaSkpJiZ2KGUsYSkmJmEuaWQ9PT1pKXJldHVybiBuLnB1c2goYSksbn1lbHNle2lmKHVbMl0pcmV0dXJuIEguYXBwbHkobixlLmdldEVsZW1lbnRzQnlUYWdOYW1lKHQpKSxuO2lmKChpPXVbM10pJiZkLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSlyZXR1cm4gSC5hcHBseShuLGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShpKSksbn1pZihkLnFzYSYmIU5bdCtcIiBcIl0mJigheXx8IXkudGVzdCh0KSkmJigxIT09cHx8XCJvYmplY3RcIiE9PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkpe2lmKGM9dCxmPWUsMT09PXAmJihVLnRlc3QodCl8fHoudGVzdCh0KSkpeyhmPWVlLnRlc3QodCkmJnZlKGUucGFyZW50Tm9kZSl8fGUpPT09ZSYmZC5zY29wZXx8KChzPWUuZ2V0QXR0cmlidXRlKFwiaWRcIikpP3M9cy5yZXBsYWNlKHJlLGllKTplLnNldEF0dHJpYnV0ZShcImlkXCIscz1FKSksbz0obD1oKHQpKS5sZW5ndGg7d2hpbGUoby0tKWxbb109KHM/XCIjXCIrczpcIjpzY29wZVwiKStcIiBcIit4ZShsW29dKTtjPWwuam9pbihcIixcIil9dHJ5e2lmKGQuY3NzU3VwcG9ydHNTZWxlY3RvciYmIUNTUy5zdXBwb3J0cyhcInNlbGVjdG9yKDppcyhcIitjK1wiKSlcIikpdGhyb3cgbmV3IEVycm9yO3JldHVybiBILmFwcGx5KG4sZi5xdWVyeVNlbGVjdG9yQWxsKGMpKSxufWNhdGNoKGUpe04odCwhMCl9ZmluYWxseXtzPT09RSYmZS5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKX19fXJldHVybiBnKHQucmVwbGFjZShCLFwiJDFcIiksZSxuLHIpfWZ1bmN0aW9uIHVlKCl7dmFyIHI9W107cmV0dXJuIGZ1bmN0aW9uIGUodCxuKXtyZXR1cm4gci5wdXNoKHQrXCIgXCIpPmIuY2FjaGVMZW5ndGgmJmRlbGV0ZSBlW3Iuc2hpZnQoKV0sZVt0K1wiIFwiXT1ufX1mdW5jdGlvbiBsZShlKXtyZXR1cm4gZVtFXT0hMCxlfWZ1bmN0aW9uIGNlKGUpe3ZhciB0PUMuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO3RyeXtyZXR1cm4hIWUodCl9Y2F0Y2goZSl7cmV0dXJuITF9ZmluYWxseXt0LnBhcmVudE5vZGUmJnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0KSx0PW51bGx9fWZ1bmN0aW9uIGZlKGUsdCl7dmFyIG49ZS5zcGxpdChcInxcIikscj1uLmxlbmd0aDt3aGlsZShyLS0pYi5hdHRySGFuZGxlW25bcl1dPXR9ZnVuY3Rpb24gcGUoZSx0KXt2YXIgbj10JiZlLHI9biYmMT09PWUubm9kZVR5cGUmJjE9PT10Lm5vZGVUeXBlJiZlLnNvdXJjZUluZGV4LXQuc291cmNlSW5kZXg7aWYocilyZXR1cm4gcjtpZihuKXdoaWxlKG49bi5uZXh0U2libGluZylpZihuPT09dClyZXR1cm4tMTtyZXR1cm4gZT8xOi0xfWZ1bmN0aW9uIGRlKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm5cImlucHV0XCI9PT1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkmJmUudHlwZT09PXR9fWZ1bmN0aW9uIGhlKG4pe3JldHVybiBmdW5jdGlvbihlKXt2YXIgdD1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuKFwiaW5wdXRcIj09PXR8fFwiYnV0dG9uXCI9PT10KSYmZS50eXBlPT09bn19ZnVuY3Rpb24gZ2UodCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVyblwiZm9ybVwiaW4gZT9lLnBhcmVudE5vZGUmJiExPT09ZS5kaXNhYmxlZD9cImxhYmVsXCJpbiBlP1wibGFiZWxcImluIGUucGFyZW50Tm9kZT9lLnBhcmVudE5vZGUuZGlzYWJsZWQ9PT10OmUuZGlzYWJsZWQ9PT10OmUuaXNEaXNhYmxlZD09PXR8fGUuaXNEaXNhYmxlZCE9PSF0JiZhZShlKT09PXQ6ZS5kaXNhYmxlZD09PXQ6XCJsYWJlbFwiaW4gZSYmZS5kaXNhYmxlZD09PXR9fWZ1bmN0aW9uIHllKGEpe3JldHVybiBsZShmdW5jdGlvbihvKXtyZXR1cm4gbz0rbyxsZShmdW5jdGlvbihlLHQpe3ZhciBuLHI9YShbXSxlLmxlbmd0aCxvKSxpPXIubGVuZ3RoO3doaWxlKGktLSllW249cltpXV0mJihlW25dPSEodFtuXT1lW25dKSl9KX0pfWZ1bmN0aW9uIHZlKGUpe3JldHVybiBlJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgZS5nZXRFbGVtZW50c0J5VGFnTmFtZSYmZX1mb3IoZSBpbiBkPXNlLnN1cHBvcnQ9e30saT1zZS5pc1hNTD1mdW5jdGlvbihlKXt2YXIgdD1lJiZlLm5hbWVzcGFjZVVSSSxuPWUmJihlLm93bmVyRG9jdW1lbnR8fGUpLmRvY3VtZW50RWxlbWVudDtyZXR1cm4hWS50ZXN0KHR8fG4mJm4ubm9kZU5hbWV8fFwiSFRNTFwiKX0sVD1zZS5zZXREb2N1bWVudD1mdW5jdGlvbihlKXt2YXIgdCxuLHI9ZT9lLm93bmVyRG9jdW1lbnR8fGU6cDtyZXR1cm4gciE9QyYmOT09PXIubm9kZVR5cGUmJnIuZG9jdW1lbnRFbGVtZW50JiYoYT0oQz1yKS5kb2N1bWVudEVsZW1lbnQsUz0haShDKSxwIT1DJiYobj1DLmRlZmF1bHRWaWV3KSYmbi50b3AhPT1uJiYobi5hZGRFdmVudExpc3RlbmVyP24uYWRkRXZlbnRMaXN0ZW5lcihcInVubG9hZFwiLG9lLCExKTpuLmF0dGFjaEV2ZW50JiZuLmF0dGFjaEV2ZW50KFwib251bmxvYWRcIixvZSkpLGQuc2NvcGU9Y2UoZnVuY3Rpb24oZSl7cmV0dXJuIGEuYXBwZW5kQ2hpbGQoZSkuYXBwZW5kQ2hpbGQoQy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxcInVuZGVmaW5lZFwiIT10eXBlb2YgZS5xdWVyeVNlbGVjdG9yQWxsJiYhZS5xdWVyeVNlbGVjdG9yQWxsKFwiOnNjb3BlIGZpZWxkc2V0IGRpdlwiKS5sZW5ndGh9KSxkLmNzc1N1cHBvcnRzU2VsZWN0b3I9Y2UoZnVuY3Rpb24oKXtyZXR1cm4gQ1NTLnN1cHBvcnRzKFwic2VsZWN0b3IoKilcIikmJkMucXVlcnlTZWxlY3RvckFsbChcIjppcyg6anFmYWtlKVwiKSYmIUNTUy5zdXBwb3J0cyhcInNlbGVjdG9yKDppcygqLDpqcWZha2UpKVwiKX0pLGQuYXR0cmlidXRlcz1jZShmdW5jdGlvbihlKXtyZXR1cm4gZS5jbGFzc05hbWU9XCJpXCIsIWUuZ2V0QXR0cmlidXRlKFwiY2xhc3NOYW1lXCIpfSksZC5nZXRFbGVtZW50c0J5VGFnTmFtZT1jZShmdW5jdGlvbihlKXtyZXR1cm4gZS5hcHBlbmRDaGlsZChDLmNyZWF0ZUNvbW1lbnQoXCJcIikpLCFlLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKS5sZW5ndGh9KSxkLmdldEVsZW1lbnRzQnlDbGFzc05hbWU9Sy50ZXN0KEMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSksZC5nZXRCeUlkPWNlKGZ1bmN0aW9uKGUpe3JldHVybiBhLmFwcGVuZENoaWxkKGUpLmlkPUUsIUMuZ2V0RWxlbWVudHNCeU5hbWV8fCFDLmdldEVsZW1lbnRzQnlOYW1lKEUpLmxlbmd0aH0pLGQuZ2V0QnlJZD8oYi5maWx0ZXIuSUQ9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5yZXBsYWNlKHRlLG5lKTtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGUuZ2V0QXR0cmlidXRlKFwiaWRcIik9PT10fX0sYi5maW5kLklEPWZ1bmN0aW9uKGUsdCl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHQuZ2V0RWxlbWVudEJ5SWQmJlMpe3ZhciBuPXQuZ2V0RWxlbWVudEJ5SWQoZSk7cmV0dXJuIG4/W25dOltdfX0pOihiLmZpbHRlci5JRD1mdW5jdGlvbihlKXt2YXIgbj1lLnJlcGxhY2UodGUsbmUpO3JldHVybiBmdW5jdGlvbihlKXt2YXIgdD1cInVuZGVmaW5lZFwiIT10eXBlb2YgZS5nZXRBdHRyaWJ1dGVOb2RlJiZlLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKTtyZXR1cm4gdCYmdC52YWx1ZT09PW59fSxiLmZpbmQuSUQ9ZnVuY3Rpb24oZSx0KXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgdC5nZXRFbGVtZW50QnlJZCYmUyl7dmFyIG4scixpLG89dC5nZXRFbGVtZW50QnlJZChlKTtpZihvKXtpZigobj1vLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKSkmJm4udmFsdWU9PT1lKXJldHVybltvXTtpPXQuZ2V0RWxlbWVudHNCeU5hbWUoZSkscj0wO3doaWxlKG89aVtyKytdKWlmKChuPW8uZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpKSYmbi52YWx1ZT09PWUpcmV0dXJuW29dfXJldHVybltdfX0pLGIuZmluZC5UQUc9ZC5nZXRFbGVtZW50c0J5VGFnTmFtZT9mdW5jdGlvbihlLHQpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiB0LmdldEVsZW1lbnRzQnlUYWdOYW1lP3QuZ2V0RWxlbWVudHNCeVRhZ05hbWUoZSk6ZC5xc2E/dC5xdWVyeVNlbGVjdG9yQWxsKGUpOnZvaWQgMH06ZnVuY3Rpb24oZSx0KXt2YXIgbixyPVtdLGk9MCxvPXQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoZSk7aWYoXCIqXCI9PT1lKXt3aGlsZShuPW9baSsrXSkxPT09bi5ub2RlVHlwZSYmci5wdXNoKG4pO3JldHVybiByfXJldHVybiBvfSxiLmZpbmQuQ0xBU1M9ZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZmdW5jdGlvbihlLHQpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJlMpcmV0dXJuIHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShlKX0scz1bXSx5PVtdLChkLnFzYT1LLnRlc3QoQy5xdWVyeVNlbGVjdG9yQWxsKSkmJihjZShmdW5jdGlvbihlKXt2YXIgdDthLmFwcGVuZENoaWxkKGUpLmlubmVySFRNTD1cIjxhIGlkPSdcIitFK1wiJz48L2E+PHNlbGVjdCBpZD0nXCIrRStcIi1cXHJcXFxcJyBtc2FsbG93Y2FwdHVyZT0nJz48b3B0aW9uIHNlbGVjdGVkPScnPjwvb3B0aW9uPjwvc2VsZWN0PlwiLGUucXVlcnlTZWxlY3RvckFsbChcIlttc2FsbG93Y2FwdHVyZV49JyddXCIpLmxlbmd0aCYmeS5wdXNoKFwiWypeJF09XCIrTStcIiooPzonJ3xcXFwiXFxcIilcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiW3NlbGVjdGVkXVwiKS5sZW5ndGh8fHkucHVzaChcIlxcXFxbXCIrTStcIiooPzp2YWx1ZXxcIitSK1wiKVwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaWR+PVwiK0UrXCItXVwiKS5sZW5ndGh8fHkucHVzaChcIn49XCIpLCh0PUMuY3JlYXRlRWxlbWVudChcImlucHV0XCIpKS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJcIiksZS5hcHBlbmRDaGlsZCh0KSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT0nJ11cIikubGVuZ3RofHx5LnB1c2goXCJcXFxcW1wiK00rXCIqbmFtZVwiK00rXCIqPVwiK00rXCIqKD86Jyd8XFxcIlxcXCIpXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIjpjaGVja2VkXCIpLmxlbmd0aHx8eS5wdXNoKFwiOmNoZWNrZWRcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiYSNcIitFK1wiKypcIikubGVuZ3RofHx5LnB1c2goXCIuIy4rWyt+XVwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJcXFxcXFxmXCIpLHkucHVzaChcIltcXFxcclxcXFxuXFxcXGZdXCIpfSksY2UoZnVuY3Rpb24oZSl7ZS5pbm5lckhUTUw9XCI8YSBocmVmPScnIGRpc2FibGVkPSdkaXNhYmxlZCc+PC9hPjxzZWxlY3QgZGlzYWJsZWQ9J2Rpc2FibGVkJz48b3B0aW9uLz48L3NlbGVjdD5cIjt2YXIgdD1DLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTt0LnNldEF0dHJpYnV0ZShcInR5cGVcIixcImhpZGRlblwiKSxlLmFwcGVuZENoaWxkKHQpLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcIkRcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWU9ZF1cIikubGVuZ3RoJiZ5LnB1c2goXCJuYW1lXCIrTStcIipbKl4kfCF+XT89XCIpLDIhPT1lLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZW5hYmxlZFwiKS5sZW5ndGgmJnkucHVzaChcIjplbmFibGVkXCIsXCI6ZGlzYWJsZWRcIiksYS5hcHBlbmRDaGlsZChlKS5kaXNhYmxlZD0hMCwyIT09ZS5xdWVyeVNlbGVjdG9yQWxsKFwiOmRpc2FibGVkXCIpLmxlbmd0aCYmeS5wdXNoKFwiOmVuYWJsZWRcIixcIjpkaXNhYmxlZFwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqLDp4XCIpLHkucHVzaChcIiwuKjpcIil9KSksKGQubWF0Y2hlc1NlbGVjdG9yPUsudGVzdChjPWEubWF0Y2hlc3x8YS53ZWJraXRNYXRjaGVzU2VsZWN0b3J8fGEubW96TWF0Y2hlc1NlbGVjdG9yfHxhLm9NYXRjaGVzU2VsZWN0b3J8fGEubXNNYXRjaGVzU2VsZWN0b3IpKSYmY2UoZnVuY3Rpb24oZSl7ZC5kaXNjb25uZWN0ZWRNYXRjaD1jLmNhbGwoZSxcIipcIiksYy5jYWxsKGUsXCJbcyE9JyddOnhcIikscy5wdXNoKFwiIT1cIixGKX0pLGQuY3NzU3VwcG9ydHNTZWxlY3Rvcnx8eS5wdXNoKFwiOmhhc1wiKSx5PXkubGVuZ3RoJiZuZXcgUmVnRXhwKHkuam9pbihcInxcIikpLHM9cy5sZW5ndGgmJm5ldyBSZWdFeHAocy5qb2luKFwifFwiKSksdD1LLnRlc3QoYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiksdj10fHxLLnRlc3QoYS5jb250YWlucyk/ZnVuY3Rpb24oZSx0KXt2YXIgbj05PT09ZS5ub2RlVHlwZSYmZS5kb2N1bWVudEVsZW1lbnR8fGUscj10JiZ0LnBhcmVudE5vZGU7cmV0dXJuIGU9PT1yfHwhKCFyfHwxIT09ci5ub2RlVHlwZXx8IShuLmNvbnRhaW5zP24uY29udGFpbnMocik6ZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiYmMTYmZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihyKSkpfTpmdW5jdGlvbihlLHQpe2lmKHQpd2hpbGUodD10LnBhcmVudE5vZGUpaWYodD09PWUpcmV0dXJuITA7cmV0dXJuITF9LGo9dD9mdW5jdGlvbihlLHQpe2lmKGU9PT10KXJldHVybiBsPSEwLDA7dmFyIG49IWUuY29tcGFyZURvY3VtZW50UG9zaXRpb24tIXQuY29tcGFyZURvY3VtZW50UG9zaXRpb247cmV0dXJuIG58fCgxJihuPShlLm93bmVyRG9jdW1lbnR8fGUpPT0odC5vd25lckRvY3VtZW50fHx0KT9lLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKHQpOjEpfHwhZC5zb3J0RGV0YWNoZWQmJnQuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZSk9PT1uP2U9PUN8fGUub3duZXJEb2N1bWVudD09cCYmdihwLGUpPy0xOnQ9PUN8fHQub3duZXJEb2N1bWVudD09cCYmdihwLHQpPzE6dT9QKHUsZSktUCh1LHQpOjA6NCZuPy0xOjEpfTpmdW5jdGlvbihlLHQpe2lmKGU9PT10KXJldHVybiBsPSEwLDA7dmFyIG4scj0wLGk9ZS5wYXJlbnROb2RlLG89dC5wYXJlbnROb2RlLGE9W2VdLHM9W3RdO2lmKCFpfHwhbylyZXR1cm4gZT09Qz8tMTp0PT1DPzE6aT8tMTpvPzE6dT9QKHUsZSktUCh1LHQpOjA7aWYoaT09PW8pcmV0dXJuIHBlKGUsdCk7bj1lO3doaWxlKG49bi5wYXJlbnROb2RlKWEudW5zaGlmdChuKTtuPXQ7d2hpbGUobj1uLnBhcmVudE5vZGUpcy51bnNoaWZ0KG4pO3doaWxlKGFbcl09PT1zW3JdKXIrKztyZXR1cm4gcj9wZShhW3JdLHNbcl0pOmFbcl09PXA/LTE6c1tyXT09cD8xOjB9KSxDfSxzZS5tYXRjaGVzPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHNlKGUsbnVsbCxudWxsLHQpfSxzZS5tYXRjaGVzU2VsZWN0b3I9ZnVuY3Rpb24oZSx0KXtpZihUKGUpLGQubWF0Y2hlc1NlbGVjdG9yJiZTJiYhTlt0K1wiIFwiXSYmKCFzfHwhcy50ZXN0KHQpKSYmKCF5fHwheS50ZXN0KHQpKSl0cnl7dmFyIG49Yy5jYWxsKGUsdCk7aWYobnx8ZC5kaXNjb25uZWN0ZWRNYXRjaHx8ZS5kb2N1bWVudCYmMTEhPT1lLmRvY3VtZW50Lm5vZGVUeXBlKXJldHVybiBufWNhdGNoKGUpe04odCwhMCl9cmV0dXJuIDA8c2UodCxDLG51bGwsW2VdKS5sZW5ndGh9LHNlLmNvbnRhaW5zPWZ1bmN0aW9uKGUsdCl7cmV0dXJuKGUub3duZXJEb2N1bWVudHx8ZSkhPUMmJlQoZSksdihlLHQpfSxzZS5hdHRyPWZ1bmN0aW9uKGUsdCl7KGUub3duZXJEb2N1bWVudHx8ZSkhPUMmJlQoZSk7dmFyIG49Yi5hdHRySGFuZGxlW3QudG9Mb3dlckNhc2UoKV0scj1uJiZELmNhbGwoYi5hdHRySGFuZGxlLHQudG9Mb3dlckNhc2UoKSk/bihlLHQsIVMpOnZvaWQgMDtyZXR1cm4gdm9pZCAwIT09cj9yOmQuYXR0cmlidXRlc3x8IVM/ZS5nZXRBdHRyaWJ1dGUodCk6KHI9ZS5nZXRBdHRyaWJ1dGVOb2RlKHQpKSYmci5zcGVjaWZpZWQ/ci52YWx1ZTpudWxsfSxzZS5lc2NhcGU9ZnVuY3Rpb24oZSl7cmV0dXJuKGUrXCJcIikucmVwbGFjZShyZSxpZSl9LHNlLmVycm9yPWZ1bmN0aW9uKGUpe3Rocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciwgdW5yZWNvZ25pemVkIGV4cHJlc3Npb246IFwiK2UpfSxzZS51bmlxdWVTb3J0PWZ1bmN0aW9uKGUpe3ZhciB0LG49W10scj0wLGk9MDtpZihsPSFkLmRldGVjdER1cGxpY2F0ZXMsdT0hZC5zb3J0U3RhYmxlJiZlLnNsaWNlKDApLGUuc29ydChqKSxsKXt3aGlsZSh0PWVbaSsrXSl0PT09ZVtpXSYmKHI9bi5wdXNoKGkpKTt3aGlsZShyLS0pZS5zcGxpY2UobltyXSwxKX1yZXR1cm4gdT1udWxsLGV9LG89c2UuZ2V0VGV4dD1mdW5jdGlvbihlKXt2YXIgdCxuPVwiXCIscj0wLGk9ZS5ub2RlVHlwZTtpZihpKXtpZigxPT09aXx8OT09PWl8fDExPT09aSl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUudGV4dENvbnRlbnQpcmV0dXJuIGUudGV4dENvbnRlbnQ7Zm9yKGU9ZS5maXJzdENoaWxkO2U7ZT1lLm5leHRTaWJsaW5nKW4rPW8oZSl9ZWxzZSBpZigzPT09aXx8ND09PWkpcmV0dXJuIGUubm9kZVZhbHVlfWVsc2Ugd2hpbGUodD1lW3IrK10pbis9byh0KTtyZXR1cm4gbn0sKGI9c2Uuc2VsZWN0b3JzPXtjYWNoZUxlbmd0aDo1MCxjcmVhdGVQc2V1ZG86bGUsbWF0Y2g6RyxhdHRySGFuZGxlOnt9LGZpbmQ6e30scmVsYXRpdmU6e1wiPlwiOntkaXI6XCJwYXJlbnROb2RlXCIsZmlyc3Q6ITB9LFwiIFwiOntkaXI6XCJwYXJlbnROb2RlXCJ9LFwiK1wiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIixmaXJzdDohMH0sXCJ+XCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wifX0scHJlRmlsdGVyOntBVFRSOmZ1bmN0aW9uKGUpe3JldHVybiBlWzFdPWVbMV0ucmVwbGFjZSh0ZSxuZSksZVszXT0oZVszXXx8ZVs0XXx8ZVs1XXx8XCJcIikucmVwbGFjZSh0ZSxuZSksXCJ+PVwiPT09ZVsyXSYmKGVbM109XCIgXCIrZVszXStcIiBcIiksZS5zbGljZSgwLDQpfSxDSElMRDpmdW5jdGlvbihlKXtyZXR1cm4gZVsxXT1lWzFdLnRvTG93ZXJDYXNlKCksXCJudGhcIj09PWVbMV0uc2xpY2UoMCwzKT8oZVszXXx8c2UuZXJyb3IoZVswXSksZVs0XT0rKGVbNF0/ZVs1XSsoZVs2XXx8MSk6MiooXCJldmVuXCI9PT1lWzNdfHxcIm9kZFwiPT09ZVszXSkpLGVbNV09KyhlWzddK2VbOF18fFwib2RkXCI9PT1lWzNdKSk6ZVszXSYmc2UuZXJyb3IoZVswXSksZX0sUFNFVURPOmZ1bmN0aW9uKGUpe3ZhciB0LG49IWVbNl0mJmVbMl07cmV0dXJuIEcuQ0hJTEQudGVzdChlWzBdKT9udWxsOihlWzNdP2VbMl09ZVs0XXx8ZVs1XXx8XCJcIjpuJiZYLnRlc3QobikmJih0PWgobiwhMCkpJiYodD1uLmluZGV4T2YoXCIpXCIsbi5sZW5ndGgtdCktbi5sZW5ndGgpJiYoZVswXT1lWzBdLnNsaWNlKDAsdCksZVsyXT1uLnNsaWNlKDAsdCkpLGUuc2xpY2UoMCwzKSl9fSxmaWx0ZXI6e1RBRzpmdW5jdGlvbihlKXt2YXIgdD1lLnJlcGxhY2UodGUsbmUpLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCIqXCI9PT1lP2Z1bmN0aW9uKCl7cmV0dXJuITB9OmZ1bmN0aW9uKGUpe3JldHVybiBlLm5vZGVOYW1lJiZlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT10fX0sQ0xBU1M6ZnVuY3Rpb24oZSl7dmFyIHQ9bVtlK1wiIFwiXTtyZXR1cm4gdHx8KHQ9bmV3IFJlZ0V4cChcIihefFwiK00rXCIpXCIrZStcIihcIitNK1wifCQpXCIpKSYmbShlLGZ1bmN0aW9uKGUpe3JldHVybiB0LnRlc3QoXCJzdHJpbmdcIj09dHlwZW9mIGUuY2xhc3NOYW1lJiZlLmNsYXNzTmFtZXx8XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUuZ2V0QXR0cmlidXRlJiZlLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKX0pfSxBVFRSOmZ1bmN0aW9uKG4scixpKXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9c2UuYXR0cihlLG4pO3JldHVybiBudWxsPT10P1wiIT1cIj09PXI6IXJ8fCh0Kz1cIlwiLFwiPVwiPT09cj90PT09aTpcIiE9XCI9PT1yP3QhPT1pOlwiXj1cIj09PXI/aSYmMD09PXQuaW5kZXhPZihpKTpcIio9XCI9PT1yP2kmJi0xPHQuaW5kZXhPZihpKTpcIiQ9XCI9PT1yP2kmJnQuc2xpY2UoLWkubGVuZ3RoKT09PWk6XCJ+PVwiPT09cj8tMTwoXCIgXCIrdC5yZXBsYWNlKCQsXCIgXCIpK1wiIFwiKS5pbmRleE9mKGkpOlwifD1cIj09PXImJih0PT09aXx8dC5zbGljZSgwLGkubGVuZ3RoKzEpPT09aStcIi1cIikpfX0sQ0hJTEQ6ZnVuY3Rpb24oaCxlLHQsZyx5KXt2YXIgdj1cIm50aFwiIT09aC5zbGljZSgwLDMpLG09XCJsYXN0XCIhPT1oLnNsaWNlKC00KSx4PVwib2YtdHlwZVwiPT09ZTtyZXR1cm4gMT09PWcmJjA9PT15P2Z1bmN0aW9uKGUpe3JldHVybiEhZS5wYXJlbnROb2RlfTpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGEscyx1LGw9diE9PW0/XCJuZXh0U2libGluZ1wiOlwicHJldmlvdXNTaWJsaW5nXCIsYz1lLnBhcmVudE5vZGUsZj14JiZlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkscD0hbiYmIXgsZD0hMTtpZihjKXtpZih2KXt3aGlsZShsKXthPWU7d2hpbGUoYT1hW2xdKWlmKHg/YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09ZjoxPT09YS5ub2RlVHlwZSlyZXR1cm4hMTt1PWw9XCJvbmx5XCI9PT1oJiYhdSYmXCJuZXh0U2libGluZ1wifXJldHVybiEwfWlmKHU9W20/Yy5maXJzdENoaWxkOmMubGFzdENoaWxkXSxtJiZwKXtkPShzPShyPShpPShvPShhPWMpW0VdfHwoYVtFXT17fSkpW2EudW5pcXVlSURdfHwob1thLnVuaXF1ZUlEXT17fSkpW2hdfHxbXSlbMF09PT1rJiZyWzFdKSYmclsyXSxhPXMmJmMuY2hpbGROb2Rlc1tzXTt3aGlsZShhPSsrcyYmYSYmYVtsXXx8KGQ9cz0wKXx8dS5wb3AoKSlpZigxPT09YS5ub2RlVHlwZSYmKytkJiZhPT09ZSl7aVtoXT1bayxzLGRdO2JyZWFrfX1lbHNlIGlmKHAmJihkPXM9KHI9KGk9KG89KGE9ZSlbRV18fChhW0VdPXt9KSlbYS51bmlxdWVJRF18fChvW2EudW5pcXVlSURdPXt9KSlbaF18fFtdKVswXT09PWsmJnJbMV0pLCExPT09ZCl3aGlsZShhPSsrcyYmYSYmYVtsXXx8KGQ9cz0wKXx8dS5wb3AoKSlpZigoeD9hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1mOjE9PT1hLm5vZGVUeXBlKSYmKytkJiYocCYmKChpPShvPWFbRV18fChhW0VdPXt9KSlbYS51bmlxdWVJRF18fChvW2EudW5pcXVlSURdPXt9KSlbaF09W2ssZF0pLGE9PT1lKSlicmVhaztyZXR1cm4oZC09eSk9PT1nfHxkJWc9PTAmJjA8PWQvZ319fSxQU0VVRE86ZnVuY3Rpb24oZSxvKXt2YXIgdCxhPWIucHNldWRvc1tlXXx8Yi5zZXRGaWx0ZXJzW2UudG9Mb3dlckNhc2UoKV18fHNlLmVycm9yKFwidW5zdXBwb3J0ZWQgcHNldWRvOiBcIitlKTtyZXR1cm4gYVtFXT9hKG8pOjE8YS5sZW5ndGg/KHQ9W2UsZSxcIlwiLG9dLGIuc2V0RmlsdGVycy5oYXNPd25Qcm9wZXJ0eShlLnRvTG93ZXJDYXNlKCkpP2xlKGZ1bmN0aW9uKGUsdCl7dmFyIG4scj1hKGUsbyksaT1yLmxlbmd0aDt3aGlsZShpLS0pZVtuPVAoZSxyW2ldKV09ISh0W25dPXJbaV0pfSk6ZnVuY3Rpb24oZSl7cmV0dXJuIGEoZSwwLHQpfSk6YX19LHBzZXVkb3M6e25vdDpsZShmdW5jdGlvbihlKXt2YXIgcj1bXSxpPVtdLHM9ZihlLnJlcGxhY2UoQixcIiQxXCIpKTtyZXR1cm4gc1tFXT9sZShmdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvPXMoZSxudWxsLHIsW10pLGE9ZS5sZW5ndGg7d2hpbGUoYS0tKShpPW9bYV0pJiYoZVthXT0hKHRbYV09aSkpfSk6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiByWzBdPWUscyhyLG51bGwsbixpKSxyWzBdPW51bGwsIWkucG9wKCl9fSksaGFzOmxlKGZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gMDxzZSh0LGUpLmxlbmd0aH19KSxjb250YWluczpsZShmdW5jdGlvbih0KXtyZXR1cm4gdD10LnJlcGxhY2UodGUsbmUpLGZ1bmN0aW9uKGUpe3JldHVybi0xPChlLnRleHRDb250ZW50fHxvKGUpKS5pbmRleE9mKHQpfX0pLGxhbmc6bGUoZnVuY3Rpb24obil7cmV0dXJuIFYudGVzdChufHxcIlwiKXx8c2UuZXJyb3IoXCJ1bnN1cHBvcnRlZCBsYW5nOiBcIituKSxuPW4ucmVwbGFjZSh0ZSxuZSkudG9Mb3dlckNhc2UoKSxmdW5jdGlvbihlKXt2YXIgdDtkb3tpZih0PVM/ZS5sYW5nOmUuZ2V0QXR0cmlidXRlKFwieG1sOmxhbmdcIil8fGUuZ2V0QXR0cmlidXRlKFwibGFuZ1wiKSlyZXR1cm4odD10LnRvTG93ZXJDYXNlKCkpPT09bnx8MD09PXQuaW5kZXhPZihuK1wiLVwiKX13aGlsZSgoZT1lLnBhcmVudE5vZGUpJiYxPT09ZS5ub2RlVHlwZSk7cmV0dXJuITF9fSksdGFyZ2V0OmZ1bmN0aW9uKGUpe3ZhciB0PW4ubG9jYXRpb24mJm4ubG9jYXRpb24uaGFzaDtyZXR1cm4gdCYmdC5zbGljZSgxKT09PWUuaWR9LHJvb3Q6ZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1hfSxmb2N1czpmdW5jdGlvbihlKXtyZXR1cm4gZT09PUMuYWN0aXZlRWxlbWVudCYmKCFDLmhhc0ZvY3VzfHxDLmhhc0ZvY3VzKCkpJiYhIShlLnR5cGV8fGUuaHJlZnx8fmUudGFiSW5kZXgpfSxlbmFibGVkOmdlKCExKSxkaXNhYmxlZDpnZSghMCksY2hlY2tlZDpmdW5jdGlvbihlKXt2YXIgdD1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09dCYmISFlLmNoZWNrZWR8fFwib3B0aW9uXCI9PT10JiYhIWUuc2VsZWN0ZWR9LHNlbGVjdGVkOmZ1bmN0aW9uKGUpe3JldHVybiBlLnBhcmVudE5vZGUmJmUucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LCEwPT09ZS5zZWxlY3RlZH0sZW1wdHk6ZnVuY3Rpb24oZSl7Zm9yKGU9ZS5maXJzdENoaWxkO2U7ZT1lLm5leHRTaWJsaW5nKWlmKGUubm9kZVR5cGU8NilyZXR1cm4hMTtyZXR1cm4hMH0scGFyZW50OmZ1bmN0aW9uKGUpe3JldHVybiFiLnBzZXVkb3MuZW1wdHkoZSl9LGhlYWRlcjpmdW5jdGlvbihlKXtyZXR1cm4gSi50ZXN0KGUubm9kZU5hbWUpfSxpbnB1dDpmdW5jdGlvbihlKXtyZXR1cm4gUS50ZXN0KGUubm9kZU5hbWUpfSxidXR0b246ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PXQmJlwiYnV0dG9uXCI9PT1lLnR5cGV8fFwiYnV0dG9uXCI9PT10fSx0ZXh0OmZ1bmN0aW9uKGUpe3ZhciB0O3JldHVyblwiaW5wdXRcIj09PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSYmXCJ0ZXh0XCI9PT1lLnR5cGUmJihudWxsPT0odD1lLmdldEF0dHJpYnV0ZShcInR5cGVcIikpfHxcInRleHRcIj09PXQudG9Mb3dlckNhc2UoKSl9LGZpcnN0OnllKGZ1bmN0aW9uKCl7cmV0dXJuWzBdfSksbGFzdDp5ZShmdW5jdGlvbihlLHQpe3JldHVyblt0LTFdfSksZXE6eWUoZnVuY3Rpb24oZSx0LG4pe3JldHVybltuPDA/bit0Om5dfSksZXZlbjp5ZShmdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0wO248dDtuKz0yKWUucHVzaChuKTtyZXR1cm4gZX0pLG9kZDp5ZShmdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0xO248dDtuKz0yKWUucHVzaChuKTtyZXR1cm4gZX0pLGx0OnllKGZ1bmN0aW9uKGUsdCxuKXtmb3IodmFyIHI9bjwwP24rdDp0PG4/dDpuOzA8PS0tcjspZS5wdXNoKHIpO3JldHVybiBlfSksZ3Q6eWUoZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgcj1uPDA/bit0Om47KytyPHQ7KWUucHVzaChyKTtyZXR1cm4gZX0pfX0pLnBzZXVkb3MubnRoPWIucHNldWRvcy5lcSx7cmFkaW86ITAsY2hlY2tib3g6ITAsZmlsZTohMCxwYXNzd29yZDohMCxpbWFnZTohMH0pYi5wc2V1ZG9zW2VdPWRlKGUpO2ZvcihlIGlue3N1Ym1pdDohMCxyZXNldDohMH0pYi5wc2V1ZG9zW2VdPWhlKGUpO2Z1bmN0aW9uIG1lKCl7fWZ1bmN0aW9uIHhlKGUpe2Zvcih2YXIgdD0wLG49ZS5sZW5ndGgscj1cIlwiO3Q8bjt0Kyspcis9ZVt0XS52YWx1ZTtyZXR1cm4gcn1mdW5jdGlvbiBiZShzLGUsdCl7dmFyIHU9ZS5kaXIsbD1lLm5leHQsYz1sfHx1LGY9dCYmXCJwYXJlbnROb2RlXCI9PT1jLHA9cisrO3JldHVybiBlLmZpcnN0P2Z1bmN0aW9uKGUsdCxuKXt3aGlsZShlPWVbdV0paWYoMT09PWUubm9kZVR5cGV8fGYpcmV0dXJuIHMoZSx0LG4pO3JldHVybiExfTpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGE9W2sscF07aWYobil7d2hpbGUoZT1lW3VdKWlmKCgxPT09ZS5ub2RlVHlwZXx8ZikmJnMoZSx0LG4pKXJldHVybiEwfWVsc2Ugd2hpbGUoZT1lW3VdKWlmKDE9PT1lLm5vZGVUeXBlfHxmKWlmKGk9KG89ZVtFXXx8KGVbRV09e30pKVtlLnVuaXF1ZUlEXXx8KG9bZS51bmlxdWVJRF09e30pLGwmJmw9PT1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpZT1lW3VdfHxlO2Vsc2V7aWYoKHI9aVtjXSkmJnJbMF09PT1rJiZyWzFdPT09cClyZXR1cm4gYVsyXT1yWzJdO2lmKChpW2NdPWEpWzJdPXMoZSx0LG4pKXJldHVybiEwfXJldHVybiExfX1mdW5jdGlvbiB3ZShpKXtyZXR1cm4gMTxpLmxlbmd0aD9mdW5jdGlvbihlLHQsbil7dmFyIHI9aS5sZW5ndGg7d2hpbGUoci0tKWlmKCFpW3JdKGUsdCxuKSlyZXR1cm4hMTtyZXR1cm4hMH06aVswXX1mdW5jdGlvbiBUZShlLHQsbixyLGkpe2Zvcih2YXIgbyxhPVtdLHM9MCx1PWUubGVuZ3RoLGw9bnVsbCE9dDtzPHU7cysrKShvPWVbc10pJiYobiYmIW4obyxyLGkpfHwoYS5wdXNoKG8pLGwmJnQucHVzaChzKSkpO3JldHVybiBhfWZ1bmN0aW9uIENlKGQsaCxnLHksdixlKXtyZXR1cm4geSYmIXlbRV0mJih5PUNlKHkpKSx2JiYhdltFXSYmKHY9Q2UodixlKSksbGUoZnVuY3Rpb24oZSx0LG4scil7dmFyIGksbyxhLHM9W10sdT1bXSxsPXQubGVuZ3RoLGM9ZXx8ZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgcj0wLGk9dC5sZW5ndGg7cjxpO3IrKylzZShlLHRbcl0sbik7cmV0dXJuIG59KGh8fFwiKlwiLG4ubm9kZVR5cGU/W25dOm4sW10pLGY9IWR8fCFlJiZoP2M6VGUoYyxzLGQsbixyKSxwPWc/dnx8KGU/ZDpsfHx5KT9bXTp0OmY7aWYoZyYmZyhmLHAsbixyKSx5KXtpPVRlKHAsdSkseShpLFtdLG4sciksbz1pLmxlbmd0aDt3aGlsZShvLS0pKGE9aVtvXSkmJihwW3Vbb11dPSEoZlt1W29dXT1hKSl9aWYoZSl7aWYodnx8ZCl7aWYodil7aT1bXSxvPXAubGVuZ3RoO3doaWxlKG8tLSkoYT1wW29dKSYmaS5wdXNoKGZbb109YSk7dihudWxsLHA9W10saSxyKX1vPXAubGVuZ3RoO3doaWxlKG8tLSkoYT1wW29dKSYmLTE8KGk9dj9QKGUsYSk6c1tvXSkmJihlW2ldPSEodFtpXT1hKSl9fWVsc2UgcD1UZShwPT09dD9wLnNwbGljZShsLHAubGVuZ3RoKTpwKSx2P3YobnVsbCx0LHAscik6SC5hcHBseSh0LHApfSl9ZnVuY3Rpb24gU2UoZSl7Zm9yKHZhciBpLHQsbixyPWUubGVuZ3RoLG89Yi5yZWxhdGl2ZVtlWzBdLnR5cGVdLGE9b3x8Yi5yZWxhdGl2ZVtcIiBcIl0scz1vPzE6MCx1PWJlKGZ1bmN0aW9uKGUpe3JldHVybiBlPT09aX0sYSwhMCksbD1iZShmdW5jdGlvbihlKXtyZXR1cm4tMTxQKGksZSl9LGEsITApLGM9W2Z1bmN0aW9uKGUsdCxuKXt2YXIgcj0hbyYmKG58fHQhPT13KXx8KChpPXQpLm5vZGVUeXBlP3UoZSx0LG4pOmwoZSx0LG4pKTtyZXR1cm4gaT1udWxsLHJ9XTtzPHI7cysrKWlmKHQ9Yi5yZWxhdGl2ZVtlW3NdLnR5cGVdKWM9W2JlKHdlKGMpLHQpXTtlbHNle2lmKCh0PWIuZmlsdGVyW2Vbc10udHlwZV0uYXBwbHkobnVsbCxlW3NdLm1hdGNoZXMpKVtFXSl7Zm9yKG49KytzO248cjtuKyspaWYoYi5yZWxhdGl2ZVtlW25dLnR5cGVdKWJyZWFrO3JldHVybiBDZSgxPHMmJndlKGMpLDE8cyYmeGUoZS5zbGljZSgwLHMtMSkuY29uY2F0KHt2YWx1ZTpcIiBcIj09PWVbcy0yXS50eXBlP1wiKlwiOlwiXCJ9KSkucmVwbGFjZShCLFwiJDFcIiksdCxzPG4mJlNlKGUuc2xpY2UocyxuKSksbjxyJiZTZShlPWUuc2xpY2UobikpLG48ciYmeGUoZSkpfWMucHVzaCh0KX1yZXR1cm4gd2UoYyl9cmV0dXJuIG1lLnByb3RvdHlwZT1iLmZpbHRlcnM9Yi5wc2V1ZG9zLGIuc2V0RmlsdGVycz1uZXcgbWUsaD1zZS50b2tlbml6ZT1mdW5jdGlvbihlLHQpe3ZhciBuLHIsaSxvLGEscyx1LGw9eFtlK1wiIFwiXTtpZihsKXJldHVybiB0PzA6bC5zbGljZSgwKTthPWUscz1bXSx1PWIucHJlRmlsdGVyO3doaWxlKGEpe2ZvcihvIGluIG4mJiEocj1fLmV4ZWMoYSkpfHwociYmKGE9YS5zbGljZShyWzBdLmxlbmd0aCl8fGEpLHMucHVzaChpPVtdKSksbj0hMSwocj16LmV4ZWMoYSkpJiYobj1yLnNoaWZ0KCksaS5wdXNoKHt2YWx1ZTpuLHR5cGU6clswXS5yZXBsYWNlKEIsXCIgXCIpfSksYT1hLnNsaWNlKG4ubGVuZ3RoKSksYi5maWx0ZXIpIShyPUdbb10uZXhlYyhhKSl8fHVbb10mJiEocj11W29dKHIpKXx8KG49ci5zaGlmdCgpLGkucHVzaCh7dmFsdWU6bix0eXBlOm8sbWF0Y2hlczpyfSksYT1hLnNsaWNlKG4ubGVuZ3RoKSk7aWYoIW4pYnJlYWt9cmV0dXJuIHQ/YS5sZW5ndGg6YT9zZS5lcnJvcihlKTp4KGUscykuc2xpY2UoMCl9LGY9c2UuY29tcGlsZT1mdW5jdGlvbihlLHQpe3ZhciBuLHksdixtLHgscixpPVtdLG89W10sYT1BW2UrXCIgXCJdO2lmKCFhKXt0fHwodD1oKGUpKSxuPXQubGVuZ3RoO3doaWxlKG4tLSkoYT1TZSh0W25dKSlbRV0/aS5wdXNoKGEpOm8ucHVzaChhKTsoYT1BKGUsKHk9byxtPTA8KHY9aSkubGVuZ3RoLHg9MDx5Lmxlbmd0aCxyPWZ1bmN0aW9uKGUsdCxuLHIsaSl7dmFyIG8sYSxzLHU9MCxsPVwiMFwiLGM9ZSYmW10sZj1bXSxwPXcsZD1lfHx4JiZiLmZpbmQuVEFHKFwiKlwiLGkpLGg9ays9bnVsbD09cD8xOk1hdGgucmFuZG9tKCl8fC4xLGc9ZC5sZW5ndGg7Zm9yKGkmJih3PXQ9PUN8fHR8fGkpO2whPT1nJiZudWxsIT0obz1kW2xdKTtsKyspe2lmKHgmJm8pe2E9MCx0fHxvLm93bmVyRG9jdW1lbnQ9PUN8fChUKG8pLG49IVMpO3doaWxlKHM9eVthKytdKWlmKHMobyx0fHxDLG4pKXtyLnB1c2gobyk7YnJlYWt9aSYmKGs9aCl9bSYmKChvPSFzJiZvKSYmdS0tLGUmJmMucHVzaChvKSl9aWYodSs9bCxtJiZsIT09dSl7YT0wO3doaWxlKHM9dlthKytdKXMoYyxmLHQsbik7aWYoZSl7aWYoMDx1KXdoaWxlKGwtLSljW2xdfHxmW2xdfHwoZltsXT1xLmNhbGwocikpO2Y9VGUoZil9SC5hcHBseShyLGYpLGkmJiFlJiYwPGYubGVuZ3RoJiYxPHUrdi5sZW5ndGgmJnNlLnVuaXF1ZVNvcnQocil9cmV0dXJuIGkmJihrPWgsdz1wKSxjfSxtP2xlKHIpOnIpKSkuc2VsZWN0b3I9ZX1yZXR1cm4gYX0sZz1zZS5zZWxlY3Q9ZnVuY3Rpb24oZSx0LG4scil7dmFyIGksbyxhLHMsdSxsPVwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUsYz0hciYmaChlPWwuc2VsZWN0b3J8fGUpO2lmKG49bnx8W10sMT09PWMubGVuZ3RoKXtpZigyPChvPWNbMF09Y1swXS5zbGljZSgwKSkubGVuZ3RoJiZcIklEXCI9PT0oYT1vWzBdKS50eXBlJiY5PT09dC5ub2RlVHlwZSYmUyYmYi5yZWxhdGl2ZVtvWzFdLnR5cGVdKXtpZighKHQ9KGIuZmluZC5JRChhLm1hdGNoZXNbMF0ucmVwbGFjZSh0ZSxuZSksdCl8fFtdKVswXSkpcmV0dXJuIG47bCYmKHQ9dC5wYXJlbnROb2RlKSxlPWUuc2xpY2Uoby5zaGlmdCgpLnZhbHVlLmxlbmd0aCl9aT1HLm5lZWRzQ29udGV4dC50ZXN0KGUpPzA6by5sZW5ndGg7d2hpbGUoaS0tKXtpZihhPW9baV0sYi5yZWxhdGl2ZVtzPWEudHlwZV0pYnJlYWs7aWYoKHU9Yi5maW5kW3NdKSYmKHI9dShhLm1hdGNoZXNbMF0ucmVwbGFjZSh0ZSxuZSksZWUudGVzdChvWzBdLnR5cGUpJiZ2ZSh0LnBhcmVudE5vZGUpfHx0KSkpe2lmKG8uc3BsaWNlKGksMSksIShlPXIubGVuZ3RoJiZ4ZShvKSkpcmV0dXJuIEguYXBwbHkobixyKSxuO2JyZWFrfX19cmV0dXJuKGx8fGYoZSxjKSkocix0LCFTLG4sIXR8fGVlLnRlc3QoZSkmJnZlKHQucGFyZW50Tm9kZSl8fHQpLG59LGQuc29ydFN0YWJsZT1FLnNwbGl0KFwiXCIpLnNvcnQoaikuam9pbihcIlwiKT09PUUsZC5kZXRlY3REdXBsaWNhdGVzPSEhbCxUKCksZC5zb3J0RGV0YWNoZWQ9Y2UoZnVuY3Rpb24oZSl7cmV0dXJuIDEmZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihDLmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKSl9KSxjZShmdW5jdGlvbihlKXtyZXR1cm4gZS5pbm5lckhUTUw9XCI8YSBocmVmPScjJz48L2E+XCIsXCIjXCI9PT1lLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKX0pfHxmZShcInR5cGV8aHJlZnxoZWlnaHR8d2lkdGhcIixmdW5jdGlvbihlLHQsbil7aWYoIW4pcmV0dXJuIGUuZ2V0QXR0cmlidXRlKHQsXCJ0eXBlXCI9PT10LnRvTG93ZXJDYXNlKCk/MToyKX0pLGQuYXR0cmlidXRlcyYmY2UoZnVuY3Rpb24oZSl7cmV0dXJuIGUuaW5uZXJIVE1MPVwiPGlucHV0Lz5cIixlLmZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIlwiKSxcIlwiPT09ZS5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpfSl8fGZlKFwidmFsdWVcIixmdW5jdGlvbihlLHQsbil7aWYoIW4mJlwiaW5wdXRcIj09PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSlyZXR1cm4gZS5kZWZhdWx0VmFsdWV9KSxjZShmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZS5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKX0pfHxmZShSLGZ1bmN0aW9uKGUsdCxuKXt2YXIgcjtpZighbilyZXR1cm4hMD09PWVbdF0/dC50b0xvd2VyQ2FzZSgpOihyPWUuZ2V0QXR0cmlidXRlTm9kZSh0KSkmJnIuc3BlY2lmaWVkP3IudmFsdWU6bnVsbH0pLHNlfShDKTtFLmZpbmQ9ZCxFLmV4cHI9ZC5zZWxlY3RvcnMsRS5leHByW1wiOlwiXT1FLmV4cHIucHNldWRvcyxFLnVuaXF1ZVNvcnQ9RS51bmlxdWU9ZC51bmlxdWVTb3J0LEUudGV4dD1kLmdldFRleHQsRS5pc1hNTERvYz1kLmlzWE1MLEUuY29udGFpbnM9ZC5jb250YWlucyxFLmVzY2FwZVNlbGVjdG9yPWQuZXNjYXBlO3ZhciBoPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1bXSxpPXZvaWQgMCE9PW47d2hpbGUoKGU9ZVt0XSkmJjkhPT1lLm5vZGVUeXBlKWlmKDE9PT1lLm5vZGVUeXBlKXtpZihpJiZFKGUpLmlzKG4pKWJyZWFrO3IucHVzaChlKX1yZXR1cm4gcn0sVD1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj1bXTtlO2U9ZS5uZXh0U2libGluZykxPT09ZS5ub2RlVHlwZSYmZSE9PXQmJm4ucHVzaChlKTtyZXR1cm4gbn0saz1FLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0O2Z1bmN0aW9uIEEoZSx0KXtyZXR1cm4gZS5ub2RlTmFtZSYmZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09dC50b0xvd2VyQ2FzZSgpfXZhciBOPS9ePChbYS16XVteXFwvXFwwPjpcXHgyMFxcdFxcclxcblxcZl0qKVtcXHgyMFxcdFxcclxcblxcZl0qXFwvPz4oPzo8XFwvXFwxPnwpJC9pO2Z1bmN0aW9uIGooZSxuLHIpe3JldHVybiBtKG4pP0UuZ3JlcChlLGZ1bmN0aW9uKGUsdCl7cmV0dXJuISFuLmNhbGwoZSx0LGUpIT09cn0pOm4ubm9kZVR5cGU/RS5ncmVwKGUsZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1uIT09cn0pOlwic3RyaW5nXCIhPXR5cGVvZiBuP0UuZ3JlcChlLGZ1bmN0aW9uKGUpe3JldHVybi0xPGkuY2FsbChuLGUpIT09cn0pOkUuZmlsdGVyKG4sZSxyKX1FLmZpbHRlcj1mdW5jdGlvbihlLHQsbil7dmFyIHI9dFswXTtyZXR1cm4gbiYmKGU9XCI6bm90KFwiK2UrXCIpXCIpLDE9PT10Lmxlbmd0aCYmMT09PXIubm9kZVR5cGU/RS5maW5kLm1hdGNoZXNTZWxlY3RvcihyLGUpP1tyXTpbXTpFLmZpbmQubWF0Y2hlcyhlLEUuZ3JlcCh0LGZ1bmN0aW9uKGUpe3JldHVybiAxPT09ZS5ub2RlVHlwZX0pKX0sRS5mbi5leHRlbmQoe2ZpbmQ6ZnVuY3Rpb24oZSl7dmFyIHQsbixyPXRoaXMubGVuZ3RoLGk9dGhpcztpZihcInN0cmluZ1wiIT10eXBlb2YgZSlyZXR1cm4gdGhpcy5wdXNoU3RhY2soRShlKS5maWx0ZXIoZnVuY3Rpb24oKXtmb3IodD0wO3Q8cjt0KyspaWYoRS5jb250YWlucyhpW3RdLHRoaXMpKXJldHVybiEwfSkpO2ZvcihuPXRoaXMucHVzaFN0YWNrKFtdKSx0PTA7dDxyO3QrKylFLmZpbmQoZSxpW3RdLG4pO3JldHVybiAxPHI/RS51bmlxdWVTb3J0KG4pOm59LGZpbHRlcjpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soaih0aGlzLGV8fFtdLCExKSl9LG5vdDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soaih0aGlzLGV8fFtdLCEwKSl9LGlzOmZ1bmN0aW9uKGUpe3JldHVybiEhaih0aGlzLFwic3RyaW5nXCI9PXR5cGVvZiBlJiZrLnRlc3QoZSk/RShlKTplfHxbXSwhMSkubGVuZ3RofX0pO3ZhciBELHE9L14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qfCMoW1xcdy1dKykpJC87KEUuZm4uaW5pdD1mdW5jdGlvbihlLHQsbil7dmFyIHIsaTtpZighZSlyZXR1cm4gdGhpcztpZihuPW58fEQsXCJzdHJpbmdcIj09dHlwZW9mIGUpe2lmKCEocj1cIjxcIj09PWVbMF0mJlwiPlwiPT09ZVtlLmxlbmd0aC0xXSYmMzw9ZS5sZW5ndGg/W251bGwsZSxudWxsXTpxLmV4ZWMoZSkpfHwhclsxXSYmdClyZXR1cm4hdHx8dC5qcXVlcnk/KHR8fG4pLmZpbmQoZSk6dGhpcy5jb25zdHJ1Y3Rvcih0KS5maW5kKGUpO2lmKHJbMV0pe2lmKHQ9dCBpbnN0YW5jZW9mIEU/dFswXTp0LEUubWVyZ2UodGhpcyxFLnBhcnNlSFRNTChyWzFdLHQmJnQubm9kZVR5cGU/dC5vd25lckRvY3VtZW50fHx0OlMsITApKSxOLnRlc3QoclsxXSkmJkUuaXNQbGFpbk9iamVjdCh0KSlmb3IociBpbiB0KW0odGhpc1tyXSk/dGhpc1tyXSh0W3JdKTp0aGlzLmF0dHIocix0W3JdKTtyZXR1cm4gdGhpc31yZXR1cm4oaT1TLmdldEVsZW1lbnRCeUlkKHJbMl0pKSYmKHRoaXNbMF09aSx0aGlzLmxlbmd0aD0xKSx0aGlzfXJldHVybiBlLm5vZGVUeXBlPyh0aGlzWzBdPWUsdGhpcy5sZW5ndGg9MSx0aGlzKTptKGUpP3ZvaWQgMCE9PW4ucmVhZHk/bi5yZWFkeShlKTplKEUpOkUubWFrZUFycmF5KGUsdGhpcyl9KS5wcm90b3R5cGU9RS5mbixEPUUoUyk7dmFyIEw9L14oPzpwYXJlbnRzfHByZXYoPzpVbnRpbHxBbGwpKS8sSD17Y2hpbGRyZW46ITAsY29udGVudHM6ITAsbmV4dDohMCxwcmV2OiEwfTtmdW5jdGlvbiBPKGUsdCl7d2hpbGUoKGU9ZVt0XSkmJjEhPT1lLm5vZGVUeXBlKTtyZXR1cm4gZX1FLmZuLmV4dGVuZCh7aGFzOmZ1bmN0aW9uKGUpe3ZhciB0PUUoZSx0aGlzKSxuPXQubGVuZ3RoO3JldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbigpe2Zvcih2YXIgZT0wO2U8bjtlKyspaWYoRS5jb250YWlucyh0aGlzLHRbZV0pKXJldHVybiEwfSl9LGNsb3Nlc3Q6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPTAsaT10aGlzLmxlbmd0aCxvPVtdLGE9XCJzdHJpbmdcIiE9dHlwZW9mIGUmJkUoZSk7aWYoIWsudGVzdChlKSlmb3IoO3I8aTtyKyspZm9yKG49dGhpc1tyXTtuJiZuIT09dDtuPW4ucGFyZW50Tm9kZSlpZihuLm5vZGVUeXBlPDExJiYoYT8tMTxhLmluZGV4KG4pOjE9PT1uLm5vZGVUeXBlJiZFLmZpbmQubWF0Y2hlc1NlbGVjdG9yKG4sZSkpKXtvLnB1c2gobik7YnJlYWt9cmV0dXJuIHRoaXMucHVzaFN0YWNrKDE8by5sZW5ndGg/RS51bmlxdWVTb3J0KG8pOm8pfSxpbmRleDpmdW5jdGlvbihlKXtyZXR1cm4gZT9cInN0cmluZ1wiPT10eXBlb2YgZT9pLmNhbGwoRShlKSx0aGlzWzBdKTppLmNhbGwodGhpcyxlLmpxdWVyeT9lWzBdOmUpOnRoaXNbMF0mJnRoaXNbMF0ucGFyZW50Tm9kZT90aGlzLmZpcnN0KCkucHJldkFsbCgpLmxlbmd0aDotMX0sYWRkOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKEUudW5pcXVlU29ydChFLm1lcmdlKHRoaXMuZ2V0KCksRShlLHQpKSkpfSxhZGRCYWNrOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmFkZChudWxsPT1lP3RoaXMucHJldk9iamVjdDp0aGlzLnByZXZPYmplY3QuZmlsdGVyKGUpKX19KSxFLmVhY2goe3BhcmVudDpmdW5jdGlvbihlKXt2YXIgdD1lLnBhcmVudE5vZGU7cmV0dXJuIHQmJjExIT09dC5ub2RlVHlwZT90Om51bGx9LHBhcmVudHM6ZnVuY3Rpb24oZSl7cmV0dXJuIGgoZSxcInBhcmVudE5vZGVcIil9LHBhcmVudHNVbnRpbDpmdW5jdGlvbihlLHQsbil7cmV0dXJuIGgoZSxcInBhcmVudE5vZGVcIixuKX0sbmV4dDpmdW5jdGlvbihlKXtyZXR1cm4gTyhlLFwibmV4dFNpYmxpbmdcIil9LHByZXY6ZnVuY3Rpb24oZSl7cmV0dXJuIE8oZSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dEFsbDpmdW5jdGlvbihlKXtyZXR1cm4gaChlLFwibmV4dFNpYmxpbmdcIil9LHByZXZBbGw6ZnVuY3Rpb24oZSl7cmV0dXJuIGgoZSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dFVudGlsOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gaChlLFwibmV4dFNpYmxpbmdcIixuKX0scHJldlVudGlsOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gaChlLFwicHJldmlvdXNTaWJsaW5nXCIsbil9LHNpYmxpbmdzOmZ1bmN0aW9uKGUpe3JldHVybiBUKChlLnBhcmVudE5vZGV8fHt9KS5maXJzdENoaWxkLGUpfSxjaGlsZHJlbjpmdW5jdGlvbihlKXtyZXR1cm4gVChlLmZpcnN0Q2hpbGQpfSxjb250ZW50czpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbCE9ZS5jb250ZW50RG9jdW1lbnQmJnIoZS5jb250ZW50RG9jdW1lbnQpP2UuY29udGVudERvY3VtZW50OihBKGUsXCJ0ZW1wbGF0ZVwiKSYmKGU9ZS5jb250ZW50fHxlKSxFLm1lcmdlKFtdLGUuY2hpbGROb2RlcykpfX0sZnVuY3Rpb24ocixpKXtFLmZuW3JdPWZ1bmN0aW9uKGUsdCl7dmFyIG49RS5tYXAodGhpcyxpLGUpO3JldHVyblwiVW50aWxcIiE9PXIuc2xpY2UoLTUpJiYodD1lKSx0JiZcInN0cmluZ1wiPT10eXBlb2YgdCYmKG49RS5maWx0ZXIodCxuKSksMTx0aGlzLmxlbmd0aCYmKEhbcl18fEUudW5pcXVlU29ydChuKSxMLnRlc3QocikmJm4ucmV2ZXJzZSgpKSx0aGlzLnB1c2hTdGFjayhuKX19KTt2YXIgUD0vW15cXHgyMFxcdFxcclxcblxcZl0rL2c7ZnVuY3Rpb24gUihlKXtyZXR1cm4gZX1mdW5jdGlvbiBNKGUpe3Rocm93IGV9ZnVuY3Rpb24gSShlLHQsbixyKXt2YXIgaTt0cnl7ZSYmbShpPWUucHJvbWlzZSk/aS5jYWxsKGUpLmRvbmUodCkuZmFpbChuKTplJiZtKGk9ZS50aGVuKT9pLmNhbGwoZSx0LG4pOnQuYXBwbHkodm9pZCAwLFtlXS5zbGljZShyKSl9Y2F0Y2goZSl7bi5hcHBseSh2b2lkIDAsW2VdKX19RS5DYWxsYmFja3M9ZnVuY3Rpb24ocil7dmFyIGUsbjtyPVwic3RyaW5nXCI9PXR5cGVvZiByPyhlPXIsbj17fSxFLmVhY2goZS5tYXRjaChQKXx8W10sZnVuY3Rpb24oZSx0KXtuW3RdPSEwfSksbik6RS5leHRlbmQoe30scik7dmFyIGksdCxvLGEscz1bXSx1PVtdLGw9LTEsYz1mdW5jdGlvbigpe2ZvcihhPWF8fHIub25jZSxvPWk9ITA7dS5sZW5ndGg7bD0tMSl7dD11LnNoaWZ0KCk7d2hpbGUoKytsPHMubGVuZ3RoKSExPT09c1tsXS5hcHBseSh0WzBdLHRbMV0pJiZyLnN0b3BPbkZhbHNlJiYobD1zLmxlbmd0aCx0PSExKX1yLm1lbW9yeXx8KHQ9ITEpLGk9ITEsYSYmKHM9dD9bXTpcIlwiKX0sZj17YWRkOmZ1bmN0aW9uKCl7cmV0dXJuIHMmJih0JiYhaSYmKGw9cy5sZW5ndGgtMSx1LnB1c2godCkpLGZ1bmN0aW9uIG4oZSl7RS5lYWNoKGUsZnVuY3Rpb24oZSx0KXttKHQpP3IudW5pcXVlJiZmLmhhcyh0KXx8cy5wdXNoKHQpOnQmJnQubGVuZ3RoJiZcInN0cmluZ1wiIT09dyh0KSYmbih0KX0pfShhcmd1bWVudHMpLHQmJiFpJiZjKCkpLHRoaXN9LHJlbW92ZTpmdW5jdGlvbigpe3JldHVybiBFLmVhY2goYXJndW1lbnRzLGZ1bmN0aW9uKGUsdCl7dmFyIG47d2hpbGUoLTE8KG49RS5pbkFycmF5KHQscyxuKSkpcy5zcGxpY2UobiwxKSxuPD1sJiZsLS19KSx0aGlzfSxoYXM6ZnVuY3Rpb24oZSl7cmV0dXJuIGU/LTE8RS5pbkFycmF5KGUscyk6MDxzLmxlbmd0aH0sZW1wdHk6ZnVuY3Rpb24oKXtyZXR1cm4gcyYmKHM9W10pLHRoaXN9LGRpc2FibGU6ZnVuY3Rpb24oKXtyZXR1cm4gYT11PVtdLHM9dD1cIlwiLHRoaXN9LGRpc2FibGVkOmZ1bmN0aW9uKCl7cmV0dXJuIXN9LGxvY2s6ZnVuY3Rpb24oKXtyZXR1cm4gYT11PVtdLHR8fGl8fChzPXQ9XCJcIiksdGhpc30sbG9ja2VkOmZ1bmN0aW9uKCl7cmV0dXJuISFhfSxmaXJlV2l0aDpmdW5jdGlvbihlLHQpe3JldHVybiBhfHwodD1bZSwodD10fHxbXSkuc2xpY2U/dC5zbGljZSgpOnRdLHUucHVzaCh0KSxpfHxjKCkpLHRoaXN9LGZpcmU6ZnVuY3Rpb24oKXtyZXR1cm4gZi5maXJlV2l0aCh0aGlzLGFyZ3VtZW50cyksdGhpc30sZmlyZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIW99fTtyZXR1cm4gZn0sRS5leHRlbmQoe0RlZmVycmVkOmZ1bmN0aW9uKGUpe3ZhciBvPVtbXCJub3RpZnlcIixcInByb2dyZXNzXCIsRS5DYWxsYmFja3MoXCJtZW1vcnlcIiksRS5DYWxsYmFja3MoXCJtZW1vcnlcIiksMl0sW1wicmVzb2x2ZVwiLFwiZG9uZVwiLEUuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksRS5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSwwLFwicmVzb2x2ZWRcIl0sW1wicmVqZWN0XCIsXCJmYWlsXCIsRS5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxFLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLDEsXCJyZWplY3RlZFwiXV0saT1cInBlbmRpbmdcIixhPXtzdGF0ZTpmdW5jdGlvbigpe3JldHVybiBpfSxhbHdheXM6ZnVuY3Rpb24oKXtyZXR1cm4gcy5kb25lKGFyZ3VtZW50cykuZmFpbChhcmd1bWVudHMpLHRoaXN9LFwiY2F0Y2hcIjpmdW5jdGlvbihlKXtyZXR1cm4gYS50aGVuKG51bGwsZSl9LHBpcGU6ZnVuY3Rpb24oKXt2YXIgaT1hcmd1bWVudHM7cmV0dXJuIEUuRGVmZXJyZWQoZnVuY3Rpb24ocil7RS5lYWNoKG8sZnVuY3Rpb24oZSx0KXt2YXIgbj1tKGlbdFs0XV0pJiZpW3RbNF1dO3NbdFsxXV0oZnVuY3Rpb24oKXt2YXIgZT1uJiZuLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtlJiZtKGUucHJvbWlzZSk/ZS5wcm9taXNlKCkucHJvZ3Jlc3Moci5ub3RpZnkpLmRvbmUoci5yZXNvbHZlKS5mYWlsKHIucmVqZWN0KTpyW3RbMF0rXCJXaXRoXCJdKHRoaXMsbj9bZV06YXJndW1lbnRzKX0pfSksaT1udWxsfSkucHJvbWlzZSgpfSx0aGVuOmZ1bmN0aW9uKHQsbixyKXt2YXIgdT0wO2Z1bmN0aW9uIGwoaSxvLGEscyl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIG49dGhpcyxyPWFyZ3VtZW50cyxlPWZ1bmN0aW9uKCl7dmFyIGUsdDtpZighKGk8dSkpe2lmKChlPWEuYXBwbHkobixyKSk9PT1vLnByb21pc2UoKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlbmFibGUgc2VsZi1yZXNvbHV0aW9uXCIpO3Q9ZSYmKFwib2JqZWN0XCI9PXR5cGVvZiBlfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlKSYmZS50aGVuLG0odCk/cz90LmNhbGwoZSxsKHUsbyxSLHMpLGwodSxvLE0scykpOih1KyssdC5jYWxsKGUsbCh1LG8sUixzKSxsKHUsbyxNLHMpLGwodSxvLFIsby5ub3RpZnlXaXRoKSkpOihhIT09UiYmKG49dm9pZCAwLHI9W2VdKSwoc3x8by5yZXNvbHZlV2l0aCkobixyKSl9fSx0PXM/ZTpmdW5jdGlvbigpe3RyeXtlKCl9Y2F0Y2goZSl7RS5EZWZlcnJlZC5leGNlcHRpb25Ib29rJiZFLkRlZmVycmVkLmV4Y2VwdGlvbkhvb2soZSx0LnN0YWNrVHJhY2UpLHU8PWkrMSYmKGEhPT1NJiYobj12b2lkIDAscj1bZV0pLG8ucmVqZWN0V2l0aChuLHIpKX19O2k/dCgpOihFLkRlZmVycmVkLmdldFN0YWNrSG9vayYmKHQuc3RhY2tUcmFjZT1FLkRlZmVycmVkLmdldFN0YWNrSG9vaygpKSxDLnNldFRpbWVvdXQodCkpfX1yZXR1cm4gRS5EZWZlcnJlZChmdW5jdGlvbihlKXtvWzBdWzNdLmFkZChsKDAsZSxtKHIpP3I6UixlLm5vdGlmeVdpdGgpKSxvWzFdWzNdLmFkZChsKDAsZSxtKHQpP3Q6UikpLG9bMl1bM10uYWRkKGwoMCxlLG0obik/bjpNKSl9KS5wcm9taXNlKCl9LHByb21pc2U6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGwhPWU/RS5leHRlbmQoZSxhKTphfX0scz17fTtyZXR1cm4gRS5lYWNoKG8sZnVuY3Rpb24oZSx0KXt2YXIgbj10WzJdLHI9dFs1XTthW3RbMV1dPW4uYWRkLHImJm4uYWRkKGZ1bmN0aW9uKCl7aT1yfSxvWzMtZV1bMl0uZGlzYWJsZSxvWzMtZV1bM10uZGlzYWJsZSxvWzBdWzJdLmxvY2ssb1swXVszXS5sb2NrKSxuLmFkZCh0WzNdLmZpcmUpLHNbdFswXV09ZnVuY3Rpb24oKXtyZXR1cm4gc1t0WzBdK1wiV2l0aFwiXSh0aGlzPT09cz92b2lkIDA6dGhpcyxhcmd1bWVudHMpLHRoaXN9LHNbdFswXStcIldpdGhcIl09bi5maXJlV2l0aH0pLGEucHJvbWlzZShzKSxlJiZlLmNhbGwocyxzKSxzfSx3aGVuOmZ1bmN0aW9uKGUpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGgsdD1uLHI9QXJyYXkodCksaT1zLmNhbGwoYXJndW1lbnRzKSxvPUUuRGVmZXJyZWQoKSxhPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlKXtyW3RdPXRoaXMsaVt0XT0xPGFyZ3VtZW50cy5sZW5ndGg/cy5jYWxsKGFyZ3VtZW50cyk6ZSwtLW58fG8ucmVzb2x2ZVdpdGgocixpKX19O2lmKG48PTEmJihJKGUsby5kb25lKGEodCkpLnJlc29sdmUsby5yZWplY3QsIW4pLFwicGVuZGluZ1wiPT09by5zdGF0ZSgpfHxtKGlbdF0mJmlbdF0udGhlbikpKXJldHVybiBvLnRoZW4oKTt3aGlsZSh0LS0pSShpW3RdLGEodCksby5yZWplY3QpO3JldHVybiBvLnByb21pc2UoKX19KTt2YXIgVz0vXihFdmFsfEludGVybmFsfFJhbmdlfFJlZmVyZW5jZXxTeW50YXh8VHlwZXxVUkkpRXJyb3IkLztFLkRlZmVycmVkLmV4Y2VwdGlvbkhvb2s9ZnVuY3Rpb24oZSx0KXtDLmNvbnNvbGUmJkMuY29uc29sZS53YXJuJiZlJiZXLnRlc3QoZS5uYW1lKSYmQy5jb25zb2xlLndhcm4oXCJqUXVlcnkuRGVmZXJyZWQgZXhjZXB0aW9uOiBcIitlLm1lc3NhZ2UsZS5zdGFjayx0KX0sRS5yZWFkeUV4Y2VwdGlvbj1mdW5jdGlvbihlKXtDLnNldFRpbWVvdXQoZnVuY3Rpb24oKXt0aHJvdyBlfSl9O3ZhciBGPUUuRGVmZXJyZWQoKTtmdW5jdGlvbiAkKCl7Uy5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCQpLEMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwkKSxFLnJlYWR5KCl9RS5mbi5yZWFkeT1mdW5jdGlvbihlKXtyZXR1cm4gRi50aGVuKGUpW1wiY2F0Y2hcIl0oZnVuY3Rpb24oZSl7RS5yZWFkeUV4Y2VwdGlvbihlKX0pLHRoaXN9LEUuZXh0ZW5kKHtpc1JlYWR5OiExLHJlYWR5V2FpdDoxLHJlYWR5OmZ1bmN0aW9uKGUpeyghMD09PWU/LS1FLnJlYWR5V2FpdDpFLmlzUmVhZHkpfHwoRS5pc1JlYWR5PSEwKSE9PWUmJjA8LS1FLnJlYWR5V2FpdHx8Ri5yZXNvbHZlV2l0aChTLFtFXSl9fSksRS5yZWFkeS50aGVuPUYudGhlbixcImNvbXBsZXRlXCI9PT1TLnJlYWR5U3RhdGV8fFwibG9hZGluZ1wiIT09Uy5yZWFkeVN0YXRlJiYhUy5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGw/Qy5zZXRUaW1lb3V0KEUucmVhZHkpOihTLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsJCksQy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCQpKTt2YXIgQj1mdW5jdGlvbihlLHQsbixyLGksbyxhKXt2YXIgcz0wLHU9ZS5sZW5ndGgsbD1udWxsPT1uO2lmKFwib2JqZWN0XCI9PT13KG4pKWZvcihzIGluIGk9ITAsbilCKGUsdCxzLG5bc10sITAsbyxhKTtlbHNlIGlmKHZvaWQgMCE9PXImJihpPSEwLG0ocil8fChhPSEwKSxsJiYoYT8odC5jYWxsKGUsciksdD1udWxsKToobD10LHQ9ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBsLmNhbGwoRShlKSxuKX0pKSx0KSlmb3IoO3M8dTtzKyspdChlW3NdLG4sYT9yOnIuY2FsbChlW3NdLHMsdChlW3NdLG4pKSk7cmV0dXJuIGk/ZTpsP3QuY2FsbChlKTp1P3QoZVswXSxuKTpvfSxfPS9eLW1zLS8sej0vLShbYS16XSkvZztmdW5jdGlvbiBVKGUsdCl7cmV0dXJuIHQudG9VcHBlckNhc2UoKX1mdW5jdGlvbiBYKGUpe3JldHVybiBlLnJlcGxhY2UoXyxcIm1zLVwiKS5yZXBsYWNlKHosVSl9dmFyIFY9ZnVuY3Rpb24oZSl7cmV0dXJuIDE9PT1lLm5vZGVUeXBlfHw5PT09ZS5ub2RlVHlwZXx8IStlLm5vZGVUeXBlfTtmdW5jdGlvbiBHKCl7dGhpcy5leHBhbmRvPUUuZXhwYW5kbytHLnVpZCsrfUcudWlkPTEsRy5wcm90b3R5cGU9e2NhY2hlOmZ1bmN0aW9uKGUpe3ZhciB0PWVbdGhpcy5leHBhbmRvXTtyZXR1cm4gdHx8KHQ9e30sVihlKSYmKGUubm9kZVR5cGU/ZVt0aGlzLmV4cGFuZG9dPXQ6T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdGhpcy5leHBhbmRvLHt2YWx1ZTp0LGNvbmZpZ3VyYWJsZTohMH0pKSksdH0sc2V0OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpPXRoaXMuY2FjaGUoZSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpaVtYKHQpXT1uO2Vsc2UgZm9yKHIgaW4gdClpW1gocildPXRbcl07cmV0dXJuIGl9LGdldDpmdW5jdGlvbihlLHQpe3JldHVybiB2b2lkIDA9PT10P3RoaXMuY2FjaGUoZSk6ZVt0aGlzLmV4cGFuZG9dJiZlW3RoaXMuZXhwYW5kb11bWCh0KV19LGFjY2VzczpmdW5jdGlvbihlLHQsbil7cmV0dXJuIHZvaWQgMD09PXR8fHQmJlwic3RyaW5nXCI9PXR5cGVvZiB0JiZ2b2lkIDA9PT1uP3RoaXMuZ2V0KGUsdCk6KHRoaXMuc2V0KGUsdCxuKSx2b2lkIDAhPT1uP246dCl9LHJlbW92ZTpmdW5jdGlvbihlLHQpe3ZhciBuLHI9ZVt0aGlzLmV4cGFuZG9dO2lmKHZvaWQgMCE9PXIpe2lmKHZvaWQgMCE9PXQpe249KHQ9QXJyYXkuaXNBcnJheSh0KT90Lm1hcChYKToodD1YKHQpKWluIHI/W3RdOnQubWF0Y2goUCl8fFtdKS5sZW5ndGg7d2hpbGUobi0tKWRlbGV0ZSByW3Rbbl1dfSh2b2lkIDA9PT10fHxFLmlzRW1wdHlPYmplY3QocikpJiYoZS5ub2RlVHlwZT9lW3RoaXMuZXhwYW5kb109dm9pZCAwOmRlbGV0ZSBlW3RoaXMuZXhwYW5kb10pfX0saGFzRGF0YTpmdW5jdGlvbihlKXt2YXIgdD1lW3RoaXMuZXhwYW5kb107cmV0dXJuIHZvaWQgMCE9PXQmJiFFLmlzRW1wdHlPYmplY3QodCl9fTt2YXIgWT1uZXcgRyxRPW5ldyBHLEo9L14oPzpcXHtbXFx3XFxXXSpcXH18XFxbW1xcd1xcV10qXFxdKSQvLEs9L1tBLVpdL2c7ZnVuY3Rpb24gWihlLHQsbil7dmFyIHIsaTtpZih2b2lkIDA9PT1uJiYxPT09ZS5ub2RlVHlwZSlpZihyPVwiZGF0YS1cIit0LnJlcGxhY2UoSyxcIi0kJlwiKS50b0xvd2VyQ2FzZSgpLFwic3RyaW5nXCI9PXR5cGVvZihuPWUuZ2V0QXR0cmlidXRlKHIpKSl7dHJ5e249XCJ0cnVlXCI9PT0oaT1uKXx8XCJmYWxzZVwiIT09aSYmKFwibnVsbFwiPT09aT9udWxsOmk9PT0raStcIlwiPytpOkoudGVzdChpKT9KU09OLnBhcnNlKGkpOmkpfWNhdGNoKGUpe31RLnNldChlLHQsbil9ZWxzZSBuPXZvaWQgMDtyZXR1cm4gbn1FLmV4dGVuZCh7aGFzRGF0YTpmdW5jdGlvbihlKXtyZXR1cm4gUS5oYXNEYXRhKGUpfHxZLmhhc0RhdGEoZSl9LGRhdGE6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBRLmFjY2VzcyhlLHQsbil9LHJlbW92ZURhdGE6ZnVuY3Rpb24oZSx0KXtRLnJlbW92ZShlLHQpfSxfZGF0YTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIFkuYWNjZXNzKGUsdCxuKX0sX3JlbW92ZURhdGE6ZnVuY3Rpb24oZSx0KXtZLnJlbW92ZShlLHQpfX0pLEUuZm4uZXh0ZW5kKHtkYXRhOmZ1bmN0aW9uKG4sZSl7dmFyIHQscixpLG89dGhpc1swXSxhPW8mJm8uYXR0cmlidXRlcztpZih2b2lkIDA9PT1uKXtpZih0aGlzLmxlbmd0aCYmKGk9US5nZXQobyksMT09PW8ubm9kZVR5cGUmJiFZLmdldChvLFwiaGFzRGF0YUF0dHJzXCIpKSl7dD1hLmxlbmd0aDt3aGlsZSh0LS0pYVt0XSYmMD09PShyPWFbdF0ubmFtZSkuaW5kZXhPZihcImRhdGEtXCIpJiYocj1YKHIuc2xpY2UoNSkpLFoobyxyLGlbcl0pKTtZLnNldChvLFwiaGFzRGF0YUF0dHJzXCIsITApfXJldHVybiBpfXJldHVyblwib2JqZWN0XCI9PXR5cGVvZiBuP3RoaXMuZWFjaChmdW5jdGlvbigpe1Euc2V0KHRoaXMsbil9KTpCKHRoaXMsZnVuY3Rpb24oZSl7dmFyIHQ7aWYobyYmdm9pZCAwPT09ZSlyZXR1cm4gdm9pZCAwIT09KHQ9US5nZXQobyxuKSk/dDp2b2lkIDAhPT0odD1aKG8sbikpP3Q6dm9pZCAwO3RoaXMuZWFjaChmdW5jdGlvbigpe1Euc2V0KHRoaXMsbixlKX0pfSxudWxsLGUsMTxhcmd1bWVudHMubGVuZ3RoLG51bGwsITApfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtRLnJlbW92ZSh0aGlzLGUpfSl9fSksRS5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcjtpZihlKXJldHVybiB0PSh0fHxcImZ4XCIpK1wicXVldWVcIixyPVkuZ2V0KGUsdCksbiYmKCFyfHxBcnJheS5pc0FycmF5KG4pP3I9WS5hY2Nlc3MoZSx0LEUubWFrZUFycmF5KG4pKTpyLnB1c2gobikpLHJ8fFtdfSxkZXF1ZXVlOmZ1bmN0aW9uKGUsdCl7dD10fHxcImZ4XCI7dmFyIG49RS5xdWV1ZShlLHQpLHI9bi5sZW5ndGgsaT1uLnNoaWZ0KCksbz1FLl9xdWV1ZUhvb2tzKGUsdCk7XCJpbnByb2dyZXNzXCI9PT1pJiYoaT1uLnNoaWZ0KCksci0tKSxpJiYoXCJmeFwiPT09dCYmbi51bnNoaWZ0KFwiaW5wcm9ncmVzc1wiKSxkZWxldGUgby5zdG9wLGkuY2FsbChlLGZ1bmN0aW9uKCl7RS5kZXF1ZXVlKGUsdCl9LG8pKSwhciYmbyYmby5lbXB0eS5maXJlKCl9LF9xdWV1ZUhvb2tzOmZ1bmN0aW9uKGUsdCl7dmFyIG49dCtcInF1ZXVlSG9va3NcIjtyZXR1cm4gWS5nZXQoZSxuKXx8WS5hY2Nlc3MoZSxuLHtlbXB0eTpFLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLmFkZChmdW5jdGlvbigpe1kucmVtb3ZlKGUsW3QrXCJxdWV1ZVwiLG5dKX0pfSl9fSksRS5mbi5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKHQsbil7dmFyIGU9MjtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgdCYmKG49dCx0PVwiZnhcIixlLS0pLGFyZ3VtZW50cy5sZW5ndGg8ZT9FLnF1ZXVlKHRoaXNbMF0sdCk6dm9pZCAwPT09bj90aGlzOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBlPUUucXVldWUodGhpcyx0LG4pO0UuX3F1ZXVlSG9va3ModGhpcyx0KSxcImZ4XCI9PT10JiZcImlucHJvZ3Jlc3NcIiE9PWVbMF0mJkUuZGVxdWV1ZSh0aGlzLHQpfSl9LGRlcXVldWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe0UuZGVxdWV1ZSh0aGlzLGUpfSl9LGNsZWFyUXVldWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucXVldWUoZXx8XCJmeFwiLFtdKX0scHJvbWlzZTpmdW5jdGlvbihlLHQpe3ZhciBuLHI9MSxpPUUuRGVmZXJyZWQoKSxvPXRoaXMsYT10aGlzLmxlbmd0aCxzPWZ1bmN0aW9uKCl7LS1yfHxpLnJlc29sdmVXaXRoKG8sW29dKX07XCJzdHJpbmdcIiE9dHlwZW9mIGUmJih0PWUsZT12b2lkIDApLGU9ZXx8XCJmeFwiO3doaWxlKGEtLSkobj1ZLmdldChvW2FdLGUrXCJxdWV1ZUhvb2tzXCIpKSYmbi5lbXB0eSYmKHIrKyxuLmVtcHR5LmFkZChzKSk7cmV0dXJuIHMoKSxpLnByb21pc2UodCl9fSk7dmFyIGVlPS9bKy1dPyg/OlxcZCpcXC58KVxcZCsoPzpbZUVdWystXT9cXGQrfCkvLnNvdXJjZSx0ZT1uZXcgUmVnRXhwKFwiXig/OihbKy1dKT18KShcIitlZStcIikoW2EteiVdKikkXCIsXCJpXCIpLG5lPVtcIlRvcFwiLFwiUmlnaHRcIixcIkJvdHRvbVwiLFwiTGVmdFwiXSxyZT1TLmRvY3VtZW50RWxlbWVudCxpZT1mdW5jdGlvbihlKXtyZXR1cm4gRS5jb250YWlucyhlLm93bmVyRG9jdW1lbnQsZSl9LG9lPXtjb21wb3NlZDohMH07cmUuZ2V0Um9vdE5vZGUmJihpZT1mdW5jdGlvbihlKXtyZXR1cm4gRS5jb250YWlucyhlLm93bmVyRG9jdW1lbnQsZSl8fGUuZ2V0Um9vdE5vZGUob2UpPT09ZS5vd25lckRvY3VtZW50fSk7dmFyIGFlPWZ1bmN0aW9uKGUsdCl7cmV0dXJuXCJub25lXCI9PT0oZT10fHxlKS5zdHlsZS5kaXNwbGF5fHxcIlwiPT09ZS5zdHlsZS5kaXNwbGF5JiZpZShlKSYmXCJub25lXCI9PT1FLmNzcyhlLFwiZGlzcGxheVwiKX07ZnVuY3Rpb24gc2UoZSx0LG4scil7dmFyIGksbyxhPTIwLHM9cj9mdW5jdGlvbigpe3JldHVybiByLmN1cigpfTpmdW5jdGlvbigpe3JldHVybiBFLmNzcyhlLHQsXCJcIil9LHU9cygpLGw9biYmblszXXx8KEUuY3NzTnVtYmVyW3RdP1wiXCI6XCJweFwiKSxjPWUubm9kZVR5cGUmJihFLmNzc051bWJlclt0XXx8XCJweFwiIT09bCYmK3UpJiZ0ZS5leGVjKEUuY3NzKGUsdCkpO2lmKGMmJmNbM10hPT1sKXt1Lz0yLGw9bHx8Y1szXSxjPSt1fHwxO3doaWxlKGEtLSlFLnN0eWxlKGUsdCxjK2wpLCgxLW8pKigxLShvPXMoKS91fHwuNSkpPD0wJiYoYT0wKSxjLz1vO2MqPTIsRS5zdHlsZShlLHQsYytsKSxuPW58fFtdfXJldHVybiBuJiYoYz0rY3x8K3V8fDAsaT1uWzFdP2MrKG5bMV0rMSkqblsyXTorblsyXSxyJiYoci51bml0PWwsci5zdGFydD1jLHIuZW5kPWkpKSxpfXZhciB1ZT17fTtmdW5jdGlvbiBsZShlLHQpe2Zvcih2YXIgbixyLGksbyxhLHMsdSxsPVtdLGM9MCxmPWUubGVuZ3RoO2M8ZjtjKyspKHI9ZVtjXSkuc3R5bGUmJihuPXIuc3R5bGUuZGlzcGxheSx0PyhcIm5vbmVcIj09PW4mJihsW2NdPVkuZ2V0KHIsXCJkaXNwbGF5XCIpfHxudWxsLGxbY118fChyLnN0eWxlLmRpc3BsYXk9XCJcIikpLFwiXCI9PT1yLnN0eWxlLmRpc3BsYXkmJmFlKHIpJiYobFtjXT0odT1hPW89dm9pZCAwLGE9KGk9cikub3duZXJEb2N1bWVudCxzPWkubm9kZU5hbWUsKHU9dWVbc10pfHwobz1hLmJvZHkuYXBwZW5kQ2hpbGQoYS5jcmVhdGVFbGVtZW50KHMpKSx1PUUuY3NzKG8sXCJkaXNwbGF5XCIpLG8ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvKSxcIm5vbmVcIj09PXUmJih1PVwiYmxvY2tcIiksdWVbc109dSkpKSk6XCJub25lXCIhPT1uJiYobFtjXT1cIm5vbmVcIixZLnNldChyLFwiZGlzcGxheVwiLG4pKSk7Zm9yKGM9MDtjPGY7YysrKW51bGwhPWxbY10mJihlW2NdLnN0eWxlLmRpc3BsYXk9bFtjXSk7cmV0dXJuIGV9RS5mbi5leHRlbmQoe3Nob3c6ZnVuY3Rpb24oKXtyZXR1cm4gbGUodGhpcywhMCl9LGhpZGU6ZnVuY3Rpb24oKXtyZXR1cm4gbGUodGhpcyl9LHRvZ2dsZTpmdW5jdGlvbihlKXtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGU/ZT90aGlzLnNob3coKTp0aGlzLmhpZGUoKTp0aGlzLmVhY2goZnVuY3Rpb24oKXthZSh0aGlzKT9FKHRoaXMpLnNob3coKTpFKHRoaXMpLmhpZGUoKX0pfX0pO3ZhciBjZSxmZSxwZT0vXig/OmNoZWNrYm94fHJhZGlvKSQvaSxkZT0vPChbYS16XVteXFwvXFwwPlxceDIwXFx0XFxyXFxuXFxmXSopL2ksaGU9L14kfF5tb2R1bGUkfFxcLyg/OmphdmF8ZWNtYSlzY3JpcHQvaTtjZT1TLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKS5hcHBlbmRDaGlsZChTLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLChmZT1TLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSkuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwicmFkaW9cIiksZmUuc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLFwiY2hlY2tlZFwiKSxmZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJ0XCIpLGNlLmFwcGVuZENoaWxkKGZlKSx2LmNoZWNrQ2xvbmU9Y2UuY2xvbmVOb2RlKCEwKS5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5jaGVja2VkLGNlLmlubmVySFRNTD1cIjx0ZXh0YXJlYT54PC90ZXh0YXJlYT5cIix2Lm5vQ2xvbmVDaGVja2VkPSEhY2UuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuZGVmYXVsdFZhbHVlLGNlLmlubmVySFRNTD1cIjxvcHRpb24+PC9vcHRpb24+XCIsdi5vcHRpb249ISFjZS5sYXN0Q2hpbGQ7dmFyIGdlPXt0aGVhZDpbMSxcIjx0YWJsZT5cIixcIjwvdGFibGU+XCJdLGNvbDpbMixcIjx0YWJsZT48Y29sZ3JvdXA+XCIsXCI8L2NvbGdyb3VwPjwvdGFibGU+XCJdLHRyOlsyLFwiPHRhYmxlPjx0Ym9keT5cIixcIjwvdGJvZHk+PC90YWJsZT5cIl0sdGQ6WzMsXCI8dGFibGU+PHRib2R5Pjx0cj5cIixcIjwvdHI+PC90Ym9keT48L3RhYmxlPlwiXSxfZGVmYXVsdDpbMCxcIlwiLFwiXCJdfTtmdW5jdGlvbiB5ZShlLHQpe3ZhciBuO3JldHVybiBuPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLmdldEVsZW1lbnRzQnlUYWdOYW1lP2UuZ2V0RWxlbWVudHNCeVRhZ05hbWUodHx8XCIqXCIpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLnF1ZXJ5U2VsZWN0b3JBbGw/ZS5xdWVyeVNlbGVjdG9yQWxsKHR8fFwiKlwiKTpbXSx2b2lkIDA9PT10fHx0JiZBKGUsdCk/RS5tZXJnZShbZV0sbik6bn1mdW5jdGlvbiB2ZShlLHQpe2Zvcih2YXIgbj0wLHI9ZS5sZW5ndGg7bjxyO24rKylZLnNldChlW25dLFwiZ2xvYmFsRXZhbFwiLCF0fHxZLmdldCh0W25dLFwiZ2xvYmFsRXZhbFwiKSl9Z2UudGJvZHk9Z2UudGZvb3Q9Z2UuY29sZ3JvdXA9Z2UuY2FwdGlvbj1nZS50aGVhZCxnZS50aD1nZS50ZCx2Lm9wdGlvbnx8KGdlLm9wdGdyb3VwPWdlLm9wdGlvbj1bMSxcIjxzZWxlY3QgbXVsdGlwbGU9J211bHRpcGxlJz5cIixcIjwvc2VsZWN0PlwiXSk7dmFyIG1lPS88fCYjP1xcdys7LztmdW5jdGlvbiB4ZShlLHQsbixyLGkpe2Zvcih2YXIgbyxhLHMsdSxsLGMsZj10LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxwPVtdLGQ9MCxoPWUubGVuZ3RoO2Q8aDtkKyspaWYoKG89ZVtkXSl8fDA9PT1vKWlmKFwib2JqZWN0XCI9PT13KG8pKUUubWVyZ2UocCxvLm5vZGVUeXBlP1tvXTpvKTtlbHNlIGlmKG1lLnRlc3Qobykpe2E9YXx8Zi5hcHBlbmRDaGlsZCh0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLHM9KGRlLmV4ZWMobyl8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpLHU9Z2Vbc118fGdlLl9kZWZhdWx0LGEuaW5uZXJIVE1MPXVbMV0rRS5odG1sUHJlZmlsdGVyKG8pK3VbMl0sYz11WzBdO3doaWxlKGMtLSlhPWEubGFzdENoaWxkO0UubWVyZ2UocCxhLmNoaWxkTm9kZXMpLChhPWYuZmlyc3RDaGlsZCkudGV4dENvbnRlbnQ9XCJcIn1lbHNlIHAucHVzaCh0LmNyZWF0ZVRleHROb2RlKG8pKTtmLnRleHRDb250ZW50PVwiXCIsZD0wO3doaWxlKG89cFtkKytdKWlmKHImJi0xPEUuaW5BcnJheShvLHIpKWkmJmkucHVzaChvKTtlbHNlIGlmKGw9aWUobyksYT15ZShmLmFwcGVuZENoaWxkKG8pLFwic2NyaXB0XCIpLGwmJnZlKGEpLG4pe2M9MDt3aGlsZShvPWFbYysrXSloZS50ZXN0KG8udHlwZXx8XCJcIikmJm4ucHVzaChvKX1yZXR1cm4gZn12YXIgYmU9L14oW14uXSopKD86XFwuKC4rKXwpLztmdW5jdGlvbiB3ZSgpe3JldHVybiEwfWZ1bmN0aW9uIFRlKCl7cmV0dXJuITF9ZnVuY3Rpb24gQ2UoZSx0KXtyZXR1cm4gZT09PWZ1bmN0aW9uKCl7dHJ5e3JldHVybiBTLmFjdGl2ZUVsZW1lbnR9Y2F0Y2goZSl7fX0oKT09KFwiZm9jdXNcIj09PXQpfWZ1bmN0aW9uIFNlKGUsdCxuLHIsaSxvKXt2YXIgYSxzO2lmKFwib2JqZWN0XCI9PXR5cGVvZiB0KXtmb3IocyBpblwic3RyaW5nXCIhPXR5cGVvZiBuJiYocj1yfHxuLG49dm9pZCAwKSx0KVNlKGUscyxuLHIsdFtzXSxvKTtyZXR1cm4gZX1pZihudWxsPT1yJiZudWxsPT1pPyhpPW4scj1uPXZvaWQgMCk6bnVsbD09aSYmKFwic3RyaW5nXCI9PXR5cGVvZiBuPyhpPXIscj12b2lkIDApOihpPXIscj1uLG49dm9pZCAwKSksITE9PT1pKWk9VGU7ZWxzZSBpZighaSlyZXR1cm4gZTtyZXR1cm4gMT09PW8mJihhPWksKGk9ZnVuY3Rpb24oZSl7cmV0dXJuIEUoKS5vZmYoZSksYS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9KS5ndWlkPWEuZ3VpZHx8KGEuZ3VpZD1FLmd1aWQrKykpLGUuZWFjaChmdW5jdGlvbigpe0UuZXZlbnQuYWRkKHRoaXMsdCxpLHIsbil9KX1mdW5jdGlvbiBFZShlLGksbyl7bz8oWS5zZXQoZSxpLCExKSxFLmV2ZW50LmFkZChlLGkse25hbWVzcGFjZTohMSxoYW5kbGVyOmZ1bmN0aW9uKGUpe3ZhciB0LG4scj1ZLmdldCh0aGlzLGkpO2lmKDEmZS5pc1RyaWdnZXImJnRoaXNbaV0pe2lmKHIubGVuZ3RoKShFLmV2ZW50LnNwZWNpYWxbaV18fHt9KS5kZWxlZ2F0ZVR5cGUmJmUuc3RvcFByb3BhZ2F0aW9uKCk7ZWxzZSBpZihyPXMuY2FsbChhcmd1bWVudHMpLFkuc2V0KHRoaXMsaSxyKSx0PW8odGhpcyxpKSx0aGlzW2ldKCksciE9PShuPVkuZ2V0KHRoaXMsaSkpfHx0P1kuc2V0KHRoaXMsaSwhMSk6bj17fSxyIT09bilyZXR1cm4gZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSxlLnByZXZlbnREZWZhdWx0KCksbiYmbi52YWx1ZX1lbHNlIHIubGVuZ3RoJiYoWS5zZXQodGhpcyxpLHt2YWx1ZTpFLmV2ZW50LnRyaWdnZXIoRS5leHRlbmQoclswXSxFLkV2ZW50LnByb3RvdHlwZSksci5zbGljZSgxKSx0aGlzKX0pLGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCkpfX0pKTp2b2lkIDA9PT1ZLmdldChlLGkpJiZFLmV2ZW50LmFkZChlLGksd2UpfUUuZXZlbnQ9e2dsb2JhbDp7fSxhZGQ6ZnVuY3Rpb24odCxlLG4scixpKXt2YXIgbyxhLHMsdSxsLGMsZixwLGQsaCxnLHk9WS5nZXQodCk7aWYoVih0KSl7bi5oYW5kbGVyJiYobj0obz1uKS5oYW5kbGVyLGk9by5zZWxlY3RvciksaSYmRS5maW5kLm1hdGNoZXNTZWxlY3RvcihyZSxpKSxuLmd1aWR8fChuLmd1aWQ9RS5ndWlkKyspLCh1PXkuZXZlbnRzKXx8KHU9eS5ldmVudHM9T2JqZWN0LmNyZWF0ZShudWxsKSksKGE9eS5oYW5kbGUpfHwoYT15LmhhbmRsZT1mdW5jdGlvbihlKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgRSYmRS5ldmVudC50cmlnZ2VyZWQhPT1lLnR5cGU/RS5ldmVudC5kaXNwYXRjaC5hcHBseSh0LGFyZ3VtZW50cyk6dm9pZCAwfSksbD0oZT0oZXx8XCJcIikubWF0Y2goUCl8fFtcIlwiXSkubGVuZ3RoO3doaWxlKGwtLSlkPWc9KHM9YmUuZXhlYyhlW2xdKXx8W10pWzFdLGg9KHNbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksZCYmKGY9RS5ldmVudC5zcGVjaWFsW2RdfHx7fSxkPShpP2YuZGVsZWdhdGVUeXBlOmYuYmluZFR5cGUpfHxkLGY9RS5ldmVudC5zcGVjaWFsW2RdfHx7fSxjPUUuZXh0ZW5kKHt0eXBlOmQsb3JpZ1R5cGU6ZyxkYXRhOnIsaGFuZGxlcjpuLGd1aWQ6bi5ndWlkLHNlbGVjdG9yOmksbmVlZHNDb250ZXh0OmkmJkUuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQudGVzdChpKSxuYW1lc3BhY2U6aC5qb2luKFwiLlwiKX0sbyksKHA9dVtkXSl8fCgocD11W2RdPVtdKS5kZWxlZ2F0ZUNvdW50PTAsZi5zZXR1cCYmITEhPT1mLnNldHVwLmNhbGwodCxyLGgsYSl8fHQuYWRkRXZlbnRMaXN0ZW5lciYmdC5hZGRFdmVudExpc3RlbmVyKGQsYSkpLGYuYWRkJiYoZi5hZGQuY2FsbCh0LGMpLGMuaGFuZGxlci5ndWlkfHwoYy5oYW5kbGVyLmd1aWQ9bi5ndWlkKSksaT9wLnNwbGljZShwLmRlbGVnYXRlQ291bnQrKywwLGMpOnAucHVzaChjKSxFLmV2ZW50Lmdsb2JhbFtkXT0hMCl9fSxyZW1vdmU6ZnVuY3Rpb24oZSx0LG4scixpKXt2YXIgbyxhLHMsdSxsLGMsZixwLGQsaCxnLHk9WS5oYXNEYXRhKGUpJiZZLmdldChlKTtpZih5JiYodT15LmV2ZW50cykpe2w9KHQ9KHR8fFwiXCIpLm1hdGNoKFApfHxbXCJcIl0pLmxlbmd0aDt3aGlsZShsLS0paWYoZD1nPShzPWJlLmV4ZWModFtsXSl8fFtdKVsxXSxoPShzWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLGQpe2Y9RS5ldmVudC5zcGVjaWFsW2RdfHx7fSxwPXVbZD0ocj9mLmRlbGVnYXRlVHlwZTpmLmJpbmRUeXBlKXx8ZF18fFtdLHM9c1syXSYmbmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK2guam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpLGE9bz1wLmxlbmd0aDt3aGlsZShvLS0pYz1wW29dLCFpJiZnIT09Yy5vcmlnVHlwZXx8biYmbi5ndWlkIT09Yy5ndWlkfHxzJiYhcy50ZXN0KGMubmFtZXNwYWNlKXx8ciYmciE9PWMuc2VsZWN0b3ImJihcIioqXCIhPT1yfHwhYy5zZWxlY3Rvcil8fChwLnNwbGljZShvLDEpLGMuc2VsZWN0b3ImJnAuZGVsZWdhdGVDb3VudC0tLGYucmVtb3ZlJiZmLnJlbW92ZS5jYWxsKGUsYykpO2EmJiFwLmxlbmd0aCYmKGYudGVhcmRvd24mJiExIT09Zi50ZWFyZG93bi5jYWxsKGUsaCx5LmhhbmRsZSl8fEUucmVtb3ZlRXZlbnQoZSxkLHkuaGFuZGxlKSxkZWxldGUgdVtkXSl9ZWxzZSBmb3IoZCBpbiB1KUUuZXZlbnQucmVtb3ZlKGUsZCt0W2xdLG4sciwhMCk7RS5pc0VtcHR5T2JqZWN0KHUpJiZZLnJlbW92ZShlLFwiaGFuZGxlIGV2ZW50c1wiKX19LGRpc3BhdGNoOmZ1bmN0aW9uKGUpe3ZhciB0LG4scixpLG8sYSxzPW5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKSx1PUUuZXZlbnQuZml4KGUpLGw9KFkuZ2V0KHRoaXMsXCJldmVudHNcIil8fE9iamVjdC5jcmVhdGUobnVsbCkpW3UudHlwZV18fFtdLGM9RS5ldmVudC5zcGVjaWFsW3UudHlwZV18fHt9O2ZvcihzWzBdPXUsdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspc1t0XT1hcmd1bWVudHNbdF07aWYodS5kZWxlZ2F0ZVRhcmdldD10aGlzLCFjLnByZURpc3BhdGNofHwhMSE9PWMucHJlRGlzcGF0Y2guY2FsbCh0aGlzLHUpKXthPUUuZXZlbnQuaGFuZGxlcnMuY2FsbCh0aGlzLHUsbCksdD0wO3doaWxlKChpPWFbdCsrXSkmJiF1LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpe3UuY3VycmVudFRhcmdldD1pLmVsZW0sbj0wO3doaWxlKChvPWkuaGFuZGxlcnNbbisrXSkmJiF1LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCkpdS5ybmFtZXNwYWNlJiYhMSE9PW8ubmFtZXNwYWNlJiYhdS5ybmFtZXNwYWNlLnRlc3Qoby5uYW1lc3BhY2UpfHwodS5oYW5kbGVPYmo9byx1LmRhdGE9by5kYXRhLHZvaWQgMCE9PShyPSgoRS5ldmVudC5zcGVjaWFsW28ub3JpZ1R5cGVdfHx7fSkuaGFuZGxlfHxvLmhhbmRsZXIpLmFwcGx5KGkuZWxlbSxzKSkmJiExPT09KHUucmVzdWx0PXIpJiYodS5wcmV2ZW50RGVmYXVsdCgpLHUuc3RvcFByb3BhZ2F0aW9uKCkpKX1yZXR1cm4gYy5wb3N0RGlzcGF0Y2gmJmMucG9zdERpc3BhdGNoLmNhbGwodGhpcyx1KSx1LnJlc3VsdH19LGhhbmRsZXJzOmZ1bmN0aW9uKGUsdCl7dmFyIG4scixpLG8sYSxzPVtdLHU9dC5kZWxlZ2F0ZUNvdW50LGw9ZS50YXJnZXQ7aWYodSYmbC5ub2RlVHlwZSYmIShcImNsaWNrXCI9PT1lLnR5cGUmJjE8PWUuYnV0dG9uKSlmb3IoO2whPT10aGlzO2w9bC5wYXJlbnROb2RlfHx0aGlzKWlmKDE9PT1sLm5vZGVUeXBlJiYoXCJjbGlja1wiIT09ZS50eXBlfHwhMCE9PWwuZGlzYWJsZWQpKXtmb3Iobz1bXSxhPXt9LG49MDtuPHU7bisrKXZvaWQgMD09PWFbaT0ocj10W25dKS5zZWxlY3RvcitcIiBcIl0mJihhW2ldPXIubmVlZHNDb250ZXh0Py0xPEUoaSx0aGlzKS5pbmRleChsKTpFLmZpbmQoaSx0aGlzLG51bGwsW2xdKS5sZW5ndGgpLGFbaV0mJm8ucHVzaChyKTtvLmxlbmd0aCYmcy5wdXNoKHtlbGVtOmwsaGFuZGxlcnM6b30pfXJldHVybiBsPXRoaXMsdTx0Lmxlbmd0aCYmcy5wdXNoKHtlbGVtOmwsaGFuZGxlcnM6dC5zbGljZSh1KX0pLHN9LGFkZFByb3A6ZnVuY3Rpb24odCxlKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoRS5FdmVudC5wcm90b3R5cGUsdCx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsZ2V0Om0oZSk/ZnVuY3Rpb24oKXtpZih0aGlzLm9yaWdpbmFsRXZlbnQpcmV0dXJuIGUodGhpcy5vcmlnaW5hbEV2ZW50KX06ZnVuY3Rpb24oKXtpZih0aGlzLm9yaWdpbmFsRXZlbnQpcmV0dXJuIHRoaXMub3JpZ2luYWxFdmVudFt0XX0sc2V0OmZ1bmN0aW9uKGUpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLHQse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOmV9KX19KX0sZml4OmZ1bmN0aW9uKGUpe3JldHVybiBlW0UuZXhwYW5kb10/ZTpuZXcgRS5FdmVudChlKX0sc3BlY2lhbDp7bG9hZDp7bm9CdWJibGU6ITB9LGNsaWNrOntzZXR1cDpmdW5jdGlvbihlKXt2YXIgdD10aGlzfHxlO3JldHVybiBwZS50ZXN0KHQudHlwZSkmJnQuY2xpY2smJkEodCxcImlucHV0XCIpJiZFZSh0LFwiY2xpY2tcIix3ZSksITF9LHRyaWdnZXI6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpc3x8ZTtyZXR1cm4gcGUudGVzdCh0LnR5cGUpJiZ0LmNsaWNrJiZBKHQsXCJpbnB1dFwiKSYmRWUodCxcImNsaWNrXCIpLCEwfSxfZGVmYXVsdDpmdW5jdGlvbihlKXt2YXIgdD1lLnRhcmdldDtyZXR1cm4gcGUudGVzdCh0LnR5cGUpJiZ0LmNsaWNrJiZBKHQsXCJpbnB1dFwiKSYmWS5nZXQodCxcImNsaWNrXCIpfHxBKHQsXCJhXCIpfX0sYmVmb3JldW5sb2FkOntwb3N0RGlzcGF0Y2g6ZnVuY3Rpb24oZSl7dm9pZCAwIT09ZS5yZXN1bHQmJmUub3JpZ2luYWxFdmVudCYmKGUub3JpZ2luYWxFdmVudC5yZXR1cm5WYWx1ZT1lLnJlc3VsdCl9fX19LEUucmVtb3ZlRXZlbnQ9ZnVuY3Rpb24oZSx0LG4pe2UucmVtb3ZlRXZlbnRMaXN0ZW5lciYmZS5yZW1vdmVFdmVudExpc3RlbmVyKHQsbil9LEUuRXZlbnQ9ZnVuY3Rpb24oZSx0KXtpZighKHRoaXMgaW5zdGFuY2VvZiBFLkV2ZW50KSlyZXR1cm4gbmV3IEUuRXZlbnQoZSx0KTtlJiZlLnR5cGU/KHRoaXMub3JpZ2luYWxFdmVudD1lLHRoaXMudHlwZT1lLnR5cGUsdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9ZS5kZWZhdWx0UHJldmVudGVkfHx2b2lkIDA9PT1lLmRlZmF1bHRQcmV2ZW50ZWQmJiExPT09ZS5yZXR1cm5WYWx1ZT93ZTpUZSx0aGlzLnRhcmdldD1lLnRhcmdldCYmMz09PWUudGFyZ2V0Lm5vZGVUeXBlP2UudGFyZ2V0LnBhcmVudE5vZGU6ZS50YXJnZXQsdGhpcy5jdXJyZW50VGFyZ2V0PWUuY3VycmVudFRhcmdldCx0aGlzLnJlbGF0ZWRUYXJnZXQ9ZS5yZWxhdGVkVGFyZ2V0KTp0aGlzLnR5cGU9ZSx0JiZFLmV4dGVuZCh0aGlzLHQpLHRoaXMudGltZVN0YW1wPWUmJmUudGltZVN0YW1wfHxEYXRlLm5vdygpLHRoaXNbRS5leHBhbmRvXT0hMH0sRS5FdmVudC5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOkUuRXZlbnQsaXNEZWZhdWx0UHJldmVudGVkOlRlLGlzUHJvcGFnYXRpb25TdG9wcGVkOlRlLGlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkOlRlLGlzU2ltdWxhdGVkOiExLHByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNEZWZhdWx0UHJldmVudGVkPXdlLGUmJiF0aGlzLmlzU2ltdWxhdGVkJiZlLnByZXZlbnREZWZhdWx0KCl9LHN0b3BQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPXdlLGUmJiF0aGlzLmlzU2ltdWxhdGVkJiZlLnN0b3BQcm9wYWdhdGlvbigpfSxzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZD13ZSxlJiYhdGhpcy5pc1NpbXVsYXRlZCYmZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSx0aGlzLnN0b3BQcm9wYWdhdGlvbigpfX0sRS5lYWNoKHthbHRLZXk6ITAsYnViYmxlczohMCxjYW5jZWxhYmxlOiEwLGNoYW5nZWRUb3VjaGVzOiEwLGN0cmxLZXk6ITAsZGV0YWlsOiEwLGV2ZW50UGhhc2U6ITAsbWV0YUtleTohMCxwYWdlWDohMCxwYWdlWTohMCxzaGlmdEtleTohMCx2aWV3OiEwLFwiY2hhclwiOiEwLGNvZGU6ITAsY2hhckNvZGU6ITAsa2V5OiEwLGtleUNvZGU6ITAsYnV0dG9uOiEwLGJ1dHRvbnM6ITAsY2xpZW50WDohMCxjbGllbnRZOiEwLG9mZnNldFg6ITAsb2Zmc2V0WTohMCxwb2ludGVySWQ6ITAscG9pbnRlclR5cGU6ITAsc2NyZWVuWDohMCxzY3JlZW5ZOiEwLHRhcmdldFRvdWNoZXM6ITAsdG9FbGVtZW50OiEwLHRvdWNoZXM6ITAsd2hpY2g6ITB9LEUuZXZlbnQuYWRkUHJvcCksRS5lYWNoKHtmb2N1czpcImZvY3VzaW5cIixibHVyOlwiZm9jdXNvdXRcIn0sZnVuY3Rpb24odCxlKXtFLmV2ZW50LnNwZWNpYWxbdF09e3NldHVwOmZ1bmN0aW9uKCl7cmV0dXJuIEVlKHRoaXMsdCxDZSksITF9LHRyaWdnZXI6ZnVuY3Rpb24oKXtyZXR1cm4gRWUodGhpcyx0KSwhMH0sX2RlZmF1bHQ6ZnVuY3Rpb24oZSl7cmV0dXJuIFkuZ2V0KGUudGFyZ2V0LHQpfSxkZWxlZ2F0ZVR5cGU6ZX19KSxFLmVhY2goe21vdXNlZW50ZXI6XCJtb3VzZW92ZXJcIixtb3VzZWxlYXZlOlwibW91c2VvdXRcIixwb2ludGVyZW50ZXI6XCJwb2ludGVyb3ZlclwiLHBvaW50ZXJsZWF2ZTpcInBvaW50ZXJvdXRcIn0sZnVuY3Rpb24oZSxpKXtFLmV2ZW50LnNwZWNpYWxbZV09e2RlbGVnYXRlVHlwZTppLGJpbmRUeXBlOmksaGFuZGxlOmZ1bmN0aW9uKGUpe3ZhciB0LG49ZS5yZWxhdGVkVGFyZ2V0LHI9ZS5oYW5kbGVPYmo7cmV0dXJuIG4mJihuPT09dGhpc3x8RS5jb250YWlucyh0aGlzLG4pKXx8KGUudHlwZT1yLm9yaWdUeXBlLHQ9ci5oYW5kbGVyLmFwcGx5KHRoaXMsYXJndW1lbnRzKSxlLnR5cGU9aSksdH19fSksRS5mbi5leHRlbmQoe29uOmZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiBTZSh0aGlzLGUsdCxuLHIpfSxvbmU6ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIFNlKHRoaXMsZSx0LG4sciwxKX0sb2ZmOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpO2lmKGUmJmUucHJldmVudERlZmF1bHQmJmUuaGFuZGxlT2JqKXJldHVybiByPWUuaGFuZGxlT2JqLEUoZS5kZWxlZ2F0ZVRhcmdldCkub2ZmKHIubmFtZXNwYWNlP3Iub3JpZ1R5cGUrXCIuXCIrci5uYW1lc3BhY2U6ci5vcmlnVHlwZSxyLnNlbGVjdG9yLHIuaGFuZGxlciksdGhpcztpZihcIm9iamVjdFwiPT10eXBlb2YgZSl7Zm9yKGkgaW4gZSl0aGlzLm9mZihpLHQsZVtpXSk7cmV0dXJuIHRoaXN9cmV0dXJuITEhPT10JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0fHwobj10LHQ9dm9pZCAwKSwhMT09PW4mJihuPVRlKSx0aGlzLmVhY2goZnVuY3Rpb24oKXtFLmV2ZW50LnJlbW92ZSh0aGlzLGUsbix0KX0pfX0pO3ZhciBrZT0vPHNjcmlwdHw8c3R5bGV8PGxpbmsvaSxBZT0vY2hlY2tlZFxccyooPzpbXj1dfD1cXHMqLmNoZWNrZWQuKS9pLE5lPS9eXFxzKjwhXFxbQ0RBVEFcXFt8XFxdXFxdPlxccyokL2c7ZnVuY3Rpb24gamUoZSx0KXtyZXR1cm4gQShlLFwidGFibGVcIikmJkEoMTEhPT10Lm5vZGVUeXBlP3Q6dC5maXJzdENoaWxkLFwidHJcIikmJkUoZSkuY2hpbGRyZW4oXCJ0Ym9keVwiKVswXXx8ZX1mdW5jdGlvbiBEZShlKXtyZXR1cm4gZS50eXBlPShudWxsIT09ZS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKStcIi9cIitlLnR5cGUsZX1mdW5jdGlvbiBxZShlKXtyZXR1cm5cInRydWUvXCI9PT0oZS50eXBlfHxcIlwiKS5zbGljZSgwLDUpP2UudHlwZT1lLnR5cGUuc2xpY2UoNSk6ZS5yZW1vdmVBdHRyaWJ1dGUoXCJ0eXBlXCIpLGV9ZnVuY3Rpb24gTGUoZSx0KXt2YXIgbixyLGksbyxhLHM7aWYoMT09PXQubm9kZVR5cGUpe2lmKFkuaGFzRGF0YShlKSYmKHM9WS5nZXQoZSkuZXZlbnRzKSlmb3IoaSBpbiBZLnJlbW92ZSh0LFwiaGFuZGxlIGV2ZW50c1wiKSxzKWZvcihuPTAscj1zW2ldLmxlbmd0aDtuPHI7bisrKUUuZXZlbnQuYWRkKHQsaSxzW2ldW25dKTtRLmhhc0RhdGEoZSkmJihvPVEuYWNjZXNzKGUpLGE9RS5leHRlbmQoe30sbyksUS5zZXQodCxhKSl9fWZ1bmN0aW9uIEhlKG4scixpLG8pe3I9ZyhyKTt2YXIgZSx0LGEscyx1LGwsYz0wLGY9bi5sZW5ndGgscD1mLTEsZD1yWzBdLGg9bShkKTtpZihofHwxPGYmJlwic3RyaW5nXCI9PXR5cGVvZiBkJiYhdi5jaGVja0Nsb25lJiZBZS50ZXN0KGQpKXJldHVybiBuLmVhY2goZnVuY3Rpb24oZSl7dmFyIHQ9bi5lcShlKTtoJiYoclswXT1kLmNhbGwodGhpcyxlLHQuaHRtbCgpKSksSGUodCxyLGksbyl9KTtpZihmJiYodD0oZT14ZShyLG5bMF0ub3duZXJEb2N1bWVudCwhMSxuLG8pKS5maXJzdENoaWxkLDE9PT1lLmNoaWxkTm9kZXMubGVuZ3RoJiYoZT10KSx0fHxvKSl7Zm9yKHM9KGE9RS5tYXAoeWUoZSxcInNjcmlwdFwiKSxEZSkpLmxlbmd0aDtjPGY7YysrKXU9ZSxjIT09cCYmKHU9RS5jbG9uZSh1LCEwLCEwKSxzJiZFLm1lcmdlKGEseWUodSxcInNjcmlwdFwiKSkpLGkuY2FsbChuW2NdLHUsYyk7aWYocylmb3IobD1hW2EubGVuZ3RoLTFdLm93bmVyRG9jdW1lbnQsRS5tYXAoYSxxZSksYz0wO2M8cztjKyspdT1hW2NdLGhlLnRlc3QodS50eXBlfHxcIlwiKSYmIVkuYWNjZXNzKHUsXCJnbG9iYWxFdmFsXCIpJiZFLmNvbnRhaW5zKGwsdSkmJih1LnNyYyYmXCJtb2R1bGVcIiE9PSh1LnR5cGV8fFwiXCIpLnRvTG93ZXJDYXNlKCk/RS5fZXZhbFVybCYmIXUubm9Nb2R1bGUmJkUuX2V2YWxVcmwodS5zcmMse25vbmNlOnUubm9uY2V8fHUuZ2V0QXR0cmlidXRlKFwibm9uY2VcIil9LGwpOmIodS50ZXh0Q29udGVudC5yZXBsYWNlKE5lLFwiXCIpLHUsbCkpfXJldHVybiBufWZ1bmN0aW9uIE9lKGUsdCxuKXtmb3IodmFyIHIsaT10P0UuZmlsdGVyKHQsZSk6ZSxvPTA7bnVsbCE9KHI9aVtvXSk7bysrKW58fDEhPT1yLm5vZGVUeXBlfHxFLmNsZWFuRGF0YSh5ZShyKSksci5wYXJlbnROb2RlJiYobiYmaWUocikmJnZlKHllKHIsXCJzY3JpcHRcIikpLHIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyKSk7cmV0dXJuIGV9RS5leHRlbmQoe2h0bWxQcmVmaWx0ZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGV9LGNsb25lOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYSxzLHUsbCxjPWUuY2xvbmVOb2RlKCEwKSxmPWllKGUpO2lmKCEodi5ub0Nsb25lQ2hlY2tlZHx8MSE9PWUubm9kZVR5cGUmJjExIT09ZS5ub2RlVHlwZXx8RS5pc1hNTERvYyhlKSkpZm9yKGE9eWUoYykscj0wLGk9KG89eWUoZSkpLmxlbmd0aDtyPGk7cisrKXM9b1tyXSx1PWFbcl0sdm9pZCAwLFwiaW5wdXRcIj09PShsPXUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkmJnBlLnRlc3Qocy50eXBlKT91LmNoZWNrZWQ9cy5jaGVja2VkOlwiaW5wdXRcIiE9PWwmJlwidGV4dGFyZWFcIiE9PWx8fCh1LmRlZmF1bHRWYWx1ZT1zLmRlZmF1bHRWYWx1ZSk7aWYodClpZihuKWZvcihvPW98fHllKGUpLGE9YXx8eWUoYykscj0wLGk9by5sZW5ndGg7cjxpO3IrKylMZShvW3JdLGFbcl0pO2Vsc2UgTGUoZSxjKTtyZXR1cm4gMDwoYT15ZShjLFwic2NyaXB0XCIpKS5sZW5ndGgmJnZlKGEsIWYmJnllKGUsXCJzY3JpcHRcIikpLGN9LGNsZWFuRGF0YTpmdW5jdGlvbihlKXtmb3IodmFyIHQsbixyLGk9RS5ldmVudC5zcGVjaWFsLG89MDt2b2lkIDAhPT0obj1lW29dKTtvKyspaWYoVihuKSl7aWYodD1uW1kuZXhwYW5kb10pe2lmKHQuZXZlbnRzKWZvcihyIGluIHQuZXZlbnRzKWlbcl0/RS5ldmVudC5yZW1vdmUobixyKTpFLnJlbW92ZUV2ZW50KG4scix0LmhhbmRsZSk7bltZLmV4cGFuZG9dPXZvaWQgMH1uW1EuZXhwYW5kb10mJihuW1EuZXhwYW5kb109dm9pZCAwKX19fSksRS5mbi5leHRlbmQoe2RldGFjaDpmdW5jdGlvbihlKXtyZXR1cm4gT2UodGhpcyxlLCEwKX0scmVtb3ZlOmZ1bmN0aW9uKGUpe3JldHVybiBPZSh0aGlzLGUpfSx0ZXh0OmZ1bmN0aW9uKGUpe3JldHVybiBCKHRoaXMsZnVuY3Rpb24oZSl7cmV0dXJuIHZvaWQgMD09PWU/RS50ZXh0KHRoaXMpOnRoaXMuZW1wdHkoKS5lYWNoKGZ1bmN0aW9uKCl7MSE9PXRoaXMubm9kZVR5cGUmJjExIT09dGhpcy5ub2RlVHlwZSYmOSE9PXRoaXMubm9kZVR5cGV8fCh0aGlzLnRleHRDb250ZW50PWUpfSl9LG51bGwsZSxhcmd1bWVudHMubGVuZ3RoKX0sYXBwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIEhlKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGUpezEhPT10aGlzLm5vZGVUeXBlJiYxMSE9PXRoaXMubm9kZVR5cGUmJjkhPT10aGlzLm5vZGVUeXBlfHxqZSh0aGlzLGUpLmFwcGVuZENoaWxkKGUpfSl9LHByZXBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gSGUodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7aWYoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpe3ZhciB0PWplKHRoaXMsZSk7dC5pbnNlcnRCZWZvcmUoZSx0LmZpcnN0Q2hpbGQpfX0pfSxiZWZvcmU6ZnVuY3Rpb24oKXtyZXR1cm4gSGUodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUsdGhpcyl9KX0sYWZ0ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gSGUodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUsdGhpcy5uZXh0U2libGluZyl9KX0sZW1wdHk6ZnVuY3Rpb24oKXtmb3IodmFyIGUsdD0wO251bGwhPShlPXRoaXNbdF0pO3QrKykxPT09ZS5ub2RlVHlwZSYmKEUuY2xlYW5EYXRhKHllKGUsITEpKSxlLnRleHRDb250ZW50PVwiXCIpO3JldHVybiB0aGlzfSxjbG9uZTpmdW5jdGlvbihlLHQpe3JldHVybiBlPW51bGwhPWUmJmUsdD1udWxsPT10P2U6dCx0aGlzLm1hcChmdW5jdGlvbigpe3JldHVybiBFLmNsb25lKHRoaXMsZSx0KX0pfSxodG1sOmZ1bmN0aW9uKGUpe3JldHVybiBCKHRoaXMsZnVuY3Rpb24oZSl7dmFyIHQ9dGhpc1swXXx8e30sbj0wLHI9dGhpcy5sZW5ndGg7aWYodm9pZCAwPT09ZSYmMT09PXQubm9kZVR5cGUpcmV0dXJuIHQuaW5uZXJIVE1MO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlJiYha2UudGVzdChlKSYmIWdlWyhkZS5leGVjKGUpfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKV0pe2U9RS5odG1sUHJlZmlsdGVyKGUpO3RyeXtmb3IoO248cjtuKyspMT09PSh0PXRoaXNbbl18fHt9KS5ub2RlVHlwZSYmKEUuY2xlYW5EYXRhKHllKHQsITEpKSx0LmlubmVySFRNTD1lKTt0PTB9Y2F0Y2goZSl7fX10JiZ0aGlzLmVtcHR5KCkuYXBwZW5kKGUpfSxudWxsLGUsYXJndW1lbnRzLmxlbmd0aCl9LHJlcGxhY2VXaXRoOmZ1bmN0aW9uKCl7dmFyIG49W107cmV0dXJuIEhlKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMucGFyZW50Tm9kZTtFLmluQXJyYXkodGhpcyxuKTwwJiYoRS5jbGVhbkRhdGEoeWUodGhpcykpLHQmJnQucmVwbGFjZUNoaWxkKGUsdGhpcykpfSxuKX19KSxFLmVhY2goe2FwcGVuZFRvOlwiYXBwZW5kXCIscHJlcGVuZFRvOlwicHJlcGVuZFwiLGluc2VydEJlZm9yZTpcImJlZm9yZVwiLGluc2VydEFmdGVyOlwiYWZ0ZXJcIixyZXBsYWNlQWxsOlwicmVwbGFjZVdpdGhcIn0sZnVuY3Rpb24oZSxhKXtFLmZuW2VdPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdCxuPVtdLHI9RShlKSxpPXIubGVuZ3RoLTEsbz0wO288PWk7bysrKXQ9bz09PWk/dGhpczp0aGlzLmNsb25lKCEwKSxFKHJbb10pW2FdKHQpLHUuYXBwbHkobix0LmdldCgpKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2sobil9fSk7dmFyIFBlPW5ldyBSZWdFeHAoXCJeKFwiK2VlK1wiKSg/IXB4KVthLXolXSskXCIsXCJpXCIpLFJlPS9eLS0vLE1lPWZ1bmN0aW9uKGUpe3ZhciB0PWUub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztyZXR1cm4gdCYmdC5vcGVuZXJ8fCh0PUMpLHQuZ2V0Q29tcHV0ZWRTdHlsZShlKX0sSWU9ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz17fTtmb3IoaSBpbiB0KW9baV09ZS5zdHlsZVtpXSxlLnN0eWxlW2ldPXRbaV07Zm9yKGkgaW4gcj1uLmNhbGwoZSksdCllLnN0eWxlW2ldPW9baV07cmV0dXJuIHJ9LFdlPW5ldyBSZWdFeHAobmUuam9pbihcInxcIiksXCJpXCIpLEZlPVwiW1xcXFx4MjBcXFxcdFxcXFxyXFxcXG5cXFxcZl1cIiwkZT1uZXcgUmVnRXhwKFwiXlwiK0ZlK1wiK3woKD86XnxbXlxcXFxcXFxcXSkoPzpcXFxcXFxcXC4pKilcIitGZStcIiskXCIsXCJnXCIpO2Z1bmN0aW9uIEJlKGUsdCxuKXt2YXIgcixpLG8sYSxzPVJlLnRlc3QodCksdT1lLnN0eWxlO3JldHVybihuPW58fE1lKGUpKSYmKGE9bi5nZXRQcm9wZXJ0eVZhbHVlKHQpfHxuW3RdLHMmJmEmJihhPWEucmVwbGFjZSgkZSxcIiQxXCIpfHx2b2lkIDApLFwiXCIhPT1hfHxpZShlKXx8KGE9RS5zdHlsZShlLHQpKSwhdi5waXhlbEJveFN0eWxlcygpJiZQZS50ZXN0KGEpJiZXZS50ZXN0KHQpJiYocj11LndpZHRoLGk9dS5taW5XaWR0aCxvPXUubWF4V2lkdGgsdS5taW5XaWR0aD11Lm1heFdpZHRoPXUud2lkdGg9YSxhPW4ud2lkdGgsdS53aWR0aD1yLHUubWluV2lkdGg9aSx1Lm1heFdpZHRoPW8pKSx2b2lkIDAhPT1hP2ErXCJcIjphfWZ1bmN0aW9uIF9lKGUsdCl7cmV0dXJue2dldDpmdW5jdGlvbigpe2lmKCFlKCkpcmV0dXJuKHRoaXMuZ2V0PXQpLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtkZWxldGUgdGhpcy5nZXR9fX0hZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7aWYobCl7dS5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246YWJzb2x1dGU7bGVmdDotMTExMTFweDt3aWR0aDo2MHB4O21hcmdpbi10b3A6MXB4O3BhZGRpbmc6MDtib3JkZXI6MFwiLGwuc3R5bGUuY3NzVGV4dD1cInBvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94O292ZXJmbG93OnNjcm9sbDttYXJnaW46YXV0bztib3JkZXI6MXB4O3BhZGRpbmc6MXB4O3dpZHRoOjYwJTt0b3A6MSVcIixyZS5hcHBlbmRDaGlsZCh1KS5hcHBlbmRDaGlsZChsKTt2YXIgZT1DLmdldENvbXB1dGVkU3R5bGUobCk7bj1cIjElXCIhPT1lLnRvcCxzPTEyPT09dChlLm1hcmdpbkxlZnQpLGwuc3R5bGUucmlnaHQ9XCI2MCVcIixvPTM2PT09dChlLnJpZ2h0KSxyPTM2PT09dChlLndpZHRoKSxsLnN0eWxlLnBvc2l0aW9uPVwiYWJzb2x1dGVcIixpPTEyPT09dChsLm9mZnNldFdpZHRoLzMpLHJlLnJlbW92ZUNoaWxkKHUpLGw9bnVsbH19ZnVuY3Rpb24gdChlKXtyZXR1cm4gTWF0aC5yb3VuZChwYXJzZUZsb2F0KGUpKX12YXIgbixyLGksbyxhLHMsdT1TLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksbD1TLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7bC5zdHlsZSYmKGwuc3R5bGUuYmFja2dyb3VuZENsaXA9XCJjb250ZW50LWJveFwiLGwuY2xvbmVOb2RlKCEwKS5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cIlwiLHYuY2xlYXJDbG9uZVN0eWxlPVwiY29udGVudC1ib3hcIj09PWwuc3R5bGUuYmFja2dyb3VuZENsaXAsRS5leHRlbmQodix7Ym94U2l6aW5nUmVsaWFibGU6ZnVuY3Rpb24oKXtyZXR1cm4gZSgpLHJ9LHBpeGVsQm94U3R5bGVzOmZ1bmN0aW9uKCl7cmV0dXJuIGUoKSxvfSxwaXhlbFBvc2l0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuIGUoKSxufSxyZWxpYWJsZU1hcmdpbkxlZnQ6ZnVuY3Rpb24oKXtyZXR1cm4gZSgpLHN9LHNjcm9sbGJveFNpemU6ZnVuY3Rpb24oKXtyZXR1cm4gZSgpLGl9LHJlbGlhYmxlVHJEaW1lbnNpb25zOmZ1bmN0aW9uKCl7dmFyIGUsdCxuLHI7cmV0dXJuIG51bGw9PWEmJihlPVMuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpLHQ9Uy5jcmVhdGVFbGVtZW50KFwidHJcIiksbj1TLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksZS5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246YWJzb2x1dGU7bGVmdDotMTExMTFweDtib3JkZXItY29sbGFwc2U6c2VwYXJhdGVcIix0LnN0eWxlLmNzc1RleHQ9XCJib3JkZXI6MXB4IHNvbGlkXCIsdC5zdHlsZS5oZWlnaHQ9XCIxcHhcIixuLnN0eWxlLmhlaWdodD1cIjlweFwiLG4uc3R5bGUuZGlzcGxheT1cImJsb2NrXCIscmUuYXBwZW5kQ2hpbGQoZSkuYXBwZW5kQ2hpbGQodCkuYXBwZW5kQ2hpbGQobikscj1DLmdldENvbXB1dGVkU3R5bGUodCksYT1wYXJzZUludChyLmhlaWdodCwxMCkrcGFyc2VJbnQoci5ib3JkZXJUb3BXaWR0aCwxMCkrcGFyc2VJbnQoci5ib3JkZXJCb3R0b21XaWR0aCwxMCk9PT10Lm9mZnNldEhlaWdodCxyZS5yZW1vdmVDaGlsZChlKSksYX19KSl9KCk7dmFyIHplPVtcIldlYmtpdFwiLFwiTW96XCIsXCJtc1wiXSxVZT1TLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikuc3R5bGUsWGU9e307ZnVuY3Rpb24gVmUoZSl7dmFyIHQ9RS5jc3NQcm9wc1tlXXx8WGVbZV07cmV0dXJuIHR8fChlIGluIFVlP2U6WGVbZV09ZnVuY3Rpb24oZSl7dmFyIHQ9ZVswXS50b1VwcGVyQ2FzZSgpK2Uuc2xpY2UoMSksbj16ZS5sZW5ndGg7d2hpbGUobi0tKWlmKChlPXplW25dK3QpaW4gVWUpcmV0dXJuIGV9KGUpfHxlKX12YXIgR2U9L14obm9uZXx0YWJsZSg/IS1jW2VhXSkuKykvLFllPXtwb3NpdGlvbjpcImFic29sdXRlXCIsdmlzaWJpbGl0eTpcImhpZGRlblwiLGRpc3BsYXk6XCJibG9ja1wifSxRZT17bGV0dGVyU3BhY2luZzpcIjBcIixmb250V2VpZ2h0OlwiNDAwXCJ9O2Z1bmN0aW9uIEplKGUsdCxuKXt2YXIgcj10ZS5leGVjKHQpO3JldHVybiByP01hdGgubWF4KDAsclsyXS0obnx8MCkpKyhyWzNdfHxcInB4XCIpOnR9ZnVuY3Rpb24gS2UoZSx0LG4scixpLG8pe3ZhciBhPVwid2lkdGhcIj09PXQ/MTowLHM9MCx1PTA7aWYobj09PShyP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpKXJldHVybiAwO2Zvcig7YTw0O2ErPTIpXCJtYXJnaW5cIj09PW4mJih1Kz1FLmNzcyhlLG4rbmVbYV0sITAsaSkpLHI/KFwiY29udGVudFwiPT09biYmKHUtPUUuY3NzKGUsXCJwYWRkaW5nXCIrbmVbYV0sITAsaSkpLFwibWFyZ2luXCIhPT1uJiYodS09RS5jc3MoZSxcImJvcmRlclwiK25lW2FdK1wiV2lkdGhcIiwhMCxpKSkpOih1Kz1FLmNzcyhlLFwicGFkZGluZ1wiK25lW2FdLCEwLGkpLFwicGFkZGluZ1wiIT09bj91Kz1FLmNzcyhlLFwiYm9yZGVyXCIrbmVbYV0rXCJXaWR0aFwiLCEwLGkpOnMrPUUuY3NzKGUsXCJib3JkZXJcIituZVthXStcIldpZHRoXCIsITAsaSkpO3JldHVybiFyJiYwPD1vJiYodSs9TWF0aC5tYXgoMCxNYXRoLmNlaWwoZVtcIm9mZnNldFwiK3RbMF0udG9VcHBlckNhc2UoKSt0LnNsaWNlKDEpXS1vLXUtcy0uNSkpfHwwKSx1fWZ1bmN0aW9uIFplKGUsdCxuKXt2YXIgcj1NZShlKSxpPSghdi5ib3hTaXppbmdSZWxpYWJsZSgpfHxuKSYmXCJib3JkZXItYm94XCI9PT1FLmNzcyhlLFwiYm94U2l6aW5nXCIsITEsciksbz1pLGE9QmUoZSx0LHIpLHM9XCJvZmZzZXRcIit0WzBdLnRvVXBwZXJDYXNlKCkrdC5zbGljZSgxKTtpZihQZS50ZXN0KGEpKXtpZighbilyZXR1cm4gYTthPVwiYXV0b1wifXJldHVybighdi5ib3hTaXppbmdSZWxpYWJsZSgpJiZpfHwhdi5yZWxpYWJsZVRyRGltZW5zaW9ucygpJiZBKGUsXCJ0clwiKXx8XCJhdXRvXCI9PT1hfHwhcGFyc2VGbG9hdChhKSYmXCJpbmxpbmVcIj09PUUuY3NzKGUsXCJkaXNwbGF5XCIsITEscikpJiZlLmdldENsaWVudFJlY3RzKCkubGVuZ3RoJiYoaT1cImJvcmRlci1ib3hcIj09PUUuY3NzKGUsXCJib3hTaXppbmdcIiwhMSxyKSwobz1zIGluIGUpJiYoYT1lW3NdKSksKGE9cGFyc2VGbG9hdChhKXx8MCkrS2UoZSx0LG58fChpP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpLG8scixhKStcInB4XCJ9ZnVuY3Rpb24gZXQoZSx0LG4scixpKXtyZXR1cm4gbmV3IGV0LnByb3RvdHlwZS5pbml0KGUsdCxuLHIsaSl9RS5leHRlbmQoe2Nzc0hvb2tzOntvcGFjaXR5OntnZXQ6ZnVuY3Rpb24oZSx0KXtpZih0KXt2YXIgbj1CZShlLFwib3BhY2l0eVwiKTtyZXR1cm5cIlwiPT09bj9cIjFcIjpufX19fSxjc3NOdW1iZXI6e2FuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiEwLGNvbHVtbkNvdW50OiEwLGZpbGxPcGFjaXR5OiEwLGZsZXhHcm93OiEwLGZsZXhTaHJpbms6ITAsZm9udFdlaWdodDohMCxncmlkQXJlYTohMCxncmlkQ29sdW1uOiEwLGdyaWRDb2x1bW5FbmQ6ITAsZ3JpZENvbHVtblN0YXJ0OiEwLGdyaWRSb3c6ITAsZ3JpZFJvd0VuZDohMCxncmlkUm93U3RhcnQ6ITAsbGluZUhlaWdodDohMCxvcGFjaXR5OiEwLG9yZGVyOiEwLG9ycGhhbnM6ITAsd2lkb3dzOiEwLHpJbmRleDohMCx6b29tOiEwfSxjc3NQcm9wczp7fSxzdHlsZTpmdW5jdGlvbihlLHQsbixyKXtpZihlJiYzIT09ZS5ub2RlVHlwZSYmOCE9PWUubm9kZVR5cGUmJmUuc3R5bGUpe3ZhciBpLG8sYSxzPVgodCksdT1SZS50ZXN0KHQpLGw9ZS5zdHlsZTtpZih1fHwodD1WZShzKSksYT1FLmNzc0hvb2tzW3RdfHxFLmNzc0hvb2tzW3NdLHZvaWQgMD09PW4pcmV0dXJuIGEmJlwiZ2V0XCJpbiBhJiZ2b2lkIDAhPT0oaT1hLmdldChlLCExLHIpKT9pOmxbdF07XCJzdHJpbmdcIj09PShvPXR5cGVvZiBuKSYmKGk9dGUuZXhlYyhuKSkmJmlbMV0mJihuPXNlKGUsdCxpKSxvPVwibnVtYmVyXCIpLG51bGwhPW4mJm49PW4mJihcIm51bWJlclwiIT09b3x8dXx8KG4rPWkmJmlbM118fChFLmNzc051bWJlcltzXT9cIlwiOlwicHhcIikpLHYuY2xlYXJDbG9uZVN0eWxlfHxcIlwiIT09bnx8MCE9PXQuaW5kZXhPZihcImJhY2tncm91bmRcIil8fChsW3RdPVwiaW5oZXJpdFwiKSxhJiZcInNldFwiaW4gYSYmdm9pZCAwPT09KG49YS5zZXQoZSxuLHIpKXx8KHU/bC5zZXRQcm9wZXJ0eSh0LG4pOmxbdF09bikpfX0sY3NzOmZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG8sYSxzPVgodCk7cmV0dXJuIFJlLnRlc3QodCl8fCh0PVZlKHMpKSwoYT1FLmNzc0hvb2tzW3RdfHxFLmNzc0hvb2tzW3NdKSYmXCJnZXRcImluIGEmJihpPWEuZ2V0KGUsITAsbikpLHZvaWQgMD09PWkmJihpPUJlKGUsdCxyKSksXCJub3JtYWxcIj09PWkmJnQgaW4gUWUmJihpPVFlW3RdKSxcIlwiPT09bnx8bj8obz1wYXJzZUZsb2F0KGkpLCEwPT09bnx8aXNGaW5pdGUobyk/b3x8MDppKTppfX0pLEUuZWFjaChbXCJoZWlnaHRcIixcIndpZHRoXCJdLGZ1bmN0aW9uKGUsdSl7RS5jc3NIb29rc1t1XT17Z2V0OmZ1bmN0aW9uKGUsdCxuKXtpZih0KXJldHVybiFHZS50ZXN0KEUuY3NzKGUsXCJkaXNwbGF5XCIpKXx8ZS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCYmZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aD9aZShlLHUsbik6SWUoZSxZZSxmdW5jdGlvbigpe3JldHVybiBaZShlLHUsbil9KX0sc2V0OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpPU1lKGUpLG89IXYuc2Nyb2xsYm94U2l6ZSgpJiZcImFic29sdXRlXCI9PT1pLnBvc2l0aW9uLGE9KG98fG4pJiZcImJvcmRlci1ib3hcIj09PUUuY3NzKGUsXCJib3hTaXppbmdcIiwhMSxpKSxzPW4/S2UoZSx1LG4sYSxpKTowO3JldHVybiBhJiZvJiYocy09TWF0aC5jZWlsKGVbXCJvZmZzZXRcIit1WzBdLnRvVXBwZXJDYXNlKCkrdS5zbGljZSgxKV0tcGFyc2VGbG9hdChpW3VdKS1LZShlLHUsXCJib3JkZXJcIiwhMSxpKS0uNSkpLHMmJihyPXRlLmV4ZWModCkpJiZcInB4XCIhPT0oclszXXx8XCJweFwiKSYmKGUuc3R5bGVbdV09dCx0PUUuY3NzKGUsdSkpLEplKDAsdCxzKX19fSksRS5jc3NIb29rcy5tYXJnaW5MZWZ0PV9lKHYucmVsaWFibGVNYXJnaW5MZWZ0LGZ1bmN0aW9uKGUsdCl7aWYodClyZXR1cm4ocGFyc2VGbG9hdChCZShlLFwibWFyZ2luTGVmdFwiKSl8fGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdC1JZShlLHttYXJnaW5MZWZ0OjB9LGZ1bmN0aW9uKCl7cmV0dXJuIGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdH0pKStcInB4XCJ9KSxFLmVhY2goe21hcmdpbjpcIlwiLHBhZGRpbmc6XCJcIixib3JkZXI6XCJXaWR0aFwifSxmdW5jdGlvbihpLG8pe0UuY3NzSG9va3NbaStvXT17ZXhwYW5kOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0wLG49e30scj1cInN0cmluZ1wiPT10eXBlb2YgZT9lLnNwbGl0KFwiIFwiKTpbZV07dDw0O3QrKyluW2krbmVbdF0rb109clt0XXx8clt0LTJdfHxyWzBdO3JldHVybiBufX0sXCJtYXJnaW5cIiE9PWkmJihFLmNzc0hvb2tzW2krb10uc2V0PUplKX0pLEUuZm4uZXh0ZW5kKHtjc3M6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gQih0aGlzLGZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG89e30sYT0wO2lmKEFycmF5LmlzQXJyYXkodCkpe2ZvcihyPU1lKGUpLGk9dC5sZW5ndGg7YTxpO2ErKylvW3RbYV1dPUUuY3NzKGUsdFthXSwhMSxyKTtyZXR1cm4gb31yZXR1cm4gdm9pZCAwIT09bj9FLnN0eWxlKGUsdCxuKTpFLmNzcyhlLHQpfSxlLHQsMTxhcmd1bWVudHMubGVuZ3RoKX19KSwoKEUuVHdlZW49ZXQpLnByb3RvdHlwZT17Y29uc3RydWN0b3I6ZXQsaW5pdDpmdW5jdGlvbihlLHQsbixyLGksbyl7dGhpcy5lbGVtPWUsdGhpcy5wcm9wPW4sdGhpcy5lYXNpbmc9aXx8RS5lYXNpbmcuX2RlZmF1bHQsdGhpcy5vcHRpb25zPXQsdGhpcy5zdGFydD10aGlzLm5vdz10aGlzLmN1cigpLHRoaXMuZW5kPXIsdGhpcy51bml0PW98fChFLmNzc051bWJlcltuXT9cIlwiOlwicHhcIil9LGN1cjpmdW5jdGlvbigpe3ZhciBlPWV0LnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiBlJiZlLmdldD9lLmdldCh0aGlzKTpldC5wcm9wSG9va3MuX2RlZmF1bHQuZ2V0KHRoaXMpfSxydW46ZnVuY3Rpb24oZSl7dmFyIHQsbj1ldC5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gdGhpcy5vcHRpb25zLmR1cmF0aW9uP3RoaXMucG9zPXQ9RS5lYXNpbmdbdGhpcy5lYXNpbmddKGUsdGhpcy5vcHRpb25zLmR1cmF0aW9uKmUsMCwxLHRoaXMub3B0aW9ucy5kdXJhdGlvbik6dGhpcy5wb3M9dD1lLHRoaXMubm93PSh0aGlzLmVuZC10aGlzLnN0YXJ0KSp0K3RoaXMuc3RhcnQsdGhpcy5vcHRpb25zLnN0ZXAmJnRoaXMub3B0aW9ucy5zdGVwLmNhbGwodGhpcy5lbGVtLHRoaXMubm93LHRoaXMpLG4mJm4uc2V0P24uc2V0KHRoaXMpOmV0LnByb3BIb29rcy5fZGVmYXVsdC5zZXQodGhpcyksdGhpc319KS5pbml0LnByb3RvdHlwZT1ldC5wcm90b3R5cGUsKGV0LnByb3BIb29rcz17X2RlZmF1bHQ6e2dldDpmdW5jdGlvbihlKXt2YXIgdDtyZXR1cm4gMSE9PWUuZWxlbS5ub2RlVHlwZXx8bnVsbCE9ZS5lbGVtW2UucHJvcF0mJm51bGw9PWUuZWxlbS5zdHlsZVtlLnByb3BdP2UuZWxlbVtlLnByb3BdOih0PUUuY3NzKGUuZWxlbSxlLnByb3AsXCJcIikpJiZcImF1dG9cIiE9PXQ/dDowfSxzZXQ6ZnVuY3Rpb24oZSl7RS5meC5zdGVwW2UucHJvcF0/RS5meC5zdGVwW2UucHJvcF0oZSk6MSE9PWUuZWxlbS5ub2RlVHlwZXx8IUUuY3NzSG9va3NbZS5wcm9wXSYmbnVsbD09ZS5lbGVtLnN0eWxlW1ZlKGUucHJvcCldP2UuZWxlbVtlLnByb3BdPWUubm93OkUuc3R5bGUoZS5lbGVtLGUucHJvcCxlLm5vdytlLnVuaXQpfX19KS5zY3JvbGxUb3A9ZXQucHJvcEhvb2tzLnNjcm9sbExlZnQ9e3NldDpmdW5jdGlvbihlKXtlLmVsZW0ubm9kZVR5cGUmJmUuZWxlbS5wYXJlbnROb2RlJiYoZS5lbGVtW2UucHJvcF09ZS5ub3cpfX0sRS5lYXNpbmc9e2xpbmVhcjpmdW5jdGlvbihlKXtyZXR1cm4gZX0sc3dpbmc6ZnVuY3Rpb24oZSl7cmV0dXJuLjUtTWF0aC5jb3MoZSpNYXRoLlBJKS8yfSxfZGVmYXVsdDpcInN3aW5nXCJ9LEUuZng9ZXQucHJvdG90eXBlLmluaXQsRS5meC5zdGVwPXt9O3ZhciB0dCxudCxydCxpdCxvdD0vXig/OnRvZ2dsZXxzaG93fGhpZGUpJC8sYXQ9L3F1ZXVlSG9va3MkLztmdW5jdGlvbiBzdCgpe250JiYoITE9PT1TLmhpZGRlbiYmQy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU/Qy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3QpOkMuc2V0VGltZW91dChzdCxFLmZ4LmludGVydmFsKSxFLmZ4LnRpY2soKSl9ZnVuY3Rpb24gdXQoKXtyZXR1cm4gQy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dHQ9dm9pZCAwfSksdHQ9RGF0ZS5ub3coKX1mdW5jdGlvbiBsdChlLHQpe3ZhciBuLHI9MCxpPXtoZWlnaHQ6ZX07Zm9yKHQ9dD8xOjA7cjw0O3IrPTItdClpW1wibWFyZ2luXCIrKG49bmVbcl0pXT1pW1wicGFkZGluZ1wiK25dPWU7cmV0dXJuIHQmJihpLm9wYWNpdHk9aS53aWR0aD1lKSxpfWZ1bmN0aW9uIGN0KGUsdCxuKXtmb3IodmFyIHIsaT0oZnQudHdlZW5lcnNbdF18fFtdKS5jb25jYXQoZnQudHdlZW5lcnNbXCIqXCJdKSxvPTAsYT1pLmxlbmd0aDtvPGE7bysrKWlmKHI9aVtvXS5jYWxsKG4sdCxlKSlyZXR1cm4gcn1mdW5jdGlvbiBmdChvLGUsdCl7dmFyIG4sYSxyPTAsaT1mdC5wcmVmaWx0ZXJzLmxlbmd0aCxzPUUuRGVmZXJyZWQoKS5hbHdheXMoZnVuY3Rpb24oKXtkZWxldGUgdS5lbGVtfSksdT1mdW5jdGlvbigpe2lmKGEpcmV0dXJuITE7Zm9yKHZhciBlPXR0fHx1dCgpLHQ9TWF0aC5tYXgoMCxsLnN0YXJ0VGltZStsLmR1cmF0aW9uLWUpLG49MS0odC9sLmR1cmF0aW9ufHwwKSxyPTAsaT1sLnR3ZWVucy5sZW5ndGg7cjxpO3IrKylsLnR3ZWVuc1tyXS5ydW4obik7cmV0dXJuIHMubm90aWZ5V2l0aChvLFtsLG4sdF0pLG48MSYmaT90OihpfHxzLm5vdGlmeVdpdGgobyxbbCwxLDBdKSxzLnJlc29sdmVXaXRoKG8sW2xdKSwhMSl9LGw9cy5wcm9taXNlKHtlbGVtOm8scHJvcHM6RS5leHRlbmQoe30sZSksb3B0czpFLmV4dGVuZCghMCx7c3BlY2lhbEVhc2luZzp7fSxlYXNpbmc6RS5lYXNpbmcuX2RlZmF1bHR9LHQpLG9yaWdpbmFsUHJvcGVydGllczplLG9yaWdpbmFsT3B0aW9uczp0LHN0YXJ0VGltZTp0dHx8dXQoKSxkdXJhdGlvbjp0LmR1cmF0aW9uLHR3ZWVuczpbXSxjcmVhdGVUd2VlbjpmdW5jdGlvbihlLHQpe3ZhciBuPUUuVHdlZW4obyxsLm9wdHMsZSx0LGwub3B0cy5zcGVjaWFsRWFzaW5nW2VdfHxsLm9wdHMuZWFzaW5nKTtyZXR1cm4gbC50d2VlbnMucHVzaChuKSxufSxzdG9wOmZ1bmN0aW9uKGUpe3ZhciB0PTAsbj1lP2wudHdlZW5zLmxlbmd0aDowO2lmKGEpcmV0dXJuIHRoaXM7Zm9yKGE9ITA7dDxuO3QrKylsLnR3ZWVuc1t0XS5ydW4oMSk7cmV0dXJuIGU/KHMubm90aWZ5V2l0aChvLFtsLDEsMF0pLHMucmVzb2x2ZVdpdGgobyxbbCxlXSkpOnMucmVqZWN0V2l0aChvLFtsLGVdKSx0aGlzfX0pLGM9bC5wcm9wcztmb3IoIWZ1bmN0aW9uKGUsdCl7dmFyIG4scixpLG8sYTtmb3IobiBpbiBlKWlmKGk9dFtyPVgobildLG89ZVtuXSxBcnJheS5pc0FycmF5KG8pJiYoaT1vWzFdLG89ZVtuXT1vWzBdKSxuIT09ciYmKGVbcl09byxkZWxldGUgZVtuXSksKGE9RS5jc3NIb29rc1tyXSkmJlwiZXhwYW5kXCJpbiBhKWZvcihuIGluIG89YS5leHBhbmQobyksZGVsZXRlIGVbcl0sbyluIGluIGV8fChlW25dPW9bbl0sdFtuXT1pKTtlbHNlIHRbcl09aX0oYyxsLm9wdHMuc3BlY2lhbEVhc2luZyk7cjxpO3IrKylpZihuPWZ0LnByZWZpbHRlcnNbcl0uY2FsbChsLG8sYyxsLm9wdHMpKXJldHVybiBtKG4uc3RvcCkmJihFLl9xdWV1ZUhvb2tzKGwuZWxlbSxsLm9wdHMucXVldWUpLnN0b3A9bi5zdG9wLmJpbmQobikpLG47cmV0dXJuIEUubWFwKGMsY3QsbCksbShsLm9wdHMuc3RhcnQpJiZsLm9wdHMuc3RhcnQuY2FsbChvLGwpLGwucHJvZ3Jlc3MobC5vcHRzLnByb2dyZXNzKS5kb25lKGwub3B0cy5kb25lLGwub3B0cy5jb21wbGV0ZSkuZmFpbChsLm9wdHMuZmFpbCkuYWx3YXlzKGwub3B0cy5hbHdheXMpLEUuZngudGltZXIoRS5leHRlbmQodSx7ZWxlbTpvLGFuaW06bCxxdWV1ZTpsLm9wdHMucXVldWV9KSksbH1FLkFuaW1hdGlvbj1FLmV4dGVuZChmdCx7dHdlZW5lcnM6e1wiKlwiOltmdW5jdGlvbihlLHQpe3ZhciBuPXRoaXMuY3JlYXRlVHdlZW4oZSx0KTtyZXR1cm4gc2Uobi5lbGVtLGUsdGUuZXhlYyh0KSxuKSxufV19LHR3ZWVuZXI6ZnVuY3Rpb24oZSx0KXttKGUpPyh0PWUsZT1bXCIqXCJdKTplPWUubWF0Y2goUCk7Zm9yKHZhciBuLHI9MCxpPWUubGVuZ3RoO3I8aTtyKyspbj1lW3JdLGZ0LnR3ZWVuZXJzW25dPWZ0LnR3ZWVuZXJzW25dfHxbXSxmdC50d2VlbmVyc1tuXS51bnNoaWZ0KHQpfSxwcmVmaWx0ZXJzOltmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGEscyx1LGwsYyxmPVwid2lkdGhcImluIHR8fFwiaGVpZ2h0XCJpbiB0LHA9dGhpcyxkPXt9LGg9ZS5zdHlsZSxnPWUubm9kZVR5cGUmJmFlKGUpLHk9WS5nZXQoZSxcImZ4c2hvd1wiKTtmb3IociBpbiBuLnF1ZXVlfHwobnVsbD09KGE9RS5fcXVldWVIb29rcyhlLFwiZnhcIikpLnVucXVldWVkJiYoYS51bnF1ZXVlZD0wLHM9YS5lbXB0eS5maXJlLGEuZW1wdHkuZmlyZT1mdW5jdGlvbigpe2EudW5xdWV1ZWR8fHMoKX0pLGEudW5xdWV1ZWQrKyxwLmFsd2F5cyhmdW5jdGlvbigpe3AuYWx3YXlzKGZ1bmN0aW9uKCl7YS51bnF1ZXVlZC0tLEUucXVldWUoZSxcImZ4XCIpLmxlbmd0aHx8YS5lbXB0eS5maXJlKCl9KX0pKSx0KWlmKGk9dFtyXSxvdC50ZXN0KGkpKXtpZihkZWxldGUgdFtyXSxvPW98fFwidG9nZ2xlXCI9PT1pLGk9PT0oZz9cImhpZGVcIjpcInNob3dcIikpe2lmKFwic2hvd1wiIT09aXx8IXl8fHZvaWQgMD09PXlbcl0pY29udGludWU7Zz0hMH1kW3JdPXkmJnlbcl18fEUuc3R5bGUoZSxyKX1pZigodT0hRS5pc0VtcHR5T2JqZWN0KHQpKXx8IUUuaXNFbXB0eU9iamVjdChkKSlmb3IociBpbiBmJiYxPT09ZS5ub2RlVHlwZSYmKG4ub3ZlcmZsb3c9W2gub3ZlcmZsb3csaC5vdmVyZmxvd1gsaC5vdmVyZmxvd1ldLG51bGw9PShsPXkmJnkuZGlzcGxheSkmJihsPVkuZ2V0KGUsXCJkaXNwbGF5XCIpKSxcIm5vbmVcIj09PShjPUUuY3NzKGUsXCJkaXNwbGF5XCIpKSYmKGw/Yz1sOihsZShbZV0sITApLGw9ZS5zdHlsZS5kaXNwbGF5fHxsLGM9RS5jc3MoZSxcImRpc3BsYXlcIiksbGUoW2VdKSkpLChcImlubGluZVwiPT09Y3x8XCJpbmxpbmUtYmxvY2tcIj09PWMmJm51bGwhPWwpJiZcIm5vbmVcIj09PUUuY3NzKGUsXCJmbG9hdFwiKSYmKHV8fChwLmRvbmUoZnVuY3Rpb24oKXtoLmRpc3BsYXk9bH0pLG51bGw9PWwmJihjPWguZGlzcGxheSxsPVwibm9uZVwiPT09Yz9cIlwiOmMpKSxoLmRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIikpLG4ub3ZlcmZsb3cmJihoLm92ZXJmbG93PVwiaGlkZGVuXCIscC5hbHdheXMoZnVuY3Rpb24oKXtoLm92ZXJmbG93PW4ub3ZlcmZsb3dbMF0saC5vdmVyZmxvd1g9bi5vdmVyZmxvd1sxXSxoLm92ZXJmbG93WT1uLm92ZXJmbG93WzJdfSkpLHU9ITEsZCl1fHwoeT9cImhpZGRlblwiaW4geSYmKGc9eS5oaWRkZW4pOnk9WS5hY2Nlc3MoZSxcImZ4c2hvd1wiLHtkaXNwbGF5Omx9KSxvJiYoeS5oaWRkZW49IWcpLGcmJmxlKFtlXSwhMCkscC5kb25lKGZ1bmN0aW9uKCl7Zm9yKHIgaW4gZ3x8bGUoW2VdKSxZLnJlbW92ZShlLFwiZnhzaG93XCIpLGQpRS5zdHlsZShlLHIsZFtyXSl9KSksdT1jdChnP3lbcl06MCxyLHApLHIgaW4geXx8KHlbcl09dS5zdGFydCxnJiYodS5lbmQ9dS5zdGFydCx1LnN0YXJ0PTApKX1dLHByZWZpbHRlcjpmdW5jdGlvbihlLHQpe3Q/ZnQucHJlZmlsdGVycy51bnNoaWZ0KGUpOmZ0LnByZWZpbHRlcnMucHVzaChlKX19KSxFLnNwZWVkPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1lJiZcIm9iamVjdFwiPT10eXBlb2YgZT9FLmV4dGVuZCh7fSxlKTp7Y29tcGxldGU6bnx8IW4mJnR8fG0oZSkmJmUsZHVyYXRpb246ZSxlYXNpbmc6biYmdHx8dCYmIW0odCkmJnR9O3JldHVybiBFLmZ4Lm9mZj9yLmR1cmF0aW9uPTA6XCJudW1iZXJcIiE9dHlwZW9mIHIuZHVyYXRpb24mJihyLmR1cmF0aW9uIGluIEUuZnguc3BlZWRzP3IuZHVyYXRpb249RS5meC5zcGVlZHNbci5kdXJhdGlvbl06ci5kdXJhdGlvbj1FLmZ4LnNwZWVkcy5fZGVmYXVsdCksbnVsbCE9ci5xdWV1ZSYmITAhPT1yLnF1ZXVlfHwoci5xdWV1ZT1cImZ4XCIpLHIub2xkPXIuY29tcGxldGUsci5jb21wbGV0ZT1mdW5jdGlvbigpe20oci5vbGQpJiZyLm9sZC5jYWxsKHRoaXMpLHIucXVldWUmJkUuZGVxdWV1ZSh0aGlzLHIucXVldWUpfSxyfSxFLmZuLmV4dGVuZCh7ZmFkZVRvOmZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiB0aGlzLmZpbHRlcihhZSkuY3NzKFwib3BhY2l0eVwiLDApLnNob3coKS5lbmQoKS5hbmltYXRlKHtvcGFjaXR5OnR9LGUsbixyKX0sYW5pbWF0ZTpmdW5jdGlvbih0LGUsbixyKXt2YXIgaT1FLmlzRW1wdHlPYmplY3QodCksbz1FLnNwZWVkKGUsbixyKSxhPWZ1bmN0aW9uKCl7dmFyIGU9ZnQodGhpcyxFLmV4dGVuZCh7fSx0KSxvKTsoaXx8WS5nZXQodGhpcyxcImZpbmlzaFwiKSkmJmUuc3RvcCghMCl9O3JldHVybiBhLmZpbmlzaD1hLGl8fCExPT09by5xdWV1ZT90aGlzLmVhY2goYSk6dGhpcy5xdWV1ZShvLnF1ZXVlLGEpfSxzdG9wOmZ1bmN0aW9uKGksZSxvKXt2YXIgYT1mdW5jdGlvbihlKXt2YXIgdD1lLnN0b3A7ZGVsZXRlIGUuc3RvcCx0KG8pfTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgaSYmKG89ZSxlPWksaT12b2lkIDApLGUmJnRoaXMucXVldWUoaXx8XCJmeFwiLFtdKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZT0hMCx0PW51bGwhPWkmJmkrXCJxdWV1ZUhvb2tzXCIsbj1FLnRpbWVycyxyPVkuZ2V0KHRoaXMpO2lmKHQpclt0XSYmclt0XS5zdG9wJiZhKHJbdF0pO2Vsc2UgZm9yKHQgaW4gcilyW3RdJiZyW3RdLnN0b3AmJmF0LnRlc3QodCkmJmEoclt0XSk7Zm9yKHQ9bi5sZW5ndGg7dC0tOyluW3RdLmVsZW0hPT10aGlzfHxudWxsIT1pJiZuW3RdLnF1ZXVlIT09aXx8KG5bdF0uYW5pbS5zdG9wKG8pLGU9ITEsbi5zcGxpY2UodCwxKSk7IWUmJm98fEUuZGVxdWV1ZSh0aGlzLGkpfSl9LGZpbmlzaDpmdW5jdGlvbihhKXtyZXR1cm4hMSE9PWEmJihhPWF8fFwiZnhcIiksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGUsdD1ZLmdldCh0aGlzKSxuPXRbYStcInF1ZXVlXCJdLHI9dFthK1wicXVldWVIb29rc1wiXSxpPUUudGltZXJzLG89bj9uLmxlbmd0aDowO2Zvcih0LmZpbmlzaD0hMCxFLnF1ZXVlKHRoaXMsYSxbXSksciYmci5zdG9wJiZyLnN0b3AuY2FsbCh0aGlzLCEwKSxlPWkubGVuZ3RoO2UtLTspaVtlXS5lbGVtPT09dGhpcyYmaVtlXS5xdWV1ZT09PWEmJihpW2VdLmFuaW0uc3RvcCghMCksaS5zcGxpY2UoZSwxKSk7Zm9yKGU9MDtlPG87ZSsrKW5bZV0mJm5bZV0uZmluaXNoJiZuW2VdLmZpbmlzaC5jYWxsKHRoaXMpO2RlbGV0ZSB0LmZpbmlzaH0pfX0pLEUuZWFjaChbXCJ0b2dnbGVcIixcInNob3dcIixcImhpZGVcIl0sZnVuY3Rpb24oZSxyKXt2YXIgaT1FLmZuW3JdO0UuZm5bcl09ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBudWxsPT1lfHxcImJvb2xlYW5cIj09dHlwZW9mIGU/aS5hcHBseSh0aGlzLGFyZ3VtZW50cyk6dGhpcy5hbmltYXRlKGx0KHIsITApLGUsdCxuKX19KSxFLmVhY2goe3NsaWRlRG93bjpsdChcInNob3dcIiksc2xpZGVVcDpsdChcImhpZGVcIiksc2xpZGVUb2dnbGU6bHQoXCJ0b2dnbGVcIiksZmFkZUluOntvcGFjaXR5Olwic2hvd1wifSxmYWRlT3V0OntvcGFjaXR5OlwiaGlkZVwifSxmYWRlVG9nZ2xlOntvcGFjaXR5OlwidG9nZ2xlXCJ9fSxmdW5jdGlvbihlLHIpe0UuZm5bZV09ZnVuY3Rpb24oZSx0LG4pe3JldHVybiB0aGlzLmFuaW1hdGUocixlLHQsbil9fSksRS50aW1lcnM9W10sRS5meC50aWNrPWZ1bmN0aW9uKCl7dmFyIGUsdD0wLG49RS50aW1lcnM7Zm9yKHR0PURhdGUubm93KCk7dDxuLmxlbmd0aDt0KyspKGU9blt0XSkoKXx8blt0XSE9PWV8fG4uc3BsaWNlKHQtLSwxKTtuLmxlbmd0aHx8RS5meC5zdG9wKCksdHQ9dm9pZCAwfSxFLmZ4LnRpbWVyPWZ1bmN0aW9uKGUpe0UudGltZXJzLnB1c2goZSksRS5meC5zdGFydCgpfSxFLmZ4LmludGVydmFsPTEzLEUuZnguc3RhcnQ9ZnVuY3Rpb24oKXtudHx8KG50PSEwLHN0KCkpfSxFLmZ4LnN0b3A9ZnVuY3Rpb24oKXtudD1udWxsfSxFLmZ4LnNwZWVkcz17c2xvdzo2MDAsZmFzdDoyMDAsX2RlZmF1bHQ6NDAwfSxFLmZuLmRlbGF5PWZ1bmN0aW9uKHIsZSl7cmV0dXJuIHI9RS5meCYmRS5meC5zcGVlZHNbcl18fHIsZT1lfHxcImZ4XCIsdGhpcy5xdWV1ZShlLGZ1bmN0aW9uKGUsdCl7dmFyIG49Qy5zZXRUaW1lb3V0KGUscik7dC5zdG9wPWZ1bmN0aW9uKCl7Qy5jbGVhclRpbWVvdXQobil9fSl9LHJ0PVMuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGl0PVMuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKS5hcHBlbmRDaGlsZChTLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIikpLHJ0LnR5cGU9XCJjaGVja2JveFwiLHYuY2hlY2tPbj1cIlwiIT09cnQudmFsdWUsdi5vcHRTZWxlY3RlZD1pdC5zZWxlY3RlZCwocnQ9Uy5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIikpLnZhbHVlPVwidFwiLHJ0LnR5cGU9XCJyYWRpb1wiLHYucmFkaW9WYWx1ZT1cInRcIj09PXJ0LnZhbHVlO3ZhciBwdCxkdD1FLmV4cHIuYXR0ckhhbmRsZTtFLmZuLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihlLHQpe3JldHVybiBCKHRoaXMsRS5hdHRyLGUsdCwxPGFyZ3VtZW50cy5sZW5ndGgpfSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtFLnJlbW92ZUF0dHIodGhpcyxlKX0pfX0pLEUuZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG89ZS5ub2RlVHlwZTtpZigzIT09byYmOCE9PW8mJjIhPT1vKXJldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiBlLmdldEF0dHJpYnV0ZT9FLnByb3AoZSx0LG4pOigxPT09byYmRS5pc1hNTERvYyhlKXx8KGk9RS5hdHRySG9va3NbdC50b0xvd2VyQ2FzZSgpXXx8KEUuZXhwci5tYXRjaC5ib29sLnRlc3QodCk/cHQ6dm9pZCAwKSksdm9pZCAwIT09bj9udWxsPT09bj92b2lkIEUucmVtb3ZlQXR0cihlLHQpOmkmJlwic2V0XCJpbiBpJiZ2b2lkIDAhPT0ocj1pLnNldChlLG4sdCkpP3I6KGUuc2V0QXR0cmlidXRlKHQsbitcIlwiKSxuKTppJiZcImdldFwiaW4gaSYmbnVsbCE9PShyPWkuZ2V0KGUsdCkpP3I6bnVsbD09KHI9RS5maW5kLmF0dHIoZSx0KSk/dm9pZCAwOnIpfSxhdHRySG9va3M6e3R5cGU6e3NldDpmdW5jdGlvbihlLHQpe2lmKCF2LnJhZGlvVmFsdWUmJlwicmFkaW9cIj09PXQmJkEoZSxcImlucHV0XCIpKXt2YXIgbj1lLnZhbHVlO3JldHVybiBlLnNldEF0dHJpYnV0ZShcInR5cGVcIix0KSxuJiYoZS52YWx1ZT1uKSx0fX19fSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj0wLGk9dCYmdC5tYXRjaChQKTtpZihpJiYxPT09ZS5ub2RlVHlwZSl3aGlsZShuPWlbcisrXSllLnJlbW92ZUF0dHJpYnV0ZShuKX19KSxwdD17c2V0OmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4hMT09PXQ/RS5yZW1vdmVBdHRyKGUsbik6ZS5zZXRBdHRyaWJ1dGUobixuKSxufX0sRS5lYWNoKEUuZXhwci5tYXRjaC5ib29sLnNvdXJjZS5tYXRjaCgvXFx3Ky9nKSxmdW5jdGlvbihlLHQpe3ZhciBhPWR0W3RdfHxFLmZpbmQuYXR0cjtkdFt0XT1mdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvPXQudG9Mb3dlckNhc2UoKTtyZXR1cm4gbnx8KGk9ZHRbb10sZHRbb109cixyPW51bGwhPWEoZSx0LG4pP286bnVsbCxkdFtvXT1pKSxyfX0pO3ZhciBodD0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLGd0PS9eKD86YXxhcmVhKSQvaTtmdW5jdGlvbiB5dChlKXtyZXR1cm4oZS5tYXRjaChQKXx8W10pLmpvaW4oXCIgXCIpfWZ1bmN0aW9uIHZ0KGUpe3JldHVybiBlLmdldEF0dHJpYnV0ZSYmZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIn1mdW5jdGlvbiBtdChlKXtyZXR1cm4gQXJyYXkuaXNBcnJheShlKT9lOlwic3RyaW5nXCI9PXR5cGVvZiBlJiZlLm1hdGNoKFApfHxbXX1FLmZuLmV4dGVuZCh7cHJvcDpmdW5jdGlvbihlLHQpe3JldHVybiBCKHRoaXMsRS5wcm9wLGUsdCwxPGFyZ3VtZW50cy5sZW5ndGgpfSxyZW1vdmVQcm9wOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtkZWxldGUgdGhpc1tFLnByb3BGaXhbZV18fGVdfSl9fSksRS5leHRlbmQoe3Byb3A6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz1lLm5vZGVUeXBlO2lmKDMhPT1vJiY4IT09byYmMiE9PW8pcmV0dXJuIDE9PT1vJiZFLmlzWE1MRG9jKGUpfHwodD1FLnByb3BGaXhbdF18fHQsaT1FLnByb3BIb29rc1t0XSksdm9pZCAwIT09bj9pJiZcInNldFwiaW4gaSYmdm9pZCAwIT09KHI9aS5zZXQoZSxuLHQpKT9yOmVbdF09bjppJiZcImdldFwiaW4gaSYmbnVsbCE9PShyPWkuZ2V0KGUsdCkpP3I6ZVt0XX0scHJvcEhvb2tzOnt0YWJJbmRleDp7Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0PUUuZmluZC5hdHRyKGUsXCJ0YWJpbmRleFwiKTtyZXR1cm4gdD9wYXJzZUludCh0LDEwKTpodC50ZXN0KGUubm9kZU5hbWUpfHxndC50ZXN0KGUubm9kZU5hbWUpJiZlLmhyZWY/MDotMX19fSxwcm9wRml4OntcImZvclwiOlwiaHRtbEZvclwiLFwiY2xhc3NcIjpcImNsYXNzTmFtZVwifX0pLHYub3B0U2VsZWN0ZWR8fChFLnByb3BIb29rcy5zZWxlY3RlZD17Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0PWUucGFyZW50Tm9kZTtyZXR1cm4gdCYmdC5wYXJlbnROb2RlJiZ0LnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCxudWxsfSxzZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5wYXJlbnROb2RlO3QmJih0LnNlbGVjdGVkSW5kZXgsdC5wYXJlbnROb2RlJiZ0LnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCl9fSksRS5lYWNoKFtcInRhYkluZGV4XCIsXCJyZWFkT25seVwiLFwibWF4TGVuZ3RoXCIsXCJjZWxsU3BhY2luZ1wiLFwiY2VsbFBhZGRpbmdcIixcInJvd1NwYW5cIixcImNvbFNwYW5cIixcInVzZU1hcFwiLFwiZnJhbWVCb3JkZXJcIixcImNvbnRlbnRFZGl0YWJsZVwiXSxmdW5jdGlvbigpe0UucHJvcEZpeFt0aGlzLnRvTG93ZXJDYXNlKCldPXRoaXN9KSxFLmZuLmV4dGVuZCh7YWRkQ2xhc3M6ZnVuY3Rpb24odCl7dmFyIGUsbixyLGksbyxhO3JldHVybiBtKHQpP3RoaXMuZWFjaChmdW5jdGlvbihlKXtFKHRoaXMpLmFkZENsYXNzKHQuY2FsbCh0aGlzLGUsdnQodGhpcykpKX0pOihlPW10KHQpKS5sZW5ndGg/dGhpcy5lYWNoKGZ1bmN0aW9uKCl7aWYocj12dCh0aGlzKSxuPTE9PT10aGlzLm5vZGVUeXBlJiZcIiBcIit5dChyKStcIiBcIil7Zm9yKG89MDtvPGUubGVuZ3RoO28rKylpPWVbb10sbi5pbmRleE9mKFwiIFwiK2krXCIgXCIpPDAmJihuKz1pK1wiIFwiKTthPXl0KG4pLHIhPT1hJiZ0aGlzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsYSl9fSk6dGhpc30scmVtb3ZlQ2xhc3M6ZnVuY3Rpb24odCl7dmFyIGUsbixyLGksbyxhO3JldHVybiBtKHQpP3RoaXMuZWFjaChmdW5jdGlvbihlKXtFKHRoaXMpLnJlbW92ZUNsYXNzKHQuY2FsbCh0aGlzLGUsdnQodGhpcykpKX0pOmFyZ3VtZW50cy5sZW5ndGg/KGU9bXQodCkpLmxlbmd0aD90aGlzLmVhY2goZnVuY3Rpb24oKXtpZihyPXZ0KHRoaXMpLG49MT09PXRoaXMubm9kZVR5cGUmJlwiIFwiK3l0KHIpK1wiIFwiKXtmb3Iobz0wO288ZS5sZW5ndGg7bysrKXtpPWVbb107d2hpbGUoLTE8bi5pbmRleE9mKFwiIFwiK2krXCIgXCIpKW49bi5yZXBsYWNlKFwiIFwiK2krXCIgXCIsXCIgXCIpfWE9eXQobiksciE9PWEmJnRoaXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixhKX19KTp0aGlzOnRoaXMuYXR0cihcImNsYXNzXCIsXCJcIil9LHRvZ2dsZUNsYXNzOmZ1bmN0aW9uKHQsbil7dmFyIGUscixpLG8sYT10eXBlb2YgdCxzPVwic3RyaW5nXCI9PT1hfHxBcnJheS5pc0FycmF5KHQpO3JldHVybiBtKHQpP3RoaXMuZWFjaChmdW5jdGlvbihlKXtFKHRoaXMpLnRvZ2dsZUNsYXNzKHQuY2FsbCh0aGlzLGUsdnQodGhpcyksbiksbil9KTpcImJvb2xlYW5cIj09dHlwZW9mIG4mJnM/bj90aGlzLmFkZENsYXNzKHQpOnRoaXMucmVtb3ZlQ2xhc3ModCk6KGU9bXQodCksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7aWYocylmb3Iobz1FKHRoaXMpLGk9MDtpPGUubGVuZ3RoO2krKylyPWVbaV0sby5oYXNDbGFzcyhyKT9vLnJlbW92ZUNsYXNzKHIpOm8uYWRkQ2xhc3Mocik7ZWxzZSB2b2lkIDAhPT10JiZcImJvb2xlYW5cIiE9PWF8fCgocj12dCh0aGlzKSkmJlkuc2V0KHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIsciksdGhpcy5zZXRBdHRyaWJ1dGUmJnRoaXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixyfHwhMT09PXQ/XCJcIjpZLmdldCh0aGlzLFwiX19jbGFzc05hbWVfX1wiKXx8XCJcIikpfSkpfSxoYXNDbGFzczpmdW5jdGlvbihlKXt2YXIgdCxuLHI9MDt0PVwiIFwiK2UrXCIgXCI7d2hpbGUobj10aGlzW3IrK10paWYoMT09PW4ubm9kZVR5cGUmJi0xPChcIiBcIit5dCh2dChuKSkrXCIgXCIpLmluZGV4T2YodCkpcmV0dXJuITA7cmV0dXJuITF9fSk7dmFyIHh0PS9cXHIvZztFLmZuLmV4dGVuZCh7dmFsOmZ1bmN0aW9uKG4pe3ZhciByLGUsaSx0PXRoaXNbMF07cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/KGk9bShuKSx0aGlzLmVhY2goZnVuY3Rpb24oZSl7dmFyIHQ7MT09PXRoaXMubm9kZVR5cGUmJihudWxsPT0odD1pP24uY2FsbCh0aGlzLGUsRSh0aGlzKS52YWwoKSk6bik/dD1cIlwiOlwibnVtYmVyXCI9PXR5cGVvZiB0P3QrPVwiXCI6QXJyYXkuaXNBcnJheSh0KSYmKHQ9RS5tYXAodCxmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT9cIlwiOmUrXCJcIn0pKSwocj1FLnZhbEhvb2tzW3RoaXMudHlwZV18fEUudmFsSG9va3NbdGhpcy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSkmJlwic2V0XCJpbiByJiZ2b2lkIDAhPT1yLnNldCh0aGlzLHQsXCJ2YWx1ZVwiKXx8KHRoaXMudmFsdWU9dCkpfSkpOnQ/KHI9RS52YWxIb29rc1t0LnR5cGVdfHxFLnZhbEhvb2tzW3Qubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0pJiZcImdldFwiaW4gciYmdm9pZCAwIT09KGU9ci5nZXQodCxcInZhbHVlXCIpKT9lOlwic3RyaW5nXCI9PXR5cGVvZihlPXQudmFsdWUpP2UucmVwbGFjZSh4dCxcIlwiKTpudWxsPT1lP1wiXCI6ZTp2b2lkIDB9fSksRS5leHRlbmQoe3ZhbEhvb2tzOntvcHRpb246e2dldDpmdW5jdGlvbihlKXt2YXIgdD1FLmZpbmQuYXR0cihlLFwidmFsdWVcIik7cmV0dXJuIG51bGwhPXQ/dDp5dChFLnRleHQoZSkpfX0sc2VsZWN0OntnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQsbixyLGk9ZS5vcHRpb25zLG89ZS5zZWxlY3RlZEluZGV4LGE9XCJzZWxlY3Qtb25lXCI9PT1lLnR5cGUscz1hP251bGw6W10sdT1hP28rMTppLmxlbmd0aDtmb3Iocj1vPDA/dTphP286MDtyPHU7cisrKWlmKCgobj1pW3JdKS5zZWxlY3RlZHx8cj09PW8pJiYhbi5kaXNhYmxlZCYmKCFuLnBhcmVudE5vZGUuZGlzYWJsZWR8fCFBKG4ucGFyZW50Tm9kZSxcIm9wdGdyb3VwXCIpKSl7aWYodD1FKG4pLnZhbCgpLGEpcmV0dXJuIHQ7cy5wdXNoKHQpfXJldHVybiBzfSxzZXQ6ZnVuY3Rpb24oZSx0KXt2YXIgbixyLGk9ZS5vcHRpb25zLG89RS5tYWtlQXJyYXkodCksYT1pLmxlbmd0aDt3aGlsZShhLS0pKChyPWlbYV0pLnNlbGVjdGVkPS0xPEUuaW5BcnJheShFLnZhbEhvb2tzLm9wdGlvbi5nZXQociksbykpJiYobj0hMCk7cmV0dXJuIG58fChlLnNlbGVjdGVkSW5kZXg9LTEpLG99fX19KSxFLmVhY2goW1wicmFkaW9cIixcImNoZWNrYm94XCJdLGZ1bmN0aW9uKCl7RS52YWxIb29rc1t0aGlzXT17c2V0OmZ1bmN0aW9uKGUsdCl7aWYoQXJyYXkuaXNBcnJheSh0KSlyZXR1cm4gZS5jaGVja2VkPS0xPEUuaW5BcnJheShFKGUpLnZhbCgpLHQpfX0sdi5jaGVja09ufHwoRS52YWxIb29rc1t0aGlzXS5nZXQ9ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PT1lLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpP1wib25cIjplLnZhbHVlfSl9KSx2LmZvY3VzaW49XCJvbmZvY3VzaW5cImluIEM7dmFyIGJ0PS9eKD86Zm9jdXNpbmZvY3VzfGZvY3Vzb3V0Ymx1cikkLyx3dD1mdW5jdGlvbihlKXtlLnN0b3BQcm9wYWdhdGlvbigpfTtFLmV4dGVuZChFLmV2ZW50LHt0cmlnZ2VyOmZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG8sYSxzLHUsbCxjLGYscD1bbnx8U10sZD15LmNhbGwoZSxcInR5cGVcIik/ZS50eXBlOmUsaD15LmNhbGwoZSxcIm5hbWVzcGFjZVwiKT9lLm5hbWVzcGFjZS5zcGxpdChcIi5cIik6W107aWYobz1mPWE9bj1ufHxTLDMhPT1uLm5vZGVUeXBlJiY4IT09bi5ub2RlVHlwZSYmIWJ0LnRlc3QoZCtFLmV2ZW50LnRyaWdnZXJlZCkmJigtMTxkLmluZGV4T2YoXCIuXCIpJiYoZD0oaD1kLnNwbGl0KFwiLlwiKSkuc2hpZnQoKSxoLnNvcnQoKSksdT1kLmluZGV4T2YoXCI6XCIpPDAmJlwib25cIitkLChlPWVbRS5leHBhbmRvXT9lOm5ldyBFLkV2ZW50KGQsXCJvYmplY3RcIj09dHlwZW9mIGUmJmUpKS5pc1RyaWdnZXI9cj8yOjMsZS5uYW1lc3BhY2U9aC5qb2luKFwiLlwiKSxlLnJuYW1lc3BhY2U9ZS5uYW1lc3BhY2U/bmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK2guam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpOm51bGwsZS5yZXN1bHQ9dm9pZCAwLGUudGFyZ2V0fHwoZS50YXJnZXQ9biksdD1udWxsPT10P1tlXTpFLm1ha2VBcnJheSh0LFtlXSksYz1FLmV2ZW50LnNwZWNpYWxbZF18fHt9LHJ8fCFjLnRyaWdnZXJ8fCExIT09Yy50cmlnZ2VyLmFwcGx5KG4sdCkpKXtpZighciYmIWMubm9CdWJibGUmJiF4KG4pKXtmb3Iocz1jLmRlbGVnYXRlVHlwZXx8ZCxidC50ZXN0KHMrZCl8fChvPW8ucGFyZW50Tm9kZSk7bztvPW8ucGFyZW50Tm9kZSlwLnB1c2gobyksYT1vO2E9PT0obi5vd25lckRvY3VtZW50fHxTKSYmcC5wdXNoKGEuZGVmYXVsdFZpZXd8fGEucGFyZW50V2luZG93fHxDKX1pPTA7d2hpbGUoKG89cFtpKytdKSYmIWUuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSlmPW8sZS50eXBlPTE8aT9zOmMuYmluZFR5cGV8fGQsKGw9KFkuZ2V0KG8sXCJldmVudHNcIil8fE9iamVjdC5jcmVhdGUobnVsbCkpW2UudHlwZV0mJlkuZ2V0KG8sXCJoYW5kbGVcIikpJiZsLmFwcGx5KG8sdCksKGw9dSYmb1t1XSkmJmwuYXBwbHkmJlYobykmJihlLnJlc3VsdD1sLmFwcGx5KG8sdCksITE9PT1lLnJlc3VsdCYmZS5wcmV2ZW50RGVmYXVsdCgpKTtyZXR1cm4gZS50eXBlPWQscnx8ZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKXx8Yy5fZGVmYXVsdCYmITEhPT1jLl9kZWZhdWx0LmFwcGx5KHAucG9wKCksdCl8fCFWKG4pfHx1JiZtKG5bZF0pJiYheChuKSYmKChhPW5bdV0pJiYoblt1XT1udWxsKSxFLmV2ZW50LnRyaWdnZXJlZD1kLGUuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSYmZi5hZGRFdmVudExpc3RlbmVyKGQsd3QpLG5bZF0oKSxlLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkmJmYucmVtb3ZlRXZlbnRMaXN0ZW5lcihkLHd0KSxFLmV2ZW50LnRyaWdnZXJlZD12b2lkIDAsYSYmKG5bdV09YSkpLGUucmVzdWx0fX0sc2ltdWxhdGU6ZnVuY3Rpb24oZSx0LG4pe3ZhciByPUUuZXh0ZW5kKG5ldyBFLkV2ZW50LG4se3R5cGU6ZSxpc1NpbXVsYXRlZDohMH0pO0UuZXZlbnQudHJpZ2dlcihyLG51bGwsdCl9fSksRS5mbi5leHRlbmQoe3RyaWdnZXI6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7RS5ldmVudC50cmlnZ2VyKGUsdCx0aGlzKX0pfSx0cmlnZ2VySGFuZGxlcjpmdW5jdGlvbihlLHQpe3ZhciBuPXRoaXNbMF07aWYobilyZXR1cm4gRS5ldmVudC50cmlnZ2VyKGUsdCxuLCEwKX19KSx2LmZvY3VzaW58fEUuZWFjaCh7Zm9jdXM6XCJmb2N1c2luXCIsYmx1cjpcImZvY3Vzb3V0XCJ9LGZ1bmN0aW9uKG4scil7dmFyIGk9ZnVuY3Rpb24oZSl7RS5ldmVudC5zaW11bGF0ZShyLGUudGFyZ2V0LEUuZXZlbnQuZml4KGUpKX07RS5ldmVudC5zcGVjaWFsW3JdPXtzZXR1cDpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcy5kb2N1bWVudHx8dGhpcyx0PVkuYWNjZXNzKGUscik7dHx8ZS5hZGRFdmVudExpc3RlbmVyKG4saSwhMCksWS5hY2Nlc3MoZSxyLCh0fHwwKSsxKX0sdGVhcmRvd246ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMuZG9jdW1lbnR8fHRoaXMsdD1ZLmFjY2VzcyhlLHIpLTE7dD9ZLmFjY2VzcyhlLHIsdCk6KGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihuLGksITApLFkucmVtb3ZlKGUscikpfX19KTt2YXIgVHQ9Qy5sb2NhdGlvbixDdD17Z3VpZDpEYXRlLm5vdygpfSxTdD0vXFw/LztFLnBhcnNlWE1MPWZ1bmN0aW9uKGUpe3ZhciB0LG47aWYoIWV8fFwic3RyaW5nXCIhPXR5cGVvZiBlKXJldHVybiBudWxsO3RyeXt0PShuZXcgQy5ET01QYXJzZXIpLnBhcnNlRnJvbVN0cmluZyhlLFwidGV4dC94bWxcIil9Y2F0Y2goZSl7fXJldHVybiBuPXQmJnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwYXJzZXJlcnJvclwiKVswXSx0JiYhbnx8RS5lcnJvcihcIkludmFsaWQgWE1MOiBcIisobj9FLm1hcChuLmNoaWxkTm9kZXMsZnVuY3Rpb24oZSl7cmV0dXJuIGUudGV4dENvbnRlbnR9KS5qb2luKFwiXFxuXCIpOmUpKSx0fTt2YXIgRXQ9L1xcW1xcXSQvLGt0PS9cXHI/XFxuL2csQXQ9L14oPzpzdWJtaXR8YnV0dG9ufGltYWdlfHJlc2V0fGZpbGUpJC9pLE50PS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGtleWdlbikvaTtmdW5jdGlvbiBqdChuLGUscixpKXt2YXIgdDtpZihBcnJheS5pc0FycmF5KGUpKUUuZWFjaChlLGZ1bmN0aW9uKGUsdCl7cnx8RXQudGVzdChuKT9pKG4sdCk6anQobitcIltcIisoXCJvYmplY3RcIj09dHlwZW9mIHQmJm51bGwhPXQ/ZTpcIlwiKStcIl1cIix0LHIsaSl9KTtlbHNlIGlmKHJ8fFwib2JqZWN0XCIhPT13KGUpKWkobixlKTtlbHNlIGZvcih0IGluIGUpanQobitcIltcIit0K1wiXVwiLGVbdF0scixpKX1FLnBhcmFtPWZ1bmN0aW9uKGUsdCl7dmFyIG4scj1bXSxpPWZ1bmN0aW9uKGUsdCl7dmFyIG49bSh0KT90KCk6dDtyW3IubGVuZ3RoXT1lbmNvZGVVUklDb21wb25lbnQoZSkrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG51bGw9PW4/XCJcIjpuKX07aWYobnVsbD09ZSlyZXR1cm5cIlwiO2lmKEFycmF5LmlzQXJyYXkoZSl8fGUuanF1ZXJ5JiYhRS5pc1BsYWluT2JqZWN0KGUpKUUuZWFjaChlLGZ1bmN0aW9uKCl7aSh0aGlzLm5hbWUsdGhpcy52YWx1ZSl9KTtlbHNlIGZvcihuIGluIGUpanQobixlW25dLHQsaSk7cmV0dXJuIHIuam9pbihcIiZcIil9LEUuZm4uZXh0ZW5kKHtzZXJpYWxpemU6ZnVuY3Rpb24oKXtyZXR1cm4gRS5wYXJhbSh0aGlzLnNlcmlhbGl6ZUFycmF5KCkpfSxzZXJpYWxpemVBcnJheTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBlPUUucHJvcCh0aGlzLFwiZWxlbWVudHNcIik7cmV0dXJuIGU/RS5tYWtlQXJyYXkoZSk6dGhpc30pLmZpbHRlcihmdW5jdGlvbigpe3ZhciBlPXRoaXMudHlwZTtyZXR1cm4gdGhpcy5uYW1lJiYhRSh0aGlzKS5pcyhcIjpkaXNhYmxlZFwiKSYmTnQudGVzdCh0aGlzLm5vZGVOYW1lKSYmIUF0LnRlc3QoZSkmJih0aGlzLmNoZWNrZWR8fCFwZS50ZXN0KGUpKX0pLm1hcChmdW5jdGlvbihlLHQpe3ZhciBuPUUodGhpcykudmFsKCk7cmV0dXJuIG51bGw9PW4/bnVsbDpBcnJheS5pc0FycmF5KG4pP0UubWFwKG4sZnVuY3Rpb24oZSl7cmV0dXJue25hbWU6dC5uYW1lLHZhbHVlOmUucmVwbGFjZShrdCxcIlxcclxcblwiKX19KTp7bmFtZTp0Lm5hbWUsdmFsdWU6bi5yZXBsYWNlKGt0LFwiXFxyXFxuXCIpfX0pLmdldCgpfX0pO3ZhciBEdD0vJTIwL2cscXQ9LyMuKiQvLEx0PS8oWz8mXSlfPVteJl0qLyxIdD0vXiguKj8pOlsgXFx0XSooW15cXHJcXG5dKikkL2dtLE90PS9eKD86R0VUfEhFQUQpJC8sUHQ9L15cXC9cXC8vLFJ0PXt9LE10PXt9LEl0PVwiKi9cIi5jb25jYXQoXCIqXCIpLFd0PVMuY3JlYXRlRWxlbWVudChcImFcIik7ZnVuY3Rpb24gRnQobyl7cmV0dXJuIGZ1bmN0aW9uKGUsdCl7XCJzdHJpbmdcIiE9dHlwZW9mIGUmJih0PWUsZT1cIipcIik7dmFyIG4scj0wLGk9ZS50b0xvd2VyQ2FzZSgpLm1hdGNoKFApfHxbXTtpZihtKHQpKXdoaWxlKG49aVtyKytdKVwiK1wiPT09blswXT8obj1uLnNsaWNlKDEpfHxcIipcIiwob1tuXT1vW25dfHxbXSkudW5zaGlmdCh0KSk6KG9bbl09b1tuXXx8W10pLnB1c2godCl9fWZ1bmN0aW9uICR0KHQsaSxvLGEpe3ZhciBzPXt9LHU9dD09PU10O2Z1bmN0aW9uIGwoZSl7dmFyIHI7cmV0dXJuIHNbZV09ITAsRS5lYWNoKHRbZV18fFtdLGZ1bmN0aW9uKGUsdCl7dmFyIG49dChpLG8sYSk7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIG58fHV8fHNbbl0/dT8hKHI9bik6dm9pZCAwOihpLmRhdGFUeXBlcy51bnNoaWZ0KG4pLGwobiksITEpfSkscn1yZXR1cm4gbChpLmRhdGFUeXBlc1swXSl8fCFzW1wiKlwiXSYmbChcIipcIil9ZnVuY3Rpb24gQnQoZSx0KXt2YXIgbixyLGk9RS5hamF4U2V0dGluZ3MuZmxhdE9wdGlvbnN8fHt9O2ZvcihuIGluIHQpdm9pZCAwIT09dFtuXSYmKChpW25dP2U6cnx8KHI9e30pKVtuXT10W25dKTtyZXR1cm4gciYmRS5leHRlbmQoITAsZSxyKSxlfVd0LmhyZWY9VHQuaHJlZixFLmV4dGVuZCh7YWN0aXZlOjAsbGFzdE1vZGlmaWVkOnt9LGV0YWc6e30sYWpheFNldHRpbmdzOnt1cmw6VHQuaHJlZix0eXBlOlwiR0VUXCIsaXNMb2NhbDovXig/OmFib3V0fGFwcHxhcHAtc3RvcmFnZXwuKy1leHRlbnNpb258ZmlsZXxyZXN8d2lkZ2V0KTokLy50ZXN0KFR0LnByb3RvY29sKSxnbG9iYWw6ITAscHJvY2Vzc0RhdGE6ITAsYXN5bmM6ITAsY29udGVudFR5cGU6XCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLThcIixhY2NlcHRzOntcIipcIjpJdCx0ZXh0OlwidGV4dC9wbGFpblwiLGh0bWw6XCJ0ZXh0L2h0bWxcIix4bWw6XCJhcHBsaWNhdGlvbi94bWwsIHRleHQveG1sXCIsanNvbjpcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdFwifSxjb250ZW50czp7eG1sOi9cXGJ4bWxcXGIvLGh0bWw6L1xcYmh0bWwvLGpzb246L1xcYmpzb25cXGIvfSxyZXNwb25zZUZpZWxkczp7eG1sOlwicmVzcG9uc2VYTUxcIix0ZXh0OlwicmVzcG9uc2VUZXh0XCIsanNvbjpcInJlc3BvbnNlSlNPTlwifSxjb252ZXJ0ZXJzOntcIiogdGV4dFwiOlN0cmluZyxcInRleHQgaHRtbFwiOiEwLFwidGV4dCBqc29uXCI6SlNPTi5wYXJzZSxcInRleHQgeG1sXCI6RS5wYXJzZVhNTH0sZmxhdE9wdGlvbnM6e3VybDohMCxjb250ZXh0OiEwfX0sYWpheFNldHVwOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQ/QnQoQnQoZSxFLmFqYXhTZXR0aW5ncyksdCk6QnQoRS5hamF4U2V0dGluZ3MsZSl9LGFqYXhQcmVmaWx0ZXI6RnQoUnQpLGFqYXhUcmFuc3BvcnQ6RnQoTXQpLGFqYXg6ZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZSYmKHQ9ZSxlPXZvaWQgMCksdD10fHx7fTt2YXIgYyxmLHAsbixkLHIsaCxnLGksbyx5PUUuYWpheFNldHVwKHt9LHQpLHY9eS5jb250ZXh0fHx5LG09eS5jb250ZXh0JiYodi5ub2RlVHlwZXx8di5qcXVlcnkpP0Uodik6RS5ldmVudCx4PUUuRGVmZXJyZWQoKSxiPUUuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksdz15LnN0YXR1c0NvZGV8fHt9LGE9e30scz17fSx1PVwiY2FuY2VsZWRcIixUPXtyZWFkeVN0YXRlOjAsZ2V0UmVzcG9uc2VIZWFkZXI6ZnVuY3Rpb24oZSl7dmFyIHQ7aWYoaCl7aWYoIW4pe249e307d2hpbGUodD1IdC5leGVjKHApKW5bdFsxXS50b0xvd2VyQ2FzZSgpK1wiIFwiXT0oblt0WzFdLnRvTG93ZXJDYXNlKCkrXCIgXCJdfHxbXSkuY29uY2F0KHRbMl0pfXQ9bltlLnRvTG93ZXJDYXNlKCkrXCIgXCJdfXJldHVybiBudWxsPT10P251bGw6dC5qb2luKFwiLCBcIil9LGdldEFsbFJlc3BvbnNlSGVhZGVyczpmdW5jdGlvbigpe3JldHVybiBoP3A6bnVsbH0sc2V0UmVxdWVzdEhlYWRlcjpmdW5jdGlvbihlLHQpe3JldHVybiBudWxsPT1oJiYoZT1zW2UudG9Mb3dlckNhc2UoKV09c1tlLnRvTG93ZXJDYXNlKCldfHxlLGFbZV09dCksdGhpc30sb3ZlcnJpZGVNaW1lVHlwZTpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09aCYmKHkubWltZVR5cGU9ZSksdGhpc30sc3RhdHVzQ29kZTpmdW5jdGlvbihlKXt2YXIgdDtpZihlKWlmKGgpVC5hbHdheXMoZVtULnN0YXR1c10pO2Vsc2UgZm9yKHQgaW4gZSl3W3RdPVt3W3RdLGVbdF1dO3JldHVybiB0aGlzfSxhYm9ydDpmdW5jdGlvbihlKXt2YXIgdD1lfHx1O3JldHVybiBjJiZjLmFib3J0KHQpLGwoMCx0KSx0aGlzfX07aWYoeC5wcm9taXNlKFQpLHkudXJsPSgoZXx8eS51cmx8fFR0LmhyZWYpK1wiXCIpLnJlcGxhY2UoUHQsVHQucHJvdG9jb2wrXCIvL1wiKSx5LnR5cGU9dC5tZXRob2R8fHQudHlwZXx8eS5tZXRob2R8fHkudHlwZSx5LmRhdGFUeXBlcz0oeS5kYXRhVHlwZXx8XCIqXCIpLnRvTG93ZXJDYXNlKCkubWF0Y2goUCl8fFtcIlwiXSxudWxsPT15LmNyb3NzRG9tYWluKXtyPVMuY3JlYXRlRWxlbWVudChcImFcIik7dHJ5e3IuaHJlZj15LnVybCxyLmhyZWY9ci5ocmVmLHkuY3Jvc3NEb21haW49V3QucHJvdG9jb2wrXCIvL1wiK1d0Lmhvc3QhPXIucHJvdG9jb2wrXCIvL1wiK3IuaG9zdH1jYXRjaChlKXt5LmNyb3NzRG9tYWluPSEwfX1pZih5LmRhdGEmJnkucHJvY2Vzc0RhdGEmJlwic3RyaW5nXCIhPXR5cGVvZiB5LmRhdGEmJih5LmRhdGE9RS5wYXJhbSh5LmRhdGEseS50cmFkaXRpb25hbCkpLCR0KFJ0LHksdCxUKSxoKXJldHVybiBUO2ZvcihpIGluKGc9RS5ldmVudCYmeS5nbG9iYWwpJiYwPT1FLmFjdGl2ZSsrJiZFLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RhcnRcIikseS50eXBlPXkudHlwZS50b1VwcGVyQ2FzZSgpLHkuaGFzQ29udGVudD0hT3QudGVzdCh5LnR5cGUpLGY9eS51cmwucmVwbGFjZShxdCxcIlwiKSx5Lmhhc0NvbnRlbnQ/eS5kYXRhJiZ5LnByb2Nlc3NEYXRhJiYwPT09KHkuY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJih5LmRhdGE9eS5kYXRhLnJlcGxhY2UoRHQsXCIrXCIpKToobz15LnVybC5zbGljZShmLmxlbmd0aCkseS5kYXRhJiYoeS5wcm9jZXNzRGF0YXx8XCJzdHJpbmdcIj09dHlwZW9mIHkuZGF0YSkmJihmKz0oU3QudGVzdChmKT9cIiZcIjpcIj9cIikreS5kYXRhLGRlbGV0ZSB5LmRhdGEpLCExPT09eS5jYWNoZSYmKGY9Zi5yZXBsYWNlKEx0LFwiJDFcIiksbz0oU3QudGVzdChmKT9cIiZcIjpcIj9cIikrXCJfPVwiK0N0Lmd1aWQrKytvKSx5LnVybD1mK28pLHkuaWZNb2RpZmllZCYmKEUubGFzdE1vZGlmaWVkW2ZdJiZULnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Nb2RpZmllZC1TaW5jZVwiLEUubGFzdE1vZGlmaWVkW2ZdKSxFLmV0YWdbZl0mJlQuc2V0UmVxdWVzdEhlYWRlcihcIklmLU5vbmUtTWF0Y2hcIixFLmV0YWdbZl0pKSwoeS5kYXRhJiZ5Lmhhc0NvbnRlbnQmJiExIT09eS5jb250ZW50VHlwZXx8dC5jb250ZW50VHlwZSkmJlQuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLHkuY29udGVudFR5cGUpLFQuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLHkuZGF0YVR5cGVzWzBdJiZ5LmFjY2VwdHNbeS5kYXRhVHlwZXNbMF1dP3kuYWNjZXB0c1t5LmRhdGFUeXBlc1swXV0rKFwiKlwiIT09eS5kYXRhVHlwZXNbMF0/XCIsIFwiK0l0K1wiOyBxPTAuMDFcIjpcIlwiKTp5LmFjY2VwdHNbXCIqXCJdKSx5LmhlYWRlcnMpVC5zZXRSZXF1ZXN0SGVhZGVyKGkseS5oZWFkZXJzW2ldKTtpZih5LmJlZm9yZVNlbmQmJighMT09PXkuYmVmb3JlU2VuZC5jYWxsKHYsVCx5KXx8aCkpcmV0dXJuIFQuYWJvcnQoKTtpZih1PVwiYWJvcnRcIixiLmFkZCh5LmNvbXBsZXRlKSxULmRvbmUoeS5zdWNjZXNzKSxULmZhaWwoeS5lcnJvciksYz0kdChNdCx5LHQsVCkpe2lmKFQucmVhZHlTdGF0ZT0xLGcmJm0udHJpZ2dlcihcImFqYXhTZW5kXCIsW1QseV0pLGgpcmV0dXJuIFQ7eS5hc3luYyYmMDx5LnRpbWVvdXQmJihkPUMuc2V0VGltZW91dChmdW5jdGlvbigpe1QuYWJvcnQoXCJ0aW1lb3V0XCIpfSx5LnRpbWVvdXQpKTt0cnl7aD0hMSxjLnNlbmQoYSxsKX1jYXRjaChlKXtpZihoKXRocm93IGU7bCgtMSxlKX19ZWxzZSBsKC0xLFwiTm8gVHJhbnNwb3J0XCIpO2Z1bmN0aW9uIGwoZSx0LG4scil7dmFyIGksbyxhLHMsdSxsPXQ7aHx8KGg9ITAsZCYmQy5jbGVhclRpbWVvdXQoZCksYz12b2lkIDAscD1yfHxcIlwiLFQucmVhZHlTdGF0ZT0wPGU/NDowLGk9MjAwPD1lJiZlPDMwMHx8MzA0PT09ZSxuJiYocz1mdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGEscz1lLmNvbnRlbnRzLHU9ZS5kYXRhVHlwZXM7d2hpbGUoXCIqXCI9PT11WzBdKXUuc2hpZnQoKSx2b2lkIDA9PT1yJiYocj1lLm1pbWVUeXBlfHx0LmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1UeXBlXCIpKTtpZihyKWZvcihpIGluIHMpaWYoc1tpXSYmc1tpXS50ZXN0KHIpKXt1LnVuc2hpZnQoaSk7YnJlYWt9aWYodVswXWluIG4pbz11WzBdO2Vsc2V7Zm9yKGkgaW4gbil7aWYoIXVbMF18fGUuY29udmVydGVyc1tpK1wiIFwiK3VbMF1dKXtvPWk7YnJlYWt9YXx8KGE9aSl9bz1vfHxhfWlmKG8pcmV0dXJuIG8hPT11WzBdJiZ1LnVuc2hpZnQobyksbltvXX0oeSxULG4pKSwhaSYmLTE8RS5pbkFycmF5KFwic2NyaXB0XCIseS5kYXRhVHlwZXMpJiZFLmluQXJyYXkoXCJqc29uXCIseS5kYXRhVHlwZXMpPDAmJih5LmNvbnZlcnRlcnNbXCJ0ZXh0IHNjcmlwdFwiXT1mdW5jdGlvbigpe30pLHM9ZnVuY3Rpb24oZSx0LG4scil7dmFyIGksbyxhLHMsdSxsPXt9LGM9ZS5kYXRhVHlwZXMuc2xpY2UoKTtpZihjWzFdKWZvcihhIGluIGUuY29udmVydGVycylsW2EudG9Mb3dlckNhc2UoKV09ZS5jb252ZXJ0ZXJzW2FdO289Yy5zaGlmdCgpO3doaWxlKG8paWYoZS5yZXNwb25zZUZpZWxkc1tvXSYmKG5bZS5yZXNwb25zZUZpZWxkc1tvXV09dCksIXUmJnImJmUuZGF0YUZpbHRlciYmKHQ9ZS5kYXRhRmlsdGVyKHQsZS5kYXRhVHlwZSkpLHU9byxvPWMuc2hpZnQoKSlpZihcIipcIj09PW8pbz11O2Vsc2UgaWYoXCIqXCIhPT11JiZ1IT09byl7aWYoIShhPWxbdStcIiBcIitvXXx8bFtcIiogXCIrb10pKWZvcihpIGluIGwpaWYoKHM9aS5zcGxpdChcIiBcIikpWzFdPT09byYmKGE9bFt1K1wiIFwiK3NbMF1dfHxsW1wiKiBcIitzWzBdXSkpeyEwPT09YT9hPWxbaV06ITAhPT1sW2ldJiYobz1zWzBdLGMudW5zaGlmdChzWzFdKSk7YnJlYWt9aWYoITAhPT1hKWlmKGEmJmVbXCJ0aHJvd3NcIl0pdD1hKHQpO2Vsc2UgdHJ5e3Q9YSh0KX1jYXRjaChlKXtyZXR1cm57c3RhdGU6XCJwYXJzZXJlcnJvclwiLGVycm9yOmE/ZTpcIk5vIGNvbnZlcnNpb24gZnJvbSBcIit1K1wiIHRvIFwiK299fX1yZXR1cm57c3RhdGU6XCJzdWNjZXNzXCIsZGF0YTp0fX0oeSxzLFQsaSksaT8oeS5pZk1vZGlmaWVkJiYoKHU9VC5nZXRSZXNwb25zZUhlYWRlcihcIkxhc3QtTW9kaWZpZWRcIikpJiYoRS5sYXN0TW9kaWZpZWRbZl09dSksKHU9VC5nZXRSZXNwb25zZUhlYWRlcihcImV0YWdcIikpJiYoRS5ldGFnW2ZdPXUpKSwyMDQ9PT1lfHxcIkhFQURcIj09PXkudHlwZT9sPVwibm9jb250ZW50XCI6MzA0PT09ZT9sPVwibm90bW9kaWZpZWRcIjoobD1zLnN0YXRlLG89cy5kYXRhLGk9IShhPXMuZXJyb3IpKSk6KGE9bCwhZSYmbHx8KGw9XCJlcnJvclwiLGU8MCYmKGU9MCkpKSxULnN0YXR1cz1lLFQuc3RhdHVzVGV4dD0odHx8bCkrXCJcIixpP3gucmVzb2x2ZVdpdGgodixbbyxsLFRdKTp4LnJlamVjdFdpdGgodixbVCxsLGFdKSxULnN0YXR1c0NvZGUodyksdz12b2lkIDAsZyYmbS50cmlnZ2VyKGk/XCJhamF4U3VjY2Vzc1wiOlwiYWpheEVycm9yXCIsW1QseSxpP286YV0pLGIuZmlyZVdpdGgodixbVCxsXSksZyYmKG0udHJpZ2dlcihcImFqYXhDb21wbGV0ZVwiLFtULHldKSwtLUUuYWN0aXZlfHxFLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RvcFwiKSkpfXJldHVybiBUfSxnZXRKU09OOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gRS5nZXQoZSx0LG4sXCJqc29uXCIpfSxnZXRTY3JpcHQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gRS5nZXQoZSx2b2lkIDAsdCxcInNjcmlwdFwiKX19KSxFLmVhY2goW1wiZ2V0XCIsXCJwb3N0XCJdLGZ1bmN0aW9uKGUsaSl7RVtpXT1mdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gbSh0KSYmKHI9cnx8bixuPXQsdD12b2lkIDApLEUuYWpheChFLmV4dGVuZCh7dXJsOmUsdHlwZTppLGRhdGFUeXBlOnIsZGF0YTp0LHN1Y2Nlc3M6bn0sRS5pc1BsYWluT2JqZWN0KGUpJiZlKSl9fSksRS5hamF4UHJlZmlsdGVyKGZ1bmN0aW9uKGUpe3ZhciB0O2Zvcih0IGluIGUuaGVhZGVycylcImNvbnRlbnQtdHlwZVwiPT09dC50b0xvd2VyQ2FzZSgpJiYoZS5jb250ZW50VHlwZT1lLmhlYWRlcnNbdF18fFwiXCIpfSksRS5fZXZhbFVybD1mdW5jdGlvbihlLHQsbil7cmV0dXJuIEUuYWpheCh7dXJsOmUsdHlwZTpcIkdFVFwiLGRhdGFUeXBlOlwic2NyaXB0XCIsY2FjaGU6ITAsYXN5bmM6ITEsZ2xvYmFsOiExLGNvbnZlcnRlcnM6e1widGV4dCBzY3JpcHRcIjpmdW5jdGlvbigpe319LGRhdGFGaWx0ZXI6ZnVuY3Rpb24oZSl7RS5nbG9iYWxFdmFsKGUsdCxuKX19KX0sRS5mbi5leHRlbmQoe3dyYXBBbGw6ZnVuY3Rpb24oZSl7dmFyIHQ7cmV0dXJuIHRoaXNbMF0mJihtKGUpJiYoZT1lLmNhbGwodGhpc1swXSkpLHQ9RShlLHRoaXNbMF0ub3duZXJEb2N1bWVudCkuZXEoMCkuY2xvbmUoITApLHRoaXNbMF0ucGFyZW50Tm9kZSYmdC5pbnNlcnRCZWZvcmUodGhpc1swXSksdC5tYXAoZnVuY3Rpb24oKXt2YXIgZT10aGlzO3doaWxlKGUuZmlyc3RFbGVtZW50Q2hpbGQpZT1lLmZpcnN0RWxlbWVudENoaWxkO3JldHVybiBlfSkuYXBwZW5kKHRoaXMpKSx0aGlzfSx3cmFwSW5uZXI6ZnVuY3Rpb24obil7cmV0dXJuIG0obik/dGhpcy5lYWNoKGZ1bmN0aW9uKGUpe0UodGhpcykud3JhcElubmVyKG4uY2FsbCh0aGlzLGUpKX0pOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBlPUUodGhpcyksdD1lLmNvbnRlbnRzKCk7dC5sZW5ndGg/dC53cmFwQWxsKG4pOmUuYXBwZW5kKG4pfSl9LHdyYXA6ZnVuY3Rpb24odCl7dmFyIG49bSh0KTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGUpe0UodGhpcykud3JhcEFsbChuP3QuY2FsbCh0aGlzLGUpOnQpfSl9LHVud3JhcDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5wYXJlbnQoZSkubm90KFwiYm9keVwiKS5lYWNoKGZ1bmN0aW9uKCl7RSh0aGlzKS5yZXBsYWNlV2l0aCh0aGlzLmNoaWxkTm9kZXMpfSksdGhpc319KSxFLmV4cHIucHNldWRvcy5oaWRkZW49ZnVuY3Rpb24oZSl7cmV0dXJuIUUuZXhwci5wc2V1ZG9zLnZpc2libGUoZSl9LEUuZXhwci5wc2V1ZG9zLnZpc2libGU9ZnVuY3Rpb24oZSl7cmV0dXJuISEoZS5vZmZzZXRXaWR0aHx8ZS5vZmZzZXRIZWlnaHR8fGUuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpfSxFLmFqYXhTZXR0aW5ncy54aHI9ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIG5ldyBDLlhNTEh0dHBSZXF1ZXN0fWNhdGNoKGUpe319O3ZhciBfdD17MDoyMDAsMTIyMzoyMDR9LHp0PUUuYWpheFNldHRpbmdzLnhocigpO3YuY29ycz0hIXp0JiZcIndpdGhDcmVkZW50aWFsc1wiaW4genQsdi5hamF4PXp0PSEhenQsRS5hamF4VHJhbnNwb3J0KGZ1bmN0aW9uKGkpe3ZhciBvLGE7aWYodi5jb3JzfHx6dCYmIWkuY3Jvc3NEb21haW4pcmV0dXJue3NlbmQ6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPWkueGhyKCk7aWYoci5vcGVuKGkudHlwZSxpLnVybCxpLmFzeW5jLGkudXNlcm5hbWUsaS5wYXNzd29yZCksaS54aHJGaWVsZHMpZm9yKG4gaW4gaS54aHJGaWVsZHMpcltuXT1pLnhockZpZWxkc1tuXTtmb3IobiBpbiBpLm1pbWVUeXBlJiZyLm92ZXJyaWRlTWltZVR5cGUmJnIub3ZlcnJpZGVNaW1lVHlwZShpLm1pbWVUeXBlKSxpLmNyb3NzRG9tYWlufHxlW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXXx8KGVbXCJYLVJlcXVlc3RlZC1XaXRoXCJdPVwiWE1MSHR0cFJlcXVlc3RcIiksZSlyLnNldFJlcXVlc3RIZWFkZXIobixlW25dKTtvPWZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbigpe28mJihvPWE9ci5vbmxvYWQ9ci5vbmVycm9yPXIub25hYm9ydD1yLm9udGltZW91dD1yLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLFwiYWJvcnRcIj09PWU/ci5hYm9ydCgpOlwiZXJyb3JcIj09PWU/XCJudW1iZXJcIiE9dHlwZW9mIHIuc3RhdHVzP3QoMCxcImVycm9yXCIpOnQoci5zdGF0dXMsci5zdGF0dXNUZXh0KTp0KF90W3Iuc3RhdHVzXXx8ci5zdGF0dXMsci5zdGF0dXNUZXh0LFwidGV4dFwiIT09KHIucmVzcG9uc2VUeXBlfHxcInRleHRcIil8fFwic3RyaW5nXCIhPXR5cGVvZiByLnJlc3BvbnNlVGV4dD97YmluYXJ5OnIucmVzcG9uc2V9Ont0ZXh0OnIucmVzcG9uc2VUZXh0fSxyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSl9fSxyLm9ubG9hZD1vKCksYT1yLm9uZXJyb3I9ci5vbnRpbWVvdXQ9byhcImVycm9yXCIpLHZvaWQgMCE9PXIub25hYm9ydD9yLm9uYWJvcnQ9YTpyLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpezQ9PT1yLnJlYWR5U3RhdGUmJkMuc2V0VGltZW91dChmdW5jdGlvbigpe28mJmEoKX0pfSxvPW8oXCJhYm9ydFwiKTt0cnl7ci5zZW5kKGkuaGFzQ29udGVudCYmaS5kYXRhfHxudWxsKX1jYXRjaChlKXtpZihvKXRocm93IGV9fSxhYm9ydDpmdW5jdGlvbigpe28mJm8oKX19fSksRS5hamF4UHJlZmlsdGVyKGZ1bmN0aW9uKGUpe2UuY3Jvc3NEb21haW4mJihlLmNvbnRlbnRzLnNjcmlwdD0hMSl9KSxFLmFqYXhTZXR1cCh7YWNjZXB0czp7c2NyaXB0OlwidGV4dC9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9lY21hc2NyaXB0LCBhcHBsaWNhdGlvbi94LWVjbWFzY3JpcHRcIn0sY29udGVudHM6e3NjcmlwdDovXFxiKD86amF2YXxlY21hKXNjcmlwdFxcYi99LGNvbnZlcnRlcnM6e1widGV4dCBzY3JpcHRcIjpmdW5jdGlvbihlKXtyZXR1cm4gRS5nbG9iYWxFdmFsKGUpLGV9fX0pLEUuYWpheFByZWZpbHRlcihcInNjcmlwdFwiLGZ1bmN0aW9uKGUpe3ZvaWQgMD09PWUuY2FjaGUmJihlLmNhY2hlPSExKSxlLmNyb3NzRG9tYWluJiYoZS50eXBlPVwiR0VUXCIpfSksRS5hamF4VHJhbnNwb3J0KFwic2NyaXB0XCIsZnVuY3Rpb24obil7dmFyIHIsaTtpZihuLmNyb3NzRG9tYWlufHxuLnNjcmlwdEF0dHJzKXJldHVybntzZW5kOmZ1bmN0aW9uKGUsdCl7cj1FKFwiPHNjcmlwdD5cIikuYXR0cihuLnNjcmlwdEF0dHJzfHx7fSkucHJvcCh7Y2hhcnNldDpuLnNjcmlwdENoYXJzZXQsc3JjOm4udXJsfSkub24oXCJsb2FkIGVycm9yXCIsaT1mdW5jdGlvbihlKXtyLnJlbW92ZSgpLGk9bnVsbCxlJiZ0KFwiZXJyb3JcIj09PWUudHlwZT80MDQ6MjAwLGUudHlwZSl9KSxTLmhlYWQuYXBwZW5kQ2hpbGQoclswXSl9LGFib3J0OmZ1bmN0aW9uKCl7aSYmaSgpfX19KTt2YXIgVXQsWHQ9W10sVnQ9Lyg9KVxcPyg/PSZ8JCl8XFw/XFw/LztFLmFqYXhTZXR1cCh7anNvbnA6XCJjYWxsYmFja1wiLGpzb25wQ2FsbGJhY2s6ZnVuY3Rpb24oKXt2YXIgZT1YdC5wb3AoKXx8RS5leHBhbmRvK1wiX1wiK0N0Lmd1aWQrKztyZXR1cm4gdGhpc1tlXT0hMCxlfX0pLEUuYWpheFByZWZpbHRlcihcImpzb24ganNvbnBcIixmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGE9ITEhPT1lLmpzb25wJiYoVnQudGVzdChlLnVybCk/XCJ1cmxcIjpcInN0cmluZ1wiPT10eXBlb2YgZS5kYXRhJiYwPT09KGUuY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJlZ0LnRlc3QoZS5kYXRhKSYmXCJkYXRhXCIpO2lmKGF8fFwianNvbnBcIj09PWUuZGF0YVR5cGVzWzBdKXJldHVybiByPWUuanNvbnBDYWxsYmFjaz1tKGUuanNvbnBDYWxsYmFjayk/ZS5qc29ucENhbGxiYWNrKCk6ZS5qc29ucENhbGxiYWNrLGE/ZVthXT1lW2FdLnJlcGxhY2UoVnQsXCIkMVwiK3IpOiExIT09ZS5qc29ucCYmKGUudXJsKz0oU3QudGVzdChlLnVybCk/XCImXCI6XCI/XCIpK2UuanNvbnArXCI9XCIrciksZS5jb252ZXJ0ZXJzW1wic2NyaXB0IGpzb25cIl09ZnVuY3Rpb24oKXtyZXR1cm4gb3x8RS5lcnJvcihyK1wiIHdhcyBub3QgY2FsbGVkXCIpLG9bMF19LGUuZGF0YVR5cGVzWzBdPVwianNvblwiLGk9Q1tyXSxDW3JdPWZ1bmN0aW9uKCl7bz1hcmd1bWVudHN9LG4uYWx3YXlzKGZ1bmN0aW9uKCl7dm9pZCAwPT09aT9FKEMpLnJlbW92ZVByb3Aocik6Q1tyXT1pLGVbcl0mJihlLmpzb25wQ2FsbGJhY2s9dC5qc29ucENhbGxiYWNrLFh0LnB1c2gocikpLG8mJm0oaSkmJmkob1swXSksbz1pPXZvaWQgMH0pLFwic2NyaXB0XCJ9KSx2LmNyZWF0ZUhUTUxEb2N1bWVudD0oKFV0PVMuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpLmJvZHkpLmlubmVySFRNTD1cIjxmb3JtPjwvZm9ybT48Zm9ybT48L2Zvcm0+XCIsMj09PVV0LmNoaWxkTm9kZXMubGVuZ3RoKSxFLnBhcnNlSFRNTD1mdW5jdGlvbihlLHQsbil7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGU/W106KFwiYm9vbGVhblwiPT10eXBlb2YgdCYmKG49dCx0PSExKSx0fHwodi5jcmVhdGVIVE1MRG9jdW1lbnQ/KChyPSh0PVMuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpKS5jcmVhdGVFbGVtZW50KFwiYmFzZVwiKSkuaHJlZj1TLmxvY2F0aW9uLmhyZWYsdC5oZWFkLmFwcGVuZENoaWxkKHIpKTp0PVMpLG89IW4mJltdLChpPU4uZXhlYyhlKSk/W3QuY3JlYXRlRWxlbWVudChpWzFdKV06KGk9eGUoW2VdLHQsbyksbyYmby5sZW5ndGgmJkUobykucmVtb3ZlKCksRS5tZXJnZShbXSxpLmNoaWxkTm9kZXMpKSk7dmFyIHIsaSxvfSxFLmZuLmxvYWQ9ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhPXRoaXMscz1lLmluZGV4T2YoXCIgXCIpO3JldHVybi0xPHMmJihyPXl0KGUuc2xpY2UocykpLGU9ZS5zbGljZSgwLHMpKSxtKHQpPyhuPXQsdD12b2lkIDApOnQmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiYoaT1cIlBPU1RcIiksMDxhLmxlbmd0aCYmRS5hamF4KHt1cmw6ZSx0eXBlOml8fFwiR0VUXCIsZGF0YVR5cGU6XCJodG1sXCIsZGF0YTp0fSkuZG9uZShmdW5jdGlvbihlKXtvPWFyZ3VtZW50cyxhLmh0bWwocj9FKFwiPGRpdj5cIikuYXBwZW5kKEUucGFyc2VIVE1MKGUpKS5maW5kKHIpOmUpfSkuYWx3YXlzKG4mJmZ1bmN0aW9uKGUsdCl7YS5lYWNoKGZ1bmN0aW9uKCl7bi5hcHBseSh0aGlzLG98fFtlLnJlc3BvbnNlVGV4dCx0LGVdKX0pfSksdGhpc30sRS5leHByLnBzZXVkb3MuYW5pbWF0ZWQ9ZnVuY3Rpb24odCl7cmV0dXJuIEUuZ3JlcChFLnRpbWVycyxmdW5jdGlvbihlKXtyZXR1cm4gdD09PWUuZWxlbX0pLmxlbmd0aH0sRS5vZmZzZXQ9e3NldE9mZnNldDpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGEscyx1LGw9RS5jc3MoZSxcInBvc2l0aW9uXCIpLGM9RShlKSxmPXt9O1wic3RhdGljXCI9PT1sJiYoZS5zdHlsZS5wb3NpdGlvbj1cInJlbGF0aXZlXCIpLHM9Yy5vZmZzZXQoKSxvPUUuY3NzKGUsXCJ0b3BcIiksdT1FLmNzcyhlLFwibGVmdFwiKSwoXCJhYnNvbHV0ZVwiPT09bHx8XCJmaXhlZFwiPT09bCkmJi0xPChvK3UpLmluZGV4T2YoXCJhdXRvXCIpPyhhPShyPWMucG9zaXRpb24oKSkudG9wLGk9ci5sZWZ0KTooYT1wYXJzZUZsb2F0KG8pfHwwLGk9cGFyc2VGbG9hdCh1KXx8MCksbSh0KSYmKHQ9dC5jYWxsKGUsbixFLmV4dGVuZCh7fSxzKSkpLG51bGwhPXQudG9wJiYoZi50b3A9dC50b3Atcy50b3ArYSksbnVsbCE9dC5sZWZ0JiYoZi5sZWZ0PXQubGVmdC1zLmxlZnQraSksXCJ1c2luZ1wiaW4gdD90LnVzaW5nLmNhbGwoZSxmKTpjLmNzcyhmKX19LEUuZm4uZXh0ZW5kKHtvZmZzZXQ6ZnVuY3Rpb24odCl7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdm9pZCAwPT09dD90aGlzOnRoaXMuZWFjaChmdW5jdGlvbihlKXtFLm9mZnNldC5zZXRPZmZzZXQodGhpcyx0LGUpfSk7dmFyIGUsbixyPXRoaXNbMF07cmV0dXJuIHI/ci5nZXRDbGllbnRSZWN0cygpLmxlbmd0aD8oZT1yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLG49ci5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LHt0b3A6ZS50b3Arbi5wYWdlWU9mZnNldCxsZWZ0OmUubGVmdCtuLnBhZ2VYT2Zmc2V0fSk6e3RvcDowLGxlZnQ6MH06dm9pZCAwfSxwb3NpdGlvbjpmdW5jdGlvbigpe2lmKHRoaXNbMF0pe3ZhciBlLHQsbixyPXRoaXNbMF0saT17dG9wOjAsbGVmdDowfTtpZihcImZpeGVkXCI9PT1FLmNzcyhyLFwicG9zaXRpb25cIikpdD1yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO2Vsc2V7dD10aGlzLm9mZnNldCgpLG49ci5vd25lckRvY3VtZW50LGU9ci5vZmZzZXRQYXJlbnR8fG4uZG9jdW1lbnRFbGVtZW50O3doaWxlKGUmJihlPT09bi5ib2R5fHxlPT09bi5kb2N1bWVudEVsZW1lbnQpJiZcInN0YXRpY1wiPT09RS5jc3MoZSxcInBvc2l0aW9uXCIpKWU9ZS5wYXJlbnROb2RlO2UmJmUhPT1yJiYxPT09ZS5ub2RlVHlwZSYmKChpPUUoZSkub2Zmc2V0KCkpLnRvcCs9RS5jc3MoZSxcImJvcmRlclRvcFdpZHRoXCIsITApLGkubGVmdCs9RS5jc3MoZSxcImJvcmRlckxlZnRXaWR0aFwiLCEwKSl9cmV0dXJue3RvcDp0LnRvcC1pLnRvcC1FLmNzcyhyLFwibWFyZ2luVG9wXCIsITApLGxlZnQ6dC5sZWZ0LWkubGVmdC1FLmNzcyhyLFwibWFyZ2luTGVmdFwiLCEwKX19fSxvZmZzZXRQYXJlbnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgZT10aGlzLm9mZnNldFBhcmVudDt3aGlsZShlJiZcInN0YXRpY1wiPT09RS5jc3MoZSxcInBvc2l0aW9uXCIpKWU9ZS5vZmZzZXRQYXJlbnQ7cmV0dXJuIGV8fHJlfSl9fSksRS5lYWNoKHtzY3JvbGxMZWZ0OlwicGFnZVhPZmZzZXRcIixzY3JvbGxUb3A6XCJwYWdlWU9mZnNldFwifSxmdW5jdGlvbih0LGkpe3ZhciBvPVwicGFnZVlPZmZzZXRcIj09PWk7RS5mblt0XT1mdW5jdGlvbihlKXtyZXR1cm4gQih0aGlzLGZ1bmN0aW9uKGUsdCxuKXt2YXIgcjtpZih4KGUpP3I9ZTo5PT09ZS5ub2RlVHlwZSYmKHI9ZS5kZWZhdWx0Vmlldyksdm9pZCAwPT09bilyZXR1cm4gcj9yW2ldOmVbdF07cj9yLnNjcm9sbFRvKG8/ci5wYWdlWE9mZnNldDpuLG8/bjpyLnBhZ2VZT2Zmc2V0KTplW3RdPW59LHQsZSxhcmd1bWVudHMubGVuZ3RoKX19KSxFLmVhY2goW1widG9wXCIsXCJsZWZ0XCJdLGZ1bmN0aW9uKGUsbil7RS5jc3NIb29rc1tuXT1fZSh2LnBpeGVsUG9zaXRpb24sZnVuY3Rpb24oZSx0KXtpZih0KXJldHVybiB0PUJlKGUsbiksUGUudGVzdCh0KT9FKGUpLnBvc2l0aW9uKClbbl0rXCJweFwiOnR9KX0pLEUuZWFjaCh7SGVpZ2h0OlwiaGVpZ2h0XCIsV2lkdGg6XCJ3aWR0aFwifSxmdW5jdGlvbihhLHMpe0UuZWFjaCh7cGFkZGluZzpcImlubmVyXCIrYSxjb250ZW50OnMsXCJcIjpcIm91dGVyXCIrYX0sZnVuY3Rpb24ocixvKXtFLmZuW29dPWZ1bmN0aW9uKGUsdCl7dmFyIG49YXJndW1lbnRzLmxlbmd0aCYmKHJ8fFwiYm9vbGVhblwiIT10eXBlb2YgZSksaT1yfHwoITA9PT1lfHwhMD09PXQ/XCJtYXJnaW5cIjpcImJvcmRlclwiKTtyZXR1cm4gQih0aGlzLGZ1bmN0aW9uKGUsdCxuKXt2YXIgcjtyZXR1cm4geChlKT8wPT09by5pbmRleE9mKFwib3V0ZXJcIik/ZVtcImlubmVyXCIrYV06ZS5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbXCJjbGllbnRcIithXTo5PT09ZS5ub2RlVHlwZT8ocj1lLmRvY3VtZW50RWxlbWVudCxNYXRoLm1heChlLmJvZHlbXCJzY3JvbGxcIithXSxyW1wic2Nyb2xsXCIrYV0sZS5ib2R5W1wib2Zmc2V0XCIrYV0scltcIm9mZnNldFwiK2FdLHJbXCJjbGllbnRcIithXSkpOnZvaWQgMD09PW4/RS5jc3MoZSx0LGkpOkUuc3R5bGUoZSx0LG4saSl9LHMsbj9lOnZvaWQgMCxuKX19KX0pLEUuZWFjaChbXCJhamF4U3RhcnRcIixcImFqYXhTdG9wXCIsXCJhamF4Q29tcGxldGVcIixcImFqYXhFcnJvclwiLFwiYWpheFN1Y2Nlc3NcIixcImFqYXhTZW5kXCJdLGZ1bmN0aW9uKGUsdCl7RS5mblt0XT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5vbih0LGUpfX0pLEUuZm4uZXh0ZW5kKHtiaW5kOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdGhpcy5vbihlLG51bGwsdCxuKX0sdW5iaW5kOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMub2ZmKGUsbnVsbCx0KX0sZGVsZWdhdGU6ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIHRoaXMub24odCxlLG4scil9LHVuZGVsZWdhdGU6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiAxPT09YXJndW1lbnRzLmxlbmd0aD90aGlzLm9mZihlLFwiKipcIik6dGhpcy5vZmYodCxlfHxcIioqXCIsbil9LGhvdmVyOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMubW91c2VlbnRlcihlKS5tb3VzZWxlYXZlKHR8fGUpfX0pLEUuZWFjaChcImJsdXIgZm9jdXMgZm9jdXNpbiBmb2N1c291dCByZXNpemUgc2Nyb2xsIGNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZXVwIG1vdXNlbW92ZSBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlIGNoYW5nZSBzZWxlY3Qgc3VibWl0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgY29udGV4dG1lbnVcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oZSxuKXtFLmZuW25dPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIDA8YXJndW1lbnRzLmxlbmd0aD90aGlzLm9uKG4sbnVsbCxlLHQpOnRoaXMudHJpZ2dlcihuKX19KTt2YXIgR3Q9L15bXFxzXFx1RkVGRlxceEEwXSt8KFteXFxzXFx1RkVGRlxceEEwXSlbXFxzXFx1RkVGRlxceEEwXSskL2c7RS5wcm94eT1mdW5jdGlvbihlLHQpe3ZhciBuLHIsaTtpZihcInN0cmluZ1wiPT10eXBlb2YgdCYmKG49ZVt0XSx0PWUsZT1uKSxtKGUpKXJldHVybiByPXMuY2FsbChhcmd1bWVudHMsMiksKGk9ZnVuY3Rpb24oKXtyZXR1cm4gZS5hcHBseSh0fHx0aGlzLHIuY29uY2F0KHMuY2FsbChhcmd1bWVudHMpKSl9KS5ndWlkPWUuZ3VpZD1lLmd1aWR8fEUuZ3VpZCsrLGl9LEUuaG9sZFJlYWR5PWZ1bmN0aW9uKGUpe2U/RS5yZWFkeVdhaXQrKzpFLnJlYWR5KCEwKX0sRS5pc0FycmF5PUFycmF5LmlzQXJyYXksRS5wYXJzZUpTT049SlNPTi5wYXJzZSxFLm5vZGVOYW1lPUEsRS5pc0Z1bmN0aW9uPW0sRS5pc1dpbmRvdz14LEUuY2FtZWxDYXNlPVgsRS50eXBlPXcsRS5ub3c9RGF0ZS5ub3csRS5pc051bWVyaWM9ZnVuY3Rpb24oZSl7dmFyIHQ9RS50eXBlKGUpO3JldHVybihcIm51bWJlclwiPT09dHx8XCJzdHJpbmdcIj09PXQpJiYhaXNOYU4oZS1wYXJzZUZsb2F0KGUpKX0sRS50cmltPWZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP1wiXCI6KGUrXCJcIikucmVwbGFjZShHdCxcIiQxXCIpfSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQmJmRlZmluZShcImpxdWVyeVwiLFtdLGZ1bmN0aW9uKCl7cmV0dXJuIEV9KTt2YXIgWXQ9Qy5qUXVlcnksUXQ9Qy4kO3JldHVybiBFLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oZSl7cmV0dXJuIEMuJD09PUUmJihDLiQ9UXQpLGUmJkMualF1ZXJ5PT09RSYmKEMualF1ZXJ5PVl0KSxFfSxcInVuZGVmaW5lZFwiPT10eXBlb2YgZSYmKEMualF1ZXJ5PUMuJD1FKSxFfSk7IiwiOyhmdW5jdGlvbigpIHtcblx0bGV0IG15TWFwO1xuXHRjb25zdCBpbml0ID0gKCkgPT4ge1xuXHRcdG15TWFwID0gbmV3IHltYXBzLk1hcChcInlhbmRleC1tYXBzXCIsIHtcblx0XHRcdGNlbnRlcjogWzU1Ljc1MTQyNywgMzcuNjE3MzE1XSxcblx0XHRcdHpvb206IDE0LFxuXHRcdFx0Y29udHJvbHM6IFtdXG5cdFx0fSk7XG5cdFxuXHRcdGNvbnN0IGNvb3JkcyA9IFtcblx0XHRcdFs1NS43NDUxMzYsIDM3LjU4ODk0Nl0sXG5cdFx0XHRbNTUuNzU0MDU1LCAzNy41OTExODNdLFxuXHRcdFx0WzU1Ljc0MjE0OCwgMzcuNTY1NTI0XSxcblx0XHRdO1xuXHRcblx0XHRjb25zdCBteUNvbGxlY3Rpb24gPSBuZXcgeW1hcHMuR2VvT2JqZWN0Q29sbGVjdGlvbih7fSwge1xuXHRcdFx0ZHJhZ2dhYmxlOiBmYWxzZSxcblx0XHRcdGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlJyxcblx0XHRcdGljb25JbWFnZUhyZWY6IFwiLi9pbWcvbWFwLW1hcmtlci5wbmdcIixcblx0XHRcdGljb25JbWFnZVNpemU6IFszMCwgNDJdLFxuXHRcdFx0aWNvbkltYWdlT2Zmc2V0OiBbLTMsIC00Ml1cblx0XHR9KTtcblx0XG5cdFx0Y29vcmRzLmZvckVhY2goY29vcmQgPT4ge1xuXHRcdFx0bXlDb2xsZWN0aW9uLmFkZChuZXcgeW1hcHMuUGxhY2VtYXJrKGNvb3JkKSk7XG5cdFx0fSk7XG5cdFxuXHRcdG15TWFwLmdlb09iamVjdHMuYWRkKG15Q29sbGVjdGlvbik7XG5cdFxuXHR9IFxuXHRcblx0eW1hcHMucmVhZHkoaW5pdCk7XG5cdFxufSkoKSIsIjsoZnVuY3Rpb24oKSB7XG5cdGNvbnN0IHZhbGlkYXRlRmllbGRzID0gKGZvcm0sIGZpZWxkc0FycmF5KSA9PiB7XG5cblx0XHRmaWVsZHNBcnJheS5mb3JFYWNoKGZpZWxkID0+IHtcblx0XHRcdGZpZWxkLnJlbW92ZUNsYXNzKFwiaW5wdXQtZXJyb3JcIilcblx0XHRcdGlmIChmaWVsZC52YWwoKS50cmltKCkgPT09IFwiXCIpIHtcblx0XHRcdFx0ZmllbGQuYWRkQ2xhc3MoXCJpbnB1dC1lcnJvclwiKVxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0fSk7XG5cdFxuXHRcdGNvbnN0IGVycm9yRmllbGRzID0gZm9ybS5maW5kKFwiLmlucHV0LWVycm9yXCIpO1xuXHRcblx0XHRyZXR1cm4gZXJyb3JGaWVsZHMubGVuZ3RoID09PSAwO1xuXHRcblx0fVxuXHRcblx0JCgnI2Zvcm0nKS5zdWJtaXQoZSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcblx0XHRjb25zdCBmb3JtID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuXHRcdGNvbnN0IG5hbWUgPSBmb3JtLmZpbmQoXCJbbmFtZT0nbmFtZSddXCIpO1xuXHRcdGNvbnN0IHBob25lID0gZm9ybS5maW5kKFwiW25hbWU9J3Bob25lJ11cIik7XG5cdFx0Y29uc3QgY29tbWVudCA9IGZvcm0uZmluZChcIltuYW1lPSdjb21tZW50J11cIik7XG5cdFx0Y29uc3QgdG8gPSBmb3JtLmZpbmQoXCJbbmFtZT0ndG8nXVwiKTtcblx0XG5cdFx0Y29uc3QgbW9kYWwgPSAkKFwiI21vZGFsXCIpO1xuXHRcdGNvbnN0IGNvbnRlbnQgPSBtb2RhbC5maW5kKFwiLm1vZGFsX19jb250ZW50XCIpO1xuXHRcblx0XHRtb2RhbC5yZW1vdmVDbGFzcyhcImVycm9yLW1vZGFsXCIpO1xuXHRcblx0XHRjb25zdCBpc1ZhbGlkID0gdmFsaWRhdGVGaWVsZHMoZm9ybSwgW2NvbW1lbnQsIG5hbWUsIHBob25lLCAgdG9dKTtcblx0XG5cdFx0aWYgKGlzVmFsaWQpIHtcblx0XHRcdCQuYWpheCh7XG5cdFx0XHRcdHVybDogXCJodHRwczovL3dlYmRldi1hcGkubG9mdHNjaG9vbC5jb20vc2VuZG1haWxcIixcblx0XHRcdFx0bWV0aG9kOiBcInBvc3RcIixcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRuYW1lOiBuYW1lLnZhbCgpLFxuXHRcdFx0XHRwaG9uZTogcGhvbmUudmFsKCksXG5cdFx0XHRcdGNvbW1lbnQ6IGNvbW1lbnQudmFsKCksXG5cdFx0XHRcdHRvOiB0by52YWwoKSxcblx0XHRcdFx0fSxcblx0XHRcdFx0c3VjY2VzczogKGRhdGEpID0+IHtcblx0XHRcdFx0XHRjb250ZW50LnRleHQoZGF0YS5tZXNzYWdlKVxuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuXHRcdFx0XHRcdCQuZmFuY3lib3gub3Blbih7XG5cdFx0XHRcdFx0XHRzcmM6ICcjbW9kYWwnLFxuXHRcdFx0XHRcdFx0dHlwZTogXCJpbmxpbmVcIlxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnJvcjogZGF0YSA9PiB7XG5cdFx0XHRcdFx0Ly8gY29uc3QgbWVzc2FnZSA9IGRhdGEucmVzcG9uc2VKU09OLm1lc3NhZWdcblx0XHRcdFx0XHQvLyBjb250ZW50LnRleHQobWVzc2FnZSk7XG5cdFx0XHRcdFx0Ly8gbW9kYWwuYWRkQ2xhc3MoXCJlcnJvci1tb2RhbFwiKTtcblx0XHRcdFx0XHRjb250ZW50LnRleHQoJ9Cf0YDQvtC40LfQvtGI0LvQsCDQvtGI0LjQsdC60LAsINC/0L7Qv9GA0L7QsdGD0LnRgtC1INGB0L3QvtCy0LAnKVxuXHRcblx0XHRcdFx0XHQkLmZhbmN5Ym94Lm9wZW4oe1xuXHRcdFx0XHRcdFx0c3JjOiAnI21vZGFsJyxcblx0XHRcdFx0XHRcdHR5cGU6IFwiaW5saW5lXCJcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcblx0fSk7IFxuXHRcblx0JChcIi5hcHAtc3VibWl0LWJ0blwiKS5jbGljayggZSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcblx0XHQkLmZhbmN5Ym94LmNsb3NlKCk7XG5cdH0pXG5cdFxufSkoKSIsIjsoZnVuY3Rpb24oKSB7XG5cdGNvbnN0IHNlY3Rpb25zID0gJChcInNlY3Rpb25cIik7XG5cdGNvbnN0IGRpc3BsYXkgPSAkKFwiLm1haW4tY29udGVudFwiKTtcblx0Y29uc3Qgc2lkZU1lbnUgPSAkKFwiLmZpeGVkLW1lbnVcIik7XG5cdGNvbnN0IG1lbnVJdGVtcyA9IHNpZGVNZW51LmZpbmQoXCJmaXhlZC1tZW51X19pdGVtXCIpO1xuXHRjb25zdCBtb2JpbGVEZXRlY3QgPSBuZXcgTW9iaWxlRGV0ZWN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtcblx0Y29uc3QgaXNNb2JpbGUgPSBtb2JpbGVEZXRlY3QubW9iaWxlKCk7XG5cdFxuXHRsZXQgaW5TY3JvbGwgPSBmYWxzZTtcblx0XG5cdHNlY3Rpb25zLmZpcnN0KCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG5cdFxuXHRjb25zdCBjb3VudFNlY3Rpb25Qb3NpdGlvbiA9IHNlY3Rpb25zRXEgPT4ge1xuXHRcdHJldHVybiBzZWN0aW9uc0VxICogLTEwMDtcblx0fVxuXHRcblx0Y29uc3QgcmVzZXRBY3RpdmVDbGFzc0Zvckl0ZW0gPSAoaXRlbSwgaXRlbUVxLCBhY3RpdmVDbGFzcykgPT4ge1xuXHRcdGl0ZW0uZXEoaXRlbUVxKS5hZGRDbGFzcyhhY3RpdmVDbGFzcykuc2libGluZ3MoKS5yZW1vdmVDbGFzcyhhY3RpdmVDbGFzcyk7XG5cdH1cblx0XG5cdGNvbnN0IHBlcmZvcm1UcmFuc2l0aW9uID0gc2VjdGlvbnNFcSA9PiB7XG5cdFxuXHRcdGlmIChpblNjcm9sbCA9PSBmYWxzZSkge1xuXHRcdFx0XG5cdFx0XHRpblNjcm9sbCA9IHRydWU7XG5cdFx0XHRjb25zdCBwb3NpdGlvbiA9IGNvdW50U2VjdGlvblBvc2l0aW9uKHNlY3Rpb25zRXEpO1xuXHRcblx0XG5cdFxuXHRcdFx0ZGlzcGxheS5jc3Moe1xuXHRcdFx0XHR0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKCR7cG9zaXRpb259JSlgXG5cdFx0XHR9KTtcblx0XG5cdFx0XHRyZXNldEFjdGl2ZUNsYXNzRm9ySXRlbShzZWN0aW9ucywgc2VjdGlvbnNFcSwgXCJhY3RpdmVcIik7XG5cdFx0XHQvLyBzZWN0aW9ucy5lcShzZWN0aW9uc0VxKS5hZGRDbGFzcyhcImFjdGl2ZVwiKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1x0XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0aW5TY3JvbGwgPSBmYWxzZTtcblx0XG5cdFx0XHRcdHJlc2V0QWN0aXZlQ2xhc3NGb3JJdGVtKG1lbnVJdGVtcywgc2VjdGlvbnNFcSwgXCJmaXhlZC1tZW51X19pdGVtLS1hY3RpdmVcIik7XG5cdFxuXHRcdFx0XHRzaWRlTWVudS5maW5kKFwiLmZpeGVkLW1lbnVfX2l0ZW1cIikuZXEoc2VjdGlvbnNFcSkuYWRkQ2xhc3MoXCJmaXhlZC1tZW51X19pdGVtLS1hY3RpdmVcIikuc2libGluZ3MoKS5yZW1vdmVDbGFzcyhcImZpeGVkLW1lbnVfX2l0ZW0tLWFjdGl2ZVwiKTtcblx0XG5cdFx0XHR9LCAxMzAwKTtcblx0XHR9XG5cdH1cblx0XG5cdGNvbnN0IHNjcm9sbFZpZXdwb3J0ID0gZGlyZWN0aW9uID0+IHtcblx0XHRjb25zdCBhY3RpdmVTZWN0aW9uID0gc2VjdGlvbnMuZmlsdGVyKFwiLmFjdGl2ZVwiKTtcblx0XHRjb25zdCBuZXh0U2VjdGlvbiA9IGFjdGl2ZVNlY3Rpb24ubmV4dCgpO1xuXHRcdGNvbnN0IHByZXZTZWN0aW9uID0gYWN0aXZlU2VjdGlvbi5wcmV2KCk7XG5cdFxuXHRcblx0XHRpZiAoZGlyZWN0aW9uID09IFwibmV4dFwiICAmJiBuZXh0U2VjdGlvbi5sZW5ndGgpIHtcblx0XHRcdHBlcmZvcm1UcmFuc2l0aW9uKG5leHRTZWN0aW9uLmluZGV4KCkpXG5cdFx0fVxuXHRcblx0XHRpZiAoZGlyZWN0aW9uID09IFwicHJldlwiICAmJiBwcmV2U2VjdGlvbi5sZW5ndGgpIHtcblx0XHRcdHBlcmZvcm1UcmFuc2l0aW9uKHByZXZTZWN0aW9uLmluZGV4KCkpXG5cdFx0fVxuXHR9XG5cdFxuXHQkKHdpbmRvdykub24oXCJ3aGVlbFwiLCBlID0+IHtcblx0XHRjb25zdCBkZWx0YVkgPSBlLm9yaWdpbmFsRXZlbnQuZGVsdGFZO1xuXHRcblx0XHRpZiAoZGVsdGFZID4gMCkge1xuXHRcdFx0c2Nyb2xsVmlld3BvcnQoXCJuZXh0XCIpO1xuXHRcdH1cblx0XG5cdFx0aWYgKGRlbHRhWSA8IDApIHtcblx0XHRcdHNjcm9sbFZpZXdwb3J0KFwicHJldlwiKTtcblx0XHR9XG5cdH0pO1xuXHRcblx0JCh3aW5kb3cpLm9uKFwia2V5ZG93blwiLCBlID0+IHtcblx0XHRcblx0XHRjb25zdCB0YWdOYW1lID0gZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcblx0XHRpZiAodGFnTmFtZSAhPT0gXCJpbnB1dFwiICYmIHRhZ05hbWUgIT09IFwidGV4dGFyZWFcIikge1xuXHRcdFx0c3dpdGNoIChlLmtleUNvZGUpIHtcblx0XHRcdFx0Y2FzZSAzODpcblx0XHRcdFx0XHRzY3JvbGxWaWV3cG9ydChcInByZXZcIik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XG5cdFx0XHRcdGNhc2UgNDA6XG5cdFx0XHRcdFx0c2Nyb2xsVmlld3BvcnQoXCJuZXh0XCIpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0fSk7XG5cblx0JChcIi53cmFwcGVyXCIpLm9uKFwidG91Y2hlbW92ZVwiLCBlID0+IGUucHJldmVudERlZmF1bHQoKSk7XG5cdFxuXHQkKFwiW2RhdGEtc2Nyb2xsLXRvXVwiKS5jbGljayhlID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFxuXHRcdGNvbnN0ICR0aGlzID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuXHRcdGNvbnN0IHRhcmdldCA9ICR0aGlzLmF0dHIoXCJkYXRhLXNjcm9sbC10b1wiKTtcblx0XHRjb25zdCByZXFTZWN0aW9uID0gJChgW2RhdGEtc2VjdGlvbi1pZD0ke3RhcmdldH1dYCk7XG5cdFxuXHRcdHBlcmZvcm1UcmFuc2l0aW9uKHJlcVNlY3Rpb24uaW5kZXgoKSk7XG5cdFxuXHRcdGNvbnNvbGUubG9nKHJlcVNlY3Rpb24uaW5kZXgoKSlcblx0fSk7XG5cblx0aWYoaXNNb2JpbGUpIHtcblx0XHQkKFwiYm9keVwiKS5zd2lwZSgge1xuXHRcdFx0c3dpcGU6ZnVuY3Rpb24oZXZlbnQsIGRpcmVjdGlvbiwpIHtcblx0XHRcdFx0Y29uc3Qgc2Nyb2xsZXIgPSB2aWV3cG9ydFNjcm9sbGVyKCk7XG5cdFx0XHRcdGxldCBzY3JvbGxEaXJlY3Rpb24gPSBcIlwiO1xuXG5cdFx0XHRcdGlmKGRpcmVjdGlvbiA9PT0gXCJ1cFwiKSBzY3JvbGxEaXJlY3Rpb24gPSBcIm5leHRcIlxuXHRcdFx0XHRpZihkaXJlY3Rpb24gPT09IFwiZG93blwiKSBzY3JvbGxEaXJlY3Rpb24gPSBcInByZXZcIlxuXG5cdFx0XHRcdHNjcm9sbGVyW3Njcm9sbERpcmVjdGlvbl0oKTtcblx0XHRcdH0sXG5cdFx0fSlcblx0fVxuXHRcbn0pKClcbiIsIjsoZnVuY3Rpb24oKSB7XG5cdGxldCBwbGF5ZXI7XG5cdGNvbnN0IHBsYXllckNvbnRhaW5lciA9ICQoXCIucGxheWVyXCIpO1xuXHRcblx0bGV0IGl2ZW50c0luaXQgPSAoKSA9PiB7XG5cdFx0JChcIi5wbGF5ZXJfX3N0YXJ0XCIpLmNsaWNrKGUgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcblx0XHRcdGlmIChwbGF5ZXJDb250YWluZXIuaGFzQ2xhc3MoXCJwYXVzZWRcIikpIHtcblx0XHRcdFx0XG5cdFx0XHRcdHBsYXllci5wYXVzZVZpZGVvKClcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFxuXHRcdFx0XHRwbGF5ZXIucGxheVZpZGVvKClcblx0XHRcdH1cblx0XHRcdFxuXHRcdH0pO1xuXHRcblx0XHQkKFwiLnBsYXllcl9fcGxheWJhY2tcIikuY2xpY2soZSA9PiB7XG5cdFx0XHRjb25zdCBiYXIgPSAkKGUuY3VycmVudFRhcmdldCk7XG5cdFx0XHRjb25zdCBjbGlja2VkUG9zaXRpb24gPSAgZS5vcmlnaW5hbEV2ZW50LmxheWVyWDtcblx0XHRcdGNvbnN0IG5ld0J1dHRvblBvc2l0aW9uUGVyY2VudCA9IChjbGlja2VkUG9zaXRpb24gLyBiYXIud2lkdGgoKSkgKiAxMDA7XG5cdFx0XHRjb25zdCBuZXdQbGF5ZXJCYWNrUG9zaXRpb25TZWMgPSAocGxheWVyLmdldER1cmF0aW9uKCkgLyAxMDApICogbmV3QnV0dG9uUG9zaXRpb25QZXJjZW50O1xuXHRcblx0XG5cdFx0XHQkKFwiLnBsYXllcl9fcGxheWJhY2stYnV0dG9uXCIpLmNzcyh7XG5cdFx0XHRcdGxlZnQ6IGAke25ld0J1dHRvblBvc2l0aW9uUGVyY2VudH0lYFxuXHRcdFx0fSk7XG5cdFxuXHRcdFx0cGxheWVyLnNlZWtUbyhuZXdQbGF5ZXJCYWNrUG9zaXRpb25TZWMpO1xuXHRcblx0XHR9KTtcblx0XG5cdFx0JChcIi5wbGF5ZXJfX3NwbGFzaFwiKS5jbGljayhlID0+IHtcblx0XHRcdHBsYXllci5wbGF5VmlkZW8oKTtcblx0XHR9KVxuXHRcblx0fTtcblx0XG5cdGNvbnN0IGZvcm1hdFRpbWUgPSB0aW1lU2VjID0+IHtcblx0XHRjb25zdCByb3VuZFRpbWUgPSBNYXRoLnJvdW5kKHRpbWVTZWMpO1xuXHRcblx0XHRjb25zdCBtaW51dGVzID0gYWRkWmVybyhNYXRoLmZsb29yKHJvdW5kVGltZSAvIDYwKSk7XG5cdFx0Y29uc3Qgc2Vjb25kcyA9IGFkZFplcm8ocm91bmRUaW1lIC0gbWludXRlcyAqIDYwKTtcblx0XG5cdFx0ZnVuY3Rpb24gYWRkWmVybyhudW0pIHtcblx0XHRcdHJldHVybiBudW0gPCAxMCA/IGAwJHtudW19YCA6IG51bTtcblx0XHRcdH1cblx0XG5cdFx0cmV0dXJuIGAke21pbnV0ZXN9IDogJHtzZWNvbmRzfWBcblx0fVxuXHRcblx0Y29uc3Qgb25QbGF5ZXJSZWFkeSA9ICgpID0+IHtcblx0XHRsZXQgaW50ZXJ2YWw7XG5cdFx0Y29uc3QgZHVyYXRpb25TZWMgPSBwbGF5ZXIuZ2V0RHVyYXRpb24oKTtcblx0XG5cdFx0JChcIi5wbGF5ZXJfX2R1cmF0aW9uLWVzdGltYXRlXCIpLnRleHQoZm9ybWF0VGltZShkdXJhdGlvblNlYykpO1xuXHRcblx0XHRpZiAodHlwZW9mIGludGVydmFsICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cdFx0fVxuXHRcblx0XHRpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdGNvbnN0IGNvbXBsZXRlZFNlYyA9IHBsYXllci5nZXRDdXJyZW50VGltZSgpO1xuXHRcdFx0Y29uc3QgY29tcGxpdGVkUGVyY2VudCA9IChjb21wbGV0ZWRTZWMgLyBkdXJhdGlvblNlYykgKiAxMDA7XG5cdFxuXHRcdFx0JChcIi5wbGF5ZXJfX3BsYXliYWNrLWJ1dHRvblwiKS5jc3Moe1xuXHRcdFx0XHRsZWZ0OiBgJHtjb21wbGl0ZWRQZXJjZW50fSVgXG5cdFx0XHR9KTtcblx0XG5cdFx0XHQkKFwiLnBsYXllcl9fZHVyYXRpb24tY29tcGxldGVkXCIpLnRleHQoZm9ybWF0VGltZShjb21wbGV0ZWRTZWMpKTtcblx0XG5cdFx0fSwgMTAwMCk7XG5cdH1cblx0XG5cdGNvbnN0IG9uUGxheWVyU3RhdGVDaGFuZ2UgPSBldmVudCA9PiB7XG5cdFx0c3dpdGNoIChldmVudC5kYXRhKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHBsYXllckNvbnRhaW5lci5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcblx0XHRcdFx0cGxheWVyQ29udGFpbmVyLmFkZENsYXNzKFwicGF1c2VkXCIpO1xuXHRcdFx0XHRicmVhaztcblx0XG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHBsYXllckNvbnRhaW5lci5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcblx0XHRcdFx0cGxheWVyQ29udGFpbmVyLnJlbW92ZUNsYXNzKFwicGF1c2VkXCIpO1xuXHRcdFx0XHRicmVhaztcblx0XG5cdFx0fVxuXHR9O1xuXHRcblx0ZnVuY3Rpb24gb25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkoKSB7XG5cdFx0cGxheWVyID0gbmV3IFlULlBsYXllcigneXQtcGxheWVyJywge1xuXHRcdFx0aGVpZ2h0OiAnNDA1Jyxcblx0XHRcdHdpZHRoOiAnNjYwJyxcblx0XHRcdHZpZGVvSWQ6ICdoazNLUGE2eld6bycsXG5cdFx0XHRwbGF5ZXJWYXJzOiB7XG5cdFx0XHRcdCdwbGF5c2lubGluZSc6IDFcblx0XHRcdH0sXG5cdFx0XHRldmVudHM6IHtcblx0XHRcdFx0J29uUmVhZHknOiBvblBsYXllclJlYWR5LFxuXHRcdFx0XHQnb25TdGF0ZUNoYW5nZSc6IG9uUGxheWVyU3RhdGVDaGFuZ2Vcblx0XHRcdH0sXG5cdFx0XHRwbGF5ZXJWYXJzOiB7XG5cdFx0XHRcdGNvbnRyb2xzOiAwLFxuXHRcdFx0XHRkaXNhYmxla2I6IDAsXG5cdFx0XHRcdHNob3dpbmZvOiAwLFxuXHRcdFx0XHRyZWw6IDAsXG5cdFx0XHRcdGF1dG9wbGF5OiAwLFxuXHRcdFx0XHRtb2Rlc3RicmFuZGluZzogMCxcblx0XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblx0XG5cdGl2ZW50c0luaXQgKCk7XG5cdFxufSkoKSIsIjsoZnVuY3Rpb24oKSB7XG5cdGNvbnN0IGZpbmRCbG9ja0J5QWxpYXMgPSBhbGlhcyA9PiB7XG5cdFx0cmV0dXJuICQoXCIucmV2aWV3c19faXRlbVwiKS5maWx0ZXIoKG5keCwgaXRlbSkgPT4ge1xuXHRcdFx0cmV0dXJuICQoaXRlbSkuYXR0cihcImRhdGEtbGlua2VkLXdpdGhcIikgPT0gYWxpYXNcblx0XHR9KTtcblx0fTtcblx0XG5cdCQoXCIuaW50ZXJhY3RpdmUtYXZhdGFyX19saW5rXCIpLmNsaWNrKChlKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcblx0XHRjb25zdCAkdGhpcyA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcblx0XHRjb25zdCB0YXJnZXQgPSAkdGhpcy5hdHRyKFwiZGF0YS1vcGVuXCIpO1xuXHRcdGNvbnN0IGl0ZW1Ub1Nob3cgPSBmaW5kQmxvY2tCeUFsaWFzKHRhcmdldCk7XG5cdFx0Y29uc3QgY3VySXRlbSA9ICR0aGlzIC5jbG9zZXN0KFwiLnJldmlld3NfX3N3aXRjaGVyLWl0ZW1cIik7XG5cdFxuXHRcdGl0ZW1Ub1Nob3cuYWRkQ2xhc3MoXCJhY3RpdmVcIikuc2libGluZ3MoKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcblx0XHRjdXJJdGVtLmFkZENsYXNzKFwiYWN0aXZlXCIpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG5cdFxuXHR9KTtcblx0XG59KSgpIiwiOyhmdW5jdGlvbigpIHtcblx0Y29uc3QgbGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXJyb3ctLXByZXdcIik7XG5cdGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhcnJvdy0tbmV4dFwiKTtcblx0Y29uc3QgaXRlbUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NsaWRlcl9fbGlzdFwiKVxuXHRcblx0Y29uc3QgbG9vcCA9IChkaXJlY3Rpb24sIGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFxuXHRcdGlmIChkaXJlY3Rpb24gPT0gXCJyaWdodFwiICkge1xuXHRcdFx0aXRlbUxpc3QuYXBwZW5kQ2hpbGQoaXRlbUxpc3QuZmlyc3RFbGVtZW50Q2hpbGQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpdGVtTGlzdC5pbnNlcnRCZWZvcmUoaXRlbUxpc3QubGFzdEVsZW1lbnRDaGlsZCwgc2xpZGVyX19saXN0LmZpcnN0RWxlbWVudENoaWxkKTtcblx0XHR9XG5cdH1cblx0XG5cdHJpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcblx0XHRsb29wIChcInJpZ2h0XCIsIGUpXG5cdH0pXG5cdFxuXHRsZWZ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcblx0XHRsb29wIChcImxlZnRcIiwgZSlcblx0fSlcbn0pKCkiLCI7KGZ1bmN0aW9uKCkge1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBURUFNXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuY29uc3Qgb3Blbkl0ZW0gPSBpdGVtID0+IHtcblx0Y29uc3QgY29udGFpbmVyID0gaXRlbS5jbG9zZXN0KFwiLnRlYW1fX2l0ZW1cIik7XG5cdGNvbnN0IGNvbnRlbnRCbG9jayA9IGNvbnRhaW5lci5maW5kKFwiLnRlYW1fX2NvbnRlbnRcIik7XG5cdGNvbnN0IHRleHRCbG9jayA9IGNvbnRlbnRCbG9jay5maW5kKFwiLnRlYW1fX2NvbnRlbnQtYmxvY2tcIik7XG5cdGNvbnN0IHJlcUhlaWdodCA9IHRleHRCbG9jay5oZWlnaHQoKTtcblxuXG5cdGNvbnRhaW5lci5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcblx0Y29udGVudEJsb2NrLmhlaWdodChyZXFIZWlnaHQpO1xuXHRcbn1cblxuY29uc3QgY2xvc2VFdmVyeUl0ZW0gPSBjb250YWluZXIgPT4ge1xuXHRjb25zdCBpdGVtcyA9IGNvbnRhaW5lci5maW5kKFwiLnRlYW1fX2NvbnRlbnRcIik7XG5cdGNvbnN0IGl0ZW1Db250YWluZXIgPSBjb250YWluZXIuZmluZChcIi50ZWFtX19pdGVtXCIpO1xuXG5cdGl0ZW1Db250YWluZXIucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG5cdGl0ZW1zLmhlaWdodCgwKTtcbn1cblxuJChcIi50ZWFtX190aWx0bGVcIikuY2xpY2soZSA9Pntcblx0Y29uc3QgJHRoaXMgPSAkKGUuY3VycmVudFRhcmdldCk7XG5cdGNvbnN0IGNvbnRhaW5lciA9ICR0aGlzLmNsb3Nlc3QoXCIudGVhbVwiKVxuXHRjb25zdCBlbGVtQ29udGFpbmVyID0gJHRoaXMuY2xvc2VzdChcIi50ZWFtX19pdGVtXCIpO1xuXG5cblx0aWYgKGVsZW1Db250YWluZXIuaGFzQ2xhc3MoXCJhY3RpdmVcIikpIHtcblx0XHRjbG9zZUV2ZXJ5SXRlbShjb250YWluZXIpO1xuXHR9IGVsc2Uge1xuXHRcdGNsb3NlRXZlcnlJdGVtKGNvbnRhaW5lcik7XG5cdFx0b3Blbkl0ZW0oJHRoaXMpO1xuXHR9XG5cblxufSk7XG5cbn0pKCkiXX0=
