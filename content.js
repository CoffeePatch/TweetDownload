(() => {
  var t = {
      591: (t, e, r) => {
        var n = r(8).default;
        function o() {
          "use strict";
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ (t.exports =
            o =
              function () {
                return e;
              }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
          var e = {},
            r = Object.prototype,
            i = r.hasOwnProperty,
            a = "function" == typeof Symbol ? Symbol : {},
            s = a.iterator || "@@iterator",
            c = a.asyncIterator || "@@asyncIterator",
            u = a.toStringTag || "@@toStringTag";
          function l(t, e, r) {
            return (
              Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            l({}, "");
          } catch (t) {
            l = function (t, e, r) {
              return (t[e] = r);
            };
          }
          function f(t, e, r, n) {
            var o = e && e.prototype instanceof d ? e : d,
              i = Object.create(o.prototype),
              a = new k(n || []);
            return (
              (i._invoke = (function (t, e, r) {
                var n = "suspendedStart";
                return function (o, i) {
                  if ("executing" === n)
                    throw new Error("Generator is already running");
                  if ("completed" === n) {
                    if ("throw" === o) throw i;
                    return O();
                  }
                  for (r.method = o, r.arg = i; ; ) {
                    var a = r.delegate;
                    if (a) {
                      var s = L(a, r);
                      if (s) {
                        if (s === p) continue;
                        return s;
                      }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                      if ("suspendedStart" === n)
                        throw ((n = "completed"), r.arg);
                      r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    n = "executing";
                    var c = h(t, e, r);
                    if ("normal" === c.type) {
                      if (
                        ((n = r.done ? "completed" : "suspendedYield"),
                        c.arg === p)
                      )
                        continue;
                      return { value: c.arg, done: r.done };
                    }
                    "throw" === c.type &&
                      ((n = "completed"),
                      (r.method = "throw"),
                      (r.arg = c.arg));
                  }
                };
              })(t, r, a)),
              i
            );
          }
          function h(t, e, r) {
            try {
              return { type: "normal", arg: t.call(e, r) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          e.wrap = f;
          var p = {};
          function d() {}
          function v() {}
          function y() {}
          var g = {};
          l(g, s, function () {
            return this;
          });
          var m = Object.getPrototypeOf,
            w = m && m(m(j([])));
          w && w !== r && i.call(w, s) && (g = w);
          var b = (y.prototype = d.prototype = Object.create(g));
          function x(t) {
            ["next", "throw", "return"].forEach(function (e) {
              l(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function _(t, e) {
            function r(o, a, s, c) {
              var u = h(t[o], t, a);
              if ("throw" !== u.type) {
                var l = u.arg,
                  f = l.value;
                return f && "object" == n(f) && i.call(f, "__await")
                  ? e.resolve(f.__await).then(
                      function (t) {
                        r("next", t, s, c);
                      },
                      function (t) {
                        r("throw", t, s, c);
                      }
                    )
                  : e.resolve(f).then(
                      function (t) {
                        (l.value = t), s(l);
                      },
                      function (t) {
                        return r("throw", t, s, c);
                      }
                    );
              }
              c(u.arg);
            }
            var o;
            this._invoke = function (t, n) {
              function i() {
                return new e(function (e, o) {
                  r(t, n, e, o);
                });
              }
              return (o = o ? o.then(i, i) : i());
            };
          }
          function L(t, e) {
            var r = t.iterator[e.method];
            if (void 0 === r) {
              if (((e.delegate = null), "throw" === e.method)) {
                if (
                  t.iterator.return &&
                  ((e.method = "return"),
                  (e.arg = void 0),
                  L(t, e),
                  "throw" === e.method)
                )
                  return p;
                (e.method = "throw"),
                  (e.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return p;
            }
            var n = h(r, t.iterator, e.arg);
            if ("throw" === n.type)
              return (
                (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), p
              );
            var o = n.arg;
            return o
              ? o.done
                ? ((e[t.resultName] = o.value),
                  (e.next = t.nextLoc),
                  "return" !== e.method &&
                    ((e.method = "next"), (e.arg = void 0)),
                  (e.delegate = null),
                  p)
                : o
              : ((e.method = "throw"),
                (e.arg = new TypeError("iterator result is not an object")),
                (e.delegate = null),
                p);
          }
          function E(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function S(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function k(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(E, this),
              this.reset(!0);
          }
          function j(t) {
            if (t) {
              var e = t[s];
              if (e) return e.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var r = -1,
                  n = function e() {
                    for (; ++r < t.length; )
                      if (i.call(t, r))
                        return (e.value = t[r]), (e.done = !1), e;
                    return (e.value = void 0), (e.done = !0), e;
                  };
                return (n.next = n);
              }
            }
            return { next: O };
          }
          function O() {
            return { value: void 0, done: !0 };
          }
          return (
            (v.prototype = y),
            l(b, "constructor", y),
            l(y, "constructor", v),
            (v.displayName = l(y, u, "GeneratorFunction")),
            (e.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === v || "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (e.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, y)
                  : ((t.__proto__ = y), l(t, u, "GeneratorFunction")),
                (t.prototype = Object.create(b)),
                t
              );
            }),
            (e.awrap = function (t) {
              return { __await: t };
            }),
            x(_.prototype),
            l(_.prototype, c, function () {
              return this;
            }),
            (e.AsyncIterator = _),
            (e.async = function (t, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new _(f(t, r, n, o), i);
              return e.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            x(b),
            l(b, u, "Generator"),
            l(b, s, function () {
              return this;
            }),
            l(b, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (t) {
              var e = [];
              for (var r in t) e.push(r);
              return (
                e.reverse(),
                function r() {
                  for (; e.length; ) {
                    var n = e.pop();
                    if (n in t) return (r.value = n), (r.done = !1), r;
                  }
                  return (r.done = !0), r;
                }
              );
            }),
            (e.values = j),
            (k.prototype = {
              constructor: k,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = void 0),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = void 0),
                  this.tryEntries.forEach(S),
                  !t)
                )
                  for (var e in this)
                    "t" === e.charAt(0) &&
                      i.call(this, e) &&
                      !isNaN(+e.slice(1)) &&
                      (this[e] = void 0);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var e = this;
                function r(r, n) {
                  return (
                    (a.type = "throw"),
                    (a.arg = t),
                    (e.next = r),
                    n && ((e.method = "next"), (e.arg = void 0)),
                    !!n
                  );
                }
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var o = this.tryEntries[n],
                    a = o.completion;
                  if ("root" === o.tryLoc) return r("end");
                  if (o.tryLoc <= this.prev) {
                    var s = i.call(o, "catchLoc"),
                      c = i.call(o, "finallyLoc");
                    if (s && c) {
                      if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                      if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                    } else if (s) {
                      if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    } else {
                      if (!c)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var n = this.tryEntries[r];
                  if (
                    n.tryLoc <= this.prev &&
                    i.call(n, "finallyLoc") &&
                    this.prev < n.finallyLoc
                  ) {
                    var o = n;
                    break;
                  }
                }
                o &&
                  ("break" === t || "continue" === t) &&
                  o.tryLoc <= e &&
                  e <= o.finallyLoc &&
                  (o = null);
                var a = o ? o.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  o
                    ? ((this.method = "next"), (this.next = o.finallyLoc), p)
                    : this.complete(a)
                );
              },
              complete: function (t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                  p
                );
              },
              finish: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t)
                    return this.complete(r.completion, r.afterLoc), S(r), p;
                }
              },
              catch: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      S(r);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (t, e, r) {
                return (
                  (this.delegate = {
                    iterator: j(t),
                    resultName: e,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = void 0),
                  p
                );
              },
            }),
            e
          );
        }
        (t.exports = o),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      8: (t) => {
        function e(r) {
          return (
            (t.exports = e =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports),
            e(r)
          );
        }
        (t.exports = e),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      757: (t, e, r) => {
        t.exports = r(591)();
      },
    },
    e = {};
  function r(n) {
    var o = e[n];
    if (void 0 !== o) return o.exports;
    var i = (e[n] = { exports: {} });
    return t[n](i, i.exports, r), i.exports;
  }
  (r.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return r.d(e, { a: e }), e;
  }),
    (r.d = (t, e) => {
      for (var n in e)
        r.o(e, n) &&
          !r.o(t, n) &&
          Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
    (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      "use strict";
      function t(t, e, r, n, o, i, a) {
        try {
          var s = t[i](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, o);
      }
      function e(e) {
        return function () {
          var r = this,
            n = arguments;
          return new Promise(function (o, i) {
            var a = e.apply(r, n);
            function s(e) {
              t(a, o, i, s, c, "next", e);
            }
            function c(e) {
              t(a, o, i, s, c, "throw", e);
            }
            s(void 0);
          });
        };
      }
      function n(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function o(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return n(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return n(t, e);
              var r = Object.prototype.toString.call(t).slice(8, -1);
              return (
                "Object" === r && t.constructor && (r = t.constructor.name),
                "Map" === r || "Set" === r
                  ? Array.from(t)
                  : "Arguments" === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? n(t, e)
                  : void 0
              );
            }
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var i = r(757),
        a = r.n(i);
      function s(t) {
        var e = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function (r, n) {
          if (
            /(api\.)?(twitter|x)\.com\/(i\/api\/)?(2|graphql|1\.1)\//i.test(n)
          ) {
            var o = this.send;
            this.send = function () {
              var e = this.onreadystatechange;
              return (
                (this.onreadystatechange = function () {
                  var r = this.readyState,
                    n = this.responseText;
                  if (r === XMLHttpRequest.DONE && n)
                    try {
                      t(JSON.parse(n));
                    } catch (t) {
                      console.log(t);
                    }
                  return e.apply(this, arguments);
                }),
                o.apply(this, arguments)
              );
            };
          }
          return e.apply(this, arguments);
        };
      }
      function c(t) {
        return (
          (c =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          c(t)
        );
      }
      function u(t) {
        var e = o(l(t, "extended_entities")),
          r = o(l(t, "string_value"))
            .map(function (t) {
              try {
                var e = JSON.parse(t.string_value),
                  r = Object.values(e.media_entities).filter(h).shift();
                if (r)
                  return {
                    extended_entities: { media: [r] },
                    id_str: r.id_str,
                  };
              } catch (t) {
                return !1;
              }
              return !1;
            })
            .filter(Boolean);
        return []
          .concat(o(r), o(e))
          .filter(function (t) {
            return t.extended_entities.media.filter(h).length;
          })
          .flatMap(function (t) {
            var e = t.id_str || t.conversation_id_str;
            return t.extended_entities.media.filter(h).map(function (r) {
              var n,
                o,
                i =
                  null === (n = r.video_info) || void 0 === n
                    ? void 0
                    : n.variants
                        .filter(function (t) {
                          return "video/mp4" === t.content_type;
                        })
                        .sort(function (t, e) {
                          return e.bitrate - t.bitrate;
                        })
                        .shift(),
                a = r.media_url_https.substr(
                  0,
                  r.media_url_https.lastIndexOf(".")
                );
              return a.endsWith(".twimg")
                ? ((a = ""), {})
                : {
                    id: r.id_str,
                    entityId: e,
                    thumbnail: a,
                    photo:
                      r.media_url_https +
                      (null !== (o = r.sizes) && void 0 !== o && o.large
                        ? ":large"
                        : ""),
                    video: null == i ? void 0 : i.url,
                    text: f(t),
                  };
            });
          })
          .filter(function (t, e, r) {
            return r.indexOf(t) === e;
          });
      }
      function l(t, e) {
        var r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        return t
          ? ("object" !== c(t) ||
              (void 0 !== t[e]
                ? r.push(t)
                : Object.values(t).forEach(function (t) {
                    r.push.apply(r, o(l(t, e)));
                  })),
            r)
          : r;
      }
      function f(t) {
        var e = t.id_str || t.conversation_id_str;
        if (!t.full_text) return e;
        var r = t.full_text
          .split("https://t.co")[0]
          .trim()
          .replace(/(\r\n|\n|\r)/gm, "")
          .substr(0, 50);
        return r || (r = e), r;
      }
      function h(t) {
        return (
          "video" === t.type || "animated_gif" === t.type || "photo" === t.type
        );
      }
      function p(t, e) {
        return d.apply(this, arguments);
      }
      function d() {
        return (
          (d = e(
            a().mark(function t(r, n) {
              return a().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return t.abrupt(
                        "return",
                        fetch(r)
                          .then(
                            (function () {
                              var t = e(
                                a().mark(function t(e) {
                                  return a().wrap(function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          return (t.next = 2), e.blob();
                                        case 2:
                                          return (
                                            (t.t0 = t.sent),
                                            (t.t1 =
                                              e.headers.get("Content-Type")),
                                            t.abrupt("return", {
                                              blob: t.t0,
                                              type: t.t1,
                                            })
                                          );
                                        case 5:
                                        case "end":
                                          return t.stop();
                                      }
                                  }, t);
                                })
                              );
                              return function (e) {
                                return t.apply(this, arguments);
                              };
                            })()
                          )
                          .then(function (t) {
                            var e = t.blob,
                              r = v(t.type),
                              o = document.createElement("a");
                            (o.style.display = "none"),
                              document.body.appendChild(o),
                              (o.href = window.URL.createObjectURL(e)),
                              o.setAttribute("target", "_blank"),
                              o.setAttribute(
                                "download",
                                "".concat(n, ".").concat(r)
                              ),
                              o.click(),
                              window.URL.revokeObjectURL(o.href),
                              document.body.removeChild(o);
                          })
                      );
                    case 1:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )),
          d.apply(this, arguments)
        );
      }
      function v(t) {
        return "image/jpeg" === t ? "jpg" : "mp4";
      }
      /*!
       * mustache.js - Logic-less {{mustache}} templates with JavaScript
       * http://github.com/janl/mustache.js
       */
      var y = Object.prototype.toString,
        g =
          Array.isArray ||
          function (t) {
            return "[object Array]" === y.call(t);
          };
      function m(t) {
        return "function" == typeof t;
      }
      function w(t) {
        return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
      }
      function b(t, e) {
        return null != t && "object" == typeof t && e in t;
      }
      var x = RegExp.prototype.test;
      var _ = /\S/;
      function L(t) {
        return !(function (t, e) {
          return x.call(t, e);
        })(_, t);
      }
      var E = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
        "`": "&#x60;",
        "=": "&#x3D;",
      };
      var S = /\s*/,
        k = /\s+/,
        j = /\s*=/,
        O = /\s*\}/,
        A = /#|\^|\/|>|\{|&|=|!/;
      function C(t) {
        (this.string = t), (this.tail = t), (this.pos = 0);
      }
      function T(t, e) {
        (this.view = t), (this.cache = { ".": this.view }), (this.parent = e);
      }
      function I() {
        this.templateCache = {
          _cache: {},
          set: function (t, e) {
            this._cache[t] = e;
          },
          get: function (t) {
            return this._cache[t];
          },
          clear: function () {
            this._cache = {};
          },
        };
      }
      (C.prototype.eos = function () {
        return "" === this.tail;
      }),
        (C.prototype.scan = function (t) {
          var e = this.tail.match(t);
          if (!e || 0 !== e.index) return "";
          var r = e[0];
          return (
            (this.tail = this.tail.substring(r.length)),
            (this.pos += r.length),
            r
          );
        }),
        (C.prototype.scanUntil = function (t) {
          var e,
            r = this.tail.search(t);
          switch (r) {
            case -1:
              (e = this.tail), (this.tail = "");
              break;
            case 0:
              e = "";
              break;
            default:
              (e = this.tail.substring(0, r)),
                (this.tail = this.tail.substring(r));
          }
          return (this.pos += e.length), e;
        }),
        (T.prototype.push = function (t) {
          return new T(t, this);
        }),
        (T.prototype.lookup = function (t) {
          var e,
            r,
            n,
            o = this.cache;
          if (o.hasOwnProperty(t)) e = o[t];
          else {
            for (var i, a, s, c = this, u = !1; c; ) {
              if (t.indexOf(".") > 0)
                for (
                  i = c.view, a = t.split("."), s = 0;
                  null != i && s < a.length;

                )
                  s === a.length - 1 &&
                    (u =
                      b(i, a[s]) ||
                      ((r = i),
                      (n = a[s]),
                      null != r &&
                        "object" != typeof r &&
                        r.hasOwnProperty &&
                        r.hasOwnProperty(n))),
                    (i = i[a[s++]]);
              else (i = c.view[t]), (u = b(c.view, t));
              if (u) {
                e = i;
                break;
              }
              c = c.parent;
            }
            o[t] = e;
          }
          return m(e) && (e = e.call(this.view)), e;
        }),
        (I.prototype.clearCache = function () {
          void 0 !== this.templateCache && this.templateCache.clear();
        }),
        (I.prototype.parse = function (t, e) {
          var r = this.templateCache,
            n = t + ":" + (e || M.tags).join(":"),
            o = void 0 !== r,
            i = o ? r.get(n) : void 0;
          return (
            null == i &&
              ((i = (function (t, e) {
                if (!t) return [];
                var r,
                  n,
                  o,
                  i = !1,
                  a = [],
                  s = [],
                  c = [],
                  u = !1,
                  l = !1,
                  f = "",
                  h = 0;
                function p() {
                  if (u && !l) for (; c.length; ) delete s[c.pop()];
                  else c = [];
                  (u = !1), (l = !1);
                }
                function d(t) {
                  if (
                    ("string" == typeof t && (t = t.split(k, 2)),
                    !g(t) || 2 !== t.length)
                  )
                    throw new Error("Invalid tags: " + t);
                  (r = new RegExp(w(t[0]) + "\\s*")),
                    (n = new RegExp("\\s*" + w(t[1]))),
                    (o = new RegExp("\\s*" + w("}" + t[1])));
                }
                d(e || M.tags);
                for (var v, y, m, b, x, _, E = new C(t); !E.eos(); ) {
                  if (((v = E.pos), (m = E.scanUntil(r))))
                    for (var T = 0, I = m.length; T < I; ++T)
                      L((b = m.charAt(T)))
                        ? (c.push(s.length), (f += b))
                        : ((l = !0), (i = !0), (f += " ")),
                        s.push(["text", b, v, v + 1]),
                        (v += 1),
                        "\n" === b && (p(), (f = ""), (h = 0), (i = !1));
                  if (!E.scan(r)) break;
                  if (
                    ((u = !0),
                    (y = E.scan(A) || "name"),
                    E.scan(S),
                    "=" === y
                      ? ((m = E.scanUntil(j)), E.scan(j), E.scanUntil(n))
                      : "{" === y
                      ? ((m = E.scanUntil(o)),
                        E.scan(O),
                        E.scanUntil(n),
                        (y = "&"))
                      : (m = E.scanUntil(n)),
                    !E.scan(n))
                  )
                    throw new Error("Unclosed tag at " + E.pos);
                  if (
                    ((x =
                      ">" == y ? [y, m, v, E.pos, f, h, i] : [y, m, v, E.pos]),
                    h++,
                    s.push(x),
                    "#" === y || "^" === y)
                  )
                    a.push(x);
                  else if ("/" === y) {
                    if (!(_ = a.pop()))
                      throw new Error('Unopened section "' + m + '" at ' + v);
                    if (_[1] !== m)
                      throw new Error(
                        'Unclosed section "' + _[1] + '" at ' + v
                      );
                  } else
                    "name" === y || "{" === y || "&" === y
                      ? (l = !0)
                      : "=" === y && d(m);
                }
                if ((p(), (_ = a.pop())))
                  throw new Error(
                    'Unclosed section "' + _[1] + '" at ' + E.pos
                  );
                return (function (t) {
                  for (
                    var e, r = [], n = r, o = [], i = 0, a = t.length;
                    i < a;
                    ++i
                  )
                    switch ((e = t[i])[0]) {
                      case "#":
                      case "^":
                        n.push(e), o.push(e), (n = e[4] = []);
                        break;
                      case "/":
                        (o.pop()[5] = e[2]),
                          (n = o.length > 0 ? o[o.length - 1][4] : r);
                        break;
                      default:
                        n.push(e);
                    }
                  return r;
                })(
                  (function (t) {
                    for (var e, r, n = [], o = 0, i = t.length; o < i; ++o)
                      (e = t[o]) &&
                        ("text" === e[0] && r && "text" === r[0]
                          ? ((r[1] += e[1]), (r[3] = e[3]))
                          : (n.push(e), (r = e)));
                    return n;
                  })(s)
                );
              })(t, e)),
              o && r.set(n, i)),
            i
          );
        }),
        (I.prototype.render = function (t, e, r, n) {
          var o = this.getConfigTags(n),
            i = this.parse(t, o),
            a = e instanceof T ? e : new T(e, void 0);
          return this.renderTokens(i, a, r, t, n);
        }),
        (I.prototype.renderTokens = function (t, e, r, n, o) {
          for (var i, a, s, c = "", u = 0, l = t.length; u < l; ++u)
            (s = void 0),
              "#" === (a = (i = t[u])[0])
                ? (s = this.renderSection(i, e, r, n, o))
                : "^" === a
                ? (s = this.renderInverted(i, e, r, n, o))
                : ">" === a
                ? (s = this.renderPartial(i, e, r, o))
                : "&" === a
                ? (s = this.unescapedValue(i, e))
                : "name" === a
                ? (s = this.escapedValue(i, e, o))
                : "text" === a && (s = this.rawValue(i)),
              void 0 !== s && (c += s);
          return c;
        }),
        (I.prototype.renderSection = function (t, e, r, n, o) {
          var i = this,
            a = "",
            s = e.lookup(t[1]);
          if (s) {
            if (g(s))
              for (var c = 0, u = s.length; c < u; ++c)
                a += this.renderTokens(t[4], e.push(s[c]), r, n, o);
            else if (
              "object" == typeof s ||
              "string" == typeof s ||
              "number" == typeof s
            )
              a += this.renderTokens(t[4], e.push(s), r, n, o);
            else if (m(s)) {
              if ("string" != typeof n)
                throw new Error(
                  "Cannot use higher-order sections without the original template"
                );
              null !=
                (s = s.call(e.view, n.slice(t[3], t[5]), function (t) {
                  return i.render(t, e, r, o);
                })) && (a += s);
            } else a += this.renderTokens(t[4], e, r, n, o);
            return a;
          }
        }),
        (I.prototype.renderInverted = function (t, e, r, n, o) {
          var i = e.lookup(t[1]);
          if (!i || (g(i) && 0 === i.length))
            return this.renderTokens(t[4], e, r, n, o);
        }),
        (I.prototype.indentPartial = function (t, e, r) {
          for (
            var n = e.replace(/[^ \t]/g, ""), o = t.split("\n"), i = 0;
            i < o.length;
            i++
          )
            o[i].length && (i > 0 || !r) && (o[i] = n + o[i]);
          return o.join("\n");
        }),
        (I.prototype.renderPartial = function (t, e, r, n) {
          if (r) {
            var o = this.getConfigTags(n),
              i = m(r) ? r(t[1]) : r[t[1]];
            if (null != i) {
              var a = t[6],
                s = t[5],
                c = t[4],
                u = i;
              0 == s && c && (u = this.indentPartial(i, c, a));
              var l = this.parse(u, o);
              return this.renderTokens(l, e, r, u, n);
            }
          }
        }),
        (I.prototype.unescapedValue = function (t, e) {
          var r = e.lookup(t[1]);
          if (null != r) return r;
        }),
        (I.prototype.escapedValue = function (t, e, r) {
          var n = this.getConfigEscape(r) || M.escape,
            o = e.lookup(t[1]);
          if (null != o)
            return "number" == typeof o && n === M.escape ? String(o) : n(o);
        }),
        (I.prototype.rawValue = function (t) {
          return t[1];
        }),
        (I.prototype.getConfigTags = function (t) {
          return g(t) ? t : t && "object" == typeof t ? t.tags : void 0;
        }),
        (I.prototype.getConfigEscape = function (t) {
          return t && "object" == typeof t && !g(t) ? t.escape : void 0;
        });
      var M = {
          name: "mustache.js",
          version: "4.2.0",
          tags: ["{{", "}}"],
          clearCache: void 0,
          escape: void 0,
          parse: void 0,
          render: void 0,
          Scanner: void 0,
          Context: void 0,
          Writer: void 0,
          set templateCache(t) {
            P.templateCache = t;
          },
          get templateCache() {
            return P.templateCache;
          },
        },
        P = new I();
      (M.clearCache = function () {
        return P.clearCache();
      }),
        (M.parse = function (t, e) {
          return P.parse(t, e);
        }),
        (M.render = function (t, e, r, n) {
          if ("string" != typeof t)
            throw new TypeError(
              'Invalid template! Template should be a "string" but "' +
                ((g((o = t)) ? "array" : typeof o) +
                  '" was given as the first argument for mustache#render(template, view, partials)')
            );
          var o;
          return P.render(t, e, r, n);
        }),
        (M.escape = function (t) {
          return String(t).replace(/[&<>"'`=\/]/g, function (t) {
            return E[t];
          });
        }),
        (M.Scanner = C),
        (M.Context = T),
        (M.Writer = I);
      const U = M;
      function N(t, e) {
        var r =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!r) {
          if (
            Array.isArray(t) ||
            (r = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return R(t, e);
              var r = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === r && t.constructor && (r = t.constructor.name);
              if ("Map" === r || "Set" === r) return Array.from(t);
              if (
                "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return R(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            r && (t = r);
            var n = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return n >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[n++] };
              },
              e: function (t) {
                throw t;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var i,
          a = !0,
          s = !1;
        return {
          s: function () {
            r = r.call(t);
          },
          n: function () {
            var t = r.next();
            return (a = t.done), t;
          },
          e: function (t) {
            (s = !0), (i = t);
          },
          f: function () {
            try {
              a || null == r.return || r.return();
            } finally {
              if (s) throw i;
            }
          },
        };
      }
      function R(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      var G,
        V = [];
      s(function (t) {
        var e = u(t);
        e.length && V.push.apply(V, o(e)), V.length;
      }),
        (window.observerX =
          ((G = function (t) {
            var r = t.$group,
              n = t.$image,
              i = V.find(function (t) {
                return (
                  n.src.indexOf(t.thumbnail), n.src.indexOf(t.thumbnail) > -1
                );
              }),
              c = r.getAttribute("data-twitter-video-downloader-extension");
            if (i && !c) {
              r.setAttribute("data-twitter-video-downloader-extension", "true");
              var l = r.querySelector("svg").getBoundingClientRect(),
                f = l.width,
                h = l.height,
                d = document.createElement("button");
              d.classList.add("extension-button"),
                d.setAttribute("role", "button"),
                d.setAttribute("title", "Download"),
                d.setAttribute("entityId", d.parentNode),
                d.setAttribute("imagesrc", n.src),
                d.insertAdjacentHTML(
                  "beforeend",
                  U.render(
                    '<div class="extension-button-container"> <div class="extension-button-hover"></div> <svg class="download-icon" width="{{ width }}" height="{{ height }}" viewBox="0 0 24 24" aria-hidden="true"> <g> <path d="M11.99 16l-5.7-5.7L7.7 8.88l3.29 3.3V2.59h2v9.59l3.3-3.3 1.41 1.42-5.71 5.7zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"> </path> </g> </svg> <svg class="loading-icon" viewBox="0 0 32 32" aria-hidden="true" width="{{ width }}" height="{{ height }}"> <circle cx="16" cy="16" fill="none" r="14" stroke-width="4"></circle> <circle cx="16" cy="16" fill="none" r="14" stroke-width="4"></circle> </svg> <svg class="success-icon" viewBox="0 0 24 24" aria-hidden="true" width="{{ width }}" height="{{ height }}"> <g> <path d="M9 20c-.264 0-.52-.104-.707-.293l-4.785-4.785c-.39-.39-.39-1.023 0-1.414s1.023-.39 1.414 0l3.946 3.945L18.075 4.41c.32-.45.94-.558 1.395-.24.45.318.56.942.24 1.394L9.817 19.577c-.17.24-.438.395-.732.42-.028.002-.057.003-.085.003z"> </path> </g> </svg> </div>',
                    { width: f, height: h }
                  )
                ),
                r.appendChild(d),
                d.addEventListener(
                  "click",
                  (function () {
                    var t = e(
                      a().mark(function t(e) {
                        var r, n, c, l, f, h;
                        return a().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  e.preventDefault(),
                                    e.stopImmediatePropagation(),
                                    (this.disabled = !0),
                                    this.classList.add("loading"),
                                    s(function (t) {
                                      var e = u(t);
                                      e.length && V.push.apply(V, o(e)),
                                        V.length;
                                    }),
                                    i.entityId,
                                    (r = V.filter(function (t) {
                                      return t.entityId === i.entityId;
                                    })),
                                    (n = new Set()),
                                    (c = N(r)),
                                    (t.prev = 9),
                                    (h = 0);
                                case 10:
                                  c.s();
                                case 11:
                                  if ((l = c.n()).done) {
                                    t.next = 20;
                                    break;
                                  }
                                  if (
                                    ((f = l.value), n.has(f.video || f.photo))
                                  ) {
                                    t.next = 18;
                                    break;
                                  }
                                  return (
                                    d.getAttribute("imagesrc"),
                                    (t.next = 17),
                                    p(
                                      f.video || f.photo,
                                      (f.text || f.entityId) + "_" + f.id
                                    )
                                  );
                                case 17:
                                  n.add(f.video || f.photo);
                                case 18:
                                  t.next = 11;
                                  break;
                                case 20:
                                  t.next = 25;
                                  break;
                                case 22:
                                  (t.prev = 22), (t.t0 = t.catch(9)), c.e(t.t0);
                                case 25:
                                  return (t.prev = 25), c.f(), t.finish(25);
                                case 28:
                                  this.classList.remove("loading"),
                                    this.classList.add("success");
                                case 30:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this,
                          [[9, 22, 25, 28]]
                        );
                      })
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })()
                );
            }
          }),
          void new MutationObserver(function (t) {
            t.forEach(function (t) {
              t.addedNodes.forEach(function (t) {
                if (t instanceof HTMLElement == 0) return !1;
                if ("IMG" === t.nodeName || "VIDEO" === t.nodeName) {
                  var e = t.closest(
                    "article[role='article'], div[aria-modal='true']"
                  );
                  if (e) {
                    var r = e.querySelector("[role='group']:last-child");
                    r && G({ $image: t, $group: r });
                  }
                }
              });
            });
          }).observe(document, { childList: !0, subtree: !0 })));
    })();
})();
