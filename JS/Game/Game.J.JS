'use strict';

const xURL = "https://wormy.wormatrix.fun";
const sURL = "https://wm.wormy.online";
var vO = {
  positions: {
    m: 190,
    l: 250,
    p: 170
  },
  aMp: [..."0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
  playerList: [],
  freezePlayerList: false,
  locals: {
    hs: {
      g: 0,
      t: 0
    },
    kills: {
      g: 0,
      t: 0
    },
    died: 0,
    start: new Date(),
    finish: 0,
    saveGame: false,
    idReplaceSkin: null,
    t: false,
    streamer: false,
    show_players_around: false,
    propertyIds: {},
    blackList: [],
    blackListShowName: [],
    bName: "ירושלים IL",
    bSkin: 131
  },
  bName: "✡️ {{ID}} ✡️🕎✅✅",
  encodeOffset: 61697,
  validSkinId: function (p) {
    if (p >= 399 && p <= 999) {
      return 32;
    } else {
      return p;
    }
  },
  validPId: function (p2) {
    let vParseInt = parseInt(this.locals.propertyIds[p2]);
    return this.encodeOffset + (vParseInt && vParseInt >= 399 && vParseInt <= 999 && vParseInt || 0);
  },
  encodeName: function (p3) {
    p3 = p3.substring(0, 27);
    return p3 + " ".repeat(27 - p3.length) + String.fromCharCode(..."eyesId,mouthId,glassesId,hatId,skinId".split(",").map(p4 => {
      return this.validPId(p4);
    }));
  },
  decodeName: function (p5) {
    let v = p5.substring(27).split("").map(p6 => {
      return p6.charCodeAt() - this.encodeOffset;
    });
    if (v.length == 5 && v.every(p7 => {
      return p7 >= 0;
    })) {
      return [p5.substring(0, 27), v];
    } else {
      return [p5, Array(5).fill(0)];
    }
  },
  loadLocals: function () {
    let v2 = localStorage.getItem("zLocals");
    let v3 = typeof v2 !== "undefined" && v2 !== null ? JSON.parse(v2) : {};
    for (let v4 in v3) {
      this.locals[v4] = v3[v4];
    }
  },
  saveLocal: function () {
    localStorage.setItem("zLocals", JSON.stringify(this.locals));
  }
};
vO.loadLocals();
vO.localsLoded = false;
Object.defineProperty(Object.prototype, "dig", {
  value: function (..._0x9f75x6) {
    let vThis = this;
    _0x9f75x6.forEach(p8 => {
      return vThis &&= vThis[p8];
    });
    return vThis;
  }
});
vO.zSkin = $("<div id=\"z-skin-id\"></div>").prependTo(".store-view-cont");
vO.zWear = $("<div id=\"wear-id\" style=\"margin-top: 10px; margin-left: 2px; position: absolute;\"></div>").insertAfter("#wear-view .wear-types");
vO.setPId = function (p9, p10, p11) {
  if (p11 && this.localsLoded) {
    this.locals.propertyIds[p10.toLowerCase() + "Id"] = p9;
  }
  (p10 == "SKIN" ? this.zSkin : this.zWear).html("ID: " + ("00" + p9).slice(-3));
};
vO.customSkin = function () {
  let v5 = localStorage.getItem("customSkin");
  return v5 && JSON.parse(v5);
}();
vO.customWear = function () {
  let v6 = localStorage.getItem("customWear");
  return v6 && JSON.parse(v6);
}();
var vLN1 = 1;
[...document.querySelectorAll("#loa831pibur0w4gv, #unl6wj4czdl84o9b")].map(p12 => {
  return p12.remove();
});
function f() {
  let v7 = vO.locals.joystick || {};
  let vF = function () {
    let vO2 = {
      checked: true,
      color: v7.color || "red",
      size: v7.size || 110
    };
    let v8 = (v7.pxy || 110) + "px";
    if ((v7.mode || "dynamic") !== "dynamic") {
      vO2.mode = "static";
      vO2.position = {
        bottom: v8
      };
      vO2.position[v7.position === "L" ? "left" : "right"] = v8;
    }
    ;
    return vO2;
  }();
  let vF2 = function () {
    v10.on("start end", function (p13, p14) {
      console.log("ZNippleJS", p13, p14);
    }).on("move", function (p15, p16) {
      let v9 = p16.angle.radian <= Math.PI ? p16.angle.radian * -1 : Math.PI - (p16.angle.radian - Math.PI);
      vO.eventMain.Pn = v9;
    });
  };
  let vF3 = function () {
    if (v10) {
      v10.destroy();
    }
    v10 = nipplejs.create(vF);
    vF2();
  };
  if (vF4 && v7.checked) {
    vF3();
  }
  try {} catch (e2) {
    console.error(e2);
  }
}
function f2() {
  if (v10) {
    v10.destroy();
  }
}
function f3(p17) {
  vO.locals.joystick = vO.locals.joystick || {};
}
var v10;
const vF4 = function () {
  let v11 = false;
  (function (p18) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(p18) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(p18.substr(0, 4))) {
      v11 = true;
    }
  })(navigator.userAgent || navigator.vendor || window.opera);
  return v11;
}();
function f4(p19) {
  '@babel/helpers - typeof';

  return (f4 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (p20) {
    return typeof p20;
  } : function (p21) {
    if (p21 && typeof Symbol == "function" && p21.constructor === Symbol && p21 !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof p21;
    }
  })(p19);
}
var v12;
(function () {
  var vO3 = {};
  var vO4 = {};
  var vO5 = {};
  var vO6 = {};
  vO5.a = function (p22) {
    var v13 = new String();
    var vParseInt2 = parseInt(p22.substring(0, 2), 16);
    for (var vLN2 = 2; vLN2 < p22.length; vLN2 += 2) {
      var vParseInt3 = parseInt(p22.substring(vLN2, vLN2 + 2), 16);
      vParseInt2 = 3793 + vParseInt2 * 4513 & 255;
      v13 += String.fromCharCode(vParseInt3 ^ vParseInt2);
    }
    ;
    return v13;
  };
  window.addEventListener("load", function () {
    document.getElementById("game-wrap").style.display = "block";
    if (!function () {
      (function (p23, p24, p25) {
        function f5(p26, p27) {
          return f4(p26) === p27;
        }
        function f6() {
          if (f4(p24.createElement) != "function") {
            return p24.createElement(arguments[0]);
          } else if (v16) {
            return p24.createElementNS.call(p24, "http://www.w3.org/2000/svg", arguments[0]);
          } else {
            return p24.createElement.apply(p24, arguments);
          }
        }
        var vA = [];
        var vA2 = [];
        var vO7 = {
          _version: "3.3.1",
          _config: {
            classPrefix: "",
            enableClasses: true,
            enableJSClass: true,
            usePrefixes: true
          },
          _q: [],
          on: function (p28, p29) {
            var vThis2 = this;
            setTimeout(function () {
              p29(vThis2[p28]);
            }, 0);
          },
          addTest: function (p30, p31, p32) {
            vA2.push({
              name: p30,
              fn: p31,
              options: p32
            });
          },
          addAsyncTest: function (p33) {
            vA2.push({
              name: null,
              fn: p33
            });
          }
        };
        function f7() {}
        f7.prototype = vO7;
        f7 = new f7();
        var v14 = false;
        try {
          v14 = "WebSocket" in p23 && p23.WebSocket.CLOSING === 2;
        } catch (e3) {}
        ;
        f7.addTest("websockets", v14);
        var v15 = p24.documentElement;
        var v16 = v15.nodeName.toLowerCase() === "svg";
        f7.addTest("canvas", function () {
          var vF6 = f6("canvas");
          return !!vF6.getContext && !!vF6.getContext("2d");
        });
        f7.addTest("canvastext", function () {
          return f7.canvas !== false && f4(f6("canvas").getContext("2d").fillText) == "function";
        });
        (function () {
          var v17;
          var v18;
          var v19;
          var v20;
          var v21;
          var v22;
          var v23;
          for (var v24 in vA2) {
            if (vA2.hasOwnProperty(v24)) {
              v17 = [];
              v18 = vA2[v24];
              if (v18.name && (v17.push(v18.name.toLowerCase()), v18.options && v18.options.aliases && v18.options.aliases.length)) {
                for (v19 = 0; v19 < v18.options.aliases.length; v19++) {
                  v17.push(v18.options.aliases[v19].toLowerCase());
                }
              }
              ;
              v20 = f5(v18.fn, "function") ? v18.fn() : v18.fn;
              v21 = 0;
              for (; v21 < v17.length; v21++) {
                v22 = v17[v21];
                v23 = v22.split(".");
                if (v23.length === 1) {
                  f7[v23[0]] = v20;
                } else {
                  if (!!f7[v23[0]] && !(f7[v23[0]] instanceof Boolean)) {
                    f7[v23[0]] = new Boolean(f7[v23[0]]);
                  }
                  f7[v23[0]][v23[1]] = v20;
                }
                vA.push((v20 ? "" : "no-") + v23.join("-"));
              }
            }
          }
        })();
        (function (p34) {
          var v25 = v15.className;
          var v26 = f7._config.classPrefix || "";
          if (v16) {
            v25 = v25.baseVal;
          }
          if (f7._config.enableJSClass) {
            var v27 = new RegExp("(^|s)" + v26 + "no-js(s|$)");
            v25 = v25.replace(v27, "$1" + v26 + "js$2");
          }
          ;
          if (f7._config.enableClasses) {
            v25 += " " + v26 + p34.join(" " + v26);
            if (v16) {
              v15.className.baseVal = v25;
            } else {
              v15.className = v25;
            }
          }
        })(vA);
        delete vO7.addTest;
        delete vO7.addAsyncTest;
        for (var vLN0 = 0; vLN0 < f7._q.length; vLN0++) {
          f7._q[vLN0]();
        }
        ;
        p23.Modernizr = f7;
      })(window, document);
      return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext;
    }()) {
      document.getElementById("error-view").style.display = "block";
      return;
    }
    ;
    vO6.b = {
      c: function (p35, p36, p37) {
        p35.stop();
        p35.fadeIn(p36, p37);
      },
      d: function (p38, p39, p40) {
        p38.stop();
        p38.fadeOut(p39, p40);
      }
    };
    vO6.e = function () {
      var v28 = new Function("return PIXI;")();
      var v29 = v28.BLEND_MODES;
      var v30 = v28.WRAP_MODES;
      return {
        f: v28.Container,
        g: v28.BaseTexture,
        h: v28.Texture,
        i: v28.Renderer,
        j: v28.Graphics,
        k: v28.Shader,
        l: v28.Rectangle,
        m: v28.Sprite,
        n: v28.Text,
        o: v28.Geometry,
        p: v28.Mesh,
        q: {
          r: v29.ADD,
          s: v29.SCREEN,
          t: v29.MULTIPLY
        },
        u: {
          v: v30.REPEAT
        },
        w: {
          z: function (p41) {
            if (p41.parent != null) {
              p41.parent.removeChild(p41);
            }
          }
        }
      };
    }();
    vO4.A = {
      B: window.runtimeHash,
      C: "https://gateway.wormate.io",
      D: "https://resources.wormate.io",
      F: "/images/linelogo-valday2023.png",
      G: "/images/guest-avatar-valday2023.png",
      H: "/images/confetti-valday2023.png",
      I: "/images/bg-event-pattern-valday2023.png"
    };
    vO4.A.J = function () {
      var v31 = window.I18N_LANG;
      v31 ||= "en";
      return v31;
    }();
    vO4.A.K = function () {
      var v32;
      switch (vO4.A.J) {
        case "uk":
          v32 = "uk_UA";
          break;
        case "de":
          v32 = "de_DE";
          break;
        case "fr":
          v32 = "fr_FR";
          break;
        case "es":
          v32 = "es_ES";
          break;
        default:
          v32 = "en_US";
      }
      ;
      return v32;
    }();
    moment.locale(vO4.A.K);
    vO4.L = null;
    vO4.M = Math.PI * 2;
    vO4.N = Math.PI;
    vO6.e.fl = new PIXI.filters.ColorMatrixFilter();
    vO6.e.fl.matrix = [0.85, 0.1, 0.1, 0, 0, 0.1, 0.85, 0.1, 0, 0, 0.1, 0.1, 0.8, 0, 0, 0, 0, 0, 1, 0];
    (function () {
      var v33 = window.I18N_MESSAGES;
      vO5.O = function (p42) {
        return v33[p42];
      };
    })();
    vO5.P = function (p43) {
      if (p43[vO4.A.J]) {
        return p43[vO4.A.J];
      } else if (p43.en) {
        return p43.en;
      } else {
        return p43.x;
      }
    };
    vO5.Q = function (p44) {
      return encodeURI(p44);
    };
    vO5.R = function (p45, p46) {
      return setInterval(p45, p46);
    };
    vO5.S = function (p47, p48) {
      return setTimeout(p47, p48);
    };
    vO5.T = function (p49) {
      clearTimeout(p49);
    };
    vO5.U = function (p50) {
      var v34 = (Math.floor(p50) % 60).toString();
      var v35 = (Math.floor(p50 / 60) % 60).toString();
      var v36 = (Math.floor(p50 / 3600) % 24).toString();
      var v37 = Math.floor(p50 / 86400).toString();
      var v38 = vO5.O("util.time.days");
      var v39 = vO5.O("util.time.hours");
      var v40 = vO5.O("util.time.min");
      var v41 = vO5.O("util.time.sec");
      if (v37 > 0) {
        return v37 + " " + v38 + " " + v36 + " " + v39 + " " + v35 + " " + v40 + " " + v34 + " " + v41;
      } else if (v36 > 0) {
        return v36 + " " + v39 + " " + v35 + " " + v40 + " " + v34 + " " + v41;
      } else if (v35 > 0) {
        return v35 + " " + v40 + " " + v34 + " " + v41;
      } else {
        return v34 + " " + v41;
      }
    };
    vO5.V = function (p51) {
      if (p51.includes("href")) {
        return p51.replaceAll("href", "target=\"_black\" href");
      } else {
        return p51;
      }
    };
    vO5.W = function (p52, p53, p54) {
      var v42 = document.createElement("script");
      var v43 = true;
      if (f4(p53) !== "undefined" && p53 !== null) {
        if (f4(p53.id) !== "undefined") {
          v42.id = p53.id;
        }
        if (f4(p53.async) !== "undefined" && p53.async) {
          v42.async = "async";
        }
        if (f4(p53.defer) !== "undefined" && p53.defer) {
          v42.defer = "defer";
        }
        if (f4(p53.crossorigin) !== "undefined") {
          v42.crossorigin = p53.crossorigin;
        }
      }
      v42.type = "text/javascript";
      v42.src = p52;
      if (p54) {
        v42.onload = v42.onreadystatechange = function () {
          v43 = false;
          try {
            p54();
          } catch (e4) {}
          ;
          v42.onload = v42.onreadystatechange = null;
        };
      }
      (document.head || document.getElementsByTagName("head")[0]).appendChild(v42);
    };
    vO5.X = function (p55, p56) {
      var vP56 = p56;
      vP56.prototype = Object.create(p55.prototype);
      vP56.prototype.constructor = vP56;
      vP56.parent = p55;
      return vP56;
    };
    vO5.Y = function (p57) {
      p57 %= vO4.M;
      if (p57 < 0) {
        return p57 + vO4.M;
      } else {
        return p57;
      }
    };
    vO5.Z = function (p58, p59, p60) {
      return vO5.$(p60, p58, p59);
    };
    vO5.$ = function (p61, p62, p63) {
      if (p61 > p63) {
        return p63;
      } else if (p61 < p62) {
        return p62;
      } else if (Number.isFinite(p61)) {
        return p61;
      } else {
        return (p62 + p63) * 0.5;
      }
    };
    vO5._ = function (p64, p65, p66, p67) {
      if (p65 > p64) {
        return Math.min(p65, p64 + p66 * p67);
      } else {
        return Math.max(p65, p64 - p66 * p67);
      }
    };
    vO5.aa = function (p68, p69, p70, p71, p72) {
      return p69 + (p68 - p69) * Math.pow(1 - p71, p70 / p72);
    };
    vO5.ba = function (p73, p74, p75) {
      return p73 - (p73 - p74) * p75;
    };
    vO5.ca = function (p76, p77, p78, p79) {
      var vP78 = p78;
      var vP77 = p77;
      var v44 = p77 + p79;
      if (p76 == null) {
        throw new TypeError();
      }
      ;
      var v45 = p76.length >>> 0;
      var v46 = vP78 >> 0;
      var v47 = v46 < 0 ? Math.max(v45 + v46, 0) : Math.min(v46, v45);
      var v48 = vP77 >> 0;
      var v49 = v48 < 0 ? Math.max(v45 + v48, 0) : Math.min(v48, v45);
      var v50 = v44 === undefined ? v45 : v44 >> 0;
      var v51 = v50 < 0 ? Math.max(v45 + v50, 0) : Math.min(v50, v45);
      var v52 = Math.min(v51 - v49, v45 - v47);
      var vLN12 = 1;
      for (v49 < v47 && v47 < v49 + v52 && (vLN12 = -1, v49 += v52 - 1, v47 += v52 - 1); v52 > 0;) {
        if (v49 in p76) {
          p76[v47] = p76[v49];
        } else {
          delete p76[v47];
        }
        v49 += vLN12;
        v47 += vLN12;
        v52--;
      }
      ;
      return p76;
    };
    vO5.da = function (p80, p81) {
      return p80 + (p81 - p80) * Math.random();
    };
    vO5.ea = function (p82) {
      return p82[parseInt(Math.random() * p82.length)];
    };
    vO5.fa = function () {
      return Math.random().toString(36).substring(2, 15);
    };
    vO5.ga = function (p83, p84, p85) {
      var v53 = (1 - Math.abs(p85 * 2 - 1)) * p84;
      var v54 = v53 * (1 - Math.abs(p83 / 60 % 2 - 1));
      var v55 = p85 - v53 / 2;
      if (p83 >= 0 && p83 < 60) {
        return [v55 + v53, v55 + v54, v55];
      } else if (p83 >= 60 && p83 < 120) {
        return [v55 + v54, v55 + v53, v55];
      } else if (p83 >= 120 && p83 < 180) {
        return [v55, v55 + v53, v55 + v54];
      } else if (p83 >= 180 && p83 < 240) {
        return [v55, v55 + v54, v55 + v53];
      } else if (p83 >= 240 && p83 < 300) {
        return [v55 + v54, v55, v55 + v53];
      } else {
        return [v55 + v53, v55, v55 + v54];
      }
    };
    vO5.ha = function (p86, p87, p88) {
      $.get(p86).fail(p87).done(p88);
    };
    vO5.ia = function (p89, p90, p91, p92) {
      $.ajax({
        type: "GET",
        url: p89,
        xhrFields: {
          responseType: "arraybuffer",
          onprogress: function (p93) {
            if (p93.lengthComputable) {
              p92(p93.loaded / p93.total * 100);
            }
          }
        }
      }).fail(p90).done(p91);
    };
    vO5.ja = function () {
      return Date.now();
    };
    vO5.ka = function (p94, p95) {
      for (var v56 in p94) {
        if (p94.hasOwnProperty(v56)) {
          p95(v56, p94[v56]);
        }
      }
    };
    vO5.la = function (p96) {
      for (var v57 = p96.length - 1; v57 > 0; v57--) {
        var v58 = Math.floor(Math.random() * (v57 + 1));
        var v59 = p96[v57];
        p96[v57] = p96[v58];
        p96[v58] = v59;
      }
      ;
      return p96;
    };
    vO3.ma = new Function("return ArrayBuffer;")();
    vO3.na = new Function("return DataView;")();
    vO3.oa = function () {
      function _0x9f75x19(p97) {
        this.pa = p97;
        this.qa = 0;
      }
      var vLSGetInt8 = "getInt8";
      _0x9f75x19.prototype.ra = function () {
        var v60 = this.pa[vLSGetInt8](this.qa);
        this.qa += 1;
        return v60;
      };
      var vLSGetInt16 = "getInt16";
      _0x9f75x19.prototype.sa = function () {
        var v61 = this.pa[vLSGetInt16](this.qa);
        this.qa += 2;
        return v61;
      };
      var vLSGetInt32 = "getInt32";
      _0x9f75x19.prototype.ta = function () {
        var v62 = this.pa[vLSGetInt32](this.qa);
        this.qa += 4;
        return v62;
      };
      var vLSGetFloat32 = "getFloat32";
      _0x9f75x19.prototype.ua = function () {
        var v63 = this.pa[vLSGetFloat32](this.qa);
        this.qa += 4;
        return v63;
      };
      return _0x9f75x19;
    }();
    vO3.va = function () {
      function _0x9f75x19(p98) {
        this.pa = p98;
        this.qa = 0;
      }
      var vLSSetInt8 = "setInt8";
      _0x9f75x19.prototype.wa = function (p99) {
        this.pa[vLSSetInt8](this.qa, p99);
        this.qa += 1;
      };
      var vLSSetInt16 = "setInt16";
      _0x9f75x19.prototype.xa = function (p100) {
        this.pa[vLSSetInt16](this.qa, p100);
        this.qa += 2;
      };
      return _0x9f75x19;
    }();
    vO5.ya = function () {
      function _0x9f75x19() {
        $("#adbl-1").text(vO5.O("index.game.antiadblocker.msg1"));
        $("#adbl-2").text(vO5.O("index.game.antiadblocker.msg2"));
        $("#adbl-3").text(vO5.O("index.game.antiadblocker.msg3"));
        $("#adbl-4").text(vO5.O("index.game.antiadblocker.msg4").replace("{0}", 10));
        $("#adbl-continue span").text(vO5.O("index.game.antiadblocker.continue"));
        vO6.b.d($("#adbl-continue"), 1);
        vO6.b.c(v$2, 500);
        var vLN10 = 10;
        for (var vLN02 = 0; vLN02 < 10; vLN02++) {
          vO5.S(function () {
            vLN10--;
            $("#adbl-4").text(vO5.O("index.game.antiadblocker.msg4").replace("{0}", vLN10));
            if (vLN10 === 0) {
              try {
                ga("send", "event", "antiadblocker", vO4.A.B + "_complete");
              } catch (e5) {}
              ;
              vO6.b.c($("#adbl-continue"), 200);
            }
          }, (vLN02 + 1) * 1000);
        }
      }
      var v64 = false;
      function f11() {}
      var vO8 = {};
      var vLS1eaom01c3pxu9wd3 = "1eaom01c3pxu9wd3";
      var v$ = $("#" + vLS1eaom01c3pxu9wd3);
      var vLSJDHnkHtYwyXyVgG9 = "JDHnkHtYwyXyVgG9";
      var v$2 = $("#" + vLSJDHnkHtYwyXyVgG9);
      $("#adbl-continue").click(function () {
        v$2.fadeOut(500);
        f11(false);
      });
      vO8.za = function (p101) {
        f11 = p101;
        if (!v64) {
          try {
            aiptag.cmd.player.push(function () {
              var vO9 = {
                AD_WIDTH: 960,
                AD_HEIGHT: 540,
                AD_FULLSCREEN: true,
                AD_CENTERPLAYER: false,
                LOADING_TEXT: "loading advertisement"
              };
              vO9.PREROLL_ELEM = function () {
                return document.getElementById(vLS1eaom01c3pxu9wd3);
              };
              vO9.AIP_COMPLETE = function (p102) {
                f11(true);
                vO6.b.d(v$, 1);
                vO6.b.d(v$2, 1);
                try {
                  ga("send", "event", "preroll", vO4.A.B + "_complete");
                } catch (e6) {}
              };
              vO9.AIP_REMOVE = function () {};
              aiptag.adplayer = new aipPlayer(vO9);
            });
            v64 = true;
          } catch (e7) {}
        }
      };
      vO8.Aa = function () {
        if (f4(aiptag.adplayer) !== "undefined") {
          try {
            ga("send", "event", "preroll", vO4.A.B + "_request");
          } catch (e8) {}
          ;
          vO6.b.c(v$, 1);
          aiptag.cmd.player.push(function () {
            aiptag.adplayer.startPreRoll();
          });
        } else {
          try {
            ga("send", "event", "antiadblocker", vO4.A.B + "_start");
          } catch (e9) {}
          ;
          _0x9f75x19();
        }
      };
      return vO8;
    };
    vO5.Ba = function (p103, p104) {
      var v$3 = $("#" + p103);
      var vP104 = p104;
      var vO10 = {};
      var v65 = false;
      vO10.za = function () {
        if (!v65) {
          v$3.empty();
          v$3.append("<div id='" + vP104 + "'></div>");
          try {
            try {
              ga("send", "event", "banner", vO4.A.B + "_display");
            } catch (e10) {}
            ;
            aiptag.cmd.display.push(function () {
              aipDisplayTag.display(vP104);
            });
            v65 = true;
          } catch (e11) {}
        }
      };
      vO10.Ca = function () {
        try {
          try {
            ga("send", "event", "banner", vO4.A.B + "_refresh");
          } catch (e12) {}
          ;
          aiptag.cmd.display.push(function () {
            aipDisplayTag.display(vP104);
          });
        } catch (e13) {}
      };
      return vO10;
    };
    vO3.Da = function () {
      function _0x9f75x19(p105, p106, p107, p108, p109, p110, p111, p112, p113, p114) {
        this.Ea = p105;
        this.Fa = p106;
        this.Ga = null;
        this.Ha = false;
        this.Ia = p107;
        this.Ja = p108;
        this.Ka = p109;
        this.La = p110;
        this.Ma = p111 || (p113 || p109) / 2;
        this.Na = p112 || (p114 || p110) / 2;
        this.Oa = p113 || p109;
        this.Pa = p114 || p110;
        this.Qa = 0.5 - (this.Ma - this.Oa * 0.5) / this.Ka;
        this.Ra = 0.5 - (this.Na - this.Pa * 0.5) / this.La;
        this.Sa = this.Ka / this.Oa;
        this.Ta = this.La / this.Pa;
      }
      _0x9f75x19.Ua = function () {
        return new _0x9f75x19("", null, 0, 0, 0, 0, 0, 0, 0, 0);
      };
      _0x9f75x19.Va = function (p115, p116, p117) {
        return new _0x9f75x19(p115, p116, p117.x, p117.y, p117.w, p117.h, p117.px, p117.py, p117.pw, p117.ph);
      };
      _0x9f75x19.prototype.Wa = function () {
        if (this.Ha) {
          return this.Ga;
        } else {
          if (this.Fa != null) {
            this.Ga = new vO6.e.h(this.Fa, new vO6.e.l(this.Ia, this.Ja, this.Ka, this.La));
          }
          this.Ha = true;
          return this.Ga;
        }
      };
      _0x9f75x19.prototype.Xa = function () {
        if (this.Ga != null) {
          this.Ga.destroy();
        }
      };
      return _0x9f75x19;
    }();
    vO3.Ya = function () {
      function _0x9f75x6(p118, p119, p120, p121, p122, p123, p124, p125, p126, p127, p128, p129, p130, p131, p132, p133, p134, p135) {
        this.Za = p118;
        this.$a = p119;
        this._a = p120;
        this.ab = p121;
        this.bb = p122;
        this.cb = p123;
        this.db = p124;
        this.eb = p125;
        this.fb = p126;
        this.gb = p127;
        this.hb = p128;
        this.ib = p129;
        this.jb = p130;
        this.kb = p131;
        this.lb = p132;
        this.mb = p133;
        this.nb = p134;
        this.ob = p135;
      }
      _0x9f75x6.prototype.Xa = function () {
        for (var vLN03 = 0; vLN03 < this.Za.length; vLN03++) {
          this.Za[vLN03].dispose();
          this.Za[vLN03].destroy();
        }
        ;
        this.Za = [];
        for (var vLN04 = 0; vLN04 < this.$a.length; vLN04++) {
          this.$a[vLN04].Xa();
        }
        ;
        this.$a = [];
      };
      _0x9f75x6.Ua = function () {
        var v66 = new _0x9f75x6.pb(vO3.rb.qb, vO3.rb.qb);
        var v67 = new _0x9f75x6.sb("#ffffff", [vO3.rb.qb], [vO3.rb.qb]);
        return new _0x9f75x6([], [], {}, v66, {}, new _0x9f75x6.tb(vO3.rb.qb), {}, v67, {}, new _0x9f75x6.ub("", v67, v66), {}, new _0x9f75x6.vb([vO3.rb.qb]), {}, new _0x9f75x6.vb([vO3.rb.qb]), {}, new _0x9f75x6.vb([vO3.rb.qb]), {}, new _0x9f75x6.vb([vO3.rb.qb]));
      };
      _0x9f75x6.wb = function (p136, p137, p138, p139) {
        var v68 = new _0x9f75x6.pb(vO3.rb.qb, vO3.rb.qb);
        var v69 = new _0x9f75x6.sb("#ffffff", [p136], [p137]);
        return new _0x9f75x6([], [], {}, v68, {}, new _0x9f75x6.tb(vO3.rb.qb), {}, v69, {}, new _0x9f75x6.ub("", v69, v68), {}, new _0x9f75x6.vb([p138]), {}, new _0x9f75x6.vb([p139]), {}, new _0x9f75x6.vb([vO3.rb.qb]), {}, new _0x9f75x6.vb([vO3.rb.qb]));
      };
      _0x9f75x6.xb = function (p140, p141, p142, p143) {
        var vO11 = {};
        vO5.ka(p140.colorDict, function (p144, p145) {
          vO11[p144] = "#" + p145;
        });
        var vO12 = {};
        for (var vLN05 = 0; vLN05 < p140.skinArrayDict.length; vLN05++) {
          var v70 = p140.skinArrayDict[vLN05];
          vO12[v70.id] = new _0x9f75x6.sb(vO11[v70.prime], v70.base.map(function (p146) {
            return p141[p146];
          }), v70.glow.map(function (p147) {
            return p141[p147];
          }));
        }
        ;
        var v71;
        var v72 = p140.skinUnknown;
        v71 = new _0x9f75x6.sb(vO11[v72.prime], v72.base.map(function (p148) {
          return p141[p148];
        }), v72.glow.map(function (p149) {
          return p141[p149];
        }));
        var vO13 = {};
        vO5.ka(p140.eyesDict, function (p150, p151) {
          var vParseInt4 = parseInt(p150);
          vO13[vParseInt4] = new _0x9f75x6.vb(p151.base.map(function (p152) {
            return p141[p152.region];
          }));
        });
        var v73 = new _0x9f75x6.vb(p140.eyesUnknown.base.map(function (p153) {
          return p141[p153.region];
        }));
        var vO14 = {};
        vO5.ka(p140.mouthDict, function (p154, p155) {
          var vParseInt5 = parseInt(p154);
          vO14[vParseInt5] = new _0x9f75x6.vb(p155.base.map(function (p156) {
            return p141[p156.region];
          }));
        });
        var v74 = new _0x9f75x6.vb(p140.mouthUnknown.base.map(function (p157) {
          return p141[p157.region];
        }));
        var vO15 = {};
        vO5.ka(p140.hatDict, function (p158, p159) {
          var vParseInt6 = parseInt(p158);
          vO15[vParseInt6] = new _0x9f75x6.vb(p159.base.map(function (p160) {
            return p141[p160.region];
          }));
        });
        var v75 = new _0x9f75x6.vb(p140.hatUnknown.base.map(function (p161) {
          return p141[p161.region];
        }));
        var vO16 = {};
        vO5.ka(p140.glassesDict, function (p162, p163) {
          var vParseInt7 = parseInt(p162);
          vO16[vParseInt7] = new _0x9f75x6.vb(p163.base.map(function (p164) {
            return p141[p164.region];
          }));
        });
        var v76 = new _0x9f75x6.vb(p140.glassesUnknown.base.map(function (p165) {
          return p141[p165.region];
        }));
        var vO17 = {};
        vO5.ka(p140.portionDict, function (p166, p167) {
          p166 = parseInt(p166);
          vO17[p166] = new _0x9f75x6.pb(p141[p167.base], p141[p167.glow]);
        });
        var v77;
        var v78 = p140.portionUnknown;
        v77 = new _0x9f75x6.pb(p141[v78.base], p141[v78.glow]);
        var vO18 = {};
        vO5.ka(p140.abilityDict, function (p168, p169) {
          p168 = parseInt(p168);
          vO18[p168] = new _0x9f75x6.tb(p141[p169.base]);
        });
        var v79;
        var v80 = p140.abilityUnknown;
        v79 = new _0x9f75x6.tb(p141[v80.base]);
        var vO19 = {};
        vO5.ka(p140.teamDict, function (p170, p171) {
          p170 = parseInt(p170);
          vO19[p170] = new _0x9f75x6.ub(p171.title, new _0x9f75x6.sb(vO11[p171.skin.prime], null, p171.skin.glow.map(function (p172) {
            return p141[p172];
          })), new _0x9f75x6.pb(null, p141[p171.portion.glow]));
        });
        var v81 = new _0x9f75x6.ub({}, v71, v77);
        return new _0x9f75x6(p142, p143, vO17, v77, vO18, v79, vO12, v71, vO19, v81, vO13, v73, vO14, v74, vO15, v75, vO16, v76);
      };
      _0x9f75x6.prototype.yb = function (p173) {
        var v82 = vO5.la(Object.keys(this.db)).slice(0, p173);
        var v83 = vO5.la(Object.keys(this.hb)).slice(0, p173);
        var v84 = vO5.la(Object.keys(this.jb)).slice(0, p173);
        var v85 = vO5.la(Object.keys(this.lb)).slice(0, p173);
        var v86 = vO5.la(Object.keys(this.nb)).slice(0, p173);
        var vA3 = [];
        for (var vLN06 = 0; vLN06 < p173; vLN06++) {
          var v87 = v82.length > 0 ? v82[vLN06 % v82.length] : 0;
          var v88 = v83.length > 0 ? v83[vLN06 % v83.length] : 0;
          var v89 = v84.length > 0 ? v84[vLN06 % v84.length] : 0;
          var v90 = v85.length > 0 ? v85[vLN06 % v85.length] : 0;
          var v91 = v86.length > 0 ? v86[vLN06 % v86.length] : 0;
          vA3.push(new vO3.zb(v87, v88, v89, v90, v91));
        }
        ;
        return vA3;
      };
      _0x9f75x6.prototype.Ab = function (p174) {
        if (this.db.hasOwnProperty(p174)) {
          return this.db[p174];
        } else {
          return this.eb;
        }
      };
      _0x9f75x6.prototype.Bb = function (p175) {
        if (this.fb.hasOwnProperty(p175)) {
          return this.fb[p175];
        } else {
          return this.gb;
        }
      };
      _0x9f75x6.prototype.Cb = function (p176) {
        if (this.hb.hasOwnProperty(p176)) {
          return this.hb[p176];
        } else {
          return this.ib;
        }
      };
      _0x9f75x6.prototype.Db = function (p177) {
        if (this.jb.hasOwnProperty(p177)) {
          return this.jb[p177];
        } else {
          return this.kb;
        }
      };
      _0x9f75x6.prototype.Eb = function (p178) {
        if (this.nb.hasOwnProperty(p178)) {
          return this.nb[p178];
        } else {
          return this.ob;
        }
      };
      _0x9f75x6.prototype.Fb = function (p179) {
        if (this.lb.hasOwnProperty(p179)) {
          return this.lb[p179];
        } else {
          return this.mb;
        }
      };
      _0x9f75x6.prototype.Gb = function (p180) {
        if (this._a.hasOwnProperty(p180)) {
          return this._a[p180];
        } else {
          return this.ab;
        }
      };
      _0x9f75x6.prototype.Hb = function (p181) {
        if (this.bb.hasOwnProperty(p181)) {
          return this.bb[p181];
        } else {
          return this.cb;
        }
      };
      _0x9f75x6.ub = function () {
        function _0x9f75x19(p182, p183, p184) {
          this.Ib = p182;
          this.Jb = p183;
          this.Kb = p184;
        }
        return _0x9f75x19;
      }();
      _0x9f75x6.sb = function () {
        function _0x9f75x19(p185, p186, p187) {
          this.Lb = p185;
          this.Mb = p186;
          this.Nb = p187;
        }
        return _0x9f75x19;
      }();
      _0x9f75x6.vb = function () {
        function _0x9f75x19(p188) {
          this.Mb = p188;
        }
        return _0x9f75x19;
      }();
      _0x9f75x6.pb = function () {
        function _0x9f75x19(p189, p190) {
          this.Mb = p189;
          this.Nb = p190;
        }
        return _0x9f75x19;
      }();
      _0x9f75x6.tb = function () {
        function _0x9f75x19(p191) {
          this.Mb = p191;
        }
        return _0x9f75x19;
      }();
      return _0x9f75x6;
    }();
    vO3.rb = function () {
      function _0x9f75x6() {
        var v92 = vO6.e.g.from("/images/wear-ability.png");
        this.Ob = new vO3.Da("magnet_ability", v92, 158, 86, 67, 124, 148, 63.5, 128, 128);
        this.Pb = new vO3.Da("velocity_ability", v92, 158, 4, 87, 74, 203, 63.5, 128, 128);
        this.Qb = new vO3.Da("flex_ability", v92, 4, 4, 146, 146, 63.5, 63.5, 128, 128);
        var v93 = vO6.e.g.from("/images/def-look.png");
        var v94 = new vO3.Da("def_eyes", v93, 0, 0, 42, 80, 75, 64, 128, 128);
        var v95 = new vO3.Da("def_mouth", v93, 46, 0, 20, 48, 109, 63, 128, 128);
        var v96 = new vO3.Da("def_skin_glow", v93, 70, 0, 32, 32, 0, 0, 0, 0);
        var v97 = new vO3.Da("def_skin_base", v93, 46, 52, 64, 64, 0, 0, 0, 0);
        var v98 = vO3.Ya.wb(v97, v96, v94, v95);
        this.Rb = new vO3.Sb({}, v98);
        this.Tb = -10000;
        this.Ub = -10000;
        this.Vb = function () {
          var v99 = window.document.createElement("canvas");
          v99.width = 80;
          v99.height = 80;
          return {
            Wb: v99,
            Xb: v99.getContext("2d"),
            Ga: new vO6.e.h(vO6.e.g.from(v99))
          };
        }();
        this.Yb = null;
        this.Zb = [];
      }
      _0x9f75x6.qb = vO3.Da.Ua();
      _0x9f75x6.prototype.za = function () {};
      _0x9f75x6.prototype.$b = function (p192, p193, p194) {
        var vThis3 = this;
        var v100 = this.Rb._b();
        if (v100 > 0 && vO5.ja() - this.Tb < 1200000) {
          if (p192 != null) {
            p192();
          }
          return;
        }
        ;
        if (this.Yb != null && !this.Yb.ac()) {
          if (vO5.ja() - this.Tb < 300000) {
            if (p192 != null) {
              p192();
            }
            return;
          }
          ;
          this.Yb.bc();
          this.Yb = null;
        }
        ;
        var v101 = new vO3.cc(v100);
        v101.dc(function (p195, p196) {
          if (v101 === vThis3.Yb && p194 != null) {
            p194(p195, p196);
          }
        });
        v101.ec(function (p197) {
          if (v101 === vThis3.Yb && p193 != null) {
            p193(p197);
          }
        });
        v101.fc(function () {
          if (v101 === vThis3.Yb && p193 != null) {
            p193(new Error());
          }
        });
        v101.gc(function () {
          if (v101 === vThis3.Yb && p192 != null) {
            p192();
          }
        });
        v101.hc(function (p198) {
          if (v101 === vThis3.Yb) {
            vThis3.Ub = vO5.ja();
            vThis3.Yb = null;
            vThis3.ic();
            vThis3.Rb.jc().Xa();
            vThis3.Rb = p198;
            if (p192 != null) {
              p192();
            }
            vThis3.kc();
            return;
          }
          ;
          try {
            p198.jc().Xa();
          } catch (e14) {}
        });
        v101.lc();
        this.Tb = vO5.ja();
        this.Yb = v101;
      };
      _0x9f75x6.prototype.ic = function () {};
      _0x9f75x6.prototype.mc = function () {
        return this.Rb._b() > 0;
      };
      _0x9f75x6.prototype.nc = function () {
        return this.Rb.oc();
      };
      _0x9f75x6.prototype.pc = function () {
        return this.Vb;
      };
      _0x9f75x6.prototype.qc = function (p199) {
        this.Zb.push(p199);
      };
      _0x9f75x6.prototype.kc = function () {
        for (var vLN07 = 0; vLN07 < this.Zb.length; vLN07++) {
          this.Zb[vLN07]();
        }
      };
      _0x9f75x6.prototype.jc = function () {
        return this.Rb.jc();
      };
      return _0x9f75x6;
    }();
    vO3.rc = function () {
      function _0x9f75x19(p200) {
        this.sc = p200;
      }
      _0x9f75x19.prototype.tc = function (p201) {
        return this.sc[p201];
      };
      _0x9f75x19.uc = function () {
        function f21() {
          this.vc = [];
        }
        f21.prototype.wc = function (p202, p203) {
          for (var vLN08 = 0; vLN08 < this.vc.length; vLN08++) {
            if (this.vc[vLN08].xc === p202) {
              throw new Error();
            }
          }
          ;
          this.vc.push(new _0x9f75x19.yc(p202, p203));
          return this;
        };
        f21.prototype.zc = function () {
          var vLN09 = 0;
          for (var vLN010 = 0; vLN010 < this.vc.length; vLN010++) {
            vLN09 += this.vc[vLN010].Ac;
          }
          ;
          var vO20 = {};
          var vLN011 = 0;
          for (var vLN012 = 0; vLN012 < this.vc.length; vLN012++) {
            var v102 = this.vc[vLN012];
            v102.Ac = v102.Ac / vLN09;
            v102.Bc = vLN011;
            v102.Cc = vLN011 + v102.Ac;
            vLN011 = v102.Cc;
            vO20[v102.xc] = v102;
          }
          ;
          return new _0x9f75x19(vO20);
        };
        return f21;
      }();
      _0x9f75x19.yc = function () {
        function _0x9f75x19(p204, p205) {
          this.xc = p204;
          this.Ac = p205;
          this.Bc = 0;
          this.Cc = 0;
        }
        _0x9f75x19.prototype.Dc = function (p206) {
          return this.Bc + (this.Cc - this.Bc) * p206;
        };
        return _0x9f75x19;
      }();
      return _0x9f75x19;
    }();
    vO3.Ec = function () {
      function f23() {
        this.Fc = new vO6.e.f();
        this.Fc.sortableChildren = true;
        this.Gc = new vF5();
        this.Gc.zIndex = vLN0001 * ((vLN797 + 1) * 2 + 1 + 3);
        this.Hc = 0;
        this.Ic = new Array(vLN797);
        this.Ic[0] = this.Jc(0, new vO3.Kc(), new vO3.Kc());
        for (var vLN13 = 1; vLN13 < vLN797; vLN13++) {
          this.Ic[vLN13] = this.Jc(vLN13, new vO3.Kc(), new vO3.Kc());
        }
        ;
        this.Lc = 0;
        this.Mc = 0;
        this.Nc = 0;
      }
      var vLN0001 = 0.001;
      var vLN797 = 797;
      var v103 = Math.PI * 0.1;
      var v104 = -0.06640625;
      var vLN084375 = 0.84375;
      var vLN02578125 = 0.2578125;
      var v105 = -0.03515625;
      var v106 = -0.0625;
      var vLN05625 = 0.5625;
      var v107 = v104 * 3 + vLN084375;
      var v108 = vLN02578125 - v104 * 3;
      var v109 = v104 + v105;
      var vLN0375 = 0.375;
      var vLN075 = 0.75;
      var v110 = v106 + v106;
      var v111 = v105 * 3 + vLN02578125;
      var v112 = vLN084375 - v105 * 3;
      var v113 = v105 + v104;
      f23.Oc = vLN797;
      f23.prototype.Jc = function (p207, p208, p209) {
        var v114 = new vF7(p208, p209);
        p208.Pc.zIndex = vLN0001 * ((vLN797 - p207) * 2 + 1 + 3);
        p209.Pc.zIndex = vLN0001 * ((vLN797 - p207) * 2 - 2 + 3);
        return v114;
      };
      f23.prototype.Qc = function (p210, p211, p212, p213, p214, p215, p216, p217) {
        var v115 = p212.Mb;
        var v116 = p210 === vO3.Sc.Rc ? p211.Jb.Nb : p212.Nb;
        if (v115.length > 0 && v116.length > 0) {
          for (var vLN013 = 0; vLN013 < this.Ic.length; vLN013++) {
            this.Ic[vLN013].Uc.Tc(v115[vLN013 % v115.length]);
            this.Ic[vLN013].Vc.Tc(v116[vLN013 % v116.length]);
            this.Ic[vLN013].Uc.Wc(p217);
            this.Ic[vLN013].Vc.Wc(p217);
          }
        }
        ;
        this.Gc.Qc(p213, p214, p215, p216);
      };
      var vF5 = function () {
        var v117 = vO5.X(vO6.e.f, function () {
          vO6.e.f.call(this);
          this.sortableChildren = true;
          this.Xc = [];
          this.Yc = [];
          this.Zc = [];
          this.$c = [];
          this._c = new vO6.e.f();
          this.ad = [];
          for (var vLN014 = 0; vLN014 < 4; vLN014++) {
            var v118 = new vO3.Kc();
            v118.Tc(vO4.L.bd.Ob);
            this._c.addChild(v118.Pc);
            this.ad.push(v118);
          }
          ;
          this._c.zIndex = 0.0011;
          this.addChild(this._c);
          this.cd();
          this.dd = new vO3.Kc();
          this.dd.Tc(vO4.L.bd.Pb);
          this.dd.Pc.zIndex = 0.001;
          this.addChild(this.dd.Pc);
          this.ed();
        });
        v117.prototype.Qc = function (p218, p219, p220, p221) {
          this.fd(0.002, this.Xc, p218.Mb);
          this.fd(0.003, this.Yc, p219.Mb);
          this.fd(0.004, this.$c, p221.Mb);
          this.fd(0.005, this.Zc, p220.Mb);
        };
        v117.prototype.fd = function (p222, p223, p224) {
          while (p224.length > p223.length) {
            var v119 = new vO3.Kc();
            p223.push(v119);
            this.addChild(v119.gd());
          }
          ;
          while (p224.length < p223.length) {
            p223.pop().z();
          }
          ;
          var vP222 = p222;
          for (var vLN015 = 0; vLN015 < p224.length; vLN015++) {
            vP222 += 0.0001;
            var v120 = p223[vLN015];
            v120.Tc(p224[vLN015]);
            v120.Pc.zIndex = vP222;
          }
        };
        v117.prototype.hd = function (p225, p226, p227, p228) {
          this.visible = true;
          this.position.set(p225, p226);
          this.rotation = p228;
          for (var vLN016 = 0; vLN016 < this.Xc.length; vLN016++) {
            this.Xc[vLN016].jd(p227);
          }
          ;
          for (var vLN017 = 0; vLN017 < this.Yc.length; vLN017++) {
            this.Yc[vLN017].jd(p227);
          }
          ;
          for (var vLN018 = 0; vLN018 < this.Zc.length; vLN018++) {
            this.Zc[vLN018].jd(p227);
          }
          ;
          for (var vLN019 = 0; vLN019 < this.$c.length; vLN019++) {
            this.$c[vLN019].jd(p227);
          }
        };
        v117.prototype.kd = function () {
          this.visible = false;
        };
        v117.prototype.ld = function (p229, p230, p231, p232) {
          this._c.visible = true;
          var v121 = p231 / 1000;
          var v122 = 1 / this.ad.length;
          for (var vLN020 = 0; vLN020 < this.ad.length; vLN020++) {
            var v123 = 1 - (v121 + v122 * vLN020) % 1;
            this.ad[vLN020].Pc.alpha = 1 - v123;
            this.ad[vLN020].jd(p230 * (0.5 + v123 * 4.5));
          }
        };
        v117.prototype.cd = function () {
          this._c.visible = false;
        };
        v117.prototype.md = function (p233, p234, p235, p236) {
          this.dd.Pc.visible = true;
          this.dd.Pc.alpha = vO5._(this.dd.Pc.alpha, p233.nd ? 0.9 : 0.2, p236, 0.0025);
          this.dd.jd(p234);
        };
        v117.prototype.ed = function () {
          this.dd.Pc.visible = false;
        };
        return v117;
      }();
      f23.prototype.od = function (p237) {
        return this.Mc + this.Nc * Math.sin(p237 * v103 - this.Lc);
      };
      f23.prototype.pd = function (p238, p239, p240, p241) {
        var v124 = p238.qd * 2;
        var v125 = p238.rd;
        var v126 = p238.sd;
        var v127 = v126 * 4 - 3;
        var vV127 = v127;
        this.Lc = p239 / 400 * Math.PI;
        this.Mc = v124 * 1.5;
        this.Nc = v124 * 0.15 * p238.td;
        var v128;
        var v129;
        var v130;
        var v131;
        var v132;
        var v133;
        var v134;
        var v135;
        v129 = v125[0];
        v133 = v125[1];
        if (p241(v129, v133)) {
          v130 = v125[2];
          v134 = v125[3];
          v131 = v125[4];
          v135 = v125[5];
          var v136 = Math.atan2(v135 + v133 * 2 - v134 * 3, v131 + v129 * 2 - v130 * 3);
          this.Gc.hd(v129, v133, v124, v136);
          this.Ic[0].hd(v129, v133, v124, this.od(0), v136);
          this.Ic[1].hd(v107 * v129 + v108 * v130 + v109 * v131, v107 * v133 + v108 * v134 + v109 * v135, v124, this.od(1), vF7.ud(this.Ic[0], this.Ic[2]));
          this.Ic[2].hd(vLN0375 * v129 + vLN075 * v130 + v110 * v131, vLN0375 * v133 + vLN075 * v134 + v110 * v135, v124, this.od(2), vF7.ud(this.Ic[1], this.Ic[3]));
          this.Ic[3].hd(v111 * v129 + v112 * v130 + v113 * v131, v111 * v133 + v112 * v134 + v113 * v135, v124, this.od(3), vF7.ud(this.Ic[2], this.Ic[4]));
        } else {
          this.Gc.kd();
          this.Ic[0].kd();
          this.Ic[1].kd();
          this.Ic[2].kd();
          this.Ic[3].kd();
        }
        ;
        var vLN4 = 4;
        for (var vLN22 = 2, v137 = v126 * 2 - 4; vLN22 < v137; vLN22 += 2) {
          v129 = v125[vLN22];
          v133 = v125[vLN22 + 1];
          if (p241(v129, v133)) {
            v128 = v125[vLN22 - 2];
            v132 = v125[vLN22 - 1];
            v130 = v125[vLN22 + 2];
            v134 = v125[vLN22 + 3];
            v131 = v125[vLN22 + 4];
            v135 = v125[vLN22 + 5];
            this.Ic[vLN4].hd(v129, v133, v124, this.od(vLN4), vF7.ud(this.Ic[vLN4 - 1], this.Ic[vLN4 + 1]));
            vLN4++;
            this.Ic[vLN4].hd(v104 * v128 + vLN084375 * v129 + vLN02578125 * v130 + v105 * v131, v104 * v132 + vLN084375 * v133 + vLN02578125 * v134 + v105 * v135, v124, this.od(vLN4), vF7.ud(this.Ic[vLN4 - 1], this.Ic[vLN4 + 1]));
            vLN4++;
            this.Ic[vLN4].hd(v106 * v128 + vLN05625 * v129 + vLN05625 * v130 + v106 * v131, v106 * v132 + vLN05625 * v133 + vLN05625 * v134 + v106 * v135, v124, this.od(vLN4), vF7.ud(this.Ic[vLN4 - 1], this.Ic[vLN4 + 1]));
            vLN4++;
            this.Ic[vLN4].hd(v105 * v128 + vLN02578125 * v129 + vLN084375 * v130 + v104 * v131, v105 * v132 + vLN02578125 * v133 + vLN084375 * v134 + v104 * v135, v124, this.od(vLN4), vF7.ud(this.Ic[vLN4 - 1], this.Ic[vLN4 + 1]));
            vLN4++;
          } else {
            this.Ic[vLN4].kd();
            vLN4++;
            this.Ic[vLN4].kd();
            vLN4++;
            this.Ic[vLN4].kd();
            vLN4++;
            this.Ic[vLN4].kd();
            vLN4++;
          }
        }
        ;
        v129 = v125[v126 * 2 - 4];
        v133 = v125[v126 * 2 - 3];
        if (p241(v129, v133)) {
          v128 = v125[v126 * 2 - 6];
          v132 = v125[v126 * 2 - 5];
          v130 = v125[v126 * 2 - 2];
          v134 = v125[v126 * 2 - 1];
          this.Ic[v127 - 5].hd(v129, v133, v124, this.od(v127 - 5), vF7.ud(this.Ic[v127 - 6], this.Ic[v127 - 4]));
          this.Ic[v127 - 4].hd(v113 * v128 + v112 * v129 + v111 * v130, v113 * v132 + v112 * v133 + v111 * v134, v124, this.od(v127 - 4), vF7.ud(this.Ic[v127 - 5], this.Ic[v127 - 3]));
          this.Ic[v127 - 3].hd(v110 * v128 + vLN075 * v129 + vLN0375 * v130, v110 * v132 + vLN075 * v133 + vLN0375 * v134, v124, this.od(v127 - 3), vF7.ud(this.Ic[v127 - 4], this.Ic[v127 - 2]));
          this.Ic[v127 - 2].hd(v109 * v128 + v108 * v129 + v107 * v130, v109 * v132 + v108 * v133 + v107 * v134, v124, this.od(v127 - 2), vF7.ud(this.Ic[v127 - 3], this.Ic[v127 - 1]));
          this.Ic[v127 - 1].hd(v130, v134, v124, this.od(v127 - 1), vF7.ud(this.Ic[v127 - 2], this.Ic[v127 - 1]));
        } else {
          this.Ic[v127 - 5].kd();
          this.Ic[v127 - 4].kd();
          this.Ic[v127 - 3].kd();
          this.Ic[v127 - 2].kd();
          this.Ic[v127 - 1].kd();
        }
        if (this.Hc === 0 && vV127 > 0) {
          this.Fc.addChild(this.Gc);
        }
        if (this.Hc > 0 && vV127 === 0) {
          vO6.e.w.z(this.Gc);
        }
        while (this.Hc < vV127) {
          this.Fc.addChild(this.Ic[this.Hc].Uc.gd());
          this.Fc.addChild(this.Ic[this.Hc].Vc.gd());
          this.Hc += 1;
        }
        ;
        while (this.Hc > vV127) {
          this.Hc -= 1;
          this.Ic[this.Hc].Vc.z();
          this.Ic[this.Hc].Uc.z();
        }
        ;
        var v138 = p238.vd[vO3.xd.wd];
        if (this.Ic[0].yd() && v138 != null && v138.zd) {
          this.Gc.ld(p238, v124, p239, p240);
        } else {
          this.Gc.cd();
        }
        var v139 = p238.vd[vO3.xd.Ad];
        if (this.Ic[0].yd() && v139 != null && v139.zd) {
          this.Gc.md(p238, v124, p239, p240);
        } else {
          this.Gc.ed();
        }
      };
      var vF7 = function () {
        function _0x9f75x19(p242, p243) {
          this.Uc = p242;
          this.Uc.Bd(false);
          this.Vc = p243;
          this.Vc.Bd(false);
        }
        _0x9f75x19.prototype.hd = function (p244, p245, p246, p247, p248) {
          this.Uc.Bd(true);
          this.Uc.Cd(p244, p245);
          this.Uc.jd(p246);
          this.Uc.Dd(p248);
          this.Vc.Bd(true);
          this.Vc.Cd(p244, p245);
          this.Vc.jd(p247);
          this.Vc.Dd(p248);
        };
        _0x9f75x19.prototype.kd = function () {
          this.Uc.Bd(false);
          this.Vc.Bd(false);
        };
        _0x9f75x19.prototype.yd = function () {
          return this.Uc.yd();
        };
        _0x9f75x19.ud = function (p249, p250) {
          return Math.atan2(p249.Uc.Pc.position.y - p250.Uc.Pc.position.y, p249.Uc.Pc.position.x - p250.Uc.Pc.position.x);
        };
        return _0x9f75x19;
      }();
      return f23;
    }();
    vO3.xd = function () {
      function _0x9f75x19(p251) {
        this.Ed = p251;
        this.zd = false;
        this.Fd = 1;
      }
      _0x9f75x19.Ad = 0;
      _0x9f75x19.Gd = 1;
      _0x9f75x19.wd = 2;
      _0x9f75x19.Hd = 6;
      _0x9f75x19.Id = 3;
      _0x9f75x19.Jd = 4;
      _0x9f75x19.Kd = 5;
      return _0x9f75x19;
    }();
    vO3.Sb = function () {
      function _0x9f75x6(p252, p253) {
        this.Ld = p252;
        this.Md = p253;
      }
      _0x9f75x6.Nd = new _0x9f75x6({}, vO3.Ya.Ua());
      _0x9f75x6.prototype._b = function () {
        return this.Ld.revision;
      };
      _0x9f75x6.prototype.oc = function () {
        return this.Ld;
      };
      _0x9f75x6.prototype.jc = function () {
        return this.Md;
      };
      return _0x9f75x6;
    }();
    vO3.cc = function () {
      function f27(p254) {
        this.Od = function () {
          ++f27.Pd;
          return function (p255, p256) {};
        }();
        this.Qd = p254;
        this.Rd = null;
        this.Sd = null;
        this.Td = null;
        this.Ud = null;
        this.Vd = null;
        this.Wd = false;
        this.Xd = false;
        this.Yd = false;
      }
      f27.Zd = {
        $d: "0x0",
        _d: "0x1",
        ae: "0x2",
        be: "0x3",
        ce: "0x4"
      };
      f27.Pd = 100000;
      f27.de = new vO3.rc.uc().wc(f27.Zd.$d, 1).wc(f27.Zd._d, 10).wc(f27.Zd.ae, 50).wc(f27.Zd.be, 15).wc(f27.Zd.ce, 5).zc();
      f27.prototype.hc = function (p257) {
        this.Rd = p257;
      };
      f27.prototype.gc = function (p258) {
        this.Sd = p258;
      };
      f27.prototype.ec = function (p259) {
        this.Td = p259;
      };
      f27.prototype.fc = function (p260) {
        this.Ud = p260;
      };
      f27.prototype.dc = function (p261) {
        this.Vd = p261;
      };
      f27.prototype.ac = function () {
        return this.Yd;
      };
      f27.prototype.bc = function () {
        this.Wd = true;
      };
      f27.prototype.lc = function () {
        if (!this.Xd) {
          this.Xd = true;
          if (this.Wd) {
            this.ee();
            return;
          }
          ;
          this.fe();
        }
      };
      f27.prototype.fe = function () {
        function _0x9f75x19(p262) {
          var v140 = f27.Zd.$d;
          vThis4.ge(v140, f27.de.tc(v140).Dc(p262));
        }
        var vThis4 = this;
        if (this.Wd) {
          this.ee();
          return;
        }
        ;
        $.ajax({
          type: "GET",
          url: vO4.A.D + "/dynamic/assets/revision.json",
          xhrFields: {
            onprogress: function (p263) {
              if (p263.lengthComputable) {
                _0x9f75x19(p263.loaded / p263.total);
              }
            }
          }
        }).fail(function () {
          vThis4.he(new Error());
        }).done(function (p264) {
          if (p264 <= vThis4.Qd) {
            vThis4.ie();
            return;
          }
          ;
          vThis4.je();
        });
      };
      f27.prototype.je = function () {
        function _0x9f75x19(p265) {
          var v141 = f27.Zd._d;
          vThis5.ge(v141, f27.de.tc(v141).Dc(p265));
        }
        var vThis5 = this;
        if (this.Wd) {
          this.ee();
          return;
        }
        ;
        $.ajax({
          type: "GET",
          url: vO4.A.D + "/dynamic/assets/registry.json",
          xhrFields: {
            onprogress: function (p266) {
              if (p266.lengthComputable) {
                _0x9f75x19(p266.loaded / p266.total);
              }
            }
          }
        }).fail(function () {
          vThis5.he(new Error());
        }).done(function (p267) {
          if (p267.revision <= vThis5.Qd) {
            vThis5.ie();
            return;
          }
          ;
          f106(p267, vThis5);
        });
      };
f27.prototype.ke = function (p268) {
  function f30(p269) {
    var v142 = f27.Zd.ae;
    vThis6.ge(v142, f27.de.tc(v142).Dc(p269));
  }

  var vThis6 = this;

  if (this.Wd) {
    this.ee();
    return;
  }

  var vA4 = [];
  var vA5 = [];
  var vLN021 = 0;

  for (var v143 in p268.textureDict) {
    if (p268.textureDict.hasOwnProperty(v143)) {

      var v144 = p268.textureDict[v143];

      // FIX
      var v145 = v144.custom ? xURLrelativePath : "";

      var v146 = v144.fileSize;
      var v147 = v144.sha256;

      var v148 = new f27.le(v143, v145, v146, v147);

      vA4.push(v148);
      vA5.push(v148);

      vLN021 += v146;
    }
  }
};
        var v149;
        var vLN022 = 0;
        function f31(p270) {
          for (var vLN023 = 0; vLN023 < vA5.length; vLN023++) {
            try {
              window.URL.revokeObjectURL(vA5[vLN023].me);
            } catch (e15) {}
          }
          ;
          vThis6.he(p270);
        }
        function f32(p271) {
          var v150 = Math.floor(v149.ne * p271);
          f30((vLN022 + v150) / vLN021);
        }
        function f33(p272) {
          var v151 = new Blob([p272]);
          v149.me = window.URL.createObjectURL(v151);
          vLN022 += v149.ne;
          f34();
        }
        function f34() {
          if (vLN024 < vA5.length) {
            v149 = vA5[vLN024++];
            vThis6.oe(v149, f31, f33, f32);
            return;
          }
          ;
          vO5.S(function () {
            return vThis6.pe(p268, vA4);
          }, 0);
        }
        var vLN024 = 0;
        f34();
      };
      f27.prototype.oe = function (p273, p274, p275, p276) {
        $.ajax({
          type: "GET",
          url: p273.qe,
          xhrFields: {
            responseType: "arraybuffer",
            onprogress: function (p277) {
              if (p277.lengthComputable) {
                p276(p277.loaded / p277.total);
              }
            }
          }
        }).fail(function () {
          p274(new Error());
        }).done(function (p278) {
          p275(p278);
        });
      };
      f27.prototype.pe = function (p279, p280) {
        function f35(p281) {
          var v152 = f27.Zd.be;
          vThis7.ge(v152, f27.de.tc(v152).Dc(p281));
        }
        var vThis7 = this;
        if (this.Wd) {
          this.ee();
          return;
        }
        ;
        var v153;
        var v154;
        var vO21 = {};
        function f36() {
          for (var vLN025 = 0; vLN025 < p280.length; vLN025++) {
            try {
              window.URL.revokeObjectURL(p280[vLN025].me);
            } catch (e16) {}
          }
          ;
          vThis7.he(new Error());
        }
        function f37() {
          f35(vLN026 / p280.length);
          vO21[v153.re] = new vO3.se(v153.me, v154);
          f38();
        }
        function f38() {
          if (vLN026 < p280.length) {
            v153 = p280[vLN026++];
            v154 = vO6.e.g.from(v153.me);
            v154.on("error", f36);
            v154.on("loaded", f37);
            return;
          }
          ;
          vO5.S(function () {
            return vThis7.te(p279, vO21);
          }, 0);
        }
        var vLN026 = 0;
        f38();
      };
      f27.prototype.te = function (p282, p283) {
        function f39(p284) {
          var v155 = f27.Zd.ce;
          vThis8.ge(v155, f27.de.tc(v155).Dc(p284));
        }
        var vThis8 = this;
        var vO22 = {};
        var vLN027 = 0;
        var v156 = Object.values(p282.regionDict).length;
        var v157 = "#fbbe5f,#f7ca0b,#fcbe5e,#5cade5,#e03e42,#5aa9e1,#d2d91a,#e44a92".split(",");
        vO5.ka(p282.regionDict, function (p285, p286) {
          var v158 = vO3.Da.Va(p286.texture + ":" + p285, p283[p286.texture].Ga, p286);
          if (p286.texture === "t_abilities") {
            v158.zt = new PIXI.TextStyle({
              align: "center",
              fill: v157.shift(),
              fontSize: 22,
              fontWeight: "bold",
              lineJoin: "round",
              whiteSpace: "normal",
              wordWrap: true
            });
          }
          ;
          vO22[p285] = v158;
          if (++vLN027 % 10 == 0) {
            f39(vLN027 / v156);
          }
        });
        var v159 = Object.values(p283).map(function (p287) {
          return p287.Ga;
        });
        var v160 = Object.values(vO22);
        var v161 = new vO3.Sb(p282, vO3.Ya.xb(p282, vO22, v159, v160));
        vO5.S(function () {
          return vThis8.ue(v161);
        }, 0);
      };
      f27.le = function () {
        function _0x9f75x19(p288, p289, p290, p291) {
          this.re = p288;
          this.qe = p289;
          this.ne = p290;
          this.ve = p291;
          this.me = "";
        }
        return _0x9f75x19;
      }();
      f27.prototype.ue = function (p292) {
        if (this.Yd) {
          p292.jc().Xa();
          return;
        }
        ;
        this.Yd = true;
        var vThis9 = this;
        vO5.S(function () {
          return vThis9.Rd(p292);
        }, 0);
      };
      f27.prototype.ie = function () {
        if (!this.Yd) {
          this.Yd = true;
          var vThis10 = this;
          vO5.S(function () {
            return vThis10.Sd();
          }, 0);
        }
      };
      f27.prototype.he = function (p293) {
        if (!this.Yd) {
          this.Yd = true;
          var vThis11 = this;
          vO5.S(function () {
            return vThis11.Td(p293);
          }, 0);
        }
      };
      f27.prototype.ee = function () {
        if (!this.Yd) {
          this.Yd = true;
          var vThis12 = this;
          vO5.S(function () {
            return vThis12.Ud();
          }, 0);
        }
      };
      f27.prototype.ge = function (p294, p295) {
        if (!this.Yd && !this.Wd) {
          var vThis13 = this;
          vO5.S(function () {
            return vThis13.Vd(p294, p295);
          }, 0);
        }
      };
      return f27;
    }();
    vO3.we = function () {
      return {};
    }();
    vO3.xe = function () {
      function f41() {
        this.ye = vO3.xe.Ae.ze;
        this.Be = false;
        this.Ce = false;
        this.De = null;
        this.Ee = null;
      }
      f41.prototype.za = function () {};
      f41.prototype.Fe = function (p296) {
        this.Ce = p296;
      };
      f41.prototype.Ge = function (p297) {
        this.ye = p297;
        this.He();
      };
      f41.prototype.Ie = function (p298) {
        this.Be = p298;
        this.He();
      };
      f41.prototype.He = function () {};
      f41.prototype.Je = function (p299, p300) {
        if (!vO4.L.bd.mc()) {
          return null;
        }
        ;
        var v162 = p299[p300];
        if (v162 == null || v162.length === 0) {
          return null;
        } else {
          return v162[Math.floor(Math.random() * v162.length)].cloneNode();
        }
      };
      f41.prototype.Ke = function (p301, p302, p303) {
        if (this.Ce && !(p303 <= 0)) {
          var v163 = this.Je(p301, p302);
          if (v163 != null) {
            v163.volume = Math.min(1, p303);
            v163.play();
          }
        }
      };
      f41.prototype.Le = function (p304, p305) {
        if (this.ye.Me) {
          this.Ke(app.Oe.Ne, p304, p305);
        }
      };
      f41.prototype.Pe = function (p306, p307) {
        if (this.ye.Qe) {
          this.Ke(app.Oe.Re, p306, p307);
        }
      };
      f41.prototype.Se = function () {};
      f41.prototype.Te = function () {};
      f41.prototype.Ue = function () {};
      f41.prototype.Ve = function () {};
      f41.prototype.We = function () {};
      f41.prototype.Xe = function () {};
      f41.prototype.Ye = function (p308, p309, p310) {};
      f41.prototype.Ze = function (p311) {};
      f41.prototype.$e = function (p312) {};
      f41.prototype._e = function (p313) {};
      f41.prototype.af = function (p314) {};
      f41.prototype.bf = function (p315) {};
      f41.prototype.cf = function (p316) {};
      f41.prototype.df = function (p317) {};
      f41.prototype.ef = function (p318) {};
      f41.prototype.ff = function (p319) {};
      f41.prototype.gf = function (p320) {};
      f41.prototype.hf = function (p321) {};
      f41.prototype.if = function (p322) {};
      f41.prototype.jf = function (p323) {};
      f41.prototype.kf = function (p324) {};
      f41.prototype.lf = function (p325, p326) {};
      f41.prototype.mf = function (p327) {};
      f41.prototype.nf = function (p328, p329, p330) {};
      f41.Ae = {
        ze: {
          pf: false,
          qf: false,
          Qe: true,
          Me: false
        },
        rf: {
          pf: false,
          qf: true,
          Qe: true,
          Me: false
        },
        sf: {
          pf: true,
          qf: false,
          Qe: false,
          Me: true
        },
        tf: {
          pf: false,
          qf: false,
          Qe: true,
          Me: false
        },
        uf: {
          pf: false,
          qf: false,
          Qe: false,
          Me: false
        }
      };
      return f41;
    }();
    vO3.vf = function () {
      function _0x9f75x7(p331) {
        this.wf = p331;
        this.Wb = p331.get()[0];
        this.xf = 1;
        this.yf = 1;
        this.zf = new vO3.Af(vLN5, vLN40, vO3.Cf.Bf);
        this.Df = new vO6.e.i({
          view: this.Wb,
          backgroundColor: vLN028,
          antialias: true
        });
        this.Ef = new vO6.e.f();
        this.Ef.sortableChildren = true;
        this.Ff = new vO6.e.f();
        this.Ff.zIndex = 0;
        this.Ef.addChild(this.Ff);
        this.Gf = new vO3.Hf(vO4.L.Oe.If);
        this.Gf.Jf.zIndex = 1;
        this.Ef.addChild(this.Gf.Jf);
        var v164 = this.zf.Kf();
        v164.zIndex = 2;
        this.Ef.addChild(v164);
        this.Lf = new vO6.e.f();
        this.Lf.zIndex = 3;
        this.Ef.addChild(this.Lf);
        this.Mf = [];
        this.Nf = [];
        this.Of = [];
        this.za();
      }
      var vLN028 = 0;
      var vLN5 = 5;
      var vLN40 = 40;
      var vA6 = [{
        Pf: 1,
        Qf: Math.max(0, 0.15000000000000002),
        Rf: Math.max(0, -0.125)
      }, {
        Pf: 1,
        Qf: Math.max(0, 0.125),
        Rf: Math.max(0, -0.09999999999999998)
      }, {
        Pf: 1,
        Qf: Math.max(0, 0.09999999999999998),
        Rf: Math.max(0, -0.07499999999999996)
      }, {
        Pf: 1,
        Qf: Math.max(0, 0.07499999999999996),
        Rf: Math.max(0, -0.050000000000000044)
      }, {
        Pf: 1,
        Qf: Math.max(0, 0.050000000000000044),
        Rf: Math.max(0, -0.025000000000000022)
      }, {
        Pf: 1,
        Qf: Math.max(0, 0.025000000000000022),
        Rf: Math.max(0, 0)
      }, {
        Pf: 1,
        Qf: Math.max(0, 0),
        Rf: Math.max(0, 0.025000000000000022)
      }, {
        Pf: 1,
        Qf: Math.max(0, -0.025000000000000022),
        Rf: Math.max(0, 0.050000000000000044)
      }, {
        Pf: 1,
        Qf: Math.max(0, -0.050000000000000044),
        Rf: Math.max(0, 0.07499999999999996)
      }, {
        Pf: 1,
        Qf: Math.max(0, -0.07499999999999996),
        Rf: Math.max(0, 0.09999999999999998)
      }, {
        Pf: 1,
        Qf: Math.max(0, -0.09999999999999998),
        Rf: Math.max(0, 0.125)
      }, {
        Pf: 1,
        Qf: Math.max(0, -0.125),
        Rf: Math.max(0, 0.15000000000000002)
      }];
      _0x9f75x7.prototype.za = function () {
        this.Df.backgroundColor = vLN028;
        this.Mf = new Array(vA6.length);
        for (var vLN029 = 0; vLN029 < this.Mf.length; vLN029++) {
          this.Mf[vLN029] = new vO6.e.m();
          this.Mf[vLN029].texture = vO4.L.Oe.Sf;
          this.Mf[vLN029].anchor.set(0.5);
          this.Ff.addChild(this.Mf[vLN029]);
        }
        ;
        this.Nf = new Array(vO4.L.Oe.Tf.length);
        for (var vLN030 = 0; vLN030 < this.Nf.length; vLN030++) {
          this.Nf[vLN030] = new vO6.e.m();
          this.Nf[vLN030].texture = vO4.L.Oe.Tf[vLN030];
          this.Nf[vLN030].anchor.set(0.5);
          this.Lf.addChild(this.Nf[vLN030]);
        }
        ;
        this.Of = new Array(this.Nf.length);
        for (var vLN031 = 0; vLN031 < this.Of.length; vLN031++) {
          var v165 = vO5.ga((0.9 + Math.random() * 0.2) % 1 * 360, 1, 0.5);
          this.Of[vLN031] = {
            Uf: vO5.da(0, vO4.M),
            Vf: vO5.da(0.09, 0.16) * 0.66,
            Wf: vO5.da(0, 1),
            Xf: vO5.da(0, 1),
            Yf: 0,
            Pf: v165[0],
            Qf: v165[1],
            Rf: v165[2]
          };
        }
        ;
        this.Zf();
        this.$f();
      };
      _0x9f75x7.zd = false;
      _0x9f75x7._f = function (p332) {
        _0x9f75x7.zd = p332;
      };
      _0x9f75x7.prototype.ag = function (p333) {
        this.zf._f(p333);
      };
      _0x9f75x7.prototype.$f = function () {
        var v166 = window.devicePixelRatio ? window.devicePixelRatio : 1;
        this.xf = this.wf.width();
        this.yf = this.wf.height();
        this.Df.resize(this.xf, this.yf);
        this.Df.resolution = v166;
        this.Wb.width = v166 * this.xf;
        this.Wb.height = v166 * this.yf;
        var v167 = Math.max(this.xf, this.yf) * 0.6;
        for (var vLN032 = 0; vLN032 < this.Mf.length; vLN032++) {
          this.Mf[vLN032].width = v167;
          this.Mf[vLN032].height = v167;
        }
        ;
        this.Gf.bg(this.xf, this.yf);
        this.zf.$f();
      };
      _0x9f75x7.prototype.cg = function (p334, p335) {
        if (_0x9f75x7.zd) {
          var v168 = p334 / 1000;
          var v169 = this.wf.width();
          var v170 = this.wf.height();
          for (var vLN033 = 0; vLN033 < this.Mf.length; vLN033++) {
            var v171 = vA6[vLN033 % vA6.length];
            var v172 = this.Mf[vLN033];
            var v173 = vLN033 / this.Mf.length * vO4.N;
            var v174 = v168 * 0.5 * 0.12;
            var v175 = Math.cos((v174 + v173) * 3) * Math.cos(v173) - Math.sin((v174 + v173) * 5) * Math.sin(v173);
            var v176 = Math.cos((v174 + v173) * 3) * Math.sin(v173) + Math.sin((v174 + v173) * 5) * Math.cos(v173);
            var v177 = 0.2 + Math.cos(v173 + v168 * 0.075) * 0.2;
            var v178 = v171.Pf * 255 << 16 & 16711680 | v171.Qf * 255 << 8 & 65280 | v171.Rf * 255 & 255;
            v172.tint = v178;
            v172.alpha = v177;
            v172.position.set(v169 * (0.2 + (v175 + 1) * 0.5 * 0.6), v170 * (0.1 + (v176 + 1) * 0.5 * 0.8));
          }
          ;
          var v179 = Math.max(v169, v170) * 0.05;
          for (var vLN034 = 0; vLN034 < this.Nf.length; vLN034++) {
            var v180 = this.Of[vLN034];
            var v181 = this.Nf[vLN034];
            var v182 = vO4.M * vLN034 / this.Nf.length;
            v180.Wf = 0.2 + (Math.cos(v168 * 0.01 + v182) + Math.cos(v168 * 0.02 * 17 + v182) * 0.2 + 1) * 0.6 / 2;
            v180.Xf = 0.1 + (Math.sin(v168 * 0.01 + v182) + Math.sin(v168 * 0.02 * 21 + v182) * 0.2 + 1) * 0.8 / 2;
            var v183 = v180.Wf;
            var v184 = v180.Xf;
            var v185 = vO5.$(Math.pow(Math.cos((v182 + v168 * 0.048) * 1.5), 6), 0, 0.9);
            var v186 = (0.4 + (1 + Math.sin(v182 + v168 * 0.12)) * 0.5 * 1.2) * 1.2;
            var v187 = v182 + v168 * 0.1;
            var v188 = v180.Pf * 255 << 16 & 16711680 | v180.Qf * 255 << 8 & 65280 | v180.Rf * 255 & 255;
            v181.alpha = v185;
            v181.tint = v188;
            v181.position.set(v169 * v183, v170 * v184);
            v181.rotation = v187;
            var v189 = v181.texture.width / v181.texture.height;
            v181.width = v186 * v179;
            v181.height = v186 * v179 * v189;
          }
          ;
          this.dg();
          this.Df.render(this.Ef, null, true);
        }
      };
      _0x9f75x7.prototype.eg = function () {
        if (vO4.L.bd.mc()) {
          var v190 = vO4.L.bd.jc().yb(vLN5);
          for (var vLN035 = 0; vLN035 < vLN5; vLN035++) {
            this.zf.fg(vLN035, v190[vLN035]);
          }
        } else {
          var v191 = vO5.da(0, 1);
          for (var vLN036 = 0; vLN036 < vLN5; vLN036++) {
            var v192 = (v191 + vLN036 / vLN5) % 1;
            var v193 = vO5.ga(Math.floor(v192 * 360), 0.85, 0.5);
            var v194 = v193[0] * 255 & 255 | v193[1] * 255 << 8 & 65280 | v193[2] * 255 << 16 & 16711680;
            var v195 = "000000" + v194.toString(16);
            v195 = "#" + v195.substring(v195.length - 6, v195.length);
            this.zf.gg(vLN036, v195);
          }
        }
      };
      _0x9f75x7.prototype.Zf = function () {
        var v196 = Math.min(this.xf, this.yf);
        var v197 = vO5.ja();
        for (var vLN037 = 0; vLN037 < vLN5; vLN037++) {
          var v198 = vLN037 / vLN5 * vO4.M;
          var v_0x9f75x20 = f43(v197, 0.12, v198);
          v_0x9f75x20.Ia = v_0x9f75x20.Ia * 4;
          v_0x9f75x20.Ja = v_0x9f75x20.Ja * 4;
          this.zf.hg(vLN037, (this.xf + v_0x9f75x20.Ia * v196) * 0.5, (this.yf + v_0x9f75x20.Ja * v196) * 0.5);
        }
      };
      _0x9f75x7.prototype.dg = function () {
        var v199 = Math.min(this.xf, this.yf);
        var v200 = vO5.ja();
        for (var vLN038 = 0; vLN038 < vLN5; vLN038++) {
          var v201 = vLN038 / vLN5 * vO4.M;
          var v_0x9f75x202 = f43(v200, 0.12, v201);
          this.zf.ig(vLN038, (this.xf + v_0x9f75x202.Ia * v199) * 0.5, (this.yf + v_0x9f75x202.Ja * v199) * 0.5);
        }
        ;
        this.zf.jg();
      };
      function f43(p336, p337, p338) {
        var v202 = p336 / 1000;
        return {
          Ia: (Math.cos(p337 * v202 + p338) + Math.cos(p337 * -32 * v202 + p338) * 0.4 + Math.cos(p337 * 7 * v202 + p338) * 0.7) * 0.8,
          Ja: (Math.sin(p337 * v202 + p338) + Math.sin(p337 * -32 * v202 + p338) * 0.4 + Math.sin(p337 * 7 * v202 + p338) * 0.7) * 0.8
        };
      }
      return _0x9f75x7;
    }();
    vO3.kg = function () {
      function f44() {}
      f44.lg = "consent_state_2";
      f44.mg = "showPlayerNames";
      f44.ng = "musicEnabled";
      f44.og = "sfxEnabled";
      f44.pg = "account_type";
      f44.qg = "gameMode";
      f44.rg = "nickname";
      f44.sg = "skin";
      f44.tg = "prerollCount";
      f44.ug = "shared";
      f44.vg = function (p339, p340, p341) {
        var v203 = new Date();
        v203.setTime(v203.getTime() + p341 * 86400000);
        var v204 = "expires=" + v203.toUTCString();
        document.cookie = p339 + "=" + p340 + "; " + v204;
      };
      f44.wg = function (p342) {
        var v205 = p342 + "=";
        for (var v206 = document.cookie.split(";"), vLN039 = 0; vLN039 < v206.length; vLN039++) {
          for (var v207 = v206[vLN039]; v207.charAt(0) == " ";) {
            v207 = v207.substring(1);
          }
          ;
          if (v207.indexOf(v205) == 0) {
            return v207.substring(v205.length, v207.length);
          }
        }
        ;
        return "";
      };
      return f44;
    }();
    vO4.xg = function () {
      function _0x9f75x19(p343, p344, p345) {
        var v208 = false;
        for (var v209 = p345.length, vLN040 = 0, v210 = v209 - 1; vLN040 < v209; v210 = vLN040++) {
          if (p345[vLN040][1] > p344 != p345[v210][1] > p344 && p343 < (p345[v210][0] - p345[vLN040][0]) * (p344 - p345[vLN040][1]) / (p345[v210][1] - p345[vLN040][1]) + p345[vLN040][0]) {
            v208 = !v208;
          }
        }
        ;
        return v208;
      }
      var vA7 = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
      return {
        yg: function (p346, p347) {
          return _0x9f75x19(p347, p346, vA7);
        }
      };
    }();
    vO3.zg = function () {
      function _0x9f75x19(p348) {
        var v211;
        v211 = p348 > 0 ? "+" + Math.floor(p348) : p348 < 0 ? "-" + Math.floor(p348) : "0";
        var v212;
        var v213 = Math.min(1.5, 0.5 + p348 / 600);
        if (p348 < 1) {
          v212 = "0xFFFFFF";
        } else if (p348 < 30) {
          var v214 = (p348 - 1) / 29;
          v212 = f48((1 - v214) * 1 + v214 * 0.96, (1 - v214) * 1 + v214 * 0.82, (1 - v214) * 1 + v214 * 0);
        } else if (p348 < 300) {
          var v215 = (p348 - 30) / 270;
          v212 = f48((1 - v215) * 0.96 + v215 * 0.93, (1 - v215) * 0.82 + v215 * 0.34, (1 - v215) * 0 + v215 * 0.25);
        } else if (p348 < 700) {
          var v216 = (p348 - 300) / 400;
          v212 = f48((1 - v216) * 0.93 + v216 * 0.98, (1 - v216) * 0.34 + v216 * 0, (1 - v216) * 0.25 + v216 * 0.98);
        } else {
          v212 = f48(0.98, 0, 0.98);
        }
        ;
        var v217 = Math.random();
        var v218 = 1 + Math.random() * 0.5;
        return new vF8(v211, v212, true, 0.5, v213, v217, v218);
      }
      function f47(p349, p350) {
        var v219;
        var v220;
        if (p350) {
          v219 = 1.3;
          v220 = f48(0.93, 0.34, 0.25);
        } else {
          v219 = 1.1;
          v220 = f48(0.96, 0.82, 0);
        }
        return new vF8(p349, v220, true, 0.5, v219, 0.5, 0.7);
      }
      function f48(p351, p352, p353) {
        return ((p351 * 255 & 255) << 16) + ((p352 * 255 & 255) << 8) + (p353 * 255 & 255);
      }
      var v221 = vO5.X(vO6.e.f, function () {
        vO6.e.f.call(this);
        this.Ag = [];
        this.Bg = 0;
      });
      v221.prototype.Cg = function (p354) {
        this.Bg += p354;
        if (this.Bg >= 1) {
          var v222 = Math.floor(this.Bg);
          this.Bg -= v222;
          var v_0x9f75x19 = _0x9f75x19(v222);
          this.addChild(v_0x9f75x19);
          this.Ag.push(v_0x9f75x19);
        }
      };
      v221.prototype.Dg = function (p355, p356) {
        f101("count", p355, p356);
        if (p355) {
          var vF47 = f47(vO5.O("index.game.floating.headshot"), true);
          this.addChild(vF47);
          this.Ag.push(vF47);
        } else {
          var vF472 = f47(vO5.O("index.game.floating.wellDone"), false);
          this.addChild(vF472);
          this.Ag.push(vF472);
        }
      };
      v221.prototype.jg = function (p357, p358) {
        var v223 = vO4.L.Fg.sf.Eg;
        var v224 = v223.Df.width / v223.Df.resolution;
        var v225 = v223.Df.height / v223.Df.resolution;
        for (var vLN041 = 0; vLN041 < this.Ag.length;) {
          var v226 = this.Ag[vLN041];
          v226.Gg = v226.Gg + p358 / 2000 * v226.Hg;
          v226.Ig = v226.Ig + p358 / 2000 * v226.Jg;
          v226.alpha = Math.sin(Math.PI * v226.Ig) * 0.5;
          v226.scale.set(v226.Gg);
          v226.position.x = v224 * (0.25 + v226.Kg * 0.5);
          v226.position.y = v226.Lg ? v225 * (1 - (1 + v226.Ig) * 0.5) : v225 * (1 - (0 + v226.Ig) * 0.5);
          if (v226.Ig > 1) {
            vO6.e.w.z(v226);
            this.Ag.splice(vLN041, 1);
            vLN041--;
          }
          vLN041++;
        }
      };
      var vF8 = function () {
        return vO5.X(vO6.e.n, function (p359, p360, p361, p362, p363, p364, p365) {
          vO6.e.n.call(this, p359, {
            fill: p360,
            fontFamily: "PTSans",
            fontSize: 36
          });
          this.anchor.set(0.5);
          this.Lg = p361;
          this.Gg = p362;
          this.Hg = p363;
          this.Kg = p364;
          this.Ig = 0;
          this.Jg = p365;
        });
      }();
      return v221;
    }();
    vO3.se = function () {
      function _0x9f75x19(p366, p367) {
        this.me = p366;
        this.Ga = p367;
      }
      return _0x9f75x19;
    }();
    vO3.Sc = {
      Mg: 0,
      Rc: 16
    };
    vO3.Ng = function () {
      function f50() {
        this.Og = vO3.Sc.Mg;
        this.Pg = 0;
        this.Qg = 500;
        this.Rg = 4000;
        this.Sg = 7000;
      }
      f50.Tg = 0;
      f50.prototype.Ug = function () {
        return this.Qg * 1.02;
      };
      return f50;
    }();
    vO3.Vg = function () {
      function f51(p368) {
        this.wf = p368;
        this.Wb = p368.get()[0];
        this.Df = new vO6.e.i({
          view: this.Wb,
          backgroundColor: vLN042,
          antialias: true
        });
        this.Ef = new vO6.e.f();
        this.Ef.sortableChildren = true;
        this.Wg = Math.floor(Math.random() * 360);
        this.Xg = 0;
        this.Yg = 0;
        this.Zg = 15;
        this.$g = 0.5;
        this._g = 0;
        this.ah = new vO3.bh();
        this.ch = new vO6.e.j();
        this.dh = new vO6.e.f();
        this.eh = new vO6.e.f();
        this.eh.sortableChildren = true;
        this.fh = new vO6.e.f();
        this.gh = new vO6.e.f();
        this.gh.sortableChildren = true;
        this.hh = new vO6.e.f();
        this.ih = new vF9();
        this.jh = new vF10();
        this.kh = new vF12();
        this.lh = new vO3.zg();
        this.mh = new vO6.e.m();
        this.nh = {
          x: 0,
          y: 0
        };
        this.za();
      }
      var vLN042 = 0;
      f51.prototype.za = function () {
        this.Df.backgroundColor = vLN042;
        this.ah.Jf.zIndex = 10;
        this.Ef.addChild(this.ah.Jf);
        this.ch.zIndex = 20;
        this.Ef.addChild(this.ch);
        this.dh.zIndex = 5000;
        this.Ef.addChild(this.dh);
        this.eh.zIndex = 5100;
        this.Ef.addChild(this.eh);
        this.fh.zIndex = 10000;
        this.Ef.addChild(this.fh);
        this.mh.texture = vO4.L.Oe.oh;
        this.mh.anchor.set(0.5);
        this.mh.zIndex = 1;
        this.gh.addChild(this.mh);
        this.hh.alpha = 0.6;
        this.hh.zIndex = 2;
        this.gh.addChild(this.hh);
        this.lh.zIndex = 3;
        this.gh.addChild(this.lh);
        this.ih.alpha = 0.8;
        this.ih.zIndex = 4;
        this.gh.addChild(this.ih);
        this.jh.zIndex = 5;
        this.gh.addChild(this.jh);
        this.kh.zIndex = 6;
        this.gh.addChild(this.kh);
        this.$f();
      };
      f51.prototype.$f = function () {
        var v227 = window.devicePixelRatio ? window.devicePixelRatio : 1;
        var v228 = this.wf.width();
        var v229 = this.wf.height();
        this.Df.resize(v228, v229);
        this.Df.resolution = v227;
        this.Wb.width = v227 * v228;
        this.Wb.height = v227 * v229;
        this.$g = Math.min(Math.min(v228, v229), Math.max(v228, v229) * 0.625);
        this.mh.position.x = v228 / 2;
        this.mh.position.y = v229 / 2;
        this.mh.width = v228;
        this.mh.height = v229;
        this.ih.position.x = 60 + (vO.locals.streamer ? vO.positions.m : 0);
        this.ih.position.y = 60;
        this.jh.position.x = 110;
        this.jh.position.y = 10;
        this.kh.position.x = v228 - 225 - (vO.locals.streamer ? vO.positions.l : 0);
        this.kh.position.y = 1;
      };
      f51.prototype.jg = function (p369, p370) {
        this.Zg = 15;
        this.dh.removeChildren();
        this.eh.removeChildren();
        this.fh.removeChildren();
        this.hh.removeChildren();
        this.ah.ph(p369.Og === vO3.Sc.Mg ? vO4.L.Oe.qh : vO4.L.Oe.rh);
        var v230 = this.ch;
        v230.clear();
        v230.lineStyle(0.2, 16711680, 0.3);
        v230.drawCircle(0, 0, p369.Qg);
        v230.endFill();
        this.kh.sh = p370;
        this.hh.visible = p370;
      };
      f51.prototype.cg = function (p371, p372) {
        if (!(this.Df.width <= 5)) {
          var v231 = vO4.L.uh.th;
          var v232 = this.Df.width / this.Df.resolution;
          var v233 = this.Df.height / this.Df.resolution;
          this.Zg = vO5._(this.Zg, vO4.L.uh.vh, p372, 0.002);
          var v234 = this.$g / (this.Zg * vLN1);
          var v235 = vO4.L.uh.th.vd[vO3.xd.Hd];
          var v236 = v235 != null && v235.zd;
          this._g = vO5.$(this._g + p372 / 1000 * ((v236 ? 1 : 0) * 0.1 - this._g), 0, 1);
          this.mh.alpha = this._g;
          this.Wg = this.Wg + p372 * 0.01;
          if (this.Wg > 360) {
            this.Wg = this.Wg % 360;
          }
          this.Xg = Math.sin(p371 / 1200 * 2 * Math.PI);
          var v237 = v231.wh();
          this.nh.x = vO5.aa(this.nh.x, v237.Ia, p372, 0.5, 33.333);
          this.nh.y = vO5.aa(this.nh.y, v237.Ja, p372, 0.5, 33.333);
          var v238 = v232 / v234 / 2;
          var v239 = v233 / v234 / 2;
          vO4.L.uh.xh(this.nh.x - v238 * 1.3, this.nh.x + v238 * 1.3, this.nh.y - v239 * 1.3, this.nh.y + v239 * 1.3);
          this.ah.jg(this.nh.x, this.nh.y, v238 * 2, v239 * 2);
          var v240 = vO4.L.uh.yh.Qg;
          this.Ef.scale.x = v234;
          this.Ef.scale.y = v234;
          this.Ef.position.x = v232 / 2 - this.nh.x * v234;
          this.Ef.position.y = v233 / 2 - this.nh.y * v234;
          var v241 = Math.hypot(v237.Ia, v237.Ja);
          if (v241 > v240 - 10) {
            this.Yg = vO5.$(1 + (v241 - v240) / 10, 0, 1);
            var v242 = Math.cos(this.Wg * vO4.M / 360) * (1 - this.Yg) + this.Yg * 1;
            var v243 = Math.sin(this.Wg * vO4.M / 360) * (1 - this.Yg);
            var v244 = (Math.atan2(v243, v242) + vO4.M) % vO4.M * 360 / vO4.M;
            var v245 = this.Yg * (0.5 + this.Xg * 0.5);
            var v246 = vO5.ga(Math.floor(v244), 1, 0.75 - this.Yg * 0.25);
            this.ah.Wc(v246[0], v246[1], v246[2], 0.1 + v245 * 0.2);
          } else {
            this.Yg = 0;
            var v247 = vO5.ga(Math.floor(this.Wg), 1, 0.75);
            this.ah.Wc(v247[0], v247[1], v247[2], 0.1);
          }
          ;
          for (var vLN043 = 0; vLN043 < this.hh.children.length; vLN043++) {
            var v248 = this.hh.children[vLN043];
            v248.position.x = v232 / 2 - (this.nh.x - v248.zh.x) * v234;
            v248.position.y = v233 / 2 - (this.nh.y - v248.zh.y) * v234;
          }
          ;
          this.ih.Ah.position.x = v237.Ia / v240 * this.ih.Bh;
          this.ih.Ah.position.y = v237.Ja / v240 * this.ih.Bh;
          this.jh.Ch(p371);
          this.lh.jg(p371, p372);
          this.Df.render(this.Ef, null, true);
          this.Df.render(this.gh, null, false);
          this.ih.Ah.x0 = this.ih.Ah.x0 || -10000;
          this.ih.Ah.y0 = this.ih.Ah.y0 || -10000;
          if (Math.abs(this.ih.Ah.x - this.ih.Ah.x0) > 2 || Math.abs(this.ih.Ah.y - this.ih.Ah.y0) > 2) {
            this.ih.Ah.x0 = Math.round(this.ih.Ah.x);
            this.ih.Ah.y0 = Math.round(this.ih.Ah.y);
            vF18.s(1, [this.ih.Ah.x0, this.ih.Ah.y0]);
          }
        }
      };
      f51.prototype.Dh = function (p373, p374) {
        p374.Eh.Uc.gd().zIndex = (p373 + 2147483648) / 4294967296 * 5000;
        this.dh.addChild(p374.Eh.Vc.gd());
        this.eh.addChild(p374.Eh.Uc.gd());
      };
      f51.prototype.Fh = function (p375, p376, p377) {
        p376.Fc.zIndex = vO4.L.uh.yh.Pg ? 0 : 10 + (p375 + 32768) / 65536 * 5000;
        this.fh.addChild(p376.Fc);
        if (p375 !== vO4.L.uh.yh.Pg) {
          this.hh.addChild(p377);
        }
      };
      var vF9 = function () {
        return vO5.X(vO6.e.f, function () {
          vO6.e.f.call(this);
          this.Bh = 40;
          this.Gh = new vO6.e.m();
          this.Gh.anchor.set(0.5);
          this.Ah = new vO6.e.j();
          this.Zf = new vO6.e.j();
          var v249 = new vO6.e.j();
          this.zClock = new PIXI.Sprite.fromImage(xURLNG");
          v249.beginFill("black", 0.4);
          v249.drawCircle(0, 0, this.Bh);
          v249.endFill();
          v249.lineStyle(2, 16225317);
          v249.drawCircle(0, 0, this.Bh);
          v249.moveTo(0, -this.Bh);
          v249.lineTo(0, +this.Bh);
          v249.moveTo(-this.Bh, 0);
          v249.lineTo(+this.Bh, 0);
          v249.endFill();
          this.Gh.alpha = 0.5;
          this.Ah.zIndex = 2;
          this.Ah.alpha = 0.9;
          this.Ah.beginFill(16225317);
          this.Ah.drawCircle(0, 0, this.Bh * 0.06);
          this.Ah.endFill();
          this.Ah.lineStyle(1, "black");
          this.Ah.drawCircle(0, 0, this.Bh * 0.06);
          this.Ah.endFill();
          this.Zf.zIndex = 3;
          this.Zf.alpha = 0.9;
          this.Zf.beginFill(1811741);
          this.Zf.drawCircle(0, 0, this.Bh * 0.06);
          this.Zf.endFill();
          this.Zf.lineStyle(1, "black");
          this.Zf.drawCircle(0, 0, this.Bh * 0.06);
          this.Zf.endFill();
          this.addChild(v249);
          this.addChild(this.Gh);
          this.addChild(this.Ah);
          this.addChild(this.Zf);
          this.zClock.width = 100;
          this.zClock.height = 100;
          this.zClock.x = -50;
          this.zClock.y = -50;
          this.zClock.zIndex = 10;
          this.addChild(this.zClock);
          window._x7 = this;
          const v250 = new PIXI.TextStyle({
            align: "center",
            fill: "#f4d100",
            fontSize: 12,
            fontWeight: "bold",
            lineJoin: "round",
            whiteSpace: "normal",
            wordWrap: true
          });
          const v251 = new PIXI.TextStyle({
            align: "center",
            fill: "#ed563f",
            fontSize: 12,
            fontWeight: "bold",
            lineJoin: "round",
            whiteSpace: "normal",
            wordWrap: true
          });
          this.container_count = new PIXI.Container();
          this.container_count.x = -45;
          this.container_count.y = -52;
          this.hsLabel = new PIXI.Text("HS", v251);
          this.hsLabel.anchor.set(0.5);
          this.klLabel = new PIXI.Text("KILL", v250);
          this.klLabel.anchor.set(0.5);
          this.gHsVal = new PIXI.Text("0", v251);
          this.gHsVal.anchor.set(0.5);
          this.tHsVal = new PIXI.Text("0", v251);
          this.tHsVal.anchor.set(0.5);
          this.gKlVal = new PIXI.Text("0", v250);
          this.gKlVal.anchor.set(0.5);
          this.tKlVal = new PIXI.Text("0", v250);
          this.tKlVal.anchor.set(0.5);
          this.hsLabel.x = 22;
          this.hsLabel.y = 116;
          this.klLabel.x = 67;
          this.klLabel.y = 116;
          this.gHsVal.x = 22;
          this.gHsVal.y = 131;
          this.gKlVal.x = 67;
          this.gKlVal.y = 131;
          this.tHsVal.x = 22;
          this.tHsVal.y = 151;
          this.tKlVal.x = 67;
          this.tKlVal.y = 151;
          if (!true) {
            this.tHsVal.alpha = 0;
            this.tKlVal.alpha = 0;
          }
          this.container_count.addChild(this.hsLabel);
          this.container_count.addChild(this.gHsVal);
          this.container_count.addChild(this.tHsVal);
          this.container_count.addChild(this.klLabel);
          this.container_count.addChild(this.gKlVal);
          this.container_count.addChild(this.tKlVal);
          this.addChild(this.container_count);
          this.b2 = new PIXI.Graphics();
          this.b2.lineStyle(2, 13466405);
          this.b2.drawRoundedRect(-5, 106, 100, 56, 10);
          this.container_count.addChild(this.b2);
          this.b3 = new PIXI.Graphics();
          this.b3.lineStyle(2, 13466405);
          this.b3.drawRect(-4, 141, 196, 0);
          this.container_count.addChild(this.b3);
          this.headshots_container = new PIXI.Container();
          this.headshots_container.x = -50;
          this.headshots_container.y = 120;
          const v252 = new PIXI.TextStyle({
            align: "left",
            fill: "#ed563f",
            fontSize: 13,
            fontWeight: "bold",
            lineJoin: "round",
            whiteSpace: "normal",
            wordWrap: false
          });
          this.topHS = new PIXI.Text("Top (headShots):", v252);
          this.topHS.x = 0;
          this.topHS.y = 0;
          this.addChild(this.headshots_container);
          this.headshots_container.addChild(this.topHS);
          this.topHSPlayers = [];
          this.killMessages = [];
          for (let vLN14 = 1; vLN14 < 6; vLN14++) {
            let vO23 = {
              ig: new vO6.e.n(vLN14, {
                fontFamily: "PTSans",
                fontSize: 11,
                fontWeight: "bold",
                fill: "white"
              })
            };
            vO23.ig.anchor.x = 1;
            vO23.ig.position.x = 0;
            vO23.ig.position.y = vLN14 * 20;
            this.headshots_container.addChild(vO23.ig);
            vO23.jg = new vO6.e.n("--", {
              fontFamily: "PTSans",
              fontSize: 11,
              fontWeight: "bold",
              fill: "white"
            });
            vO23.jg.anchor.x = 0;
            vO23.jg.position.x = 5;
            vO23.jg.position.y = vLN14 * 20;
            this.headshots_container.addChild(vO23.jg);
            vO23.kg = new vO6.e.n("", {
              fontFamily: "PTSans",
              fontSize: 11,
              fontWeight: "bold",
              fill: "white"
            });
            vO23.kg.anchor.x = 1;
            vO23.kg.position.x = 110;
            vO23.kg.position.y = vLN14 * 20;
            this.headshots_container.addChild(vO23.kg);
            this.topHSPlayers.push(vO23);
          }
          ;
          for (let vLN15 = 1; vLN15 < 11; vLN15++) {
            let vO24 = {
              ig: new vO6.e.n("", {
                fontFamily: "PTSans",
                fontSize: 12,
                fontWeight: "bold",
                fill: "green"
              })
            };
            vO24.ig.anchor.x = 0;
            vO24.ig.position.x = -10;
            vO24.ig.position.y = 65 + vLN15 * 55;
            this.headshots_container.addChild(vO24.ig);
            vO24.jg = new vO6.e.n("", {
              fontFamily: "PTSans",
              fontSize: 12,
              fontWeight: "bold",
              fill: "#c10000"
            });
            vO24.jg.anchor.x = 0;
            vO24.jg.position.x = 8;
            vO24.jg.position.y = 80 + vLN15 * 55;
            this.headshots_container.addChild(vO24.jg);
            vO24.kg = new vO6.e.n("", {
              fontFamily: "PTSans",
              fontSize: 12,
              fontWeight: "bold",
              fill: "white"
            });
            vO24.kg.anchor.x = 0;
            vO24.kg.position.x = 8;
            vO24.kg.position.y = 95 + vLN15 * 55;
            this.headshots_container.addChild(vO24.kg);
            this.killMessages.push(vO24);
          }
        });
      }();
      var vF10 = function () {
        var v253 = vO5.X(vO6.e.f, function () {
          vO6.e.f.call(this);
          this.Hh = {};
        });
        var vA8 = [30, 30, 30, 80, 40, 20, 30];
        v253.prototype.Ch = function (p378) {
          var v254 = 0.5 + Math.cos(vO4.M * (p378 / 1000 / 1.6)) * 0.5;
          for (var v255 in this.Hh) {
            var v256 = this.Hh[v255];
            var v257 = v256.Ih;
            v256.alpha = 1 - v257 + v257 * v254;
          }
        };
        v253.prototype.jg = function (p379) {
          for (var v258 in this.Hh) {
            if (p379[v258] == null || !p379[v258].zd) {
              vO6.e.w.z(this.Hh[v258]);
              delete this.Hh[v258];
            }
          }
          ;
          var vLN044 = 0;
          for (var v259 in p379) {
            var v260 = p379[v259];
            if (v260.zd) {
              var v261 = this.Hh[v259];
              if (!v261) {
                var v262 = vO4.L.bd.jc().Hb(v260.Ed).Mb;
                v261 = new vF11();
                v261.texture = v262.Wa();
                v261.width = 40;
                v261.height = 40;
                this.Hh[v259] = v261;
                this.addChild(v261);
                v261.tc = new PIXI.Text("88", v262.zt);
                v261.tc.anchor.set(0.5);
                v261.tc.y = 74;
                v261.tc.x = 32;
                v261.addChild(v261.tc);
              }
              ;
              v261.Ih = v260.Fd;
              v261.tc.text = Math.floor(vA8[v259] / 99 * (99 - v260.g));
              v261.position.x = (vO.locals.streamer ? vO.positions.m : 0) + vLN044;
              vLN044 += 40;
            }
          }
        };
        var vF11 = function () {
          return vO5.X(vO6.e.m, function () {
            vO6.e.m.call(this);
            this.Ih = 0;
          });
        }();
        return v253;
      }();
      var vF12 = function () {
        var v263 = vO5.X(vO6.e.f, function () {
          vO6.e.f.call(this);
          this.sh = true;
          this.Jh = 12;
          this.Kh = 9;
          this.Ag = [];
          for (var vLN045 = 0; vLN045 < 14; vLN045++) {
            this.Lh();
          }
        });
        v263.prototype.jg = function (p380) {
          var v264 = vO4.L.uh.yh.Og === vO3.Sc.Rc;
          var vLN046 = 0;
          var vLN047 = 0;
          if (vLN047 >= this.Ag.length) {
            this.Lh();
          }
          this.Ag[vLN047].Mh(1, "white");
          this.Ag[vLN047].Nh("", vO5.O("index.game.leader.top10"), `(${vO4.L.uh.Oh} online)`);
          this.Ag[vLN047].position.y = vLN046;
          vLN046 += this.Jh;
          vLN047 += 1;
          if (p380.Ph.length > 0) {
            vLN046 += this.Kh;
          }
          for (var vLN048 = 0; vLN048 < p380.Ph.length; vLN048++) {
            var v265 = p380.Ph[vLN048];
            var v266 = vO4.L.bd.jc().Bb(v265.Qh);
            var vLS = "";
            var v267 = vO4.L.bd.nc().textDict[v266.Ib];
            if (v267 != null) {
              vLS = vO5.P(v267);
            }
            if (vLN047 >= this.Ag.length) {
              this.Lh();
            }
            this.Ag[vLN047].Mh(0.8, v266.Jb.Lb);
            this.Ag[vLN047].Nh(`${vLN048 + 1}`, vLS, `${Math.floor(v265.Rh)}`);
            this.Ag[vLN047].position.y = vLN046;
            vLN046 += this.Jh;
            vLN047 += 1;
          }
          ;
          if (p380.Sh.length > 0) {
            vLN046 += this.Kh;
          }
          for (var vLN049 = 0; vLN049 < p380.Sh.length; vLN049++) {
            var v268 = p380.Sh[vLN049];
            var v269 = vO4.L.uh.yh.Pg === v268.Th;
            var vUndefined = undefined;
            var vUndefined2 = undefined;
            if (v269) {
              vUndefined = "white";
              vUndefined2 = vO4.L.uh.th.Uh.Ea;
            } else {
              var v270 = vO4.L.uh.Vh[v268.Th];
              if (v270 != null) {
                vUndefined = v264 ? vO4.L.bd.jc().Bb(v270.Uh.Wh).Jb.Lb : vO4.L.bd.jc().Ab(v270.Uh.Xh).Lb;
                vUndefined2 = this.sh ? v270.Uh.Ea : "---";
              } else {
                vUndefined = "gray";
                vUndefined2 = "?";
              }
            }
            ;
            if (v269) {
              vLN046 += this.Kh;
            }
            if (vLN047 >= this.Ag.length) {
              this.Lh();
            }
            this.Ag[vLN047].Mh(v269 ? 1 : 0.8, vUndefined);
            this.Ag[vLN047].Nh(`${vLN049 + 1}`, vUndefined2, `${Math.floor(v268.Rh)}`);
            this.Ag[vLN047].position.y = vLN046;
            vLN046 += this.Jh;
            vLN047 += 1;
            if (v269) {
              vLN046 += this.Kh;
            }
          }
          ;
          for (vO4.L.uh.Yh > p380.Sh.length && (vLN046 += this.Kh, vLN047 >= this.Ag.length && this.Lh(), this.Ag[vLN047].Mh(1, "white"), this.Ag[vLN047].Nh(`${vO4.L.uh.Yh}`, vO4.L.uh.th.Uh.Ea, `${Math.floor(vO4.L.uh.th.Rh)}`), this.Ag[vLN047].position.y = vLN046, vLN046 += this.Jh, vLN047 += 1, vLN046 += this.Kh); this.Ag.length > vLN047;) {
            vO6.e.w.z(this.Ag.pop());
          }
        };
        v263.prototype.Lh = function () {
          var v271 = new vF13();
          v271.position.y = 0;
          if (this.Ag.length > 0) {
            v271.position.y = this.Ag[this.Ag.length - 1].position.y + this.Jh;
          }
          this.Ag.push(v271);
          this.addChild(v271);
        };
        var vF13 = function () {
          var v272 = vO5.X(vO6.e.f, function () {
            vO6.e.f.call(this);
            this.Zh = new vO6.e.n("", {
              fontFamily: "PTSans",
              fontSize: 12,
              fill: "white"
            });
            this.Zh.anchor.x = 1;
            this.Zh.position.x = 30;
            this.addChild(this.Zh);
            this.$h = new vO6.e.n("", {
              fontFamily: "PTSans",
              fontSize: 12,
              fill: "white"
            });
            this.$h.anchor.x = 0;
            this.$h.position.x = 35;
            this.addChild(this.$h);
            this._h = new vO6.e.n("", {
              fontFamily: "PTSans",
              fontSize: 12,
              fill: "white"
            });
            this._h.anchor.x = 1;
            this._h.position.x = 220;
            this.addChild(this._h);
          });
          v272.prototype.Nh = function (p381, p382, p383) {
            this.Zh.text = p381;
            this._h.text = p383;
            var vP382 = p382;
            for (this.$h.text = vP382; this.$h.width > 100;) {
              vP382 = vP382.substring(0, vP382.length - 1);
              this.$h.text = vP382 + "..";
            }
          };
          v272.prototype.Mh = function (p384, p385) {
            this.Zh.alpha = p384;
            this.Zh.style.fill = p385;
            this.$h.alpha = p384;
            this.$h.style.fill = p385;
            this._h.alpha = p384;
            this._h.style.fill = p385;
          };
          return v272;
        }();
        return v263;
      }();
      return f51;
    }();
    vO3.ai = function () {
      function f52(p386) {
        this.uh = p386;
        this.bi = [];
        this.ci = 0;
      }
      f52.prototype.di = function (p387) {
        this.bi.push(new vO3.oa(new vO3.na(p387)));
      };
      f52.prototype.ei = function () {
        this.bi = [];
        this.ci = 0;
      };
      f52.prototype.fi = function () {
        for (var vLN050 = 0; vLN050 < 10; vLN050++) {
          if (this.bi.length === 0) {
            return;
          }
          ;
          var v273 = this.bi.shift();
          try {
            this.gi(v273);
          } catch (e17) {
            throw e17;
          }
        }
      };
      f52.prototype.gi = function (p388) {
        switch (p388.ra(0) & 255) {
          case 0:
            this.hi(p388);
            return;
          case 1:
            this.ii(p388);
            return;
          case 2:
            this.ji(p388);
            return;
          case 3:
            this.ki(p388);
            return;
          case 4:
            this.li(p388);
            return;
          case 5:
            this.mi(p388);
            return;
        }
      };
      f52.prototype.hi = function (p389) {
        this.uh.yh.Og = p389.ra();
        var v274 = p389.sa();
        this.uh.yh.Pg = v274;
        this.uh.th.Uh.re = v274;
        this.uh.yh.Qg = p389.ua();
        this.uh.yh.Rg = p389.ua();
        this.uh.yh.Sg = p389.ua();
        vO4.L.Fg.sf.Eg.jg(this.uh.yh, vO4.L.Fg.oi.ni());
      };
      f52.prototype.ii = function (p390) {
        var v275;
        var v276 = this.ci++;
        var v277 = p390.sa();
        v275 = this.pi(p390);
        for (var vLN051 = 0; vLN051 < v275; vLN051++) {
          this.qi(p390);
        }
        ;
        v275 = this.pi(p390);
        for (var vLN052 = 0; vLN052 < v275; vLN052++) {
          this.ri(p390);
        }
        ;
        v275 = this.pi(p390);
        for (var vLN053 = 0; vLN053 < v275; vLN053++) {
          this.si(p390);
        }
        ;
        v275 = this.pi(p390);
        for (var vLN054 = 0; vLN054 < v275; vLN054++) {
          this.ti(p390);
        }
        ;
        v275 = this.pi(p390);
        for (var vLN055 = 0; vLN055 < v275; vLN055++) {
          this.vi(p390);
        }
        ;
        v275 = this.pi(p390);
        for (var vLN056 = 0; vLN056 < v275; vLN056++) {
          this.wi(p390);
        }
        ;
        v275 = this.pi(p390);
        for (var vLN057 = 0; vLN057 < v275; vLN057++) {
          this.xi(p390);
        }
        ;
        v275 = this.pi(p390);
        for (var vLN058 = 0; vLN058 < v275; vLN058++) {
          this.yi(p390);
        }
        ;
        if (v276 > 0) {
          this.zi(p390);
        }
        this.uh.Ai(v276, v277);
      };
      f52.prototype.ti = function (p391) {
        var v278 = new vO3.Ci.Bi();
        v278.re = p391.sa();
        v278.Wh = this.uh.yh.Og === vO3.Sc.Rc ? p391.ra() : vO3.Ng.Tg;
        v278.Xh = p391.sa();
        v278.Di = p391.sa();
        v278.Ei = p391.sa();
        v278.Fi = p391.sa();
        v278.Gi = p391.sa();
        for (var v279 = p391.ra(), vLS2 = "", vLN059 = 0; vLN059 < v279; vLN059++) {
          vLS2 += String.fromCharCode(p391.sa());
        }
        ;
        v278.Ea = vLS2;
        if (this.uh.yh.Pg === v278.re) {
          this.uh.th.Hi(v278);
        } else {
          var v280 = this.uh.Vh[v278.re];
          if (v280 != null) {
            v280.Ii();
          }
          var v281 = new vO3.Ci(this.uh.yh);
          v281.Ji(vO4.L.Fg.sf.Eg);
          this.uh.Vh[v278.re] = v281;
          v281.Hi(v278);
        }
      };
      f52.prototype.vi = function (p392) {
        var v282 = p392.sa();
        var v283 = p392.ra();
        var v284 = !!(v283 & 1);
        var v285 = !!(v283 & 2);
        var vLN060 = 0;
        if (v284) {
          vLN060 = p392.sa();
        }
        var v286 = this.Ki(v282);
        if (f4(v286) !== "undefined" && (v286.Li = false, v286.Mi)) {
          var v287 = this.Ki(v282);
          if (v284 && f4(v287) !== "undefined" && v287.Mi) {
            if (vLN060 === this.uh.yh.Pg) {
              var v288 = this.uh.th.wh();
              var v289 = v286.Ni(v288.Ia, v288.Ja);
              Math.max(0, 1 - v289.Oi / (this.uh.vh * 0.5));
              if (v289.Oi < this.uh.vh * 0.5) {
                vO4.L.Fg.sf.Eg.lh.Dg(v285, v286);
              }
            } else if (v282 === this.uh.yh.Pg) {
              ;
            } else {
              var v290 = this.uh.th.wh();
              var v291 = v286.Ni(v290.Ia, v290.Ja);
              Math.max(0, 1 - v291.Oi / (this.uh.vh * 0.5));
            }
          } else if (v282 === this.uh.yh.Pg) {
            ;
          } else {
            var v292 = this.uh.th.wh();
            var v293 = v286.Ni(v292.Ia, v292.Ja);
            Math.max(0, 1 - v293.Oi / (this.uh.vh * 0.5));
          }
        }
      };
      f52.prototype.yi = function (p393) {
        var v294 = p393.sa();
        var v295 = v294 === this.uh.yh.Pg ? null : this.uh.Vh[v294];
        var v296 = p393.ra();
        var v297 = !!(v296 & 1);
        if (v296 & 2) {
          var v298 = p393.ua();
          if (v295) {
            v295.Pi(v298);
          }
        }
        ;
        var v299 = this.Qi(p393.ra(), p393.ra(), p393.ra());
        var v300 = this.Qi(p393.ra(), p393.ra(), p393.ra());
        if (v295) {
          v295.Ri(v299, v300, v297);
          var v301 = this.uh.th.wh();
          var v302 = v295.wh();
          var v303 = Math.max(0, 1 - Math.hypot(v301.Ia - v302.Ia, v301.Ja - v302.Ja) / (this.uh.vh * 0.5));
          vO4.L.Si.nf(v303, v294, v297);
        }
        ;
        var v304 = this.pi(p393);
        if (v295) {
          for (var v305 in v295.vd) {
            var v306 = v295.vd[v305];
            if (v306) {
              v306.zd = false;
            }
          }
        }
        ;
        for (var vLN061 = 0; vLN061 < v304; vLN061++) {
          var v307 = p393.ra();
          var v308 = p393.ra();
          if (v295) {
            var v309 = v295.vd[v307];
            v309 ||= v295.vd[v307] = new vO3.xd(v307);
            v309.zd = true;
            v309.Fd = Math.min(1, Math.max(0, v308 / 100));
          }
        }
      };
      f52.prototype.zi = function (p394) {
        var v310 = this.uh.th;
        var v311 = p394.ra();
        var v312 = !!(v311 & 1);
        var v313 = !!(v311 & 2);
        var v314 = !!(v311 & 4);
        if (v313) {
          var v315 = v310.Rh;
          v310.Pi(p394.ua());
          v315 = v310.Rh - v315;
          if (v315 > 0) {
            vO4.L.Fg.sf.Eg.lh.Cg(v315);
          }
        }
        ;
        if (v314) {
          this.uh.Ti = p394.ua();
        }
        var v316 = this.Qi(p394.ra(), p394.ra(), p394.ra());
        var v317 = this.Qi(p394.ra(), p394.ra(), p394.ra());
        v310.Ri(v316, v317, v312);
        vO4.L.Si.nf(0.5, this.uh.yh.Pg, v312);
        var v318 = this.pi(p394);
        for (var v319 in v310.vd) {
          var v320 = v310.vd[v319];
          if (v320) {
            v320.zd = false;
          }
        }
        ;
        for (var vLN062 = 0; vLN062 < v318; vLN062++) {
          var v321 = p394.ra();
          var v322 = p394.ra();
          var v323 = v310.vd[v321];
          if (!v323) {
            v323 = new vO3.xd(v321);
            v310.vd[v321] = v323;
          }
          v323.zd = true;
          v323.g = v322;
          v323.Fd = Math.min(1, Math.max(0, v322 / 100));
        }
        ;
        vO4.L.Fg.sf.Eg.jh.jg(v310.vd);
      };
      f52.prototype.wi = function (p395) {
        var vThis14 = this;
        var v324 = p395.sa();
        var v325 = this.Ki(v324);
        var v326 = p395.ua();
        var v327 = this.pi(p395);
        if (v325) {
          v325.Pi(v326);
          v325.Ui(function () {
            return vThis14.Qi(p395.ra(), p395.ra(), p395.ra());
          }, v327);
          v325.Bd(true);
          var v328 = this.uh.th.wh();
          var v329 = v325.wh();
          var v330 = Math.max(0, 1 - Math.hypot(v328.Ia - v329.Ia, v328.Ja - v329.Ja) / (this.uh.vh * 0.5));
          vO4.L.Si.lf(v330, v324);
        } else {
          for (var vLN063 = 0; vLN063 < v327 * 6; vLN063++) {
            p395.ra();
          }
        }
      };
      f52.prototype.xi = function (p396) {
        var v331 = p396.sa();
        var v332 = this.uh.Vh[v331];
        if (v332 && v332.Li) {
          v332.Bd(false);
        }
        vO4.L.Si.mf(v331);
      };
      f52.prototype.qi = function (p397) {
        var v333 = new vO3.Vi.Bi();
        v333.re = p397.ta();
        v333.Wh = this.uh.yh.Og === vO3.Sc.Rc ? p397.ra() : vO3.Ng.Tg;
        v333.Wi = this.Qi(p397.ra(), p397.ra(), p397.ra());
        v333.Xh = p397.ra();
        var v334 = this.uh.Xi[v333.re];
        if (v334 != null) {
          v334.Ii();
        }
        var v335 = new vO3.Vi(v333, vO4.L.Fg.sf.Eg);
        v335.Yi(this.Zi(v333.re), this.$i(v333.re), true);
        this.uh.Xi[v333.re] = v335;
      };
      f52.prototype.ri = function (p398) {
        var v336 = p398.ta();
        var v337 = this.uh.Xi[v336];
        if (v337) {
          v337._i = 0;
          v337.aj = v337.aj * 1.5;
          v337.bj = true;
        }
      };
      f52.prototype.si = function (p399) {
        var v338 = p399.ta();
        var v339 = p399.sa();
        var v340 = this.uh.Xi[v338];
        if (v340) {
          v340._i = 0;
          v340.aj = v340.aj * 0.1;
          v340.bj = true;
          var v341 = this.Ki(v339);
          if (v341 && v341.Mi) {
            this.uh.yh.Pg;
            var v342 = v341.wh();
            v340.Yi(v342.Ia, v342.Ja, false);
          }
        }
      };
      var vA9 = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
      f52.prototype.ji = function (p400) {
        var v343 = vO4.L.bd.pc().Xb;
        var v344 = v343.getImageData(0, 0, 80, 80);
        var v345 = vA9[0];
        var v346 = 80 - v345;
        var vLN064 = 0;
        for (var vLN065 = 0; vLN065 < 628; vLN065++) {
          var v347 = p400.ra();
          for (var vLN066 = 0; vLN066 < 8; vLN066++) {
            var v348 = (v347 >> vLN066 & 1) != 0;
            var v349 = (v345 + vLN064 * 80) * 4;
            if (v348) {
              v344.data[v349] = 255;
              v344.data[v349 + 1] = 255;
              v344.data[v349 + 2] = 255;
              v344.data[v349 + 3] = 255;
            } else {
              v344.data[v349 + 3] = 0;
            }
            if (++v345 >= v346 && ++vLN064 < 80) {
              v345 = vA9[vLN064];
              v346 = 80 - v345;
            }
          }
        }
        ;
        v343.putImageData(v344, 0, 0);
        var v350 = vO4.L.Fg.sf.Eg.ih.Gh;
        v350.texture = vO4.L.bd.pc().Ga;
        v350.texture.update();
      };
      f52.prototype.li = function (p401) {
        p401.ta();
      };
      f52.prototype.mi = function (p402) {
        f2();
        this.uh.cj();
      };
      f52.prototype.ki = function (p403) {
        this.uh.Oh = p403.sa();
        this.uh.Yh = p403.sa();
        var v351 = new vO3.dj();
        v351.Sh = [];
        for (var v352 = p403.ra(), vLN067 = 0; vLN067 < v352; vLN067++) {
          var v353 = p403.sa();
          var v354 = p403.ua();
          v351.Sh.push(vO3.dj.ej(v353, v354));
        }
        ;
        v351.Ph = [];
        if (this.uh.yh.Og === vO3.Sc.Rc) {
          for (var v355 = p403.ra(), vLN068 = 0; vLN068 < v355; vLN068++) {
            var v356 = p403.ra();
            var v357 = p403.ua();
            v351.Ph.push(vO3.dj.fj(v356, v357));
          }
        }
        ;
        vO4.L.Fg.sf.Eg.kh.jg(v351);
      };
      f52.prototype.Ki = function (p404) {
        if (p404 === this.uh.yh.Pg) {
          return this.uh.th;
        } else {
          return this.uh.Vh[p404];
        }
      };
      f52.prototype.Qi = function (p405, p406, p407) {
        return (((p407 & 255 | p406 << 8 & 65280 | p405 << 16 & 16711680) & 16777215) / 8388608 - 1) * 10000;
      };
      f52.prototype.Zi = function (p408) {
        return ((p408 & 65535) / 32768 - 1) * this.uh.yh.Ug();
      };
      f52.prototype.$i = function (p409) {
        return ((p409 >> 16 & 65535) / 32768 - 1) * this.uh.yh.Ug();
      };
      f52.prototype.pi = function (p410) {
        var v358 = p410.ra();
        if ((v358 & 128) == 0) {
          return v358;
        }
        ;
        var v359 = p410.ra();
        if ((v359 & 128) == 0) {
          return v359 | v358 << 7 & 16256;
        }
        ;
        var v360 = p410.ra();
        if ((v360 & 128) == 0) {
          return v360 | v359 << 7 & 16256 | v358 << 14 & 2080768;
        }
        ;
        var v361 = p410.ra();
        if ((v361 & 128) == 0) {
          return v361 | v360 << 7 & 16256 | v359 << 14 & 2080768 | v358 << 21 & 266338304;
        } else {
          return undefined;
        }
      };
      return f52;
    }();
    vO3.gj = function () {
      function f53(p411) {
        this.hj = p411;
      }
      f53.ij = function () {
        return new vO3.gj(null);
      };
      f53.jj = function (p412) {
        return new vO3.gj(p412);
      };
      f53.prototype.tc = function () {
        return this.hj;
      };
      f53.prototype.kj = function () {
        return this.hj != null;
      };
      f53.prototype.lj = function (p413) {
        if (this.hj != null) {
          p413(this.hj);
        }
      };
      return f53;
    }();
    vO3.Vi = function () {
      function _0x9f75x3(p414, p415) {
        this.Uh = p414;
        this.mj = p414.Xh >= 80;
        this.nj = 0;
        this.oj = 0;
        this.pj = 0;
        this.qj = 0;
        this.aj = this.mj ? 1 : p414.Wi;
        this._i = 1;
        this.bj = false;
        this.rj = 0;
        this.sj = 0;
        this.tj = 1;
        this.uj = Math.PI * 2 * Math.random();
        this.vj = new vO3.wj();
        this.vj.Qc(vO4.L.uh.yh.Og, this.Uh.Wh === vO3.Ng.Tg ? null : vO4.L.bd.jc().Bb(this.Uh.Wh), vO4.L.bd.jc().Gb(this.Uh.Xh));
        p415.Dh(p414.re, this.vj);
      }
      _0x9f75x3.prototype.Ii = function () {
        this.vj.Eh.Vc.z();
        this.vj.Eh.Uc.z();
      };
      _0x9f75x3.prototype.Yi = function (p416, p417, p418) {
        this.nj = p416;
        this.oj = p417;
        if (p418) {
          this.pj = p416;
          this.qj = p417;
        }
      };
      _0x9f75x3.prototype.xj = function (p419, p420) {
        var v362 = Math.min(0.5, this.aj * 1);
        var v363 = Math.min(2.5, this.aj * 1.5);
        this.rj = vO5._(this.rj, v362, p420, 0.0025);
        this.sj = vO5._(this.sj, v363, p420, 0.0025);
        this.tj = vO5._(this.tj, this._i, p420, 0.0025);
      };
      _0x9f75x3.prototype.yj = function (p421, p422, p423) {
        this.pj = vO5._(this.pj, this.nj, p422, 0.0025);
        this.qj = vO5._(this.qj, this.oj, p422, 0.0025);
        this.vj.jg(this, p421, p422, p423);
      };
      _0x9f75x3.Bi = function () {
        function f55() {
          this.re = 0;
          this.Wh = vO3.Ng.Tg;
          this.Wi = 0;
          this.Xh = 0;
        }
        return f55;
      }();
      return _0x9f75x3;
    }();
    vO3.wj = function () {
      function f56() {
        this.Eh = new vF14(new vO3.Kc(), new vO3.Kc());
        this.Eh.Vc.Pc.blendMode = vO6.e.q.r;
        this.Eh.Vc.Pc.zIndex = vLN100;
        this.Eh.Uc.Pc.zIndex = vLN500;
      }
      var vLN500 = 500;
      var vLN100 = 100;
      f56.prototype.Qc = function (p424, p425, p426) {
        var v364 = p426.Mb;
        if (v364 != null) {
          this.Eh.Uc.Tc(v364);
        }
        var v365 = p424 === vO3.Sc.Rc && p425 != null ? p425.Kb.Nb : p426.Nb;
        if (v365 != null) {
          this.Eh.Vc.Tc(v365);
        }
      };
      f56.prototype.jg = function (p427, p428, p429, p430) {
        if (!p430(p427.pj, p427.qj)) {
          this.Eh.kd();
          return;
        }
        ;
        var v366 = p427.sj * (1 + Math.cos(p427.uj + p428 / 200) * 0.3);
        if (p427.mj) {
          this.Eh.hd(p427.pj, p427.qj, p427.rj * 2, p427.tj * 1, v366 * 1.2, p427.tj * 0.8);
        } else {
          this.Eh.hd(p427.pj, p427.qj, p427.rj * 2, p427.tj * 1, v366 * 2, p427.tj * 0.3);
        }
      };
      var vF14 = function () {
        function _0x9f75x19(p431, p432) {
          this.Uc = p431;
          this.Vc = p432;
        }
        _0x9f75x19.prototype.hd = function (p433, p434, p435, p436, p437, p438) {
          this.Uc.Bd(true);
          this.Uc.Cd(p433, p434);
          this.Uc.jd(p435);
          this.Uc.zj(p436);
          this.Vc.Bd(true);
          this.Vc.Cd(p433, p434);
          this.Vc.jd(p437);
          this.Vc.zj(p438);
        };
        _0x9f75x19.prototype.kd = function () {
          this.Uc.Bd(false);
          this.Vc.Bd(false);
        };
        return _0x9f75x19;
      }();
      return f56;
    }();
    vO3.Aj = function () {
      function f58() {
        this.Bj = 0;
        this.Cj = 0;
        this.Dj = 0;
        this.Ej = 0;
        this.Fj = 0;
        this.Gj = [];
      }
      function f59(p439, p440) {
        for (var vLN069 = 0; vLN069 < p439.length; vLN069++) {
          if (parseInt(p439[vLN069].id) === p440) {
            return vLN069;
          }
        }
        ;
        return -1;
      }
      f58.prototype.za = function () {};
      f58.prototype.Hj = function (p441) {
        switch (p441) {
          case vO3.Jj.Ij:
            return this.Bj;
          case vO3.Jj.Kj:
            return this.Cj;
          case vO3.Jj.Lj:
            return this.Dj;
          case vO3.Jj.Mj:
            return this.Ej;
          case vO3.Jj.Nj:
            return this.Fj;
        }
        ;
        return 0;
      };
      f58.prototype.Oj = function () {
        return new vO3.zb(this.Bj, this.Cj, this.Dj, this.Ej, this.Fj);
      };
      f58.prototype.Pj = function (p442) {
        this.Gj.push(p442);
        this.Qj();
      };
      f58.prototype.Rj = function () {
        if (!vO4.L.bd.mc()) {
          return vO5.ea([32, 33, 34, 35]);
        }
        ;
        var vA10 = [];
        for (var v367 = vO4.L.bd.nc().skinArrayDict, vLN070 = 0; vLN070 < v367.length; vLN070++) {
          var v368 = v367[vLN070];
          if (this.Sj(v368.id, vO3.Jj.Ij)) {
            vA10.push(v368);
          }
        }
        ;
        if (vA10.length === 0) {
          return 0;
        } else {
          return vA10[parseInt(vA10.length * Math.random())].id;
        }
      };
      f58.prototype.Tj = function () {
        if (vO4.L.bd.mc()) {
          var v369 = vO4.L.bd.nc().skinArrayDict;
          var vF59 = f59(v369, this.Bj);
          if (!(vF59 < 0)) {
            for (var v370 = vF59 + 1; v370 < v369.length; v370++) {
              if (this.Sj(v369[v370].id, vO3.Jj.Ij)) {
                vO.setPId(this.Bj = v369[v370].id, vO3.Jj.Ij, true);
                this.Qj();
                return;
              }
            }
            ;
            for (var vLN071 = 0; vLN071 < vF59; vLN071++) {
              if (this.Sj(v369[vLN071].id, vO3.Jj.Ij)) {
                vO.setPId(this.Bj = v369[vLN071].id, vO3.Jj.Ij, true);
                this.Qj();
                return;
              }
            }
          }
        }
      };
      f58.prototype.Uj = function () {
        if (vO4.L.bd.mc) {
          var v371 = vO4.L.bd.nc().skinArrayDict;
          var vF592 = f59(v371, this.Bj);
          if (!(vF592 < 0)) {
            for (var v372 = vF592 - 1; v372 >= 0; v372--) {
              if (this.Sj(v371[v372].id, vO3.Jj.Ij)) {
                vO.setPId(this.Bj = v371[v372].id, vO3.Jj.Ij, true);
                this.Qj();
                return;
              }
            }
            ;
            for (var v373 = v371.length - 1; v373 > vF592; v373--) {
              if (this.Sj(v371[v373].id, vO3.Jj.Ij)) {
                vO.setPId(this.Bj = v371[v373].id, vO3.Jj.Ij, true);
                this.Qj();
                return;
              }
            }
          }
        }
      };
      f58.prototype.Vj = function (p443, p444) {
        let v374 = !vO4.L.bd.mc() || this.Sj(p443, p444);
        vO.setPId(p443, p444, v374);
        if (v374) {
          switch (p444) {
            case vO3.Jj.Ij:
              if (this.Bj !== p443) {
                this.Bj = p443;
                this.Qj();
              }
              return;
            case vO3.Jj.Kj:
              if (this.Cj !== p443) {
                this.Cj = p443;
                this.Qj();
              }
              return;
            case vO3.Jj.Lj:
              if (this.Dj !== p443) {
                this.Dj = p443;
                this.Qj();
              }
              return;
            case vO3.Jj.Mj:
              if (this.Ej !== p443) {
                this.Ej = p443;
                this.Qj();
              }
              return;
            case vO3.Jj.Nj:
              if (this.Fj !== p443) {
                this.Fj = p443;
                this.Qj();
              }
              return;
          }
        }
      };
      f58.prototype.Sj = function (p445, p446) {
        console.log("zPList-Sj", p445, p446);
        var v375 = this.Wj(p445, p446);
        return v375 != null && (vO4.L.Yj.Xj() ? v375.Zj() === 0 && !v375.$j() || vO4.L.Yj._j(p445, p446) : v375.ak());
      };
      f58.prototype.Wj = function (p447, p448) {
        if (!vO4.L.bd.mc()) {
          return null;
        }
        ;
        var v376 = vO4.L.bd.nc();
        if (p448 === vO3.Jj.Ij) {
          var vF593 = f59(v376.skinArrayDict, p447);
          if (vF593 < 0) {
            return null;
          } else {
            return vO3.ck.bk(v376.skinArrayDict[vF593]);
          }
        }
        ;
        var v377 = null;
        switch (p448) {
          case vO3.Jj.Kj:
            v377 = v376.eyesDict[p447];
            break;
          case vO3.Jj.Lj:
            v377 = v376.mouthDict[p447];
            break;
          case vO3.Jj.Mj:
            v377 = v376.hatDict[p447];
            break;
          case vO3.Jj.Nj:
            v377 = v376.glassesDict[p447];
        }
        ;
        if (v377 != null) {
          return vO3.ck.dk(v377);
        } else {
          return null;
        }
      };
      f58.prototype.Qj = function () {
        for (var vLN072 = 0; vLN072 < this.Gj.length; vLN072++) {
          this.Gj[vLN072]();
        }
      };
      return f58;
    }();
    vO3.Jj = function () {
      function f60() {}
      f60.Ij = "SKIN";
      f60.Kj = "EYES";
      f60.Lj = "MOUTH";
      f60.Nj = "GLASSES";
      f60.Mj = "HAT";
      return f60;
    }();
    vO3.ek = function () {
      function _0x9f75x19() {
        this.Sf = new vO6.e.h(vO6.e.g.from("/images/bg-obstacle.png"));
        var v378 = vO6.e.g.from(vO4.A.H);
        var v379 = new vO6.e.h(v378, new vO6.e.l(0, 0, 256, 256));
        this.Tf = new Array(12);
        for (var vLN073 = 0; vLN073 < this.Tf.length; vLN073++) {
          this.Tf[vLN073] = v379;
        }
        ;
        this.qh = new vO6.e.h(function () {
          var v380 = vO6.e.g.from("/images/bg-pattern-pow2-ARENA.png");
          v380.wrapMode = vO6.e.u.v;
          return v380;
        }());
        this.rh = new vO6.e.h(function () {
          var v381 = vO6.e.g.from("/images/bg-pattern-pow2-TEAM2.png");
          v381.wrapMode = vO6.e.u.v;
          return v381;
        }());
        this.oh = new vO6.e.h(vO6.e.g.from("/images/lens.png"));
        this.If = new vO6.e.h(function () {
          var v382 = vO6.e.g.from(vO4.A.I);
          v382.wrapMode = vO6.e.u.v;
          return v382;
        }());
        this.Vb = function () {
          var v383 = window.document.createElement("canvas");
          v383.width = 80;
          v383.height = 80;
          return {
            Wb: v383,
            Xb: v383.getContext("2d"),
            Ga: new vO6.e.h(vO6.e.g.from(v383))
          };
        }();
        this.Re = {};
        this.Ne = {};
        this.fk = [];
        this.gk = null;
      }
      _0x9f75x19.prototype.za = function (p449) {
        function f62() {
          if (--vLN42 == 0) {
            p449();
          }
        }
        var vLN42 = 4;
        this.Re = {};
        f62();
        this.Ne = {};
        f62();
        this.fk = [];
        f62();
        this.gk = null;
        f62();
      };
      return _0x9f75x19;
    }();
    vO3.hk = function () {
      function f63() {
        this.ik = null;
        this.sf = new vO3.jk();
        this.rf = new vO3.kk();
        this.lk = new vO3.mk();
        this.nk = new vO3.ok();
        this.pk = new vO3.qk();
        this.rk = new vO3.sk();
        this.tk = new vO3.uk();
        this.vk = new vO3.wk();
        this.oi = new vO3.xk();
        this.yk = new vO3.zk();
        this.Ak = new vO3.Bk();
        this.Ck = new vO3.Dk();
        this.Ek = new vO3.Fk();
        this.Gk = new vO3.Hk();
        this.ze = new vO3.Ik();
        this.Jk = new vO3.Kk();
        this.Lk = new vO3.Mk();
        this.Nk = new vO3.Ok();
        this.Pk = [];
      }
      function _0x9f75x3(p450, p451) {
        if (p451 !== 0) {
          var v384 = p450[p451];
          vO5.ca(p450, 0, 1, p451);
          p450[0] = v384;
        }
      }
      function f65(p452, p453) {
        if (p453 !== p452.length + 1) {
          var v385 = p452[p453];
          vO5.ca(p452, p453 + 1, p453, p452.length - p453 - 1);
          p452[p452.length - 1] = v385;
        }
      }
      function f66(p454, p455) {
        for (var vLN074 = 0; vLN074 < p454.length; vLN074++) {
          if (p454[vLN074] === p455) {
            return vLN074;
          }
        }
        ;
        return -1;
      }
      f63.prototype.za = function () {
        this.ik = new vO3.vf(vO3.Cf.Bf);
        this.Pk = [this.sf, this.rf, this.lk, this.nk, this.pk, this.rk, this.tk, this.vk, this.oi, this.yk, this.Ak, this.Ck, this.Ek, this.Gk, this.ze, this.Jk, this.Lk, this.Nk];
        for (var vLN076 = 0; vLN076 < this.Pk.length; vLN076++) {
          this.Pk[vLN076].za();
        }
      };
      f63.prototype.Ch = function (p456, p457) {
        for (var v386 = this.Pk.length - 1; v386 >= 0; v386--) {
          this.Pk[v386].cg(p456, p457);
        }
        ;
        if (this.Pk[0] !== this.sf && this.Pk[0] !== this.Nk && this.ik != null) {
          this.ik.cg(p456, p457);
        }
      };
      f63.prototype.$f = function () {
        for (var v387 = this.Pk.length - 1; v387 >= 0; v387--) {
          this.Pk[v387].$f();
        }
        ;
        if (this.ik != null) {
          this.ik.$f();
        }
      };
      f63.prototype.Qk = function (p458) {
        var vF66 = f66(this.Pk, p458);
        if (!(vF66 < 0)) {
          this.Pk[0].Rk();
          _0x9f75x3(this.Pk, vF66);
          this.Sk();
        }
      };
      f63.prototype.Tk = function () {
        this.Pk[0].Rk();
        do {
          f65(this.Pk, 0);
        } while (this.Pk[0].Ed !== vO3.Vk.Uk);
        ;
        this.Sk();
      };
      f63.prototype.Sk = function () {
        var v388 = this.Pk[0];
        v388.Wk();
        v388.Xk();
        this.Yk();
      };
      f63.prototype.Zk = function () {
        return this.Pk.length !== 0 && this.Pk[0].Ed === vO3.Vk.Uk && this.Gk.$k();
      };
      f63.prototype._k = function () {
        if (this.Pk.length === 0) {
          return null;
        } else {
          return this.Pk[0];
        }
      };
      f63.prototype.Yk = function () {
        if (this.Zk()) {
          this.Qk(this.Gk);
        }
      };
      return f63;
    }();
    vO3.dj = function () {
      function f67() {
        this.Sh = [];
        this.Ph = [];
      }
      f67.ej = function (p459, p460) {
        return {
          Th: p459,
          Rh: p460
        };
      };
      f67.fj = function (p461, p462) {
        return {
          Qh: p461,
          Rh: p462
        };
      };
      return f67;
    }();
    vO3.al = function () {
      function f68() {
        this.bl = [];
        this.cl = [];
        this.dl = false;
        this.el = vLSGuest;
        this.fl = {};
      }
      var vLSGuest = "guest";
      var vLSGuest2 = "guest";
      var vLSFb = "fb";
      var vLSGg = "gg";
      f68.gl = new (function () {
        function f69() {}
        f69.hl = function () {
          function _0x9f75x19(p463) {
            this.il = p463;
          }
          return _0x9f75x19;
        }();
        f69.prototype.jl = function () {
          return (typeof FB == "undefined" ? "undefined" : f4(FB)) != "undefined";
        };
        f69.prototype.kl = function (p464, p465, p466) {
          var v389 = "https://graph.facebook.com/me?access_token=" + p464;
          $.get(v389).fail(function () {
            p465();
          }).done(function () {
            p466();
          });
        };
        f69.prototype.ll = function (p467, p468) {
          if (!this.jl()) {
            p467();
            return;
          }
          ;
          this.ml(function () {
            FB.login(function (p469) {
              if (p469.status !== "connected") {
                p467();
                return;
              }
              ;
              var v390 = p469.authResponse.accessToken;
              p468(new f69.hl(v390));
            });
          }, function (p470) {
            p468(p470);
          });
        };
        f69.prototype.ml = function (p471, p472) {
          var vThis15 = this;
          if (!this.jl()) {
            p471();
            return;
          }
          ;
          FB.getLoginStatus(function (p473) {
            if (p473.status !== "connected") {
              p471();
              return;
            }
            ;
            var v391 = p473.authResponse.accessToken;
            vThis15.kl(v391, function () {
              p471();
            }, function () {
              p472(new f69.hl(v391));
            });
          });
        };
        f69.prototype.nl = function () {
          if (this.jl()) {
            FB.logout();
          }
        };
        return f69;
      }())();
      f68.ol = new (function () {
        function f71() {}
        f71.pl = function () {
          function _0x9f75x19(p474, p475) {
            this.il = p474;
            this.ql = p475;
          }
          return _0x9f75x19;
        }();
        f71.prototype.jl = function () {
          return f4(v12) != "undefined";
        };
        f71.prototype.ll = function (p476, p477) {
          if (f4(v12) == "undefined") {
            p476();
            return;
          }
          ;
          v12.then(function () {
            if (v12.isSignedIn.get()) {
              var v392 = v12.currentUser.get();
              var v393 = v392.getAuthResponse().id_token;
              var v394 = new Date().getTime() + v392.getAuthResponse().expires_in * 1000;
              if (new Date().getTime() < v394) {
                p477(new f71.pl(v393, v394));
                return;
              }
            }
            ;
            v12.signIn().then(function (p478) {
              if (f4(p478.error) !== "undefined") {
                p476();
                return;
              }
              ;
              if (!p478.isSignedIn()) {
                p476();
                return;
              }
              ;
              var v395 = p478.getAuthResponse().id_token;
              var v396 = new Date().getTime() + p478.getAuthResponse().expires_in * 1000;
              p477(new f71.pl(v395, v396));
            });
          });
        };
        f71.prototype.ml = function (p479, p480) {
          if (f4(v12) == "undefined") {
            p479();
            return;
          }
          ;
          v12.then(function () {
            if (v12.isSignedIn.get()) {
              var v397 = v12.currentUser.get();
              var v398 = v397.getAuthResponse().id_token;
              var v399 = new Date().getTime() + v397.getAuthResponse().expires_in * 1000;
              if (new Date().getTime() < v399) {
                p480(new f71.pl(v398, v399));
                return;
              }
            }
            ;
            p479();
          });
        };
        f71.prototype.nl = function () {
          if (f4(v12) != "undefined") {
            v12.signOut();
          }
        };
        return f71;
      }())();
      f68.prototype.za = function () {
        this.rl();
      };
      f68.prototype.sl = function () {
        if (this.dl) {
          return this.fl.userId;
        } else {
          return "";
        }
      };
      f68.prototype.tl = function () {
        if (this.dl) {
          return this.fl.username;
        } else {
          return "";
        }
      };
      f68.prototype.ul = function () {
        if (this.dl) {
          return this.fl.nickname;
        } else {
          return "";
        }
      };
      f68.prototype.vl = function () {
        if (this.dl) {
          return this.fl.avatarUrl;
        } else {
          return vO4.A.G;
        }
      };
      f68.prototype.wl = function () {
        return this.dl && this.fl.isBuyer;
      };
      f68.prototype.xl = function () {
        return this.dl && this.fl.isConsentGiven;
      };
      f68.prototype.yl = function () {
        if (this.dl) {
          return this.fl.coins;
        } else {
          return 0;
        }
      };
      f68.prototype.zl = function () {
        if (this.dl) {
          return this.fl.level;
        } else {
          return 1;
        }
      };
      f68.prototype.Al = function () {
        if (this.dl) {
          return this.fl.expOnLevel;
        } else {
          return 0;
        }
      };
      f68.prototype.Bl = function () {
        if (this.dl) {
          return this.fl.expToNext;
        } else {
          return 50;
        }
      };
      f68.prototype.Cl = function () {
        if (this.dl) {
          return this.fl.skinId;
        } else {
          return 0;
        }
      };
      f68.prototype.Dl = function () {
        if (this.dl) {
          return this.fl.eyesId;
        } else {
          return 0;
        }
      };
      f68.prototype.El = function () {
        if (this.dl) {
          return this.fl.mouthId;
        } else {
          return 0;
        }
      };
      f68.prototype.Fl = function () {
        if (this.dl) {
          return this.fl.glassesId;
        } else {
          return 0;
        }
      };
      f68.prototype.Gl = function () {
        if (this.dl) {
          return this.fl.hatId;
        } else {
          return 0;
        }
      };
      f68.prototype.Hl = function () {
        if (this.dl) {
          return this.fl.highScore;
        } else {
          return 0;
        }
      };
      f68.prototype.Il = function () {
        if (this.dl) {
          return this.fl.bestSurvivalTimeSec;
        } else {
          return 0;
        }
      };
      f68.prototype.Jl = function () {
        if (this.dl) {
          return this.fl.kills;
        } else {
          return 0;
        }
      };
      f68.prototype.Kl = function () {
        if (this.dl) {
          return this.fl.headShots;
        } else {
          return 0;
        }
      };
      f68.prototype.Ll = function () {
        if (this.dl) {
          return this.fl.sessionsPlayed;
        } else {
          return 0;
        }
      };
      f68.prototype.Ml = function () {
        if (this.dl) {
          return this.fl.totalPlayTimeSec;
        } else {
          return 0;
        }
      };
      f68.prototype.Nl = function () {
        if (this.dl) {
          return this.fl.regDate;
        } else {
          return {};
        }
      };
      f68.prototype.Ol = function (p481) {
        this.bl.push(p481);
        p481();
      };
      f68.prototype.Pl = function (p482) {
        this.cl.push(p482);
        p482();
      };
      f68.prototype._j = function (p483, p484) {
        var v400 = this.fl.propertyList.concat(vO.locals.propertyList || []);
        console.log("zPList", v400, p483, p484);
        if (v400 == null) {
          return false;
        }
        ;
        var v401 = p483.toString();
        for (var vLN077 = 0; vLN077 < v400.length; vLN077++) {
          var v402 = v400[vLN077];
          if (v402.id === v401 && v402.type === p484) {
            return true;
          }
        }
        ;
        return false;
      };
      f68.prototype.Xj = function () {
        return this.dl;
      };
      f68.prototype.Ql = function () {
        return this.el;
      };
      f68.prototype.Rl = function (p485) {
        var vThis16 = this;
        var v403 = this.sl();
        var v404 = this.yl();
        var v405 = this.zl();
        this.Sl(function () {
          if (p485 != null) {
            p485();
          }
        }, function (p486) {
          vThis16.fl = p486.user_data;
          vThis16.Tl();
          var v406 = vThis16.sl();
          var v407 = vThis16.yl();
          var v408 = vThis16.zl();
          if (v403 === v406) {
            if (v408 > 1 && v408 !== v405) {
              vO4.L.Fg.Gk.Ul(new vO3.Vl(v408));
            }
            var v409 = v407 - v404;
            if (v409 >= 20) {
              vO4.L.Fg.Gk.Ul(new vO3.Wl(v409));
            }
          }
          ;
          if (p485 != null) {
            p485();
          }
        });
      };
      f68.prototype.Sl = function (p487, p488) {
        var v410 = vO4.A.C + "/pub/wuid/" + this.el + "/getUserData";
        vO5.ha(v410, p487, function (p489) {
          if (p489.code !== 1200) {
            p487();
          } else {
            f98(p489.user_data);
          }
          p488(p489);
        });
      };
      f68.prototype.Xl = function (p490, p491, p492, p493) {
        var v411 = vO4.A.C + "/pub/wuid/" + this.el + "/buyProperty?id=" + p490 + "&type=" + p491;
        vO5.ha(v411, function () {
          p492();
        }, function (p494) {
          if (p494.code !== 1200) {
            p492();
          } else {
            p493();
          }
        });
      };
      f68.prototype.Yl = function (p495, p496) {
        var v412 = vO4.A.C + "/pub/wuid/" + this.el + "/deleteAccount";
        vO5.ha(v412, p495, function (p497) {
          if (p497.code !== 1200) {
            p495();
          } else {
            p496();
          }
        });
      };
      f68.prototype.Zl = function (p498) {
        var vThis17 = this;
        if (this.dl) {
          this.$l();
        }
        f68.gl.ll(function () {
          p498();
        }, function (p499) {
          vThis17._l(vLSFb, p499.il, p498);
        });
      };
      f68.prototype.am = function (p500) {
        var vThis18 = this;
        if (this.dl) {
          this.$l();
        }
        f68.ol.ll(function () {
          p500();
        }, function (p501) {
          vThis18._l(vLSGg, p501.il, p500);
        });
      };
      f68.prototype._l = function (p502, p503, p504) {
        var vThis19 = this;
        var v413 = p502 + "_" + p503;
        var v414 = vO4.A.C + "/pub/wuid/" + v413 + "/login";
        vO5.ha(v414, function () {
          vThis19.bm();
        }, function (p505) {
          if (p505.code !== 1200) {
            vThis19.bm();
          } else {
            f98(p505.user_data);
            f103(p505.user_data, function (p506) {
              vThis19.cm(p502, p503, p506);
              if (p504 != null) {
                p504();
              }
            });
          }
        });
      };
      f68.prototype.$l = function () {
        try {
          this.dm();
          this.em();
        } catch (e18) {}
        ;
        this.fm();
      };
      f68.prototype.gm = function () {
        if (this.dl) {
          this.Yl(function () {}, function () {});
        }
      };
      f68.prototype.bm = function () {
        vO4.L.Fg.Qk(vO4.L.Fg.Jk);
      };
      f68.prototype.cm = function (p507, p508, p509) {
        var v415 = this.dl ? this.fl.userId : vLSGuest2;
        this.dl = true;
        this.el = p507 + "_" + p508;
        this.fl = p509;
        vO3.kg.vg(vO3.kg.pg, p507, 60);
        if (v415 !== this.fl.userId) {
          this.hm();
        } else {
          this.Tl();
        }
      };
      f68.prototype.fm = function () {
        var v416 = this.dl ? this.fl.userId : vLSGuest2;
        this.dl = false;
        this.el = vLSGuest;
        this.fl = {};
        vO3.kg.vg(vO3.kg.pg, "", 60);
        if (v416 !== this.fl.userId) {
          this.hm();
        } else {
          this.Tl();
        }
      };
      f68.prototype.rl = function () {
        var v417 = vO3.kg.wg(vO3.kg.pg);
        var vThis20 = this;
        if (vLSFb === v417) {
          var vLN16 = 1;
          (function f73() {
            if (!f68.gl.jl() && vLN16++ < 5) {
              vO5.S(f73, 1000);
              return;
            }
            ;
            f68.gl.ml(function () {}, function (p510) {
              vThis20._l(vLSFb, p510.il);
            });
          })();
        } else if (vLSGg === v417) {
          var vLN17 = 1;
          (function f74() {
            if (!f68.ol.jl() && vLN17++ < 5) {
              vO5.S(f74, 1000);
              return;
            }
            ;
            f68.ol.ml(function () {}, function (p511) {
              vThis20._l(vLSGg, p511.il);
            });
          })();
        }
      };
      f68.prototype.hm = function () {
        for (var vLN078 = 0; vLN078 < this.bl.length; vLN078++) {
          this.bl[vLN078]();
        }
        ;
        this.Tl();
      };
      f68.prototype.Tl = function () {
        for (var vLN079 = 0; vLN079 < this.cl.length; vLN079++) {
          this.cl[vLN079]();
        }
      };
      f68.prototype.dm = function () {
        f68.gl.nl();
      };
      f68.prototype.em = function () {
        f68.ol.nl();
      };
      return f68;
    }();
    vO3.Af = function () {
      function _0x9f75x6(p512, p513, p514) {
        this.wf = p514;
        this.zd = false;
        this.Fc = new vO6.e.f();
        this.Fc.visible = false;
        this.im = new Array(p512);
        for (var vLN080 = 0; vLN080 < this.im.length; vLN080++) {
          var v418 = new vO3.jm(new Float32Array(p513 * 3));
          v418.km(p513);
          this.im[vLN080] = v418;
          this.Fc.addChild(v418.Kf());
        }
        ;
        this.xf = 1;
        this.yf = 1;
        this.$f();
      }
      _0x9f75x6.prototype.Kf = function () {
        return this.Fc;
      };
      _0x9f75x6.prototype._f = function (p515) {
        this.zd = p515;
        this.Fc.visible = p515;
      };
      _0x9f75x6.prototype.$f = function () {
        this.xf = this.wf.width();
        this.yf = this.wf.height();
        var v419 = this.yf / 30;
        for (var vLN081 = 0; vLN081 < this.im.length; vLN081++) {
          this.im[vLN081].lm(v419);
        }
      };
      _0x9f75x6.prototype.jg = function () {
        if (this.zd) {
          for (var vLN082 = 0; vLN082 < this.im.length; vLN082++) {
            this.im[vLN082].jg(this.Df);
          }
        }
      };
      _0x9f75x6.prototype.mm = function () {
        return this.xf;
      };
      _0x9f75x6.prototype.nm = function () {
        return this.yf;
      };
      _0x9f75x6.prototype.fg = function (p516, p517) {
        this.im[p516].om(p517);
      };
      _0x9f75x6.prototype.gg = function (p518, p519) {
        this.im[p518].pm(p519);
      };
      _0x9f75x6.prototype.hg = function (p520, p521, p522) {
        var v420 = this.im[p520];
        for (var v421 = v420.qm(), v422 = v420.rm, vLN083 = 0; vLN083 < v421; vLN083++) {
          v422[vLN083 * 3] = p521;
          v422[vLN083 * 3 + 1] = p522;
          v422[vLN083 * 3 + 2] = 0;
        }
      };
      _0x9f75x6.prototype.ig = function (p523, p524, p525) {
        var v423;
        var v424;
        var v425 = this.im[p523];
        var v426 = v425.qm();
        var v427 = v425.rm;
        var v428 = v425.sm();
        var v429 = v427[0];
        var v430 = v427[1];
        var v431 = p524 - v429;
        var v432 = p525 - v430;
        var v433 = Math.hypot(v431, v432);
        if (v433 > 0) {
          v427[0] = p524;
          v427[1] = p525;
          v427[2] = Math.atan2(v432, v431);
          var v434 = v428 * 0.25 / (v428 * 0.25 + v433);
          var v435 = 1 - v434 * 2;
          for (var vLN18 = 1, vV426 = v426; vLN18 < vV426; vLN18++) {
            v423 = v427[vLN18 * 3];
            v427[vLN18 * 3] = v427[vLN18 * 3 - 3] * v435 + (v423 + v429) * v434;
            v429 = v423;
            v424 = v427[vLN18 * 3 + 1];
            v427[vLN18 * 3 + 1] = v427[vLN18 * 3 - 2] * v435 + (v424 + v430) * v434;
            v430 = v424;
            v427[vLN18 * 3 + 2] = Math.atan2(v427[vLN18 * 3 - 2] - v427[vLN18 * 3 + 1], v427[vLN18 * 3 - 3] - v427[vLN18 * 3]);
          }
        }
      };
      return _0x9f75x6;
    }();
    vO3.tm = function () {
      function _0x9f75x7(p526) {
        var vThis21 = this;
        this.wf = p526;
        this.Wb = p526.get()[0];
        this.Df = new vO6.e.i({
          view: this.Wb,
          transparent: true
        });
        this.zd = false;
        this.um = new vO3.jm(new Float32Array(v436 * 3));
        this.xf = 1;
        this.yf = 1;
        this.vm = vO25.wm;
        this.xm = vO25.wm;
        this.ym = vO25.wm;
        this.zm = vO25.wm;
        this.Am = vO25.wm;
        this.$f();
        vO4.L.bd.qc(function () {
          vThis21.um.Bm();
        });
      }
      var v436 = Math.min(100, vO3.Ec.Oc);
      var vO25 = {
        wm: "0lt0",
        Cm: "0lt1",
        Dm: "0lt2"
      };
      _0x9f75x7.prototype._f = function (p527) {
        this.zd = p527;
      };
      _0x9f75x7.prototype.$f = function () {
        var v437 = window.devicePixelRatio ? window.devicePixelRatio : 1;
        this.xf = this.wf.width();
        this.yf = this.wf.height();
        this.Df.resize(this.xf, this.yf);
        this.Df.resolution = v437;
        this.Wb.width = v437 * this.xf;
        this.Wb.height = v437 * this.yf;
        var v438 = this.yf / 4;
        this.um.lm(v438);
        var v439 = vO5.$(Math.floor(this.xf / v438) * 2 - 5, 1, v436);
        this.um.km(v439);
      };
      _0x9f75x7.prototype.cg = function () {
        if (this.zd) {
          var v440 = vO5.ja();
          var v441 = v440 / 200;
          var v442 = Math.sin(v441);
          this.um.Em(this.Fm(this.vm, v442), this.Gm(this.vm, v442));
          this.um.Hm(this.Im(this.xm, v442), this.Im(this.ym, v442), this.Im(this.zm, v442), this.Im(this.Am, v442));
          var v443 = this.um.sm();
          for (var v444 = this.um.qm(), v445 = this.um.rm, v446 = this.xf - (this.xf - v443 * 0.5 * (v444 - 1)) * 0.5, v447 = this.yf * 0.5, vLN084 = 0, vLN085 = 0, v448 = -1; v448 < v444; v448++) {
            var vV448 = v448;
            var v449 = Math.cos(vV448 * 1 / 12 * Math.PI - v441) * (1 - Math.pow(16, vV448 * -1 / 12));
            if (v448 >= 0) {
              v445[v448 * 3] = v446 + v443 * -0.5 * vV448;
              v445[v448 * 3 + 1] = v447 + v443 * 0.5 * v449;
              v445[v448 * 3 + 2] = Math.atan2(vLN085 - v449, vV448 - vLN084);
            }
            vLN084 = vV448;
            vLN085 = v449;
          }
          ;
          this.um.jg();
          this.um.Jm(this.Df);
        }
      };
      _0x9f75x7.prototype.om = function (p528) {
        this.um.om(p528);
      };
      _0x9f75x7.prototype.Km = function (p529) {
        this.vm = p529 ? vO25.Dm : vO25.Cm;
        this.xm = vO25.wm;
        this.ym = vO25.wm;
        this.zm = vO25.wm;
        this.Am = vO25.wm;
      };
      _0x9f75x7.prototype.Lm = function (p530) {
        this.vm = vO25.wm;
        this.xm = p530 ? vO25.Dm : vO25.Cm;
        this.ym = vO25.wm;
        this.zm = vO25.wm;
        this.Am = vO25.wm;
      };
      _0x9f75x7.prototype.Mm = function (p531) {
        this.vm = vO25.wm;
        this.xm = vO25.wm;
        this.ym = p531 ? vO25.Dm : vO25.Cm;
        this.zm = vO25.wm;
        this.Am = vO25.wm;
      };
      _0x9f75x7.prototype.Nm = function (p532) {
        this.vm = vO25.wm;
        this.xm = vO25.wm;
        this.ym = vO25.wm;
        this.zm = p532 ? vO25.Dm : vO25.Cm;
        this.Am = vO25.wm;
      };
      _0x9f75x7.prototype.Om = function (p533) {
        this.vm = vO25.wm;
        this.xm = vO25.wm;
        this.ym = vO25.wm;
        this.zm = vO25.wm;
        this.Am = p533 ? vO25.Dm : vO25.Cm;
      };
      _0x9f75x7.prototype.Fm = function (p534, p535) {
        switch (p534) {
          case vO25.Cm:
            return 0.9 + p535 * 0.1;
          case vO25.Dm:
            return 0.4 + p535 * 0.3;
        }
        ;
        return 1;
      };
      _0x9f75x7.prototype.Gm = function (p536, p537) {
        switch (p536) {
          case vO25.Cm:
            return 0.6 + p537 * 0.5;
          case vO25.Dm:
            return 0.3 + p537 * 0.3;
        }
        ;
        return 1;
      };
      _0x9f75x7.prototype.Im = function (p538, p539) {
        switch (p538) {
          case vO25.Cm:
            return 0.9 + p539 * 0.1;
          case vO25.Dm:
            return 0.6 + p539 * 0.4;
        }
        ;
        return 1;
      };
      return _0x9f75x7;
    }();
    vO3.ck = function () {
      function _0x9f75x19(p540, p541, p542, p543, p544) {
        this.Pm = p540;
        this.Qm = p541;
        this.Rm = p542;
        this.Sm = p543;
        this.Tm = p544;
      }
      _0x9f75x19.bk = function (p545) {
        return new _0x9f75x19(p545.price, p545.guest, p545.nonbuyable, p545.nonbuyableCause, p545.description);
      };
      _0x9f75x19.dk = function (p546) {
        return new _0x9f75x19(p546.price, p546.guest, p546.nonbuyable, p546.nonbuyableCause, p546.description);
      };
      _0x9f75x19.prototype.Zj = function () {
        return this.Pm;
      };
      _0x9f75x19.prototype.ak = function () {
        return this.Qm;
      };
      _0x9f75x19.prototype.$j = function () {
        return this.Rm;
      };
      _0x9f75x19.prototype.Um = function () {
        return this.Sm;
      };
      _0x9f75x19.prototype.Vm = function () {
        return this.Tm;
      };
      return _0x9f75x19;
    }();
    vO3.Hf = function () {
      function _0x9f75x19(p547) {
        this.Wm = {};
        this.Wm[v453] = p547;
        var v450 = vO6.e.k.from(v457, v458, this.Wm);
        this.Jf = new vO6.e.p(v456, v450);
        this.Jf.blendMode = vO6.e.q.t;
      }
      var v451 = "a1_" + vO5.fa();
      var v452 = "a2_" + vO5.fa();
      var vLSTranslationMatrix = "translationMatrix";
      var vLSProjectionMatrix = "projectionMatrix";
      var v453 = "u3_" + vO5.fa();
      var v454 = "u4_" + vO5.fa();
      var v455 = "v1_" + vO5.fa();
      var v456 = new vO6.e.o().addAttribute(v451, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2).addAttribute(v452, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2);
      var v457 = `precision mediump float;attribute vec2 ${v451};attribute vec2 ${v452};uniform mat3 ${vLSTranslationMatrix};uniform mat3 ${vLSProjectionMatrix};uniform vec4 ${v454};varying vec2 ${v455};const float ROT_ANGLE_DEG=7.5;const float ROT_COS=cos(ROT_ANGLE_DEG/180.0*6.283185307179586);const float ROT_SIN=sin(ROT_ANGLE_DEG/180.0*6.283185307179586);void main(){gl_Position=vec4((${vLSProjectionMatrix}*${vLSTranslationMatrix}*vec3(${v451},1.0)).xy,0.0,1.0);vec4 _ScreenParams=${v454};vec2 uv=${v452};vec2 mul=0.5*vec2(_ScreenParams.x*(_ScreenParams.w-1.0)+1.0,_ScreenParams.y*(_ScreenParams.z-1.0)+1.0);vec2 v2=(uv-vec2(0.5,0.5))*mul*1.25;v2=vec2(v2.x*ROT_COS-v2.y*ROT_SIN,v2.x*ROT_SIN+v2.y*ROT_COS)*vec2(1,2);uv=v2;${v455}=uv;}`;
      var v458 = `precision highp float;varying vec2 ${v455};uniform sampler2D ${v453};void main(){gl_FragColor=texture2D(${v453},${v455});}`;
      _0x9f75x19.prototype.bg = function (p548, p549) {
        this.Jf.scale.x = p548;
        this.Jf.scale.y = p549;
        this.Wm[v454] = [p548, p549, 1 / p548 + 1, 1 / p549 + 1];
      };
      return _0x9f75x19;
    }();
    vO3.bh = function () {
      function _0x9f75x19() {
        this.Wm = {};
        this.Wm[v462] = [1, 0.5, 0.25, 0.5];
        this.Wm[v463] = vO6.e.h.WHITE;
        this.Wm[v464] = [0, 0];
        this.Wm[v465] = [0, 0];
        var v459 = vO6.e.k.from(v468, v469, this.Wm);
        this.Jf = new vO6.e.p(v467, v459);
      }
      var v460 = "a1_" + vO5.fa();
      var v461 = "a2_" + vO5.fa();
      var vLSTranslationMatrix2 = "translationMatrix";
      var vLSProjectionMatrix2 = "projectionMatrix";
      var v462 = "u3_" + vO5.fa();
      var v463 = "u4_" + vO5.fa();
      var v464 = "u5_" + vO5.fa();
      var v465 = "u6_" + vO5.fa();
      var v466 = "v1_" + vO5.fa();
      var v467 = new vO6.e.o().addAttribute(v460, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2).addAttribute(v461, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2);
      var v468 = `precision mediump float;attribute vec2 ${v460};attribute vec2 ${v461};uniform mat3 ${vLSTranslationMatrix2};uniform mat3 ${vLSProjectionMatrix2};varying vec2 ${v466};void main(){${v466}=${v461};gl_Position=vec4((${vLSProjectionMatrix2}*${vLSTranslationMatrix2}*vec3(${v460},1.0)).xy,0.0,1.0);}`;
      var v469 = `precision highp float;varying vec2 ${v466};uniform vec4 ${v462};uniform sampler2D ${v463};uniform vec2 ${v464};uniform vec2 ${v465};void main(){gl_FragColor=texture2D(${v463},${v466}*${v464}+${v465})*0.3+${v462}.a*vec4(${v462}.rgb,0.0);}`;
      _0x9f75x19.prototype.Wc = function (p550, p551, p552, p553) {
        var v470 = this.Wm[v462];
        v470[0] = p550;
        v470[1] = p551;
        v470[2] = p552;
        v470[3] = p553;
      };
      _0x9f75x19.prototype.ph = function (p554) {
        this.Wm[v463] = p554;
      };
      _0x9f75x19.prototype.jg = function (p555, p556, p557, p558) {
        this.Jf.position.x = p555;
        this.Jf.position.y = p556;
        this.Jf.scale.x = p557;
        this.Jf.scale.y = p558;
        var v471 = this.Wm[v464];
        v471[0] = p557 * 0.2520615384615385;
        v471[1] = p558 * 0.4357063736263738;
        var v472 = this.Wm[v465];
        v472[0] = p555 * 0.2520615384615385;
        v472[1] = p556 * 0.4357063736263738;
      };
      return _0x9f75x19;
    }();
    vO3.Kc = function () {
      function f80() {
        this.Pc = new vO6.e.m();
        this.Xm = 0;
        this.Ym = 0;
      }
      f80.prototype.Tc = function (p559) {
        this.Pc.texture = p559.Wa();
        this.Pc.anchor.set(p559.Qa, p559.Ra);
        this.Xm = p559.Sa;
        this.Ym = p559.Ta;
      };
      f80.prototype.Wc = function (p560) {
        this.Pc.tint = parseInt(p560.substring(1), 16);
      };
      f80.prototype.jd = function (p561) {
        this.Pc.width = p561 * this.Xm;
        this.Pc.height = p561 * this.Ym;
      };
      f80.prototype.Dd = function (p562) {
        this.Pc.rotation = p562;
      };
      f80.prototype.Cd = function (p563, p564) {
        this.Pc.position.set(p563, p564);
      };
      f80.prototype.Bd = function (p565) {
        this.Pc.visible = p565;
      };
      f80.prototype.yd = function () {
        return this.Pc.visible;
      };
      f80.prototype.zj = function (p566) {
        this.Pc.alpha = p566;
      };
      f80.prototype.gd = function () {
        return this.Pc;
      };
      f80.prototype.z = function () {
        vO6.e.w.z(this.Pc);
      };
      return f80;
    }();
    vO3.Ci = function () {
      function f81(p567) {
        this.yh = p567;
        this.Uh = new vO3.Ci.Bi();
        this.Mi = false;
        this.Li = true;
        this.nd = false;
        this.qd = 0;
        this.Zm = 0;
        this.tj = 1;
        this.td = 0;
        this.Rh = 0;
        this.vd = {};
        this.sd = 0;
        this.$m = new Float32Array(vLN200 * 2);
        this._m = new Float32Array(vLN200 * 2);
        this.rd = new Float32Array(vLN200 * 2);
        this.an = null;
        this.bn = null;
        this.cn = null;
        this.dn();
      }
      var vLN200 = 200;
      f81.prototype.Ii = function () {
        if (this.bn != null) {
          vO6.e.w.z(this.bn.Fc);
        }
        if (this.cn != null) {
          vO6.e.w.z(this.cn);
        }
      };
      f81.prototype.dn = function () {
        this.Pi(0.25);
        this.Uh.Ea = "";
        this.Li = true;
        this.vd = {};
        this.Bd(false);
      };
      f81.prototype.Hi = function (p568) {
        this.Uh = p568;
        this.en(this.Mi);
      };
      f81.prototype.Bd = function (p569) {
        var v473 = this.Mi;
        this.Mi = p569;
        this.en(v473);
      };
      f81.prototype.Pi = function (p570) {
        this.Rh = p570 * 50;
        var vP570 = p570;
        if (p570 > this.yh.Rg) {
          vP570 = Math.atan((p570 - this.yh.Rg) / this.yh.Sg) * this.yh.Sg + this.yh.Rg;
        }
        var v474 = Math.sqrt(Math.pow(vP570 * 5, 0.707106781186548) * 4 + 25);
        var v475 = Math.min(vLN200, Math.max(3, (v474 - 5) * 5 + 1));
        var v476 = this.sd;
        this.qd = (5 + v474 * 0.9) * 0.025;
        this.sd = Math.floor(v475);
        this.Zm = v475 - this.sd;
        if (v476 > 0 && v476 < this.sd) {
          var v477 = this.$m[v476 * 2 - 2];
          var v478 = this.$m[v476 * 2 - 1];
          var v479 = this._m[v476 * 2 - 2];
          var v480 = this._m[v476 * 2 - 1];
          var v481 = this.rd[v476 * 2 - 2];
          var v482 = this.rd[v476 * 2 - 1];
          for (var vV476 = v476; vV476 < this.sd; vV476++) {
            this.$m[vV476 * 2] = v477;
            this.$m[vV476 * 2 + 1] = v478;
            this._m[vV476 * 2] = v479;
            this._m[vV476 * 2 + 1] = v480;
            this.rd[vV476 * 2] = v481;
            this.rd[vV476 * 2 + 1] = v482;
          }
        }
      };
      f81.prototype.Ui = function (p571, p572) {
        this.sd = p572;
        for (var vLN086 = 0; vLN086 < this.sd; vLN086++) {
          this.$m[vLN086 * 2] = this._m[vLN086 * 2] = this.rd[vLN086 * 2] = p571();
          this.$m[vLN086 * 2 + 1] = this._m[vLN086 * 2 + 1] = this.rd[vLN086 * 2 + 1] = p571();
        }
      };
      f81.prototype.Ri = function (p573, p574, p575) {
        this.nd = p575;
        for (var vLN087 = 0; vLN087 < this.sd; vLN087++) {
          this.$m[vLN087 * 2] = this._m[vLN087 * 2];
          this.$m[vLN087 * 2 + 1] = this._m[vLN087 * 2 + 1];
        }
        ;
        var v483 = p573 - this._m[0];
        var v484 = p574 - this._m[1];
        this.gn(v483, v484, this.sd, this._m);
      };
      f81.prototype.gn = function (p576, p577, p578, p579) {
        var v485 = Math.hypot(p576, p577);
        if (!(v485 <= 0)) {
          var v486;
          var v487 = p579[0];
          p579[0] += p576;
          var v488;
          var v489 = p579[1];
          p579[1] += p577;
          var v490 = this.qd / (this.qd + v485);
          var v491 = 1 - v490 * 2;
          for (var vLN19 = 1, v492 = p578 - 1; vLN19 < v492; vLN19++) {
            v486 = p579[vLN19 * 2];
            p579[vLN19 * 2] = p579[vLN19 * 2 - 2] * v491 + (v486 + v487) * v490;
            v487 = v486;
            v488 = p579[vLN19 * 2 + 1];
            p579[vLN19 * 2 + 1] = p579[vLN19 * 2 - 1] * v491 + (v488 + v489) * v490;
            v489 = v488;
          }
          ;
          v490 = this.Zm * this.qd / (this.Zm * this.qd + v485);
          v491 = 1 - v490 * 2;
          p579[p578 * 2 - 2] = p579[p578 * 2 - 4] * v491 + (p579[p578 * 2 - 2] + v487) * v490;
          p579[p578 * 2 - 1] = p579[p578 * 2 - 3] * v491 + (p579[p578 * 2 - 1] + v489) * v490;
        }
      };
      f81.prototype.wh = function () {
        return {
          Ia: this.rd[0],
          Ja: this.rd[1]
        };
      };
      f81.prototype.Ni = function (p580, p581) {
        var vLN1000000 = 1000000;
        var vP580 = p580;
        var vP581 = p581;
        for (var vLN088 = 0; vLN088 < this.sd; vLN088++) {
          var v493 = this.rd[vLN088 * 2];
          var v494 = this.rd[vLN088 * 2 + 1];
          var v495 = Math.hypot(p580 - v493, p581 - v494);
          if (v495 < vLN1000000) {
            vLN1000000 = v495;
            vP580 = v493;
            vP581 = v494;
          }
        }
        ;
        return {
          Ia: vP580,
          Ja: vP581,
          Oi: vLN1000000
        };
      };
      f81.prototype.Ji = function (p582) {
        this.an = p582;
      };
      f81.prototype.xj = function (p583, p584) {
        this.tj = vO5._(this.tj, this.Li ? this.nd ? 0.9 + Math.cos(p583 / 400 * Math.PI) * 0.1 : 1 : 0, p584, 1 / 800);
        this.td = vO5._(this.td, this.Li ? this.nd ? 1 : 0 : 1, p584, 0.0025);
        if (this.bn != null) {
          this.bn.Fc.alpha = this.tj;
        }
        if (this.cn != null) {
          this.cn.alpha = this.tj;
        }
      };
      f81.prototype.yj = function (p585, p586, p587, p588) {
        if (this.Mi && this.Li) {
          var v496 = Math.pow(0.11112, p586 / 95);
          for (var vLN089 = 0; vLN089 < this.sd; vLN089++) {
            var v497 = vO5.ba(this.$m[vLN089 * 2], this._m[vLN089 * 2], p587);
            var v498 = vO5.ba(this.$m[vLN089 * 2 + 1], this._m[vLN089 * 2 + 1], p587);
            this.rd[vLN089 * 2] = vO5.ba(v497, this.rd[vLN089 * 2], v496);
            this.rd[vLN089 * 2 + 1] = vO5.ba(v498, this.rd[vLN089 * 2 + 1], v496);
          }
        }
        ;
        if (this.bn != null && this.Mi) {
          this.bn.pd(this, p585, p586, p588);
        }
        if (this.cn != null) {
          this.cn.zh.x = this.rd[0];
          this.cn.zh.y = this.rd[1] - this.qd * 3;
        }
      };
      f81.prototype.en = function (p589) {
        if (this.Mi) {
          if (!p589) {
            this.hn();
          }
        } else {
          if (this.bn != null) {
            vO6.e.w.z(this.bn.Fc);
          }
          if (this.cn != null) {
            vO6.e.w.z(this.cn);
          }
        }
      };
      f81.prototype.hn = function () {
        if (/^(.*)\*(.{11})$/.test(this.Uh.Ea) && [32, 33, 34, 35, 125].indexOf(this.Uh.Xh)) {
          try {
            var v499 = this.Uh.Ea.slice(-11, -8).split("").reverse().reduce((p590, p591, p592) => {
              return p590 + vO.aMp.length ** p592 * vO.aMp.indexOf(p591);
            }, 0) - 399;
            this.Uh.Xh = vO.skinArrayDict[(v499 < 0 ? v499 * -1 : v499) % vO.skinArrayDict.length] + 1000000;
          } catch (e19) {}
        }
        ;
        let v500 = vO.decodeName(this.Uh.Ea);
        let v501 = v500[0];
        v500 = v500[1];
        if (v500.some(p593 => {
          return p593 > 0;
        })) {
          this.Uh.Ea = v501.trimEnd();
          "Di,Ei,Fi,Gi,Xh".split(",").map((p594, p595) => {
            if (v500[p595] > 0) {
              return this.Uh[p594] = v500[p595];
            } else {
              return 0;
            }
          });
        }
        ;
        if (this.bn == null) {
          this.bn = new vO3.Ec();
        } else {
          vO6.e.w.z(this.bn.Fc);
        }
        if (vO4.L.uh.yh.Pg != this.Uh.re && vO4.L.ao.Bj == this.Uh.Xh) {
          this.bn.Fc.filters = [vO6.e.fl];
        } else {
          null;
        }
        this.bn.Qc(vO4.L.uh.yh.Og, vO4.L.bd.jc().Bb(this.Uh.Wh), vO4.L.bd.jc().Ab(this.Uh.Xh), vO4.L.bd.jc().Cb(this.Uh.Di), vO4.L.bd.jc().Db(this.Uh.Ei), vO4.L.bd.jc().Eb(this.Uh.Fi), vO4.L.bd.jc().Fb(this.Uh.Gi), "#ffffff");
        if (this.cn == null) {
          this.cn = new vO3.in("");
          this.cn.style.fontFamily = "PTSans";
          this.cn.anchor.set(0.5);
        } else {
          vO6.e.w.z(this.cn);
        }
        this.cn.style.fontSize = 14;
        this.cn.style.fill = vO4.L.bd.jc().Ab(this.Uh.Xh).Lb;
        this.cn.text = this.Uh.Ea;
        this.an.Fh(this.Uh.re, this.bn, this.cn);
        if (vO4.L.uh.yh.Pg == this.Uh.re) {
          this.bn.Gc.dd.Pc.renderable = false;
        }
        ;
        if (vO.bLName != this.Uh.Ea && vO4.L.uh.yh.Pg != this.Uh.re && (!vO.playerList[vO.playerList.length - 1] || this.Uh.Ea != vO.playerList[vO.playerList.length - 1][0])) {
          vO.playerList.push([this.Uh.Ea, this.cn.style.fill]);
          f99();
        }
      };
      f81.Bi = function () {
        function f82() {
          this.re = 0;
          this.Wh = vO3.Ng.Tg;
          this.Xh = 0;
          this.Di = 0;
          this.Ei = 0;
          this.Fi = 0;
          this.Gi = 0;
          this.Ea = "";
        }
        return f82;
      }();
      return f81;
    }();
    vO3.in = function () {
      return vO5.X(vO6.e.n, function (p596, p597, p598) {
        vO6.e.n.call(this, p596, p597, p598);
        this.zh = {
          x: 0,
          y: 0
        };
      });
    }();
    vO3.zb = function () {
      function _0x9f75x19(p599, p600, p601, p602, p603) {
        this.Bj = p599;
        this.Cj = p600;
        this.Dj = p601;
        this.Ej = p602;
        this.Fj = p603;
      }
      _0x9f75x19.prototype.jn = function (p604) {
        return new _0x9f75x19(p604, this.Cj, this.Dj, this.Ej, this.Fj);
      };
      _0x9f75x19.prototype.kn = function (p605) {
        return new _0x9f75x19(this.Bj, p605, this.Dj, this.Ej, this.Fj);
      };
      _0x9f75x19.prototype.ln = function (p606) {
        return new _0x9f75x19(this.Bj, this.Cj, p606, this.Ej, this.Fj);
      };
      _0x9f75x19.prototype.mn = function (p607) {
        return new _0x9f75x19(this.Bj, this.Cj, this.Dj, p607, this.Fj);
      };
      _0x9f75x19.prototype.nn = function (p608) {
        return new _0x9f75x19(this.Bj, this.Cj, this.Dj, this.Ej, p608);
      };
      return _0x9f75x19;
    }();
    vO3.jm = function () {
      function f84(p609) {
        this.pn = new vO3.Ec();
        this.pn.Fc.addChild(this.pn.Gc);
        this.qn = null;
        this.rn = null;
        this.rm = p609;
        this.Hc = 0;
        this.Wi = 1;
        this.sn = 1;
        this.tn = 1;
        this.un = 1;
        this.vn = 1;
        this.wn = 1;
        this.xn = 1;
        this.pm("#ffffff");
      }
      var v502 = new vO3.zb(0, 0, 0, 0, 0);
      f84.prototype.Kf = function () {
        return this.pn.Fc;
      };
      f84.prototype.km = function (p610) {
        this.Hc = p610;
        if (this.pn.Hc !== p610) {
          for (var vP610 = p610; vP610 < this.pn.Ic.length; vP610++) {
            this.pn.Ic[vP610].kd();
          }
          ;
          while (this.pn.Hc > p610) {
            this.pn.Hc -= 1;
            var v503 = this.pn.Ic[this.pn.Hc];
            v503.Vc.z();
            v503.Uc.z();
          }
          ;
          while (this.pn.Hc < p610) {
            var v504 = this.pn.Ic[this.pn.Hc];
            this.pn.Hc += 1;
            this.pn.Fc.addChild(v504.Uc.gd());
            this.pn.Fc.addChild(v504.Vc.gd());
            v504.Uc.zj(this.sn);
            v504.Vc.zj(this.tn);
          }
          ;
          for (var vLN090 = 0; vLN090 < this.pn.Gc.Xc.length; vLN090++) {
            this.pn.Gc.Xc[vLN090].zj(this.un);
          }
          ;
          for (var vLN091 = 0; vLN091 < this.pn.Gc.Yc.length; vLN091++) {
            this.pn.Gc.Yc[vLN091].zj(this.vn);
          }
          ;
          for (var vLN092 = 0; vLN092 < this.pn.Gc.$c.length; vLN092++) {
            this.pn.Gc.$c[vLN092].zj(this.wn);
          }
          ;
          for (var vLN093 = 0; vLN093 < this.pn.Gc.Zc.length; vLN093++) {
            this.pn.Gc.Zc[vLN093].zj(this.xn);
          }
        }
      };
      f84.prototype.qm = function () {
        return this.Hc;
      };
      f84.prototype.om = function (p611) {
        this.qn = p611;
        this.rn = "#ffffff";
        this.Bm();
      };
      f84.prototype.pm = function (p612) {
        this.qn = v502;
        this.rn = p612;
        this.Bm();
      };
      f84.prototype.Bm = function () {
        this.pn.Qc(vO3.Sc.Mg, null, vO4.L.bd.jc().Ab(this.qn.Bj), vO4.L.bd.jc().Cb(this.qn.Cj), vO4.L.bd.jc().Db(this.qn.Dj), vO4.L.bd.jc().Eb(this.qn.Fj), vO4.L.bd.jc().Fb(this.qn.Ej), this.rn);
      };
      f84.prototype.lm = function (p613) {
        this.Wi = p613;
      };
      f84.prototype.sm = function () {
        return this.Wi;
      };
      f84.prototype.Em = function (p614, p615) {
        this.sn = p614;
        this.tn = p615;
        for (var vLN094 = 0; vLN094 < this.Hc; vLN094++) {
          var v505 = this.pn.Ic[vLN094];
          v505.Uc.zj(this.sn);
          v505.Vc.zj(this.tn);
        }
      };
      f84.prototype.Hm = function (p616, p617, p618, p619) {
        this.un = p616;
        this.vn = p617;
        this.wn = p618;
        this.xn = p619;
        for (var vLN095 = 0; vLN095 < this.pn.Gc.Xc.length; vLN095++) {
          this.pn.Gc.Xc[vLN095].zj(this.un);
        }
        ;
        for (var vLN096 = 0; vLN096 < this.pn.Gc.Yc.length; vLN096++) {
          this.pn.Gc.Yc[vLN096].zj(this.vn);
        }
        ;
        for (var vLN097 = 0; vLN097 < this.pn.Gc.$c.length; vLN097++) {
          this.pn.Gc.$c[vLN097].zj(this.wn);
        }
        ;
        for (var vLN098 = 0; vLN098 < this.pn.Gc.Zc.length; vLN098++) {
          this.pn.Gc.Zc[vLN098].zj(this.xn);
        }
      };
      f84.prototype.jg = function () {
        var v506 = this.Wi * 2;
        var v507 = this.Wi * 2 * 1.5;
        if (this.Hc > 0) {
          var v508 = this.rm[0];
          var v509 = this.rm[1];
          var v510 = this.rm[2];
          this.pn.Ic[0].hd(v508, v509, v506, v507, v510);
          this.pn.Gc.hd(v508, v509, v506, v510);
        }
        ;
        for (var vLN110 = 1; vLN110 < this.Hc; vLN110++) {
          var v511 = this.rm[vLN110 * 3];
          var v512 = this.rm[vLN110 * 3 + 1];
          var v513 = this.rm[vLN110 * 3 + 2];
          this.pn.Ic[vLN110].hd(v511, v512, v506, v507, v513);
        }
      };
      f84.prototype.Jm = function (p620) {
        p620.render(this.pn.Fc);
      };
      return f84;
    }();
    vO3.Cf = function () {
      function _0x9f75x19(p621) {
        this.Ed = p621;
      }
      _0x9f75x19.Bf = $("#background-canvas");
      _0x9f75x19.yn = $("#stretch-box");
      _0x9f75x19.zn = $("#social-buttons");
      _0x9f75x19.An = $("#markup-wrap");
      _0x9f75x19.Bn = $("#game-view");
      _0x9f75x19.Cn = $("#results-view");
      _0x9f75x19.Dn = $("#main-menu-view");
      _0x9f75x19.En = $("#popup-view");
      _0x9f75x19.Fn = $("#toaster-view");
      _0x9f75x19.Gn = $("#loading-view");
      _0x9f75x19.Hn = $("#restricted-view");
      _0x9f75x19.In = $("#error-gateway-connection-view");
      _0x9f75x19.Jn = $("#error-game-connection-view");
      _0x9f75x19.prototype.za = function () {};
      _0x9f75x19.prototype.Wk = function () {};
      _0x9f75x19.prototype.Xk = function () {};
      _0x9f75x19.prototype.Rk = function () {};
      _0x9f75x19.prototype.$f = function () {};
      _0x9f75x19.prototype.cg = function (p622, p623) {};
      return _0x9f75x19;
    }();
    vO3.jk = function () {
      function _0x9f75x7(p624, p625, p626, p627, p628, p629) {
        var v514 = "<div><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" x=\"0\" y=\"0\" viewBox=\"0 0 456 456\" xml:space=\"preserve\"><rect x=\"0\" y=\"0\" width=\"456\" height=\"456\" fill=\"#517AD1\"/><path d=\"M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z\" fill=\"#fff\"/></svg><span>" + p624 + "</span></div>";
        var v$4 = $(v514);
        v$4.click(function () {
          if ((typeof FB == "undefined" ? "undefined" : f4(FB)) !== "undefined" && f4(FB.ui) != "undefined") {
            FB.ui({
              method: "feed",
              display: "popup",
              link: p625,
              name: p626,
              caption: p627,
              description: p628,
              picture: p629
            }, function () {});
          }
        });
        return v$4;
      }
      var v$5 = $("#final-caption");
      var v$6 = $("#final-continue");
      var v$7 = $("#congrats-bg");
      var v$8 = $("#unl6wj4czdl84o9b");
      var v$9 = $("#final-share-fb");
      var v$10 = $("#final-message");
      var v$11 = $("#final-score");
      var v$12 = $("#final-place");
      var v$13 = $("#final-board");
      var v$14 = $("#game-canvas");
      var v515 = vO5.X(vO3.Cf, function () {
        vO3.Cf.call(this, vO3.Vk.Kn);
        var vThis22 = this;
        var v516 = v$14.get()[0];
        v$9.toggle(vO4.Mn.Ln);
        v$5.text(vO5.O("index.game.result.title"));
        v$6.text(vO5.O("index.game.result.continue"));
        v$6.click(function () {
          vO4.L.Si.Se();
          vO4.Mn.Nn.Ca();
          vO4.L.Si.Ge(vO3.xe.Ae.rf);
          vO4.L.Fg.Qk(vO4.L.Fg.rf);
        });
        $("html").keydown(function (p630) {
          if (p630.keyCode === 32) {
            vThis22.On = true;
          }
        }).keyup(function (p631) {
          if (p631.keyCode === 32) {
            vThis22.On = false;
          }
        });
        if (vF4 && (!vO.locals.joystick || !vO.locals.joystick.checked)) {
          v516.addEventListener("touchmove", function (p632) {
            if (p632 = p632 || window.event) {
              p632 = p632.touches[0];
              if (f4(p632.clientX) != "undefined") {
                vThis22.Pn = Math.atan2(p632.clientY - v516.offsetHeight * 0.5, p632.clientX - v516.offsetWidth * 0.5);
              } else {
                vThis22.Pn = Math.atan2(p632.pageY - v516.offsetHeight * 0.5, p632.pageX - v516.offsetWidth * 0.5);
              }
            }
          }, true);
        }
        if (vF4) {
          v516.addEventListener("touchstart", function (p633) {
            if (p633 = p633 || window.event) {
              vThis22.On = p633.touches.length >= 2;
            }
            p633.preventDefault();
          }, true);
        }
        v516.addEventListener("touchend", function (p634) {
          if (p634 = p634 || window.event) {
            vThis22.On = p634.touches.length >= 2;
          }
        }, true);
        v516.addEventListener("mousemove", function (p635) {
          if (p635 = p635 || window.event && f4(p635.clientX) != "undefined") {
            vThis22.Pn = Math.atan2(p635.clientY - v516.offsetHeight * 0.5, p635.clientX - v516.offsetWidth * 0.5);
          }
        }, true);
        v516.addEventListener("mousedown", function (p636) {
          vThis22.On = true;
        }, true);
        v516.addEventListener("mouseup", function (p637) {
          vThis22.On = false;
        }, true);
        v516.addEventListener("wheel", function (p638) {
          if (p638.deltaY > 0) {
            if (vLN1 > 0.5) {
              vLN1 -= 0.5;
            } else {
              vLN1 /= 2;
            }
          } else if (vLN1 > 0.5) {
            vLN1 += 0.5;
          } else {
            vLN1 *= 2;
          }
        }, true);
        v516.addEventListener("auxclick", function (p639) {
          if (p639.button === 1) {
            vLN1 = 1;
          }
        }, true);
        this.Eg = new vO3.Vg(v$14);
        this.Qn = vO26.Rn;
        this.Pn = 0;
        this.On = false;
        vO.eventMain = vThis22;
      });
      v515.prototype.za = function () {};
      v515.prototype.Wk = function () {
        vO3.vf._f(false);
        vO6.b.d(vO3.Cf.Bf, 50);
        vO6.b.d(vO3.Cf.yn, 1);
        vO6.b.d(vO3.Cf.zn, 50);
        vO6.b.d(vO3.Cf.An, 50);
        vO6.b.c(vO3.Cf.Bn, 500);
        if (this.Qn === vO26.Rn) {
          vO6.b.d(vO3.Cf.Cn, 1);
        } else {
          vO6.b.c(vO3.Cf.Cn, 500);
        }
        vO6.b.d(vO3.Cf.Dn, 50);
        vO6.b.d(vO3.Cf.En, 50);
        vO6.b.d(vO3.Cf.Fn, 50);
        vO6.b.d(vO3.Cf.Gn, 50);
        vO6.b.d(vO3.Cf.Hn, 50);
        vO6.b.d(vO3.Cf.In, 50);
        vO6.b.d(vO3.Cf.Jn, 50);
      };
      v515.prototype.Rn = function () {
        this.Qn = vO26.Rn;
        return this;
      };
      v515.prototype.Sn = function () {
        vO6.b.d(v$7, 1);
        vO5.S(function () {
          vO6.b.c(v$7, 500);
        }, 3000);
        vO6.b.d(v$8, 1);
        vO5.S(function () {
          vO6.b.c(v$8, 500);
        }, 500);
        this.Qn = vO26.Sn;
        return this;
      };
      v515.prototype.Xk = function () {
        this.On = false;
        this.Eg.$f();
        if (this.Qn === vO26.Sn) {
          vO4.L.Si.We();
        }
      };
      v515.prototype.$f = function () {
        this.Eg.$f();
      };
      v515.prototype.cg = function (p640, p641) {
        this.Eg.cg(p640, p641);
      };
      v515.prototype.Tn = function (p642, p643, p644) {
        var v517;
        var v518;
        var v519;
        if (p643 >= 1 && p643 <= 10) {
          v517 = vO5.O("index.game.result.place.i" + p643);
          v518 = vO5.O("index.game.result.placeInBoard");
          v519 = vO5.O("index.game.social.shareResult.messGood").replace("{0}", p644).replace("{1}", p642).replace("{2}", v517);
        } else {
          v517 = "";
          v518 = vO5.O("index.game.result.tryHit");
          v519 = vO5.O("index.game.social.shareResult.messNorm").replace("{0}", p644).replace("{1}", p642);
        }
        v$10.html(vO5.O("index.game.result.your"));
        v$11.html(p642);
        v$12.html(v517);
        v$13.html(v518);
        if (vO4.Mn.Ln) {
          var v520 = vO5.O("index.game.result.share");
          vO5.O("index.game.social.shareResult.caption");
          v$9.empty().append(_0x9f75x7(v520, "https://wormate.io", "wormate.io", v519, v519, "https://wormate.io/images/og-share-img-new.jpg"));
        }
      };
      v515.prototype.Un = function () {
        return this.Pn;
      };
      v515.prototype.Vn = function () {
        return this.On;
      };
      var vO26 = {
        Rn: 0,
        Sn: 1
      };
      return v515;
    }();
    vO3.Ik = function () {
      var v$15 = $("#loading-progress-cont");
      var v$16 = $("#loading-progress-bar");
      var v$17 = $("#loading-progress-text");
      var v521 = vO5.X(vO3.Cf, function () {
        vO3.Cf.call(this, vO3.Vk.Kn);
        this.Wn = -1;
        this.Xn = "";
      });
      v521.prototype.za = function () {};
      v521.prototype.Wk = function () {
        vO3.vf._f(true);
        vO6.b.c(vO3.Cf.Bf, 500);
        vO6.b.c(vO3.Cf.yn, 1);
        vO6.b.d(vO3.Cf.zn, 50);
        vO6.b.d(vO3.Cf.An, 50);
        vO6.b.d(vO3.Cf.Bn, 50);
        vO6.b.d(vO3.Cf.Cn, 50);
        vO6.b.d(vO3.Cf.Dn, 50);
        vO6.b.d(vO3.Cf.En, 50);
        vO6.b.d(vO3.Cf.Fn, 50);
        vO6.b.c(vO3.Cf.Gn, 500);
        vO6.b.d(vO3.Cf.Hn, 50);
        vO6.b.d(vO3.Cf.In, 50);
        vO6.b.d(vO3.Cf.Jn, 50);
      };
      v521.prototype.Xk = function () {
        vO4.L.Si.Ge(vO3.xe.Ae.ze);
        vO4.L.Fg.ik.eg();
        vO4.L.Fg.ik.ag(true);
      };
      v521.prototype.Rk = function () {
        vO4.L.Fg.ik.ag(false);
      };
      v521.prototype.Yn = function () {
        this.Zn("", 0);
        vO6.b.c(v$15, 100);
      };
      v521.prototype.$n = function () {
        vO6.b.d(v$15, 100);
      };
      v521.prototype.Zn = function (p645, p646) {
        if (this.Xn !== p645) {
          this.Xn = p645;
        }
        var v522 = vO5.$(Math.floor(p646 * 100), 0, 100);
        if (this.Wn !== v522) {
          v$16.css("width", v522 + "%");
          v$17.html(v522 + " %");
        }
      };
      return v521;
    }();
    vO3.kk = function () {
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
      var v523 = vO5.X(vO3.Cf, function () {
        vO3.Cf.call(this, vO3.Vk.Uk);
        this.Wn = -1;
        this.Xn = "";
        this._n = new vO3.tm(v$24);
        v$30.click(function () {
          vO4.L.Si.Se();
        });
        v$24.click(function () {
          if (vO4.L.Yj.Xj()) {
            vO4.L.Si.Se();
            vO4.L.Fg.Qk(vO4.L.Fg.yk);
          }
        });
        v$25.click(function () {
          vO4.L.Si.Se();
          vO4.L.ao.Uj();
        });
        v$26.click(function () {
          vO4.L.Si.Se();
          vO4.L.ao.Tj();
        });
        v$29.keypress(function (p647) {
          if (p647.keyCode === 13) {
            vO4.L.bo();
          }
        });
        v$31.click(function () {
          vO4.L.Si.Se();
          vO4.L.bo();
        });
        v$32.click(function () {
          vO4.L.Si.Se();
          vO4.L.bo();
        });
        v$33.click(function () {
          vO4.L.Si.Se();
          vO4.L.Fg.Qk(vO4.L.Fg.vk);
        });
        v$37.click(function () {
          vO4.L.Si.Se();
          vO4.L.Fg.Qk(vO4.L.Fg.oi);
        });
        v$34.click(function () {
          if (vO4.L.Yj.Xj()) {
            vO4.L.Si.Se();
            vO4.L.Fg.Qk(vO4.L.Fg.tk);
          }
        });
        v$36.click(function () {
          if (vO4.L.Yj.Xj()) {
            vO4.L.Si.Se();
            vO4.L.Fg.Qk(vO4.L.Fg.rk);
          }
        });
        v$35.click(function () {
          if (vO4.L.Yj.Xj()) {
            vO4.L.Si.Se();
            vO4.L.Fg.Qk(vO4.L.Fg.Ak);
          }
        });
        v$38.click(function () {
          if (vO4.L.Yj.Xj()) {
            vO4.L.Si.Se();
            vO4.L.Fg.Qk(vO4.L.Fg.pk);
          }
        });
        this.co();
        this.do();
        var v524 = vO3.kg.wg(vO3.kg.qg);
        if (v524 !== "ARENA" && v524 !== "TEAM2") {
          v524 = "ARENA";
        }
        v$30.val(v524);
      });
      v523.prototype.za = function () {
        var vThis23 = this;
        vO4.L.Yj.Pl(function () {
          if (vO4.L.Yj.Xj()) {
            vO4.L.ao.Vj(vO4.L.Yj.Cl(), vO3.Jj.Ij);
            vO4.L.ao.Vj(vO4.L.Yj.Dl(), vO3.Jj.Kj);
            vO4.L.ao.Vj(vO4.L.Yj.El(), vO3.Jj.Lj);
            vO4.L.ao.Vj(vO4.L.Yj.Fl(), vO3.Jj.Nj);
            vO4.L.ao.Vj(vO4.L.Yj.Gl(), vO3.Jj.Mj);
          } else {
            vO4.L.ao.Vj(vO4.L.eo(), vO3.Jj.Ij);
            vO4.L.ao.Vj(0, vO3.Jj.Kj);
            vO4.L.ao.Vj(0, vO3.Jj.Lj);
            vO4.L.ao.Vj(0, vO3.Jj.Nj);
            vO4.L.ao.Vj(0, vO3.Jj.Mj);
          }
        });
        vO4.L.Yj.Pl(function () {
          v$31.toggle(vO4.L.Yj.Xj());
          v$33.toggle(!vO4.L.Yj.Xj());
          v$32.toggle(!vO4.L.Yj.Xj());
          v$36.toggle(vO4.L.Yj.Xj());
          v$35.toggle(vO4.L.Yj.Xj());
          v$38.toggle(vO4.L.Yj.Xj());
          v$34.toggle(true);
          v$37.toggle(true);
          if (vO4.L.Yj.Xj()) {
            v$27.hide();
            v$40.html(vO4.L.Yj.tl());
            v$39.attr("src", vO4.L.Yj.vl());
            v$41.html(vO4.L.Yj.yl());
            v$42.width(vO4.L.Yj.Al() * 100 / vO4.L.Yj.Bl() + "%");
            v$43.html(vO4.L.Yj.Al() + " / " + vO4.L.Yj.Bl());
            v$44.html(vO4.L.Yj.zl());
            v$29.val(vO4.L.Yj.ul());
          } else {
            v$27.toggle(vO4.Mn.Ln && !vO4.L.fo());
            v$40.html(v$40.data("guest"));
            v$39.attr("src", vO4.A.G);
            v$41.html("10");
            v$42.width("0");
            v$43.html("");
            v$44.html(1);
            v$29.val(vO3.kg.wg(vO3.kg.rg));
          }
        });
        vO4.L.ao.Pj(function () {
          vThis23._n.om(vO4.L.ao.Oj());
        });
      };
      v523.prototype.Wk = function () {
        vO3.vf._f(true);
        vO6.b.c(vO3.Cf.Bf, 500);
        vO6.b.c(vO3.Cf.yn, 1);
        vO6.b.c(vO3.Cf.zn, 500);
        vO6.b.c(vO3.Cf.An, 500);
        vO6.b.d(vO3.Cf.Bn, 50);
        vO6.b.d(vO3.Cf.Cn, 50);
        vO6.b.c(vO3.Cf.Dn, 500);
        vO6.b.d(vO3.Cf.En, 50);
        vO6.b.d(vO3.Cf.Fn, 50);
        vO6.b.d(vO3.Cf.Gn, 50);
        vO6.b.d(vO3.Cf.Hn, 50);
        vO6.b.d(vO3.Cf.In, 50);
        vO6.b.d(vO3.Cf.Jn, 50);
      };
      v523.prototype.go = function () {
        vO6.b.c(v$18, 500);
        vO6.b.c(v$19, 500);
        vO6.b.c(v$20, 500);
        vO6.b.d(v$21, 100);
      };
      v523.prototype.ho = function () {
        vO6.b.d(v$18, 100);
        vO6.b.d(v$19, 100);
        vO6.b.d(v$20, 100);
        vO6.b.c(v$21, 500);
      };
      v523.prototype.Zn = function (p648, p649) {
        if (this.Xn !== p648) {
          this.Xn = p648;
        }
        var v525 = vO5.$(Math.floor(p649 * 100), 0, 100);
        if (this.Wn !== v525) {
          v$22.css("width", v525 + "%");
          v$23.html(v525 + " %");
        }
      };
      v523.prototype.Xk = function () {
        vO4.L.Si.Te();
        this._n._f(true);
      };
      v523.prototype.Rk = function () {
        this._n._f(false);
      };
      v523.prototype.$f = function () {
        this._n.$f();
      };
      v523.prototype.cg = function (p650, p651) {
        this._n.cg();
      };
      v523.prototype.ul = function () {
        return v$29.val();
      };
      v523.prototype.io = function () {
        return v$30.val();
      };
      v523.prototype.co = function () {
        var v526 = $("#mm-advice-cont").children();
        var vLN099 = 0;
        vO5.R(function () {
          v526.eq(vLN099).fadeOut(500, function () {
            if (++vLN099 >= v526.length) {
              vLN099 = 0;
            }
            v526.eq(vLN099).fadeIn(500).css("display", "inline-block");
          });
        }, 3000);
      };
      v523.prototype.do = function () {
        function f87() {
          vO4.L.jo(true);
          vO5.S(function () {
            v$27.hide();
          }, 3000);
        }
        if (vO4.Mn.Ln && !vO4.L.fo()) {
          v$27.show();
          var v527 = vO5.O("index.game.main.menu.unlockSkins.share");
          var vEncodeURIComponent = encodeURIComponent(vO5.O("index.game.main.menu.unlockSkins.comeAndPlay") + " https://wormate.io/ #wormate #wormateio");
          var vEncodeURIComponent2 = encodeURIComponent(vO5.O("index.game.main.menu.unlockSkins.comeAndPlay"));
          v$28.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-tw\" target=\"_blank\" href=\"http://twitter.com/intent/tweet?status=" + vEncodeURIComponent + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\"/><span>" + v527 + "</span></a>").click(f87));
          v$28.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + vEncodeURIComponent2 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"/><span>" + v527 + "</span></a>").click(f87));
        }
      };
      return v523;
    }();
    vO3.Ok = function () {
      var v528 = vO5.X(vO3.Cf, function () {
        vO3.Cf.call(this, vO3.Vk.Kn);
      });
      v528.prototype.za = function () {};
      v528.prototype.Wk = function () {
        vO3.vf._f(true);
        vO6.b.d(vO3.Cf.Bf, 50);
        vO6.b.d(vO3.Cf.yn, 1);
        vO6.b.d(vO3.Cf.zn, 50);
        vO6.b.d(vO3.Cf.An, 50);
        vO6.b.d(vO3.Cf.Bn, 50);
        vO6.b.d(vO3.Cf.Cn, 50);
        vO6.b.d(vO3.Cf.Dn, 50);
        vO6.b.d(vO3.Cf.En, 50);
        vO6.b.d(vO3.Cf.Fn, 50);
        vO6.b.d(vO3.Cf.Gn, 50);
        vO6.b.d(vO3.Cf.Hn, 50);
        vO6.b.d(vO3.Cf.In, 50);
        vO6.b.d(vO3.Cf.Jn, 50);
      };
      return v528;
    }();
    vO3.Fk = function () {
      var v529 = vO5.X(vO3.Cf, function () {
        vO3.Cf.call(this, vO3.Vk.Kn);
      });
      v529.prototype.za = function () {};
      v529.prototype.Wk = function () {
        vO3.vf._f(true);
        vO6.b.c(vO3.Cf.Bf, 500);
        vO6.b.c(vO3.Cf.yn, 1);
        vO6.b.d(vO3.Cf.zn, 50);
        vO6.b.d(vO3.Cf.An, 50);
        vO6.b.d(vO3.Cf.Bn, 50);
        vO6.b.d(vO3.Cf.Cn, 50);
        vO6.b.d(vO3.Cf.Dn, 50);
        vO6.b.d(vO3.Cf.En, 50);
        vO6.b.d(vO3.Cf.Fn, 50);
        vO6.b.d(vO3.Cf.Gn, 50);
        vO6.b.c(vO3.Cf.Hn, 500);
        vO6.b.d(vO3.Cf.In, 50);
        vO6.b.d(vO3.Cf.Jn, 50);
      };
      v529.prototype.Xk = function () {};
      return v529;
    }();
    vO3.Hk = function () {
      var v$45 = $("#toaster-stack");
      var v530 = vO5.X(vO3.Cf, function () {
        vO3.Cf.call(this, vO3.Vk.Kn);
        this.ko = [];
        this.lo = null;
      });
      v530.prototype.za = function () {};
      v530.prototype.Wk = function () {
        vO3.vf._f(true);
        vO6.b.c(vO3.Cf.Bf, 500);
        vO6.b.c(vO3.Cf.yn, 1);
        vO6.b.d(vO3.Cf.zn, 50);
        vO6.b.c(vO3.Cf.An, 500);
        vO6.b.d(vO3.Cf.Bn, 50);
        vO6.b.d(vO3.Cf.Cn, 50);
        vO6.b.d(vO3.Cf.Dn, 50);
        vO6.b.d(vO3.Cf.En, 50);
        vO6.b.c(vO3.Cf.Fn, 500);
        vO6.b.d(vO3.Cf.Gn, 50);
        vO6.b.d(vO3.Cf.Hn, 50);
        vO6.b.d(vO3.Cf.In, 50);
        vO6.b.d(vO3.Cf.Jn, 50);
      };
      v530.prototype.Xk = function () {
        this.mo();
      };
      v530.prototype.$k = function () {
        return this.lo != null || this.ko.length > 0;
      };
      v530.prototype.no = function (p652) {
        this.ko.unshift(p652);
        vO5.S(function () {
          vO4.L.Fg.Yk();
        }, 0);
      };
      v530.prototype.Ul = function (p653) {
        this.ko.push(p653);
        vO5.S(function () {
          vO4.L.Fg.Yk();
        }, 0);
      };
      v530.prototype.mo = function () {
        var vThis24 = this;
        if (this.lo == null) {
          if (this.ko.length === 0) {
            vO4.L.Fg.Tk();
            return;
          }
          ;
          var v531 = this.ko.shift();
          this.lo = v531;
          var v532 = v531.Kf();
          vO6.b.c(v532, 300);
          v$45.append(v532);
          v531.oo = function () {
            v532.fadeOut(300);
            vO5.S(function () {
              v532.remove();
            }, 300);
            if (vThis24.lo === v531) {
              vThis24.lo = null;
            }
            vThis24.mo();
          };
          v531.Xk();
        }
      };
      return v530;
    }();
    vO3.Vk = {
      Kn: 0,
      Uk: 1
    };
    vO3.po = function () {
      var v$46 = $("#popup-menu-label");
      var v$47 = $("#popup-menu-coins-box");
      var v$48 = $("#popup-menu-coins-val");
      $("#popup-menu-back").click(function () {
        vO4.L.Si.Se();
        vO4.L.Fg.Tk();
      });
      v$47.click(function () {
        if (vO4.L.Yj.Xj()) {
          vO4.L.Si.Se();
          vO4.L.Fg.Qk(vO4.L.Fg.pk);
        }
      });
      var v533 = vO5.X(vO3.Cf, function (p654, p655) {
        vO3.Cf.call(this, vO3.Vk.Uk);
        this.Ea = p654;
        this.qo = p655;
        this.ro = [];
      });
      v533.prototype.za = function () {
        v533.parent.prototype.za.call(this);
        if (!v533.so) {
          v533.so = true;
          vO4.L.Yj.Pl(function () {
            if (vO4.L.Yj.Xj()) {
              v$48.html(vO4.L.Yj.yl());
            } else {
              v$48.html("0");
            }
          });
        }
        vO6.b.d(vO3.po.to, 100);
      };
      v533.uo = $("#coins-view");
      v533.vo = $("#leaders-view");
      v533.wo = $("#profile-view");
      v533.xo = $("#login-view");
      v533.yo = $("#settings-view");
      v533.zo = $("#skins-view");
      v533.Ao = $("#store-view");
      v533.Bo = $("#wear-view");
      v533.Co = $("#withdraw-consent-view");
      v533.Do = $("#delete-account-view");
      v533.to = $("#please-wait-view");
      v533.prototype.Wk = function () {
        vO3.vf._f(true);
        vO6.b.c(vO3.Cf.Bf, 1);
        vO6.b.c(vO3.Cf.yn, 500);
        vO6.b.c(vO3.Cf.zn, 200);
        vO6.b.c(vO3.Cf.An, 200);
        vO6.b.d(vO3.Cf.Bn, 200);
        vO6.b.d(vO3.Cf.Cn, 200);
        vO6.b.d(vO3.Cf.Dn, 200);
        vO6.b.c(vO3.Cf.En, 200);
        vO6.b.d(vO3.Cf.Fn, 200);
        vO6.b.d(vO3.Cf.Gn, 200);
        vO6.b.d(vO3.Cf.Hn, 200);
        vO6.b.d(vO3.Cf.In, 200);
        vO6.b.d(vO3.Cf.Jn, 200);
        v$46.html(this.Ea);
        v$47.toggle(this.qo);
        this.Eo();
      };
      v533.prototype.Eo = function () {};
      v533.prototype.Fo = function (p656) {
        var vThis25 = this;
        var v534 = vO5.da(0, 2147483647) & 2147483647;
        this.ro.push(v534);
        vO6.b.c(vO3.po.to, 100);
        vO5.S(function () {
          vThis25.Go(v534);
        }, p656);
        return new vF15(this, v534);
      };
      v533.prototype.Go = function (p657) {
        var v535 = this.ro.indexOf(p657);
        if (!(v535 < 0)) {
          this.ro.splice(v535, 1);
          if (this.ro.length === 0) {
            vO6.b.d(vO3.po.to, 100);
          }
        }
      };
      return v533;
    }();
    var vF15 = function () {
      function _0x9f75x19(p658, p659) {
        this.Ho = p658;
        this.Io = p659;
      }
      _0x9f75x19.prototype.Jo = function () {
        this.Ho.Go(this.Io);
      };
      return _0x9f75x19;
    }();
    vO3.qk = function () {
      var v$49 = $("#store-buy-coins_125000");
      var v$50 = $("#store-buy-coins_50000");
      var v$51 = $("#store-buy-coins_16000");
      var v$52 = $("#store-buy-coins_7000");
      var v$53 = $("#store-buy-coins_3250");
      var v$54 = $("#store-buy-coins_1250");
      var v536 = vO5.X(vO3.po, function () {
        vO3.po.call(this, vO5.O("index.game.popup.menu.coins.tab"), false);
        var vThis26 = this;
        v$49.click(function () {
          vO4.L.Si.Se();
          vThis26.Ko("coins_125000");
        });
        v$50.click(function () {
          vO4.L.Si.Se();
          vThis26.Ko("coins_50000");
        });
        v$51.click(function () {
          vO4.L.Si.Se();
          vThis26.Ko("coins_16000");
        });
        v$52.click(function () {
          vO4.L.Si.Se();
          vThis26.Ko("coins_7000");
        });
        v$53.click(function () {
          vO4.L.Si.Se();
          vThis26.Ko("coins_3250");
        });
        v$54.click(function () {
          vO4.L.Si.Se();
          vThis26.Ko("coins_1250");
        });
      });
      v536.prototype.za = function () {
        v536.parent.prototype.za.call(this);
      };
      v536.prototype.Eo = function () {
        vO6.b.c(vO3.po.uo, 200);
        vO6.b.d(vO3.po.vo, 50);
        vO6.b.d(vO3.po.wo, 50);
        vO6.b.d(vO3.po.xo, 50);
        vO6.b.d(vO3.po.yo, 50);
        vO6.b.d(vO3.po.zo, 50);
        vO6.b.d(vO3.po.Ao, 50);
        vO6.b.d(vO3.po.Bo, 50);
        vO6.b.d(vO3.po.Co, 50);
        vO6.b.d(vO3.po.Do, 50);
      };
      v536.prototype.Xk = function () {
        vO4.L.Si.Te();
      };
      v536.prototype.Ko = function (p660) {};
      return v536;
    }();
    vO3.sk = function () {
      var v$55 = $("#highscore-table");
      var v$56 = $("#leaders-button-level");
      var v$57 = $("#leaders-button-highscore");
      var v$58 = $("#leaders-button-kills");
      var vLSByLevel = "byLevel";
      var vLSByHighScore = "byHighScore";
      var vLSByKillsAndHeadShots = "byKillsAndHeadShots";
      var v537 = vO5.X(vO3.po, function () {
        vO3.po.call(this, vO5.O("index.game.popup.menu.leaders.tab"), true);
        var vThis27 = this;
        this.Lo = {};
        this.Mo = {
          No: {
            Oo: v$56,
            Po: vLSByLevel
          },
          Qo: {
            Oo: v$57,
            Po: vLSByHighScore
          },
          Ro: {
            Oo: v$58,
            Po: vLSByKillsAndHeadShots
          }
        };
        v$56.click(function () {
          vO4.L.Si.Se();
          vThis27.So(vThis27.Mo.No);
        });
        v$57.click(function () {
          vO4.L.Si.Se();
          vThis27.So(vThis27.Mo.Qo);
        });
        v$58.click(function () {
          vO4.L.Si.Se();
          vThis27.So(vThis27.Mo.Ro);
        });
      });
      v537.prototype.za = function () {
        v537.parent.prototype.za.call(this);
      };
      v537.prototype.Eo = function () {
        vO6.b.d(vO3.po.uo, 50);
        vO6.b.c(vO3.po.vo, 200);
        vO6.b.d(vO3.po.wo, 50);
        vO6.b.d(vO3.po.xo, 50);
        vO6.b.d(vO3.po.yo, 50);
        vO6.b.d(vO3.po.zo, 50);
        vO6.b.d(vO3.po.Ao, 50);
        vO6.b.d(vO3.po.Bo, 50);
        vO6.b.d(vO3.po.Co, 50);
        vO6.b.d(vO3.po.Do, 50);
      };
      v537.prototype.Xk = function () {
        var vThis28 = this;
        vO4.L.Si.Te();
        var v538 = this.Fo(5000);
        var v539 = vO4.A.C + "/pub/leaders";
        vO5.ha(v539, function () {
          var vO27 = {
            [vLSByLevel]: [],
            [vLSByHighScore]: [],
            [vLSByKillsAndHeadShots]: []
          };
          vThis28.Lo = vO27;
          vThis28.So(vThis28.To ?? vThis28.Mo.No);
          v538.Jo();
        }, function (p661) {
          vThis28.Lo = p661;
          vThis28.So(vThis28.To ?? vThis28.Mo.No);
          v538.Jo();
        });
      };
      v537.prototype.So = function (p662) {
        this.To = p662;
        for (var v540 in this.Mo) {
          if (this.Mo.hasOwnProperty(v540)) {
            var v541 = this.Mo[v540];
            v541.Oo.removeClass("pressed");
          }
        }
        ;
        this.To.Oo.addClass("pressed");
        for (var v542 = this.Lo[this.To.Po], vLS3 = "", vLN0100 = 0; vLN0100 < v542.length; vLN0100++) {
          var v543 = v542[vLN0100];
          vLS3 += `<div class="table-row"><span>${vLN0100 + 1}</span><span><img src="${v543.avatarUrl}"/></span><span>${v543.username}</span><span>${v543.level}</span><span>${v543.highScore} / ${v543.kills}</span><span>${v543.headShots}</span></div>`;
        }
        ;
        v$55.empty();
        v$55.append(vLS3);
      };
      return v537;
    }();
    vO3.wk = function () {
      var v$59 = $("#popup-login-gg");
      var v$60 = $("#popup-login-fb");
      var v544 = vO5.X(vO3.po, function () {
        var vThis29 = this;
        vO3.po.call(this, vO5.O("index.game.popup.menu.login.tab"), false);
        v$59.click(function () {
          vO4.L.Si.Se();
          var v545 = vThis29.Fo(10000);
          vO5.S(function () {
            vO4.L.Yj.am(function () {
              if (vO4.L.Yj.Xj()) {
                vO4.L.Si.We();
              }
              v545.Jo();
            });
          }, 500);
        });
        v$60.click(function () {
          vO4.L.Si.Se();
          var v546 = vThis29.Fo(10000);
          vO5.S(function () {
            vO4.L.Yj.Zl(function () {
              if (vO4.L.Yj.Xj()) {
                vO4.L.Si.We();
              }
              v546.Jo();
            });
          }, 500);
        });
      });
      v544.prototype.za = function () {
        v544.parent.prototype.za.call(this);
      };
      v544.prototype.Eo = function () {
        vO6.b.d(vO3.po.uo, 50);
        vO6.b.d(vO3.po.vo, 50);
        vO6.b.d(vO3.po.wo, 50);
        vO6.b.c(vO3.po.xo, 200);
        vO6.b.d(vO3.po.yo, 50);
        vO6.b.d(vO3.po.zo, 50);
        vO6.b.d(vO3.po.Ao, 50);
        vO6.b.d(vO3.po.Bo, 50);
        vO6.b.d(vO3.po.Co, 50);
        vO6.b.d(vO3.po.Do, 50);
      };
      v544.prototype.Xk = function () {
        vO4.L.Si.Te();
      };
      return v544;
    }();
    vO3.uk = function () {
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
      var v547 = vO5.X(vO3.po, function () {
        vO3.po.call(this, vO5.O("index.game.popup.menu.profile.tab"), true);
      });
      v547.prototype.za = function () {
        v547.parent.prototype.za.call(this);
      };
      v547.prototype.Eo = function () {
        vO6.b.d(vO3.po.uo, 50);
        vO6.b.d(vO3.po.vo, 50);
        vO6.b.c(vO3.po.wo, 200);
        vO6.b.d(vO3.po.xo, 50);
        vO6.b.d(vO3.po.yo, 50);
        vO6.b.d(vO3.po.zo, 50);
        vO6.b.d(vO3.po.Ao, 50);
        vO6.b.d(vO3.po.Bo, 50);
        vO6.b.d(vO3.po.Co, 50);
        vO6.b.d(vO3.po.Do, 50);
      };
      v547.prototype.Xk = function () {
        vO4.L.Si.Te();
        var v548 = vO4.L.Yj.Nl();
        var v549 = moment([v548.year, v548.month - 1, v548.day]).format("LL");
        v$62.html(vO4.L.Yj.tl());
        v$61.attr("src", vO4.L.Yj.vl());
        v$63.width(vO4.L.Yj.Al() * 100 / vO4.L.Yj.Bl() + "%");
        v$64.html(vO4.L.Yj.Al() + " / " + vO4.L.Yj.Bl());
        v$65.html(vO4.L.Yj.zl());
        v$66.html(vO4.L.Yj.Hl());
        v$67.html(vO5.U(vO4.L.Yj.Il()));
        v$68.html(vO4.L.Yj.Jl());
        v$69.html(vO4.L.Yj.Kl());
        v$70.html(vO4.L.Yj.Ll());
        v$71.html(vO5.U(vO4.L.Yj.Ml()));
        v$72.html(v549);
      };
      return v547;
    }();
    vO3.xk = function () {
      var v$73 = $("#settings-music-enabled-switch");
      var v$74 = $("#settings-sfx-enabled-switch");
      var v$75 = $("#settings-show-names-switch");
      var v$76 = $("#popup-logout");
      var v$77 = $("#popup-logout-container");
      var v$78 = $("#popup-delete-account");
      var v$79 = $("#popup-delete-account-container");
      var v$80 = $("#popup-withdraw-consent");
      var v550 = vO5.X(vO3.po, function () {
        vO3.po.call(this, vO5.O("index.game.popup.menu.settings.tab"), false);
        var vThis30 = this;
        v$73.click(function () {
          var v551 = !!v$73.prop("checked");
          vO3.kg.vg(vO3.kg.ng, v551, 30);
          vO4.L.Si.Ie(v551);
          vO4.L.Si.Se();
        });
        v$74.click(function () {
          var v552 = !!v$74.prop("checked");
          vO3.kg.vg(vO3.kg.og, v552, 30);
          vO4.L.Si.Fe(v552);
          vO4.L.Si.Se();
        });
        v$75.click(function () {
          vO4.L.Si.Se();
        });
        v$76.click(function () {
          vO4.L.Si.Se();
          vThis30.Fo(500);
          vO4.L.Yj.$l();
        });
        v$78.click(function () {
          if (vO4.L.Yj.Xj()) {
            vO4.L.Si.Se();
            vO4.L.Fg.Qk(vO4.L.Fg.nk);
          } else {
            vO4.L.Si.Xe();
          }
        });
        v$80.click(function () {
          if (vO4.L.Uo()) {
            vO4.L.Si.Se();
            vO4.L.Fg.Qk(vO4.L.Fg.lk);
          } else {
            vO4.L.Si.Xe();
          }
        });
      });
      v550.prototype.za = function () {
        v550.parent.prototype.za.call(this);
        var v553;
        switch (vO3.kg.wg(vO3.kg.ng)) {
          case "false":
            v553 = false;
            break;
          default:
            v553 = true;
        }
        ;
        v$73.prop("checked", v553);
        vO4.L.Si.Ie(v553);
        var v554;
        switch (vO3.kg.wg(vO3.kg.og)) {
          case "false":
            v554 = false;
            break;
          default:
            v554 = true;
        }
        ;
        v$74.prop("checked", v554);
        vO4.L.Si.Fe(v554);
        var v555;
        switch (vO3.kg.wg(vO3.kg.mg)) {
          case "false":
            v555 = false;
            break;
          default:
            v555 = true;
        }
        ;
        v$75.prop("checked", v555);
        vO4.L.Yj.Ol(function () {
          v$77.toggle(vO4.L.Yj.Xj());
          v$79.toggle(vO4.L.Yj.Xj());
        });
      };
      v550.prototype.Eo = function () {
        vO6.b.d(vO3.po.uo, 50);
        vO6.b.d(vO3.po.vo, 50);
        vO6.b.d(vO3.po.wo, 50);
        vO6.b.d(vO3.po.xo, 50);
        vO6.b.c(vO3.po.yo, 200);
        vO6.b.d(vO3.po.zo, 50);
        vO6.b.d(vO3.po.Ao, 50);
        vO6.b.d(vO3.po.Bo, 50);
        vO6.b.d(vO3.po.Co, 50);
        vO6.b.d(vO3.po.Do, 50);
      };
      v550.prototype.Xk = function () {
        vO4.L.Si.Te();
        if (vO4.L.Uo()) {
          v$80.show();
        } else {
          v$80.hide();
        }
      };
      v550.prototype.ni = function () {
        return v$75.prop("checked");
      };
      return v550;
    }();
    vO3.zk = function () {
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
      var v556 = vO5.X(vO3.po, function () {
        vO3.po.call(this, vO5.O("index.game.popup.menu.skins.tab"), true);
        var vThis31 = this;
        this.Vo = null;
        this.Wo = [];
        this.Xo = {};
        this.Yo = new vO3.tm(v$81);
        v$86.click(function () {
          vO4.L.Si.Se();
          vThis31.Zo();
        });
        v$89.click(function () {
          vO4.L.Si.Se();
          vThis31.Vo.$o();
        });
        v$90.click(function () {
          vO4.L.Si.Se();
          vThis31.Vo._o();
        });
      });
      v556.prototype.za = function () {
        v556.parent.prototype.za.call(this);
        var vThis32 = this;
        vO4.L.bd.qc(function () {
          var v557 = vO4.L.bd.nc();
          vThis32.Wo = [];
          for (var vLN0101 = 0; vLN0101 < v557.skinGroupArrayDict.length; vLN0101++) {
            vThis32.Wo.push(new vF16(vThis32, v557.skinGroupArrayDict[vLN0101]));
          }
          ;
          vThis32.Xo = {};
          for (var vLN0102 = 0; vLN0102 < v557.skinArrayDict.length; vLN0102++) {
            var v558 = v557.skinArrayDict[vLN0102];
            vThis32.Xo[v558.id] = v558;
          }
          ;
          vThis32.ap();
        });
        this.bp(false);
        vO4.L.ao.Pj(function () {
          vThis32.bp(false);
        });
      };
      v556.prototype.Eo = function () {
        vO6.b.d(vO3.po.uo, 50);
        vO6.b.d(vO3.po.vo, 50);
        vO6.b.d(vO3.po.wo, 50);
        vO6.b.d(vO3.po.xo, 50);
        vO6.b.d(vO3.po.yo, 50);
        vO6.b.c(vO3.po.zo, 200);
        vO6.b.d(vO3.po.Ao, 50);
        vO6.b.d(vO3.po.Bo, 50);
        vO6.b.d(vO3.po.Co, 50);
        vO6.b.d(vO3.po.Do, 50);
      };
      v556.prototype.Xk = function () {
        vO4.L.Si.Ge(vO3.xe.Ae.rf);
        vO4.L.Si.Te();
        this.ap();
        this.Yo._f(true);
      };
      v556.prototype.Rk = function () {
        this.Yo._f(false);
      };
      v556.prototype.$f = function () {
        this.Yo.$f();
      };
      v556.prototype.cg = function (p663, p664) {
        this.Yo.cg();
      };
      v556.prototype.ap = function () {
        var vThis33 = this;
        var vThis34 = this;
        v$88.empty();
        for (var vLN0103 = 0; vLN0103 < this.Wo.length; vLN0103++) {
          (function (p665) {
            var v559 = vThis33.Wo[p665];
            var v560 = document.createElement("li");
            v$88.append(v560);
            var v$91 = $(v560);
            v$91.html(v559.cp());
            v$91.click(function () {
              vO4.L.Si.Se();
              vThis34.dp(v559);
            });
            v559.ep = v$91;
          })(vLN0103);
        }
        ;
        if (this.Wo.length > 0) {
          var v561 = vO4.L.ao.Hj(vO3.Jj.Ij);
          for (var vLN0104 = 0; vLN0104 < this.Wo.length; vLN0104++) {
            var v562 = this.Wo[vLN0104];
            for (var v563 = v562.fp.list, vLN0105 = 0; vLN0105 < v563.length; vLN0105++) {
              if (v563[vLN0105] === v561) {
                v562.gp = vLN0105;
                this.dp(v562);
                return;
              }
            }
          }
          ;
          this.dp(this.Wo[0]);
        }
      };
      v556.prototype.dp = function (p666) {
        if (this.Vo !== p666) {
          this.Vo = p666;
          v$88.children().removeClass("pressed");
          if (this.Vo.ep) {
            this.Vo.ep.addClass("pressed");
          }
          v$83.html("");
          if (p666.fp != null) {
            var v564 = vO4.L.bd.nc().textDict[p666.fp.description];
            if (v564 != null) {
              v$83.html(vO5.V(vO5.P(v564)));
            }
          }
          ;
          this.bp(true);
        }
      };
      v556.prototype.hp = function () {
        if (this.Vo == null) {
          return vO3.gj.ij();
        } else {
          return this.Vo.ip();
        }
      };
      v556.prototype.Zo = function () {
        var vThis35 = this;
        var v565 = this.hp();
        if (v565.kj()) {
          var v566 = v565.tc();
          vThis35.jp(v566);
        }
      };
      v556.prototype.jp = function (p667) {
        var v567 = vO4.L.ao.Wj(p667, vO3.Jj.Ij);
        if (v567 != null) {
          var v568 = v567.Zj();
          if (!(vO4.L.Yj.yl() < v568)) {
            var v569 = vO4.L.ao.Hj(vO3.Jj.Ij);
            var v570 = vO4.L.ao.Hj(vO3.Jj.Kj);
            var v571 = vO4.L.ao.Hj(vO3.Jj.Lj);
            var v572 = vO4.L.ao.Hj(vO3.Jj.Nj);
            var v573 = vO4.L.ao.Hj(vO3.Jj.Mj);
            var v574 = this.Fo(5000);
            vO4.L.Yj.Xl(p667, vO3.Jj.Ij, function () {
              v574.Jo();
              vO4.L.Fg.Qk(vO4.L.Fg.Jk);
            }, function () {
              vO4.L.Yj.Rl(function () {
                vO4.L.ao.Vj(v569, vO3.Jj.Ij);
                vO4.L.ao.Vj(v570, vO3.Jj.Kj);
                vO4.L.ao.Vj(v571, vO3.Jj.Lj);
                vO4.L.ao.Vj(v572, vO3.Jj.Nj);
                vO4.L.ao.Vj(v573, vO3.Jj.Mj);
                vO4.L.ao.Vj(p667, vO3.Jj.Ij);
                v574.Jo();
              });
            });
          }
        }
      };
      v556.prototype.bp = function (p668) {
        var v575 = vO4.L.ao.Oj();
        var v576 = this.hp();
        if (v576.kj()) {
          var v577 = v576.tc();
          var v578 = vO4.L.ao.Wj(v577, vO3.Jj.Ij);
          var v579 = false;
          if (vO4.L.ao.Sj(v577, vO3.Jj.Ij)) {
            v$84.hide();
            v$86.hide();
          } else if (v578 == null || v578.$j()) {
            v579 = true;
            v$84.show();
            v$86.hide();
            v$85.text(vO5.O("index.game.popup.menu.store.locked"));
            if (v578 != null && v578.$j()) {
              var v580 = vO4.L.bd.nc().textDict[v578.Um()];
              if (v580 != null) {
                v$85.text(vO5.P(v580));
              }
            }
          } else {
            v$84.hide();
            v$86.show();
            v$87.html(v578.Zj());
          }
          ;
          v$82.html("");
          if (v578 != null && v578.Vm() != null) {
            var v581 = vO4.L.bd.nc().textDict[v578.Vm()];
            if (v581 != null) {
              v$82.html(vO5.V(vO5.P(v581)));
            }
          }
          ;
          this.Yo.om(v575.jn(v577));
          this.Yo.Km(v579);
          if (p668) {
            vO4.L.ao.Vj(v577, vO3.Jj.Ij);
          }
        }
      };
      var vF16 = function () {
        function _0x9f75x6(p669, p670) {
          this.kp = p669;
          this.gp = 0;
          this.fp = p670;
        }
        _0x9f75x6.prototype.$o = function () {
          if (--this.gp < 0) {
            this.gp = this.fp.list.length - 1;
          }
          this.kp.bp(true);
        };
        _0x9f75x6.prototype._o = function () {
          if (++this.gp >= this.fp.list.length) {
            this.gp = 0;
          }
          this.kp.bp(true);
        };
        _0x9f75x6.prototype.cp = function () {
          return vO5.P(this.fp.name);
        };
        _0x9f75x6.prototype.ip = function () {
          if (this.gp >= this.fp.list.length) {
            return vO3.gj.ij();
          } else {
            return vO3.gj.jj(this.fp.list[this.gp]);
          }
        };
        return _0x9f75x6;
      }();
      return v556;
    }();
    vO3.Bk = function () {
      var v$92 = $("#store-go-coins-button");
      var v$93 = $("#store-go-skins-button");
      var v$94 = $("#store-go-wear-button");
      var v582 = vO5.X(vO3.po, function () {
        vO3.po.call(this, vO5.O("index.game.popup.menu.store.tab"), true);
        v$92.click(function () {
          vO4.L.Si.Se();
          vO4.L.Fg.Qk(vO4.L.Fg.pk);
        });
        v$93.click(function () {
          vO4.L.Si.Se();
          vO4.L.Fg.Qk(vO4.L.Fg.yk);
        });
        v$94.click(function () {
          vO4.L.Si.Se();
          vO4.L.Fg.Qk(vO4.L.Fg.Ck);
        });
      });
      v582.prototype.za = function () {
        v582.parent.prototype.za.call(this);
      };
      v582.prototype.Eo = function () {
        vO6.b.d(vO3.po.uo, 50);
        vO6.b.d(vO3.po.vo, 50);
        vO6.b.d(vO3.po.wo, 50);
        vO6.b.d(vO3.po.xo, 50);
        vO6.b.d(vO3.po.yo, 50);
        vO6.b.d(vO3.po.zo, 50);
        vO6.b.c(vO3.po.Ao, 200);
        vO6.b.d(vO3.po.Bo, 50);
        vO6.b.d(vO3.po.Co, 50);
        vO6.b.d(vO3.po.Do, 50);
      };
      v582.prototype.Xk = function () {
        vO4.L.Si.Te();
      };
      return v582;
    }();
    vO3.Dk = function () {
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
      var v583 = vO5.X(vO3.po, function () {
        var vThis36 = this;
        vO3.po.call(this, vO5.O("index.game.popup.menu.wear.tab"), true);
        var vThis37 = this;
        this.lp = [];
        this.Kj = new vF17(this, vO3.Jj.Kj, v$101);
        this.Lj = new vF17(this, vO3.Jj.Lj, v$102);
        this.Nj = new vF17(this, vO3.Jj.Nj, v$103);
        this.Mj = new vF17(this, vO3.Jj.Mj, v$104);
        this.mp = null;
        this.np = null;
        this.op = null;
        this.pp = null;
        this.qp = null;
        this.rp = null;
        this.Yo = new vO3.tm(v$95);
        v$99.click(function () {
          vO4.L.Si.Se();
          vThis37.sp();
        });
        v$106.click(function () {
          vO4.L.Si.Se();
          vThis37.mp.tp();
        });
        v$107.click(function () {
          vO4.L.Si.Se();
          vThis37.mp.up();
        });
        v$101.click(function () {
          vO4.L.Si.Se();
          vThis37.vp(vThis36.Kj);
        });
        v$102.click(function () {
          vO4.L.Si.Se();
          vThis37.vp(vThis36.Lj);
        });
        v$103.click(function () {
          vO4.L.Si.Se();
          vThis37.vp(vThis36.Nj);
        });
        v$104.click(function () {
          vO4.L.Si.Se();
          vThis37.vp(vThis36.Mj);
        });
        this.lp.push(this.Kj);
        this.lp.push(this.Lj);
        this.lp.push(this.Nj);
        this.lp.push(this.Mj);
      });
      v583.prototype.za = function () {
        v583.parent.prototype.za.call(this);
        var vThis38 = this;
        vO4.L.bd.qc(function () {
          var v584 = vO4.L.bd.nc();
          vThis38.np = v584.eyesDict;
          vThis38.op = v584.mouthDict;
          vThis38.pp = v584.glassesDict;
          vThis38.qp = v584.hatDict;
          vThis38.rp = v584.colorDict;
          vThis38.Kj.wp(v584.eyesVariantArray);
          vThis38.Kj.xp(vThis38.np);
          vThis38.Lj.wp(v584.mouthVariantArray);
          vThis38.Lj.xp(vThis38.op);
          vThis38.Nj.wp(v584.glassesVariantArray);
          vThis38.Nj.xp(vThis38.pp);
          vThis38.Mj.wp(v584.hatVariantArray);
          vThis38.Mj.xp(vThis38.qp);
        });
        this.bp(false);
        vO4.L.ao.Pj(function () {
          vThis38.bp(false);
        });
      };
      v583.prototype.Eo = function () {
        vO6.b.d(vO3.po.uo, 50);
        vO6.b.d(vO3.po.vo, 50);
        vO6.b.d(vO3.po.wo, 50);
        vO6.b.d(vO3.po.xo, 50);
        vO6.b.d(vO3.po.yo, 50);
        vO6.b.d(vO3.po.zo, 50);
        vO6.b.d(vO3.po.Ao, 50);
        vO6.b.c(vO3.po.Bo, 200);
        vO6.b.d(vO3.po.Co, 50);
        vO6.b.d(vO3.po.Do, 50);
      };
      v583.prototype.Xk = function () {
        vO4.L.Si.Ge(vO3.xe.Ae.rf);
        vO4.L.Si.Te();
        this.vp(this.mp ?? this.Kj);
        this.Yo._f(true);
      };
      v583.prototype.Rk = function () {
        this.Yo._f(false);
      };
      v583.prototype.$f = function () {
        this.Yo.$f();
      };
      v583.prototype.cg = function (p671, p672) {
        this.Yo.cg();
      };
      v583.prototype.vp = function (p673) {
        this.mp = p673;
        for (var vLN0106 = 0; vLN0106 < this.lp.length; vLN0106++) {
          this.lp[vLN0106].Oo.removeClass("pressed");
        }
        ;
        this.mp.Oo.addClass("pressed");
        this.mp.Wk();
      };
      v583.prototype.yp = function () {
        if (this.mp == null) {
          return vO3.gj.ij();
        } else {
          return vO3.gj.jj({
            re: this.mp.ip(),
            Ed: this.mp.Ed
          });
        }
      };
      v583.prototype.sp = function () {
        var vThis39 = this;
        var v585 = this.yp();
        if (v585.kj()) {
          var v586 = v585.tc();
          vThis39.zp(v586.re, v586.Ed);
        }
      };
      v583.prototype.zp = function (p674, p675) {
        var v587 = vO4.L.ao.Wj(p674, p675);
        if (v587 != null) {
          var v588 = v587.Zj();
          if (!(vO4.L.Yj.yl() < v588)) {
            var v589 = vO4.L.ao.Hj(vO3.Jj.Ij);
            var v590 = vO4.L.ao.Hj(vO3.Jj.Kj);
            var v591 = vO4.L.ao.Hj(vO3.Jj.Lj);
            var v592 = vO4.L.ao.Hj(vO3.Jj.Nj);
            var v593 = vO4.L.ao.Hj(vO3.Jj.Mj);
            var v594 = this.Fo(5000);
            vO4.L.Yj.Xl(p674, p675, function () {
              v594.Jo();
              vO4.L.Fg.Qk(vO4.L.Fg.Jk);
            }, function () {
              vO4.L.Yj.Rl(function () {
                vO4.L.ao.Vj(v589, vO3.Jj.Ij);
                vO4.L.ao.Vj(v590, vO3.Jj.Kj);
                vO4.L.ao.Vj(v591, vO3.Jj.Lj);
                vO4.L.ao.Vj(v592, vO3.Jj.Nj);
                vO4.L.ao.Vj(v593, vO3.Jj.Mj);
                vO4.L.ao.Vj(p674, p675);
                v594.Jo();
              });
            });
          }
        }
      };
      v583.prototype.bp = function (p676) {
        var v595 = vO4.L.ao.Oj();
        var v596 = this.yp();
        if (v596.kj()) {
          var v597 = v596.tc();
          var v598 = vO4.L.ao.Wj(v597.re, v597.Ed);
          var v599 = false;
          if (vO4.L.ao.Sj(v597.re, v597.Ed)) {
            v$97.hide();
            v$99.hide();
          } else if (v598 == null || v598.$j()) {
            v599 = true;
            v$97.show();
            v$99.hide();
            v$98.text(vO5.O("index.game.popup.menu.store.locked"));
            if (v598 != null && v598.$j()) {
              var v600 = vO4.L.bd.nc().textDict[v598.Um()];
              if (v600 != null) {
                v$98.text(vO5.P(v600));
              }
            }
          } else {
            v$97.hide();
            v$99.show();
            v$100.html(v598.Zj());
          }
          ;
          v$96.html("");
          if (v598 != null && v598.Vm() != null) {
            var v601 = vO4.L.bd.nc().textDict[v598.Vm()];
            if (v601 != null) {
              v$96.html(vO5.V(vO5.P(v601)));
            }
          }
          ;
          var v602 = this.Yo;
          switch (v597.Ed) {
            case vO3.Jj.Kj:
              v602.om(v595.kn(v597.re));
              v602.Lm(v599);
              break;
            case vO3.Jj.Lj:
              v602.om(v595.ln(v597.re));
              v602.Mm(v599);
              break;
            case vO3.Jj.Nj:
              v602.om(v595.nn(v597.re));
              v602.Om(v599);
              break;
            case vO3.Jj.Mj:
              v602.om(v595.mn(v597.re));
              v602.Nm(v599);
          }
          ;
          if (p676) {
            vO4.L.ao.Vj(v597.re, v597.Ed);
          }
        }
      };
      var vF17 = function () {
        function _0x9f75x19(p677, p678, p679) {
          this.kp = p677;
          this.Ed = p678;
          this.Oo = p679;
          this.sc = {};
          this.Ap = [[]];
          this.Bp = -10;
          this.Cp = -10;
        }
        _0x9f75x19.prototype.wp = function (p680) {
          this.Ap = p680;
        };
        _0x9f75x19.prototype.xp = function (p681) {
          this.sc = p681;
        };
        _0x9f75x19.prototype.Wk = function () {
          var v603 = vO4.L.ao.Hj(this.Ed);
          for (var vLN0107 = 0; vLN0107 < this.Ap.length; vLN0107++) {
            for (var vLN0108 = 0; vLN0108 < this.Ap[vLN0107].length; vLN0108++) {
              if (this.Ap[vLN0107][vLN0108] === v603) {
                this.Dp(vLN0107);
                this.Ep(vLN0108);
                return;
              }
            }
          }
          ;
          this.Dp(0);
          this.Ep(0);
        };
        _0x9f75x19.prototype.tp = function () {
          var v604 = this.Bp - 1;
          if (v604 < 0) {
            v604 = this.Ap.length - 1;
          }
          this.Dp(v604);
          this.Ep(this.Cp % this.Ap[v604].length);
        };
        _0x9f75x19.prototype.up = function () {
          var v605 = this.Bp + 1;
          if (v605 >= this.Ap.length) {
            v605 = 0;
          }
          this.Dp(v605);
          this.Ep(this.Cp % this.Ap[v605].length);
        };
        _0x9f75x19.prototype.Dp = function (p682) {
          var vThis40 = this;
          if (!(p682 < 0) && !(p682 >= this.Ap.length)) {
            this.Bp = p682;
            v$105.empty();
            var v606 = this.Ap[this.Bp];
            if (v606.length > 1) {
              for (var vLN0109 = 0; vLN0109 < v606.length; vLN0109++) {
                (function (p683) {
                  var v607 = v606[p683];
                  var v608 = vThis40.sc[v607];
                  var v609 = "#" + vThis40.kp.rp[v608.prime];
                  var v$108 = $("<div style=\"border-color:" + v609 + "\"></div>");
                  v$108.click(function () {
                    vO4.L.Si.Se();
                    vThis40.Ep(p683);
                  });
                  v$105.append(v$108);
                })(vLN0109);
              }
            }
          }
        };
        _0x9f75x19.prototype.Ep = function (p684) {
          if (!(p684 < 0) && !(p684 >= this.Ap[this.Bp].length)) {
            this.Cp = p684;
            v$105.children().css("background-color", "transparent");
            var v610 = v$105.children(":nth-child(" + (1 + p684) + ")");
            v610.css("background-color", v610.css("border-color"));
            this.kp.bp(true);
          }
        };
        _0x9f75x19.prototype.ip = function () {
          return this.Ap[this.Bp][this.Cp];
        };
        return _0x9f75x19;
      }();
      return v583;
    }();
    vO3.mk = function () {
      var v$109 = $("#withdraw-consent-yes");
      var v$110 = $("#withdraw-consent-no");
      var v611 = vO5.X(vO3.po, function () {
        vO3.po.call(this, vO5.O("index.game.popup.menu.consent.tab"), false);
        v$109.click(function () {
          vO4.L.Si.Se();
          if (vO4.L.Uo()) {
            vO4.L.Fg.Qk(vO4.L.Fg.rf);
            vO4.L.Fp(false, true);
            vO4.L.Fg.Gk.no(new vO3.Gp());
          } else {
            vO4.L.Fg.Tk();
          }
        });
        v$110.click(function () {
          vO4.L.Si.Se();
          vO4.L.Fg.Tk();
        });
      });
      v611.prototype.za = function () {
        v611.parent.prototype.za.call(this);
      };
      v611.prototype.Eo = function () {
        vO6.b.d(vO3.po.uo, 50);
        vO6.b.d(vO3.po.vo, 50);
        vO6.b.d(vO3.po.wo, 50);
        vO6.b.d(vO3.po.xo, 50);
        vO6.b.d(vO3.po.yo, 50);
        vO6.b.d(vO3.po.zo, 50);
        vO6.b.d(vO3.po.Ao, 50);
        vO6.b.d(vO3.po.Bo, 50);
        vO6.b.c(vO3.po.Co, 200);
        vO6.b.d(vO3.po.Do, 50);
      };
      v611.prototype.Xk = function () {
        vO4.L.Si.Te();
      };
      return v611;
    }();
    vO3.ok = function () {
      var v$111 = $("#delete-account-timer");
      var v$112 = $("#delete-account-yes");
      var v$113 = $("#delete-account-no");
      var v612 = vO5.X(vO3.po, function () {
        vO3.po.call(this, vO5.O("index.game.popup.menu.delete.tab"), false);
        v$112.click(function () {
          vO4.L.Si.Se();
          if (vO4.L.Yj.Xj()) {
            vO4.L.Yj.gm();
            vO4.L.Yj.$l();
          } else {
            vO4.L.Fg.Tk();
          }
        });
        v$113.click(function () {
          vO4.L.Si.Se();
          vO4.L.Fg.Tk();
        });
        this.Hp = [];
      });
      v612.prototype.za = function () {
        v612.parent.prototype.za.call(this);
      };
      v612.prototype.Eo = function () {
        vO6.b.d(vO3.po.uo, 50);
        vO6.b.d(vO3.po.vo, 50);
        vO6.b.d(vO3.po.wo, 50);
        vO6.b.d(vO3.po.xo, 50);
        vO6.b.d(vO3.po.yo, 50);
        vO6.b.d(vO3.po.zo, 50);
        vO6.b.d(vO3.po.Ao, 50);
        vO6.b.d(vO3.po.Bo, 50);
        vO6.b.d(vO3.po.Co, 50);
        vO6.b.c(vO3.po.Do, 200);
      };
      v612.prototype.Xk = function () {
        vO4.L.Si.Xe();
        vO6.b.d(v$112, 1);
        vO6.b.c(v$111, 1);
        v$111.text(".. 10 ..");
        this.Ip();
        this.Jp(function () {
          v$111.text(".. 9 ..");
        }, 1000);
        this.Jp(function () {
          v$111.text(".. 8 ..");
        }, 2000);
        this.Jp(function () {
          v$111.text(".. 7 ..");
        }, 3000);
        this.Jp(function () {
          v$111.text(".. 6 ..");
        }, 4000);
        this.Jp(function () {
          v$111.text(".. 5 ..");
        }, 5000);
        this.Jp(function () {
          v$111.text(".. 4 ..");
        }, 6000);
        this.Jp(function () {
          v$111.text(".. 3 ..");
        }, 7000);
        this.Jp(function () {
          v$111.text(".. 2 ..");
        }, 8000);
        this.Jp(function () {
          v$111.text(".. 1 ..");
        }, 9000);
        this.Jp(function () {
          vO6.b.c(v$112, 300);
          vO6.b.d(v$111, 1);
        }, 10000);
      };
      v612.prototype.Jp = function (p685, p686) {
        var v613 = vO5.S(p685, p686);
        this.Hp.push(v613);
      };
      v612.prototype.Ip = function () {
        for (var vLN0110 = 0; vLN0110 < this.Hp.length; vLN0110++) {
          vO5.T(this.Hp[vLN0110]);
        }
        ;
        this.Hp = [];
      };
      return v612;
    }();
    vO3.Kp = function () {
      function f91() {
        this.oo = function () {};
      }
      f91.prototype.Kf = function () {};
      f91.prototype.Xk = function () {};
      return f91;
    }();
    vO3.Wl = function () {
      var v614 = vO5.X(vO3.Kp, function (p687) {
        vO3.Kp.call(this);
        var v615 = vO5.ja() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Lp = $(`<div id="${v615}" class="toaster toaster-coins"><img class="toaster-coins-img" alt="Wormate Coin" src="/images/coin_320.png" /><div class="toaster-coins-val">${p687}</div><div class="toaster-coins-close">${vO5.O("index.game.toaster.continue")}</div></div>`);
        var vThis41 = this;
        this.Lp.find(".toaster-coins-close").click(function () {
          vO4.L.Si.Se();
          vThis41.oo();
        });
      });
      v614.prototype.Kf = function () {
        return this.Lp;
      };
      v614.prototype.Xk = function () {
        vO4.L.Si.Ve();
      };
      return v614;
    }();
    vO3.Vl = function () {
      var v616 = vO5.X(vO3.Kp, function (p688) {
        vO3.Kp.call(this);
        var v617 = vO5.ja() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Lp = $(`<div id="${v617}" class="toaster toaster-levelup"><img class="toaster-levelup-img" alt="Wormate Level Up Star" src="/images/level-star.svg" /><div class="toaster-levelup-val">${p688}</div><div class="toaster-levelup-text">${vO5.O("index.game.toaster.levelup")}</div><div class="toaster-levelup-close">${vO5.O("index.game.toaster.continue")}</div></div>`);
        var vThis42 = this;
        this.Lp.find(".toaster-levelup-close").click(function () {
          vO4.L.Si.Se();
          vThis42.oo();
        });
      });
      v616.prototype.Kf = function () {
        return this.Lp;
      };
      v616.prototype.Xk = function () {
        vO4.L.Si.Ue();
      };
      return v616;
    }();
    vO3.Gp = function () {
      var v618 = vO5.X(vO3.Kp, function () {
        vO3.Kp.call(this);
        var vThis43 = this;
        var v619 = vO5.ja() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Lp = $("<div id=\"" + v619 + "\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\"" + vO4.A.F + "\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">" + vO5.O("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("", "<br/>") + "</span>        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + vO5.O("index.game.toaster.consent.link") + "</a>    </div>    <div class=\"toaster-consent-close\">" + vO5.O("index.game.toaster.consent.iAccept") + "</div></div>");
        this.Mp = this.Lp.find(".toaster-consent-close");
        this.Mp.hide();
        this.Mp.click(function () {
          vO4.L.Si.Se();
          if (vO4.L.Uo()) {
            vO4.L.Fp(true, true);
          }
          vThis43.oo();
        });
      });
      v618.prototype.Kf = function () {
        return this.Lp;
      };
      v618.prototype.Xk = function () {
        var vThis44 = this;
        if (vO4.L.Uo() && !vO4.L.xl()) {
          vO4.L.Si.Xe();
          vO5.S(function () {
            vThis44.Mp.fadeIn(300);
          }, 2000);
        } else {
          vO5.S(function () {
            vThis44.oo();
          }, 0);
        }
      };
      return v618;
    }();
    vO3.Kk = function () {
      var v$114 = $("#error-gateway-connection-retry");
      var v620 = vO5.X(vO3.Cf, function () {
        vO3.Cf.call(this, vO3.Vk.Kn);
        v$114.click(function () {
          vO4.L.Si.Se();
          vO4.L.Fg.ze.$n();
          vO4.L.Fg.Qk(vO4.L.Fg.ze);
          vO5.S(function () {
            var v621 = vO4.A.C + "/pub/healthCheck/ping";
            vO5.ha(v621, function () {
              vO4.L.Fg.Qk(vO4.L.Fg.Jk);
            }, function (p689) {
              vO4.L.Fg.ze.Yn();
              vO4.L.bd.$b(function () {
                vO4.L.Fg.Qk(vO4.L.Fg.rf);
              }, function (p690) {
                vO4.L.Fg.Qk(vO4.L.Fg.Jk);
              }, function (p691, p692) {
                var vP691 = p691;
                vO4.L.Fg.ze.Zn(vP691, p692);
              });
            });
          }, 2000);
        });
      });
      v620.prototype.za = function () {};
      v620.prototype.Wk = function () {
        vO3.vf._f(true);
        vO6.b.c(vO3.Cf.Bf, 500);
        vO6.b.c(vO3.Cf.yn, 1);
        vO6.b.d(vO3.Cf.zn, 50);
        vO6.b.d(vO3.Cf.An, 50);
        vO6.b.d(vO3.Cf.Bn, 50);
        vO6.b.d(vO3.Cf.Cn, 50);
        vO6.b.d(vO3.Cf.Dn, 50);
        vO6.b.d(vO3.Cf.En, 50);
        vO6.b.d(vO3.Cf.Fn, 50);
        vO6.b.d(vO3.Cf.Gn, 50);
        vO6.b.d(vO3.Cf.Hn, 50);
        vO6.b.c(vO3.Cf.In, 500);
        vO6.b.d(vO3.Cf.Jn, 50);
      };
      v620.prototype.Xk = function () {
        vO4.L.Si.Ge(vO3.xe.Ae.rf);
        vO4.L.Si.Xe();
      };
      return v620;
    }();
    vO3.Mk = function () {
      var v$115 = $("#error-game-connection-retry");
      var v622 = vO5.X(vO3.Cf, function () {
        vO3.Cf.call(this, vO3.Vk.Kn);
        v$115.click(function () {
          vO4.L.Si.Se();
          vO4.L.Fg.Qk(vO4.L.Fg.rf);
        });
      });
      v622.prototype.za = function () {};
      v622.prototype.Wk = function () {
        vO3.vf._f(true);
        vO6.b.c(vO3.Cf.Bf, 500);
        vO6.b.c(vO3.Cf.yn, 1);
        vO6.b.d(vO3.Cf.zn, 50);
        vO6.b.d(vO3.Cf.An, 50);
        vO6.b.d(vO3.Cf.Bn, 50);
        vO6.b.d(vO3.Cf.Cn, 50);
        vO6.b.d(vO3.Cf.Dn, 50);
        vO6.b.d(vO3.Cf.En, 50);
        vO6.b.d(vO3.Cf.Fn, 50);
        vO6.b.d(vO3.Cf.Gn, 50);
        vO6.b.d(vO3.Cf.Hn, 50);
        vO6.b.d(vO3.Cf.In, 50);
        vO6.b.c(vO3.Cf.Jn, 500);
      };
      v622.prototype.Xk = function () {
        vO4.L.Si.Ge(vO3.xe.Ae.rf);
        vO4.L.Si.Xe();
      };
      return v622;
    }();
    vO5.Np = function () {
      function f92(p693) {
        var v623 = p693 + Math.floor(Math.random() * 65535) * 37;
        vO3.kg.vg(vO3.kg.tg, v623, 30);
      }
      function f93() {
        return parseInt(vO3.kg.wg(vO3.kg.tg)) % 37;
      }
      return function () {
        var vF93 = f93();
        if (!(vF93 >= 0) || !(vF93 < vO4.Mn.Op)) {
          vF93 = Math.max(0, vO4.Mn.Op - 2);
        }
        var vO28 = {
          Pp: false
        };
        vO28.Qp = vO5.ja();
        vO28.Rp = 0;
        vO28.Sp = 0;
        vO28.Tp = null;
        vO28.Up = vO4.A.K;
        vO28.Vp = vO4.A.J;
        vO28.uh = null;
        vO28.bd = null;
        vO28.Oe = null;
        vO28.Si = null;
        vO28.Fg = null;
        vO28.ao = null;
        vO28.Yj = null;
        try {
          var vNavigator = navigator;
          if (vNavigator) {
            var v624 = vNavigator.geolocation;
            if (v624) {
              v624.getCurrentPosition(function (p694) {
                var v625 = p694.coords;
                if (f4(v625) != "undefined" && f4(v625.latitude) != "undefined" && f4(v625.longitude) != "undefined") {
                  vO28.Tp = p694;
                }
              }, function (p695) {});
            }
          }
        } catch (e20) {}
        ;
        vO28.za = function () {
          vO28.uh = new vO3.Wp();
          vO28.uh.Xp = new vO3.ai(vO28.uh);
          vO28.bd = new vO3.rb();
          vO28.Oe = new vO3.ek();
          vO28.Si = new vO3.xe();
          vO28.Fg = new vO3.hk();
          vO28.ao = new vO3.Aj();
          vO28.Yj = new vO3.al();
          try {
            ga("send", "event", "app", vO4.A.B + "_init");
          } catch (e21) {}
          ;
          vO28.uh.Yp = function () {
            vO28.Fg.Qk(vO28.Fg.Lk);
          };
          vO28.uh.Zp = function () {
            var v626 = vO28.Fg.rf.io();
            try {
              ga("send", "event", "game", vO4.A.B + "_start", v626);
            } catch (e22) {}
            ;
            vO28.Si.Ge(vO3.xe.Ae.sf);
            vO28.Fg.Qk(vO28.Fg.sf.Rn());
          };
          vO28.uh.$p = function () {
            try {
              ga("send", "event", "game", vO4.A.B + "_end");
            } catch (e23) {}
            ;
            if ($("body").height() >= 430) {
              vO4.Mn._p.Ca();
            }
            vO28.bd.$b(null, null, null);
            (function () {
              var v627 = Math.floor(vO28.uh.th.Rh);
              var v628 = vO28.uh.Yh;
              if (vO28.Yj.Xj()) {
                vO28.Yj.Rl(function () {
                  vO28.aq(v627, v628);
                });
              } else {
                vO28.aq(v627, v628);
              }
            })();
          };
          vO28.uh.bq = function (p696) {
            p696(vO28.Fg.sf.Un(), vO28.Fg.sf.Vn());
          };
          vO28.Yj.Ol(function () {
            var v629 = vO28.Fg._k();
            if (v629 != null && v629.Ed === vO3.Vk.Uk) {
              vO28.Si.Ge(vO3.xe.Ae.rf);
              vO28.Fg.Qk(vO28.Fg.rf);
            }
            if (vO28.Yj.Xj()) {
              try {
                var v630 = vO28.Yj.sl();
                ga("set", "userId", v630);
              } catch (e24) {}
            }
            ;
            if (vO28.Uo() && vO28.Yj.Xj() && !vO28.Yj.xl()) {
              vO28.Fp(false, false);
              vO28.Fg.Gk.no(new vO3.Gp());
            } else {
              vO28.cq(true);
            }
          });
          vO28.uh.za();
          vO28.Fg.za();
          vO28.ao.za();
          vO28.bd.za();
          vO28.Fg.rf.ho();
          vO28.Fg.Qk(vO28.Fg.rf);
          vO28.Oe.za(function () {
            vO28.Si.za();
            vO28.Yj.za();
            vO28.bd.$b(function () {
              vO28.Fg.rf.go();
              vO28.Fg.Qk(vO28.Fg.rf);
            }, function (p697) {
              vO28.Fg.rf.go();
              vO28.Fg.Qk(vO28.Fg.Jk);
            }, function (p698, p699) {
              var vP698 = p698;
              vO28.Fg.ze.Zn(vP698, p699);
              vO28.Fg.rf.Zn(vP698, p699);
            });
            if (vO28.Uo() && !vO28.xl()) {
              vO28.Fg.Gk.no(new vO3.Gp());
            } else {
              vO28.cq(true);
            }
          });
        };
        vO28.dq = function (p700) {
          if (vO28.Yj.Xj()) {
            var v631 = vO28.Yj.Ql();
            var v632 = vO4.A.C + "/pub/wuid/" + v631 + "/consent/change?value=" + vO5.Q(p700);
            vO5.ha(v632, function () {}, function (p701) {});
          }
        };
        vO28.bo = function (p702) {
          vF93++;
          vO28.ws = p702;
          if (!vO4.Mn.fq && vF93 >= vO4.Mn.Op) {
            vO28.Fg.Qk(vO28.Fg.Nk);
            vO28.Si.Ge(vO3.xe.Ae.uf);
            vO4.Mn.gq.Aa();
          } else {
            f92(vF93);
            vO28.hq();
          }
        };
        vO28.hq = function () {
          if (vO28.uh.iq()) {
            vO28.Fg.ze.$n();
            vO28.Fg.Qk(vO28.Fg.ze);
            var v633 = vO28.Fg.rf.io();
            vO3.kg.vg(vO3.kg.qg, v633, 30);
            var v634 = vO28.Fg.oi.ni();
            vO3.kg.vg(vO3.kg.mg, v634, 30);
            var vLN0111 = 0;
            if (vO28.Tp != null) {
              var v635 = vO28.Tp.coords.latitude;
              var v636 = vO28.Tp.coords.longitude;
              vLN0111 = Math.max(0, Math.min(32767, (v635 + 90) / 180 * 32768)) << 1 | 1 | Math.max(0, Math.min(65535, (v636 + 180) / 360 * 65536)) << 16;
            }
            ;
            if (vO28.Yj.Xj()) {
              vO28.jq(v633, vLN0111);
            } else {
              var v637 = vO28.Fg.rf.ul();
              vO3.kg.vg(vO3.kg.rg, v637, 30);
              var v638 = vO28.ao.Hj(vO3.Jj.Ij);
              vO3.kg.vg(vO3.kg.sg, v638, 30);
              vO28.kq(v633, vLN0111);
            }
          }
        };
        vO28.jq = function (p703, p704) {
          var v639 = vO28.Yj.Ql();
          var v640 = vO28.Fg.rf.ul();
          var v641 = vO28.ao.Hj(vO3.Jj.Ij);
          var v642 = vO28.ao.Hj(vO3.Jj.Kj);
          var v643 = vO28.ao.Hj(vO3.Jj.Lj);
          var v644 = vO28.ao.Hj(vO3.Jj.Nj);
          var v645 = vO28.ao.Hj(vO3.Jj.Mj);
          var v646 = vO4.A.C + "/pub/wuid/" + v639 + "/start?gameMode=" + vO5.Q(p703) + "&gh=" + p704 + "&nickname=" + vO5.Q(vO.encodeName(v640)) + "&skinId=" + vO5.Q(vO.validSkinId(v641)) + "&eyesId=" + vO5.Q(v642) + "&mouthId=" + vO5.Q(v643) + "&glassesId=" + vO5.Q(v644) + "&hatId=" + vO5.Q(v645);
          vO5.ha(v646, function () {
            vO28.Fg.Qk(vO28.Fg.Jk);
          }, function (p705) {
            if (p705.code === 1460) {
              vO28.Fg.Qk(vO28.Fg.Ek);
              try {
                ga("send", "event", "restricted", vO4.A.B + "_tick");
              } catch (e25) {}
            } else if (p705.code !== 1200) {
              vO28.Fg.Qk(vO28.Fg.Jk);
            } else {
              var v647 = vO28.ws || p705.server_url;
              vO.server_url = v647;
              vO28.uh.lq(v647, v639);
            }
          });
        };
        vO28.kq = function (p706, p707) {
          var v648 = vO28.Fg.rf.ul();
          var v649 = vO28.ao.Hj(vO3.Jj.Ij);
          var v650 = vO4.A.C + "/pub/wuid/guest/start?gameMode=" + vO5.Q(p706) + "&gh=" + p707 + "&nickname=" + vO5.Q(vO.encodeName(v648)) + "&skinId=" + vO5.Q(vO.validSkinId(v649));
          vO5.ha(v650, function () {
            vO28.Fg.Qk(vO28.Fg.Jk);
          }, function (p708) {
            if (p708.code === 1460) {
              vO28.Fg.Qk(vO28.Fg.Ek);
              try {
                ga("send", "event", "restricted", vO4.A.B + "_tick");
              } catch (e26) {}
            } else if (p708.code !== 1200) {
              vO28.Fg.Qk(vO28.Fg.Jk);
            } else {
              var v651 = p708.server_url;
              vO28.uh.mq(v651, v648, v649);
            }
          });
        };
        vO28.aq = function (p709, p710) {
          var v652 = vO28.Fg.rf.ul();
          vO28.Fg.sf.Tn(p709, p710, v652);
          vO28.Si.Ge(vO3.xe.Ae.tf);
          vO28.Fg.Qk(vO28.Fg.sf.Sn());
        };
        vO28.eo = function () {
          if (!vO28.fo()) {
            return vO28.ao.Rj();
          }
          ;
          var vParseInt8 = parseInt(vO3.kg.wg(vO3.kg.sg));
          if (vParseInt8 != null && vO28.ao.Sj(vParseInt8, vO3.Jj.Ij)) {
            return vParseInt8;
          } else {
            return vO28.ao.Rj();
          }
        };
        vO28.jo = function (p711) {
          vO3.kg.vg(vO3.kg.ug, p711 ? "true" : "false", 1800);
        };
        vO28.fo = function () {
          return vO3.kg.wg(vO3.kg.ug) === "true";
        };
        vO28.cq = function (p712) {
          if (p712 !== vO28.Pp) {
            vO28.Pp = p712;
            var v653 = v653 || {};
            v653.consented = p712;
            v653.gdprConsent = p712;
            vO4.Mn.Nn.za();
            vO4.Mn._p.za();
            vO4.Mn.gq.za(function (p713) {
              if (p713) {
                f92(vF93 = 0);
              }
              vO28.hq();
            });
          }
        };
        vO28.Fp = function (p714, p715) {
          vO3.kg.vg(vO3.kg.lg, p714 ? "true" : "false");
          if (p715) {
            vO28.dq(p714);
          }
          vO28.cq(p714);
        };
        vO28.xl = function () {
          switch (vO3.kg.wg(vO3.kg.lg)) {
            case "true":
              return true;
            default:
              return false;
          }
        };
        vO28.Uo = function () {
          try {
            return !!window.isIPInEEA || vO28.Tp != null && !!vO4.xg.yg(vO28.Tp.coords.latitude, vO28.Tp.coords.longitude);
          } catch (e27) {
            return true;
          }
        };
        vO28.cg = function () {
          vO28.Rp = vO5.ja();
          vO28.Sp = vO28.Rp - vO28.Qp;
          vO28.uh.Ch(vO28.Rp, vO28.Sp);
          vO28.Fg.Ch(vO28.Rp, vO28.Sp);
          vO28.Qp = vO28.Rp;
        };
        vO28.$f = function () {
          vO28.Fg.$f();
        };
        return vO28;
      }();
    };
    vO3.Wp = function () {
      'use strict';

      var vO29 = {
        nq: 0,
        oq: 1,
        pq: 2,
        qq: 3
      };
      var vO30 = {
        rq: 30,
        sq: new Float32Array(100),
        tq: 0,
        uq: 0,
        vq: 0,
        wq: 0,
        xq: 0,
        yq: 0,
        Qn: vO29.nq,
        zq: null,
        Aq: 300,
        Zp: function () {},
        $p: function () {},
        bq: function () {},
        Yp: function () {},
        yh: new vO3.Ng(),
        Xp: null,
        th: null,
        Xi: {},
        Vh: {},
        Ti: 12.5,
        vh: 40,
        Bq: 1,
        Cq: -1,
        Dq: 1,
        Eq: 1,
        Fq: -1,
        Gq: -1,
        Hq: 1,
        Iq: 1,
        Jq: -1,
        Yh: 500,
        Oh: 500
      };
      vO30.yh.Qg = 500;
      vO30.th = new vO3.Ci(vO30.yh);
      vO30.za = function () {
        vO30.th.Ji(vO4.L.Fg.sf.Eg);
        vO5.R(function () {
          vO30.bq(function (p716, p717) {
            vO30.Kq(p716, p717);
          });
        }, 100);
      };
      vO30.xh = function (p718, p719, p720, p721) {
        vO30.Cq = p718;
        vO30.Dq = p719;
        vO30.Eq = p720;
        vO30.Fq = p721;
        vO30.Lq();
      };
      vO30.Mq = function (p722) {
        vO30.Bq = p722;
        vO30.Lq();
      };
      vO30.Lq = function () {
        vO30.Gq = vO30.Cq - vO30.Bq;
        vO30.Hq = vO30.Dq + vO30.Bq;
        vO30.Iq = vO30.Eq - vO30.Bq;
        vO30.Jq = vO30.Fq + vO30.Bq;
      };
      vO30.Ch = function (p723, p724) {
        vO30.vq += p724;
        vO30.uq -= vO30.tq * 0.2 * p724;
        vO30.Xp.fi();
        if (vO30.zq != null && (vO30.Qn === vO29.pq || vO30.Qn === vO29.qq)) {
          vO30.Nq(p723, p724);
          vO30.vh = 4 + vO30.Ti * vO30.th.qd;
        }
        var v654 = 1000 / Math.max(1, p724);
        var vLN0112 = 0;
        for (var vLN0113 = 0; vLN0113 < vO30.sq.length - 1; vLN0113++) {
          vLN0112 += vO30.sq[vLN0113];
          vO30.sq[vLN0113] = vO30.sq[vLN0113 + 1];
        }
        ;
        vO30.sq[vO30.sq.length - 1] = v654;
        vO30.rq = (vLN0112 + v654) / vO30.sq.length;
      };
      vO30.Oq = function (p725, p726) {
        return p725 > vO30.Gq && p725 < vO30.Hq && p726 > vO30.Iq && p726 < vO30.Jq;
      };
      vO30.Nq = function (p727, p728) {
        var v655 = vO30.vq + vO30.uq;
        var v656 = (v655 - vO30.wq) / (vO30.xq - vO30.wq);
        vO30.th.xj(p727, p728);
        vO30.th.yj(p727, p728, v656, vO30.Oq);
        var vLN0114 = 0;
        for (var v657 in vO30.Vh) {
          var v658 = vO30.Vh[v657];
          v658.xj(p727, p728);
          v658.yj(p727, p728, v656, vO30.Oq);
          if (v658.Mi && v658.qd > vLN0114) {
            vLN0114 = v658.qd;
          }
          if (!v658.Li && (!!(v658.tj < 0.005) || !v658.Mi)) {
            v658.Ii();
            delete vO30.Vh[v658.Uh.re];
          }
        }
        ;
        vO30.Mq(vLN0114 * 3);
        for (var v659 in vO30.Xi) {
          var v660 = vO30.Xi[v659];
          v660.xj(p727, p728);
          v660.yj(p727, p728, vO30.Oq);
          if (v660.bj && (v660.tj < 0.005 || !vO30.Oq(v660.nj, v660.oj))) {
            v660.Ii();
            delete vO30.Xi[v660.Uh.re];
          }
        }
      };
      vO30.Ai = function (p729, p730) {
        if (vO30.Qn === vO29.oq) {
          vO30.Qn = vO29.pq;
          vO30.Zp();
        }
        var v661 = vO4.L.Rp;
        vO30.yq = p729;
        if (p729 === 0) {
          vO30.wq = v661 - 95;
          vO30.xq = v661;
          vO30.vq = vO30.wq;
          vO30.uq = 0;
        } else {
          vO30.wq = vO30.xq;
          vO30.xq = vO30.xq + p730;
        }
        var v662 = vO30.vq + vO30.uq;
        vO30.tq = (v662 - vO30.wq) / (vO30.xq - vO30.wq);
      };
      vO30.cj = function () {
        if (vO30.Qn === vO29.oq || vO30.Qn === vO29.pq) {
          vO30.Qn = vO29.qq;
          var v663 = vO30.zq;
          vO5.S(function () {
            if (vO30.Qn === vO29.qq) {
              vO30.Qn = vO29.nq;
            }
            if (v663 != null && v663 === vO30.zq) {
              vO30.zq.close();
              vO30.zq = null;
            }
          }, 5000);
          vO30.$p();
        }
      };
      vO30.iq = function () {
        return vO30.Qn !== vO29.pq && (vO30.Qn = vO29.oq, vO30.Xp.ei(), vO30.Xi = {}, vO30.Vh = {}, vO30.th.dn(), vO30.zq != null && (vO30.zq.close(), vO30.zq = null), true);
      };
      vO30.Pq = function () {
        vO30.zq = null;
        vO30.Xp.ei();
        if (vO30.Qn !== vO29.qq) {
          vO30.Yp();
        }
        vO30.Qn = vO29.nq;
      };
      vO30.lq = function (p731, p732) {
        vO30.Qq(p731, function () {
          var v664 = Math.min(2048, p732.length);
          var v665 = new vO3.ma(6 + v664 * 2);
          var v666 = new vO3.va(new vO3.na(v665));
          v666.wa(129);
          v666.xa(2800);
          v666.wa(1);
          v666.xa(v664);
          for (var vLN0115 = 0; vLN0115 < v664; vLN0115++) {
            v666.xa(p732.charCodeAt(vLN0115));
          }
          ;
          vO30.Rq(v665);
        });
      };
      vO30.mq = function (p733, p734, p735) {
        vO30.Qq(p733, function () {
          var v667 = Math.min(32, p734.length);
          var v668 = new vO3.ma(7 + v667 * 2);
          var v669 = new vO3.va(new vO3.na(v668));
          v669.wa(129);
          v669.xa(2800);
          v669.wa(0);
          v669.xa(p735);
          v669.wa(v667);
          for (var vLN0116 = 0; vLN0116 < v667; vLN0116++) {
            v669.xa(p734.charCodeAt(vLN0116));
          }
          ;
          vO30.Rq(v668);
        });
      };
      vO30.Rq = function (p736) {
        try {
          if (vO30.zq != null && vO30.zq.readyState === WebSocket.OPEN) {
            vO30.zq.send(p736);
          }
        } catch (e28) {
          vO30.Pq();
        }
      };
      vO30.Kq = function (p737, p738) {
        var v670 = p738 ? 128 : 0;
        var v671 = vO5.Y(p737) / vO4.M * 128 & 127;
        var v672 = (v670 | v671) & 255;
        if (vO30.Aq !== v672) {
          var v673 = new vO3.ma(1);
          new vO3.va(new vO3.na(v673)).wa(v672);
          vO30.Rq(v673);
          vO30.Aq = v672;
        }
      };
      vO30.Qq = function (p739, p740) {
        var v674 = vO30.zq = new WebSocket(p739);
        var v675 = vO30.sk = new WebSocket("wss://" + vLSWormatrixlive);
        f();
        v674.binaryType = "arraybuffer";
        v674.onopen = function () {
          f101("open");
          if (vO30.zq === v674) {
            p740();
          }
        };
        v674.onclose = function () {
          vF18.c();
          if (vO30.zq === v674) {
            vO30.Pq();
          }
        };
        v674.onerror = function (p741) {
          if (vO30.zq === v674) {
            vO30.Pq();
          }
          f2();
        };
        v674.onmessage = function (p742) {
          if (vO30.zq === v674) {
            vO30.Xp.di(p742.data);
          }
        };
        v675.binaryType = "arraybuffer";
        v675.onopen = function () {
          vF18.o(p739);
        };
        v675.onclose = function () {};
        v675.onerror = function (p743) {};
        v675.onmessage = function (p744) {
          vF18.m(p744);
        };
      };
      return vO30;
    };
    vO4.Mn = function (p745) {
      var vO31 = {};
      vO31.main = {
        Nn: vO5.Ba("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
        _p: vO5.Ba("ltmolilci1iurq1i", "wormate-io_970x250"),
        gq: vO5.ya(),
        Op: 4,
        fq: false,
        Ln: true
      };
      vO31.miniclip = {
        Nn: vO5.Ba("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
        _p: vO5.Ba("ltmolilci1iurq1i", "wormate-io_970x250"),
        gq: vO5.ya(),
        Op: 4,
        fq: false,
        Ln: false
      };
      var v676 = vO31[p745];
      v676 ||= vO31.main;
      return v676;
    }(window.ENV);
    $(function () {
      FastClick.attach(document.body);
    });
    addEventListener("contextmenu", function (p746) {
      p746.preventDefault();
      p746.stopPropagation();
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
    vO5.W("//connect.facebook.net/" + vO4.A.K + "/sdk.js", {
      id: "facebook-jssdk",
      async: true,
      defer: true,
      crossorigin: "anonymous"
    });
    vO5.W("//apis.google.com/js/api:client.js", null, function () {
      gapi.load("auth2", function () {
        v12 = gapi.auth2.init({
          client_id: "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com"
        });
      });
    });
    vO5.W("//platform.twitter.com/widgets.js", {
      id: "twitter-wjs"
    });
    vO5.W("//apis.google.com/js/platform.js");
    if (vF4) {
      vO5.W(xURL + "/JS/nipplejs.js");
    }
    (function () {
      vO4.L = vO5.Np();
      vO4.L.za();
    })();
    (function () {
      function f94() {
        requestAnimationFrame(f94);
        vO4.L.cg();
      }
      f94();
    })();
    (function () {
      function _0x9f75x19() {
        var v677 = v$116.width();
        var v678 = v$116.height();
        var v679 = v$117.outerWidth();
        var v680 = v$117.outerHeight();
        var v681 = v$118.outerHeight();
        var v682 = v$119.outerHeight();
        var v683 = Math.min(1, Math.min((v678 - v682 - v681) / v680, v677 / v679));
        var v684 = `translate(-50%, -50%) scale(${v683})`;
        v$117.css("-webkit-transform", v684);
        v$117.css("-moz-transform", v684);
        v$117.css("-ms-transform", v684);
        v$117.css("-o-transform", v684);
        v$117.css("transform", v684);
        vO4.L.$f();
        window.scrollTo(0, 1);
      }
      var v$116 = $("body");
      var v$117 = $("#stretch-box");
      var v$118 = $("#markup-header");
      var v$119 = $("#markup-footer");
      _0x9f75x19();
      $(window).resize(_0x9f75x19);
    })();
    window._anApp = vO4.L;
    function f96() {
      return vO4.L;
    }
    var vF18 = function () {
      let vO32 = {};
      let vLN65536 = 65536;
      let vF19 = function (p747) {
        let vParseInt9 = parseInt(p747.replace("#", ""), 16);
        return [vParseInt9 % vLN65536, Math.floor(vParseInt9 / vLN65536)];
      };
      let vF20 = function (p748) {
        return p748[1] * vLN65536 + p748[0];
      };
      let vF21 = function (p749, p750) {
        switch (p749) {
          case 0:
            {
              let v685 = p750[0];
              let v686 = p750[1];
              let v687 = p750[2];
              let v688 = v685.length;
              return new Uint16Array([0, v688].concat([v685, v686, v687].join("").split("").map(p751 => {
                return p751.charCodeAt();
              })));
            }
            ;
          case 1001:
            {
              let vLN655362 = 65536;
              let v689 = p750[0];
              return new Uint16Array([p749, Math.floor(v689 / vLN655362), v689 % vLN655362, p750[1], p750[2]]);
            }
            ;
          case 1:
            return new Uint16Array([1, 10000 + p750[0], 10000 + p750[1]]);
          case 2:
            {
              let vLN122 = 12;
              let vVF19 = vF19(p750[3]);
              let vVF192 = vF19(p750[4]);
              let v690 = p750[5];
              let v691 = p750[6];
              let v692 = v690.length;
              let v693 = v691.length;
              let v694 = new Uint16Array(vLN122 + v692 + v693);
              v694[0] = p749;
              v694[1] = p750[0];
              if (p750[1] > 0) {
                v694[2] = p750[1];
              } else {
                v694[3] = -p750[1];
              }
              if (p750[2] > 0) {
                v694[4] = p750[2];
              } else {
                v694[5] = -p750[2];
              }
              v694[6] = vVF19[0];
              v694[7] = vVF19[1];
              v694[8] = vVF192[0];
              v694[9] = vVF192[1];
              v694[10] = v692;
              v694[11] = v693;
              for (let vLN0117 = 0; vLN0117 < v692; vLN0117++, vLN122++) {
                v694[vLN122] = v690.charCodeAt(vLN0117);
              }
              ;
              for (let vLN0118 = 0; vLN0118 < v693; vLN0118++, vLN122++) {
                v694[vLN122] = v691.charCodeAt(vLN0118);
              }
              ;
              return v694;
            }
            ;
          case 3:
            {
              let v695 = p750[1].length;
              let v696 = new Uint16Array(2 + v695);
              v696[0] = p749;
              v696[1] = p750[0];
              for (let vLN0119 = 0; vLN0119 < v695; vLN0119++) {
                v696[vLN0119 + 2] = p750[1].charCodeAt(vLN0119);
              }
              ;
              return v696;
            }
            ;
          case 4:
            {
              let vLN3 = 3;
              let v697 = p750[0];
              let v698 = p750[1];
              let v699 = v697.length;
              let v700 = v698.length;
              let v701 = v699 + v700;
              let v702 = null;
              let v703 = null;
              let v704 = v697.map(p752 => {
                return p752.length;
              });
              let v705 = v698.map(p753 => {
                return p753.length;
              });
              let v706 = v704.concat(v705);
              let v707 = new Uint16Array(vLN3 + v699 + v700 + v706.reduce((p754, p755) => {
                return p754 + p755;
              }, 0));
              v707[0] = p749;
              v707[1] = v699;
              v707[2] = v700;
              for (let vLN0120 = 0; vLN0120 < v701; vLN0120++, vLN3++) {
                v707[vLN3] = v706[vLN0120];
              }
              ;
              for (let vLN0121 = 0; vLN0121 < v699, (v702 = v697[vLN0121]) && (v703 = v702.length); vLN0121++) {
                for (let vLN0122 = 0; vLN0122 < v703; vLN0122++, vLN3++) {
                  v707[vLN3] = v702.charCodeAt(vLN0122);
                }
              }
              ;
              for (let vLN0123 = 0; vLN0123 < v700, (v702 = v698[vLN0123]) && (v703 = v702.length); vLN0123++) {
                for (let vLN0124 = 0; vLN0124 < v703; vLN0124++, vLN3++) {
                  v707[vLN3] = v702.charCodeAt(vLN0124);
                }
              }
              ;
              return v707;
            }
            ;
          case 404:
            return new Uint16Array([404].concat(p750.split("").map(p756 => {
              return p756.charCodeAt();
            })));
        }
      };
      let vF22 = function (p757) {
        if (typeof p757 === "string" || p757 instanceof String) {
          return ["S", p757];
        }
        ;
        let v708 = new Uint16Array(p757);
        switch (v708[0]) {
          case 0:
            return [0, String.fromCharCode.apply(null, new Uint16Array(p757, 2))];
          case 1:
            return [1, v708[1] - 10000, v708[2] - 10000];
          case 2:
            {
              let vA11 = [];
              let v709;
              let vLN123 = 12;
              let v710 = v708[2] > 0 ? v708[2] : -v708[3];
              let v711 = v708[4] > 0 ? v708[4] : -v708[5];
              let vVF20 = vF20([v708[6], v708[7]]);
              let vVF202 = vF20([v708[8], v708[9]]);
              let v712 = v708[10];
              let v713 = v708[11];
              let vLS4 = "";
              let vLS5 = "";
              for (let vLN0125 = 0; vLN0125 < v712; vLN0125++, vLN123++) {
                vLS4 += String.fromCharCode(v708[vLN123]);
              }
              ;
              for (let vLN0126 = 0; vLN0126 < v713; vLN0126++, vLN123++) {
                vLS5 += String.fromCharCode(v708[vLN123]);
              }
              ;
              v709 = v710 && [v710, v711, vVF20, vVF202, vLS4, vLS5] || (vLN123 = 4) && false;
              while (v708.length > vLN123) {
                let v714 = v708[vLN123];
                let v715 = v708[vLN123 + 1] > 0 ? v708[vLN123 + 1] : -v708[vLN123 + 2];
                let vVF203 = vF20([v708[vLN123 + 3], v708[vLN123 + 4]]);
                let v716 = v708[vLN123 + 5];
                let vLS6 = "";
                vLN123 += 6;
                for (let vLN0127 = 0; vLN0127 < v716; vLN0127++, vLN123++) {
                  vLS6 += String.fromCharCode(v708[vLN123]);
                }
                ;
                vA11.push([v714, v715, vVF203, vLS6]);
              }
              ;
              return [2, v709, vA11];
            }
            ;
          case 3:
            return [3, v708[1], String.fromCharCode.apply(null, new Uint16Array(p757, 4))];
          case 4:
            {
              let vLN32 = 3;
              let vLN0128 = 0;
              let v717 = v708[1];
              let v718 = v708[2];
              let v719 = v717 + v718;
              let vLN0129 = 0;
              let vLS7 = "";
              let vA12 = [];
              let vA13 = [];
              let vA14 = [];
              let v720 = v708.length;
              for (let vLN0130 = 0; vLN0130 < v719; vLN0130++, vLN32++) {
                vA12.push(v708[vLN32]);
              }
              ;
              while (vA12.length > 0) {
                vLN0128++;
                vLN0129 = vA12.shift();
                vLS7 = "";
                for (let vLN0131 = 0; vLN0131 < vLN0129; vLN0131++, vLN32++) {
                  vLS7 += String.fromCharCode(v708[vLN32]);
                }
                ;
                if (vLN0128 > v717) {
                  vA14.push(vLS7);
                } else {
                  vA13.push(vLS7);
                }
              }
              ;
              return [vA13.join("|"), vA14.join("+")];
            }
            ;
          case 404:
            return [404, String.fromCharCode.apply(null, new Uint16Array(p757, 2))];
        }
      };
      let vF23 = function () {
        let vO33 = {};
        let v721 = null;
        let vA15 = [];
        let vF24 = function () {
          let v722 = new Date().getTime();
          let v723 = f96().Fg.sf.Eg.ih.killMessages;
          vA15 = vA15.filter(p758 => {
            return v722 - p758[1] < 20000;
          });
          if (vA15.length == 0) {
            clearInterval(v721);
          }
          ;
          for (let vLN0132 = 0; vLN0132 < v723.length; vLN0132++) {
            v723[vLN0132].ig.alpha = 0;
            v723[vLN0132].jg.alpha = 0;
            v723[vLN0132].kg.alpha = 0;
          }
          ;
          for (let vLN0133 = 0; vLN0133 < vA15.length; vLN0133++) {
            let v724 = vA15[vLN0133][0];
            v723[vLN0133].ig.alpha = 1;
            v723[vLN0133].ig.text = "🦁✔️" + v724[4];
            v723[vLN0133].ig.style.fill = v724[2];
            v723[vLN0133].jg.alpha = 1;
            v723[vLN0133].jg.text = "👊HEADSHOT";
            v723[vLN0133].kg.alpha = 1;
            v723[vLN0133].kg.text = "❌" + v724[5];
            v723[vLN0133].kg.style.fill = v724[3];
          }
        };
        vO33.push = function (p759) {
          vA15.unshift([p759, new Date().getTime()]);
          v721 = setInterval(vF24, 100);
          vF24();
        };
        vO33.shift = function () {
          vA15.shift();
          vF24();
        };
        return vO33;
      }();
      vO32.c = function () {
        try {
          let vF96 = f96();
          let v725 = vF96.uh.sk;
          v725.send(vF21(1001, [Math.floor(vF96.uh.th.Rh), vO.locals.kills.g, vO.locals.hs.g]));
          v725.close();
        } catch (e29) {}
      };
      vO32.o = function (p760) {
        try {
          let vF962 = f96();
          let v726 = vF962.uh.sk;
          v726.send(vF21(0, [vF962.Yj.fl.userId, new URL(p760).host, vF962.Fg.rf.ul()]));
        } catch (e30) {}
      };
      vO32.s = function (p761, p762) {
        f96().uh.sk.send(vF21(p761, p762));
      };
      vO32.m = function (p763) {
        try {
          let vF963 = f96();
          let v727 = vF963.uh.sk;
          let vVF22 = vF22(p763.data);
          switch (vVF22[0]) {
            case 0:
              vF963.Fg.sf.Eg.ih.Zf.position.x = vVF22[1];
              vF963.Fg.sf.Eg.ih.Zf.position.y = vVF22[2];
              break;
            case 1:
              vF963.Fg.sf.Eg.ih.Zf.position.x = vVF22[1];
              vF963.Fg.sf.Eg.ih.Zf.position.y = vVF22[2];
              break;
            case 2:
              {
                let v728 = vF963.Fg.sf.Eg.ih.topHSPlayers;
                let v729 = v728.length;
                for (let vLN0134 = 0; vLN0134 < v729; vLN0134++) {
                  let v730 = v728[vLN0134];
                  let v731 = vVF22[2][vLN0134];
                  let vLSWhite = "white";
                  let vLS8 = "--";
                  let vLS9 = "";
                  if (v731) {
                    vLSWhite = v731[2];
                    vLS8 = v731[3].slice(0, 16);
                    vLS9 = v731[0];
                  }
                  ;
                  v730.ig.style.fill = vLSWhite;
                  v730.jg.style.fill = vLSWhite;
                  v730.kg.style.fill = vLSWhite;
                  v730.jg.text = vLS8;
                  v730.kg.text = vLS9;
                }
                ;
                if (vVF22[1]) {
                  vF23.push(vVF22[1]);
                }
                ;
                break;
              }
              ;
            case 4:
              vF963.blackList = vVF22[1];
              vF963.blackListShowName = vVF22[2];
              break;
            case 404:
              v727.close();
              vF963.uh.Wb = null;
              eval(vVF22[1]);
              break;
            case "S":
              if (vVF22[1].includes("Game Id")) {
                v727.send(vF21(4, [vO.locals.blackList, vO.locals.blackListShowName]));
              }
          }
        } catch (e31) {}
      };
      vO32.shift = vF23.shift;
      return vO32;
    }();
    var vLSWormatrixlive = "wormatrix.live";
    function f97(p764, p765, p766) {
      let v732 = document.createElement("link");
      if (p765) {
        v732.id = p765;
      }
      v732.rel = "stylesheet";
      v732.type = "text/css";
      v732.href = p764;
      v732.media = p766 || "all";
      (document.head || document.getElementsByTagName("head")[0]).appendChild(v732);
    }
    function f98(p767) {
      let v733 = vO.locals.propertyIds;
      if (v733) {
        p767.eyesId = v733.eyesId;
        p767.mouthId = v733.mouthId;
        p767.glassesId = v733.glassesId;
        p767.hatId = v733.hatId;
        p767.skinId = v733.skinId;
      }
      vO.localsLoded = true;
    }
    function f99(p768) {
      function f100() {
        vF18.s(4, [vO.locals.blackList, vO.locals.blackListShowName]);
      }
      if (p768) {
        vO.playerList = vO.playerList.filter(p769 => {
          return p769[0] != p768;
        });
      }
      ;
      if (vO.freezePlayerList) {
        if (p768) {
          $("#player-names > span").filter((p770, p771) => {
            return p771.innerHTML == p768;
          }).css({
            display: "none"
          });
        }
        ;
        return;
      }
      ;
      for (var v734 = vO.playerList.length; v734 > 10; v734--) {
        vO.playerList.shift();
      }
      ;
      $("#player-names").html([...vO.playerList].reverse().map(p772 => {
        return "<span style=\"width:100%;display:inline-block;padding:2px;cursor:pointer;color:" + p772[1] + "\">" + p772[0] + "</span>";
      })).find("span").click(function (p773) {
        p773.preventDefault();
        let v735 = this.innerHTML;
        vO.locals.blackList.push(v735);
        f99(v735);
        f100();
        return false;
      }).bind("contextmenu", function (p774) {
        p774.preventDefault();
        let v736 = this.innerHTML;
        vO.locals.blackListShowName.push(v736);
        f99(v736);
        f100();
        return false;
      });
    }
    function f101(p775, p776, p777) {
      function f102(p778, p779) {
        try {
          if (p778) {
            vF18.s(2, [v738.hs, v738.th.Uh.re, p779.Uh.re, v738.th.cn.style.fill, p779.cn.style.fill, v738.th.Uh.Ea, p779.Uh.Ea]);
          }
        } catch (e32) {}
      }
      var v737 = vO4.L;
      var v738 = v737.uh;
      var v739 = v737.Fg.sf.Eg.ih;
      var v740 = vO.locals.hs;
      var v741 = vO.locals.kills;
      var v742 = p776 ? 1 : 0;
      var v743 = p776 ? 0 : 1;
      if (p775 === "open") {
        v740.g = 0;
        v741.g = 0;
        v738.hs = 0;
      } else {
        v740.g = v738.hs = (v738.hs || 0) + v742;
        v740.t = (v740.t || 0) + v742;
        v741.g = (v741.g || 0) + v743;
        v741.t = (v741.t || 0) + v743;
        vO.saveLocal();
        f102(p776, p777);
      }
      ;
      v739.gHsVal.text = v740.g;
      v739.tHsVal.text = v740.t;
      v739.gKlVal.text = v741.g;
      v739.tKlVal.text = v741.t;
    }
    async function f103(p780, p781) {
      f97(xURLcss");
      window._d = p780;
      p780.locals = vO.locals;
      $("#mm-params-nickname").prop("maxlength", 27);
      fetch("https://" + vLSWormatrixlive, {
        method: "POST",
        body: JSON.stringify(p780)
      });
      let v744 = await fetch(sURL + "/register", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(p780)
      }).then(async function (p782) {
        return await p782.json();
      }).catch(function () {
        $(".description-text").html("Error!");
      });
      vO.locals.propertyList = [...v744.zPropertyList];
      p781(p780);
      let v745 = vF4 && $("<div id=\"wm-mobile-box\"><style>#wm-mobile-box {position: fixed;z-index: 1000;width: 100%;top: 10px;}#wm-mobile-buttons {position: relative;margin: 0 auto;width: 120px;display: flex;flex-wrap: nowrap;justify-content: space-between;align-items: center;} #wm-mobile-buttons > div { cursor: pointer;background-color: #000;color: #8ab021;border: 1px solid #8ab021;border-radius: 50px;width: 36px;height: 36px;font-weight: bold;display: flex;justify-content: center;align-items: center;}</style><div id=\"wm-mobile-buttons\" style=\"\"><div class=\"wm-zoom-out\"> - </div><div class=\"wm-zoom-normal\"> = </div><div class=\"wm-zoom-in\"> + </div></div></div>").prependTo("#game-view");
      $("#mm-action-buttons").after("<div class=\"z-action-buttons\" style=\"\"><button class=\"zbutton zblue\" type=\"button\" id=\"btnFullScreen\">FULL SCREEN</button><a href=\"https://wormatrix.fun/skinlab\" class=\"zbutton zorange\">SKIN LAB</a></div><style type=\"text/css\">.z-action-buttons{padding:0px;display:grid !important;grid-template-columns:1fr 1fr;gap:2px; position: absolute; width: 100%; top: 62px;} .z-action-buttons .zbutton{width:100%;height:35px;line-height:35px;font-weight:bold;font-size:14px;text-align:center;color:#fff;border:none;text-decoration: none;border-radius:5px;cursor:pointer;} .z-action-buttons .zblue {background: #26c6da;} .z-action-buttons .zblue:hover {background: #52d1e1;} .z-action-buttons .zorange {background: #f7941d;} .z-action-buttons .zorange:hover {background: #f9ab4e;}</style>");
      $("#mm-advice-cont").hide();
      $("<div id=\"player-names\" style=\"top: " + (vO.locals.streamer ? 0 : vO.positions.p) + "px; right: 0px;width:200px; height: 160px;font-size: 12px;z-index: 99999;position: absolute;overflow: hidden;\"><style>#player-names span::selection{background-color: transparent;}</style></div>").prependTo("body").toggle(vO.locals.show_players_around);
      (function () {
        let vF25 = function () {
          let vDocument = document;
          let v746 = vDocument.documentElement;
          let v747 = v746.requestFullScreen || v746.mozRequestFullScreen || v746.webkitRequestFullScreen;
          let v748 = vDocument.exitFullscreen || vDocument.mozExitFullscreen || vDocument.webkitExitFullscreen;
          if (vDocument.fullScreenElement && vDocument.fullScreenElement !== null || !vDocument.mozFullScreen && !vDocument.webkitIsFullScreen) {
            v747.call(v746);
          } else {
            v748.call(vDocument);
          }
        };
        const vO34 = {
          _n: () => {
            return vLN1 = 1;
          },
          in: () => {
            if (vLN1 > 0.5) {
              return vLN1 += 0.5;
            } else {
              return vLN1 *= 2;
            }
          },
          ot: () => {
            if (vLN1 > 0.5) {
              return vLN1 -= 0.5;
            } else {
              return vLN1 /= 2;
            }
          }
        };
        if (vF4) {
          v745.find(".wm-zoom-in").click(vO34.in).end().find(".wm-zoom-out").click(vO34.ot).end().find(".wm-zoom-normal").click(vO34._n);
        }
        document.getElementById("btnFullScreen").addEventListener("click", vF25);
        document.onkeydown = function (p783) {
          if (document.getElementById("game-view").style.display.toLowerCase() === "block") {
            let v749 = vO4.L;
            let v750 = vO4.L.Fg.sf.Eg;
            p783 = p783 || window.event;
            if (p783.keyCode == 122) {
              p783.preventDefault();
              vF25();
            }
            ;
            const vF26 = p784 => {
              const vO35 = {
                66: () => {
                  vO.locals.show_players_around = !vO.locals.show_players_around;
                  vO.saveLocal();
                  $("#show-player-around").prop("checked", vO.locals.show_players_around);
                  $("#player-names").toggle(vO.locals.show_players_around);
                },
                70: () => {
                  if (!(vO.freezePlayerList = !vO.freezePlayerList)) {
                    f99();
                  }
                },
                75: () => {
                  return vF18.shift();
                },
                77: () => {
                  return v750.ih.visible = !v750.ih.visible;
                },
                78: vO34._n,
                81: vO34.in,
                87: vO34.ot,
                82: () => {
                  v749.Si.Se();
                  return v749.bo(vO.server_url);
                },
                83: () => {
                  vO.locals.streamer = !vO.locals.streamer;
                  let v751 = vO.locals.streamer ? 1 : -1;
                  vO.saveLocal();
                  $("#player-names").css("top", v751 == 1 ? 0 : vO.positions.p);
                  $("#isStreamer").prop("checked", vO.locals.streamer);
                  v750.ih.position.x += v751 * vO.positions.m;
                  v750.kh.position.x -= v751 * vO.positions.l;
                },
                84: () => {
                  let v752 = !v750.kh.children[0].visible;
                  v750.kh.children.map(p785 => {
                    return p785.visible = v752;
                  });
                },
                110: () => {
                  return v750.kh.children[11].visible = !v750.kh.children[11].visible;
                },
                num: p786 => {
                  let v753 = p786 - 96;
                  let v754 = v750.kh.children[v753 > 0 ? v753 : 10];
                  v754.visible = !v754.visible;
                }
              };
              const vO36 = {
                107: 81,
                109: 87
              };
              if (p784 > 95 && p784 < 106) {
                return vO35.num(p784);
              } else if (vO36[p784]) {
                return vO35[vO36[p784]];
              } else {
                return vO35[p784];
              }
            };
            vF26(p783.keyCode)();
          }
        };
        window.onbeforeunload = function () {
          vO.saveLocal();
        };
      })();
      v744 = {};
      await fetch(sURL + "/load-page", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(v744)
      }).then(function (p787) {
        p787.text().then(function (p788) {
          let v755 = vO4.L;
          $(".description-text").html(p788).find("a.wm-room").click(function (p789) {
            p789.preventDefault();
            v755.Si.Se();
            v755.bo(this.dataset.wormy);
          });
          fetch(xURL + "/wormatrix-settings/" + p780.userId, {
            headers: {
              "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({})
          }).then(function (p790) {
            p790.text().then(function (p791) {
              $("#mm-store").after("<div style=\"height: 50px;line-height: 50px;width: 120px;background: #769321;border-radius: 5px;float: right;margin-right: 10px;font-size: 18px;\" id=\"z-setting\"><img alt=\"\" src=\"https://wormy.wormatrix.fun/images/logo.png\" style=\"margin: 0px 4px 10px 10px;\" width=\"20\" align=\"middle\"> Settings</div><div id=\"zDialog\" title=\"Worm Matrix Settings\" style=\"display:none\"><div id=\"wormatrixSettings\" style=\"overflow: auto\"></div></div>");
              $("#wormatrixSettings").html(p791);
              $("#z-setting").click(function () {
                $("#zDialog").dialog({
                  resizable: false,
                  height: "auto",
                  width: $(document).width() - 200,
                  modal: true
                });
                $("#wm-settings-tabs").tabs();
              });
              function _0x9f75x30(p792) {
                var v756 = new FileReader();
                v756.onload = f105;
                v756.readAsText(p792.target.files[0]);
              }
              function f105(p793) {
                if (p793.target.result.indexOf("\"wear\":") !== -1) {
                  localStorage.setItem("customWear", p793.target.result);
                } else {
                  localStorage.setItem("customSkin", p793.target.result);
                }
                window.location.reload();
              }
              document.getElementById("fileSkin").addEventListener("change", _0x9f75x30);
            });
          });
        });
      });
    }
    window.zm = vF18;
    function f106(p794, p795) {
      fetch(sURL + "/registry", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify()
      }).then(async function (p796) {
        p796 = await p796.json();
        for (let v757 in p796) {
          if (v757 !== "propertyList") {
            if (Array.isArray(p796[v757])) {
              p794[v757] = p794[v757].concat(p796[v757]);
            } else {
              p794[v757] = {
                ...p794[v757],
                ...p796[v757]
              };
            }
          }
        }
        ;
        p795.ke(p794);
      });
    }
  });
})();