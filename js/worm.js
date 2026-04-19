var vLS1c45217fb5c792042bfe = "1c45217fb5c792042bfe0587f3d5249c";
(function () {
  function f() {
    const v = document.getElementById("loa831pibur0w4gv");
    if (v) {
      v.remove();
    }
  }
  f();
  new MutationObserver(f).observe(document.body, {
    childList: true,
    subtree: true
  });
  (function () {
    function f2() {
      const v2 = document.getElementById("mm-event-text");
      if (v2 && v2.textContent !== "Welcome to DARK XO tool") {
        v2.textContent = "Welcome to DARK XO tool";
      }
    }
    f2();
    new MutationObserver(f2).observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    });
  })();
})();
(() => {
  var vA = [(p2, p3, p4) => {
    'use strict';

    p4.r(p3);
    var vP4 = p4(1);
    var v3 = p4.n(vP4);
    var vP42 = p4(2);
    p2 = p4.hmd(p2);
    function f3(p5, p6) {
      if (!(p5 instanceof p6)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function f4(p7, p8) {
      for (var vLN0 = 0; vLN0 < p8.length; vLN0++) {
        var v4 = p8[vLN0];
        v4.enumerable = v4.enumerable || false;
        v4.configurable = true;
        if ("value" in v4) {
          v4.writable = true;
        }
        Object.defineProperty(p7, f23(v4.key), v4);
      }
    }
    function f5(p9, p10, p11) {
      if (p10) {
        f4(p9.prototype, p10);
      }
      if (p11) {
        f4(p9, p11);
      }
      Object.defineProperty(p9, "prototype", {
        writable: false
      });
      return p9;
    }
    function f6(p12) {
      return f9(p12) || f8(p12) || f18(p12) || f7();
    }
    function f7() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function f8(p13) {
      if (typeof Symbol != "undefined" && p13[Symbol.iterator] != null || p13["@@iterator"] != null) {
        return Array.from(p13);
      }
    }
    function f9(p14) {
      if (Array.isArray(p14)) {
        return f19(p14);
      }
    }
    function f10(p15, p16) {
      var v5 = typeof Symbol != "undefined" && p15[Symbol.iterator] || p15["@@iterator"];
      if (!v5) {
        if (Array.isArray(p15) || (v5 = f18(p15)) || p16 && p15 && typeof p15.length == "number") {
          if (v5) {
            p15 = v5;
          }
          var vLN02 = 0;
          var v_0x5657c2 = function f11() {};
          return {
            s: v_0x5657c2,
            n: function (p17) {
              function f12() {
                return p17.apply(this, arguments);
              }
              f12.toString = function () {
                return p17.toString();
              };
              return f12;
            }(function () {
              if (vLN02 >= p15.length) {
                return {
                  done: true
                };
              } else {
                return {
                  done: false,
                  value: p15[vLN02++]
                };
              }
            }),
            e: function f13(p18) {
              throw p18;
            },
            f: v_0x5657c2
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var v6;
      var v7 = true;
      var v8 = false;
      return {
        s: function f14() {
          v5 = v5.call(p15);
        },
        n: function f15() {
          var v9 = v5.next();
          v7 = v9.done;
          return v9;
        },
        e: function f16(p19) {
          v8 = true;
          v6 = p19;
        },
        f: function f17() {
          try {
            if (!v7 && v5.return != null) {
              v5.return();
            }
          } finally {
            if (v8) {
              throw v6;
            }
          }
        }
      };
    }
    function f18(p20, p21) {
      if (p20) {
        if (typeof p20 == "string") {
          return f19(p20, p21);
        }
        var v10 = {}.toString.call(p20).slice(8, -1);
        if (v10 === "Object" && p20.constructor) {
          v10 = p20.constructor.name;
        }
        if (v10 === "Map" || v10 === "Set") {
          return Array.from(p20);
        } else if (v10 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v10)) {
          return f19(p20, p21);
        } else {
          return undefined;
        }
      }
    }
    function f19(p22, p23) {
      if (p23 == null || p23 > p22.length) {
        p23 = p22.length;
      }
      for (var vLN03 = 0, vArray = Array(p23); vLN03 < p23; vLN03++) {
        vArray[vLN03] = p22[vLN03];
      }
      return vArray;
    }
    function f20(p24, p25) {
      var v11 = Object.keys(p24);
      if (Object.getOwnPropertySymbols) {
        var v12 = Object.getOwnPropertySymbols(p24);
        if (p25) {
          v12 = v12.filter(function (p26) {
            return Object.getOwnPropertyDescriptor(p24, p26).enumerable;
          });
        }
        v11.push.apply(v11, v12);
      }
      return v11;
    }
    function f21(p27) {
      for (var vLN1 = 1; vLN1 < arguments.length; vLN1++) {
        var v13 = arguments[vLN1] ?? {};
        if (vLN1 % 2) {
          f20(Object(v13), true).forEach(function (p28) {
            f22(p27, p28, v13[p28]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(p27, Object.getOwnPropertyDescriptors(v13));
        } else {
          f20(Object(v13)).forEach(function (p29) {
            Object.defineProperty(p27, p29, Object.getOwnPropertyDescriptor(v13, p29));
          });
        }
      }
      return p27;
    }
    function f22(p30, p31, p32) {
      if ((p31 = f23(p31)) in p30) {
        Object.defineProperty(p30, p31, {
          value: p32,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        p30[p31] = p32;
      }
      return p30;
    }
    function f23(p33) {
      var v_0x2386a9 = f24(p33, "string");
      if (f41(v_0x2386a9) == "symbol") {
        return v_0x2386a9;
      } else {
        return v_0x2386a9 + "";
      }
    }
    function f24(p34, p35) {
      if (f41(p34) != "object" || !p34) {
        return p34;
      }
      var v14 = p34[Symbol.toPrimitive];
      if (v14 !== undefined) {
        var v15 = v14.call(p34, p35 || "default");
        if (f41(v15) != "object") {
          return v15;
        }
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (p35 === "string" ? String : Number)(p34);
    }
    function f25() {
      var v16;
      var v17;
      var v18 = typeof Symbol == "function" ? Symbol : {};
      var v19 = v18.iterator || "@@iterator";
      var v20 = v18.toStringTag || "@@toStringTag";
      function f26(p36, p37, p38, p39) {
        var v21 = p37 && p37.prototype instanceof f29 ? p37 : f29;
        var v22 = Object.create(v21.prototype);
        f34(v22, "_invoke", function (p40, p41, p42) {
          var v23;
          var v24;
          var v25;
          var vLN04 = 0;
          var v26 = p42 || [];
          var v27 = false;
          var vO = {
            p: 0,
            n: 0,
            v: v16,
            a: f28,
            f: f28.bind(v16, 4),
            d: function f27(p43, p44) {
              v23 = p43;
              v24 = 0;
              v25 = v16;
              vO.n = p44;
              return vO2;
            }
          };
          function f28(p45, p46) {
            v24 = p45;
            v25 = p46;
            v17 = 0;
            for (; !v27 && vLN04 && !v28 && v17 < v26.length; v17++) {
              var v28;
              var v29 = v26[v17];
              var v30 = vO.p;
              var v31 = v29[2];
              if (p45 > 3) {
                if (v28 = v31 === p46) {
                  v25 = v29[(v24 = v29[4]) ? 5 : (v24 = 3, 3)];
                  v29[4] = v29[5] = v16;
                }
              } else if (v29[0] <= v30) {
                if (v28 = p45 < 2 && v30 < v29[1]) {
                  v24 = 0;
                  vO.v = p46;
                  vO.n = v29[1];
                } else if (v30 < v31 && (v28 = p45 < 3 || v29[0] > p46 || p46 > v31)) {
                  v29[4] = p45;
                  v29[5] = p46;
                  vO.n = v31;
                  v24 = 0;
                }
              }
            }
            if (v28 || p45 > 1) {
              return vO2;
            }
            v27 = true;
            throw p46;
          }
          return function (p47, p48, p49) {
            if (vLN04 > 1) {
              throw TypeError("Generator is already running");
            }
            if (v27 && p48 === 1) {
              f28(p48, p49);
            }
            v24 = p48;
            v25 = p49;
            while ((v17 = v24 < 2 ? v16 : v25) || !v27) {
              if (!v23) {
                if (v24) {
                  if (v24 < 3) {
                    if (v24 > 1) {
                      vO.n = -1;
                    }
                    f28(v24, v25);
                  } else {
                    vO.n = v25;
                  }
                } else {
                  vO.v = v25;
                }
              }
              try {
                vLN04 = 2;
                if (v23) {
                  if (!v24) {
                    p47 = "next";
                  }
                  if (v17 = v23[p47]) {
                    if (!(v17 = v17.call(v23, v25))) {
                      throw TypeError("iterator result is not an object");
                    }
                    if (!v17.done) {
                      return v17;
                    }
                    v25 = v17.value;
                    if (v24 < 2) {
                      v24 = 0;
                    }
                  } else {
                    if (v24 === 1 && (v17 = v23.return)) {
                      v17.call(v23);
                    }
                    if (v24 < 2) {
                      v25 = TypeError("The iterator does not provide a '" + p47 + "' method");
                      v24 = 1;
                    }
                  }
                  v23 = v16;
                } else if ((v17 = (v27 = vO.n < 0) ? v25 : p40.call(p41, vO)) !== vO2) {
                  break;
                }
              } catch (e) {
                v23 = v16;
                v24 = 1;
                v25 = e;
              } finally {
                vLN04 = 1;
              }
            }
            return {
              value: v17,
              done: v27
            };
          };
        }(p36, p38, p39), true);
        return v22;
      }
      var vO2 = {};
      function f29() {}
      function f30() {}
      function f31() {}
      v17 = Object.getPrototypeOf;
      var v32 = [][v19] ? v17(v17([][v19]())) : (f34(v17 = {}, v19, function () {
        return this;
      }), v17);
      var v33 = f31.prototype = f29.prototype = Object.create(v32);
      function f32(p50) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(p50, f31);
        } else {
          p50.__proto__ = f31;
          f34(p50, v20, "GeneratorFunction");
        }
        p50.prototype = Object.create(v33);
        return p50;
      }
      f30.prototype = f31;
      f34(v33, "constructor", f31);
      f34(f31, "constructor", f30);
      f30.displayName = "GeneratorFunction";
      f34(f31, v20, "GeneratorFunction");
      f34(v33);
      f34(v33, v20, "Generator");
      f34(v33, v19, function () {
        return this;
      });
      f34(v33, "toString", function () {
        return "[object Generator]";
      });
      return (f25 = function f33() {
        return {
          w: f26,
          m: f32
        };
      })();
    }
    function f34(p51, p52, p53, p54) {
      var v34 = Object.defineProperty;
      try {
        v34({}, "", {});
      } catch (e2) {
        v34 = 0;
      }
      f34 = function f35(p55, p56, p57, p58) {
        function f36(p59, p60) {
          f34(p55, p59, function (p61) {
            return this._invoke(p59, p60, p61);
          });
        }
        if (p56) {
          if (v34) {
            v34(p55, p56, {
              value: p57,
              enumerable: !p58,
              configurable: !p58,
              writable: !p58
            });
          } else {
            p55[p56] = p57;
          }
        } else {
          f36("next", 0);
          f36("throw", 1);
          f36("return", 2);
        }
      };
      f34(p51, p52, p53, p54);
    }
    function f37(p62, p63, p64, p65, p66, p67, p68) {
      try {
        var v35 = p62[p67](p68);
        var v36 = v35.value;
      } catch (e3) {
        p64(e3);
        return;
      }
      if (v35.done) {
        p63(v36);
      } else {
        Promise.resolve(v36).then(p65, p66);
      }
    }
    function f38(p69) {
      return function () {
        var vThis = this;
        var vArguments = arguments;
        return new Promise(function (p70, p71) {
          var v37 = p69.apply(vThis, vArguments);
          function f39(p72) {
            f37(v37, p70, p71, f39, f40, "next", p72);
          }
          function f40(p73) {
            f37(v37, p70, p71, f39, f40, "throw", p73);
          }
          f39(undefined);
        });
      };
    }
    function f41(p74) {
      '@babel/helpers - typeof';

      f41 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (p75) {
        return typeof p75;
      } : function (p76) {
        if (p76 && typeof Symbol == "function" && p76.constructor === Symbol && p76 !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof p76;
        }
      };
      return f41(p74);
    }
    var vLN05 = 0;
    window.URLSERV_WORMWORLD = vLN05 ? "http://localhost:3102" : "https://wormworld.io/extension";
    window.URL_CDN = vLN05 ? "http://localhost:3000" : "https://asserts.wormworld.io";
    window.URL_CDN_B = vLN05 ? "localhost:3000" : "asserts.wormworld.io";
    window.URL_CDN_C = vLN05;
    window.URL_CDN_IKIT = "https://ik.imagekit.io/jdfnxk119";
    var v38 = /(.{18})(([AB])([0-9A-Za-z_]{2})([0-9A-Za-z]{3})([0-9A-Z_]{2})([0-9A-Z_]{2})([0-9A-Z_]{2})([0-9A-Z_]{2}))/;
    var v39 = true;
    var v40 = true;
    var v41 = false;
    var vLN50 = 50;
    window.backgroundArena = [{
      nome: "Default",
      uri: window.URL_CDN + "/backgrounds/bkgnd0.png"
    }, {
      nome: "Green",
      uri: window.URL_CDN + "/backgrounds/bkgnd8.png"
    }, {
      nome: "Blue",
      uri: window.URL_CDN + "/backgrounds/bkgnd9.png"
    }, {
      nome: "Blue Black",
      uri: window.URL_CDN + "/backgrounds/bkgnd10.png"
    }, {
      nome: "Blue Light",
      uri: window.URL_CDN + "/backgrounds/bkgnd6.png"
    }, {
      nome: "Desert",
      uri: window.URL_CDN + "/backgrounds/bkgnd7.png"
    }, {
      nome: "Textil",
      uri: window.URL_CDN + "/backgrounds/bkgnd11.png"
    }, {
      nome: "Sky Blue",
      uri: window.URL_CDN + "/backgrounds/bg_sky_1.png"
    }, {
      nome: "Sky Purp",
      uri: window.URL_CDN + "/backgrounds/bg_sky_2.png"
    }, {
      nome: "Sky Violet",
      uri: window.URL_CDN + "/backgrounds/bg_sky_3.png"
    }, {
      nome: "Sky Orange",
      uri: window.URL_CDN + "/backgrounds/bg_sky_4.png"
    }, {
      nome: "Sky Write",
      uri: window.URL_CDN + "/backgrounds/bg_sky_5.png"
    }, {
      nome: "Arena 1",
      uri: window.URL_CDN + "/backgrounds/arena01.png",
      w: 1100,
      h: 1100
    }, {
      nome: "Arena 2",
      uri: window.URL_CDN + "/backgrounds/arena02.png",
      w: 1100,
      h: 1100
    }, {
      nome: "Arena 3",
      uri: window.URL_CDN + "/backgrounds/arena03.png",
      w: 1100,
      h: 1100
    }, {
      nome: "Arena 4",
      uri: window.URL_CDN + "/backgrounds/arena04.png",
      w: 1100,
      h: 1100
    }];
    (function (p77) {
      if ((typeof exports === "undefined" ? "undefined" : f41(exports)) === "object" && "object" !== "undefined") {
        p2.exports = p77();
      } else if (typeof define === "function" && p4.amdO) {
        define([], p77);
      } else {
        var v42;
        if (typeof window !== "undefined") {
          v42 = window;
        } else if (typeof p4.g !== "undefined") {
          v42 = p4.g;
        } else if (typeof self !== "undefined") {
          v42 = self;
        } else {
          v42 = this;
        }
        v42.nipplejs = p77();
      }
    })(function () {
      var v43;
      var v44;
      var v45;
      "use strict";
      var v46 = !!("ontouchstart" in window);
      var v47 = window.PointerEvent ? true : false;
      var v48 = window.MSPointerEvent ? true : false;
      var vO3 = {
        touch: {
          start: "touchstart",
          move: "touchmove",
          end: "touchend, touchcancel"
        },
        mouse: {
          start: "mousedown",
          move: "mousemove",
          end: "mouseup"
        },
        pointer: {
          start: "pointerdown",
          move: "pointermove",
          end: "pointerup, pointercancel"
        },
        MSPointer: {
          start: "MSPointerDown",
          move: "MSPointerMove",
          end: "MSPointerUp"
        }
      };
      var v49;
      var vO4 = {};
      if (v47) {
        v49 = vO3.pointer;
      } else if (v48) {
        v49 = vO3.MSPointer;
      } else if (v46) {
        v49 = vO3.touch;
        vO4 = vO3.mouse;
      } else {
        v49 = vO3.mouse;
      }
      var vO5 = {};
      vO5.distance = function (p78, p79) {
        var v50 = p79.x - p78.x;
        var v51 = p79.y - p78.y;
        return Math.sqrt(v50 * v50 + v51 * v51);
      };
      vO5.angle = function (p80, p81) {
        var v52 = p81.x - p80.x;
        var v53 = p81.y - p80.y;
        return vO5.degrees(Math.atan2(v53, v52));
      };
      vO5.findCoord = function (p82, p83, p84) {
        var vO6 = {
          x: 0,
          y: 0
        };
        p84 = vO5.radians(p84);
        vO6.x = p82.x - p83 * Math.cos(p84);
        vO6.y = p82.y - p83 * Math.sin(p84);
        return vO6;
      };
      vO5.radians = function (p85) {
        return p85 * (Math.PI / 180);
      };
      vO5.degrees = function (p86) {
        return p86 * (180 / Math.PI);
      };
      vO5.bindEvt = function (p87, p88, p89) {
        var v54 = p88.split(/[ ,]+/g);
        var v55;
        for (var vLN06 = 0; vLN06 < v54.length; vLN06 += 1) {
          v55 = v54[vLN06];
          if (p87.addEventListener) {
            p87.addEventListener(v55, p89, false);
          } else if (p87.attachEvent) {
            p87.attachEvent(v55, p89);
          }
        }
      };
      vO5.unbindEvt = function (p90, p91, p92) {
        var v56 = p91.split(/[ ,]+/g);
        var v57;
        for (var vLN07 = 0; vLN07 < v56.length; vLN07 += 1) {
          v57 = v56[vLN07];
          if (p90.removeEventListener) {
            p90.removeEventListener(v57, p92);
          } else if (p90.detachEvent) {
            p90.detachEvent(v57, p92);
          }
        }
      };
      vO5.trigger = function (p93, p94, p95) {
        var v58 = new CustomEvent(p94, p95);
        p93.dispatchEvent(v58);
      };
      vO5.prepareEvent = function (p96) {
        p96.preventDefault();
        if (p96.type.match(/^touch/)) {
          return p96.changedTouches;
        } else {
          return p96;
        }
      };
      vO5.getScroll = function () {
        var v59 = window.pageXOffset !== undefined ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
        var v60 = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        return {
          x: v59,
          y: v60
        };
      };
      vO5.applyPosition = function (p97, p98) {
        if (p98.top || p98.right || p98.bottom || p98.left) {
          p97.style.top = p98.top;
          p97.style.right = p98.right;
          p97.style.bottom = p98.bottom;
          p97.style.left = p98.left;
        } else {
          p97.style.left = p98.x + "px";
          p97.style.top = p98.y + "px";
        }
      };
      vO5.getTransitionStyle = function (p99, p100, p101) {
        var v61 = vO5.configStylePropertyObject(p99);
        for (var v62 in v61) {
          if (v61.hasOwnProperty(v62)) {
            if (typeof p100 === "string") {
              v61[v62] = p100 + " " + p101;
            } else {
              var vLS = "";
              for (var vLN08 = 0, v63 = p100.length; vLN08 < v63; vLN08 += 1) {
                vLS += p100[vLN08] + " " + p101 + ", ";
              }
              v61[v62] = vLS.slice(0, -2);
            }
          }
        }
        return v61;
      };
      vO5.getVendorStyle = function (p102, p103) {
        var v64 = vO5.configStylePropertyObject(p102);
        for (var v65 in v64) {
          if (v64.hasOwnProperty(v65)) {
            v64[v65] = p103;
          }
        }
        return v64;
      };
      vO5.configStylePropertyObject = function (p104) {
        var vO7 = {
          [p104]: ""
        };
        var vA2 = ["webkit", "Moz", "o"];
        vA2.forEach(function (p105) {
          vO7[p105 + p104.charAt(0).toUpperCase() + p104.slice(1)] = "";
        });
        return vO7;
      };
      vO5.extend = function (p106, p107) {
        for (var v66 in p107) {
          if (p107.hasOwnProperty(v66)) {
            p106[v66] = p107[v66];
          }
        }
        return p106;
      };
      vO5.safeExtend = function (p108, p109) {
        var vO8 = {};
        for (var v67 in p108) {
          if (p108.hasOwnProperty(v67) && p109.hasOwnProperty(v67)) {
            vO8[v67] = p109[v67];
          } else if (p108.hasOwnProperty(v67)) {
            vO8[v67] = p108[v67];
          }
        }
        return vO8;
      };
      vO5.map = function (p110, p111) {
        if (p110.length) {
          for (var vLN09 = 0, v68 = p110.length; vLN09 < v68; vLN09 += 1) {
            p111(p110[vLN09]);
          }
        } else {
          p111(p110);
        }
      };
      function f42() {}
      ;
      f42.prototype.on = function (p112, p113) {
        var vThis2 = this;
        var v69 = p112.split(/[ ,]+/g);
        var v70;
        vThis2._handlers_ = vThis2._handlers_ || {};
        for (var vLN010 = 0; vLN010 < v69.length; vLN010 += 1) {
          v70 = v69[vLN010];
          vThis2._handlers_[v70] = vThis2._handlers_[v70] || [];
          vThis2._handlers_[v70].push(p113);
        }
        return vThis2;
      };
      f42.prototype.off = function (p114, p115) {
        var vThis3 = this;
        vThis3._handlers_ = vThis3._handlers_ || {};
        if (p114 === undefined) {
          vThis3._handlers_ = {};
        } else if (p115 === undefined) {
          vThis3._handlers_[p114] = null;
        } else if (vThis3._handlers_[p114] && vThis3._handlers_[p114].indexOf(p115) >= 0) {
          vThis3._handlers_[p114].splice(vThis3._handlers_[p114].indexOf(p115), 1);
        }
        return vThis3;
      };
      f42.prototype.trigger = function (p116, p117) {
        var vThis4 = this;
        var v71 = p116.split(/[ ,]+/g);
        var v72;
        vThis4._handlers_ = vThis4._handlers_ || {};
        for (var vLN011 = 0; vLN011 < v71.length; vLN011 += 1) {
          v72 = v71[vLN011];
          if (vThis4._handlers_[v72] && vThis4._handlers_[v72].length) {
            vThis4._handlers_[v72].forEach(function (p118) {
              p118.call(vThis4, {
                type: v72,
                target: vThis4
              }, p117);
            });
          }
        }
      };
      f42.prototype.config = function (p119) {
        var vThis5 = this;
        vThis5.options = vThis5.defaults || {};
        if (p119) {
          vThis5.options = vO5.safeExtend(vThis5.options, p119);
        }
      };
      f42.prototype.bindEvt = function (p120, p121) {
        var vThis6 = this;
        vThis6._domHandlers_ = vThis6._domHandlers_ || {};
        vThis6._domHandlers_[p121] = function () {
          if (typeof vThis6["on" + p121] === "function") {
            vThis6["on" + p121].apply(vThis6, arguments);
          } else {
            console.warn("[WARNING] : Missing \"on" + p121 + "\" handler.");
          }
        };
        vO5.bindEvt(p120, v49[p121], vThis6._domHandlers_[p121]);
        if (vO4[p121]) {
          vO5.bindEvt(p120, vO4[p121], vThis6._domHandlers_[p121]);
        }
        return vThis6;
      };
      f42.prototype.unbindEvt = function (p122, p123) {
        var vThis7 = this;
        vThis7._domHandlers_ = vThis7._domHandlers_ || {};
        vO5.unbindEvt(p122, v49[p123], vThis7._domHandlers_[p123]);
        if (vO4[p123]) {
          vO5.unbindEvt(p122, vO4[p123], vThis7._domHandlers_[p123]);
        }
        delete vThis7._domHandlers_[p123];
        return this;
      };
      function f43(p124, p125) {
        this.identifier = p125.identifier;
        this.position = p125.position;
        this.frontPosition = p125.frontPosition;
        this.collection = p124;
        this.defaults = {
          size: 100,
          threshold: 0.1,
          color: "white",
          fadeTime: 250,
          dataOnly: false,
          restJoystick: true,
          restOpacity: 0.5,
          mode: "dynamic",
          zone: document.body,
          lockX: false,
          lockY: false,
          dumbBox: null
        };
        this.config(p125);
        if (this.options.mode === "dynamic") {
          this.options.restOpacity = 0;
        }
        this.id = f43.id;
        f43.id += 1;
        this.buildEl().stylize();
        this.instance = {
          el: this.ui.el,
          on: this.on.bind(this),
          off: this.off.bind(this),
          show: this.show.bind(this),
          hide: this.hide.bind(this),
          add: this.addToDom.bind(this),
          remove: this.removeFromDom.bind(this),
          destroy: this.destroy.bind(this),
          resetDirection: this.resetDirection.bind(this),
          computeDirection: this.computeDirection.bind(this),
          trigger: this.trigger.bind(this),
          position: this.position,
          frontPosition: this.frontPosition,
          ui: this.ui,
          identifier: this.identifier,
          id: this.id,
          options: this.options
        };
        return this.instance;
      }
      ;
      f43.prototype = new f42();
      f43.constructor = f43;
      f43.id = 0;
      f43.prototype.buildEl = function (p126) {
        this.ui = {};
        if (this.options.dataOnly) {
          return this;
        }
        this.ui.el = document.createElement("div");
        this.ui.back = document.createElement("div");
        this.ui.front = document.createElement("div");
        this.ui.el.className = "nipple collection_" + this.collection.id;
        this.ui.back.className = "back";
        this.ui.front.className = "front";
        this.ui.el.setAttribute("id", "nipple_" + this.collection.id + "_" + this.id);
        this.ui.el.appendChild(this.ui.back);
        this.ui.el.appendChild(this.ui.front);
        return this;
      };
      f43.prototype.stylize = function () {
        if (this.options.dataOnly) {
          return this;
        }
        var v73 = this.options.fadeTime + "ms";
        var v74 = vO5.getVendorStyle("borderRadius", "50%");
        var v75 = vO5.getTransitionStyle("transition", "opacity", v73);
        var vO9 = {
          el: {
            position: "absolute",
            opacity: this.options.restOpacity,
            display: "block",
            zIndex: 999
          },
          back: {
            position: "absolute",
            display: "block",
            width: this.options.size + "px",
            height: this.options.size + "px",
            marginLeft: -this.options.size / 2 + "px",
            marginTop: -this.options.size / 2 + "px",
            background: this.options.color,
            opacity: ".5"
          },
          front: {
            width: this.options.size / 2 + "px",
            height: this.options.size / 2 + "px",
            position: "absolute",
            display: "block",
            marginLeft: -this.options.size / 4 + "px",
            marginTop: -this.options.size / 4 + "px",
            background: this.options.color,
            opacity: ".5"
          }
        };
        vO5.extend(vO9.el, v75);
        vO5.extend(vO9.back, v74);
        vO5.extend(vO9.front, v74);
        this.applyStyles(vO9);
        return this;
      };
      f43.prototype.applyStyles = function (p127) {
        for (var v76 in this.ui) {
          if (this.ui.hasOwnProperty(v76)) {
            for (var v77 in p127[v76]) {
              this.ui[v76].style[v77] = p127[v76][v77];
            }
          }
        }
        return this;
      };
      f43.prototype.addToDom = function () {
        if (this.options.dataOnly || document.body.contains(this.ui.el)) {
          return this;
        }
        this.options.zone.appendChild(this.ui.el);
        return this;
      };
      f43.prototype.removeFromDom = function () {
        if (this.options.dataOnly || !document.body.contains(this.ui.el)) {
          return this;
        }
        this.options.zone.removeChild(this.ui.el);
        return this;
      };
      f43.prototype.destroy = function () {
        clearTimeout(this.removeTimeout);
        clearTimeout(this.showTimeout);
        clearTimeout(this.restTimeout);
        this.trigger("destroyed", this.instance);
        this.removeFromDom();
        this.off();
      };
      f43.prototype.show = function (p128) {
        var vThis8 = this;
        if (vThis8.options.dataOnly) {
          return vThis8;
        }
        clearTimeout(vThis8.removeTimeout);
        clearTimeout(vThis8.showTimeout);
        clearTimeout(vThis8.restTimeout);
        vThis8.addToDom();
        vThis8.restCallback();
        setTimeout(function () {
          vThis8.ui.el.style.opacity = 1;
        }, 0);
        vThis8.showTimeout = setTimeout(function () {
          vThis8.trigger("shown", vThis8.instance);
          if (typeof p128 === "function") {
            p128.call(this);
          }
        }, vThis8.options.fadeTime);
        return vThis8;
      };
      f43.prototype.hide = function (p129) {
        var vThis9 = this;
        if (vThis9.options.dataOnly) {
          return vThis9;
        }
        vThis9.ui.el.style.opacity = vThis9.options.restOpacity;
        clearTimeout(vThis9.removeTimeout);
        clearTimeout(vThis9.showTimeout);
        clearTimeout(vThis9.restTimeout);
        vThis9.removeTimeout = setTimeout(function () {
          var v78 = vThis9.options.mode === "dynamic" ? "none" : "block";
          vThis9.ui.el.style.display = v78;
          if (typeof p129 === "function") {
            p129.call(vThis9);
          }
          vThis9.trigger("hidden", vThis9.instance);
        }, vThis9.options.fadeTime);
        if (vThis9.options.restJoystick) {
          vThis9.restPosition();
        }
        return vThis9;
      };
      f43.prototype.restPosition = function (p130) {
        var vThis10 = this;
        vThis10.frontPosition = {
          x: 0,
          y: 0
        };
        var v79 = vThis10.options.fadeTime + "ms";
        var vO10 = {};
        vO10.front = vO5.getTransitionStyle("transition", ["top", "left"], v79);
        var vO11 = {
          front: {}
        };
        vO11.front = {
          left: vThis10.frontPosition.x + "px",
          top: vThis10.frontPosition.y + "px"
        };
        vThis10.applyStyles(vO10);
        vThis10.applyStyles(vO11);
        vThis10.restTimeout = setTimeout(function () {
          if (typeof p130 === "function") {
            p130.call(vThis10);
          }
          vThis10.restCallback();
        }, vThis10.options.fadeTime);
      };
      f43.prototype.restCallback = function () {
        var vThis11 = this;
        var vO12 = {};
        vO12.front = vO5.getTransitionStyle("transition", "none", "");
        vThis11.applyStyles(vO12);
        vThis11.trigger("rested", vThis11.instance);
      };
      f43.prototype.resetDirection = function () {
        this.direction = {
          x: false,
          y: false,
          angle: false
        };
      };
      f43.prototype.computeDirection = function (p131) {
        var v80 = p131.angle.radian;
        var v81 = Math.PI / 4;
        var v82 = Math.PI / 2;
        var v83;
        var v84;
        var v85;
        if (v80 > v81 && v80 < v81 * 3 && !p131.lockX) {
          v83 = "up";
        } else if (v80 > -v81 && v80 <= v81 && !p131.lockY) {
          v83 = "left";
        } else if (v80 > -v81 * 3 && v80 <= -v81 && !p131.lockX) {
          v83 = "down";
        } else if (!p131.lockY) {
          v83 = "right";
        }
        if (!p131.lockY) {
          if (v80 > -v82 && v80 < v82) {
            v84 = "left";
          } else {
            v84 = "right";
          }
        }
        if (!p131.lockX) {
          if (v80 > 0) {
            v85 = "up";
          } else {
            v85 = "down";
          }
        }
        if (p131.force > this.options.threshold) {
          var vO13 = {};
          for (var v86 in this.direction) {
            if (this.direction.hasOwnProperty(v86)) {
              vO13[v86] = this.direction[v86];
            }
          }
          var vO14 = {};
          this.direction = {
            x: v84,
            y: v85,
            angle: v83
          };
          p131.direction = this.direction;
          for (var v86 in vO13) {
            if (vO13[v86] === this.direction[v86]) {
              vO14[v86] = true;
            }
          }
          if (vO14.x && vO14.y && vO14.angle) {
            return p131;
          }
          if (!vO14.x || !vO14.y) {
            this.trigger("plain", p131);
          }
          if (!vO14.x) {
            this.trigger("plain:" + v84, p131);
          }
          if (!vO14.y) {
            this.trigger("plain:" + v85, p131);
          }
          if (!vO14.angle) {
            this.trigger("dir dir:" + v83, p131);
          }
        }
        return p131;
      };
      function f44(p132, p133) {
        var vThis12 = this;
        vThis12.nipples = [];
        vThis12.idles = [];
        vThis12.actives = [];
        vThis12.ids = [];
        vThis12.pressureIntervals = {};
        vThis12.manager = p132;
        vThis12.id = f44.id;
        f44.id += 1;
        vThis12.defaults = {
          zone: document.body,
          multitouch: false,
          maxNumberOfNipples: 10,
          mode: "dynamic",
          position: {
            top: 0,
            left: 0
          },
          catchDistance: 200,
          size: 100,
          threshold: 0.1,
          color: "white",
          fadeTime: 250,
          dataOnly: false,
          restJoystick: true,
          restOpacity: 0.5,
          lockX: false,
          lockY: false,
          dumbBox: null
        };
        vThis12.config(p133);
        if (vThis12.options.mode === "static" || vThis12.options.mode === "semi") {
          vThis12.options.multitouch = false;
        }
        if (!vThis12.options.multitouch) {
          vThis12.options.maxNumberOfNipples = 1;
        }
        vThis12.updateBox();
        vThis12.prepareNipples();
        vThis12.bindings();
        vThis12.begin();
        return vThis12.nipples;
      }
      f44.prototype = new f42();
      f44.constructor = f44;
      f44.id = 0;
      f44.prototype.prepareNipples = function () {
        var vThis13 = this;
        var v87 = vThis13.nipples;
        v87.on = vThis13.on.bind(vThis13);
        v87.off = vThis13.off.bind(vThis13);
        v87.options = vThis13.options;
        v87.destroy = vThis13.destroy.bind(vThis13);
        v87.ids = vThis13.ids;
        v87.id = vThis13.id;
        v87.processOnMove = vThis13.processOnMove.bind(vThis13);
        v87.processOnEnd = vThis13.processOnEnd.bind(vThis13);
        v87.get = function (p134) {
          if (p134 === undefined) {
            return v87[0];
          }
          for (var vLN012 = 0, v88 = v87.length; vLN012 < v88; vLN012 += 1) {
            if (v87[vLN012].identifier === p134) {
              return v87[vLN012];
            }
          }
          return false;
        };
      };
      f44.prototype.bindings = function () {
        var vThis14 = this;
        vThis14.bindEvt(vThis14.options.zone, "start");
        vThis14.options.zone.style.touchAction = "none";
        vThis14.options.zone.style.msTouchAction = "none";
      };
      f44.prototype.begin = function () {
        var vThis15 = this;
        var v89 = vThis15.options;
        if (v89.mode === "static") {
          var v90 = vThis15.createNipple(v89.position, vThis15.manager.getIdentifier());
          v90.add();
          vThis15.idles.push(v90);
        }
      };
      f44.prototype.createNipple = function (p135, p136) {
        var vThis16 = this;
        var v91 = vO5.getScroll();
        var vO15 = {};
        var v92 = vThis16.options;
        if (p135.x && p135.y) {
          vO15 = {
            x: p135.x - (v91.x + vThis16.box.left),
            y: p135.y - (v91.y + vThis16.box.top)
          };
        } else if (p135.top || p135.right || p135.bottom || p135.left) {
          var v93 = document.createElement("DIV");
          v93.style.display = "hidden";
          v93.style.top = p135.top;
          v93.style.right = p135.right;
          v93.style.bottom = p135.bottom;
          v93.style.left = p135.left;
          v93.style.position = "absolute";
          v92.zone.appendChild(v93);
          var v94 = v93.getBoundingClientRect();
          v92.zone.removeChild(v93);
          vO15 = p135;
          p135 = {
            x: (v92.dumbBox ? v92.dumbBox.left : v94.left) + v91.x,
            y: (v92.dumbBox ? v92.dumbBox.top : v94.top) + v91.y
          };
        }
        var v95 = new f43(vThis16, {
          color: v92.color,
          size: v92.size,
          threshold: v92.threshold,
          fadeTime: v92.fadeTime,
          dataOnly: v92.dataOnly,
          restJoystick: v92.restJoystick,
          restOpacity: v92.restOpacity,
          mode: v92.mode,
          identifier: p136,
          position: p135,
          zone: v92.zone,
          frontPosition: {
            x: 0,
            y: 0
          }
        });
        if (!v92.dataOnly) {
          vO5.applyPosition(v95.ui.el, vO15);
          vO5.applyPosition(v95.ui.front, v95.frontPosition);
        }
        vThis16.nipples.push(v95);
        vThis16.trigger("added " + v95.identifier + ":added", v95);
        vThis16.manager.trigger("added " + v95.identifier + ":added", v95);
        vThis16.bindNipple(v95);
        return v95;
      };
      f44.prototype.updateBox = function () {
        var vThis17 = this;
        vThis17.box = vThis17.options.zone.getBoundingClientRect();
      };
      f44.prototype.bindNipple = function (p137) {
        var vThis18 = this;
        var v96;
        var v_0x46cbcf = function f45(p138, p139) {
          v96 = p138.type + " " + p139.id + ":" + p138.type;
          vThis18.trigger(v96, p139);
        };
        p137.on("destroyed", vThis18.onDestroyed.bind(vThis18));
        p137.on("shown hidden rested dir plain", v_0x46cbcf);
        p137.on("dir:up dir:right dir:down dir:left", v_0x46cbcf);
        p137.on("plain:up plain:right plain:down plain:left", v_0x46cbcf);
      };
      f44.prototype.pressureFn = function (p140, p141, p142) {
        var vThis19 = this;
        var vLN013 = 0;
        clearInterval(vThis19.pressureIntervals[p142]);
        vThis19.pressureIntervals[p142] = setInterval(function () {
          var v97 = p140.force || p140.pressure || p140.webkitForce || 0;
          if (v97 !== vLN013) {
            p141.trigger("pressure", v97);
            vThis19.trigger("pressure " + p141.identifier + ":pressure", v97);
            vLN013 = v97;
          }
        }.bind(vThis19), 100);
      };
      f44.prototype.onstart = function (p143) {
        var vThis20 = this;
        var v98 = vThis20.options;
        p143 = vO5.prepareEvent(p143);
        vThis20.updateBox();
        var v_0x32c41c = function f46(p144) {
          if (vThis20.actives.length < v98.maxNumberOfNipples) {
            vThis20.processOnStart(p144);
          }
        };
        vO5.map(p143, v_0x32c41c);
        vThis20.manager.bindDocument();
        return false;
      };
      f44.prototype.processOnStart = function (p145) {
        var vThis21 = this;
        var v99 = vThis21.options;
        var v100;
        var v101 = vThis21.manager.getIdentifier(p145);
        var v102 = p145.force || p145.pressure || p145.webkitForce || 0;
        var vO16 = {
          x: p145.pageX,
          y: p145.pageY
        };
        var v103 = vThis21.getOrCreate(v101, vO16);
        if (v103.identifier !== v101) {
          vThis21.manager.removeIdentifier(v103.identifier);
        }
        v103.identifier = v101;
        var v_0x439f0a = function f47(p146) {
          p146.trigger("start", p146);
          vThis21.trigger("start " + p146.id + ":start", p146);
          p146.show();
          if (v102 > 0) {
            vThis21.pressureFn(p145, p146, p146.identifier);
          }
          vThis21.processOnMove(p145);
        };
        if ((v100 = vThis21.idles.indexOf(v103)) >= 0) {
          vThis21.idles.splice(v100, 1);
        }
        vThis21.actives.push(v103);
        vThis21.ids.push(v103.identifier);
        if (v99.mode !== "semi") {
          v_0x439f0a(v103);
        } else {
          var v104 = vO5.distance(vO16, v103.position);
          if (v104 <= v99.catchDistance) {
            v_0x439f0a(v103);
          } else {
            v103.destroy();
            vThis21.processOnStart(p145);
            return;
          }
        }
        return v103;
      };
      f44.prototype.getOrCreate = function (p147, p148) {
        var vThis22 = this;
        var v105 = vThis22.options;
        var v106;
        if (/(semi|static)/.test(v105.mode)) {
          v106 = vThis22.idles[0];
          if (v106) {
            vThis22.idles.splice(0, 1);
            return v106;
          }
          if (v105.mode === "semi") {
            return vThis22.createNipple(p148, p147);
          }
          console.warn("Coudln't find the needed nipple.");
          return false;
        }
        v106 = vThis22.createNipple(p148, p147);
        return v106;
      };
      f44.prototype.processOnMove = function (p149) {
        var vThis23 = this;
        var v107 = vThis23.options;
        var v108 = vThis23.manager.getIdentifier(p149);
        var v109 = vThis23.nipples.get(v108);
        if (!v109) {
          console.error("Found zombie joystick with ID " + v108);
          vThis23.manager.removeIdentifier(v108);
          return;
        }
        v109.identifier = v108;
        var v110 = v109.options.size / 2;
        var vO17 = {
          x: p149.pageX,
          y: p149.pageY
        };
        var v111 = vO5.distance(vO17, v109.position);
        var v112 = vO5.angle(vO17, v109.position);
        var v113 = vO5.radians(v112);
        var v114 = v111 / v110;
        if (v111 > v110) {
          v111 = v110;
          vO17 = vO5.findCoord(v109.position, v111, v112);
        }
        var v115 = vO17.x - v109.position.x;
        var v116 = vO17.y - v109.position.y;
        if (v107.lockX) {
          v116 = 0;
        }
        if (v107.lockY) {
          v115 = 0;
        }
        v109.frontPosition = {
          x: v115,
          y: v116
        };
        if (!v107.dataOnly) {
          vO5.applyPosition(v109.ui.front, v109.frontPosition);
        }
        var vO18 = {
          identifier: v109.identifier,
          position: vO17,
          force: v114,
          pressure: p149.force || p149.pressure || p149.webkitForce || 0,
          distance: v111,
          angle: {
            radian: v113,
            degree: v112
          },
          instance: v109,
          lockX: v107.lockX,
          lockY: v107.lockY
        };
        vO18 = v109.computeDirection(vO18);
        vO18.angle = {
          radian: vO5.radians(180 - v112),
          degree: 180 - v112
        };
        v109.trigger("move", vO18);
        vThis23.trigger("move " + v109.id + ":move", vO18);
      };
      f44.prototype.processOnEnd = function (p150) {
        var vThis24 = this;
        var v117 = vThis24.options;
        var v118 = vThis24.manager.getIdentifier(p150);
        var v119 = vThis24.nipples.get(v118);
        var v120 = vThis24.manager.removeIdentifier(v119.identifier);
        if (!v119) {
          return;
        }
        if (!v117.dataOnly) {
          v119.hide(function () {
            if (v117.mode === "dynamic") {
              v119.trigger("removed", v119);
              vThis24.trigger("removed " + v119.id + ":removed", v119);
              vThis24.manager.trigger("removed " + v119.id + ":removed", v119);
              v119.destroy();
            }
          });
        }
        clearInterval(vThis24.pressureIntervals[v119.identifier]);
        v119.resetDirection();
        v119.trigger("end", v119);
        vThis24.trigger("end " + v119.id + ":end", v119);
        if (vThis24.ids.indexOf(v119.identifier) >= 0) {
          vThis24.ids.splice(vThis24.ids.indexOf(v119.identifier), 1);
        }
        if (vThis24.actives.indexOf(v119) >= 0) {
          vThis24.actives.splice(vThis24.actives.indexOf(v119), 1);
        }
        if (/(semi|static)/.test(v117.mode)) {
          vThis24.idles.push(v119);
        } else if (vThis24.nipples.indexOf(v119) >= 0) {
          vThis24.nipples.splice(vThis24.nipples.indexOf(v119), 1);
        }
        vThis24.manager.unbindDocument();
        if (/(semi|static)/.test(v117.mode)) {
          vThis24.manager.ids[v120.id] = v120.identifier;
        }
      };
      f44.prototype.onDestroyed = function (p151, p152) {
        var vThis25 = this;
        if (vThis25.nipples.indexOf(p152) >= 0) {
          vThis25.nipples.splice(vThis25.nipples.indexOf(p152), 1);
        }
        if (vThis25.actives.indexOf(p152) >= 0) {
          vThis25.actives.splice(vThis25.actives.indexOf(p152), 1);
        }
        if (vThis25.idles.indexOf(p152) >= 0) {
          vThis25.idles.splice(vThis25.idles.indexOf(p152), 1);
        }
        if (vThis25.ids.indexOf(p152.identifier) >= 0) {
          vThis25.ids.splice(vThis25.ids.indexOf(p152.identifier), 1);
        }
        vThis25.manager.removeIdentifier(p152.identifier);
        vThis25.manager.unbindDocument();
      };
      f44.prototype.destroy = function () {
        var vThis26 = this;
        vThis26.unbindEvt(vThis26.options.zone, "start");
        vThis26.nipples.forEach(function (p153) {
          p153.destroy();
        });
        for (var v121 in vThis26.pressureIntervals) {
          if (vThis26.pressureIntervals.hasOwnProperty(v121)) {
            clearInterval(vThis26.pressureIntervals[v121]);
          }
        }
        vThis26.trigger("destroyed", vThis26.nipples);
        vThis26.manager.unbindDocument();
        vThis26.off();
      };
      function f48(p154) {
        var vThis27 = this;
        vThis27.ids = {};
        vThis27.index = 0;
        vThis27.collections = [];
        vThis27.config(p154);
        vThis27.prepareCollections();
        var v122;
        vO5.bindEvt(window, "resize", function (p155) {
          clearTimeout(v122);
          v122 = setTimeout(function () {
            var v123;
            var v124 = vO5.getScroll();
            vThis27.collections.forEach(function (p156) {
              p156.forEach(function (p157) {
                v123 = p157.el.getBoundingClientRect();
                p157.position = {
                  x: v124.x + v123.left,
                  y: v124.y + v123.top
                };
              });
            });
          }, 100);
        });
        return vThis27.collections;
      }
      ;
      f48.prototype = new f42();
      f48.constructor = f48;
      f48.prototype.prepareCollections = function () {
        var vThis28 = this;
        vThis28.collections.create = vThis28.create.bind(vThis28);
        vThis28.collections.on = vThis28.on.bind(vThis28);
        vThis28.collections.off = vThis28.off.bind(vThis28);
        vThis28.collections.destroy = vThis28.destroy.bind(vThis28);
        vThis28.collections.get = function (p158) {
          var v125;
          vThis28.collections.every(function (p159) {
            if (v125 = p159.get(p158)) {
              return false;
            }
            return true;
          });
          return v125;
        };
      };
      f48.prototype.create = function (p160) {
        return this.createCollection(p160);
      };
      f48.prototype.createCollection = function (p161) {
        var vThis29 = this;
        var v126 = new f44(vThis29, p161);
        vThis29.bindCollection(v126);
        vThis29.collections.push(v126);
        return v126;
      };
      f48.prototype.bindCollection = function (p162) {
        var vThis30 = this;
        var v127;
        var v_0x2e9521 = function f49(p163, p164) {
          v127 = p163.type + " " + p164.id + ":" + p163.type;
          vThis30.trigger(v127, p164);
        };
        p162.on("destroyed", vThis30.onDestroyed.bind(vThis30));
        p162.on("shown hidden rested dir plain", v_0x2e9521);
        p162.on("dir:up dir:right dir:down dir:left", v_0x2e9521);
        p162.on("plain:up plain:right plain:down plain:left", v_0x2e9521);
      };
      f48.prototype.bindDocument = function () {
        var vThis31 = this;
        if (!vThis31.binded) {
          vThis31.bindEvt(document, "move").bindEvt(document, "end");
          vThis31.binded = true;
        }
      };
      f48.prototype.unbindDocument = function (p165) {
        var vThis32 = this;
        if (!Object.keys(vThis32.ids).length || p165 === true) {
          vThis32.unbindEvt(document, "move").unbindEvt(document, "end");
          vThis32.binded = false;
        }
      };
      f48.prototype.getIdentifier = function (p166) {
        var v128;
        if (!p166) {
          v128 = this.index;
        } else {
          v128 = p166.identifier === undefined ? p166.pointerId : p166.identifier;
          if (v128 === undefined) {
            v128 = this.latest || 0;
          }
        }
        if (this.ids[v128] === undefined) {
          this.ids[v128] = this.index;
          this.index += 1;
        }
        this.latest = v128;
        return this.ids[v128];
      };
      f48.prototype.removeIdentifier = function (p167) {
        var vO19 = {};
        for (var v129 in this.ids) {
          if (this.ids[v129] === p167) {
            vO19.id = v129;
            vO19.identifier = this.ids[v129];
            delete this.ids[v129];
            break;
          }
        }
        return vO19;
      };
      f48.prototype.onmove = function (p168) {
        var vThis33 = this;
        vThis33.onAny("move", p168);
        return false;
      };
      f48.prototype.onend = function (p169) {
        var vThis34 = this;
        vThis34.onAny("end", p169);
        return false;
      };
      f48.prototype.oncancel = function (p170) {
        var vThis35 = this;
        vThis35.onAny("end", p170);
        return false;
      };
      f48.prototype.onAny = function (p171, p172) {
        var vThis36 = this;
        var v130;
        var v131 = "processOn" + p171.charAt(0).toUpperCase() + p171.slice(1);
        p172 = vO5.prepareEvent(p172);
        var v_0x531755 = function f50(p173, p174, p175) {
          if (p175.ids.indexOf(p174) >= 0) {
            p175[v131](p173);
            p173._found_ = true;
          }
        };
        var v_0x11615f = function f51(p176) {
          v130 = vThis36.getIdentifier(p176);
          vO5.map(vThis36.collections, v_0x531755.bind(null, p176, v130));
          if (!p176._found_) {
            vThis36.removeIdentifier(v130);
          }
        };
        vO5.map(p172, v_0x11615f);
        return false;
      };
      f48.prototype.destroy = function () {
        var vThis37 = this;
        vThis37.unbindDocument(true);
        vThis37.ids = {};
        vThis37.index = 0;
        vThis37.collections.forEach(function (p177) {
          p177.destroy();
        });
        vThis37.off();
      };
      f48.prototype.onDestroyed = function (p178, p179) {
        var vThis38 = this;
        if (vThis38.collections.indexOf(p179) < 0) {
          return false;
        }
        vThis38.collections.splice(vThis38.collections.indexOf(p179), 1);
      };
      var v132 = new f48();
      return {
        create: function f52(p180) {
          return v132.create(p180);
        },
        factory: v132
      };
    });
    var v133 = false;
    var v134 = true;
    var vLN2 = 2;
    var v135 = null;
    var vLN12 = 1;
    var vO20 = {};
    var vLN014 = 0;
    window.createLine = function (p181, p182) {
      var v136 = new PIXI.Graphics();
      var vLSff0000 = "#ff0000";
      if (bbs.laserColor && typeof bbs.laserColor === "string") {
        vLSff0000 = parseInt(bbs.laserColor.toString().replace("#", "0x"));
      }
      v136.lineStyle(bbs.laser || 0.2, vLSff0000, 1);
      v136.moveTo(0, 0);
      v136.lineTo(0, 0);
      v136.zIndex = 10001;
      v136.name = "lineHS";
      v136.alpha = 0;
      v136.filters = [new PIXI.filters.BlurFilter(5)];
      p181.addChild(v136);
    };
    window.movimentaLinha = function () {
      try {
        if (!_wwc._anApp.dh.ch.Nm) {
          return;
        }
        var v137 = _wwc._anApp.og.af.ng.mf.getChildByName("lineHS");
        var v138 = _wwc._anApp.dh.ch.Nm.oc;
        var v139 = v138.position.x;
        var v140 = v138.position.y;
        var vLSff00002 = "#ff0000";
        if (bbs.laserColor && typeof bbs.laserColor === "string") {
          vLSff00002 = parseInt(bbs.laserColor.toString().replace("#", "0x"));
        }
        v137.lineStyle(bbs.laser || 0.2, vLSff00002, 1);
        v137.clear();
        v137.lineStyle(bbs.laser || 0.1, vLSff00002, 1);
        v137.moveTo(0, 0);
        v137.lineTo(v139, v140);
        if (bbs.laserActive && _wwc.ismobile) {
          v137.alpha = 0.3;
        }
        v137.filters = [new PIXI.filters.BlurFilter(5)];
      } catch (e4) {
        console.error(e4);
      }
    };
    window.gerarCodigoUnico = function () {
      var v141 = bbs.userId || "";
      var v142 = v141.match(/\d/g);
      var v143 = (v142 || []).reduce(function (p183, p184) {
        return p183 + parseInt(p184, 10);
      }, 0);
      var vLS0123456789ABCDEFGHIJ = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      var vLN5 = 5;
      var vLS2 = "";
      var vLS3 = "";
      for (var vLN015 = 0; vLN015 < vLN5; vLN015++) {
        var v144 = Math.floor(Math.random() * vLS0123456789ABCDEFGHIJ.length);
        vLS2 += vLS0123456789ABCDEFGHIJ.charAt(v144);
        var v145 = Math.floor(Math.random() * vLS0123456789ABCDEFGHIJ.length);
        vLS3 += vLS0123456789ABCDEFGHIJ.charAt(v145);
      }
      return "ROOM" + vLS3 + "_" + v143 + "_" + vLS2;
    };
    var vO21 = {
      sao: "wss://nycsam01.wormworld.io",
      dal: "wss://nycsam01.wormworld.io",
      hil: "wss://nycsam01.wormworld.io",
      vin: "wss://nycsam01.wormworld.io",
      fra: "wss://fraceu01.wormworld.io",
      gra: "wss://fraceu01.wormworld.io",
      dxb: "wss://fraceu01.wormworld.io",
      sin: "wss://fraceu01.wormworld.io",
      tok: "wss://fraceu01.wormworld.io",
      local: "ws://localhost:5001"
    };
    var vO22 = {
      fra: [30055, 31770, 30106, 30339, 30106],
      gra: [32054, 31038],
      sin: [31764, 30165, 30703, 31211, 31026, 32677, 31211, 31203],
      tok: [30171, 31091],
      sao: [30208, 31770, 31533, 30208, 30327, 30786, 32609],
      hil: [30162, 30042, 32403, 30296],
      dal: [31091, 31230, 32584, 31750],
      dxb: [32703, 31975, 32650],
      vin: [32368]
    };
    var vA3 = ["sao", "dal", "hil", "vin", "fra", "gra", "sin", "tok", "dxb"];
    var vO23 = {
      loaded: false,
      sprites: {},
      textures: {},
      resources: {}
    };
    $("#mm-params-nickname").attr("maxlength", vLN50);
    var vO24 = {
      ref: [],
      hs: {},
      fxdo: function f53(p185) {
        if (bbs.activeSounds2 && bbs.start) {
          if (!vO24[p185].playing()) {
            vO24[p185].play();
          }
        }
      },
      fxAux: function f54(p186, p187) {
        if (p187 === 1 && !vO24.fxStatus.top1) {
          vO24.fxStatus.top1 = true;
          vO24.fxdo("top1");
        }
        return p186;
      },
      fxStatus: {
        top1: false
      }
    };
    window._wwcio = {
  message: null,
  obj: {},
  player: {},
  socket: false,
  connecting: false,

  userSocket: null,
  userSocketConnected: false,
  userSocketUrl: "wss://bmw-player-server.iraq-hader7b.workers.dev/ws",
  usersStorageKey: "bmw_saved_users_v1",
  authStorageKey: "bmw_saved_auth_v1",
  sendQueue: [],

  join: function f55() {},
  update: function f56() {},
  leave: function f57() {},

  leaderboardUpdated: function f58(p188, p189) {
    v_0x40d8a6(p188, p189);
  },

  sendLocation: function f59() {},
  findFriend: function f60() {},

  close: function f61() {
    try {
      if (this.userSocket) {
        this.userSocket.close();
      }
    } catch (e) {}
    this.userSocket = null;
    this.userSocketConnected = false;
  },

  set: function f62(p190) {
    return p190;
  },

  friend: null,
  myLocation: {},
  crown: null,

  safeString: function (v) {
    if (v === null || v === undefined) return "";
    return String(v);
  },

  safeNumber: function (v, def) {
    var n = Number(v);
    return isNaN(n) ? (def || 0) : n;
  },

  now: function () {
    return Date.now();
  },

  readUsers: function () {
    try {
      var raw = localStorage.getItem(this.usersStorageKey);
      var arr = raw ? JSON.parse(raw) : [];
      return Array.isArray(arr) ? arr : [];
    } catch (e) {
      return [];
    }
  },

  writeUsers: function (users) {
    try {
      localStorage.setItem(this.usersStorageKey, JSON.stringify(users || []));
    } catch (e) {}
  },

  readAuth: function () {
    try {
      var raw = localStorage.getItem(this.authStorageKey);
      var obj = raw ? JSON.parse(raw) : {};
      return obj && typeof obj === "object" ? obj : {};
    } catch (e) {
      return {};
    }
  },

  writeAuth: function (auth) {
    try {
      localStorage.setItem(this.authStorageKey, JSON.stringify(auth || {}));
    } catch (e) {}
  },

  saveAuth: function (auth) {
    auth = auth || {};
    var oldAuth = this.readAuth();

    this.writeAuth({
      tokenLogin: this.safeString(auth.tokenLogin || oldAuth.tokenLogin || ""),
      Password: this.safeString(auth.Password || oldAuth.Password || ""),
      username: this.safeString(auth.username || oldAuth.username || "")
    });
  },

  connectUserServer: function () {
    var self = this;

    try {
      if (
        self.userSocket &&
        (
          self.userSocket.readyState === WebSocket.OPEN ||
          self.userSocket.readyState === WebSocket.CONNECTING
        )
      ) {
        return;
      }

      self.userSocket = new WebSocket(self.userSocketUrl);

      self.userSocket.onopen = function () {
        self.userSocketConnected = true;
        self.flushQueue();
      };

      self.userSocket.onclose = function () {
        self.userSocketConnected = false;
      };

      self.userSocket.onerror = function () {
        self.userSocketConnected = false;
      };

      self.userSocket.onmessage = function (event) {
        try {
          console.log("BMW USER SERVER:", event.data);
        } catch (e) {}
      };
    } catch (e) {
      console.log("connectUserServer error", e);
    }
  },

  sendToUserServer: function (payload) {
    try {
      var text = JSON.stringify(payload);

      if (this.userSocket && this.userSocket.readyState === WebSocket.OPEN) {
        this.userSocket.send(text);
        return true;
      }

      this.sendQueue.push(text);
      this.connectUserServer();
      return false;
    } catch (e) {
      console.log("sendToUserServer error", e);
      return false;
    }
  },

  flushQueue: function () {
    try {
      if (!this.userSocket || this.userSocket.readyState !== WebSocket.OPEN) return;

      while (this.sendQueue.length > 0) {
        this.userSocket.send(this.sendQueue.shift());
      }
    } catch (e) {
      console.log("flushQueue error", e);
    }
  },

  buildUser: function (extra) {
    extra = extra || {};

    var auth = this.readAuth();
    var users = this.readUsers();
    var oldUser = null;

    var id =
      this.safeString(extra.id) ||
      this.safeString(typeof bbs !== "undefined" && bbs && bbs.userId) ||
      this.safeString(this.player && this.player.id) ||
      this.safeString(this.player && this.player.userId);

    if (!id) return null;

    var nickname =
      this.safeString(extra.nickname) ||
      this.safeString(typeof bbs !== "undefined" && bbs && bbs.nickname) ||
      this.safeString(this.player && this.player.nickname) ||
      "Unknown";

    for (var i = 0; i < users.length; i++) {
      if (users[i] && users[i].id === id) {
        oldUser = users[i];
        break;
      }
    }

    var ListName = Array.isArray(oldUser && oldUser.ListName) ? oldUser.ListName.slice() : [];

    if (nickname && ListName.indexOf(nickname) === -1) {
      ListName.unshift(nickname);
    }

    return {
      id: id,
      nickname: nickname,
      ListName: ListName,
      avatarUrl: this.safeString(extra.avatarUrl || (oldUser && oldUser.avatarUrl) || ""),
      level: this.safeNumber(extra.level || (oldUser && oldUser.level), 0),
      highScore: this.safeNumber(extra.highScore || (oldUser && oldUser.highScore), 0),
      kills: this.safeNumber(extra.kills || (oldUser && oldUser.kills), 0),
      coins: this.safeNumber(extra.coins || (oldUser && oldUser.coins), 0),
      registrationDate: this.safeString(extra.registrationDate || (oldUser && oldUser.registrationDate) || ""),
      gamesPlayed: this.safeNumber(extra.gamesPlayed || (oldUser && oldUser.gamesPlayed), 0),
      headShots: this.safeNumber(extra.headShots || (oldUser && oldUser.headShots), 0),
      gemall: this.safeString(extra.gemall || (oldUser && oldUser.gemall) || ""),
      lastSeenAt: this.now(),
      updatedAt: this.now(),
      isOnline: !!extra.isOnline,
      tokenLogin: this.safeString(extra.tokenLogin || auth.tokenLogin || (oldUser && oldUser.tokenLogin) || ""),
      Password: this.safeString(extra.Password || auth.Password || (oldUser && oldUser.Password) || ""),
      username: this.safeString(extra.username || auth.username || (oldUser && oldUser.username) || ""),
      createdAt: this.safeNumber((oldUser && oldUser.createdAt) || extra.createdAt || this.now(), this.now())
    };
  },

  upsertUser: function (user) {
    if (!user || !user.id) return null;

    var users = this.readUsers();
    var index = -1;

    for (var i = 0; i < users.length; i++) {
      if (users[i] && users[i].id === user.id) {
        index = i;
        break;
      }
    }

    if (index === -1) {
      if (!Array.isArray(user.ListName)) user.ListName = [];
      if (user.nickname && user.ListName.indexOf(user.nickname) === -1) {
        user.ListName.unshift(user.nickname);
      }
      users.push(user);
    } else {
      var oldUser = users[index] || {};
      var names = Array.isArray(oldUser.ListName) ? oldUser.ListName.slice() : [];

      if (Array.isArray(user.ListName)) {
        user.ListName.forEach(function (n) {
          n = String(n || "");
          if (n && names.indexOf(n) === -1) names.push(n);
        });
      }

      if (user.nickname && names.indexOf(user.nickname) === -1) {
        names.unshift(user.nickname);
      }

      users[index] = Object.assign({}, oldUser, user, {
        ListName: names,
        createdAt: oldUser.createdAt || user.createdAt || this.now()
      });

      user = users[index];
    }

    this.writeUsers(users);
    return user;
  },

  saveAndSendUser: function (extra) {
    try {
      var user = this.buildUser(extra || {});
      if (!user) return null;

      user = this.upsertUser(user);

      this.sendToUserServer({
        type: "user_upsert",
        user: user
      });

      return user;
    } catch (e) {
      console.log("saveAndSendUser error", e);
      return null;
    }
  },

  setUserOffline: function (id) {
    try {
      var users = this.readUsers();
      var user = null;

      for (var i = 0; i < users.length; i++) {
        if (users[i] && users[i].id === id) {
          users[i].isOnline = false;
          users[i].lastSeenAt = this.now();
          users[i].updatedAt = this.now();
          user = users[i];
          break;
        }
      }

      this.writeUsers(users);

      if (user) {
        this.sendToUserServer({
          type: "user_offline",
          user: user
        });
      }

      return user;
    } catch (e) {
      console.log("setUserOffline error", e);
      return null;
    }
  }
};

setInterval(function () {
  try {
    if (!window._wwcio) return;
    if (typeof bbs === "undefined" || !bbs) return;
    if (!bbs.userId) return;

    _wwcio.saveAndSendUser({
      id: bbs.userId || "",
      nickname: bbs.nickname || "",
      level: bbs.level || 0,
      highScore: bbs.highScore || 0,
      kills: bbs.kills || 0,
      coins: bbs.coins || 0,
      gamesPlayed: bbs.gamesPlayed || 0,
      headShots: bbs.headShots || 0,
      avatarUrl: bbs.avatarUrl || "",
      registrationDate: bbs.registrationDate || "",
      gemall: bbs.gemall || "",
      isOnline: true
    });
  } catch (e) {
    console.log("auto sync user error", e);
  }
}, 10000);

    window._wwc = {
      deadPositionMap: function f63() {
        var v146 = new PIXI.Text("X", _wwc.fontStyleMap());
        v146.position.x = _wwc.memory.positionOfDead.x;
        v146.position.y = _wwc.memory.positionOfDead.y;
        _wwc._anApp.og.af.ng.Tg.addChild(v146);
        var vLN016 = 0;
        var vSetInterval = setInterval(function () {
          vLN016 = !vLN016;
          v146.alpha = vLN016;
        }, 500);
        var vSetTimeout = setTimeout(function () {
          clearInterval(vSetInterval);
          if (!_wwc._anApp.og.af.ng.Tg) {
            return;
          }
          _wwc._anApp.og.af.ng.Tg.removeChild(v146);
          v146.destroy();
        }, 60000);
        _wwc.removeDeadPositionMap = function () {
          clearInterval(vSetInterval);
          clearTimeout(vSetTimeout);
          if (!_wwc._anApp.og.af.ng.Tg) {
            return;
          }
          _wwc._anApp.og.af.ng.Tg.removeChild(v146);
          if (v146 && v146.destroy) {
            v146.destroy();
          }
        };
      },
      fontStyleMap: function f64(p191) {
        return {
          fontFamily: "Arial",
          fontSize: "12px",
          fill: "red",
          align: "center",
          fontWeight: "bold"
        };
      },
      startGame: function f65() {
        if (_wwc.memory.positionOfDead) {
          var v147 = _wwc.deadPositionMap();
        }
      },
      stopGame: function f66() {
        var v148;
        var v149;
        _wwcio.close();
        _wwcio.findFriendActived = false;
        if (!_wwcio.myLocation) {
          return;
        }
        _wwc.memory.positionOfDead = {
          x: (v148 = _wwcio.myLocation) === null || v148 === undefined || (v148 = v148.position) === null || v148 === undefined ? undefined : v148.x,
          y: (v149 = _wwcio.myLocation) === null || v149 === undefined || (v149 = v149.position) === null || v149 === undefined ? undefined : v149.y
        };
        if (_wwc.removeDeadPositionMap) {
          _wwc.removeDeadPositionMap();
        }
      },
      memory: {},
      mySkin: null,
      customPaths: {
        map: null
      },
      _ass_type: [],
      testSkinMod: function f67(p192) {
        var v150 = typeof p192 === "string";
        p192 = parseInt(p192);
        if (v150 && isNaN(p192)) {
          return false;
        } else {
          return parseInt(p192) >= 399 && parseInt(p192) < 8999;
        }
      },
      testWear: function f68(p193) {
        var v151 = typeof p193 === "string";
        p193 = parseInt(p193);
        if (v151 && isNaN(p193)) {
          return false;
        } else {
          return parseInt(p193) >= 399 && parseInt(p193) < 8999;
        }
      },
      isNumberValid: function f69(p194) {
        return p194 !== "" && p194 !== null && p194 !== undefined && !isNaN(p194);
      },
      validInputWear: function f70(p195) {
        var v152 = _wwc.testWear(p195);
        var v153 = typeof skinId === "string";
        if (!v152 && !v153) {
          return p195;
        }
        return 0;
      },
      validInput: function f71(p196) {
        var v154 = _wwc.testSkinMod(p196);
        var v155 = typeof p196 === "string";
        if (!v154 && !v155) {
          return p196;
        }
        try {
          var v156 = $("#inputReplaceSkin").val();
          return encodeURI(_wwc.isNumberValid(v156) ? v156 : bbs.idReplaceSkin || 35);
        } catch (e5) {
          return encodeURI(35);
        }
      },
      fullscreen: null,
      joystick: function f72(p197) {
        var vO25 = {
          checked: true,
          color: "red",
          mode: "dynamic",
          positionMode: "L",
          size: 100,
          pxy: 100
        };
        return vO25;
      },
      load_con: function f73() {
        $(".selecionar-sala-v2").click(function (p198) {
          p198.preventDefault();
          var v157 = $(this).attr("data-con") || bbs.con;
          var v158 = $(this).attr("data-type");
          w2c2020.addRoom($(this).attr("data-room"));
          vO30.dh.Zp = function (p199, p200, p201) {
            bbs.con = p201 ? p199 : v157 || p199;
            _wwc.Zp(bbs.con, p200);
          };
          vO30.Pn();
        });
      },
      fnSaveGame: function f74() {
        var v$ = $("#saveGame");
        v$.prop("checked", bbs.saveGame);
        v$.change(function () {
          if (!this.checked) {
            var vConfirm = confirm("PORTUGUES:\nAtenÃ§Ã£o: os registros seram apagados; Confirma?\n\nEnglish:\nAttention: the records will be deleted; Confirm?\n\nArabic:\nØªÙ†Ø¨ÙŠÙ‡: Ø³ÙŠØªÙ… Ø­Ø°Ù  Ø§Ù„Ø³Ø¬Ù„Ø§Øª Ø› ØªØ¤ÙƒØ¯ØŸ");
            $(this).prop("checked", !vConfirm);
            if (!this.checked) {
              _wwc.fnSetCounts("zerar");
            }
          }
          bbs.saveGame = this.checked;
          w2c2020.hsTotal.alpha = this.checked ? 1 : 0;
          w2c2020.killTotal.alpha = this.checked ? 1 : 0;
          localStorage.setItem("wwcSaveGame", this.checked ? JSON.stringify(bbs) : null);
        });
      },
      fnSetCounts: function f75(p202, p203) {
        var v_0x4c432a = function f76(p204, p205, p206, p207) {
          _wwc.setCountGame(p204, p205, p206, p207);
        };
        if (p202 === "count") {
          bbs.kill = (bbs.kill || 0) + (p203 ? 0 : 1);
          bbs.headshot = (bbs.headshot || 0) + (p203 ? 1 : 0);
          bbs.HOL = bbs.headshot > bbs.HOL ? bbs.headshot : bbs.HOL;
          bbs.tkill = bbs.tkill + (p203 ? 0 : 1);
          bbs.theadshot = bbs.theadshot + (p203 ? 1 : 0);
        }
        if (p202 === "open") {
          bbs.kill = 0;
          bbs.headshot = 0;
          if (bbs.saveGame) {}
        }
        if (p202 === "close") {
          if (bbs.saveGame) {
            bbs.died = (bbs.died || 0) + 1;
          } else {
            _wwc.fnSetCounts("zerar");
          }
        }
        if (p202 === "zerar") {
          bbs.kill = 0;
          bbs.tkill = 0;
          bbs.headshot = 0;
          bbs.theadshot = 0;
          bbs.died = 0;
        }
        v_0x4c432a(bbs.kill, bbs.headshot, bbs.tkill, bbs.theadshot);
        localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
      },
      setCountGame: function f77(p208, p209, p210, p211) {
        if (!bbs.saveGame) {
          w2c2020.hsTotal.alpha = 0;
          w2c2020.killTotal.alpha = 0;
        }
        w2c2020.hs.text = p209;
        w2c2020.hsTotal.text = p211;
        w2c2020.kill.text = p208;
        w2c2020.killTotal.text = p210;
      },
      ismobile: f96(),
      Zp: undefined
    };
    window.bbs = {
      version: 0,
      headshot: 0,
      kill: 0,
      theadshot: 0,
      tkill: 0,
      died: 0,
      start: 0,
      HOL: 0,
      tk: null,
      country: null,
      finish: 0,
      saveGame: false,
      idReplaceSkin: 34,
      mobile: false,
      joystick: null,
      configJoystick: {
        buttons: {
          respawn: {
            label: "RESPAWN",
            labelAbbreviation: "RP",
            active: false,
            action: "mbf.mbfass6()"
          },
          lobby: {
            label: "LOBBY",
            labelAbbreviation: "L",
            active: true,
            action: "mbf.mbfass5()"
          },
          rotate: {
            label: "ROTATE",
            labelAbbreviation: "A",
            active: true,
            action: "mbf.mbfass4()"
          },
          snail: {
            label: "SNAIL",
            labelAbbreviation: "B",
            active: true,
            action: "mbf.mbfass3()"
          },
          search: {
            label: "SEARCH",
            labelAbbreviation: "SE",
            active: false,
            action: "mbf.mbfass0()"
          },
          swap: {
            label: "SWAP",
            labelAbbreviation: "SW",
            active: false,
            action: "mbf.mbf_cambiar()"
          },
          zoomplus: {
            label: "Z+",
            labelAbbreviation: "+",
            active: true,
            action: "mbf.mbfass1()"
          },
          zoomminus: {
            label: "Z-",
            labelAbbreviation: "-",
            active: true,
            action: "mbf.mbfass2()"
          },
          zoom: {
            label: "x1",
            labelAbbreviation: "x1",
            active: true,
            action: "mbf.mbfass7()"
          }
        },
        typeZoom: ["btn", "range"],
        typeCurrent: "btn",
        typeName: ["all", "abb"],
        typeCurrentName: "abb"
      },
      customJoystick: null,
      display: {
        customClock: null,
        clock: {
          x: 60,
          y: 60
        },
        top: {
          x: 225,
          y: 1
        },
        default: false,
        custom: false,
        m: {
          x: 60,
          y: 60
        },
        r: {
          x: 225,
          y: 1
        },
        ms: false
      },
      PropertyManager: {},
      acs: true,
      lr: false,
      showTophs: true,
      showRechs: true,
      con: null,
      params: "",
      arrow: true,
      activeBadLang: false,
      activeSounds2: true,
      activeZoom: true,
      activeZoomMobile: true,
      top10Show: [],
      background: null,
      backgroundIsCustom: false,
      nickname: null,
      code: null,
      configZoom: {
        limitDown: 0.25,
        step: 0.25,
        closeUp: 0.5,
        closeDown: 1
      },
      laserActive: false,
      laserColor: 16711680,
      laser: 0.1,
      displayFriends: {
        x: -10,
        y: 315,
        rotation: 0
      },
      enemyNameColor: null,
      enemyNameFontSize: null,
      novidadewormworld: 0
    };
    var v159 = localStorage.getItem("wwc_version");
    var v160 = localStorage.getItem("wwcSaveGame");
    var v161 = localStorage.getItem("wwc_config");
    v160 &&= JSON.parse(v160);
    for (var v162 in v160) {
      switch (v162) {
        case "configJoystick":
          if (!v160[v162]) {
            break;
          }
          bbs[v162] = v160[v162];
          for (var v163 in v160[v162].buttons) {
            bbs[v162].buttons[v163] = v160[v162].buttons[v163];
          }
          for (var v164 in v160[v162]) {
            bbs[v162][v164] = v160[v162][v164];
          }
          break;
        case "joystick":
          bbs[v162] = _wwc.joystick();
          for (var v165 in v160[v162]) {
            bbs[v162][v165] = v160[v162][v165];
          }
          break;
        case "display":
          for (var v166 in v160[v162]) {
            bbs[v162][v166] = v160[v162][v166];
          }
          break;
        default:
          bbs[v162] = v160[v162];
          break;
      }
    }
    if (!bbs.version || bbs.version !== vLN2) {
      bbs.version = vLN2;
      bbs.joystick = _wwc.joystick();
    }
    bbs.loading = true;
    window.respawnFn = function () {
      vO30.dh.Cn = 0;
      if (vO30.dh.mq) {
        vO30.dh.mq.close();
      }
      vO30.dh.mq = null;
      vO30.dh.Zp = function (p212, p213) {
        _wwc.Zp(bbs.con || p212, p213);
      };
      vO30.Pn();
    };
    window.lobbyFn = function () {
      vO30.dh.Cn = 0;
      if (vO30.dh.mq) {
        vO30.dh.mq.close();
      }
      vO30.dh.mq = null;
      vO30.dh.Np();
      v_0x4149fb();
    };
    $("#mm-advice-cont").html("<div class=\"wormworld-connect-count-b32\" style=\"display: grid !important; grid-template-columns: 1fr 1fr 1fr;gap: 2px;\">\n    <input type=\"button\" value=\"F.SCREEN\" id=\"btnFullScreen\" style=\"background-color #FFF; font-weight: bold; border-width: 0px;  color: #000000; border-radius: 0px; margin-top: 5px; width: 100%; height: 35px;\" />\n    <input type=\"button\" value=\"RESPAWN\" onclick=\"respawnFn()\" style=\"background-color: #f7941d; font-weight: bold; border-width: 0px;  color: #fff; border-radius: 0px; margin-top: 5px; width: 100%; height: 35px;\" />\n   <input type=\"button\" value=\"SKINLAB\" id=\"btnskinlabxo\" style=\"background-color #FFF; font-weight: bold; border-width: 0px;  color: #000000; border-radius: 0px; margin-top: 5px; width: 100%; height: 35px;\" />\n </div>");
    const v167 = document.getElementById("btnFullScreen");
    v167.onclick = () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    };
    document.getElementById("btnskinlabxo").addEventListener("click", function () {
      window.location.href = "https://wormworld.io/skinlab/";
    });
    $("<button type=\"button\" id=\"mm-wwc\" style=\"float: right;line-height: 48px;width: 61px;background: #156ab3;color: #FFF;font-weight: bold;margin-right: 5px;border-radius: 7px; cursor: pointer;\">Set</button>").insertAfter("#mm-store");
    $(".store-view-cont").append("<div id=\"idReplaceSkin\"></div>");
    $(".wear-view-cont").append("<div id=\"idWearViewCont\"></div>");
    var vLSDisplaynonepositionr = "display:none;position:relative;background:#rgba(255, 255, 255, 0);padding:15px;max-width:680px;margin:10px auto;";
    if (_wwc.ismobile) {
      vLSDisplaynonepositionr = "display:none;position:relative;\n                  background:#FFF;padding:20px;\n                  width:calc(100vw - var(--scrollbar-width));\n                  height:100vh;";
    }
    $("body").append("<div id=\"wwc-set-view\" class=\"base-popup-view\" style=\"" + vLSDisplaynonepositionr + "\"></div>");
    var vLSAss = "ass";
    window.mbf = {};
    var v_0x5064e3 = function f78(p214) {
      if (bbs.shiftKey) {
        return;
      }
      var vLN30 = 30;
      var vLN017 = 0;
      var v168 = false;
      function f79() {
        var vParseFloat = parseFloat(vO30.og.af.Bn);
        vParseFloat = (vParseFloat - 0.06) % (Math.PI * 2);
        if (vParseFloat < 0) {
          vParseFloat += Math.PI * 2;
        }
        vO30.og.af.Bn = vParseFloat.toFixed(2);
      }
      function f80(p215) {
        v133 = setInterval(function () {
          if (p215 === 1) {
            vLN017 = v168 ? vLN017 - 1 : vLN017 + 1;
            if (vLN017 % 80 === 0 && !v168) {
              vLN30 = vLN30 + 18;
              clearInterval(v133);
              f80(1);
            }
          }
          f79();
        }, vLN30);
      }
      if ((p214 == 7 || p214.key == "7") && v133 === null) {
        vO30.og.af.ng.Eb.removeEventListener("pointermove", mbf.onmovepoint, true);
        f80(1);
        return;
      }
      if ((p214 == 8 || p214.key == "8") && v133 === null) {
        vO30.og.af.ng.Eb.removeEventListener("pointermove", mbf.onmovepoint, true);
        f80(2);
        return;
      }
      if (v133 !== null) {
        clearInterval(v133);
        vO30.og.af.ng.Eb.addEventListener("pointermove", mbf.onmovepoint, true);
        v133 = null;
      }
    };
    mbf.mbfass0 = function () {
      _wwcio.findFriend();
    };
    mbf.mbfass1 = function () {
      var v169 = vO30.Ij.Rk.customer ? 100 : 10000000;
      if (vLN12 <= v169) {
        vLN12 += vLN12 > 15 ? 1 : bbs.configZoom?.step || 0.25;
      }
      vLN12 = Math.min(vLN12, v169);
      w2c2020.zoom.text = "x" + vLN12.toFixed(2);
    };
    mbf.mbfass2 = function () {
      var v170 = vLN12 - (vLN12 > 15 ? 700 : bbs.configZoom?.step);
      vLN12 = v170 < bbs.configZoom?.limitDown ? bbs.configZoom?.step : v170;
      w2c2020.zoom.text = "x" + vLN12.toFixed(2);
    };
    mbf.mbfass3 = function () {
      if (mbf.mbf_rotate) {
        v_0x5064e3(8);
        $("#mbf_rotate").css("background-color", "#000");
      } else {
        v_0x5064e3(v133 ? 0 : 8);
      }
      if (v133) {
        mbf.mbf_snail = true;
        $("#mbf_snail").css("background-color", "#156ab3");
      } else {
        mbf.mbf_snail = false;
        $("#mbf_snail").css("background-color", "#000");
      }
    };
    mbf.mbfass4 = function () {
      if (mbf.mbf_snail) {
        $("#mbf_snail").css("background-color", "#000");
        v_0x5064e3(8);
      } else {
        v_0x5064e3(v133 ? 0 : 8);
      }
      if (v133) {
        mbf.mbf_rotate = true;
        $("#mbf_rotate").css("background-color", "#156ab3");
      } else {
        mbf.mbf_rotate = false;
        $("#mbf_rotate").css("background-color", "#000");
      }
    };
    mbf.mbfass5 = function () {
      window.location.reload();
    };
    mbf.mbfass6 = function () {
      respawnFn();
    };
    mbf.mbfass7 = function () {
      vLN12 = 1;
      w2c2020.zoom.text = "x1";
    };
    mbf.mbfass9 = function (p216) {
      var v171 = vO30.Ij.Rk.customer ? 100 : 2;
      if (p216.value <= v171) {
        vLN12 = p216.value;
        w2c2020.zoom.text = "x" + p216.value;
      }
    };
    mbf.mbf_cambiar_origin = null;
    mbf.mbf_cambiar_current = 0;
    mbf.mbf_cambiar_seq = 0;
    mbf.mbf_cambiar_add = function (p217, p218) {
      if (!bbs.cambiar) {
        bbs.cambiar = {};
      }
      if (bbs.cambiar[p217]) {
        alert("Skin already exists in the list of skins to be");
        return;
      }
      bbs.cambiar[p217] = p218 || "Skin " + p217;
      alert("Skin added to the list of skins to be");
      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
      console.log(bbs.cambiar);
    };
    mbf.mbf_cambiar = function () {
      if (mbf.mbf_cambiar_origin === null) {
        mbf.mbf_cambiar_origin = _wwc._anApp.dh.ch.Eh.Hh;
      }
      var v172 = Object.keys(bbs.cambiar);
      if (mbf.mbf_cambiar_seq >= v172.length) {
        mbf.mbf_cambiar_seq = 0;
      }
      for (var vLN018 = 0; vLN018 < v172.length; vLN018++) {
        mbf.mbf_cambiar_current = v172[vLN018];
        if (vLN018 === mbf.mbf_cambiar_seq) {
          mbf.mbf_cambiar_current = v172[vLN018];
          break;
        }
      }
      mbf.mbf_cambiar_seq = mbf.mbf_cambiar_seq + 1;
      _wwc._anApp.dh.ch.Eh.Hh = mbf.mbf_cambiar_current;
      _wwc._anApp.dh.ch.Sm();
    };
    if (bbs.activeZoom) {
      window.onwheel = function (p219) {
        if (p219.deltaY < 0) {
          mbf.mbfass1();
        } else {
          mbf.mbfass2();
        }
      };
    }
    var v$2 = $("#idReplaceSkin");
    var vF = function () {
      var vF38 = f38(f25().m(function f81(p220, p221) {
        return f25().w(function (p222) {
          while (1) {
            switch (p222.n) {
              case 0:
                if (!p221) {
                  p222.n = 1;
                  break;
                }
                return p222.a(2);
              case 1:
                if (!p220) {
                  p220 = vO30.Ij.Rk;
                }
                console.log(p220);
                bbs.userId = p220.userId;
                p222.n = 2;
                return fetch(URLSERV_WORMWORLD + "/load-page", {
                  headers: {
                    "Content-Type": "application/json",
                    "x-access-token": p220.tk,
                    "x-uid": vLS1c45217fb5c792042bfe
                  },
                  method: "POST",
                  body: JSON.stringify(p220)
                }).then(function (p223) {
                  p223.text().then(function (p224) {
                    $(".description-text").html(p224);
                    if (p220.type === "error") {
                      $(".description-text").html(p220.msg);
                    }
                  });
                }).catch(function () {
                  $(".description-text").html("Problema de conexão.");
                });
              case 2:
                p222.n = 3;
                return fetch(URLSERV_WORMWORLD + "/set-worm-world", {
                  headers: {
                    "Content-Type": "application/json",
                    "x-access-token": p220.tk,
                    "x-uid": vLS1c45217fb5c792042bfe
                  },
                  method: "POST",
                  body: JSON.stringify({
                    userId: bbs.userId
                  })
                }).then(function (p225) {
                  p225.text().then(function (p226) {
                    $("#wwc-set-view").html(p226);
                    $("#mm-wwc").click(function (p227) {
                      $("#wwc-set-view").css("display", "block");
                    });
                    _wwc.load_con();
                    _wwc.fnSaveGame();
                    _wwc.fnSetCounts("start");
                    $("#backgroundArena").change(function () {
                      var v173 = $(this).val();
                      bbs.background = v173;
                      bbs.backgroundUri = null;
                      vO30.xe._g = vO31.bgg(v173);
                      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
                      _wwc._anApp.og.af.ng.Lg.$g(vO30.xe._g);
                      alert("Background changed!");
                    });
                    if (bbs.background !== undefined && bbs.background !== null) {
                      $("#backgroundArena").val(bbs.background);
                      var vParseInt = parseInt(bbs.background, 10);
                      vO30.xe._g = vO31.bgg(vParseInt);
                      _wwc._anApp.og.af.ng.Lg.$g(vO30.xe._g);
                    }
                    var v174 = _wwc.isNumberValid(bbs.idReplaceSkin);
                    if (v174) {
                      $("#inputReplaceSkin").val(bbs.idReplaceSkin);
                    } else {
                      var v175 = $("#inputReplaceSkin").val();
                      v174 = _wwc.isNumberValid(v175);
                      bbs.idReplaceSkin = v174 ? v175 : 33;
                    }
                    if (!bbs.joystick) {
                      $("#joystick_checked").val(true);
                      $("#joystick_color").val("red");
                      $("#joystick_mode").val("dynamic");
                      $("#joystick_position").val("L");
                      $("#joystick_size").val(100);
                      $("#joystick_pxy").val(100);
                    } else {
                      $("#joystick_checked").prop("checked", bbs.joystick.checked);
                      $("#joystick_color").val(bbs.joystick.color);
                      $("#joystick_mode").val(bbs.joystick.mode);
                      $("#joystick_position").val(bbs.joystick.positionMode);
                      $("#joystick_size").val(bbs.joystick.size);
                      $("#joystick_pxy").val(bbs.joystick.pxy);
                    }
                  });
                });
              case 3:
                return p222.a(2);
            }
          }
        }, f81);
      }));
      return function f82(p228, p229) {
        return vF38.apply(this, arguments);
      };
    }();
    var v_0x50195c = function f83(p230) {
      if (bbs.PropertyManager) {
        if (bbs.PropertyManager.lj) {
          p230.skinId = bbs.PropertyManager.lj;
        }
        if (bbs.PropertyManager.mj) {
          p230.eyesId = bbs.PropertyManager.mj;
        }
        if (bbs.PropertyManager.nj) {
          p230.mouthId = bbs.PropertyManager.nj;
        }
        if (bbs.PropertyManager.pj) {
          p230.glassesId = bbs.PropertyManager.pj;
        }
        if (bbs.PropertyManager.oj) {
          p230.hatId = bbs.PropertyManager.oj;
        }
      }
    };
    var vF2 = function () {
      var vF382 = f38(f25().m(function f84(p231, p232) {
        var v176;
        var v177;
        var v178;
        var v179;
        return f25().w(function (p233) {
          while (1) {
            switch (p233.n) {
              case 0:
                $("#mm-params-nickname").prop("maxlength", vLN50);
                p232(p231);
                vF(p231);
                _wwc._anApp = vO30;
                _wwc._tx = function (p234) {
                  Object.keys(p234).forEach(function (p235) {
                    if (p234[p235].Yi) {
                      p234[p235].fj.nh.Cc.xc.width = p234[p235].fj.nh.Cc.xc.width + 2;
                      p234[p235].fj.nh.Cc.xc.height = p234[p235].fj.nh.Cc.xc.height + 2;
                    }
                  });
                };
                _wwc.Zp = vO30.dh.Zp;
                vO30.dh.Dq = function (p236, p237, p238 = 0) {
                  try {
                    fetch(URLSERV_WORMWORLD + "/game-connect", {
                      headers: {
                        "Content-Type": "application/json",
                        "x-access-token": vO30.Ij.Rk.tk,
                        "x-uid": vLS1c45217fb5c792042bfe
                      },
                      method: "POST",
                      body: JSON.stringify({
                        nickname: bbs.nickname,
                        code: bbs.code,
                        teamRoom: _wwcio.player.teamRoom
                      })
                    }).then(function () {
                      var vF383 = f38(f25().m(function f85(p239) {
                        var v180;
                        var v181;
                        return f25().w(function (p240) {
                          while (1) {
                            switch (p240.n) {
                              case 0:
                                p240.n = 1;
                                return p239.json();
                              case 1:
                                v180 = p240.v;
                                v181 = vO30.dh;
                                if (!v180.connected) {
                                  p240.n = 2;
                                  break;
                                }
                                alert("Update Page\n\nWarning:We detected an invalid action. This may have occurred because your access token was updated, but the game was not properly restarted. Please refresh the page to continue playing safely. If the problem persists, make sure you are not using external modifications or unauthorized extensions.");
                                v181.Cq();
                                return p240.a(2);
                              case 2:
                                v181.mq = new WebSocket(p236);
                                v181.mq.binaryType = "arraybuffer";
                                vLN12 = _wwc.ismobile ? 1.25 : 1;
                                bbs.start = new Date();
                                bbs.con = p236;
                                vO20 = {};
                                vO31.setIntervalRun = setInterval(function () {
                                  vO31.ps3();
                                }, 20);
                                v181.mq.onopen = function () {
  v_0x23af79();
  _wwc.fnSetCounts("open");

  try {
    _wwcio.connectUserServer();

    _wwcio.saveAndSendUser({
      id: (bbs && bbs.userId) || (_wwcio.player && _wwcio.player.id) || "",
      nickname: (bbs && bbs.nickname) || (_wwcio.player && _wwcio.player.nickname) || "",
      isOnline: true
    });
  } catch (e) {
    console.log("onopen save user error", e);
  }

  p237();
};

v181.mq.onclose = function () {
  try {
    var myId = (bbs && bbs.userId) || (_wwcio.player && _wwcio.player.id) || "";
    if (myId) {
      _wwcio.setUserOffline(myId);
    }
  } catch (e) {
    console.log("onclose offline error", e);
  }

  v_0x4149fb();
  _wwc.fnSetCounts("close");
  _wwc.stopGame();
  clearInterval(vO31.setIntervalRun);
  vO31.loadBg = false;
  bbs.start = 0;
};

                                v181.mq.onerror = function (p241) {
                                  v_0x4149fb();
                                  _wwc.fnSetCounts("close");
                                  _wwc.stopGame();
                                  clearInterval(vO31.setIntervalRun);
                                  vO31.loadBg = false;
                                  bbs.start = 0;
                                  if (p238 > 4) {
                                    v181.Cq();
                                  } else {
                                    setTimeout(function () {
                                      p238++;
                                      console.log("Reconnect server");
                                      vO30.dh.Dq(bbs.con, p237, p238);
                                    }, 2000);
                                  }
                                };
                                v181.mq.onmessage = function (p242) {
                                  v181.Kp.Ph(p242.data);
                                };
                              case 3:
                                return p240.a(2);
                            }
                          }
                        }, f85);
                      }));
                      return function (p243) {
                        return vF383.apply(this, arguments);
                      };
                    }());
                  } catch (e6) {
                    console.log(e6);
                    i.Cq();
                  }
                };
                vO30.dh.Kp.Yh = function (p244, p245) {
                  v_0x4149fb();
                  this.dh.Oi();
                };
                vO30.og.af.ng.Ug.Uf = function (p246) {
                  var vF3 = function () {
                    return vO31.$F.M(vO31.POGL.Sprite, function () {
                      vO31.POGL.Sprite.call(this);
                      this.sh = 0;
                    });
                  }();
                  for (var v182 in this.rh) {
                    if (p246[v182] == null || !p246[v182].hd) {
                      vO31.$F.U(this.rh[v182]);
                      delete this.rh[v182];
                    }
                  }
                  var vLN019 = 0;
                  var vLN13 = 1;
                  if (bbs.display.custom) {
                    vLN13 = window.innerWidth;
                  }
                  for (var v183 in p246) {
                    var v184 = p246[v183];
                    if (v184.hd) {
                      var v185 = this.rh[v183];
                      if (!v185) {
                        var v186 = vO30.Lc.Ub().pb(v184.nd).ub;
                        v185 = new vF3();
                        v185.texture = v186.Ea();
                        v185.width = 40;
                        v185.height = 40;
                        this.rh[v183] = v185;
                        this.addChild(v185);
                      }
                      w2c2020.setPtc(this, v183, v184.od);
                      v185.sh = v184.od;
                      v185.position.x = vLN019 + (bbs.display.custom ? bbs.display.clock.x * vLN13 : 0);
                      v185.position.y = bbs.display.custom ? bbs.display.clock.y : v185.position.y;
                      vLN019 += 40;
                    }
                  }
                };
                if (!bbs.display.customClock) {
                  vO30.og.af.ng.Tg.addChild(w2c2020.clock);
                }
                vO30.og.af.ng.Tg.addChild(w2c2020.containerCountInfo);
                vO30.og.af.ng.Tg.addChild(w2c2020.containerHstop);
                w2c2020.containerHstop.alpha = bbs.showTophs ? 1 : 0;
                vO30.og.af.ng.Tg.addChild(w2c2020.containerHsRec);
                w2c2020.containerHsRec.alpha = bbs.showRechs ? 1 : 0;
                vO30.og.af.ng.Tg.addChild(w2c2020.labelRoom);
                w2c2020.ptc = {};
                v176 = [40, 40, 40, 120, 40, 20, 40];
                for (v177 = 0; v177 < v176.length; v177++) {
                  v178 = "clock_ad" + v177;
                  w2c2020.ptc[v178] = new PIXI.Text(v176[v177], w2c2020.fontStyle["tfc" + v177]);
                  w2c2020.ptc[v178].y = 61;
                }
                w2c2020.setPtc = function (p247, p248, p249) {
                  var v187 = v176[p248] - parseInt((p249 == 0.99 ? 1 : p249) * v176[p248] / 1);
                  var v188 = "clock_ad" + p248;
                  p247.rh[p248].addChild(w2c2020.ptc[v188]);
                  if (w2c2020.ptc[v188]) {
                    w2c2020.ptc[v188].x = v187 >= 100 ? 11 : v187 >= 10 ? 18 : 26;
                    w2c2020.ptc[v188].text = v187;
                  }
                };
                v179 = vO30.og.af.ng.Eb;
                mbf.onmovepoint = function (p250) {
                  if (p250.pointerType === "touch" && !p250.isPrimary) {
                    return;
                  }
                  if (p250.clientX !== undefined) {
                    vO30.og.af.Bn = Math.atan2(p250.clientY - v179.offsetHeight * 0.5, p250.clientX - v179.offsetWidth * 0.5);
                  } else {
                    vO30.og.af.Bn = Math.atan2(p250.pageY - v179.offsetHeight * 0.5, p250.pageX - v179.offsetWidth * 0.5);
                  }
                };
                mbf.onRun = function (p251) {
                  if (p251 && p251.pointerType === "touch") {
                    return;
                  }
                  vO30.og.af.An = true;
                };
                mbf.onStop = function (p252) {
                  if (p252 && p252.pointerType === "touch") {
                    return;
                  }
                  vO30.og.af.An = false;
                };
                v179.addEventListener("pointermove", mbf.onmovepoint, true);
                v179.addEventListener("pointerdown", mbf.onRun, true);
                v179.addEventListener("pointerup", mbf.onStop, true);
                if (_wwc.ismobile) {
                  v179.addEventListener("touchstart", function (p253) {
                    if (p253 = p253 || window.event) {
                      vO30.og.af.An = p253.touches.length >= 2;
                    }
                    p253.preventDefault();
                  }, true);
                  v179.addEventListener("touchend", function (p254) {
                    if (p254 = p254 || window.event) {
                      vO30.og.af.An = p254.touches.length >= 2;
                    }
                  }, true);
                }
              case 1:
                return p233.a(2);
            }
          }
        }, f84);
      }));
      return function f86(p255, p256) {
        return vF382.apply(this, arguments);
      };
    }();
    function f87() {
      var v189 = document.createElement("div");
      v189.style.position = "fixed";
      v189.style.top = "0";
      v189.style.height = "100%";
      v189.style.width = "100%";
      v189.style.zIndex = "1000";
      v189.id = "zone_joystick";
      document.body.appendChild(v189);
    }
    function f88() {
      var v190 = document.getElementById("zone_joystick");
      if (v190) {
        v190.remove();
      }
    }
    var v_0x4149fb = function f89() {
      if (v135) {
        $("#wwc-mobile-box").remove();
        $("#wwc-mobile-box-slider").remove();
        v135.destroy();
      }
      f88();
    };
    var v_0x23af79 = function f90() {
      try {
        var v_0x72500e = function f91() {
          v135.on("start end", function (p257, p258) {}).on("move", function (p259, p260) {
            var v191 = p260.angle.radian <= Math.PI ? p260.angle.radian * -1 : Math.PI - (p260.angle.radian - Math.PI);
            vO30.og.af.Bn = v191;
          });
        };
        var v_0x46d875 = function f92() {
          if (v135) {
            v135.destroy();
          }
          var vF21 = f21({}, bbs.joystick);
          var vO26 = {};
          if (bbs.customJoystick) {
            f87();
            var vF10 = f10(bbs.customJoystick.buttons);
            var v192;
            try {
              for (vF10.s(); !(v192 = vF10.n()).done;) {
                var v193 = v192.value;
                var v194 = document.createElement("div");
                if (v193.svg) {
                  v194.innerHTML = v193.svg;
                } else {
                  v194.style.color = v193.color || "#FFF";
                  v194.style.backgroundColor = v193.backgroundColor || "#000";
                  v194.style.borderRadius = "10px";
                  v194.style.textAlign = "center";
                  v194.style.fontWeight = "bold";
                  v194.style.padding = "5px";
                  v194.style.border = "1px solid #f00";
                  v194.style.fontSize = v193.size || "25px";
                  v194.innerHTML = v193.value;
                }
                v194.style.position = "absolute";
                v194.style.top = v193.top;
                v194.style.left = v193.left;
                v194.style.display = v193.display;
                v194.style.cursor = "pointer";
                v194.id = "cbjt_" + v193.value;
                v194.dataset.size = v193.size;
                v194.dataset.color = v193.color || "#FFF";
                v194.style.opacity = 0.6;
                document.getElementById("zone_joystick").appendChild(v194);
                if (v193.display !== "none") {
                  if (v193.value === "ZoomIn") {
                    v194.addEventListener("click", function (p261) {
                      mbf.mbfass2();
                    });
                  }
                  if (v193.value === "ZoomOut") {
                    v194.addEventListener("click", function (p262) {
                      mbf.mbfass1();
                    });
                  }
                  if (v193.value === "Accelerator") {
                    v194.addEventListener("pointerdown", function (p263) {
                      mbf.onRun();
                    });
                    v194.addEventListener("pointerup", function (p264) {
                      mbf.onStop();
                    });
                  }
                  if (v193.value === "Respawn") {
                    v194.addEventListener("click", function (p265) {
                      respawnFn();
                    });
                  }
                  if (v193.value === "Rotate") {
                    v194.addEventListener("click", function (p266) {
                      v_0x5064e3(v133 ? 0 : 8);
                    });
                  }
                  if (v193.value === "Snail") {
                    v194.addEventListener("click", function (p267) {
                      v_0x5064e3(v133 ? 0 : 7);
                    });
                  }
                  if (v193.value === "Lobby") {
                    v194.addEventListener("click", function (p268) {
                      lobbyFn();
                    });
                  }
                  if (v193.value === "Search") {
                    v194.addEventListener("click", function (p269) {
                      mbf.mbfass0();
                    });
                  }
                }
                vO26[v193.value] = v194;
              }
            } catch (e7) {
              vF10.e(e7);
            } finally {
              vF10.f();
            }
            vO26.Directional;
            var v195 = vO26.Directional.dataset.size / 2;
            var v196 = parseInt(vO26.Directional.style.left.replace("px", "")) + v195;
            var v197 = parseInt(vO26.Directional.style.top.replace("px", "")) + v195;
            vF21 = {
              zone: vO26.Directional,
              mode: "static",
              position: {
                left: "50%",
                top: "50%"
              },
              dumbBox: {
                left: v196,
                top: v197
              },
              color: "transparent",
              size: Math.floor(vO26.Directional.dataset.size / 1.6)
            };
          } else {
            vF21.zone = document.getElementById("game-view");
            if (vF21.mode === "static") {
              delete vF21.zone;
            }
          }
          v135 = nipplejs.create(vF21);
          v_0x72500e();
          if (bbs.customJoystick) {
            $(".nipple > .front").css("background", vO26.Directional.dataset.color);
          }
        };
        if (_wwc.ismobile) {
          var vLS4 = "";
          var v198 = bbs.configJoystick.typeCurrentName === "all" ? "label" : "labelAbbreviation";
          Object.keys(bbs.configJoystick.buttons).forEach(function (p270) {
            vLS4 = vLS4 + (bbs.configJoystick.buttons[p270].active ? "<button onclick=\"" + bbs.configJoystick.buttons[p270].action + "\" id=\"mbf_" + p270 + "\">" + bbs.configJoystick.buttons[p270][v198] + "</button>" : "");
          });
          var v199 = "\n        <style>\n          #wwc-mobile-box {\n            position: fixed;z-index: 1001;width: 100%;top: 10px;\n          }\n          #wwc-mobile-buttons {\n            position: relative;margin: 0 auto;width: 265px;\n            display: flex;flex-wrap: nowrap;justify-content: space-between;align-items: center;\n          }\n          #wwc-mobile-buttons > button {\n            background-color: #000;color: #FFF;border: 1px solid #FFF;border-radius: 50px;\n            min-width: 36px;height: 36px;font-weight: bold;display: flex;justify-content: center;\n            align-items: center;\n          }\n          .game-slider-container-02 {\n            position: fixed;z-index: 1000;bottom: 50px;right: 45px;\n          }\n          .game-slider-container-02 input[type=range][orient=vertical] {\n              writing-mode: vertical-lr;\n              direction: rtl;\n              appearance: slider-vertical;\n              width: 16px;\n              vertical-align: bottom;\n          }\n        </style>\n        <div id=\"wwc-mobile-box\"><div id=\"wwc-mobile-buttons\" style=\"\">" + vLS4 + "</div></div>";
          v199 = v199 + (bbs.configJoystick.typeCurrent === "btn" ? "" : "<div id=\"wwc-mobile-box-slider\" class=\"game-slider-container-02\"><input id=\"sliderZoom\" orient=\"vertical\" onchange=\"mbf.mbfass9(this)\" type=\"range\" min=\"0.25\" max=\"" + (vO30.Ij.Rk.customer ? 12 : 2) + "\" step=\"0.25\" value=\"1\" style=\"height: 65vh;\"></div>");
          $("body").append(v199);
        }
        if (_wwc.ismobile && bbs.joystick.checked) {
          if (bbs.customJoystick) {
            console.log("customJoystick");
          }
          v_0x46d875();
        }
      } catch (e8) {
        console.error(e8);
      }
    };
    var v200 = localStorage.getItem("custom_wormworld_wear");
    var v201 = localStorage.getItem("custom_wormworld_skin");
    var v202 = localStorage.getItem("custom_wormworld_badLang");
    var v203 = localStorage.getItem("custom_wormworld_background");
    var v204 = localStorage.getItem("custom_wormworld_audio");
    var vA4 = [" XТ_", "WORMXТ_(d{})", "_xt", "wormxt", "worm_xt", "timmap"];
    if (v202) {
      vA4 = vA4.concat(JSON.parse(v202));
    }
    window.badLanguageRegEx = (vA4 || []).join("|");
    var v_0x3d02f5 = function f93(p271) {
      p271 = p271.replace(new RegExp(badLanguageRegEx, "gim"), ":");
      p271 = p271.replace(/\uFDFD/g, "");
      p271 = p271.substring(0, vLN50);
      return p271;
    };
    _wwc.customConfig = function (p272) {
      var v_0x32f39d = function f94(p273, p274 = 0) {
        var v205 = p273.id.toString();
        var v206 = p273.type.toString().toLowerCase() + "VariantArray";
        var v207 = p273.type.toString().toLowerCase() + "Dict";
        p272.textureDict[v205] = {
          custom: true,
          re1ativePath: p273.file,
          reference: 1000 + p274
        };
        p272.regionDict[v205] = {
          texture: v205,
          x: p273.x,
          y: p273.y,
          w: p273.w,
          h: p273.h,
          px: p273.px,
          py: p273.py,
          pw: 128,
          ph: 128
        };
        p272[v207][1000 + p274] = {
          base: [{
            region: v205
          }],
          guest: false,
          nonbuyable: false,
          price: 0,
          priceBefore: 0,
          id: v205
        };
        p272[v206].push([1000 + p274]);
      };
      if (v200) {
        v200 = JSON.parse(v200);
        if (v200.wear) {
          if (v200.version == "2") {
            v200.data.forEach(function (p275, p276) {
              v_0x32f39d(p275, p276);
            });
          } else {
            for (var v208 in v200.wear.textureDict) {
              p272.textureDict[v208] = {};
              p272.textureDict[v208].h1 = true;
              p272.textureDict[v208].h3 = true;
              p272.textureDict[v208].re1ativePath = v200.wear.textureDict[v208].file;
            }
            for (var v209 in v200.wear.regionDict) {
              p272.regionDict[v209] = v200.wear.regionDict[v209];
              var v210 = p272.regionDict[v209];
              p272[v210.list][v210.obj.id.toString()] = v210.obj;
              p272[v210.listVariant].push([v210.obj.id.toString()]);
            }
          }
        }
      }
      if (v201) {
        v201 = JSON.parse(v201);
        if (v201.version_skin == "2") {
          var v_0x4a04ca = function f95(p277, p278, p279, p280) {
            return {
              texture: p278,
              h: p279 - 5,
              w: p279 - 5,
              x: p279 * (p280 ? 0 : p277 || 0),
              y: 0
            };
          };
          var v211 = "SKIN_" + v201.id + "_XO";
          var vO27 = {
            id: v211,
            regionDict: {},
            textureDict: {},
            skinArrayDict: [],
            skinGroupArrayDict: [{
              id: v211,
              name: {
                en: "Custom V2"
              },
              list: []
            }],
            version_skin: 3
          };
          var vO28 = {
            id: v211,
            guest: false,
            price: 0,
            priceBefore: 0,
            nonbuyable: false,
            prime: "c_white",
            glow: v201.glow,
            base: []
          };
          for (var v212 = v201.len - 1; v212 >= 0; v212--) {
            vO27.regionDict[v211 + "_" + v212] = v_0x4a04ca(v212, v211, v201.cos, 0);
            vO28.base.push(v211 + "_" + v212);
          }
          vO27.textureDict[v211] = {
            custom: true,
            re1ativePath: v201.file || v201.td.file,
            h1: true,
            h4: true
          };
          vO27.skinArrayDict.push(vO28);
          vO27.skinGroupArrayDict[0].list.push(v211);
          if (!v201.textureDict[v211]) {
            alert("Error! Texture not found:" + p + " - load again.");
            return;
          }
        }
        if (v201.version_skin == "3") {
          for (var v213 in v201) {
            var vF41 = f41(v201[v213]);
            if (vF41 === "object") {
              p272[v213] = Array.isArray(v201[v213]) ? [].concat(f6(p272[v213]), f6(v201[v213])) : f21(f21({}, p272[v213]), v201[v213]);
            }
          }
          return;
        }
        var v214 = v201.skin.id;
        v201.skin.id = v214.toString();
        for (var v215 in v201.textureDict) {
          p272.textureDict[v215] = v201.textureDict[v215];
          p272.textureDict[v215].re1ativePath = v201.textureDict[v215].file;
          p272.textureDict[v215].h1 = true;
          p272.textureDict[v215].h4 = true;
        }
        for (var v216 in v201.regionDict) {
          p272.regionDict[v216] = v201.regionDict[v216];
        }
        p272.skinGroupArrayDict.push({
          id: "custom",
          name: {
            en: "Custom"
          },
          list: [v214]
        });
        p272.skinArrayDict.push(v201.skin);
      }
    };
    function f96() {
      var v217 = false;
      (function (p281) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(p281) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(p281.substr(0, 4))) {
          v217 = true;
        }
      })(navigator.userAgent || navigator.vendor || window.opera);
      return v217;
    }
    window.w2c2020 = {
      fontStyle: {
        amarelo: new PIXI.TextStyle({
          align: "center",
          fill: "#FFD500",
          fontSize: 10,
          lineJoin: "round",
          whiteSpace: "normal",
          wordWrap: true,
          fontWeight: "bold"
        }),
        branco: new PIXI.TextStyle({
          align: "center",
          fill: "#fff",
          fontSize: 10,
          lineJoin: "round",
          whiteSpace: "normal",
          wordWrap: true,
          fontWeight: "bold"
        }),
        hsBranco: new PIXI.TextStyle({
          align: "center",
          fill: "#fff",
          fontSize: 9,
          lineJoin: "round",
          whiteSpace: "normal",
          wordWrap: true,
          fontWeight: "bold"
        }),
        hsBrancoRight: new PIXI.TextStyle(f22({
          align: "center",
          fill: "#fff",
          fontSize: 9,
          lineJoin: "round",
          whiteSpace: "normal",
          wordWrap: true,
          fontWeight: "bold"
        }, "align", "right")),
        brancoXzoom: new PIXI.TextStyle({
          align: "center",
          fill: "#fff",
          fontSize: 12,
          lineJoin: "round",
          whiteSpace: "normal",
          wordWrap: true,
          fontWeight: "bold"
        }),
        verdeXzoom: new PIXI.TextStyle({
          align: "center",
          fill: "#0ff555",
          fontSize: 9,
          lineJoin: "round",
          whiteSpace: "normal",
          wordWrap: true,
          fontWeight: "bold"
        })
      }
    };
    var vA5 = ["#FFD500", "#FFC75A", "#00B2ED", "#FF4544", "#0094D7", "#CCCF81", "#ff0999"];
    for (var vLN020 = 0; vLN020 < vA5.length; vLN020++) {
      var v218 = vA5[vLN020];
      w2c2020.fontStyle["tfc" + vLN020] = new PIXI.TextStyle({
        align: "center",
        fill: v218,
        fontSize: 25,
        lineJoin: "round",
        whiteSpace: "normal",
        wordWrap: true,
        fontWeight: "bold"
      });
    }
    w2c2020.zoom = new PIXI.Text("x1", w2c2020.fontStyle.brancoXzoom);
    w2c2020.zoom.x = 82;
    w2c2020.zoom.y = 105;
    w2c2020.conteinerTeam = new PIXI.Container();
    w2c2020.conteinerTeam.id = "team";
    w2c2020.friends = new PIXI.Container();
    w2c2020.friends.background = new PIXI.Graphics();
    w2c2020.friends.background.beginFill(0, 0.4);
    w2c2020.friends.background.drawRect(0, 0, 100, 130);
    w2c2020.friends.background.endFill();
    w2c2020.friends.addChild(w2c2020.friends.background);
    w2c2020.friends.position.x = bbs.displayFriends?.x || -10;
    w2c2020.friends.position.y = bbs.displayFriends?.y || 315;
    w2c2020.friends.position.rotate = bbs.displayFriends?.rotate || 0;
    w2c2020.friends.alpha = 0;
    w2c2020.moveSprite = PIXI.Sprite.from(URLSERV_WORMWORLD + "/img/move-icon.png");
    w2c2020.moveSprite.width = 20;
    w2c2020.moveSprite.height = 20;
    w2c2020.moveSprite.x = 75;
    w2c2020.moveSprite.y = 130;
    w2c2020.moveSprite.interactive = true;
    w2c2020.moveSprite.buttonMode = true;
    w2c2020.rotation = PIXI.Sprite.from(URLSERV_WORMWORLD + "/img/rotate-icon.png");
    w2c2020.rotation.width = 25;
    w2c2020.rotation.height = 25;
    w2c2020.rotation.x = 45;
    w2c2020.rotation.y = 130;
    w2c2020.rotation.interactive = true;
    w2c2020.rotation.buttonMode = true;
    w2c2020.friends.addChild(w2c2020.moveSprite);
    w2c2020.friends.addChild(w2c2020.rotation);
    var v219 = false;
    var vO29 = {
      x: 0,
      y: 0
    };
    w2c2020.rotation.on("pointerdown", function (p282) {
      w2c2020.friends.rotation += Math.PI / 2;
      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs || {}));
    });
    w2c2020.moveSprite.on("pointerdown", function (p283) {
      v219 = true;
      vO29.x = p283.data.global.x - w2c2020.friends.x;
      vO29.y = p283.data.global.y - w2c2020.friends.y;
    });
    w2c2020.moveSprite.on("pointerup", function () {
      v219 = false;
    });
    w2c2020.moveSprite.on("pointerupoutside", function () {
      v219 = false;
    });
    w2c2020.moveSprite.on("pointermove", function (p284) {
      if (v219) {
        var v220 = p284.data.global;
        w2c2020.friends.x = v220.x - vO29.x;
        w2c2020.friends.y = v220.y - vO29.y;
        bbs.displayFriends.x = w2c2020.friends.x;
        bbs.displayFriends.y = w2c2020.friends.y;
        localStorage.setItem("wwcSaveGame", JSON.stringify(bbs || {}));
      }
    });
    w2c2020.moveSprite.visible = false;
    w2c2020.rotation.visible = false;
    window.addEventListener("keydown", function (p285) {
      if (p285.key === "Escape") {
        w2c2020.moveSprite.visible = !w2c2020.moveSprite.visible;
        w2c2020.rotation.visible = !w2c2020.rotation.visible;
      }
    });
    w2c2020.label_hs = new PIXI.Text("HS", w2c2020.fontStyle.amarelo);
    w2c2020.label_hs.x = 15;
    w2c2020.label_hs.y = 107;
    w2c2020.hs = new PIXI.Text("0", w2c2020.fontStyle.amarelo);
    w2c2020.hs.x = 20;
    w2c2020.hs.y = 119;
    w2c2020.hsTotal = new PIXI.Text("0", w2c2020.fontStyle.branco);
    w2c2020.hsTotal.x = 20;
    w2c2020.hsTotal.y = 132;
    w2c2020.label_kill = new PIXI.Text("KILL", w2c2020.fontStyle.amarelo);
    w2c2020.label_kill.x = 50;
    w2c2020.label_kill.y = 107;
    w2c2020.kill = new PIXI.Text("0", w2c2020.fontStyle.amarelo);
    w2c2020.kill.x = 60;
    w2c2020.kill.y = 120;
    w2c2020.killTotal = new PIXI.Text("0", w2c2020.fontStyle.branco);
    w2c2020.killTotal.x = 60;
    w2c2020.killTotal.y = 133;
    w2c2020.clock = PIXI.Sprite.from("https://wormup.in/assets/images/clock.png");
    w2c2020.clock.width = 100;
    w2c2020.clock.height = 100;
    w2c2020.clock.x = -50;
    w2c2020.clock.y = -50;
    w2c2020.containerHsRec = new PIXI.Container();
    w2c2020.containerHsRec.x = -55;
    w2c2020.containerHsRec.y = 195;
    w2c2020.containerHstop = new PIXI.Container();
    w2c2020.containerHstop.x = -55;
    w2c2020.containerHstop.y = 95;
    w2c2020.containerHsIndex = new PIXI.Container();
    w2c2020.containerHsNames = new PIXI.Container();
    w2c2020.containerHsValue = new PIXI.Container();
    var v_0x4b6234 = function f97(p286) {};
    w2c2020.top1rec = "🥇";
    w2c2020.top2rec = "🥈";
    w2c2020.top3rec = "🥉";
    w2c2020.titleRec = new PIXI.Text("Records (kb 0)", w2c2020.fontStyle.amarelo);
    w2c2020.titleRec.y = -5;
    for (var vLN021 = 0; vLN021 < 3; vLN021++) {
      var v221 = vLN021 + 1;
      var v222 = new PIXI.Text(w2c2020["top" + v221 + "rec"], w2c2020.fontStyle.hsBrancoRight);
      v222.x = vLN021 >= 9 ? -5 : 0;
      v222.y = v221 * 13;
      w2c2020.containerHsRec.addChild(v222);
      var v223 = new PIXI.Text("--", w2c2020.fontStyle.hsBranco);
      v223.x = 15;
      v223.y = v221 * 13;
      w2c2020.containerHsRec.addChild(v223);
      var v224 = new PIXI.Text("-", w2c2020.fontStyle.hsBrancoRight);
      v224.x = 135;
      v224.y = v221 * 13;
      w2c2020.containerHsRec.addChild(v224);
    }
    w2c2020.containerHsRec.addChild(w2c2020.titleRec);
    var vLN6 = 6;
    var v_0x40d8a6 = function f98(p287, p288) {
      if (p288 && p288.length > 0) {
        for (var vLN022 = 0; vLN022 < 3; vLN022++) {
          if (w2c2020.containerHsRec.children[vLN022]) {
            w2c2020.containerHsRec.children[vLN022 * 3 + 1].text = p288 && p288[vLN022] ? p288[vLN022].nickname.substring(0, 17) : "--";
          }
          if (w2c2020.containerHsRec.children[vLN022]) {
            w2c2020.containerHsRec.children[vLN022 * 3 + 2].text = p288 && p288[vLN022] ? p288[vLN022].score : "--";
          }
        }
      }
      if (p287 && p287.length > 0) {
        for (var vLN023 = 0; vLN023 < vLN6; vLN023++) {
          var vLS5 = "--";
          var vLS6 = "--";
          if (p287 && p287[vLN023]) {
            vLS5 = p287[vLN023].nickname ? p287[vLN023].nickname.substring(0, 14) : "--";
            vLS6 = parseInt(p287[vLN023].score || 0);
          }
          if (w2c2020.containerHsNames.children[vLN023]) {
            w2c2020.containerHsNames.children[vLN023].text = vLS5;
          }
          if (w2c2020.containerHsValue.children[vLN023]) {
            w2c2020.containerHsValue.children[vLN023].text = vLS6;
          }
        }
      }
    };
    w2c2020.containerHstop.addChild(new PIXI.Text("TOP HS (kb 9)", w2c2020.fontStyle.amarelo));
    for (var vLN024 = 0; vLN024 < vLN6; vLN024++) {
      var v225 = new PIXI.Text(vLN024 + 1, w2c2020.fontStyle.hsBranco);
      v225.x = vLN024 >= 9 ? -5 : 0;
      v225.y = (vLN024 + 1) * 13;
      w2c2020.containerHsIndex.addChild(v225);
      var v226 = new PIXI.Text("..", w2c2020.fontStyle.hsBranco);
      v226.x = 10;
      v226.y = (vLN024 + 1) * 13;
      w2c2020.containerHsNames.addChild(v226);
      var v227 = new PIXI.Text(0, w2c2020.fontStyle.hsBrancoRight);
      v227.x = 130;
      v227.y = (vLN024 + 1) * 13;
      w2c2020.containerHsValue.addChild(v227);
    }
    w2c2020.containerHstop.addChild(w2c2020.containerHsIndex);
    w2c2020.containerHstop.addChild(w2c2020.containerHsNames);
    w2c2020.containerHstop.addChild(w2c2020.containerHsValue);
    w2c2020.containerCountInfo = new PIXI.Container();
    w2c2020.containerCountInfo.x = -45;
    w2c2020.containerCountInfo.y = -52;
    w2c2020.containerCountInfo.addChild(w2c2020.zoom);
    w2c2020.containerCountInfo.addChild(w2c2020.friends);
    w2c2020.containerCountInfo.addChild(w2c2020.label_hs);
    w2c2020.containerCountInfo.addChild(w2c2020.hs);
    w2c2020.containerCountInfo.addChild(w2c2020.hsTotal);
    w2c2020.containerCountInfo.addChild(w2c2020.label_kill);
    w2c2020.containerCountInfo.addChild(w2c2020.kill);
    w2c2020.containerCountInfo.addChild(w2c2020.killTotal);
    w2c2020.labelRoom = new PIXI.Text("WXO", w2c2020.fontStyle.amarelo);
    w2c2020.labelRoom.x = -50;
    w2c2020.labelRoom.y = -56;
    w2c2020.addRoom = function (p289) {
      w2c2020.labelRoom.text = p289 || "WXO";
    };
    window.addEventListener("keydown", function (p290) {
      if (p290.key == "7") {
        v_0x5064e3(v133 ? 0 : 7);
      }
      if (p290.key == "8") {
        v_0x5064e3(v133 ? 0 : 8);
      }
      if (p290.key === "0" && bbs.showRechs) {
        w2c2020.containerHsRec.alpha = !w2c2020.containerHsRec.alpha;
      }
      if (p290.key === "9" && bbs.showTophs) {
        w2c2020.containerHstop.alpha = !w2c2020.containerHstop.alpha;
      }
      if (p290.key === "6" && vO31.setIntervalRun) {
        v134 = !v134;
      }
      if (p290.key === "5") {
        respawnFn();
      }
      if (p290.key === "4") {
        var v228 = _wwc._anApp.og.af.ng.mf.getChildByName("lineHS");
        if (v228) {
          v228.alpha = v228.alpha ? 0 : 0.3;
        }
      }
      if (p290.key === "3") {
        var vVLN014 = vLN014;
        if (backgroundArena.length < vVLN014) {
          vVLN014 = bbs.background || 0;
          vLN014 = 0;
        }
        _wwc._anApp.og.af.ng.Lg.$g(vO31.bgg(vVLN014));
        vLN014++;
      }
      if (p290.key === "1") {
        mbf.mbf_cambiar();
      }
      if (p290.key === "x1") {
        _wwcio.update(1);
      }
      if (p290.key === "x2") {
        _wwcio.update(2);
      }
      if (p290.key === "<" || p290.key === "," && vO31.setIntervalRun) {
        mbf.mbfass1();
      }
      if (p290.key === ">" || p290.key === "." && vO31.setIntervalRun) {
        mbf.mbfass2();
      }
      if (p290.key === "z" || p290.key === "Z" && vO31.setIntervalRun) {
        vLN12 = bbs.configZoom?.closeDown || 1;
        w2c2020.zoom.text = "x" + vLN12;
      }
      if (p290.key === "c" || p290.key === "C" && vO31.setIntervalRun) {
        w2c2020.zoom.text = vLN12 === 1 ? "x2" : "CLOSE-UP";
        vLN12 = vLN12 === 0.5 ? 2 : bbs.configZoom?.closeUp || 0.25;
      }
    });
    var vO30 = {
      Lc: {
        Gb: {}
      }
    };
    var vO31 = {
      pm: {},
      ps: 0,
      ps2: function f99(p291, p292, p293) {
        if (true) {
          var v229 = p293 ? 128 : 0;
          var v230 = vO31.$F.N(p292) / vO31.$V.F * 128 & 127;
          var v231 = (v229 | v230) & 255;
          var v232 = new ArrayBuffer(1);
          new DataView(v232).setInt8(0, v231);
          p291.Eq(v232);
          p291.nq = v231;
        } else {}
      },
      ps3: function f100() {
        vO30.dh.xq(vO30.og.af.Gn(), vO30.og.af.Hn());
      },
      setIntervalRun: null,
      loadBg: false,
      LG: function f101(p294, p295, p296) {
        p294.Ll("gg", p296.credential, null);
      },
      Lg: function f102(p297) {
        vO30.xe._g = vO31.bgg();
        _wwc.$C = p297;
        _wwc.$W = vO31;
        if (bbs.bgGameWidth > 512) {
          return new p297.WMGBS1();
        } else {
          return new p297.WMGBS2();
        }
      },
      registry: function () {
        var vF384 = f38(f25().m(function f103(p298) {
          var v233;
          return f25().w(function (p299) {
            while (1) {
              switch (p299.n) {
                case 0:
                  p299.n = 1;
                  return fetch(URLSERV_WORMWORLD + "/dynamic/assets/registry", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      "x-uid": vLS1c45217fb5c792042bfe
                    },
                    body: JSON.stringify(p298)
                  }).then(function (p300) {
                    if (!p300.ok) {
                      return p298;
                    }
                    return p300.json();
                  });
                case 1:
                  v233 = p299.v;
                  return p299.a(2, v233);
              }
            }
          }, f103);
        }));
        function f104(p301) {
          return vF384.apply(this, arguments);
        }
        return f104;
      }()
    };
    vO31.Vd = function (p302, p303) {
      _wwc.customConfig(p302);
      if (!p302) {
        return;
      }
      var vThis39 = this;
      function f105(p304) {
        var v234 = p303.Id.Ld;
        vThis39.Rd(v234, p303.Od.bc(v234).lc(p304));
      }
      if (this.Fd) {
        this.Pd();
        return;
      }
      var vA6 = [];
      var vA7 = [];
      var vLN025 = 0;
      var v235 = new PIXI.Loader();
      for (var v236 in p302.textureDict) {
        if (p302.textureDict.hasOwnProperty(v236)) {
          var v237 = p302.textureDict[v236];
          var v238 = v237.re1ativePath || v237.relativePath;
          var v239 = v237.fileSize || 100;
          var v240 = v237.sha256 || null;
          var v241 = new p303.Wd(v236, v238, v239, v240);
          v241.h1 = v237.h1;
          v241.h4 = v237.h4;
          v241.skinEvo = v237.skinEvo;
          v241.lines = v237.lines;
          v241.speed = v237.speed;
          vA6.push(v241);
          v235.add(v236, v238);
        }
      }
      v235.onProgress.add(function (p305, p306) {
        f105(p305.progress / 100);
      });
      v235.load(function (p307, p308) {
        vA6.forEach(function (p309) {
          p309.resource = p308[p309.ae];
        });
        vThis39.$d(p302, vA6, p303);
      });
      return;
    };
    vO31.Zd = function (p310, p311, p312, p313) {
      $.ajax({
        type: "GET",
        url: p310._d,
        xhrFields: {
          responseType: "arraybuffer",
          onprogress: function f106(p314) {
            if (p314.lengthComputable) {
              p313(p314.loaded / p314.total);
            }
          }
        }
      }).fail(function () {
        p311(new Error());
      }).done(function (p315) {
        p312(p315);
      });
    };
    vO31.$d = function (p316, p317, p318) {
      function f107(p319) {
        var v242 = p318.Id.Md;
        vThis40.Rd(v242, p318.Od.bc(v242).lc(p319));
      }
      var vThis40 = this;
      if (this.Fd) {
        this.Pd();
        return;
      }
      var v243;
      var v244;
      var vO32 = {};
      var v_0x311e84 = function f108() {
        for (var vLN026 = 0; vLN026 < p317.length; vLN026++) {
          try {
            window.URL.revokeObjectURL(p317[vLN026].Xd);
          } catch (e9) {}
        }
        vThis40.Sd(new Error());
      };
      var v_0x351e81 = function f109() {
        var v245 = vLN027 == 5 ? 0 : vLN027;
        f107(v245 / 4);
        vO32[v243.ae] = new vO31.$C.be(v243.Xd, v244);
        v_0x2b7a88();
      };
      var v_0x2b7a88 = function f110() {
        try {
          if (vLN027 < p317.length) {
            v243 = p317[vLN027];
            vLN027++;
            vO32[v243.ae] = new vO31.$C.be(v243.resource.texture, v243.resource.texture.baseTexture);
            v_0x2b7a88();
            return;
          }
          return vThis40.ce(p316, vO32);
        } catch (e10) {
          console.error(e10);
        }
      };
      var vLN027 = 0;
      v_0x2b7a88();
    };
    vO31.p = function (p320, p321) {
      p320 = p320.split("|");
      vO31.pm[p320[0]] = {
        p: p320[1],
        i: p321
      };
    };
    vO31.ae = function (p322, p323, p324) {
      if (p323.maV !== 1) {
        p323.maV = 1;
        var v246 = p323.ma.trim().match(v38);
        if (v246 && p324.dh.Fh[p323.ae]) {
          var v_0xd63379 = function f111(p325, p326) {
            if (p325.includes("_")) {
              if (v254["WEAR_W" + v248 + "_" + p325]) {
                return v254["WEAR_W" + v248 + "_" + p325].reference;
              } else {
                return p326;
              }
            }
            return _wwc.wearMap[p325];
          };
          var v247 = v246[3];
          var v248 = v246[4];
          var v249 = v246[5];
          var v250 = v246[6];
          var v251 = v246[7];
          var v252 = v246[8];
          var v253 = v246[9];
          var v254 = vO30.Lc.Xb().textureDict;
          var v255 = v247 === "B";
          if (v249 !== "000") {
            var v256 = "SKIN_S" + v249.substring(0, 2) + "_______________XO" + v249.substring(2);
            var v257 = v254[v256];
            p324.dh.Fh[p323.ae].Eh.Hh = !v255 ? parseInt(_wwc.skinMap[v249]) : v257 ? v256 : p324.dh.Fh[p323.ae].Eh.Hh;
          }
          if (v250 !== "00") {
            p324.dh.Fh[p323.ae].Eh.ni = v_0xd63379(v250, p324.dh.Fh[p323.ae].Eh.ni);
          }
          if (v251 !== "00") {
            p324.dh.Fh[p323.ae].Eh.oi = v_0xd63379(v251, p324.dh.Fh[p323.ae].Eh.oi);
          }
          if (v252 !== "00") {
            p324.dh.Fh[p323.ae].Eh.pi = v_0xd63379(v252, p324.dh.Fh[p323.ae].Eh.pi);
          }
          if (v253 !== "00") {
            p324.dh.Fh[p323.ae].Eh.qi = v_0xd63379(v253, p324.dh.Fh[p323.ae].Eh.qi);
          }
          p324.dh.Fh[p323.ae].Eh.ma = v_0x3d02f5(p324.dh.Fh[p323.ae].Eh.ma);
        }
      }
      p323.ma = v_0x3d02f5(p323.ma);
    };
    vO31.Xp = function (p327, p328, p329, p330, p331, p332, p333) {
      if (!_wwc.skinMap) {
        _wwc.skinMap = vO30.Lc.Xb().skinMap;
      }
      if (!_wwc.wearMap) {
        _wwc.wearMap = vO30.Lc.Xb().wearMap;
      }
      var v258 = /^(SKIN|WEAR)_(.*?)_(.{2}|.{3})$/;
      var v259 = vO30.Lc.Xb().hatDict[p333] ? vO30.Lc.Xb().hatDict[p333].id : p333;
      var v260 = vO30.Lc.Xb().glassesDict[p332] ? vO30.Lc.Xb().glassesDict[p332].id : p332;
      var v261 = vO30.Lc.Xb().glassesDict[p331] ? vO30.Lc.Xb().mouthDict[p331].id : p331;
      var v262 = vO30.Lc.Xb().glassesDict[p330] ? vO30.Lc.Xb().eyesDict[p330].id : p330;
      var vLSA = "A";
      var vLS7 = "";
      var vLS__ = "__";
      var v_0x18da8b = function f112(p334, p335) {
        if (v258.test(p334)) {
          var v263 = v258.exec(p334);
          return {
            id: v263[2],
            value: v263[3],
            testRun: true
          };
        }
        return {
          id: null,
          value: null,
          testRun: false
        };
      };
      var vO33 = {
        h: v_0x18da8b(p329, "h"),
        r: v_0x18da8b(v262, "r"),
        a: v_0x18da8b(v261, "a"),
        f: v_0x18da8b(v260, "f"),
        c: v_0x18da8b(v259, "c")
      };
      if (vO33.h.testRun) {
        vLS7 = vO33.h.id.substring(1);
        vLSA = "B";
      }
      if (vO33.r.testRun || vO33.a.testRun || vO33.f.testRun || vO33.c.testRun) {
        vLS__ = (vO33.r.id || vO33.a.id || vO33.f.id || vO33.c.id).substring(1);
      }
      var v_0x13605c = function f113(p336, p337) {
        if (vO33[p337].value) {
          return vO33[p337].value.padStart(p337 === "h" ? 3 : 2, "0");
        }
        if (!_wwc[p337 === "h" ? "testSkinMod" : "testWear"](p336 || 0)) {
          if (vO33[p337].testRun) {
            return p336.toString().padStart(p337 === "h" ? 3 : 2, "0");
          } else if (p337 === "h") {
            return "000";
          } else {
            return "00";
          }
        }
        return _wwc[p337 === "h" ? "skinMap" : "wearMap"][p336] || (p337 === "h" ? "000" : "00");
      };
      var vV_0x13605c = v_0x13605c(p329, "h");
      var vV_0x13605c2 = v_0x13605c(p330, "r");
      var vV_0x13605c3 = v_0x13605c(p331, "a");
      var vV_0x13605c4 = v_0x13605c(p332, "f");
      var vV_0x13605c5 = v_0x13605c(p333, "c");
      var v264 = vLSA + vLS__ + vLS7 + vV_0x13605c.replace("______XO                ", "") + vV_0x13605c2 + vV_0x13605c3 + vV_0x13605c4 + vV_0x13605c5;
      bbs.code = (vV_0x13605c || "000") + "|" + (vV_0x13605c5 || "00");
      function f114(p338, p339) {
        var vLS8 = "";
        vLS8 = p338.substring(0, vLN50).padEnd(vLN50, "_");
        var v265 = vLS8 + p339;
        return v265;
      }
      bbs.nickname = f114(p328, v264);
      return bbs.nickname;
    };
    vO31.bgg = function (p340) {
      p340 = parseInt(p340);
      var v266 = bbs.backgroundUri || "/images/bg-pattern-pow2-ARENA.png";
      if (!isNaN(p340)) {
        v266 = backgroundArena[p340]?.uri || v266;
        bbs.bgGameWidth = backgroundArena[p340]?.w || 512;
        bbs.bgGameHeight = backgroundArena[p340]?.h || 256;
      }
      var v267 = PIXI.BaseTexture.from(v266);
      bbs.bgGameWidth = v267.width || bbs.bgGameWidth || 512;
      bbs.bgGameHeight = v267.height || bbs.bgGameHeight || 256;
      v267.wrapMode = bbs.bgGameWidth > 999 ? PIXI.WRAP_MODES.CLAMP : PIXI.WRAP_MODES.REPEAT;
      return new PIXI.Texture(v267);
    };
    vO31.genereteTexture = function (p341) {
      var vLN128 = 128;
      var vLN9 = 9;
      try {
        var v_0x4c045b = function f115() {
          var vA8 = [];
          for (var vLN028 = 0; vLN028 < p341.lines; vLN028++) {
            lineContainer = [];
            for (var vLN029 = 0; vLN029 < vLN9; vLN029++) {
              try {
                var v268 = PIXI.Texture.from(p341._d, {
                  x: vLN029 * vLN128,
                  y: vLN028 * vLN128,
                  width: vLN128,
                  height: vLN128
                });
                lineContainer.push(v268);
              } catch (e11) {
                console.log(vLN028, vLN029);
                console.log(e11);
                return;
              }
            }
            vA8.push(lineContainer);
          }
          return vA8;
        };
        return v_0x4c045b();
      } catch (e12) {
        return [];
      }
    };
    var vO34 = {
      headshot: window.URL_CDN + "/sounds/headshot_sound_effect.mp3",
      shaokahn: window.URL_CDN + "/sounds/shao_kahn_sound_effect.mp3",
      speed: window.URL_CDN + "/sounds/woo_Hoo_sound_effect.mp3",
      curve: window.URL_CDN + "/sounds/yes_effect.mp3",
      loser: window.URL_CDN + "/sounds/negative_beeps_effect.mp3",
      top1: window.URL_CDN + "/sounds/mission_complete_sound_effect.mp3"
    };
    vO24.ref = ["speed", "curve"];
    for (var v269 in vO34) {
      vO24[v269] = new vP4.Howl({
        src: [vO34[v269]],
        html5: true,
        autoplay: v269 == "top1",
        loop: false
      });
    }
    var vO35 = {
      "rotate(0deg)": 0,
      "rotate(90deg)": 1.5707963267948966,
      "rotate(180deg)": 3.141592653589793,
      "rotate(270deg)": 4.71238898038469,
      "rotate(360deg)": 0
    };
    var v270 = typeof Symbol == "function" && f41(Symbol.iterator) == "symbol" ? function (p342) {
      return f41(p342);
    } : function (p343) {
      if (p343 && typeof Symbol == "function" && p343.constructor === Symbol && p343 !== Symbol.prototype) {
        return "symbol";
      } else {
        return f41(p343);
      }
    };
    var v271;
    window.addEventListener("load", function () {
      function f116() {
        (function (p344, p345, p346) {
          function f117(p347, p348) {
            return (p347 === undefined ? "undefined" : v270(p347)) === p348;
          }
          function f118() {
            if (typeof p345.createElement != "function") {
              return p345.createElement(arguments[0]);
            } else if (v274) {
              return p345.createElementNS.call(p345, "http://www.w3.org/2000/svg", arguments[0]);
            } else {
              return p345.createElement.apply(p345, arguments);
            }
          }
          var vA9 = [];
          var vA10 = [];
          var vO36 = {
            _version: "3.3.1",
            _config: {
              classPrefix: "",
              enableClasses: true,
              enableJSClass: true,
              usePrefixes: true
            },
            _q: [],
            on: function f119(p349, p350) {
              var vThis41 = this;
              setTimeout(function () {
                p350(vThis41[p349]);
              }, 0);
            },
            addTest: function f120(p351, p352, p353) {
              vA10.push({
                name: p351,
                fn: p352,
                options: p353
              });
            },
            addAsyncTest: function f121(p354) {
              vA10.push({
                name: null,
                fn: p354
              });
            }
          };
          var v_0xeb50f8 = function f122() {};
          v_0xeb50f8.prototype = vO36;
          v_0xeb50f8 = new v_0xeb50f8();
          var v272 = false;
          try {
            v272 = "WebSocket" in p344 && p344.WebSocket.CLOSING === 2;
          } catch (e13) {}
          v_0xeb50f8.addTest("websockets", v272);
          var v273 = p345.documentElement;
          var v274 = v273.nodeName.toLowerCase() === "svg";
          v_0xeb50f8.addTest("canvas", function () {
            var vF118 = f118("canvas");
            return !!vF118.getContext && !!vF118.getContext("2d");
          });
          v_0xeb50f8.addTest("canvastext", function () {
            return v_0xeb50f8.canvas !== false && typeof f118("canvas").getContext("2d").fillText == "function";
          });
          (function () {
            var v275;
            var v276;
            var v277;
            var v278;
            var v279;
            var v280;
            var v281;
            for (var v282 in vA10) {
              if (vA10.hasOwnProperty(v282)) {
                v275 = [];
                v276 = vA10[v282];
                if (v276.name && (v275.push(v276.name.toLowerCase()), v276.options && v276.options.aliases && v276.options.aliases.length)) {
                  for (v277 = 0; v277 < v276.options.aliases.length; v277++) {
                    v275.push(v276.options.aliases[v277].toLowerCase());
                  }
                }
                v278 = f117(v276.fn, "function") ? v276.fn() : v276.fn;
                v279 = 0;
                for (; v279 < v275.length; v279++) {
                  v280 = v275[v279];
                  v281 = v280.split(".");
                  if (v281.length === 1) {
                    v_0xeb50f8[v281[0]] = v278;
                  } else {
                    if (!!v_0xeb50f8[v281[0]] && !(v_0xeb50f8[v281[0]] instanceof Boolean)) {
                      v_0xeb50f8[v281[0]] = new Boolean(v_0xeb50f8[v281[0]]);
                    }
                    v_0xeb50f8[v281[0]][v281[1]] = v278;
                  }
                  vA9.push((v278 ? "" : "no-") + v281.join("-"));
                }
              }
            }
          })();
          (function (p355) {
            var v283 = v273.className;
            var v284 = v_0xeb50f8._config.classPrefix || "";
            if (v274) {
              v283 = v283.baseVal;
            }
            if (v_0xeb50f8._config.enableJSClass) {
              var v285 = new RegExp("(^|\\s)" + v284 + "no-js(\\s|$)");
              v283 = v283.replace(v285, "$1" + v284 + "js$2");
            }
            if (v_0xeb50f8._config.enableClasses) {
              v283 += " " + v284 + p355.join(" " + v284);
              if (v274) {
                v273.className.baseVal = v283;
              } else {
                v273.className = v283;
              }
            }
          })(vA9);
          delete vO36.addTest;
          delete vO36.addAsyncTest;
          for (var vLN030 = 0; vLN030 < v_0xeb50f8._q.length; vLN030++) {
            v_0xeb50f8._q[vLN030]();
          }
          p344.Modernizr = v_0xeb50f8;
        })(window, document);
        return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext;
      }
      document.getElementById("game-wrap").style.display = "block";
      if (!f116()) {
        document.getElementById("error-view").style.display = "block";
        return;
      }
      (function () {
        function f123() {
          return vO30;
        }
        var vO37 = {};
        var vO38 = {};
        var vO39 = {
          a: {
            r: window.runtimeHash,
            b: "https://gateway.wormate.io",
            c: "https://resources.wormate.io",
            d: "/images/linelogo-valday2023.png",
            e: "/images/guest-avatar-summer2024.png",
            f: "/images/confetti-valday2023.png",
            g: "/images/bg-event-pattern-valday2023.png"
          }
        };
        vO39.a.i = function () {
          var v286 = window.I18N_LANG;
          v286 ||= "en";
          return v286;
        }();
        vO39.a.j = function () {
          var vUndefined = undefined;
          switch (vO39.a.i) {
            case "uk":
              vUndefined = "uk_UA";
              break;
            case "de":
              vUndefined = "de_DE";
              break;
            case "fr":
              vUndefined = "fr_FR";
              break;
            case "es":
              vUndefined = "es_ES";
              break;
            default:
              vUndefined = "en_US";
          }
          return vUndefined;
        }();
        moment.locale(vO39.a.j);
        var vF4 = function () {
          return {
            Container: PIXI.Container,
            BaseTexture: PIXI.BaseTexture,
            Texture: PIXI.Texture,
            Renderer: PIXI.Renderer,
            Graphics: PIXI.Graphics,
            Shader: PIXI.Shader,
            Rectangle: PIXI.Rectangle,
            Sprite: PIXI.Sprite,
            Text: PIXI.Text,
            Geometry: PIXI.Geometry,
            Mesh: PIXI.Mesh,
            v: {
              z: PIXI.BLEND_MODES.ADD,
              A: PIXI.BLEND_MODES.SCREEN,
              B: PIXI.BLEND_MODES.MULTIPLY
            },
            C: {
              D: PIXI.WRAP_MODES.REPEAT
            }
          };
        }();
        vO38.F = 6.283185307179586;
        vO38.G = Math.PI;
        vO39.H = function (p356) {
          return window.I18N_MESSAGES[p356];
        };
        vO39.I = function (p357) {
          if (p357[vO39.a.i]) {
            return p357[vO39.a.i];
          } else if (p357.en) {
            return p357.en;
          } else {
            return p357.x;
          }
        };
        vO39.J = function (p358) {
          var v287 = (Math.floor(p358) % 60).toString();
          var v288 = (Math.floor(p358 / 60) % 60).toString();
          var v289 = (Math.floor(p358 / 3600) % 24).toString();
          var v290 = Math.floor(p358 / 86400).toString();
          var v291 = vO39.H("util.time.days");
          var v292 = vO39.H("util.time.hours");
          var v293 = vO39.H("util.time.min");
          var v294 = vO39.H("util.time.sec");
          if (v290 > 0) {
            return v290 + " " + v291 + " " + v289 + " " + v292 + " " + v288 + " " + v293 + " " + v287 + " " + v294;
          } else if (v289 > 0) {
            return v289 + " " + v292 + " " + v288 + " " + v293 + " " + v287 + " " + v294;
          } else if (v288 > 0) {
            return v288 + " " + v293 + " " + v287 + " " + v294;
          } else {
            return v287 + " " + v294;
          }
        };
        vO39.K = function (p359) {
          if (p359.includes("href")) {
            return p359.replaceAll("href", "target=\"_black\" href");
          } else {
            return p359;
          }
        };
        vO39.L = function (p360, p361, p362, p363) {
          var v295 = document.createElement("script");
          var v296 = true;
          if (v270(p361) !== "undefined" && p361 !== null) {
            if (v270(p361.id) !== "undefined") {
              v295.id = p361.id;
            }
            if (v270(p361.async) !== "undefined" && p361.async) {
              v295.async = "async";
            }
            if (v270(p361.defer) !== "undefined" && p361.defer) {
              v295.defer = "defer";
            }
            if (v270(p361.crossorigin) !== "undefined") {
              v295.crossorigin = p361.crossorigin;
            }
          }
          v295.type = v295.type == p363 ? "module" : "text/javascript";
          v295.src = p360;
          if (p362) {
            v295.onload = v295.onreadystatechange = function () {
              v296 = false;
              try {
                p362();
              } catch (e14) {}
              v295.onload = v295.onreadystatechange = null;
            };
          }
          (document.head || document.getElementsByTagName("head")[0]).appendChild(v295);
        };
        vO39.M = function (p364, p365) {
          var vP365 = p365;
          vP365.prototype = Object.create(p364.prototype);
          vP365.prototype.constructor = vP365;
          vP365.parent = p364;
          return vP365;
        };
        vO39.N = function (p366) {
          p366 %= vO38.F;
          if (p366 < 0) {
            return p366 + vO38.F;
          } else {
            return p366;
          }
        };
        vO39.O = function (p367, p368, p369) {
          return vO39.P(p369, p367, p368);
        };
        vO39.P = function (p370, p371, p372) {
          if (p370 > p372) {
            return p372;
          } else if (p370 < p371) {
            return p371;
          } else if (Number.isFinite(p370)) {
            return p370;
          } else {
            return (p371 + p372) * 0.5;
          }
        };
        vO39.Q = function (p373, p374, p375, p376) {
          if (p374 > p373) {
            return Math.min(p374, p373 + p375 * p376);
          } else {
            return Math.max(p374, p373 - p375 * p376);
          }
        };
        vO39.R = function (p377, p378, p379, p380, p381) {
          return p378 + (p377 - p378) * Math.pow(1 - p380, p379 / p381);
        };
        vO39.S = function (p382, p383, p384) {
          return p382 - (p382 - p383) * p384;
        };
        vO39.T = function (p385, p386, p387, p388) {
          var vP387 = p387;
          var vP386 = p386;
          var v297 = p386 + p388;
          if (p385 == null) {
            throw new TypeError("this is null or not defined");
          }
          var v298 = p385.length >>> 0;
          var v299 = vP387 >> 0;
          var v300 = v299 < 0 ? Math.max(v298 + v299, 0) : Math.min(v299, v298);
          var v301 = vP386 >> 0;
          var v302 = v301 < 0 ? Math.max(v298 + v301, 0) : Math.min(v301, v298);
          var v303 = v297 === undefined ? v298 : v297 >> 0;
          var v304 = v303 < 0 ? Math.max(v298 + v303, 0) : Math.min(v303, v298);
          var v305 = Math.min(v304 - v302, v298 - v300);
          var vLN14 = 1;
          for (v302 < v300 && v300 < v302 + v305 && (vLN14 = -1, v302 += v305 - 1, v300 += v305 - 1); v305 > 0;) {
            if (v302 in p385) {
              p385[v300] = p385[v302];
            } else {
              delete p385[v300];
            }
            v302 += vLN14;
            v300 += vLN14;
            v305--;
          }
          return p385;
        };
        vO39.U = function (p389) {
          if (p389.parent != null) {
            p389.parent.removeChild(p389);
          }
        };
        vO39.V = function (p390, p391) {
          return p390 + (p391 - p390) * Math.random();
        };
        vO39.W = function (p392) {
          return p392[parseInt(Math.random() * p392.length)];
        };
        vO39.X = function () {
          return Math.random().toString(36).substring(2, 15);
        };
        vO39.Y = function (p393, p394, p395) {
          var v306 = (1 - Math.abs(p395 * 2 - 1)) * p394;
          var v307 = v306 * (1 - Math.abs(p393 / 60 % 2 - 1));
          var v308 = p395 - v306 / 2;
          if (p393 >= 0 && p393 < 60) {
            return [v308 + v306, v308 + v307, v308 + 0];
          } else if (p393 >= 60 && p393 < 120) {
            return [v308 + v307, v308 + v306, v308 + 0];
          } else if (p393 >= 120 && p393 < 180) {
            return [v308 + 0, v308 + v306, v308 + v307];
          } else if (p393 >= 180 && p393 < 240) {
            return [v308 + 0, v308 + v307, v308 + v306];
          } else if (p393 >= 240 && p393 < 300) {
            return [v308 + v307, v308 + 0, v308 + v306];
          } else {
            return [v308 + v306, v308 + 0, v308 + v307];
          }
        };
        vO39.Z = function (p396, p397, p398) {
          $.get(p396).fail(p397).done(p398);
        };
        vO39.$ = function (p399, p400, p401, p402) {
          $.ajax({
            type: "GET",
            url: p399,
            xhrFields: {
              responseType: "arraybuffer",
              onprogress: function f124(p403) {
                if (p403.lengthComputable) {
                  p402(p403.loaded / p403.total * 100);
                }
              }
            }
          }).fail(p400).done(p401);
        };
        vO39._ = function (p404, p405) {
          for (var v309 in p404) {
            if (p404.hasOwnProperty(v309)) {
              p405(v309, p404[v309]);
            }
          }
        };
        vO39.aa = function (p406) {
          for (var v310 = p406.length - 1; v310 > 0; v310--) {
            var v311 = Math.floor(Math.random() * (v310 + 1));
            var v312 = p406[v310];
            p406[v310] = p406[v311];
            p406[v311] = v312;
          }
          return p406;
        };
        (function () {
          var vLN031 = 0;
          try {
            DataView.prototype.ba = function (p407) {
              try {
                vLN031 = p407;
                return this.getInt8(p407);
              } catch (e15) {
                console.log(vLN031);
                vO30.dh.mq.close();
                return 0;
              }
            };
            DataView.prototype.ca = function (p408) {
              try {
                vLN031 = p408;
                return this.getInt16(p408);
              } catch (e16) {
                console.log(vLN031);
                vO30.dh.mq.close();
                return 0;
              }
            };
            DataView.prototype.da = function (p409) {
              try {
                vLN031 = p409;
                return this.getInt32(p409);
              } catch (e17) {
                console.log(vLN031);
                vO30.dh.mq.close();
                return 0;
              }
            };
            DataView.prototype.ea = function (p410) {
              try {
                vLN031 = p410;
                return this.getFloat32(p410);
              } catch (e18) {
                console.log(vLN031);
                vO30.dh.mq.close();
                return 0;
              }
            };
            DataView.prototype.fa = function (p411) {
              try {
                vLN031 = p411;
                return this.getFloat64(p411);
              } catch (e19) {
                console.log(vLN031);
                vO30.dh.mq.close();
                return 0;
              }
            };
          } catch (e20) {
            console.log(vLN031);
            console.error("Error adding methods to DataView prototype:", e20);
          }
        })();
        vO39.ga = function () {
          function f125() {
            if (URLSERV_WORMWORLD) {
              try {
                ga("send", "event", "antiadblocker", window.runtimeHash + "_complete");
              } catch (e21) {}
              v_0x4aeb5e(true);
            }
          }
          var v313 = false;
          var v_0x4aeb5e = function f126() {};
          var vO40 = {};
          var vLSJDHnkHtYwyXyVgG9 = "JDHnkHtYwyXyVgG9";
          $("#adbl-continue").click(function () {
            $("#" + vLSJDHnkHtYwyXyVgG9).fadeOut(500);
            v_0x4aeb5e(false);
          });
          vO40.ha = function (p412) {
            v_0x4aeb5e = p412;
            if (!v313) {
              try {
                aiptag.cmd.player.push(function () {
                  aiptag.adplayer = new aipPlayer({
                    AD_WIDTH: 960,
                    AD_HEIGHT: 540,
                    AD_FULLSCREEN: true,
                    AD_CENTERPLAYER: false,
                    LOADING_TEXT: "loading advertisement",
                    PREROLL_ELEM: function f127() {
                      return document.getElementById("1eaom01c3pxu9wd3");
                    },
                    AIP_COMPLETE: function f128(p413) {
                      v_0x4aeb5e(true);
                      $("#1eaom01c3pxu9wd3").hide();
                      $("#" + vLSJDHnkHtYwyXyVgG9).hide();
                      try {
                        ga("send", "event", "preroll", window.runtimeHash + "_complete");
                      } catch (e22) {}
                    },
                    AIP_REMOVE: function f129() {}
                  });
                });
                v313 = true;
              } catch (e23) {}
            }
          };
          vO40.ia = function () {
            try {
              ga("send", "event", "antiadblocker", window.runtimeHash + "_start");
            } catch (e24) {}
            f125();
          };
          return vO40;
        };
        vO39.ja = function (p414, p415) {
          var v$3 = $("#" + p414);
          var vP415 = p415;
          var vO41 = {};
          var v314 = false;
          vO41.ha = function () {
            if (!v314) {
              v$3.empty();
              v$3.append("<div id='" + vP415 + "'></div>");
              try {
                try {
                  ga("send", "event", "banner", window.runtimeHash + "_display");
                } catch (e25) {}
                aiptag.cmd.display.push(function () {
                  aipDisplayTag.display(vP415);
                });
                v314 = true;
              } catch (e26) {}
            }
          };
          vO41.ka = function () {
            try {
              try {
                ga("send", "event", "banner", window.runtimeHash + "_refresh");
              } catch (e27) {}
              aiptag.cmd.display.push(function () {
                aipDisplayTag.display(vP415);
              });
            } catch (e28) {}
          };
          return vO41;
        };
        vO37.la = function () {
          function f130(p416, p417, p418, p419, p420, p421, p422, p423, p424, p425, p426) {
            this.ma = p416;
            this.na = p417;
            this.oa = null;
            this.pa = false;
            this.qa = p418;
            this.ra = p419;
            this.sa = p420;
            this.ta = p421;
            this.ua = p422 || (p424 || p420) / 2;
            this.va = p423 || (p425 || p421) / 2;
            this.wa = p424 || p420;
            this.xa = p425 || p421;
            this.ya = 0.5 - (this.ua - this.wa * 0.5) / this.sa;
            this.za = 0.5 - (this.va - this.xa * 0.5) / this.ta;
            this.Aa = this.sa / this.wa;
            if (p426) {
              this.ev = p426;
            } else {
              null;
            }
            this.Ba = this.ta / this.xa;
          }
          f130.Ca = function () {
            return new f130("", null, 0, 0, 0, 0, 0, 0, 0, 0);
          };
          f130.Da = function (p427, p428, p429, p430) {
            return new f130(p427, p428, p429.x, p429.y, p429.w, p429.h, p429.px, p429.py, p429.pw, p429.ph, p430);
          };
          f130.prototype.Ea = function () {
            if (this.pa) {
              return this.oa;
            }
            if (this.na != null) {
              this.oa = new vF4.Texture(this.na, new vF4.Rectangle(this.qa, this.ra, this.sa, this.ta));
            }
            this.pa = true;
            return this.oa;
          };
          f130.prototype.Fa = function () {
            if (this.oa != null) {
              this.oa.destroy();
            }
          };
          return f130;
        }();
        vO37.Ga = function () {
          function f131(p431, p432, p433, p434, p435, p436, p437, p438, p439, p440, p441, p442, p443, p444, p445, p446, p447, p448) {
            this.Ha = p431;
            this.Ia = p432;
            this.Ja = p433;
            this.Ka = p434;
            this.La = p435;
            this.Ma = p436;
            this.Na = p437;
            this.Oa = p438;
            this.Pa = p439;
            this.Qa = p440;
            this.Ra = p441;
            this.Sa = p442;
            this.Ta = p443;
            this.Ua = p444;
            this.Va = p445;
            this.Wa = p446;
            this.Xa = p447;
            this.Ya = p448;
          }
          f131.prototype.Fa = function () {
            for (var vLN032 = 0; vLN032 < this.Ha.length; vLN032++) {
              this.Ha[vLN032].dispose();
              this.Ha[vLN032].destroy();
            }
            this.Ha = [];
            for (var vLN033 = 0; vLN033 < this.Ia.length; vLN033++) {
              this.Ia[vLN033].Fa();
            }
            this.Ia = [];
          };
          f131.Ca = function () {
            var v315 = new f131.Za(vO37._a.$a, vO37._a.$a);
            var v316 = new f131.ab("#ffffff", [vO37._a.$a], [vO37._a.$a]);
            return new f131([], [], {}, v315, {}, new f131.bb(vO37._a.$a), {}, v316, {}, new f131.cb("", v316, v315), {}, new f131.db([vO37._a.$a]), {}, new f131.db([vO37._a.$a]), {}, new f131.db([vO37._a.$a]), {}, new f131.db([vO37._a.$a]));
          };
          f131.eb = function (p449, p450, p451, p452) {
            var v317 = new f131.Za(vO37._a.$a, vO37._a.$a);
            var v318 = new f131.ab("#ffffff", [p449], [p450]);
            return new f131([], [], {}, v317, {}, new f131.bb(vO37._a.$a), {}, v318, {}, new f131.cb("", v318, v317), {}, new f131.db([p451]), {}, new f131.db([p452]), {}, new f131.db([vO37._a.$a]), {}, new f131.db([vO37._a.$a]));
          };
          f131.fb = function (p453, p454, p455, p456) {
            var vO42 = {};
            vO39._(p453.colorDict, function (p457, p458) {
              vO42[p457] = "#" + p458;
            });
            var vO43 = {};
            for (var vLN034 = 0; vLN034 < p453.skinArrayDict.length; vLN034++) {
              var v319 = p453.skinArrayDict[vLN034];
              vO43[v319.id] = new f131.ab(vO42[v319.prime], v319.base.map(function (p459) {
                return p454[p459];
              }), v319.glow.map(function (p460, p461) {
                return p454[p460];
              }));
              if (v319.glow[0] == "a_trans") {
                vO43[v319.id].vbb = p454.a_black;
              }
            }
            var vUndefined2 = undefined;
            var v320 = p453.skinUnknown;
            try {
              vUndefined2 = new f131.ab(vO42[v320.prime], v320.base.map(function (p462) {
                return p454[p462];
              }), v320.glow.map(function (p463) {
                return p454[p463];
              }));
            } catch (e29) {}
            var vO44 = {};
            vO39._(p453.eyesDict, function (p464, p465) {
              var vParseInt2 = parseInt(p464);
              vO44[vParseInt2] = new f131.db(p465.base.map(function (p466) {
                return p454[p466.region];
              }));
            });
            var v321 = new f131.db(p453.eyesUnknown.base.map(function (p467) {
              return p454[p467.region];
            }));
            var vO45 = {};
            vO39._(p453.mouthDict, function (p468, p469) {
              var vParseInt3 = parseInt(p468);
              vO45[vParseInt3] = new f131.db(p469.base.map(function (p470) {
                return p454[p470.region];
              }));
            });
            var v322 = new f131.db(p453.mouthUnknown.base.map(function (p471) {
              return p454[p471.region];
            }));
            var vO46 = {};
            vO39._(p453.hatDict, function (p472, p473) {
              var vParseInt4 = parseInt(p472);
              vO46[vParseInt4] = new f131.db(p473.base.map(function (p474) {
                return p454[p474.region];
              }));
            });
            var v323 = new f131.db(p453.hatUnknown.base.map(function (p475) {
              return p454[p475.region];
            }));
            var vO47 = {};
            vO39._(p453.glassesDict, function (p476, p477) {
              var vParseInt5 = parseInt(p476);
              vO47[vParseInt5] = new f131.db(p477.base.map(function (p478) {
                return p454[p478.region];
              }));
            });
            var v324 = new f131.db(p453.glassesUnknown.base.map(function (p479) {
              return p454[p479.region];
            }));
            var vO48 = {};
            vO39._(p453.portionDict, function (p480, p481) {
              p480 = parseInt(p480);
              vO48[p480] = new f131.Za(p454[p481.base], p454[p481.glow]);
            });
            var vUndefined3 = undefined;
            var v325 = p453.portionUnknown;
            vUndefined3 = new f131.Za(p454[v325.base], p454[v325.glow]);
            var vO49 = {};
            vO39._(p453.abilityDict, function (p482, p483) {
              p482 = parseInt(p482);
              vO49[p482] = new f131.bb(p454[p483.base]);
            });
            var vUndefined4 = undefined;
            var v326 = p453.abilityUnknown;
            vUndefined4 = new f131.bb(p454[v326.base]);
            var vO50 = {};
            vO39._(p453.teamDict, function (p484, p485) {
              p484 = parseInt(p484);
              vO50[p484] = new f131.cb(p485.title, new f131.ab(vO42[p485.skin.prime], null, p485.skin.glow.map(function (p486) {
                return p454[p486];
              })), new f131.Za(null, p454[p485.portion.glow]));
            });
            var v327 = new f131.cb({}, vUndefined2, vUndefined3);
            return new f131(p455, p456, vO48, vUndefined3, vO49, vUndefined4, vO43, vUndefined2, vO50, v327, vO44, v321, vO45, v322, vO46, v323, vO47, v324);
          };
          f131.prototype.gb = function (p487) {
            var v328 = vO39.aa(Object.keys(this.Na)).slice(0, p487);
            var v329 = vO39.aa(Object.keys(this.Ra)).slice(0, p487);
            var v330 = vO39.aa(Object.keys(this.Ta)).slice(0, p487);
            var v331 = vO39.aa(Object.keys(this.Va)).slice(0, p487);
            var v332 = vO39.aa(Object.keys(this.Xa)).slice(0, p487);
            var vA11 = [];
            for (var vLN035 = 0; vLN035 < p487; vLN035++) {
              var v333 = v328.length > 0 ? v328[vLN035 % v328.length] : 0;
              var v334 = v329.length > 0 ? v329[vLN035 % v329.length] : 0;
              var v335 = v330.length > 0 ? v330[vLN035 % v330.length] : 0;
              var v336 = v331.length > 0 ? v331[vLN035 % v331.length] : 0;
              var v337 = v332.length > 0 ? v332[vLN035 % v332.length] : 0;
              vA11.push(new vO37.hb(v333, v334, v335, v336, v337));
            }
            return vA11;
          };
          f131.prototype.ib = function (p488) {
            if (this.Na.hasOwnProperty(p488)) {
              return this.Na[p488];
            } else {
              return this.Oa;
            }
          };
          f131.prototype.jb = function (p489) {
            if (this.Pa.hasOwnProperty(p489)) {
              return this.Pa[p489];
            } else {
              return this.Qa;
            }
          };
          f131.prototype.kb = function (p490) {
            if (this.Ra.hasOwnProperty(p490)) {
              return this.Ra[p490];
            } else {
              return this.Sa;
            }
          };
          f131.prototype.lb = function (p491) {
            if (this.Ta.hasOwnProperty(p491)) {
              return this.Ta[p491];
            } else {
              return this.Ua;
            }
          };
          f131.prototype.mb = function (p492) {
            if (this.Xa.hasOwnProperty(p492)) {
              return this.Xa[p492];
            } else {
              return this.Ya;
            }
          };
          f131.prototype.nb = function (p493) {
            if (this.Va.hasOwnProperty(p493)) {
              return this.Va[p493];
            } else {
              return this.Wa;
            }
          };
          f131.prototype.ob = function (p494) {
            if (this.Ja.hasOwnProperty(p494)) {
              return this.Ja[p494];
            } else {
              return this.Ka;
            }
          };
          f131.prototype.pb = function (p495) {
            if (this.La.hasOwnProperty(p495)) {
              return this.La[p495];
            } else {
              return this.Ma;
            }
          };
          f131.cb = function () {
            function f132(p496, p497, p498) {
              this.qb = p496;
              this.rb = p497;
              this.sb = p498;
            }
            return f132;
          }();
          f131.ab = function () {
            function f133(p499, p500, p501) {
              this.tb = p499;
              this.ub = p500;
              this.vb = p501;
            }
            return f133;
          }();
          f131.db = function () {
            function f134(p502) {
              this.ub = p502;
            }
            return f134;
          }();
          f131.Za = function () {
            function f135(p503, p504) {
              this.ub = p503;
              this.vb = p504;
            }
            return f135;
          }();
          f131.bb = function () {
            function f136(p505) {
              this.ub = p505;
            }
            return f136;
          }();
          return f131;
        }();
        vO37._a = function () {
          function f137() {
            var v338 = vF4.BaseTexture.from("/images/wear-ability.png");
            for (var vLN15 = 1; vLN15 < 10; vLN15++) {
              this["vb" + vLN15] = new vO37.la("emoji_" + vLN15, v338, 4, 4, 146, 146, 63.5, 63.5, 128, 128);
            }
            this.wb = new vO37.la("magnet_ability", v338, 158, 86, 67, 124, 148, 63.5, 128, 128);
            this.xb = new vO37.la("velocity_ability", v338, 158, 4, 87, 74, 203, 63.5, 128, 128);
            this.yb = new vO37.la("flex_ability", v338, 4, 4, 146, 146, 63.5, 63.5, 128, 128);
            var vLN15 = vF4.BaseTexture.from("/images/def-look.png");
            var v339 = new vO37.la("def_eyes", vLN15, 0, 0, 42, 80, 75, 64, 128, 128);
            var v340 = new vO37.la("def_mouth", vLN15, 46, 0, 20, 48, 109, 63, 128, 128);
            var v341 = new vO37.la("def_skin_glow", vLN15, 70, 0, 32, 32, 0, 0, 0, 0);
            var v342 = new vO37.la("def_skin_base", vLN15, 46, 52, 64, 64, 0, 0, 0, 0);
            var v343 = vO37.Ga.eb(v342, v341, v339, v340);
            _wwc.mySkin = v343;
            this.zb = new vO37.Ab({}, v343);
            this.Bb = -10000;
            this.Cb = -10000;
            this.Db = function () {
              var v344 = window.document.createElement("canvas");
              v344.width = 80;
              v344.height = 80;
              return {
                Eb: v344,
                Fb: v344.getContext("2d"),
                oa: new vF4.Texture(vF4.BaseTexture.from(v344))
              };
            }();
            this.Gb = null;
            this.Hb = [];
          }
          f137.$a = vO37.la.Ca();
          f137.prototype.ha = function () {};
          f137.prototype.Ib = function (p506, p507, p508) {
            var vThis42 = this;
            var v345 = this.zb.Jb();
            if (v345 > 0 && Date.now() - this.Bb < 1200000) {
              if (p506 != null) {
                p506();
              }
              return;
            }
            if (this.Gb != null && !this.Gb.Kb()) {
              if (Date.now() - this.Bb < 300000) {
                if (p506 != null) {
                  p506();
                }
                return;
              }
              this.Gb.Lb();
              this.Gb = null;
            }
            var v346 = new vO37.Mb(v345);
            v346.Nb(function (p509, p510) {
              if (v346 === vThis42.Gb && p508 != null) {
                p508(p509, p510);
              }
            });
            v346.Ob(function (p511) {
              if (v346 === vThis42.Gb && p507 != null) {
                p507(p511);
              }
            });
            v346.Pb(function () {
              if (v346 === vThis42.Gb && p507 != null) {
                p507(new Error());
              }
            });
            v346.Qb(function () {
              if (v346 === vThis42.Gb && p506 != null) {
                p506();
              }
            });
            v346.Rb(function (p512) {
              if (v346 === vThis42.Gb) {
                vThis42.Cb = Date.now();
                vThis42.Gb = null;
                vThis42.Sb();
                vThis42.zb.Ub().Fa();
                vThis42.zb = p512;
                if (p506 != null) {
                  p506();
                }
                vThis42.Tb();
                return;
              }
              try {
                p512.Ub().Fa();
              } catch (e30) {}
            });
            v346.Vb();
            this.Bb = Date.now();
            this.Gb = v346;
          };
          f137.prototype.Sb = function () {};
          f137.prototype.Wb = function () {
            return this.zb.Jb() > 0;
          };
          f137.prototype.Xb = function () {
            return this.zb.Yb();
          };
          f137.prototype.Zb = function () {
            return this.Db;
          };
          f137.prototype.$b = function (p513) {
            this.Hb.push(p513);
          };
          f137.prototype.Tb = function () {
            for (var vLN036 = 0; vLN036 < this.Hb.length; vLN036++) {
              this.Hb[vLN036]();
            }
          };
          f137.prototype.Ub = function () {
            return this.zb.Ub();
          };
          return f137;
        }();
        vO37._b = function () {
          function f138(p514) {
            this.ac = p514;
          }
          f138.prototype.bc = function (p515) {
            return this.ac[p515];
          };
          f138.cc = function () {
            function f139() {
              this.dc = [];
            }
            f139.prototype.ec = function (p516, p517) {
              for (var vLN037 = 0; vLN037 < this.dc.length; vLN037++) {
                if (this.dc[vLN037].fc === p516) {
                  throw new Error();
                }
              }
              this.dc.push(new f138.gc(p516, p517));
              return this;
            };
            f139.prototype.hc = function () {
              var vLN038 = 0;
              for (var vLN039 = 0; vLN039 < this.dc.length; vLN039++) {
                vLN038 += this.dc[vLN039].ic;
              }
              var vO51 = {};
              var vLN040 = 0;
              for (var vLN041 = 0; vLN041 < this.dc.length; vLN041++) {
                var v347 = this.dc[vLN041];
                v347.ic = v347.ic / vLN038;
                v347.jc = vLN040;
                v347.kc = vLN040 + v347.ic;
                vLN040 = v347.kc;
                vO51[v347.fc] = v347;
              }
              return new f138(vO51);
            };
            return f139;
          }();
          f138.gc = function () {
            function f140(p518, p519) {
              this.fc = p518;
              this.ic = p519;
              this.jc = 0;
              this.kc = 0;
            }
            f140.prototype.lc = function (p520) {
              return this.jc + (this.kc - this.jc) * p520;
            };
            return f140;
          }();
          return f138;
        }();
        vO37.WormSpriteTree = function () {
          function f141() {
            this.nc = new vF4.Container();
            this.nc.sortableChildren = true;
            this.oc = new vF5();
            this.oc.zIndex = vLN0001 * ((vLN797 + 1) * 2 + 1 + 3);
            this.pc = 0;
            this.qc = new Array(vLN797);
            this.qc[0] = this.rc(0, new vO37.sc(), new vO37.sc());
            for (var vLN16 = 1; vLN16 < vLN797; vLN16++) {
              this.qc[vLN16] = this.rc(vLN16, new vO37.sc(), new vO37.sc());
            }
            this.tc = 0;
            this.uc = 0;
            this.vc = 0;
          }
          var vLN0001 = 0.001;
          var vLN797 = 797;
          var vLN314159 = 3.14159;
          var v348 = -0.06640625;
          var vLN084375 = 0.84375;
          var vLN02578125 = 0.2578125;
          var v349 = -0.03515625;
          var v350 = -0.0625;
          var vLN05625 = 0.5625;
          var v351 = v348 * 3 + vLN084375;
          var v352 = vLN02578125 - v348 * 3;
          var v353 = v348 + v349;
          var vLN0375 = 0.375;
          var vLN075 = 0.75;
          var v354 = v350 + v350;
          var v355 = v349 * 3 + vLN02578125;
          var v356 = vLN084375 - v349 * 3;
          var v357 = v349 + v348;
          f141.wc = vLN797;
          f141.prototype.rc = function (p521, p522, p523) {
            var v358 = new vF6(p522, p523);
            p522.xc.zIndex = vLN0001 * ((vLN797 - p521) * 2 + 1 + 3);
            p523.xc.zIndex = vLN0001 * ((vLN797 - p521) * 2 - 2 + 3);
            return v358;
          };
          f141.prototype.yc = function (p524, p525, p526, p527, p528, p529, p530, p531) {
            var v359 = p526.ub;
            var v360 = p524 === vO37.Ac.zc ? p525.rb.vb : p526.vb;
            if (v359.length > 0 && v360.length > 0) {
              for (var vLN042 = 0; vLN042 < this.qc.length; vLN042++) {
                this.qc[vLN042].Cc.Bc(v359[vLN042 % v359.length], vLN042 % v359.length, vLN042);
                this.qc[vLN042].Dc.Bc(vLN042 == 0 && p526.vbb ? p526.vbb : v360[vLN042 % v360.length], vLN042 % v359.length, vLN042);
                this.qc[vLN042].Cc.Ec(p531);
                this.qc[vLN042].Dc.Ec(p531);
              }
            }
            this.oc.yc(p527, p528, p529, p530);
          };
          var vF5 = function () {
            var v361 = vO39.M(vF4.Container, function () {
              vF4.Container.call(this);
              this.sortableChildren = true;
              this.Fc = [];
              this.Gc = [];
              this.Hc = [];
              this.Ic = [];
              this.Jc = new vF4.Container();
              this.Kc = [];
              this.message = new vF4.Container();
              for (var vLN043 = 0; vLN043 < 4; vLN043++) {
                var v362 = new vO37.sc();
                v362.Bc(f123().Lc.wb);
                this.Jc.addChild(v362.xc);
                this.Kc.push(v362);
              }
              this.message.zIndex = 0.0012;
              this.addChild(this.message);
              this.VcUn();
              this.Jc.zIndex = 0.0011;
              this.addChild(this.Jc);
              this.Mc();
              this.Nc = new vO37.sc();
              this.Nc.Bc(f123().Lc.xb);
              this.Nc.xc.zIndex = 0.001;
              this.addChild(this.Nc.xc);
              this.Oc();
            });
            v361.prototype.yc = function (p532, p533, p534, p535) {
              this.Pc(0.002, this.Fc, p532.ub);
              this.Pc(0.003, this.Gc, p533.ub);
              this.Pc(0.004, this.Ic, p535.ub);
              this.Pc(0.005, this.Hc, p534.ub);
            };
            v361.prototype.Pc = function (p536, p537, p538) {
              while (p538.length > p537.length) {
                var v363 = new vO37.sc();
                p537.push(v363);
                this.addChild(v363.Qc());
              }
              while (p538.length < p537.length) {
                p537.pop().Rc();
              }
              var vP536 = p536;
              for (var vLN044 = 0; vLN044 < p538.length; vLN044++) {
                vP536 += 0.0001;
                var v364 = p537[vLN044];
                v364.Bc(p538[vLN044]);
                v364.xc.zIndex = vP536;
              }
            };
            v361.prototype.Sc = function (p539, p540, p541, p542) {
              this.visible = true;
              this.position.set(p539, p540);
              this.rotation = p542;
              for (var vLN045 = 0; vLN045 < this.Fc.length; vLN045++) {
                this.Fc[vLN045].Tc(p541);
              }
              for (var vLN046 = 0; vLN046 < this.Gc.length; vLN046++) {
                this.Gc[vLN046].Tc(p541);
              }
              for (var vLN047 = 0; vLN047 < this.Hc.length; vLN047++) {
                this.Hc[vLN047].Tc(p541);
              }
              for (var vLN048 = 0; vLN048 < this.Ic.length; vLN048++) {
                this.Ic[vLN048].Tc(p541);
              }
            };
            v361.prototype.Uc = function () {
              this.visible = false;
            };
            v361.prototype.VcAc = function (p543, p544, p545, p546, p547) {
              this.message.visible = true;
              this.Mc2.Tc(p544);
            };
            v361.prototype.VcUn = function () {
              this.message.visible = false;
            };
            v361.prototype.Vc = function (p548, p549, p550, p551) {
              this.Jc.visible = true;
              var v365 = p550 / 1000;
              var v366 = 1 / this.Kc.length;
              for (var vLN049 = 0; vLN049 < this.Kc.length; vLN049++) {
                var v367 = 1 - (v365 + v366 * vLN049) % 1;
                this.Kc[vLN049].xc.alpha = 1 - v367;
                this.Kc[vLN049].Tc(p549 * (0.5 + v367 * 4.5));
              }
            };
            v361.prototype.Mc = function () {
              this.Jc.visible = false;
            };
            v361.prototype.Wc = function (p552, p553, p554, p555) {
              this.Nc.xc.visible = true;
              this.Nc.xc.alpha = vO39.Q(this.Nc.xc.alpha, p552.Xc ? 0.9 : 0.2, p555, 0.0025);
              this.Nc.Tc(p553);
            };
            v361.prototype.WXX = function (p556, p557, p558, p559) {
              this.Nc.xc.visible = true;
              this.Nc.xc.alpha = vO39.Q(this.Nc.xc.alpha, p556.Xc ? 0.9 : 0.2, p559, 0.0025);
              this.Nc.Tc(p557);
            };
            v361.prototype.Oc = function () {
              this.Nc.xc.visible = false;
            };
            return v361;
          }();
          f141.prototype.Yc = function (p560) {
            return this.uc + this.vc * Math.sin(p560 * vLN314159 - this.tc);
          };
          f141.prototype.Zc = function (p561, p562, p563, p564) {
            var v368 = p561.$c * 2;
            var v369 = p561._c;
            var v370 = p561.ad;
            var v371 = v370 * 4 - 3;
            var vV371 = v371;
            this.tc = p562 / 400 * Math.PI;
            this.uc = v368 * 1.5;
            this.vc = v368 * 0.15 * p561.bd;
            var v372;
            var v373;
            var v374;
            var v375;
            var v376;
            var v377;
            var v378;
            var v379;
            v373 = v369[0];
            v377 = v369[1];
            if (p564(v373, v377)) {
              v374 = v369[2];
              v378 = v369[3];
              v375 = v369[4];
              v379 = v369[5];
              var v380 = Math.atan2(v379 + v377 * 2 - v378 * 3, v375 + v373 * 2 - v374 * 3);
              this.oc.Sc(v373, v377, v368, v380);
              this.qc[0].Sc(v373, v377, v368, this.Yc(0), v380);
              this.qc[1].Sc(v351 * v373 + v352 * v374 + v353 * v375, v351 * v377 + v352 * v378 + v353 * v379, v368, this.Yc(1), vF6.cd(this.qc[0], this.qc[2]));
              this.qc[2].Sc(vLN0375 * v373 + vLN075 * v374 + v354 * v375, vLN0375 * v377 + vLN075 * v378 + v354 * v379, v368, this.Yc(2), vF6.cd(this.qc[1], this.qc[3]));
              this.qc[3].Sc(v355 * v373 + v356 * v374 + v357 * v375, v355 * v377 + v356 * v378 + v357 * v379, v368, this.Yc(3), vF6.cd(this.qc[2], this.qc[4]));
            } else {
              this.oc.Uc();
              this.qc[0].Uc();
              this.qc[1].Uc();
              this.qc[2].Uc();
              this.qc[3].Uc();
            }
            var vLN4 = 4;
            var vLN22 = 2;
            var v381 = v370 * 2 - 4;
            while (vLN22 < v381) {
              v373 = v369[vLN22];
              v377 = v369[vLN22 + 1];
              if (p564(v373, v377)) {
                v372 = v369[vLN22 - 2];
                v376 = v369[vLN22 - 1];
                v374 = v369[vLN22 + 2];
                v378 = v369[vLN22 + 3];
                v375 = v369[vLN22 + 4];
                v379 = v369[vLN22 + 5];
                this.qc[vLN4].Sc(v373, v377, v368, this.Yc(vLN4), vF6.cd(this.qc[vLN4 - 1], this.qc[vLN4 + 1]));
                vLN4++;
                this.qc[vLN4].Sc(v348 * v372 + vLN084375 * v373 + vLN02578125 * v374 + v349 * v375, v348 * v376 + vLN084375 * v377 + vLN02578125 * v378 + v349 * v379, v368, this.Yc(vLN4), vF6.cd(this.qc[vLN4 - 1], this.qc[vLN4 + 1]));
                vLN4++;
                this.qc[vLN4].Sc(v350 * v372 + vLN05625 * v373 + vLN05625 * v374 + v350 * v375, v350 * v376 + vLN05625 * v377 + vLN05625 * v378 + v350 * v379, v368, this.Yc(vLN4), vF6.cd(this.qc[vLN4 - 1], this.qc[vLN4 + 1]));
                vLN4++;
                this.qc[vLN4].Sc(v349 * v372 + vLN02578125 * v373 + vLN084375 * v374 + v348 * v375, v349 * v376 + vLN02578125 * v377 + vLN084375 * v378 + v348 * v379, v368, this.Yc(vLN4), vF6.cd(this.qc[vLN4 - 1], this.qc[vLN4 + 1]));
                vLN4++;
              } else {
                this.qc[vLN4].Uc();
                vLN4++;
                this.qc[vLN4].Uc();
                vLN4++;
                this.qc[vLN4].Uc();
                vLN4++;
                this.qc[vLN4].Uc();
                vLN4++;
              }
              vLN22 += 2;
            }
            v373 = v369[v370 * 2 - 4];
            v377 = v369[v370 * 2 - 3];
            if (p564(v373, v377)) {
              v372 = v369[v370 * 2 - 6];
              v376 = v369[v370 * 2 - 5];
              v374 = v369[v370 * 2 - 2];
              v378 = v369[v370 * 2 - 1];
              this.qc[v371 - 5].Sc(v373, v377, v368, this.Yc(v371 - 5), vF6.cd(this.qc[v371 - 6], this.qc[v371 - 4]));
              this.qc[v371 - 4].Sc(v357 * v372 + v356 * v373 + v355 * v374, v357 * v376 + v356 * v377 + v355 * v378, v368, this.Yc(v371 - 4), vF6.cd(this.qc[v371 - 5], this.qc[v371 - 3]));
              this.qc[v371 - 3].Sc(v354 * v372 + vLN075 * v373 + vLN0375 * v374, v354 * v376 + vLN075 * v377 + vLN0375 * v378, v368, this.Yc(v371 - 3), vF6.cd(this.qc[v371 - 4], this.qc[v371 - 2]));
              this.qc[v371 - 2].Sc(v353 * v372 + v352 * v373 + v351 * v374, v353 * v376 + v352 * v377 + v351 * v378, v368, this.Yc(v371 - 2), vF6.cd(this.qc[v371 - 3], this.qc[v371 - 1]));
              this.qc[v371 - 1].Sc(v374, v378, v368, this.Yc(v371 - 1), vF6.cd(this.qc[v371 - 2], this.qc[v371 - 1]));
            } else {
              this.qc[v371 - 5].Uc();
              this.qc[v371 - 4].Uc();
              this.qc[v371 - 3].Uc();
              this.qc[v371 - 2].Uc();
              this.qc[v371 - 1].Uc();
            }
            if (this.pc === 0 && vV371 > 0) {
              this.nc.addChild(this.oc);
            }
            if (this.pc > 0 && vV371 === 0) {
              vO39.U(this.oc);
            }
            while (this.pc < vV371) {
              this.nc.addChild(this.qc[this.pc].Cc.Qc());
              this.nc.addChild(this.qc[this.pc].Dc.Qc());
              this.pc += 1;
            }
            while (this.pc > vV371) {
              this.pc -= 1;
              this.qc[this.pc].Dc.Rc();
              this.qc[this.pc].Cc.Rc();
            }
            var v382 = p561.dd[vO37.fd.ed];
            if (this.qc[0].gd() && v382 && v382.hd) {
              this.oc.Vc(p561, v368, p562, p563);
            } else {
              this.oc.Mc();
            }
            var v383 = p561.dd[vO37.fd.jd];
            if (this.qc[0].gd() && v383 && v383.hd) {
              this.oc.Wc(p561, v368, p562, p563);
            } else {
              this.oc.Oc();
            }
            movimentaLinha();
          };
          var vF6 = function () {
            function f142(p565, p566) {
              this.Cc = p565;
              this.Cc.kd(false);
              this.Dc = p566;
              this.Dc.kd(false);
              this.ev = null;
            }
            f142.prototype.Sc = function (p567, p568, p569, p570, p571) {
              this.Cc.kd(true);
              this.Cc.ld(p567, p568);
              this.Cc.Tc(p569);
              this.Cc.md(p571);
              this.Dc.kd(true);
              this.Dc.ld(p567, p568);
              this.Dc.Tc(p570);
              this.Dc.md(p571);
            };
            f142.prototype.Uc = function () {
              this.Cc.kd(false);
              this.Dc.kd(false);
            };
            f142.prototype.gd = function () {
              return this.Cc.gd();
            };
            f142.cd = function (p572, p573) {
              return Math.atan2(p572.Cc.xc.position.y - p573.Cc.xc.position.y, p572.Cc.xc.position.x - p573.Cc.xc.position.x);
            };
            return f142;
          }();
          return f141;
        }();
        vO37.fd = function () {
          function f143(p574) {
            this.nd = p574;
            this.hd = false;
            this.od = 1;
          }
          f143.jd = 0;
          f143.pd = 1;
          f143.ed = 2;
          f143.qd = 6;
          f143.rd = 3;
          f143.sd = 4;
          f143.td = 5;
          return f143;
        }();
        vO37.Ab = function (p575) {
          var vF7 = function () {
            function f144(p576, p577) {
              f3(this, f144);
              this.ud = p576;
              this.vd = p577;
            }
            return f5(f144, [{
              key: "Jb",
              value: function f145() {
                return this.ud.revision;
              }
            }, {
              key: "Yb",
              value: function f146() {
                vO31.Jb();
                return this.ud;
              }
            }, {
              key: "Ub",
              value: function f147() {
                return this.vd;
              }
            }]);
          }();
          p575 = vF7;
          f22(vF7, "wd", new p575({}, vO37.Ga.Ca()));
          return vF7;
        }();
        vO37.Mb = function () {
          function f148(p578) {
            this.xd = function () {
              ++f148.yd;
              return function (p579, p580) {};
            }();
            this.zd = p578;
            this.Ad = null;
            this.Bd = null;
            this.Cd = null;
            this.Dd = null;
            this.Ed = null;
            this.Fd = false;
            this.Gd = false;
            this.Hd = false;
          }
          f148.Id = {
            Jd: "0x0",
            Kd: "0x1",
            Ld: "0x2",
            Md: "0x3",
            Nd: "0x4"
          };
          f148.yd = 100000;
          f148.Od = new vO37._b.cc().ec(f148.Id.Jd, 1).ec(f148.Id.Kd, 10).ec(f148.Id.Ld, 50).ec(f148.Id.Md, 15).ec(f148.Id.Nd, 5).hc();
          f148.prototype.Rb = function (p581) {
            this.Ad = p581;
          };
          f148.prototype.Qb = function (p582) {
            this.Bd = p582;
          };
          f148.prototype.Ob = function (p583) {
            this.Cd = p583;
          };
          f148.prototype.Pb = function (p584) {
            this.Dd = p584;
          };
          f148.prototype.Nb = function (p585) {
            this.Ed = p585;
          };
          f148.prototype.Kb = function () {
            return this.Hd;
          };
          f148.prototype.Lb = function () {
            this.Fd = true;
          };
          f148.prototype.Vb = function () {
            if (!this.Gd) {
              this.Gd = true;
              if (this.Fd) {
                this.Pd();
                return;
              }
              this.Qd();
            }
          };
          f148.prototype.Qd = function () {
            function f149(p586) {
              var v384 = f148.Id.Jd;
              vThis43.Rd(v384, f148.Od.bc(v384).lc(p586));
            }
            var vThis43 = this;
            console.log("Checking for updates...");
            if (this.Fd) {
              this.Pd();
              return;
            }
            $.ajax({
              type: "GET",
              url: vO39.a.c + "/dynamic/assets/revision.json",
              xhrFields: {
                onprogress: function f150(p587) {
                  if (p587.lengthComputable) {
                    f149(p587.loaded / p587.total);
                  }
                }
              }
            }).fail(function () {
              vThis43.Sd(new Error());
            }).done(function (p588) {
              if (p588 <= vThis43.zd) {
                vThis43.Td();
                return;
              }
              vThis43.Ud();
            });
          };
          f148.prototype.Ud = f38(f25().m(function f151() {
            var v385;
            var v386;
            var v387;
            return f25().w(function (p589) {
              while (1) {
                switch (p589.n) {
                  case 0:
                    v385 = function f152(p590) {
                      var v388 = f148.Id.Kd;
                      v386.Rd(v388, f148.Od.bc(v388).lc(p590));
                    };
                    v386 = this;
                    if (!this.Fd) {
                      p589.n = 1;
                      break;
                    }
                    return p589.a(2, void this.Pd());
                  case 1:
                    p589.n = 2;
                    return fetch(URLSERV_WORMWORLD + "/version");
                  case 2:
                    v387 = p589.v;
                    p589.n = 3;
                    return v387.json();
                  case 3:
                    v387 = p589.v;
                    localStorage.setItem("wwc_version", v387);
                    if (v159 != v387) {
                      $.ajax({
                        type: "GET",
                        url: vO39.a.c + "/dynamic/assets/registry.json",
                        xhrFields: {
                          onprogress: function f153(p591) {
                            if (p591.lengthComputable) {
                              v385(p591.loaded / p591.total);
                            }
                          }
                        }
                      }).fail(function () {
                        v386.Sd(new Error());
                      }).done(function () {
                        var vF385 = f38(f25().m(function f154(p592) {
                          return f25().w(function (p593) {
                            while (1) {
                              switch (p593.n) {
                                case 0:
                                  p593.n = 1;
                                  return vO31.registry(p592);
                                case 1:
                                  p592 = p593.v;
                                  localStorage.setItem("wwc_config", JSON.stringify(p592));
                                  v386.Vd(p592, f148);
                                case 2:
                                  return p593.a(2);
                              }
                            }
                          }, f154);
                        }));
                        return function (p594) {
                          return vF385.apply(this, arguments);
                        };
                      }());
                    } else {
                      try {
                        v161 = JSON.parse(v161);
                        v385(1);
                        v386.Vd(v161, f148);
                      } catch (e31) {
                        console.log("ConfigError", e31);
                        localStorage.removeItem("wwc_version");
                        localStorage.removeItem("wwc_config");
                      }
                    }
                  case 4:
                    return p589.a(2);
                }
              }
            }, f151, this);
          }));
          f148.prototype.Vd = vO31.Vd || function (p595) {
            function f155(p596) {
              var v389 = f148.Id.Ld;
              vThis44.Rd(v389, f148.Od.bc(v389).lc(p596));
            }
            var vThis44 = this;
            if (this.Fd) {
              this.Pd();
              return;
            }
            var vA12 = [];
            var vA13 = [];
            var vLN050 = 0;
            for (var v390 in p595.textureDict) {
              if (p595.textureDict.hasOwnProperty(v390)) {
                var v391 = p595.textureDict[v390];
                var v392 = vO39.a.c + v391.relativePath;
                var v393 = v391.fileSize;
                var v394 = v391.sha256;
                var v395 = new f148.Wd(v390, v392, v393, v394);
                vA12.push(v395);
                vA13.push(v395);
                vLN050 += v393;
              }
            }
            var v396;
            var vLN051 = 0;
            var v_0xa19778 = function f156(p597) {
              for (var vLN052 = 0; vLN052 < vA13.length; vLN052++) {
                try {
                  window.URL.revokeObjectURL(vA13[vLN052].Xd);
                } catch (e32) {}
              }
              vThis44.Sd(p597);
            };
            var v_0x1f6b7d = function f157(p598) {
              var v397 = Math.floor(v396.Yd * p598);
              f155((vLN051 + v397) / vLN050);
            };
            var v_0x28302c = function f158(p599) {
              var v398 = new Blob([p599]);
              v396.Xd = window.URL.createObjectURL(v398);
              vLN051 += v396.Yd;
              v_0x1afe00();
            };
            var v_0x1afe00 = function f159() {
              if (vLN053 < vA13.length) {
                v396 = vA13[vLN053++];
                vThis44.Zd(v396, v_0xa19778, v_0x28302c, v_0x1f6b7d);
                return;
              }
              setTimeout(function () {
                return vThis44.$d(p595, vA12);
              }, 0);
            };
            var vLN053 = 0;
            v_0x1afe00();
          };
          f148.prototype.Zd = vO31.Zd || function (p600, p601, p602, p603) {
            $.ajax({
              type: "GET",
              url: p600._d,
              xhrFields: {
                responseType: "arraybuffer",
                onprogress: function f160(p604) {
                  if (p604.lengthComputable) {
                    p603(p604.loaded / p604.total);
                  }
                }
              }
            }).fail(function () {
              p601(new Error());
            }).done(function (p605) {
              p602(p605);
            });
          };
          f148.prototype.$d = vO31.$d || function (p606, p607) {
            function f161(p608) {
              var v399 = f148.Id.Md;
              vThis45.Rd(v399, f148.Od.bc(v399).lc(p608));
            }
            var vThis45 = this;
            if (this.Fd) {
              this.Pd();
              return;
            }
            var v400;
            var v401;
            var vO52 = {};
            var v_0x38a21f = function f162() {
              for (var vLN054 = 0; vLN054 < p607.length; vLN054++) {
                try {
                  window.URL.revokeObjectURL(p607[vLN054].Xd);
                } catch (e33) {}
              }
              vThis45.Sd(new Error());
            };
            var v_0x37deaf = function f163() {
              f161(vLN055 / p607.length);
              vO52[v400.ae] = new vO37.be(v400.Xd, v401);
              v_0x547198();
            };
            var v_0x547198 = function f164() {
              if (vLN055 < p607.length) {
                v400 = p607[vLN055++];
                v401 = PIXI.BaseTexture.from(v400.Xd);
                v401.on("error", v_0x38a21f);
                v401.on("loaded", v_0x37deaf);
                return;
              }
              setTimeout(function () {
                return vThis45.ce(p606, vO52);
              }, 0);
            };
            var vLN055 = 0;
            v_0x547198();
          };
          f148.prototype.ce = function (p609, p610) {
            function f165(p611) {
              var v402 = f148.Id.Nd;
              vThis46.Rd(v402, f148.Od.bc(v402).lc(p611));
            }
            var vThis46 = this;
            var vO53 = {};
            var vLN056 = 0;
            var v403 = Object.values(p609.regionDict).length;
            vO39._(p609.regionDict, function (p612, p613) {
              var v404 = null;
              try {
                var v405 = null;
                if (p610[p613.texture].ev) {
                  v405 = p610[p613.texture].ev;
                }
                var v406 = p613.texture + ":" + p612;
                v404 = vO37.la.Da(v406, p610[p613.texture].oa, p613, v405);
                vO53[p612] = v404;
                if (++vLN056 % 10 == 0) {
                  f165(vLN056 / v403);
                }
              } catch (e34) {}
            });
            var v407 = Object.values(p610).map(function (p614) {
              return p614.oa;
            });
            var v408 = Object.values(vO53);
            var v409 = new vO37.Ab(p609, vO37.Ga.fb(p609, vO53, v407, v408));
            setTimeout(function () {
              return vThis46.de(v409);
            }, 0);
          };
          f148.Wd = function () {
            function f166(p615, p616, p617, p618) {
              this.ae = p615;
              this._d = p616;
              this.Yd = p617;
              this.ee = p618;
              this.Xd = "";
            }
            return f166;
          }();
          f148.prototype.de = function (p619) {
            if (this.Hd) {
              p619.Ub().Fa();
              return;
            }
            this.Hd = true;
            var vThis47 = this;
            setTimeout(function () {
              return vThis47.Ad(p619);
            }, 0);
          };
          f148.prototype.Td = function () {
            if (!this.Hd) {
              this.Hd = true;
              var vThis48 = this;
              setTimeout(function () {
                return vThis48.Bd();
              }, 0);
            }
          };
          f148.prototype.Sd = function (p620) {
            if (!this.Hd) {
              this.Hd = true;
              var vThis49 = this;
              setTimeout(function () {
                return vThis49.Cd(p620);
              }, 0);
            }
          };
          f148.prototype.Pd = function () {
            if (!this.Hd) {
              this.Hd = true;
              var vThis50 = this;
              setTimeout(function () {
                return vThis50.Dd();
              }, 0);
            }
          };
          f148.prototype.Rd = function (p621, p622) {
            if (!this.Hd && !this.Fd) {
              var vThis51 = this;
              return vThis51.Ed(p621, p622);
            }
          };
          return f148;
        }();
        vO37.fe = function () {
          return {};
        }();
        vO37.ge = function () {
          function f167() {
            this.he = vO37.ge.je.ie;
            this.ke = false;
            this.le = false;
            this.me = null;
            this.ne = null;
          }
          f167.prototype.ha = function () {};
          f167.prototype.oe = function (p623) {
            this.le = p623;
          };
          f167.prototype.pe = function (p624) {
            this.he = p624;
            this.qe();
          };
          f167.prototype.re = function (p625) {
            this.ke = p625;
            this.qe();
          };
          f167.prototype.qe = function () {};
          f167.prototype.se = function (p626, p627) {
            if (!f123().Lc.Wb()) {
              return null;
            }
            var v410 = p626[p627];
            if (v410 == null || v410.length === 0) {
              return null;
            } else {
              return v410[Math.floor(Math.random() * v410.length)].cloneNode();
            }
          };
          f167.prototype.te = function (p628, p629, p630) {
            if (this.le && !(p630 <= 0)) {
              var v411 = this.se(p628, p629);
              if (v411 != null) {
                v411.volume = Math.min(1, p630);
                v411.play();
              }
            }
          };
          f167.prototype.ue = function (p631, p632) {
            if (this.he.ve) {
              this.te(app.xe.we, p631, p632);
            }
          };
          f167.prototype.ye = function (p633, p634) {
            if (this.he.ze) {
              this.te(app.xe.Ae, p633, p634);
            }
          };
          f167.prototype.Be = function () {};
          f167.prototype.Ce = function () {};
          f167.prototype.De = function () {};
          f167.prototype.Ee = function () {};
          f167.prototype.Fe = function () {};
          f167.prototype.Ge = function () {};
          f167.prototype.He = function (p635, p636, p637) {};
          f167.prototype.Ie = function (p638) {};
          f167.prototype.Je = function (p639) {};
          f167.prototype.Ke = function (p640) {};
          f167.prototype.Le = function (p641) {};
          f167.prototype.Me = function (p642) {};
          f167.prototype.Ne = function (p643) {};
          f167.prototype.Oe = function (p644) {};
          f167.prototype.Pe = function (p645) {};
          f167.prototype.Qe = function (p646) {};
          f167.prototype.Re = function (p647) {};
          f167.prototype.Se = function (p648) {};
          f167.prototype.Te = function (p649) {};
          f167.prototype.Ue = function (p650) {};
          f167.prototype.Ve = function (p651) {};
          f167.prototype.We = function (p652, p653) {};
          f167.prototype.Xe = function (p654) {};
          f167.prototype.Ye = function (p655, p656, p657) {};
          f167.je = {
            ie: {
              Ze: false,
              $e: false,
              ze: true,
              ve: false
            },
            _e: {
              Ze: false,
              $e: true,
              ze: true,
              ve: false
            },
            af: {
              Ze: true,
              $e: false,
              ze: false,
              ve: true
            },
            bf: {
              Ze: false,
              $e: false,
              ze: true,
              ve: false
            },
            cf: {
              Ze: false,
              $e: false,
              ze: false,
              ve: false
            }
          };
          return f167;
        }();
        vO37.GameView = function () {
          function f168(p658) {
            var vF123 = f123();
            this.ef = p658;
            this.Eb = p658.get()[0];
            this.ff = 1;
            this.gf = 1;
            this.hf = null;
            this.lf = new vF4.Renderer({
              view: p658.get()[0],
              backgroundColor: 0,
              transparent: false,
              antialias: false,
              autoResize: true
            });
            this.mf = new vF4.Container();
            this.mf.sortableChildren = true;
            this.nf = new vF4.Container();
            this.nf.zIndex = 0;
            this.mf.addChild(this.nf);
            this.uf = new vF4.Container();
            this.uf.zIndex = 3;
            this.mf.addChild(this.uf);
            this.vf = [];
            this.wf = [];
            this.xf = [];
            this.ha();
          }
          var vLN057 = 0;
          var vLN52 = 5;
          var vLN40 = 40;
          var vA14 = [{
            yf: 1,
            zf: 0.15,
            Af: 0
          }, {
            yf: 1,
            zf: 0.125,
            Af: 0
          }, {
            yf: 1,
            zf: 0.1,
            Af: 0
          }, {
            yf: 1,
            zf: 0.075,
            Af: 0
          }, {
            yf: 1,
            zf: 0.05,
            Af: 0
          }, {
            yf: 1,
            zf: 0.025,
            Af: 0
          }, {
            yf: 1,
            zf: 0,
            Af: 0.025
          }, {
            yf: 1,
            zf: 0,
            Af: 0.05
          }, {
            yf: 1,
            zf: 0,
            Af: 0.075
          }, {
            yf: 1,
            zf: 0,
            Af: 0.1
          }, {
            yf: 1,
            zf: 0,
            Af: 0.125
          }, {
            yf: 1,
            zf: 0,
            Af: 0.15
          }];
          f168.prototype.ha = function () {
            var vF1232 = f123();
            this.lf.backgroundColor = vLN057;
            this.vf = new Array(vA14.length);
            for (var vLN058 = 0; vLN058 < this.vf.length; vLN058++) {
              this.vf[vLN058] = new vF4.Sprite();
              this.vf[vLN058].texture = vF1232.xe.Bf;
              this.vf[vLN058].anchor.set(0.5);
              this.nf.addChild(this.vf[vLN058]);
            }
            this.wf = new Array(vF1232.xe.Cf.length);
            for (var vLN059 = 0; vLN059 < this.wf.length; vLN059++) {
              this.wf[vLN059] = new vF4.Sprite();
              this.wf[vLN059].texture = vF1232.xe.Cf[vLN059];
              this.wf[vLN059].anchor.set(0.5);
              this.uf.addChild(this.wf[vLN059]);
            }
            this.xf = new Array(this.wf.length);
            for (var vLN060 = 0; vLN060 < this.xf.length; vLN060++) {
              var vA15 = [0.6, 1, 0.5];
              this.xf[vLN060] = {
                Df: vO39.V(0, vO38.F),
                Ef: vO39.V(0.09, 0.16) * 0.66,
                Ff: vO39.V(0, 1),
                Gf: vO39.V(0, 1),
                Hf: 0,
                yf: vA15[0],
                zf: vA15[1],
                Af: vA15[2]
              };
            }
            this.If();
            this.Jf();
          };
          f168.hd = false;
          f168.Kf = function (p659) {
            f168.hd = p659;
          };
          f168.prototype.Lf = function (p660) {
            this.hf.Kf(p660);
          };
          f168.prototype.Jf = function () {
            var v412 = window.devicePixelRatio ? window.devicePixelRatio : 1;
            this.ff = this.ef.width();
            this.gf = this.ef.height();
            this.lf.resize(this.ff, this.gf);
            this.lf.resolution = v412;
            this.Eb.width = v412 * this.ff;
            this.Eb.height = v412 * this.gf;
            var v413 = Math.max(this.ff, this.gf) * 0.6;
            for (var vLN061 = 0; vLN061 < this.vf.length; vLN061++) {
              this.vf[vLN061].width = v413;
              this.vf[vLN061].height = v413;
            }
          };
          f168.prototype.Nf = function (p661, p662) {
            if (f168.hd) {
              var v414 = p661 / 1000;
              var v415 = p662 / 1000;
              var v416 = this.ef.width();
              var v417 = this.ef.height();
              for (var vLN062 = 0; vLN062 < this.vf.length; vLN062++) {
                var v418 = vA14[vLN062 % vA14.length];
                var v419 = this.vf[vLN062];
                var v420 = vLN062 / this.vf.length * vO38.G;
                var v421 = v414 * 0.5 * 0.12;
                var v422 = Math.cos((v421 + v420) * 3) * Math.cos(v420) - Math.sin((v421 + v420) * 5) * Math.sin(v420);
                var v423 = Math.cos((v421 + v420) * 3) * Math.sin(v420) + Math.sin((v421 + v420) * 5) * Math.cos(v420);
                var v424 = 0.2 + Math.cos(v420 + v414 * 0.075) * 0.2;
                var v425 = v418.Af * 255 << 16 & 16711680 | v418.zf * 255 << 8 & 65280 | v418.yf * 255 & 255;
                v419.tint = v425;
                v419.alpha = v424;
                v419.position.set(v416 * (0.2 + (v422 + 1) * 0.5 * 0.6), v417 * (0.1 + (v423 + 1) * 0.5 * 0.8));
              }
              var v426 = Math.max(v416, v417) * 0.05;
              for (var vLN063 = 0; vLN063 < this.wf.length; vLN063++) {
                var v427 = this.xf[vLN063];
                var v428 = this.wf[vLN063];
                var v429 = vO38.F * vLN063 / this.wf.length + v427.Df;
                v427.Gf += v427.Ef * v415;
                if (v427.Gf > 1.1) {
                  v427.Df = Math.random() * vO38.F;
                  v427.Ef = (0.09 + Math.random() * 0.07) * 0.66;
                  v427.Ff = 0.15 + Math.random() * 0.7;
                  v427.Gf = -0.1;
                }
                var v430 = v427.Ff + Math.sin(Math.sin(v429 + v414 * 0.48) * 6) * 0.03;
                var v431 = v427.Gf;
                var v432 = (0.4 + (1 + Math.sin(v429 + v414 * 0.12)) * 0.5 * 1.2) * 0.5;
                var v433 = v429 + v427.Ef * 2 * v414;
                var v434 = vO39.P(Math.sin(Math.PI * v431), 0.1, 1);
                var v435 = v427.zf * 255 << 8 & 65280 | v427.Af * 255 << 16 & 16711680 | v427.yf * 255 & 255;
                v428.alpha = v434;
                v428.tint = v435;
                v428.position.set(v416 * v430, v417 * v431);
                v428.rotation = v433;
                var v436 = v428.texture.width / v428.texture.height;
                v428.width = v432 * v426;
                v428.height = v432 * v426 * v436;
              }
              this.Of();
              this.lf.render(this.mf, null, true);
            }
          };
          f168.prototype.Pf = function () {
            var vF1233 = f123();
            if (vF1233.Lc.Wb()) {
              var v437 = vF1233.Lc.Ub().gb(vLN52);
              for (var vLN064 = 0; vLN064 < vLN52; vLN064++) {
                this.hf.Qf(vLN064, v437[vLN064]);
              }
            } else {
              var v438 = vO39.V(0, 1);
              for (var vLN065 = 0; vLN065 < vLN52; vLN065++) {
                var v439 = (v438 + vLN065 / vLN52) % 1;
                var v440 = vO39.Y(Math.floor(v439 * 360), 0.85, 0.5);
                var v441 = v440[0] * 255 & 255 | v440[1] * 255 << 8 & 65280 | v440[2] * 255 << 16 & 16711680;
                var v442 = "000000" + v441.toString(16);
                v442 = "#" + v442.substring(v442.length - 6, v442.length);
                this.hf.Rf(vLN065, v442);
              }
            }
          };
          f168.prototype.If = function () {
            var v443 = Math.min(this.ff, this.gf);
            var v444 = Date.now();
            for (var vLN066 = 0; vLN066 < vLN52; vLN066++) {
              var v445 = vLN066 / vLN52 * vO38.F;
              var v_0x42cbb8 = v_0x5193f2(v444, 0.12, v445);
              v_0x42cbb8.qa = v_0x42cbb8.qa * 4;
              v_0x42cbb8.ra = v_0x42cbb8.ra * 4;
              this.hf.Sf(vLN066, (this.ff + v_0x42cbb8.qa * v443) * 0.5, (this.gf + v_0x42cbb8.ra * v443) * 0.5);
            }
          };
          f168.prototype.Of = function () {
            var v446 = Math.min(this.ff, this.gf);
            var v447 = Date.now();
            for (var vLN067 = 0; vLN067 < vLN52; vLN067++) {
              var v448 = vLN067 / vLN52 * vO38.F;
              var v_0x42cbb82 = v_0x5193f2(v447, 0.12, v448);
              this.hf.Tf(vLN067, (this.ff + v_0x42cbb82.qa * v446) * 0.5, (this.gf + v_0x42cbb82.ra * v446) * 0.5);
            }
            this.hf.Uf();
          };
          var v_0x5193f2 = function f169(p663, p664, p665) {
            var v449 = p663 / 1000;
            return {
              qa: (Math.cos(p664 * v449 + p665) + Math.cos(p664 * -32 * v449 + p665) * 0.4 + Math.cos(p664 * 7 * v449 + p665) * 0.7) * 0.8,
              ra: (Math.sin(p664 * v449 + p665) + Math.sin(p664 * -32 * v449 + p665) * 0.4 + Math.sin(p664 * 7 * v449 + p665) * 0.7) * 0.8
            };
          };
          return f168;
        }();
        vO37.Vf = function () {
          function f170() {}
          f170.Wf = "consent_state_2";
          f170.Xf = "showPlayerNames";
          f170.Yf = "musicEnabled";
          f170.Zf = "sfxEnabled";
          f170.$f = "account_type";
          f170._f = "gameMode";
          f170.ag = "nickname";
          f170.bg = "skin";
          f170.cg = "prerollCount";
          f170.dg = "shared";
          f170.eg = function (p666, p667, p668) {
            var v450 = new Date();
            v450.setTime(v450.getTime() + p668 * 86400000);
            var v451 = "expires=" + v450.toUTCString();
            document.cookie = p666 + "=" + p667 + "; " + v451;
          };
          f170.fg = function (p669) {
            var v452 = p669 + "=";
            for (var v453 = document.cookie.split(";"), vLN068 = 0; vLN068 < v453.length; vLN068++) {
              for (var v454 = v453[vLN068]; v454.charAt(0) == " ";) {
                v454 = v454.substring(1);
              }
              if (v454.indexOf(v452) == 0) {
                if (p669 == "nickname=") {
                  v454.substring(v452.length, v454.length).substring(0, vLN50);
                }
                return v454.substring(v452.length, v454.length);
              }
            }
            return "";
          };
          return f170;
        }();
        vO38.gg = function () {
          function f171(p670, p671, p672) {
            var v455 = false;
            for (var v456 = p672.length, vLN069 = 0, v457 = v456 - 1; vLN069 < v456; v457 = vLN069++) {
              if (p672[vLN069][1] > p671 != p672[v457][1] > p671 && p670 < (p672[v457][0] - p672[vLN069][0]) * (p671 - p672[vLN069][1]) / (p672[v457][1] - p672[vLN069][1]) + p672[vLN069][0]) {
                v455 = !v455;
              }
            }
            return v455;
          }
          var vA16 = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
          return {
            hg: function f172(p673, p674) {
              return f171(p674, p673, vA16);
            }
          };
        }();
        vO37.ig = function () {
          function f173(p675) {
            var vUndefined5 = undefined;
            vUndefined5 = p675 > 0 ? "+" + Math.floor(p675) : p675 < 0 ? "-" + Math.floor(p675) : "0";
            var v458 = Math.min(1.5, 0.5 + p675 / 600);
            var vUndefined6 = undefined;
            if (p675 < 1) {
              vUndefined6 = "0xFFFFFF";
            } else if (p675 < 30) {
              var v459 = (p675 - 1) / 29;
              vUndefined6 = f175((1 - v459) * 1 + v459 * 0.96, (1 - v459) * 1 + v459 * 0.82, (1 - v459) * 1 + v459 * 0);
            } else if (p675 < 300) {
              var v460 = (p675 - 30) / 270;
              vUndefined6 = f175((1 - v460) * 0.96 + v460 * 0.93, (1 - v460) * 0.82 + v460 * 0.34, (1 - v460) * 0 + v460 * 0.25);
            } else if (p675 < 700) {
              var v461 = (p675 - 300) / 400;
              vUndefined6 = f175((1 - v461) * 0.93 + v461 * 0.98, (1 - v461) * 0.34 + v461 * 0, (1 - v461) * 0.25 + v461 * 0.98);
            } else {
              vUndefined6 = f175(0.98, 0, 0.98);
            }
            var v462 = Math.random();
            var v463 = 1 + Math.random() * 0.5;
            return new vF8(vUndefined5, vUndefined6, true, 0.5, v458, v462, v463);
          }
          function f174(p676, p677) {
            var vUndefined7 = undefined;
            var vUndefined8 = undefined;
            if (p677) {
              vUndefined7 = 1.3;
              vUndefined8 = f175(0.93, 0.34, 0.25);
            } else {
              vUndefined7 = 1.1;
              vUndefined8 = f175(0.96, 0.82, 0);
            }
            return new vF8(p676, vUndefined8, true, 0.5, vUndefined7, 0.5, 0.7);
          }
          function f175(p678, p679, p680) {
            return ((p678 * 255 & 255) << 16) + ((p679 * 255 & 255) << 8) + (p680 * 255 & 255);
          }
          var v464 = vO39.M(vF4.Container, function () {
            vF4.Container.call(this);
            this.jg = [];
            this.kg = 0;
          });
          v464.prototype.lg = function (p681) {
            this.kg += p681;
            if (this.kg >= 1) {
              var v465 = Math.floor(this.kg);
              this.kg -= v465;
              var vF173 = f173(v465);
              this.addChild(vF173);
              this.jg.push(vF173);
            }
          };
          v464.prototype.mg = function (p682) {
            _wwc.fnSetCounts("count", p682);
            if (p682) {
              if (!(window.bbs.headshot % 10)) {
                vO24.fxdo("shaokahn");
              } else {
                vO24.fxdo("headshot");
              }
              var vF174 = f174(vO39.H("index.game.floating.headshot"), true);
              this.addChild(vF174);
              this.jg.push(vF174);
            } else {
              var vF1742 = f174(vO39.H("index.game.floating.wellDone"), false);
              this.addChild(vF1742);
              this.jg.push(vF1742);
            }
          };
          v464.prototype.Uf = function (p683, p684) {
            var v466 = f123().og.af.ng;
            var v467 = v466.lf.width / v466.lf.resolution;
            var v468 = v466.lf.height / v466.lf.resolution;
            for (var vLN070 = 0; vLN070 < this.jg.length;) {
              var v469 = this.jg[vLN070];
              v469.pg = v469.pg + p684 / 2000 * v469.qg;
              v469.rg = v469.rg + p684 / 2000 * v469.sg;
              v469.alpha = Math.sin(Math.PI * v469.rg) * 0.5;
              v469.scale.set(v469.pg);
              v469.position.x = v467 * (0.25 + v469.tg * 0.5);
              v469.position.y = v469.ug ? v468 * (1 - (1 + v469.rg) * 0.5) : v468 * (1 - (0 + v469.rg) * 0.5);
              if (v469.rg > 1) {
                vO39.U(v469);
                this.jg.splice(vLN070, 1);
                vLN070--;
              }
              vLN070++;
            }
          };
          var vF8 = function () {
            return vO39.M(vF4.Text, function (p685, p686, p687, p688, p689, p690, p691) {
              vF4.Text.call(this, p685, {
                fill: p686,
                fontFamily: "PTSans",
                fontSize: 36
              });
              this.anchor.set(0.5);
              this.ug = p687;
              this.pg = p688;
              this.qg = p689;
              this.tg = p690;
              this.rg = 0;
              this.sg = p691;
            });
          }();
          return v464;
        }();
        vO37.be = function () {
          function f176(p692, p693) {
            this.Xd = p692;
            this.oa = p693;
          }
          return f176;
        }();
        vO37.Ac = {
          vg: 0,
          zc: 16
        };
        vO37.GameParams = function () {
          function f177() {
            this.xg = vO37.Ac.vg;
            this.yg = 0;
            this.zg = 500;
            this.Ag = 4000;
            this.Bg = 7000;
          }
          f177.Cg = 0;
          f177.prototype.Dg = function () {
            return this.zg * 1.02;
          };
          return f177;
        }();
        vO37.Eg = function () {
          function f178(p694) {
            this.ef = p694;
            this.Eb = p694.get()[0];
            this.lf = new vF4.Renderer({
              view: p694.get()[0],
              backgroundColor: vLN071,
              antialias: false
            });
            this.mf = new vF4.Container();
            this.mf.sortableChildren = true;
            this.Fg = Math.floor(Math.random() * 360);
            this.Gg = 0;
            this.Hg = 0;
            this.Ig = 15;
            this.Jg = 0.5;
            this.Kg = 0;
            this.Lg = vO31.Lg(vO37);
            this.Ng = new vF4.Graphics();
            this.Og = new vF4.Container();
            this.Pg = new vF4.Container();
            this.Pg.sortableChildren = true;
            this.Qg = new vF4.Container();
            this.Rg = new vF4.Container();
            this.Rg.sortableChildren = true;
            this.Sg = new vF4.Container();
            this.Tg = new vF9();
            this.Ug = new vF11();
            this.Vg = new vF13();
            this.Wg = new vO37.ig();
            this.Xg = new vF4.Sprite();
            this.Yg = {
              x: 0,
              y: 0
            };
            this.ha();
          }
          var vLN071 = 0;
          f178.prototype.ha = function () {
            this.lf.backgroundColor = vLN071;
            this.Lg.sf.zIndex = 1;
            this.mf.addChild(this.Lg.sf);
            this.Ng.zIndex = 20;
            this.mf.addChild(this.Ng);
            this.Og.zIndex = 5000;
            this.mf.addChild(this.Og);
            this.Pg.zIndex = 5100;
            this.mf.addChild(this.Pg);
            this.Qg.zIndex = 10000;
            this.mf.addChild(this.Qg);
            createLine(this.mf, this.Lg.sf);
            this.Xg.texture = f123().xe.Zg;
            this.Xg.anchor.set(0.5);
            this.Xg.zIndex = 1;
            this.Rg.addChild(this.Xg);
            this.Sg.alpha = 0.6;
            this.Sg.zIndex = 2;
            this.Rg.addChild(this.Sg);
            this.Wg.zIndex = 3;
            this.Rg.addChild(this.Wg);
            this.Tg.alpha = 0.8;
            this.Tg.zIndex = 4;
            this.Rg.addChild(this.Tg);
            this.Ug.zIndex = 5;
            this.Rg.addChild(this.Ug);
            this.Vg.zIndex = 6;
            this.Rg.addChild(this.Vg);
            this.Jf();
          };
          f178.prototype.Jf = function () {
            var v470 = this.ef.width();
            var v471 = this.ef.height();
            var v472 = window.bbs.display.custom ? window.bbs.display.clock.x * v470 : 0;
            var v473 = window.bbs.display.custom ? window.bbs.display.clock.y * v471 : 0;
            var v474 = window.bbs.display.custom ? window.bbs.display.top.x * v470 : v470 - 255;
            var v475 = window.bbs.display.custom ? window.bbs.display.top.y * screen.height : 1;
            var v476 = window.bbs.display.clock.rc ? vO35[window.bbs.display.clock.rc] : 0;
            var v477 = window.bbs.display.top.rt ? vO35[window.bbs.display.top.rt] : 0;
            var v478 = window.devicePixelRatio ? window.devicePixelRatio : 1;
            var v479 = v478 * v470;
            var v480 = v478 * v471;
            var v481 = Math.min(Math.min(v470, v471), Math.max(v470, v471) * 0.625);
            this.lf.resize(v470, v471);
            this.lf.resolution = v478;
            this.Eb.width = v479;
            this.Eb.height = v480;
            this.Jg = v481;
            this.Xg.position.set(v470 / 2, v471 / 2);
            this.Xg.width = v470;
            this.Xg.height = v471;
            this.Tg.position.set(60 + v472, 60 + v473 + (v476 ? this.Tg.height / 4 : 0));
            this.Ug.position.set(110, 10);
            this.Vg.position.set(v474, v475 + (v477 ? this.Vg.height : 0));
            this.Tg.rotation = v476;
            this.Vg.rotation = v477;
          };
          f178.prototype.Uf = function (p695, p696) {
            var vVO30 = vO30;
            this.Ig = 15;
            this.Og.removeChildren();
            this.Pg.removeChildren();
            this.Qg.removeChildren();
            this.Sg.removeChildren();
            this.Lg.$g(p695.xg === vO37.Ac.vg ? vVO30.xe._g : vVO30.xe.ah);
            var v482 = this.Ng;
            v482.clear();
            v482.lineStyle(0.2, 16711680, 0.6);
            v482.drawCircle(0, 0, p695.zg);
            v482.endFill();
            this.Vg.bh = p696;
            this.Sg.visible = p696;
          };
          f178.prototype.Nf = function (p697, p698) {
            if (this.lf.width <= 5) {
              return;
            }
            var vVO302 = vO30;
            var v483 = vVO302.dh.ch;
            var v484 = this.lf.width / this.lf.resolution;
            var v485 = this.lf.height / this.lf.resolution;
            this.Ig = vO31.$F.Q(this.Ig, vVO302.dh.eh, p698, 0.002);
            var v486 = this.Jg / (this.Ig * vLN12);
            var v487 = vVO302.dh.ch.dd[vO31.$C.fd.qd];
            var v488 = v487 != null && v487.hd;
            this.Kg = vO31.$F.P(this.Kg + p698 / 1000 * ((v488 ? 1 : 0) * 0.1 - this.Kg), 0, 1);
            this.Xg.alpha = this.Kg;
            this.Fg = (this.Fg + p698 * 0.01) % 360;
            this.Gg = Math.sin(p697 / 1200 * 2 * Math.PI);
            var v489 = v483.fh();
            this.Yg.x = vO31.$F.R(this.Yg.x, v489.x, p698, 0.5, 33.333);
            this.Yg.y = vO31.$F.R(this.Yg.y, v489.y, p698, 0.5, 33.333);
            var v490 = v484 / v486 / 2;
            var v491 = v485 / v486 / 2;
            vVO302.dh.gh(this.Yg.x - v490 * 1.3, this.Yg.x + v490 * 1.3, this.Yg.y - v491 * 1.3, this.Yg.y + v491 * 1.3);
            if (!bbs.backgroundIsCustom) {
              this.Lg.Uf(this.Yg.x, this.Yg.y, v490 * 2, v491 * 2);
            }
            var v492 = vVO302.dh.hh.zg;
            this.mf.scale.set(v486, v486);
            this.mf.position.set(v484 / 2 - this.Yg.x * v486, v485 / 2 - this.Yg.y * v486);
            var v493 = Math.hypot(v489.x, v489.y);
            if (v493 > v492 - 10) {
              this.Hg = vO31.$F.P(1 + (v493 - v492) / 10, 0, 1);
              var v494 = Math.cos(this.Fg * vO31.$V.F / 360) * (1 - this.Hg) + this.Hg * 1;
              var v495 = Math.sin(this.Fg * vO31.$V.F / 360) * (1 - this.Hg);
              var v496 = (Math.atan2(v495, v494) + vO31.$V.F) % vO31.$V.F * 360 / vO31.$V.F;
              var v497 = this.Hg * (0.5 + this.Gg * 0.5);
              var v498 = vO31.$F.Y(Math.floor(v496), 1, 0.75 - this.Hg * 0.25);
              this.Lg.Ec(v498[0], v498[1], v498[2], 0.1 + v497 * 0.2);
            } else {
              this.Hg = 0;
              var v499 = vO31.$F.Y(Math.floor(this.Fg), 1, 0.75);
              this.Lg.Ec(v499[0], v499[1], v499[2], 0.1);
            }
            for (var vLN072 = 0; vLN072 < this.Sg.children.length; vLN072++) {
              var v500 = this.Sg.children[vLN072];
              v500.position.set(v484 / 2 - (this.Yg.x - v500.ih.x) * v486, v485 / 2 - (this.Yg.y - v500.ih.y) * v486);
            }
            this.Tg.jh.position.x = v489.x / v492 * this.Tg.kh;
            this.Tg.jh.position.y = v489.y / v492 * this.Tg.kh;
            _wwcio.myLocation = this.Tg.jh;
            this.Ug.lh(p697);
            this.Wg.Uf(p697, p698);
            this.lf.render(this.mf, null, true);
            this.lf.render(this.Rg, null, false);
          };
          f178.prototype.mh = function (p699, p700) {
            p700.nh.Cc.Qc().zIndex = (p699 + 2147483648) / 4294967296 * 5000;
            this.Og.addChild(p700.nh.Dc.Qc());
            this.Pg.addChild(p700.nh.Cc.Qc());
          };
          f178.prototype.oh = function (p701, p702, p703) {
            p702.nc.zIndex = f123().dh.hh.yg ? 0 : 10 + (p701 + 32768) / 65536 * 5000;
            this.Qg.addChild(p702.nc);
            if (p701 != f123().dh.hh.yg) {
              this.Sg.addChild(p703);
            }
          };
          var vF9 = function () {
            return vO39.M(vF4.Container, function () {
              vF4.Container.call(this);
              this.kh = 40;
              this.qh = new vF4.Sprite();
              this.qh.anchor.set(0.5);
              this.qh.alpha = 0.5;
              var v501 = new vF4.Graphics();
              v501.beginFill("black", 0.4);
              v501.drawCircle(0, 0, this.kh);
              v501.endFill();
              v501.lineStyle(1, 16225317);
              v501.drawCircle(0, 0, this.kh);
              v501.moveTo(0, -this.kh);
              v501.lineTo(0, +this.kh);
              v501.moveTo(-this.kh, 0);
              v501.lineTo(+this.kh, 0);
              v501.endFill();
              if (bbs.display.customClock) {
                v501 = new vF4.Sprite();
                v501.texture = new vF4.Texture.from(bbs.display.customClock.file);
                v501.width = this.kh * 2.75;
                v501.height = this.kh * 2.75;
                v501.anchor.set(0.5);
              }
              this.jh = new vF4.Graphics();
              this.jh.zIndex = 2;
              this.jh.alpha = 0.9;
              this.jh.lineStyle(1, 0, 1);
              this.jh.beginFill(16747520, 1);
              this.jh.drawCircle(0, 0, this.kh * 0.1);
              this.jh.endFill();
              this.jh.lineStyle(1, "black");
              this.addChild(v501);
              this.addChild(this.qh);
              this.addChild(this.jh);
              this.addChild(w2c2020.conteinerTeam);
            });
          }();
          var vF11 = function () {
            var v502 = vO39.M(vF4.Container, function () {
              vF4.Container.call(this);
              this.rh = {};
            });
            v502.prototype.lh = function (p704) {
              var v503 = 0.5 + Math.cos(vO38.F * (p704 / 1000 / 1.6)) * 0.5;
              for (var v504 in this.rh) {
                var v505 = this.rh[v504];
                var v506 = v505.sh;
                v505.alpha = 1 - v506 + v506 * v503;
              }
            };
            v502.prototype.Uf = function (p705) {
              for (var v507 in this.rh) {
                if (p705[v507] == null || !p705[v507].hd) {
                  vO39.U(this.rh[v507]);
                  delete this.rh[v507];
                }
              }
              var vLN073 = 0;
              for (var v508 in p705) {
                var v509 = p705[v508];
                if (v509.hd) {
                  var v510 = this.rh[v508];
                  if (!v510) {
                    var v511 = f123().Lc.Ub().pb(v509.nd).ub;
                    v510 = new vF12();
                    v510.texture = v511.Ea();
                    v510.width = 40;
                    v510.height = 40;
                    this.rh[v508] = v510;
                    this.addChild(v510);
                  }
                  v510.sh = v509.od;
                  v510.position.x = vLN073;
                  vLN073 += 40;
                }
              }
            };
            var vF12 = function () {
              return vO39.M(vF4.Sprite, function () {
                vF4.Sprite.call(this);
                this.sh = 0;
              });
            }();
            return v502;
          }();
          var vF13 = function () {
            var v512 = vO39.M(vF4.Container, function () {
              vF4.Container.call(this);
              this.bh = true;
              this.th = 12;
              this.uh = 9;
              this.jg = [];
              for (var vLN074 = 0; vLN074 < 14; vLN074++) {
                this.vh();
              }
            });
            v512.prototype.Uf = function (p706) {
              var vF1234 = f123();
              var v513 = vF1234.dh.hh.xg === vO37.Ac.zc;
              var vLN076 = 0;
              var vLN077 = 0;
              if (vLN077 >= this.jg.length) {
                this.vh();
              }
              this.jg[vLN077].wh(1, "white");
              this.jg[vLN077].xh("", vO39.H("index.game.leader.top10"), "(" + vF1234.dh.yh + " online)");
              this.jg[vLN077].position.y = vLN076;
              vLN076 += this.th;
              vLN077 += 1;
              if (p706.zh.length > 0) {
                vLN076 += this.uh;
              }
              for (var vLN078 = 0; vLN078 < p706.zh.length; vLN078++) {
                var v514 = p706.zh[vLN078];
                var v515 = vF1234.Lc.Ub().jb(v514.Ah);
                var vLS9 = "";
                var v516 = vF1234.Lc.Xb().textDict[v515.qb];
                if (v516 != null) {
                  vLS9 = vO39.I(v516);
                }
                if (vLN077 >= this.jg.length) {
                  this.vh();
                }
                this.jg[vLN077].wh(0.8, v515.rb.tb);
                this.jg[vLN077].xh("" + (vLN078 + 1), vLS9, "" + Math.floor(v514.Bh));
                this.jg[vLN077].position.y = vLN076;
                vLN076 += this.th;
                vLN077 += 1;
              }
              if (p706.Ch.length > 0) {
                vLN076 += this.uh;
              }
              for (var vLN079 = 0; vLN079 < p706.Ch.length; vLN079++) {
                var v517 = p706.Ch[vLN079];
                var v518 = vF1234.dh.hh.yg == v517.Dh;
                var v519;
                var v520;
                if (v518) {
                  v519 = "white";
                  v520 = vF1234.dh.ch.Eh.ma;
                } else {
                  var v521 = vF1234.dh.Fh[v517.Dh];
                  if (!v519) {
                    v519 = "white";
                  }
                  if (v521 != null) {
                    v519 = v513 ? vF1234.Lc.Ub().jb(v521.Eh.Gh).rb.tb : vF1234.Lc.Ub().ib(v521.Eh.Hh).tb || v519;
                    v520 = this.bh && v134 ? v521.Eh.ma : "---";
                  } else {
                    v519 = "gray";
                    v520 = "?";
                  }
                }
                if (v518) {
                  vLN076 += this.uh;
                }
                if (vLN077 >= this.jg.length) {
                  this.vh();
                }
                this.jg[vLN077].wh(v518 ? 1 : 0.8, v519);
                this.jg[vLN077].xh("" + (vLN079 + 1), v520, "" + Math.floor(v517.Bh));
                this.jg[vLN077].position.y = vLN076;
                vLN076 += this.th;
                vLN077 += 1;
                if (v518) {
                  vLN076 += this.uh;
                }
                if (window.bbs.lr && vLN079 === 2) {
                  break;
                }
              }
              if (vF1234.dh.Ih > (window.bbs.lr ? 3 : p706.Ch.length)) {
                vLN076 += this.uh;
                if (vLN077 >= this.jg.length) {
                  this.vh();
                }
                this.jg[vLN077].wh(1, "white");
                this.jg[vLN077].xh("" + vF1234.dh.Ih, vF1234.dh.ch.Eh.ma, "" + Math.floor(vF1234.dh.ch.Bh));
                this.jg[vLN077].position.y = vLN076;
                vLN076 += this.th;
                vLN077 += 1;
                vLN076 += this.uh;
              }
              while (this.jg.length > vLN077) {
                vO39.U(this.jg.pop());
              }
            };
            v512.prototype.vh = function () {
              var v522 = new vF14();
              v522.position.y = 0;
              if (this.jg.length > 0) {
                v522.position.y = this.jg[this.jg.length - 1].position.y + this.th;
              }
              this.jg.push(v522);
              this.addChild(v522);
            };
            var vF14 = function () {
              var v523 = vO39.M(vF4.Container, function () {
                vF4.Container.call(this);
                this.Jh = new vF4.Text("", {
                  fontFamily: "PTSans",
                  fontSize: 12,
                  fill: "white"
                });
                this.Jh.anchor.x = 1;
                this.Jh.position.x = 30;
                this.addChild(this.Jh);
                this.Kh = new vF4.Text("", {
                  fontFamily: "PTSans",
                  fontSize: 12,
                  fill: "white"
                });
                this.Kh.anchor.x = 0;
                this.Kh.position.x = 35;
                this.addChild(this.Kh);
                this.Lh = new vF4.Text("", {
                  fontFamily: "PTSans",
                  fontSize: 12,
                  fill: "white"
                });
                this.Lh.anchor.x = 1;
                this.Lh.position.x = 250;
                this.addChild(this.Lh);
              });
              v523.prototype.xh = function (p707, p708, p709) {
                this.Jh.text = p707;
                this.Lh.text = p709;
                this.Kh.text = p708;
              };
              v523.prototype.wh = function (p710, p711) {
                this.Jh.alpha = p710;
                this.Jh.style.fill = p711;
                this.Kh.alpha = p710;
                this.Kh.style.fill = p711;
                this.Lh.alpha = p710;
                this.Lh.style.fill = p711;
              };
              return v523;
            }();
            return v512;
          }();
          return f178;
        }();
        vO37.MessageProcessor = function () {
          function f179(p712) {
            this.dh = p712;
            this.Nh = [];
            this.Oh = 0;
          }
          f179.prototype.Ph = function (p713) {
            this.Nh.push(new DataView(p713));
          };
          f179.prototype.Qh = function () {
            this.Nh = [];
            this.Oh = 0;
          };
          f179.prototype.Rh = function () {
            for (var vLN080 = 0; vLN080 < 16; vLN080++) {
              if (this.Nh.length === 0) {
                return;
              }
              var v524 = this.Nh.shift();
              try {
                this.Sh(v524);
              } catch (e35) {
                throw e35;
              }
            }
          };
          f179.prototype.Sh = function (p714) {
            switch (p714.ba(0) & 255) {
              case 0:
                this.Th(p714, 1);
                return;
              case 1:
                this.Uh(p714, 1);
                return;
              case 2:
                this.Vh(p714, 1);
                return;
              case 3:
                this.Wh(p714, 1);
                return;
              case 4:
                this.Xh(p714, 1);
                return;
              case 5:
                this.Yh(p714, 1);
                return;
            }
          };
          f179.prototype.Th = function (p715, p716) {
            this.dh.hh.xg = p715.ba(p716);
            p716 += 1;
            var v525 = p715.ca(p716);
            p716 += 2;
            this.dh.hh.yg = v525;
            this.dh.ch.Eh.ae = v525;
            this.dh.hh.zg = p715.ea(p716);
            p716 += 4;
            this.dh.hh.Ag = p715.ea(p716);
            p716 += 4;
            this.dh.hh.Bg = p715.ea(p716);
            p716 += 4;
            f123().og.af.ng.Uf(this.dh.hh, f123().og.$h.Zh());
            return p716;
          };
          f179.prototype.Uh = function (p717, p718) {
            var v526 = this.Oh++;
            var v527 = p717.ca(p718);
            p718 += 2;
            var vUndefined9 = undefined;
            vUndefined9 = this._h(p717, p718);
            p718 += this.ai(vUndefined9);
            for (var vLN081 = 0; vLN081 < vUndefined9; vLN081++) {
              p718 = this.bi(p717, p718);
            }
            vUndefined9 = this._h(p717, p718);
            p718 += this.ai(vUndefined9);
            for (var vLN082 = 0; vLN082 < vUndefined9; vLN082++) {
              p718 = this.ci(p717, p718);
            }
            vUndefined9 = this._h(p717, p718);
            p718 += this.ai(vUndefined9);
            for (var vLN083 = 0; vLN083 < vUndefined9; vLN083++) {
              p718 = this.di(p717, p718);
            }
            vUndefined9 = this._h(p717, p718);
            p718 += this.ai(vUndefined9);
            for (var vLN084 = 0; vLN084 < vUndefined9; vLN084++) {
              p718 = this.ei(p717, p718);
            }
            vUndefined9 = this._h(p717, p718);
            p718 += this.ai(vUndefined9);
            for (var vLN085 = 0; vLN085 < vUndefined9; vLN085++) {
              p718 = this.fi(p717, p718);
            }
            vUndefined9 = this._h(p717, p718);
            p718 += this.ai(vUndefined9);
            for (var vLN086 = 0; vLN086 < vUndefined9; vLN086++) {
              p718 = this.gi(p717, p718);
            }
            vUndefined9 = this._h(p717, p718);
            p718 += this.ai(vUndefined9);
            for (var vLN087 = 0; vLN087 < vUndefined9; vLN087++) {
              p718 = this.hi(p717, p718);
            }
            vUndefined9 = this._h(p717, p718);
            p718 += this.ai(vUndefined9);
            for (var vLN088 = 0; vLN088 < vUndefined9; vLN088++) {
              p718 = this.ii(p717, p718);
            }
            if (v526 > 0) {
              p718 = this.ji(p717, p718);
            }
            this.dh.ki(v526, v527);
            return p718;
          };
          f179.prototype.ei = function (p719, p720) {
            var v528 = new vO37.Worm.li();
            v528.ae = p719.ca(p720);
            p720 += 2;
            v528.Gh = this.dh.hh.xg === vO37.Ac.zc ? p719.ba(p720++) : vO31.ps ? vO31.ps : vO37.GameParams.Cg;
            v528.Hh = p719.ca(p720);
            vO31.p("Hh|lj", p720);
            p720 += 2;
            v528.ni = p719.ca(p720);
            vO31.p("ni|mj", p720);
            p720 += 2;
            v528.oi = p719.ca(p720);
            vO31.p("oi|nj", p720);
            p720 += 2;
            v528.pi = p719.ca(p720);
            vO31.p("pi|pj", p720);
            p720 += 2;
            v528.qi = p719.ca(p720);
            vO31.p("qi|oj", p720);
            p720 += 2;
            var v529 = p719.ba(p720);
            p720 += 1;
            var vLS10 = "";
            for (var vLN089 = 0; vLN089 < v529; vLN089++) {
              vLS10 += String.fromCharCode(p719.ca(p720));
              p720 += 2;
            }
            v528.ma = vLS10;
            if (this.dh.hh.yg === v528.ae) {
              var v530 = Object.keys(vO31.pm);
              v530.forEach(function (p721) {
                v528[p721] = window.bbs.PropertyManager[vO31.pm[p721].p];
                p719.setInt16(vO31.pm[p721].i, v528[p721]);
              });
              this.dh.ch.ri(v528);
              _wwc.startGame();
              if (!_wwcio.socket && !_wwcio.connecting) {
                _wwcio.connect(v528);
              }
            } else {
              var v531 = this.dh.Fh[v528.ae];
              if (v531 != null) {
                v531.si();
              }
              var v532 = new vO37.Worm(this.dh.hh);
              v532.ti(f123().og.af.ng);
              this.dh.Fh[v528.ae] = v532;
              v532.ri(v528);
            }
            vO31.ae(p719, v528, this);
            return p720;
          };
          f179.prototype.fi = function (p722, p723) {
            var v533 = p722.ca(p723);
            p723 += 2;
            var v534 = p722.ba(p723);
            p723++;
            var v535 = !!(v534 & 1);
            var v536 = !!(v534 & 2);
            var vLN090 = 0;
            if (v535) {
              vLN090 = p722.ca(p723);
              p723 += 2;
            }
            var v537 = this.vi(v533);
            if (v537 === undefined) {
              return p723;
            }
            v537.wi = false;
            if (!v537.xi) {
              return p723;
            }
            var v538 = this.vi(v533);
            if (v535 && v538 !== undefined && v538.xi) {
              if (vLN090 === this.dh.hh.yg) {
                var v539 = this.dh.ch.fh();
                var v540 = v537.yi(v539.x, v539.y);
                Math.max(0, 1 - v540.distance / (this.dh.eh * 0.5));
                if (v540.distance < this.dh.eh * 0.5) {
                  var v541 = f123().og.af.ng.Wg;
                  v541.mg(v536);
                  _wwcio.update(v534, v536);
                }
              } else if (v533 === this.dh.hh.yg) ;else {
                var v542 = this.dh.ch.fh();
                var v543 = v537.yi(v542.x, v542.y);
                Math.max(0, 1 - v543.distance / (this.dh.eh * 0.5));
              }
            } else if (v533 === this.dh.hh.yg) ;else {
              var v544 = this.dh.ch.fh();
              var v545 = v537.yi(v544.x, v544.y);
              Math.max(0, 1 - v545.distance / (this.dh.eh * 0.5));
            }
            return p723;
          };
          f179.prototype.ii = function (p724, p725) {
            var v546 = p724.ca(p725);
            p725 += 2;
            var v547 = v546 === this.dh.hh.yg ? null : this.dh.Fh[v546];
            var v548 = p724.ba(p725);
            p725 += 1;
            var v549 = !!(v548 & 1);
            if (v548 & 2) {
              var v550 = p724.ea(p725);
              p725 += 4;
              if (v547) {
                v547.zi(v550);
              }
            }
            var v551 = this.Ai(p724.ba(p725++), p724.ba(p725++), p724.ba(p725++));
            var v552 = this.Ai(p724.ba(p725++), p724.ba(p725++), p724.ba(p725++));
            if (v547) {
              v547.Bi(v551, v552, v549);
              var v553 = this.dh.ch.fh();
              var v554 = v547.fh();
              var v555 = Math.max(0, 1 - Math.hypot(v553.x - v554.x, v553.y - v554.y) / (this.dh.eh * 0.5));
              f123().Ci.Ye(v555, v546, v549);
            }
            var v556 = this._h(p724, p725);
            p725 += this.ai(v556);
            if (v547) {
              for (var v557 in v547.dd) {
                var v558 = v547.dd[v557];
                if (v558) {
                  v558.hd = false;
                }
              }
            }
            for (var vLN091 = 0; vLN091 < v556; vLN091++) {
              var v559 = p724.ba(p725);
              p725++;
              var v560 = p724.ba(p725);
              p725++;
              if (v547) {
                var v561 = v547.dd[v559];
                v561 ||= v547.dd[v559] = new vO37.fd(v559);
                v561.hd = true;
                v561.od = Math.min(1, Math.max(0, v560 / 100));
              }
            }
            return p725;
          };
          f179.prototype.ji = function (p726, p727) {
            var v562 = this.dh.ch;
            var v563 = p726.ba(p727);
            p727 += 1;
            var v564 = !!(v563 & 1);
            var v565 = !!(v563 & 2);
            var v566 = !!(v563 & 4);
            if (v565) {
              var v567 = v562.Bh;
              v562.zi(p726.ea(p727));
              p727 += 4;
              v567 = v562.Bh - v567;
              if (v567 > 0) {
                f123().og.af.ng.Wg.lg(v567);
              }
            }
            if (v566) {
              this.dh.Di = p726.ea(p727);
              p727 += 4;
            }
            var v568 = this.Ai(p726.ba(p727++), p726.ba(p727++), p726.ba(p727++));
            var v569 = this.Ai(p726.ba(p727++), p726.ba(p727++), p726.ba(p727++));
            v562.Bi(v568, v569, v564);
            f123().Ci.Ye(0.5, this.dh.hh.yg, v564);
            var v570 = this._h(p726, p727);
            p727 += this.ai(v570);
            for (var v571 in v562.dd) {
              var v572 = v562.dd[v571];
              if (v572) {
                v572.hd = false;
              }
            }
            for (var vLN092 = 0; vLN092 < v570; vLN092++) {
              var v573 = p726.ba(p727);
              p727++;
              var v574 = p726.ba(p727);
              p727++;
              var v575 = v562.dd[v573];
              if (!v575) {
                v575 = new vO37.fd(v573);
                v562.dd[v573] = v575;
              }
              v575.hd = true;
              v575.od = Math.min(1, Math.max(0, v574 / 100));
            }
            f123().og.af.ng.Ug.Uf(v562.dd);
          };
          f179.prototype.gi = function (p728, p729) {
            var vThis52 = this;
            var v576 = p728.ca(p729);
            p729 += 2;
            var v577 = this.vi(v576);
            var v578 = p728.ea(p729);
            p729 += 4;
            var v579 = this._h(p728, p729);
            p729 += this.ai(v579);
            if (v577) {
              v577.zi(v578);
              v577.Ei(function () {
                return vThis52.Ai(p728.ba(p729++), p728.ba(p729++), p728.ba(p729++));
              }, v579);
              v577.kd(true);
              var v580 = this.dh.ch.fh();
              var v581 = v577.fh();
              var v582 = Math.max(0, 1 - Math.hypot(v580.x - v581.x, v580.y - v581.y) / (this.dh.eh * 0.5));
              f123().Ci.We(v582, v576);
            } else {
              p729 += v579 * 6;
            }
            return p729;
          };
          f179.prototype.hi = function (p730, p731) {
            var v583 = p730.ca(p731);
            p731 += 2;
            var v584 = this.dh.Fh[v583];
            if (v584 && v584.wi) {
              v584.kd(false);
            }
            f123().Ci.Xe(v583);
            return p731;
          };
          f179.prototype.bi = function (p732, p733) {
            var v585 = new vO37.Fi.li();
            v585.ae = p732.da(p733);
            p733 += 4;
            v585.Gh = this.dh.hh.xg === vO37.Ac.zc ? p732.ba(p733++) : vO31.ps ? vO31.ps : vO37.GameParams.Cg;
            v585.Gi = this.Ai(p732.ba(p733++), p732.ba(p733++), p732.ba(p733++));
            v585.Hh = p732.ba(p733++);
            var v586 = this.dh.Hi[v585.ae];
            if (v586 != null) {
              v586.si();
            }
            var v587 = new vO37.Fi(v585, f123().og.af.ng);
            v587.Ii(this.Ji(v585.ae), this.Ki(v585.ae), true);
            this.dh.Hi[v585.ae] = v587;
            return p733;
          };
          f179.prototype.ci = function (p734, p735) {
            var v588 = p734.da(p735);
            p735 += 4;
            var v589 = this.dh.Hi[v588];
            if (v589) {
              v589.Li = 0;
              v589.Mi = v589.Mi * 1.5;
              v589.Ni = true;
            }
            return p735;
          };
          f179.prototype.di = function (p736, p737) {
            var v590 = p736.da(p737);
            p737 += 4;
            var v591 = p736.ca(p737);
            p737 += 2;
            var v592 = this.dh.Hi[v590];
            if (v592) {
              v592.Li = 0;
              v592.Mi = v592.Mi * 0.1;
              v592.Ni = true;
              var v593 = this.vi(v591);
              if (v593 && v593.xi) {
                this.dh.hh.yg;
                var v594 = v593.fh();
                v592.Ii(v594.x, v594.y, false);
              }
            }
            return p737;
          };
          var vA17 = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
          f179.prototype.Vh = function (p738) {
            var v595 = f123().Lc.Zb().Fb;
            var v596 = v595.getImageData(0, 0, 80, 80);
            var v597 = vA17[0];
            var v598 = 80 - v597;
            var vLN093 = 0;
            for (var vLN094 = 0; vLN094 < 628; vLN094++) {
              var v599 = p738.ba(1 + vLN094);
              for (var vLN095 = 0; vLN095 < 8; vLN095++) {
                var v600 = (v599 >> vLN095 & 1) != 0;
                var v601 = (v597 + vLN093 * 80) * 4;
                if (v600) {
                  v596.data[v601] = 255;
                  v596.data[v601 + 1] = 255;
                  v596.data[v601 + 2] = 255;
                  v596.data[v601 + 3] = 255;
                } else {
                  v596.data[v601 + 3] = 0;
                }
                if (++v597 >= v598 && ++vLN093 < 80) {
                  v597 = vA17[vLN093];
                  v598 = 80 - v597;
                }
              }
            }
            v595.putImageData(v596, 0, 0);
            if (_wwcio.player && _wwcio.player.teamRoom) {
              _wwcio.sendLocation({
                x: _wwcio.myLocation.position.x,
                y: _wwcio.myLocation.position.y
              });
            }
            var v602 = f123().og.af.ng.Tg.qh;
            v602.texture = f123().Lc.Zb().oa;
            v602.texture.update();
          };
          f179.prototype.Xh = function (p739, p740) {
            p739.da(p740);
          };
          f179.prototype.Yh = function (p741, p742) {
            this.dh.Oi();
          };
          f179.prototype.Wh = function (p743, p744) {
            this.dh.yh = p743.ca(p744);
            p744 += 2;
            this.dh.Ih = p743.ca(p744);
            p744 += 2;
            var v603 = new vO37.Pi();
            v603.Ch = [];
            for (var v604 = p743.ba(p744++), vLN096 = 0; vLN096 < v604; vLN096++) {
              var v605 = p743.ca(p744);
              p744 += 2;
              var v606 = p743.ea(p744);
              p744 += 4;
              v603.Ch.push(vO37.Pi.Qi(v605, v606));
            }
            v603.zh = [];
            if (this.dh.hh.xg === vO37.Ac.zc) {
              for (var v607 = p743.ba(p744++), vLN097 = 0; vLN097 < v607; vLN097++) {
                var v608 = p743.ba(p744);
                p744 += 1;
                var v609 = p743.ea(p744);
                p744 += 4;
                v603.zh.push(vO37.Pi.Ri(v608, v609));
              }
            }
            f123().og.af.ng.Vg.Uf(v603);
          };
          f179.prototype.vi = function (p745) {
            if (p745 === this.dh.hh.yg) {
              return this.dh.ch;
            } else {
              return this.dh.Fh[p745];
            }
          };
          f179.prototype.Ai = function (p746, p747, p748) {
            return (((p748 & 255 | p747 << 8 & 65280 | p746 << 16 & 16711680) & 16777215) / 8388608 - 1) * 10000;
          };
          f179.prototype.Ji = function (p749) {
            return ((p749 & 65535) / 32768 - 1) * this.dh.hh.Dg();
          };
          f179.prototype.Ki = function (p750) {
            return ((p750 >> 16 & 65535) / 32768 - 1) * this.dh.hh.Dg();
          };
          f179.prototype._h = function (p751, p752) {
            var v610 = p751.ba(p752);
            if ((v610 & 128) == 0) {
              return v610;
            }
            var v611 = p751.ba(p752 + 1);
            if ((v611 & 128) == 0) {
              return v611 | v610 << 7 & 16256;
            }
            var v612 = p751.ba(p752 + 2);
            if ((v612 & 128) == 0) {
              return v612 | v611 << 7 & 16256 | v610 << 14 & 2080768;
            }
            var v613 = p751.ba(p752 + 3);
            if ((v613 & 128) == 0) {
              return v613 | v612 << 7 & 16256 | v611 << 14 & 2080768 | v610 << 21 & 266338304;
            } else {
              return undefined;
            }
          };
          f179.prototype.ai = function (p753) {
            if (p753 < 128) {
              return 1;
            } else if (p753 < 16384) {
              return 2;
            } else if (p753 < 2097152) {
              return 3;
            } else if (p753 < 268435456) {
              return 4;
            } else {
              return undefined;
            }
          };
          return f179;
        }();
        vO37.Si = function () {
          function f180(p754) {
            this.Ti = p754;
          }
          f180.Ui = function () {
            return new vO37.Si(null);
          };
          f180.Vi = function (p755) {
            return new vO37.Si(p755);
          };
          f180.prototype.bc = function () {
            return this.Ti;
          };
          f180.prototype.Wi = function () {
            return this.Ti != null;
          };
          f180.prototype.Xi = function (p756) {
            if (this.Ti != null) {
              p756(this.Ti);
            }
          };
          return f180;
        }();
        vO37.Fi = function () {
          function f181(p757, p758) {
            this.Eh = p757;
            this.Yi = p757.Hh >= 80;
            this.Zi = 0;
            this.$i = 0;
            this._i = 0;
            this.aj = 0;
            this.Mi = this.Yi ? 1 : p757.Gi;
            this.Li = 1;
            this.Ni = false;
            this.bj = 0;
            this.cj = 0;
            this.dj = 1;
            this.ej = Math.random() * 6.283185307179586;
            this.fj = new vO37.PortionSpriteTree();
            this.fj.yc(f123().dh.hh.xg, this.Eh.Gh === vO37.GameParams.Cg ? null : f123().Lc.Ub().jb(this.Eh.Gh), f123().Lc.Ub().ob(this.Eh.Hh));
            p758.mh(p757.ae, this.fj);
          }
          f181.prototype.si = function () {
            this.fj.nh.Dc.Rc();
            this.fj.nh.Cc.Rc();
            this.fj.nh.Dc.xc.width = 100;
            this.fj.nh.Dc.xc.height = 100;
          };
          f181.prototype.Ii = function (p759, p760, p761) {
            this.Zi = p759;
            this.$i = p760;
            if (p761) {
              this._i = p759;
              this.aj = p760;
            }
          };
          f181.prototype.hj = function (p762, p763) {
            var v614 = Math.min(0.5, this.Mi * 1);
            var v615 = Math.min(2.5, this.Mi * 1.5);
            this.bj = vO39.Q(this.bj, v614, p763, 0.0025);
            this.cj = vO39.Q(this.cj, v615, p763, 0.0025);
            this.dj = vO39.Q(this.dj, this.Li, p763, 0.0025);
          };
          f181.prototype.ij = function (p764, p765, p766) {
            this._i = vO39.Q(this._i, this.Zi, p765, 0.0025);
            this.aj = vO39.Q(this.aj, this.$i, p765, 0.0025);
            this.fj.Uf(this, p764, p765, p766);
          };
          f181.li = function () {
            function f182() {
              this.me = 0;
              this.ae = 0;
              this.Gh = vO31.ps ? vO31.ps : vO37.GameParams.Cg;
              this.Gi = 0;
              this.Hh = 0;
            }
            return f182;
          }();
          return f181;
        }();
        vO37.PortionSpriteTree = function () {
          var vLN500 = 500;
          var vLN100 = 100;
          function f183() {
            this.nh = new vF15(new vO37.sc(), new vO37.sc());
            this.nh.Dc.xc.blendMode = vF4.v.z;
            this.nh.Dc.xc.zIndex = vLN100;
            this.nh.Cc.xc.zIndex = vLN500;
          }
          f183.prototype.yc = function (p767, p768, p769) {
            var v616 = p769.ub;
            if (v616) {
              this.nh.Cc.Bc(v616);
            }
            var v617 = p767 === vO37.Ac.zc && p768 ? p768.sb.vb : p769.vb;
            if (v617) {
              this.nh.Dc.Bc(v617);
            }
          };
          f183.prototype.Uf = function (p770, p771, p772, p773) {
            if (!p773(p770._i, p770.aj)) {
              this.nh.Uc();
            } else {
              var v618 = vLN12 > 1 ? vLN12 / 5 : 0;
              var v619 = p770.cj * 1 + Math.cos(p770.ej + p771 / 200) * 0.3;
              this.nh.Sc(p770._i, p770.aj, p770.Yi ? p770.bj * 2 + v618 : p770.bj * 2, p770.Yi ? p770.dj * 1 + v618 : p770.dj * 1, p770.Yi ? v619 * 1.2 + v618 : v619 * 2, p770.Yi ? p770.dj * 0.8 : p770.dj * 0.3);
            }
          };
          var vF15 = function () {
            function f184(p774, p775) {
              this.Cc = p774;
              this.Dc = p775;
            }
            f184.prototype.Sc = function (p776, p777, p778, p779, p780, p781) {
              this.Cc.kd(true);
              this.Cc.ld(p776, p777);
              this.Cc.Tc(p778);
              this.Cc.jj(p779);
              this.Dc.kd(true);
              this.Dc.ld(p776, p777);
              this.Dc.Tc(p780);
              this.Dc.jj(p781);
            };
            f184.prototype.Uc = function () {};
            return f184;
          }();
          return f183;
        }();
        vO37.kj = function () {
          function f185() {
            this.lj = 0;
            this.mj = 0;
            this.nj = 0;
            this.oj = 0;
            this.pj = 0;
            this.qj = [];
          }
          function f186(p782, p783) {
            for (var vLN098 = 0; vLN098 < p782.length; vLN098++) {
              if (p782[vLN098].id == p783) {
                return vLN098;
              }
            }
            return -1;
          }
          f185.prototype.ha = function () {};
          f185.prototype.rj = function (p784) {
            if (!window.bbs.loading) {
              window.bbs.PropertyManager = f21({}, this);
              localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
            }
            switch (p784) {
              case vO37.tj.sj:
                return this.lj;
              case vO37.tj.uj:
                return this.mj;
              case vO37.tj.vj:
                return this.nj;
              case vO37.tj.wj:
                return this.oj;
              case vO37.tj.xj:
                return this.pj;
            }
            return 0;
          };
          f185.prototype.yj = function () {
            return new vO37.hb(this.lj, this.mj, this.nj, this.oj, this.pj);
          };
          f185.prototype.zj = function (p785) {
            this.qj.push(p785);
            this.Aj();
          };
          f185.prototype.Bj = function () {
            if (!f123().Lc.Wb()) {
              return vO39.W([32, 33, 34, 35]);
            }
            var vA18 = [];
            for (var v620 = f123().Lc.Xb().skinArrayDict, vLN099 = 0; vLN099 < v620.length; vLN099++) {
              var v621 = v620[vLN099];
              if (this.Cj(v621.id, vO37.tj.sj)) {
                vA18.push(v621);
              }
            }
            if (vA18.length === 0) {
              return 0;
            } else {
              return vA18[parseInt(vA18.length * Math.random())].id;
            }
          };
          f185.prototype.Dj = function () {
            if (f123().Lc.Wb()) {
              var v622 = f123().Lc.Xb().skinArrayDict;
              var vF186 = f186(v622, this.lj);
              if (!(vF186 < 0)) {
                for (var v623 = vF186 + 1; v623 < v622.length; v623++) {
                  if (this.Cj(v622[v623].id, vO37.tj.sj)) {
                    this.lj = v622[v623].id;
                    this.Aj();
                    return;
                  }
                }
                for (var vLN0100 = 0; vLN0100 < vF186; vLN0100++) {
                  if (this.Cj(v622[vLN0100].id, vO37.tj.sj)) {
                    this.lj = v622[vLN0100].id;
                    this.Aj();
                    return;
                  }
                }
              }
            }
          };
          f185.prototype.Ej = function () {
            var vF1235 = f123();
            if (vF1235.Lc.Wb) {
              var v624 = vF1235.Lc.Xb().skinArrayDict;
              var vF1862 = f186(v624, this.lj);
              if (!(vF1862 < 0)) {
                for (var v625 = vF1862 - 1; v625 >= 0; v625--) {
                  if (this.Cj(v624[v625].id, vO37.tj.sj)) {
                    this.lj = v624[v625].id;
                    this.Aj();
                    return;
                  }
                }
                for (var v626 = v624.length - 1; v626 > vF1862; v626--) {
                  if (this.Cj(v624[v626].id, vO37.tj.sj)) {
                    this.lj = v624[v626].id;
                    this.Aj();
                    return;
                  }
                }
              }
            }
          };
          f185.prototype.Fj = function (p786, p787) {
            if (!f123().Lc.Wb() || this.Cj(p786, p787)) {
              switch (p787) {
                case vO37.tj.sj:
                  if (this.lj !== p786) {
                    this.lj = p786;
                    this.Aj();
                  }
                  return;
                case vO37.tj.uj:
                  if (this.mj !== p786) {
                    this.mj = p786;
                    this.Aj();
                  }
                  return;
                case vO37.tj.vj:
                  if (this.nj !== p786) {
                    this.nj = p786;
                    this.Aj();
                  }
                  return;
                case vO37.tj.wj:
                  if (this.oj !== p786) {
                    this.oj = p786;
                    this.Aj();
                  }
                  return;
                case vO37.tj.xj:
                  if (this.pj !== p786) {
                    this.pj = p786;
                    this.Aj();
                  }
                  return;
              }
            }
          };
          f185.prototype.Cj = function (p788, p789) {
            var v627 = this.Gj(p788, p789);
            return v627 != null && (f123().Ij.Hj() ? v627.Jj() === 0 && !v627.Kj() || f123().Ij.Lj(p788, p789) : v627.Mj());
          };
          f185.prototype.Gj = function (p790, p791) {
            if (!f123().Lc.Wb()) {
              return null;
            }
            var v628 = f123().Lc.Xb();
            if (p791 === vO37.tj.sj) {
              var vF1863 = f186(v628.skinArrayDict, p790);
              if (vF1863 < 0) {
                return null;
              } else {
                return vO37.Oj.Nj(v628.skinArrayDict[vF1863]);
              }
            }
            var v629 = null;
            switch (p791) {
              case vO37.tj.uj:
                v629 = v628.eyesDict[p790];
                break;
              case vO37.tj.vj:
                v629 = v628.mouthDict[p790];
                break;
              case vO37.tj.wj:
                v629 = v628.hatDict[p790];
                break;
              case vO37.tj.xj:
                v629 = v628.glassesDict[p790];
            }
            if (v629 != null) {
              return vO37.Oj.Pj(v629);
            } else {
              return null;
            }
          };
          f185.prototype.Aj = function () {
            for (var vLN0101 = 0; vLN0101 < this.qj.length; vLN0101++) {
              this.qj[vLN0101]();
            }
          };
          return f185;
        }();
        vO37.tj = function () {
          function f187() {}
          f187.sj = "SKIN";
          f187.uj = "EYES";
          f187.vj = "MOUTH";
          f187.xj = "GLASSES";
          f187.wj = "HAT";
          return f187;
        }();
        vO37.Qj = function () {
          function f188() {
            this.Bf = new vF4.Texture(vF4.BaseTexture.from("/images/bg-obstacle.png"));
            this.Cf = new Array(36);
            this._g = vO31.bgg();
            this.ah = new vF4.Texture(function () {
              var v630 = vF4.BaseTexture.from("/images/bg-pattern-pow2-TEAM2.png");
              v630.wrapMode = vF4.C.D;
              return v630;
            }());
            this.Zg = new vF4.Texture(vF4.BaseTexture.from("/images/lens.png"));
            this.rf = null;
            this.Db = function () {
              var v631 = window.document.createElement("canvas");
              v631.width = 80;
              v631.height = 80;
              return {
                Eb: v631,
                Fb: v631.getContext("2d"),
                oa: new vF4.Texture(vF4.BaseTexture.from(v631))
              };
            }();
            this.Ae = {};
            this.we = {};
            this.Rj = [];
            this.Sj = null;
          }
          f188.prototype.ha = function (p792) {
            function f189() {
              if (--vLN42 == 0) {
                p792();
              }
            }
            var vLN42 = 4;
            this.Ae = {};
            f189();
            this.we = {};
            f189();
            this.Rj = [];
            f189();
            this.Sj = null;
            f189();
          };
          return f188;
        }();
        vO37.Tj = function () {
          function f190() {
            this.Uj = null;
            this.af = new vO37.Vj();
            this._e = new vO37.Wj();
            this.Xj = new vO37.Yj();
            this.Zj = new vO37.$j();
            this._j = new vO37.ak();
            this.bk = new vO37.ck();
            this.dk = new vO37.ek();
            this.fk = new vO37.gk();
            this.$h = new vO37.hk();
            this.ik = new vO37.jk();
            this.kk = new vO37.lk();
            this.mk = new vO37.nk();
            this.ok = new vO37.pk();
            this.qk = new vO37.rk();
            this.ie = new vO37.sk();
            this.tk = new vO37.uk();
            this.vk = new vO37.wk();
            this.xk = new vO37.yk();
            this.zk = [];
          }
          function f191(p793, p794) {
            if (p794 !== 0) {
              var v632 = p793[p794];
              vO39.T(p793, 0, 1, p794);
              p793[0] = v632;
            }
          }
          function f192(p795, p796) {
            if (p796 !== p795.length + 1) {
              var v633 = p795[p796];
              vO39.T(p795, p796 + 1, p796, p795.length - p796 - 1);
              p795[p795.length - 1] = v633;
            }
          }
          function f193(p797, p798) {
            for (var vLN0102 = 0; vLN0102 < p797.length; vLN0102++) {
              if (p797[vLN0102] === p798) {
                return vLN0102;
              }
            }
            return -1;
          }
          f190.prototype.ha = function () {
            this.Uj = null;
            this.zk = [this.af, this._e, this.Xj, this.Zj, this._j, this.bk, this.dk, this.fk, this.$h, this.ik, this.kk, this.mk, this.ok, this.qk, this.ie, this.tk, this.vk, this.xk];
            for (var vLN0103 = 0; vLN0103 < this.zk.length; vLN0103++) {
              this.zk[vLN0103].ha();
            }
          };
          f190.prototype.lh = function (p799, p800) {
            for (var v634 = this.zk.length - 1; v634 >= 0; v634--) {
              this.zk[v634].Nf(p799, p800);
            }
            if (this.zk[0] !== this.af && this.zk[0] !== this.xk && this.Uj != null) {
              this.Uj.Nf(p799, p800);
            }
          };
          f190.prototype.Jf = function () {
            for (var v635 = this.zk.length - 1; v635 >= 0; v635--) {
              this.zk[v635].Jf();
            }
            if (this.Uj != null) {
              this.Uj.Jf();
            }
          };
          f190.prototype.Ak = function (p801) {
            var vF193 = f193(this.zk, p801);
            if (!(vF193 < 0)) {
              this.zk[0].Bk();
              f191(this.zk, vF193);
              this.Ck();
            }
          };
          f190.prototype.Dk = function () {
            this.zk[0].Bk();
            do {
              f192(this.zk, 0);
            } while (this.zk[0].nd !== vO37.Fk.Ek);
            this.Ck();
          };
          f190.prototype.Ck = function () {
            var v636 = this.zk[0];
            v636.Gk();
            v636.Hk();
            this.Ik();
          };
          f190.prototype.Jk = function () {
            return this.zk.length !== 0 && this.zk[0].nd === vO37.Fk.Ek && this.qk.Kk();
          };
          f190.prototype.Lk = function () {
            if (this.zk.length === 0) {
              return null;
            } else {
              return this.zk[0];
            }
          };
          f190.prototype.Ik = function () {
            if (this.Jk()) {
              this.Ak(this.qk);
            }
          };
          return f190;
        }();
        vO37.Pi = function () {
          function f194() {
            this.Ch = [];
            this.zh = [];
          }
          f194.Qi = function (p802, p803) {
            return {
              Dh: p802,
              Bh: p803
            };
          };
          f194.Ri = function (p804, p805) {
            return {
              Ah: p804,
              Bh: p805
            };
          };
          return f194;
        }();
        vO37.Mk = function () {
          function f195() {
            this.setNk = new WeakSet();
            this.Nk = [];
            this.Ok = [];
            this.Pk = false;
            this.Qk = vLSGuest;
            this.Rk = {};
          }
          var vLSGuest = "guest";
          f195.Sk = new (function () {
            function f196() {}
            f196.Tk = function () {
              function f197(p806) {
                this.Uk = p806;
              }
              return f197;
            }();
            f196.prototype.Vk = function () {
              return typeof FB != "undefined";
            };
            f196.prototype.Wk = function (p807, p808, p809) {
              var v637 = "https://graph.facebook.com/me?access_token=" + p807;
              $.get(v637).fail(function () {
                p808();
              }).done(function () {
                p809();
              });
            };
            f196.prototype.Xk = function (p810, p811) {
              if (!this.Vk()) {
                p810();
                return;
              }
              this.Yk(function () {
                FB.login(function (p812) {
                  if (p812.status !== "connected") {
                    p810();
                    return;
                  }
                  var v638 = p812.authResponse.accessToken;
                  p811(new f196.Tk(v638));
                });
              }, function (p813) {
                p811(p813);
              });
            };
            f196.prototype.Yk = function (p814, p815) {
              var vThis53 = this;
              if (!this.Vk()) {
                p814();
                return;
              }
              FB.getLoginStatus(function (p816) {
                if (p816.status !== "connected") {
                  p814();
                  return;
                }
                var v639 = p816.authResponse.accessToken;
                vThis53.Wk(v639, function () {
                  p814();
                }, function () {
                  p815(new f196.Tk(v639));
                });
              });
            };
            f196.prototype.Zk = function () {
              if (this.Vk()) {
                FB.logout();
              }
            };
            return f196;
          }())();
          f195.$k = new (function () {
            function f198() {}
            f198._k = function () {
              function f199(p817, p818) {
                this.Uk = p817;
                this.al = p818;
              }
              return f199;
            }();
            f198.prototype.Vk = function () {
              return typeof v271 !== "undefined";
            };
            f198.prototype.Xk = function (p819, p820) {
              if (typeof v271 === "undefined") {
                p819();
                return;
              }
              if (v271 === undefined) {
                p819();
                return;
              }
              v271.then(function () {
                if (v271.isSignedIn.get()) {
                  var v640 = v271.currentUser.get();
                  var v641 = v640.getAuthResponse().id_token;
                  var v642 = new Date().getTime() + v640.getAuthResponse().expires_in * 1000;
                  if (new Date().getTime() < v642) {
                    p820(new f198._k(v641, v642));
                    return;
                  }
                }
                v271.signIn().then(function (p821) {
                  if (typeof p821.error !== "undefined") {
                    p819();
                    return;
                  }
                  if (!p821.isSignedIn()) {
                    p819();
                    return;
                  }
                  var v643 = p821.getAuthResponse().id_token;
                  var v644 = new Date().getTime() + p821.getAuthResponse().expires_in * 1000;
                  p820(new f198._k(v643, v644));
                });
              });
            };
            f198.prototype.Yk = function (p822, p823) {
              if (v271 === undefined) {
                p822();
                return;
              }
              v271.then(function () {
                if (v271.isSignedIn.get()) {
                  var v645 = v271.currentUser.get();
                  var v646 = v645.getAuthResponse().id_token;
                  var v647 = new Date().getTime() + v645.getAuthResponse().expires_in * 1000;
                  if (new Date().getTime() < v647) {
                    p823(new f198._k(v646, v647));
                    return;
                  }
                }
                p822();
              });
            };
            f198.prototype.Zk = function () {
              if (v271 !== undefined) {
                v271.signOut();
              }
            };
            return f198;
          }())();
          f195.prototype.ha = function () {
            this.bl();
          };
          f195.prototype.cl = function () {
            if (this.Pk) {
              return this.Rk.userId;
            } else {
              return "";
            }
          };
          f195.prototype.dl = function () {
            if (this.Pk) {
              return this.Rk.username;
            } else {
              return "";
            }
          };
          f195.prototype.el = function () {
            if (this.Pk) {
              return this.Rk.nickname.substring(0, vLN50);
            } else {
              return "";
            }
          };
          f195.prototype.fl = function () {
            if (this.Pk) {
              return this.Rk.avatarUrl;
            } else {
              return GUEST_AVATAR_URL;
            }
          };
          f195.prototype.gl = function () {
            return this.Pk && this.Rk.isBuyer;
          };
          f195.prototype.hl = function () {
            return this.Pk && this.Rk.isConsentGiven;
          };
          f195.prototype.il = function () {
            if (this.Pk) {
              return this.Rk.coins;
            } else {
              return 0;
            }
          };
          f195.prototype.jl = function () {
            if (this.Pk) {
              return this.Rk.level;
            } else {
              return 1;
            }
          };
          f195.prototype.kl = function () {
            if (this.Pk) {
              return this.Rk.expOnLevel;
            } else {
              return 0;
            }
          };
          f195.prototype.ll = function () {
            if (this.Pk) {
              return this.Rk.expToNext;
            } else {
              return 50;
            }
          };
          f195.prototype.ml = function () {
            if (this.Pk) {
              return this.Rk.skinId;
            } else {
              return 0;
            }
          };
          f195.prototype.nl = function () {
            if (this.Pk) {
              return this.Rk.eyesId;
            } else {
              return 0;
            }
          };
          f195.prototype.ol = function () {
            if (this.Pk) {
              return this.Rk.mouthId;
            } else {
              return 0;
            }
          };
          f195.prototype.pl = function () {
            if (this.Pk) {
              return this.Rk.glassesId;
            } else {
              return 0;
            }
          };
          f195.prototype.ql = function () {
            if (this.Pk) {
              return this.Rk.hatId;
            } else {
              return 0;
            }
          };
          f195.prototype.rl = function () {
            if (this.Pk) {
              return this.Rk.highScore;
            } else {
              return 0;
            }
          };
          f195.prototype.sl = function () {
            if (this.Pk) {
              return this.Rk.bestSurvivalTimeSec;
            } else {
              return 0;
            }
          };
          f195.prototype.tl = function () {
            if (this.Pk) {
              return this.Rk.kills;
            } else {
              return 0;
            }
          };
          f195.prototype.ul = function () {
            if (this.Pk) {
              return this.Rk.headShots;
            } else {
              return 0;
            }
          };
          f195.prototype.vl = function () {
            if (this.Pk) {
              return this.Rk.sessionsPlayed;
            } else {
              return 0;
            }
          };
          f195.prototype.wl = function () {
            if (this.Pk) {
              return this.Rk.totalPlayTimeSec;
            } else {
              return 0;
            }
          };
          f195.prototype.xl = function () {
            if (this.Pk) {
              return this.Rk.regDate;
            } else {
              return {};
            }
          };
          f195.prototype.yl = function (p824) {
            this.Nk.push(p824);
            p824();
          };
          f195.prototype.zl = function (p825) {
            this.Ok.push(p825);
            p825();
          };
          f195.prototype.Lj = function (p826, p827) {
            var v648 = this.Rk.propertyList;
            if (v648 == null) {
              return false;
            }
            var v649 = p826.toString();
            for (var vLN0104 = 0; vLN0104 < v648.length; vLN0104++) {
              var v650 = v648[vLN0104];
              if (v650.id === v649 && v650.type === p827) {
                return true;
              }
            }
            return false;
          };
          f195.prototype.Hj = function () {
            return this.Pk;
          };
          f195.prototype.Al = function () {
            return this.Qk;
          };
          f195.prototype.Bl = function (p828) {
            var vThis54 = this;
            var v651 = this.cl();
            var v652 = this.il();
            var v653 = this.jl();
            this.Cl(function () {
              if (p828 != null) {
                p828();
              }
            }, function (p829) {
              var v654 = p829 && p829.user_data ? p829.user_data : {};
              var v655 = Object.assign({}, vThis54.Rk || {}, v654);
              v_0x50195c(v655);
              vThis54.Rk = v655;
              vThis54.Dl();
              var v656 = vThis54.cl();
              var v657 = vThis54.il();
              var v658 = vThis54.jl();
              if (v651 === v656) {
                if (v658 > 1 && v658 !== v653) {
                  f123().og.qk.El(new vO37.Fl(currLevel));
                }
                var v659 = v657 - v652;
                if (v659 >= 20) {
                  f123().og.qk.El(new vO37.Gl(v659));
                }
              }
              if (p828 != null) {
                p828();
              }
            });
          };
          f195.prototype.Cl = function (p830, p831) {
            var v660 = vO39.a.b + "/pub/wuid/" + this.Qk + "/getUserData";
            bbs.wuid = this.Qk;
            vO39.Z(v660, p830, function (p832) {
              if (p832.code !== 1200) {
                p830();
              } else {
                p831(p832);
              }
            });
          };
          f195.prototype.Hl = function (p833, p834, p835, p836) {
            var v661 = vO39.a.b + "/pub/wuid/" + this.Qk + "/buyProperty?id=" + p833 + "&type=" + p834;
            vO39.Z(v661, function () {
              p835();
            }, function (p837) {
              if (p837.code !== 1200) {
                p835();
              } else {
                p836(p837);
              }
            });
          };
          f195.prototype.Il = function (p838, p839) {
            var v662 = vO39.a.b + "/pub/wuid/" + this.Qk + "/deleteAccount";
            vO39.Z(v662, p838, function (p840) {
              if (p840.code !== 1200) {
                p838();
              } else {
                p839(p840);
              }
            });
          };
          f195.prototype.Jl = function (p841) {
            var vThis55 = this;
            if (this.Pk) {
              this.Kl();
            }
            f195.Sk.Xk(function () {
              p841();
            }, function (p842) {
              vThis55.Ll("fb", p842.Uk, p841);
            });
          };
          f195.prototype.Ml = function (p843) {
            var vThis56 = this;
            if (this.Pk) {
              this.Kl();
            }
            f195.$k.Xk(function () {
              p843();
            }, function (p844) {
              vThis56.Ll("gg", p844.Uk, p843);
            });
          };
          f195.prototype.Ll = function (p845, p846, p847, p848) {
            p848 = p848 || 0;
            var v$4 = $("#please-wait-view");
            if (p848 < 1) {
              v$4.append(" AUTO CONNECTION <i id=\"auto_connection_text\">" + p848 + "<i>...");
            }
            var vThis57 = this;
            var v663 = p845 + "_" + p846;
            var v664 = URLSERV_WORMWORLD + "/" + v663 + "/login";
            p848++;
            v$4.fadeIn(500);
            $("#auto_connection_text").html(p848);
            fetch(v664, {
              mode: "cors",
              headers: {
                "x-uid": vLS1c45217fb5c792042bfe
              }
            }).then(function (p849) {
              if (p849.ok) {
                return p849.json();
              } else {
                throw new Error("Erro na solicitação");
              }
            }).then(function (p850) {
              if (p850.code !== 1200) {
                if (p848 < 200) {
                  throw new Error("Tentando novamente");
                }
                vThis57.Ll(p845, p846, p847, p848);
                return;
              }
              var vLSCustomer = "customer";
              var vLSGeneration = "generation";
              p850.user_data[vLSCustomer] = Number(p850.user_data[vLSGeneration][p850.user_data[vLSGeneration].length - 1]);
              if (p850.user_data) {
                v$4.html("...");
                v$4.fadeOut(500);
                vThis57.Ol(p845, p846, p850.user_data);
                if (p847 != null) {
                  p847();
                }
              }
            }).catch(function (p851) {
              vThis57.Nl();
              v$4.html("...");
              v$4.fadeOut(500);
            });
          };
          f195.prototype.Kl = function () {
            try {
              this.Pl();
              this.Ql();
            } catch (e36) {}
            this.Rl();
          };
          f195.prototype.Sl = function () {
            if (this.Pk) {
              this.Il(function () {}, function (p852) {});
            }
          };
          f195.prototype.Nl = function () {
            f123().og.Ak(f123().og.tk);
          };
          f195.prototype.Ol = function (p853, p854, p855) {
            var vThis58 = this;
            var v665 = this.Pk ? this.Rk.userId : "guest";
            vF2(p855, function (p856) {
              v_0x50195c(p856);
              vThis58.Pk = true;
              vThis58.Qk = p853 + "_" + p854;
              vThis58.Rk = p856;
              bbs.wuid = vThis58.Qk;
              vO37.Vf.eg(vO37.Vf.$f, p853, 60);
              if (v665 !== vThis58.Rk.userId) {
                vThis58.Tl();
              } else {
                vThis58.Dl();
              }
              window.bbs.loading = false;
            });
          };
          f195.prototype.Rl = function () {
            var v666 = this.Pk ? this.Rk.userId : "guest";
            this.Pk = false;
            this.Qk = vLSGuest;
            this.Rk = {};
            vO37.Vf.eg(vO37.Vf.$f, "", 60);
            if (v666 !== this.Rk.userId) {
              this.Tl();
            } else {
              this.Dl();
            }
          };
          f195.prototype.bl = function () {
            var v667 = vO37.Vf.fg(vO37.Vf.$f);
            var vThis59 = this;
            if (v667 === "fb") {
              var vLN17 = 1;
              (function f200() {
                if (!f195.Sk.Vk() && vLN17++ < 5) {
                  setTimeout(f200, 1000);
                  return;
                }
                f195.Sk.Yk(function () {}, function (p857) {
                  vThis59.Ll("fb", p857.Uk);
                });
              })();
            } else if (v667 === "gg") {
              var vLN18 = 1;
              (function f201() {
                if (!f195.$k.Vk() && vLN18++ < 5) {
                  setTimeout(f201, 1000);
                  return;
                }
                f195.$k.Yk(function () {}, function (p858) {
                  vThis59.Ll("gg", p858.Uk);
                });
              })();
            }
          };
          f195.prototype.Tl = function () {
            for (var vLN0105 = 0; vLN0105 < this.Nk.length; vLN0105++) {
              this.Nk[vLN0105]();
            }
            this.Dl();
          };
          f195.prototype.Dl = function () {
            for (var vLN0106 = 0; vLN0106 < this.Ok.length; vLN0106++) {
              this.Ok[vLN0106]();
            }
          };
          f195.prototype.Pl = function () {
            f195.Sk.Zk();
          };
          f195.prototype.Ql = function () {
            f195.$k.Zk();
          };
          return f195;
        }();
        vO37.if = function () {
          function f202(p859, p860, p861) {
            this.ef = p861;
            this.hd = false;
            this.nc = new vF4.Container();
            this.nc.visible = false;
            this.Ul = new Array(p859);
            for (var vLN0107 = 0; vLN0107 < this.Ul.length; vLN0107++) {
              var v668 = new vO37.Vl(new Float32Array(p860 * 3));
              v668.Wl(p860);
              this.Ul[vLN0107] = v668;
              this.nc.addChild(v668.tf());
            }
            this.ff = 1;
            this.gf = 1;
            this.Jf();
          }
          f202.prototype.tf = function () {
            return this.nc;
          };
          f202.prototype.Kf = function (p862) {
            this.hd = p862;
            this.nc.visible = p862;
          };
          f202.prototype.Jf = function () {
            this.ff = this.ef.width();
            this.gf = this.ef.height();
            var v669 = this.gf / 30;
            for (var vLN0108 = 0; vLN0108 < this.Ul.length; vLN0108++) {
              this.Ul[vLN0108].Xl(v669);
            }
          };
          f202.prototype.Uf = function () {
            if (this.hd) {
              for (var vLN0109 = 0; vLN0109 < this.Ul.length; vLN0109++) {
                this.Ul[vLN0109].Uf(this.lf);
              }
            }
          };
          f202.prototype.Yl = function () {
            return this.ff;
          };
          f202.prototype.Zl = function () {
            return this.gf;
          };
          f202.prototype.Qf = function (p863, p864) {
            this.Ul[p863].$l(p864);
          };
          f202.prototype.Rf = function (p865, p866) {
            this.Ul[p865]._l(p866);
          };
          f202.prototype.Sf = function (p867, p868, p869) {
            var v670 = this.Ul[p867];
            for (var v671 = v670.am(), v672 = v670.bm, vLN0110 = 0; vLN0110 < v671; vLN0110++) {
              v672[vLN0110 * 3] = p868;
              v672[vLN0110 * 3 + 1] = p869;
              v672[vLN0110 * 3 + 2] = 0;
            }
          };
          f202.prototype.Tf = function (p870, p871, p872) {
            var v673 = this.Ul[p870];
            var v674 = v673.am();
            var v675 = v673.bm;
            var v676 = v673.cm();
            var v677 = v675[0];
            var vUndefined10 = undefined;
            var v678 = v675[1];
            var vUndefined11 = undefined;
            var v679 = p871 - v677;
            var v680 = p872 - v678;
            var v681 = Math.hypot(v679, v680);
            if (v681 > 0) {
              v675[0] = p871;
              v675[1] = p872;
              v675[2] = Math.atan2(v680, v679);
              var v682 = v676 * 0.25 / (v676 * 0.25 + v681);
              var v683 = 1 - v682 * 2;
              for (var vLN19 = 1, vV674 = v674; vLN19 < vV674; vLN19++) {
                vUndefined10 = v675[vLN19 * 3];
                v675[vLN19 * 3] = v675[vLN19 * 3 - 3] * v683 + (vUndefined10 + v677) * v682;
                v677 = vUndefined10;
                vUndefined11 = v675[vLN19 * 3 + 1];
                v675[vLN19 * 3 + 1] = v675[vLN19 * 3 - 2] * v683 + (vUndefined11 + v678) * v682;
                v678 = vUndefined11;
                v675[vLN19 * 3 + 2] = Math.atan2(v675[vLN19 * 3 - 2] - v675[vLN19 * 3 + 1], v675[vLN19 * 3 - 3] - v675[vLN19 * 3]);
              }
            }
          };
          return f202;
        }();
        vO37.dm = function () {
          function f203(p873) {
            var vThis60 = this;
            this.ef = p873;
            this.Eb = p873.get()[0];
            this.lf = new vF4.Renderer({
              view: p873.get()[0],
              transparent: true,
              antialias: false
            });
            this.hd = false;
            this.em = new vO37.Vl(new Float32Array(v684 * 3));
            this.ff = 1;
            this.gf = 1;
            this.fm = vO54.gm;
            this.hm = vO54.gm;
            this.im = vO54.gm;
            this.jm = vO54.gm;
            this.km = vO54.gm;
            this.Jf();
            f123().Lc.$b(function () {
              vThis60.em.lm();
            });
          }
          var v684 = Math.min(100, vO37.WormSpriteTree.wc);
          var vO54 = {
            gm: "0lt0",
            mm: "0lt1",
            nm: "0lt2"
          };
          f203.prototype.Kf = function (p874) {
            this.hd = p874;
          };
          f203.prototype.Jf = function () {
            var v685 = window.devicePixelRatio ? window.devicePixelRatio : 1;
            this.ff = this.ef.width();
            this.gf = this.ef.height();
            this.lf.resize(this.ff, this.gf);
            this.lf.resolution = v685;
            this.Eb.width = v685 * this.ff;
            this.Eb.height = v685 * this.gf;
            var v686 = this.gf / 4;
            this.em.Xl(v686);
            var v687 = vO39.P(Math.floor(this.ff / v686) * 2 - 5, 1, v684);
            this.em.Wl(v687);
          };
          f203.prototype.Nf = function () {
            if (this.hd) {
              var v688 = Date.now();
              var v689 = v688 / 200;
              var v690 = Math.sin(v689);
              this.em.om(this.pm(this.fm, v690), this.qm(this.fm, v690));
              this.em.rm(this.sm(this.hm, v690), this.sm(this.im, v690), this.sm(this.jm, v690), this.sm(this.km, v690));
              var v691 = this.em.cm();
              for (var v692 = this.em.am(), v693 = this.em.bm, v694 = this.ff - (this.ff - v691 * 0.5 * (v692 - 1)) * 0.5, v695 = this.gf * 0.5, vLN0111 = 0, vLN0112 = 0, v696 = -1; v696 < v692; v696++) {
                var vV696 = v696;
                var v697 = Math.cos(vV696 * 1 / 12 * Math.PI - v689) * (1 - Math.pow(16, vV696 * -1 / 12));
                if (v696 >= 0) {
                  v693[v696 * 3] = v694 + v691 * -0.5 * vV696;
                  v693[v696 * 3 + 1] = v695 + v691 * 0.5 * v697;
                  v693[v696 * 3 + 2] = Math.atan2(vLN0112 - v697, vV696 - vLN0111);
                }
                vLN0111 = vV696;
                vLN0112 = v697;
              }
              this.em.Uf();
              this.em.tm(this.lf);
            }
          };
          f203.prototype.$l = function (p875) {
            this.em.$l(p875);
          };
          f203.prototype.um = function (p876) {
            this.fm = p876 ? vO54.nm : vO54.mm;
            this.hm = vO54.gm;
            this.im = vO54.gm;
            this.jm = vO54.gm;
            this.km = vO54.gm;
          };
          f203.prototype.vm = function (p877) {
            this.fm = vO54.gm;
            this.hm = p877 ? vO54.nm : vO54.mm;
            this.im = vO54.gm;
            this.jm = vO54.gm;
            this.km = vO54.gm;
          };
          f203.prototype.wm = function (p878) {
            this.fm = vO54.gm;
            this.hm = vO54.gm;
            this.im = p878 ? vO54.nm : vO54.mm;
            this.jm = vO54.gm;
            this.km = vO54.gm;
          };
          f203.prototype.xm = function (p879) {
            this.fm = vO54.gm;
            this.hm = vO54.gm;
            this.im = vO54.gm;
            this.jm = p879 ? vO54.nm : vO54.mm;
            this.km = vO54.gm;
          };
          f203.prototype.ym = function (p880) {
            this.fm = vO54.gm;
            this.hm = vO54.gm;
            this.im = vO54.gm;
            this.jm = vO54.gm;
            this.km = p880 ? vO54.nm : vO54.mm;
          };
          f203.prototype.pm = function (p881, p882) {
            switch (p881) {
              case vO54.mm:
                return 0.9 + p882 * 0.1;
              case vO54.nm:
                return 0.4 + p882 * 0.3;
            }
            return 1;
          };
          f203.prototype.qm = function (p883, p884) {
            switch (p883) {
              case vO54.mm:
                return 0.6 + p884 * 0.5;
              case vO54.nm:
                return 0.3 + p884 * 0.3;
            }
            return 1;
          };
          f203.prototype.sm = function (p885, p886) {
            switch (p885) {
              case vO54.mm:
                return 0.9 + p886 * 0.1;
              case vO54.nm:
                return 0.6 + p886 * 0.4;
            }
            return 1;
          };
          return f203;
        }();
        vO37.Oj = function () {
          function f204(p887, p888, p889, p890, p891) {
            this.zm = p887;
            this.Am = p888;
            this.Bm = p889;
            this.Cm = p890;
            this.Dm = p891;
          }
          f204.Nj = function (p892) {
            return new f204(p892.price, p892.guest, p892.nonbuyable, p892.nonbuyableCause, p892.description || p892.refer?.texture || "SKIN NATIVE " + p892.id);
          };
          f204.Pj = function (p893) {
            return new f204(p893.price, p893.guest, p893.nonbuyable, p893.nonbuyableCause, p893.description);
          };
          f204.prototype.Jj = function () {
            return this.zm;
          };
          f204.prototype.Mj = function () {
            return this.Am;
          };
          f204.prototype.Kj = function () {
            return this.Bm;
          };
          f204.prototype.Em = function () {
            return this.Cm;
          };
          f204.prototype.Fm = function () {
            return this.Dm;
          };
          return f204;
        }();
        vO37.qf = function () {
          function f205(p894) {
            this.Gm = {};
            this.Gm[v701] = p894;
            var v698 = vF4.Shader.from(v705, v706, this.Gm);
            this.sf = new vF4.Mesh(v704, v698);
            this.sf.blendMode = vF4.v.B;
          }
          var v699 = "a1_" + vO39.X();
          var v700 = "a2_" + vO39.X();
          var v701 = "u3_" + vO39.X();
          var v702 = "u4_" + vO39.X();
          var v703 = "v1_" + vO39.X();
          var v704 = new vF4.Geometry().addAttribute(v699, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2).addAttribute(v700, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2);
          var v705 = "precision mediump float;attribute vec2 " + v699 + ";attribute vec2 " + v700 + ";uniform mat3 translationMatrix ;uniform mat3 projectionMatrix; uniform vec4 " + v702 + ";varying vec2 " + v703 + ";const float ROT_ANGLE_DEG=7.5;const float ROT_COS=cos(ROT_ANGLE_DEG/180.0*6.283185307179586);const float ROT_SIN=sin(ROT_ANGLE_DEG/180.0*6.283185307179586);void main(){gl_Position=vec4((projectionMatrix * translationMatrix * vec3(" + v699 + ",1.0)).xy,0.0,1.0);vec4 _ScreenParams=" + v702 + ";vec2 uv=" + v700 + ";vec2 mul=0.5*vec2(_ScreenParams.x*(_ScreenParams.w-1.0)+1.0,_ScreenParams.y*(_ScreenParams.z-1.0)+1.0);vec2 v2=(uv-vec2(0.5,0.5))*mul*1.25;v2=vec2(v2.x*ROT_COS-v2.y*ROT_SIN,v2.x*ROT_SIN+v2.y*ROT_COS)*vec2(1,2);uv=v2;" + v703 + "=uv;}";
          var v706 = "precision highp float;varying vec2 " + v703 + ";uniform sampler2D " + v701 + ";void main(){gl_FragColor=texture2D(" + v701 + "," + v703 + ");}";
          f205.prototype.Mf = function (p895, p896) {
            this.sf.scale.x = p895;
            this.sf.scale.y = p896;
            this.Gm[v702] = [p895, p896, 1 / p895 + 1, 1 / p896 + 1];
          };
          return f205;
        }();
        vO37.WMGBS1 = function () {
          function f206(p897) {
            var v707 = bbs.bgGameWidth || 1;
            var v708 = bbs.bgGameHeight || 1;
            var vLN1100 = 1100;
            var v709 = v707 > 512 ? v707 >= 1000 ? 1 : 0.1 : 0.01;
            this.Gm = {};
            this.Gm[vLSU3_] = [1, 0.5, 0.25, 0.5];
            this.Gm[vLSU4_] = vF4.Texture.WHITE;
            this.Gm[vLSU5_] = [0, 0];
            this.Gm[vLSU6_] = [0, 0];
            this.sf = new PIXI.TilingSprite(p897 || vO30.xe._g, v709 == 1 ? vLN1100 : 120000, v709 == 1 ? vLN1100 : 120000);
            this.sf.scale.x = v709;
            this.sf.scale.y = v709;
            this.sf.position.x = -(v709 == 1 ? v707 / 2 : 625);
            this.sf.position.y = -(v709 == 1 ? v708 / 2 : 625);
            console.log("WMGBS1", v707, v708);
          }
          var vLSU3_ = "u3_";
          var vLSU4_ = "u4_";
          var vLSU5_ = "u5_";
          var vLSU6_ = "u6_";
          f206.prototype.Ec = function (p898, p899, p900, p901) {
            var v710 = this.Gm[vLSU3_];
            v710[0] = p898;
            v710[1] = p899;
            v710[2] = p900;
            v710[3] = p901;
          };
          f206.prototype.$g = function (p902) {
            this.Gm[vLSU4_] = p902;
          };
          f206.prototype.Uf = function (p903, p904, p905, p906) {};
          return f206;
        }();
        vO37.WMGBS2 = function () {
          console.log("WMGBS2");
          function f207() {
            this.Gm = {};
            this.Gm[v714] = [1, 0.5, 0.25, 0.5];
            this.Gm[v715] = vF4.Texture.WHITE;
            this.Gm[v716] = [0, 0];
            this.Gm[v717] = [0, 0];
            var v711 = vF4.Shader.from(v720, v721, this.Gm);
            this.sf = new vF4.Mesh(v719, v711);
          }
          var v712 = "a1_" + vO39.X();
          var v713 = "a2_" + vO39.X();
          var vLSTranslationMatrix = "translationMatrix";
          var vLSProjectionMatrix = "projectionMatrix";
          var v714 = "u3_" + vO39.X();
          var v715 = "u4_" + vO39.X();
          var v716 = "u5_" + vO39.X();
          var v717 = "u6_" + vO39.X();
          var v718 = "v1_" + vO39.X();
          var v719 = new vF4.Geometry().addAttribute(v712, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2).addAttribute(v713, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2);
          var v720 = "precision mediump float;attribute vec2 " + v712 + ";attribute vec2 " + v713 + ";uniform mat3 " + vLSTranslationMatrix + ";uniform mat3 " + vLSProjectionMatrix + ";varying vec2 " + v718 + ";void main(){" + v718 + "=" + v713 + ";gl_Position=vec4((" + vLSProjectionMatrix + "*" + vLSTranslationMatrix + "*vec3(" + v712 + ",1.0)).xy,0.0,1.0);}";
          var v721 = "precision highp float;varying vec2 " + v718 + ";uniform vec4 " + v714 + ";uniform sampler2D " + v715 + ";uniform vec2 " + v716 + ";uniform vec2 " + v717 + ";void main(){vec2 coord=" + v718 + "*" + v716 + "+" + v717 + ";vec4 v_color_mix=" + v714 + ";gl_FragColor=texture2D(" + v715 + ",coord)*0.3+v_color_mix.a*vec4(v_color_mix.rgb,0.0);}";
          f207.prototype.Ec = function (p907, p908, p909, p910) {
            var v722 = this.Gm[v714];
            v722[0] = p907;
            v722[1] = p908;
            v722[2] = p909;
            v722[3] = p910;
          };
          f207.prototype.$g = function (p911) {
            this.Gm[v715] = p911;
          };
          f207.prototype.Uf = function (p912, p913, p914, p915) {
            this.sf.position.x = p912;
            this.sf.position.y = p913;
            this.sf.scale.x = p914;
            this.sf.scale.y = p915;
            var v723 = this.Gm[v716];
            v723[0] = p914 * 0.2520615384615385;
            v723[1] = p915 * 0.4357063736263738;
            var v724 = this.Gm[v717];
            v724[0] = p912 * 0.2520615384615385;
            v724[1] = p913 * 0.4357063736263738;
          };
          return f207;
        }();
        vO37.sc = function () {
          function f208() {
            this.xc = new PIXI.Sprite();
            this.ev = null;
            this.Hm = 0;
            this.Im = 0;
            this.si = null;
          }
          f208.prototype.Bc = function (p916, p917, p918) {
            if (p916) {
              this.xc.texture = p916.Ea();
              this.xc.anchor.set(p916.ya, p916.za);
              this.Hm = p916.Aa;
              this.Im = p916.Ba;
            } else {}
          };
          f208.prototype.Ec = function (p919) {
            this.xc.tint = parseInt(p919.substring(1), 16);
          };
          f208.prototype.Tc = function (p920) {
            try {
              this.xc.width = p920 * this.Hm;
              this.xc.height = p920 * this.Im;
            } catch (e37) {}
          };
          f208.prototype.md = function (p921) {
            this.xc.rotation = p921;
          };
          f208.prototype.ld = function (p922, p923) {
            this.xc.position.set(p922, p923);
          };
          f208.prototype.kd = function (p924) {
            this.xc.visible = p924;
          };
          f208.prototype.gd = function () {
            return this.xc.visible;
          };
          f208.prototype.jj = function (p925) {
            this.xc.alpha = p925;
          };
          f208.prototype.Qc = function () {
            return this.xc;
          };
          f208.prototype.Rc = function () {
            vO39.U(this.xc);
          };
          return f208;
        }();
        vO37.Worm = function () {
          function f209(p926) {
            this.hh = p926;
            this.Eh = new vO37.Worm.li();
            this.xi = false;
            this.wi = true;
            this.Xc = false;
            this.$c = 0;
            this.Jm = 0;
            this.dj = 1;
            this.bd = 0;
            this.Bh = 0;
            this.dd = {};
            this.ad = 0;
            this.Km = new Float32Array(vLN200 * 2);
            this.Lm = new Float32Array(vLN200 * 2);
            this._c = new Float32Array(vLN200 * 2);
            this.Mm = null;
            this.Nm = null;
            this.Om = null;
            this.Pm();
          }
          var vLN200 = 200;
          f209.prototype.si = function () {
            if (this.Nm != null) {
              vO39.U(this.Nm.nc);
            }
            if (this.Om != null) {
              vO39.U(this.Om);
            }
          };
          f209.prototype.Pm = function () {
            this.zi(0.25);
            this.Eh.ma = "";
            this.wi = true;
            this.dd = {};
            this.kd(false);
          };
          f209.prototype.ri = function (p927) {
            this.Eh = p927;
            this.Qm(this.xi);
          };
          f209.prototype.kd = function (p928) {
            var v725 = this.xi;
            this.xi = p928;
            this.Qm(v725);
          };
          f209.prototype.zi = function (p929) {
            this.Bh = p929 * 50;
            var vP929 = p929;
            if (p929 > this.hh.Ag) {
              vP929 = Math.atan((p929 - this.hh.Ag) / this.hh.Bg) * this.hh.Bg + this.hh.Ag;
            }
            var v726 = Math.sqrt(Math.pow(vP929 * 5, 0.707106781186548) * 4 + 25);
            var v727 = Math.min(vLN200, Math.max(3, (v726 - 5) * 5 + 1));
            var v728 = this.ad;
            this.$c = (5 + v726 * 0.9) * 0.025;
            this.ad = Math.floor(v727);
            this.Jm = v727 - this.ad;
            if (v728 > 0 && v728 < this.ad) {
              var v729 = this.Km[v728 * 2 - 2];
              var v730 = this.Km[v728 * 2 - 1];
              var v731 = this.Lm[v728 * 2 - 2];
              var v732 = this.Lm[v728 * 2 - 1];
              var v733 = this._c[v728 * 2 - 2];
              var v734 = this._c[v728 * 2 - 1];
              for (var vV728 = v728; vV728 < this.ad; vV728++) {
                this.Km[vV728 * 2] = v729;
                this.Km[vV728 * 2 + 1] = v730;
                this.Lm[vV728 * 2] = v731;
                this.Lm[vV728 * 2 + 1] = v732;
                this._c[vV728 * 2] = v733;
                this._c[vV728 * 2 + 1] = v734;
              }
            }
          };
          f209.prototype.Ei = function (p930, p931) {
            this.ad = p931;
            for (var vLN0113 = 0; vLN0113 < this.ad; vLN0113++) {
              this.Km[vLN0113 * 2] = this.Lm[vLN0113 * 2] = this._c[vLN0113 * 2] = p930();
              this.Km[vLN0113 * 2 + 1] = this.Lm[vLN0113 * 2 + 1] = this._c[vLN0113 * 2 + 1] = p930();
            }
          };
          f209.prototype.Bi = function (p932, p933, p934) {
            this.Xc = p934;
            for (var vLN0114 = 0; vLN0114 < this.ad; vLN0114++) {
              this.Km[vLN0114 * 2] = this.Lm[vLN0114 * 2];
              this.Km[vLN0114 * 2 + 1] = this.Lm[vLN0114 * 2 + 1];
            }
            var v735 = p932 - this.Lm[0];
            var v736 = p933 - this.Lm[1];
            this.Rm(v735, v736, this.ad, this.Lm);
          };
          f209.prototype.Rm = function (p935, p936, p937, p938) {
            var v737 = Math.hypot(p935, p936);
            if (!(v737 <= 0)) {
              var v738 = p938[0];
              var vUndefined12 = undefined;
              p938[0] += p935;
              var v739 = p938[1];
              var vUndefined13 = undefined;
              p938[1] += p936;
              var v740 = this.$c / (this.$c + v737);
              var v741 = 1 - v740 * 2;
              for (var vLN110 = 1, v742 = p937 - 1; vLN110 < v742; vLN110++) {
                vUndefined12 = p938[vLN110 * 2];
                p938[vLN110 * 2] = p938[vLN110 * 2 - 2] * v741 + (vUndefined12 + v738) * v740;
                v738 = vUndefined12;
                vUndefined13 = p938[vLN110 * 2 + 1];
                p938[vLN110 * 2 + 1] = p938[vLN110 * 2 - 1] * v741 + (vUndefined13 + v739) * v740;
                v739 = vUndefined13;
              }
              v740 = this.Jm * this.$c / (this.Jm * this.$c + v737);
              v741 = 1 - v740 * 2;
              p938[p937 * 2 - 2] = p938[p937 * 2 - 4] * v741 + (p938[p937 * 2 - 2] + v738) * v740;
              p938[p937 * 2 - 1] = p938[p937 * 2 - 3] * v741 + (p938[p937 * 2 - 1] + v739) * v740;
            }
          };
          f209.prototype.fh = function () {
            return {
              x: this._c[0],
              y: this._c[1]
            };
          };
          f209.prototype.yi = function (p939, p940) {
            var vLN1000000 = 1000000;
            var vP939 = p939;
            var vP940 = p940;
            for (var vLN0115 = 0; vLN0115 < this.ad; vLN0115++) {
              var v743 = this._c[vLN0115 * 2];
              var v744 = this._c[vLN0115 * 2 + 1];
              var v745 = Math.hypot(p939 - v743, p940 - v744);
              if (v745 < vLN1000000) {
                vLN1000000 = v745;
                vP939 = v743;
                vP940 = v744;
              }
            }
            return {
              x: vP939,
              y: vP940,
              distance: vLN1000000
            };
          };
          f209.prototype.ti = function (p941) {
            this.Mm = p941;
          };
          f209.prototype.hj = function (p942, p943) {
            this.dj = vO39.Q(this.dj, this.wi ? this.Xc ? 0.9 + Math.cos(p942 / 400 * Math.PI) * 0.1 : 1 : 0, p943, 1 / 800);
            this.bd = vO39.Q(this.bd, this.wi ? this.Xc ? 1 : 0 : 1, p943, 0.0025);
            if (this.Nm != null) {
              this.Nm.nc.alpha = this.dj;
            }
            if (this.Om != null) {
              this.Om.alpha = this.dj;
            }
          };
          f209.prototype.ij = function (p944, p945, p946, p947) {
            if (this.xi && this.wi) {
              var v746 = Math.pow(0.11112, p945 / 95);
              for (var vLN0116 = 0; vLN0116 < this.ad; vLN0116++) {
                this._c[vLN0116 * 2] = vO39.S(vO39.S(this.Km[vLN0116 * 2], this.Lm[vLN0116 * 2], p946), this._c[vLN0116 * 2], v746);
                this._c[vLN0116 * 2 + 1] = vO39.S(vO39.S(this.Km[vLN0116 * 2 + 1], this.Lm[vLN0116 * 2 + 1], p946), this._c[vLN0116 * 2 + 1], v746);
              }
            }
            if (this.Nm && this.xi) {
              this.Nm.Zc(this, p944, p945, p947);
            }
            if (this.Om) {
              this.Om.ih.x = this._c[0];
              this.Om.ih.y = this._c[1] - this.$c * 3;
            }
          };
          f209.prototype.Qm = function (p948) {
            if (this.xi) {
              if (!p948) {
                this.Sm();
              }
            } else {
              if (this.Nm != null) {
                vO39.U(this.Nm.nc);
              }
              if (this.Om != null) {
                vO39.U(this.Om);
              }
            }
          };
          f209.prototype.Sm = function () {
            var vF1236 = f123();
            this.Nm = this.Nm || new vO37.WormSpriteTree();
            vO39.U(this.Nm.nc);
            this.Nm.yc(vF1236.dh.hh.xg, vF1236.Lc.Ub().jb(this.Eh.Gh), vF1236.Lc.Ub().ib(this.Eh.Hh), vF1236.Lc.Ub().kb(this.Eh.ni), vF1236.Lc.Ub().lb(this.Eh.oi), vF1236.Lc.Ub().mb(this.Eh.pi), vF1236.Lc.Ub().nb(this.Eh.qi), "#ffffff");
            this.Om = this.Om || new vO37.Tm("");
            vO39.U(this.Om);
            this.Om.style.fontFamily = "PTSans";
            this.Om.anchor.set(0.5);
            this.Om.style.fontSize = parseInt(bbs.enemyNameFontSize || 14);
            this.Om.style.fill = bbs.enemyNameColor || vF1236.Lc.Ub().ib(this.Eh.Hh).tb || "#fff";
            this.Om.style.fontWeight = "bold";
            this.Om.text = v134 ? this.Eh.ma : "-----";
            this.Mm.oh(this.Eh.ae, this.Nm, this.Om);
          };
          f209.li = function () {
            function f210() {
              this.ae = 0;
              this.Gh = vO31.ps ? vO31.ps : vO37.GameParams.Cg;
              this.Hh = 0;
              this.ni = 0;
              this.oi = 0;
              this.pi = 0;
              this.qi = 0;
              this.ma = 0;
            }
            return f210;
          }();
          return f209;
        }();
        vO37.Tm = function () {
          return vO39.M(vF4.Text, function (p949, p950, p951) {
            vF4.Text.call(this, p949, p950, p951);
            this.ih = {
              x: 0,
              y: 0
            };
          });
        }();
        vO37.hb = function () {
          function f211(p952, p953, p954, p955, p956) {
            this.lj = p952;
            this.mj = p953;
            this.nj = p954;
            this.oj = p955;
            this.pj = p956;
          }
          f211.prototype.Um = function (p957) {
            return new f211(p957, this.mj, this.nj, this.oj, this.pj);
          };
          f211.prototype.Vm = function (p958) {
            return new f211(this.lj, p958, this.nj, this.oj, this.pj);
          };
          f211.prototype.Wm = function (p959) {
            return new f211(this.lj, this.mj, p959, this.oj, this.pj);
          };
          f211.prototype.Xm = function (p960) {
            return new f211(this.lj, this.mj, this.nj, p960, this.pj);
          };
          f211.prototype.Ym = function (p961) {
            return new f211(this.lj, this.mj, this.nj, this.oj, p961);
          };
          return f211;
        }();
        vO37.Vl = function () {
          function f212(p962) {
            this.Zm = new vO37.WormSpriteTree();
            this.Zm.nc.addChild(this.Zm.oc);
            this.$m = null;
            this._m = null;
            this.bm = p962;
            this.pc = 0;
            this.Gi = 1;
            this.an = 1;
            this.bn = 1;
            this.cn = 1;
            this.dn = 1;
            this.gn = 1;
            this.hn = 1;
            this._l("#ffffff");
          }
          var v747 = new vO37.hb(0, 0, 0, 0, 0);
          f212.prototype.tf = function () {
            return this.Zm.nc;
          };
          f212.prototype.Wl = function (p963) {
            this.pc = p963;
            if (this.Zm.pc !== p963) {
              for (var vP963 = p963; vP963 < this.Zm.qc.length; vP963++) {
                this.Zm.qc[vP963].Uc();
              }
              while (this.Zm.pc > p963) {
                this.Zm.pc -= 1;
                var v748 = this.Zm.qc[this.Zm.pc];
                v748.Dc.Rc();
                v748.Cc.Rc();
              }
              while (this.Zm.pc < p963) {
                var v749 = this.Zm.qc[this.Zm.pc];
                this.Zm.pc += 1;
                this.Zm.nc.addChild(v749.Cc.Qc());
                this.Zm.nc.addChild(v749.Dc.Qc());
                v749.Cc.jj(this.an);
                v749.Dc.jj(this.bn);
              }
              for (var vLN0117 = 0; vLN0117 < this.Zm.oc.Fc.length; vLN0117++) {
                this.Zm.oc.Fc[vLN0117].jj(this.cn);
              }
              for (var vLN0118 = 0; vLN0118 < this.Zm.oc.Gc.length; vLN0118++) {
                this.Zm.oc.Gc[vLN0118].jj(this.dn);
              }
              for (var vLN0119 = 0; vLN0119 < this.Zm.oc.Ic.length; vLN0119++) {
                this.Zm.oc.Ic[vLN0119].jj(this.gn);
              }
              for (var vLN0120 = 0; vLN0120 < this.Zm.oc.Hc.length; vLN0120++) {
                this.Zm.oc.Hc[vLN0120].jj(this.hn);
              }
            }
          };
          f212.prototype.am = function () {
            return this.pc;
          };
          f212.prototype.$l = function (p964) {
            this.$m = p964;
            this._m = "#ffffff";
            this.lm();
          };
          f212.prototype._l = function (p965) {
            this.$m = v747;
            this._m = p965;
            this.lm();
          };
          f212.prototype.lm = function () {
            var vF1237 = f123();
            this.Zm.yc(vO37.Ac.vg, null, vF1237.Lc.Ub().ib(this.$m.lj), vF1237.Lc.Ub().kb(this.$m.mj), vF1237.Lc.Ub().lb(this.$m.nj), vF1237.Lc.Ub().mb(this.$m.pj), vF1237.Lc.Ub().nb(this.$m.oj), this._m);
          };
          f212.prototype.Xl = function (p966) {
            this.Gi = p966;
          };
          f212.prototype.cm = function () {
            return this.Gi;
          };
          f212.prototype.om = function (p967, p968) {
            this.an = p967;
            this.bn = p968;
            for (var vLN0121 = 0; vLN0121 < this.pc; vLN0121++) {
              var v750 = this.Zm.qc[vLN0121];
              v750.Cc.jj(this.an);
              v750.Dc.jj(this.bn);
            }
          };
          f212.prototype.rm = function (p969, p970, p971, p972) {
            this.cn = p969;
            this.dn = p970;
            this.gn = p971;
            this.hn = p972;
            for (var vLN0122 = 0; vLN0122 < this.Zm.oc.Fc.length; vLN0122++) {
              this.Zm.oc.Fc[vLN0122].jj(this.cn);
            }
            for (var vLN0123 = 0; vLN0123 < this.Zm.oc.Gc.length; vLN0123++) {
              this.Zm.oc.Gc[vLN0123].jj(this.dn);
            }
            for (var vLN0124 = 0; vLN0124 < this.Zm.oc.Ic.length; vLN0124++) {
              this.Zm.oc.Ic[vLN0124].jj(this.gn);
            }
            for (var vLN0125 = 0; vLN0125 < this.Zm.oc.Hc.length; vLN0125++) {
              this.Zm.oc.Hc[vLN0125].jj(this.hn);
            }
          };
          f212.prototype.Uf = function () {
            var v751 = this.Gi * 2;
            var v752 = this.Gi * 2 * 1.5;
            if (this.pc > 0) {
              var v753 = this.bm[0];
              var v754 = this.bm[1];
              var v755 = this.bm[2];
              this.Zm.qc[0].Sc(v753, v754, v751, v752, v755);
              this.Zm.oc.Sc(v753, v754, v751, v755);
            }
            for (var vLN111 = 1; vLN111 < this.pc; vLN111++) {
              var v756 = this.bm[vLN111 * 3];
              var v757 = this.bm[vLN111 * 3 + 1];
              var v758 = this.bm[vLN111 * 3 + 2];
              this.Zm.qc[vLN111].Sc(v756, v757, v751, v752, v758);
            }
          };
          f212.prototype.tm = function (p973) {
            p973.render(this.Zm.nc);
          };
          return f212;
        }();
        vO37.kf = function () {
          function f213(p974) {
            this.nd = p974;
          }
          f213.bgcanvas = $("#background-canvas");
          f213.socialButtons = $("#social-buttons");
          f213.socialButtons.html("");
          f213.jn = $("#game-view");
          f213.gameCanvas = $("#game-canvas");
          f213.ln = $("#results-view");
          f213.mn = $("#stretch-box");
          f213.nn = $("#main-menu-view");
          f213.pn = $("#popup-view");
          f213.qn = $("#loading-view");
          f213.rn = $("#restricted-view");
          f213.sn = $("#toaster-view");
          f213.tn = $("#error-gateway-connection-view");
          f213.un_error = $("#error-game-connection-view");
          f213.vn = $("#markup-wrap");
          f213.prototype.ha = function () {};
          f213.prototype.Gk = function () {};
          f213.prototype.Hk = function () {};
          f213.prototype.Bk = function () {};
          f213.prototype.Jf = function () {};
          f213.prototype.Nf = function (p975, p976) {};
          return f213;
        }();
        vO37.Vj = function () {
          function f214(p977, p978, p979, p980, p981, p982) {
            var vLSOK = "OK";
            var v$5 = $(vLSOK);
            v$5.click(function () {
              if (typeof FB != "undefined" && FB.ui !== undefined) {
                FB.ui({
                  method: "feed",
                  display: "popup",
                  link: p978,
                  name: p979,
                  caption: p980,
                  description: p981,
                  picture: p982
                }, function () {});
              }
            });
            return v$5;
          }
          var v$6 = $("#final-caption");
          var v$7 = $("#final-continue");
          var v$8 = $("#congrats-bg");
          var v$9 = $("#unl6wj4czdl84o9b");
          $("#congrats");
          var v$10 = $("#final-share-fb");
          var v$11 = $("#final-message");
          var v$12 = $("#final-score");
          var v$13 = $("#final-place");
          var v$14 = $("#final-board");
          var v759 = vO39.M(vO37.kf, function () {
            vO37.kf.call(this, vO37.Fk.wn);
            var vThis61 = this;
            var vF1238 = f123();
            v$10.toggle(vF19.xn);
            v$6.text(vO39.H("index.game.result.title"));
            v$7.text(vO39.H("index.game.result.continue"));
            v$7.click(function () {
              vF1238.Ci.Be();
              vF1238.zn.yn.ka();
              vF1238.Ci.pe(vO37.ge.je._e);
              vF1238.og.Ak(vF1238.og._e);
            });
            $("html").keydown(function (p983) {
              if (p983.keyCode === 32) {
                vThis61.An = true;
              }
            }).keyup(function (p984) {
              if (p984.keyCode === 32) {
                vThis61.An = false;
              }
            });
            this.ng = new vO37.Eg(vO37.kf.gameCanvas);
            this.Cn = 0;
            this.Bn = 0;
            this.An = false;
          });
          v759.prototype.ha = function () {};
          v759.prototype.Gk = function () {
            if (this.Cn === 0) {
              vO37.kf.jn.stop();
              vO37.kf.jn.fadeIn(500);
              vO37.kf.ln.stop();
              vO37.kf.ln.fadeOut(1);
              vO37.kf.nn.stop();
              vO37.kf.nn.fadeOut(50);
              vO37.kf.pn.stop();
              vO37.kf.pn.fadeOut(50);
              vO37.kf.sn.stop();
              vO37.kf.sn.fadeOut(50);
              vO37.kf.qn.stop();
              vO37.kf.qn.fadeOut(50);
              vO37.kf.rn.stop();
              vO37.kf.rn.fadeOut(50);
              vO37.kf.tn.stop();
              vO37.kf.tn.fadeOut(50);
              vO37.kf.un_error.stop();
              vO37.kf.un_error.fadeOut(50);
              vO37.kf.mn.stop();
              vO37.kf.mn.fadeOut(1);
              vO37.kf.bgcanvas.stop();
              vO37.kf.bgcanvas.fadeOut(50);
              vO37.GameView.Kf(false);
              vO37.kf.socialButtons.stop();
              vO37.kf.socialButtons.fadeOut(50);
              vO37.kf.vn.stop();
              vO37.kf.vn.fadeOut(50);
            } else {
              vO37.kf.jn.stop();
              vO37.kf.jn.fadeIn(500);
              vO37.kf.ln.stop();
              vO37.kf.ln.fadeIn(500);
              vO37.kf.nn.stop();
              vO37.kf.nn.fadeOut(50);
              vO37.kf.pn.stop();
              vO37.kf.pn.fadeOut(50);
              vO37.kf.sn.stop();
              vO37.kf.sn.fadeOut(50);
              vO37.kf.qn.stop();
              vO37.kf.qn.fadeOut(50);
              vO37.kf.rn.stop();
              vO37.kf.rn.fadeOut(50);
              vO37.kf.tn.stop();
              vO37.kf.tn.fadeOut(50);
              vO37.kf.un_error.stop();
              vO37.kf.un_error.fadeOut(50);
              vO37.kf.mn.stop();
              vO37.kf.mn.fadeOut(1);
              vO37.kf.bgcanvas.stop();
              vO37.kf.bgcanvas.fadeOut(50);
              vO37.GameView.Kf(false);
              vO37.kf.socialButtons.stop();
              vO37.kf.socialButtons.fadeOut(50);
              vO37.kf.vn.stop();
              vO37.kf.vn.fadeOut(50);
            }
          };
          v759.prototype.Dn = function () {
            this.Cn = 0;
            return this;
          };
          v759.prototype.En = function () {
            v$8.hide();
            setTimeout(function () {
              v$8.fadeIn(500);
            }, 3000);
            v$9.hide();
            setTimeout(function () {
              v$9.fadeIn(500);
            }, 500);
            this.Cn = 1;
            return this;
          };
          v759.prototype.Hk = function () {
            this.An = false;
            this.ng.Jf();
            if (this.Cn === 1) {
              f123().Ci.Fe();
            }
          };
          v759.prototype.Jf = function () {
            this.ng.Jf();
          };
          v759.prototype.Nf = function (p985, p986) {
            this.ng.Nf(p985, p986);
          };
          v759.prototype.Fn = function (p987, p988, p989) {
            var vUndefined14 = undefined;
            var vUndefined15 = undefined;
            var vUndefined16 = undefined;
            if (p988 >= 1 && p988 <= 10) {
              vUndefined14 = vO39.H("index.game.result.place.i" + p988);
              vUndefined15 = vO39.H("index.game.result.placeInBoard");
              vUndefined16 = vO39.H("index.game.social.shareResult.messGood").replace("{0}", p989).replace("{1}", p987).replace("{2}", vUndefined14);
            } else {
              vUndefined14 = "";
              vUndefined15 = vO39.H("index.game.result.tryHit");
              vUndefined16 = vO39.H("index.game.social.shareResult.messNorm").replace("{0}", p989).replace("{1}", p987);
            }
            v$11.html(vO39.H("index.game.result.your"));
            v$12.html(p987);
            v$13.html(vUndefined14);
            v$14.html(vUndefined15);
            if (vF19.xn) {
              var v760 = vO39.H("index.game.result.share");
              vO39.H("index.game.social.shareResult.caption");
              v$10.empty().append(f214(v760, "https://wormate.io", "wormate.io", vUndefined16, vUndefined16, "https://wormate.io/images/og-share-img-new.jpg"));
            }
          };
          v759.prototype.Gn = function () {
            return this.Bn;
          };
          v759.prototype.Hn = function () {
            return this.An;
          };
          return v759;
        }();
        vO37.sk = function () {
          var v$15 = $("#loading-progress-cont");
          var v$16 = $("#loading-progress-bar");
          var v$17 = $("#loading-progress-text");
          var v761 = vO39.M(vO37.kf, function () {
            vO37.kf.call(this, vO37.Fk.wn);
            this.In = -1;
            this.Jn = "";
          });
          v761.prototype.ha = function () {};
          v761.prototype.Gk = function () {
            vO37.kf.jn.stop();
            vO37.kf.jn.fadeOut(50);
            vO37.kf.ln.stop();
            vO37.kf.ln.fadeOut(50);
            vO37.kf.nn.stop();
            vO37.kf.nn.fadeOut(50);
            vO37.kf.pn.stop();
            vO37.kf.pn.fadeOut(50);
            vO37.kf.sn.stop();
            vO37.kf.sn.fadeOut(50);
            vO37.kf.qn.stop();
            vO37.kf.qn.fadeIn(500);
            vO37.kf.rn.stop();
            vO37.kf.rn.fadeOut(50);
            vO37.kf.tn.stop();
            vO37.kf.tn.fadeOut(50);
            vO37.kf.un_error.stop();
            vO37.kf.un_error.fadeOut(50);
            vO37.kf.mn.stop();
            vO37.kf.mn.fadeIn(1);
            vO37.kf.bgcanvas.stop();
            vO37.kf.bgcanvas.fadeIn(500);
            vO37.GameView.Kf(true);
            vO37.kf.socialButtons.stop();
            vO37.kf.socialButtons.fadeOut(50);
            vO37.kf.vn.stop();
            vO37.kf.vn.fadeOut(50);
          };
          v761.prototype.Hk = function () {
            f123().Ci.pe(vO37.ge.je.ie);
          };
          v761.prototype.Bk = function () {};
          v761.prototype.Kn = function () {
            this.Ln("", 0);
            v$15.stop();
            v$15.fadeIn(100);
          };
          v761.prototype.Mn = function () {
            v$15.stop();
            v$15.fadeOut(100);
          };
          v761.prototype.Ln = function (p990, p991) {
            if (this.Jn !== p990) {
              this.Jn = p990;
            }
            var v762 = vO39.P(Math.floor(p991 * 100), 0, 100);
            if (this.In !== v762) {
              v$16.css({
                width: v762 + "%"
              });
              v$17.html(v762 + " %");
            }
          };
          return v761;
        }();
        vO37.Wj = function () {
          var v$18 = $("#mm-line-top");
          $("#mm-line-center");
          $("#mm-line-bottom");
          var v$19 = $("#mm-bottom-buttons");
          var v$20 = $("#mm-menu-cont");
          var v$21 = $("#mm-loading");
          var v$22 = $("#mm-loading-progress-bar");
          var v$23 = $("#mm-loading-progress-text");
          $("#mm-event-text");
          var v$24 = $("#mm-skin-canv");
          var v$25 = $("#mm-skin-prev");
          var v$26 = $("#mm-skin-next");
          var v$27 = $("#mm-skin-over");
          var v$28 = $("#mm-skin-over-button-list");
          var v$29 = $("#mm-params-nickname");
          var v$30 = $("#mm-params-game-mode");
          var v$31 = $("#mm-action-play");
          var v$32 = $("#mm-action-guest");
          var v$33 = $("#mm-action-login");
          var v$34 = $("#mm-player-info");
          var v$35 = $("#mm-store");
          var v$36 = $("#mm-leaders");
          var v$37 = $("#mm-settings");
          var v$38 = $("#mm-coins-box");
          var v$39 = $("#mm-player-avatar");
          var v$40 = $("#mm-player-username");
          var v$41 = $("#mm-coins-val");
          var v$42 = $("#mm-player-exp-bar");
          var v$43 = $("#mm-player-exp-val");
          var v$44 = $("#mm-player-level");
          var v763 = vO39.M(vO37.kf, function () {
            vO37.kf.call(this, vO37.Fk.Ek);
            var vF1239 = f123();
            this.In = -1;
            this.Jn = "";
            this.Nn = new vO37.dm(v$24);
            v$30.click(function () {
              vF1239.Ci.Be();
            });
            v$24.click(function () {
              if (vF1239.Ij.Hj()) {
                vF1239.Ci.Be();
                vF1239.og.Ak(vF1239.og.ik);
              }
            });
            v$25.click(function () {
              vF1239.Ci.Be();
              vF1239.On.Ej();
            });
            v$26.click(function () {
              vF1239.Ci.Be();
              vF1239.On.Dj();
            });
            v$29.keypress(function (p992) {
              if (p992.keyCode == 13) {
                vF1239.Pn(true);
              }
            });
            v$31.click(function () {
              vF1239.Ci.Be();
              vF1239.Pn(true);
            });
            v$32.click(function () {
              vF1239.Ci.Be();
              vF1239.Pn(true);
            });
            v$33.click(function () {
              vF1239.Ci.Be();
              vF1239.og.Ak(vF1239.og.fk);
            });
            v$37.click(function () {
              vF1239.Ci.Be();
              vF1239.og.Ak(vF1239.og.$h);
            });
            v$34.click(function () {
              if (vF1239.Ij.Hj()) {
                vF1239.Ci.Be();
                vF1239.og.Ak(vF1239.og.dk);
              }
            });
            v$36.click(function () {
              if (vF1239.Ij.Hj()) {
                vF1239.Ci.Be();
                vF1239.og.Ak(vF1239.og.bk);
              }
            });
            v$35.click(function () {
              if (vF1239.Ij.Hj()) {
                vF1239.Ci.Be();
                vF1239.og.Ak(vF1239.og.kk);
              }
            });
            v$38.click(function () {
              if (vF1239.Ij.Hj()) {
                vF1239.Ci.Be();
                vF1239.og.Ak(vF1239.og._j);
              }
            });
            this.Qn();
            this.Rn();
            var v764 = vO37.Vf.fg(vO37.Vf._f);
            if (v764 !== "ARENA" && v764 !== "TEAM2") {
              v764 = "ARENA";
            }
            v$30.val(v764);
          });
          v763.prototype.ha = function () {
            var vF12310 = f123();
            var vThis62 = this;
            vF12310.Ij.zl(function () {
              if (vF12310.Ij.Hj()) {
                vF12310.On.Fj(vF12310.Ij.ml(), vO37.tj.sj);
                vF12310.On.Fj(vF12310.Ij.nl(), vO37.tj.uj);
                vF12310.On.Fj(vF12310.Ij.ol(), vO37.tj.vj);
                vF12310.On.Fj(vF12310.Ij.pl(), vO37.tj.xj);
                vF12310.On.Fj(vF12310.Ij.ql(), vO37.tj.wj);
              } else {
                vF12310.On.Fj(vF12310.Sn(), vO37.tj.sj);
                vF12310.On.Fj(0, vO37.tj.uj);
                vF12310.On.Fj(0, vO37.tj.vj);
                vF12310.On.Fj(0, vO37.tj.xj);
                vF12310.On.Fj(0, vO37.tj.wj);
              }
            });
            vF12310.Ij.zl(function () {
              v$31.toggle(vF12310.Ij.Hj());
              v$33.toggle(!vF12310.Ij.Hj());
              v$34.toggle(true);
              v$32.toggle(!vF12310.Ij.Hj());
              v$37.toggle(true);
              v$36.toggle(vF12310.Ij.Hj());
              v$35.toggle(vF12310.Ij.Hj());
              v$38.toggle(vF12310.Ij.Hj());
              if (vF12310.Ij.Hj()) {
                v$27.hide();
                v$40.html(vF12310.Ij.dl());
                v$39.attr("src", vF12310.Ij.fl());
                v$41.html(vF12310.Ij.il());
                v$42.width(vF12310.Ij.kl() * 100 / vF12310.Ij.ll() + "%");
                v$43.html(vF12310.Ij.kl() + " / " + vF12310.Ij.ll());
                v$44.html(vF12310.Ij.jl());
                v$29.val(vF12310.Ij.el());
              } else {
                v$27.toggle(vF19.xn && !vF12310.Tn());
                v$40.html(v$40.data("guest"));
                v$39.attr("src", vO39.a.e);
                v$41.html("10");
                v$42.width("0");
                v$43.html("");
                v$44.html(1);
                v$29.val(vO37.Vf.fg(vO37.Vf.ag));
              }
            });
            vF12310.On.zj(function () {
              vThis62.Nn.$l(vF12310.On.yj());
            });
          };
          v763.prototype.Gk = function () {
            vO37.kf.jn.stop();
            vO37.kf.jn.fadeOut(50);
            vO37.kf.ln.stop();
            vO37.kf.ln.fadeOut(50);
            vO37.kf.nn.stop();
            vO37.kf.nn.fadeIn(500);
            vO37.kf.pn.stop();
            vO37.kf.pn.fadeOut(50);
            vO37.kf.sn.stop();
            vO37.kf.sn.fadeOut(50);
            vO37.kf.qn.stop();
            vO37.kf.qn.fadeOut(50);
            vO37.kf.rn.stop();
            vO37.kf.rn.fadeOut(50);
            vO37.kf.tn.stop();
            vO37.kf.tn.fadeOut(50);
            vO37.kf.un_error.stop();
            vO37.kf.un_error.fadeOut(50);
            vO37.kf.mn.stop();
            vO37.kf.mn.fadeIn(1);
            vO37.kf.bgcanvas.stop();
            vO37.kf.bgcanvas.fadeIn(500);
            vO37.GameView.Kf(true);
            vO37.kf.socialButtons.stop();
            vO37.kf.socialButtons.fadeIn(500);
            vO37.kf.vn.stop();
            vO37.kf.vn.fadeIn(500);
          };
          v763.prototype.Un = function () {
            v$18.fadeIn(500);
            v$19.fadeIn(500);
            v$20.fadeIn(500);
            v$21.fadeOut(100);
          };
          v763.prototype.Vn = function () {
            v$18.fadeOut(100);
            v$19.fadeOut(100);
            v$20.fadeOut(100);
            v$21.fadeIn(500);
          };
          v763.prototype.Ln = function (p993, p994) {
            if (this.Jn !== p993) {
              this.Jn = p993;
            }
            var v765 = vO39.P(Math.floor(p994 * 100), 0, 100);
            if (this.In !== v765) {
              v$22.css({
                width: v765 + "%"
              });
              v$23.html(v765 + " %");
            }
          };
          v763.prototype.Hk = function () {
            f123().Ci.Ce();
            this.Nn.Kf(true);
          };
          v763.prototype.Bk = function () {
            this.Nn.Kf(false);
          };
          v763.prototype.Jf = function () {
            this.Nn.Jf();
          };
          v763.prototype.Nf = function (p995, p996) {
            this.Nn.Nf();
          };
          v763.prototype.el = function () {
            return v$29.val();
          };
          v763.prototype.Wn = function () {
            return v$30.val();
          };
          v763.prototype.Qn = function () {};
          v763.prototype.Rn = function () {
            function f215() {
              vF12311.Xn(true);
              setTimeout(function () {
                v$27.hide();
              }, 3000);
            }
            var vF12311 = f123();
            if (vF19.xn && !vF12311.Tn()) {
              v$27.show();
              var v766 = vO39.H("index.game.main.menu.unlockSkins.share");
              var vEncodeURIComponent = encodeURIComponent(vO39.H("index.game.main.menu.unlockSkins.comeAndPlay") + " https://wormate.io/ #wormate #wormateio");
              var vEncodeURIComponent2 = encodeURIComponent(vO39.H("index.game.main.menu.unlockSkins.comeAndPlay"));
              v$28.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-tw\" target=\"_blank\" href=\"http://twitter.com/intent/tweet?status=" + vEncodeURIComponent + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\"><span>" + v766 + "</span></a>").click(f215));
              v$28.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + vEncodeURIComponent2 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"><span>" + v766 + "</span></a>").click(f215));
            }
          };
          return v763;
        }();
        vO37.yk = function () {
          var v767 = vO39.M(vO37.kf, function () {
            vO37.kf.call(this, vO37.Fk.wn);
          });
          v767.prototype.ha = function () {};
          v767.prototype.Gk = function () {
            vO37.kf.jn.stop();
            vO37.kf.jn.fadeOut(50);
            vO37.kf.ln.stop();
            vO37.kf.ln.fadeOut(50);
            vO37.kf.nn.stop();
            vO37.kf.nn.fadeOut(50);
            vO37.kf.pn.stop();
            vO37.kf.pn.fadeOut(50);
            vO37.kf.sn.stop();
            vO37.kf.sn.fadeOut(50);
            vO37.kf.qn.stop();
            vO37.kf.qn.fadeOut(50);
            vO37.kf.rn.stop();
            vO37.kf.rn.fadeOut(50);
            vO37.kf.tn.stop();
            vO37.kf.tn.fadeOut(50);
            vO37.kf.un_error.stop();
            vO37.kf.un_error.fadeOut(50);
            vO37.kf.mn.stop();
            vO37.kf.mn.fadeOut(1);
            vO37.kf.bgcanvas.stop();
            vO37.kf.bgcanvas.fadeOut(50);
            vO37.GameView.Kf(false);
            vO37.kf.socialButtons.stop();
            vO37.kf.socialButtons.fadeOut(50);
            vO37.kf.vn.stop();
            vO37.kf.vn.fadeOut(50);
          };
          return v767;
        }();
        vO37.pk = function () {
          var v768 = vO39.M(vO37.kf, function () {
            vO37.kf.call(this, vO37.Fk.wn);
          });
          v768.prototype.ha = function () {};
          v768.prototype.Gk = function () {
            vO37.kf.jn.stop();
            vO37.kf.jn.fadeOut(50);
            vO37.kf.ln.stop();
            vO37.kf.ln.fadeOut(50);
            vO37.kf.nn.stop();
            vO37.kf.nn.fadeOut(50);
            vO37.kf.pn.stop();
            vO37.kf.pn.fadeOut(50);
            vO37.kf.sn.stop();
            vO37.kf.sn.fadeOut(50);
            vO37.kf.qn.stop();
            vO37.kf.qn.fadeOut(50);
            vO37.kf.rn.stop();
            vO37.kf.rn.fadeIn(500);
            vO37.kf.tn.stop();
            vO37.kf.tn.fadeOut(50);
            vO37.kf.un_error.stop();
            vO37.kf.un_error.fadeOut(50);
            vO37.kf.mn.stop();
            vO37.kf.mn.fadeIn(1);
            vO37.kf.bgcanvas.stop();
            vO37.kf.bgcanvas.fadeIn(500);
            vO37.GameView.Kf(true);
            vO37.kf.socialButtons.stop();
            vO37.kf.socialButtons.fadeOut(50);
            vO37.kf.vn.stop();
            vO37.kf.vn.fadeOut(50);
          };
          v768.prototype.Hk = function () {};
          return v768;
        }();
        vO37.rk = function () {
          var v$45 = $("#toaster-stack");
          var v769 = vO39.M(vO37.kf, function () {
            vO37.kf.call(this, vO37.Fk.wn);
            this.Yn = [];
            this.Zn = null;
          });
          v769.prototype.ha = function () {};
          v769.prototype.Gk = function () {
            vO37.kf.jn.stop();
            vO37.kf.jn.fadeOut(50);
            vO37.kf.ln.stop();
            vO37.kf.ln.fadeOut(50);
            vO37.kf.nn.stop();
            vO37.kf.nn.fadeOut(50);
            vO37.kf.pn.stop();
            vO37.kf.pn.fadeOut(50);
            vO37.kf.sn.stop();
            vO37.kf.sn.fadeIn(500);
            vO37.kf.qn.stop();
            vO37.kf.qn.fadeOut(50);
            vO37.kf.rn.stop();
            vO37.kf.rn.fadeOut(50);
            vO37.kf.tn.stop();
            vO37.kf.tn.fadeOut(50);
            vO37.kf.un_error.stop();
            vO37.kf.un_error.fadeOut(50);
            vO37.kf.mn.stop();
            vO37.kf.mn.fadeIn(1);
            vO37.kf.bgcanvas.stop();
            vO37.kf.bgcanvas.fadeIn(500);
            vO37.GameView.Kf(true);
            vO37.kf.socialButtons.stop();
            vO37.kf.socialButtons.fadeOut(50);
            vO37.kf.vn.stop();
            vO37.kf.vn.fadeIn(500);
          };
          v769.prototype.Hk = function () {
            this.$n();
          };
          v769.prototype.Kk = function () {
            return this.Zn != null || this.Yn.length > 0;
          };
          v769.prototype._n = function (p997) {
            this.Yn.unshift(p997);
            setTimeout(function () {
              f123().og.Ik();
            }, 0);
          };
          v769.prototype.El = function (p998) {
            this.Yn.push(p998);
            setTimeout(function () {
              f123().og.Ik();
            }, 0);
          };
          v769.prototype.$n = function () {
            var vThis63 = this;
            if (this.Zn == null) {
              if (this.Yn.length == 0) {
                f123().og.Dk();
                return;
              }
              var v770 = this.Yn.shift();
              this.Zn = v770;
              var v771 = v770.tf();
              v771.hide();
              v771.fadeIn(300);
              v$45.append(v771);
              v770.ao = function () {
                v771.fadeOut(300);
                setTimeout(function () {
                  v771.remove();
                }, 300);
                if (vThis63.Zn == v770) {
                  vThis63.Zn = null;
                }
                vThis63.$n();
              };
              v770.Hk();
            }
          };
          return v769;
        }();
        vO37.Fk = {
          wn: 0,
          Ek: 1
        };
        vO37.bo = function () {
          var v$46 = $("#popup-menu-label");
          var v$47 = $("#popup-menu-coins-box");
          var v$48 = $("#popup-menu-coins-val");
          $("#popup-menu-back").click(function () {
            var vF12312 = f123();
            vF12312.Ci.Be();
            vF12312.og.Dk();
          });
          v$47.click(function () {
            var vF12313 = f123();
            if (vF12313.Ij.Hj()) {
              vF12313.Ci.Be();
              vF12313.og.Ak(vF12313.og._j);
            }
          });
          var v772 = vO39.M(vO37.kf, function (p999, p1000) {
            vO37.kf.call(this, vO37.Fk.Ek);
            this.ma = p999;
            this.co = p1000;
            this.do = [];
          });
          v772.prototype.ha = function () {
            v772.parent.prototype.ha.call(this);
            if (!v772.eo) {
              v772.eo = true;
              var vF12314 = f123();
              vF12314.Ij.zl(function () {
                if (vF12314.Ij.Hj()) {
                  v$48.html(vF12314.Ij.il());
                } else {
                  v$48.html("0");
                }
              });
            }
            vO37.bo.fo.stop();
            vO37.bo.fo.fadeOut(100);
          };
          v772.go = $("#coins-view");
          v772.ho = $("#leaders-view");
          v772.io = $("#profile-view");
          v772.jo = $("#settings-view");
          v772.ko = $("#login-view");
          v772.lo = $("#skins-view");
          v772.mo = $("#store-view");
          v772.no = $("#wear-view");
          v772.oo = $("#withdraw-consent-view");
          v772.po = $("#delete-account-view");
          v772.fo = $("#please-wait-view");
          v772.prototype.Gk = function () {
            vO37.kf.jn.stop();
            vO37.kf.jn.fadeOut(200);
            vO37.kf.ln.stop();
            vO37.kf.ln.fadeOut(200);
            vO37.kf.nn.stop();
            vO37.kf.nn.fadeOut(200);
            vO37.kf.pn.stop();
            vO37.kf.pn.fadeIn(200);
            vO37.kf.sn.stop();
            vO37.kf.sn.fadeOut(200);
            vO37.kf.qn.stop();
            vO37.kf.qn.fadeOut(200);
            vO37.kf.rn.stop();
            vO37.kf.rn.fadeOut(200);
            vO37.kf.tn.stop();
            vO37.kf.tn.fadeOut(200);
            vO37.kf.un_error.stop();
            vO37.kf.un_error.fadeOut(200);
            vO37.kf.mn.stop();
            vO37.kf.mn.fadeIn(1);
            vO37.kf.bgcanvas.stop();
            vO37.kf.bgcanvas.fadeIn(500);
            vO37.GameView.Kf(true);
            vO37.kf.socialButtons.stop();
            vO37.kf.socialButtons.fadeIn(200);
            vO37.kf.vn.stop();
            vO37.kf.vn.fadeIn(200);
            v$46.html(this.ma);
            v$47.toggle(this.co);
            this.qo();
          };
          v772.prototype.qo = function () {};
          v772.prototype.ro = function (p1001) {
            var vThis64 = this;
            var v773 = vO39.V(0, 2147483647) & 2147483647;
            this.do.push(v773);
            vO37.bo.fo.stop();
            vO37.bo.fo.fadeIn(100);
            setTimeout(function () {
              vThis64.so(v773);
            }, p1001);
            return new vF16(this, v773);
          };
          v772.prototype.so = function (p1002) {
            var v774 = this.do.indexOf(p1002);
            if (!(v774 < 0)) {
              this.do.splice(v774, 1);
              if (this.do.length === 0) {
                vO37.bo.fo.stop();
                vO37.bo.fo.fadeOut(100);
              }
            }
          };
          return v772;
        }();
        var vF16 = function () {
          function f216(p1003, p1004) {
            this.to = p1003;
            this.uo = p1004;
          }
          f216.prototype.vo = function () {
            this.to.so(this.uo);
          };
          return f216;
        }();
        vO37.ak = function () {
          var v$49 = $("#store-buy-coins_125000");
          var v$50 = $("#store-buy-coins_50000");
          var v$51 = $("#store-buy-coins_16000");
          var v$52 = $("#store-buy-coins_7000");
          var v$53 = $("#store-buy-coins_3250");
          var v$54 = $("#store-buy-coins_1250");
          var v775 = vO39.M(vO37.bo, function () {
            vO37.bo.call(this, vO39.H("index.game.popup.menu.coins.tab"), false);
            var vF12315 = f123();
            var vThis65 = this;
            v$49.click(function () {
              vF12315.Ci.Be();
              vThis65.wo("coins_125000");
            });
            v$50.click(function () {
              vF12315.Ci.Be();
              vThis65.wo("coins_50000");
            });
            v$51.click(function () {
              vF12315.Ci.Be();
              vThis65.wo("coins_16000");
            });
            v$52.click(function () {
              vF12315.Ci.Be();
              vThis65.wo("coins_7000");
            });
            v$53.click(function () {
              vF12315.Ci.Be();
              vThis65.wo("coins_3250");
            });
            v$54.click(function () {
              vF12315.Ci.Be();
              vThis65.wo("coins_1250");
            });
          });
          v775.prototype.ha = function () {
            v775.parent.prototype.ha.call(this);
          };
          v775.prototype.qo = function () {
            vO37.bo.go.stop();
            vO37.bo.go.fadeIn(200);
            vO37.bo.ho.stop();
            vO37.bo.ho.fadeOut(50);
            vO37.bo.io.stop();
            vO37.bo.io.fadeOut(50);
            vO37.bo.ko.stop();
            vO37.bo.ko.fadeOut(50);
            vO37.bo.jo.stop();
            vO37.bo.jo.fadeOut(50);
            vO37.bo.lo.stop();
            vO37.bo.lo.fadeOut(50);
            vO37.bo.mo.stop();
            vO37.bo.mo.fadeOut(50);
            vO37.bo.no.stop();
            vO37.bo.no.fadeOut(50);
            vO37.bo.oo.stop();
            vO37.bo.oo.fadeOut(50);
            vO37.bo.po.stop();
            vO37.bo.po.fadeOut(50);
          };
          v775.prototype.Hk = function () {
            f123().Ci.Ce();
          };
          v775.prototype.wo = function (p1005) {};
          return v775;
        }();
        vO37.ck = function () {
          var v$55 = $("#highscore-table");
          var v$56 = $("#leaders-button-level");
          var v$57 = $("#leaders-button-highscore");
          var v$58 = $("#leaders-button-kills");
          var v776 = vO39.M(vO37.bo, function () {
            vO37.bo.call(this, vO39.H("index.game.popup.menu.leaders.tab"), true);
            var vF12316 = f123();
            var vThis66 = this;
            this.xo = {};
            this.yo = {
              zo: {
                Ao: v$56,
                Bo: "byLevel"
              },
              Co: {
                Ao: v$57,
                Bo: "byHighScore"
              },
              Do: {
                Ao: v$58,
                Bo: "byKillsAndHeadShots"
              }
            };
            v$56.click(function () {
              vF12316.Ci.Be();
              vThis66.Eo(vThis66.yo.zo);
            });
            v$57.click(function () {
              vF12316.Ci.Be();
              vThis66.Eo(vThis66.yo.Co);
            });
            v$58.click(function () {
              vF12316.Ci.Be();
              vThis66.Eo(vThis66.yo.Do);
            });
          });
          v776.prototype.ha = function () {
            v776.parent.prototype.ha.call(this);
          };
          v776.prototype.qo = function () {
            vO37.bo.go.stop();
            vO37.bo.go.fadeOut(50);
            vO37.bo.ho.stop();
            vO37.bo.ho.fadeIn(200);
            vO37.bo.io.stop();
            vO37.bo.io.fadeOut(50);
            vO37.bo.ko.stop();
            vO37.bo.ko.fadeOut(50);
            vO37.bo.jo.stop();
            vO37.bo.jo.fadeOut(50);
            vO37.bo.lo.stop();
            vO37.bo.lo.fadeOut(50);
            vO37.bo.mo.stop();
            vO37.bo.mo.fadeOut(50);
            vO37.bo.no.stop();
            vO37.bo.no.fadeOut(50);
            vO37.bo.oo.stop();
            vO37.bo.oo.fadeOut(50);
            vO37.bo.po.stop();
            vO37.bo.po.fadeOut(50);
          };
          v776.prototype.Hk = function () {
            var vThis67 = this;
            f123().Ci.Ce();
            var v777 = this.ro(5000);
            var v778 = vO39.a.b + "/pub/leaders";
            vO39.Z(v778, function () {
              vThis67.xo = {
                byLevel: [],
                byHighScore: [],
                byKillsAndHeadShots: []
              };
              vThis67.Eo(vThis67.Fo ?? vThis67.yo.zo);
              v777.vo();
            }, function (p1006) {
              vThis67.xo = p1006;
              vThis67.Eo(vThis67.Fo ?? vThis67.yo.zo);
              v777.vo();
            });
          };
          v776.prototype.Eo = function (p1007) {
            this.Fo = p1007;
            for (var v779 in this.yo) {
              if (this.yo.hasOwnProperty(v779)) {
                var v780 = this.yo[v779];
                v780.Ao.removeClass("pressed");
              }
            }
            this.Fo.Ao.addClass("pressed");
            for (var v781 = this.xo[this.Fo.Bo], vLS11 = "", vLN0126 = 0; vLN0126 < v781.length; vLN0126++) {
              var v782 = v781[vLN0126];
              vLS11 += "<div class=\"table-row\"><span>" + (vLN0126 + 1) + "</span><span><img src=\"" + v782.avatarUrl + "\"/></span><span>" + v782.username + "</span><span>" + v782.level + "</span><span>" + v782.highScore + "</span><span>" + v782.headShots + " / " + v782.kills + "</span></div>";
            }
            v$55.empty();
            v$55.append(vLS11);
          };
          return v776;
        }();
        vO37.gk = function () {
          var v$59 = $("#popup-login-gg");
          var v$60 = $("#popup-login-fb");
          var v783 = vO39.M(vO37.bo, function () {
            var vThis68 = this;
            vO37.bo.call(this, vO39.H("index.game.popup.menu.login.tab"), false);
            var vF12317 = f123();
            v$59.click(function () {
              vF12317.Ci.Be();
              var v784 = vThis68.ro(10000);
              setTimeout(function () {
                vF12317.Ij.Ml(function () {
                  if (vF12317.Ij.Hj()) {
                    vF12317.Ci.Fe();
                  }
                  v784.vo();
                });
              }, 500);
            });
            v$60.click(function () {
              vF12317.Ci.Be();
              var v785 = vThis68.ro(10000);
              setTimeout(function () {
                vF12317.Ij.Jl(function () {
                  if (vF12317.Ij.Hj()) {
                    vF12317.Ci.Fe();
                  }
                  v785.vo();
                });
              }, 500);
            });
          });
          v783.prototype.ha = function () {
            v783.parent.prototype.ha.call(this);
          };
          v783.prototype.qo = function () {
            vO37.bo.go.stop();
            vO37.bo.go.fadeOut(50);
            vO37.bo.ho.stop();
            vO37.bo.ho.fadeOut(50);
            vO37.bo.io.stop();
            vO37.bo.io.fadeOut(50);
            vO37.bo.ko.stop();
            vO37.bo.ko.fadeIn(200);
            vO37.bo.jo.stop();
            vO37.bo.jo.fadeOut(50);
            vO37.bo.lo.stop();
            vO37.bo.lo.fadeOut(50);
            vO37.bo.mo.stop();
            vO37.bo.mo.fadeOut(50);
            vO37.bo.no.stop();
            vO37.bo.no.fadeOut(50);
            vO37.bo.oo.stop();
            vO37.bo.oo.fadeOut(50);
            vO37.bo.po.stop();
            vO37.bo.po.fadeOut(50);
          };
          v783.prototype.Hk = function () {
            f123().Ci.Ce();
          };
          return v783;
        }();
        vO37.ek = function () {
          var v$61 = $("#profile-avatar");
          var v$62 = $("#profile-username");
          var v$63 = $("#profile-experience-bar");
          var v$64 = $("#profile-experience-val");
          var v$65 = $("#profile-level");
          var v$66 = $("#profile-stat-highScore");
          var v$67 = $("#profile-stat-bestSurvivalTime");
          var v$68 = $("#profile-stat-kills");
          var v$69 = $("#profile-stat-headshots");
          var v$70 = $("#profile-stat-gamesPlayed");
          var v$71 = $("#profile-stat-totalTimeSpent");
          var v$72 = $("#profile-stat-registrationDate");
          var v786 = vO39.M(vO37.bo, function () {
            vO37.bo.call(this, vO39.H("index.game.popup.menu.profile.tab"), true);
          });
          v786.prototype.ha = function () {
            v786.parent.prototype.ha.call(this);
          };
          v786.prototype.qo = function () {
            vO37.bo.go.stop();
            vO37.bo.go.fadeOut(50);
            vO37.bo.ho.stop();
            vO37.bo.ho.fadeOut(50);
            vO37.bo.io.stop();
            vO37.bo.io.fadeIn(200);
            vO37.bo.ko.stop();
            vO37.bo.ko.fadeOut(50);
            vO37.bo.jo.stop();
            vO37.bo.jo.fadeOut(50);
            vO37.bo.lo.stop();
            vO37.bo.lo.fadeOut(50);
            vO37.bo.mo.stop();
            vO37.bo.mo.fadeOut(50);
            vO37.bo.no.stop();
            vO37.bo.no.fadeOut(50);
            vO37.bo.oo.stop();
            vO37.bo.oo.fadeOut(50);
            vO37.bo.po.stop();
            vO37.bo.po.fadeOut(50);
          };
          v786.prototype.Hk = function () {
            var vF12318 = f123();
            vF12318.Ci.Ce();
            var v787 = vF12318.Ij.xl();
            var v788 = moment([v787.year, v787.month - 1, v787.day]).format("LL");
            v$62.html(vF12318.Ij.dl());
            v$61.attr("src", vF12318.Ij.fl());
            v$63.width(vF12318.Ij.kl() * 100 / vF12318.Ij.ll() + "%");
            v$64.html(vF12318.Ij.kl() + " / " + vF12318.Ij.ll());
            v$65.html(vF12318.Ij.jl());
            v$66.html(vF12318.Ij.rl());
            v$67.html(vO39.J(vF12318.Ij.sl()));
            v$68.html(vF12318.Ij.tl());
            v$69.html(vF12318.Ij.ul());
            v$70.html(vF12318.Ij.vl());
            v$71.html(vO39.J(vF12318.Ij.wl()));
            v$72.html(v788);
          };
          return v786;
        }();
        vO37.hk = function () {
          var v$73 = $("#settings-music-enabled-switch");
          var v$74 = $("#settings-sfx-enabled-switch");
          var v$75 = $("#settings-show-names-switch");
          var v$76 = $("#popup-logout");
          var v$77 = $("#popup-logout-container");
          var v$78 = $("#popup-delete-account");
          var v$79 = $("#popup-delete-account-container");
          var v$80 = $("#popup-withdraw-consent");
          var v789 = vO39.M(vO37.bo, function () {
            vO37.bo.call(this, vO39.H("index.game.popup.menu.settings.tab"), false);
            var vThis69 = this;
            var vF12319 = f123();
            v$73.click(function () {
              var v790 = !!v$73.prop("checked");
              vO37.Vf.eg(vO37.Vf.Yf, v790, 30);
              vF12319.Ci.re(v790);
              vF12319.Ci.Be();
            });
            v$74.click(function () {
              var v791 = !!v$74.prop("checked");
              vO37.Vf.eg(vO37.Vf.Zf, v791, 30);
              vF12319.Ci.oe(v791);
              vF12319.Ci.Be();
            });
            v$75.click(function () {
              vF12319.Ci.Be();
            });
            v$76.click(function () {
              vF12319.Ci.Be();
              vThis69.ro(500);
              vF12319.Ij.Kl();
            });
            v$78.click(function () {
              if (vF12319.Ij.Hj()) {
                vF12319.Ci.Be();
                vF12319.og.Ak(vF12319.og.Zj);
              } else {
                vF12319.Ci.Ge();
              }
            });
            v$80.click(function () {
              if (vF12319.Go()) {
                vF12319.Ci.Be();
                vF12319.og.Ak(vF12319.og.Xj);
              } else {
                vF12319.Ci.Ge();
              }
            });
          });
          v789.prototype.ha = function () {
            v789.parent.prototype.ha.call(this);
            var vF12320 = f123();
            var vUndefined17 = undefined;
            switch (vO37.Vf.fg(vO37.Vf.Yf)) {
              case "false":
                vUndefined17 = false;
                break;
              default:
                vUndefined17 = true;
            }
            v$73.prop("checked", vUndefined17);
            vF12320.Ci.re(vUndefined17);
            var vUndefined18 = undefined;
            switch (vO37.Vf.fg(vO37.Vf.Zf)) {
              case "false":
                vUndefined18 = false;
                break;
              default:
                vUndefined18 = true;
            }
            v$74.prop("checked", vUndefined18);
            vF12320.Ci.oe(vUndefined18);
            var vUndefined19 = undefined;
            switch (vO37.Vf.fg(vO37.Vf.Xf)) {
              case "false":
                vUndefined19 = false;
                break;
              default:
                vUndefined19 = true;
            }
            v$75.prop("checked", vUndefined19);
            vF12320.Ij.yl(function () {
              v$77.toggle(vF12320.Ij.Hj());
              v$79.toggle(vF12320.Ij.Hj());
            });
          };
          v789.prototype.qo = function () {
            vO37.bo.go.stop();
            vO37.bo.go.fadeOut(50);
            vO37.bo.ho.stop();
            vO37.bo.ho.fadeOut(50);
            vO37.bo.io.stop();
            vO37.bo.io.fadeOut(50);
            vO37.bo.ko.stop();
            vO37.bo.ko.fadeOut(50);
            vO37.bo.jo.stop();
            vO37.bo.jo.fadeIn(200);
            vO37.bo.lo.stop();
            vO37.bo.lo.fadeOut(50);
            vO37.bo.mo.stop();
            vO37.bo.mo.fadeOut(50);
            vO37.bo.no.stop();
            vO37.bo.no.fadeOut(50);
            vO37.bo.oo.stop();
            vO37.bo.oo.fadeOut(50);
            vO37.bo.po.stop();
            vO37.bo.po.fadeOut(50);
          };
          v789.prototype.Hk = function () {
            var vF12321 = f123();
            vF12321.Ci.Ce();
            if (vF12321.Go()) {
              v$80.show();
            } else {
              v$80.hide();
            }
          };
          v789.prototype.Zh = function () {
            return v$75.prop("checked");
          };
          return v789;
        }();
        vO37.jk = function () {
          var v$81 = $("#store-view-canv");
          var v$82 = $("#skin-description-text");
          var v$83 = $("#skin-group-description-text");
          var v$84 = $("#store-locked-bar");
          var v$85 = $("#store-locked-bar-text");
          var v$86 = $("#store-buy-button");
          var v$87 = $("#store-item-price");
          var v$88 = $("#store-groups");
          var v$89 = $("#store-view-prev");
          var v$90 = $("#store-view-next");
          var v792 = vO39.M(vO37.bo, function () {
            vO37.bo.call(this, vO39.H("index.game.popup.menu.skins.tab"), true);
            var vThis70 = this;
            var vF12322 = f123();
            this.Ho = null;
            this.Io = [];
            this.Jo = {};
            this.Ko = new vO37.dm(v$81);
            v$86.click(function () {
              vF12322.Ci.Be();
              vThis70.Lo();
            });
            v$89.click(function () {
              vF12322.Ci.Be();
              vThis70.Ho.Mo();
            });
            v$90.click(function () {
              vF12322.Ci.Be();
              vThis70.Ho.No();
            });
          });
          v792.prototype.ha = function () {
            v792.parent.prototype.ha.call(this);
            var vThis71 = this;
            var vF12323 = f123();
            vF12323.Lc.$b(function () {
              var v793 = vF12323.Lc.Xb();
              vThis71.Io = [];
              for (var vLN0127 = 0; vLN0127 < v793.skinGroupArrayDict.length; vLN0127++) {
                vThis71.Io.push(new vF17(vThis71, v793.skinGroupArrayDict[vLN0127]));
              }
              vThis71.Jo = {};
              for (var vLN0128 = 0; vLN0128 < v793.skinArrayDict.length; vLN0128++) {
                var v794 = v793.skinArrayDict[vLN0128];
                vThis71.Jo[v794.id] = v794;
              }
              vThis71.Oo();
            });
            this.Po(false);
            vF12323.On.zj(function () {
              vThis71.Po(false);
            });
          };
          v792.prototype.qo = function () {
            vO37.bo.go.stop();
            vO37.bo.go.fadeOut(50);
            vO37.bo.ho.stop();
            vO37.bo.ho.fadeOut(50);
            vO37.bo.io.stop();
            vO37.bo.io.fadeOut(50);
            vO37.bo.ko.stop();
            vO37.bo.ko.fadeOut(50);
            vO37.bo.jo.stop();
            vO37.bo.jo.fadeOut(50);
            vO37.bo.lo.stop();
            vO37.bo.lo.fadeIn(200);
            vO37.bo.mo.stop();
            vO37.bo.mo.fadeOut(50);
            vO37.bo.no.stop();
            vO37.bo.no.fadeOut(50);
            vO37.bo.oo.stop();
            vO37.bo.oo.fadeOut(50);
            vO37.bo.po.stop();
            vO37.bo.po.fadeOut(50);
          };
          v792.prototype.Hk = function () {
            f123().Ci.pe(vO37.ge.je._e);
            f123().Ci.Ce();
            this.Oo();
            this.Ko.Kf(true);
          };
          v792.prototype.Bk = function () {
            this.Ko.Kf(false);
          };
          v792.prototype.Jf = function () {
            this.Ko.Jf();
          };
          v792.prototype.Nf = function (p1008, p1009) {
            this.Ko.Nf();
          };
          v792.prototype.Oo = function () {
            var vThis72 = this;
            var vThis73 = this;
            var vF12324 = f123();
            v$88.empty();
            for (var vLN0129 = 0; vLN0129 < this.Io.length; vLN0129++) {
              (function (p1010) {
                var v795 = vThis72.Io[p1010];
                var v796 = document.createElement("li");
                v$88.append(v796);
                var v$91 = $(v796);
                if (v795.To && v795.To.isCustom) {
                  v$91.css("background-color", "#FFF");
                  v$91.css("color", "#000");
                }
                v$91.html(v795.Qo());
                v$91.click(function () {
                  vF12324.Ci.Be();
                  vThis73.Ro(v795);
                });
                v795.So = v$91;
              })(vLN0129);
            }
            if (this.Io.length > 0) {
              var v797 = vF12324.On.rj(vO37.tj.sj);
              for (var vLN0129 = 0; vLN0129 < this.Io.length; vLN0129++) {
                var v798 = this.Io[vLN0129];
                for (var v799 = v798.To.list, vLN0130 = 0; vLN0130 < v799.length; vLN0130++) {
                  if (v799[vLN0130] == v797) {
                    v798.Uo = vLN0130;
                    this.Ro(v798);
                    return;
                  }
                }
              }
              this.Ro(this.Io[0]);
            }
          };
          v792.prototype.Ro = function (p1011) {
            var vF12325 = f123();
            if (this.Ho !== p1011) {
              this.Ho = p1011;
              v$88.children().removeClass("pressed");
              if (this.Ho.So) {
                this.Ho.So.addClass("pressed");
              }
              v$83.html("");
              if (p1011.To != null) {
                var v800 = vF12325.Lc.Xb().textDict[p1011.To.description];
                if (v800 != null) {
                  v$83.html(vO39.K(vO39.I(v800)));
                }
              }
              this.Po(true);
            }
          };
          v792.prototype.Vo = function () {
            if (this.Ho == null) {
              return vO37.Si.Ui();
            } else {
              return this.Ho.Wo();
            }
          };
          v792.prototype.Lo = function () {
            var vThis74 = this;
            var v801 = this.Vo();
            if (v801.Wi()) {
              var v802 = v801.bc();
              vThis74.Xo(v802);
            }
          };
          v792.prototype.Xo = function (p1012) {
            var vF12326 = f123();
            var v803 = vF12326.On.Gj(p1012, vO37.tj.sj);
            if (v803 != null) {
              var v804 = v803.Jj();
              if (!(vF12326.Ij.il() < v804)) {
                var v805 = vF12326.On.rj(vO37.tj.sj);
                var v806 = vF12326.On.rj(vO37.tj.uj);
                var v807 = vF12326.On.rj(vO37.tj.vj);
                var v808 = vF12326.On.rj(vO37.tj.xj);
                var v809 = vF12326.On.rj(vO37.tj.wj);
                var v810 = this.ro(5000);
                vF12326.Ij.Hl(p1012, vO37.tj.sj, function () {
                  v810.vo();
                  vF12326.og.Ak(vF12326.og.tk);
                }, function (p1013) {
                  vF12326.Ij.Bl(function () {
                    vF12326.On.Fj(v805, vO37.tj.sj);
                    vF12326.On.Fj(v806, vO37.tj.uj);
                    vF12326.On.Fj(v807, vO37.tj.vj);
                    vF12326.On.Fj(v808, vO37.tj.xj);
                    vF12326.On.Fj(v809, vO37.tj.wj);
                    vF12326.On.Fj(p1012, vO37.tj.sj);
                    v810.vo();
                  });
                });
              }
            }
          };
          v792.prototype.Po = function (p1014) {
            var vF12327 = f123();
            var v811 = vF12327.On.yj();
            var v812 = this.Vo();
            if (v812.Wi()) {
              var v813 = v812.bc();
              var v814 = vF12327.On.Gj(v813, vO37.tj.sj);
              var v815 = false;
              var v816 = vF12327.On.Cj(v813, vO37.tj.sj);
              var v817 = true;
              if (v816) {
                v$84.hide();
                v$86.hide();
              } else if (v814 == null || v814.Kj()) {
                v815 = true;
                v$84.show();
                v$86.hide();
                v$85.text(vO39.H("index.game.popup.menu.store.locked"));
                if (v814 != null && v814.Kj()) {
                  var v818 = vF12327.Lc.Xb().textDict[v814.Em()];
                  if (v818 != null) {
                    v$85.text(vO39.I(v818));
                  }
                }
              } else {
                v817 = false;
                v$84.hide();
                v$86.show();
                v$87.html(v814.Jj());
              }
              v$82.html("");
              var v819 = vF12327.Lc.Xb().textDict[v814.Fm()];
              var v820 = v819 ? vO39.K(vO39.I(v819)) : v814.Fm();
              if (v814 != null && v814.Fm() != null) {
                v$82.html(v820);
              }
              if (v817 && v814.Bm !== true) {
                v$2.html("<button onclick=\"mbf.mbf_cambiar_add('" + v813 + "', '" + v820 + "')\">Add</button>");
              } else {
                v$2.html("");
              }
              this.Ko.$l(v811.Um(v813));
              this.Ko.um(v815);
              if (p1014) {
                vF12327.On.Fj(v813, vO37.tj.sj);
              }
            }
          };
          var vF17 = function () {
            function f217(p1015, p1016) {
              this.Yo = p1015;
              this.Uo = 0;
              this.To = p1016;
            }
            f217.prototype.Mo = function () {
              if (--this.Uo < 0) {
                this.Uo = this.To.list.length - 1;
              }
              this.Yo.Po(true);
            };
            f217.prototype.No = function () {
              if (++this.Uo >= this.To.list.length) {
                this.Uo = 0;
              }
              this.Yo.Po(true);
            };
            f217.prototype.Qo = function () {
              if (this.To.img) {
                var v821 = f123().Lc.Xb().customPaths;
                var v822 = URL_CDN + "/images/" + v821.texture;
                var vA19 = [];
                try {
                  vA19.push("background-image:url('" + v822 + "')");
                  vA19.push("background-position: -" + v821.map[this.To.img].x + "px -" + v821.map[this.To.img].y + "px");
                  vA19.push("background-repeat:no-repeat");
                  vA19.push("width: 180px");
                  vA19.push("height: 40px");
                } catch (e38) {
                  console.error(v822, e38);
                }
                return "<div id=\"" + this.To.id + "\" style=\"" + vA19.join(";") + "\"></div>";
              }
              return vO39.I(this.To.name);
            };
            f217.prototype.Wo = function () {
              if (this.Uo >= this.To.list.length) {
                return vO37.Si.Ui();
              } else {
                return vO37.Si.Vi(this.To.list[this.Uo]);
              }
            };
            return f217;
          }();
          return v792;
        }();
        vO37.lk = function () {
          var v$92 = $("#store-go-coins-button");
          var v$93 = $("#store-go-skins-button");
          var v$94 = $("#store-go-wear-button");
          var v823 = vO39.M(vO37.bo, function () {
            vO37.bo.call(this, vO39.H("index.game.popup.menu.store.tab"), true);
            var vF12328 = f123();
            v$92.click(function () {
              vF12328.Ci.Be();
              vF12328.og.Ak(vF12328.og._j);
            });
            v$93.click(function () {
              vF12328.Ci.Be();
              vF12328.og.Ak(vF12328.og.ik);
            });
            v$94.click(function () {
              vF12328.Ci.Be();
              vF12328.og.Ak(vF12328.og.mk);
            });
          });
          v823.prototype.ha = function () {
            v823.parent.prototype.ha.call(this);
          };
          v823.prototype.qo = function () {
            vO37.bo.go.stop();
            vO37.bo.go.fadeOut(50);
            vO37.bo.ho.stop();
            vO37.bo.ho.fadeOut(50);
            vO37.bo.io.stop();
            vO37.bo.io.fadeOut(50);
            vO37.bo.ko.stop();
            vO37.bo.ko.fadeOut(50);
            vO37.bo.jo.stop();
            vO37.bo.jo.fadeOut(50);
            vO37.bo.lo.stop();
            vO37.bo.lo.fadeOut(50);
            vO37.bo.mo.stop();
            vO37.bo.mo.fadeIn(200);
            vO37.bo.no.stop();
            vO37.bo.no.fadeOut(50);
            vO37.bo.oo.stop();
            vO37.bo.oo.fadeOut(50);
            vO37.bo.po.stop();
            vO37.bo.po.fadeOut(50);
          };
          v823.prototype.Hk = function () {
            f123().Ci.Ce();
          };
          return v823;
        }();
        vO37.nk = function () {
          var v$95 = $("#wear-view-canv");
          var v$96 = $("#wear-description-text");
          var v$97 = $("#wear-locked-bar");
          var v$98 = $("#wear-locked-bar-text");
          var v$99 = $("#wear-buy-button");
          var v$100 = $("#wear-item-price");
          var v$101 = $("#wear-eyes-button");
          var v$102 = $("#wear-mouths-button");
          var v$103 = $("#wear-glasses-button");
          var v$104 = $("#wear-hats-button");
          var v$105 = $("#wear-tint-chooser");
          var v$106 = $("#wear-view-prev");
          var v$107 = $("#wear-view-next");
          var v824 = vO39.M(vO37.bo, function () {
            var vThis75 = this;
            vO37.bo.call(this, vO39.H("index.game.popup.menu.wear.tab"), true);
            var vF12329 = f123();
            var vThis76 = this;
            this.Zo = [];
            this.uj = new vF18(this, vO37.tj.uj, v$101);
            this.vj = new vF18(this, vO37.tj.vj, v$102);
            this.xj = new vF18(this, vO37.tj.xj, v$103);
            this.wj = new vF18(this, vO37.tj.wj, v$104);
            this.$o = null;
            this._o = null;
            this.ap = null;
            this.bp = null;
            this.cp = null;
            this.dp = null;
            this.Ko = new vO37.dm(v$95);
            v$99.click(function () {
              vF12329.Ci.Be();
              vThis76.ep();
            });
            v$106.click(function () {
              vF12329.Ci.Be();
              vThis76.$o.fp();
            });
            v$107.click(function () {
              vF12329.Ci.Be();
              vThis76.$o.gp();
            });
            v$101.click(function () {
              vF12329.Ci.Be();
              vThis76.hp(vThis75.uj);
            });
            v$102.click(function () {
              vF12329.Ci.Be();
              vThis76.hp(vThis75.vj);
            });
            v$103.click(function () {
              vF12329.Ci.Be();
              vThis76.hp(vThis75.xj);
            });
            v$104.click(function () {
              vF12329.Ci.Be();
              vThis76.hp(vThis75.wj);
            });
            this.Zo.push(this.uj);
            this.Zo.push(this.vj);
            this.Zo.push(this.xj);
            this.Zo.push(this.wj);
          });
          v824.prototype.ha = function () {
            v824.parent.prototype.ha.call(this);
            var vF12330 = f123();
            var vThis77 = this;
            vF12330.Lc.$b(function () {
              var v825 = vF12330.Lc.Xb();
              vThis77._o = v825.eyesDict;
              vThis77.ap = v825.mouthDict;
              vThis77.bp = v825.glassesDict;
              vThis77.cp = v825.hatDict;
              vThis77.dp = v825.colorDict;
              vThis77.uj.ip(v825.eyesVariantArray);
              vThis77.uj.jp(vThis77._o);
              vThis77.vj.ip(v825.mouthVariantArray);
              vThis77.vj.jp(vThis77.ap);
              vThis77.xj.ip(v825.glassesVariantArray);
              vThis77.xj.jp(vThis77.bp);
              vThis77.wj.ip(v825.hatVariantArray);
              vThis77.wj.jp(vThis77.cp);
            });
            this.Po(false);
            vF12330.On.zj(function () {
              vThis77.Po(false);
            });
          };
          v824.prototype.qo = function () {
            vO37.bo.go.stop();
            vO37.bo.go.fadeOut(50);
            vO37.bo.ho.stop();
            vO37.bo.ho.fadeOut(50);
            vO37.bo.io.stop();
            vO37.bo.io.fadeOut(50);
            vO37.bo.ko.stop();
            vO37.bo.ko.fadeOut(50);
            vO37.bo.jo.stop();
            vO37.bo.jo.fadeOut(50);
            vO37.bo.lo.stop();
            vO37.bo.lo.fadeOut(50);
            vO37.bo.mo.stop();
            vO37.bo.mo.fadeOut(50);
            vO37.bo.no.stop();
            vO37.bo.no.fadeIn(200);
            vO37.bo.oo.stop();
            vO37.bo.oo.fadeOut(50);
            vO37.bo.po.stop();
            vO37.bo.po.fadeOut(50);
          };
          v824.prototype.Hk = function () {
            f123().Ci.pe(vO37.ge.je._e);
            f123().Ci.Ce();
            this.hp(this.$o ?? this.uj);
            this.Ko.Kf(true);
          };
          v824.prototype.Bk = function () {
            this.Ko.Kf(false);
          };
          v824.prototype.Jf = function () {
            this.Ko.Jf();
          };
          v824.prototype.Nf = function (p1017, p1018) {
            this.Ko.Nf();
          };
          v824.prototype.hp = function (p1019) {
            this.$o = p1019;
            for (var vLN0131 = 0; vLN0131 < this.Zo.length; vLN0131++) {
              this.Zo[vLN0131].Ao.removeClass("pressed");
            }
            this.$o.Ao.addClass("pressed");
            this.$o.Gk();
          };
          v824.prototype.kp = function () {
            if (this.$o == null) {
              return vO37.Si.Ui();
            } else {
              return vO37.Si.Vi({
                ae: this.$o.Wo(),
                nd: this.$o.nd
              });
            }
          };
          v824.prototype.ep = function () {
            var vThis78 = this;
            var v826 = this.kp();
            if (v826.Wi()) {
              var v827 = v826.bc();
              vThis78.lp(v827.ae, v827.nd);
            }
          };
          v824.prototype.lp = function (p1020, p1021) {
            var vF12331 = f123();
            var v828 = vF12331.On.Gj(p1020, p1021);
            if (v828 != null) {
              var v829 = v828.Jj();
              if (!(vF12331.Ij.il() < v829)) {
                var v830 = vF12331.On.rj(vO37.tj.sj);
                var v831 = vF12331.On.rj(vO37.tj.uj);
                var v832 = vF12331.On.rj(vO37.tj.vj);
                var v833 = vF12331.On.rj(vO37.tj.xj);
                var v834 = vF12331.On.rj(vO37.tj.wj);
                var v835 = this.ro(5000);
                vF12331.Ij.Hl(p1020, p1021, function () {
                  v835.vo();
                  vF12331.og.Ak(vF12331.og.tk);
                }, function (p1022) {
                  vF12331.Ij.Bl(function () {
                    vF12331.On.Fj(v830, vO37.tj.sj);
                    vF12331.On.Fj(v831, vO37.tj.uj);
                    vF12331.On.Fj(v832, vO37.tj.vj);
                    vF12331.On.Fj(v833, vO37.tj.xj);
                    vF12331.On.Fj(v834, vO37.tj.wj);
                    vF12331.On.Fj(p1020, p1021);
                    v835.vo();
                  });
                });
              }
            }
          };
          v824.prototype.Po = function (p1023) {
            var vF12332 = f123();
            var v836 = vF12332.On.yj();
            var v837 = this.kp();
            if (v837.Wi()) {
              var v838 = v837.bc();
              var v839 = vF12332.On.Gj(v838.ae, v838.nd);
              var v840 = false;
              if (vF12332.On.Cj(v838.ae, v838.nd)) {
                v$97.hide();
                v$99.hide();
              } else if (v839 == null || v839.Kj()) {
                v840 = true;
                v$97.show();
                v$99.hide();
                v$98.text(vO39.H("index.game.popup.menu.store.locked"));
                if (v839 != null && v839.Kj()) {
                  var v841 = vF12332.Lc.Xb().textDict[v839.Em()];
                  if (v841 != null) {
                    v$98.text(vO39.I(v841));
                  }
                }
              } else {
                v$97.hide();
                v$99.show();
                v$100.html(v839.Jj());
              }
              v$96.html("");
              if (v839 != null && v839.Fm() != null) {
                var v842 = vF12332.Lc.Xb().textDict[v839.Fm()];
                if (v842 != null) {
                  v$96.html(vO39.K(vO39.I(v842)));
                }
              }
              var v843 = this.Ko;
              switch (v838.nd) {
                case vO37.tj.uj:
                  v843.$l(v836.Vm(v838.ae));
                  v843.vm(v840);
                  break;
                case vO37.tj.vj:
                  v843.$l(v836.Wm(v838.ae));
                  v843.wm(v840);
                  break;
                case vO37.tj.xj:
                  v843.$l(v836.Ym(v838.ae));
                  v843.ym(v840);
                  break;
                case vO37.tj.wj:
                  v843.$l(v836.Xm(v838.ae));
                  v843.xm(v840);
              }
              if (p1023) {
                vF12332.On.Fj(v838.ae, v838.nd);
              }
            }
          };
          var vF18 = function () {
            function f218(p1024, p1025, p1026) {
              this.Yo = p1024;
              this.nd = p1025;
              this.Ao = p1026;
              this.ac = {};
              this.mp = [[]];
              this.np = -10;
              this.op = -10;
            }
            f218.prototype.ip = function (p1027) {
              this.mp = p1027;
            };
            f218.prototype.jp = function (p1028) {
              this.ac = p1028;
            };
            f218.prototype.Gk = function () {
              var vF12333 = f123();
              var v844 = vF12333.On.rj(this.nd);
              for (var vLN0132 = 0; vLN0132 < this.mp.length; vLN0132++) {
                for (var vLN0133 = 0; vLN0133 < this.mp[vLN0132].length; vLN0133++) {
                  if (this.mp[vLN0132][vLN0133] == v844) {
                    this.pp(vLN0132);
                    this.qp(vLN0133);
                    return;
                  }
                }
              }
              this.pp(0);
              this.qp(0);
            };
            f218.prototype.fp = function () {
              var v845 = this.np - 1;
              if (v845 < 0) {
                v845 = this.mp.length - 1;
              }
              this.pp(v845);
              this.qp(this.op % this.mp[v845].length);
            };
            f218.prototype.gp = function () {
              var v846 = this.np + 1;
              if (v846 >= this.mp.length) {
                v846 = 0;
              }
              this.pp(v846);
              this.qp(this.op % this.mp[v846].length);
            };
            f218.prototype.pp = function (p1029) {
              var vThis79 = this;
              if (!(p1029 < 0) && !(p1029 >= this.mp.length)) {
                this.np = p1029;
                v$105.empty();
                var v847 = this.mp[this.np];
                if (v847.length > 1) {
                  for (var vLN0134 = 0; vLN0134 < v847.length; vLN0134++) {
                    (function (p1030) {
                      var v848 = v847[p1030];
                      var v849 = vThis79.ac[v848];
                      var v850 = "#" + vThis79.Yo.dp[v849.prime];
                      var v$108 = $("<div style=\"border-color:" + v850 + "\"></div>");
                      v$108.click(function () {
                        f123().Ci.Be();
                        vThis79.qp(p1030);
                      });
                      v$105.append(v$108);
                    })(vLN0134);
                  }
                }
              }
            };
            f218.prototype.qp = function (p1031) {
              if (!(p1031 < 0) && !(p1031 >= this.mp[this.np].length)) {
                this.op = p1031;
                v$105.children().css("background-color", "transparent");
                var v851 = v$105.children(":nth-child(" + (1 + p1031) + ")");
                v851.css("background-color", v851.css("border-color"));
                this.Yo.Po(true);
              }
            };
            f218.prototype.Wo = function () {
              return this.mp[this.np][this.op];
            };
            return f218;
          }();
          return v824;
        }();
        vO37.Yj = function () {
          var v$109 = $("#withdraw-consent-yes");
          var v$110 = $("#withdraw-consent-no");
          var v852 = vO39.M(vO37.bo, function () {
            vO37.bo.call(this, vO39.H("index.game.popup.menu.consent.tab"), false);
            var vF12334 = f123();
            v$109.click(function () {
              vF12334.Ci.Be();
              if (vF12334.Go()) {
                vF12334.og.Ak(vF12334.og._e);
                vF12334.rp(false, true);
                vF12334.og.qk._n(new vO37.sp());
              } else {
                vF12334.og.Dk();
              }
            });
            v$110.click(function () {
              vF12334.Ci.Be();
              vF12334.og.Dk();
            });
          });
          v852.prototype.ha = function () {
            v852.parent.prototype.ha.call(this);
          };
          v852.prototype.qo = function () {
            vO37.bo.go.stop();
            vO37.bo.go.fadeOut(50);
            vO37.bo.ho.stop();
            vO37.bo.ho.fadeOut(50);
            vO37.bo.io.stop();
            vO37.bo.io.fadeOut(50);
            vO37.bo.ko.stop();
            vO37.bo.ko.fadeOut(50);
            vO37.bo.jo.stop();
            vO37.bo.jo.fadeOut(50);
            vO37.bo.lo.stop();
            vO37.bo.lo.fadeOut(50);
            vO37.bo.mo.stop();
            vO37.bo.mo.fadeOut(50);
            vO37.bo.no.stop();
            vO37.bo.no.fadeOut(50);
            vO37.bo.oo.stop();
            vO37.bo.oo.fadeIn(200);
            vO37.bo.po.stop();
            vO37.bo.po.fadeOut(50);
          };
          v852.prototype.Hk = function () {
            f123().Ci.Ce();
          };
          return v852;
        }();
        vO37.$j = function () {
          var v$111 = $("#delete-account-timer");
          var v$112 = $("#delete-account-yes");
          var v$113 = $("#delete-account-no");
          var v853 = vO39.M(vO37.bo, function () {
            vO37.bo.call(this, vO39.H("index.game.popup.menu.delete.tab"), false);
            var vF12335 = f123();
            v$112.click(function () {
              vF12335.Ci.Be();
              if (vF12335.Ij.Hj()) {
                vF12335.Ij.Sl();
                vF12335.Ij.Kl();
              } else {
                vF12335.og.Dk();
              }
            });
            v$113.click(function () {
              vF12335.Ci.Be();
              vF12335.og.Dk();
            });
            this.tp = [];
          });
          v853.prototype.ha = function () {
            v853.parent.prototype.ha.call(this);
          };
          v853.prototype.qo = function () {
            vO37.bo.go.stop();
            vO37.bo.go.fadeOut(50);
            vO37.bo.ho.stop();
            vO37.bo.ho.fadeOut(50);
            vO37.bo.io.stop();
            vO37.bo.io.fadeOut(50);
            vO37.bo.ko.stop();
            vO37.bo.ko.fadeOut(50);
            vO37.bo.jo.stop();
            vO37.bo.jo.fadeOut(50);
            vO37.bo.lo.stop();
            vO37.bo.lo.fadeOut(50);
            vO37.bo.mo.stop();
            vO37.bo.mo.fadeOut(50);
            vO37.bo.no.stop();
            vO37.bo.no.fadeOut(50);
            vO37.bo.oo.stop();
            vO37.bo.oo.fadeOut(50);
            vO37.bo.po.stop();
            vO37.bo.po.fadeIn(200);
          };
          v853.prototype.Hk = function () {
            f123().Ci.Ge();
            v$112.stop();
            v$112.hide();
            v$111.stop();
            v$111.show();
            v$111.text(".. 10 ..");
            this.up();
            this.vp(function () {
              v$111.text(".. 9 ..");
            }, 1000);
            this.vp(function () {
              v$111.text(".. 8 ..");
            }, 2000);
            this.vp(function () {
              v$111.text(".. 7 ..");
            }, 3000);
            this.vp(function () {
              v$111.text(".. 6 ..");
            }, 4000);
            this.vp(function () {
              v$111.text(".. 5 ..");
            }, 5000);
            this.vp(function () {
              v$111.text(".. 4 ..");
            }, 6000);
            this.vp(function () {
              v$111.text(".. 3 ..");
            }, 7000);
            this.vp(function () {
              v$111.text(".. 2 ..");
            }, 8000);
            this.vp(function () {
              v$111.text(".. 1 ..");
            }, 9000);
            this.vp(function () {
              v$111.hide();
              v$112.fadeIn(300);
            }, 10000);
          };
          v853.prototype.vp = function (p1032, p1033) {
            var vSetTimeout2 = setTimeout(p1032, p1033);
            this.tp.push(vSetTimeout2);
          };
          v853.prototype.up = function () {
            for (var vLN0135 = 0; vLN0135 < this.tp.length; vLN0135++) {
              clearTimeout(this.tp[vLN0135]);
            }
            this.tp = [];
          };
          return v853;
        }();
        vO37.wp = function () {
          function f219() {
            this.ao = function () {};
          }
          f219.prototype.tf = function () {};
          f219.prototype.Hk = function () {};
          return f219;
        }();
        vO37.Gl = function () {
          var v854 = vO39.M(vO37.wp, function (p1034) {
            vO37.wp.call(this);
            var v855 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
            this.xp = $("<div id=\"" + v855 + "\" class=\"toaster toaster-coins\">    <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />    <div class=\"toaster-coins-val\">+" + p1034 + "</div>    <div class=\"toaster-coins-close\">" + vO39.H("index.game.toaster.continue") + "</div></div>");
            var vThis80 = this;
            this.xp.find(".toaster-coins-close").click(function () {
              f123().Ci.Be();
              vThis80.ao();
            });
          });
          v854.prototype.tf = function () {
            return this.xp;
          };
          v854.prototype.Hk = function () {
            f123().Ci.Ee();
          };
          return v854;
        }();
        vO37.Fl = function () {
          var v856 = vO39.M(vO37.wp, function (p1035) {
            vO37.wp.call(this);
            var v857 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
            this.xp = $("<div id=\"" + v857 + "\" class=\"toaster toaster-levelup\">    <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />    <div class=\"toaster-levelup-val\">" + p1035 + "</div>    <div class=\"toaster-levelup-text\">" + vO39.H("index.game.toaster.levelup") + "</div>    <div class=\"toaster-levelup-close\">" + vO39.H("index.game.toaster.continue") + "</div></div>");
            var vThis81 = this;
            this.xp.find(".toaster-levelup-close").click(function () {
              f123().Ci.Be();
              vThis81.ao();
            });
          });
          v856.prototype.tf = function () {
            return this.xp;
          };
          v856.prototype.Hk = function () {
            f123().Ci.De();
          };
          return v856;
        }();
        vO37.sp = function () {
          var v858 = vO39.M(vO37.wp, function () {
            vO37.wp.call(this);
            var vThis82 = this;
            var vF12336 = f123();
            var v859 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
            this.xp = $("<div id=\"" + v859 + "\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\"" + vO39.a.d + "\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">" + vO39.H("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + "</span>        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + vO39.H("index.game.toaster.consent.link") + "</a>    </div>    <div class=\"toaster-consent-close\">" + vO39.H("index.game.toaster.consent.iAccept") + "</div></div>");
            this.yp = this.xp.find(".toaster-consent-close");
            this.yp.hide();
            this.yp.click(function () {
              vF12336.Ci.Be();
              if (vF12336.Go()) {
                vF12336.rp(true, true);
              }
              vThis82.ao();
            });
          });
          v858.prototype.tf = function () {
            return this.xp;
          };
          v858.prototype.Hk = function () {
            var vThis83 = this;
            var vF12337 = f123();
            if (vF12337.Go() && !vF12337.hl()) {
              vF12337.Ci.Ge();
              setTimeout(function () {
                vThis83.yp.fadeIn(300);
              }, 2000);
            } else {
              setTimeout(function () {
                vThis83.ao();
              }, 0);
            }
          };
          return v858;
        }();
        vO37.uk = function () {
          var v$114 = $("#error-gateway-connection-retry");
          var v860 = vO39.M(vO37.kf, function () {
            vO37.kf.call(this, vO37.Fk.wn);
            var vF12338 = f123();
            v$114.click(function () {
              vF12338.Ci.Be();
              vF12338.og.ie.Mn();
              vF12338.og.Ak(vF12338.og.ie);
              setTimeout(function () {
                var v861 = vO39.a.b + "/pub/healthCheck/ping";
                vO39.Z(v861, function () {
                  vF12338.og.Ak(vF12338.og.tk);
                }, function (p1036) {
                  vF12338.og.ie.Kn();
                  vF12338.Lc.Ib(function () {
                    vF12338.og.Ak(vF12338.og._e);
                  }, function (p1037) {
                    vF12338.og.Ak(vF12338.og.tk);
                  }, function (p1038, p1039) {
                    var vP1038 = p1038;
                    vF12338.og.ie.Ln(vP1038, p1039);
                  });
                });
              }, 2000);
            });
          });
          v860.prototype.ha = function () {};
          v860.prototype.Gk = function () {
            vO37.kf.jn.stop();
            vO37.kf.jn.fadeOut(50);
            vO37.kf.ln.stop();
            vO37.kf.ln.fadeOut(50);
            vO37.kf.nn.stop();
            vO37.kf.nn.fadeOut(50);
            vO37.kf.pn.stop();
            vO37.kf.pn.fadeOut(50);
            vO37.kf.sn.stop();
            vO37.kf.sn.fadeOut(50);
            vO37.kf.qn.stop();
            vO37.kf.qn.fadeOut(50);
            vO37.kf.rn.stop();
            vO37.kf.rn.fadeOut(50);
            vO37.kf.tn.stop();
            vO37.kf.tn.fadeIn(500);
            vO37.kf.un_error.stop();
            vO37.kf.un_error.fadeOut(50);
            vO37.kf.mn.stop();
            vO37.kf.mn.fadeIn(1);
            vO37.kf.bgcanvas.stop();
            vO37.kf.bgcanvas.fadeIn(500);
            vO37.GameView.Kf(true);
            vO37.kf.socialButtons.stop();
            vO37.kf.socialButtons.fadeOut(50);
            vO37.kf.vn.stop();
            vO37.kf.vn.fadeOut(50);
          };
          v860.prototype.Hk = function () {
            var vF12339 = f123();
            vF12339.Ci.pe(vO37.ge.je._e);
            vF12339.Ci.Ge();
          };
          return v860;
        }();
        vO37.wk = function () {
          var v$115 = $("#error-game-connection-retry");
          var v862 = vO39.M(vO37.kf, function () {
            vO37.kf.call(this, vO37.Fk.wn);
            var vF12340 = f123();
            v$115.click(function () {
              vF12340.Ci.Be();
              vF12340.og.Ak(vF12340.og._e);
            });
          });
          v862.prototype.ha = function () {};
          v862.prototype.Gk = function () {
            vO37.kf.jn.stop();
            vO37.kf.jn.fadeOut(50);
            vO37.kf.ln.stop();
            vO37.kf.ln.fadeOut(50);
            vO37.kf.nn.stop();
            vO37.kf.nn.fadeOut(50);
            vO37.kf.pn.stop();
            vO37.kf.pn.fadeOut(50);
            vO37.kf.sn.stop();
            vO37.kf.sn.fadeOut(50);
            vO37.kf.qn.stop();
            vO37.kf.qn.fadeOut(50);
            vO37.kf.rn.stop();
            vO37.kf.rn.fadeOut(50);
            vO37.kf.tn.stop();
            vO37.kf.tn.fadeOut(50);
            vO37.kf.un_error.stop();
            vO37.kf.un_error.fadeIn(500);
            vO37.kf.mn.stop();
            vO37.kf.mn.fadeIn(1);
            vO37.kf.bgcanvas.stop();
            vO37.kf.bgcanvas.fadeIn(500);
            vO37.GameView.Kf(true);
            vO37.kf.socialButtons.stop();
            vO37.kf.socialButtons.fadeOut(50);
            vO37.kf.vn.stop();
            vO37.kf.vn.fadeOut(50);
          };
          v862.prototype.Hk = function () {
            var vF12341 = f123();
            vF12341.Ci.pe(vO37.ge.je._e);
            vF12341.Ci.Ge();
          };
          return v862;
        }();
        vO39.zp = function () {
          function f220(p1040) {
            var v863 = p1040 + Math.floor(Math.random() * 65535) * 37;
            vO37.Vf.eg(vO37.Vf.cg, v863, 30);
          }
          function f221() {
            return parseInt(vO37.Vf.fg(vO37.Vf.cg)) % 37;
          }
          return function () {
            var vF221 = f221();
            if (!(vF221 >= 0) || !(vF221 < vF19.Ap)) {
              vF221 = Math.max(0, vF19.Ap - 2);
            }
            var vO55 = {
              zn: vF19,
              Bp: false
            };
            vO55.Cp = Date.now();
            vO55.Dp = 0;
            vO55.Ep = 0;
            vO55.Fp = null;
            vO55.Gp = vO39.a.j;
            vO55.Hp = vO39.a.i;
            vO55.dh = null;
            vO55.Lc = null;
            vO55.xe = null;
            vO55.Ci = null;
            vO55.og = null;
            vO55.On = null;
            vO55.Ij = null;
            try {
              if (navigator && navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (p1041) {
                  if (p1041.coords !== undefined) {
                    var v864 = p1041.coords;
                    if (v864.latitude !== undefined && v864.longitude !== undefined) {
                      vO55.Fp = p1041;
                    }
                  }
                }, function (p1042) {});
              }
            } catch (e39) {}
            vO55.Ip = function () {
              vO55.dh = new vO37.Engine();
              vO55.dh.Kp = new vO37.MessageProcessor(vO55.dh);
              vO55.Lc = new vO37._a();
              vO55.xe = new vO37.Qj();
              vO55.Ci = new vO37.ge();
              vO55.og = new vO37.Tj();
              vO55.On = new vO37.kj();
              vO55.Ij = new vO37.Mk();
              vO55.ha();
            };
            vO55.ha = function () {
              try {
                ga("send", "event", "app", window.runtimeHash + "_init");
              } catch (e40) {}
              vO55.dh.Lp = function () {
                vO55.og.Ak(vO55.og.vk);
              };
              vO55.dh.Mp = function () {
                var v865 = vO55.og._e.Wn();
                try {
                  ga("send", "event", "game", window.runtimeHash + "_start", v865);
                } catch (e41) {}
                vO55.Ci.pe(vO37.ge.je.af);
                vO55.og.Ak(vO55.og.af.Dn());
              };
              vO55.dh.Np = function () {
                try {
                  ga("send", "event", "game", window.runtimeHash + "_end");
                } catch (e42) {}
                if ($("body").height() >= 430) {
                  vO55.zn.Op.ka();
                }
                vO55.Lc.Ib(null, null, null);
                (function () {
                  var v866 = Math.floor(vO55.dh.ch.Bh);
                  var v867 = vO55.dh.Ih;
                  if (vO55.Ij.Hj()) {
                    vO55.Ij.Bl(function () {
                      vO55.Pp(v866, v867);
                    });
                  } else {
                    vO55.Pp(v866, v867);
                  }
                })();
              };
              vO55.dh.Qp = function (p1043) {
                p1043(vO55.og.af.Gn(), vO55.og.af.Hn());
              };
              vO55.Ij.yl(function () {
                var v868 = vO55.og.Lk();
                if (v868 != null && v868.nd === vO37.Fk.Ek) {
                  vO55.Ci.pe(vO37.ge.je._e);
                  vO55.og.Ak(vO55.og._e);
                }
                if (vO55.Ij.Hj()) {
                  try {
                    var v869 = vO55.Ij.cl();
                    ga("set", "userId", v869);
                  } catch (e43) {}
                }
                if (vO55.Go() && vO55.Ij.Hj() && !vO55.Ij.hl()) {
                  vO55.rp(false, false);
                  vO55.og.qk._n(new vO37.sp());
                } else {
                  vO55.Rp(true);
                }
              });
              vO55.dh.run();
              vO55.og.ha();
              vO55.On.ha();
              vO55.Lc.ha();
              vO55.og._e.Vn();
              vO55.og.Ak(vO55.og._e);
              vO55.xe.ha(function () {
                vO55.Ci.ha();
                vO55.Ij.ha();
                vO55.Lc.Ib(function () {
                  vO55.og._e.Un();
                  vO55.og.Ak(vO55.og._e);
                }, function (p1044) {
                  vO55.og._e.Un();
                  vO55.og.Ak(vO55.og.tk);
                }, function (p1045, p1046) {
                  var vP1045 = p1045;
                  vO55.og.ie.Ln(vP1045, p1046);
                  vO55.og._e.Ln(vP1045, p1046);
                });
                if (vO55.Go() && !vO55.hl()) {
                  vO55.og.qk._n(new vO37.sp());
                } else {
                  vO55.Rp(true);
                }
              });
            };
            vO55.Sp = function (p1047) {
              if (vO55.Ij.Hj()) {
                var v870 = vO55.Ij.Al();
                var v871 = vO39.a.b + "/pub/wuid/" + v870 + "/consent/change?value=" + encodeURI(p1047);
                vO39.Z(v871, function () {}, function (p1048) {});
              }
            };
            vO55.Pn = function (p1049) {
              vF221++;
              if (!vO55.zn.Tp && vF221 >= vO55.zn.Ap) {
                vO55.og.Ak(vO55.og.xk);
                vO55.Ci.pe(vO37.ge.je.cf);
                vO55.zn.Up.ia();
              } else {
                f220(vF221);
                vO55.Vp(p1049);
              }
            };
            vO55.Vp = function (p1050) {
              if (vO55.dh.Wp()) {
                vO55.og.ie.Mn();
                vO55.og.Ak(vO55.og.ie);
                var v872 = vO55.og._e.Wn();
                vO37.Vf.eg(vO37.Vf._f, v872, 30);
                var v873 = vO55.og.$h.Zh();
                vO37.Vf.eg(vO37.Vf.Xf, v873, 30);
                var vLN0136 = 0;
                if (vO55.Fp != null) {
                  var v874 = vO55.Fp.coords.latitude;
                  var v875 = vO55.Fp.coords.longitude;
                  vLN0136 = Math.max(0, Math.min(32767, (v874 + 90) / 180 * 32768)) << 1 | 1 | Math.max(0, Math.min(65535, (v875 + 180) / 360 * 65536)) << 16;
                }
                if (vO55.Ij.Hj()) {
                  vO55.Xp(v872, vLN0136, p1050);
                } else {
                  var v876 = vO55.og._e.el();
                  vO37.Vf.eg(vO37.Vf.ag, v876, 30);
                  var v877 = vO55.On.rj(vO37.tj.sj);
                  vO37.Vf.eg(vO37.Vf.bg, v877, 30);
                  vO55.Yp(v872, vLN0136);
                }
              }
            };
            vO55.Xp = function (p1051, p1052, p1053) {
              var vVO55 = vO55;
              var v878 = vO55.Ij.Al();
              var v879 = vO55.og._e.el();
              var v880 = vO55.On.rj(vO37.tj.sj);
              var v881 = vO55.On.rj(vO37.tj.uj);
              var v882 = vO55.On.rj(vO37.tj.vj);
              var v883 = vO55.On.rj(vO37.tj.xj);
              var v884 = vO55.On.rj(vO37.tj.wj);
              var v885 = (v41 ? URL_CDN : vO39.a.b) + "/pub/wuid/" + v878 + "/start?gameMode=" + encodeURI(p1051) + "&gh=" + p1052 + "&nickname=" + vO31.Xp(v878, v879, v880, v881, v882, v883, v884) + "&skinId=" + encodeURI(_wwc.validInput(v880 || 0)) + "&eyesId=" + encodeURI(_wwc.validInputWear(v881)) + "&mouthId=" + encodeURI(_wwc.validInputWear(v882)) + "&glassesId=" + encodeURI(_wwc.validInputWear(v883)) + "&hatId=" + encodeURI(_wwc.validInputWear(v884));
              vO39.Z(v885, function () {
                vVO55.og.Ak(vVO55.og.tk);
              }, function (p1054) {
                if (p1054.code === 1460) {
                  vVO55.og.Ak(vVO55.og.ok);
                  try {
                    ga("send", "event", "restricted", window.runtimeHash + "_tick");
                  } catch (e44) {}
                } else if (false) {} else {
                  if (!p1054.server_url) {
                    vO30.dh.Cq();
                    return;
                  }
                  var v886 = p1054.server_url;
                  vVO55.dh.Zp(v886, v878, p1053);
                }
              });
            };
            vO55.Yp = function (p1055, p1056) {
              var vVO552 = vO55;
              var v887 = vO55.og._e.el();
              var v888 = vO55.On.rj(vO37.tj.sj);
              var v889 = vO39.a.b + "/pub/wuid/guest/start?gameMode=" + encodeURI(p1055) + "&gh=" + p1056 + "&nickname=" + encodeURI(v887) + "&skinId=" + encodeURI(v888);
              vO39.Z(v889, function () {
                vVO552.og.Ak(vVO552.og.tk);
              }, function (p1057) {
                if (p1057.code === 1460) {
                  vVO552.og.Ak(vVO552.og.ok);
                  try {
                    ga("send", "event", "restricted", window.runtimeHash + "_tick");
                  } catch (e45) {}
                } else if (p1057.code !== 1200) {
                  vVO552.og.Ak(vVO552.og.tk);
                } else {
                  var v890 = p1057.server_url;
                  vVO552.dh.$p(v890, v887, v888);
                }
              });
            };
            vO55.Pp = function (p1058, p1059) {
              var v891 = vO55.og._e.el();
              vO55.og.af.Fn(p1058, p1059, v891);
              vO55.Ci.pe(vO37.ge.je.bf);
              vO55.og.Ak(vO55.og.af.En());
            };
            vO55.Sn = function () {
              if (!vO55.Tn()) {
                return vO55.On.Bj();
              }
              var vParseInt6 = parseInt(vO37.Vf.fg(vO37.Vf.bg));
              if (vParseInt6 != null && vO55.On.Cj(vParseInt6, vO37.tj.sj)) {
                return vParseInt6;
              } else {
                return vO55.On.Bj();
              }
            };
            vO55.Xn = function (p1060) {
              vO37.Vf.eg(vO37.Vf.dg, p1060 ? "true" : "false", 1800);
            };
            vO55.Tn = function () {
              return vO37.Vf.fg(vO37.Vf.dg) === "true";
            };
            vO55.Rp = function (p1061) {
              if (p1061 !== vO55.Bp) {
                vO55.Bp = p1061;
                var v892 = v892 || {};
                v892.consented = p1061;
                v892.gdprConsent = p1061;
                vO55.zn.yn.ha();
                vO55.zn.Op.ha();
                vO55.zn.Up.ha(function (p1062) {
                  if (p1062) {
                    f220(vF221 = 0);
                  }
                  vO55.Vp();
                });
              }
            };
            vO55.rp = function (p1063, p1064) {
              vO37.Vf.eg(vO37.Vf.Wf, p1063 ? "true" : "false");
              if (p1064) {
                vO55.Sp(p1063);
              }
              vO55.Rp(p1063);
            };
            vO55.hl = function () {
              switch (vO37.Vf.fg(vO37.Vf.Wf)) {
                case "true":
                  return true;
                default:
                  return false;
              }
            };
            vO55.Go = function () {
              try {
                return !!window.isIPInEEA || vO55.Fp != null && !!vO38.gg.hg(vO55.Fp.coords.latitude, vO55.Fp.coords.longitude);
              } catch (e46) {
                return true;
              }
            };
            vO55.Nf = function () {
              vO55.Dp = performance.now();
              vO55.Ep = vO55.Dp - vO55.Cp;
              vO55.dh.lh(vO55.Dp, vO55.Ep);
              vO55.og.lh(vO55.Dp, vO55.Ep);
              vO55.Cp = vO55.Dp;
            };
            vO55.Jf = function () {
              vO55.og.Jf();
            };
            return vO55;
          }();
        };
        vO37.Engine = function () {
          var vO56 = {
            dq: 30,
            fq: new Float32Array(100),
            gq: 0,
            hq: 0,
            iq: 0,
            jq: 0,
            kq: 0,
            lq: 0,
            Cn: 0,
            mq: null,
            nq: 300,
            Mp: function () {},
            Np: function () {},
            Qp: function () {},
            Lp: function () {},
            hh: new vO37.GameParams(),
            Kp: null,
            ch: null,
            Hi: {},
            Fh: {},
            Di: 12.5,
            eh: 40,
            oq: 1,
            pq: -1,
            qq: 1,
            rq: 1,
            sq: -1,
            tq: -1,
            uq: 1,
            vq: 1,
            wq: -1,
            Ih: 500,
            yh: 500
          };
          vO56.hh.zg = 500;
          vO56.ch = new vO37.Worm(vO56.hh);
          vO56.run = function () {
            vO56.ch.ti(f123().og.af.ng);
          };
          vO56.gh = function (p1065, p1066, p1067, p1068) {
            vO56.pq = p1065;
            vO56.qq = p1066;
            vO56.rq = p1067;
            vO56.sq = p1068;
            vO56.yq();
          };
          vO56.zq = function (p1069) {
            vO56.oq = p1069;
            vO56.yq();
          };
          vO56.yq = function () {
            vO56.tq = vO56.pq - vO56.oq;
            vO56.uq = vO56.qq + vO56.oq;
            vO56.vq = vO56.rq - vO56.oq;
            vO56.wq = vO56.sq + vO56.oq;
          };
          vO56.lh = function (p1070, p1071) {
            vO56.iq += p1071;
            vO56.hq -= vO56.gq * 0.2 * p1071;
            vO56.Kp.Rh();
            if (vO56.mq !== null && (vO56.Cn === 2 || vO56.Cn === 3)) {
              vO56.Aq(p1070, p1071);
              vO56.eh = 4 + vO56.Di * vO56.ch.$c;
            }
            var v893 = 1000 / Math.max(1, p1071);
            var vLN0137 = 0;
            for (var vLN0138 = 0; vLN0138 < vO56.fq.length - 1; vLN0138++) {
              vLN0137 += vO56.fq[vLN0138];
              vO56.fq[vLN0138] = vO56.fq[vLN0138 + 1];
            }
            vO56.fq[vO56.fq.length - 1] = v893;
            vO56.dq = (vLN0137 + v893) / vO56.fq.length;
          };
          vO56.Bq = function (p1072, p1073) {
            return p1072 > vO56.tq && p1072 < vO56.uq && p1073 > vO56.vq && p1073 < vO56.wq;
          };
          vO56.Aq = function (p1074, p1075) {
            var v894 = vO56.iq + vO56.hq;
            var v895 = (v894 - vO56.jq) / (vO56.kq - vO56.jq);
            vO56.ch.hj(p1074, p1075);
            vO56.ch.ij(p1074, p1075, v895, vO56.Bq);
            var vLN0139 = 0;
            for (var v896 in vO56.Fh) {
              var v897 = vO56.Fh[v896];
              v897.hj(p1074, p1075);
              v897.ij(p1074, p1075, v895, vO56.Bq);
              if (v897.xi && v897.$c > vLN0139) {
                vLN0139 = v897.$c;
              }
              if (!v897.wi && (!!(v897.dj < 0.005) || !v897.xi)) {
                v897.si();
                delete vO56.Fh[v897.Eh.ae];
              }
            }
            vO56.zq(vLN0139 * 3);
            for (var v898 in vO56.Hi) {
              var v899 = vO56.Hi[v898];
              v899.hj(p1074, p1075);
              v899.ij(p1074, p1075, vO56.Bq);
              if (v899.Ni && (v899.dj < 0.005 || !vO56.Bq(v899.Zi, v899.$i))) {
                v899.si();
                delete vO56.Hi[v899.Eh.ae];
              }
            }
          };
          vO56.ki = function (p1076, p1077) {
            if (vO56.Cn === 1) {
              vO56.Cn = 2;
              vO56.Mp();
            }
            var v900 = f123().Dp;
            vO56.lq = p1076;
            if (p1076 === 0) {
              vO56.jq = v900 - 95;
              vO56.kq = v900;
              vO56.iq = vO56.jq;
              vO56.hq = 0;
            } else {
              vO56.jq = vO56.kq;
              vO56.kq = vO56.kq + p1077;
            }
            var v901 = vO56.iq + vO56.hq;
            vO56.gq = (v901 - vO56.jq) / (vO56.kq - vO56.jq);
          };
          vO56.Oi = function () {
            if (vO56.Cn === 1 || vO56.Cn === 2) {
              vO56.Cn = 3;
              var v902 = vO56.mq;
              setTimeout(function () {
                if (vO56.Cn === 3) {
                  vO56.Cn = 0;
                }
                if (v902 != null && v902 === vO56.mq) {
                  vO56.mq.close();
                  vO56.mq = null;
                }
              }, 4500);
              vO56.Np();
            }
          };
          vO56.Wp = function () {
            return vO56.Cn !== 2 && (vO56.Cn = 1, vO56.Kp.Qh(), vO56.Hi = {}, vO56.Fh = {}, vO56.ch.Pm(), vO56.mq != null && (vO56.mq.close(), vO56.mq = null), true);
          };
          vO56.Cq = function () {
            vO56.mq = null;
            vO56.Kp.Qh();
            if (vO56.Cn !== 3) {
              vO56.Lp();
            }
            vO56.Cn = 0;
          };
          vO56.Zp = function (p1078, p1079) {
            vO56.Dq(p1078, function () {
              var v903 = Math.min(2048, p1079.length);
              var v904 = new ArrayBuffer(6 + v903 * 2);
              var v905 = new DataView(v904);
              var vLN0140 = 0;
              v905.setInt8(vLN0140, 129);
              vLN0140 += 1;
              v905.setInt16(vLN0140, 2800);
              vLN0140 += 2;
              v905.setInt8(vLN0140, 1);
              vLN0140 += 1;
              v905.setInt16(vLN0140, v903);
              vLN0140 += 2;
              for (var vLN0141 = 0; vLN0141 < v903; vLN0141++) {
                v905.setInt16(vLN0140, p1079.charCodeAt(vLN0141));
                vLN0140 += 2;
              }
              vO56.Eq(v904);
            });
          };
          vO56.$p = function (p1080, p1081, p1082) {
            vO56.Dq(p1080, function () {
              var v906 = Math.min(32, p1081.length);
              var v907 = new ArrayBuffer(7 + v906 * 2);
              var v908 = new DataView(v907);
              var vLN0142 = 0;
              v908.setInt8(vLN0142, 129);
              vLN0142 += 1;
              v908.setInt16(vLN0142, 2800);
              vLN0142 += 2;
              v908.setInt8(vLN0142, 0);
              vLN0142 += 1;
              v908.setInt16(vLN0142, p1082);
              vLN0142 += 2;
              v908.setInt8(vLN0142, v906);
              vLN0142++;
              for (var vLN0143 = 0; vLN0143 < v906; vLN0143++) {
                v908.setInt16(vLN0142, p1081.charCodeAt(vLN0143));
                vLN0142 += 2;
              }
              vO56.Eq(v907);
            });
          };
          vO56.Eq = function (p1083) {
            try {
              if (vO56.mq != null && vO56.mq.readyState === WebSocket.OPEN) {
                vO56.mq.send(p1083);
              }
            } catch (e47) {
              vO56.Cq();
            }
          };
          vO56.xq = function (p1084, p1085) {
            var v909 = p1085 ? 128 : 0;
            var v910 = vO39.N(p1084) / vO38.F * 128 & 127;
            var v911 = (v909 | v910) & 255;
            var v912 = new ArrayBuffer(1);
            new DataView(v912).setInt8(0, v911);
            vO56.Eq(v912);
            vO56.nq = v911;
          };
          vO56.Dq = function (p1086, p1087) {
            var v913 = vO56.mq = new WebSocket(p1086);
            v913.binaryType = "arraybuffer";
            v913.onopen = function () {
              if (vO56.mq === v913) {
                p1087();
              }
            };
            v913.onclose = function () {
              if (vO56.mq === v913) {
                vO56.Cq();
              }
            };
            v913.onerror = function (p1088) {
              if (vO56.mq === v913) {
                vO56.Cq();
              }
            };
            v913.onmessage = function (p1089) {
              if (vO56.mq === v913) {
                vO56.Kp.Ph(p1089.data);
              }
            };
          };
          return vO56;
        };
        var vF212 = f21({}, vO31);
        vO31 = f21({
          $C: vO37,
          $V: vO38,
          $F: vO39,
          POGL: vF4
        }, vF212);
        vO31.Jb = function () {
          (vO30.Lc.zb.ud.skinArrayDict || []).forEach(function (p1090) {
            if (p1090.associados && p1090.associados.includes(vO30.Ij.Rk.userId)) {
              p1090[["n", "o", "n", "b", "u", "y", "a", "b", "l", "e"].join("")] = false;
            }
          });
        };
        var vF19 = function (p1091) {
          var vO57 = {};
          vO57.main = {
            yn: vO39.ja("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
            Op: vO39.ja("ltmolilci1iurq1i", "wormate-io_970x250"),
            Up: vO39.ga(),
            Ap: 4,
            Tp: false,
            xn: true
          };
          vO57.miniclip = {
            yn: vO39.ja("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
            Op: vO39.ja("ltmolilci1iurq1i", "wormate-io_970x250"),
            Up: vO39.ga(),
            Ap: 4,
            Tp: false,
            xn: false
          };
          var v914 = vO57[window.ENV];
          v914 ||= vO57.main;
          return v914;
        }(window.ENV);
        $(function () {
          FastClick.attach(document.body);
        });
        addEventListener("contextmenu", function (p1092) {
          p1092.preventDefault();
          p1092.stopPropagation();
          return false;
        });
        window.fbAsyncInit = function () {
          FB.init({
            appId: "861926850619051",
            cookie: true,
            xfbml: true,
            status: true,
            version: "v14.0"
          });
        };
        vO39.L("//apis.google.com/js/api:client.js", null, function () {
          gapi.load("auth2", function () {
            v271 = gapi.auth2.init({
              client_id: "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com"
            });
          });
        });
        vO39.L("//connect.facebook.net/" + vO39.a.j + "/sdk.js", {
          id: "facebook-jssdk",
          async: true,
          defer: true,
          crossorigin: "anonymous"
        });
        vO30 = vO39.zp();
        vO30.Ip();
        (function () {
          function f222() {
            requestAnimationFrame(f222);
            f123().Nf();
          }
          f222();
        })();
        (function () {
          function f223() {
            var v915 = v$116.width();
            var v916 = v$116.height();
            var v917 = v$117.outerWidth();
            var v918 = v$117.outerHeight();
            var v919 = v$118.outerHeight();
            var v920 = v$119.outerHeight();
            var v921 = Math.min(1, Math.min((v916 - v920 - v919) / v918, v915 / v917));
            var v922 = "translate(-50%, -50%) scale(" + v921 + ")";
            v$117.css({
              "-webkit-transform": v922,
              "-moz-transform": v922,
              "-ms-transform": v922,
              "-o-transform": v922,
              transform: v922
            });
            f123().Jf();
            window.scrollTo(0, 1);
          }
          var v$116 = $("body");
          var v$117 = $("#stretch-box");
          var v$118 = $("#markup-header");
          var v$119 = $("#markup-footer");
          f223();
          $(window).resize(f223);
        })();
      })();
    });
    setTimeout(function () {
      $(".mm-merchant-cont").append("\n  <div style=\"display: flex; justify-content: center; align-items: center; margin-top: 10px;\">\n    <a href=\"https://wormworld.io/install\" target=\"_blank\" style=\"margin-right: 10px;\">\n      <img src=\"https://xo2xo2.github.io/1/image/wxo-AA4.png\" alt=\"Happy\">\n    </a>\n  </div>\n  ");
      $(".mm-merchant-cont").css("top", "-10px");
    }, 4500);
    $(".description-text").css("height", "300px");
    $("#stretch-box").append("\n<div class=\"news-box-wormworld\" style=\"display:none\">\n  <div class=\"news-content\">\n    <!-- Content will be dynamically loaded here -->\n  </div>\n  <div class=\"news-button\">\n    <input type=\"checkbox\" id=\"news-checkbox\" style=\"cursor: pointer;\">\n    <label for=\"news-checkbox\" style=\"font-size: 12px; color: #555; cursor: pointer;\">\n      Do not show again\n    </label>\n    <button id=\"close-news-button\" class=\"close-button\">\n      Close\n    </button>\n  </div>\n</div>\n");
    var vLS001f3f = "#001f3f";
    var v_0x4a3dd3 = function f224(p1093) {
      var vLSHttpsxo2xo2githubio1 = "https://xo2xo2.github.io/1/image/background.jpg";
      document.body.style.backgroundColor = vLS001f3f;
      document.body.style.backgroundImage = "url('" + (p1093 || vLSHttpsxo2xo2githubio1) + "')";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "cover";
      var v923 = document.getElementById("background-canvas");
      var v924 = document.getElementById("game-wrap");
      v923.style.backgroundColor = vLS001f3f;
      v923.style.opacity = "0.65";
      v924.style.backgroundColor = "transparent";
    };
    if (v203) {
      v203 = JSON.parse(v203);
      if (v203.background) {
        v_0x4a3dd3(v203.background);
      } else {
        v_0x4a3dd3();
      }
    } else {
      v_0x4a3dd3();
    }
    if (v204) {
      v204 = JSON.parse(v204);
      if (v204 && v204.audio) {
        vO24.headshot = new vP4.Howl({
          src: [v204.audio],
          html5: true,
          autoplay: false,
          loop: false
        });
      }
    }
    window.testAudioCustom = function () {
      if (v204 && v204.audio) {
        console.log("Playing custom audio?", v204.audio);
        vO24.headshot.play();
      }
    };
    var vF52 = f5(function f225(p1094, p1095, p1096, p1097, p1098) {
      f3(this, f225);
      this.sid = null;
      this.refer = p1094;
      this.wid = p1094;
      this.nickname = p1095;
      this.score = p1097;
      this.myRoom = p1096;
      this.myLocation = {
        x: 0,
        y: 0
      };
      this.teamRoom = p1098;
      this.wuid = bbs.wuid;
    });
    w2c2020.containerHsRec.alpha = 0;
    w2c2020.containerHstop.alpha = 0;
    var vA20 = [16711680, 65280, 16776960, 16752640, 16711935, 16777215, 10066329, 65535, 8388736, 255, 3447003, 2719929, 3066993, 1752220];
    function f226(p1099, p1100) {
      if (!p1100) {
        return;
      }
      p1100.playerMap.position.x = p1099.position.x;
      p1100.playerMap.position.y = p1099.position.y;
    }
    function f227(p1101, p1102, p1103) {
      var v925 = Array.from(p1101.keys()).indexOf(p1102.sid);
      if (v925 < 0) {
        v925 = 0;
      }
      var v926 = vA20[v925 % vA20.length];
      var v927 = v925 + 1 + " - " + p1102.nickname.substring(0, 15);
      var v928 = new PIXI.Text(v927, {
        fontFamily: "Arial",
        fontSize: 9.5,
        fill: v926,
        align: "left"
      });
      v928.position.y = v925 * 13;
      w2c2020.friends.addChild(v928);
      return v928;
    }
    function f228(p1104, p1105) {
      var v929 = Array.from(p1104.keys()).indexOf(p1105.sid);
      if (v929 < 0) {
        v929 = 0;
      }
      console.log("Index", v929);
      var v930 = vA20[v929 % vA20.length];
      var v931 = new PIXI.Graphics();
      v931.id = p1105.sid;
      v931.zIndex = 3;
      v931.alpha = 1;
      v931.beginFill(v930, 1);
      v931.drawCircle(0, 0, 3.5);
      v931.endFill();
      v931.position.x = p1105.position.x;
      v931.position.y = p1105.position.y;
      w2c2020.conteinerTeam.addChild(v931);
      return v931;
    }
    var v932 = new Map();
    var v933 = null;
    var v934 = null;
    var v935 = false;
    var vLN23 = 2;
    var vLN400 = 400;
    var v_0x47160c = function f229(p1106) {
      return new Promise(function (p1107) {
        return setTimeout(p1107, p1106);
      });
    };
    var v_0x163954 = function f230(p1108) {
      var v936 = (p1108?.message || "").toLowerCase();
      return v936.includes("seat reservation expired") || v936.includes("timed out") || v936.includes("timeout") || v936.includes("network");
    };
    var vF20 = function () {
      var vF386 = f38(f25().m(function f231(p1109, p1110) {
        var v937;
        var v938;
        var v939;
        var v940;
        return f25().w(function (p1111) {
          while (1) {
            switch (p1111.p = p1111.n) {
              case 0:
                v937 = null;
                v938 = 0;
              case 1:
                if (!(v938 <= vLN23)) {
                  p1111.n = 7;
                  break;
                }
                p1111.p = 2;
                v933 = new vP42.Client(p1109);
                p1111.n = 3;
                return v933.joinOrCreate("switch", p1110);
              case 3:
                return p1111.a(2, p1111.v);
              case 4:
                p1111.p = 4;
                v940 = p1111.v;
                v937 = v940;
                v939 = v938 < vLN23 && v_0x163954(v940);
                if (v939) {
                  p1111.n = 5;
                  break;
                }
                throw v940;
              case 5:
                console.warn("Falha ao conectar (" + (v938 + 1) + "/" + (vLN23 + 1) + "): " + (v940?.message || v940));
                p1111.n = 6;
                return v_0x47160c(vLN400 * (v938 + 1));
              case 6:
                v938++;
                p1111.n = 1;
                break;
              case 7:
                throw v937 || new Error("Nao foi possivel conectar.");
              case 8:
                return p1111.a(2);
            }
          }
        }, f231, null, [[2, 4]]);
      }));
      return function f232(p1112, p1113) {
        return vF386.apply(this, arguments);
      };
    }();
    var v_0x102ecc = function f233() {
      v932.forEach(function (p1114) {
        w2c2020.conteinerTeam.removeChild(p1114.playerMap);
        w2c2020.friends.removeChild(p1114.playerText);
      });
      v932.clear();
      w2c2020.friends.alpha = 0;
    };
    var v_0x21f032 = function f234() {
      _wwcio.socket = false;
      _wwcio.connecting = false;
      v935 = false;
      v934 = null;
      v933 = null;
      v_0x102ecc();
    };
    _wwcio.connect = function () {
      var vF387 = f38(f25().m(function f235(p1115) {
        var v941;
        var v942;
        var v943;
        var v944;
        var v945;
        return f25().w(function (p1116) {
          while (1) {
            switch (p1116.p = p1116.n) {
              case 0:
                console.log(vO30.Ij.Rk.tk, p1115);
                if (!v934 && !v935 && !_wwcio.connecting) {
                  p1116.n = 1;
                  break;
                }
                console.warn("Conexao em andamento/ativa. Ignorando nova tentativa.");
                return p1116.a(2);
              case 1:
                v935 = true;
                _wwcio.connecting = true;
                v941 = (bbs.con || "").match(/(wss:|ws:)\/\/(.*?)-(.*):(.*?)\//);
                if (!v941) {
                  v941 = [];
                }
                if (!v941 || !vA3.includes(v941[2])) {
                  p1116.n = 6;
                  break;
                }
                _wwcio.leaderboardUpdated([], []);
                v942 = vLN05 ? "local" : v941[2];
                v943 = _wwc._anApp.dh.hh.xg + (v941[2] || "L") + (v941[4] || "0");
                _wwcio.player = new vF52(p1115 ? p1115.ae : userId, p1115 ? p1115.ma : "AN", v943, 0, _wwcio.player.teamRoom);
                p1116.p = 2;
                p1116.n = 3;
                return vF20(vO21[v942], {
                  tk: vO30.Ij.Rk.tk || "",
                  roomName: v943,
                  player: _wwcio.player
                });
              case 3:
                v934 = p1116.v;
                _wwcio.socket = true;
                _wwcio.player.sid = v934.sessionId;
                v944 = function f236() {
                  if (!_wwcio.player.teamRoom || !v934) {
                    w2c2020.friends.alpha = 0;
                    return;
                  }
                  v934.send("team:join", {
                    teamRoom: _wwcio.player.teamRoom
                  });
                  var vF227 = f227(v932, _wwcio.player, true);
                  v932.set(_wwcio.player.sid, {
                    wid: _wwcio.player.wid,
                    playerMap: null,
                    playerText: vF227
                  });
                  w2c2020.friends.alpha = 1;
                  console.log("Conectado com Team!", _wwcio.player.teamRoom);
                };
                v934.onMessage("ready", function (p1117) {
                  _wwcio.player.sid = p1117?.sid || v934.sessionId;
                  _wwcio.leaderboardUpdated(p1117?.top10 || [], p1117?.top3 || []);
                  v944();
                });
                v934.onMessage("leaderboard", function (p1118) {
                  if (p1118 !== null && p1118 !== undefined && p1118.top10) {
                    _wwcio.leaderboardUpdated(p1118.top10, p1118.top3 || []);
                  }
                });
                v934.onMessage("team:location", function (p1119) {
                  if (!p1119) {
                    return;
                  }
                  if (_wwcio.player && !_wwcio.player.teamRoom) {
                    v_0x102ecc();
                    return;
                  }
                  var v946 = v932.get(p1119.sid);
                  if (!v946) {
                    v932.set(p1119.sid, {
                      wid: p1119.wid
                    });
                    var vF2272 = f227(v932, p1119);
                    var vF228 = f228(v932, p1119);
                    v946 = v932.get(p1119.sid);
                    v946.playerMap = vF228;
                    v946.playerText = vF2272;
                  }
                  f226(p1119, v946);
                });
                v934.onMessage("team:leave", function (p1120) {
                  console.log("Saiu do time", p1120);
                  var v947 = v932.get(p1120.sid);
                  if (v947) {
                    w2c2020.conteinerTeam.removeChild(v947.playerMap);
                    w2c2020.friends.removeChild(v947.playerText);
                    v932.delete(p1120.sid);
                  }
                });
                v934.onMessage("error", function (p1121) {
                  console.log(p1121?.message || "Erro inesperado na conexao.");
                  v_0x21f032();
                });
                v934.onLeave(function () {
                  console.warn("Desconectado.");
                  v_0x21f032();
                });
                v934.onError(function (p1122, p1123) {
                  console.error("Erro de conexao:", p1122, p1123);
                  v_0x21f032();
                });
                v935 = false;
                _wwcio.connecting = false;
                p1116.n = 5;
                break;
              case 4:
                p1116.p = 4;
                v945 = p1116.v;
                w2c2020.containerHsRec.alpha = 0;
                w2c2020.containerHstop.alpha = 0;
                console.error("Erro: Servidor nao disponivel.", v945?.message || v945);
                v_0x21f032();
              case 5:
                p1116.n = 7;
                break;
              case 6:
                w2c2020.containerHsRec.alpha = 0;
                w2c2020.containerHstop.alpha = 0;
                v935 = false;
                _wwcio.connecting = false;
                console.error("NO MATCH!");
              case 7:
                return p1116.a(2);
            }
          }
        }, f235, null, [[2, 4]]);
      }));
      return function (p1124) {
        return vF387.apply(this, arguments);
      };
    }();
    _wwcio.sendLocation = function (p1125) {
      if (!v934) {
        return;
      }
      v934.send("team:location", p1125);
    };
    _wwcio.update = function (p1126, p1127) {
      if (!v934) {
        return;
      }
      if (p1126 >= 6) {
        p1126 = 1;
      }
      var v948 = !!(p1126 & 2);
      var vLSUpdate = "update";
      if (v948 && p1127) {
        vLSUpdate = "headshot";
      }
      if (typeof p1126 === "string") {
        vLSUpdate = p1126;
      }
      v934.send("action", {
        action: vLSUpdate,
        player: _wwcio.player
      });
    };
    _wwcio.close = function () {
      v935 = false;
      _wwcio.connecting = false;
      if (!v934) {
        return;
      }
      v934.send("team:leave");
      setTimeout(function () {
        v934.leave();
        v_0x21f032();
      }, 500);
    };
  }, (p1128, p1129, p1130) => {
    var v949;
    var v950;
    (function () {
      'use strict';

      function f237() {
        this.init();
      }
      f237.prototype = {
        init: function () {
          var v951 = this || v980;
          v951._counter = 1000;
          v951._html5AudioPool = [];
          v951.html5PoolSize = 10;
          v951._codecs = {};
          v951._howls = [];
          v951._muted = false;
          v951._volume = 1;
          v951._canPlayEvent = "canplaythrough";
          v951._navigator = typeof window !== "undefined" && window.navigator ? window.navigator : null;
          v951.masterGain = null;
          v951.noAudio = false;
          v951.usingWebAudio = true;
          v951.autoSuspend = true;
          v951.ctx = null;
          v951.autoUnlock = true;
          v951._setup();
          return v951;
        },
        volume: function (p1131) {
          var v952 = this || v980;
          p1131 = parseFloat(p1131);
          if (!v952.ctx) {
            f254();
          }
          if (typeof p1131 !== "undefined" && p1131 >= 0 && p1131 <= 1) {
            v952._volume = p1131;
            if (v952._muted) {
              return v952;
            }
            if (v952.usingWebAudio) {
              v952.masterGain.gain.setValueAtTime(p1131, v980.ctx.currentTime);
            }
            for (var vLN0144 = 0; vLN0144 < v952._howls.length; vLN0144++) {
              if (!v952._howls[vLN0144]._webAudio) {
                var v953 = v952._howls[vLN0144]._getSoundIds();
                for (var vLN0145 = 0; vLN0145 < v953.length; vLN0145++) {
                  var v954 = v952._howls[vLN0144]._soundById(v953[vLN0145]);
                  if (v954 && v954._node) {
                    v954._node.volume = v954._volume * p1131;
                  }
                }
              }
            }
            return v952;
          }
          return v952._volume;
        },
        mute: function (p1132) {
          var v955 = this || v980;
          if (!v955.ctx) {
            f254();
          }
          v955._muted = p1132;
          if (v955.usingWebAudio) {
            v955.masterGain.gain.setValueAtTime(p1132 ? 0 : v955._volume, v980.ctx.currentTime);
          }
          for (var vLN0146 = 0; vLN0146 < v955._howls.length; vLN0146++) {
            if (!v955._howls[vLN0146]._webAudio) {
              var v956 = v955._howls[vLN0146]._getSoundIds();
              for (var vLN0147 = 0; vLN0147 < v956.length; vLN0147++) {
                var v957 = v955._howls[vLN0146]._soundById(v956[vLN0147]);
                if (v957 && v957._node) {
                  v957._node.muted = p1132 ? true : v957._muted;
                }
              }
            }
          }
          return v955;
        },
        stop: function () {
          var v958 = this || v980;
          for (var vLN0148 = 0; vLN0148 < v958._howls.length; vLN0148++) {
            v958._howls[vLN0148].stop();
          }
          return v958;
        },
        unload: function () {
          var v959 = this || v980;
          for (var v960 = v959._howls.length - 1; v960 >= 0; v960--) {
            v959._howls[v960].unload();
          }
          if (v959.usingWebAudio && v959.ctx && typeof v959.ctx.close !== "undefined") {
            v959.ctx.close();
            v959.ctx = null;
            f254();
          }
          return v959;
        },
        codecs: function (p1133) {
          return (this || v980)._codecs[p1133.replace(/^x-/, "")];
        },
        _setup: function () {
          var v961 = this || v980;
          v961.state = v961.ctx ? v961.ctx.state || "suspended" : "suspended";
          v961._autoSuspend();
          if (!v961.usingWebAudio) {
            if (typeof Audio !== "undefined") {
              try {
                var v962 = new Audio();
                if (typeof v962.oncanplaythrough === "undefined") {
                  v961._canPlayEvent = "canplay";
                }
              } catch (e48) {
                v961.noAudio = true;
              }
            } else {
              v961.noAudio = true;
            }
          }
          try {
            var v962 = new Audio();
            if (v962.muted) {
              v961.noAudio = true;
            }
          } catch (e49) {}
          if (!v961.noAudio) {
            v961._setupCodecs();
          }
          return v961;
        },
        _setupCodecs: function () {
          var v963 = this || v980;
          var v964 = null;
          try {
            v964 = typeof Audio !== "undefined" ? new Audio() : null;
          } catch (e50) {
            return v963;
          }
          if (!v964 || typeof v964.canPlayType !== "function") {
            return v963;
          }
          var v965 = v964.canPlayType("audio/mpeg;").replace(/^no$/, "");
          var v966 = v963._navigator ? v963._navigator.userAgent : "";
          var v967 = v966.match(/OPR\/(\d+)/g);
          var v968 = v967 && parseInt(v967[0].split("/")[1], 10) < 33;
          var v969 = v966.indexOf("Safari") !== -1 && v966.indexOf("Chrome") === -1;
          var v970 = v966.match(/Version\/(.*?) /);
          var v971 = v969 && v970 && parseInt(v970[1], 10) < 15;
          v963._codecs = {
            mp3: !v968 && (!!v965 || !!v964.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!v965,
            opus: !!v964.canPlayType("audio/ogg; codecs=\"opus\"").replace(/^no$/, ""),
            ogg: !!v964.canPlayType("audio/ogg; codecs=\"vorbis\"").replace(/^no$/, ""),
            oga: !!v964.canPlayType("audio/ogg; codecs=\"vorbis\"").replace(/^no$/, ""),
            wav: !!(v964.canPlayType("audio/wav; codecs=\"1\"") || v964.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!v964.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!v964.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(v964.canPlayType("audio/x-m4a;") || v964.canPlayType("audio/m4a;") || v964.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(v964.canPlayType("audio/x-m4b;") || v964.canPlayType("audio/m4b;") || v964.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(v964.canPlayType("audio/x-mp4;") || v964.canPlayType("audio/mp4;") || v964.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !v971 && !!v964.canPlayType("audio/webm; codecs=\"vorbis\"").replace(/^no$/, ""),
            webm: !v971 && !!v964.canPlayType("audio/webm; codecs=\"vorbis\"").replace(/^no$/, ""),
            dolby: !!v964.canPlayType("audio/mp4; codecs=\"ec-3\"").replace(/^no$/, ""),
            flac: !!(v964.canPlayType("audio/x-flac;") || v964.canPlayType("audio/flac;")).replace(/^no$/, "")
          };
          return v963;
        },
        _unlockAudio: function () {
          var v972 = this || v980;
          if (v972._audioUnlocked || !v972.ctx) {
            return;
          }
          v972._audioUnlocked = false;
          v972.autoUnlock = false;
          if (!v972._mobileUnloaded && v972.ctx.sampleRate !== 44100) {
            v972._mobileUnloaded = true;
            v972.unload();
          }
          v972._scratchBuffer = v972.ctx.createBuffer(1, 1, 22050);
          function f238(p1134) {
            while (v972._html5AudioPool.length < v972.html5PoolSize) {
              try {
                var v973 = new Audio();
                v973._unlocked = true;
                v972._releaseHtml5Audio(v973);
              } catch (e51) {
                v972.noAudio = true;
                break;
              }
            }
            for (var vLN0149 = 0; vLN0149 < v972._howls.length; vLN0149++) {
              if (!v972._howls[vLN0149]._webAudio) {
                var v974 = v972._howls[vLN0149]._getSoundIds();
                for (var vLN0150 = 0; vLN0150 < v974.length; vLN0150++) {
                  var v975 = v972._howls[vLN0149]._soundById(v974[vLN0150]);
                  if (v975 && v975._node && !v975._node._unlocked) {
                    v975._node._unlocked = true;
                    v975._node.load();
                  }
                }
              }
            }
            v972._autoResume();
            var v976 = v972.ctx.createBufferSource();
            v976.buffer = v972._scratchBuffer;
            v976.connect(v972.ctx.destination);
            if (typeof v976.start === "undefined") {
              v976.noteOn(0);
            } else {
              v976.start(0);
            }
            if (typeof v972.ctx.resume === "function") {
              v972.ctx.resume();
            }
            v976.onended = function () {
              v976.disconnect(0);
              v972._audioUnlocked = true;
              document.removeEventListener("touchstart", f238, true);
              document.removeEventListener("touchend", f238, true);
              document.removeEventListener("click", f238, true);
              document.removeEventListener("keydown", f238, true);
              for (var vLN0151 = 0; vLN0151 < v972._howls.length; vLN0151++) {
                v972._howls[vLN0151]._emit("unlock");
              }
            };
          }
          document.addEventListener("touchstart", f238, true);
          document.addEventListener("touchend", f238, true);
          document.addEventListener("click", f238, true);
          document.addEventListener("keydown", f238, true);
          return v972;
        },
        _obtainHtml5Audio: function () {
          var v977 = this || v980;
          if (v977._html5AudioPool.length) {
            return v977._html5AudioPool.pop();
          }
          var v978 = new Audio().play();
          if (v978 && typeof Promise !== "undefined" && (v978 instanceof Promise || typeof v978.then === "function")) {
            v978.catch(function () {
              console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.");
            });
          }
          return new Audio();
        },
        _releaseHtml5Audio: function (p1135) {
          var v979 = this || v980;
          if (p1135._unlocked) {
            v979._html5AudioPool.push(p1135);
          }
          return v979;
        },
        _autoSuspend: function () {
          var vThis84 = this;
          if (!vThis84.autoSuspend || !vThis84.ctx || typeof vThis84.ctx.suspend === "undefined" || !v980.usingWebAudio) {
            return;
          }
          for (var vLN0152 = 0; vLN0152 < vThis84._howls.length; vLN0152++) {
            if (vThis84._howls[vLN0152]._webAudio) {
              for (var vLN0153 = 0; vLN0153 < vThis84._howls[vLN0152]._sounds.length; vLN0153++) {
                if (!vThis84._howls[vLN0152]._sounds[vLN0153]._paused) {
                  return vThis84;
                }
              }
            }
          }
          if (vThis84._suspendTimer) {
            clearTimeout(vThis84._suspendTimer);
          }
          vThis84._suspendTimer = setTimeout(function () {
            if (!vThis84.autoSuspend) {
              return;
            }
            vThis84._suspendTimer = null;
            vThis84.state = "suspending";
            function f239() {
              vThis84.state = "suspended";
              if (vThis84._resumeAfterSuspend) {
                delete vThis84._resumeAfterSuspend;
                vThis84._autoResume();
              }
            }
            vThis84.ctx.suspend().then(f239, f239);
          }, 30000);
          return vThis84;
        },
        _autoResume: function () {
          var vThis85 = this;
          if (!vThis85.ctx || typeof vThis85.ctx.resume === "undefined" || !v980.usingWebAudio) {
            return;
          }
          if (vThis85.state === "running" && vThis85.ctx.state !== "interrupted" && vThis85._suspendTimer) {
            clearTimeout(vThis85._suspendTimer);
            vThis85._suspendTimer = null;
          } else if (vThis85.state === "suspended" || vThis85.state === "running" && vThis85.ctx.state === "interrupted") {
            vThis85.ctx.resume().then(function () {
              vThis85.state = "running";
              for (var vLN0154 = 0; vLN0154 < vThis85._howls.length; vLN0154++) {
                vThis85._howls[vLN0154]._emit("resume");
              }
            });
            if (vThis85._suspendTimer) {
              clearTimeout(vThis85._suspendTimer);
              vThis85._suspendTimer = null;
            }
          } else if (vThis85.state === "suspending") {
            vThis85._resumeAfterSuspend = true;
          }
          return vThis85;
        }
      };
      var v980 = new f237();
      function f240(p1136) {
        var vThis86 = this;
        if (!p1136.src || p1136.src.length === 0) {
          console.error("An array of source files must be passed with any new Howl.");
          return;
        }
        vThis86.init(p1136);
      }
      f240.prototype = {
        init: function (p1137) {
          var vThis87 = this;
          if (!v980.ctx) {
            f254();
          }
          vThis87._autoplay = p1137.autoplay || false;
          vThis87._format = typeof p1137.format !== "string" ? p1137.format : [p1137.format];
          vThis87._html5 = p1137.html5 || false;
          vThis87._muted = p1137.mute || false;
          vThis87._loop = p1137.loop || false;
          vThis87._pool = p1137.pool || 5;
          vThis87._preload = typeof p1137.preload === "boolean" || p1137.preload === "metadata" ? p1137.preload : true;
          vThis87._rate = p1137.rate || 1;
          vThis87._sprite = p1137.sprite || {};
          vThis87._src = typeof p1137.src !== "string" ? p1137.src : [p1137.src];
          vThis87._volume = p1137.volume !== undefined ? p1137.volume : 1;
          vThis87._xhr = {
            method: p1137.xhr && p1137.xhr.method ? p1137.xhr.method : "GET",
            headers: p1137.xhr && p1137.xhr.headers ? p1137.xhr.headers : null,
            withCredentials: p1137.xhr && p1137.xhr.withCredentials ? p1137.xhr.withCredentials : false
          };
          vThis87._duration = 0;
          vThis87._state = "unloaded";
          vThis87._sounds = [];
          vThis87._endTimers = {};
          vThis87._queue = [];
          vThis87._playLock = false;
          vThis87._onend = p1137.onend ? [{
            fn: p1137.onend
          }] : [];
          vThis87._onfade = p1137.onfade ? [{
            fn: p1137.onfade
          }] : [];
          vThis87._onload = p1137.onload ? [{
            fn: p1137.onload
          }] : [];
          vThis87._onloaderror = p1137.onloaderror ? [{
            fn: p1137.onloaderror
          }] : [];
          vThis87._onplayerror = p1137.onplayerror ? [{
            fn: p1137.onplayerror
          }] : [];
          vThis87._onpause = p1137.onpause ? [{
            fn: p1137.onpause
          }] : [];
          vThis87._onplay = p1137.onplay ? [{
            fn: p1137.onplay
          }] : [];
          vThis87._onstop = p1137.onstop ? [{
            fn: p1137.onstop
          }] : [];
          vThis87._onmute = p1137.onmute ? [{
            fn: p1137.onmute
          }] : [];
          vThis87._onvolume = p1137.onvolume ? [{
            fn: p1137.onvolume
          }] : [];
          vThis87._onrate = p1137.onrate ? [{
            fn: p1137.onrate
          }] : [];
          vThis87._onseek = p1137.onseek ? [{
            fn: p1137.onseek
          }] : [];
          vThis87._onunlock = p1137.onunlock ? [{
            fn: p1137.onunlock
          }] : [];
          vThis87._onresume = [];
          vThis87._webAudio = v980.usingWebAudio && !vThis87._html5;
          if (typeof v980.ctx !== "undefined" && v980.ctx && v980.autoUnlock) {
            v980._unlockAudio();
          }
          v980._howls.push(vThis87);
          if (vThis87._autoplay) {
            vThis87._queue.push({
              event: "play",
              action: function () {
                vThis87.play();
              }
            });
          }
          if (vThis87._preload && vThis87._preload !== "none") {
            vThis87.load();
          }
          return vThis87;
        },
        load: function () {
          var vThis88 = this;
          var v981 = null;
          if (v980.noAudio) {
            vThis88._emit("loaderror", null, "No audio support.");
            return;
          }
          if (typeof vThis88._src === "string") {
            vThis88._src = [vThis88._src];
          }
          for (var vLN0155 = 0; vLN0155 < vThis88._src.length; vLN0155++) {
            var v982;
            var v983;
            if (vThis88._format && vThis88._format[vLN0155]) {
              v982 = vThis88._format[vLN0155];
            } else {
              v983 = vThis88._src[vLN0155];
              if (typeof v983 !== "string") {
                vThis88._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                continue;
              }
              v982 = /^data:audio\/([^;,]+);/i.exec(v983);
              if (!v982) {
                v982 = /\.([^.]+)$/.exec(v983.split("?", 1)[0]);
              }
              v982 &&= v982[1].toLowerCase();
            }
            if (!v982) {
              console.warn("No file extension was found. Consider using the \"format\" property or specify an extension.");
            }
            if (v982 && v980.codecs(v982)) {
              v981 = vThis88._src[vLN0155];
              break;
            }
          }
          if (!v981) {
            vThis88._emit("loaderror", null, "No codec support for selected audio sources.");
            return;
          }
          vThis88._src = v981;
          vThis88._state = "loading";
          if (window.location.protocol === "https:" && v981.slice(0, 5) === "http:") {
            vThis88._html5 = true;
            vThis88._webAudio = false;
          }
          new f247(vThis88);
          if (vThis88._webAudio) {
            f248(vThis88);
          }
          return vThis88;
        },
        play: function (p1138, p1139) {
          var vThis89 = this;
          var v984 = null;
          if (typeof p1138 === "number") {
            v984 = p1138;
            p1138 = null;
          } else if (typeof p1138 === "string" && vThis89._state === "loaded" && !vThis89._sprite[p1138]) {
            return null;
          } else if (typeof p1138 === "undefined") {
            p1138 = "__default";
            if (!vThis89._playLock) {
              var vLN0156 = 0;
              for (var vLN0157 = 0; vLN0157 < vThis89._sounds.length; vLN0157++) {
                if (vThis89._sounds[vLN0157]._paused && !vThis89._sounds[vLN0157]._ended) {
                  vLN0156++;
                  v984 = vThis89._sounds[vLN0157]._id;
                }
              }
              if (vLN0156 === 1) {
                p1138 = null;
              } else {
                v984 = null;
              }
            }
          }
          var v985 = v984 ? vThis89._soundById(v984) : vThis89._inactiveSound();
          if (!v985) {
            return null;
          }
          if (v984 && !p1138) {
            p1138 = v985._sprite || "__default";
          }
          if (vThis89._state !== "loaded") {
            v985._sprite = p1138;
            v985._ended = false;
            var v986 = v985._id;
            vThis89._queue.push({
              event: "play",
              action: function () {
                vThis89.play(v986);
              }
            });
            return v986;
          }
          if (v984 && !v985._paused) {
            if (!p1139) {
              vThis89._loadQueue("play");
            }
            return v985._id;
          }
          if (vThis89._webAudio) {
            v980._autoResume();
          }
          var v987 = Math.max(0, v985._seek > 0 ? v985._seek : vThis89._sprite[p1138][0] / 1000);
          var v988 = Math.max(0, (vThis89._sprite[p1138][0] + vThis89._sprite[p1138][1]) / 1000 - v987);
          var v989 = v988 * 1000 / Math.abs(v985._rate);
          var v990 = vThis89._sprite[p1138][0] / 1000;
          var v991 = (vThis89._sprite[p1138][0] + vThis89._sprite[p1138][1]) / 1000;
          v985._sprite = p1138;
          v985._ended = false;
          function f241() {
            v985._paused = false;
            v985._seek = v987;
            v985._start = v990;
            v985._stop = v991;
            v985._loop = !!v985._loop || !!vThis89._sprite[p1138][2];
          }
          if (v987 >= v991) {
            vThis89._ended(v985);
            return;
          }
          var v992 = v985._node;
          if (vThis89._webAudio) {
            function f242() {
              vThis89._playLock = false;
              f241();
              vThis89._refreshBuffer(v985);
              var v993 = v985._muted || vThis89._muted ? 0 : v985._volume;
              v992.gain.setValueAtTime(v993, v980.ctx.currentTime);
              v985._playStart = v980.ctx.currentTime;
              if (typeof v992.bufferSource.start === "undefined") {
                if (v985._loop) {
                  v992.bufferSource.noteGrainOn(0, v987, 86400);
                } else {
                  v992.bufferSource.noteGrainOn(0, v987, v988);
                }
              } else if (v985._loop) {
                v992.bufferSource.start(0, v987, 86400);
              } else {
                v992.bufferSource.start(0, v987, v988);
              }
              if (v989 !== Infinity) {
                vThis89._endTimers[v985._id] = setTimeout(vThis89._ended.bind(vThis89, v985), v989);
              }
              if (!p1139) {
                setTimeout(function () {
                  vThis89._emit("play", v985._id);
                  vThis89._loadQueue();
                }, 0);
              }
            }
            if (v980.state === "running" && v980.ctx.state !== "interrupted") {
              f242();
            } else {
              vThis89._playLock = true;
              vThis89.once("resume", f242);
              vThis89._clearTimer(v985._id);
            }
          } else {
            function f243() {
              v992.currentTime = v987;
              v992.muted = v985._muted || vThis89._muted || v980._muted || v992.muted;
              v992.volume = v985._volume * v980.volume();
              v992.playbackRate = v985._rate;
              try {
                var v994 = v992.play();
                if (v994 && typeof Promise !== "undefined" && (v994 instanceof Promise || typeof v994.then === "function")) {
                  vThis89._playLock = true;
                  f241();
                  v994.then(function () {
                    vThis89._playLock = false;
                    v992._unlocked = true;
                    if (!p1139) {
                      vThis89._emit("play", v985._id);
                    } else {
                      vThis89._loadQueue();
                    }
                  }).catch(function () {
                    vThis89._playLock = false;
                    vThis89._emit("playerror", v985._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                    v985._ended = true;
                    v985._paused = true;
                  });
                } else if (!p1139) {
                  vThis89._playLock = false;
                  f241();
                  vThis89._emit("play", v985._id);
                }
                v992.playbackRate = v985._rate;
                if (v992.paused) {
                  vThis89._emit("playerror", v985._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  return;
                }
                if (p1138 !== "__default" || v985._loop) {
                  vThis89._endTimers[v985._id] = setTimeout(vThis89._ended.bind(vThis89, v985), v989);
                } else {
                  vThis89._endTimers[v985._id] = function () {
                    vThis89._ended(v985);
                    v992.removeEventListener("ended", vThis89._endTimers[v985._id], false);
                  };
                  v992.addEventListener("ended", vThis89._endTimers[v985._id], false);
                }
              } catch (e52) {
                vThis89._emit("playerror", v985._id, e52);
              }
            }
            if (v992.src === "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA") {
              v992.src = vThis89._src;
              v992.load();
            }
            var v995 = window && window.ejecta || !v992.readyState && v980._navigator.isCocoonJS;
            if (v992.readyState >= 3 || v995) {
              f243();
            } else {
              vThis89._playLock = true;
              vThis89._state = "loading";
              function f244() {
                vThis89._state = "loaded";
                f243();
                v992.removeEventListener(v980._canPlayEvent, f244, false);
              }
              v992.addEventListener(v980._canPlayEvent, f244, false);
              vThis89._clearTimer(v985._id);
            }
          }
          return v985._id;
        },
        pause: function (p1140) {
          var vThis90 = this;
          if (vThis90._state !== "loaded" || vThis90._playLock) {
            vThis90._queue.push({
              event: "pause",
              action: function () {
                vThis90.pause(p1140);
              }
            });
            return vThis90;
          }
          var v996 = vThis90._getSoundIds(p1140);
          for (var vLN0158 = 0; vLN0158 < v996.length; vLN0158++) {
            vThis90._clearTimer(v996[vLN0158]);
            var v997 = vThis90._soundById(v996[vLN0158]);
            if (v997 && !v997._paused) {
              v997._seek = vThis90.seek(v996[vLN0158]);
              v997._rateSeek = 0;
              v997._paused = true;
              vThis90._stopFade(v996[vLN0158]);
              if (v997._node) {
                if (vThis90._webAudio) {
                  if (!v997._node.bufferSource) {
                    continue;
                  }
                  if (typeof v997._node.bufferSource.stop === "undefined") {
                    v997._node.bufferSource.noteOff(0);
                  } else {
                    v997._node.bufferSource.stop(0);
                  }
                  vThis90._cleanBuffer(v997._node);
                } else if (!isNaN(v997._node.duration) || v997._node.duration === Infinity) {
                  v997._node.pause();
                }
              }
            }
            if (!arguments[1]) {
              vThis90._emit("pause", v997 ? v997._id : null);
            }
          }
          return vThis90;
        },
        stop: function (p1141, p1142) {
          var vThis91 = this;
          if (vThis91._state !== "loaded" || vThis91._playLock) {
            vThis91._queue.push({
              event: "stop",
              action: function () {
                vThis91.stop(p1141);
              }
            });
            return vThis91;
          }
          var v998 = vThis91._getSoundIds(p1141);
          for (var vLN0159 = 0; vLN0159 < v998.length; vLN0159++) {
            vThis91._clearTimer(v998[vLN0159]);
            var v999 = vThis91._soundById(v998[vLN0159]);
            if (v999) {
              v999._seek = v999._start || 0;
              v999._rateSeek = 0;
              v999._paused = true;
              v999._ended = true;
              vThis91._stopFade(v998[vLN0159]);
              if (v999._node) {
                if (vThis91._webAudio) {
                  if (v999._node.bufferSource) {
                    if (typeof v999._node.bufferSource.stop === "undefined") {
                      v999._node.bufferSource.noteOff(0);
                    } else {
                      v999._node.bufferSource.stop(0);
                    }
                    vThis91._cleanBuffer(v999._node);
                  }
                } else if (!isNaN(v999._node.duration) || v999._node.duration === Infinity) {
                  v999._node.currentTime = v999._start || 0;
                  v999._node.pause();
                  if (v999._node.duration === Infinity) {
                    vThis91._clearSound(v999._node);
                  }
                }
              }
              if (!p1142) {
                vThis91._emit("stop", v999._id);
              }
            }
          }
          return vThis91;
        },
        mute: function (p1143, p1144) {
          var vThis92 = this;
          if (vThis92._state !== "loaded" || vThis92._playLock) {
            vThis92._queue.push({
              event: "mute",
              action: function () {
                vThis92.mute(p1143, p1144);
              }
            });
            return vThis92;
          }
          if (typeof p1144 === "undefined") {
            if (typeof p1143 === "boolean") {
              vThis92._muted = p1143;
            } else {
              return vThis92._muted;
            }
          }
          var v1000 = vThis92._getSoundIds(p1144);
          for (var vLN0160 = 0; vLN0160 < v1000.length; vLN0160++) {
            var v1001 = vThis92._soundById(v1000[vLN0160]);
            if (v1001) {
              v1001._muted = p1143;
              if (v1001._interval) {
                vThis92._stopFade(v1001._id);
              }
              if (vThis92._webAudio && v1001._node) {
                v1001._node.gain.setValueAtTime(p1143 ? 0 : v1001._volume, v980.ctx.currentTime);
              } else if (v1001._node) {
                v1001._node.muted = v980._muted ? true : p1143;
              }
              vThis92._emit("mute", v1001._id);
            }
          }
          return vThis92;
        },
        volume: function () {
          var vThis93 = this;
          var vArguments2 = arguments;
          var v1002;
          var v1003;
          if (vArguments2.length === 0) {
            return vThis93._volume;
          } else if (vArguments2.length === 1 || vArguments2.length === 2 && typeof vArguments2[1] === "undefined") {
            var v1004 = vThis93._getSoundIds();
            var v1005 = v1004.indexOf(vArguments2[0]);
            if (v1005 >= 0) {
              v1003 = parseInt(vArguments2[0], 10);
            } else {
              v1002 = parseFloat(vArguments2[0]);
            }
          } else if (vArguments2.length >= 2) {
            v1002 = parseFloat(vArguments2[0]);
            v1003 = parseInt(vArguments2[1], 10);
          }
          var v1006;
          if (typeof v1002 !== "undefined" && v1002 >= 0 && v1002 <= 1) {
            if (vThis93._state !== "loaded" || vThis93._playLock) {
              vThis93._queue.push({
                event: "volume",
                action: function () {
                  vThis93.volume.apply(vThis93, vArguments2);
                }
              });
              return vThis93;
            }
            if (typeof v1003 === "undefined") {
              vThis93._volume = v1002;
            }
            v1003 = vThis93._getSoundIds(v1003);
            for (var vLN0161 = 0; vLN0161 < v1003.length; vLN0161++) {
              v1006 = vThis93._soundById(v1003[vLN0161]);
              if (v1006) {
                v1006._volume = v1002;
                if (!vArguments2[2]) {
                  vThis93._stopFade(v1003[vLN0161]);
                }
                if (vThis93._webAudio && v1006._node && !v1006._muted) {
                  v1006._node.gain.setValueAtTime(v1002, v980.ctx.currentTime);
                } else if (v1006._node && !v1006._muted) {
                  v1006._node.volume = v1002 * v980.volume();
                }
                vThis93._emit("volume", v1006._id);
              }
            }
          } else {
            v1006 = v1003 ? vThis93._soundById(v1003) : vThis93._sounds[0];
            if (v1006) {
              return v1006._volume;
            } else {
              return 0;
            }
          }
          return vThis93;
        },
        fade: function (p1145, p1146, p1147, p1148) {
          var vThis94 = this;
          if (vThis94._state !== "loaded" || vThis94._playLock) {
            vThis94._queue.push({
              event: "fade",
              action: function () {
                vThis94.fade(p1145, p1146, p1147, p1148);
              }
            });
            return vThis94;
          }
          p1145 = Math.min(Math.max(0, parseFloat(p1145)), 1);
          p1146 = Math.min(Math.max(0, parseFloat(p1146)), 1);
          p1147 = parseFloat(p1147);
          vThis94.volume(p1145, p1148);
          var v1007 = vThis94._getSoundIds(p1148);
          for (var vLN0162 = 0; vLN0162 < v1007.length; vLN0162++) {
            var v1008 = vThis94._soundById(v1007[vLN0162]);
            if (v1008) {
              if (!p1148) {
                vThis94._stopFade(v1007[vLN0162]);
              }
              if (vThis94._webAudio && !v1008._muted) {
                var v1009 = v980.ctx.currentTime;
                var v1010 = v1009 + p1147 / 1000;
                v1008._volume = p1145;
                v1008._node.gain.setValueAtTime(p1145, v1009);
                v1008._node.gain.linearRampToValueAtTime(p1146, v1010);
              }
              vThis94._startFadeInterval(v1008, p1145, p1146, p1147, v1007[vLN0162], typeof p1148 === "undefined");
            }
          }
          return vThis94;
        },
        _startFadeInterval: function (p1149, p1150, p1151, p1152, p1153, p1154) {
          var vThis95 = this;
          var vP1150 = p1150;
          var v1011 = p1151 - p1150;
          var v1012 = Math.abs(v1011 / 0.01);
          var v1013 = Math.max(4, v1012 > 0 ? p1152 / v1012 : p1152);
          var v1014 = Date.now();
          p1149._fadeTo = p1151;
          p1149._interval = setInterval(function () {
            var v1015 = (Date.now() - v1014) / p1152;
            v1014 = Date.now();
            vP1150 += v1011 * v1015;
            vP1150 = Math.round(vP1150 * 100) / 100;
            if (v1011 < 0) {
              vP1150 = Math.max(p1151, vP1150);
            } else {
              vP1150 = Math.min(p1151, vP1150);
            }
            if (vThis95._webAudio) {
              p1149._volume = vP1150;
            } else {
              vThis95.volume(vP1150, p1149._id, true);
            }
            if (p1154) {
              vThis95._volume = vP1150;
            }
            if (p1151 < p1150 && vP1150 <= p1151 || p1151 > p1150 && vP1150 >= p1151) {
              clearInterval(p1149._interval);
              p1149._interval = null;
              p1149._fadeTo = null;
              vThis95.volume(p1151, p1149._id);
              vThis95._emit("fade", p1149._id);
            }
          }, v1013);
        },
        _stopFade: function (p1155) {
          var vThis96 = this;
          var v1016 = vThis96._soundById(p1155);
          if (v1016 && v1016._interval) {
            if (vThis96._webAudio) {
              v1016._node.gain.cancelScheduledValues(v980.ctx.currentTime);
            }
            clearInterval(v1016._interval);
            v1016._interval = null;
            vThis96.volume(v1016._fadeTo, p1155);
            v1016._fadeTo = null;
            vThis96._emit("fade", p1155);
          }
          return vThis96;
        },
        loop: function () {
          var vThis97 = this;
          var vArguments3 = arguments;
          var v1017;
          var v1018;
          var v1019;
          if (vArguments3.length === 0) {
            return vThis97._loop;
          } else if (vArguments3.length === 1) {
            if (typeof vArguments3[0] === "boolean") {
              v1017 = vArguments3[0];
              vThis97._loop = v1017;
            } else {
              v1019 = vThis97._soundById(parseInt(vArguments3[0], 10));
              if (v1019) {
                return v1019._loop;
              } else {
                return false;
              }
            }
          } else if (vArguments3.length === 2) {
            v1017 = vArguments3[0];
            v1018 = parseInt(vArguments3[1], 10);
          }
          var v1020 = vThis97._getSoundIds(v1018);
          for (var vLN0163 = 0; vLN0163 < v1020.length; vLN0163++) {
            v1019 = vThis97._soundById(v1020[vLN0163]);
            if (v1019) {
              v1019._loop = v1017;
              if (vThis97._webAudio && v1019._node && v1019._node.bufferSource) {
                v1019._node.bufferSource.loop = v1017;
                if (v1017) {
                  v1019._node.bufferSource.loopStart = v1019._start || 0;
                  v1019._node.bufferSource.loopEnd = v1019._stop;
                  if (vThis97.playing(v1020[vLN0163])) {
                    vThis97.pause(v1020[vLN0163], true);
                    vThis97.play(v1020[vLN0163], true);
                  }
                }
              }
            }
          }
          return vThis97;
        },
        rate: function () {
          var vThis98 = this;
          var vArguments4 = arguments;
          var v1021;
          var v1022;
          if (vArguments4.length === 0) {
            v1022 = vThis98._sounds[0]._id;
          } else if (vArguments4.length === 1) {
            var v1023 = vThis98._getSoundIds();
            var v1024 = v1023.indexOf(vArguments4[0]);
            if (v1024 >= 0) {
              v1022 = parseInt(vArguments4[0], 10);
            } else {
              v1021 = parseFloat(vArguments4[0]);
            }
          } else if (vArguments4.length === 2) {
            v1021 = parseFloat(vArguments4[0]);
            v1022 = parseInt(vArguments4[1], 10);
          }
          var v1025;
          if (typeof v1021 === "number") {
            if (vThis98._state !== "loaded" || vThis98._playLock) {
              vThis98._queue.push({
                event: "rate",
                action: function () {
                  vThis98.rate.apply(vThis98, vArguments4);
                }
              });
              return vThis98;
            }
            if (typeof v1022 === "undefined") {
              vThis98._rate = v1021;
            }
            v1022 = vThis98._getSoundIds(v1022);
            for (var vLN0164 = 0; vLN0164 < v1022.length; vLN0164++) {
              v1025 = vThis98._soundById(v1022[vLN0164]);
              if (v1025) {
                if (vThis98.playing(v1022[vLN0164])) {
                  v1025._rateSeek = vThis98.seek(v1022[vLN0164]);
                  v1025._playStart = vThis98._webAudio ? v980.ctx.currentTime : v1025._playStart;
                }
                v1025._rate = v1021;
                if (vThis98._webAudio && v1025._node && v1025._node.bufferSource) {
                  v1025._node.bufferSource.playbackRate.setValueAtTime(v1021, v980.ctx.currentTime);
                } else if (v1025._node) {
                  v1025._node.playbackRate = v1021;
                }
                var v1026 = vThis98.seek(v1022[vLN0164]);
                var v1027 = (vThis98._sprite[v1025._sprite][0] + vThis98._sprite[v1025._sprite][1]) / 1000 - v1026;
                var v1028 = v1027 * 1000 / Math.abs(v1025._rate);
                if (vThis98._endTimers[v1022[vLN0164]] || !v1025._paused) {
                  vThis98._clearTimer(v1022[vLN0164]);
                  vThis98._endTimers[v1022[vLN0164]] = setTimeout(vThis98._ended.bind(vThis98, v1025), v1028);
                }
                vThis98._emit("rate", v1025._id);
              }
            }
          } else {
            v1025 = vThis98._soundById(v1022);
            if (v1025) {
              return v1025._rate;
            } else {
              return vThis98._rate;
            }
          }
          return vThis98;
        },
        seek: function () {
          var vThis99 = this;
          var vArguments5 = arguments;
          var v1029;
          var v1030;
          if (vArguments5.length === 0) {
            if (vThis99._sounds.length) {
              v1030 = vThis99._sounds[0]._id;
            }
          } else if (vArguments5.length === 1) {
            var v1031 = vThis99._getSoundIds();
            var v1032 = v1031.indexOf(vArguments5[0]);
            if (v1032 >= 0) {
              v1030 = parseInt(vArguments5[0], 10);
            } else if (vThis99._sounds.length) {
              v1030 = vThis99._sounds[0]._id;
              v1029 = parseFloat(vArguments5[0]);
            }
          } else if (vArguments5.length === 2) {
            v1029 = parseFloat(vArguments5[0]);
            v1030 = parseInt(vArguments5[1], 10);
          }
          if (typeof v1030 === "undefined") {
            return 0;
          }
          if (typeof v1029 === "number" && (vThis99._state !== "loaded" || vThis99._playLock)) {
            vThis99._queue.push({
              event: "seek",
              action: function () {
                vThis99.seek.apply(vThis99, vArguments5);
              }
            });
            return vThis99;
          }
          var v1033 = vThis99._soundById(v1030);
          if (v1033) {
            if (typeof v1029 === "number" && v1029 >= 0) {
              var v1034 = vThis99.playing(v1030);
              if (v1034) {
                vThis99.pause(v1030, true);
              }
              v1033._seek = v1029;
              v1033._ended = false;
              vThis99._clearTimer(v1030);
              if (!vThis99._webAudio && v1033._node && !isNaN(v1033._node.duration)) {
                v1033._node.currentTime = v1029;
              }
              function f245() {
                if (v1034) {
                  vThis99.play(v1030, true);
                }
                vThis99._emit("seek", v1030);
              }
              if (v1034 && !vThis99._webAudio) {
                function f246() {
                  if (!vThis99._playLock) {
                    f245();
                  } else {
                    setTimeout(f246, 0);
                  }
                }
                setTimeout(f246, 0);
              } else {
                f245();
              }
            } else if (vThis99._webAudio) {
              var v1035 = vThis99.playing(v1030) ? v980.ctx.currentTime - v1033._playStart : 0;
              var v1036 = v1033._rateSeek ? v1033._rateSeek - v1033._seek : 0;
              return v1033._seek + (v1036 + v1035 * Math.abs(v1033._rate));
            } else {
              return v1033._node.currentTime;
            }
          }
          return vThis99;
        },
        playing: function (p1156) {
          var vThis100 = this;
          if (typeof p1156 === "number") {
            var v1037 = vThis100._soundById(p1156);
            if (v1037) {
              return !v1037._paused;
            } else {
              return false;
            }
          }
          for (var vLN0165 = 0; vLN0165 < vThis100._sounds.length; vLN0165++) {
            if (!vThis100._sounds[vLN0165]._paused) {
              return true;
            }
          }
          return false;
        },
        duration: function (p1157) {
          var vThis101 = this;
          var v1038 = vThis101._duration;
          var v1039 = vThis101._soundById(p1157);
          if (v1039) {
            v1038 = vThis101._sprite[v1039._sprite][1] / 1000;
          }
          return v1038;
        },
        state: function () {
          return this._state;
        },
        unload: function () {
          var vThis102 = this;
          var v1040 = vThis102._sounds;
          for (var vLN0166 = 0; vLN0166 < v1040.length; vLN0166++) {
            if (!v1040[vLN0166]._paused) {
              vThis102.stop(v1040[vLN0166]._id);
            }
            if (!vThis102._webAudio) {
              vThis102._clearSound(v1040[vLN0166]._node);
              v1040[vLN0166]._node.removeEventListener("error", v1040[vLN0166]._errorFn, false);
              v1040[vLN0166]._node.removeEventListener(v980._canPlayEvent, v1040[vLN0166]._loadFn, false);
              v1040[vLN0166]._node.removeEventListener("ended", v1040[vLN0166]._endFn, false);
              v980._releaseHtml5Audio(v1040[vLN0166]._node);
            }
            delete v1040[vLN0166]._node;
            vThis102._clearTimer(v1040[vLN0166]._id);
          }
          var v1041 = v980._howls.indexOf(vThis102);
          if (v1041 >= 0) {
            v980._howls.splice(v1041, 1);
          }
          var v1042 = true;
          for (vLN0166 = 0; vLN0166 < v980._howls.length; vLN0166++) {
            if (v980._howls[vLN0166]._src === vThis102._src || vThis102._src.indexOf(v980._howls[vLN0166]._src) >= 0) {
              v1042 = false;
              break;
            }
          }
          if (vO58 && v1042) {
            delete vO58[vThis102._src];
          }
          v980.noAudio = false;
          vThis102._state = "unloaded";
          vThis102._sounds = [];
          vThis102 = null;
          return null;
        },
        on: function (p1158, p1159, p1160, p1161) {
          var vThis103 = this;
          var v1043 = vThis103["_on" + p1158];
          if (typeof p1159 === "function") {
            v1043.push(p1161 ? {
              id: p1160,
              fn: p1159,
              once: p1161
            } : {
              id: p1160,
              fn: p1159
            });
          }
          return vThis103;
        },
        off: function (p1162, p1163, p1164) {
          var vThis104 = this;
          var v1044 = vThis104["_on" + p1162];
          var vLN0167 = 0;
          if (typeof p1163 === "number") {
            p1164 = p1163;
            p1163 = null;
          }
          if (p1163 || p1164) {
            for (vLN0167 = 0; vLN0167 < v1044.length; vLN0167++) {
              var v1045 = p1164 === v1044[vLN0167].id;
              if (p1163 === v1044[vLN0167].fn && v1045 || !p1163 && v1045) {
                v1044.splice(vLN0167, 1);
                break;
              }
            }
          } else if (p1162) {
            vThis104["_on" + p1162] = [];
          } else {
            var v1046 = Object.keys(vThis104);
            for (vLN0167 = 0; vLN0167 < v1046.length; vLN0167++) {
              if (v1046[vLN0167].indexOf("_on") === 0 && Array.isArray(vThis104[v1046[vLN0167]])) {
                vThis104[v1046[vLN0167]] = [];
              }
            }
          }
          return vThis104;
        },
        once: function (p1165, p1166, p1167) {
          var vThis105 = this;
          vThis105.on(p1165, p1166, p1167, 1);
          return vThis105;
        },
        _emit: function (p1168, p1169, p1170) {
          var vThis106 = this;
          var v1047 = vThis106["_on" + p1168];
          for (var v1048 = v1047.length - 1; v1048 >= 0; v1048--) {
            if (!v1047[v1048].id || v1047[v1048].id === p1169 || p1168 === "load") {
              setTimeout(function (p1171) {
                p1171.call(this, p1169, p1170);
              }.bind(vThis106, v1047[v1048].fn), 0);
              if (v1047[v1048].once) {
                vThis106.off(p1168, v1047[v1048].fn, v1047[v1048].id);
              }
            }
          }
          vThis106._loadQueue(p1168);
          return vThis106;
        },
        _loadQueue: function (p1172) {
          var vThis107 = this;
          if (vThis107._queue.length > 0) {
            var v1049 = vThis107._queue[0];
            if (v1049.event === p1172) {
              vThis107._queue.shift();
              vThis107._loadQueue();
            }
            if (!p1172) {
              v1049.action();
            }
          }
          return vThis107;
        },
        _ended: function (p1173) {
          var vThis108 = this;
          var v1050 = p1173._sprite;
          if (!vThis108._webAudio && p1173._node && !p1173._node.paused && !p1173._node.ended && p1173._node.currentTime < p1173._stop) {
            setTimeout(vThis108._ended.bind(vThis108, p1173), 100);
            return vThis108;
          }
          var v1051 = !!p1173._loop || !!vThis108._sprite[v1050][2];
          vThis108._emit("end", p1173._id);
          if (!vThis108._webAudio && v1051) {
            vThis108.stop(p1173._id, true).play(p1173._id);
          }
          if (vThis108._webAudio && v1051) {
            vThis108._emit("play", p1173._id);
            p1173._seek = p1173._start || 0;
            p1173._rateSeek = 0;
            p1173._playStart = v980.ctx.currentTime;
            var v1052 = (p1173._stop - p1173._start) * 1000 / Math.abs(p1173._rate);
            vThis108._endTimers[p1173._id] = setTimeout(vThis108._ended.bind(vThis108, p1173), v1052);
          }
          if (vThis108._webAudio && !v1051) {
            p1173._paused = true;
            p1173._ended = true;
            p1173._seek = p1173._start || 0;
            p1173._rateSeek = 0;
            vThis108._clearTimer(p1173._id);
            vThis108._cleanBuffer(p1173._node);
            v980._autoSuspend();
          }
          if (!vThis108._webAudio && !v1051) {
            vThis108.stop(p1173._id, true);
          }
          return vThis108;
        },
        _clearTimer: function (p1174) {
          var vThis109 = this;
          if (vThis109._endTimers[p1174]) {
            if (typeof vThis109._endTimers[p1174] !== "function") {
              clearTimeout(vThis109._endTimers[p1174]);
            } else {
              var v1053 = vThis109._soundById(p1174);
              if (v1053 && v1053._node) {
                v1053._node.removeEventListener("ended", vThis109._endTimers[p1174], false);
              }
            }
            delete vThis109._endTimers[p1174];
          }
          return vThis109;
        },
        _soundById: function (p1175) {
          var vThis110 = this;
          for (var vLN0168 = 0; vLN0168 < vThis110._sounds.length; vLN0168++) {
            if (p1175 === vThis110._sounds[vLN0168]._id) {
              return vThis110._sounds[vLN0168];
            }
          }
          return null;
        },
        _inactiveSound: function () {
          var vThis111 = this;
          vThis111._drain();
          for (var vLN0169 = 0; vLN0169 < vThis111._sounds.length; vLN0169++) {
            if (vThis111._sounds[vLN0169]._ended) {
              return vThis111._sounds[vLN0169].reset();
            }
          }
          return new f247(vThis111);
        },
        _drain: function () {
          var vThis112 = this;
          var v1054 = vThis112._pool;
          var vLN0170 = 0;
          var vLN0171 = 0;
          if (vThis112._sounds.length < v1054) {
            return;
          }
          for (vLN0171 = 0; vLN0171 < vThis112._sounds.length; vLN0171++) {
            if (vThis112._sounds[vLN0171]._ended) {
              vLN0170++;
            }
          }
          for (vLN0171 = vThis112._sounds.length - 1; vLN0171 >= 0; vLN0171--) {
            if (vLN0170 <= v1054) {
              return;
            }
            if (vThis112._sounds[vLN0171]._ended) {
              if (vThis112._webAudio && vThis112._sounds[vLN0171]._node) {
                vThis112._sounds[vLN0171]._node.disconnect(0);
              }
              vThis112._sounds.splice(vLN0171, 1);
              vLN0170--;
            }
          }
        },
        _getSoundIds: function (p1176) {
          var vThis113 = this;
          if (typeof p1176 === "undefined") {
            var vA21 = [];
            for (var vLN0172 = 0; vLN0172 < vThis113._sounds.length; vLN0172++) {
              vA21.push(vThis113._sounds[vLN0172]._id);
            }
            return vA21;
          } else {
            return [p1176];
          }
        },
        _refreshBuffer: function (p1177) {
          var vThis114 = this;
          p1177._node.bufferSource = v980.ctx.createBufferSource();
          p1177._node.bufferSource.buffer = vO58[vThis114._src];
          if (p1177._panner) {
            p1177._node.bufferSource.connect(p1177._panner);
          } else {
            p1177._node.bufferSource.connect(p1177._node);
          }
          p1177._node.bufferSource.loop = p1177._loop;
          if (p1177._loop) {
            p1177._node.bufferSource.loopStart = p1177._start || 0;
            p1177._node.bufferSource.loopEnd = p1177._stop || 0;
          }
          p1177._node.bufferSource.playbackRate.setValueAtTime(p1177._rate, v980.ctx.currentTime);
          return vThis114;
        },
        _cleanBuffer: function (p1178) {
          var vThis115 = this;
          var v1055 = v980._navigator && v980._navigator.vendor.indexOf("Apple") >= 0;
          if (!p1178.bufferSource) {
            return vThis115;
          }
          if (v980._scratchBuffer && p1178.bufferSource) {
            p1178.bufferSource.onended = null;
            p1178.bufferSource.disconnect(0);
            if (v1055) {
              try {
                p1178.bufferSource.buffer = v980._scratchBuffer;
              } catch (e53) {}
            }
          }
          p1178.bufferSource = null;
          return vThis115;
        },
        _clearSound: function (p1179) {
          var v1056 = /MSIE |Trident\//.test(v980._navigator && v980._navigator.userAgent);
          if (!v1056) {
            p1179.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";
          }
        }
      };
      function f247(p1180) {
        this._parent = p1180;
        this.init();
      }
      f247.prototype = {
        init: function () {
          var vThis116 = this;
          var v1057 = vThis116._parent;
          vThis116._muted = v1057._muted;
          vThis116._loop = v1057._loop;
          vThis116._volume = v1057._volume;
          vThis116._rate = v1057._rate;
          vThis116._seek = 0;
          vThis116._paused = true;
          vThis116._ended = true;
          vThis116._sprite = "__default";
          vThis116._id = ++v980._counter;
          v1057._sounds.push(vThis116);
          vThis116.create();
          return vThis116;
        },
        create: function () {
          var vThis117 = this;
          var v1058 = vThis117._parent;
          var v1059 = v980._muted || vThis117._muted || vThis117._parent._muted ? 0 : vThis117._volume;
          if (v1058._webAudio) {
            vThis117._node = typeof v980.ctx.createGain === "undefined" ? v980.ctx.createGainNode() : v980.ctx.createGain();
            vThis117._node.gain.setValueAtTime(v1059, v980.ctx.currentTime);
            vThis117._node.paused = true;
            vThis117._node.connect(v980.masterGain);
          } else if (!v980.noAudio) {
            vThis117._node = v980._obtainHtml5Audio();
            vThis117._errorFn = vThis117._errorListener.bind(vThis117);
            vThis117._node.addEventListener("error", vThis117._errorFn, false);
            vThis117._loadFn = vThis117._loadListener.bind(vThis117);
            vThis117._node.addEventListener(v980._canPlayEvent, vThis117._loadFn, false);
            vThis117._endFn = vThis117._endListener.bind(vThis117);
            vThis117._node.addEventListener("ended", vThis117._endFn, false);
            vThis117._node.src = v1058._src;
            vThis117._node.preload = v1058._preload === true ? "auto" : v1058._preload;
            vThis117._node.volume = v1059 * v980.volume();
            vThis117._node.load();
          }
          return vThis117;
        },
        reset: function () {
          var vThis118 = this;
          var v1060 = vThis118._parent;
          vThis118._muted = v1060._muted;
          vThis118._loop = v1060._loop;
          vThis118._volume = v1060._volume;
          vThis118._rate = v1060._rate;
          vThis118._seek = 0;
          vThis118._rateSeek = 0;
          vThis118._paused = true;
          vThis118._ended = true;
          vThis118._sprite = "__default";
          vThis118._id = ++v980._counter;
          return vThis118;
        },
        _errorListener: function () {
          var vThis119 = this;
          vThis119._parent._emit("loaderror", vThis119._id, vThis119._node.error ? vThis119._node.error.code : 0);
          vThis119._node.removeEventListener("error", vThis119._errorFn, false);
        },
        _loadListener: function () {
          var vThis120 = this;
          var v1061 = vThis120._parent;
          v1061._duration = Math.ceil(vThis120._node.duration * 10) / 10;
          if (Object.keys(v1061._sprite).length === 0) {
            v1061._sprite = {
              __default: [0, v1061._duration * 1000]
            };
          }
          if (v1061._state !== "loaded") {
            v1061._state = "loaded";
            v1061._emit("load");
            v1061._loadQueue();
          }
          vThis120._node.removeEventListener(v980._canPlayEvent, vThis120._loadFn, false);
        },
        _endListener: function () {
          var vThis121 = this;
          var v1062 = vThis121._parent;
          if (v1062._duration === Infinity) {
            v1062._duration = Math.ceil(vThis121._node.duration * 10) / 10;
            if (v1062._sprite.__default[1] === Infinity) {
              v1062._sprite.__default[1] = v1062._duration * 1000;
            }
            v1062._ended(vThis121);
          }
          vThis121._node.removeEventListener("ended", vThis121._endFn, false);
        }
      };
      var vO58 = {};
      function f248(p1181) {
        var v1063 = p1181._src;
        if (vO58[v1063]) {
          p1181._duration = vO58[v1063].duration;
          f253(p1181);
          return;
        }
        if (/^data:[^;]+;base64,/.test(v1063)) {
          var vAtob = atob(v1063.split(",")[1]);
          var v1064 = new Uint8Array(vAtob.length);
          for (var vLN0173 = 0; vLN0173 < vAtob.length; ++vLN0173) {
            v1064[vLN0173] = vAtob.charCodeAt(vLN0173);
          }
          f250(v1064.buffer, p1181);
        } else {
          var v1065 = new XMLHttpRequest();
          v1065.open(p1181._xhr.method, v1063, true);
          v1065.withCredentials = p1181._xhr.withCredentials;
          v1065.responseType = "arraybuffer";
          if (p1181._xhr.headers) {
            Object.keys(p1181._xhr.headers).forEach(function (p1182) {
              v1065.setRequestHeader(p1182, p1181._xhr.headers[p1182]);
            });
          }
          v1065.onload = function () {
            var v1066 = (v1065.status + "")[0];
            if (v1066 !== "0" && v1066 !== "2" && v1066 !== "3") {
              p1181._emit("loaderror", null, "Failed loading audio file with status: " + v1065.status + ".");
              return;
            }
            f250(v1065.response, p1181);
          };
          v1065.onerror = function () {
            if (p1181._webAudio) {
              p1181._html5 = true;
              p1181._webAudio = false;
              p1181._sounds = [];
              delete vO58[v1063];
              p1181.load();
            }
          };
          f249(v1065);
        }
      }
      function f249(p1183) {
        try {
          p1183.send();
        } catch (e54) {
          p1183.onerror();
        }
      }
      function f250(p1184, p1185) {
        function f251() {
          p1185._emit("loaderror", null, "Decoding audio data failed.");
        }
        function f252(p1186) {
          if (p1186 && p1185._sounds.length > 0) {
            vO58[p1185._src] = p1186;
            f253(p1185, p1186);
          } else {
            f251();
          }
        }
        if (typeof Promise !== "undefined" && v980.ctx.decodeAudioData.length === 1) {
          v980.ctx.decodeAudioData(p1184).then(f252).catch(f251);
        } else {
          v980.ctx.decodeAudioData(p1184, f252, f251);
        }
      }
      function f253(p1187, p1188) {
        if (p1188 && !p1187._duration) {
          p1187._duration = p1188.duration;
        }
        if (Object.keys(p1187._sprite).length === 0) {
          p1187._sprite = {
            __default: [0, p1187._duration * 1000]
          };
        }
        if (p1187._state !== "loaded") {
          p1187._state = "loaded";
          p1187._emit("load");
          p1187._loadQueue();
        }
      }
      function f254() {
        if (!v980.usingWebAudio) {
          return;
        }
        try {
          if (typeof AudioContext !== "undefined") {
            v980.ctx = new AudioContext();
          } else if (typeof webkitAudioContext !== "undefined") {
            v980.ctx = new webkitAudioContext();
          } else {
            v980.usingWebAudio = false;
          }
        } catch (e55) {
          v980.usingWebAudio = false;
        }
        if (!v980.ctx) {
          v980.usingWebAudio = false;
        }
        var v1067 = /iP(hone|od|ad)/.test(v980._navigator && v980._navigator.platform);
        var v1068 = v980._navigator && v980._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        var v1069 = v1068 ? parseInt(v1068[1], 10) : null;
        if (v1067 && v1069 && v1069 < 9) {
          var v1070 = /safari/.test(v980._navigator && v980._navigator.userAgent.toLowerCase());
          if (v980._navigator && !v1070) {
            v980.usingWebAudio = false;
          }
        }
        if (v980.usingWebAudio) {
          v980.masterGain = typeof v980.ctx.createGain === "undefined" ? v980.ctx.createGainNode() : v980.ctx.createGain();
          v980.masterGain.gain.setValueAtTime(v980._muted ? 0 : v980._volume, v980.ctx.currentTime);
          v980.masterGain.connect(v980.ctx.destination);
        }
        v980._setup();
      }
      if (true) {
        v949 = [];
        v950 = function () {
          return {
            Howler: v980,
            Howl: f240
          };
        }.apply(p1129, v949);
        if (v950 !== undefined) {
          p1128.exports = v950;
        }
      }
      if (true) {
        p1129.Howler = v980;
        p1129.Howl = f240;
      }
      if (typeof p1130.g !== "undefined") {
        p1130.g.HowlerGlobal = f237;
        p1130.g.Howler = v980;
        p1130.g.Howl = f240;
        p1130.g.Sound = f247;
      } else if (typeof window !== "undefined") {
        window.HowlerGlobal = f237;
        window.Howler = v980;
        window.Howl = f240;
        window.Sound = f247;
      }
    })();
    (function () {
      'use strict';

      HowlerGlobal.prototype._pos = [0, 0, 0];
      HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];
      HowlerGlobal.prototype.stereo = function (p1189) {
        var vThis122 = this;
        if (!vThis122.ctx || !vThis122.ctx.listener) {
          return vThis122;
        }
        for (var v1071 = vThis122._howls.length - 1; v1071 >= 0; v1071--) {
          vThis122._howls[v1071].stereo(p1189);
        }
        return vThis122;
      };
      HowlerGlobal.prototype.pos = function (p1190, p1191, p1192) {
        var vThis123 = this;
        if (!vThis123.ctx || !vThis123.ctx.listener) {
          return vThis123;
        }
        p1191 = typeof p1191 !== "number" ? vThis123._pos[1] : p1191;
        p1192 = typeof p1192 !== "number" ? vThis123._pos[2] : p1192;
        if (typeof p1190 === "number") {
          vThis123._pos = [p1190, p1191, p1192];
          if (typeof vThis123.ctx.listener.positionX !== "undefined") {
            vThis123.ctx.listener.positionX.setTargetAtTime(vThis123._pos[0], Howler.ctx.currentTime, 0.1);
            vThis123.ctx.listener.positionY.setTargetAtTime(vThis123._pos[1], Howler.ctx.currentTime, 0.1);
            vThis123.ctx.listener.positionZ.setTargetAtTime(vThis123._pos[2], Howler.ctx.currentTime, 0.1);
          } else {
            vThis123.ctx.listener.setPosition(vThis123._pos[0], vThis123._pos[1], vThis123._pos[2]);
          }
        } else {
          return vThis123._pos;
        }
        return vThis123;
      };
      HowlerGlobal.prototype.orientation = function (p1193, p1194, p1195, p1196, p1197, p1198) {
        var vThis124 = this;
        if (!vThis124.ctx || !vThis124.ctx.listener) {
          return vThis124;
        }
        var v1072 = vThis124._orientation;
        p1194 = typeof p1194 !== "number" ? v1072[1] : p1194;
        p1195 = typeof p1195 !== "number" ? v1072[2] : p1195;
        p1196 = typeof p1196 !== "number" ? v1072[3] : p1196;
        p1197 = typeof p1197 !== "number" ? v1072[4] : p1197;
        p1198 = typeof p1198 !== "number" ? v1072[5] : p1198;
        if (typeof p1193 === "number") {
          vThis124._orientation = [p1193, p1194, p1195, p1196, p1197, p1198];
          if (typeof vThis124.ctx.listener.forwardX !== "undefined") {
            vThis124.ctx.listener.forwardX.setTargetAtTime(p1193, Howler.ctx.currentTime, 0.1);
            vThis124.ctx.listener.forwardY.setTargetAtTime(p1194, Howler.ctx.currentTime, 0.1);
            vThis124.ctx.listener.forwardZ.setTargetAtTime(p1195, Howler.ctx.currentTime, 0.1);
            vThis124.ctx.listener.upX.setTargetAtTime(p1196, Howler.ctx.currentTime, 0.1);
            vThis124.ctx.listener.upY.setTargetAtTime(p1197, Howler.ctx.currentTime, 0.1);
            vThis124.ctx.listener.upZ.setTargetAtTime(p1198, Howler.ctx.currentTime, 0.1);
          } else {
            vThis124.ctx.listener.setOrientation(p1193, p1194, p1195, p1196, p1197, p1198);
          }
        } else {
          return v1072;
        }
        return vThis124;
      };
      Howl.prototype.init = function (p1199) {
        return function (p1200) {
          var vThis125 = this;
          vThis125._orientation = p1200.orientation || [1, 0, 0];
          vThis125._stereo = p1200.stereo || null;
          vThis125._pos = p1200.pos || null;
          vThis125._pannerAttr = {
            coneInnerAngle: typeof p1200.coneInnerAngle !== "undefined" ? p1200.coneInnerAngle : 360,
            coneOuterAngle: typeof p1200.coneOuterAngle !== "undefined" ? p1200.coneOuterAngle : 360,
            coneOuterGain: typeof p1200.coneOuterGain !== "undefined" ? p1200.coneOuterGain : 0,
            distanceModel: typeof p1200.distanceModel !== "undefined" ? p1200.distanceModel : "inverse",
            maxDistance: typeof p1200.maxDistance !== "undefined" ? p1200.maxDistance : 10000,
            panningModel: typeof p1200.panningModel !== "undefined" ? p1200.panningModel : "HRTF",
            refDistance: typeof p1200.refDistance !== "undefined" ? p1200.refDistance : 1,
            rolloffFactor: typeof p1200.rolloffFactor !== "undefined" ? p1200.rolloffFactor : 1
          };
          vThis125._onstereo = p1200.onstereo ? [{
            fn: p1200.onstereo
          }] : [];
          vThis125._onpos = p1200.onpos ? [{
            fn: p1200.onpos
          }] : [];
          vThis125._onorientation = p1200.onorientation ? [{
            fn: p1200.onorientation
          }] : [];
          return p1199.call(this, p1200);
        };
      }(Howl.prototype.init);
      Howl.prototype.stereo = function (p1201, p1202) {
        var vThis126 = this;
        if (!vThis126._webAudio) {
          return vThis126;
        }
        if (vThis126._state !== "loaded") {
          vThis126._queue.push({
            event: "stereo",
            action: function () {
              vThis126.stereo(p1201, p1202);
            }
          });
          return vThis126;
        }
        var v1073 = typeof Howler.ctx.createStereoPanner === "undefined" ? "spatial" : "stereo";
        if (typeof p1202 === "undefined") {
          if (typeof p1201 === "number") {
            vThis126._stereo = p1201;
            vThis126._pos = [p1201, 0, 0];
          } else {
            return vThis126._stereo;
          }
        }
        var v1074 = vThis126._getSoundIds(p1202);
        for (var vLN0174 = 0; vLN0174 < v1074.length; vLN0174++) {
          var v1075 = vThis126._soundById(v1074[vLN0174]);
          if (v1075) {
            if (typeof p1201 === "number") {
              v1075._stereo = p1201;
              v1075._pos = [p1201, 0, 0];
              if (v1075._node) {
                v1075._pannerAttr.panningModel = "equalpower";
                if (!v1075._panner || !v1075._panner.pan) {
                  f255(v1075, v1073);
                }
                if (v1073 === "spatial") {
                  if (typeof v1075._panner.positionX !== "undefined") {
                    v1075._panner.positionX.setValueAtTime(p1201, Howler.ctx.currentTime);
                    v1075._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime);
                    v1075._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime);
                  } else {
                    v1075._panner.setPosition(p1201, 0, 0);
                  }
                } else {
                  v1075._panner.pan.setValueAtTime(p1201, Howler.ctx.currentTime);
                }
              }
              vThis126._emit("stereo", v1075._id);
            } else {
              return v1075._stereo;
            }
          }
        }
        return vThis126;
      };
      Howl.prototype.pos = function (p1203, p1204, p1205, p1206) {
        var vThis127 = this;
        if (!vThis127._webAudio) {
          return vThis127;
        }
        if (vThis127._state !== "loaded") {
          vThis127._queue.push({
            event: "pos",
            action: function () {
              vThis127.pos(p1203, p1204, p1205, p1206);
            }
          });
          return vThis127;
        }
        p1204 = typeof p1204 !== "number" ? 0 : p1204;
        p1205 = typeof p1205 !== "number" ? -0.5 : p1205;
        if (typeof p1206 === "undefined") {
          if (typeof p1203 === "number") {
            vThis127._pos = [p1203, p1204, p1205];
          } else {
            return vThis127._pos;
          }
        }
        var v1076 = vThis127._getSoundIds(p1206);
        for (var vLN0175 = 0; vLN0175 < v1076.length; vLN0175++) {
          var v1077 = vThis127._soundById(v1076[vLN0175]);
          if (v1077) {
            if (typeof p1203 === "number") {
              v1077._pos = [p1203, p1204, p1205];
              if (v1077._node) {
                if (!v1077._panner || v1077._panner.pan) {
                  f255(v1077, "spatial");
                }
                if (typeof v1077._panner.positionX !== "undefined") {
                  v1077._panner.positionX.setValueAtTime(p1203, Howler.ctx.currentTime);
                  v1077._panner.positionY.setValueAtTime(p1204, Howler.ctx.currentTime);
                  v1077._panner.positionZ.setValueAtTime(p1205, Howler.ctx.currentTime);
                } else {
                  v1077._panner.setPosition(p1203, p1204, p1205);
                }
              }
              vThis127._emit("pos", v1077._id);
            } else {
              return v1077._pos;
            }
          }
        }
        return vThis127;
      };
      Howl.prototype.orientation = function (p1207, p1208, p1209, p1210) {
        var vThis128 = this;
        if (!vThis128._webAudio) {
          return vThis128;
        }
        if (vThis128._state !== "loaded") {
          vThis128._queue.push({
            event: "orientation",
            action: function () {
              vThis128.orientation(p1207, p1208, p1209, p1210);
            }
          });
          return vThis128;
        }
        p1208 = typeof p1208 !== "number" ? vThis128._orientation[1] : p1208;
        p1209 = typeof p1209 !== "number" ? vThis128._orientation[2] : p1209;
        if (typeof p1210 === "undefined") {
          if (typeof p1207 === "number") {
            vThis128._orientation = [p1207, p1208, p1209];
          } else {
            return vThis128._orientation;
          }
        }
        var v1078 = vThis128._getSoundIds(p1210);
        for (var vLN0176 = 0; vLN0176 < v1078.length; vLN0176++) {
          var v1079 = vThis128._soundById(v1078[vLN0176]);
          if (v1079) {
            if (typeof p1207 === "number") {
              v1079._orientation = [p1207, p1208, p1209];
              if (v1079._node) {
                if (!v1079._panner) {
                  if (!v1079._pos) {
                    v1079._pos = vThis128._pos || [0, 0, -0.5];
                  }
                  f255(v1079, "spatial");
                }
                if (typeof v1079._panner.orientationX !== "undefined") {
                  v1079._panner.orientationX.setValueAtTime(p1207, Howler.ctx.currentTime);
                  v1079._panner.orientationY.setValueAtTime(p1208, Howler.ctx.currentTime);
                  v1079._panner.orientationZ.setValueAtTime(p1209, Howler.ctx.currentTime);
                } else {
                  v1079._panner.setOrientation(p1207, p1208, p1209);
                }
              }
              vThis128._emit("orientation", v1079._id);
            } else {
              return v1079._orientation;
            }
          }
        }
        return vThis128;
      };
      Howl.prototype.pannerAttr = function () {
        var vThis129 = this;
        var vArguments6 = arguments;
        var v1080;
        var v1081;
        var v1082;
        if (!vThis129._webAudio) {
          return vThis129;
        }
        if (vArguments6.length === 0) {
          return vThis129._pannerAttr;
        } else if (vArguments6.length === 1) {
          if (typeof vArguments6[0] === "object") {
            v1080 = vArguments6[0];
            if (typeof v1081 === "undefined") {
              if (!v1080.pannerAttr) {
                v1080.pannerAttr = {
                  coneInnerAngle: v1080.coneInnerAngle,
                  coneOuterAngle: v1080.coneOuterAngle,
                  coneOuterGain: v1080.coneOuterGain,
                  distanceModel: v1080.distanceModel,
                  maxDistance: v1080.maxDistance,
                  refDistance: v1080.refDistance,
                  rolloffFactor: v1080.rolloffFactor,
                  panningModel: v1080.panningModel
                };
              }
              vThis129._pannerAttr = {
                coneInnerAngle: typeof v1080.pannerAttr.coneInnerAngle !== "undefined" ? v1080.pannerAttr.coneInnerAngle : vThis129._coneInnerAngle,
                coneOuterAngle: typeof v1080.pannerAttr.coneOuterAngle !== "undefined" ? v1080.pannerAttr.coneOuterAngle : vThis129._coneOuterAngle,
                coneOuterGain: typeof v1080.pannerAttr.coneOuterGain !== "undefined" ? v1080.pannerAttr.coneOuterGain : vThis129._coneOuterGain,
                distanceModel: typeof v1080.pannerAttr.distanceModel !== "undefined" ? v1080.pannerAttr.distanceModel : vThis129._distanceModel,
                maxDistance: typeof v1080.pannerAttr.maxDistance !== "undefined" ? v1080.pannerAttr.maxDistance : vThis129._maxDistance,
                refDistance: typeof v1080.pannerAttr.refDistance !== "undefined" ? v1080.pannerAttr.refDistance : vThis129._refDistance,
                rolloffFactor: typeof v1080.pannerAttr.rolloffFactor !== "undefined" ? v1080.pannerAttr.rolloffFactor : vThis129._rolloffFactor,
                panningModel: typeof v1080.pannerAttr.panningModel !== "undefined" ? v1080.pannerAttr.panningModel : vThis129._panningModel
              };
            }
          } else {
            v1082 = vThis129._soundById(parseInt(vArguments6[0], 10));
            if (v1082) {
              return v1082._pannerAttr;
            } else {
              return vThis129._pannerAttr;
            }
          }
        } else if (vArguments6.length === 2) {
          v1080 = vArguments6[0];
          v1081 = parseInt(vArguments6[1], 10);
        }
        var v1083 = vThis129._getSoundIds(v1081);
        for (var vLN0177 = 0; vLN0177 < v1083.length; vLN0177++) {
          v1082 = vThis129._soundById(v1083[vLN0177]);
          if (v1082) {
            var v1084 = v1082._pannerAttr;
            v1084 = {
              coneInnerAngle: typeof v1080.coneInnerAngle !== "undefined" ? v1080.coneInnerAngle : v1084.coneInnerAngle,
              coneOuterAngle: typeof v1080.coneOuterAngle !== "undefined" ? v1080.coneOuterAngle : v1084.coneOuterAngle,
              coneOuterGain: typeof v1080.coneOuterGain !== "undefined" ? v1080.coneOuterGain : v1084.coneOuterGain,
              distanceModel: typeof v1080.distanceModel !== "undefined" ? v1080.distanceModel : v1084.distanceModel,
              maxDistance: typeof v1080.maxDistance !== "undefined" ? v1080.maxDistance : v1084.maxDistance,
              refDistance: typeof v1080.refDistance !== "undefined" ? v1080.refDistance : v1084.refDistance,
              rolloffFactor: typeof v1080.rolloffFactor !== "undefined" ? v1080.rolloffFactor : v1084.rolloffFactor,
              panningModel: typeof v1080.panningModel !== "undefined" ? v1080.panningModel : v1084.panningModel
            };
            var v1085 = v1082._panner;
            if (!v1085) {
              if (!v1082._pos) {
                v1082._pos = vThis129._pos || [0, 0, -0.5];
              }
              f255(v1082, "spatial");
              v1085 = v1082._panner;
            }
            v1085.coneInnerAngle = v1084.coneInnerAngle;
            v1085.coneOuterAngle = v1084.coneOuterAngle;
            v1085.coneOuterGain = v1084.coneOuterGain;
            v1085.distanceModel = v1084.distanceModel;
            v1085.maxDistance = v1084.maxDistance;
            v1085.refDistance = v1084.refDistance;
            v1085.rolloffFactor = v1084.rolloffFactor;
            v1085.panningModel = v1084.panningModel;
          }
        }
        return vThis129;
      };
      Sound.prototype.init = function (p1211) {
        return function () {
          var vThis130 = this;
          var v1086 = vThis130._parent;
          vThis130._orientation = v1086._orientation;
          vThis130._stereo = v1086._stereo;
          vThis130._pos = v1086._pos;
          vThis130._pannerAttr = v1086._pannerAttr;
          p1211.call(this);
          if (vThis130._stereo) {
            v1086.stereo(vThis130._stereo);
          } else if (vThis130._pos) {
            v1086.pos(vThis130._pos[0], vThis130._pos[1], vThis130._pos[2], vThis130._id);
          }
        };
      }(Sound.prototype.init);
      Sound.prototype.reset = function (p1212) {
        return function () {
          var vThis131 = this;
          var v1087 = vThis131._parent;
          vThis131._orientation = v1087._orientation;
          vThis131._stereo = v1087._stereo;
          vThis131._pos = v1087._pos;
          vThis131._pannerAttr = v1087._pannerAttr;
          if (vThis131._stereo) {
            v1087.stereo(vThis131._stereo);
          } else if (vThis131._pos) {
            v1087.pos(vThis131._pos[0], vThis131._pos[1], vThis131._pos[2], vThis131._id);
          } else if (vThis131._panner) {
            vThis131._panner.disconnect(0);
            vThis131._panner = undefined;
            v1087._refreshBuffer(vThis131);
          }
          return p1212.call(this);
        };
      }(Sound.prototype.reset);
      function f255(p1213, p1214) {
        p1214 = p1214 || "spatial";
        if (p1214 === "spatial") {
          p1213._panner = Howler.ctx.createPanner();
          p1213._panner.coneInnerAngle = p1213._pannerAttr.coneInnerAngle;
          p1213._panner.coneOuterAngle = p1213._pannerAttr.coneOuterAngle;
          p1213._panner.coneOuterGain = p1213._pannerAttr.coneOuterGain;
          p1213._panner.distanceModel = p1213._pannerAttr.distanceModel;
          p1213._panner.maxDistance = p1213._pannerAttr.maxDistance;
          p1213._panner.refDistance = p1213._pannerAttr.refDistance;
          p1213._panner.rolloffFactor = p1213._pannerAttr.rolloffFactor;
          p1213._panner.panningModel = p1213._pannerAttr.panningModel;
          if (typeof p1213._panner.positionX !== "undefined") {
            p1213._panner.positionX.setValueAtTime(p1213._pos[0], Howler.ctx.currentTime);
            p1213._panner.positionY.setValueAtTime(p1213._pos[1], Howler.ctx.currentTime);
            p1213._panner.positionZ.setValueAtTime(p1213._pos[2], Howler.ctx.currentTime);
          } else {
            p1213._panner.setPosition(p1213._pos[0], p1213._pos[1], p1213._pos[2]);
          }
          if (typeof p1213._panner.orientationX !== "undefined") {
            p1213._panner.orientationX.setValueAtTime(p1213._orientation[0], Howler.ctx.currentTime);
            p1213._panner.orientationY.setValueAtTime(p1213._orientation[1], Howler.ctx.currentTime);
            p1213._panner.orientationZ.setValueAtTime(p1213._orientation[2], Howler.ctx.currentTime);
          } else {
            p1213._panner.setOrientation(p1213._orientation[0], p1213._orientation[1], p1213._orientation[2]);
          }
        } else {
          p1213._panner = Howler.ctx.createStereoPanner();
          p1213._panner.pan.setValueAtTime(p1213._stereo, Howler.ctx.currentTime);
        }
        p1213._panner.connect(p1213._node);
        if (!p1213._paused) {
          p1213._parent.pause(p1213._id, true).play(p1213._id, true);
        }
      }
    })();
  }, (p1215, p1216, p1217) => {
    'use strict';

    Object.defineProperty(p1216, "__esModule", {
      value: true
    });
    p1216.SchemaSerializer = p1216.registerSerializer = p1216.Auth = p1216.Room = p1216.ErrorCode = p1216.Protocol = p1216.MatchMakeError = p1216.Client = undefined;
    p1217(3);
    var vP1217 = p1217(4);
    Object.defineProperty(p1216, "Client", {
      enumerable: true,
      get: function () {
        return vP1217.Client;
      }
    });
    Object.defineProperty(p1216, "MatchMakeError", {
      enumerable: true,
      get: function () {
        return vP1217.MatchMakeError;
      }
    });
    var vP12172 = p1217(11);
    Object.defineProperty(p1216, "Protocol", {
      enumerable: true,
      get: function () {
        return vP12172.Protocol;
      }
    });
    Object.defineProperty(p1216, "ErrorCode", {
      enumerable: true,
      get: function () {
        return vP12172.ErrorCode;
      }
    });
    var vP12173 = p1217(6);
    Object.defineProperty(p1216, "Room", {
      enumerable: true,
      get: function () {
        return vP12173.Room;
      }
    });
    var vP12174 = p1217(18);
    Object.defineProperty(p1216, "Auth", {
      enumerable: true,
      get: function () {
        return vP12174.Auth;
      }
    });
    const vP12175 = p1217(21);
    Object.defineProperty(p1216, "SchemaSerializer", {
      enumerable: true,
      get: function () {
        return vP12175.SchemaSerializer;
      }
    });
    const vP12176 = p1217(22);
    const vP12177 = p1217(12);
    Object.defineProperty(p1216, "registerSerializer", {
      enumerable: true,
      get: function () {
        return vP12177.registerSerializer;
      }
    });
    (0, vP12177.registerSerializer)("schema", vP12175.SchemaSerializer);
    (0, vP12177.registerSerializer)("none", vP12176.NoneSerializer);
  }, () => {
    if (!ArrayBuffer.isView) {
      ArrayBuffer.isView = p1218 => {
        return p1218 !== null && typeof p1218 === "object" && p1218.buffer instanceof ArrayBuffer;
      };
    }
    if (typeof globalThis === "undefined" && typeof window !== "undefined") {
      window.globalThis = window;
    }
  }, function (p1219, p1220, p1221) {
    'use strict';

    var v1088 = this && this.__awaiter || function (p1222, p1223, p1224, p1225) {
      function f256(p1226) {
        if (p1226 instanceof p1224) {
          return p1226;
        } else {
          return new p1224(function (p1227) {
            p1227(p1226);
          });
        }
      }
      return new (p1224 ||= Promise)(function (p1228, p1229) {
        function f257(p1230) {
          try {
            f259(p1225.next(p1230));
          } catch (e56) {
            p1229(e56);
          }
        }
        function f258(p1231) {
          try {
            f259(p1225.throw(p1231));
          } catch (e57) {
            p1229(e57);
          }
        }
        function f259(p1232) {
          if (p1232.done) {
            p1228(p1232.value);
          } else {
            f256(p1232.value).then(f257, f258);
          }
        }
        f259((p1225 = p1225.apply(p1222, p1223 || [])).next());
      });
    };
    Object.defineProperty(p1220, "__esModule", {
      value: true
    });
    p1220.Client = p1220.MatchMakeError = undefined;
    const vP1221 = p1221(5);
    const vP12212 = p1221(6);
    const vP12213 = p1221(16);
    const vP12214 = p1221(18);
    const vP12215 = p1221(20);
    class C extends Error {
      constructor(p1233, p1234) {
        super(p1233);
        this.code = p1234;
        Object.setPrototypeOf(this, C.prototype);
      }
    }
    p1220.MatchMakeError = C;
    const v1089 = typeof window !== "undefined" && typeof window?.location?.hostname !== "undefined" ? window.location.protocol.replace("http", "ws") + "//" + window.location.hostname + (window.location.port && ":" + window.location.port) : "ws://127.0.0.1:2567";
    class C2 {
      constructor(p1235 = v1089, p1236) {
        var v1090;
        if (typeof p1235 === "string") {
          const v1091 = p1235.startsWith("/") ? new URL(p1235, v1089) : new URL(p1235);
          const v1092 = v1091.protocol === "https:" || v1091.protocol === "wss:";
          const vNumber = Number(v1091.port || (v1092 ? 443 : 80));
          this.settings = {
            hostname: v1091.hostname,
            pathname: v1091.pathname,
            port: vNumber,
            secure: v1092
          };
        } else {
          if (p1235.port === undefined) {
            p1235.port = p1235.secure ? 443 : 80;
          }
          if (p1235.pathname === undefined) {
            p1235.pathname = "";
          }
          this.settings = p1235;
        }
        if (this.settings.pathname.endsWith("/")) {
          this.settings.pathname = this.settings.pathname.slice(0, -1);
        }
        this.http = new vP12213.HTTP(this, p1236?.headers || {});
        this.auth = new vP12214.Auth(this.http);
        this.urlBuilder = p1236?.urlBuilder;
        if (!this.urlBuilder && typeof window !== "undefined" && ((v1090 = window?.location?.hostname) === null || v1090 === undefined ? undefined : v1090.includes("discordsays.com"))) {
          this.urlBuilder = vP12215.discordURLBuilder;
          console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder.");
        }
      }
      joinOrCreate(p1237, p1238 = {}, p1239) {
        return v1088(this, undefined, undefined, function* () {
          return yield this.createMatchMakeRequest("joinOrCreate", p1237, p1238, p1239);
        });
      }
      create(p1240, p1241 = {}, p1242) {
        return v1088(this, undefined, undefined, function* () {
          return yield this.createMatchMakeRequest("create", p1240, p1241, p1242);
        });
      }
      join(p1243, p1244 = {}, p1245) {
        return v1088(this, undefined, undefined, function* () {
          return yield this.createMatchMakeRequest("join", p1243, p1244, p1245);
        });
      }
      joinById(p1246, p1247 = {}, p1248) {
        return v1088(this, undefined, undefined, function* () {
          return yield this.createMatchMakeRequest("joinById", p1246, p1247, p1248);
        });
      }
      reconnect(p1249, p1250) {
        return v1088(this, undefined, undefined, function* () {
          if (typeof p1249 === "string" && typeof p1250 === "string") {
            throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          }
          var [v1093, v1094] = p1249.split(":");
          if (!v1093 || !v1094) {
            throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          }
          return yield this.createMatchMakeRequest("reconnect", v1093, {
            reconnectionToken: v1094
          }, p1250);
        });
      }
      getAvailableRooms(p1251 = "") {
        return v1088(this, undefined, undefined, function* () {
          return (yield this.http.get("matchmake/" + p1251, {
            headers: {
              Accept: "application/json"
            }
          })).data;
        });
      }
      consumeSeatReservation(p1252, p1253, p1254) {
        return v1088(this, undefined, undefined, function* () {
          var v1095 = this.createRoom(p1252.room.name, p1253);
          v1095.roomId = p1252.room.roomId;
          v1095.sessionId = p1252.sessionId;
          var vO59 = {
            sessionId: v1095.sessionId
          };
          if (p1252.reconnectionToken) {
            vO59.reconnectionToken = p1252.reconnectionToken;
          }
          var v1096 = p1254 || v1095;
          v1095.connect(this.buildEndpoint(p1252.room, vO59), p1252.devMode && (() => v1088(this, undefined, undefined, function* () {
            console.info("[Colyseus devMode]: " + String.fromCodePoint(128260) + " Re-establishing connection with room id '" + v1095.roomId + "'...");
            var vLN0178 = 0;
            var vLN8 = 8;
            var vF22 = () => v1088(this, undefined, undefined, function* () {
              vLN0178++;
              try {
                yield this.consumeSeatReservation(p1252, p1253, v1096);
                console.info("[Colyseus devMode]: " + String.fromCodePoint(9989) + " Successfully re-established connection with room '" + v1095.roomId + "'");
              } catch (e58) {
                if (vLN0178 < vLN8) {
                  console.info("[Colyseus devMode]: " + String.fromCodePoint(128260) + " retrying... (" + vLN0178 + " out of " + vLN8 + ")");
                  setTimeout(vF22, 2000);
                } else {
                  console.info("[Colyseus devMode]: " + String.fromCodePoint(10060) + " Failed to reconnect. Is your server running? Please check server logs.");
                }
              }
            });
            setTimeout(vF22, 2000);
          })), v1096, this.http.headers);
          return new Promise((p1255, p1256) => {
            var vF23 = (p1257, p1258) => p1256(new vP1221.ServerError(p1257, p1258));
            v1096.onError.once(vF23);
            v1096.onJoin.once(() => {
              v1096.onError.remove(vF23);
              p1255(v1096);
            });
          });
        });
      }
      createMatchMakeRequest(p1259, p1260, p1261 = {}, p1262, p1263) {
        return v1088(this, undefined, undefined, function* () {
          var v1097 = (yield this.http.post("matchmake/" + p1259 + "/" + p1260, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(p1261)
          })).data;
          if (v1097.error) {
            throw new C(v1097.error, v1097.code);
          }
          if (p1259 === "reconnect") {
            v1097.reconnectionToken = p1261.reconnectionToken;
          }
          return yield this.consumeSeatReservation(v1097, p1262, p1263);
        });
      }
      createRoom(p1264, p1265) {
        return new vP12212.Room(p1264, p1265);
      }
      buildEndpoint(p1266, p1267 = {}) {
        const vA22 = [];
        for (const v1098 in p1267) {
          if (!p1267.hasOwnProperty(v1098)) {
            continue;
          }
          vA22.push(v1098 + "=" + p1267[v1098]);
        }
        let v1099 = this.settings.secure ? "wss://" : "ws://";
        if (p1266.publicAddress) {
          v1099 += "" + p1266.publicAddress;
        } else {
          v1099 += "" + this.settings.hostname + this.getEndpointPort() + this.settings.pathname;
        }
        const v1100 = v1099 + "/" + p1266.processId + "/" + p1266.roomId + "?" + vA22.join("&");
        if (this.urlBuilder) {
          return this.urlBuilder(new URL(v1100));
        } else {
          return v1100;
        }
      }
      getHttpEndpoint(p1268 = "") {
        const v1101 = p1268.startsWith("/") ? p1268 : "/" + p1268;
        const v1102 = (this.settings.secure ? "https" : "http") + "://" + this.settings.hostname + this.getEndpointPort() + this.settings.pathname + v1101;
        if (this.urlBuilder) {
          return this.urlBuilder(new URL(v1102));
        } else {
          return v1102;
        }
      }
      getEndpointPort() {
        if (this.settings.port !== 80 && this.settings.port !== 443) {
          return ":" + this.settings.port;
        } else {
          return "";
        }
      }
    }
    p1220.Client = C2;
  }, (p1269, p1270) => {
    'use strict';

    Object.defineProperty(p1270, "__esModule", {
      value: true
    });
    p1270.ServerError = p1270.CloseCode = undefined;
    var v1103;
    (function (p1271) {
      p1271[p1271.CONSENTED = 4000] = "CONSENTED";
      p1271[p1271.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    })(v1103 = p1270.CloseCode ||= {});
    class C3 extends Error {
      constructor(p1272, p1273) {
        super(p1273);
        this.name = "ServerError";
        this.code = p1272;
      }
    }
    p1270.ServerError = C3;
  }, function (p1274, p1275, p1276) {
    'use strict';

    var v1104 = this && this.__createBinding || (Object.create ? function (p1277, p1278, p1279, p1280 = p1279) {
      var v1105 = Object.getOwnPropertyDescriptor(p1278, p1279);
      if (!v1105 || ("get" in v1105 ? !p1278.__esModule : v1105.writable || v1105.configurable)) {
        v1105 = {
          enumerable: true,
          get: function () {
            return p1278[p1279];
          }
        };
      }
      Object.defineProperty(p1277, p1280, v1105);
    } : function (p1281, p1282, p1283, p1284 = p1283) {
      p1281[p1284] = p1282[p1283];
    });
    var v1106 = this && this.__setModuleDefault || (Object.create ? function (p1285, p1286) {
      Object.defineProperty(p1285, "default", {
        enumerable: true,
        value: p1286
      });
    } : function (p1287, p1288) {
      p1287.default = p1288;
    });
    var v1107 = this && this.__importStar || function (p1289) {
      if (p1289 && p1289.__esModule) {
        return p1289;
      }
      var vO60 = {};
      if (p1289 != null) {
        for (var v1108 in p1289) {
          if (v1108 !== "default" && Object.prototype.hasOwnProperty.call(p1289, v1108)) {
            v1104(vO60, p1289, v1108);
          }
        }
      }
      v1106(vO60, p1289);
      return vO60;
    };
    Object.defineProperty(p1275, "__esModule", {
      value: true
    });
    p1275.Room = undefined;
    const vV1107 = v1107(p1276(7));
    const vP1276 = p1276(8);
    const vP12762 = p1276(11);
    const vP12763 = p1276(12);
    const vP12764 = p1276(13);
    const vP12765 = p1276(14);
    const vP12766 = p1276(15);
    const vP12767 = p1276(5);
    class C4 {
      constructor(p1290, p1291) {
        this.onStateChange = (0, vP12765.createSignal)();
        this.onError = (0, vP12765.createSignal)();
        this.onLeave = (0, vP12765.createSignal)();
        this.onJoin = (0, vP12765.createSignal)();
        this.hasJoined = false;
        this.onMessageHandlers = (0, vP12764.createNanoEvents)();
        this.roomId = null;
        this.name = p1290;
        if (p1291) {
          this.serializer = new ((0, vP12763.getSerializer)("schema"))();
          this.rootSchema = p1291;
          this.serializer.state = new p1291();
        }
        this.onError((p1292, p1293) => {
          var v1109;
          if ((v1109 = console.warn) === null || v1109 === undefined) {
            return undefined;
          } else {
            return v1109.call(console, "colyseus.js - onError => (" + p1292 + ") " + p1293);
          }
        });
        this.onLeave(() => this.removeAllListeners());
      }
      get id() {
        return this.roomId;
      }
      connect(p1294, p1295, p1296 = this, p1297) {
        const v1110 = new vP1276.Connection();
        p1296.connection = v1110;
        v1110.events.onmessage = C4.prototype.onMessageCallback.bind(p1296);
        v1110.events.onclose = function (p1298) {
          var v1111;
          if (!p1296.hasJoined) {
            if ((v1111 = console.warn) === null || v1111 === undefined) {
              undefined;
            } else {
              v1111.call(console, "Room connection was closed unexpectedly (" + p1298.code + "): " + p1298.reason);
            }
            p1296.onError.invoke(p1298.code, p1298.reason);
            return;
          }
          if (p1298.code === vP12767.CloseCode.DEVMODE_RESTART && p1295) {
            p1295();
          } else {
            p1296.onLeave.invoke(p1298.code, p1298.reason);
            p1296.destroy();
          }
        };
        v1110.events.onerror = function (p1299) {
          var v1112;
          if ((v1112 = console.warn) === null || v1112 === undefined) {
            undefined;
          } else {
            v1112.call(console, "Room, onError (" + p1299.code + "): " + p1299.reason);
          }
          p1296.onError.invoke(p1299.code, p1299.reason);
        };
        v1110.connect(p1294, p1297);
      }
      leave(p1300 = true) {
        return new Promise(p1301 => {
          this.onLeave(p1302 => p1301(p1302));
          if (this.connection) {
            if (p1300) {
              this.connection.send([vP12762.Protocol.LEAVE_ROOM]);
            } else {
              this.connection.close();
            }
          } else {
            this.onLeave.invoke(vP12767.CloseCode.CONSENTED);
          }
        });
      }
      onMessage(p1303, p1304) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(p1303), p1304);
      }
      send(p1305, p1306) {
        const vA23 = [vP12762.Protocol.ROOM_DATA];
        if (typeof p1305 === "string") {
          vP12766.encode.string(vA23, p1305);
        } else {
          vP12766.encode.number(vA23, p1305);
        }
        let v1113;
        if (p1306 !== undefined) {
          const v1114 = vV1107.encode(p1306);
          v1113 = new Uint8Array(vA23.length + v1114.byteLength);
          v1113.set(new Uint8Array(vA23), 0);
          v1113.set(new Uint8Array(v1114), vA23.length);
        } else {
          v1113 = new Uint8Array(vA23);
        }
        this.connection.send(v1113.buffer);
      }
      sendBytes(p1307, p1308) {
        const vA24 = [vP12762.Protocol.ROOM_DATA_BYTES];
        if (typeof p1307 === "string") {
          vP12766.encode.string(vA24, p1307);
        } else {
          vP12766.encode.number(vA24, p1307);
        }
        let v1115;
        v1115 = new Uint8Array(vA24.length + (p1308.byteLength || p1308.length));
        v1115.set(new Uint8Array(vA24), 0);
        v1115.set(new Uint8Array(p1308), vA24.length);
        this.connection.send(v1115.buffer);
      }
      get state() {
        return this.serializer.getState();
      }
      removeAllListeners() {
        this.onJoin.clear();
        this.onStateChange.clear();
        this.onError.clear();
        this.onLeave.clear();
        this.onMessageHandlers.events = {};
      }
      onMessageCallback(p1309) {
        const v1116 = Array.from(new Uint8Array(p1309.data));
        const v1117 = v1116[0];
        if (v1117 === vP12762.Protocol.JOIN_ROOM) {
          let vLN112 = 1;
          const v1118 = (0, vP12762.utf8Read)(v1116, vLN112);
          vLN112 += (0, vP12762.utf8Length)(v1118);
          this.serializerId = (0, vP12762.utf8Read)(v1116, vLN112);
          vLN112 += (0, vP12762.utf8Length)(this.serializerId);
          if (!this.serializer) {
            const v1119 = (0, vP12763.getSerializer)(this.serializerId);
            this.serializer = new v1119();
          }
          if (v1116.length > vLN112 && this.serializer.handshake) {
            this.serializer.handshake(v1116, {
              offset: vLN112
            });
          }
          this.reconnectionToken = this.roomId + ":" + v1118;
          this.hasJoined = true;
          this.onJoin.invoke();
          this.connection.send([vP12762.Protocol.JOIN_ROOM]);
        } else if (v1117 === vP12762.Protocol.ERROR) {
          const vO61 = {
            offset: 1
          };
          const v1120 = vP12766.decode.number(v1116, vO61);
          const v1121 = vP12766.decode.string(v1116, vO61);
          this.onError.invoke(v1120, v1121);
        } else if (v1117 === vP12762.Protocol.LEAVE_ROOM) {
          this.leave();
        } else if (v1117 === vP12762.Protocol.ROOM_DATA_SCHEMA) {
          const vO62 = {
            offset: 1
          };
          const v1122 = this.serializer.getState().constructor._context;
          const v1123 = v1122.get(vP12766.decode.number(v1116, vO62));
          const v1124 = new v1123();
          v1124.decode(v1116, vO62);
          this.dispatchMessage(v1123, v1124);
        } else if (v1117 === vP12762.Protocol.ROOM_STATE) {
          v1116.shift();
          this.setState(v1116);
        } else if (v1117 === vP12762.Protocol.ROOM_STATE_PATCH) {
          v1116.shift();
          this.patch(v1116);
        } else if (v1117 === vP12762.Protocol.ROOM_DATA) {
          const vO63 = {
            offset: 1
          };
          const v1125 = vP12766.decode.stringCheck(v1116, vO63) ? vP12766.decode.string(v1116, vO63) : vP12766.decode.number(v1116, vO63);
          const v1126 = v1116.length > vO63.offset ? vV1107.decode(p1309.data, vO63.offset) : undefined;
          this.dispatchMessage(v1125, v1126);
        } else if (v1117 === vP12762.Protocol.ROOM_DATA_BYTES) {
          const vO64 = {
            offset: 1
          };
          const v1127 = vP12766.decode.stringCheck(v1116, vO64) ? vP12766.decode.string(v1116, vO64) : vP12766.decode.number(v1116, vO64);
          this.dispatchMessage(v1127, new Uint8Array(v1116.slice(vO64.offset)));
        }
      }
      setState(p1310) {
        this.serializer.setState(p1310);
        this.onStateChange.invoke(this.serializer.getState());
      }
      patch(p1311) {
        this.serializer.patch(p1311);
        this.onStateChange.invoke(this.serializer.getState());
      }
      dispatchMessage(p1312, p1313) {
        var v1128;
        const v1129 = this.getMessageHandlerKey(p1312);
        if (this.onMessageHandlers.events[v1129]) {
          this.onMessageHandlers.emit(v1129, p1313);
        } else if (this.onMessageHandlers.events["*"]) {
          this.onMessageHandlers.emit("*", p1312, p1313);
        } else if ((v1128 = console.warn) === null || v1128 === undefined) {
          undefined;
        } else {
          v1128.call(console, "colyseus.js: onMessage() not registered for type '" + p1312 + "'.");
        }
      }
      destroy() {
        if (this.serializer) {
          this.serializer.teardown();
        }
      }
      getMessageHandlerKey(p1314) {
        switch (typeof p1314) {
          case "function":
            return "$" + p1314._typeid;
          case "string":
            return p1314;
          case "number":
            return "i" + p1314;
          default:
            throw new Error("invalid message type.");
        }
      }
    }
    p1275.Room = C4;
  }, (p1315, p1316) => {
    'use strict';

    Object.defineProperty(p1316, "__esModule", {
      value: true
    });
    p1316.decode = p1316.encode = undefined;
    function f260(p1317, p1318) {
      this._offset = p1318;
      if (p1317 instanceof ArrayBuffer) {
        this._buffer = p1317;
        this._view = new DataView(this._buffer);
      } else if (ArrayBuffer.isView(p1317)) {
        this._buffer = p1317.buffer;
        this._view = new DataView(this._buffer, p1317.byteOffset, p1317.byteLength);
      } else {
        throw new Error("Invalid argument");
      }
    }
    function f261(p1319, p1320, p1321) {
      var vLS12 = "";
      var vLN0179 = 0;
      for (var vP1320 = p1320, v1130 = p1320 + p1321; vP1320 < v1130; vP1320++) {
        var v1131 = p1319.getUint8(vP1320);
        if ((v1131 & 128) === 0) {
          vLS12 += String.fromCharCode(v1131);
          continue;
        }
        if ((v1131 & 224) === 192) {
          vLS12 += String.fromCharCode((v1131 & 31) << 6 | p1319.getUint8(++vP1320) & 63);
          continue;
        }
        if ((v1131 & 240) === 224) {
          vLS12 += String.fromCharCode((v1131 & 15) << 12 | (p1319.getUint8(++vP1320) & 63) << 6 | (p1319.getUint8(++vP1320) & 63) << 0);
          continue;
        }
        if ((v1131 & 248) === 240) {
          vLN0179 = (v1131 & 7) << 18 | (p1319.getUint8(++vP1320) & 63) << 12 | (p1319.getUint8(++vP1320) & 63) << 6 | (p1319.getUint8(++vP1320) & 63) << 0;
          if (vLN0179 >= 65536) {
            vLN0179 -= 65536;
            vLS12 += String.fromCharCode((vLN0179 >>> 10) + 55296, (vLN0179 & 1023) + 56320);
          } else {
            vLS12 += String.fromCharCode(vLN0179);
          }
          continue;
        }
        throw new Error("Invalid byte " + v1131.toString(16));
      }
      return vLS12;
    }
    f260.prototype._array = function (p1322) {
      var v1132 = new Array(p1322);
      for (var vLN0180 = 0; vLN0180 < p1322; vLN0180++) {
        v1132[vLN0180] = this._parse();
      }
      return v1132;
    };
    f260.prototype._map = function (p1323) {
      var vLS13 = "";
      var vO65 = {};
      for (var vLN0181 = 0; vLN0181 < p1323; vLN0181++) {
        vLS13 = this._parse();
        vO65[vLS13] = this._parse();
      }
      return vO65;
    };
    f260.prototype._str = function (p1324) {
      var vF261 = f261(this._view, this._offset, p1324);
      this._offset += p1324;
      return vF261;
    };
    f260.prototype._bin = function (p1325) {
      var v1133 = this._buffer.slice(this._offset, this._offset + p1325);
      this._offset += p1325;
      return v1133;
    };
    f260.prototype._parse = function () {
      var v1134 = this._view.getUint8(this._offset++);
      var v1135;
      var vLN0182 = 0;
      var vLN0183 = 0;
      var vLN0184 = 0;
      var vLN0185 = 0;
      if (v1134 < 192) {
        if (v1134 < 128) {
          return v1134;
        }
        if (v1134 < 144) {
          return this._map(v1134 & 15);
        }
        if (v1134 < 160) {
          return this._array(v1134 & 15);
        }
        return this._str(v1134 & 31);
      }
      if (v1134 > 223) {
        return (255 - v1134 + 1) * -1;
      }
      switch (v1134) {
        case 192:
          return null;
        case 194:
          return false;
        case 195:
          return true;
        case 196:
          vLN0182 = this._view.getUint8(this._offset);
          this._offset += 1;
          return this._bin(vLN0182);
        case 197:
          vLN0182 = this._view.getUint16(this._offset);
          this._offset += 2;
          return this._bin(vLN0182);
        case 198:
          vLN0182 = this._view.getUint32(this._offset);
          this._offset += 4;
          return this._bin(vLN0182);
        case 199:
          vLN0182 = this._view.getUint8(this._offset);
          vLN0183 = this._view.getInt8(this._offset + 1);
          this._offset += 2;
          if (vLN0183 === -1) {
            var v1136 = this._view.getUint32(this._offset);
            vLN0184 = this._view.getInt32(this._offset + 4);
            vLN0185 = this._view.getUint32(this._offset + 8);
            this._offset += 12;
            return new Date((vLN0184 * 4294967296 + vLN0185) * 1000 + v1136 / 1000000);
          }
          return [vLN0183, this._bin(vLN0182)];
        case 200:
          vLN0182 = this._view.getUint16(this._offset);
          vLN0183 = this._view.getInt8(this._offset + 2);
          this._offset += 3;
          return [vLN0183, this._bin(vLN0182)];
        case 201:
          vLN0182 = this._view.getUint32(this._offset);
          vLN0183 = this._view.getInt8(this._offset + 4);
          this._offset += 5;
          return [vLN0183, this._bin(vLN0182)];
        case 202:
          v1135 = this._view.getFloat32(this._offset);
          this._offset += 4;
          return v1135;
        case 203:
          v1135 = this._view.getFloat64(this._offset);
          this._offset += 8;
          return v1135;
        case 204:
          v1135 = this._view.getUint8(this._offset);
          this._offset += 1;
          return v1135;
        case 205:
          v1135 = this._view.getUint16(this._offset);
          this._offset += 2;
          return v1135;
        case 206:
          v1135 = this._view.getUint32(this._offset);
          this._offset += 4;
          return v1135;
        case 207:
          vLN0184 = this._view.getUint32(this._offset) * Math.pow(2, 32);
          vLN0185 = this._view.getUint32(this._offset + 4);
          this._offset += 8;
          return vLN0184 + vLN0185;
        case 208:
          v1135 = this._view.getInt8(this._offset);
          this._offset += 1;
          return v1135;
        case 209:
          v1135 = this._view.getInt16(this._offset);
          this._offset += 2;
          return v1135;
        case 210:
          v1135 = this._view.getInt32(this._offset);
          this._offset += 4;
          return v1135;
        case 211:
          vLN0184 = this._view.getInt32(this._offset) * Math.pow(2, 32);
          vLN0185 = this._view.getUint32(this._offset + 4);
          this._offset += 8;
          return vLN0184 + vLN0185;
        case 212:
          vLN0183 = this._view.getInt8(this._offset);
          this._offset += 1;
          if (vLN0183 === 0) {
            this._offset += 1;
            return undefined;
          }
          return [vLN0183, this._bin(1)];
        case 213:
          vLN0183 = this._view.getInt8(this._offset);
          this._offset += 1;
          return [vLN0183, this._bin(2)];
        case 214:
          vLN0183 = this._view.getInt8(this._offset);
          this._offset += 1;
          if (vLN0183 === -1) {
            v1135 = this._view.getUint32(this._offset);
            this._offset += 4;
            return new Date(v1135 * 1000);
          }
          return [vLN0183, this._bin(4)];
        case 215:
          vLN0183 = this._view.getInt8(this._offset);
          this._offset += 1;
          if (vLN0183 === 0) {
            vLN0184 = this._view.getInt32(this._offset) * Math.pow(2, 32);
            vLN0185 = this._view.getUint32(this._offset + 4);
            this._offset += 8;
            return new Date(vLN0184 + vLN0185);
          }
          if (vLN0183 === -1) {
            vLN0184 = this._view.getUint32(this._offset);
            vLN0185 = this._view.getUint32(this._offset + 4);
            this._offset += 8;
            var v1137 = (vLN0184 & 3) * 4294967296 + vLN0185;
            return new Date(v1137 * 1000 + (vLN0184 >>> 2) / 1000000);
          }
          return [vLN0183, this._bin(8)];
        case 216:
          vLN0183 = this._view.getInt8(this._offset);
          this._offset += 1;
          return [vLN0183, this._bin(16)];
        case 217:
          vLN0182 = this._view.getUint8(this._offset);
          this._offset += 1;
          return this._str(vLN0182);
        case 218:
          vLN0182 = this._view.getUint16(this._offset);
          this._offset += 2;
          return this._str(vLN0182);
        case 219:
          vLN0182 = this._view.getUint32(this._offset);
          this._offset += 4;
          return this._str(vLN0182);
        case 220:
          vLN0182 = this._view.getUint16(this._offset);
          this._offset += 2;
          return this._array(vLN0182);
        case 221:
          vLN0182 = this._view.getUint32(this._offset);
          this._offset += 4;
          return this._array(vLN0182);
        case 222:
          vLN0182 = this._view.getUint16(this._offset);
          this._offset += 2;
          return this._map(vLN0182);
        case 223:
          vLN0182 = this._view.getUint32(this._offset);
          this._offset += 4;
          return this._map(vLN0182);
      }
      throw new Error("Could not parse");
    };
    function f262(p1326, p1327 = 0) {
      var v1138 = new f260(p1326, p1327);
      var v1139 = v1138._parse();
      if (v1138._offset !== p1326.byteLength) {
        throw new Error(p1326.byteLength - v1138._offset + " trailing bytes");
      }
      return v1139;
    }
    p1316.decode = f262;
    var vLN4294967295 = 4294967295;
    var vLN17179869183 = 17179869183;
    function f263(p1328, p1329, p1330) {
      var vLN0186 = 0;
      for (var vLN0187 = 0, v1140 = p1330.length; vLN0187 < v1140; vLN0187++) {
        vLN0186 = p1330.charCodeAt(vLN0187);
        if (vLN0186 < 128) {
          p1328.setUint8(p1329++, vLN0186);
        } else if (vLN0186 < 2048) {
          p1328.setUint8(p1329++, vLN0186 >> 6 | 192);
          p1328.setUint8(p1329++, vLN0186 & 63 | 128);
        } else if (vLN0186 < 55296 || vLN0186 >= 57344) {
          p1328.setUint8(p1329++, vLN0186 >> 12 | 224);
          p1328.setUint8(p1329++, vLN0186 >> 6 & 63 | 128);
          p1328.setUint8(p1329++, vLN0186 & 63 | 128);
        } else {
          vLN0187++;
          vLN0186 = 65536 + ((vLN0186 & 1023) << 10 | p1330.charCodeAt(vLN0187) & 1023);
          p1328.setUint8(p1329++, vLN0186 >> 18 | 240);
          p1328.setUint8(p1329++, vLN0186 >> 12 & 63 | 128);
          p1328.setUint8(p1329++, vLN0186 >> 6 & 63 | 128);
          p1328.setUint8(p1329++, vLN0186 & 63 | 128);
        }
      }
    }
    function f264(p1331) {
      var vLN0188 = 0;
      var vLN0189 = 0;
      for (var vLN0190 = 0, v1141 = p1331.length; vLN0190 < v1141; vLN0190++) {
        vLN0188 = p1331.charCodeAt(vLN0190);
        if (vLN0188 < 128) {
          vLN0189 += 1;
        } else if (vLN0188 < 2048) {
          vLN0189 += 2;
        } else if (vLN0188 < 55296 || vLN0188 >= 57344) {
          vLN0189 += 3;
        } else {
          vLN0190++;
          vLN0189 += 4;
        }
      }
      return vLN0189;
    }
    function f265(p1332, p1333, p1334) {
      var v1142 = typeof p1334;
      var vLN0191 = 0;
      var vLN0192 = 0;
      var vLN0193 = 0;
      var vLN0194 = 0;
      var vLN0195 = 0;
      var vLN0196 = 0;
      if (v1142 === "string") {
        vLN0195 = f264(p1334);
        if (vLN0195 < 32) {
          p1332.push(vLN0195 | 160);
          vLN0196 = 1;
        } else if (vLN0195 < 256) {
          p1332.push(217, vLN0195);
          vLN0196 = 2;
        } else if (vLN0195 < 65536) {
          p1332.push(218, vLN0195 >> 8, vLN0195);
          vLN0196 = 3;
        } else if (vLN0195 < 4294967296) {
          p1332.push(219, vLN0195 >> 24, vLN0195 >> 16, vLN0195 >> 8, vLN0195);
          vLN0196 = 5;
        } else {
          throw new Error("String too long");
        }
        p1333.push({
          _str: p1334,
          _length: vLN0195,
          _offset: p1332.length
        });
        return vLN0196 + vLN0195;
      }
      if (v1142 === "number") {
        if (Math.floor(p1334) !== p1334 || !isFinite(p1334)) {
          p1332.push(203);
          p1333.push({
            _float: p1334,
            _length: 8,
            _offset: p1332.length
          });
          return 9;
        }
        if (p1334 >= 0) {
          if (p1334 < 128) {
            p1332.push(p1334);
            return 1;
          }
          if (p1334 < 256) {
            p1332.push(204, p1334);
            return 2;
          }
          if (p1334 < 65536) {
            p1332.push(205, p1334 >> 8, p1334);
            return 3;
          }
          if (p1334 < 4294967296) {
            p1332.push(206, p1334 >> 24, p1334 >> 16, p1334 >> 8, p1334);
            return 5;
          }
          vLN0193 = p1334 / Math.pow(2, 32) >> 0;
          vLN0194 = p1334 >>> 0;
          p1332.push(207, vLN0193 >> 24, vLN0193 >> 16, vLN0193 >> 8, vLN0193, vLN0194 >> 24, vLN0194 >> 16, vLN0194 >> 8, vLN0194);
          return 9;
        } else {
          if (p1334 >= -32) {
            p1332.push(p1334);
            return 1;
          }
          if (p1334 >= -128) {
            p1332.push(208, p1334);
            return 2;
          }
          if (p1334 >= -32768) {
            p1332.push(209, p1334 >> 8, p1334);
            return 3;
          }
          if (p1334 >= -2147483648) {
            p1332.push(210, p1334 >> 24, p1334 >> 16, p1334 >> 8, p1334);
            return 5;
          }
          vLN0193 = Math.floor(p1334 / Math.pow(2, 32));
          vLN0194 = p1334 >>> 0;
          p1332.push(211, vLN0193 >> 24, vLN0193 >> 16, vLN0193 >> 8, vLN0193, vLN0194 >> 24, vLN0194 >> 16, vLN0194 >> 8, vLN0194);
          return 9;
        }
      }
      if (v1142 === "object") {
        if (p1334 === null) {
          p1332.push(192);
          return 1;
        }
        if (Array.isArray(p1334)) {
          vLN0195 = p1334.length;
          if (vLN0195 < 16) {
            p1332.push(vLN0195 | 144);
            vLN0196 = 1;
          } else if (vLN0195 < 65536) {
            p1332.push(220, vLN0195 >> 8, vLN0195);
            vLN0196 = 3;
          } else if (vLN0195 < 4294967296) {
            p1332.push(221, vLN0195 >> 24, vLN0195 >> 16, vLN0195 >> 8, vLN0195);
            vLN0196 = 5;
          } else {
            throw new Error("Array too large");
          }
          for (vLN0191 = 0; vLN0191 < vLN0195; vLN0191++) {
            vLN0196 += f265(p1332, p1333, p1334[vLN0191]);
          }
          return vLN0196;
        }
        if (p1334 instanceof Date) {
          var v1143 = p1334.getTime();
          var v1144 = Math.floor(v1143 / 1000);
          var v1145 = (v1143 - v1144 * 1000) * 1000000;
          if (v1144 >= 0 && v1145 >= 0 && v1144 <= vLN17179869183) {
            if (v1145 === 0 && v1144 <= vLN4294967295) {
              p1332.push(214, 255, v1144 >> 24, v1144 >> 16, v1144 >> 8, v1144);
              return 6;
            } else {
              vLN0193 = v1144 / 4294967296;
              vLN0194 = v1144 & -1;
              p1332.push(215, 255, v1145 >> 22, v1145 >> 14, v1145 >> 6, vLN0193, vLN0194 >> 24, vLN0194 >> 16, vLN0194 >> 8, vLN0194);
              return 10;
            }
          } else {
            vLN0193 = Math.floor(v1144 / 4294967296);
            vLN0194 = v1144 >>> 0;
            p1332.push(199, 12, 255, v1145 >> 24, v1145 >> 16, v1145 >> 8, v1145, vLN0193 >> 24, vLN0193 >> 16, vLN0193 >> 8, vLN0193, vLN0194 >> 24, vLN0194 >> 16, vLN0194 >> 8, vLN0194);
            return 15;
          }
        }
        if (p1334 instanceof ArrayBuffer) {
          vLN0195 = p1334.byteLength;
          if (vLN0195 < 256) {
            p1332.push(196, vLN0195);
            vLN0196 = 2;
          } else if (vLN0195 < 65536) {
            p1332.push(197, vLN0195 >> 8, vLN0195);
            vLN0196 = 3;
          } else if (vLN0195 < 4294967296) {
            p1332.push(198, vLN0195 >> 24, vLN0195 >> 16, vLN0195 >> 8, vLN0195);
            vLN0196 = 5;
          } else {
            throw new Error("Buffer too large");
          }
          p1333.push({
            _bin: p1334,
            _length: vLN0195,
            _offset: p1332.length
          });
          return vLN0196 + vLN0195;
        }
        if (typeof p1334.toJSON === "function") {
          return f265(p1332, p1333, p1334.toJSON());
        }
        var vA25 = [];
        var vLS14 = "";
        var v1146 = Object.keys(p1334);
        vLN0191 = 0;
        vLN0192 = v1146.length;
        for (; vLN0191 < vLN0192; vLN0191++) {
          vLS14 = v1146[vLN0191];
          if (p1334[vLS14] !== undefined && typeof p1334[vLS14] !== "function") {
            vA25.push(vLS14);
          }
        }
        vLN0195 = vA25.length;
        if (vLN0195 < 16) {
          p1332.push(vLN0195 | 128);
          vLN0196 = 1;
        } else if (vLN0195 < 65536) {
          p1332.push(222, vLN0195 >> 8, vLN0195);
          vLN0196 = 3;
        } else if (vLN0195 < 4294967296) {
          p1332.push(223, vLN0195 >> 24, vLN0195 >> 16, vLN0195 >> 8, vLN0195);
          vLN0196 = 5;
        } else {
          throw new Error("Object too large");
        }
        for (vLN0191 = 0; vLN0191 < vLN0195; vLN0191++) {
          vLS14 = vA25[vLN0191];
          vLN0196 += f265(p1332, p1333, vLS14);
          vLN0196 += f265(p1332, p1333, p1334[vLS14]);
        }
        return vLN0196;
      }
      if (v1142 === "boolean") {
        p1332.push(p1334 ? 195 : 194);
        return 1;
      }
      if (v1142 === "undefined") {
        p1332.push(192);
        return 1;
      }
      if (typeof p1334.toJSON === "function") {
        return f265(p1332, p1333, p1334.toJSON());
      }
      throw new Error("Could not encode");
    }
    function f266(p1335) {
      var vA26 = [];
      var vA27 = [];
      var vF265 = f265(vA26, vA27, p1335);
      var v1147 = new ArrayBuffer(vF265);
      var v1148 = new DataView(v1147);
      var vLN0197 = 0;
      var vLN0198 = 0;
      var v1149 = -1;
      if (vA27.length > 0) {
        v1149 = vA27[0]._offset;
      }
      var v1150;
      var vLN0199 = 0;
      var vLN0200 = 0;
      for (var vLN0201 = 0, v1151 = vA26.length; vLN0201 < v1151; vLN0201++) {
        v1148.setUint8(vLN0198 + vLN0201, vA26[vLN0201]);
        if (vLN0201 + 1 !== v1149) {
          continue;
        }
        v1150 = vA27[vLN0197];
        vLN0199 = v1150._length;
        vLN0200 = vLN0198 + v1149;
        if (v1150._bin) {
          var v1152 = new Uint8Array(v1150._bin);
          for (var vLN0202 = 0; vLN0202 < vLN0199; vLN0202++) {
            v1148.setUint8(vLN0200 + vLN0202, v1152[vLN0202]);
          }
        } else if (v1150._str) {
          f263(v1148, vLN0200, v1150._str);
        } else if (v1150._float !== undefined) {
          v1148.setFloat64(vLN0200, v1150._float);
        }
        vLN0197++;
        vLN0198 += vLN0199;
        if (vA27[vLN0197]) {
          v1149 = vA27[vLN0197]._offset;
        }
      }
      return v1147;
    }
    p1316.encode = f266;
  }, (p1336, p1337, p1338) => {
    'use strict';

    Object.defineProperty(p1337, "__esModule", {
      value: true
    });
    p1337.Connection = undefined;
    const vP1338 = p1338(9);
    class C5 {
      constructor() {
        this.events = {};
        this.transport = new vP1338.WebSocketTransport(this.events);
      }
      send(p1339) {
        this.transport.send(p1339);
      }
      connect(p1340, p1341) {
        this.transport.connect(p1340, p1341);
      }
      close(p1342, p1343) {
        this.transport.close(p1342, p1343);
      }
      get isOpen() {
        return this.transport.isOpen;
      }
    }
    p1337.Connection = C5;
  }, function (p1344, p1345, p1346) {
    'use strict';

    var v1153 = this && this.__importDefault || function (p1347) {
      if (p1347 && p1347.__esModule) {
        return p1347;
      } else {
        return {
          default: p1347
        };
      }
    };
    Object.defineProperty(p1345, "__esModule", {
      value: true
    });
    p1345.WebSocketTransport = undefined;
    const vV1153 = v1153(p1346(10));
    const v1154 = globalThis.WebSocket || vV1153.default;
    class C6 {
      constructor(p1348) {
        this.events = p1348;
      }
      send(p1349) {
        if (p1349 instanceof ArrayBuffer) {
          this.ws.send(p1349);
        } else if (Array.isArray(p1349)) {
          this.ws.send(new Uint8Array(p1349).buffer);
        }
      }
      connect(p1350, p1351) {
        try {
          this.ws = new v1154(p1350, {
            headers: p1351,
            protocols: this.protocols
          });
        } catch (e59) {
          this.ws = new v1154(p1350, this.protocols);
        }
        this.ws.binaryType = "arraybuffer";
        this.ws.onopen = this.events.onopen;
        this.ws.onmessage = this.events.onmessage;
        this.ws.onclose = this.events.onclose;
        this.ws.onerror = this.events.onerror;
      }
      close(p1352, p1353) {
        this.ws.close(p1352, p1353);
      }
      get isOpen() {
        return this.ws.readyState === v1154.OPEN;
      }
    }
    p1345.WebSocketTransport = C6;
  }, p1354 => {
    'use strict';

    p1354.exports = function () {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object");
    };
  }, (p1355, p1356) => {
    'use strict';

    Object.defineProperty(p1356, "__esModule", {
      value: true
    });
    p1356.utf8Length = p1356.utf8Read = p1356.ErrorCode = p1356.Protocol = undefined;
    var v1155;
    (function (p1357) {
      p1357[p1357.HANDSHAKE = 9] = "HANDSHAKE";
      p1357[p1357.JOIN_ROOM = 10] = "JOIN_ROOM";
      p1357[p1357.ERROR = 11] = "ERROR";
      p1357[p1357.LEAVE_ROOM = 12] = "LEAVE_ROOM";
      p1357[p1357.ROOM_DATA = 13] = "ROOM_DATA";
      p1357[p1357.ROOM_STATE = 14] = "ROOM_STATE";
      p1357[p1357.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH";
      p1357[p1357.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA";
      p1357[p1357.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES";
    })(v1155 = p1356.Protocol ||= {});
    var v1156;
    (function (p1358) {
      p1358[p1358.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER";
      p1358[p1358.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA";
      p1358[p1358.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID";
      p1358[p1358.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED";
      p1358[p1358.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED";
      p1358[p1358.AUTH_FAILED = 4215] = "AUTH_FAILED";
      p1358[p1358.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR";
    })(v1156 = p1356.ErrorCode ||= {});
    function f267(p1359, p1360) {
      const v1157 = p1359[p1360++];
      var vLS15 = "";
      var vLN0203 = 0;
      for (var vP1360 = p1360, v1158 = p1360 + v1157; vP1360 < v1158; vP1360++) {
        var v1159 = p1359[vP1360];
        if ((v1159 & 128) === 0) {
          vLS15 += String.fromCharCode(v1159);
          continue;
        }
        if ((v1159 & 224) === 192) {
          vLS15 += String.fromCharCode((v1159 & 31) << 6 | p1359[++vP1360] & 63);
          continue;
        }
        if ((v1159 & 240) === 224) {
          vLS15 += String.fromCharCode((v1159 & 15) << 12 | (p1359[++vP1360] & 63) << 6 | (p1359[++vP1360] & 63) << 0);
          continue;
        }
        if ((v1159 & 248) === 240) {
          vLN0203 = (v1159 & 7) << 18 | (p1359[++vP1360] & 63) << 12 | (p1359[++vP1360] & 63) << 6 | (p1359[++vP1360] & 63) << 0;
          if (vLN0203 >= 65536) {
            vLN0203 -= 65536;
            vLS15 += String.fromCharCode((vLN0203 >>> 10) + 55296, (vLN0203 & 1023) + 56320);
          } else {
            vLS15 += String.fromCharCode(vLN0203);
          }
          continue;
        }
        throw new Error("Invalid byte " + v1159.toString(16));
      }
      return vLS15;
    }
    p1356.utf8Read = f267;
    function f268(p1361 = "") {
      let vLN0204 = 0;
      let vLN0205 = 0;
      for (let vLN0206 = 0, v1160 = p1361.length; vLN0206 < v1160; vLN0206++) {
        vLN0204 = p1361.charCodeAt(vLN0206);
        if (vLN0204 < 128) {
          vLN0205 += 1;
        } else if (vLN0204 < 2048) {
          vLN0205 += 2;
        } else if (vLN0204 < 55296 || vLN0204 >= 57344) {
          vLN0205 += 3;
        } else {
          vLN0206++;
          vLN0205 += 4;
        }
      }
      return vLN0205 + 1;
    }
    p1356.utf8Length = f268;
  }, (p1362, p1363) => {
    'use strict';

    Object.defineProperty(p1363, "__esModule", {
      value: true
    });
    p1363.getSerializer = p1363.registerSerializer = undefined;
    const vO66 = {};
    function f269(p1364, p1365) {
      vO66[p1364] = p1365;
    }
    p1363.registerSerializer = f269;
    function f270(p1366) {
      const v1161 = vO66[p1366];
      if (!v1161) {
        throw new Error("missing serializer: " + p1366);
      }
      return v1161;
    }
    p1363.getSerializer = f270;
  }, (p1367, p1368) => {
    'use strict';

    Object.defineProperty(p1368, "__esModule", {
      value: true
    });
    p1368.createNanoEvents = undefined;
    const vF24 = () => ({
      emit(p1369, ..._0x337bc3) {
        let v1162 = this.events[p1369] || [];
        for (let vLN0207 = 0, v1163 = v1162.length; vLN0207 < v1163; vLN0207++) {
          v1162[vLN0207](..._0x337bc3);
        }
      },
      events: {},
      on(p1370, p1371) {
        var v1164;
        if (!((v1164 = this.events[p1370]) === null || v1164 === undefined ? undefined : v1164.push(p1371))) {
          this.events[p1370] = [p1371];
        }
        return () => {
          var v1165;
          this.events[p1370] = (v1165 = this.events[p1370]) === null || v1165 === undefined ? undefined : v1165.filter(p1372 => p1371 !== p1372);
        };
      }
    });
    p1368.createNanoEvents = vF24;
  }, (p1373, p1374) => {
    'use strict';

    Object.defineProperty(p1374, "__esModule", {
      value: true
    });
    p1374.createSignal = p1374.EventEmitter = undefined;
    class C7 {
      constructor() {
        this.handlers = [];
      }
      register(p1375, p1376 = false) {
        this.handlers.push(p1375);
        return this;
      }
      invoke(..._0x11dce6) {
        this.handlers.forEach(p1377 => p1377.apply(this, _0x11dce6));
      }
      invokeAsync(..._0x33e704) {
        return Promise.all(this.handlers.map(p1378 => p1378.apply(this, _0x33e704)));
      }
      remove(p1379) {
        const v1166 = this.handlers.indexOf(p1379);
        this.handlers[v1166] = this.handlers[this.handlers.length - 1];
        this.handlers.pop();
      }
      clear() {
        this.handlers = [];
      }
    }
    p1374.EventEmitter = C7;
    function f271() {
      const v1167 = new C7();
      function f272(p1380) {
        return v1167.register(p1380, this === null);
      }
      ;
      f272.once = p1381 => {
        const vF25 = function (..._0x386916) {
          p1381.apply(this, _0x386916);
          v1167.remove(vF25);
        };
        v1167.register(vF25);
      };
      f272.remove = p1382 => v1167.remove(p1382);
      f272.invoke = (..._0x32ebd2) => v1167.invoke(..._0x32ebd2);
      f272.invokeAsync = (..._0x4d83a2) => v1167.invokeAsync(..._0x4d83a2);
      f272.clear = () => v1167.clear();
      return f272;
    }
    p1374.createSignal = f271;
  }, function (p1383, p1384) {
    (function (p1385, p1386) {
      if (true) {
        p1386(p1384);
      } else {
        0;
      }
    })(this, function (p1387) {
      'use strict';

      function f273(p1388, p1389) {
        f273 = Object.setPrototypeOf || {
          "__proto__": []
        } instanceof Array && function (p1390, p1391) {
          p1390.__proto__ = p1391;
        } || function (p1392, p1393) {
          for (var v1168 in p1393) {
            if (Object.prototype.hasOwnProperty.call(p1393, v1168)) {
              p1392[v1168] = p1393[v1168];
            }
          }
        };
        return f273(p1388, p1389);
      }
      function f274(p1394, p1395) {
        if (typeof p1395 !== "function" && p1395 !== null) {
          throw new TypeError("Class extends value " + String(p1395) + " is not a constructor or null");
        }
        f273(p1394, p1395);
        function f275() {
          this.constructor = p1394;
        }
        p1394.prototype = p1395 === null ? Object.create(p1395) : (f275.prototype = p1395.prototype, new f275());
      }
      function f276(p1396, p1397, p1398, p1399) {
        var v1169 = arguments.length;
        var v1170 = v1169 < 3 ? p1397 : p1399 === null ? p1399 = Object.getOwnPropertyDescriptor(p1397, p1398) : p1399;
        var v1171;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
          v1170 = Reflect.decorate(p1396, p1397, p1398, p1399);
        } else {
          for (var v1172 = p1396.length - 1; v1172 >= 0; v1172--) {
            if (v1171 = p1396[v1172]) {
              v1170 = (v1169 < 3 ? v1171(v1170) : v1169 > 3 ? v1171(p1397, p1398, v1170) : v1171(p1397, p1398)) || v1170;
            }
          }
        }
        if (v1169 > 3 && v1170) {
          Object.defineProperty(p1397, p1398, v1170);
        }
        return v1170;
      }
      function f277(p1400, p1401, p1402) {
        if (p1402 || arguments.length === 2) {
          for (var vLN0208 = 0, v1173 = p1401.length, v1174; vLN0208 < v1173; vLN0208++) {
            if (v1174 || !(vLN0208 in p1401)) {
              if (!v1174) {
                v1174 = Array.prototype.slice.call(p1401, 0, vLN0208);
              }
              v1174[vLN0208] = p1401[vLN0208];
            }
          }
        }
        return p1400.concat(v1174 || Array.prototype.slice.call(p1401));
      }
      if (typeof SuppressedError === "function") {
        SuppressedError;
      } else {
        (function (p1403, p1404, p1405) {
          var v1175 = new Error(p1405);
          v1175.name = "SuppressedError";
          v1175.error = p1403;
          v1175.suppressed = p1404;
          return v1175;
        });
      }
      var vLN255 = 255;
      var vLN213 = 213;
      p1387.OPERATION = undefined;
      (function (p1406) {
        p1406[p1406.ADD = 128] = "ADD";
        p1406[p1406.REPLACE = 0] = "REPLACE";
        p1406[p1406.DELETE = 64] = "DELETE";
        p1406[p1406.DELETE_AND_ADD = 192] = "DELETE_AND_ADD";
        p1406[p1406.TOUCH = 1] = "TOUCH";
        p1406[p1406.CLEAR = 10] = "CLEAR";
      })(p1387.OPERATION ||= {});
      var vF26 = function () {
        function f278(p1407, p1408, p1409) {
          this.changed = false;
          this.changes = new Map();
          this.allChanges = new Set();
          this.caches = {};
          this.currentCustomOperation = 0;
          this.ref = p1407;
          this.setParent(p1408, p1409);
        }
        f278.prototype.setParent = function (p1410, p1411, p1412) {
          var vThis132 = this;
          if (!this.indexes) {
            this.indexes = this.ref instanceof vF36 ? this.ref._definition.indexes : {};
          }
          this.parent = p1410;
          this.parentIndex = p1412;
          if (!p1411) {
            return;
          }
          this.root = p1411;
          if (this.ref instanceof vF36) {
            var v1176 = this.ref._definition;
            for (var v1177 in v1176.schema) {
              var v1178 = this.ref[v1177];
              if (v1178 && v1178.$changes) {
                var v1179 = v1176.indexes[v1177];
                v1178.$changes.setParent(this.ref, p1411, v1179);
              }
            }
          } else if (typeof this.ref === "object") {
            this.ref.forEach(function (p1413, p1414) {
              if (p1413 instanceof vF36) {
                var v1180 = p1413.$changes;
                var v1181 = vThis132.ref.$changes.indexes[p1414];
                v1180.setParent(vThis132.ref, vThis132.root, v1181);
              }
            });
          }
        };
        f278.prototype.operation = function (p1415) {
          this.changes.set(--this.currentCustomOperation, p1415);
        };
        f278.prototype.change = function (p1416, p1417 = p1387.OPERATION.ADD) {
          var v1182 = typeof p1416 === "number" ? p1416 : this.indexes[p1416];
          this.assertValidIndex(v1182, p1416);
          var v1183 = this.changes.get(v1182);
          if (!v1183 || v1183.op === p1387.OPERATION.DELETE || v1183.op === p1387.OPERATION.TOUCH) {
            this.changes.set(v1182, {
              op: !v1183 ? p1417 : v1183.op === p1387.OPERATION.DELETE ? p1387.OPERATION.DELETE_AND_ADD : p1417,
              index: v1182
            });
          }
          this.allChanges.add(v1182);
          this.changed = true;
          this.touchParents();
        };
        f278.prototype.touch = function (p1418) {
          var v1184 = typeof p1418 === "number" ? p1418 : this.indexes[p1418];
          this.assertValidIndex(v1184, p1418);
          if (!this.changes.has(v1184)) {
            this.changes.set(v1184, {
              op: p1387.OPERATION.TOUCH,
              index: v1184
            });
          }
          this.allChanges.add(v1184);
          this.touchParents();
        };
        f278.prototype.touchParents = function () {
          if (this.parent) {
            this.parent.$changes.touch(this.parentIndex);
          }
        };
        f278.prototype.getType = function (p1419) {
          if (this.ref._definition) {
            var v1185 = this.ref._definition;
            return v1185.schema[v1185.fieldsByIndex[p1419]];
          } else {
            var v1185 = this.parent._definition;
            var v1186 = v1185.schema[v1185.fieldsByIndex[this.parentIndex]];
            return Object.values(v1186)[0];
          }
        };
        f278.prototype.getChildrenFilter = function () {
          var v1187 = this.parent._definition.childFilters;
          return v1187 && v1187[this.parentIndex];
        };
        f278.prototype.getValue = function (p1420) {
          return this.ref.getByIndex(p1420);
        };
        f278.prototype.delete = function (p1421) {
          var v1188 = typeof p1421 === "number" ? p1421 : this.indexes[p1421];
          if (v1188 === undefined) {
            console.warn("@colyseus/schema " + this.ref.constructor.name + ": trying to delete non-existing index: " + p1421 + " (" + v1188 + ")");
            return;
          }
          var v1189 = this.getValue(v1188);
          this.changes.set(v1188, {
            op: p1387.OPERATION.DELETE,
            index: v1188
          });
          this.allChanges.delete(v1188);
          delete this.caches[v1188];
          if (v1189 && v1189.$changes) {
            v1189.$changes.parent = undefined;
          }
          this.changed = true;
          this.touchParents();
        };
        f278.prototype.discard = function (p1422, p1423) {
          var vThis133 = this;
          if (p1422 === undefined) {
            p1422 = false;
          }
          if (p1423 === undefined) {
            p1423 = false;
          }
          if (!(this.ref instanceof vF36)) {
            this.changes.forEach(function (p1424) {
              if (p1424.op === p1387.OPERATION.DELETE) {
                var v1190 = vThis133.ref.getIndex(p1424.index);
                delete vThis133.indexes[v1190];
              }
            });
          }
          this.changes.clear();
          this.changed = p1422;
          if (p1423) {
            this.allChanges.clear();
          }
          this.currentCustomOperation = 0;
        };
        f278.prototype.discardAll = function () {
          var vThis134 = this;
          this.changes.forEach(function (p1425) {
            var v1191 = vThis134.getValue(p1425.index);
            if (v1191 && v1191.$changes) {
              v1191.$changes.discardAll();
            }
          });
          this.discard();
        };
        f278.prototype.cache = function (p1426, p1427) {
          this.caches[p1426] = p1427;
        };
        f278.prototype.clone = function () {
          return new f278(this.ref, this.parent, this.root);
        };
        f278.prototype.ensureRefId = function () {
          if (this.refId !== undefined) {
            return;
          }
          this.refId = this.root.getNextUniqueId();
        };
        f278.prototype.assertValidIndex = function (p1428, p1429) {
          if (p1428 === undefined) {
            throw new Error("ChangeTree: missing index for field \"" + p1429 + "\"");
          }
        };
        return f278;
      }();
      function f279(p1430, p1431, p1432, p1433) {
        if (!p1430[p1431]) {
          p1430[p1431] = [];
        }
        p1430[p1431].push(p1432);
        if (p1433 === null || p1433 === undefined) {
          undefined;
        } else {
          p1433.forEach(function (p1434, p1435) {
            return p1432(p1434, p1435);
          });
        }
        return function () {
          return f281(p1430[p1431], p1430[p1431].indexOf(p1432));
        };
      }
      function f280(p1436) {
        var vThis135 = this;
        var v1192 = typeof this.$changes.getType() !== "string";
        this.$items.forEach(function (p1437, p1438) {
          p1436.push({
            refId: vThis135.$changes.refId,
            op: p1387.OPERATION.DELETE,
            field: p1438,
            value: undefined,
            previousValue: p1437
          });
          if (v1192) {
            vThis135.$changes.root.removeRef(p1437.$changes.refId);
          }
        });
      }
      function f281(p1439, p1440) {
        if (p1440 === -1 || p1440 >= p1439.length) {
          return false;
        }
        var v1193 = p1439.length - 1;
        for (var vP1440 = p1440; vP1440 < v1193; vP1440++) {
          p1439[vP1440] = p1439[vP1440 + 1];
        }
        p1439.length = v1193;
        return true;
      }
      function f282(p1441, p1442) {
        var v1194 = p1441.toString();
        var v1195 = p1442.toString();
        if (v1194 < v1195) {
          return -1;
        } else if (v1194 > v1195) {
          return 1;
        } else {
          return 0;
        }
      }
      function f283(p1443) {
        p1443.$proxy = true;
        p1443 = new Proxy(p1443, {
          get: function (p1444, p1445) {
            if (typeof p1445 !== "symbol" && !isNaN(p1445)) {
              return p1444.at(p1445);
            } else {
              return p1444[p1445];
            }
          },
          set: function (p1446, p1447, p1448) {
            if (typeof p1447 !== "symbol" && !isNaN(p1447)) {
              var v1196 = Array.from(p1446.$items.keys());
              var vParseInt7 = parseInt(v1196[p1447] || p1447);
              if (p1448 === undefined || p1448 === null) {
                p1446.deleteAt(vParseInt7);
              } else {
                p1446.setAt(vParseInt7, p1448);
              }
            } else {
              p1446[p1447] = p1448;
            }
            return true;
          },
          deleteProperty: function (p1449, p1450) {
            if (typeof p1450 === "number") {
              p1449.deleteAt(p1450);
            } else {
              delete p1449[p1450];
            }
            return true;
          },
          has: function (p1451, p1452) {
            if (typeof p1452 !== "symbol" && !isNaN(Number(p1452))) {
              return p1451.$items.has(Number(p1452));
            }
            return Reflect.has(p1451, p1452);
          }
        });
        return p1443;
      }
      var vF27 = function () {
        function f284() {
          var vA28 = [];
          for (var vLN0209 = 0; vLN0209 < arguments.length; vLN0209++) {
            vA28[vLN0209] = arguments[vLN0209];
          }
          this.$changes = new vF26(this);
          this.$items = new Map();
          this.$indexes = new Map();
          this.$refId = 0;
          this.push.apply(this, vA28);
        }
        f284.prototype.onAdd = function (p1453, p1454 = true) {
          return f279(this.$callbacks ||= {}, p1387.OPERATION.ADD, p1453, p1454 ? this.$items : undefined);
        };
        f284.prototype.onRemove = function (p1455) {
          return f279(this.$callbacks ||= {}, p1387.OPERATION.DELETE, p1455);
        };
        f284.prototype.onChange = function (p1456) {
          return f279(this.$callbacks ||= {}, p1387.OPERATION.REPLACE, p1456);
        };
        f284.is = function (p1457) {
          return Array.isArray(p1457) || p1457.array !== undefined;
        };
        Object.defineProperty(f284.prototype, "length", {
          get: function () {
            return this.$items.size;
          },
          set: function (p1458) {
            if (p1458 === 0) {
              this.clear();
            } else {
              this.splice(p1458, this.length - p1458);
            }
          },
          enumerable: false,
          configurable: true
        });
        f284.prototype.push = function () {
          var vThis136 = this;
          var vA29 = [];
          for (var vLN0210 = 0; vLN0210 < arguments.length; vLN0210++) {
            vA29[vLN0210] = arguments[vLN0210];
          }
          var v1197;
          vA29.forEach(function (p1459) {
            v1197 = vThis136.$refId++;
            vThis136.setAt(v1197, p1459);
          });
          return v1197;
        };
        f284.prototype.pop = function () {
          var v1198 = Array.from(this.$indexes.values()).pop();
          if (v1198 === undefined) {
            return undefined;
          }
          this.$changes.delete(v1198);
          this.$indexes.delete(v1198);
          var v1199 = this.$items.get(v1198);
          this.$items.delete(v1198);
          return v1199;
        };
        f284.prototype.at = function (p1460) {
          p1460 = Math.trunc(p1460) || 0;
          if (p1460 < 0) {
            p1460 += this.length;
          }
          if (p1460 < 0 || p1460 >= this.length) {
            return undefined;
          }
          var v1200 = Array.from(this.$items.keys())[p1460];
          return this.$items.get(v1200);
        };
        f284.prototype.setAt = function (p1461, p1462) {
          if (p1462 === undefined || p1462 === null) {
            console.error("ArraySchema items cannot be null nor undefined; Use `deleteAt(index)` instead.");
            return;
          }
          if (this.$items.get(p1461) === p1462) {
            return;
          }
          if (p1462.$changes !== undefined) {
            p1462.$changes.setParent(this, this.$changes.root, p1461);
          }
          var v1201 = this.$changes.indexes[p1461]?.op ?? p1387.OPERATION.ADD;
          this.$changes.indexes[p1461] = p1461;
          this.$indexes.set(p1461, p1461);
          this.$items.set(p1461, p1462);
          this.$changes.change(p1461, v1201);
        };
        f284.prototype.deleteAt = function (p1463) {
          var v1202 = Array.from(this.$items.keys())[p1463];
          if (v1202 === undefined) {
            return false;
          }
          return this.$deleteAt(v1202);
        };
        f284.prototype.$deleteAt = function (p1464) {
          this.$changes.delete(p1464);
          this.$indexes.delete(p1464);
          return this.$items.delete(p1464);
        };
        f284.prototype.clear = function (p1465) {
          this.$changes.discard(true, true);
          this.$changes.indexes = {};
          this.$indexes.clear();
          if (p1465) {
            f280.call(this, p1465);
          }
          this.$items.clear();
          this.$changes.operation({
            index: 0,
            op: p1387.OPERATION.CLEAR
          });
          this.$changes.touchParents();
        };
        f284.prototype.concat = function () {
          var v1203;
          var vA30 = [];
          for (var vLN0211 = 0; vLN0211 < arguments.length; vLN0211++) {
            vA30[vLN0211] = arguments[vLN0211];
          }
          return new (f284.bind.apply(f284, f277([undefined], (v1203 = Array.from(this.$items.values())).concat.apply(v1203, vA30), false)))();
        };
        f284.prototype.join = function (p1466) {
          return Array.from(this.$items.values()).join(p1466);
        };
        f284.prototype.reverse = function () {
          var vThis137 = this;
          var v1204 = Array.from(this.$items.keys());
          var v1205 = Array.from(this.$items.values()).reverse();
          v1205.forEach(function (p1467, p1468) {
            vThis137.setAt(v1204[p1468], p1467);
          });
          return this;
        };
        f284.prototype.shift = function () {
          var v1206 = Array.from(this.$items.keys());
          var v1207 = v1206.shift();
          if (v1207 === undefined) {
            return undefined;
          }
          var v1208 = this.$items.get(v1207);
          this.$deleteAt(v1207);
          return v1208;
        };
        f284.prototype.slice = function (p1469, p1470) {
          var v1209 = new f284();
          v1209.push.apply(v1209, Array.from(this.$items.values()).slice(p1469, p1470));
          return v1209;
        };
        f284.prototype.sort = function (p1471) {
          var vThis138 = this;
          if (p1471 === undefined) {
            p1471 = f282;
          }
          var v1210 = Array.from(this.$items.keys());
          var v1211 = Array.from(this.$items.values()).sort(p1471);
          v1211.forEach(function (p1472, p1473) {
            vThis138.setAt(v1210[p1473], p1472);
          });
          return this;
        };
        f284.prototype.splice = function (p1474, p1475 = this.length - p1474) {
          var vA31 = [];
          for (var vLN24 = 2; vLN24 < arguments.length; vLN24++) {
            vA31[vLN24 - 2] = arguments[vLN24];
          }
          var v1212 = Array.from(this.$items.keys());
          var vA32 = [];
          for (var vP1474 = p1474; vP1474 < p1474 + p1475; vP1474++) {
            vA32.push(this.$items.get(v1212[vP1474]));
            this.$deleteAt(v1212[vP1474]);
          }
          for (var vP1474 = 0; vP1474 < vA31.length; vP1474++) {
            this.setAt(p1474 + vP1474, vA31[vP1474]);
          }
          return vA32;
        };
        f284.prototype.unshift = function () {
          var vThis139 = this;
          var vA33 = [];
          for (var vLN0212 = 0; vLN0212 < arguments.length; vLN0212++) {
            vA33[vLN0212] = arguments[vLN0212];
          }
          var v1213 = this.length;
          var v1214 = vA33.length;
          var v1215 = Array.from(this.$items.values());
          vA33.forEach(function (p1476, p1477) {
            vThis139.setAt(p1477, p1476);
          });
          v1215.forEach(function (p1478, p1479) {
            vThis139.setAt(v1214 + p1479, p1478);
          });
          return v1213 + v1214;
        };
        f284.prototype.indexOf = function (p1480, p1481) {
          return Array.from(this.$items.values()).indexOf(p1480, p1481);
        };
        f284.prototype.lastIndexOf = function (p1482, p1483 = this.length - 1) {
          return Array.from(this.$items.values()).lastIndexOf(p1482, p1483);
        };
        f284.prototype.every = function (p1484, p1485) {
          return Array.from(this.$items.values()).every(p1484, p1485);
        };
        f284.prototype.some = function (p1486, p1487) {
          return Array.from(this.$items.values()).some(p1486, p1487);
        };
        f284.prototype.forEach = function (p1488, p1489) {
          Array.from(this.$items.values()).forEach(p1488, p1489);
        };
        f284.prototype.map = function (p1490, p1491) {
          return Array.from(this.$items.values()).map(p1490, p1491);
        };
        f284.prototype.filter = function (p1492, p1493) {
          return Array.from(this.$items.values()).filter(p1492, p1493);
        };
        f284.prototype.reduce = function (p1494, p1495) {
          return Array.prototype.reduce.apply(Array.from(this.$items.values()), arguments);
        };
        f284.prototype.reduceRight = function (p1496, p1497) {
          return Array.prototype.reduceRight.apply(Array.from(this.$items.values()), arguments);
        };
        f284.prototype.find = function (p1498, p1499) {
          return Array.from(this.$items.values()).find(p1498, p1499);
        };
        f284.prototype.findIndex = function (p1500, p1501) {
          return Array.from(this.$items.values()).findIndex(p1500, p1501);
        };
        f284.prototype.fill = function (p1502, p1503, p1504) {
          throw new Error("ArraySchema#fill() not implemented");
        };
        f284.prototype.copyWithin = function (p1505, p1506, p1507) {
          throw new Error("ArraySchema#copyWithin() not implemented");
        };
        f284.prototype.toString = function () {
          return this.$items.toString();
        };
        f284.prototype.toLocaleString = function () {
          return this.$items.toLocaleString();
        };
        f284.prototype[Symbol.iterator] = function () {
          return Array.from(this.$items.values())[Symbol.iterator]();
        };
        Object.defineProperty(f284, Symbol.species, {
          get: function () {
            return f284;
          },
          enumerable: false,
          configurable: true
        });
        f284.prototype.entries = function () {
          return this.$items.entries();
        };
        f284.prototype.keys = function () {
          return this.$items.keys();
        };
        f284.prototype.values = function () {
          return this.$items.values();
        };
        f284.prototype.includes = function (p1508, p1509) {
          return Array.from(this.$items.values()).includes(p1508, p1509);
        };
        f284.prototype.flatMap = function (p1510, p1511) {
          throw new Error("ArraySchema#flatMap() is not supported.");
        };
        f284.prototype.flat = function (p1512) {
          throw new Error("ArraySchema#flat() is not supported.");
        };
        f284.prototype.findLast = function () {
          var v1216 = Array.from(this.$items.values());
          return v1216.findLast.apply(v1216, arguments);
        };
        f284.prototype.findLastIndex = function () {
          var v1217 = Array.from(this.$items.values());
          return v1217.findLastIndex.apply(v1217, arguments);
        };
        f284.prototype.with = function (p1513, p1514) {
          var v1218 = Array.from(this.$items.values());
          v1218[p1513] = p1514;
          return new (f284.bind.apply(f284, f277([undefined], v1218, false)))();
        };
        f284.prototype.toReversed = function () {
          return Array.from(this.$items.values()).reverse();
        };
        f284.prototype.toSorted = function (p1515) {
          return Array.from(this.$items.values()).sort(p1515);
        };
        f284.prototype.toSpliced = function (p1516, p1517) {
          var v1219 = Array.from(this.$items.values());
          return v1219.toSpliced.apply(v1219, arguments);
        };
        f284.prototype.setIndex = function (p1518, p1519) {
          this.$indexes.set(p1518, p1519);
        };
        f284.prototype.getIndex = function (p1520) {
          return this.$indexes.get(p1520);
        };
        f284.prototype.getByIndex = function (p1521) {
          return this.$items.get(this.$indexes.get(p1521));
        };
        f284.prototype.deleteByIndex = function (p1522) {
          var v1220 = this.$indexes.get(p1522);
          this.$items.delete(v1220);
          this.$indexes.delete(p1522);
        };
        f284.prototype.toArray = function () {
          return Array.from(this.$items.values());
        };
        f284.prototype.toJSON = function () {
          return this.toArray().map(function (p1523) {
            if (typeof p1523.toJSON === "function") {
              return p1523.toJSON();
            } else {
              return p1523;
            }
          });
        };
        f284.prototype.clone = function (p1524) {
          var v1221;
          if (p1524) {
            v1221 = new (f284.bind.apply(f284, f277([undefined], Array.from(this.$items.values()), false)))();
          } else {
            v1221 = new (f284.bind.apply(f284, f277([undefined], this.map(function (p1525) {
              if (p1525.$changes) {
                return p1525.clone();
              } else {
                return p1525;
              }
            }), false)))();
          }
          return v1221;
        };
        return f284;
      }();
      function f285(p1526) {
        p1526.$proxy = true;
        p1526 = new Proxy(p1526, {
          get: function (p1527, p1528) {
            if (typeof p1528 !== "symbol" && typeof p1527[p1528] === "undefined") {
              return p1527.get(p1528);
            } else {
              return p1527[p1528];
            }
          },
          set: function (p1529, p1530, p1531) {
            if (typeof p1530 !== "symbol" && p1530.indexOf("$") === -1 && p1530 !== "onAdd" && p1530 !== "onRemove" && p1530 !== "onChange") {
              p1529.set(p1530, p1531);
            } else {
              p1529[p1530] = p1531;
            }
            return true;
          },
          deleteProperty: function (p1532, p1533) {
            p1532.delete(p1533);
            return true;
          }
        });
        return p1526;
      }
      var vF28 = function () {
        function f286(p1534) {
          var vThis140 = this;
          this.$changes = new vF26(this);
          this.$items = new Map();
          this.$indexes = new Map();
          this.$refId = 0;
          if (p1534) {
            if (p1534 instanceof Map || p1534 instanceof f286) {
              p1534.forEach(function (p1535, p1536) {
                return vThis140.set(p1536, p1535);
              });
            } else {
              for (var v1222 in p1534) {
                this.set(v1222, p1534[v1222]);
              }
            }
          }
        }
        f286.prototype.onAdd = function (p1537, p1538 = true) {
          return f279(this.$callbacks ||= {}, p1387.OPERATION.ADD, p1537, p1538 ? this.$items : undefined);
        };
        f286.prototype.onRemove = function (p1539) {
          return f279(this.$callbacks ||= {}, p1387.OPERATION.DELETE, p1539);
        };
        f286.prototype.onChange = function (p1540) {
          return f279(this.$callbacks ||= {}, p1387.OPERATION.REPLACE, p1540);
        };
        f286.is = function (p1541) {
          return p1541.map !== undefined;
        };
        f286.prototype[Symbol.iterator] = function () {
          return this.$items[Symbol.iterator]();
        };
        Object.defineProperty(f286.prototype, Symbol.toStringTag, {
          get: function () {
            return this.$items[Symbol.toStringTag];
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(f286, Symbol.species, {
          get: function () {
            return f286;
          },
          enumerable: false,
          configurable: true
        });
        f286.prototype.set = function (p1542, p1543) {
          if (p1543 === undefined || p1543 === null) {
            throw new Error("MapSchema#set('" + p1542 + "', " + p1543 + "): trying to set " + p1543 + " value on '" + p1542 + "'.");
          }
          p1542 = p1542.toString();
          var v1223 = typeof this.$changes.indexes[p1542] !== "undefined";
          var v1224 = v1223 ? this.$changes.indexes[p1542] : this.$refId++;
          var v1225 = v1223 ? p1387.OPERATION.REPLACE : p1387.OPERATION.ADD;
          var v1226 = p1543.$changes !== undefined;
          if (v1226) {
            p1543.$changes.setParent(this, this.$changes.root, v1224);
          }
          if (!v1223) {
            this.$changes.indexes[p1542] = v1224;
            this.$indexes.set(v1224, p1542);
          } else if (!v1226 && this.$items.get(p1542) === p1543) {
            return;
          } else if (v1226 && this.$items.get(p1542) !== p1543) {
            v1225 = p1387.OPERATION.ADD;
          }
          this.$items.set(p1542, p1543);
          this.$changes.change(p1542, v1225);
          return this;
        };
        f286.prototype.get = function (p1544) {
          return this.$items.get(p1544);
        };
        f286.prototype.delete = function (p1545) {
          this.$changes.delete(p1545.toString());
          return this.$items.delete(p1545);
        };
        f286.prototype.clear = function (p1546) {
          this.$changes.discard(true, true);
          this.$changes.indexes = {};
          this.$indexes.clear();
          if (p1546) {
            f280.call(this, p1546);
          }
          this.$items.clear();
          this.$changes.operation({
            index: 0,
            op: p1387.OPERATION.CLEAR
          });
          this.$changes.touchParents();
        };
        f286.prototype.has = function (p1547) {
          return this.$items.has(p1547);
        };
        f286.prototype.forEach = function (p1548) {
          this.$items.forEach(p1548);
        };
        f286.prototype.entries = function () {
          return this.$items.entries();
        };
        f286.prototype.keys = function () {
          return this.$items.keys();
        };
        f286.prototype.values = function () {
          return this.$items.values();
        };
        Object.defineProperty(f286.prototype, "size", {
          get: function () {
            return this.$items.size;
          },
          enumerable: false,
          configurable: true
        });
        f286.prototype.setIndex = function (p1549, p1550) {
          this.$indexes.set(p1549, p1550);
        };
        f286.prototype.getIndex = function (p1551) {
          return this.$indexes.get(p1551);
        };
        f286.prototype.getByIndex = function (p1552) {
          return this.$items.get(this.$indexes.get(p1552));
        };
        f286.prototype.deleteByIndex = function (p1553) {
          var v1227 = this.$indexes.get(p1553);
          this.$items.delete(v1227);
          this.$indexes.delete(p1553);
        };
        f286.prototype.toJSON = function () {
          var vO67 = {};
          this.forEach(function (p1554, p1555) {
            vO67[p1555] = typeof p1554.toJSON === "function" ? p1554.toJSON() : p1554;
          });
          return vO67;
        };
        f286.prototype.clone = function (p1556) {
          var v1228;
          if (p1556) {
            v1228 = Object.assign(new f286(), this);
          } else {
            v1228 = new f286();
            this.forEach(function (p1557, p1558) {
              if (p1557.$changes) {
                v1228.set(p1558, p1557.clone());
              } else {
                v1228.set(p1558, p1557);
              }
            });
          }
          return v1228;
        };
        return f286;
      }();
      var vO68 = {};
      function f287(p1559, p1560) {
        vO68[p1559] = p1560;
      }
      function f288(p1561) {
        return vO68[p1561];
      }
      var vF29 = function () {
        function f289() {
          this.indexes = {};
          this.fieldsByIndex = {};
          this.deprecated = {};
          this.descriptors = {};
        }
        f289.create = function (p1562) {
          var v1229 = new f289();
          v1229.schema = Object.assign({}, p1562 && p1562.schema || {});
          v1229.indexes = Object.assign({}, p1562 && p1562.indexes || {});
          v1229.fieldsByIndex = Object.assign({}, p1562 && p1562.fieldsByIndex || {});
          v1229.descriptors = Object.assign({}, p1562 && p1562.descriptors || {});
          v1229.deprecated = Object.assign({}, p1562 && p1562.deprecated || {});
          return v1229;
        };
        f289.prototype.addField = function (p1563, p1564) {
          var v1230 = this.getNextFieldIndex();
          this.fieldsByIndex[v1230] = p1563;
          this.indexes[p1563] = v1230;
          this.schema[p1563] = Array.isArray(p1564) ? {
            array: p1564[0]
          } : p1564;
        };
        f289.prototype.hasField = function (p1565) {
          return this.indexes[p1565] !== undefined;
        };
        f289.prototype.addFilter = function (p1566, p1567) {
          if (!this.filters) {
            this.filters = {};
            this.indexesWithFilters = [];
          }
          this.filters[this.indexes[p1566]] = p1567;
          this.indexesWithFilters.push(this.indexes[p1566]);
          return true;
        };
        f289.prototype.addChildrenFilter = function (p1568, p1569) {
          var v1231 = this.indexes[p1568];
          var v1232 = this.schema[p1568];
          if (f288(Object.keys(v1232)[0])) {
            if (!this.childFilters) {
              this.childFilters = {};
            }
            this.childFilters[v1231] = p1569;
            return true;
          } else {
            console.warn("@filterChildren: field '" + p1568 + "' can't have children. Ignoring filter.");
          }
        };
        f289.prototype.getChildrenFilter = function (p1570) {
          return this.childFilters && this.childFilters[this.indexes[p1570]];
        };
        f289.prototype.getNextFieldIndex = function () {
          return Object.keys(this.schema || {}).length;
        };
        return f289;
      }();
      function f290(p1571) {
        return p1571._context && p1571._context.useFilters;
      }
      var vF30 = function () {
        function f291() {
          this.types = {};
          this.schemas = new Map();
          this.useFilters = false;
        }
        f291.prototype.has = function (p1572) {
          return this.schemas.has(p1572);
        };
        f291.prototype.get = function (p1573) {
          return this.types[p1573];
        };
        f291.prototype.add = function (p1574, p1575 = this.schemas.size) {
          p1574._definition = vF29.create(p1574._definition);
          p1574._typeid = p1575;
          this.types[p1575] = p1574;
          this.schemas.set(p1574, p1575);
        };
        f291.create = function (p1576 = {}) {
          return function (p1577) {
            if (!p1576.context) {
              p1576.context = new f291();
            }
            return f292(p1577, p1576);
          };
        };
        return f291;
      }();
      var v1233 = new vF30();
      function f292(p1578, p1579 = {}) {
        return function (p1580, p1581) {
          var v1234 = p1579.context || v1233;
          var v1235 = p1580.constructor;
          v1235._context = v1234;
          if (!p1578) {
            throw new Error(v1235.name + ": @type() reference provided for \"" + p1581 + "\" is undefined. Make sure you don't have any circular dependencies.");
          }
          if (!v1234.has(v1235)) {
            v1234.add(v1235);
          }
          var v1236 = v1235._definition;
          v1236.addField(p1581, p1578);
          if (v1236.descriptors[p1581]) {
            if (v1236.deprecated[p1581]) {
              return;
            } else {
              try {
                throw new Error("@colyseus/schema: Duplicate '" + p1581 + "' definition on '" + v1235.name + "'.\nCheck @type() annotation");
              } catch (e60) {
                var v1237 = e60.stack.split("\n")[4].trim();
                throw new Error(e60.message + " " + v1237);
              }
            }
          }
          var v1238 = vF27.is(p1578);
          var v1239 = !v1238 && vF28.is(p1578);
          if (typeof p1578 !== "string" && !vF36.is(p1578)) {
            var v1240 = Object.values(p1578)[0];
            if (typeof v1240 !== "string" && !v1234.has(v1240)) {
              v1234.add(v1240);
            }
          }
          if (p1579.manual) {
            v1236.descriptors[p1581] = {
              enumerable: true,
              configurable: true,
              writable: true
            };
            return;
          }
          var v1241 = "_" + p1581;
          v1236.descriptors[v1241] = {
            enumerable: false,
            configurable: false,
            writable: true
          };
          v1236.descriptors[p1581] = {
            get: function () {
              return this[v1241];
            },
            set: function (p1582) {
              if (p1582 === this[v1241]) {
                return;
              }
              if (p1582 !== undefined && p1582 !== null) {
                if (v1238 && !(p1582 instanceof vF27)) {
                  p1582 = new (vF27.bind.apply(vF27, f277([undefined], p1582, false)))();
                }
                if (v1239 && !(p1582 instanceof vF28)) {
                  p1582 = new vF28(p1582);
                }
                if (p1582.$proxy === undefined) {
                  if (v1239) {
                    p1582 = f285(p1582);
                  } else if (v1238) {
                    p1582 = f283(p1582);
                  }
                }
                this.$changes.change(p1581);
                if (p1582.$changes) {
                  p1582.$changes.setParent(this, this.$changes.root, this._definition.indexes[p1581]);
                }
              } else if (this[v1241] !== undefined) {
                this.$changes.delete(p1581);
              }
              this[v1241] = p1582;
            },
            enumerable: true,
            configurable: true
          };
        };
      }
      function f293(p1583) {
        return function (p1584, p1585) {
          var v1242 = p1584.constructor;
          var v1243 = v1242._definition;
          if (v1243.addFilter(p1585, p1583)) {
            v1242._context.useFilters = true;
          }
        };
      }
      function f294(p1586) {
        return function (p1587, p1588) {
          var v1244 = p1587.constructor;
          var v1245 = v1244._definition;
          if (v1245.addChildrenFilter(p1588, p1586)) {
            v1244._context.useFilters = true;
          }
        };
      }
      function f295(p1589 = true) {
        return function (p1590, p1591) {
          var v1246 = p1590.constructor;
          var v1247 = v1246._definition;
          v1247.deprecated[p1591] = true;
          if (p1589) {
            v1247.descriptors[p1591] = {
              get: function () {
                throw new Error(p1591 + " is deprecated.");
              },
              set: function (p1592) {},
              enumerable: false,
              configurable: true
            };
          }
        };
      }
      function f296(p1593, p1594, p1595 = {}) {
        if (!p1595.context) {
          p1595.context = p1593._context || p1595.context || v1233;
        }
        for (var v1248 in p1594) {
          f292(p1594[v1248], p1595)(p1593.prototype, v1248);
        }
        return p1593;
      }
      function f297(p1596) {
        var vLN0213 = 0;
        var vLN0214 = 0;
        for (var vLN0215 = 0, v1249 = p1596.length; vLN0215 < v1249; vLN0215++) {
          vLN0213 = p1596.charCodeAt(vLN0215);
          if (vLN0213 < 128) {
            vLN0214 += 1;
          } else if (vLN0213 < 2048) {
            vLN0214 += 2;
          } else if (vLN0213 < 55296 || vLN0213 >= 57344) {
            vLN0214 += 3;
          } else {
            vLN0215++;
            vLN0214 += 4;
          }
        }
        return vLN0214;
      }
      function f298(p1597, p1598, p1599) {
        var vLN0216 = 0;
        for (var vLN0217 = 0, v1250 = p1599.length; vLN0217 < v1250; vLN0217++) {
          vLN0216 = p1599.charCodeAt(vLN0217);
          if (vLN0216 < 128) {
            p1597[p1598++] = vLN0216;
          } else if (vLN0216 < 2048) {
            p1597[p1598++] = vLN0216 >> 6 | 192;
            p1597[p1598++] = vLN0216 & 63 | 128;
          } else if (vLN0216 < 55296 || vLN0216 >= 57344) {
            p1597[p1598++] = vLN0216 >> 12 | 224;
            p1597[p1598++] = vLN0216 >> 6 & 63 | 128;
            p1597[p1598++] = vLN0216 & 63 | 128;
          } else {
            vLN0217++;
            vLN0216 = 65536 + ((vLN0216 & 1023) << 10 | p1599.charCodeAt(vLN0217) & 1023);
            p1597[p1598++] = vLN0216 >> 18 | 240;
            p1597[p1598++] = vLN0216 >> 12 & 63 | 128;
            p1597[p1598++] = vLN0216 >> 6 & 63 | 128;
            p1597[p1598++] = vLN0216 & 63 | 128;
          }
        }
      }
      function f299(p1600, p1601) {
        p1600.push(p1601 & 255);
      }
      function f300(p1602, p1603) {
        p1602.push(p1603 & 255);
      }
      function f301(p1604, p1605) {
        p1604.push(p1605 & 255);
        p1604.push(p1605 >> 8 & 255);
      }
      function f302(p1606, p1607) {
        p1606.push(p1607 & 255);
        p1606.push(p1607 >> 8 & 255);
      }
      function f303(p1608, p1609) {
        p1608.push(p1609 & 255);
        p1608.push(p1609 >> 8 & 255);
        p1608.push(p1609 >> 16 & 255);
        p1608.push(p1609 >> 24 & 255);
      }
      function f304(p1610, p1611) {
        var v1251 = p1611 >> 24;
        var v1252 = p1611 >> 16;
        var v1253 = p1611 >> 8;
        var vP1611 = p1611;
        p1610.push(vP1611 & 255);
        p1610.push(v1253 & 255);
        p1610.push(v1252 & 255);
        p1610.push(v1251 & 255);
      }
      function f305(p1612, p1613) {
        var v1254 = Math.floor(p1613 / Math.pow(2, 32));
        var v1255 = p1613 >>> 0;
        f304(p1612, v1255);
        f304(p1612, v1254);
      }
      function f306(p1614, p1615) {
        var v1256 = p1615 / Math.pow(2, 32) >> 0;
        var v1257 = p1615 >>> 0;
        f304(p1614, v1257);
        f304(p1614, v1256);
      }
      function f307(p1616, p1617) {
        f309(p1616, p1617);
      }
      function f308(p1618, p1619) {
        f310(p1618, p1619);
      }
      var v1258 = new Int32Array(2);
      var v1259 = new Float32Array(v1258.buffer);
      var v1260 = new Float64Array(v1258.buffer);
      function f309(p1620, p1621) {
        v1259[0] = p1621;
        f303(p1620, v1258[0]);
      }
      function f310(p1622, p1623) {
        v1260[0] = p1623;
        f303(p1622, v1258[0]);
        f303(p1622, v1258[1]);
      }
      function f311(p1624, p1625) {
        return f300(p1624, p1625 ? 1 : 0);
      }
      function f312(p1626, p1627) {
        if (!p1627) {
          p1627 = "";
        }
        var vF297 = f297(p1627);
        var vLN0218 = 0;
        if (vF297 < 32) {
          p1626.push(vF297 | 160);
          vLN0218 = 1;
        } else if (vF297 < 256) {
          p1626.push(217);
          f300(p1626, vF297);
          vLN0218 = 2;
        } else if (vF297 < 65536) {
          p1626.push(218);
          f302(p1626, vF297);
          vLN0218 = 3;
        } else if (vF297 < 4294967296) {
          p1626.push(219);
          f304(p1626, vF297);
          vLN0218 = 5;
        } else {
          throw new Error("String too long");
        }
        f298(p1626, p1626.length, p1627);
        return vLN0218 + vF297;
      }
      function f313(p1628, p1629) {
        if (isNaN(p1629)) {
          return f313(p1628, 0);
        } else if (!isFinite(p1629)) {
          return f313(p1628, p1629 > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER);
        } else if (p1629 !== (p1629 | 0)) {
          p1628.push(203);
          f310(p1628, p1629);
          return 9;
        }
        if (p1629 >= 0) {
          if (p1629 < 128) {
            f300(p1628, p1629);
            return 1;
          }
          if (p1629 < 256) {
            p1628.push(204);
            f300(p1628, p1629);
            return 2;
          }
          if (p1629 < 65536) {
            p1628.push(205);
            f302(p1628, p1629);
            return 3;
          }
          if (p1629 < 4294967296) {
            p1628.push(206);
            f304(p1628, p1629);
            return 5;
          }
          p1628.push(207);
          f306(p1628, p1629);
          return 9;
        } else {
          if (p1629 >= -32) {
            p1628.push(p1629 + 32 | 224);
            return 1;
          }
          if (p1629 >= -128) {
            p1628.push(208);
            f299(p1628, p1629);
            return 2;
          }
          if (p1629 >= -32768) {
            p1628.push(209);
            f301(p1628, p1629);
            return 3;
          }
          if (p1629 >= -2147483648) {
            p1628.push(210);
            f303(p1628, p1629);
            return 5;
          }
          p1628.push(211);
          f305(p1628, p1629);
          return 9;
        }
      }
      var v1261 = Object.freeze({
        "__proto__": null,
        boolean: f311,
        float32: f307,
        float64: f308,
        int16: f301,
        int32: f303,
        int64: f305,
        int8: f299,
        number: f313,
        string: f312,
        uint16: f302,
        uint32: f304,
        uint64: f306,
        uint8: f300,
        utf8Write: f298,
        writeFloat32: f309,
        writeFloat64: f310
      });
      function f314(p1630, p1631, p1632) {
        var vLS16 = "";
        var vLN0219 = 0;
        for (var vP1631 = p1631, v1262 = p1631 + p1632; vP1631 < v1262; vP1631++) {
          var v1263 = p1630[vP1631];
          if ((v1263 & 128) === 0) {
            vLS16 += String.fromCharCode(v1263);
            continue;
          }
          if ((v1263 & 224) === 192) {
            vLS16 += String.fromCharCode((v1263 & 31) << 6 | p1630[++vP1631] & 63);
            continue;
          }
          if ((v1263 & 240) === 224) {
            vLS16 += String.fromCharCode((v1263 & 15) << 12 | (p1630[++vP1631] & 63) << 6 | (p1630[++vP1631] & 63) << 0);
            continue;
          }
          if ((v1263 & 248) === 240) {
            vLN0219 = (v1263 & 7) << 18 | (p1630[++vP1631] & 63) << 12 | (p1630[++vP1631] & 63) << 6 | (p1630[++vP1631] & 63) << 0;
            if (vLN0219 >= 65536) {
              vLN0219 -= 65536;
              vLS16 += String.fromCharCode((vLN0219 >>> 10) + 55296, (vLN0219 & 1023) + 56320);
            } else {
              vLS16 += String.fromCharCode(vLN0219);
            }
            continue;
          }
          console.error("Invalid byte " + v1263.toString(16));
        }
        return vLS16;
      }
      function f315(p1633, p1634) {
        return f316(p1633, p1634) << 24 >> 24;
      }
      function f316(p1635, p1636) {
        return p1635[p1636.offset++];
      }
      function f317(p1637, p1638) {
        return f318(p1637, p1638) << 16 >> 16;
      }
      function f318(p1639, p1640) {
        return p1639[p1640.offset++] | p1639[p1640.offset++] << 8;
      }
      function f319(p1641, p1642) {
        return p1641[p1642.offset++] | p1641[p1642.offset++] << 8 | p1641[p1642.offset++] << 16 | p1641[p1642.offset++] << 24;
      }
      function f320(p1643, p1644) {
        return f319(p1643, p1644) >>> 0;
      }
      function f321(p1645, p1646) {
        return f325(p1645, p1646);
      }
      function f322(p1647, p1648) {
        return f326(p1647, p1648);
      }
      function f323(p1649, p1650) {
        var vF320 = f320(p1649, p1650);
        var v1264 = f319(p1649, p1650) * Math.pow(2, 32);
        return v1264 + vF320;
      }
      function f324(p1651, p1652) {
        var vF3202 = f320(p1651, p1652);
        var v1265 = f320(p1651, p1652) * Math.pow(2, 32);
        return v1265 + vF3202;
      }
      var v1266 = new Int32Array(2);
      var v1267 = new Float32Array(v1266.buffer);
      var v1268 = new Float64Array(v1266.buffer);
      function f325(p1653, p1654) {
        v1266[0] = f319(p1653, p1654);
        return v1267[0];
      }
      function f326(p1655, p1656) {
        v1266[0] = f319(p1655, p1656);
        v1266[1] = f319(p1655, p1656);
        return v1268[0];
      }
      function f327(p1657, p1658) {
        return f316(p1657, p1658) > 0;
      }
      function f328(p1659, p1660) {
        var v1269 = p1659[p1660.offset++];
        var v1270;
        if (v1269 < 192) {
          v1270 = v1269 & 31;
        } else if (v1269 === 217) {
          v1270 = f316(p1659, p1660);
        } else if (v1269 === 218) {
          v1270 = f318(p1659, p1660);
        } else if (v1269 === 219) {
          v1270 = f320(p1659, p1660);
        }
        var vF314 = f314(p1659, p1660.offset, v1270);
        p1660.offset += v1270;
        return vF314;
      }
      function f329(p1661, p1662) {
        var v1271 = p1661[p1662.offset];
        return v1271 < 192 && v1271 > 160 || v1271 === 217 || v1271 === 218 || v1271 === 219;
      }
      function f330(p1663, p1664) {
        var v1272 = p1663[p1664.offset++];
        if (v1272 < 128) {
          return v1272;
        } else if (v1272 === 202) {
          return f325(p1663, p1664);
        } else if (v1272 === 203) {
          return f326(p1663, p1664);
        } else if (v1272 === 204) {
          return f316(p1663, p1664);
        } else if (v1272 === 205) {
          return f318(p1663, p1664);
        } else if (v1272 === 206) {
          return f320(p1663, p1664);
        } else if (v1272 === 207) {
          return f324(p1663, p1664);
        } else if (v1272 === 208) {
          return f315(p1663, p1664);
        } else if (v1272 === 209) {
          return f317(p1663, p1664);
        } else if (v1272 === 210) {
          return f319(p1663, p1664);
        } else if (v1272 === 211) {
          return f323(p1663, p1664);
        } else if (v1272 > 223) {
          return (255 - v1272 + 1) * -1;
        }
      }
      function f331(p1665, p1666) {
        var v1273 = p1665[p1666.offset];
        return v1273 < 128 || v1273 >= 202 && v1273 <= 211;
      }
      function f332(p1667, p1668) {
        return p1667[p1668.offset] < 160;
      }
      function f333(p1669, p1670) {
        return p1669[p1670.offset - 1] === vLN255 && (p1669[p1670.offset] < 128 || p1669[p1670.offset] >= 202 && p1669[p1670.offset] <= 211);
      }
      var v1274 = Object.freeze({
        "__proto__": null,
        arrayCheck: f332,
        boolean: f327,
        float32: f321,
        float64: f322,
        int16: f317,
        int32: f319,
        int64: f323,
        int8: f315,
        number: f330,
        numberCheck: f331,
        readFloat32: f325,
        readFloat64: f326,
        string: f328,
        stringCheck: f329,
        switchStructureCheck: f333,
        uint16: f318,
        uint32: f320,
        uint64: f324,
        uint8: f316
      });
      var vF31 = function () {
        function f334(p1671) {
          var vThis141 = this;
          this.$changes = new vF26(this);
          this.$items = new Map();
          this.$indexes = new Map();
          this.$refId = 0;
          if (p1671) {
            p1671.forEach(function (p1672) {
              return vThis141.add(p1672);
            });
          }
        }
        f334.prototype.onAdd = function (p1673, p1674 = true) {
          return f279(this.$callbacks ||= [], p1387.OPERATION.ADD, p1673, p1674 ? this.$items : undefined);
        };
        f334.prototype.onRemove = function (p1675) {
          return f279(this.$callbacks ||= [], p1387.OPERATION.DELETE, p1675);
        };
        f334.prototype.onChange = function (p1676) {
          return f279(this.$callbacks ||= [], p1387.OPERATION.REPLACE, p1676);
        };
        f334.is = function (p1677) {
          return p1677.collection !== undefined;
        };
        f334.prototype.add = function (p1678) {
          var v1275 = this.$refId++;
          var v1276 = p1678.$changes !== undefined;
          if (v1276) {
            p1678.$changes.setParent(this, this.$changes.root, v1275);
          }
          this.$changes.indexes[v1275] = v1275;
          this.$indexes.set(v1275, v1275);
          this.$items.set(v1275, p1678);
          this.$changes.change(v1275);
          return v1275;
        };
        f334.prototype.at = function (p1679) {
          var v1277 = Array.from(this.$items.keys())[p1679];
          return this.$items.get(v1277);
        };
        f334.prototype.entries = function () {
          return this.$items.entries();
        };
        f334.prototype.delete = function (p1680) {
          var v1278 = this.$items.entries();
          var v1279;
          var v1280;
          while (v1280 = v1278.next()) {
            if (v1280.done) {
              break;
            }
            if (p1680 === v1280.value[1]) {
              v1279 = v1280.value[0];
              break;
            }
          }
          if (v1279 === undefined) {
            return false;
          }
          this.$changes.delete(v1279);
          this.$indexes.delete(v1279);
          return this.$items.delete(v1279);
        };
        f334.prototype.clear = function (p1681) {
          this.$changes.discard(true, true);
          this.$changes.indexes = {};
          this.$indexes.clear();
          if (p1681) {
            f280.call(this, p1681);
          }
          this.$items.clear();
          this.$changes.operation({
            index: 0,
            op: p1387.OPERATION.CLEAR
          });
          this.$changes.touchParents();
        };
        f334.prototype.has = function (p1682) {
          return Array.from(this.$items.values()).some(function (p1683) {
            return p1683 === p1682;
          });
        };
        f334.prototype.forEach = function (p1684) {
          var vThis142 = this;
          this.$items.forEach(function (p1685, p1686, p1687) {
            return p1684(p1685, p1686, vThis142);
          });
        };
        f334.prototype.values = function () {
          return this.$items.values();
        };
        Object.defineProperty(f334.prototype, "size", {
          get: function () {
            return this.$items.size;
          },
          enumerable: false,
          configurable: true
        });
        f334.prototype.setIndex = function (p1688, p1689) {
          this.$indexes.set(p1688, p1689);
        };
        f334.prototype.getIndex = function (p1690) {
          return this.$indexes.get(p1690);
        };
        f334.prototype.getByIndex = function (p1691) {
          return this.$items.get(this.$indexes.get(p1691));
        };
        f334.prototype.deleteByIndex = function (p1692) {
          var v1281 = this.$indexes.get(p1692);
          this.$items.delete(v1281);
          this.$indexes.delete(p1692);
        };
        f334.prototype.toArray = function () {
          return Array.from(this.$items.values());
        };
        f334.prototype.toJSON = function () {
          var vA34 = [];
          this.forEach(function (p1693, p1694) {
            vA34.push(typeof p1693.toJSON === "function" ? p1693.toJSON() : p1693);
          });
          return vA34;
        };
        f334.prototype.clone = function (p1695) {
          var v1282;
          if (p1695) {
            v1282 = Object.assign(new f334(), this);
          } else {
            v1282 = new f334();
            this.forEach(function (p1696) {
              if (p1696.$changes) {
                v1282.add(p1696.clone());
              } else {
                v1282.add(p1696);
              }
            });
          }
          return v1282;
        };
        return f334;
      }();
      var vF32 = function () {
        function f335(p1697) {
          var vThis143 = this;
          this.$changes = new vF26(this);
          this.$items = new Map();
          this.$indexes = new Map();
          this.$refId = 0;
          if (p1697) {
            p1697.forEach(function (p1698) {
              return vThis143.add(p1698);
            });
          }
        }
        f335.prototype.onAdd = function (p1699, p1700 = true) {
          return f279(this.$callbacks ||= [], p1387.OPERATION.ADD, p1699, p1700 ? this.$items : undefined);
        };
        f335.prototype.onRemove = function (p1701) {
          return f279(this.$callbacks ||= [], p1387.OPERATION.DELETE, p1701);
        };
        f335.prototype.onChange = function (p1702) {
          return f279(this.$callbacks ||= [], p1387.OPERATION.REPLACE, p1702);
        };
        f335.is = function (p1703) {
          return p1703.set !== undefined;
        };
        f335.prototype.add = function (p1704) {
          if (this.has(p1704)) {
            return false;
          }
          var v1283 = this.$refId++;
          if (p1704.$changes !== undefined) {
            p1704.$changes.setParent(this, this.$changes.root, v1283);
          }
          var v1284 = this.$changes.indexes[v1283]?.op ?? p1387.OPERATION.ADD;
          this.$changes.indexes[v1283] = v1283;
          this.$indexes.set(v1283, v1283);
          this.$items.set(v1283, p1704);
          this.$changes.change(v1283, v1284);
          return v1283;
        };
        f335.prototype.entries = function () {
          return this.$items.entries();
        };
        f335.prototype.delete = function (p1705) {
          var v1285 = this.$items.entries();
          var v1286;
          var v1287;
          while (v1287 = v1285.next()) {
            if (v1287.done) {
              break;
            }
            if (p1705 === v1287.value[1]) {
              v1286 = v1287.value[0];
              break;
            }
          }
          if (v1286 === undefined) {
            return false;
          }
          this.$changes.delete(v1286);
          this.$indexes.delete(v1286);
          return this.$items.delete(v1286);
        };
        f335.prototype.clear = function (p1706) {
          this.$changes.discard(true, true);
          this.$changes.indexes = {};
          this.$indexes.clear();
          if (p1706) {
            f280.call(this, p1706);
          }
          this.$items.clear();
          this.$changes.operation({
            index: 0,
            op: p1387.OPERATION.CLEAR
          });
          this.$changes.touchParents();
        };
        f335.prototype.has = function (p1707) {
          var v1288 = this.$items.values();
          var v1289 = false;
          var v1290;
          while (v1290 = v1288.next()) {
            if (v1290.done) {
              break;
            }
            if (p1707 === v1290.value) {
              v1289 = true;
              break;
            }
          }
          return v1289;
        };
        f335.prototype.forEach = function (p1708) {
          var vThis144 = this;
          this.$items.forEach(function (p1709, p1710, p1711) {
            return p1708(p1709, p1710, vThis144);
          });
        };
        f335.prototype.values = function () {
          return this.$items.values();
        };
        Object.defineProperty(f335.prototype, "size", {
          get: function () {
            return this.$items.size;
          },
          enumerable: false,
          configurable: true
        });
        f335.prototype.setIndex = function (p1712, p1713) {
          this.$indexes.set(p1712, p1713);
        };
        f335.prototype.getIndex = function (p1714) {
          return this.$indexes.get(p1714);
        };
        f335.prototype.getByIndex = function (p1715) {
          return this.$items.get(this.$indexes.get(p1715));
        };
        f335.prototype.deleteByIndex = function (p1716) {
          var v1291 = this.$indexes.get(p1716);
          this.$items.delete(v1291);
          this.$indexes.delete(p1716);
        };
        f335.prototype.toArray = function () {
          return Array.from(this.$items.values());
        };
        f335.prototype.toJSON = function () {
          var vA35 = [];
          this.forEach(function (p1717, p1718) {
            vA35.push(typeof p1717.toJSON === "function" ? p1717.toJSON() : p1717);
          });
          return vA35;
        };
        f335.prototype.clone = function (p1719) {
          var v1292;
          if (p1719) {
            v1292 = Object.assign(new f335(), this);
          } else {
            v1292 = new f335();
            this.forEach(function (p1720) {
              if (p1720.$changes) {
                v1292.add(p1720.clone());
              } else {
                v1292.add(p1720);
              }
            });
          }
          return v1292;
        };
        return f335;
      }();
      var vF33 = function () {
        function f336() {
          this.refIds = new WeakSet();
          this.containerIndexes = new WeakMap();
        }
        f336.prototype.addRefId = function (p1721) {
          if (!this.refIds.has(p1721)) {
            this.refIds.add(p1721);
            this.containerIndexes.set(p1721, new Set());
          }
        };
        f336.get = function (p1722) {
          if (p1722.$filterState === undefined) {
            p1722.$filterState = new f336();
          }
          return p1722.$filterState;
        };
        return f336;
      }();
      var vF34 = function () {
        function f337() {
          this.refs = new Map();
          this.refCounts = {};
          this.deletedRefs = new Set();
          this.nextUniqueId = 0;
        }
        f337.prototype.getNextUniqueId = function () {
          return this.nextUniqueId++;
        };
        f337.prototype.addRef = function (p1723, p1724, p1725 = true) {
          this.refs.set(p1723, p1724);
          if (p1725) {
            this.refCounts[p1723] = (this.refCounts[p1723] || 0) + 1;
          }
        };
        f337.prototype.removeRef = function (p1726) {
          var v1293 = this.refCounts[p1726];
          if (v1293 === undefined) {
            console.warn("trying to remove reference " + p1726 + " that doesn't exist");
            return;
          }
          if (v1293 === 0) {
            console.warn("trying to remove reference " + p1726 + " with 0 refCount");
            return;
          }
          this.refCounts[p1726] = v1293 - 1;
          this.deletedRefs.add(p1726);
        };
        f337.prototype.clearRefs = function () {
          this.refs.clear();
          this.deletedRefs.clear();
          this.refCounts = {};
        };
        f337.prototype.garbageCollectDeletedRefs = function () {
          var vThis145 = this;
          this.deletedRefs.forEach(function (p1727) {
            if (vThis145.refCounts[p1727] > 0) {
              return;
            }
            var v1294 = vThis145.refs.get(p1727);
            if (v1294 instanceof vF36) {
              for (var v1295 in v1294._definition.schema) {
                if (typeof v1294._definition.schema[v1295] !== "string" && v1294[v1295] && v1294[v1295].$changes) {
                  vThis145.removeRef(v1294[v1295].$changes.refId);
                }
              }
            } else {
              var v1296 = v1294.$changes.parent._definition;
              var v1297 = v1296.schema[v1296.fieldsByIndex[v1294.$changes.parentIndex]];
              if (typeof Object.values(v1297)[0] === "function") {
                Array.from(v1294.values()).forEach(function (p1728) {
                  return vThis145.removeRef(p1728.$changes.refId);
                });
              }
            }
            vThis145.refs.delete(p1727);
            delete vThis145.refCounts[p1727];
          });
          this.deletedRefs.clear();
        };
        return f337;
      }();
      var vF35 = function (p1729) {
        f274(f338, p1729);
        function f338() {
          return p1729 !== null && p1729.apply(this, arguments) || this;
        }
        return f338;
      }(Error);
      function f339(p1730, p1731, p1732, p1733) {
        var v1298;
        var v1299 = false;
        switch (p1731) {
          case "number":
          case "int8":
          case "uint8":
          case "int16":
          case "uint16":
          case "int32":
          case "uint32":
          case "int64":
          case "uint64":
          case "float32":
          case "float64":
            v1298 = "number";
            if (isNaN(p1730)) {
              console.log("trying to encode \"NaN\" in " + p1732.constructor.name + "#" + p1733);
            }
            break;
          case "string":
            v1298 = "string";
            v1299 = true;
            break;
          case "boolean":
            return;
        }
        if (typeof p1730 !== v1298 && (!v1299 || v1299 && p1730 !== null)) {
          var v1300 = "'" + JSON.stringify(p1730) + "'" + (p1730 && p1730.constructor && " (" + p1730.constructor.name + ")" || "");
          throw new vF35("a '" + v1298 + "' was expected, but " + v1300 + " was provided in " + p1732.constructor.name + "#" + p1733);
        }
      }
      function f340(p1734, p1735, p1736, p1737) {
        if (!(p1734 instanceof p1735)) {
          throw new vF35("a '" + p1735.name + "' was expected, but '" + p1734.constructor.name + "' was provided in " + p1736.constructor.name + "#" + p1737);
        }
      }
      function f341(p1738, p1739, p1740, p1741, p1742) {
        f339(p1740, p1738, p1741, p1742);
        var v1301 = v1261[p1738];
        if (v1301) {
          v1301(p1739, p1740);
        } else {
          throw new vF35("a '" + p1738 + "' was expected, but " + p1740 + " was provided in " + p1741.constructor.name + "#" + p1742);
        }
      }
      function f342(p1743, p1744, p1745) {
        return v1274[p1743](p1744, p1745);
      }
      var vF36 = function () {
        function f343() {
          var vA36 = [];
          for (var vLN0220 = 0; vLN0220 < arguments.length; vLN0220++) {
            vA36[vLN0220] = arguments[vLN0220];
          }
          Object.defineProperties(this, {
            $changes: {
              value: new vF26(this, undefined, new vF34()),
              enumerable: false,
              writable: true
            },
            $callbacks: {
              value: undefined,
              enumerable: false,
              writable: true
            }
          });
          var v1302 = this._definition.descriptors;
          if (v1302) {
            Object.defineProperties(this, v1302);
          }
          if (vA36[0]) {
            this.assign(vA36[0]);
          }
        }
        f343.onError = function (p1746) {
          console.error(p1746);
        };
        f343.is = function (p1747) {
          return p1747._definition && p1747._definition.schema !== undefined;
        };
        f343.prototype.onChange = function (p1748) {
          return f279(this.$callbacks ||= {}, p1387.OPERATION.REPLACE, p1748);
        };
        f343.prototype.onRemove = function (p1749) {
          return f279(this.$callbacks ||= {}, p1387.OPERATION.DELETE, p1749);
        };
        f343.prototype.assign = function (p1750) {
          Object.assign(this, p1750);
          return this;
        };
        Object.defineProperty(f343.prototype, "_definition", {
          get: function () {
            return this.constructor._definition;
          },
          enumerable: false,
          configurable: true
        });
        f343.prototype.setDirty = function (p1751, p1752) {
          this.$changes.change(p1751, p1752);
        };
        f343.prototype.listen = function (p1753, p1754, p1755) {
          var vThis146 = this;
          if (p1755 === undefined) {
            p1755 = true;
          }
          if (!this.$callbacks) {
            this.$callbacks = {};
          }
          if (!this.$callbacks[p1753]) {
            this.$callbacks[p1753] = [];
          }
          this.$callbacks[p1753].push(p1754);
          if (p1755 && this[p1753] !== undefined) {
            p1754(this[p1753], undefined);
          }
          return function () {
            return f281(vThis146.$callbacks[p1753], vThis146.$callbacks[p1753].indexOf(p1754));
          };
        };
        f343.prototype.decode = function (p1756, p1757 = {
          offset: 0
        }, p1758 = this) {
          var vA37 = [];
          var v1303 = this.$changes.root;
          var v1304 = p1756.length;
          var vLN0221 = 0;
          v1303.refs.set(vLN0221, this);
          while (p1757.offset < v1304) {
            var v1305 = p1756[p1757.offset++];
            if (v1305 == vLN255) {
              vLN0221 = f330(p1756, p1757);
              var v1306 = v1303.refs.get(vLN0221);
              if (!v1306) {
                throw new Error("\"refId\" not found: " + vLN0221);
              }
              p1758 = v1306;
              continue;
            }
            var v1307 = p1758.$changes;
            var v1308 = p1758._definition !== undefined;
            var v1309 = v1308 ? v1305 >> 6 << 6 : v1305;
            if (v1309 === p1387.OPERATION.CLEAR) {
              p1758.clear(vA37);
              continue;
            }
            var v1310 = v1308 ? v1305 % (v1309 || 255) : f330(p1756, p1757);
            var v1311 = v1308 ? p1758._definition.fieldsByIndex[v1310] : "";
            var v1312 = v1307.getType(v1310);
            var vUndefined20 = undefined;
            var vUndefined21 = undefined;
            var vUndefined22 = undefined;
            if (!v1308) {
              vUndefined21 = p1758.getByIndex(v1310);
              if ((v1309 & p1387.OPERATION.ADD) === p1387.OPERATION.ADD) {
                vUndefined22 = p1758 instanceof vF28 ? f328(p1756, p1757) : v1310;
                p1758.setIndex(v1310, vUndefined22);
              } else {
                vUndefined22 = p1758.getIndex(v1310);
              }
            } else {
              vUndefined21 = p1758["_" + v1311];
            }
            if ((v1309 & p1387.OPERATION.DELETE) === p1387.OPERATION.DELETE) {
              if (v1309 !== p1387.OPERATION.DELETE_AND_ADD) {
                p1758.deleteByIndex(v1310);
              }
              if (vUndefined21 && vUndefined21.$changes) {
                v1303.removeRef(vUndefined21.$changes.refId);
              }
              vUndefined20 = null;
            }
            if (v1311 === undefined) {
              console.warn("@colyseus/schema: definition mismatch");
              var vO69 = {
                offset: p1757.offset
              };
              while (p1757.offset < v1304) {
                if (f333(p1756, p1757)) {
                  vO69.offset = p1757.offset + 1;
                  if (v1303.refs.has(f330(p1756, vO69))) {
                    break;
                  }
                }
                p1757.offset++;
              }
              continue;
            } else if (v1309 === p1387.OPERATION.DELETE) ;else if (f343.is(v1312)) {
              var vF330 = f330(p1756, p1757);
              vUndefined20 = v1303.refs.get(vF330);
              if (v1309 !== p1387.OPERATION.REPLACE) {
                var v1313 = this.getSchemaType(p1756, p1757, v1312);
                if (!vUndefined20) {
                  vUndefined20 = this.createTypeInstance(v1313);
                  vUndefined20.$changes.refId = vF330;
                  if (vUndefined21) {
                    vUndefined20.$callbacks = vUndefined21.$callbacks;
                    if (vUndefined21.$changes.refId && vF330 !== vUndefined21.$changes.refId) {
                      v1303.removeRef(vUndefined21.$changes.refId);
                    }
                  }
                }
                v1303.addRef(vF330, vUndefined20, vUndefined20 !== vUndefined21);
              }
            } else if (typeof v1312 === "string") {
              vUndefined20 = f342(v1312, p1756, p1757);
            } else {
              var vF288 = f288(Object.keys(v1312)[0]);
              var vF3302 = f330(p1756, p1757);
              var v1314 = v1303.refs.has(vF3302) ? vUndefined21 || v1303.refs.get(vF3302) : new vF288.constructor();
              vUndefined20 = v1314.clone(true);
              vUndefined20.$changes.refId = vF3302;
              if (vUndefined21) {
                vUndefined20.$callbacks = vUndefined21.$callbacks;
                if (vUndefined21.$changes.refId && vF3302 !== vUndefined21.$changes.refId) {
                  v1303.removeRef(vUndefined21.$changes.refId);
                  var v1315 = vUndefined21.entries();
                  var vUndefined23 = undefined;
                  while ((vUndefined23 = v1315.next()) && !vUndefined23.done) {
                    var v1316 = vUndefined23.value;
                    var v1317 = v1316[0];
                    var v1318 = v1316[1];
                    vA37.push({
                      refId: vF3302,
                      op: p1387.OPERATION.DELETE,
                      field: v1317,
                      value: undefined,
                      previousValue: v1318
                    });
                  }
                }
              }
              v1303.addRef(vF3302, vUndefined20, v1314 !== vUndefined21);
            }
            if (vUndefined20 !== null && vUndefined20 !== undefined) {
              if (vUndefined20.$changes) {
                vUndefined20.$changes.setParent(v1307.ref, v1307.root, v1310);
              }
              if (p1758 instanceof f343) {
                p1758[v1311] = vUndefined20;
              } else if (p1758 instanceof vF28) {
                var v1317 = vUndefined22;
                p1758.$items.set(v1317, vUndefined20);
                p1758.$changes.allChanges.add(v1310);
              } else if (p1758 instanceof vF27) {
                p1758.setAt(v1310, vUndefined20);
              } else if (p1758 instanceof vF31) {
                var v1319 = p1758.add(vUndefined20);
                p1758.setIndex(v1310, v1319);
              } else if (p1758 instanceof vF32) {
                var v1319 = p1758.add(vUndefined20);
                if (v1319 !== false) {
                  p1758.setIndex(v1310, v1319);
                }
              }
            }
            if (vUndefined21 !== vUndefined20) {
              vA37.push({
                refId: vLN0221,
                op: v1309,
                field: v1311,
                dynamicIndex: vUndefined22,
                value: vUndefined20,
                previousValue: vUndefined21
              });
            }
          }
          this._triggerChanges(vA37);
          v1303.garbageCollectDeletedRefs();
          return vA37;
        };
        f343.prototype.encode = function (p1759 = false, p1760 = [], p1761 = false) {
          var v1320 = this.$changes;
          var v1321 = new WeakSet();
          var vA38 = [v1320];
          var vLN113 = 1;
          for (var vLN0222 = 0; vLN0222 < vLN113; vLN0222++) {
            var v1322 = vA38[vLN0222];
            var v1323 = v1322.ref;
            var v1324 = v1323 instanceof f343;
            v1322.ensureRefId();
            v1321.add(v1322);
            if (v1322 !== v1320 && (v1322.changed || p1759)) {
              f300(p1760, vLN255);
              f313(p1760, v1322.refId);
            }
            var v1325 = p1759 ? Array.from(v1322.allChanges) : Array.from(v1322.changes.values());
            for (var vLN0223 = 0, v1326 = v1325.length; vLN0223 < v1326; vLN0223++) {
              var v1327 = p1759 ? {
                op: p1387.OPERATION.ADD,
                index: v1325[vLN0223]
              } : v1325[vLN0223];
              var v1328 = v1327.index;
              var v1329 = v1324 ? v1323._definition.fieldsByIndex && v1323._definition.fieldsByIndex[v1328] : v1328;
              var v1330 = p1760.length;
              if (v1327.op !== p1387.OPERATION.TOUCH) {
                if (v1324) {
                  f300(p1760, v1328 | v1327.op);
                } else {
                  f300(p1760, v1327.op);
                  if (v1327.op === p1387.OPERATION.CLEAR) {
                    continue;
                  }
                  f313(p1760, v1328);
                }
              }
              if (!v1324 && (v1327.op & p1387.OPERATION.ADD) == p1387.OPERATION.ADD) {
                if (v1323 instanceof vF28) {
                  var v1331 = v1322.ref.$indexes.get(v1328);
                  f312(p1760, v1331);
                }
              }
              if (v1327.op === p1387.OPERATION.DELETE) {
                continue;
              }
              var v1332 = v1322.getType(v1328);
              var v1333 = v1322.getValue(v1328);
              if (v1333 && v1333.$changes && !v1321.has(v1333.$changes)) {
                vA38.push(v1333.$changes);
                v1333.$changes.ensureRefId();
                vLN113++;
              }
              if (v1327.op === p1387.OPERATION.TOUCH) {
                continue;
              }
              if (f343.is(v1332)) {
                f340(v1333, v1332, v1323, v1329);
                f313(p1760, v1333.$changes.refId);
                if ((v1327.op & p1387.OPERATION.ADD) === p1387.OPERATION.ADD) {
                  this.tryEncodeTypeId(p1760, v1332, v1333.constructor);
                }
              } else if (typeof v1332 === "string") {
                f341(v1332, p1760, v1333, v1323, v1329);
              } else {
                var vF2882 = f288(Object.keys(v1332)[0]);
                f340(v1323["_" + v1329], vF2882.constructor, v1323, v1329);
                f313(p1760, v1333.$changes.refId);
              }
              if (p1761) {
                v1322.cache(v1328, p1760.slice(v1330));
              }
            }
            if (!p1759 && !p1761) {
              v1322.discard();
            }
          }
          return p1760;
        };
        f343.prototype.encodeAll = function (p1762) {
          return this.encode(true, [], p1762);
        };
        f343.prototype.applyFilters = function (p1763, p1764 = false) {
          var vThis147 = this;
          var v1334 = new Set();
          var v1335 = vF33.get(p1763);
          var vA39 = [this.$changes];
          var vLN114 = 1;
          var vA40 = [];
          function f344(p1765) {
            var v1336 = vA39[p1765];
            if (v1334.has(v1336.refId)) {
              return "continue";
            }
            var v1337 = v1336.ref;
            var v1338 = v1337 instanceof f343;
            f300(vA40, vLN255);
            f313(vA40, v1336.refId);
            var v1339 = v1335.refIds.has(v1336);
            var v1340 = p1764 || !v1339;
            v1335.addRefId(v1336);
            var v1341 = v1335.containerIndexes.get(v1336);
            var v1342 = v1340 ? Array.from(v1336.allChanges) : Array.from(v1336.changes.values());
            if (!p1764 && v1338 && v1337._definition.indexesWithFilters) {
              var v1343 = v1337._definition.indexesWithFilters;
              v1343.forEach(function (p1766) {
                if (!v1341.has(p1766) && v1336.allChanges.has(p1766)) {
                  if (v1340) {
                    v1342.push(p1766);
                  } else {
                    v1342.push({
                      op: p1387.OPERATION.ADD,
                      index: p1766
                    });
                  }
                }
              });
            }
            for (var vLN0224 = 0, v1344 = v1342.length; vLN0224 < v1344; vLN0224++) {
              var v1345 = v1340 ? {
                op: p1387.OPERATION.ADD,
                index: v1342[vLN0224]
              } : v1342[vLN0224];
              if (v1345.op === p1387.OPERATION.CLEAR) {
                f300(vA40, v1345.op);
                continue;
              }
              var v1346 = v1345.index;
              if (v1345.op === p1387.OPERATION.DELETE) {
                if (v1338) {
                  f300(vA40, v1345.op | v1346);
                } else {
                  f300(vA40, v1345.op);
                  f313(vA40, v1346);
                }
                continue;
              }
              var v1347 = v1336.getValue(v1346);
              var v1348 = v1336.getType(v1346);
              if (v1338) {
                var v1349 = v1337._definition.filters && v1337._definition.filters[v1346];
                if (v1349 && !v1349.call(v1337, p1763, v1347, vThis147)) {
                  if (v1347 && v1347.$changes) {
                    v1334.add(v1347.$changes.refId);
                  }
                  continue;
                }
              } else {
                var v1350 = v1336.parent;
                var v1349 = v1336.getChildrenFilter();
                if (v1349 && !v1349.call(v1350, p1763, v1337.$indexes.get(v1346), v1347, vThis147)) {
                  if (v1347 && v1347.$changes) {
                    v1334.add(v1347.$changes.refId);
                  }
                  continue;
                }
              }
              if (v1347.$changes) {
                vA39.push(v1347.$changes);
                vLN114++;
              }
              if (v1345.op !== p1387.OPERATION.TOUCH) {
                if (v1345.op === p1387.OPERATION.ADD || v1338) {
                  vA40.push.apply(vA40, v1336.caches[v1346] ?? []);
                  v1341.add(v1346);
                } else if (v1341.has(v1346)) {
                  vA40.push.apply(vA40, v1336.caches[v1346] ?? []);
                } else {
                  v1341.add(v1346);
                  f300(vA40, p1387.OPERATION.ADD);
                  f313(vA40, v1346);
                  if (v1337 instanceof vF28) {
                    var v1351 = v1336.ref.$indexes.get(v1346);
                    f312(vA40, v1351);
                  }
                  if (v1347.$changes) {
                    f313(vA40, v1347.$changes.refId);
                  } else {
                    v1261[v1348](vA40, v1347);
                  }
                }
              } else if (v1347.$changes && !v1338) {
                f300(vA40, p1387.OPERATION.ADD);
                f313(vA40, v1346);
                if (v1337 instanceof vF28) {
                  var v1351 = v1336.ref.$indexes.get(v1346);
                  f312(vA40, v1351);
                }
                f313(vA40, v1347.$changes.refId);
              }
            }
          }
          for (var vLN0225 = 0; vLN0225 < vLN114; vLN0225++) {
            f344(vLN0225);
          }
          return vA40;
        };
        f343.prototype.clone = function () {
          var v1352 = new this.constructor();
          var v1353 = this._definition.schema;
          for (var v1354 in v1353) {
            if (typeof this[v1354] === "object" && typeof this[v1354]?.clone === "function") {
              v1352[v1354] = this[v1354].clone();
            } else {
              v1352[v1354] = this[v1354];
            }
          }
          return v1352;
        };
        f343.prototype.toJSON = function () {
          var v1355 = this._definition.schema;
          var v1356 = this._definition.deprecated;
          var vO70 = {};
          for (var v1357 in v1355) {
            if (!v1356[v1357] && this[v1357] !== null && typeof this[v1357] !== "undefined") {
              vO70[v1357] = typeof this[v1357].toJSON === "function" ? this[v1357].toJSON() : this["_" + v1357];
            }
          }
          return vO70;
        };
        f343.prototype.discardAllChanges = function () {
          this.$changes.discardAll();
        };
        f343.prototype.getByIndex = function (p1767) {
          return this[this._definition.fieldsByIndex[p1767]];
        };
        f343.prototype.deleteByIndex = function (p1768) {
          this[this._definition.fieldsByIndex[p1768]] = undefined;
        };
        f343.prototype.tryEncodeTypeId = function (p1769, p1770, p1771) {
          if (p1770._typeid !== p1771._typeid) {
            f300(p1769, vLN213);
            f313(p1769, p1771._typeid);
          }
        };
        f343.prototype.getSchemaType = function (p1772, p1773, p1774) {
          var v1358;
          if (p1772[p1773.offset] === vLN213) {
            p1773.offset++;
            v1358 = this.constructor._context.get(f330(p1772, p1773));
          }
          return v1358 || p1774;
        };
        f343.prototype.createTypeInstance = function (p1775) {
          var v1359 = new p1775();
          v1359.$changes.root = this.$changes.root;
          return v1359;
        };
        f343.prototype._triggerChanges = function (p1776) {
          var v1360;
          var v1361;
          var v1362;
          var v1363;
          var v1364;
          var v1365;
          var v1366;
          var v1367;
          var v1368 = new Set();
          var v1369 = this.$changes.root.refs;
          function f345(p1777) {
            var v1370 = p1776[p1777];
            var v1371 = v1370.refId;
            var v1372 = v1369.get(v1371);
            var v1373 = v1372.$callbacks;
            if ((v1370.op & p1387.OPERATION.DELETE) === p1387.OPERATION.DELETE && v1370.previousValue instanceof f343) {
              if ((v1360 = v1370.previousValue.$callbacks?.[p1387.OPERATION.DELETE]) === null || v1360 === undefined) {
                undefined;
              } else {
                v1360.forEach(function (p1778) {
                  return p1778();
                });
              }
            }
            if (!v1373) {
              return "continue";
            }
            if (v1372 instanceof f343) {
              if (!v1368.has(v1371)) {
                try {
                  if ((v1361 = v1373?.[p1387.OPERATION.REPLACE]) === null || v1361 === undefined) {
                    undefined;
                  } else {
                    v1361.forEach(function (p1779) {
                      return p1779();
                    });
                  }
                } catch (e61) {
                  f343.onError(e61);
                }
              }
              try {
                if (v1373.hasOwnProperty(v1370.field)) {
                  if ((v1362 = v1373[v1370.field]) === null || v1362 === undefined) {
                    undefined;
                  } else {
                    v1362.forEach(function (p1780) {
                      return p1780(v1370.value, v1370.previousValue);
                    });
                  }
                }
              } catch (e62) {
                f343.onError(e62);
              }
            } else {
              if (v1370.op === p1387.OPERATION.ADD && v1370.previousValue === undefined) {
                if ((v1363 = v1373[p1387.OPERATION.ADD]) === null || v1363 === undefined) {
                  undefined;
                } else {
                  v1363.forEach(function (p1781) {
                    return p1781(v1370.value, v1370.dynamicIndex ?? v1370.field);
                  });
                }
              } else if (v1370.op === p1387.OPERATION.DELETE) {
                if (v1370.previousValue !== undefined) {
                  if ((v1364 = v1373[p1387.OPERATION.DELETE]) === null || v1364 === undefined) {
                    undefined;
                  } else {
                    v1364.forEach(function (p1782) {
                      return p1782(v1370.previousValue, v1370.dynamicIndex ?? v1370.field);
                    });
                  }
                }
              } else if (v1370.op === p1387.OPERATION.DELETE_AND_ADD) {
                if (v1370.previousValue !== undefined) {
                  if ((v1365 = v1373[p1387.OPERATION.DELETE]) === null || v1365 === undefined) {
                    undefined;
                  } else {
                    v1365.forEach(function (p1783) {
                      return p1783(v1370.previousValue, v1370.dynamicIndex ?? v1370.field);
                    });
                  }
                }
                if ((v1366 = v1373[p1387.OPERATION.ADD]) === null || v1366 === undefined) {
                  undefined;
                } else {
                  v1366.forEach(function (p1784) {
                    return p1784(v1370.value, v1370.dynamicIndex ?? v1370.field);
                  });
                }
              }
              if (v1370.value !== v1370.previousValue) {
                if ((v1367 = v1373[p1387.OPERATION.REPLACE]) === null || v1367 === undefined) {
                  undefined;
                } else {
                  v1367.forEach(function (p1785) {
                    return p1785(v1370.value, v1370.dynamicIndex ?? v1370.field);
                  });
                }
              }
            }
            v1368.add(v1371);
          }
          for (var vLN0226 = 0; vLN0226 < p1776.length; vLN0226++) {
            f345(vLN0226);
          }
        };
        f343._definition = vF29.create();
        return f343;
      }();
      function f346(p1786) {
        var vA41 = [p1786.$changes];
        var vLN115 = 1;
        var vO71 = {};
        var vVO71 = vO71;
        function f347(p1787) {
          var v1374 = vA41[p1787];
          v1374.changes.forEach(function (p1788) {
            var v1375 = v1374.ref;
            var v1376 = p1788.index;
            var v1377 = v1375._definition ? v1375._definition.fieldsByIndex[v1376] : v1375.$indexes.get(v1376);
            vVO71[v1377] = v1374.getValue(v1376);
          });
        }
        for (var vLN0227 = 0; vLN0227 < vLN115; vLN0227++) {
          f347(vLN0227);
        }
        return vO71;
      }
      var vO72 = {
        context: new vF30()
      };
      var vF37 = function (p1789) {
        f274(f348, p1789);
        function f348() {
          return p1789 !== null && p1789.apply(this, arguments) || this;
        }
        f276([f292("string", vO72)], f348.prototype, "name", undefined);
        f276([f292("string", vO72)], f348.prototype, "type", undefined);
        f276([f292("number", vO72)], f348.prototype, "referencedType", undefined);
        return f348;
      }(vF36);
      var vF39 = function (p1790) {
        f274(f349, p1790);
        function f349() {
          var v1378 = p1790 !== null && p1790.apply(this, arguments) || this;
          v1378.fields = new vF27();
          return v1378;
        }
        f276([f292("number", vO72)], f349.prototype, "id", undefined);
        f276([f292([vF37], vO72)], f349.prototype, "fields", undefined);
        return f349;
      }(vF36);
      var vF40 = function (p1791) {
        f274(f350, p1791);
        function f350() {
          var v1379 = p1791 !== null && p1791.apply(this, arguments) || this;
          v1379.types = new vF27();
          return v1379;
        }
        f350.encode = function (p1792) {
          var v1380 = p1792.constructor;
          var v1381 = new f350();
          v1381.rootType = v1380._typeid;
          function f351(p1793, p1794) {
            for (var v1382 in p1794) {
              var v1383 = new vF37();
              v1383.name = v1382;
              var vUndefined24 = undefined;
              if (typeof p1794[v1382] === "string") {
                vUndefined24 = p1794[v1382];
              } else {
                var v1384 = p1794[v1382];
                var vUndefined25 = undefined;
                if (vF36.is(v1384)) {
                  vUndefined24 = "ref";
                  vUndefined25 = p1794[v1382];
                } else {
                  vUndefined24 = Object.keys(v1384)[0];
                  if (typeof v1384[vUndefined24] === "string") {
                    vUndefined24 += ":" + v1384[vUndefined24];
                  } else {
                    vUndefined25 = v1384[vUndefined24];
                  }
                }
                v1383.referencedType = vUndefined25 ? vUndefined25._typeid : -1;
              }
              v1383.type = vUndefined24;
              p1793.fields.push(v1383);
            }
            v1381.types.push(p1793);
          }
          var v1385 = v1380._context?.types;
          for (var v1386 in v1385) {
            var v1387 = new vF39();
            v1387.id = Number(v1386);
            f351(v1387, v1385[v1386]._definition.schema);
          }
          return v1381.encodeAll();
        };
        f350.decode = function (p1795, p1796) {
          var v1388 = new vF30();
          var v1389 = new f350();
          v1389.decode(p1795, p1796);
          var v1390 = v1389.types.reduce(function (p1797, p1798) {
            var vF42 = function (p1799) {
              f274(f352, p1799);
              function f352() {
                return p1799 !== null && p1799.apply(this, arguments) || this;
              }
              return f352;
            }(vF36);
            var v1391 = p1798.id;
            p1797[v1391] = vF42;
            v1388.add(vF42, v1391);
            return p1797;
          }, {});
          v1389.types.forEach(function (p1800) {
            var v1392 = v1390[p1800.id];
            p1800.fields.forEach(function (p1801) {
              var v1393;
              if (p1801.referencedType !== undefined) {
                var v1394 = p1801.type;
                var v1395 = v1390[p1801.referencedType];
                if (!v1395) {
                  var v1396 = p1801.type.split(":");
                  v1394 = v1396[0];
                  v1395 = v1396[1];
                }
                if (v1394 === "ref") {
                  f292(v1395, {
                    context: v1388
                  })(v1392.prototype, p1801.name);
                } else {
                  f292((v1393 = {}, v1393[v1394] = v1395, v1393), {
                    context: v1388
                  })(v1392.prototype, p1801.name);
                }
              } else {
                f292(p1801.type, {
                  context: v1388
                })(v1392.prototype, p1801.name);
              }
            });
          });
          var v1397 = v1390[v1389.rootType];
          var v1398 = new v1397();
          for (var v1399 in v1397._definition.schema) {
            var v1400 = v1397._definition.schema[v1399];
            if (typeof v1400 !== "string") {
              v1398[v1399] = typeof v1400 === "function" ? new v1400() : new (f288(Object.keys(v1400)[0]).constructor)();
            }
          }
          return v1398;
        };
        f276([f292([vF39], vO72)], f350.prototype, "types", undefined);
        f276([f292("number", vO72)], f350.prototype, "rootType", undefined);
        return f350;
      }(vF36);
      f287("map", {
        constructor: vF28
      });
      f287("array", {
        constructor: vF27
      });
      f287("set", {
        constructor: vF32
      });
      f287("collection", {
        constructor: vF31
      });
      p1387.ArraySchema = vF27;
      p1387.CollectionSchema = vF31;
      p1387.Context = vF30;
      p1387.MapSchema = vF28;
      p1387.Reflection = vF40;
      p1387.ReflectionField = vF37;
      p1387.ReflectionType = vF39;
      p1387.Schema = vF36;
      p1387.SchemaDefinition = vF29;
      p1387.SetSchema = vF32;
      p1387.decode = v1274;
      p1387.defineTypes = f296;
      p1387.deprecated = f295;
      p1387.dumpChanges = f346;
      p1387.encode = v1261;
      p1387.filter = f293;
      p1387.filterChildren = f294;
      p1387.hasFilter = f290;
      p1387.registerType = f287;
      p1387.type = f292;
    });
  }, function (p1802, p1803, p1804) {
    'use strict';

    var v1401 = this && this.__createBinding || (Object.create ? function (p1805, p1806, p1807, p1808 = p1807) {
      var v1402 = Object.getOwnPropertyDescriptor(p1806, p1807);
      if (!v1402 || ("get" in v1402 ? !p1806.__esModule : v1402.writable || v1402.configurable)) {
        v1402 = {
          enumerable: true,
          get: function () {
            return p1806[p1807];
          }
        };
      }
      Object.defineProperty(p1805, p1808, v1402);
    } : function (p1809, p1810, p1811, p1812 = p1811) {
      p1809[p1812] = p1810[p1811];
    });
    var v1403 = this && this.__setModuleDefault || (Object.create ? function (p1813, p1814) {
      Object.defineProperty(p1813, "default", {
        enumerable: true,
        value: p1814
      });
    } : function (p1815, p1816) {
      p1815.default = p1816;
    });
    var v1404 = this && this.__importStar || function (p1817) {
      if (p1817 && p1817.__esModule) {
        return p1817;
      }
      var vO73 = {};
      if (p1817 != null) {
        for (var v1405 in p1817) {
          if (v1405 !== "default" && Object.prototype.hasOwnProperty.call(p1817, v1405)) {
            v1401(vO73, p1817, v1405);
          }
        }
      }
      v1403(vO73, p1817);
      return vO73;
    };
    Object.defineProperty(p1803, "__esModule", {
      value: true
    });
    p1803.HTTP = undefined;
    const vP1804 = p1804(5);
    const vV1404 = v1404(p1804(17));
    class C8 {
      constructor(p1818, p1819 = {}) {
        this.client = p1818;
        this.headers = p1819;
      }
      get(p1820, p1821 = {}) {
        return this.request("get", p1820, p1821);
      }
      post(p1822, p1823 = {}) {
        return this.request("post", p1822, p1823);
      }
      del(p1824, p1825 = {}) {
        return this.request("del", p1824, p1825);
      }
      put(p1826, p1827 = {}) {
        return this.request("put", p1826, p1827);
      }
      request(p1828, p1829, p1830 = {}) {
        return vV1404[p1828](this.client.getHttpEndpoint(p1829), this.getOptions(p1830)).catch(p1831 => {
          const v1406 = p1831.statusCode;
          const v1407 = p1831.data?.error || p1831.statusMessage || p1831.message;
          if (!v1406 && !v1407) {
            throw p1831;
          }
          throw new vP1804.ServerError(v1406, v1407);
        });
      }
      getOptions(p1832) {
        p1832.headers = Object.assign({}, this.headers, p1832.headers);
        if (this.authToken) {
          p1832.headers.Authorization = "Bearer " + this.authToken;
        }
        if (typeof cc !== "undefined" && cc.sys && cc.sys.isNative) {} else {
          p1832.withCredentials = true;
        }
        return p1832;
      }
    }
    p1803.HTTP = C8;
  }, (p1833, p1834, p1835) => {
    'use strict';

    p1835.r(p1834);
    p1835.d(p1834, {
      del: () => v1417,
      get: () => v1414,
      patch: () => v1416,
      post: () => v1415,
      put: () => v1418,
      send: () => f354
    });
    function f353(p1836, p1837) {
      p1837.headers = p1836.headers || {};
      p1837.statusMessage = p1836.statusText;
      p1837.statusCode = p1836.status;
      p1837.data = p1836.response;
    }
    function f354(p1838, p1839, p1840) {
      return new Promise(function (p1841, p1842) {
        p1840 = p1840 || {};
        var v1408 = new XMLHttpRequest();
        var v1409;
        var v1410;
        var v1411;
        var v1412 = p1840.body;
        var v1413 = p1840.headers || {};
        if (p1840.timeout) {
          v1408.timeout = p1840.timeout;
        }
        v1408.ontimeout = v1408.onerror = function (p1843) {
          p1843.timeout = p1843.type == "timeout";
          p1842(p1843);
        };
        v1408.open(p1838, p1839.href || p1839);
        v1408.onload = function () {
          v1411 = v1408.getAllResponseHeaders().trim().split(/[\r\n]+/);
          f353(v1408, v1408);
          while (v1410 = v1411.shift()) {
            v1410 = v1410.split(": ");
            v1408.headers[v1410.shift().toLowerCase()] = v1410.join(": ");
          }
          v1410 = v1408.headers["content-type"];
          if (v1410 && !!~v1410.indexOf("application/json")) {
            try {
              v1408.data = JSON.parse(v1408.data, p1840.reviver);
            } catch (e63) {
              f353(v1408, e63);
              return p1842(e63);
            }
          }
          (v1408.status >= 400 ? p1842 : p1841)(v1408);
        };
        if (typeof FormData !== "undefined" && v1412 instanceof FormData) {} else if (v1412 && typeof v1412 == "object") {
          v1413["content-type"] = "application/json";
          v1412 = JSON.stringify(v1412);
        }
        v1408.withCredentials = !!p1840.withCredentials;
        for (v1409 in v1413) {
          v1408.setRequestHeader(v1409, v1413[v1409]);
        }
        v1408.send(v1412);
      });
    }
    var v1414 = f354.bind(f354, "GET");
    var v1415 = f354.bind(f354, "POST");
    var v1416 = f354.bind(f354, "PATCH");
    var v1417 = f354.bind(f354, "DELETE");
    var v1418 = f354.bind(f354, "PUT");
  }, function (p1844, p1845, p1846) {
    'use strict';

    var v1419 = this && this.__awaiter || function (p1847, p1848, p1849, p1850) {
      function f355(p1851) {
        if (p1851 instanceof p1849) {
          return p1851;
        } else {
          return new p1849(function (p1852) {
            p1852(p1851);
          });
        }
      }
      return new (p1849 ||= Promise)(function (p1853, p1854) {
        function f356(p1855) {
          try {
            f358(p1850.next(p1855));
          } catch (e64) {
            p1854(e64);
          }
        }
        function f357(p1856) {
          try {
            f358(p1850.throw(p1856));
          } catch (e65) {
            p1854(e65);
          }
        }
        function f358(p1857) {
          if (p1857.done) {
            p1853(p1857.value);
          } else {
            f355(p1857.value).then(f356, f357);
          }
        }
        f358((p1850 = p1850.apply(p1847, p1848 || [])).next());
      });
    };
    var v1420 = this && this.__classPrivateFieldGet || function (p1858, p1859, p1860, p1861) {
      if (p1860 === "a" && !p1861) {
        throw new TypeError("Private accessor was defined without a getter");
      }
      if (typeof p1859 === "function" ? p1858 !== p1859 || !p1861 : !p1859.has(p1858)) {
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      }
      if (p1860 === "m") {
        return p1861;
      } else if (p1860 === "a") {
        return p1861.call(p1858);
      } else if (p1861) {
        return p1861.value;
      } else {
        return p1859.get(p1858);
      }
    };
    var v1421 = this && this.__classPrivateFieldSet || function (p1862, p1863, p1864, p1865, p1866) {
      if (p1865 === "m") {
        throw new TypeError("Private method is not writable");
      }
      if (p1865 === "a" && !p1866) {
        throw new TypeError("Private accessor was defined without a setter");
      }
      if (typeof p1863 === "function" ? p1862 !== p1863 || !p1866 : !p1863.has(p1862)) {
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      }
      if (p1865 === "a") {
        p1866.call(p1862, p1864);
      } else if (p1866) {
        p1866.value = p1864;
      } else {
        p1863.set(p1862, p1864);
      }
      return p1864;
    };
    var v1422;
    var v1423;
    var v1424;
    var v1425;
    Object.defineProperty(p1845, "__esModule", {
      value: true
    });
    p1845.Auth = undefined;
    const vP1846 = p1846(19);
    const vP18462 = p1846(13);
    class C9 {
      constructor(p1867) {
        this.http = p1867;
        this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        };
        v1422.set(this, false);
        v1423.set(this, undefined);
        v1424.set(this, undefined);
        v1425.set(this, (0, vP18462.createNanoEvents)());
        (0, vP1846.getItem)(this.settings.key, p1868 => this.token = p1868);
      }
      set token(p1869) {
        this.http.authToken = p1869;
      }
      get token() {
        return this.http.authToken;
      }
      onChange(p1870) {
        const v1426 = v1420(this, v1425, "f").on("change", p1870);
        if (!v1420(this, v1422, "f")) {
          v1421(this, v1423, new Promise((p1871, p1872) => {
            this.getUserData().then(p1873 => {
              this.emitChange(Object.assign(Object.assign({}, p1873), {
                token: this.token
              }));
            }).catch(p1874 => {
              this.emitChange({
                user: null,
                token: undefined
              });
            }).finally(() => {
              p1871();
            });
          }), "f");
        }
        v1421(this, v1422, true, "f");
        return v1426;
      }
      getUserData() {
        return v1419(this, undefined, undefined, function* () {
          if (this.token) {
            return (yield this.http.get(this.settings.path + "/userdata")).data;
          } else {
            throw new Error("missing auth.token");
          }
        });
      }
      registerWithEmailAndPassword(p1875, p1876, p1877) {
        return v1419(this, undefined, undefined, function* () {
          var v1427 = (yield this.http.post(this.settings.path + "/register", {
            body: {
              email: p1875,
              password: p1876,
              options: p1877
            }
          })).data;
          this.emitChange(v1427);
          return v1427;
        });
      }
      signInWithEmailAndPassword(p1878, p1879) {
        return v1419(this, undefined, undefined, function* () {
          var v1428 = (yield this.http.post(this.settings.path + "/login", {
            body: {
              email: p1878,
              password: p1879
            }
          })).data;
          this.emitChange(v1428);
          return v1428;
        });
      }
      signInAnonymously(p1880) {
        return v1419(this, undefined, undefined, function* () {
          var v1429 = (yield this.http.post(this.settings.path + "/anonymous", {
            body: {
              options: p1880
            }
          })).data;
          this.emitChange(v1429);
          return v1429;
        });
      }
      sendPasswordResetEmail(p1881) {
        return v1419(this, undefined, undefined, function* () {
          return (yield this.http.post(this.settings.path + "/forgot-password", {
            body: {
              email: p1881
            }
          })).data;
        });
      }
      signInWithProvider(p1882, p1883 = {}) {
        return v1419(this, undefined, undefined, function* () {
          return new Promise((p1884, p1885) => {
            var v1430 = p1883.width || 480;
            var v1431 = p1883.height || 768;
            var v1432 = this.token ? "?token=" + this.token : "";
            var v1433 = "Login with " + (p1882[0].toUpperCase() + p1882.substring(1));
            var v1434 = this.http.client.getHttpEndpoint((p1883.prefix || this.settings.path + "/provider") + "/" + p1882 + v1432);
            var v1435 = screen.width / 2 - v1430 / 2;
            var v1436 = screen.height / 2 - v1431 / 2;
            v1421(this, v1424, window.open(v1434, v1433, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + v1430 + ", height=" + v1431 + ", top=" + v1436 + ", left=" + v1435), "f");
            var vF43 = p1886 => {
              if (p1886.data.user === undefined && p1886.data.token === undefined) {
                return;
              }
              clearInterval(vSetInterval2);
              v1420(this, v1424, "f").close();
              v1421(this, v1424, undefined, "f");
              window.removeEventListener("message", vF43);
              if (p1886.data.error !== undefined) {
                p1885(p1886.data.error);
              } else {
                p1884(p1886.data);
                this.emitChange(p1886.data);
              }
            };
            var vSetInterval2 = setInterval(() => {
              if (!v1420(this, v1424, "f") || v1420(this, v1424, "f").closed) {
                v1421(this, v1424, undefined, "f");
                p1885("cancelled");
                window.removeEventListener("message", vF43);
              }
            }, 200);
            window.addEventListener("message", vF43);
          });
        });
      }
      signOut() {
        return v1419(this, undefined, undefined, function* () {
          this.emitChange({
            user: null,
            token: null
          });
        });
      }
      emitChange(p1887) {
        if (p1887.token !== undefined) {
          this.token = p1887.token;
          if (p1887.token === null) {
            (0, vP1846.removeItem)(this.settings.key);
          } else {
            (0, vP1846.setItem)(this.settings.key, p1887.token);
          }
        }
        v1420(this, v1425, "f").emit("change", p1887);
      }
    }
    p1845.Auth = C9;
    v1422 = new WeakMap();
    v1423 = new WeakMap();
    v1424 = new WeakMap();
    v1425 = new WeakMap();
  }, (p1888, p1889) => {
    'use strict';

    Object.defineProperty(p1889, "__esModule", {
      value: true
    });
    p1889.getItem = p1889.removeItem = p1889.setItem = undefined;
    let v1437;
    function f359() {
      if (!v1437) {
        try {
          v1437 = typeof cc !== "undefined" && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage;
        } catch (e66) {}
      }
      if (!v1437) {
        v1437 = {
          cache: {},
          setItem: function (p1890, p1891) {
            this.cache[p1890] = p1891;
          },
          getItem: function (p1892) {
            this.cache[p1892];
          },
          removeItem: function (p1893) {
            delete this.cache[p1893];
          }
        };
      }
      return v1437;
    }
    function f360(p1894, p1895) {
      f359().setItem(p1894, p1895);
    }
    p1889.setItem = f360;
    function f361(p1896) {
      f359().removeItem(p1896);
    }
    p1889.removeItem = f361;
    function f362(p1897, p1898) {
      const v1438 = f359().getItem(p1897);
      if (typeof Promise === "undefined" || !(v1438 instanceof Promise)) {
        p1898(v1438);
      } else {
        v1438.then(p1899 => p1898(p1899));
      }
    }
    p1889.getItem = f362;
  }, (p1900, p1901) => {
    'use strict';

    Object.defineProperty(p1901, "__esModule", {
      value: true
    });
    p1901.discordURLBuilder = undefined;
    function f363(p1902) {
      const v1439 = window?.location?.hostname || "localhost";
      const v1440 = p1902.hostname.split(".");
      const v1441 = !p1902.hostname.includes("trycloudflare.com") && !p1902.hostname.includes("discordsays.com") && v1440.length > 2 ? "/" + v1440[0] : "";
      if (p1902.pathname.startsWith("/.proxy")) {
        return p1902.protocol + "//" + v1439 + v1441 + p1902.pathname + p1902.search;
      } else {
        return p1902.protocol + "//" + v1439 + "/.proxy/colyseus" + v1441 + p1902.pathname + p1902.search;
      }
    }
    p1901.discordURLBuilder = f363;
  }, (p1903, p1904, p1905) => {
    'use strict';

    Object.defineProperty(p1904, "__esModule", {
      value: true
    });
    p1904.SchemaSerializer = undefined;
    const vP1905 = p1905(15);
    class C10 {
      setState(p1906) {
        return this.state.decode(p1906);
      }
      getState() {
        return this.state;
      }
      patch(p1907) {
        return this.state.decode(p1907);
      }
      teardown() {
        var v1442;
        if ((v1442 = this.state?.$changes) === null || v1442 === undefined) {
          undefined;
        } else {
          v1442.root.clearRefs();
        }
      }
      handshake(p1908, p1909) {
        if (this.state) {
          const v1443 = new vP1905.Reflection();
          v1443.decode(p1908, p1909);
        } else {
          this.state = vP1905.Reflection.decode(p1908, p1909);
        }
      }
    }
    p1904.SchemaSerializer = C10;
  }, (p1910, p1911) => {
    'use strict';

    Object.defineProperty(p1911, "__esModule", {
      value: true
    });
    p1911.NoneSerializer = undefined;
    class C11 {
      setState(p1912) {}
      getState() {
        return null;
      }
      patch(p1913) {}
      teardown() {}
      handshake(p1914) {}
    }
    p1911.NoneSerializer = C11;
  }];
  var vO74 = {};
  function f364(p1915) {
    var v1444 = vO74[p1915];
    if (v1444 !== undefined) {
      return v1444.exports;
    }
    var v1445 = vO74[p1915] = {
      id: p1915,
      loaded: false,
      exports: {}
    };
    vA[p1915].call(v1445.exports, v1445, v1445.exports, f364);
    v1445.loaded = true;
    return v1445.exports;
  }
  (() => {
    f364.amdO = {};
  })();
  (() => {
    f364.n = p1916 => {
      var v1446 = p1916 && p1916.__esModule ? () => p1916.default : () => p1916;
      f364.d(v1446, {
        a: v1446
      });
      return v1446;
    };
  })();
  (() => {
    f364.d = (p1917, p1918) => {
      for (var v1447 in p1918) {
        if (f364.o(p1918, v1447) && !f364.o(p1917, v1447)) {
          Object.defineProperty(p1917, v1447, {
            enumerable: true,
            get: p1918[v1447]
          });
        }
      }
    };
  })();
  (() => {
    f364.g = function () {
      if (typeof globalThis === "object") {
        return globalThis;
      }
      try {
        return this || new Function("return this")();
      } catch (e67) {
        if (typeof window === "object") {
          return window;
        }
      }
    }();
  })();
  (() => {
    f364.hmd = p1919 => {
      p1919 = Object.create(p1919);
      if (!p1919.children) {
        p1919.children = [];
      }
      Object.defineProperty(p1919, "exports", {
        enumerable: true,
        set: () => {
          throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + p1919.id);
        }
      });
      return p1919;
    };
  })();
  (() => {
    f364.o = (p1920, p1921) => Object.prototype.hasOwnProperty.call(p1920, p1921);
  })();
  (() => {
    f364.r = p1922 => {
      if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        Object.defineProperty(p1922, Symbol.toStringTag, {
          value: "Module"
        });
      }
      Object.defineProperty(p1922, "__esModule", {
        value: true
      });
    };
  })();
  var vF364 = f364(0);
})();
$(document).ready(function () {
  function f365() {
    const v1448 = window.fetch;
    window.fetch = function (p1923, p1924) {
      if (p1923.includes("/load-page") && p1924 && p1924.method === "POST") {
        console.log("اعتراض طلب صفحة السيرفرات الأصلية");
        return $.get("https://xo2xo2.github.io/1/game.html").then(function (p1925) {
          return {
            text: function () {
              return Promise.resolve(p1925);
            }
          };
        }).catch(function (p1926) {
          console.error("خطأ في تحميل الصفحة المخصصة:", p1926);
          return v1448(p1923, p1924);
        });
      }
      return v1448(p1923, p1924);
    };
    console.log("تم تعديل وظيفة fetch لاستبدال صفحة السيرفرات");
  }
  f365();
});
(function () {
  const v1449 = window.fetch;
  window.fetch = function (..._0x1d81c1) {
    const v1450 = _0x1d81c1[0];
    console.log("🌐 طلب fetch:", v1450);
    return v1449.apply(this, _0x1d81c1).then(p1927 => {
      console.log("📥 استجابة من:", v1450);
      if (v1450.includes("/extension/set-worm-world") || v1450.includes("/set-worm-world")) {
        console.log("🎯 اعتراض set-worm-world");
        const v1451 = "<style>\n\n  .news-box-wormworld {\n\n    background-color: #ffffff;\n\n    padding: 10px;\n\n    border: 2px solid #ff0000;\n\n    border-radius: 5px;\n\n    margin-bottom: 10px;\n\n    width: 100%;\n\n    height: 86%;\n\n    position: relative;\n\n    z-index: 1;\n\n    overflow-y: scroll;\n\n  }\n\n\n\n  .news-box-wormworld .news-content {\n\n    width: 100%;\n\n    height: 85%;\n\n    overflow-y: auto;\n\n    padding: 10px;\n\n    border: 1px solid #eb0000;\n\n    box-sizing: border-box;\n\n  }\n\n\n\n  .news-box-wormworld .news-button {\n\n    position: absolute;\n\n    bottom: 20px;\n\n    display: flex;\n\n    align-items: center;\n\n    gap: 5px;\n\n    width: 100%;\n\n  }\n\n\n\n  .news-box-wormworld .close-button {\n\n    position: absolute;\n\n    right: 33px;\n\n    background-color: #f44336;\n\n    color: white;\n\n    border: none;\n\n    padding: 5px 10px;\n\n    cursor: pointer;\n\n    font-size: 12px;\n\n    top: -24px;\n\n    width: 100px;\n\n    height: 50px;\n\n  }\n\n\n\n  #idwormworld a {\n\n    color: #fff;\n\n  }\n\n\n\n  .wwc-joystick div {\n\n    min-width: 100px;\n\n    display: inline-block;\n\n  }\n\n\n\n  @keyframes mmwwcGlow {\n    0%, 100% {\n      box-shadow: 0 0 8px 2px rgba(0, 200, 255, 0.5), 0 0 15px 4px rgba(0, 200, 255, 0.3);\n    }\n    50% {\n      box-shadow: 0 0 12px 3px rgba(0, 200, 255, 0.7), 0 0 20px 6px rgba(0, 200, 255, 0.5);\n    }\n  }\n\n  #game-wrap #game-cont #stretch-box #main-menu-view .line-bottom #mm-wwc {\n\n    background: #00ccff;\n\n    color: #fff;\n\n    overflow: hidden;\n\n    height: 50px;\n\n    line-height: 50px;\n\n    font-size: 20px;\n\n    padding: 0 10px;\n\n    box-sizing: border-box;\n\n    border-radius: 5px;\n\n    border: 0;\n\n    outline: 0;\n\n    box-shadow: 0 0 8px 2px rgba(0, 200, 255, 0.5), 0 0 15px 4px rgba(0, 200, 255, 0.3);\n\n    text-align: center;\n\n    text-shadow: 0 0 3px rgba(0, 200, 255, 0.5);\n\n    cursor: pointer;\n\n    transition: all 0.3s ease;\n    animation: mmwwcGlow 2s ease-in-out infinite;\n\n    min-width: 120px;\n\n    display: inline-block;\n\n    margin: 0 3px;\n\n  }\n\n\n\n  .group-tab-button {\n\n    display: flex;\n\n    margin-top: 7px;\n\n  }\n\n\n\n  .tab-button {\n\n    cursor: pointer;\n\n    padding: 5px 15px;\n\n    background-color: #eee;\n\n    border: 1px solid #ccc;\n\n    border-radius: 5px 5px 0 0;\n\n  }\n\n\n\n  .tab-button:hover {\n\n    background-color: #000;\n\n    color: #fff;\n\n  }\n\n\n\n  .tab-button.active {\n\n    background-color: #fff;\n\n    color: #ff0000;\n\n  }\n\n\n\n  .tab-content {\n\n    display: none;\n\n    padding: 5px 10px 0 10px;\n\n    border-radius: 0 0 5px 5px;\n\n  }\n\n\n\n  .active-tab {\n\n    display: block;\n\n  }\n\n\n\n  .sub-title {\n\n    font-size: 14px;\n\n    font-weight: bold;\n\n    display: block;\n\n    color: rgb(0, 0, 0);\n\n    border-bottom: 1px solid;\n\n    margin: 10px 0;\n\n  }\n\n\n\n  #idReplaceSkin button {\n\n    font-size: small;\n\n    padding: 5px 15px;\n\n    z-index: 1;\n\n    position: absolute;\n\n    background-color: transparent;\n\n    color: #FFF;\n\n    border: 1px solid #ffbb00;\n\n    border-radius: 15px;\n\n  }\n\n<style>\n\n\n  #idReplaceSkin button:hover {\n\n    background-color: #ffbb00;\n\n    color: #000;\n\n    border: 1px solid #cfcfcf;\n\n  }\n\n</style>\n\n\n\n<div style=\"position: relative; padding: 10px; background-color: #FFF; border-radius: 8px;\">\n\n  <h2 style=\"text-align: center; color: #0a0a0a; margin: 0 0 12px 0; font-size: 18px; font-weight: bold; text-shadow: 0 0 8px rgba(0, 0, 0, 0.63);\">WormXo </h2>\n\n  <button style=\"background: linear-gradient(135deg, #ff4444, #cc0000); color: #fff; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-weight: bold; box-shadow: 0 1px 3px rgba(0,0,0,0.2); position: absolute; top: 8px; right: 8px; font-size: 12px;\" id=\"mm-wwc-close\">\n\n    ✕ CLOSE\n\n  </button>\n\n  <div style=\"margin-bottom: 10px; background: white; padding: 8px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); clear: both; margin-top: 5px;\">\n\n    <label style=\"font-weight: bold; color: #333; font-size: 12px; display: block; margin-bottom: 4px;\">📋 ID:</label>\n\n    <div style=\"display: flex; gap: 6px; align-items: center;\">\n\n      <input type=\"text\" value=\"" + bbs.userId + "\" id=\"wormate_id\" readonly style=\"flex: 1; padding: 5px; border: 1px solid #000000; border-radius: 4px; background: #f0f8ff; font-family: monospace; font-size: 11px;\" />\n\n      <button onclick=\"navigator.clipboard.writeText('" + bbs.userId + "')\" style=\"background: #4CAF50; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-weight: bold; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.97); font-size: 11px;\">COPY</button>\n\n    </div>\n\n  </div>\n\n  \n\n    \n\n      <form name=\"formSkin\" method=\"POST\" enctype=\"multipart/form-data\" style=\"background: white; padding: 8px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 10px;\">\n\n        <label style=\"font-weight: bold; color: #333; font-size: 12px; display: block; margin-bottom: 4px;\">File:</label>\n\n        <input id=\"fileSkin\" type=\"file\" accept=\"application/json\" style=\"padding: 5px; border: 1px solid #000000; border-radius: 4px; width: 100%; box-sizing: border-box; font-size: 11px;\" />\n\n      </form>\n\n      \n        <div class=\"page-set-worm-world\">\n\n          <div class=\"group-tab-button\">\n\n            <div id=\"tab_b1\" class=\"tab-button active\" onclick=\"changeTab(0)\">\n\n              SET\n\n            </div>\n\n            <div id=\"tab_b3\" class=\"tab-button\" onclick=\"changeTab(2)\">Account</div>\n\n            <div id=\"tab_b4\" class=\"tab-button\" onclick=\"changeTab(3)\">HELP</div>\n\n            <div id=\"tab_b5\" class=\"tab-button\" onclick=\"changeTab(4)\">CUSTOM</div>\n\n            <div id=\"tab_b6\" class=\"tab-button\" onclick=\"changeTab(5)\">SET ZOOM</div>\n\n            <div id=\"tab_b7\" class=\"tab-button\" onclick=\"changeTab(6)\">SKIN SWAP</div>\n\n            <div id=\"tab_b8\" class=\"tab-button\" onclick=\"changeTab(7)\">JOYSTICK</div>\n\n          </div>\n\n\n\n          <div id=\"tab1\" class=\"tab-content active-tab\">\n\n            \n\n              <div style=\"display: flex\">\n\n    <div style=\"width: 33%\">\n\n        <label>SAVE Kill:</label>\n\n        <input type=\"checkbox\" id=\"saveGame\" />\n\n    </div>\n\n    <div style=\"width: 33%\">\n\n        <label>Background:</label>\n\n        <select id=\"backgroundArena\"></select>\n    </div>\n\n\n\n    <div style=\"width: 34%\">\n\n        <label>Replace SKIN:</label>\n\n        <input style=\"width: 60px\" type=\"text\" name=\"inputReplaceSkin\" id=\"inputReplaceSkin\" value=\"35\" maxlength=\"4\"\n\n            onchange=\"setIdReplaceSkin(this)\" />\n\n    </div>\n\n</div>\n\n<div style=\"display: grid;\n\n          grid-template-columns: repeat(3, 1fr);\n\n          grid-template-rows: 1fr;\n\n          grid-column-gap: 0px;\n\n          grid-row-gap: 0px;\n\n          margin-top: 10px;\">\n\n    <div>\n\n        <label>TOP HS (\"9\")</label>\n\n        <input type=\"checkbox\" id=\"showTophs\" />\n\n    </div>\n\n    <div>\n\n        <label>Record HS (\"0\")</label>\n\n        <input type=\"checkbox\" id=\"showRechs\" />\n\n    </div>\n\n    <div>\n\n        <label>3 TOP SCORE</label>\n\n        <input type=\"checkbox\" id=\"onlytop\" />\n\n    </div>\n\n</div>\n\n            <div class=\"setting-item\" style=\"text-align: right;\">\n\n              <span class=\"setting-label\"><i class=\"fas fa-desktop\" style=\"color: #ffbb00;\"></i> :</span>\n\n              \n            </div>\n\n<div style=\"margin-bottom: 5px\">\n\n    <strong class=\"sub-title\">Joystick Settings</strong>\n\n    <div class=\"wwc-joystick\">\n\n        <div>\n\n            <label style=\"display: block\">Active</label>\n\n            <input type=\"checkbox\" id=\"joystick_checked\" onclick=\"setconfigjoystick_checked(this)\" />\n\n        </div>\n\n        <div>\n\n            <label style=\"display: block\">Color</label>\n\n            <select id=\"joystick_color\" onchange=\"setconfigjoystick_color(this)\">\n\n                <option value=\"red\">RED</option>\n\n                <option value=\"blue\">BLUE</option>\n\n                <option value=\"white\">WHITE</option>\n\n                <option value=\"black\">Black</option>\n\n            </select>\n\n        </div>\n\n        <div>\n\n            <label style=\"display: block\">Mode</label>\n\n            <select id=\"joystick_mode\" onchange=\"setconfigjoystick_mode(this)\">\n\n                <option value=\"dynamic\">Dynamic</option>\n\n                <option value=\"static\">Static</option>\n\n            </select>\n\n        </div>\n\n        <div>\n\n            <label style=\"display: block\">Position</label>\n\n            <select id=\"joystick_position\" onchange=\"setconfigjoystick_position(this)\">\n\n                <option value=\"R\">Right</option>\n\n                <option value=\"L\">Left</option>\n\n            </select>\n\n        </div>\n\n        <div>\n\n            <label style=\"display: block; margin-top: 10px;\">Size</label>\n\n            <select id=\"joystick_size\" onchange=\"setconfigjoystick_size(this)\">\n\n                <option value=\"110\">110</option>\n\n                <option value=\"100\">100</option>\n\n                <option value=\"90\">90</option>\n\n                <option value=\"80\">80</option>\n\n                <option value=\"75\">75</option>\n\n                <option value=\"70\">70</option>\n\n            </select>\n\n        </div>\n\n    </div>\n\n</div>\n\n<strong class=\"sub-title\">Plus</strong>\n\n<div style=\"\n\n          display: grid;\n\n          grid-template-columns: repeat(4, 1fr);\n\n          grid-template-rows: 1fr;\n\n          grid-column-gap: 0px;\n\n          grid-row-gap: 0px;\n\n          margin-top: 10px;\n\n        \">\n\n    <div>\n\n        <label>Bad Language</label>\n\n        <input type=\"checkbox\" id=\"activeBadLang\" />\n\n    </div>\n\n    <div>\n\n        <label>SOUNDS:</label>\n\n        <input type=\"checkbox\" id=\"activeSounds\" />\n\n    </div>\n\n</div>\n\n                \n\n          </div>\n\n          <div id=\"tab2\" class=\"tab-content\">\n\n            em construção\n\n          </div>\n\n          <div id=\"tab3\" class=\"tab-content\">\n\n            <style>\n\n  .tabLabel {\n\n    display: block;\n\n    font-size: 12px;\n\n  }\n\n</style>\n\n<div style=\"position: relative; padding: 30px; background: linear-gradient(to bottom, #00f0ff, #c285ff); border-radius: 20px; width: 400px; box-shadow: 0 0 20px rgba(0, 255, 255, 0.3); color: #fff;\">\n\n  <div style=\"text-align: center;\">\n\n    <span style=\"float: right; cursor: pointer; font-size: 24px; font-weight: bold; color: #fff;\" id=\"mm-wwc-close\">&times;</span>\n\n    <h2 style=\"margin: 0 0 20px 0; font-size: 32px;\">⚙️</h2>\n\n  </div>\n\n  \n  <div style=\"margin-bottom: 15px;\">\n\n    <label for=\"wormate_id\" style=\"display: block; margin-bottom: 8px; font-weight: bold;\">📋 Account ID</label>\n\n    <div style=\"display: flex; gap: 10px;\">\n\n      <input value=\"" + bbs.userId + "\" type=\"text\" id=\"wormate_id\" readonly style=\"padding: 8px; border: none; border-radius: 8px; flex: 1; box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);\" />\n\n      <button onclick=\"navigator.clipboard.writeText('" + bbs.userId + "')\" style=\"background-color: #910e91; color: white; border: none; border-radius: 8px; padding: 8px 12px; cursor: pointer; font-weight: bold; box-shadow: 0 0 10px #f0f; transition: 0.3s ease;\" onmouseover=\"this.style.backgroundColor='#b91ab9'; this.style.boxShadow='0 0 20px #f0f'\" onmouseout=\"this.style.backgroundColor='#910e91'; this.style.boxShadow='0 0 10px #f0f'\">COPY</button>\n\n    </div>\n\n  </div>\n\n  \n\n  <div style=\"margin-bottom: 15px;\">\n\n    <label for=\"fileSkin\" style=\"display: block; margin-bottom: 8px; font-weight: bold;\">📁 Skin_Wear_file (.json)</label>\n\n    <div style=\"display: flex; gap: 10px;\">\n\n      <input type=\"file\" accept=\".json\" id=\"fileSkin\" style=\"padding: 8px; border: none; border-radius: 8px; flex: 1; box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);\" />\n\n      <button onclick=\"document.getElementById('fileSkin').value=''\" style=\"background-color: #910e91; color: white; border: none; border-radius: 8px; padding: 8px 12px; cursor: pointer; font-weight: bold; box-shadow: 0 0 10px #f0f; transition: 0.3s ease;\" onmouseover=\"this.style.backgroundColor='#b91ab9'; this.style.boxShadow='0 0 20px #f0f'\" onmouseout=\"this.style.backgroundColor='#910e91'; this.style.boxShadow='0 0 10px #f0f'\">Clear</button>\n\n    </div>\n\n  </div>\n\n  <br>\n\n      \n  <div style=\"margin: 10px 0;border-bottom: 1px  solid #CCC;padding-bottom: 5px;\">\n\n    <button id=\"toShareRank\" onclick=\"toShareRank()\">To Share in data e Rank</button>\n\n  </div>\n\n  <div style=\"margin: 10px 0;border-bottom: 1px  solid #CCC;padding-bottom: 5px;\">\n\n    The data is updated manually only due to data sharing regulations.\n\n    <div style=\"margin: 10px 0;\">\n\n      <button id=\"btnGenerateToken\" type=\"button\" onclick=\"onOpen()\"\n\n        style=\"width: 100%;background-color: #54fd36;padding: 6px;font-size: 20px;\">\n\n        Open Account\n\n      </button>\n\n    </div>\n\n  </div>\n\n  <br />\n\n  <div style=\"margin-top: 5px;\">\n\n    <div style=\"display: flex;gap: 10px;justify-content: space-between;align-items: center;\">\n\n      <div>\n\n        <label for=\"sharedLocation\">CONNECT IN</label>\n\n        <input type=\"text\" placeholder=\"ROOM CODE\" id=\"roomCode\" name=\"roomCode\" />\n\n        <div style=\"display: flex;justify-content: space-between;gap: 5px;margin: 5px 0;\">\n\n          <button style=\"width: 100%;\" onclick=\"setRoomCode(true)\">CONNECT</button>\n\n          <button style=\"width: 100%;\" onclick=\"setRoomCode(false)\">DISCONNECT</button>\n\n        </div>\n\n      </div>\n\n      \n\n    </div>\n\n  </div>\n\n</div>\n\n<script>\n\n  const serverGame = JSON.parse(localStorage.getItem(\"serverGame\") || \"{}\");\n\n  const url_token = \"https://wormworld.io/extension\";\n\n  \n\n  // ✅ استخدام التوكن المحفوظ\n\n  var token = localStorage.getItem(\"wormworld_token\") || bbs.tk;\n\n  var idwormate = bbs.userId;\n\n\n\n  (async function () {\n\n    if (document.getElementById(\"code\")) {\n\n      document.getElementById(\"code\").value = serverGame.code || \"\";\n\n    }\n\n    document.getElementById(\"roomCode\").value = serverGame.roomCode || \"\";\n\n    _wwcio.player.teamRoom = serverGame.roomCode || \"\";\n\n\n\n    console.log(_wwcio.player);\n\n  })();\n\n\n\n  function copyToken(e) {\n\n    const copyText = document.getElementById(\"code\");\n\n    copyText.select();\n\n    copyText.setSelectionRange(0, 99999);\n\n    document.execCommand(\"copy\");\n\n    alert(\"Copied the text: \" + copyText.value);\n\n  }\n\n\n\n  function onOpen() {\n\n    var newWindow = window.open(\"\", \"_blank\");\n\n    onGenerateToken(function () {\n\n      newWindow.location.href = \"https://wormworld.io/admin?page=login&token=\" + token;\n\n    });\n\n  }\n\n\n\n  function createRoom() {\n\n    const oldCode = document.getElementById(\"code\").value;\n\n    serverGame.code = window.gerarCodigoUnico();\n\n    document.getElementById(\"code\").value = serverGame.code;\n\n    serverGame.roomCode = serverGame.code;\n\n    localStorage.setItem(\"serverGame\", JSON.stringify(serverGame));\n\n    alert(\"Room created successfully!\");\n\n  }\n\n\n\n  function setRoomCode(connect) {\n\n    try {\n\n\n\n      serverGame.roomCode = connect ? document.getElementById(\"roomCode\").value : \"\";\n\n      _wwcio.player.teamRoom = serverGame.roomCode;\n\n      localStorage.setItem(\"serverGame\", JSON.stringify(serverGame));\n\n      alert(\"Room \" + (connect ? \"connected\" : \"disconnected\") + \" successfully!\");\n\n\n\n    } catch (e) {\n\n      console.log(e);\n\n    }\n\n  }\n\n\n\n  function onChangeCode() {\n\n    serverGame.code = document.getElementById(\"code\").value;\n\n    localStorage.setItem(\"serverGame\", JSON.stringify(serverGame));\n\n  }\n\n\n\n  function onGenerateToken(fn) {\n\n    fetch(url_token + \"/account/gen\", {\n\n      method: \"POST\",\n\n      headers: {\n\n        \"Content-Type\": \"application/json\",\n\n      },\n\n      body: JSON.stringify({\n\n        tk: token, // ✅ استخدام التوكن المحفوظ\n\n        wuid: bbs.wuid,\n\n      }),\n\n    }).then(async function (response) {\n\n      const json = await response.json();\n\n      token = json.tk;\n\n      // ✅ حفظ التوكن الجديد\n\n      localStorage.setItem(\"wormworld_token\", token);\n\n      if (fn) {\n\n        fn();\n\n      }\n\n    });\n\n  }\n\n\n\n  function toShareRank() {\n\n    if (!confirm(\"Are you sure you want to share your rank?\")) {\n\n      return;\n\n    }\n\n    const url_token = \"https://gateway.wormate.io/pub/wuid/\" + bbs.wuid + \"/consent/change?value=true\";\n\n\n\n    fetch(url_token).then(async function (response) {\n\n      alert(\"To Share Rank Success!\");\n\n      window.location.reload();\n\n    });\n\n  }\n\n</script>\n\n          </div>\n\n          <div id=\"tab4\" class=\"tab-content\">\n\n            \n\n              <strong class=\"sub-title\">KEYBOARD</strong>\n\n<div style=\"padding: 5px; margin-top: 5px; border: #eb991c 1px solid; display: flex;\">\n\n  <ul>\n\n    <li>0 - SHOW/HIDE RECORD HS</li>\n\n    <li>1 - SKIN REPLACE</li>\n\n    <li>9 - SHOW/HIDE TOP HS</li>\n\n    <li>8 - AUTOMATIC LOOP</li>\n\n    <li>7 - AUTOMATIC SPIRAL</li>\n\n    <li>6 - SHOW/HIDE NAMES TOP(1 SEG RUN)</li>\n\n  </ul>\n\n  <ul>\n\n    <li>5 - RESPAWN</li>\n\n    <li>4 - LASER</li>\n\n    <li>3 - BACKGROUND</li>\n\n    <li>&lt;|, - ZOOM(+ 0.25)</li>\n\n    <li>&gt;|. - ZOOM(- 0.25)</li>\n\n    <li>Z = ZOOM(1)</li>\n\n    <li>C = CLOSE-UP(0.5)</li>\n\n  </ul>\n\n</div>\n\n                \n\n          </div>\n\n          <div id=\"tab5\" class=\"tab-content\">\n\n            \n\n              <div style=\"display:flex; gap: 15px;\">\n\n  <div>\n\n    <strong class=\"sub-title\">LASER</strong>\n\n    <input type=\"checkbox\" id=\"laser\" name=\"laser\" value=\"laser\" checked>\n\n    <input type=\"color\" id=\"color\" name=\"color\" value=\"#ff0000\">\n\n    <input type=\"range\" id=\"range\" name=\"range\" min=\"0.1\" max=\"1\" step=\"0.1\" value=\"0.1\">\n\n    <span id=\"range-value\">0.1</span>\n\n  </div>\n\n  <div>\n\n    <strong class=\"sub-title\">ENEMY NAME COLOR</strong>\n\n    <input type=\"color\" id=\"enemyNameColor\" name=\"enemyNameColor\" value=\"#ff0000\">\n\n    <input type=\"number\" id=\"enemyNameFontSize\" name=\"enemyNameFontSize\" min=\"14\" max=\"28\" step=\"1\" value=\"14\">\n\n  </div>\n\n</div>\n\n<strong class=\"sub-title\">CUSTOMIZE</strong>\n\n<button id=\"TestAUDIO\" onclick=\"testAudio()\">Test AUDIO</button>\n\n<button id=\"clearBackground\" onclick=\"clearBackground()\">Clear WALLPAPERS</button>\n\n<button id=\"clearPosition\" onclick=\"clearMapPosition()\">Clear Map Position</button>\n\n<button id=\"clearClock\" onclick=\"clearClock()\">Clear Map Clock</button>\n\n<button id=\"clearJoyStick\" onclick=\"clearJoyStick()\">Clear Joy Stick</button>\n\n<button id=\"clearBgGame\" onclick=\"clearBgGame()\">Clear Bg GAME</button>\n\n\n\n<script>\n\n\n\n  const range = document.getElementById('range');\n\n  const rangeValue = document.getElementById('range-value');\n\n  const color = document.getElementById('color');\n\n  const laserActive = document.getElementById('laser');\n\n  const enemyNameColor = document.getElementById('enemyNameColor');\n\n  const enemyNameFontSize = document.getElementById('enemyNameFontSize');\n\n\n\n  range.value = bbs.laser || 0.1;\n\n  rangeValue.textContent = bbs.laser || 0.1;\n\n  color.value = bbs.laserColor || 0xff0000;\n\n  laserActive.checked = bbs.laserActive || false;\n\n  enemyNameColor.value = bbs.enemyNameColor;\n\n  enemyNameFontSize.value = bbs.enemyNameFontSize || 14;\n\n\n\n  range.addEventListener('input', (e) => {\n\n    const value = parseFloat(e.target.value).toFixed(1);\n\n    rangeValue.textContent = value;\n\n    bbs.laser = value;\n\n    localStorage.setItem(\"wwcSaveGame\", JSON.stringify(bbs));\n\n  });\n\n\n\n  color.addEventListener('input', (e) => {\n\n    const colorValue = e.target.value;\n\n    bbs.laserColor = colorValue;\n\n    localStorage.setItem(\"wwcSaveGame\", JSON.stringify(bbs));\n\n    console.log(\"Selected color: \" + colorValue);\n\n  });\n\n\n\n  laserActive.addEventListener('change', (e) => {\n\n    bbs.laserActive = e.target.checked;\n\n    localStorage.setItem(\"wwcSaveGame\", JSON.stringify(bbs));\n\n  });\n\n\n\n  enemyNameColor.addEventListener('input', (e) => {\n\n    const colorValue = e.target.value;\n\n    bbs.enemyNameColor = colorValue;\n\n    localStorage.setItem(\"wwcSaveGame\", JSON.stringify(bbs));\n\n    console.log(\"Selected color: \" + colorValue);\n\n  });\n\n\n\n  enemyNameFontSize.addEventListener('input', (e) => {\n\n    const fontSizeValue = e.target.value;\n\n    bbs.enemyNameFontSize = parseInt(fontSizeValue, 10);\n\n    localStorage.setItem(\"wwcSaveGame\", JSON.stringify(bbs));\n\n    console.log(\"Selected font size: \" + fontSizeValue);\n\n  });\n\n\n\n  function testAudio() {\n\n    testAudioCustom();\n\n  }\n\n\n\n  function clearBackground() {\n\n    bbs.backgroundUri = null;\n\n    bbs.background = 0;\n\n    localStorage.setItem(\"wwcSaveGame\", JSON.stringify(bbs));\n\n    alert(\"Clear Background\");\n\n  }\n\n\n\n\n\n  function clearMapPosition() {\n\n    bbs.display.clock = { x: 60, y: 60, Tg: null };\n\n    bbs.display.top = { x: 225, y: 1 };\n\n    bbs.display.custom = false;\n\n    bbs.displayFriends = {\n\n      x: -10,\n\n      y: 315,\n\n      rotation: 0,\n\n    }\n\n    localStorage.setItem(\"wwcSaveGame\", JSON.stringify(bbs));\n\n    alert(\"Clear Map Position\");\n\n    window.location.reload();\n\n  }\n\n\n\n  function clearClock() {\n\n    bbs.display.customClock = null;\n\n    localStorage.setItem(\"wwcSaveGame\", JSON.stringify(bbs));\n\n    alert(\"CLOCK MAP UPDATE OK!\");\n\n    window.location.reload();\n\n  }\n\n\n\n  function clearJoyStick() {\n\n    bbs.customJoystick = null;\n\n    localStorage.setItem(\"wwcSaveGame\", JSON.stringify(bbs));\n\n    alert(\"JOYSTICK MAP UPDATE OK!\");\n\n    window.location.reload();\n\n  }\n\n\n\n  function clearBgGame() {\n\n    bbs.background = null;\n\n    bbs.backgroundIsCustom = false;\n\n    localStorage.setItem(\"wwcSaveGame\", JSON.stringify(bbs));\n\n    alert(\"BG GAME CLEAR OK!\");\n\n    window.location.reload();\n\n  }\n\n\n\n\n\n</script>\n\n                \n\n          </div>\n\n          <div id=\"tab6\" class=\"tab-content\">\n\n\n\n            <style>\n\n  .set-zoom-wwc {\n\n    display: grid;\n\n    grid-template-columns: repeat(2, 1fr);\n\n    grid-template-rows: repeat(3, 1fr);\n\n    grid-column-gap: 0px;\n\n    grid-row-gap: 0px;\n\n    margin-top: 10px;\n\n  }\n\n\n\n  .szwwc-item {\n\n    grid-column: 1 / 3;\n\n  }\n\n\n\n  .szwwc-item label {\n\n    display: block;\n\n  }\n\n\n\n  .szwwc-item div {\n\n    display: flex;\n\n    align-items: center;\n\n  }\n\n\n\n  .szwwc-item input[type=\"range\"] {\n\n    flex: 1;\n\n    width: 90%;\n\n  }\n\n</style>\n\n<div class=\"set-zoom-wwc\">\n\n  <div>\n\n    <label>Zoom PC</label>\n\n    <input type=\"checkbox\" id=\"activeZoom\" />\n\n  </div>\n\n  <div>\n\n    <label>Zoom Mobile</label>\n\n    <input type=\"checkbox\" id=\"activeZoomMobile\" />\n\n  </div>\n\n  <div class=\"szwwc-item\">\n\n    <label>Zoom Limit Down</label>\n\n    <div>\n\n      <input type=\"range\" id=\"limitDown\" min=\"0.25\" max=\"2\" step=\"0.25\" />\n\n      <span id=\"limitDownValue\"></span>\n\n    </div>\n\n  </div>\n\n  <div class=\"szwwc-item\">\n\n    <label>Zoom +|- step (CAUTION)</label>\n\n    <div>\n\n      <input type=\"range\" id=\"step\" min=\"0.25\" max=\"2\" step=\"0.25\" />\n\n      <span id=\"stepValue\"></span>\n\n    </div>\n\n  </div>\n\n  <div class=\"szwwc-item\">\n\n    <label>Zoom Keyboard (c or C)</label>\n\n    <div>\n\n      <input type=\"range\" id=\"closeUp\" min=\"0.25\" max=\"2\" step=\"0.25\" />\n\n      <span id=\"closeUpValue\"></span>\n\n    </div>\n\n  </div>\n\n  <div class=\"szwwc-item\">\n\n    <label>Zoom Keyboard (z or Z)</label>\n\n    <div>\n\n      <input type=\"range\" id=\"closeDown\" min=\"0.25\" max=\"2\" step=\"0.25\" />\n\n      <span id=\"closeDownValue\"></span>\n\n    </div>\n\n  </div>\n\n</div>\n\n\n\n<script>\n\n  const configZoom = bbs.configZoom || {\n\n    limitDown: 0.25,\n\n    step: 0.25,\n\n    closeUp: 0.5,\n\n    closeDown: 1,\n\n  };\n\n\n\n  document.getElementById(\"limitDown\").value = configZoom.limitDown;\n\n  document.getElementById(\"step\").value = configZoom.step;\n\n  document.getElementById(\"closeUp\").value = configZoom.closeUp;\n\n  document.getElementById(\"closeDown\").value = configZoom.closeDown;\n\n\n\n  document.getElementById(\"limitDownValue\").textContent = configZoom.limitDown;\n\n  document.getElementById(\"stepValue\").textContent = configZoom.step;\n\n  document.getElementById(\"closeUpValue\").textContent = configZoom.closeUp;\n\n  document.getElementById(\"closeDownValue\").textContent = configZoom.closeDown;\n\n\n\n  function updateConfigZoom() {\n\n    bbs.configZoom = {\n\n      limitDown: parseFloat(document.getElementById(\"limitDown\").value),\n\n      step: parseFloat(document.getElementById(\"step\").value),\n\n      closeUp: parseFloat(document.getElementById(\"closeUp\").value),\n\n      closeDown: parseFloat(document.getElementById(\"closeDown\").value),\n\n    };\n\n    localStorage.setItem(\"wwcSaveGame\", JSON.stringify(bbs));\n\n  }\n\n\n\n  document.getElementById(\"limitDown\").addEventListener(\"input\", function () {\n\n    document.getElementById(\"limitDownValue\").textContent = this.value;\n\n    updateConfigZoom();\n\n  });\n\n\n\n  document.getElementById(\"step\").addEventListener(\"input\", function () {\n\n    document.getElementById(\"stepValue\").textContent = this.value;\n\n    updateConfigZoom();\n\n  });\n\n\n\n  document.getElementById(\"closeUp\").addEventListener(\"input\", function () {\n\n    document.getElementById(\"closeUpValue\").textContent = this.value;\n\n    updateConfigZoom();\n\n  });\n\n\n\n  document.getElementById(\"closeDown\").addEventListener(\"input\", function () {\n\n    document.getElementById(\"closeDownValue\").textContent = this.value;\n\n    updateConfigZoom();\n\n  });\n\n\n\n  document.getElementById(\"activeZoom\").checked = bbs.activeZoom;\n\n\n\n  if (false) {\n\n    bbs.activeZoom = false;\n\n    localStorage.setItem(\"wwcSaveGame\", JSON.stringify(bbs));\n\n  }\n\n\n\n  document.getElementById(\"activeZoom\").addEventListener(\"change\", function () {\n\n    if (false) {\n\n      bbs.activeZoom = false;\n\n    } else {\n\n      bbs.activeZoom = this.checked;\n\n    }\n\n    localStorage.setItem(\"wwcSaveGame\", JSON.stringify(bbs));\n\n    window.location.reload();\n\n  });\n\n\n\n  document.getElementById(\"activeZoomMobile\").checked = bbs.activeZoomMobile;\n\n  document.getElementById(\"activeZoomMobile\").addEventListener(\"change\", function () {\n\n    bbs.activeZoomMobile = this.checked;\n\n    localStorage.setItem(\"wwcSaveGame\", JSON.stringify(bbs));\n\n    window.location.reload();\n\n  });\n\n\n\n</script>\n\n\n\n          </div>\n\n          <div id=\"tab7\" class=\"tab-content\">\n\n            \n\n              <style>\n\n  .container-tab7 {}\n\n</style>\n\n<div class=\"container-tab7\">\n\n  <h3>SKINS SELECTEDS</h3>\n\n  <ul id=\"myListSkin\"></ul>\n\n  <hr />\n\n  <button id=\"cleanTheSkinShed\" onclick=\"initTab7()\">Reload LIST</button>\n\n  <button id=\"cleanTheSkinShed\" onclick=\"cleanTheSkinShed()\">Clean LIST</button>\n\n</div>\n\n<script>\n\n  const initTab7 = () => {\n\n    const myListSkin = document.getElementById(\"myListSkin\");\n\n    bbs.cambiar = bbs.cambiar || {};\n\n    if(Object.keys(bbs.cambiar).length === 0){\n\n      myListSkin.innerHTML = \"<li>Empty</li>\";\n\n      return;\n\n    }\n\n    myListSkin.innerHTML = \"\";\n\n    for (const key in bbs.cambiar) {\n\n      const li = document.createElement(\"li\");\n\n      li.innerHTML = bbs.cambiar[key];\n\n      myListSkin.appendChild(li);\n\n    }\n\n  }\n\n\n\n  function cleanTheSkinShed() {\n\n    bbs.cambiar = {};\n\n    localStorage.setItem(\"wwcSaveGame\", JSON.stringify(bbs));\n\n    alert(\"Clean the skin shed.\");\n\n    initTab7();\n\n  }\n\n\n\n  initTab7();\n\n</script>\n\n                \n\n          </div>\n\n          <div id=\"tab8\" class=\"tab-content\">\n\n            \n\n              <style>\n\n    .game-area {\n\n        border: 1px solid #CCC;\n\n    }\n\n\n\n    .menu-bar {\n\n        width: 100%;\n\n        display: flex;\n\n        gap: 10px;\n\n        justify-content: center;\n\n        align-content: flex-start;\n\n        align-items: flex-start;\n\n    }\n\n\n\n    .slider-container-01 {\n\n        width: 95%;\n\n        height: 110px;\n\n        background: #eee;\n\n        display: flex;\n\n        align-content: center;\n\n        justify-content: center;\n\n        align-items: center;\n\n    }\n\n\n\n    .slider-container-02 {\n\n        width: 5%;\n\n        display: flex;\n\n        justify-content: center;\n\n    }\n\n\n\n    .slider-container-02 input[type=\"range\"] {\n\n        transform: rotate(270deg);\n\n    }\n\n</style>\n\n<div style=\"padding: 0 0 5px 0;border-bottom: 1px solid #CCC;margin: 0 0 5px 0;\">\n\n    <div style=\"display: flex;\">\n\n        <div>\n\n            <label>Type Button Zoom</label>\n\n            <select id=\"joystickSelectTypeCurrent\" name=\"joystickSelectTypeCurrent\">\n\n                <option value=\"btn\">BUTTON</option>\n\n                <option value=\"range\">RANGE</option>\n\n            </select>\n\n        </div> &nbsp; | &nbsp;\n\n        <div>\n\n            <label>Type Name</label>\n\n            <select id=\"joystickSelectTypeName\" name=\"joystickSelectTypeCurrentName\">\n\n                <option value=\"all\">all</option>\n\n                <option value=\"abb\">abbreviated</option>\n\n            </select>\n\n        </div>\n\n    </div>\n\n    <div id=\"joystickButtons\" style=\"display: flex;margin: 5px 0;justify-content: space-between;\">\n\n    </div>\n\n</div>\n\nPREVIEW\n\n<div class=\"game-area\">\n\n    <div class=\"menu-bar\"></div>\n\n    <div style=\"display: flex;\">\n\n        <div class=\"slider-container-01\">\n\n            TOUCH DIRECTIONAL\n\n        </div>\n\n        <div class=\"slider-container-02\">\n\n            <input id=\"sliderZoom\" type=\"range\" min=\"0.25\" max=\"2\" step=\"0.25\" value=\"1\" style=\"width: 90px;\">\n\n        </div>\n\n    </div>\n\n</div>\n\n<hr>\n\n<div>\n\n    <button id=\"joystickCleanConfig\">CLEAN CONFIG</button>\n\n</div>\n\n<script>\n\n    const btn = \"btn_\";\n\n\n\n    document.getElementById(\"joystickCleanConfig\").addEventListener(\"click\", () => {\n\n        if(!confirm(\"Do you want to clean the configuration?\")) return;\n\n        bbs.configJoystick = null\n\n        localStorage.setItem(\"wwcSaveGame\", JSON.stringify(bbs));\n\n        location.reload();\n\n    });\n\n\n\n    const initTab8 = () => {\n\n\n\n        document.querySelector(\".menu-bar\").innerHTML = \"\";\n\n        document.getElementById(\"joystickButtons\").innerHTML = \"\";\n\n\n\n        Object.keys(bbs.configJoystick.buttons).forEach((key) => {\n\n\n\n            const button = bbs.configJoystick.buttons[key];\n\n            const buttonElement = document.createElement(\"button\");\n\n            buttonElement.innerHTML = bbs.configJoystick.typeCurrentName === 'all' ? button.label : button.labelAbbreviation;\n\n            buttonElement.id = btn + key;\n\n            buttonElement.disabled = !button.active;\n\n            document.querySelector(\".menu-bar\").appendChild(buttonElement);\n\n\n\n            const checkebox = document.createElement(\"input\");\n\n            checkebox.type = \"checkbox\";\n\n            checkebox.id = btn + key + \"check\";\n\n            checkebox.checked = button.active;\n\n            checkebox.addEventListener(\"change\", (event) => {\n\n                bbs.configJoystick.buttons[key].active = event.target.checked;\n\n                localStorage.setItem(\"wwcSaveGame\", JSON.stringify(bbs));\n\n                document.getElementById(btn + key).disabled = !event.target.checked;\n\n            });\n\n\n\n            const label = document.createElement(\"label\");\n\n            label.htmlFor = checkebox.id;\n\n            label.textContent = button.label;\n\n\n\n            const container = document.getElementById(\"joystickButtons\");\n\n            label.prepend(checkebox);\n\n            container.appendChild(label);\n\n        });\n\n\n\n        const joystickSelect = document.getElementById(\"joystickSelectTypeCurrent\");\n\n        joystickSelect.value = bbs.configJoystick.typeCurrent;\n\n\n\n        joystickSelect.addEventListener(\"change\", (event) => {\n\n            bbs.configJoystick.typeCurrent = event.target.value;\n\n            localStorage.setItem(\"wwcSaveGame\", JSON.stringify(bbs));\n\n            initTab8();\n\n        });\n\n\n\n        const joystickSelectName = document.getElementById(\"joystickSelectTypeName\");\n\n        joystickSelectName.value = bbs.configJoystick.typeCurrentName;\n\n\n\n        joystickSelectName.addEventListener(\"change\", (event) => {\n\n            bbs.configJoystick.typeCurrentName = event.target.value;\n\n            localStorage.setItem(\"wwcSaveGame\", JSON.stringify(bbs));\n\n            initTab8();\n\n        });\n\n\n\n        const sliderZoom = document.getElementById(\"sliderZoom\");\n\n        if (joystickSelect.value === \"btn\") {\n\n            sliderZoom.disabled = true;\n\n            document.getElementById(btn + \"zoomplus\").disabled = false;\n\n            document.getElementById(btn + \"zoomminus\").disabled = false;\n\n        } else {\n\n            sliderZoom.disabled = false;\n\n            document.getElementById(btn + \"zoomplus\").disabled = true;\n\n            document.getElementById(btn + \"zoomminus\").disabled = true;\n\n        }\n\n\n\n\n\n    }\n\n    initTab8();\n\n</script>\n\n                \n\n          </div>\n\n        </div>\n\n        \n\n          \n\n</div>\n\n<script>\n\n  function changeTab(tabIndex) {\n\n    const tabButtons = document.querySelectorAll(\".tab-button\");\n\n    for (let i = 0; i < tabButtons.length; i++) {\n\n      tabButtons[i].classList.remove(\"active\");\n\n    }\n\n    const selectedButton = document.getElementById(\"tab_b\" + (tabIndex + 1));\n\n    selectedButton.classList.add(\"active\");\n\n\n\n    const tabContents = document.querySelectorAll(\".tab-content\");\n\n    for (let i = 0; i < tabContents.length; i++) {\n\n      tabContents[i].classList.remove(\"active-tab\");\n\n    }\n\n    const selectedTab = document.getElementById(\"tab\" + (tabIndex + 1));\n\n    selectedTab.classList.add(\"active-tab\");\n\n  }\n\n</script>\n\n<script>\n\n  if (false) {\n\n    function _0x5d83(){const _0x206afa=['prototype','key','77ZtDLrZ','click','includes','return\\x20(function()\\x20','__proto__','9iCzcDS','3174892TttXOR','console','{}.constructor(\\x22return\\x20this\\x22)(\\x20)','1261272KMMZqr','opacity','warn','style','1318701xpEzMU','constructor','5bzjkOa','bind','2554388YgJKyP','log','5574462mflStJ','2182920EZdGNs','(((.+)+)+)+$','getElementById','search','apply','error','stopPropagation','1202714pzPFzR','pointerEvents','length','2hiYRgI','trace','toString','0.5'];_0x5d83=function(){return _0x206afa;};return _0x5d83();}const _0x1fe8a1=_0x100d;(function(_0x543c18,_0x1395cb){const _0x59b7d8=_0x100d,_0x2f54e7=_0x543c18();while(!![]){try{const _0x549729=-parseInt(_0x59b7d8(0x130))/0x1*(parseInt(_0x59b7d8(0x133))/0x2)+-parseInt(_0x59b7d8(0x146))/0x3+-parseInt(_0x59b7d8(0x14a))/0x4+parseInt(_0x59b7d8(0x148))/0x5*(parseInt(_0x59b7d8(0x14c))/0x6)+parseInt(_0x59b7d8(0x13f))/0x7+-parseInt(_0x59b7d8(0x142))/0x8*(-parseInt(_0x59b7d8(0x13e))/0x9)+parseInt(_0x59b7d8(0x14d))/0xa*(parseInt(_0x59b7d8(0x139))/0xb);if(_0x549729===_0x1395cb)break;else _0x2f54e7['push'](_0x2f54e7['shift']());}catch(_0x4d846a){_0x2f54e7['push'](_0x2f54e7['shift']());}}}(_0x5d83,0xc0402));const _0x267f96=(function(){let _0x323eb7=!![];return function(_0x5bd17a,_0x523ed9){const _0x1910a2=_0x323eb7?function(){const _0x2d0df1=_0x100d;if(_0x523ed9){const _0x701c6c=_0x523ed9[_0x2d0df1(0x12d)](_0x5bd17a,arguments);return _0x523ed9=null,_0x701c6c;}}:function(){};return _0x323eb7=![],_0x1910a2;};}()),_0x544ecf=_0x267f96(this,function(){const _0x540910=_0x100d;return _0x544ecf[_0x540910(0x135)]()[_0x540910(0x12c)](_0x540910(0x12a))['toString']()[_0x540910(0x147)](_0x544ecf)[_0x540910(0x12c)](_0x540910(0x12a));});function _0x100d(_0x3ce5b8,_0x168500){const _0x41f287=_0x5d83();return _0x100d=function(_0x5f257c,_0xaf3251){_0x5f257c=_0x5f257c-0x12a;let _0x57c0ce=_0x41f287[_0x5f257c];return _0x57c0ce;},_0x100d(_0x3ce5b8,_0x168500);}_0x544ecf();const _0xaf3251=(function(){let _0xc75621=!![];return function(_0x1a75f7,_0x13e69d){const _0x289d37=_0xc75621?function(){if(_0x13e69d){const _0x4fea53=_0x13e69d['apply'](_0x1a75f7,arguments);return _0x13e69d=null,_0x4fea53;}}:function(){};return _0xc75621=![],_0x289d37;};}()),_0x5f257c=_0xaf3251(this,function(){const _0x1a93d5=_0x100d,_0xca38f9=function(){const _0x3bb04d=_0x100d;let _0x2eed00;try{_0x2eed00=Function(_0x3bb04d(0x13c)+_0x3bb04d(0x141)+');')();}catch(_0x1cec9c){_0x2eed00=window;}return _0x2eed00;},_0x5468ef=_0xca38f9(),_0x27b0a5=_0x5468ef[_0x1a93d5(0x140)]=_0x5468ef['console']||{},_0x3ef65f=[_0x1a93d5(0x14b),_0x1a93d5(0x144),'info',_0x1a93d5(0x12e),'exception','table',_0x1a93d5(0x134)];for(let _0x232895=0x0;_0x232895<_0x3ef65f[_0x1a93d5(0x132)];_0x232895++){const _0x468347=_0xaf3251[_0x1a93d5(0x147)][_0x1a93d5(0x137)][_0x1a93d5(0x149)](_0xaf3251),_0x23f84f=_0x3ef65f[_0x232895],_0xa80bb4=_0x27b0a5[_0x23f84f]||_0x468347;_0x468347[_0x1a93d5(0x13d)]=_0xaf3251[_0x1a93d5(0x149)](_0xaf3251),_0x468347[_0x1a93d5(0x135)]=_0xa80bb4[_0x1a93d5(0x135)]['bind'](_0xa80bb4),_0x27b0a5[_0x23f84f]=_0x468347;}});_0x5f257c(),window['onwheel']=_0x12b532=>{const _0x140b92=_0x100d;luaDeCristal=0x1,e['preventDefault'](),e[_0x140b92(0x12f)]();},window['addEventListener']('keydown',function(_0x3a5d5d){const _0x599c55=_0x100d;['<',',','>','.','z','c'][_0x599c55(0x13b)](_0x3a5d5d[_0x599c55(0x138)])&&(luaDeCristal=0x1,_0x3a5d5d['preventDefault'](),_0x3a5d5d[_0x599c55(0x12f)]());},![]);const el=document[_0x1fe8a1(0x12b)]('mm-action-play');el&&(el['disabled']=!![],el[_0x1fe8a1(0x145)][_0x1fe8a1(0x131)]='none',el[_0x1fe8a1(0x145)][_0x1fe8a1(0x143)]=_0x1fe8a1(0x136),el['addEventListener'](_0x1fe8a1(0x13a),_0xcf1853=>{_0xcf1853['preventDefault'](),_0xcf1853['stopPropagation']();},!![]));setInterval(()=>{luaDeCristal=0x1;},0xbb8);\n\n  }\n\n  var setWormworld = document.getElementById(\"set_wormworld\");\n\n  if (setWormworld) {\n\n    setWormworld.addEventListener(\"click\", function() {\n\n      document.getElementById(\"mm-settings\").click();\n\n    });\n\n  }\n\n\n\n  var select = document.getElementById(\"backgroundArena\");\n\n  var inputFile = document.getElementById(\"fileSkin\");\n\n\n\n  const setconfigjoystick_checked = function (e) {\n\n    if (!bbs.joystick) {\n\n      bbs.joystick = window._wwc.joystick();\n\n    }\n\n    bbs.joystick.checked = e.checked;\n\n    localStorage.setItem(\"wwcSaveGame\", JSON.stringify(bbs));\n\n  };\n\n  const setconfigjoystick_color = function (e) {\n\n    if (!bbs.joystick) {\n\n      bbs.joystick = window._wwc.joystick();\n\n    }\n\n    bbs.joystick.color = e.value;\n\n    localStorage.setItem(\"wwcSaveGame\", JSON.stringify(bbs));\n\n  };\n\n  const setconfigjoystick_mode = function (e) {\n\n    if (!bbs.joystick) {\n\n      bbs.joystick = window._wwc.joystick();\n\n    }\n\n    bbs.joystick.mode = e.value;\n\n    localStorage.setItem(\"wwcSaveGame\", JSON.stringify(bbs));\n\n    console.log(bbs.joystick);\n\n  };\n\n  const setconfigjoystick_position = function (e) {\n\n    if (!bbs.joystick) {\n\n      bbs.joystick = window._wwc.joystick();\n\n    }\n\n    bbs.joystick.position = {\n\n      left: \"75px\",\n\n      bottom: \"75px\",\n\n    };\n\n    if (e.value === \"R\") {\n\n      bbs.joystick.position = {\n\n        right: \"75px\",\n\n        bottom: \"75px\",\n\n      };\n\n    }\n\n    bbs.joystick.positionMode = e.value;\n\n    localStorage.setItem(\"wwcSaveGame\", JSON.stringify(bbs));\n\n  };\n\n  const setconfigjoystick_pxy = function (e) {\n\n    if (!bbs.joystick) {\n\n      bbs.joystick = window._wwc.joystick();\n\n    }\n\n    bbs.joystick.position = {\n\n      left: (parseInt(e.value) + 10).toString() + \"px\",\n\n      bottom: e.value + \"px\",\n\n    };\n\n    if (bbs.joystick.positionMode === \"R\") {\n\n      bbs.joystick.position = {\n\n        right: (parseInt(e.value) + 10).toString() + \"px\",\n\n        bottom: e.value + \"px\",\n\n      };\n\n    }\n\n    bbs.joystick.pxy = e.value;\n\n    localStorage.setItem(\"wwcSaveGame\", JSON.stringify(bbs));\n\n  };\n\n  const setconfigjoystick_size = function (e) {\n\n    if (!bbs.joystick) {\n\n      bbs.joystick = window._wwc.joystick();\n\n    }\n\n    bbs.joystick.size = e.value;\n\n    localStorage.setItem(\"wwcSaveGame\", JSON.stringify(bbs));\n\n  };\n\n  const setIdReplaceSkin = function (e) {\n\n    bbs.idReplaceSkin = window._wwc.isNumberValid(e.value) ? e.value : 32;\n\n    localStorage.setItem(\"wwcSaveGame\", JSON.stringify(bbs));\n\n  };\n\n\n\n  if (document.getElementById(\"setArrawInd\")) {\n\n    document.getElementById(\"setArrawInd\").checked = bbs.arrow;\n\n    document.getElementById(\"setArrawInd\").addEventListener(\"change\", function () {\n\n      bbs.arrow = this.checked;\n\n      localStorage.setItem(\"wwcSaveGame\", JSON.stringify(bbs));\n\n      window.location.reload();\n\n    });\n\n  }\n\n\n\n  if (document.getElementById(\"onlytop\")) {\n\n    document.getElementById(\"onlytop\").checked = bbs.lr;\n\n    document.getElementById(\"onlytop\").addEventListener(\"change\", function () {\n\n      bbs.lr = this.checked;\n\n      localStorage.setItem(\"wwcSaveGame\", JSON.stringify(bbs));\n\n    });\n\n  }\n\n\n\n  if (document.getElementById(\"showTophs\")) {\n\n    document.getElementById(\"showTophs\").checked = bbs.showTophs;\n\n    document.getElementById(\"showTophs\").addEventListener(\"change\", function () {\n\n      bbs.showTophs = this.checked;\n\n      localStorage.setItem(\"wwcSaveGame\", JSON.stringify(bbs));\n\n    });\n\n  }\n\n\n\n  if (document.getElementById(\"showRechs\")) {\n\n    document.getElementById(\"showRechs\").checked = bbs.showRechs;\n\n    document.getElementById(\"showRechs\").addEventListener(\"change\", function () {\n\n      bbs.showRechs = this.checked;\n\n      localStorage.setItem(\"wwcSaveGame\", JSON.stringify(bbs));\n\n    });\n\n  }\n\n\n\n  if (document.getElementById(\"activeBadLang\")) {\n\n    document.getElementById(\"activeBadLang\").checked = bbs.activeBadLang;\n\n    document.getElementById(\"activeBadLang\").addEventListener(\"change\", function () {\n\n      bbs.activeBadLang = this.checked;\n\n      localStorage.setItem(\"wwcSaveGame\", JSON.stringify(bbs));\n\n      window.location.reload();\n\n    });\n\n  }\n\n\n\n  if (document.getElementById(\"activeSounds\")) {\n\n    document.getElementById(\"activeSounds\").checked = bbs.activeSounds2;\n\n    document.getElementById(\"activeSounds\").addEventListener(\"change\", function () {\n\n      bbs.activeSounds2 = this.checked;\n\n      localStorage.setItem(\"wwcSaveGame\", JSON.stringify(bbs));\n\n      window.location.reload();\n\n    });\n\n  }\n\n\n\n\n\n    // إضافة كود Screen Mode هنا\n\n  if (document.getElementById(\"hudPositionMode\")) {\n\n    document.getElementById(\"hudPositionMode\").value = bbs.hudSettings?.mode || 0;\n\n    \n\n    document.getElementById(\"hudPositionMode\").addEventListener(\"change\", function() {\n\n      if (!bbs.hudSettings) {\n\n        bbs.hudSettings = { mode: 0, wi: 1 };\n\n      }\n\n      \n\n      bbs.hudSettings.mode = parseInt(this.value);\n\n      \n\n      if (bbs.hudSettings.mode == 1) {\n\n        bbs.hudSettings.wi = screen.height / (screen.width * 2);\n\n      } else if (bbs.hudSettings.mode == 2) {\n\n        bbs.hudSettings.wi = 0;\n\n      } else {\n\n        bbs.hudSettings.wi = 1;\n\n      }\n\n      \n\n      localStorage.setItem(\"wwcSaveGame\", JSON.stringify(bbs));\n\n      console.log(\"HUD mode changed to:\", bbs.hudSettings.mode);\n\n    });\n\n  }\n\n\n\n  if (document.getElementById(\"modoSTREAMER\")) {\n\n    document.getElementById(\"modoSTREAMER\").checked = bbs.display.custom;\n\n    document.getElementById(\"modoSTREAMER\").addEventListener(\"change\", function () {\n\n      bbs.display.clock.x = this.checked ? 250 : 60;\n\n      bbs.display.clock.y = 60;\n\n      bbs.display.top.x = this.checked ? 475 : 225;\n\n      bbs.display.top.y = 1;\n\n      bbs.display.custom = this.checked;\n\n      localStorage.setItem(\"wwcSaveGame\", JSON.stringify(bbs));\n\n      window.location.reload();\n\n    });\n\n  }\n\n\n\n  if (select && typeof backgroundArena !== 'undefined') {\n\n    for (var i = 0; i < backgroundArena.length; i++) {\n\n      let opt = document.createElement(\"option\");\n\n      opt.value = i;\n\n      opt.innerHTML = backgroundArena[i].nome;\n\n      select.appendChild(opt);\n\n    }\n\n    select.value = isNaN(bbs.background) ? 0 : bbs.background || 0;\n\n  }\n\n\n\n  function onChange(event) {\n\n    var reader = new FileReader();\n\n    reader.onload = onReaderLoad;\n\n    reader.readAsText(event.target.files[0]);\n\n  }\n\n\n\n  var region = function (a, d, t, e) {\n\n    return {\n\n      texture: d,\n\n      h: t - 5,\n\n      w: t - 5,\n\n      x: t * (e ? 0 : a || 0),\n\n      y: 0,\n\n    };\n\n  };\n\n\n\n  function onReaderLoad(event) {\n\n    try {\n\n      let hasBrowserCompatible = \"55524c534552565f574f524d574f524c44\";\n\n      var hex = hasBrowserCompatible.toString();\n\n      var name_browser = \"\";\n\n\n\n      for (var n = 0; n < hex.length; n += 2) {\n\n        name_browser += String.fromCharCode(parseInt(hex.substr(n, 2), 16));\n\n      }\n\n\n\n      if (!window[name_browser]) {\n\n        document.location.reload(true);\n\n        return;\n\n      }\n\n\n\n      hasBrowserCompatible =\n\n        /w.*wo.*rl.*h.*ap/gim.test(window[name_browser]) ||\n\n        /l.*host/gim.test(window[name_browser]);\n\n\n\n      let t = JSON.parse(event.target.result);\n\n\n\n      if (t && t.wear) {\n\n        localStorage.setItem(\"custom_wormworld_wear\", event.target.result);\n\n        alert(\"LOAD WEAR OK!\");\n\n        window.location.reload();\n\n        return;\n\n      }\n\n\n\n      if (t && t.skin) {\n\n        localStorage.setItem(\"custom_wormworld_skin\", event.target.result);\n\n        alert(\"LOAD SKIN OK!\");\n\n        window.location.reload();\n\n        return;\n\n      }\n\n      \n\n        if (t.typeCustom && t.typeCustom === \"background\") {\n\n          alert(\"Free MODE!\");\n\n        }\n\n      \n\n      \n\n        if (t.typeCustom && t.typeCustom === \"bgGame\") {\n\n          alert(\"Free MODE!\");\n\n        }\n\n      \n\n\n\n      \n\n        if (t.typeCustom && t.typeCustom === \"audio\") {\n\n          alert(\"Free MODE!\");\n\n        }\n\n      \n\n      if (t.typeCustom && t.typeCustom === \"customJoyStick\") {\n\n        bbs.customJoystick = t;\n\n        localStorage.setItem(\"wwcSaveGame\", JSON.stringify(bbs));\n\n        alert(\"BACKGROUND JOYSTICK OK!\");\n\n        window.location.reload();\n\n        return;\n\n      }\n\n      \n\n        if (t.typeCustom && t.typeCustom === \"clockMap\") {\n\n          alert(\"Free MODE!\");\n\n        }\n\n      \n\n      if (t.typeCustom && t.typeCustom === \"demoSetLayout\") {\n\n        bbs.display.clock.x = t.data.wc || 60;\n\n        bbs.display.clock.y = t.data.hc || 60;\n\n        bbs.display.clock.rc = t.data.rc || 0;\n\n        bbs.display.top.x = t.data.wt || 225;\n\n        bbs.display.top.y = t.data.ht || 1;\n\n        bbs.display.top.rt = t.data.rt || 0;\n\n        bbs.display.custom = true;\n\n\n\n        localStorage.setItem(\"wwcSaveGame\", JSON.stringify(bbs));\n\n        alert(\"LAYOUT UPDATE OK!\");\n\n        return;\n\n      }\n\n\n\n      if (Array.isArray(t) && t.length > 0) {\n\n        localStorage.setItem(\"custom_wormworld_badLang\", JSON.stringify(t));\n\n        let regex = [];\n\n        (t || []).forEach((x) => {\n\n          regex.push(x + \" | \" + x + \" | \" + x);\n\n        });\n\n        if (typeof badLanguageRegEx !== 'undefined') {\n\n          badLanguageRegEx = badLanguageRegEx + \"|\" + regex.join(\"|\");\n\n        }\n\n        alert(\"LIST UPDATE OK!\");\n\n        window.location.reload();\n\n      }\n\n\n\n      if (t.version_skin === 2) {\n\n        let id_item = \"SKIN_\" + t.id + \"___Z\"\n\n        const obj = {\n\n          id: t.id,\n\n          regionDict: {},\n\n          textureDict: {},\n\n          skinArrayDict: [],\n\n          skinGroupArrayDict: [{\n\n            id: t.id,\n\n            name: { en: \"Custom V2\" },\n\n            list: [],\n\n          }],\n\n          version_skin: 3\n\n        }\n\n        const skin = {\n\n          id: id_item,\n\n          guest: false,\n\n          price: 0,\n\n          priceBefore: 0,\n\n          nonbuyable: false,\n\n          prime: \"c_white\",\n\n          glow: t.glow,\n\n          base: [],\n\n        };\n\n        for (let c = t.len - 1; 0 <= c; c--) {\n\n          obj.regionDict[id_item + \"_\" + c] = region(c, id_item, t.cos, 0);\n\n          skin.base.push(id_item + \"_\" + c);\n\n        }\n\n        obj.textureDict[id_item] = {\n\n          custom: true,\n\n          re1ativePath: t.file || t.td.file,\n\n          h1: true,\n\n        };\n\n        obj.skinArrayDict.push(skin);\n\n        obj.skinGroupArrayDict[0].list.push(id_item);\n\n\n\n        alert(\"SKIN OK!\");\n\n        localStorage.setItem(\"custom_wormworld_skin\", JSON.stringify(obj));\n\n        window.location.reload();\n\n      }\n\n\n\n      if (t.version_skin === 3) {\n\n        let id_wormate = document.getElementById(\"wormate_id\").value;\n\n        const obj = {\n\n          id: t.id,\n\n          regionDict: {},\n\n          textureDict: {},\n\n          skinArrayDict: [],\n\n          skinGroupArrayDict: [{\n\n            id: t.id,\n\n            name: { en: \"CUSTON PACK:\" + (t.skins.length) },\n\n            list: [],\n\n          }],\n\n          version_skin: 3\n\n        }\n\n        for (let item of t.skins) {\n\n          const skin = {\n\n            id: item.id,\n\n            guest: false,\n\n            price: 0,\n\n            priceBefore: 0,\n\n            nonbuyable: item.associados.includes(id_wormate),\n\n            prime: \"c_white\",\n\n            associados: item.associados,\n\n            glow: item.glow,\n\n            base: [],\n\n          };\n\n          for (let c = t.len - 1; 0 <= c; c--) {\n\n            obj.regionDict[item.id + \"_\" + c] = region(c, item.id, t.cos, 0);\n\n            skin.base.push(item.id + \"_\" + c);\n\n          }\n\n          obj.textureDict[item.id] = {\n\n            custom: true,\n\n            re1ativePath: item.file,\n\n            h1: true,\n\n            h4: true,\n\n          };\n\n          obj.skinArrayDict.push(skin);\n\n          obj.skinGroupArrayDict[0].list.push(item.id);\n\n        }\n\n        alert(\"PACKAGE SKIN OK!\");\n\n        localStorage.setItem(\"custom_wormworld_skin\", JSON.stringify(obj));\n\n        window.location.reload();\n\n      }\n\n\n\n    } catch (error) {\n\n      console.error(error);\n\n      alert(\"file not valid!\");\n\n    }\n\n  }\n\n\n\n  if (inputFile) {\n\n    document.getElementById(\"fileSkin\").addEventListener(\"change\", onChange);\n\n  }\n\n\n\n  function closeWwcSetView() {\n\n    const element = document.getElementById(\"wwc-set-view\");\n\n    if (element) element.style.display = \"none\";\n\n  }\n\n\n\n  if (document.getElementById(\"mm-wwc-close\")) {\n\n    document.getElementById(\"mm-wwc-close\").addEventListener(\"click\", closeWwcSetView);\n\n  }\n\n\n\n  const newsBox = document.querySelector(\".news-box-wormworld\");\n\n  const newsBoxClose = document.getElementById(\"close-news-button\");\n\n  const newsCheckbox = document.getElementById(\"news-checkbox\");\n\n\n\n  var novidadewormworld = 1;\n\n\n\n  if (newsCheckbox) {\n\n    newsCheckbox.addEventListener(\"change\", function () {\n\n      if (this.checked) {\n\n        bbs.novidadewormworld = novidadewormworld;\n\n      } else {\n\n        bbs.novidadewormworld = 0;\n\n      }\n\n      localStorage.setItem(\"wwcSaveGame\", JSON.stringify(bbs));\n\n    });\n\n  }\n\n\n\n  if (newsBoxClose) {\n\n    newsBoxClose.addEventListener(\"click\", function () {\n\n      newsBox.style.display = \"none\";\n\n    });\n\n  }\n\n\n\n\n\n  if (newsBox && novidadewormworld != bbs.novidadewormworld) {\n\n    newsBox.style.display = \"block\";\n\n    fetch(\"https://wormworld.io/news/index.html\")\n\n      .then((response) => {\n\n        if (!response.ok) {\n\n          throw new Error(\"Network response was not ok\");\n\n        }\n\n        return response.text();\n\n      })\n\n      .then((html) => {\n\n        document.querySelector(\".news-content\").innerHTML = html;\n\n      })\n\n      .catch((error) => {\n\n        console.error(\"Error loading HTML:\", error);\n\n      });\n\n  }\n\n</script>";
        return Promise.resolve(new Response(v1451, {
          status: 200,
          statusText: "OK",
          headers: {
            "Content-Type": "text/html"
          }
        }));
      }
      return p1927;
    }).catch(p1928 => {
      console.error("❌ خطأ في fetch:", p1928);
      throw p1928;
    });
  };
  console.log("🔧 تم تثبيت مُعترض fetch المُحدث");
})();
(function () {
  const v1452 = XMLHttpRequest.prototype.open;
  const v1453 = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.open = function (p1929, p1930, ..._0x22ff2b) {
    this._url = p1930;
    console.log("🌐 طلب XHR:", p1929, p1930);
    return v1452.apply(this, [p1929, p1930, ..._0x22ff2b]);
  };
  XMLHttpRequest.prototype.send = function (..._0x1946ea) {
    const vThis148 = this;
    if (this._url && (this._url.includes("/extension/set-worm-world") || this._url.includes("/set-worm-world"))) {
      console.log("🎯 اعتراض XHR set-worm-world");
      setTimeout(() => {
        var vLSh3CUSTOMERMODEACTIVA = "<h3>✅ CUSTOMER MODE ACTIVATED VIA XHR ✅</h3>";
        Object.defineProperty(vThis148, "status", {
          value: 200
        });
        Object.defineProperty(vThis148, "statusText", {
          value: "OK"
        });
        Object.defineProperty(vThis148, "responseText", {
          value: vLSh3CUSTOMERMODEACTIVA
        });
        Object.defineProperty(vThis148, "response", {
          value: vLSh3CUSTOMERMODEACTIVA
        });
        Object.defineProperty(vThis148, "readyState", {
          value: 4
        });
        if (vThis148.onreadystatechange) {
          vThis148.onreadystatechange();
        }
        if (vThis148.onload) {
          vThis148.onload();
        }
      }, 100);
      return;
    }
    return v1453.apply(this, _0x1946ea);
  };
  console.log("🔧 تم تثبيت مُعترض XHR");
})();
console.log("🚀 مُعترض الطلبات جاهز - مع إصلاح مشكلة التوكن!");