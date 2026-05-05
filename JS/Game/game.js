var vLSHttpshaylamdaycom = "https://haylamday.com";
window.detectLog = null;
const vO26 = {
  BETAisSkinCustom(p720) {
    var v688 = /[a-zA-Z]/;
    return typeof p720 === "string" && v688.test(p720);
  },
  testSkinCustom: function (p721) {
    if (vO26.BETAisSkinCustom(p721)) {
      return 34 || 33;
    } else {
      return p721;
    }
  },
  testSkinMod: function (p722) {
    return p722 >= 399 && p722 < 999;
  },
  testWear: function (p723) {
    return p723 >= 399 && p723 < 999;
  },
  isNumberValid: function (p724) {
    return p724 !== "" && p724 !== null && p724 !== undefined && !isNaN(p724);
  },
  validInput: function (p725) {
    if (!vO26.testSkinMod(p725) && !vO26.BETAisSkinCustom(p725)) {
      return p725;
    }
    try {
      let v689 = $("#inputReplaceSkin").val();
      return encodeURI(vO26.isNumberValid(v689) ? v689 : 35);
    } catch (e27) {
      return encodeURI(35);
    }
  },
  aload: false,
  aId: 0
};
var v690 = localStorage.getItem("inputReplaceSkin");
var v691;
var v692 = null;
var v693 = false;
var vO27 = {};
window.keyMove = 81;
var vO28 = {
  eventoPrincipal: null,
  joystick: {
    positionMode: "L",
    checked: true,
    size: 90,
    mode: "dynamic",
    position: {
      left: "110px",
      bottom: "110px"
    },
    color: "#FF3B3B",
    pxy: 110
  }
};
var vO29 = {
  FB_UserID: "",
  smoothCamera: 0.5,
  eat_animation: 0.0025,
  flag: "https://i.imgur.com/EkbSd65.png",
  PortionSize: localStorage.PotenciadorSize || 2,
  PortionAura: localStorage.PotenciadorAura || 1.2,
  PortionTransparent: 0.8,
  FoodTransparent: 0.3,
  ModeStremer: false,
  ModeStremerbatop: false,
  ModeStremeremoj: false,
  ModeStremerheadshot: false,
  ModeStremersaveheadshot: false,
  arrow: false,
  KeyCodeRespawn: localStorage.KeyRespawn || 82,
  KeyCodeAutoMov: localStorage.KeyAutoMov || window.keyMove,
  AbilityZ: false,
  FoodShadow: localStorage.ComidaShadow || 2,
  FoodSize: localStorage.ComidaSize || 2,
  headshot: 0,
  visibleSkin: [],
  pL: [],
  gamePad: vO28.joystick,
  mobile: false,
  loading: false,
  kill: 0,
  totalKills: 0,
  totalHeadshots: 0,
  adblock: false,
  CLIENTE_ADMIN: 1,
  CLIENTE_ACTIVO: 3,
  CLIENTE_INACTIVO: 4
};
saveGameLocal = localStorage.getItem("SaveGameXT");
if (saveGameLocal && saveGameLocal !== "null") {
  let v694 = JSON.parse(saveGameLocal);
  for (let v695 in v694) {
    vO29[v695] = v694[v695];
  }
}
vO29.loading = true;
const vF14 = function () {
  let v696 = false;
  vO29.mobile = false;
  var v697 = navigator.userAgent || navigator.vendor || window.opera;
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(v697) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(v697.substr(0, 4))) {
    vO29.mobile = true;
    v696 = true;
  }
  return v696;
};
const vF15 = function () {
  let v698 = false;
  var v699 = navigator.userAgent || navigator.vendor || window.opera;
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(v699) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(v699.substr(0, 4))) {
    v698 = true;
  }
  return v698;
};
const vF16 = function (p726) {
  let v700;
  try {
    console.log(p726);
    vO29.gamePad ||= vO28.joystick;
    if (vF15() && (p726 || vO29.gamePad.checked)) {
      v700 = nipplejs.create(vO29.gamePad);
      v700.on("move", function (p727, p728) {
        vO28.eventoPrincipal.sk = p728.angle.radian <= Math.PI ? p728.angle.radian * -1 : Math.PI - (p728.angle.radian - Math.PI);
        console.log(p728);
      });
    }
    return v700;
  } catch (e28) {
    console.log(e28);
  }
};
let vO30 = {
  clientesVencidos: [],
  clientesActivos: []
};
let vO31 = {
  Api_listServer: []
};
async function f96() {
  await fetch("https://haylamday.com/api/users.php").then(p729 => p729.json()).then(p730 => {
    if (p730.success) {
      let v701 = p730.Users;
      vO30.clientesActivos = v701.filter(p731 => {
        return p731.cliente_ID;
      });
    } else {
      vO30 = {
        clientesVencidos: [],
        clientesActivos: []
      };
      alert("An error occurred while loading clients");
    }
  });
}
async function f97() {
  await fetch("https://haylamday.com/api/server.php").then(p732 => p732.json()).then(p733 => {
    if (p733.success) {
      let v702 = p733.servers;
      vO31.Api_listServer = v702.filter(p734 => {
        return p734.serverUrl;
      });
    } else {
      vO31 = {
        Api_listServer: []
      };
      alert("An error occurred while loading the servers");
    }
  });
}
f96();
f97();
$(".store-view-cont").append("<div id=\"idReplaceSkin\"></div>");
var v$120 = $("#idReplaceSkin");
const vO32 = {
  fontStyle: {
    name: new PIXI.TextStyle({
      fill: "#FFFF00",
      fontSize: 12,
      lineJoin: "round",
      stroke: "#EFFA45",
      fontFamily: "vuonghiep",
      fontWeight: "bold"
    }),
    blanco: new PIXI.TextStyle({
      align: "center",
      fill: "#FFF",
      fontSize: 12,
      lineJoin: "round",
      stroke: "#FFF",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontWeight: "bold",
      wordWrap: true
    }),
    morado: new PIXI.TextStyle({
      align: "center",
      fill: "#FFFF00",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#FAA845",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "vuonghiep",
      fontWeight: "bold",
      wordWrap: true
    }),
    morado1: new PIXI.TextStyle({
      align: "center",
      fill: "#FFF",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#FAA845",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "vuonghiep",
      fontWeight: "bold",
      wordWrap: true
    }),
    amarillo: new PIXI.TextStyle({
      align: "center",
      fill: "#FFFF00",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#FAA845",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "vuonghiep",
      fontWeight: "bold",
      wordWrap: true
    }),
    amarillo1: new PIXI.TextStyle({
      align: "center",
      fill: "#FFF",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#FAA845",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "vuonghiep",
      fontWeight: "bold",
      wordWrap: true
    }),
    anheadshot: new PIXI.TextStyle({
      align: "center",
      fill: "#FFF",
      fontSize: 0,
      lineJoin: "round",
      stroke: "#FAA845",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "vuonghiep",
      fontWeight: "bold",
      wordWrap: true
    }),
    keysColor: new PIXI.TextStyle({
      align: "center",
      fill: "#fff009",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#fff009",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontWeight: "bold",
      fontFamily: "vuonghiep",
      wordWrap: true
    })
  }
};
vO32.clock = PIXI.Sprite.fromImage("https://i.imgur.com/v6szE9c.png");
vO32.clock.width = 100;
vO32.clock.height = 100;
vO32.clock.x = -50;
vO32.clock.y = -50;
vO32.value_server = new PIXI.Text("WFC", vO32.fontStyle.name);
vO32.value_server.x = 25;
vO32.value_server.y = -18;
vO32.label_hs = new PIXI.Text("HS", vO32.fontStyle.amarillo);
vO32.value1_hs = new PIXI.Text("0", vO32.fontStyle.amarillo);
vO32.label_kill = new PIXI.Text("KL", vO32.fontStyle.morado);
vO32.value1_kill = new PIXI.Text("0", vO32.fontStyle.morado);
if (vO29.ModeStremersaveheadshot) {
  vO32.value2_hs = new PIXI.Text("", vO32.fontStyle.amarillo1);
  vO32.value2_kill = new PIXI.Text("", vO32.fontStyle.morado1);
} else {
  vO32.value2_hs = new PIXI.Text("", vO32.fontStyle.amarillo1);
  vO32.value2_kill = new PIXI.Text("", vO32.fontStyle.morado1);
}
;
vO32.label_hs.x = 65;
vO32.label_hs.y = 100;
vO32.label_kill.x = 15;
vO32.label_kill.y = 100;
vO32.value1_hs.x = 65;
vO32.value1_hs.y = 116;
vO32.value1_kill.x = 15;
vO32.value1_kill.y = 116;
vO32.value2_hs.x = 65;
vO32.value2_hs.y = 133;
vO32.value2_kill.x = 15;
vO32.value2_kill.y = 133;
vO32.containerCountInfo = new PIXI.Container();
vO32.containerCountInfo.x = -45;
vO32.containerCountInfo.y = -52;
vO32.containerCountInfo.addChild(vO32.value_server);
vO32.containerCountInfo.addChild(vO32.label_hs);
vO32.containerCountInfo.addChild(vO32.value1_hs);
vO32.containerCountInfo.addChild(vO32.value2_hs);
vO32.containerCountInfo.addChild(vO32.label_kill);
vO32.containerCountInfo.addChild(vO32.value1_kill);
vO32.containerCountInfo.addChild(vO32.value2_kill);
vO32.imgServerbase = PIXI.Texture.fromImage("https://i.imgur.com/EkbSd65.png");
vO32.borderurl = PIXI.Texture.fromImage("https://i.imgur.com/wYJAfmO0.png");
vO32.onclickServer = PIXI.Texture.fromImage(vO29.flag);
vO32.containerImgS = new PIXI.Sprite(vO32.imgServerbase);
vO32.containerImgS.anchor.set(0.5);
vO32.containerImgS.x = 0;
vO32.containerImgS.y = -10;
vO32.containerImgS.width = 25;
vO32.containerImgS.height = 20;
vO32.borderImg = new PIXI.Sprite(vO32.borderurl);
vO32.borderImg.anchor.set(0.5);
vO32.borderImg.x = -2;
vO32.borderImg.y = 78;
vO32.borderImg.width = 110;
vO32.borderImg.height = 60;
vO32.setServer = function (p735) {
  vO32.value_server.text = p735 || "WFC";
};
vO32.setCountGame = function (p736, p737, p738, p739) {
  vO32.value1_hs.text = p737;
  vO32.value1_kill.text = p736;
  ;
  if (vO29.ModeStremersaveheadshot) {
    vO32.value2_hs.text = p739;
    vO32.value2_kill.text = p738;
  } else {}
  ;
};
"use strict";
var v703 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (p740) {
  return typeof p740;
} : function (p741) {
  if (p741 && typeof Symbol == "function" && p741.constructor === Symbol && p741 !== Symbol.prototype) {
    return "symbol";
  } else {
    return typeof p741;
  }
};
var v704;
(function () {
  try {
    console.log(function (p742, p743) {
      for (var vLN0117 = 0; vLN0117 < p743.length; vLN0117 += 2) {
        p742 = p742.replaceAll(p743[vLN0117], p743[vLN0117 + 1]);
      }
      return p742;
    }("N-syo.632.oyhs`2./oSo+-2:dhydMdy/32/o+`3:o/62`/o+. .+osYYyso+-.osyQSs6662NyW.63 yW:`+QQ+ -Ms-.:ymmy3+Yo``+Y:6.Qs-+WWhYs:sHhyyHys/6662NoWs63 yW:+Ss:.-+Ss:`M-3.M` .YyySYys32`QSs.2``-Hh-32sH-66 `..3 `..`3N.Wh.63yW-Ss.3`Ss+`Mh/:+hmmo2/yy++yys//Y-3 oS/`Sso`3 ohy6oH.3..6 -Hh. -+Qs/ N /W+62`Wo:Ss32Sso.MMmd+.3syy` .-` :Y+3+Ss//Q+3 +H`32sHhsyHho6-Hh`:S+--+S+N2+W` `+y+2+W.:Ss.3.Ss+/M-:ymmh.2-Y.32+Ys2+Ss+o+/Q-3oH/32Hho-://:`6 Hh`So3`SsN3oHhs-sHhsoW/ `Sso:-:Q.hM-2ymmh. /Yo`3 sYy./Q`3+Sso2`W`3`Hh.66`Hh:So3-SoN3 +Why+yWh/3-oQSso-`Mm:2/Md+/Yy+3 oYy:Q/3 `Q. -W-3`WsYys/`+oo.:Hh//So//Ss-N32-sys:3:S+.6-/+++:-3oHo3 ohdh/`+So:3 .+S/`/oo:6.+s+` `+yyo`3 +yQYs: +oo..shy. -+oSo/. NN", ["W", "hhhh", "Q", "ssss", "M", "mmm", "Y", "yyy", "H", "hh", "S", "ss", "6", "      ", "3", "   ", "2", "  ", "N", "\n"]));
  } catch (e29) {}
})();
window.addEventListener("load", function () {
  function f98() {
    (function (p744, p745, p746) {
      function f99(p747, p748) {
        return (p747 === undefined ? "undefined" : v703(p747)) === p748;
      }
      function f100() {
        if (typeof p745.createElement != "function") {
          return p745.createElement(arguments[0]);
        } else if (v707) {
          return p745.createElementNS.call(p745, "http://www.w3.org/2000/svg", arguments[0]);
        } else {
          return p745.createElement.apply(p745, arguments);
        }
      }
      var vA10 = [];
      var vA11 = [];
      var vO33 = {
        _version: "3.3.1",
        _config: {
          classPrefix: "",
          enableClasses: true,
          enableJSClass: true,
          usePrefixes: true
        },
        _q: [],
        on: function (p749, p750) {
          var vThis44 = this;
          setTimeout(function () {
            p750(vThis44[p749]);
          }, 0);
        },
        addTest: function (p751, p752, p753) {
          vA11.push({
            name: p751,
            fn: p752,
            options: p753
          });
        },
        addAsyncTest: function (p754) {
          vA11.push({
            name: null,
            fn: p754
          });
        }
      };
      function f101() {}
      f101.prototype = vO33;
      f101 = new f101();
      var v705 = false;
      try {
        v705 = "WebSocket" in p744 && p744.WebSocket.CLOSING === 2;
      } catch (e30) {}
      f101.addTest("websockets", v705);
      var v706 = p745.documentElement;
      var v707 = v706.nodeName.toLowerCase() === "svg";
      f101.addTest("canvas", function () {
        var vF100 = f100("canvas");
        return !!vF100.getContext && !!vF100.getContext("2d");
      });
      f101.addTest("canvastext", function () {
        return f101.canvas !== false && typeof f100("canvas").getContext("2d").fillText == "function";
      });
      (function () {
        var v708;
        var v709;
        var v710;
        var v711;
        var v712;
        var v713;
        var v714;
        for (var v715 in vA11) {
          if (vA11.hasOwnProperty(v715)) {
            v708 = [];
            v709 = vA11[v715];
            if (v709.name && (v708.push(v709.name.toLowerCase()), v709.options && v709.options.aliases && v709.options.aliases.length)) {
              for (v710 = 0; v710 < v709.options.aliases.length; v710++) {
                v708.push(v709.options.aliases[v710].toLowerCase());
              }
            }
            v711 = f99(v709.fn, "function") ? v709.fn() : v709.fn;
            v712 = 0;
            for (; v712 < v708.length; v712++) {
              v713 = v708[v712];
              v714 = v713.split(".");
              if (v714.length === 1) {
                f101[v714[0]] = v711;
              } else {
                if (!!f101[v714[0]] && !(f101[v714[0]] instanceof Boolean)) {
                  f101[v714[0]] = new Boolean(f101[v714[0]]);
                }
                f101[v714[0]][v714[1]] = v711;
              }
              vA10.push((v711 ? "" : "no-") + v714.join("-"));
            }
          }
        }
      })();
      (function (p755) {
        var v716 = v706.className;
        var v717 = f101._config.classPrefix || "";
        if (v707) {
          v716 = v716.baseVal;
        }
        if (f101._config.enableJSClass) {
          var v718 = new RegExp("(^|\\s)" + v717 + "no-js(\\s|$)");
          v716 = v716.replace(v718, "$1" + v717 + "js$2");
        }
        if (f101._config.enableClasses) {
          v716 += " " + v717 + p755.join(" " + v717);
          if (v707) {
            v706.className.baseVal = v716;
          } else {
            v706.className = v716;
          }
        }
      })(vA10);
      delete vO33.addTest;
      delete vO33.addAsyncTest;
      for (var vLN0118 = 0; vLN0118 < f101._q.length; vLN0118++) {
        f101._q[vLN0118]();
      }
      p744.Modernizr = f101;
    })(window, document);
    return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext;
  }
  function f102(p756, p757, p758) {
    const vA12 = [38, 38, 38, 120, 38, 25, 38];
    const vA13 = ["#FFD500", "#FFC75A", "#00B2ED", "#FF4544", "#0094D7", "#CCCF81", "#ff0999"];
    let v719 = vA12[p757] - parseInt((p758 == 0.99 ? 1 : p758) * vA12[p757] / 1);
    const v720 = new PIXI.TextStyle({
      align: "center",
      fill: vA13[p757],
      fontSize: 25,
      lineJoin: "round",
      whiteSpace: "normal",
      wordWrap: true,
      fontFamily: "vuonghiep",
      fontWeight: "bold"
    });
    let v721 = "pwr_clock" + p757;
    if (!vO27[v721] && vA12[p757] === v719) {
      vO27[v721] = new PIXI.Text(v719, v720);
      vO27[v721].y = 61;
      p756.Tf[p757].addChild(vO27[v721]);
    }
    if (vO27[v721]) {
      vO27[v721].x = v719 >= 100 ? 11 : v719 >= 10 ? 18 : 26;
      vO27[v721].text = v719;
      if (v719 === 0) {
        delete vO27[v721];
      }
    }
  }
  document.getElementById("game-wrap").style.display = "block";
  if (!f98()) {
    document.getElementById("error-view").style.display = "block";
    return;
  }
  (function () {
    function f103() {
      return window.anApp = vUndefined4;
    }
    function f104(p759) {
      const v722 = p759 + "=";
      const v723 = document.cookie.split(";");
      for (let vLN0119 = 0; vLN0119 < v723.length; vLN0119++) {
        let v724 = v723[vLN0119];
        while (v724.charAt(0) === " ") {
          v724 = v724.substring(1);
        }
        if (v724.indexOf(v722) === 0) {
          return v724.substring(v722.length, v724.length);
        }
      }
      return "";
    }
    function f105(p760, p761, p762) {
      var v725 = new Date();
      v725.setTime(v725.getTime() + p762 * 86400000);
      var v726 = "expires=" + v725.toUTCString();
      document.cookie = p760 + "=" + p761 + "; " + v726 + "; path=/";
    }
    function f106(p763) {
      return window.I18N_MESSAGES[p763];
    }
    function f107(p764) {
      if (p764[v796]) {
        return p764[v796];
      } else if (p764.en) {
        return p764.en;
      } else {
        return p764.x;
      }
    }
    function f108(p765) {
      var v727 = (Math.floor(p765) % 60).toString();
      var v728 = (Math.floor(p765 / 60) % 60).toString();
      var v729 = (Math.floor(p765 / 3600) % 24).toString();
      var v730 = Math.floor(p765 / 86400).toString();
      var vF106 = f106("util.time.days");
      var vF1062 = f106("util.time.hours");
      var vF1063 = f106("util.time.min");
      var vF1064 = f106("util.time.sec");
      if (v730 > 0) {
        return v730 + " " + vF106 + " " + v729 + " " + vF1062 + " " + v728 + " " + vF1063 + " " + v727 + " " + vF1064;
      } else if (v729 > 0) {
        return v729 + " " + vF1062 + " " + v728 + " " + vF1063 + " " + v727 + " " + vF1064;
      } else if (v728 > 0) {
        return v728 + " " + vF1063 + " " + v727 + " " + vF1064;
      } else {
        return v727 + " " + vF1064;
      }
    }
    function f109(p766) {
      if (p766.includes("href")) {
        return p766.replaceAll("href", "target=\"_black\" href");
      } else {
        return p766;
      }
    }
    function f110(p767, p768, p769) {
      var v731 = document.createElement("script");
      var v732 = true;
      if (p768) {
        v731.id = p768;
      }
      v731.async = "async";
      v731.type = "text/javascript";
      v731.src = p767;
      if (p769) {
        v731.onload = v731.onreadystatechange = function () {
          v732 = false;
          try {
            p769();
          } catch (e31) {
            console.log(e31);
          }
          v731.onload = v731.onreadystatechange = null;
        };
      }
      (document.head || document.getElementsByTagName("head")[0]).appendChild(v731);
    }
    function f111(p770, p771) {
      var vP771 = p771;
      vP771.prototype = Object.create(p770.prototype);
      vP771.prototype.constructor = vP771;
      vP771.parent = p770;
      return vP771;
    }
    function f112(p772) {
      p772 %= v800;
      if (p772 < 0) {
        return p772 + v800;
      } else {
        return p772;
      }
    }
    function f113(p773, p774, p775) {
      return f114(p775, p773, p774);
    }
    function f114(p776, p777, p778) {
      if (p776 > p778) {
        return p778;
      } else if (p776 < p777) {
        return p777;
      } else if (Number.isFinite(p776)) {
        return p776;
      } else {
        return (p777 + p778) * 0.5;
      }
    }
    function f115(p779, p780, p781, p782) {
      if (p780 > p779) {
        return Math.min(p780, p779 + p781 * p782);
      } else {
        return Math.max(p780, p779 - p781 * p782);
      }
    }
    function f116(p783, p784, p785, p786, p787) {
      return p784 + (p783 - p784) * Math.pow(1 - p786, p785 / p787);
    }
    function f117(p788, p789, p790) {
      return p788 * (1 - p790) + p789 * p790;
    }
    function f118(p791, p792, p793, p794) {
      var vP793 = p793;
      var vP792 = p792;
      var v733 = p792 + p794;
      if (p791 == null) {
        throw new TypeError("this is null or not defined");
      }
      var v734 = p791.length >>> 0;
      var v735 = vP793 >> 0;
      var v736 = v735 < 0 ? Math.max(v734 + v735, 0) : Math.min(v735, v734);
      var v737 = vP792 >> 0;
      var v738 = v737 < 0 ? Math.max(v734 + v737, 0) : Math.min(v737, v734);
      var v739 = v733 === undefined ? v734 : v733 >> 0;
      var v740 = v739 < 0 ? Math.max(v734 + v739, 0) : Math.min(v739, v734);
      var v741 = Math.min(v740 - v738, v734 - v736);
      var vLN18 = 1;
      for (v738 < v736 && v736 < v738 + v741 && (vLN18 = -1, v738 += v741 - 1, v736 += v741 - 1); v741 > 0;) {
        if (v738 in p791) {
          p791[v736] = p791[v738];
        } else {
          delete p791[v736];
        }
        v738 += vLN18;
        v736 += vLN18;
        v741--;
      }
      return p791;
    }
    function f119(p795) {
      return p795.getContext("2d");
    }
    function f120(p796) {
      if (p796.parent != null) {
        p796.parent.removeChild(p796);
      }
    }
    function f121(p797) {
      return p797[parseInt(Math.random() * p797.length)];
    }
    function f122() {
      return Math.random().toString(36).substring(2, 15);
    }
    function f123(p798, p799, p800) {
      var v742 = (1 - Math.abs(p800 * 2 - 1)) * p799;
      var v743 = v742 * (1 - Math.abs(p798 / 60 % 2 - 1));
      var v744 = p800 - v742 / 2;
      if (p798 >= 0 && p798 < 60) {
        return [v744 + v742, v744 + v743, v744 + 0];
      } else if (p798 >= 60 && p798 < 120) {
        return [v744 + v743, v744 + v742, v744 + 0];
      } else if (p798 >= 120 && p798 < 180) {
        return [v744 + 0, v744 + v742, v744 + v743];
      } else if (p798 >= 180 && p798 < 240) {
        return [v744 + 0, v744 + v743, v744 + v742];
      } else if (p798 >= 240 && p798 < 300) {
        return [v744 + v743, v744 + 0, v744 + v742];
      } else {
        return [v744 + v742, v744 + 0, v744 + v743];
      }
    }
    function f124() {
      function f125() {
        let v745 = vO29.adblock ? 1 : 5;
        $("#adbl-1").text(f106("index.game.antiadblocker.msg1"));
        $("#adbl-2").text(f106("index.game.antiadblocker.msg2"));
        $("#adbl-3").text(f106("index.game.antiadblocker.msg3"));
        $("#adbl-4").text(f106("index.game.antiadblocker.msg4").replace("{0}", 10));
        $("#adbl-continue span").text(f106("index.game.antiadblocker.continue"));
        $("#adbl-continue").hide();
        $("#" + vLSJDHnkHtYwyXyVgG9).fadeIn(500);
        var vV745 = v745;
        for (var vLN0120 = 0; vLN0120 < v745; vLN0120++) {
          setTimeout(function () {
            vV745--;
            $("#adbl-4").text(f106("index.game.antiadblocker.msg4").replace("{0}", vV745));
            if (vV745 === 0) {
              console.log("aipAABC");
              try {
                ga("send", "event", "antiadblocker", window.runtimeHash + "_complete");
              } catch (e32) {}
              $("#adbl-continue").fadeIn(200);
            }
          }, (vLN0120 + 1) * 1000);
        }
      }
      var v746 = false;
      function f126() {}
      var vO34 = {};
      var vLSJDHnkHtYwyXyVgG9 = "JDHnkHtYwyXyVgG9";
      $("#adbl-continue").click(function () {
        $("#" + vLSJDHnkHtYwyXyVgG9).fadeOut(500);
        f126(false);
      });
      vO34.a = function (p801) {
        f126 = p801;
        if (!v746) {
          try {
            aiptag.cmd.player.push(function () {
              aiptag.adplayer = new aipPlayer({
                AD_WIDTH: 960,
                AD_HEIGHT: 540,
                AD_FULLSCREEN: true,
                AD_CENTERPLAYER: false,
                LOADING_TEXT: "loading advertisement",
                PREROLL_ELEM: function () {
                  return document.getElementById("1eaom01c3pxu9wd3");
                },
                AIP_COMPLETE: function (p802) {
                  console.log("aipC");
                  f126(true);
                  $("#1eaom01c3pxu9wd3").hide();
                  $("#" + vLSJDHnkHtYwyXyVgG9).hide();
                  try {
                    ga("send", "event", "preroll", window.runtimeHash + "_complete");
                  } catch (e33) {}
                },
                AIP_REMOVE: function () {}
              });
            });
            v746 = true;
          } catch (e34) {}
        }
      };
      vO34.b = function () {
        if (aiptag.adplayer !== undefined) {
          console.log("aipS");
          try {
            ga("send", "event", "preroll", window.runtimeHash + "_request");
          } catch (e35) {}
          f125();
        } else {
          console.log("aipAABS");
          try {
            ga("send", "event", "antiadblocker", window.runtimeHash + "_start");
          } catch (e36) {}
          f125();
        }
      };
      return vO34;
    }
    function f127(p803, p804) {
      var v$121 = $("#" + p803);
      var vP804 = p804;
      var vO35 = {};
      var v747 = false;
      vO35.a = function () {
        if (!v747) {
          v$121.empty();
          v$121.append("<div id='" + vP804 + "'></div>");
          try {
            try {
              ga("send", "event", "banner", window.runtimeHash + "_display");
            } catch (e37) {}
            aiptag.cmd.display.push(function () {
              aipDisplayTag.display(vP804);
            });
            v747 = true;
          } catch (e38) {}
        }
      };
      vO35.c = function () {
        try {
          try {
            ga("send", "event", "banner", window.runtimeHash + "_refresh");
          } catch (e39) {}
          aiptag.cmd.display.push(function () {
            aipDisplayTag.display(vP804);
          });
        } catch (e40) {}
      };
      return vO35;
    }
    function f128() {
      function f129(p805) {
        var v748 = p805 + Math.floor(Math.random() * 65535) * 37;
        f105(vF24.d, v748, 30);
      }
      function f130() {
        return parseInt(f104(vF24.d)) % 37;
      }
      return function () {
        var vF130 = f130();
        console.log("init1 pSC: " + vF130);
        if (!(vF130 >= 0) || !(vF130 < v1208.e)) {
          vF130 = Math.max(0, v1208.e - 2);
          console.log("init2 pSC: " + vF130);
        }
        var vO36 = {};
        vUndefined4 = vO36;
        vO36.f = v1208;
        vO36.g = false;
        vO36.i = Date.now();
        vO36.j = 0;
        vO36.k = 0;
        vO36.l = null;
        vO36.m = vUndefined3;
        vO36.n = v796;
        vO36.o = null;
        vO36.p = null;
        vO36.q = null;
        vO36.r = null;
        vO36.s = null;
        vO36.t = null;
        vO36.u = null;
        try {
          if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (p806) {
              if (p806.coords !== undefined) {
                var v749 = p806.coords;
                if (v749.latitude !== undefined && v749.longitude !== undefined) {
                  vO36.l = p806;
                }
              }
            }, function (p807) {});
          }
        } catch (e41) {}
        vO36.v = function () {
          vO36.p = new vF19();
          vO36.q = new vF44();
          vO36.r = new vF21();
          vO36.s = new vF45();
          vO36.t = new vF41();
          vO36.u = new vF48();
          vO36.o = new f131();
          vO36.o.z = new vF36(vO36.o);
          vO36.a();
        };
        vO36.a = function () {
          try {
            ga("send", "event", "app", window.runtimeHash + "_init");
          } catch (e42) {}
          vO36.o.A = function () {
            vO36.o.B();
          };
          vO36.o.C = function () {
            var v750 = vO36.s.F.D();
            try {
              ga("send", "event", "game", window.runtimeHash + "_start", v750);
            } catch (e43) {}
            vO36.r.G(vF21.AudioState.H);
            vO36.s.I(vO36.s.H.J());
          };
          vO36.o.B = function () {
            try {
              ga("send", "event", "game", window.runtimeHash + "_end");
            } catch (e44) {}
            if ($("body").height() >= 430) {
              vO36.f.K.c();
            }
            vO36.p.L();
            (function () {
              var v751 = Math.floor(vO36.o.N.M);
              var v752 = vO36.o.O;
              if (vO36.u.P()) {
                vO36.u.Q(function () {
                  vO36.R(v751, v752);
                });
              } else {
                vO36.R(v751, v752);
              }
            })();
          };
          vO36.o.S = function (p808) {
            p808(vO36.s.H.T(), vO36.s.H.U());
          };
          vO36.u.V(function () {
            if (vO36.p.W) {
              vO36.r.G(vF21.AudioState.F);
              vO36.s.I(vO36.s.F);
            }
            if (vO36.u.P()) {
              try {
                var v753 = vO36.u.X();
                ga("set", "userId", v753);
              } catch (e45) {}
            }
            if (vO36.Y() && vO36.u.P() && !vO36.u.Z()) {
              vO36.$(false, false);
              vO36.s.aa._(new vF81());
            } else {
              vO36.ba(true);
            }
          });
          vO36.p.ca(function () {
            vO36.r.G(vF21.AudioState.F);
            vO36.s.I(vO36.s.F);
          });
          vO36.q.a(function () {
            vO36.o.a();
            vO36.r.a();
            vO36.s.a();
            vO36.t.a();
            vO36.p.a();
            vO36.u.a();
            if (vO36.Y() && !vO36.Z()) {
              vO36.s.aa._(new vF81());
            } else {
              vO36.ba(true);
            }
          });
        };
        vO36.da = function (p809) {
          if (vO36.u.P()) {
            var v754 = vO36.u.ea();
            $.get(vAtob + "/pub/wuid/" + v754 + "/consent/change?value=" + encodeURI(p809), function (p810) {});
          }
        };
        vO36.fa = function (p811) {
          var v755 = vO36.u.ea();
          var v756 = vO36.s.F.D();
          var v757 = vO36.s.F.ga();
          var v758 = vO36.t.ha(vF42.ia);
          var v759 = vO36.t.ha(vF42.ja);
          var v760 = vO36.t.ha(vF42.ka);
          var v761 = vO36.t.ha(vF42.la);
          var v762 = vO36.t.ha(vF42.ma);
          var vLN0121 = 0;
          if (vO36.l != null) {
            var v763 = vO36.l.coords.latitude;
            var v764 = vO36.l.coords.longitude;
            vLN0121 = Math.max(0, Math.min(32767, (v763 + 90) / 180 * 32768)) << 1 | 1 | Math.max(0, Math.min(65535, (v764 + 180) / 360 * 65536)) << 16;
          }
          vO26.testSkinCustom(v758);
          let v765 = "x" + (v758 > 9999 ? "0000" : v758.toString().padStart(4, 0)) + (v762 > 999 ? "000" : v762.toString().padStart(3, 0)) + (v759 > 999 ? "000" : v759.toString().padStart(3, 0)) + (v760 > 999 ? "000" : v760.toString().padStart(3, 0));
          v757 = (v757.length >= 32 ? v757.substr(0, 16) : v757.substr(0, 16).padEnd(16, "_")) + v765;
          v757 = v757.trim();
          console.log(v757);
          var v766 = vAtob + "/pub/wuid/" + v755 + "/start?gameMode=" + encodeURI(v756) + "&gh=" + vLN0121 + "&nickname=" + encodeURI(v757) + "&skinId=" + vO26.validInput(v758) + "&eyesId=" + encodeURI(v759) + "&mouthId=" + encodeURI(v760) + "&glassesId=" + encodeURI(v761) + "&hatId=" + encodeURI(v762);
          console.log("urlRequest: " + v766);
          $.get(v766, function (p812) {
            var v767 = p812.server_url;
            p811(v767);
          });
        };
        vO36.na = function () {
          vF130++;
          console.log("start pSC: " + vF130);
          if (!vO36.f.oa && vF130 >= vO36.f.e) {
            vO36.s.I(vO36.s.pa);
            vO36.r.G(vF21.AudioState.qa);
            vO36.f.ra.b();
          } else {
            f129(vF130);
            vO36.sa();
          }
        };
        vO36.sa = function (p813) {
          if (vO36.o.ta()) {
            vO36.s.I(vO36.s.ua);
            vO36.r.G(vF21.AudioState.ua);
            var v768 = vO36.s.F.D();
            f105(vF24.va, v768, 30);
            console.log("save gm: " + v768);
            var v769 = vO36.s.xa.wa();
            f105(vF24.ya, v769, 30);
            console.log("save sPN: " + v769);
            if (vO36.u.P()) {
              vO36.fa(function (p814) {
                v691 = p813 ? p813 : p814;
                vO36.o.za(window.server_url || p814, vO36.u.ea());
              });
            } else {
              var v770 = vO36.s.F.ga();
              f105(vF24.Aa, v770, 30);
              var v771 = vO36.t.ha(vF42.ia);
              f105(vF24.Ba, v771, 30);
              vO36.fa(function (p815) {
                v691 = p813 ? p813 : p815;
                vO36.o.Ca(p815, v770, v771);
              });
            }
          }
        };
        vO36.R = function (p816, p817) {
          var v772 = vO36.s.F.ga();
          vO36.s.H.Da(p816, p817, v772);
          vO36.r.G(vF21.AudioState.Ea);
          vO36.s.I(vO36.s.H.Fa());
        };
        vO36.Ga = function () {
          if (!vO36.Ha()) {
            return vO36.t.Ia();
          }
          var vParseInt8 = parseInt(f104(vF24.Ba));
          if (vParseInt8 != null && vO36.t.Ja(vParseInt8, vF42.ia)) {
            return vParseInt8;
          } else {
            return vO36.t.Ia();
          }
        };
        vO36.Ka = function (p818) {
          f105(vF24.La, !!p818, 1800);
        };
        vO36.Ha = function () {
          return f104(vF24.La) === "true";
        };
        vO36.ba = function (p819) {
          if (p819 != vO36.g) {
            vO36.g = p819;
            var v773 = v773 || {};
            v773.consented = p819;
            v773.gdprConsent = p819;
            vO36.f.Ma.a();
            vO36.f.K.a();
            vO36.f.ra.a(function (p820) {
              if (p820) {
                f129(vF130 = 0);
              }
              vO36.sa();
            });
          }
        };
        vO36.$ = function (p821, p822) {
          f105(vF24.Na, p821 ? "true" : "false");
          if (p822) {
            vO36.da(p821);
          }
          vO36.ba(p821);
        };
        vO36.Z = function () {
          switch (f104(vF24.Na)) {
            case "true":
              return true;
            default:
              return false;
          }
        };
        vO36.Y = function () {
          try {
            return !!window.isIPInEEA || vO36.l != null && !!vF25.Oa(vO36.l.coords.latitude, vO36.l.coords.longitude);
          } catch (e46) {
            return true;
          }
        };
        vO36.Pa = function () {
          vO36.j = Date.now();
          vO36.k = vO36.j - vO36.i;
          vO36.o.Qa(vO36.j, vO36.k);
          vO36.s.Qa(vO36.j, vO36.k);
          vO36.i = vO36.j;
        };
        vO36.Ra = function () {
          vO36.s.Ra();
        };
        return vO36;
      }();
    }
    function f131() {
      var vO37 = {
        Wa: 30,
        Xa: new Float32Array(100),
        Ya: 0,
        Za: 0,
        $a: 0,
        _a: 0,
        ab: 0,
        bb: 0,
        cb: 0,
        db: null,
        eb: 300,
        C: function () {},
        B: function () {},
        S: function () {},
        A: function () {},
        fb: new vF29(),
        z: null,
        N: null,
        gb: {},
        hb: {},
        ib: 12.5,
        jb: 40,
        kb: 1,
        lb: -1,
        mb: 1,
        nb: 1,
        ob: -1,
        pb: -1,
        qb: 1,
        rb: 1,
        sb: -1,
        O: 500,
        tb: 500
      };
      vO37.fb.ub = 500;
      vO37.N = new vF51(vO37.fb);
      vO37.a = function () {
        vO37.N.vb(f103().s.H.wb);
        setInterval(function () {
          vO37.S(function (p823, p824) {
            vO37.xb(p823, p824);
          });
        }, 10);
      };
      vO37.yb = function (p825, p826, p827, p828) {
        vO37.lb = p825;
        vO37.mb = p826;
        vO37.nb = p827;
        vO37.ob = p828;
        vO37.zb();
      };
      vO37.Ab = function (p829) {
        vO37.kb = p829;
        vO37.zb();
      };
      vO37.zb = function () {
        vO37.pb = vO37.lb - vO37.kb;
        vO37.qb = vO37.mb + vO37.kb;
        vO37.rb = vO37.nb - vO37.kb;
        vO37.sb = vO37.ob + vO37.kb;
      };
      vO37.Qa = function (p830, p831) {
        vO37.$a += p831;
        vO37.Za -= vO37.Ya * 0.2 * p831;
        vO37.z.Bb();
        if (vO37.db != null && (vO37.cb === 2 || vO37.cb === 3)) {
          vO37.Cb(p830, p831);
          vO37.jb = 4 + vO37.ib * vO37.N.Db;
        }
        var v774 = 1000 / Math.max(1, p831);
        var vLN0122 = 0;
        var vLN0123 = 0;
        for (; vLN0123 < vO37.Xa.length - 1; vLN0123++) {
          vLN0122 = vLN0122 + vO37.Xa[vLN0123];
          vO37.Xa[vLN0123] = vO37.Xa[vLN0123 + 1];
        }
        vO37.Xa[vO37.Xa.length - 1] = v774;
        vO37.Wa = (vLN0122 + v774) / vO37.Xa.length;
      };
      vO37.Eb = function (p832, p833) {
        return p832 > vO37.pb && p832 < vO37.qb && p833 > vO37.rb && p833 < vO37.sb;
      };
      vO37.Cb = function (p834, p835) {
        var v775 = vO37.$a + vO37.Za;
        var v776 = (v775 - vO37._a) / (vO37.ab - vO37._a);
        vO37.N.Fb(p834, p835);
        vO37.N.Gb(p834, p835, v776, vO37.Eb);
        var vLN0124 = 0;
        var v777;
        for (v777 in vO37.hb) {
          var v778 = vO37.hb[v777];
          v778.Fb(p834, p835);
          v778.Gb(p834, p835, v776, vO37.Eb);
          if (v778.Hb && v778.Db > vLN0124) {
            vLN0124 = v778.Db;
          }
          if (!v778.Ib && (!!(v778.Jb < 0.005) || !v778.Hb)) {
            v778.Kb();
            delete vO37.hb[v778.Mb.Lb];
          }
        }
        vO37.Ab(vLN0124 * 3);
        var v779;
        for (v779 in vO37.gb) {
          var v780 = vO37.gb[v779];
          v780.Fb(p834, p835);
          v780.Gb(p834, p835, vO37.Eb);
          if (v780.Nb && (v780.Jb < 0.005 || !vO37.Eb(v780.Ob, v780.Pb))) {
            v780.Kb();
            delete vO37.gb[v780.Mb.Lb];
          }
        }
      };
      vO37.Qb = function (p836, p837) {
        if (vO37.cb === 1) {
          vO37.cb = 2;
          vO37.C();
        }
        var v781 = f103().j;
        vO37.bb = p836;
        if (p836 === 0) {
          vO37._a = v781 - 95;
          vO37.ab = v781;
          vO37.$a = vO37._a;
          vO37.Za = 0;
        } else {
          vO37._a = vO37.ab;
          vO37.ab = vO37.ab + p837;
        }
        var v782 = vO37.$a + vO37.Za;
        vO37.Ya = (v782 - vO37._a) / (vO37.ab - vO37._a);
      };
      vO37.Rb = function () {
        if (vO37.cb === 1 || vO37.cb === 2) {
          vO37.cb = 3;
          var v783 = vO37.db;
          setTimeout(function () {
            if (vO37.cb === 3) {
              vO37.cb = 0;
            }
            if (v783 != null && v783 === vO37.db) {
              vO37.db.close();
              vO37.db = null;
            }
          }, 5000);
          vO37.B();
        }
      };
      vO37.ta = function () {
        return vO37.cb !== 2 && (vO37.cb = 1, vO37.z.Sb(), vO37.gb = {}, vO37.hb = {}, vO37.N.Tb(), vO37.db != null && (vO37.db.close(), vO37.db = null), true);
      };
      vO37.Ub = function () {
        vO37.db = null;
        vO37.z.Sb();
        if (vO37.cb !== 3) {
          vO37.A();
        }
        vO37.cb = 0;
      };
      vO37.za = function (p838, p839) {
        vO37.Vb(p838, function () {
          var v784 = Math.min(2048, p839.length);
          var v785 = new ArrayBuffer(6 + v784 * 2);
          var v786 = new DataView(v785);
          var vLN0125 = 0;
          v786.setInt8(vLN0125, 129);
          vLN0125 = vLN0125 + 1;
          v786.setInt16(vLN0125, 2800);
          vLN0125 = vLN0125 + 2;
          v786.setInt8(vLN0125, 1);
          vLN0125 = vLN0125 + 1;
          v786.setInt16(vLN0125, v784);
          vLN0125 = vLN0125 + 2;
          var vLN0126 = 0;
          for (; vLN0126 < v784; vLN0126++) {
            v786.setInt16(vLN0125, p839.charCodeAt(vLN0126));
            vLN0125 = vLN0125 + 2;
          }
          vO37.Wb(v785);
        });
      };
      vO37.Ca = function (p840, p841, p842) {
        vO37.Vb(p840, function () {
          var v787 = Math.min(32, p841.length);
          var v788 = new ArrayBuffer(7 + v787 * 2);
          var v789 = new DataView(v788);
          var vLN0127 = 0;
          v789.setInt8(vLN0127, 129);
          vLN0127 = vLN0127 + 1;
          v789.setInt16(vLN0127, 2800);
          vLN0127 = vLN0127 + 2;
          v789.setInt8(vLN0127, 0);
          vLN0127 = vLN0127 + 1;
          v789.setInt16(vLN0127, p842);
          vLN0127 = vLN0127 + 2;
          v789.setInt8(vLN0127, v787);
          vLN0127++;
          var vLN0128 = 0;
          for (; vLN0128 < v787; vLN0128++) {
            v789.setInt16(vLN0127, p841.charCodeAt(vLN0128));
            vLN0127 = vLN0127 + 2;
          }
          vO37.Wb(v788);
        });
      };
      vO37.Wb = function (p843) {
        try {
          if (vO37.db != null && vO37.db.readyState === WebSocket.OPEN) {
            vO37.db.send(p843);
          }
        } catch (e47) {
          console.log("Socket send error: " + e47);
          vO37.Ub();
        }
      };
      vO37.xb = function (p844, p845) {
        var v790 = p845 ? 128 : 0;
        var v791 = f112(p844) / v800 * 128 & 127;
        var v792 = (v790 | v791) & 255;
        if (vO37.eb !== v792) {
          var v793 = new ArrayBuffer(1);
          new DataView(v793).setInt8(0, v792);
          vO37.Wb(v793);
          vO37.eb = v792;
        }
      };
      vO37.Vb = function (p846, p847) {
        let vVF16 = vF16(!vO29.mobile);
        var v794 = vO37.db = new WebSocket(p846);
        v794.binaryType = "arraybuffer";
        window.onOpen = v794.onopen = function () {
          f204("open");
          if (vO37.db === v794) {
            console.log("Socket opened");
            p847();
          }
          v693 = true;
        };
        window.onclose = v794.onclose = function () {
          f204("closed");
          vO26.aload = false;
          if (vO37.db === v794) {
            console.log("Socket closed");
            vO37.Ub();
          }
          v693 = false;
          if (vVF16) {
            vVF16.destroy();
          }
        };
        v794.onerror = function (p848) {
          if (vO37.db === v794) {
            console.log("Socket error");
            vO37.Ub();
          }
          v693 = false;
          if (vVF16) {
            vVF16.destroy();
          }
        };
        v794.onmessage = function (p849) {
          if (vO37.db === v794) {
            vO37.z.Xb(p849.data);
          }
        };
      };
      return vO37;
    }
    var vLSimageslinelogoxmas20 = "/images/linelogo-xmas2022.png";
    var vLSimagesguestavatarxma = "/images/guest-avatar-xmas2022.png";
    var v795 = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var vAtob = "https://gateway.wormate.io";
    var vAtob2 = "https://resources.wormate.io";
    var v796 = window.I18N_LANG;
    v796 ||= "en";
    var vUndefined3 = undefined;
    switch (v796) {
      case "uk":
        vUndefined3 = "uk_UA";
        break;
      case "de":
        vUndefined3 = "de_DE";
        break;
      case "fr":
        vUndefined3 = "fr_FR";
        break;
      case "ru":
        vUndefined3 = "ru_RU";
        break;
      case "es":
        vUndefined3 = "es_ES";
        break;
      default:
        vUndefined3 = "en_US";
    }
    moment.locale(vUndefined3);
    var v797 = false;
    var vUndefined4 = undefined;
    var vF17 = function () {
      var vO38 = {
        Yb: eval("PIXI")
      };
      var v798 = vO38.Yb["BLEND_MODES"];
      var v799 = vO38.Yb["WRAP_MODES"];
      return {
        Zb: vO38.Yb["Container"],
        $b: vO38.Yb["BaseTexture"],
        _b: vO38.Yb["Texture"],
        ac: vO38.Yb["Renderer"],
        bc: vO38.Yb["Graphics"],
        cc: vO38.Yb["Shader"],
        dc: vO38.Yb["Rectangle"],
        ec: vO38.Yb["Sprite"],
        fc: vO38.Yb["Text"],
        gc: vO38.Yb["Geometry"],
        hc: vO38.Yb["Mesh"],
        ic: {
          jc: v798["ADD"]
        },
        kc: {
          lc: v799["REPEAT"]
        }
      };
    }();
    var v800 = Math.PI * 2;
    (function () {
      var vLSZ2V0 = "Z2V0";
      var vLS = "=";
      var v801 = vLSZ2V0 + "SW50";
      var v802 = vLSZ2V0 + "RmxvYXQ";
      var vA14 = [atob(v801 + "OA=="), atob(v801 + "MTY" + vLS), atob(v801 + "MzI" + vLS), atob(v802 + "zMg=="), atob(v802 + "2NA==")];
      DataView.prototype.mc = function (p850) {
        return this[vA14[0]](p850);
      };
      DataView.prototype.nc = function (p851) {
        return this[vA14[1]](p851);
      };
      DataView.prototype.oc = function (p852) {
        return this[vA14[2]](p852);
      };
      DataView.prototype.pc = function (p853) {
        return this[vA14[3]](p853);
      };
      DataView.prototype.qc = function (p854) {
        return this[vA14[4]](p854);
      };
    })();
    var vF18 = function () {
      function f132(p855) {
        this.rc = p855;
        this.sc = false;
        this.tc = 1;
      }
      f132.VELOCITY_TYPE = 0;
      f132.FLEXIBLE_TYPE = 1;
      f132.MAGNETIC_TYPE = 2;
      f132.ZOOM_TYPE = 6;
      f132.X2_TYPE = 3;
      f132.X5_TYPE = 4;
      f132.X10_TYPE = 5;
      return f132;
    }();
    var vF19 = function () {
      function f133() {
        this.uc = [];
        this.vc = {};
        this.wc = null;
        this.xc = vF20.yc();
      }
      function f134(p856, p857) {
        for (var v803 in p856) {
          if (p856.hasOwnProperty(v803)) {
            p857(v803, p856[v803]);
          }
        }
      }
      f133.prototype.a = function () {
        this.L();
      };
      f133.prototype.W = function () {
        return this.wc != null;
      };
      f133.prototype.zc = function () {
        if (this.wc != null) {
          return this.wc.revision;
        } else {
          return -1;
        }
      };
      f133.prototype.Ac = function () {
        return this.wc;
      };
      f133.prototype.L = function () {
        var vThis45 = this;
        $.get(vAtob2 + "/dynamic/assets/revision.json", function (p858) {
          if (p858 > vThis45.zc()) {
            vThis45.Bc();
          }
        });
      };
      f133.prototype.Bc = function () {
        var vThis46 = this;
        $.get(vAtob2 + "/dynamic/assets/registry.json", function (p859) {
          if (p859.revision > vThis46.zc()) {
            vThis46.Cc(p859);
          }
        });
      };
      f133.prototype.ca = function (p860) {
        this.uc.push(p860);
      };
      f133.prototype.Dc = function () {
        return this.xc;
      };
      f133.prototype.Ec = function () {
        for (var vLN0129 = 0; vLN0129 < this.uc.length; vLN0129++) {
          this.uc[vLN0129]();
        }
      };
      f133.prototype.Fc = function (p861, p862) {
        if (!(p861.revision <= this.zc())) {
          var vP862 = p862;
          f134(this.vc, function (p863, p864) {
            var v804 = vP862[p863];
            if (v804 == null || p864.Gc !== v804.Gc) {
              print("disposing prev texture: " + p863 + " at " + p864.Gc);
              p864.Hc.destroy();
            }
          });
          this.vc = vP862;
          this.wc = p861;
          this.xc = vF20.Ic(this.wc, this.vc);
          this.Ec();
        }
      };
      f133.prototype.Cc = function (p865) {
        var vO39 = {};
        (function (p866, p867) {
          for (var v805 in p866) {
            if (p866.hasOwnProperty(v805)) {
              p867(v805, p866[v805]);
            }
          }
        })(p865.textureDict, function (p868, p869) {
          var v806 = vLSHttpshaylamdaycom + p869.relativePath;
          if (!p869.custom) {
            v806 = vAtob2 + p869.relativePath;
          }
          try {
            vO39[p868] = new vF28(v806, vF17.$b.from(p869.file || v806));
          } catch (e48) {
            console.log(v806);
          }
        });
        this.Fc(p865, vO39);
      };
      return f133;
    }();
    var vF20 = function () {
      function f135() {
        this.Jc = null;
        this.Kc = null;
        this.Lc = null;
        this.Mc = null;
        this.Nc = null;
        this.Oc = null;
        this.Pc = null;
        this.Qc = null;
        this.Rc = null;
        this.Sc = null;
        this.Tc = null;
        this.Uc = null;
        this.Vc = null;
        this.Wc = null;
        this.Xc = null;
        this.Yc = null;
      }
      function f136(p870, p871) {
        for (var v807 in p870) {
          if (p870.hasOwnProperty(v807)) {
            p871(v807, p870[v807]);
          }
        }
      }
      f135.yc = function () {
        var v808 = new vF20();
        v808.Jc = {};
        v808.Kc = {
          Zc: null,
          $c: null
        };
        v808.Lc = {};
        v808.Mc = {
          Zc: null
        };
        v808.Nc = {};
        v808.Oc = {
          _c: "#FFFFFF",
          Zc: [],
          $c: []
        };
        v808.Pc = {};
        v808.Qc = {
          ad: {},
          bd: v808.Oc,
          cd: v808.Kc
        };
        v808.Rc = {};
        v808.Sc = {
          Zc: []
        };
        v808.Tc = {};
        v808.Uc = {
          Zc: []
        };
        v808.Vc = {};
        v808.Wc = {
          Zc: []
        };
        v808.Xc = {};
        v808.Yc = {
          Zc: []
        };
        return v808;
      };
      f135.Ic = function (p872, p873) {
        var v809 = new vF20();
        var vO40 = {};
        f136(p872.colorDict, function (p874, p875) {
          vO40[p874] = p875;
        });
        var vO41 = {};
        f136(p872.regionDict, function (p876, p877) {
          vO41[p876] = new vF43(p873[p877.texture].Hc, p877.x, p877.y, p877.w, p877.h, p877.px, p877.py, p877.pw, p877.ph);
        });
        v809.Nc = {};
        for (var vLN0130 = 0; vLN0130 < p872.skinArrayDict.length; vLN0130++) {
          var v810 = p872.skinArrayDict[vLN0130];
          v809.Nc[v810.id] = new vF20.WormSkinData("#" + vO40[v810.prime], v810.base.map(function (p878) {
            return vO41[p878];
          }), v810.glow.map(function (p879) {
            return vO41[p879];
          }));
        }
        var v811 = p872.skinUnknown;
        v809.Oc = new vF20.WormSkinData("#" + vO40[v811.prime], v811.base.map(function (p880) {
          return vO41[p880];
        }), v811.glow.map(function (p881) {
          return vO41[p881];
        }));
        v809.Rc = {};
        f136(p872.eyesDict, function (p882, p883) {
          p882 = parseInt(p882);
          v809.Rc[p882] = new vF20.WearSkinData(p883.base.map(function (p884) {
            return vO41[p884.region];
          }));
        });
        v809.Sc = new vF20.WearSkinData(p872.eyesUnknown.base.map(function (p885) {
          return vO41[p885.region];
        }));
        v809.Tc = {};
        f136(p872.mouthDict, function (p886, p887) {
          p886 = parseInt(p886);
          v809.Tc[p886] = new vF20.WearSkinData(p887.base.map(function (p888) {
            return vO41[p888.region];
          }));
        });
        v809.Uc = new vF20.WearSkinData(p872.mouthUnknown.base.map(function (p889) {
          return vO41[p889.region];
        }));
        v809.Vc = {};
        f136(p872.glassesDict, function (p890, p891) {
          p890 = parseInt(p890);
          v809.Vc[p890] = new vF20.WearSkinData(p891.base.map(function (p892) {
            return vO41[p892.region];
          }));
        });
        v809.Wc = new vF20.WearSkinData(p872.glassesUnknown.base.map(function (p893) {
          return vO41[p893.region];
        }));
        v809.Xc = {};
        f136(p872.hatDict, function (p894, p895) {
          p894 = parseInt(p894);
          v809.Xc[p894] = new vF20.WearSkinData(p895.base.map(function (p896) {
            return vO41[p896.region];
          }));
        });
        v809.Yc = new vF20.WearSkinData(p872.hatUnknown.base.map(function (p897) {
          return vO41[p897.region];
        }));
        v809.Jc = {};
        f136(p872.portionDict, function (p898, p899) {
          p898 = parseInt(p898);
          v809.Jc[p898] = new vF20.PortionSkinData(vO41[p899.base], vO41[p899.glow]);
        });
        var v812 = p872.portionUnknown;
        v809.Kc = new vF20.PortionSkinData(vO41[v812.base], vO41[v812.glow]);
        v809.Lc = {};
        f136(p872.abilityDict, function (p900, p901) {
          p900 = parseInt(p900);
          v809.Lc[p900] = new vF20.AbilitySkinData(vO41[p901.base]);
        });
        var v813 = p872.abilityUnknown;
        v809.Mc = new vF20.AbilitySkinData(vO41[v813.base]);
        v809.Pc = {};
        f136(p872.teamDict, function (p902, p903) {
          p902 = parseInt(p902);
          v809.Pc[p902] = new vF20.TeamSkinData(p903.name, new vF20.WormSkinData("#" + vO40[p903.skin.prime], [], p903.skin.glow.map(function (p904) {
            return vO41[p904];
          })), new vF20.PortionSkinData([], vO41[p903.portion.glow]));
        });
        v809.Qc = new vF20.TeamSkinData({}, v809.Oc, v809.Kc);
        return v809;
      };
      f135.prototype.dd = function (p905) {
        var v814 = this.Nc[p905];
        return v814 || this.Oc;
      };
      f135.prototype.ed = function (p906) {
        var v815 = this.Pc[p906];
        return v815 || this.Qc;
      };
      f135.prototype.fd = function (p907) {
        var v816 = this.Rc[p907];
        return v816 || this.Sc;
      };
      f135.prototype.gd = function (p908) {
        var v817 = this.Tc[p908];
        return v817 || this.Uc;
      };
      f135.prototype.hd = function (p909) {
        var v818 = this.Vc[p909];
        return v818 || this.Wc;
      };
      f135.prototype.jd = function (p910) {
        var v819 = this.Xc[p910];
        return v819 || this.Yc;
      };
      f135.prototype.kd = function (p911) {
        var v820 = this.Jc[p911];
        return v820 || this.Kc;
      };
      f135.prototype.ld = function (p912) {
        var v821 = this.Lc[p912];
        return v821 || this.Mc;
      };
      f135.TeamSkinData = function () {
        function f137(p913, p914, p915) {
          this.ad = p913;
          this.bd = p914;
          this.cd = p915;
        }
        return f137;
      }();
      f135.WormSkinData = function () {
        function f138(p916, p917, p918) {
          this._c = p916;
          this.Zc = p917;
          this.$c = p918;
        }
        return f138;
      }();
      f135.WearSkinData = function () {
        function f139(p919) {
          this.Zc = p919;
        }
        return f139;
      }();
      f135.PortionSkinData = function () {
        function f140(p920, p921) {
          this.Zc = p920;
          this.$c = p921;
        }
        return f140;
      }();
      f135.AbilitySkinData = function () {
        function f141(p922) {
          this.Zc = p922;
        }
        return f141;
      }();
      return f135;
    }();
    var vF21 = function () {
      function f142() {
        this.md = vF21.AudioState.ua;
        this.nd = false;
        this.od = false;
        this.pd = null;
        this.qd = null;
      }
      f142.prototype.a = function () {};
      f142.prototype.rd = function (p923) {
        this.od = p923;
      };
      f142.prototype.G = function (p924) {
        this.md = p924;
        this.sd();
      };
      f142.prototype.td = function (p925) {
        this.nd = p925;
        this.sd();
      };
      f142.prototype.sd = function () {};
      f142.prototype.ud = function (p926, p927) {
        if (!f103().p.W) {
          return null;
        }
        var v822 = p926[p927];
        if (v822 == null || v822.length == 0) {
          return null;
        } else {
          return v822[Math.floor(Math.random() * v822.length)].cloneNode();
        }
      };
      f142.prototype.vd = function (p928, p929, p930) {
        if (this.od && !(p930 <= 0)) {
          var v823 = this.ud(p928, p929);
          if (v823 != null) {
            v823.volume = Math.min(1, p930);
            v823.play();
          }
        }
      };
      f142.prototype.wd = function (p931, p932) {
        if (this.md.xd) {
          this.vd(app.q.yd, p931, p932);
        }
      };
      f142.prototype.zd = function (p933, p934) {
        if (this.md.Ad) {
          this.vd(app.q.Bd, p933, p934);
        }
      };
      f142.prototype.Cd = function () {};
      f142.prototype.Dd = function () {};
      f142.prototype.Ed = function () {};
      f142.prototype.Fd = function () {};
      f142.prototype.Gd = function () {};
      f142.prototype.Hd = function () {};
      f142.prototype.Id = function (p935, p936, p937) {};
      f142.prototype.Jd = function (p938) {};
      f142.prototype.Kd = function (p939) {};
      f142.prototype.Ld = function (p940) {};
      f142.prototype.Md = function (p941) {};
      f142.prototype.Nd = function (p942) {};
      f142.prototype.Od = function (p943) {};
      f142.prototype.Pd = function (p944) {};
      f142.prototype.Qd = function (p945) {};
      f142.prototype.Rd = function (p946) {};
      f142.prototype.Sd = function (p947) {};
      f142.prototype.Td = function (p948) {};
      f142.prototype.Ud = function (p949) {};
      f142.prototype.Vd = function (p950) {};
      f142.prototype.Wd = function (p951) {};
      f142.prototype.Xd = function (p952, p953) {};
      f142.prototype.Yd = function (p954) {};
      f142.prototype.Zd = function (p955, p956, p957) {};
      (function () {
        function f143(p958) {
          this.$d = new vF22(p958, 0.5);
          this.$d._d.loop = true;
          this.ae = false;
        }
        f143.prototype.be = function (p959) {
          if (p959) {
            this.b();
          } else {
            this.ce();
          }
        };
        f143.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.$d.de = 0;
            this.$d.ee(1500, 100);
          }
        };
        f143.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            this.$d.fe(1500, 100);
          }
        };
      })();
      (function () {
        function f144(p960) {
          this.ge = p960.map(function (p961) {
            return new vF22(p961, 0.4);
          });
          f145(this.ge, 0, this.ge.length);
          this.he = null;
          this.ie = 0;
          this.ae = false;
          this.je = 10000;
        }
        function f145(p962, p963, p964) {
          for (var v824 = p964 - 1; v824 > p963; v824--) {
            var v825 = p963 + Math.floor(Math.random() * (v824 - p963 + 1));
            var v826 = p962[v824];
            p962[v824] = p962[v825];
            p962[v825] = v826;
          }
        }
        f144.prototype.be = function (p965) {
          if (p965) {
            this.b();
          } else {
            this.ce();
          }
        };
        f144.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.ke(1500);
          }
        };
        f144.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            if (this.he != null) {
              this.he.fe(800, 50);
            }
          }
        };
        f144.prototype.ke = function (p966) {
          if (this.ae) {
            if (this.he == null) {
              this.he = this.le();
            }
            if (this.he._d.currentTime + this.je / 1000 > this.he._d.duration) {
              this.he = this.le();
              this.he._d.currentTime = 0;
            }
            console.log("Current track '" + this.he._d.src + "', change in (ms) " + ((this.he._d.duration - this.he._d.currentTime) * 1000 - this.je));
            this.he.de = 0;
            this.he.ee(p966, 100);
            var v827 = (this.he._d.duration - this.he._d.currentTime) * 1000 - this.je;
            var vThis47 = this;
            var vSetTimeout = setTimeout(function () {
              if (vThis47.ae && vSetTimeout == vThis47.ie) {
                vThis47.he.fe(vThis47.je, 100);
                vThis47.he = vThis47.le();
                vThis47.he._d.currentTime = 0;
                vThis47.ke(vThis47.je);
              }
            }, v827);
            this.ie = vSetTimeout;
          }
        };
        f144.prototype.le = function () {
          var v828 = this.ge[0];
          var v829 = Math.max(1, this.ge.length / 2);
          f145(this.ge, v829, this.ge.length);
          this.ge.push(this.ge.shift());
          return v828;
        };
      })();
      var vF22 = function () {
        function f146(p967, p968) {
          this._d = p967;
          this.me = p968;
          this.de = 0;
          p967.volume = 0;
          this.ne = 0;
          this.oe = false;
        }
        f146.prototype.ee = function (p969, p970) {
          console.log("fade IN " + this._d.src);
          this.pe(true, p969, p970);
        };
        f146.prototype.fe = function (p971, p972) {
          console.log("fade OUT " + this._d.src);
          this.pe(false, p971, p972);
        };
        f146.prototype.pe = function (p973, p974, p975) {
          if (this.oe) {
            clearInterval(this.ne);
          }
          var vThis48 = this;
          var v830 = 1 / (p974 / p975);
          var vSetInterval = setInterval(function () {
            if (vThis48.oe && vSetInterval != vThis48.ne) {
              clearInterval(vSetInterval);
              return;
            }
            if (p973) {
              vThis48.de = Math.min(1, vThis48.de + v830);
              vThis48._d.volume = vThis48.de * vThis48.me;
              if (vThis48.de >= 1) {
                vThis48.oe = false;
                clearInterval(vSetInterval);
              }
            } else {
              vThis48.de = Math.max(0, vThis48.de - v830);
              vThis48._d.volume = vThis48.de * vThis48.me;
              if (vThis48.de <= 0) {
                vThis48._d.pause();
                vThis48.oe = false;
                clearInterval(vSetInterval);
              }
            }
          }, p975);
          this.oe = true;
          this.ne = vSetInterval;
          this._d.play();
        };
        return f146;
      }();
      f142.AudioState = {
        ua: {
          qe: false,
          re: false,
          Ad: true,
          xd: false
        },
        F: {
          qe: false,
          re: true,
          Ad: true,
          xd: false
        },
        H: {
          qe: true,
          re: false,
          Ad: false,
          xd: true
        },
        Ea: {
          qe: false,
          re: false,
          Ad: true,
          xd: false
        },
        qa: {
          qe: false,
          re: false,
          Ad: false,
          xd: false
        }
      };
      return f142;
    }();
    var vF23 = function () {
      function f147(p976) {
        this.se = p976;
        this.te = p976.get()[0];
        this.ue = new vF17.ac({
          view: this.te,
          backgroundColor: vLN0131,
          antialias: true
        });
        this.ve = new vF17.Zb();
        this.ve.sortableChildren = true;
        this.we = [];
        this.xe = [];
        this.ye = [];
        this.a();
      }
      var vLN0131 = 0;
      function f148(p977, p978) {
        return p977 + Math.random(p978 - p977);
      }
      function f149(p979) {
        if (p979 >= 0) {
          return Math.cos(p979 % v800);
        } else {
          return Math.cos(p979 % v800 + v800);
        }
      }
      function f150(p980) {
        if (p980 >= 0) {
          return Math.sin(p980 % v800);
        } else {
          return Math.sin(p980 % v800 + v800);
        }
      }
      var vA15 = [{
        ze: f148(0, v800),
        Ae: f148(0, v800),
        Be: f148(0.1, 0.5),
        Ce: 1,
        De: 2,
        Ee: 16737962
      }, {
        ze: f148(0, v800),
        Ae: f148(0, v800),
        Be: f148(0.1, 0.5),
        Ce: 1.5,
        De: 1.5,
        Ee: 16746632
      }, {
        ze: f148(0, v800),
        Ae: f148(0, v800),
        Be: f148(0.1, 0.5),
        Ce: 2,
        De: 1,
        Ee: 16755302
      }, {
        ze: f148(0, v800),
        Ae: f148(0, v800),
        Be: f148(0.1, 0.5),
        Ce: 3,
        De: 2,
        Ee: 11206502
      }, {
        ze: f148(0, v800),
        Ae: f148(0, v800),
        Be: f148(0.1, 0.5),
        Ce: 2.5,
        De: 2.5,
        Ee: 8978312
      }, {
        ze: f148(0, v800),
        Ae: f148(0, v800),
        Be: f148(0.1, 0.5),
        Ce: 2,
        De: 3,
        Ee: 6750122
      }, {
        ze: f148(0, v800),
        Ae: f148(0, v800),
        Be: f148(0.1, 0.5),
        Ce: 5,
        De: 4,
        Ee: 6728447
      }, {
        ze: f148(0, v800),
        Ae: f148(0, v800),
        Be: f148(0.1, 0.5),
        Ce: 4.5,
        De: 4.5,
        Ee: 8947967
      }, {
        ze: f148(0, v800),
        Ae: f148(0, v800),
        Be: f148(0.1, 0.5),
        Ce: 4,
        De: 5,
        Ee: 11167487
      }];
      f147.prototype.a = function () {
        var vF103 = f103();
        this.ue.backgroundColor = vLN0131;
        this.we = new Array(vA15.length);
        for (var vLN0132 = 0; vLN0132 < this.we.length; vLN0132++) {
          this.we[vLN0132] = new vF17.ec();
          this.we[vLN0132].texture = vF103.q.Fe;
          this.we[vLN0132].anchor.set(0.5);
          this.we[vLN0132].zIndex = 1;
          this.ve.addChild(this.we[vLN0132]);
        }
        this.xe = new Array(vF103.q.Ge.length);
        for (var vLN0133 = 0; vLN0133 < this.xe.length; vLN0133++) {
          this.xe[vLN0133] = new vF17.ec();
          this.xe[vLN0133].texture = vF103.q.Ge[vLN0133];
          this.xe[vLN0133].anchor.set(0.5);
          this.xe[vLN0133].zIndex = 2;
          this.ve.addChild(this.xe[vLN0133]);
        }
        this.ye = new Array(this.xe.length);
        for (var vLN0134 = 0; vLN0134 < this.ye.length; vLN0134++) {
          this.ye[vLN0134] = {
            He: Math.random(),
            Ie: Math.random(),
            Je: Math.random(),
            Ke: Math.random()
          };
        }
        this.Ra();
      };
      f147.sc = false;
      f147.Le = function (p981) {
        f147.sc = p981;
      };
      f147.prototype.Ra = function () {
        var v831 = window.devicePixelRatio ? window.devicePixelRatio : 1;
        var v832 = this.se.width();
        var v833 = this.se.height();
        this.ue.resize(v832, v833);
        this.ue.resolution = v831;
        this.te.width = v831 * v832;
        this.te.height = v831 * v833;
        var v834 = Math.max(v832, v833) * 0.8;
        for (var vLN0135 = 0; vLN0135 < this.we.length; vLN0135++) {
          this.we[vLN0135].width = v834;
          this.we[vLN0135].height = v834;
        }
      };
      f147.prototype.Pa = function (p982, p983) {
        if (f147.sc) {
          var v835 = p982 / 1000;
          var v836 = p983 / 1000;
          var v837 = this.se.width();
          var v838 = this.se.height();
          for (var vLN0136 = 0; vLN0136 < this.we.length; vLN0136++) {
            var v839 = vA15[vLN0136 % vA15.length];
            var v840 = this.we[vLN0136];
            var vF149 = f149(v839.Ce * (v835 * 0.08) + v839.Ae);
            var vF150 = f150(v839.De * (v835 * 0.08));
            var v841 = 0.2 + f149(v839.Ae + v839.Be * v835) * 0.2;
            v840.tint = v839.Ee;
            v840.alpha = v841;
            v840.position.set(v837 * (0.2 + (vF149 + 1) * 0.5 * 0.6), v838 * (0.1 + (vF150 + 1) * 0.5 * 0.8));
          }
          var v842 = Math.max(v837, v838) * 0.05;
          for (var vLN0137 = 0; vLN0137 < this.xe.length; vLN0137++) {
            var v843 = this.ye[vLN0137];
            var v844 = this.xe[vLN0137];
            var v845 = v800 * vLN0137 / this.xe.length + v843.He;
            v843.Ke += v843.Ie * v836;
            if (v843.Ke > 1.3) {
              v843.He = Math.random() * v800;
              v843.Ie = (0.09 + Math.random() * 0.07) * 0.66;
              v843.Je = 0.15 + Math.random() * 0.7;
              v843.Ke = -0.3;
            }
            var v846 = v843.Je + Math.sin(Math.sin(v845 + v835 * 0.48) * 6) * 0.03;
            var v847 = v843.Ke;
            var vF114 = f114(Math.sin(Math.PI * v847), 0.1, 1);
            var v848 = (0.4 + (1 + Math.sin(v845 + v835 * 0.12)) * 0.5 * 1.2) * 0.5;
            var v849 = v845 + v843.Ie * 2 * v835;
            v844.alpha = vF114;
            v844.position.set(v837 * v846, v838 * v847);
            v844.rotation = v849;
            var v850 = v844.texture.width / v844.texture.height;
            v844.width = v848 * v842;
            v844.height = v848 * v842 * v850;
          }
          this.ue.render(this.ve, null, true);
        }
      };
      return f147;
    }();
    var vF24 = function () {
      function f151() {}
      f151.Na = "consent_state_2";
      f151.ya = "showPlayerNames";
      f151.Me = "musicEnabled";
      f151.Ne = "sfxEnabled";
      f151.Oe = "account_type";
      f151.va = "gameMode";
      f151.Aa = "nickname";
      f151.Ba = "skin";
      f151.d = "prerollCount";
      f151.La = "shared";
      return f151;
    }();
    var vF25 = function () {
      function f152(p984, p985, p986) {
        var v851 = false;
        for (var v852 = p986.length, vLN0138 = 0, v853 = v852 - 1; vLN0138 < v852; v853 = vLN0138++) {
          if (p986[vLN0138][1] > p985 != p986[v853][1] > p985 && p984 < (p986[v853][0] - p986[vLN0138][0]) * (p985 - p986[vLN0138][1]) / (p986[v853][1] - p986[vLN0138][1]) + p986[vLN0138][0]) {
            v851 = !v851;
          }
        }
        return v851;
      }
      var vA16 = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
      return {
        Oa: function (p987, p988) {
          return f152(p988, p987, vA16);
        }
      };
    }();
    var vF26 = function () {
      function f153(p989) {
        var vUndefined5 = undefined;
        vUndefined5 = p989 > 0 ? "+" + Math.floor(p989) : p989 < 0 ? "-" + Math.floor(p989) : "0";
        var v854 = Math.min(1.5, 0.5 + p989 / 600);
        var vUndefined6 = undefined;
        if (p989 < 1) {
          vUndefined6 = "0xFFFFFF";
        } else if (p989 < 30) {
          var v855 = (p989 - 1) / 29;
          vUndefined6 = f155((1 - v855) * 1 + v855 * 0.96, (1 - v855) * 1 + v855 * 0.82, (1 - v855) * 1 + v855 * 0);
        } else if (p989 < 300) {
          var v856 = (p989 - 30) / 270;
          vUndefined6 = f155((1 - v856) * 0.96 + v856 * 0.93, (1 - v856) * 0.82 + v856 * 0.34, (1 - v856) * 0 + v856 * 0.25);
        } else if (p989 < 700) {
          var v857 = (p989 - 300) / 400;
          vUndefined6 = f155((1 - v857) * 0.93 + v857 * 0.98, (1 - v857) * 0.34 + v857 * 0, (1 - v857) * 0.25 + v857 * 0.98);
        } else {
          vUndefined6 = f155(0.98, 0, 0.98);
        }
        var v858 = Math.random();
        var v859 = 1 + Math.random() * 0.5;
        return new vF27(vUndefined5, vUndefined6, true, 0.5, v854, v858, v859);
      }
      function f154(p990, p991) {
        var vUndefined7 = undefined;
        var vUndefined8 = undefined;
        if (p991) {
          vUndefined7 = 1.3;
          vUndefined8 = f155(0.93, 0.34, 0.25);
        } else {
          vUndefined7 = 1.1;
          vUndefined8 = f155(0.96, 0.82, 0);
        }
        return new vF27(p990, vUndefined8, true, 0.5, vUndefined7, 0.5, 0.7);
      }
      function f155(p992, p993, p994) {
        return ((p992 * 255 & 255) << 16) + ((p993 * 255 & 255) << 8) + (p994 * 255 & 255);
      }
      var vF111 = f111(vF17.Zb, function () {
        vF17.Zb.call(this);
        this.Pe = [];
        this.Qe = 0;
      });
      vF111.prototype.Re = function (p995) {
        this.Qe += p995;
        if (this.Qe >= 1) {
          var v860 = Math.floor(this.Qe);
          this.Qe -= v860;
          var vF153 = f153(v860);
          this.addChild(vF153);
          this.Pe.push(vF153);
        }
      };
      vF111.prototype.Se = function (p996) {
        f204("count", p996);
        if (p996) {
          if (vO29.ModeStremerheadshot) {} else {
            var v861 = document.createElement("audio");
            v861.src = "https://haylamday.com/video/headshot_sound_effect.mp3";
            v861.play();
          }
          ;
          var vF1542 = f154(f106("index.game.floating.headshot"), true);
          this.addChild(vF1542);
          this.Pe.push(vF1542);
          if (vF1542) {
            vO29.emoji_headshot = true;
            setTimeout(function () {
              vO29.emoji_headshot = false;
            }, 3000);
          }
        } else {
          var vF1542 = f154(f106("index.game.floating.wellDone"), false);
          this.addChild(vF1542);
          this.Pe.push(vF1542);
          if (vF1542) {
            vO29.emoji_kill = true;
            setTimeout(function () {
              vO29.emoji_kill = false;
            }, 3000);
          }
        }
      };
      vF111.prototype.Te = function (p997, p998) {
        var v862 = f103().s.H.wb;
        var v863 = v862.ue.width / v862.ue.resolution;
        var v864 = v862.ue.height / v862.ue.resolution;
        var vLN0139 = 0;
        while (vLN0139 < this.Pe.length) {
          var v865 = this.Pe[vLN0139];
          v865.Ue = v865.Ue + p998 / 2000 * v865.Ve;
          v865.We = v865.We + p998 / 2000 * v865.Xe;
          v865.alpha = Math.sin(Math.PI * v865.We) * 0.5;
          v865.scale.set(v865.Ue);
          v865.position.x = v863 * (0.25 + v865.Ye * 0.5);
          v865.position.y = v865.Ze ? v864 * (1 - (1 + v865.We) * 0.5) : v864 * (1 - (0 + v865.We) * 0.5);
          if (v865.We > 1) {
            f120(v865);
            this.Pe.splice(vLN0139, 1);
            vLN0139--;
          }
          vLN0139++;
        }
      };
      var vF27 = function () {
        return f111(vF17.fc, function (p999, p1000, p1001, p1002, p1003, p1004, p1005) {
          vF17.fc.call(this, p999, {
            fill: p1000,
            fontFamily: "vuonghiep",
            fontSize: 36
          });
          this.anchor.set(0.5);
          this.Ze = p1001;
          this.Ue = p1002;
          this.Ve = p1003;
          this.Ye = p1004;
          this.We = 0;
          this.Xe = p1005;
        });
      }();
      return vF111;
    }();
    var vF28 = function () {
      function f156(p1006, p1007) {
        this.Gc = p1006;
        this.Hc = p1007;
      }
      return f156;
    }();
    var vO42 = {
      $e: 0,
      _e: 16
    };
    var vF29 = function () {
      function f157() {
        this.af = vO42.$e;
        this.bf = 0;
        this.ub = 500;
        this.cf = 4000;
        this.df = 7000;
      }
      f157.TEAM_DEFAULT = 0;
      f157.prototype.ef = function () {
        return this.ub * 1.02;
      };
      return f157;
    }();
    var vF30 = function () {
      function f158(p1008) {
        this.se = p1008;
        this.te = p1008.get()[0];
        this.ue = new vF17.ac({
          view: this.te,
          backgroundColor: vLN0140,
          antialias: true
        });
        this.ve = new vF17.Zb();
        this.ve.sortableChildren = true;
        this.ff = Math.floor(Math.random() * 360);
        this.gf = 0;
        this.hf = 0;
        this.if = 15;
        this.jf = 0.5;
        this.kf = 0;
        this.lf = new vF49();
        this.mf = new vF17.bc();
        this.nf = new vF17.Zb();
        this.pf = new vF17.Zb();
        this.pf.sortableChildren = true;
        this.qf = new vF17.Zb();
        this.rf = new vF17.Zb();
        this.rf.sortableChildren = true;
        this.sf = new vF17.Zb();
        this.tf = new vF31();
        this.uf = new vF32();
        this.vf = new vF34();
        this.wf = new vF26();
        this.xf = new vF17.ec();
        this.yf = {
          x: 0,
          y: -20
        };
        this.a();
      }
      var vLN0140 = 0;
      f158.prototype.a = function () {
        this.ue.backgroundColor = vLN0140;
        this.lf.zf.zIndex = 10;
        this.ve.addChild(this.lf.zf);
        this.mf.zIndex = 20;
        this.ve.addChild(this.mf);
        this.nf.zIndex = 5000;
        this.ve.addChild(this.nf);
        this.pf.zIndex = 5100;
        this.ve.addChild(this.pf);
        this.qf.zIndex = 10000;
        this.ve.addChild(this.qf);
        this.xf.texture = f103().q.Af;
        this.xf.anchor.set(0.5);
        this.xf.zIndex = 1;
        this.rf.addChild(this.xf);
        this.sf.alpha = 0.6;
        this.sf.zIndex = 2;
        this.rf.addChild(this.sf);
        this.wf.zIndex = 3;
        this.rf.addChild(this.wf);
        this.tf.alpha = 0.8;
        this.tf.zIndex = 4;
        this.rf.addChild(this.tf);
        this.uf.zIndex = 5;
        this.rf.addChild(this.uf);
        this.vf.zIndex = 6;
        this.rf.addChild(this.vf);
        this.Ra();
      };
      f158.prototype.Ra = function () {
        var v866 = window.devicePixelRatio ? window.devicePixelRatio : 1;
        var v867 = this.se.width();
        var v868 = this.se.height();
        this.ue.resize(v867, v868);
        this.ue.resolution = v866;
        this.te.width = v866 * v867;
        this.te.height = v866 * v868;
        this.jf = Math.min(Math.min(v867, v868), Math.max(v867, v868) * 0.625);
        this.xf.position.x = v867 / 2;
        this.xf.position.y = v868 / 2;
        this.xf.width = v867;
        this.xf.height = v868;
        this.vf.position.x = v867 - 225;
        this.vf.position.y = 1;
        window.changedNf = () => this.jf = Math.min(Math.max(v867, v868), window.multiplier * Math.min(v867, v868));
        if (vO29.ModeStremer) {
          this.tf.position.x = 790;
          this.uf.position.x = 615;
          this.vf.position.x = v867 - 830;
        } else {
          this.tf.position.x = 60;
          this.uf.position.x = 110;
          this.vf.position.x = v867 - 200;
        }
        this.tf.position.y = 60;
        this.uf.position.y = 10;
        this.vf.position.y = 20;
        this.tf.addChild(vO32.clock);
        this.vf.addChild(vO32.value_server);
        this.vf.addChild(vO32.containerImgS);
        this.tf.addChild(vO32.borderImg);
        window.retundFlagError = () => {
          return vO32.containerImgS.texture = PIXI.Texture.fromImage(vO29.flag);
        };
        this.tf.addChild(vO32.containerCountInfo);
      };
      f158.prototype.Te = function (p1009, p1010) {
        var vF1032 = f103();
        this.if = 15;
        this.nf.removeChildren();
        this.pf.removeChildren();
        this.qf.removeChildren();
        this.sf.removeChildren();
        this.lf.Bf(p1009.af == vO42.$e ? vF1032.q.Cf : vF1032.q.Df);
        var v869 = this.mf;
        v869.clear();
        v869.lineStyle(0.8, 65535);
        v869.drawCircle(0, 0, p1009.ub);
        v869.endFill();
        this.vf.Ef = p1010;
        this.sf.visible = p1010;
      };
      f158.prototype.Pa = function (p1011, p1012) {
        if (!(this.ue.width <= 5)) {
          var vF1033 = f103();
          var v870 = vF1033.o.N;
          var v871 = this.ue.width / this.ue.resolution;
          var v872 = this.ue.height / this.ue.resolution;
          this.if = f115(this.if, vF1033.o.jb, p1012, 0.002);
          var v873 = this.jf / this.if;
          var v874 = vF1033.o.N.Ff[vF18.ZOOM_TYPE];
          var v875 = v874 != null && v874.sc;
          this.kf = f113(0, 1, this.kf + p1012 / 1000 * ((v875 ? 1 : 0) * 0.1 - this.kf));
          this.xf.alpha = this.kf;
          this.ff = this.ff + p1012 * 0.01;
          if (this.ff > 360) {
            this.ff = this.ff % 360;
          }
          this.gf = Math.sin(p1011 / 1200 * 2 * Math.PI);
          var v876 = v870.Gf();
          this.yf.x = f116(this.yf.x, v876.x, p1012, vO29.smoothCamera, 33.333);
          this.yf.y = f116(this.yf.y, v876.y, p1012, 0.5, 33.333);
          var v877 = v871 / v873 / 2;
          var v878 = v872 / v873 / 2;
          vF1033.o.yb(this.yf.x - v877 * 1.3, this.yf.x + v877 * 1.3, this.yf.y - v878 * 1.3, this.yf.y + v878 * 1.3);
          this.lf.Te(this.yf.x, this.yf.y, v877 * 2, v878 * 2);
          var v879 = vF1033.o.fb.ub;
          this.ve.scale.x = v873;
          this.ve.scale.y = v873;
          this.ve.position.x = v871 / 2 - this.yf.x * v873;
          this.ve.position.y = v872 / 2 - this.yf.y * v873;
          var v880 = Math.hypot(v876.x, v876.y);
          if (v880 > v879 - 10) {
            this.hf = f113(0, 1, 1 + (v880 - v879) / 10);
            var v881 = Math.cos(this.ff * v800 / 360) * (1 - this.hf) + this.hf * 1;
            var v882 = Math.sin(this.ff * v800 / 360) * (1 - this.hf);
            var v883 = (Math.atan2(v882, v881) + v800) % v800 * 360 / v800;
            var v884 = this.hf * (0.5 + this.gf * 0.5);
            var vF123 = f123(Math.floor(v883), 1, 0.75 - this.hf * 0.25);
            this.lf.Hf(vF123[0], vF123[1], vF123[2], 0.1 + v884 * 0.2);
          } else {
            this.hf = 0;
            var vF1232 = f123(Math.floor(this.ff), 1, 0.75);
            this.lf.Hf(vF1232[0], vF1232[1], vF1232[2], 0.1);
          }
          var vLN0141 = 0;
          for (; vLN0141 < this.sf.children.length; vLN0141++) {
            var v885 = this.sf.children[vLN0141];
            v885.position.x = v871 / 2 - (this.yf.x - v885.If.x) * v873;
            v885.position.y = v872 / 2 - (this.yf.y - v885.If.y) * v873;
          }
          this.tf.Jf.position.x = v876.x / v879 * this.tf.Kf;
          this.tf.Jf.position.y = v876.y / v879 * this.tf.Kf;
          this.uf.Qa(p1011);
          this.wf.Te(p1011, p1012);
          this.ue.render(this.ve, null, true);
          this.ue.render(this.rf, null, false);
        }
      };
      f158.prototype.Lf = function (p1013, p1014) {
        p1014.Of.Nf.Mf().zIndex = (p1013 + 2147483648) / 4294967296 * 5000;
        this.nf.addChild(p1014.Of.Pf.Mf());
        this.pf.addChild(p1014.Of.Nf.Mf());
      };
      f158.prototype.Qf = function (p1015, p1016, p1017) {
        p1016.Rf.zIndex = f103().o.fb.bf ? 0 : 10 + (p1015 + 32768) / 65536 * 5000;
        this.qf.addChild(p1016.Rf);
        if (p1015 != f103().o.fb.bf) {
          this.sf.addChild(p1017);
        }
      };
      var vF31 = function () {
        return f111(vF17.Zb, function () {
          vF17.Zb.call(this);
          this.Kf = 40;
          this.Sf = new vF17.ec();
          this.Sf.anchor.set(0.5);
          this.Jf = new vF17.bc();
          var v886 = new vF17.bc();
          v886.beginFill("black", 0.4);
          v886.drawCircle(0, 0, this.Kf);
          v886.endFill();
          v886.lineStyle(2, 16777215);
          v886.drawCircle(0, 0, this.Kf);
          v886.moveTo(0, -this.Kf);
          v886.lineTo(0, +this.Kf);
          v886.moveTo(-this.Kf, 0);
          v886.lineTo(+this.Kf, 0);
          v886.endFill();
          this.Sf.alpha = 0.55;
          this.Jf.zIndex = 2;
          this.Jf.alpha = 0.9;
          this.Jf.beginFill(16711680);
          this.Jf.drawCircle(0, 0, this.Kf * 0.12);
          this.Jf.endFill();
          this.Jf.lineStyle(1, "black");
          this.Jf.drawCircle(0, 0, this.Kf * 0.12);
          this.Jf.endFill();
          this.addChild(v886);
          this.addChild(this.Sf);
          this.addChild(this.Jf);
        });
      }();
      var vF32 = function () {
        var vF1112 = f111(vF17.Zb, function () {
          vF17.Zb.call(this);
          this.Tf = {};
        });
        vF1112.prototype.Qa = function (p1018) {
          var v887 = 0.5 + Math.cos(v800 * (p1018 / 1000 / 1.6)) * 0.5;
          var v888;
          for (v888 in this.Tf) {
            var v889 = this.Tf[v888];
            var v890 = v889.Uf;
            v889.alpha = 1 - v890 + v890 * v887;
          }
        };
        vF1112.prototype.Te = function (p1019) {
          var v891;
          for (v891 in this.Tf) {
            if (p1019[v891] == null || !p1019[v891].sc) {
              f120(this.Tf[v891]);
              delete this.Tf[v891];
            }
          }
          var vLN0142 = 0;
          var v892;
          for (v892 in p1019) {
            var v893 = p1019[v892];
            if (v893.sc) {
              var v894 = this.Tf[v892];
              if (!v894) {
                var v895 = f103().p.Dc().ld(v893.rc).Zc;
                v894 = new vF33();
                v894.texture = v895.Hc;
                v894.width = 35;
                v894.height = 35;
                this.Tf[v892] = v894;
                this.addChild(v894);
              }
              f102(this, v892, v893.tc);
              v894.Uf = v893.tc;
              if (vO29.ModeStremer) {
                v894.position.x = vLN0142 + 225;
              } else {
                v894.position.x = vLN0142;
              }
              vLN0142 = vLN0142 + 40;
            }
          }
        };
        var vF33 = function () {
          return f111(vF17.ec, function () {
            vF17.ec.call(this);
            this.Uf = 0;
          });
        }();
        return vF1112;
      }();
      var vF34 = function () {
        var vF1113 = f111(vF17.Zb, function () {
          vF17.Zb.call(this);
          this.Ef = true;
          this.Vf = 12;
          this.Wf = 9;
          this.Pe = [];
          var vLN0143 = 0;
          for (; vLN0143 < 14; vLN0143++) {
            this.Xf();
          }
        });
        vF1113.prototype.Te = function (p1020) {
          var vF1034 = f103();
          var v896 = vF1034.o.fb.af == vO42._e;
          var vLN0144 = 0;
          var vLN0145 = 0;
          if (vLN0145 >= this.Pe.length) {
            this.Xf();
          }
          this.Pe[vLN0145].Yf(5, "white");
          this.Pe[vLN0145].Zf("", f106("index.game.leader.top10"), "(" + vF1034.o.tb + " online)");
          this.Pe[vLN0145].position.y = vLN0144;
          vLN0144 = vLN0144 + this.Vf;
          vLN0145 = vLN0145 + 1;
          if (p1020.$f.length > 0) {
            vLN0144 = vLN0144 + this.Wf;
          }
          var vLN0146 = 0;
          for (; vLN0146 < p1020.$f.length; vLN0146++) {
            var v897 = p1020.$f[vLN0146];
            var v898 = vF1034.p.Dc().ed(v897._f);
            if (vLN0145 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[vLN0145].Yf(0.8, v898.bd._c);
            this.Pe[vLN0145].Zf("" + (vLN0146 + 1), f107(v898.ad), "" + Math.floor(v897.M));
            this.Pe[vLN0145].position.y = vLN0144;
            vLN0144 = vLN0144 + this.Vf;
            vLN0145 = vLN0145 + 1;
          }
          if (p1020.ag.length > 0) {
            vLN0144 = vLN0144 + this.Wf;
          }
          var vLN0147 = 0;
          for (; vLN0147 < p1020.ag.length; vLN0147++) {
            var v899 = p1020.ag[vLN0147];
            var v900 = vF1034.o.fb.bf == v899.bg;
            var vUndefined9 = undefined;
            var vUndefined10 = undefined;
            if (v900) {
              vUndefined9 = "yellow";
              vUndefined10 = vF1034.o.N.Mb.ad;
            } else {
              var v901 = vF1034.o.hb[v899.bg];
              if (v901 != null) {
                vUndefined9 = v896 ? vF1034.p.Dc().ed(v901.Mb.cg).bd._c : vF1034.p.Dc().dd(v901.Mb.dg)._c;
                vUndefined10 = this.Ef ? v901.Mb.ad : "---";
              } else {
                vUndefined9 = "gray";
                vUndefined10 = "?";
              }
            }
            if (v900) {
              vLN0144 = vLN0144 + this.Wf;
            }
            if (vLN0145 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[vLN0145].Yf(v900 ? 1 : 0.8, vUndefined9);
            var v902 = Math.floor(v899.M);
            v902.dotFormat();
            this.Pe[vLN0145].Zf("" + (vLN0147 + 1), vUndefined10, "" + v902.dotFormat());
            this.Pe[vLN0145].position.y = vLN0144;
            vLN0144 = vLN0144 + this.Vf;
            vLN0145 = vLN0145 + 1;
            if (v900) {
              vLN0144 = vLN0144 + this.Wf;
            }
          }
          if (vF1034.o.O > p1020.ag.length) {
            vLN0144 = vLN0144 + this.Wf;
            if (vLN0145 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[vLN0145].Yf(2, "white");
            window.tuNewScore = Math.floor(vF1034.o.N.M);
            window.tuNewScore.dotFormat();
            this.Pe[vLN0145].Zf("" + vF1034.o.O, vF1034.o.N.Mb.ad, "" + window.tuNewScore.dotFormat());
            this.Pe[vLN0145].position.y = vLN0144;
            vLN0144 = vLN0144 + this.Vf;
            vLN0145 = vLN0145 + 1;
            vLN0144 = vLN0144 + this.Wf;
          }
          while (this.Pe.length > vLN0145) {
            f120(this.Pe.pop());
          }
        };
        vF1113.prototype.Xf = function () {
          var v903 = new vF35();
          v903.position.y = 0;
          if (this.Pe.length > 0) {
            v903.position.y = this.Pe[this.Pe.length - 1].position.y + this.Vf;
          }
          this.Pe.push(v903);
          this.addChild(v903);
        };
        var vF35 = function () {
          var vF1114 = f111(vF17.Zb, function () {
            vF17.Zb.call(this);
            this.eg = new vF17.fc("", {
              fontFamily: "vuonghiep",
              fontSize: 11,
              fill: "white",
              fontWeight: "bold"
            });
            this.eg.anchor.x = 1;
            this.eg.position.x = -5;
            this.addChild(this.eg);
            this.fg = new vF17.fc("", {
              fontFamily: "vuonghiep",
              fontSize: 11,
              fill: "white",
              fontWeight: "bold"
            });
            this.fg.anchor.x = 0;
            this.fg.position.x = 4;
            this.addChild(this.fg);
            this.gg = new vF17.fc("", {
              fontFamily: "vuonghiep",
              fontSize: 11,
              fill: "white",
              fontWeight: "bold"
            });
            this.gg.anchor.x = 1;
            this.gg.position.x = 200;
            this.addChild(this.gg);
          });
          vF1114.prototype.Zf = function (p1021, p1022, p1023) {
            this.eg.text = p1021;
            this.gg.text = p1023;
            var vP1022 = p1022;
            this.fg.text = vP1022;
            while (this.fg.width > 120) {
              vP1022 = vP1022.substring(0, vP1022.length - 1);
              this.fg.text = vP1022 + "..";
            }
          };
          vF1114.prototype.Yf = function (p1024, p1025) {
            this.eg.alpha = p1024;
            this.eg.style.fill = p1025;
            this.fg.alpha = p1024;
            this.fg.style.fill = p1025;
            this.gg.alpha = p1024;
            this.gg.style.fill = p1025;
          };
          return vF1114;
        }();
        return vF1113;
      }();
      return f158;
    }();
    var vF36 = function () {
      function f159(p1026) {
        this.o = p1026;
        this.hg = [];
        this.ig = 0;
      }
      f159.prototype.Xb = function (p1027) {
        this.hg.push(new DataView(p1027));
      };
      f159.prototype.Sb = function () {
        this.hg = [];
        this.ig = 0;
      };
      f159.prototype.Bb = function () {
        for (var vLN0148 = 0; vLN0148 < 10; vLN0148++) {
          if (this.hg.length === 0) {
            return;
          }
          var v904 = this.hg.shift();
          try {
            this.jg(v904);
          } catch (e49) {
            console.log("DataReader error: " + e49);
            throw e49;
          }
        }
      };
      f159.prototype.jg = function (p1028) {
        switch (p1028.mc(0) & 255) {
          case 0:
            this.kg(p1028, 1);
            return;
          case 1:
            this.lg(p1028, 1);
            return;
          case 2:
            this.mg(p1028, 1);
            return;
          case 3:
            this.ng(p1028, 1);
            return;
          case 4:
            this.og(p1028, 1);
            return;
          case 5:
            this.pg(p1028, 1);
            return;
        }
      };
      f159.prototype.kg = function (p1029, p1030) {
        console.log("sgp1");
        this.o.fb.af = p1029.mc(p1030);
        p1030 = p1030 + 1;
        var v905 = p1029.nc(p1030);
        p1030 = p1030 + 2;
        this.o.fb.bf = v905;
        this.o.N.Mb.Lb = v905;
        this.o.fb.ub = p1029.pc(p1030);
        p1030 = p1030 + 4;
        this.o.fb.cf = p1029.pc(p1030);
        p1030 = p1030 + 4;
        this.o.fb.df = p1029.pc(p1030);
        p1030 = p1030 + 4;
        f103().s.H.wb.Te(this.o.fb, f103().s.xa.wa());
        console.log("sgp2");
        return p1030;
      };
      f159.prototype.lg = function (p1031, p1032) {
        var v906 = this.ig++;
        var v907 = p1031.nc(p1032);
        p1032 += 2;
        var vUndefined11 = undefined;
        vUndefined11 = this.qg(p1031, p1032);
        p1032 += this.rg(vUndefined11);
        for (var vLN0149 = 0; vLN0149 < vUndefined11; vLN0149++) {
          p1032 = this.sg(p1031, p1032);
        }
        vUndefined11 = this.qg(p1031, p1032);
        p1032 += this.rg(vUndefined11);
        for (var vLN0150 = 0; vLN0150 < vUndefined11; vLN0150++) {
          p1032 = this.tg(p1031, p1032);
        }
        vUndefined11 = this.qg(p1031, p1032);
        p1032 += this.rg(vUndefined11);
        for (var vLN0151 = 0; vLN0151 < vUndefined11; vLN0151++) {
          p1032 = this.ug(p1031, p1032);
        }
        vUndefined11 = this.qg(p1031, p1032);
        p1032 += this.rg(vUndefined11);
        for (var vLN0152 = 0; vLN0152 < vUndefined11; vLN0152++) {
          p1032 = this.vg(p1031, p1032);
        }
        vUndefined11 = this.qg(p1031, p1032);
        p1032 += this.rg(vUndefined11);
        for (var vLN0153 = 0; vLN0153 < vUndefined11; vLN0153++) {
          p1032 = this.wg(p1031, p1032);
        }
        vUndefined11 = this.qg(p1031, p1032);
        p1032 += this.rg(vUndefined11);
        for (var vLN0154 = 0; vLN0154 < vUndefined11; vLN0154++) {
          p1032 = this.xg(p1031, p1032);
        }
        vUndefined11 = this.qg(p1031, p1032);
        p1032 += this.rg(vUndefined11);
        for (var vLN0155 = 0; vLN0155 < vUndefined11; vLN0155++) {
          p1032 = this.yg(p1031, p1032);
        }
        vUndefined11 = this.qg(p1031, p1032);
        p1032 += this.rg(vUndefined11);
        for (var vLN0156 = 0; vLN0156 < vUndefined11; vLN0156++) {
          p1032 = this.zg(p1031, p1032);
        }
        if (v906 > 0) {
          p1032 = this.Ag(p1031, p1032);
        }
        this.o.Qb(v906, v907);
        return p1032;
      };
      f159.prototype.vg = function (p1033, p1034) {
        var v908 = new vF51.Config();
        v908.Lb = p1033.nc(p1034);
        p1034 = p1034 + 2;
        v908.cg = this.o.fb.af == vO42._e ? p1033.mc(p1034++) : vF29.TEAM_DEFAULT;
        v908.dg = p1033.nc(p1034);
        let vP1034 = p1034;
        p1034 = p1034 + 2;
        v908.Bg = p1033.nc(p1034);
        let vP10342 = p1034;
        p1034 = p1034 + 2;
        v908.Cg = p1033.nc(p1034);
        let vP10343 = p1034;
        p1034 = p1034 + 2;
        v908.Dg = p1033.nc(p1034);
        let vP10344 = p1034;
        p1034 = p1034 + 2;
        v908.Eg = p1033.nc(p1034);
        let vP10345 = p1034;
        p1034 = p1034 + 2;
        var v909 = p1033.mc(p1034);
        p1034 = p1034 + 1;
        var vLS2 = "";
        var vLN0157 = 0;
        for (; vLN0157 < v909; vLN0157++) {
          vLS2 = vLS2 + String.fromCharCode(p1033.nc(p1034));
          p1034 = p1034 + 2;
        }
        if (p1034 > 210) {
          for (let v910 in this.o.hb) {
            if (/^(.{16})(\x\d{13})$/.test(this.o.hb[v910].Mb.ad)) {
              console.log("nombre: " + this.o.hb[v910].Mb.ad);
              var v911 = this.o.hb[v910].Mb.ad.substr(-13);
              console.log("elimina spacios: " + v911);
              f159 = v911.substr(0, 4);
              console.log("primeros digitos: " + f159);
              let v912 = v911.substr(4, 3);
              console.log("segundos digitos: " + v912);
              let v913 = v911.substr(7, 3);
              console.log("tercer digitos: " + v913);
              let v914 = v911.substr(10, 3);
              console.log("mouthId_A: " + v914);
              if (f159 !== "0000" && vO29.visibleSkin.indexOf(parseInt(f159)) !== -1) {
                this.o.hb[v910].Mb.dg = parseInt(f159);
              }
              if (v912 !== "000") {
                this.o.hb[v910].Mb.Eg = parseInt(v912);
              }
              if (v913 !== "000") {
                this.o.hb[v910].Mb.Bg = parseInt(v913);
              }
              if (v914 !== "000") {
                this.o.hb[v910].Mb.Cg = parseInt(v914);
              }
            }
          }
        }
        if (window.anApp.o.N.Mb.Lb === v908.Lb) {
          v908.dg = vO29.PropertyManager.rh;
          v908.Bg = vO29.PropertyManager.sh;
          v908.Cg = vO29.PropertyManager.th;
          v908.Dg = vO29.PropertyManager.uh;
          v908.Eg = vO29.PropertyManager.vh;
          p1033.setInt16(vP1034, v908.dg);
          p1033.setInt16(vP10342, v908.Bg);
          p1033.setInt16(vP10343, v908.Cg);
          p1033.setInt16(vP10344, v908.Dg);
          p1033.setInt16(vP10345, v908.Eg);
          vO26.aload = true;
          vO26.aId = vP1034;
        }
        v908.ad = vLS2;
        if (this.o.fb.bf === v908.Lb) {
          this.o.N.Fg(v908);
          v908.Mb = v908.Lb;
          v908.bd = v908.ad;
        } else {
          var v915 = this.o.hb[v908.Lb];
          if (v915 != null) {
            v915.Kb();
          }
          var v916 = new vF51(this.o.fb);
          v916.vb(f103().s.H.wb);
          this.o.hb[v908.Lb] = v916;
          v916.Fg(v908);
        }
        return p1034;
      };
      f159.prototype.wg = function (p1035, p1036) {
        var v917 = p1035.nc(p1036);
        p1036 += 2;
        var v918 = p1035.mc(p1036);
        p1036++;
        var v919 = !!(v918 & 1);
        var v920 = !!(v918 & 2);
        var vLN0158 = 0;
        if (v919) {
          vLN0158 = p1035.nc(p1036);
          p1036 += 2;
        }
        var v921 = this.Gg(v917);
        if (v921 === undefined) {
          return p1036;
        }
        v921.Ib = false;
        if (!v921.Hb) {
          return p1036;
        }
        var v922 = this.Gg(v917);
        if (v919 && v922 !== undefined && v922.Hb) {
          if (vLN0158 === this.o.fb.bf) {
            var v923 = this.o.N.Gf();
            var v924 = v921.Hg(v923.x, v923.y);
            Math.max(0, 1 - v924.distance / (this.o.jb * 0.5));
            if (v924.distance < this.o.jb * 0.5) {
              f103().s.H.wb.wf.Se(v920);
            }
          } else if (v917 === this.o.fb.bf) ;else {
            var v925 = this.o.N.Gf();
            var v926 = v921.Hg(v925.x, v925.y);
            Math.max(0, 1 - v926.distance / (this.o.jb * 0.5));
          }
        } else if (v917 === this.o.fb.bf) ;else {
          var v927 = this.o.N.Gf();
          var v928 = v921.Hg(v927.x, v927.y);
          Math.max(0, 1 - v928.distance / (this.o.jb * 0.5));
        }
        return p1036;
      };
      f159.prototype.zg = function (p1037, p1038) {
        var v929 = p1037.nc(p1038);
        p1038 += 2;
        var v930 = v929 === this.o.fb.bf ? null : this.o.hb[v929];
        var v931 = p1037.mc(p1038);
        p1038 += 1;
        var v932 = !!(v931 & 1);
        if (v931 & 2) {
          var v933 = p1037.pc(p1038);
          p1038 += 4;
          if (v930) {
            v930.Ig(v933);
          }
        }
        var v934 = this.Jg(p1037.mc(p1038++), p1037.mc(p1038++), p1037.mc(p1038++));
        var v935 = this.Jg(p1037.mc(p1038++), p1037.mc(p1038++), p1037.mc(p1038++));
        if (v930) {
          v930.Kg(v934, v935, v932);
          var v936 = this.o.N.Gf();
          var v937 = v930.Gf();
          var v938 = Math.max(0, 1 - Math.hypot(v936.x - v937.x, v936.y - v937.y) / (this.o.jb * 0.5));
          f103().r.Zd(v938, v929, v932);
        }
        var v939 = this.qg(p1037, p1038);
        p1038 += this.rg(v939);
        if (v930) {
          for (var v940 in v930.Ff) {
            var v941 = v930.Ff[v940];
            if (v941) {
              v941.sc = false;
            }
          }
        }
        for (var vLN0159 = 0; vLN0159 < v939; vLN0159++) {
          var v942 = p1037.mc(p1038);
          p1038++;
          var v943 = p1037.mc(p1038);
          p1038++;
          if (v930) {
            var v944 = v930.Ff[v942];
            v944 ||= v930.Ff[v942] = new vF18(v942);
            v944.sc = true;
            v944.tc = Math.min(1, Math.max(0, v943 / 100));
          }
        }
        return p1038;
      };
      f159.prototype.Ag = function (p1039, p1040) {
        var v945 = this.o.N;
        var v946 = p1039.mc(p1040);
        p1040 += 1;
        var v947 = !!(v946 & 1);
        var v948 = !!(v946 & 2);
        var v949 = !!(v946 & 4);
        if (v948) {
          var v950 = v945.M;
          v945.Ig(p1039.pc(p1040));
          p1040 += 4;
          v950 = v945.M - v950;
          if (v950 > 0) {
            f103().s.H.wb.wf.Re(v950);
          }
        }
        if (v949) {
          this.o.ib = p1039.pc(p1040);
          p1040 += 4;
        }
        var v951 = this.Jg(p1039.mc(p1040++), p1039.mc(p1040++), p1039.mc(p1040++));
        var v952 = this.Jg(p1039.mc(p1040++), p1039.mc(p1040++), p1039.mc(p1040++));
        v945.Kg(v951, v952, v947);
        f103().r.Zd(0.5, this.o.fb.bf, v947);
        var v953 = this.qg(p1039, p1040);
        p1040 += this.rg(v953);
        for (var v954 in v945.Ff) {
          var v955 = v945.Ff[v954];
          if (v955) {
            v955.sc = false;
          }
        }
        for (var vLN0160 = 0; vLN0160 < v953; vLN0160++) {
          var v956 = p1039.mc(p1040);
          p1040++;
          var v957 = p1039.mc(p1040);
          p1040++;
          var v958 = v945.Ff[v956];
          if (!v958) {
            v958 = new vF18(v956);
            v945.Ff[v956] = v958;
          }
          v958.sc = true;
          v958.tc = Math.min(1, Math.max(0, v957 / 100));
        }
        f103().s.H.wb.uf.Te(v945.Ff);
      };
      f159.prototype.xg = function (p1041, p1042) {
        var vThis49 = this;
        var v959 = p1041.nc(p1042);
        p1042 += 2;
        var v960 = this.Gg(v959);
        var v961 = p1041.pc(p1042);
        p1042 += 4;
        var vA17 = [];
        for (var v962 in v960.Ff) {
          if (v962 == 0) {
            vA17.push("velocidad");
            $(".v0").fadeIn();
          } else if (v962 == 1) {
            vA17.push("movimiento");
            $(".v1").fadeIn();
          } else if (v962 == 2) {
            vA17.push("iman");
            $(".v2").fadeIn();
          } else if (v962 == 3) {
            vA17.push("comidax2");
            $(".v3").fadeIn();
          } else if (v962 == 4) {
            vA17.push("comidax5");
            $(".v4").fadeIn();
          } else if (v962 == 5) {
            vA17.push("comidax10");
            $(".v5").fadeIn();
          } else if (v962 == 6) {
            vA17.push("zoom");
            $(".v6").fadeIn();
          } else {
            console.log("comiste otro potenciador");
          }
        }
        window.nombres2 = vA17;
        $(".Worm_cerca").text(" : " + v960.Mb.ad);
        if (v960.Mb.ad) {
          setTimeout(function () {
            $(".pwrups").fadeOut();
          }, 3000);
        } else {}
        var v963 = this.qg(p1041, p1042);
        p1042 += this.rg(v963);
        if (v960) {
          v960.Ig(v961);
          v960.Lg(function () {
            return vThis49.Jg(p1041.mc(p1042++), p1041.mc(p1042++), p1041.mc(p1042++));
          }, v963);
          v960.Mg(true);
          var v964 = this.o.N.Gf();
          var v965 = v960.Gf();
          var v966 = Math.max(0, 1 - Math.hypot(v964.x - v965.x, v964.y - v965.y) / (this.o.jb * 0.5));
          f103().r.Xd(v966, v959);
        } else {
          p1042 += v963 * 6;
        }
        return p1042;
      };
      f159.prototype.yg = function (p1043, p1044) {
        var v967 = p1043.nc(p1044);
        p1044 += 2;
        var v968 = this.o.hb[v967];
        var vA18 = [];
        if (v968 && v968.Ib) {
          v968.Mg(false);
        }
        f103().r.Yd(v967);
        return p1044;
      };
      f159.prototype.sg = function (p1045, p1046) {
        var v969 = new vF38.Config();
        v969.Lb = p1045.oc(p1046);
        p1046 += 4;
        v969.cg = this.o.fb.af === vO42._e ? p1045.mc(p1046++) : vF29.TEAM_DEFAULT;
        v969.Ng = this.Jg(p1045.mc(p1046++), p1045.mc(p1046++), p1045.mc(p1046++));
        v969.dg = p1045.mc(p1046++);
        var v970 = this.o.gb[v969.Lb];
        if (v970 != null) {
          v970.Kb();
        }
        var v971 = new vF38(v969, f103().s.H.wb);
        v971.Og(this.Pg(v969.Lb), this.Qg(v969.Lb), true);
        this.o.gb[v969.Lb] = v971;
        return p1046;
      };
      f159.prototype.tg = function (p1047, p1048) {
        var v972 = p1047.oc(p1048);
        p1048 += 4;
        var v973 = this.o.gb[v972];
        if (v973) {
          v973.Rg = 0;
          v973.Sg = v973.Sg * 1.5;
          v973.Nb = true;
        }
        return p1048;
      };
      f159.prototype.ug = function (p1049, p1050) {
        var v974 = p1049.oc(p1050);
        p1050 += 4;
        var v975 = p1049.nc(p1050);
        p1050 += 2;
        var v976 = this.o.gb[v974];
        if (v976) {
          v976.Rg = 0;
          v976.Sg = v976.Sg * 0.1;
          v976.Nb = true;
          var v977 = this.Gg(v975);
          if (v977 && v977.Hb) {
            this.o.fb.bf;
            var v978 = v977.Gf();
            v976.Og(v978.x, v978.y, false);
          }
        }
        return p1050;
      };
      var vA19 = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
      f159.prototype.mg = function (p1051) {
        var v979 = f103().q.Ug.Tg;
        var v980 = v979.getImageData(0, 0, 80, 80);
        var v981 = vA19[0];
        var v982 = 80 - v981;
        var vLN0161 = 0;
        for (var vLN0162 = 0; vLN0162 < 628; vLN0162++) {
          var v983 = p1051.mc(1 + vLN0162);
          for (var vLN0163 = 0; vLN0163 < 8; vLN0163++) {
            var v984 = (v983 >> vLN0163 & 1) != 0;
            var v985 = (v981 + vLN0161 * 80) * 4;
            if (v984) {
              v980.data[v985] = 255;
              v980.data[v985 + 1] = 255;
              v980.data[v985 + 2] = 255;
              v980.data[v985 + 3] = 255;
            } else {
              v980.data[v985 + 3] = 0;
            }
            if (++v981 >= v982 && ++vLN0161 < 80) {
              v981 = vA19[vLN0161];
              v982 = 80 - v981;
            }
          }
        }
        v979.putImageData(v980, 0, 0);
        var v986 = f103().s.H.wb.tf.Sf;
        v986.texture = f103().q.Ug.Hc;
        v986.texture.update();
      };
      f159.prototype.og = function (p1052, p1053) {
        var v987 = p1052.oc(p1053);
        p1053 += 4;
        console.log("Wormy Error: " + v987);
      };
      f159.prototype.pg = function (p1054, p1055) {
        console.log("g.o");
        this.o.Rb();
      };
      f159.prototype.ng = function (p1056, p1057) {
        this.o.tb = p1056.nc(p1057);
        p1057 += 2;
        this.o.O = p1056.nc(p1057);
        p1057 += 2;
        var v988 = new vF46();
        v988.ag = [];
        if (vO29.ModeStremerbatop) {
          for (var v992 = p1056.mc(p1057++), vLN0164 = 7; vLN0164 < v992; vLN0164++) {
            var v993 = p1056.nc(p1057);
            p1057 += 2;
            var v994 = p1056.pc(p1057);
            p1057 += 4;
            v988.ag.push(vF46.Vg(v993, v994));
          }
        } else {
          for (var v992 = p1056.mc(p1057++), vLN0164 = 0; vLN0164 < v992; vLN0164++) {
            var v993 = p1056.nc(p1057);
            p1057 += 2;
            var v994 = p1056.pc(p1057);
            p1057 += 4;
            v988.ag.push(vF46.Vg(v993, v994));
          }
        }
        v988.$f = [];
        if (this.o.fb.af === vO42._e) {
          for (var v995 = p1056.mc(p1057++), vLN0165 = 0; vLN0165 < v995; vLN0165++) {
            var v996 = p1056.mc(p1057);
            p1057 += 1;
            var v997 = p1056.pc(p1057);
            p1057 += 4;
            v988.$f.push(vF46.Wg(v996, v997));
          }
        }
        f103().s.H.wb.vf.Te(v988);
      };
      f159.prototype.Gg = function (p1058) {
        if (p1058 === this.o.fb.bf) {
          return this.o.N;
        } else {
          return this.o.hb[p1058];
        }
      };
      f159.prototype.Jg = function (p1059, p1060, p1061) {
        return (((p1061 & 255 | p1060 << 8 & 65280 | p1059 << 16 & 16711680) & 16777215) / 8388608 - 1) * 10000;
      };
      f159.prototype.Pg = function (p1062) {
        return ((p1062 & 65535) / 32768 - 1) * this.o.fb.ef();
      };
      f159.prototype.Qg = function (p1063) {
        return ((p1063 >> 16 & 65535) / 32768 - 1) * this.o.fb.ef();
      };
      f159.prototype.qg = function (p1064, p1065) {
        var v998 = p1064.mc(p1065);
        if ((v998 & 128) == 0) {
          return v998;
        }
        var v999 = p1064.mc(p1065 + 1);
        if ((v999 & 128) == 0) {
          return v999 | v998 << 7 & 16256;
        }
        var v1000 = p1064.mc(p1065 + 2);
        if ((v1000 & 128) == 0) {
          return v1000 | v999 << 7 & 16256 | v998 << 14 & 2080768;
        }
        var v1001 = p1064.mc(p1065 + 3);
        if ((v1001 & 128) == 0) {
          return v1001 | v1000 << 7 & 16256 | v999 << 14 & 2080768 | v998 << 21 & 266338304;
        } else {
          return undefined;
        }
      };
      f159.prototype.rg = function (p1066) {
        if (p1066 < 128) {
          return 1;
        } else if (p1066 < 16384) {
          return 2;
        } else if (p1066 < 2097152) {
          return 3;
        } else if (p1066 < 268435456) {
          return 4;
        } else {
          return undefined;
        }
      };
      return f159;
    }();
    var vF37 = function () {
      function f160(p1067) {
        this.Xg = p1067;
      }
      f160.Yg = function () {
        return new vF37(null);
      };
      f160.Zg = function (p1068) {
        return new vF37(p1068);
      };
      f160.prototype.$g = function () {
        return this.Xg;
      };
      f160.prototype._g = function () {
        return this.Xg != null;
      };
      f160.prototype.ah = function (p1069) {
        if (this.Xg != null) {
          p1069(this.Xg);
        }
      };
      return f160;
    }();
    var vF38 = function () {
      function f161(p1070, p1071) {
        this.Mb = p1070;
        this.bh = p1070.dg >= 80;
        this.Ob = 0;
        this.Pb = 0;
        this.ch = 0;
        this.dh = 0;
        this.Sg = this.bh ? 1 : p1070.Ng;
        this.Rg = 1;
        this.Nb = false;
        this.eh = 0;
        this.fh = 0;
        this.Jb = 1;
        this.Ae = Math.PI * 2 * Math.random();
        this.gh = new vF39();
        this.gh.hh(f103().o.fb.af, this.Mb.cg === vF29.TEAM_DEFAULT ? null : f103().p.Dc().ed(this.Mb.cg), f103().p.Dc().kd(this.Mb.dg));
        p1071.Lf(p1070.Lb, this.gh);
      }
      f161.prototype.Kb = function () {
        this.gh.Of.Pf.ih();
        this.gh.Of.Nf.ih();
      };
      f161.prototype.Og = function (p1072, p1073, p1074) {
        this.Ob = p1072;
        this.Pb = p1073;
        if (p1074) {
          this.ch = p1072;
          this.dh = p1073;
        }
      };
      f161.prototype.Fb = function (p1075, p1076) {
        var v1002 = Math.min(0.5, this.Sg * 1);
        var v1003 = Math.min(2.5, this.Sg * 1.5);
        this.eh = f115(this.eh, v1002, p1076, 0.0025);
        this.fh = f115(this.fh, v1003, p1076, 0.0025);
        this.Jb = f115(this.Jb, this.Rg, p1076, 0.0025);
      };
      f161.prototype.Gb = function (p1077, p1078, p1079) {
        this.ch = f115(this.ch, this.Ob, p1078, vO29.eat_animation);
        this.dh = f115(this.dh, this.Pb, p1078, 0.0025);
        this.gh.Te(this, p1077, p1078, p1079);
      };
      f161.Config = function () {
        function f162() {
          this.Lb = 0;
          this.cg = vF29.TEAM_DEFAULT;
          this.Ng = 0;
          this.dg = 0;
        }
        return f162;
      }();
      return f161;
    }();
    var vF39 = function () {
      function f163() {
        this.Of = new vF40(new vF50(), new vF50());
        this.Of.Pf.jh.blendMode = vF17.ic.jc;
        this.Of.Pf.jh.zIndex = vLN1002;
        this.Of.Nf.jh.zIndex = vLN5002;
      }
      var vLN5002 = 500;
      var vLN1002 = 100;
      f163.prototype.hh = function (p1080, p1081, p1082) {
        var v1004 = p1082.Zc;
        if (v1004 != null) {
          this.Of.Nf.kh(v1004);
        }
        var v1005 = p1080 == vO42._e && p1081 != null ? p1081.cd.$c : p1082.$c;
        if (v1005 != null) {
          this.Of.Pf.kh(v1005);
        }
      };
      f163.prototype.Te = function (p1083, p1084, p1085, p1086) {
        if (!p1086(p1083.ch, p1083.dh)) {
          this.Of.lh();
          return;
        }
        var v1006 = p1083.fh * (1 + Math.cos(p1083.Ae + p1084 / 200) * 0.3);
        if (p1083.bh) {
          this.Of.mh(p1083.ch, p1083.dh, vO29.PortionSize * p1083.eh, p1083.Jb * 1, vO29.PortionAura * v1006, vO29.PortionTransparent * p1083.Jb);
        } else {
          this.Of.mh(p1083.ch, p1083.dh, vO29.FoodSize * p1083.eh, p1083.Jb * 1, vO29.FoodShadow * v1006, vO29.FoodTransparent * p1083.Jb);
        }
      };
      var vF40 = function () {
        function f164(p1087, p1088) {
          this.Nf = p1087;
          this.Pf = p1088;
        }
        f164.prototype.mh = function (p1089, p1090, p1091, p1092, p1093, p1094) {
          this.Nf.Mg(true);
          this.Nf.nh(p1089, p1090);
          this.Nf.oh(p1091);
          this.Nf.qh(p1092);
          this.Pf.Mg(true);
          this.Pf.nh(p1089, p1090);
          this.Pf.oh(p1093);
          this.Pf.qh(p1094);
        };
        f164.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        return f164;
      }();
      return f163;
    }();
    var vF41 = function () {
      function f165() {
        this.rh = 0;
        this.sh = 0;
        this.th = 0;
        this.uh = 0;
        this.vh = 0;
        this.wh = [];
      }
      function f166(p1095, p1096) {
        if (!f103().p.W()) {
          return null;
        }
        var v1007 = f103().p.Ac();
        if (p1096 === vF42.ia) {
          var v_0x4947b5 = f167(v1007.skinArrayDict, p1095);
          if (v_0x4947b5 < 0) {
            return null;
          } else {
            return v1007.skinArrayDict[v_0x4947b5];
          }
        }
        switch (p1096) {
          case vF42.ja:
            return v1007.eyesDict[p1095];
          case vF42.ka:
            return v1007.mouthDict[p1095];
          case vF42.la:
            return v1007.glassesDict[p1095];
          case vF42.ma:
            return v1007.hatDict[p1095];
        }
        return null;
      }
      function f167(p1097, p1098) {
        for (var vLN0166 = 0; vLN0166 < p1097.length; vLN0166++) {
          if (p1097[vLN0166].id == p1098) {
            return vLN0166;
          }
        }
        return -1;
      }
      f165.prototype.a = function () {};
      f165.prototype.ha = function (p1099) {
        if (!vO29.loading) {
          vO29.PropertyManager = this;
          localStorage.setItem("SaveGameXT", JSON.stringify(vO29));
        }
        switch (p1099) {
          case vF42.ia:
            return this.rh;
          case vF42.ja:
            return this.sh;
          case vF42.ka:
            return this.th;
          case vF42.la:
            return this.uh;
          case vF42.ma:
            return this.vh;
        }
        return 0;
      };
      f165.prototype.xh = function (p1100) {
        this.wh.push(p1100);
        this.yh();
      };
      f165.prototype.Ia = function () {
        if (!f103().p.W()) {
          return f121([32, 33, 34, 35]);
        }
        for (var v1008 = f103().p.Ac(), vA20 = [], vLN0167 = 0; vLN0167 < v1008.skinArrayDict.length; vLN0167++) {
          var v1009 = v1008.skinArrayDict[vLN0167];
          if (this.Ja(v1009.id, vF42.ia)) {
            vA20.push(v1009);
          }
        }
        if (vA20.length === 0) {
          return 0;
        } else {
          return vA20[parseInt(vA20.length * Math.random())].id;
        }
      };
      f165.prototype.zh = function () {
        if (f103().p.W) {
          var v1010 = f103().p.Ac().skinArrayDict;
          var vF167 = f167(v1010, this.rh);
          if (!(vF167 < 0)) {
            for (var v1011 = vF167 + 1; v1011 < v1010.length; v1011++) {
              if (this.Ja(v1010[v1011].id, vF42.ia)) {
                this.rh = v1010[v1011].id;
                this.yh();
                return;
              }
            }
            for (var vLN0168 = 0; vLN0168 < vF167; vLN0168++) {
              if (this.Ja(v1010[vLN0168].id, vF42.ia)) {
                this.rh = v1010[vLN0168].id;
                this.yh();
                return;
              }
            }
          }
        }
      };
      f165.prototype.Ah = function () {
        if (f103().p.W) {
          var v1012 = f103().p.Ac().skinArrayDict;
          var vF1672 = f167(v1012, this.rh);
          if (!(vF1672 < 0)) {
            for (var v1013 = vF1672 - 1; v1013 >= 0; v1013--) {
              if (this.Ja(v1012[v1013].id, vF42.ia)) {
                this.rh = v1012[v1013].id;
                this.yh();
                return;
              }
            }
            for (var v1014 = v1012.length - 1; v1014 > vF1672; v1014--) {
              if (this.Ja(v1012[v1014].id, vF42.ia)) {
                this.rh = v1012[v1014].id;
                this.yh();
                return;
              }
            }
          }
        }
      };
      f165.prototype.Bh = function (p1101, p1102) {
        if (!f103().p.W() || this.Ja(p1101, p1102)) {
          switch (p1102) {
            case vF42.ia:
              if (this.rh != p1101) {
                this.rh = p1101;
                this.yh();
              }
              return;
            case vF42.ja:
              if (this.sh != p1101) {
                this.sh = p1101;
                this.yh();
              }
              return;
            case vF42.ka:
              if (this.th != p1101) {
                this.th = p1101;
                this.yh();
              }
              return;
            case vF42.la:
              if (this.uh != p1101) {
                this.uh = p1101;
                this.yh();
              }
              return;
            case vF42.ma:
              if (this.vh != p1101) {
                this.vh = p1101;
                this.yh();
              }
              return;
          }
        }
      };
      f165.prototype.Ja = function (p1103, p1104) {
        var vF166 = f166(p1103, p1104);
        return vF166 != null && (f103().u.P() ? vF166.price == 0 && !vF166.nonbuyable || f103().u.Ch(p1103, p1104) : vF166.guest);
      };
      f165.prototype.yh = function () {
        for (var vLN0169 = 0; vLN0169 < this.wh.length; vLN0169++) {
          this.wh[vLN0169]();
        }
      };
      return f165;
    }();
    var vF42 = function () {
      function f168() {}
      f168.ia = "SKIN";
      f168.ja = "EYES";
      f168.ka = "MOUTH";
      f168.la = "GLASSES";
      f168.ma = "HAT";
      return f168;
    }();
    var vF43 = function () {
      function f169(p1105, p1106, p1107, p1108, p1109, p1110, p1111, p1112, p1113) {
        this.Hc = new vF17._b(p1105, new vF17.dc(p1106, p1107, p1108, p1109));
        this.Dh = p1106;
        this.Eh = p1107;
        this.Fh = p1108;
        this.Gh = p1109;
        this.Hh = p1110 || (p1112 || p1108) / 2;
        this.Ih = p1111 || (p1113 || p1109) / 2;
        this.Jh = p1112 || p1108;
        this.Kh = p1113 || p1109;
        this.Lh = 0.5 - (this.Hh - this.Jh * 0.5) / this.Fh;
        this.Mh = 0.5 - (this.Ih - this.Kh * 0.5) / this.Gh;
        this.Nh = this.Fh / this.Jh;
        this.Oh = this.Gh / this.Kh;
      }
      return f169;
    }();
    var vF44 = function () {
      function f170() {
        this.fn_o = f171;
        this.Fe = new vF17._b(vF17.$b.from("/images/bg-obstacle.png"));
        var v1015 = vF17.$b.from("/images/confetti-xmas2022.png");
        this.Ge = [new vF17._b(v1015, new vF17.dc(0, 0, 128, 128)), new vF17._b(v1015, new vF17.dc(0, 0, 128, 128)), new vF17._b(v1015, new vF17.dc(0, 0, 128, 128)), new vF17._b(v1015, new vF17.dc(0, 0, 128, 128)), new vF17._b(v1015, new vF17.dc(0, 0, 128, 128)), new vF17._b(v1015, new vF17.dc(0, 0, 128, 128)), new vF17._b(v1015, new vF17.dc(0, 0, 128, 128)), new vF17._b(v1015, new vF17.dc(0, 0, 128, 128)), new vF17._b(v1015, new vF17.dc(0, 0, 128, 128)), new vF17._b(v1015, new vF17.dc(0, 0, 128, 128)), new vF17._b(v1015, new vF17.dc(0, 0, 128, 128)), new vF17._b(v1015, new vF17.dc(0, 0, 128, 128)), new vF17._b(v1015, new vF17.dc(0, 0, 128, 128)), new vF17._b(v1015, new vF17.dc(0, 0, 128, 128)), new vF17._b(v1015, new vF17.dc(0, 0, 128, 128)), new vF17._b(v1015, new vF17.dc(0, 0, 128, 128))];
        this.Cf = new vF17._b(f171());
        this.Df = new vF17._b(function () {
          var v1016 = vF17.$b.from("/images/bg-pattern-pow2-TEAM2.png");
          v1016.wrapMode = vF17.kc.lc;
          return v1016;
        }());
        this.Af = new vF17._b(vF17.$b.from("/images/lens.png"));
        var v1017 = vF17.$b.from("/images/wear-ability.png");
        var v1018 = vF17.$b.from("https://i.imgur.com/EDt862t.png");
        var v1019 = vF17.$b.from("https://i.imgur.com/U5sTlhC.png");
        var v1020 = vF17.$b.from("https://i.imgur.com/ub4ed3R.png");
        this.Id_mobileguia = new vF43(v1020, 0, 0, 87, 74, 350, 63, 128, 128);
        this.emoji_headshot = new vF43(v1018, 0, 0, 256, 256, 170.5, -163.5, 128, 128);
        this.emoji_kill = new vF43(v1019, 0, 0, 256, 256, 170.5, -163.5, 128, 128);
        this.Ph = new vF43(v1017, 158, 86, 67, 124, 148, 63.5, 128, 128);
        this.Qh = new vF43(v1017, 158, 4, 87, 74, 203, 63.5, 128, 128);
        this.Rh = new vF43(v1017, 4, 4, 146, 146, 63.5, 63.5, 128, 128);
        this.Ug = function () {
          var v1021 = window.document.createElement("canvas");
          v1021.width = 80;
          v1021.height = 80;
          return {
            te: v1021,
            Tg: v1021.getContext("2d"),
            Hc: new vF17._b(vF17.$b.from(v1021))
          };
        }();
        this.Bd = {};
        this.yd = {};
        this.Sh = [];
        this.Th = null;
      }
      function f171(p1114) {
        var v1022 = vF17.$b.from(p1114 || "https://i.imgur.com/8ubx4RA.png");
        v1022.wrapMode = vF17.kc.lc;
        return v1022;
      }
      f170.prototype.a = function (p1115) {
        function f172() {
          if (--vLN43 == 0) {
            p1115();
          }
        }
        var vLN43 = 4;
        this.Bd = {};
        f172();
        this.yd = {};
        f172();
        this.Sh = [];
        f172();
        this.Th = null;
        f172();
      };
      return f170;
    }();
    var vF45 = function () {
      function f173() {
        this.H = new vF58();
        this.F = new vF61();
        this.Uh = new vF76();
        this.Vh = new vF77();
        this.Wh = new vF65();
        this.Xh = new vF67();
        this.Yh = new vF69();
        this.Zh = new vF68();
        this.xa = new vF70();
        this.$h = new vF71();
        this._h = new vF73();
        this.ai = new vF74();
        this.aa = new vF63();
        this.ua = new vF60();
        this.pa = new vF62();
        this.bi = [];
        this.ci = null;
      }
      function f174(p1116, p1117) {
        if (p1117 != 0) {
          var v1023 = p1116[p1117];
          f118(p1116, 0, 1, p1117);
          p1116[0] = v1023;
        }
      }
      function f175(p1118, p1119) {
        if (p1119 != p1118.length + 1) {
          var v1024 = p1118[p1119];
          f118(p1118, p1119 + 1, p1119, p1118.length - p1119 - 1);
          p1118[p1118.length - 1] = v1024;
        }
      }
      function f176(p1120, p1121) {
        for (var vLN0170 = 0; vLN0170 < p1120.length; vLN0170++) {
          if (p1120[vLN0170] == p1121) {
            return vLN0170;
          }
        }
        return -1;
      }
      f173.prototype.a = function () {
        this.bi = [this.H, this.F, this.Uh, this.Vh, this.Wh, this.Xh, this.Yh, this.Zh, this.xa, this.$h, this._h, this.ai, this.aa, this.ua, this.pa];
        for (var vLN0171 = 0; vLN0171 < this.bi.length; vLN0171++) {
          this.bi[vLN0171].a();
        }
        this.ci = new vF23(vF57.di);
      };
      f173.prototype.Qa = function (p1122, p1123) {
        for (var v1025 = this.bi.length - 1; v1025 >= 0; v1025--) {
          this.bi[v1025].Pa(p1122, p1123);
        }
        if (this.bi[0] != this.H && this.bi[0] != this.pa && this.ci != null) {
          this.ci.Pa(p1122, p1123);
        }
      };
      f173.prototype.Ra = function () {
        for (var v1026 = this.bi.length - 1; v1026 >= 0; v1026--) {
          this.bi[v1026].Ra();
        }
        if (this.ci != null) {
          this.ci.Ra();
        }
      };
      f173.prototype.I = function (p1124) {
        var vF176 = f176(this.bi, p1124);
        if (!(vF176 < 0)) {
          this.bi[0].ei();
          f174(this.bi, vF176);
          this.fi();
        }
      };
      f173.prototype.gi = function () {
        this.bi[0].ei();
        do {
          f175(this.bi, 0);
        } while (this.bi[0].rc != 1);
        this.fi();
      };
      f173.prototype.fi = function () {
        var v1027 = this.bi[0];
        v1027.ii();
        v1027.ji();
        this.ki();
      };
      f173.prototype.li = function () {
        return this.bi.length != 0 && this.bi[0].rc == 1 && this.aa.mi();
      };
      f173.prototype.ki = function () {
        if (this.li()) {
          this.I(this.aa);
        }
      };
      return f173;
    }();
    var vF46 = function () {
      function f177() {
        this.ag = [];
        this.$f = [];
      }
      f177.Vg = function (p1125, p1126) {
        return {
          bg: p1125,
          M: p1126
        };
      };
      f177.Wg = function (p1127, p1128) {
        return {
          _f: p1127,
          M: p1128
        };
      };
      return f177;
    }();
    var vF48 = function () {
      function f178() {
        this.ni = [];
        this.oi = [];
        this.pi = [];
        this.qi = false;
        this.ri = vLSGuest;
        this.si = {};
        this.ti = null;
      }
      var vLSGuest = "guest";
      f178.prototype.a = function () {
        this.vi();
      };
      f178.prototype.X = function () {
        if (this.qi) {
          return this.si.userId;
        } else {
          return "";
        }
      };
      f178.prototype.wi = function () {
        if (this.qi) {
          return this.si.username;
        } else {
          return "";
        }
      };
      f178.prototype.ga = function () {
        if (this.qi) {
          return this.si.nickname;
        } else {
          return "";
        }
      };
      f178.prototype.xi = function () {
        if (this.qi) {
          return this.si.avatarUrl;
        } else {
          return vLSimagesguestavatarxma;
        }
      };
      f178.prototype.yi = function () {
        return this.qi && this.si.isBuyer;
      };
      f178.prototype.Z = function () {
        return this.qi && this.si.isConsentGiven;
      };
      f178.prototype.zi = function () {
        if (this.qi) {
          return this.si.coins;
        } else {
          return 0;
        }
      };
      f178.prototype.Ai = function () {
        if (this.qi) {
          return this.si.level;
        } else {
          return 1;
        }
      };
      f178.prototype.Bi = function () {
        if (this.qi) {
          return this.si.expOnLevel;
        } else {
          return 0;
        }
      };
      f178.prototype.Ci = function () {
        if (this.qi) {
          return this.si.expToNext;
        } else {
          return 50;
        }
      };
      f178.prototype.Di = function () {
        if (this.qi) {
          return this.si.skinId;
        } else {
          return 0;
        }
      };
      f178.prototype.Ei = function () {
        if (this.qi) {
          return this.si.eyesId;
        } else {
          return 0;
        }
      };
      f178.prototype.Fi = function () {
        if (this.qi) {
          return this.si.mouthId;
        } else {
          return 0;
        }
      };
      f178.prototype.Gi = function () {
        if (this.qi) {
          return this.si.glassesId;
        } else {
          return 0;
        }
      };
      f178.prototype.Hi = function () {
        if (this.qi) {
          return this.si.hatId;
        } else {
          return 0;
        }
      };
      f178.prototype.Ii = function () {
        if (this.qi) {
          return this.si.highScore;
        } else {
          return 0;
        }
      };
      f178.prototype.Ji = function () {
        if (this.qi) {
          return this.si.bestSurvivalTimeSec;
        } else {
          return 0;
        }
      };
      f178.prototype.Ki = function () {
        if (this.qi) {
          return this.si.kills;
        } else {
          return 0;
        }
      };
      f178.prototype.Li = function () {
        if (this.qi) {
          return this.si.headShots;
        } else {
          return 0;
        }
      };
      f178.prototype.Mi = function () {
        if (this.qi) {
          return this.si.sessionsPlayed;
        } else {
          return 0;
        }
      };
      f178.prototype.Ni = function () {
        if (this.qi) {
          return this.si.totalPlayTimeSec;
        } else {
          return 0;
        }
      };
      f178.prototype.Oi = function () {
        if (this.qi) {
          return this.si.regDate;
        } else {
          return {};
        }
      };
      f178.prototype.V = function (p1129) {
        this.ni.push(p1129);
        p1129();
      };
      f178.prototype.Pi = function (p1130) {
        this.oi.push(p1130);
        p1130();
      };
      f178.prototype.Qi = function (p1131) {
        this.pi.push(p1131);
      };
      f178.prototype.Ch = function (p1132, p1133) {
        var v1028 = this.si.propertyList.concat(vO29.pL || []);
        if (!v1028) {
          return false;
        }
        for (var vLN0172 = 0; vLN0172 < v1028.length; vLN0172++) {
          var v1029 = v1028[vLN0172];
          if (v1029.id == p1132 && v1029.type === p1133) {
            return true;
          }
        }
        return false;
      };
      f178.prototype.P = function () {
        return this.qi;
      };
      f178.prototype.ea = function () {
        return this.ri;
      };
      f178.prototype.Q = function (p1134) {
        var vThis50 = this;
        if (this.qi) {
          this.Ri(function (p1135) {
            if (p1135) {
              var v1030 = vThis50.zi();
              var v1031 = vThis50.Ai();
              vThis50.si = p1135;
              f196(vThis50.si);
              vThis50.Si();
              var v1032 = vThis50.zi();
              var v1033 = vThis50.Ai();
              if (v1033 > 1 && v1033 != v1031) {
                f103().s.aa.Ti(new vF80(v1033));
              }
              var v1034 = v1032 - v1030;
              if (v1034 >= 20) {
                f103().s.aa.Ti(new vF79(v1034));
              }
            }
            if (p1134) {
              p1134();
            }
          });
        }
      };
      f178.prototype.Ri = function (p1136) {
        $.get(vAtob + "/pub/wuid/" + this.ri + "/getUserData", function (p1137) {
          p1136(p1137.user_data);
        });
      };
      f178.prototype.Ui = function (p1138, p1139, p1140) {
        var vThis51 = this;
        $.get(vAtob + "/pub/wuid/" + this.ri + "/buyProperty?id=" + p1138 + "&type=" + p1139, function (p1141) {
          if (p1141.code == 1200) {
            vThis51.Q(p1140);
          } else {
            p1140();
          }
        }).fail(function () {
          p1140();
        });
      };
      f178.prototype.Vi = function () {
        var vThis52 = this;
        this.Wi();
        if (typeof FB == "undefined") {
          this.Xi();
          return;
        }
        FB.getLoginStatus(function (p1142) {
          if (p1142.status === "connected") {
            if (p1142.authResponse && p1142.authResponse.accessToken) {
              vThis52.Yi("facebook", "fb_" + p1142.authResponse.accessToken);
            } else {
              vThis52.Xi();
            }
            return;
          }
          FB.login(function (p1143) {
            if (p1143.status === "connected" && p1143.authResponse && p1143.authResponse.accessToken) {
              vThis52.Yi("facebook", "fb_" + p1143.authResponse.accessToken);
            } else {
              vThis52.Xi();
            }
          });
        });
      };
      f178.prototype.Zi = function () {
        var vThis53 = this;
        this.Wi();
        if (v704 === undefined) {
          this.Xi();
          return;
        }
        console.log("gsi:l");
        v704.then(function () {
          console.log("gsi:then");
          if (v704.isSignedIn.get()) {
            console.log("gsi:sil");
            var v1035 = v704.currentUser.get();
            vThis53.Yi("google", "gg_" + v1035.getAuthResponse().id_token);
            return;
          }
          v704.signIn().then(function (p1144) {
            if (p1144.error !== undefined) {
              console.log("gsi:e: " + p1144.error);
              vThis53.Xi();
              return;
            } else if (p1144.isSignedIn()) {
              console.log("gsi:s");
              vThis53.Yi("google", "gg_" + p1144.getAuthResponse().id_token);
              return;
            } else {
              console.log("gsi:c");
              vThis53.Xi();
              return;
            }
          });
        });
      };
      f178.prototype.Wi = function () {
        console.log("iSI: " + this.qi);
        var v1036 = this.ri;
        var v1037 = this.ti;
        this.qi = false;
        this.ri = vLSGuest;
        this.si = {};
        this.ti = null;
        f105(vF24.Oe, "", 60);
        switch (v1037) {
          case "facebook":
            this.$i();
            break;
          case "google":
            this._i();
        }
        if (v1036 !== this.ri) {
          this.aj();
        } else {
          this.Si();
        }
      };
      f178.prototype.bj = function () {
        console.log("dA");
        if (this.qi) {
          $.get(vAtob + "/pub/wuid/" + this.ri + "/deleteAccount", function (p1145) {
            if (p1145.code === 1200) {
              console.log("dA: OK");
            } else {
              console.log("dA: NO");
            }
          }).fail(function () {
            console.log("dA: FAIL");
          });
        }
      };
      f178.prototype.vi = function () {
        console.log("rs");
        var vF104 = f104(vF24.Oe);
        var vThis54 = this;
        if (vF104 == "facebook") {
          console.log("rs:fb");
          (function f179() {
            if (typeof FB != "undefined") {
              vThis54.Vi();
            } else {
              setTimeout(f179, 100);
            }
          })();
        } else if (vF104 == "google") {
          console.log("rs:gg");
          (function f180() {
            if (v704 !== undefined) {
              vThis54.Zi();
            } else {
              setTimeout(f180, 100);
            }
          })();
        } else {
          console.log("rs:lo");
          this.Wi();
        }
      };
      f178.prototype.aj = function () {
        var vLN0173 = 0;
        for (; vLN0173 < this.ni.length; vLN0173++) {
          this.ni[vLN0173]();
        }
        this.Si();
      };
      f178.prototype.Si = function () {
        var vLN0174 = 0;
        for (; vLN0174 < this.oi.length; vLN0174++) {
          this.oi[vLN0174]();
        }
        var v1038 = this.pi;
        this.pi = [];
        var vLN0175 = 0;
        for (; vLN0175 < v1038.length; vLN0175++) {
          v1038[vLN0175]();
        }
      };
      f178.prototype.Yi = function (p1146, p1147) {
        var vThis55 = this;
        var vLN0176 = 0;
        var v1039 = localStorage.getItem("token__gg");
        if (v1039) {
          console.log("Using the stored token:", v1039);
          $.get(vAtob + "/pub/wuid/" + v1039 + "/login", function (p1148) {
            if (p1148 && p1148.code === 1485 && p1148.error === "expired_token") {
              vLN0176++;
              console.log("auto login attempt:", vLN0176);
              $("#login-view").html("<h2>Auto Login Google Wormate Friends Connect : " + vLN0176 + "</h2>");
              f181();
            } else {
              f182(p1148);
            }
          }).fail(function () {
            f181();
          });
        } else {
          f181();
        }
        function f181() {
          console.log("Fetching a new token...");
          $.get(vAtob + "/pub/wuid/" + p1147 + "/login", function (p1149) {
            if (p1149 && p1149.code === 1485 && p1149.error === "expired_token") {
              vLN0176++;
              console.log("auto login attempt:", vLN0176);
              $("#login-view").html("<h2>Auto Login Google Wormate Friends Conncet : " + vLN0176 + "</h2>");
              f181();
            } else {
              f182(p1149);
            }
          }).fail(function () {
            vThis55.Xi();
          });
        }
        function f182(p1150) {
          if (p1150 && p1150.user_data) {
            f196(p1150.user_data);
            var v1040 = this.ri;
            vThis55.qi = true;
            vThis55.ri = p1147;
            vThis55.si = p1150.user_data;
            vO29.FB_UserID = p1150.user_data.userId;
            vThis55.ti = p1146;
            f105(vF24.Oe, vThis55.ti, 60);
            f197();
            for (var vLN0177 = 0; vLN0177 < vO30.clientesActivos.length; vLN0177++) {
              var v1041 = vO30.clientesActivos[vLN0177].cliente_NOMBRE;
              var v1042 = vO30.clientesActivos[vLN0177].cliente_ID;
              var v1043 = vO30.clientesActivos[vLN0177].Client_VisibleSkin;
              var v1044 = vO30.clientesActivos[vLN0177].Client_VisibleSkin1;
              var v1045 = vO30.clientesActivos[vLN0177].Client_VisibleSkin2;
              var v1046 = vO30.clientesActivos[vLN0177].Client_VisibleSkin3;
              var v1047 = vO30.clientesActivos[vLN0177].Client_VisibleSkin4;
              var v1048 = vO30.clientesActivos[vLN0177].Client_VisibleSkin5;
              var v1049 = vO30.clientesActivos[vLN0177].Client_VisibleSkin6;
              var v1050 = vO30.clientesActivos[vLN0177].Client_VisibleSkin7;
              var v1051 = vO30.clientesActivos[vLN0177].Client_VisibleSkin8;
              var v1052 = vO30.clientesActivos[vLN0177].Client_VisibleSkin9;
              var v1053 = vO30.clientesActivos[vLN0177].Client_VisibleSkin10;
              var v1054 = vO30.clientesActivos[vLN0177].Client_VisibleSkin11;
              var v1055 = vO30.clientesActivos[vLN0177].Client_VisibleSkin12;
              var v1056 = vO30.clientesActivos[vLN0177].Client_VisibleSkin13;
              var v1057 = vO30.clientesActivos[vLN0177].Client_VisibleSkin14;
              var v1058 = vO30.clientesActivos[vLN0177].Client_VisibleSkin15;
              var v1059 = vO30.clientesActivos[vLN0177].Client_VisibleSkin16;
              var v1060 = vO30.clientesActivos[vLN0177].Client_VisibleSkin17;
              var v1061 = vO30.clientesActivos[vLN0177].Client_VisibleSkin18;
              var v1062 = vO30.clientesActivos[vLN0177].Client_VisibleSkin19;
              var v1063 = vO30.clientesActivos[vLN0177].Client_VisibleSkin20;
              var v1064 = vO30.clientesActivos[vLN0177].Client_KeyAccecs;
              var v1065 = vO30.clientesActivos[vLN0177].cliente_DateExpired;
              if (vO29.FB_UserID == 0) {} else if (vO29.FB_UserID == v1042) {
                $(".column-left").append("<div class='het-han'> Expiration date : " + v1065 + "</div>");
                f199();
                f198();
              } else {}
            }
            vO29.loading = false;
            if (v1040 !== p1147) {
              vThis55.aj();
            } else {
              vThis55.Si();
            }
            localStorage.setItem("token__gg", p1147);
          } else {
            vThis55.Xi();
          }
        }
      };
      f178.prototype.Xi = function () {
        this.Wi();
      };
      f178.prototype.$i = function () {
        console.log("lo:fb");
        FB.logout(function () {});
      };
      f178.prototype._i = function () {
        console.log("lo:gg");
        v704.signOut();
      };
      return f178;
    }();
    var vF49 = function () {
      function f183() {
        this.cj = {};
        this.cj[v1069] = [1, 0.5, 0.25, 0.5];
        this.cj[v1070] = vF17._b.WHITE;
        this.cj[v1071] = [0, 0];
        this.cj[v1072] = [0, 0];
        var v1066 = vF17.cc.from(v1075, v1076, this.cj);
        this.zf = new vF17.hc(v1074, v1066);
      }
      var v1067 = "a1_" + f122();
      var v1068 = "a2_" + f122();
      var vAtob3 = "translationMatrix";
      var vAtob4 = "projectionMatrix";
      var v1069 = "u3_" + f122();
      var v1070 = "u4_" + f122();
      var v1071 = "u5_" + f122();
      var v1072 = "u6_" + f122();
      var v1073 = "v1_" + f122();
      var v1074 = new vF17.gc().addAttribute(v1067, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2).addAttribute(v1068, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2);
      var v1075 = "precision mediump float;attribute vec2 " + v1067 + ";attribute vec2 " + v1068 + ";uniform mat3 " + vAtob3 + ";uniform mat3 " + vAtob4 + ";varying vec2 " + v1073 + ";void main(){" + v1073 + "=" + v1068 + ";gl_Position=vec4((" + vAtob4 + "*" + vAtob3 + "*vec3(" + v1067 + ",1.0)).xy,0.0,1.0);}";
      var v1076 = "precision highp float;varying vec2 " + v1073 + ";uniform vec4 " + v1069 + ";uniform sampler2D " + v1070 + ";uniform vec2 " + v1071 + ";uniform vec2 " + v1072 + ";void main(){vec2 coord=" + v1073 + "*" + v1071 + "+" + v1072 + ";vec4 v_color_mix=" + v1069 + ";gl_FragColor=texture2D(" + v1070 + ",coord)*0.3+v_color_mix.a*vec4(v_color_mix.rgb,0.0);}";
      f183.prototype.Hf = function (p1151, p1152, p1153, p1154) {
        var v1077 = this.cj[v1069];
        v1077[0] = p1151;
        v1077[1] = p1152;
        v1077[2] = p1153;
        v1077[3] = p1154;
      };
      f183.prototype.Bf = function (p1155) {
        this.cj[v1070] = p1155;
      };
      f183.prototype.Te = function (p1156, p1157, p1158, p1159) {
        this.zf.position.x = p1156;
        this.zf.position.y = p1157;
        this.zf.scale.x = p1158;
        this.zf.scale.y = p1159;
        var v1078 = this.cj[v1071];
        v1078[0] = p1158 * 0.2520615384615385;
        v1078[1] = p1159 * 0.4357063736263738;
        var v1079 = this.cj[v1072];
        v1079[0] = p1156 * 0.2520615384615385;
        v1079[1] = p1157 * 0.4357063736263738;
      };
      return f183;
    }();
    var vF50 = function () {
      function f184() {
        this.jh = new vF17.ec();
        this.dj = 0;
        this.ej = 0;
      }
      f184.prototype.kh = function (p1160) {
        if (p1160 && p1160.Hc) {
          this.jh.texture = p1160.Hc;
          this.jh.anchor.set(p1160.Lh, p1160.Mh);
          this.dj = p1160.Nh;
          this.ej = p1160.Oh;
        }
      };
      f184.prototype.oh = function (p1161) {
        this.jh.width = p1161 * this.dj;
        this.jh.height = p1161 * this.ej;
      };
      f184.prototype.fj = function (p1162) {
        this.jh.rotation = p1162;
      };
      f184.prototype.nh = function (p1163, p1164) {
        this.jh.position.set(p1163, p1164);
      };
      f184.prototype.Mg = function (p1165) {
        this.jh.visible = p1165;
      };
      f184.prototype.gj = function () {
        return this.jh.visible;
      };
      f184.prototype.qh = function (p1166) {
        this.jh.alpha = p1166;
      };
      f184.prototype.Mf = function () {
        return this.jh;
      };
      f184.prototype.ih = function () {
        f120(this.jh);
      };
      return f184;
    }();
    var vF51 = function () {
      function f185(p1167) {
        this.fb = p1167;
        this.Mb = new vF51.Config();
        this.Hb = false;
        this.Ib = true;
        this.hj = false;
        this.Db = 0;
        this.ij = 0;
        this.Jb = 1;
        this.jj = 0;
        this.M = 0;
        this.Ff = {};
        this.kj = 0;
        this.lj = new Float32Array(vLN2002 * 2);
        this.mj = new Float32Array(vLN2002 * 2);
        this.nj = new Float32Array(vLN2002 * 2);
        this.oj = null;
        this.pj = null;
        this.qj = null;
        this.Tb();
      }
      var vLN2002 = 200;
      f185.prototype.Kb = function () {
        if (this.pj != null) {
          f120(this.pj.Rf);
        }
        if (this.qj != null) {
          f120(this.qj);
        }
      };
      f185.prototype.Tb = function () {
        this.Ig(0.25);
        this.Mb.ad = "";
        this.Ib = true;
        this.Ff = {};
        this.Mg(false);
      };
      f185.prototype.Fg = function (p1168) {
        this.Mb = p1168;
        this.rj(this.Hb);
      };
      f185.prototype.Mg = function (p1169) {
        var v1080 = this.Hb;
        this.Hb = p1169;
        this.rj(v1080);
      };
      f185.prototype.Ig = function (p1170) {
        this.M = p1170 * 50;
        var vP1170 = p1170;
        if (p1170 > this.fb.cf) {
          vP1170 = Math.atan((p1170 - this.fb.cf) / this.fb.df) * this.fb.df + this.fb.cf;
        }
        var v1081 = Math.sqrt(Math.pow(vP1170 * 5, 0.707106781186548) * 4 + 25);
        var v1082 = Math.min(vLN2002, Math.max(3, (v1081 - 5) * 5 + 1));
        var v1083 = this.kj;
        this.Db = (5 + v1081 * 0.9) * 0.025;
        this.kj = Math.floor(v1082);
        this.ij = v1082 - this.kj;
        if (v1083 > 0 && v1083 < this.kj) {
          var v1084 = this.lj[v1083 * 2 - 2];
          var v1085 = this.lj[v1083 * 2 - 1];
          var v1086 = this.mj[v1083 * 2 - 2];
          var v1087 = this.mj[v1083 * 2 - 1];
          var v1088 = this.nj[v1083 * 2 - 2];
          var v1089 = this.nj[v1083 * 2 - 1];
          for (var vV1083 = v1083; vV1083 < this.kj; vV1083++) {
            this.lj[vV1083 * 2] = v1084;
            this.lj[vV1083 * 2 + 1] = v1085;
            this.mj[vV1083 * 2] = v1086;
            this.mj[vV1083 * 2 + 1] = v1087;
            this.nj[vV1083 * 2] = v1088;
            this.nj[vV1083 * 2 + 1] = v1089;
          }
        }
      };
      f185.prototype.Lg = function (p1171, p1172) {
        this.kj = p1172;
        for (var vLN0178 = 0; vLN0178 < this.kj; vLN0178++) {
          this.lj[vLN0178 * 2] = this.mj[vLN0178 * 2] = this.nj[vLN0178 * 2] = p1171();
          this.lj[vLN0178 * 2 + 1] = this.mj[vLN0178 * 2 + 1] = this.nj[vLN0178 * 2 + 1] = p1171();
        }
      };
      f185.prototype.Kg = function (p1173, p1174, p1175) {
        this.hj = p1175;
        for (var vLN0179 = 0; vLN0179 < this.kj; vLN0179++) {
          this.lj[vLN0179 * 2] = this.mj[vLN0179 * 2];
          this.lj[vLN0179 * 2 + 1] = this.mj[vLN0179 * 2 + 1];
        }
        var v1090 = p1173 - this.mj[0];
        var v1091 = p1174 - this.mj[1];
        this.sj(v1090, v1091, this.kj, this.mj);
      };
      f185.prototype.sj = function (p1176, p1177, p1178, p1179) {
        var v1092 = Math.hypot(p1176, p1177);
        if (!(v1092 <= 0)) {
          var v1093 = p1179[0];
          var vUndefined12 = undefined;
          p1179[0] += p1176;
          var v1094 = p1179[1];
          var vUndefined13 = undefined;
          p1179[1] += p1177;
          var v1095 = this.Db / (this.Db + v1092);
          var v1096 = 1 - v1095 * 2;
          for (var vLN19 = 1, v1097 = p1178 - 1; vLN19 < v1097; vLN19++) {
            vUndefined12 = p1179[vLN19 * 2];
            p1179[vLN19 * 2] = p1179[vLN19 * 2 - 2] * v1096 + (vUndefined12 + v1093) * v1095;
            v1093 = vUndefined12;
            vUndefined13 = p1179[vLN19 * 2 + 1];
            p1179[vLN19 * 2 + 1] = p1179[vLN19 * 2 - 1] * v1096 + (vUndefined13 + v1094) * v1095;
            v1094 = vUndefined13;
          }
          v1095 = this.ij * this.Db / (this.ij * this.Db + v1092);
          v1096 = 1 - v1095 * 2;
          p1179[p1178 * 2 - 2] = p1179[p1178 * 2 - 4] * v1096 + (p1179[p1178 * 2 - 2] + v1093) * v1095;
          p1179[p1178 * 2 - 1] = p1179[p1178 * 2 - 3] * v1096 + (p1179[p1178 * 2 - 1] + v1094) * v1095;
        }
      };
      f185.prototype.Gf = function () {
        return {
          x: this.nj[0],
          y: this.nj[1]
        };
      };
      f185.prototype.Hg = function (p1180, p1181) {
        var vLN10000002 = 1000000;
        var vP1180 = p1180;
        var vP1181 = p1181;
        for (var vLN0180 = 0; vLN0180 < this.kj; vLN0180++) {
          var v1098 = this.nj[vLN0180 * 2];
          var v1099 = this.nj[vLN0180 * 2 + 1];
          var v1100 = Math.hypot(p1180 - v1098, p1181 - v1099);
          if (v1100 < vLN10000002) {
            vLN10000002 = v1100;
            vP1180 = v1098;
            vP1181 = v1099;
          }
        }
        return {
          x: vP1180,
          y: vP1181,
          distance: vLN10000002
        };
      };
      f185.prototype.vb = function (p1182) {
        this.oj = p1182;
      };
      f185.prototype.Fb = function (p1183, p1184) {
        this.Jb = f115(this.Jb, this.Ib ? this.hj ? 0.9 + Math.cos(p1183 / 400 * Math.PI) * 0.1 : 1 : 0, p1184, 1 / 800);
        this.jj = f115(this.jj, this.Ib ? this.hj ? 1 : 0 : 1, p1184, 0.0025);
        if (this.pj != null) {
          this.pj.Rf.alpha = this.Jb;
        }
        if (this.qj != null) {
          this.qj.alpha = this.Jb;
        }
      };
      f185.prototype.Gb = function (p1185, p1186, p1187, p1188) {
        if (this.Hb && this.Ib) {
          var v1101 = Math.pow(0.11112, p1186 / 95);
          for (var vLN0181 = 0; vLN0181 < this.kj; vLN0181++) {
            var vF117 = f117(this.lj[vLN0181 * 2], this.mj[vLN0181 * 2], p1187);
            var vF1172 = f117(this.lj[vLN0181 * 2 + 1], this.mj[vLN0181 * 2 + 1], p1187);
            this.nj[vLN0181 * 2] = f117(vF117, this.nj[vLN0181 * 2], v1101);
            this.nj[vLN0181 * 2 + 1] = f117(vF1172, this.nj[vLN0181 * 2 + 1], v1101);
          }
        }
        if (this.pj != null && this.Hb) {
          this.pj.tj(this, p1185, p1186, p1188);
        }
        if (this.qj != null) {
          this.qj.If.x = this.nj[0];
          this.qj.If.y = this.nj[1] - this.Db * 3;
        }
      };
      f185.prototype.rj = function (p1189) {
        if (this.Hb) {
          if (!p1189) {
            this.uj();
          }
        } else {
          if (this.pj != null) {
            f120(this.pj.Rf);
          }
          if (this.qj != null) {
            f120(this.qj);
          }
        }
      };
      f185.prototype.uj = function () {
        var vF1035 = f103();
        if (this.pj == null) {
          this.pj = new vF53();
        } else {
          f120(this.pj.Rf);
        }
        this.pj.hh(vF1035.o.fb.af, vF1035.p.Dc().ed(this.Mb.cg), vF1035.p.Dc().dd(this.Mb.dg), vF1035.p.Dc().fd(this.Mb.Bg), vF1035.p.Dc().gd(this.Mb.Cg), vF1035.p.Dc().hd(this.Mb.Dg), vF1035.p.Dc().jd(this.Mb.Eg));
        if (this.qj == null) {
          this.qj = new vF52("");
          this.qj.style.fontFamily = "vuonghiep";
          this.qj.anchor.set(0.5);
        } else {
          f120(this.qj);
        }
        this.qj.style.fontSize = 15;
        this.qj.style.fill = vF1035.p.Dc().dd(this.Mb.dg)._c;
        this.qj.text = this.Mb.ad;
        this.oj.Qf(this.Mb.Lb, this.pj, this.qj);
      };
      f185.Config = function () {
        function f186() {
          this.Lb = 0;
          this.cg = vF29.TEAM_DEFAULT;
          this.dg = 0;
          this.Bg = 0;
          this.Cg = 0;
          this.Dg = 0;
          this.Eg = 0;
          this.ad = "";
        }
        return f186;
      }();
      return f185;
    }();
    var vF52 = function () {
      return f111(vF17.fc, function (p1190, p1191, p1192) {
        vF17.fc.call(this, p1190, p1191, p1192);
        this.If = {
          x: 0,
          y: 0
        };
      });
    }();
    var vF53 = function () {
      function f187() {
        this.Rf = new vF17.Zb();
        this.Rf.sortableChildren = true;
        this.vj = new vF54();
        this.vj.zIndex = vLN00012 * ((vLN7972 + 1) * 2 + 1 + 3);
        this.wj = 0;
        this.xj = new Array(vLN7972);
        this.xj[0] = this.yj(0, new vF50(), new vF50());
        for (var vLN110 = 1; vLN110 < vLN7972; vLN110++) {
          this.xj[vLN110] = this.yj(vLN110, new vF50(), new vF50());
        }
        this.zj = 0;
        this.Aj = 0;
        this.Bj = 0;
      }
      var vLN00012 = 0.001;
      var vLN7972 = 797;
      var v1102 = Math.PI * 0.1;
      var v1103 = -0.06640625;
      var vLN0843752 = 0.84375;
      var vLN025781252 = 0.2578125;
      var v1104 = -0.03515625;
      var v1105 = -0.0625;
      var vLN056252 = 0.5625;
      var v1106 = v1103 * 3 + vLN0843752;
      var v1107 = vLN025781252 - v1103 * 3;
      var v1108 = v1103 + v1104;
      var vLN03752 = 0.375;
      var vLN0752 = 0.75;
      var v1109 = v1105 + v1105;
      var v1110 = v1104 * 3 + vLN025781252;
      var v1111 = vLN0843752 - v1104 * 3;
      var v1112 = v1104 + v1103;
      f187.prototype.yj = function (p1193, p1194, p1195) {
        var v1113 = new vF55(p1194, p1195);
        p1194.jh.zIndex = vLN00012 * ((vLN7972 - p1193) * 2 + 1 + 3);
        p1195.jh.zIndex = vLN00012 * ((vLN7972 - p1193) * 2 - 2 + 3);
        return v1113;
      };
      f187.prototype.hh = function (p1196, p1197, p1198, p1199, p1200, p1201, p1202) {
        var v1114 = p1198.Zc;
        var v1115 = p1196 == vO42._e ? p1197.bd.$c : p1198.$c;
        if (v1114.length > 0 && v1115.length > 0) {
          for (var vLN0182 = 0; vLN0182 < this.xj.length; vLN0182++) {
            this.xj[vLN0182].Nf.kh(v1114[vLN0182 % v1114.length]);
            this.xj[vLN0182].Pf.kh(v1115[vLN0182 % v1115.length]);
          }
        }
        this.vj.hh(p1199, p1200, p1201, p1202);
      };
      var vF54 = function () {
        var vF1115 = f111(vF17.Zb, function () {
          vF17.Zb.call(this);
          this.sortableChildren = true;
          this.Cj = [];
          this.Dj = [];
          this.Ej = [];
          this.Fj = [];
          this.Gj = new vF17.Zb();
          this.Hj = [];
          for (var vLN0183 = 0; vLN0183 < 4; vLN0183++) {
            var v1116 = new vF50();
            v1116.kh(f103().q.Ph);
            this.Gj.addChild(v1116.jh);
            this.Hj.push(v1116);
          }
          this.Gj.zIndex = 0.0011;
          this.addChild(this.Gj);
          this.Ij();
          this.Jj = new vF50();
          this.Jj.kh(f103().q.Qh);
          this.Jj.jh.zIndex = 0.001;
          this.addChild(this.Jj.jh);
          this.Kj();
          this.xEmojiType_headshot = new vF50();
          this.xEmojiType_headshot.kh(f103().q.emoji_headshot);
          this.xEmojiType_headshot.jh.zIndex = 0.001;
          this.addChild(this.xEmojiType_headshot.jh);
          this.xzs();
          this.xEmojiType_kill = new vF50();
          this.xEmojiType_kill.kh(f103().q.emoji_kill);
          this.xEmojiType_kill.jh.zIndex = 0.001;
          this.addChild(this.xEmojiType_kill.jh);
          this.zas();
          this.guia_mobile = new vF50();
          this.guia_mobile.kh(f103().q.Id_mobileguia);
          this.guia_mobile.jh.zIndex = 0.001;
          this.addChild(this.guia_mobile.jh);
        });
        vF1115.prototype.hh = function (p1203, p1204, p1205, p1206) {
          this.Lj(0.002, this.Cj, p1203.Zc);
          this.Lj(0.003, this.Dj, p1204.Zc);
          this.Lj(0.004, this.Fj, p1206.Zc);
          this.Lj(0.005, this.Ej, p1205.Zc);
        };
        vF1115.prototype.Lj = function (p1207, p1208, p1209) {
          while (p1209.length > p1208.length) {
            var v1117 = new vF50();
            p1208.push(v1117);
            this.addChild(v1117.Mf());
          }
          while (p1209.length < p1208.length) {
            p1208.pop().ih();
          }
          var vP1207 = p1207;
          for (var vLN0184 = 0; vLN0184 < p1209.length; vLN0184++) {
            vP1207 += 0.0001;
            var v1118 = p1208[vLN0184];
            v1118.kh(p1209[vLN0184]);
            v1118.jh.zIndex = vP1207;
          }
        };
        vF1115.prototype.mh = function (p1210, p1211, p1212, p1213) {
          this.visible = true;
          this.position.set(p1210, p1211);
          this.rotation = p1213;
          for (var vLN0185 = 0; vLN0185 < this.Cj.length; vLN0185++) {
            this.Cj[vLN0185].oh(p1212);
          }
          for (var vLN0186 = 0; vLN0186 < this.Dj.length; vLN0186++) {
            this.Dj[vLN0186].oh(p1212);
          }
          for (var vLN0187 = 0; vLN0187 < this.Ej.length; vLN0187++) {
            this.Ej[vLN0187].oh(p1212);
          }
          for (var vLN0188 = 0; vLN0188 < this.Fj.length; vLN0188++) {
            this.Fj[vLN0188].oh(p1212);
          }
        };
        vF1115.prototype.lh = function () {
          this.visible = false;
        };
        vF1115.prototype.Mj = function (p1214, p1215, p1216, p1217) {
          this.Gj.visible = true;
          var v1119 = p1216 / 1000;
          var v1120 = 1 / this.Hj.length;
          for (var vLN0189 = 0; vLN0189 < this.Hj.length; vLN0189++) {
            var v1121 = 1 - (v1119 + v1120 * vLN0189) % 1;
            this.Hj[vLN0189].jh.alpha = 1 - v1121;
            this.Hj[vLN0189].oh(p1215 * (0.5 + v1121 * 4.5));
          }
        };
        vF1115.prototype.Ij = function () {
          this.Gj.visible = false;
        };
        vF1115.prototype.Nj = function (p1218, p1219, p1220, p1221) {
          this.Jj.jh.visible = true;
          this.Jj.jh.alpha = f115(this.Jj.jh.alpha, p1218.hj ? 0.9 : 0.2, p1221, 0.0025);
          this.Jj.oh(p1219);
        };
        vF1115.prototype.Kj = function () {
          this.Jj.jh.visible = false;
        };
        vF1115.prototype.xzs = function () {
          this.xEmojiType_headshot.jh.visible = false;
        };
        vF1115.prototype.zas = function () {
          this.xEmojiType_kill.jh.visible = false;
        };
        vF1115.prototype.Rx = function (p1222, p1223, p1224, p1225) {
          this.guia_mobile.jh.visible = true;
          this.guia_mobile.oh(p1223);
        };
        vF1115.prototype.Njh = function (p1226, p1227, p1228, p1229) {
          this.xEmojiType_headshot.jh.visible = true;
          this.xEmojiType_headshot.oh(p1227);
        };
        vF1115.prototype.Njk = function (p1230, p1231, p1232, p1233) {
          this.xEmojiType_kill.jh.visible = true;
          this.xEmojiType_kill.oh(p1231);
        };
        return vF1115;
      }();
      f187.prototype.Oj = function (p1234) {
        return this.Aj + this.Bj * Math.sin(p1234 * v1102 - this.zj);
      };
      f187.prototype.tj = function (p1235, p1236, p1237, p1238) {
        var v1122 = p1235.Db * 2;
        var v1123 = p1235.nj;
        var v1124 = p1235.kj;
        var v1125 = v1124 * 4 - 3;
        var vV1125 = v1125;
        this.zj = p1236 / 400 * Math.PI;
        this.Aj = v1122 * 1.5;
        this.Bj = v1122 * 0.15 * p1235.jj;
        var vUndefined14 = undefined;
        var vUndefined15 = undefined;
        var vUndefined16 = undefined;
        var vUndefined17 = undefined;
        var vUndefined18 = undefined;
        var vUndefined19 = undefined;
        var vUndefined20 = undefined;
        var vUndefined21 = undefined;
        vUndefined15 = v1123[0];
        vUndefined19 = v1123[1];
        if (p1238(vUndefined15, vUndefined19)) {
          vUndefined16 = v1123[2];
          vUndefined20 = v1123[3];
          vUndefined17 = v1123[4];
          vUndefined21 = v1123[5];
          var v1126 = Math.atan2(vUndefined21 + vUndefined19 * 2 - vUndefined20 * 3, vUndefined17 + vUndefined15 * 2 - vUndefined16 * 3);
          this.vj.mh(vUndefined15, vUndefined19, v1122, v1126);
          this.xj[0].mh(vUndefined15, vUndefined19, v1122, this.Oj(0), v1126);
          this.xj[1].mh(v1106 * vUndefined15 + v1107 * vUndefined16 + v1108 * vUndefined17, v1106 * vUndefined19 + v1107 * vUndefined20 + v1108 * vUndefined21, v1122, this.Oj(1), vF55.angleBetween(this.xj[0], this.xj[2]));
          this.xj[2].mh(vLN03752 * vUndefined15 + vLN0752 * vUndefined16 + v1109 * vUndefined17, vLN03752 * vUndefined19 + vLN0752 * vUndefined20 + v1109 * vUndefined21, v1122, this.Oj(2), vF55.angleBetween(this.xj[1], this.xj[3]));
          this.xj[3].mh(v1110 * vUndefined15 + v1111 * vUndefined16 + v1112 * vUndefined17, v1110 * vUndefined19 + v1111 * vUndefined20 + v1112 * vUndefined21, v1122, this.Oj(3), vF55.angleBetween(this.xj[2], this.xj[4]));
        } else {
          this.vj.lh();
          this.xj[0].lh();
          this.xj[1].lh();
          this.xj[2].lh();
          this.xj[3].lh();
        }
        var vLN44 = 4;
        for (var vLN23 = 2, v1127 = v1124 * 2 - 4; vLN23 < v1127; vLN23 += 2) {
          vUndefined15 = v1123[vLN23];
          vUndefined19 = v1123[vLN23 + 1];
          if (p1238(vUndefined15, vUndefined19)) {
            vUndefined14 = v1123[vLN23 - 2];
            vUndefined18 = v1123[vLN23 - 1];
            vUndefined16 = v1123[vLN23 + 2];
            vUndefined20 = v1123[vLN23 + 3];
            vUndefined17 = v1123[vLN23 + 4];
            vUndefined21 = v1123[vLN23 + 5];
            this.xj[vLN44].mh(vUndefined15, vUndefined19, v1122, this.Oj(vLN44), vF55.angleBetween(this.xj[vLN44 - 1], this.xj[vLN44 + 1]));
            vLN44++;
            this.xj[vLN44].mh(v1103 * vUndefined14 + vLN0843752 * vUndefined15 + vLN025781252 * vUndefined16 + v1104 * vUndefined17, v1103 * vUndefined18 + vLN0843752 * vUndefined19 + vLN025781252 * vUndefined20 + v1104 * vUndefined21, v1122, this.Oj(vLN44), vF55.angleBetween(this.xj[vLN44 - 1], this.xj[vLN44 + 1]));
            vLN44++;
            this.xj[vLN44].mh(v1105 * vUndefined14 + vLN056252 * vUndefined15 + vLN056252 * vUndefined16 + v1105 * vUndefined17, v1105 * vUndefined18 + vLN056252 * vUndefined19 + vLN056252 * vUndefined20 + v1105 * vUndefined21, v1122, this.Oj(vLN44), vF55.angleBetween(this.xj[vLN44 - 1], this.xj[vLN44 + 1]));
            vLN44++;
            this.xj[vLN44].mh(v1104 * vUndefined14 + vLN025781252 * vUndefined15 + vLN0843752 * vUndefined16 + v1103 * vUndefined17, v1104 * vUndefined18 + vLN025781252 * vUndefined19 + vLN0843752 * vUndefined20 + v1103 * vUndefined21, v1122, this.Oj(vLN44), vF55.angleBetween(this.xj[vLN44 - 1], this.xj[vLN44 + 1]));
            vLN44++;
          } else {
            this.xj[vLN44].lh();
            vLN44++;
            this.xj[vLN44].lh();
            vLN44++;
            this.xj[vLN44].lh();
            vLN44++;
            this.xj[vLN44].lh();
            vLN44++;
          }
        }
        vUndefined15 = v1123[v1124 * 2 - 4];
        vUndefined19 = v1123[v1124 * 2 - 3];
        if (p1238(vUndefined15, vUndefined19)) {
          vUndefined14 = v1123[v1124 * 2 - 6];
          vUndefined18 = v1123[v1124 * 2 - 5];
          vUndefined16 = v1123[v1124 * 2 - 2];
          vUndefined20 = v1123[v1124 * 2 - 1];
          this.xj[v1125 - 5].mh(vUndefined15, vUndefined19, v1122, this.Oj(v1125 - 5), vF55.angleBetween(this.xj[v1125 - 6], this.xj[v1125 - 4]));
          this.xj[v1125 - 4].mh(v1112 * vUndefined14 + v1111 * vUndefined15 + v1110 * vUndefined16, v1112 * vUndefined18 + v1111 * vUndefined19 + v1110 * vUndefined20, v1122, this.Oj(v1125 - 4), vF55.angleBetween(this.xj[v1125 - 5], this.xj[v1125 - 3]));
          this.xj[v1125 - 3].mh(v1109 * vUndefined14 + vLN0752 * vUndefined15 + vLN03752 * vUndefined16, v1109 * vUndefined18 + vLN0752 * vUndefined19 + vLN03752 * vUndefined20, v1122, this.Oj(v1125 - 3), vF55.angleBetween(this.xj[v1125 - 4], this.xj[v1125 - 2]));
          this.xj[v1125 - 2].mh(v1108 * vUndefined14 + v1107 * vUndefined15 + v1106 * vUndefined16, v1108 * vUndefined18 + v1107 * vUndefined19 + v1106 * vUndefined20, v1122, this.Oj(v1125 - 2), vF55.angleBetween(this.xj[v1125 - 3], this.xj[v1125 - 1]));
          this.xj[v1125 - 1].mh(vUndefined16, vUndefined20, v1122, this.Oj(v1125 - 1), vF55.angleBetween(this.xj[v1125 - 2], this.xj[v1125 - 1]));
        } else {
          this.xj[v1125 - 5].lh();
          this.xj[v1125 - 4].lh();
          this.xj[v1125 - 3].lh();
          this.xj[v1125 - 2].lh();
          this.xj[v1125 - 1].lh();
        }
        if (this.wj == 0 && vV1125 > 0) {
          this.Rf.addChild(this.vj);
        }
        if (this.wj > 0 && vV1125 == 0) {
          f120(this.vj);
        }
        while (this.wj < vV1125) {
          this.Rf.addChild(this.xj[this.wj].Nf.Mf());
          this.Rf.addChild(this.xj[this.wj].Pf.Mf());
          this.wj += 1;
        }
        while (this.wj > vV1125) {
          this.wj -= 1;
          this.xj[this.wj].Pf.ih();
          this.xj[this.wj].Nf.ih();
        }
        var v1128 = p1235.Ff[vF18.MAGNETIC_TYPE];
        if (this.xj[0].gj() && v1128 != null && v1128.sc) {
          this.vj.Mj(p1235, v1122, p1236, p1237);
        } else {
          this.vj.Ij();
        }
        var v1129 = p1235.Ff[vF18.VELOCITY_TYPE];
        if (this.xj[0].gj() && v1129 != null && v1129.sc) {
          this.vj.Nj(p1235, v1122, p1236, p1237);
        } else {
          this.vj.Kj();
        }
        ;
        if (vO29.ModeStremeremoj) {} else {
          if (vO29.emoji_headshot && p1235 && p1235.Mb && p1235.Mb.Mb) {
            this.vj.Njh(p1235, v1122, p1236, p1237);
          } else {
            this.vj.xzs();
          }
          if (vO29.emoji_kill && p1235 && p1235.Mb && p1235.Mb.Mb) {
            this.vj.Njk(p1235, v1122, p1236, p1237);
          } else {
            this.vj.zas();
          }
        }
        ;
        if (vO29.mobile && vO29.arrow && p1235 && p1235.Mb && p1235.Mb.Mb) {
          this.vj.Rx(p1235, v1122, p1236, p1237);
        }
      };
      var vF55 = function () {
        function f188(p1239, p1240) {
          this.Nf = p1239;
          this.Nf.Mg(false);
          this.Pf = p1240;
          this.Pf.Mg(false);
        }
        f188.prototype.mh = function (p1241, p1242, p1243, p1244, p1245) {
          this.Nf.Mg(true);
          this.Nf.nh(p1241, p1242);
          this.Nf.oh(p1243);
          this.Nf.fj(p1245);
          this.Pf.Mg(true);
          this.Pf.nh(p1241, p1242);
          this.Pf.oh(p1244);
          this.Pf.fj(p1245);
        };
        f188.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        f188.prototype.gj = function () {
          return this.Nf.gj();
        };
        f188.angleBetween = function (p1246, p1247) {
          return Math.atan2(p1246.Nf.jh.position.y - p1247.Nf.jh.position.y, p1246.Nf.jh.position.x - p1247.Nf.jh.position.x);
        };
        return f188;
      }();
      return f187;
    }();
    var vF56 = function () {
      function f189(p1248) {
        this.se = p1248;
        this.te = p1248.get()[0];
        this.ue = new vF17.ac({
          view: this.te,
          transparent: true
        });
        this.sc = false;
        this.Pj = new vF53();
        this.Pj.Rf.addChild(this.Pj.vj);
        this.Qj = 0;
        this.Rj = 0;
        this.Ng = 1;
        this.rh = 0;
        this.sh = 0;
        this.th = 0;
        this.uh = 0;
        this.vh = 0;
        this.Sj = false;
        this.Tj = false;
        this.Uj = false;
        this.Vj = false;
        this.Wj = false;
        this.Xj = false;
        this.Yj = false;
        this.Zj = false;
        this.$j = false;
        this._j = false;
        this.Ra();
        this.Fb();
        var vThis56 = this;
        f103().p.ca(function () {
          if (f103().p.W()) {
            vThis56.Fb();
          }
        });
      }
      f189.prototype.Fb = function () {
        var vF1036 = f103();
        this.Pj.hh(vO42.$e, null, vF1036.p.Dc().dd(this.rh), vF1036.p.Dc().fd(this.sh), vF1036.p.Dc().gd(this.th), vF1036.p.Dc().hd(this.uh), vF1036.p.Dc().jd(this.vh));
      };
      f189.prototype.Le = function (p1249) {
        this.sc = p1249;
      };
      f189.prototype.ak = function (p1250, p1251, p1252) {
        this.rh = p1250;
        this.Sj = p1251;
        this.Xj = p1252;
        this.Fb();
      };
      f189.prototype.bk = function (p1253, p1254, p1255) {
        this.sh = p1253;
        this.Tj = p1254;
        this.Yj = p1255;
        this.Fb();
      };
      f189.prototype.ck = function (p1256, p1257, p1258) {
        this.th = p1256;
        this.Uj = p1257;
        this.Zj = p1258;
        this.Fb();
      };
      f189.prototype.dk = function (p1259, p1260, p1261) {
        this.uh = p1259;
        this.Vj = p1260;
        this.$j = p1261;
        this.Fb();
      };
      f189.prototype.ek = function (p1262, p1263, p1264) {
        this.vh = p1262;
        this.Wj = p1263;
        this._j = p1264;
        this.Fb();
      };
      f189.prototype.Ra = function () {
        var v1130 = window.devicePixelRatio ? window.devicePixelRatio : 1;
        this.Qj = this.se.width();
        this.Rj = this.se.height();
        this.ue.resize(this.Qj, this.Rj);
        this.ue.resolution = v1130;
        this.te.width = v1130 * this.Qj;
        this.te.height = v1130 * this.Rj;
        this.Ng = this.Rj / 4;
        var vF113 = f113(1, this.Pj.xj.length, Math.floor(this.Qj / this.Ng) * 2 - 5);
        if (this.Pj.wj != vF113) {
          for (var vVF113 = vF113; vVF113 < this.Pj.xj.length; vVF113++) {
            this.Pj.xj[vVF113].lh();
          }
          while (this.Pj.wj < vF113) {
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Nf.Mf());
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Pf.Mf());
            this.Pj.wj += 1;
          }
          while (this.Pj.wj > vF113) {
            this.Pj.wj -= 1;
            this.Pj.xj[this.Pj.wj].Pf.ih();
            this.Pj.xj[this.Pj.wj].Nf.ih();
          }
        }
      };
      f189.prototype.Pa = function () {
        if (this.sc) {
          if (f103().p.W) {
            var v1131 = Date.now();
            var v1132 = v1131 / 200;
            var v1133 = Math.sin(v1132);
            var v1134 = this.Ng;
            var v1135 = this.Ng * 1.5;
            var v1136 = this.Qj - (this.Qj - v1134 * 0.5 * (this.Pj.wj - 1)) * 0.5;
            var v1137 = this.Rj * 0.5;
            var vLN0190 = 0;
            var vLN0191 = 0;
            for (var v1138 = -1; v1138 < this.Pj.wj; v1138++) {
              var vV1138 = v1138;
              var v1139 = Math.cos(vV1138 * 1 / 12 * Math.PI - v1132) * (1 - Math.pow(16, vV1138 * -1 / 12));
              if (v1138 >= 0) {
                var v1140 = v1136 + v1134 * -0.5 * vV1138;
                var v1141 = v1137 + v1134 * 0.5 * v1139;
                var v1142 = v1134 * 2;
                var v1143 = v1135 * 2;
                var v1144 = Math.atan2(vLN0191 - v1139, vV1138 - vLN0190);
                if (v1138 == 0) {
                  this.Pj.vj.mh(v1140, v1141, v1142, v1144);
                }
                this.Pj.xj[v1138].mh(v1140, v1141, v1142, v1143, v1144);
                var v1145 = this.Sj ? this.Xj ? 0.4 + v1133 * 0.2 : 0.9 + v1133 * 0.1 : this.Xj ? 0.4 : 1;
                this.Pj.xj[v1138].Nf.qh(v1145);
                this.Pj.xj[v1138].Pf.qh(v1145);
              }
              vLN0190 = vV1138;
              vLN0191 = v1139;
            }
            for (var vLN0192 = 0; vLN0192 < this.Pj.vj.Cj.length; vLN0192++) {
              var v1146 = this.Tj ? this.Yj ? 0.4 + v1133 * 0.2 : 0.9 + v1133 * 0.1 : this.Yj ? 0.4 : 1;
              this.Pj.vj.Cj[vLN0192].qh(v1146);
            }
            for (var vLN0193 = 0; vLN0193 < this.Pj.vj.Dj.length; vLN0193++) {
              var v1147 = this.Uj ? this.Zj ? 0.4 + v1133 * 0.2 : 0.9 + v1133 * 0.1 : this.Zj ? 0.4 : 1;
              this.Pj.vj.Dj[vLN0193].qh(v1147);
            }
            for (var vLN0194 = 0; vLN0194 < this.Pj.vj.Ej.length; vLN0194++) {
              var v1148 = this.Vj ? this.$j ? 0.4 + v1133 * 0.2 : 0.9 + v1133 * 0.1 : this.$j ? 0.4 : 1;
              this.Pj.vj.Ej[vLN0194].qh(v1148);
            }
            for (var vLN0195 = 0; vLN0195 < this.Pj.vj.Fj.length; vLN0195++) {
              var v1149 = this.Wj ? this._j ? 0.4 + v1133 * 0.2 : 0.9 + v1133 * 0.1 : this._j ? 0.4 : 1;
              this.Pj.vj.Fj[vLN0195].qh(v1149);
            }
            this.ue.render(this.Pj.Rf);
          }
        }
      };
      return f189;
    }();
    var vF57 = function () {
      function f190(p1265) {
        this.rc = p1265;
      }
      f190.fk = $("#game-view");
      f190.gk = $("#results-view");
      f190.hk = $("#main-menu-view");
      f190.ik = $("#popup-view");
      f190.jk = $("#toaster-view");
      f190.kk = $("#loading-view");
      f190.lk = $("#stretch-box");
      f190.mk = $("#game-canvas");
      f190.di = $("#background-canvas");
      f190.nk = $("#social-buttons");
      f190.ok = $("#markup-wrap");
      f190.prototype.a = function () {};
      f190.prototype.ii = function () {};
      f190.prototype.ji = function () {};
      f190.prototype.ei = function () {};
      f190.prototype.Ra = function () {};
      f190.prototype.Pa = function (p1266, p1267) {};
      return f190;
    }();
    var vF58 = function () {
      function f191(p1268, p1269, p1270, p1271, p1272, p1273) {
        var v1150 = "<div><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" x=\"0\" y=\"0\" viewBox=\"0 0 456 456\" xml:space=\"preserve\"><rect x=\"0\" y=\"0\" width=\"456\" height=\"456\" fill=\"#F7941D\"/><path d=\"M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z\" fill=\"#fff\"/></svg><span>" + p1268 + "</span></div>";
        var v$122 = $(v1150);
        v$122.click(function () {
          if (typeof FB != "undefined" && FB.ui !== undefined) {
            FB.ui({
              method: "feed",
              display: "popup",
              link: p1269,
              name: p1270,
              caption: p1271,
              description: p1272,
              picture: p1273
            }, function () {});
          }
        });
        return v$122;
      }
      var v$123 = $("#final-caption");
      var v$124 = $("#final-continue");
      var v$125 = $("#congrats-bg");
      var v$126 = $("#unl6wj4czdl84o9b");
      $("#congrats");
      var v$127 = $("#final-share-fb");
      var v$128 = $("#final-message");
      var v$129 = $("#final-score");
      var v$130 = $("#final-place");
      var v$131 = $("#final-board");
      var vF1116 = f111(vF57, function () {
        vF57.call(this, 0);
        var vThis57 = this;
        var vF1037 = f103();
        var v1151 = vF57.mk.get()[0];
        console.log("sSE=" + v1208.qk);
        v$127.toggle(v1208.qk);
        v$123.text(f106("index.game.result.title"));
        v$124.text(f106("index.game.result.continue"));
        v$124.click(function () {
          vF1037.r.Cd();
          vF1037.f.Ma.c();
          vF1037.r.G(vF21.AudioState.F);
          vF1037.s.I(vF1037.s.F);
        });
        window.detecNewCodeAndPacth = () => {
          $("#game-canvas").attr("width", window.innerWidth);
          return $("#game-canvas").attr("height", window.innerHeight);
        };
        $("html").keydown(function (p1274) {
          if (p1274.keyCode == 32) {
            vThis57.rk = true;
          }
          if (p1274.keyCode == 107) {
            detecNewCodeAndPacth();
            setInterval(detecNewCodeAndPacth, 1000);
          }
          if (p1274.keyCode == 109) {
            detecNewCodeAndPacth();
            setInterval(detecNewCodeAndPacth, 1000);
          }
          if (vO29.KeyCodeRespawn == p1274.keyCode) {
            vThis57.rk = true;
            window.onclose();
            setTimeout(function () {
              $("#final-continue").click();
              $("#mm-action-play").click();
              $("#adbl-continue").click();
            }, 1000);
          }
        }).keyup(function (p1275) {
          if (p1275.keyCode == 32) {
            vThis57.rk = false;
          }
        });
        v1151.addEventListener("touchmove", function (p1276) {
          if (!vF15() || !vO29.gamePad.checked) {
            if (p1276 = p1276 || window.event) {
              p1276 = p1276.touches[0];
              if (p1276.clientX !== undefined) {
                vThis57.sk = Math.atan2(p1276.clientY - v1151.offsetHeight * 0.5, p1276.clientX - v1151.offsetWidth * 0.5);
              } else {
                vThis57.sk = Math.atan2(p1276.pageY - v1151.offsetHeight * 0.5, p1276.pageX - v1151.offsetWidth * 0.5);
              }
            }
          }
        }, true);
        v1151.addEventListener("touchstart", function (p1277) {
          if (p1277 = p1277 || window.event) {
            vThis57.rk = p1277.touches.length >= 2;
          }
          p1277.preventDefault();
        }, true);
        v1151.addEventListener("touchend", function (p1278) {
          if (p1278 = p1278 || window.event) {
            vThis57.rk = p1278.touches.length >= 2;
          }
        }, true);
        v1151.addEventListener("mousemove", function (p1279) {
          if (!v692) {
            if (p1279 = p1279 || window.event && p1279.clientX !== undefined) {
              vThis57.sk = Math.atan2(p1279.clientY - v1151.offsetHeight * 0.5, p1279.clientX - v1151.offsetWidth * 0.5);
            }
          }
        }, true);
        v1151.addEventListener("mousedown", function (p1280) {
          console.log(p1280);
          vThis57.rk = true;
        }, true);
        v1151.addEventListener("mouseup", function (p1281) {
          console.log(p1281);
          vThis57.rk = false;
        }, true);
        this.wb = new vF30(vF57.mk);
        this.cb = 0;
        this.sk = 0;
        this.rk = false;
        vO28.eventoPrincipal = vThis57;
      });
      vF1116.prototype.a = function () {};
      vF1116.prototype.ii = function () {
        if (this.cb == 0) {
          vF57.fk.stop();
          vF57.fk.fadeIn(500);
          vF57.gk.stop();
          vF57.gk.fadeOut(1);
          vF57.hk.stop();
          vF57.hk.fadeOut(50);
          vF57.ik.stop();
          vF57.ik.fadeOut(50);
          vF57.jk.stop();
          vF57.jk.fadeOut(50);
          vF57.kk.stop();
          vF57.kk.fadeOut(50);
          vF57.lk.stop();
          vF57.lk.fadeOut(1);
          vF57.di.stop();
          vF57.di.fadeOut(50);
          vF23.Le(false);
          vF57.nk.stop();
          vF57.nk.fadeOut(50);
          vF57.ok.stop();
          vF57.ok.fadeOut(50);
        } else {
          vF57.fk.stop();
          vF57.fk.fadeIn(500);
          vF57.gk.stop();
          vF57.gk.fadeIn(500);
          vF57.hk.stop();
          vF57.hk.fadeOut(50);
          vF57.ik.stop();
          vF57.ik.fadeOut(50);
          vF57.jk.stop();
          vF57.jk.fadeOut(50);
          vF57.kk.stop();
          vF57.kk.fadeOut(50);
          vF57.lk.stop();
          vF57.lk.fadeOut(1);
          vF57.di.stop();
          vF57.di.fadeOut(50);
          vF23.Le(false);
          vF57.nk.stop();
          vF57.nk.fadeOut(50);
          vF57.ok.stop();
          vF57.ok.fadeOut(50);
        }
      };
      vF1116.prototype.J = function () {
        this.cb = 0;
        return this;
      };
      vF1116.prototype.Fa = function () {
        console.log("re");
        v$125.hide();
        setTimeout(function () {
          console.log("fi_bg");
          v$125.fadeIn(500);
        }, 3000);
        v$126.hide();
        setTimeout(function () {
          console.log("fi_aw");
          v$126.fadeIn(500);
        }, 500);
        this.cb = 1;
        return this;
      };
      vF1116.prototype.ji = function () {
        this.rk = false;
        this.wb.Ra();
        if (this.cb == 1) {
          f103().r.Gd();
        }
      };
      vF1116.prototype.Ra = function () {
        this.wb.Ra();
      };
      vF1116.prototype.Pa = function (p1282, p1283) {
        this.wb.Pa(p1282, p1283);
      };
      vF1116.prototype.Da = function (p1284, p1285, p1286) {
        var vUndefined22 = undefined;
        var vUndefined23 = undefined;
        var vUndefined24 = undefined;
        if (p1285 >= 1 && p1285 <= 10) {
          vUndefined22 = f106("index.game.result.place.i" + p1285);
          vUndefined23 = f106("index.game.result.placeInBoard");
          vUndefined24 = f106("index.game.social.shareResult.messGood").replace("{0}", p1286).replace("{1}", p1284).replace("{2}", vUndefined22);
        } else {
          vUndefined22 = "";
          vUndefined23 = f106("index.game.result.tryHit");
          vUndefined24 = f106("index.game.social.shareResult.messNorm").replace("{0}", p1286).replace("{1}", p1284);
        }
        v$128.html(f106("index.game.result.your"));
        v$129.html(p1284);
        v$130.html(vUndefined22);
        v$131.html(vUndefined23);
        if (v1208.qk) {
          var vF1065 = f106("index.game.result.share");
          f106("index.game.social.shareResult.caption");
          v$127.empty().append(f191(vF1065, "https://wormate.io", "wormate.io", vUndefined24, vUndefined24, "https://wormate.io/images/og-share-img-new.jpg"));
        }
      };
      vF1116.prototype.T = function () {
        return this.sk;
      };
      vF1116.prototype.U = function () {
        return this.rk;
      };
      return vF1116;
    }();
    var vF60 = function () {
      var v$132 = $("#loading-worm-a");
      var v$133 = $("#loading-worm-b");
      var v$134 = $("#loading-worm-c");
      var vA21 = ["100% 100%", "100% 200%", "200% 100%", "200% 200%"];
      var vF1117 = f111(vF57, function () {
        vF57.call(this, 0);
      });
      vF1117.prototype.a = function () {};
      vF1117.prototype.ii = function () {
        vF57.fk.stop();
        vF57.fk.fadeOut(50);
        vF57.gk.stop();
        vF57.gk.fadeOut(50);
        vF57.hk.stop();
        vF57.hk.fadeOut(50);
        vF57.ik.stop();
        vF57.ik.fadeOut(50);
        vF57.jk.stop();
        vF57.jk.fadeOut(50);
        vF57.kk.stop();
        vF57.kk.fadeIn(500);
        vF57.lk.stop();
        vF57.lk.fadeIn(1);
        vF57.di.stop();
        vF57.di.fadeIn(500);
        vF23.Le(true);
        vF57.nk.stop();
        vF57.nk.fadeOut(50);
        vF57.ok.stop();
        vF57.ok.fadeOut(50);
      };
      vF1117.prototype.ji = function () {
        this.tk();
      };
      vF1117.prototype.tk = function () {
        v$132.css("background-position", "100% 200%");
        for (var vLN0196 = 0; vLN0196 < vA21.length; vLN0196++) {
          var v1152 = Math.floor(Math.random() * vA21.length);
          var v1153 = vA21[vLN0196];
          vA21[vLN0196] = vA21[v1152];
          vA21[v1152] = v1153;
        }
        v$132.css("background-position", vA21[0]);
        v$133.css("background-position", vA21[1]);
        v$134.css("background-position", vA21[2]);
      };
      return vF1117;
    }();
    var vF61 = function () {
      $("#mm-event-text");
      var v$135 = $("#mm-skin-canv");
      var v$136 = $("#mm-skin-prev");
      var v$137 = $("#mm-skin-next");
      var v$138 = $("#mm-skin-over");
      var v$139 = $("#mm-skin-over-button-list");
      var v$140 = $("#mm-params-nickname");
      var v$141 = $("#mm-params-game-mode");
      var v$142 = $("#mm-action-buttons");
      var v$143 = $("#mm-action-play");
      var v$144 = $("#mm-action-guest");
      var v$145 = $("#mm-action-login");
      var v$146 = $("#mm-player-info");
      var v$147 = $("#mm-store");
      var v$148 = $("#mm-leaders");
      var v$149 = $("#mm-settings");
      var v$150 = $("#mm-coins-box");
      var v$151 = $("#mm-player-avatar");
      var v$152 = $("#mm-player-username");
      var v$153 = $("#mm-coins-val");
      var v$154 = $("#mm-player-exp-bar");
      var v$155 = $("#mm-player-exp-val");
      var v$156 = $("#mm-player-level");
      var vF1118 = f111(vF57, function () {
        vF57.call(this, 1);
        var vF1038 = f103();
        this.uk = new vF56(v$135);
        v$141.click(function () {
          vF1038.r.Cd();
        });
        v$135.click(function () {
          if (vF1038.u.P()) {
            vF1038.r.Cd();
            vF1038.s.I(vF1038.s.$h);
          }
        });
        v$136.click(function () {
          vF1038.r.Cd();
          vF1038.t.Ah();
        });
        v$137.click(function () {
          vF1038.r.Cd();
          vF1038.t.zh();
        });
        v$140.keypress(function (p1287) {
          if (p1287.keyCode == 13) {
            vF1038.na();
          }
        });
        v$143.click(function () {
          vF1038.r.Cd();
          vF1038.na();
        });
        v$144.click(function () {
          vF1038.r.Cd();
          vF1038.na();
        });
        v$145.click(function () {
          vF1038.r.Cd();
          vF1038.s.I(vF1038.s.Zh);
        });
        v$149.click(function () {
          vF1038.r.Cd();
          vF1038.s.I(vF1038.s.xa);
        });
        v$146.click(function () {
          if (vF1038.u.P()) {
            vF1038.r.Cd();
            vF1038.s.I(vF1038.s.Yh);
          }
        });
        v$148.click(function () {
          if (vF1038.u.P()) {
            vF1038.r.Cd();
            vF1038.s.I(vF1038.s.Xh);
          }
        });
        v$147.click(function () {
          if (vF1038.u.P()) {
            vF1038.r.Cd();
            vF1038.s.I(vF1038.s._h);
          }
        });
        v$150.click(function () {
          if (vF1038.u.P()) {
            vF1038.r.Cd();
            vF1038.s.I(vF1038.s.Wh);
          }
        });
        this.vk();
        this.wk();
        $("#final-continue").html("\n                         <div id=\"final-continue1\">Continue(Home)</div>\n                         ");
        $("#final-continue").after("<div id='final-replay'>Replay</div>");
        $("#final-replay").click(function () {
          let vV691 = v691;
          if (vV691) {
            anApp.r.Hd();
            anApp.sa(vV691);
          }
        });
        var vF1042 = f104(vF24.va);
        if (vF1042 != "ARENA" && vF1042 != "TEAM2") {
          vF1042 = "ARENA";
        }
        v$141.val(vF1042);
        console.log("Load GM: " + vF1042);
      });
      vF1118.prototype.a = function () {
        var vF1039 = f103();
        var vThis58 = this;
        vF1039.u.V(function () {
          vF1039.s.F.xk();
        });
        vF1039.u.Pi(function () {
          if (vF1039.u.P()) {
            vF1039.t.Bh(vF1039.u.Di(), vF42.ia);
            vF1039.t.Bh(vF1039.u.Ei(), vF42.ja);
            vF1039.t.Bh(vF1039.u.Fi(), vF42.ka);
            vF1039.t.Bh(vF1039.u.Gi(), vF42.la);
            vF1039.t.Bh(vF1039.u.Hi(), vF42.ma);
          } else {
            vF1039.t.Bh(vF1039.Ga(), vF42.ia);
            vF1039.t.Bh(0, vF42.ja);
            vF1039.t.Bh(0, vF42.ka);
            vF1039.t.Bh(0, vF42.la);
            vF1039.t.Bh(0, vF42.ma);
          }
        });
        vF1039.u.Pi(function () {
          v$143.toggle(vF1039.u.P());
          v$145.toggle(!vF1039.u.P());
          v$144.toggle(!vF1039.u.P());
          v$148.toggle(vF1039.u.P());
          v$147.toggle(vF1039.u.P());
          v$150.toggle(vF1039.u.P());
          if (vF1039.u.P()) {
            v$138.hide();
            v$152.html(vF1039.u.wi());
            v$151.attr("src", vF1039.u.xi());
            v$153.html(vF1039.u.zi());
            v$154.width(vF1039.u.Bi() * 100 / vF1039.u.Ci() + "%");
            v$155.html(vF1039.u.Bi() + " / " + vF1039.u.Ci());
            v$156.html(vF1039.u.Ai());
            v$140.val(vF1039.u.ga());
          } else {
            v$138.toggle(v1208.qk && !vF1039.Ha());
            v$152.html(v$152.data("guest"));
            v$151.attr("src", vLSimagesguestavatarxma);
            v$153.html("10");
            v$154.width("0");
            v$155.html("");
            v$156.html(1);
            v$140.val(f104(vF24.Aa));
          }
        });
        vF1039.t.xh(function () {
          vThis58.uk.ak(vF1039.t.ha(vF42.ia), false, false);
          vThis58.uk.bk(vF1039.t.ha(vF42.ja), false, false);
          vThis58.uk.ck(vF1039.t.ha(vF42.ka), false, false);
          vThis58.uk.dk(vF1039.t.ha(vF42.la), false, false);
          vThis58.uk.ek(vF1039.t.ha(vF42.ma), false, false);
        });
      };
      vF1118.prototype.ii = function () {
        vF57.fk.stop();
        vF57.fk.fadeOut(50);
        vF57.gk.stop();
        vF57.gk.fadeOut(50);
        vF57.hk.stop();
        vF57.hk.fadeIn(500);
        vF57.ik.stop();
        vF57.ik.fadeOut(50);
        vF57.jk.stop();
        vF57.jk.fadeOut(50);
        vF57.kk.stop();
        vF57.kk.fadeOut(50);
        vF57.lk.stop();
        vF57.lk.fadeIn(1);
        vF57.di.stop();
        vF57.di.fadeIn(500);
        vF23.Le(true);
        vF57.nk.stop();
        vF57.nk.fadeIn(500);
        vF57.ok.stop();
        vF57.ok.fadeIn(500);
      };
      vF1118.prototype.ji = function () {
        f103().r.Dd();
        this.uk.Le(true);
      };
      vF1118.prototype.ei = function () {
        this.uk.Le(false);
      };
      vF1118.prototype.Ra = function () {
        this.uk.Ra();
      };
      vF1118.prototype.Pa = function (p1288, p1289) {
        this.uk.Pa();
      };
      vF1118.prototype.ga = function () {
        return v$140.val();
      };
      vF1118.prototype.D = function () {
        return v$141.val();
      };
      vF1118.prototype.xk = function () {
        v$142.show();
      };
      vF1118.prototype.vk = function () {
        var v1154 = $("#mm-advice-cont").children();
        var vLN0197 = 0;
        setInterval(function () {
          v1154.eq(vLN0197).fadeOut(500, function () {
            if (++vLN0197 >= v1154.length) {
              vLN0197 = 0;
            }
            v1154.eq(vLN0197).fadeIn(500).css("display", "inline-block");
          });
        }, 3000);
      };
      vF1118.prototype.wk = function () {
        function f192() {
          vF10310.Ka(true);
          setTimeout(function () {
            v$138.hide();
          }, 3000);
        }
        var vF10310 = f103();
        if (v1208.qk && !vF10310.Ha()) {
          v$138.show();
          var vF1066 = f106("index.game.main.menu.unlockSkins.share");
          var vEncodeURIComponent3 = encodeURIComponent(f106("index.game.main.menu.unlockSkins.comeAndPlay") + " https://wormate.io/ #wormate #wormateio");
          var vEncodeURIComponent4 = encodeURIComponent(f106("index.game.main.menu.unlockSkins.comeAndPlay"));
          v$139.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-tw\" target=\"_blank\" href=\"http://twitter.com/intent/tweet?status=" + vEncodeURIComponent3 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\"><span>" + vF1066 + "</span></a>").click(f192));
          v$139.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + vEncodeURIComponent4 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"><span>" + vF1066 + "</span></a>").click(f192));
        }
      };
      return vF1118;
    }();
    var vF62 = function () {
      var vF1119 = f111(vF57, function () {
        vF57.call(this, 0);
      });
      vF1119.prototype.a = function () {};
      vF1119.prototype.ii = function () {
        vF57.fk.stop();
        vF57.fk.fadeOut(50);
        vF57.gk.stop();
        vF57.gk.fadeOut(50);
        vF57.hk.stop();
        vF57.hk.fadeOut(50);
        vF57.ik.stop();
        vF57.ik.fadeOut(50);
        vF57.jk.stop();
        vF57.jk.fadeOut(50);
        vF57.kk.stop();
        vF57.kk.fadeOut(50);
        vF57.lk.stop();
        vF57.lk.fadeOut(1);
        vF57.di.stop();
        vF57.di.fadeOut(50);
        vF23.Le(false);
        vF57.nk.stop();
        vF57.nk.fadeOut(50);
        vF57.ok.stop();
        vF57.ok.fadeOut(50);
      };
      return vF1119;
    }();
    var vF63 = function () {
      var v$157 = $("#toaster-stack");
      var vF11110 = f111(vF57, function () {
        vF57.call(this, 0);
        this.yk = [];
        this.zk = null;
      });
      vF11110.prototype.a = function () {};
      vF11110.prototype.ii = function () {
        vF57.fk.stop();
        vF57.fk.fadeOut(50);
        vF57.gk.stop();
        vF57.gk.fadeOut(50);
        vF57.hk.stop();
        vF57.hk.fadeOut(50);
        vF57.ik.stop();
        vF57.ik.fadeOut(50);
        vF57.jk.stop();
        vF57.jk.fadeIn(500);
        vF57.kk.stop();
        vF57.kk.fadeOut(50);
        vF57.lk.stop();
        vF57.lk.fadeIn(1);
        vF57.di.stop();
        vF57.di.fadeIn(500);
        vF23.Le(true);
        vF57.nk.stop();
        vF57.nk.fadeOut(50);
        vF57.ok.stop();
        vF57.ok.fadeIn(500);
      };
      vF11110.prototype.ji = function () {
        this.Ak();
      };
      vF11110.prototype.mi = function () {
        return this.zk != null || this.yk.length > 0;
      };
      vF11110.prototype._ = function (p1290) {
        this.yk.unshift(p1290);
        setTimeout(function () {
          f103().s.ki();
        }, 0);
      };
      vF11110.prototype.Ti = function (p1291) {
        this.yk.push(p1291);
        setTimeout(function () {
          f103().s.ki();
        }, 0);
      };
      vF11110.prototype.Ak = function () {
        var vThis59 = this;
        if (this.zk == null) {
          if (this.yk.length == 0) {
            f103().s.gi();
            return;
          }
          var v1155 = this.yk.shift();
          this.zk = v1155;
          var v1156 = v1155.Bk();
          v1156.hide();
          v1156.fadeIn(300);
          v$157.append(v1156);
          v1155.Ck = function () {
            v1156.fadeOut(300);
            setTimeout(function () {
              v1156.remove();
            }, 300);
            if (vThis59.zk == v1155) {
              vThis59.zk = null;
            }
            vThis59.Ak();
          };
          v1155.ji();
        }
      };
      return vF11110;
    }();
    var vF64 = function () {
      var v$158 = $("#popup-menu-label");
      var v$159 = $("#popup-menu-coins-box");
      var v$160 = $("#popup-menu-coins-val");
      $("#popup-menu-back").click(function () {
        var vF10311 = f103();
        vF10311.r.Cd();
        vF10311.s.gi();
      });
      v$159.click(function () {
        var vF10312 = f103();
        if (vF10312.u.P()) {
          vF10312.r.Cd();
          vF10312.s.I(vF10312.s.Wh);
        }
      });
      var vF11111 = f111(vF57, function (p1292, p1293) {
        vF57.call(this, 1);
        this.ad = p1292;
        this.Dk = p1293;
      });
      vF11111.prototype.a = function () {
        vF11111.parent.prototype.a.call(this);
        if (!vF11111.Ek) {
          vF11111.Ek = true;
          var vF10313 = f103();
          vF10313.u.Pi(function () {
            if (vF10313.u.P()) {
              v$160.html(vF10313.u.zi());
            } else {
              v$160.html("0");
            }
          });
        }
      };
      vF11111.Fk = $("#coins-view");
      vF11111.Gk = $("#leaders-view");
      vF11111.Hk = $("#profile-view");
      vF11111.Ik = $("#settings-view");
      vF11111.Jk = $("#login-view");
      vF11111.Kk = $("#skins-view");
      vF11111.Lk = $("#store-view");
      vF11111.Mk = $("#wear-view");
      vF11111.Nk = $("#withdraw-consent-view");
      vF11111.Ok = $("#delete-account-view");
      vF11111.Pk = $("#please-wait-view");
      vF11111.prototype.ii = function () {
        vF57.fk.stop();
        vF57.fk.fadeOut(200);
        vF57.gk.stop();
        vF57.gk.fadeOut(200);
        vF57.hk.stop();
        vF57.hk.fadeOut(200);
        vF57.ik.stop();
        vF57.ik.fadeIn(200);
        vF57.jk.stop();
        vF57.jk.fadeOut(200);
        vF57.kk.stop();
        vF57.kk.fadeOut(200);
        vF57.nk.stop();
        vF57.nk.fadeIn(200);
        vF57.ok.stop();
        vF57.ok.fadeIn(200);
        v$158.html(this.ad);
        v$159.toggle(this.Dk);
        this.Qk();
        this.Rk();
      };
      vF11111.prototype.Rk = function () {};
      vF11111.prototype.Sk = function () {
        vF64.Pk.stop();
        vF64.Pk.fadeIn(300);
      };
      vF11111.prototype.Qk = function () {
        vF64.Pk.stop();
        vF64.Pk.fadeOut(300);
      };
      return vF11111;
    }();
    var vF65 = function () {
      var v$161 = $("#store-buy-coins_125000");
      var v$162 = $("#store-buy-coins_50000");
      var v$163 = $("#store-buy-coins_16000");
      var v$164 = $("#store-buy-coins_7000");
      var v$165 = $("#store-buy-coins_3250");
      var v$166 = $("#store-buy-coins_1250");
      var vF11112 = f111(vF64, function () {
        vF64.call(this, f106("index.game.popup.menu.coins.tab"), false);
        var vF10314 = f103();
        var vThis60 = this;
        v$161.click(function () {
          vF10314.r.Cd();
          vThis60.Tk("coins_125000");
        });
        v$162.click(function () {
          vF10314.r.Cd();
          vThis60.Tk("coins_50000");
        });
        v$163.click(function () {
          vF10314.r.Cd();
          vThis60.Tk("coins_16000");
        });
        v$164.click(function () {
          vF10314.r.Cd();
          vThis60.Tk("coins_7000");
        });
        v$165.click(function () {
          vF10314.r.Cd();
          vThis60.Tk("coins_3250");
        });
        v$166.click(function () {
          vF10314.r.Cd();
          vThis60.Tk("coins_1250");
        });
      });
      vF11112.prototype.a = function () {
        vF11112.parent.prototype.a.call(this);
      };
      vF11112.prototype.Rk = function () {
        vF64.Fk.stop();
        vF64.Fk.fadeIn(200);
        vF64.Gk.stop();
        vF64.Gk.fadeOut(50);
        vF64.Hk.stop();
        vF64.Hk.fadeOut(50);
        vF64.Jk.stop();
        vF64.Jk.fadeOut(50);
        vF64.Ik.stop();
        vF64.Ik.fadeOut(50);
        vF64.Kk.stop();
        vF64.Kk.fadeOut(50);
        vF64.Lk.stop();
        vF64.Lk.fadeOut(50);
        vF64.Mk.stop();
        vF64.Mk.fadeOut(50);
        vF64.Nk.stop();
        vF64.Nk.fadeOut(50);
        vF64.Ok.stop();
        vF64.Ok.fadeOut(50);
      };
      vF11112.prototype.ji = function () {
        f103().r.Dd();
      };
      vF11112.prototype.Tk = function (p1294) {};
      return vF11112;
    }();
    var vF67 = function () {
      var v$167 = $("#highscore-table");
      var v$168 = $("#leaders-button-level");
      var v$169 = $("#leaders-button-highscore");
      var v$170 = $("#leaders-button-kills");
      var vF11113 = f111(vF64, function () {
        vF64.call(this, f106("index.game.popup.menu.leaders.tab"), true);
        var vF10315 = f103();
        var vThis61 = this;
        this.Uk = {};
        this.Vk = {
          Wk: {
            Xk: v$168,
            Yk: "byLevel"
          },
          Zk: {
            Xk: v$169,
            Yk: "byHighScore"
          },
          $k: {
            Xk: v$170,
            Yk: "byKillsAndHeadShots"
          }
        };
        v$168.click(function () {
          vF10315.r.Cd();
          vThis61._k(vThis61.Vk.Wk);
        });
        v$169.click(function () {
          vF10315.r.Cd();
          vThis61._k(vThis61.Vk.Zk);
        });
        v$170.click(function () {
          vF10315.r.Cd();
          vThis61._k(vThis61.Vk.$k);
        });
      });
      vF11113.prototype.a = function () {
        vF11113.parent.prototype.a.call(this);
      };
      vF11113.prototype.Rk = function () {
        vF64.Fk.stop();
        vF64.Fk.fadeOut(50);
        vF64.Gk.stop();
        vF64.Gk.fadeIn(200);
        vF64.Hk.stop();
        vF64.Hk.fadeOut(50);
        vF64.Jk.stop();
        vF64.Jk.fadeOut(50);
        vF64.Ik.stop();
        vF64.Ik.fadeOut(50);
        vF64.Kk.stop();
        vF64.Kk.fadeOut(50);
        vF64.Lk.stop();
        vF64.Lk.fadeOut(50);
        vF64.Mk.stop();
        vF64.Mk.fadeOut(50);
        vF64.Nk.stop();
        vF64.Nk.fadeOut(50);
        vF64.Ok.stop();
        vF64.Ok.fadeOut(50);
      };
      vF11113.prototype.ji = function () {
        f103().r.Dd();
        var vThis62 = this;
        this.Sk();
        $.get(vAtob + "/pub/leaders", function (p1295) {
          vThis62.Uk = p1295;
          vThis62._k(vThis62.al ?? vThis62.Vk.Wk);
          vThis62.Qk();
        }).done(function () {
          vThis62.Qk();
        });
      };
      vF11113.prototype._k = function (p1296) {
        this.al = p1296;
        for (var v1157 in this.Vk) {
          if (this.Vk.hasOwnProperty(v1157)) {
            var v1158 = this.Vk[v1157];
            v1158.Xk.removeClass("pressed");
          }
        }
        this.al.Xk.addClass("pressed");
        for (var v1159 = this.Uk[this.al.Yk], vLS3 = "", vLN0198 = 0; vLN0198 < v1159.length; vLN0198++) {
          var v1160 = v1159[vLN0198];
          vLS3 += "<div class=\"table-row\"><span>" + (vLN0198 + 1) + "</span><span><img src=\"" + v1160.avatarUrl + "\"/></span><span>" + v1160.username + "</span><span>" + v1160.level + "</span><span>" + v1160.highScore + "</span><span>" + v1160.headShots + " / " + v1160.kills + "</span></div>";
        }
        v$167.empty();
        v$167.append(vLS3);
      };
      return vF11113;
    }();
    var vF68 = function () {
      var v$171 = $("#popup-login-gg");
      var v$172 = $("#popup-login-fb");
      var vF11114 = f111(vF64, function () {
        vF64.call(this, f106("index.game.popup.menu.login.tab"), false);
        var vF10316 = f103();
        var vThis63 = this;
        v$171.click(function () {
          vF10316.r.Cd();
          vThis63.Sk();
          vF10316.u.Qi(function () {
            vThis63.Qk();
          });
          setTimeout(function () {
            vThis63.Qk();
          }, 10000);
          vF10316.u.Zi();
        });
        v$172.click(function () {
          vF10316.r.Cd();
          vThis63.Sk();
          vF10316.u.Qi(function () {
            vThis63.Qk();
          });
          setTimeout(function () {
            vThis63.Qk();
          }, 10000);
          vF10316.u.Vi();
        });
      });
      vF11114.prototype.a = function () {
        vF11114.parent.prototype.a.call(this);
      };
      vF11114.prototype.Rk = function () {
        vF64.Fk.stop();
        vF64.Fk.fadeOut(50);
        vF64.Gk.stop();
        vF64.Gk.fadeOut(50);
        vF64.Hk.stop();
        vF64.Hk.fadeOut(50);
        vF64.Jk.stop();
        vF64.Jk.fadeIn(200);
        vF64.Ik.stop();
        vF64.Ik.fadeOut(50);
        vF64.Kk.stop();
        vF64.Kk.fadeOut(50);
        vF64.Lk.stop();
        vF64.Lk.fadeOut(50);
        vF64.Mk.stop();
        vF64.Mk.fadeOut(50);
        vF64.Nk.stop();
        vF64.Nk.fadeOut(50);
        vF64.Ok.stop();
        vF64.Ok.fadeOut(50);
      };
      vF11114.prototype.ji = function () {
        f103().r.Dd();
      };
      return vF11114;
    }();
    var vF69 = function () {
      var v$173 = $("#profile-avatar");
      var v$174 = $("#profile-username");
      var v$175 = $("#profile-experience-bar");
      var v$176 = $("#profile-experience-val");
      var v$177 = $("#profile-level");
      var v$178 = $("#profile-stat-highScore");
      var v$179 = $("#profile-stat-bestSurvivalTime");
      var v$180 = $("#profile-stat-kills");
      var v$181 = $("#profile-stat-headshots");
      var v$182 = $("#profile-stat-gamesPlayed");
      var v$183 = $("#profile-stat-totalTimeSpent");
      var v$184 = $("#profile-stat-registrationDate");
      var vF11115 = f111(vF64, function () {
        vF64.call(this, f106("index.game.popup.menu.profile.tab"), true);
      });
      vF11115.prototype.a = function () {
        vF11115.parent.prototype.a.call(this);
      };
      vF11115.prototype.Rk = function () {
        vF64.Fk.stop();
        vF64.Fk.fadeOut(50);
        vF64.Gk.stop();
        vF64.Gk.fadeOut(50);
        vF64.Hk.stop();
        vF64.Hk.fadeIn(200);
        vF64.Jk.stop();
        vF64.Jk.fadeOut(50);
        vF64.Ik.stop();
        vF64.Ik.fadeOut(50);
        vF64.Kk.stop();
        vF64.Kk.fadeOut(50);
        vF64.Lk.stop();
        vF64.Lk.fadeOut(50);
        vF64.Mk.stop();
        vF64.Mk.fadeOut(50);
        vF64.Nk.stop();
        vF64.Nk.fadeOut(50);
        vF64.Ok.stop();
        vF64.Ok.fadeOut(50);
      };
      vF11115.prototype.ji = function () {
        var vF10317 = f103();
        vF10317.r.Dd();
        var v1161 = vF10317.u.Oi();
        var v1162 = moment([v1161.year, v1161.month - 1, v1161.day]).format("LL");
        v$174.html(vF10317.u.wi());
        v$173.attr("src", vF10317.u.xi());
        v$175.width(vF10317.u.Bi() * 100 / vF10317.u.Ci() + "%");
        v$176.html(vF10317.u.Bi() + " / " + vF10317.u.Ci());
        v$177.html(vF10317.u.Ai());
        v$178.html(vF10317.u.Ii());
        v$179.html(f108(vF10317.u.Ji()));
        v$180.html(vF10317.u.Ki());
        v$181.html(vF10317.u.Li());
        v$182.html(vF10317.u.Mi());
        v$183.html(f108(vF10317.u.Ni()));
        v$184.html(v1162);
      };
      return vF11115;
    }();
    var vF70 = function () {
      var v$185 = $("#settings-music-enabled-switch");
      var v$186 = $("#settings-sfx-enabled-switch");
      var v$187 = $("#settings-show-names-switch");
      var v$188 = $("#popup-logout");
      var v$189 = $("#popup-logout-container");
      var v$190 = $("#popup-delete-account");
      var v$191 = $("#popup-delete-account-container");
      var v$192 = $("#popup-withdraw-consent");
      var vF11116 = f111(vF64, function () {
        vF64.call(this, f106("index.game.popup.menu.settings.tab"), false);
        var vThis64 = this;
        var vF10318 = f103();
        v$185.click(function () {
          var v1163 = !!v$185.prop("checked");
          f105(vF24.Me, v1163, 30);
          vF10318.r.td(v1163);
          vF10318.r.Cd();
        });
        v$186.click(function () {
          var v1164 = !!v$186.prop("checked");
          f105(vF24.Ne, v1164, 30);
          vF10318.r.rd(v1164);
          vF10318.r.Cd();
        });
        v$187.click(function () {
          vF10318.r.Cd();
        });
        v$188.click(function () {
          vF10318.r.Cd();
          vThis64.Sk();
          setTimeout(function () {
            vThis64.Qk();
          }, 2000);
          vF10318.u.Wi();
        });
        v$190.click(function () {
          if (vF10318.u.P()) {
            vF10318.r.Cd();
            vF10318.s.I(vF10318.s.Vh);
          } else {
            vF10318.r.Hd();
          }
        });
        v$192.click(function () {
          if (vF10318.Y()) {
            vF10318.r.Cd();
            vF10318.s.I(vF10318.s.Uh);
          } else {
            vF10318.r.Hd();
          }
        });
      });
      vF11116.prototype.a = function () {
        vF11116.parent.prototype.a.call(this);
        var vF10319 = f103();
        var vUndefined25 = undefined;
        switch (f104(vF24.Me)) {
          case "false":
            vUndefined25 = false;
            break;
          default:
            vUndefined25 = true;
        }
        v$185.prop("checked", vUndefined25);
        vF10319.r.td(vUndefined25);
        var vUndefined26 = undefined;
        switch (f104(vF24.Ne)) {
          case "false":
            vUndefined26 = false;
            break;
          default:
            vUndefined26 = true;
        }
        v$186.prop("checked", vUndefined26);
        vF10319.r.rd(vUndefined26);
        var vUndefined27 = undefined;
        switch (f104(vF24.ya)) {
          case "false":
            vUndefined27 = false;
            break;
          default:
            vUndefined27 = true;
        }
        console.log("Load sPN: " + vUndefined27);
        v$187.prop("checked", vUndefined27);
        vF10319.u.V(function () {
          v$189.toggle(vF10319.u.P());
          v$191.toggle(vF10319.u.P());
        });
      };
      vF11116.prototype.Rk = function () {
        vF64.Fk.stop();
        vF64.Fk.fadeOut(50);
        vF64.Gk.stop();
        vF64.Gk.fadeOut(50);
        vF64.Hk.stop();
        vF64.Hk.fadeOut(50);
        vF64.Jk.stop();
        vF64.Jk.fadeOut(50);
        vF64.Ik.stop();
        vF64.Ik.fadeIn(200);
        vF64.Kk.stop();
        vF64.Kk.fadeOut(50);
        vF64.Lk.stop();
        vF64.Lk.fadeOut(50);
        vF64.Mk.stop();
        vF64.Mk.fadeOut(50);
        vF64.Nk.stop();
        vF64.Nk.fadeOut(50);
        vF64.Ok.stop();
        vF64.Ok.fadeOut(50);
      };
      vF11116.prototype.ji = function () {
        var vF10320 = f103();
        vF10320.r.Dd();
        if (vF10320.Y()) {
          v$192.show();
        } else {
          v$192.hide();
        }
      };
      vF11116.prototype.wa = function () {
        return v$187.prop("checked");
      };
      return vF11116;
    }();
    var vF71 = function () {
      var v$193 = $("#store-view-canv");
      var v$194 = $("#skin-description-text");
      var v$195 = $("#skin-group-description-text");
      var v$196 = $("#store-locked-bar");
      var v$197 = $("#store-locked-bar-text");
      var v$198 = $("#store-buy-button");
      var v$199 = $("#store-item-price");
      var v$200 = $("#store-groups");
      var v$201 = $("#store-view-prev");
      var v$202 = $("#store-view-next");
      var vF11117 = f111(vF64, function () {
        vF64.call(this, f106("index.game.popup.menu.skins.tab"), true);
        var vThis65 = this;
        var vF10321 = f103();
        this.bl = null;
        this.cl = [];
        this.dl = {};
        this.el = new vF56(v$193);
        v$198.click(function () {
          vF10321.r.Cd();
          vThis65.fl();
        });
        v$201.click(function () {
          vF10321.r.Cd();
          vThis65.bl.gl();
        });
        v$202.click(function () {
          vF10321.r.Cd();
          vThis65.bl.hl();
        });
      });
      vF11117.prototype.a = function () {
        vF11117.parent.prototype.a.call(this);
        var vThis66 = this;
        var vF10322 = f103();
        vF10322.p.ca(function () {
          var v1165 = vF10322.p.Ac();
          if (v1165 != null) {
            vThis66.cl = [];
            for (var vLN0199 = 0; vLN0199 < v1165.skinGroupArrayDict.length; vLN0199++) {
              vThis66.cl.push(new vF72(vThis66, v1165.skinGroupArrayDict[vLN0199]));
            }
            vThis66.dl = {};
            for (var vLN0200 = 0; vLN0200 < v1165.skinArrayDict.length; vLN0200++) {
              var v1166 = v1165.skinArrayDict[vLN0200];
              vThis66.dl[v1166.id] = v1166;
            }
          }
        });
        this.il(false);
        vF10322.t.xh(function () {
          vThis66.il(false);
        });
      };
      vF11117.prototype.Rk = function () {
        vF64.Fk.stop();
        vF64.Fk.fadeOut(50);
        vF64.Gk.stop();
        vF64.Gk.fadeOut(50);
        vF64.Hk.stop();
        vF64.Hk.fadeOut(50);
        vF64.Jk.stop();
        vF64.Jk.fadeOut(50);
        vF64.Ik.stop();
        vF64.Ik.fadeOut(50);
        vF64.Kk.stop();
        vF64.Kk.fadeIn(200);
        vF64.Lk.stop();
        vF64.Lk.fadeOut(50);
        vF64.Mk.stop();
        vF64.Mk.fadeOut(50);
        vF64.Nk.stop();
        vF64.Nk.fadeOut(50);
        vF64.Ok.stop();
        vF64.Ok.fadeOut(50);
      };
      vF11117.prototype.ji = function () {
        f103().r.Dd();
        this.jl();
        this.el.Le(true);
      };
      vF11117.prototype.ei = function () {
        this.el.Le(false);
      };
      vF11117.prototype.Ra = function () {
        this.el.Ra();
      };
      vF11117.prototype.Pa = function (p1297, p1298) {
        this.el.Pa();
      };
      vF11117.prototype.jl = function () {
        var vThis67 = this;
        var vThis68 = this;
        var vF10323 = f103();
        v$200.empty();
        for (var vLN0202 = 0; vLN0202 < this.cl.length; vLN0202++) {
          (function (p1299) {
            var v1167 = vThis67.cl[p1299];
            var v1168 = document.createElement("li");
            v$200.append(v1168);
            var v$203 = $(v1168);
            v$203.html(v1167.kl());
            v$203.click(function () {
              vF10323.r.Cd();
              vThis68.ll(v1167);
            });
            v1167.ml = v$203;
          })(vLN0202);
        }
        if (this.cl.length > 0) {
          var v1169 = vF10323.t.ha(vF42.ia);
          for (var vLN0202 = 0; vLN0202 < this.cl.length; vLN0202++) {
            var v1170 = this.cl[vLN0202];
            for (var v1171 = v1170.nl.list, vLN0203 = 0; vLN0203 < v1171.length; vLN0203++) {
              if (v1171[vLN0203] == v1169) {
                v1170.ol = vLN0203;
                this.ll(v1170);
                return;
              }
            }
          }
          this.ll(this.cl[0]);
        }
      };
      vF11117.prototype.ll = function (p1300) {
        if (this.bl != p1300) {
          var vF10324 = f103();
          this.bl = p1300;
          v$200.children().removeClass("pressed");
          if (this.bl.ml) {
            this.bl.ml.addClass("pressed");
          }
          v$195.html("");
          if (p1300.nl != null) {
            var v1172 = vF10324.p.Ac().textDict[p1300.nl.description];
            if (v1172 != null) {
              v$195.html(f109(f107(v1172)));
            }
          }
          this.il(true);
        }
      };
      vF11117.prototype.pl = function () {
        if (this.bl == null) {
          return vF37.Yg();
        } else {
          return this.bl.ql();
        }
      };
      vF11117.prototype.fl = function () {
        var vThis69 = this;
        this.pl().ah(function (p1301) {
          vThis69.rl(p1301);
        });
      };
      vF11117.prototype.rl = function (p1302) {
        var vThis70 = this;
        var vF10325 = f103();
        var v1173 = this.dl[p1302].price;
        if (!(vF10325.u.zi() < v1173)) {
          this.Sk();
          var v1174 = vF10325.t.ha(vF42.ia);
          var v1175 = vF10325.t.ha(vF42.ja);
          var v1176 = vF10325.t.ha(vF42.ka);
          var v1177 = vF10325.t.ha(vF42.la);
          var v1178 = vF10325.t.ha(vF42.ma);
          vF10325.u.Ui(p1302, vF42.ia, function () {
            vF10325.t.Bh(v1174, vF42.ia);
            vF10325.t.Bh(v1175, vF42.ja);
            vF10325.t.Bh(v1176, vF42.ka);
            vF10325.t.Bh(v1177, vF42.la);
            vF10325.t.Bh(v1178, vF42.ma);
            if (vF10325.u.Ch(p1302, vF42.ia)) {
              vF10325.t.Bh(p1302, vF42.ia);
            }
            vThis70.Qk();
          });
        }
      };
      vF11117.prototype.il = function (p1303) {
        var vF10326 = f103();
        this.el.bk(vF10326.t.ha(vF42.ja), false, false);
        this.el.ck(vF10326.t.ha(vF42.ka), false, false);
        this.el.dk(vF10326.t.ha(vF42.la), false, false);
        this.el.ek(vF10326.t.ha(vF42.ma), false, false);
        var v1179 = this.pl();
        if (v1179._g()) {
          var v1180 = v1179.$g();
          var v1181 = this.dl[v1180];
          var v1182 = false;
          if (vF10326.t.Ja(v1180, vF42.ia)) {
            v$196.hide();
            v$198.hide();
          } else if (v1181 == null || v1181.nonbuyable == 1) {
            v1182 = true;
            v$196.show();
            v$198.hide();
            v$197.text(f106("index.game.popup.menu.store.locked"));
            if (v1181 != null && v1181.nonbuyable && v1181.nonbuyableCause != null) {
              var v1183 = vF10326.p.Ac().textDict[v1181.nonbuyableCause];
              if (v1183 != null) {
                v$197.text(f107(v1183));
              }
            }
          } else {
            v$196.hide();
            v$198.show();
            v$199.html(v1181.price);
          }
          v$194.html("");
          if (v1181 != null && v1181.description != null) {
            var v1184 = vF10326.p.Ac().textDict[v1181.description];
            if (v1184 != null) {
              v$194.html(f109(f107(v1184)));
            }
          }
          v$120.html(v1181.id);
          this.el.ak(v1180, true, v1182);
          if (p1303) {
            vF10326.t.Bh(v1180, vF42.ia);
          }
        }
      };
      var vF72 = function () {
        function f193(p1304, p1305) {
          this.sl = p1304;
          this.ol = 0;
          this.nl = p1305;
        }
        f193.prototype.gl = function () {
          if (--this.ol < 0) {
            this.ol = this.nl.list.length - 1;
          }
          this.sl.il(true);
        };
        f193.prototype.hl = function () {
          if (++this.ol >= this.nl.list.length) {
            this.ol = 0;
          }
          this.sl.il(true);
        };
        f193.prototype.kl = function () {
          let vF107 = f107(this.nl.name);
          if (this.nl.img) {
            var vLSimgSrc = "<img src=\"";
            vLSimgSrc = vLSimgSrc + vLSHttpshaylamdaycom + "/images/paths/" + this.nl.img;
            vF107 = vLSimgSrc = vLSimgSrc + "\" height=\"43\" width=\"220\" />";
          }
          return vF107;
        };
        f193.prototype.ql = function () {
          if (this.ol >= this.nl.list.length) {
            return vF37.Yg();
          } else {
            return vF37.Zg(this.nl.list[this.ol]);
          }
        };
        return f193;
      }();
      return vF11117;
    }();
    var vF73 = function () {
      var v$204 = $("#store-go-coins-button");
      var v$205 = $("#store-go-skins-button");
      var v$206 = $("#store-go-wear-button");
      var vF11118 = f111(vF64, function () {
        vF64.call(this, f106("index.game.popup.menu.store.tab"), true);
        var vF10327 = f103();
        v$204.click(function () {
          vF10327.r.Cd();
          vF10327.s.I(vF10327.s.Wh);
        });
        v$205.click(function () {
          vF10327.r.Cd();
          vF10327.s.I(vF10327.s.$h);
        });
        v$206.click(function () {
          vF10327.r.Cd();
          vF10327.s.I(vF10327.s.ai);
        });
      });
      vF11118.prototype.a = function () {
        vF11118.parent.prototype.a.call(this);
      };
      vF11118.prototype.Rk = function () {
        vF64.Fk.stop();
        vF64.Fk.fadeOut(50);
        vF64.Gk.stop();
        vF64.Gk.fadeOut(50);
        vF64.Hk.stop();
        vF64.Hk.fadeOut(50);
        vF64.Jk.stop();
        vF64.Jk.fadeOut(50);
        vF64.Ik.stop();
        vF64.Ik.fadeOut(50);
        vF64.Kk.stop();
        vF64.Kk.fadeOut(50);
        vF64.Lk.stop();
        vF64.Lk.fadeIn(200);
        vF64.Mk.stop();
        vF64.Mk.fadeOut(50);
        vF64.Nk.stop();
        vF64.Nk.fadeOut(50);
        vF64.Ok.stop();
        vF64.Ok.fadeOut(50);
      };
      vF11118.prototype.ji = function () {
        f103().r.Dd();
      };
      return vF11118;
    }();
    var vF74 = function () {
      var v$207 = $("#wear-view-canv");
      var v$208 = $("#wear-description-text");
      var v$209 = $("#wear-locked-bar");
      var v$210 = $("#wear-locked-bar-text");
      var v$211 = $("#wear-buy-button");
      var v$212 = $("#wear-item-price");
      var v$213 = $("#wear-eyes-button");
      var v$214 = $("#wear-mouths-button");
      var v$215 = $("#wear-glasses-button");
      var v$216 = $("#wear-hats-button");
      var v$217 = $("#wear-tint-chooser");
      var v$218 = $("#wear-view-prev");
      var v$219 = $("#wear-view-next");
      var vF11119 = f111(vF64, function () {
        var vThis71 = this;
        vF64.call(this, f106("index.game.popup.menu.wear.tab"), true);
        var vF10328 = f103();
        var vThis72 = this;
        this.tl = [];
        this.ja = new vF75(this, vF42.ja, v$213);
        this.ka = new vF75(this, vF42.ka, v$214);
        this.la = new vF75(this, vF42.la, v$215);
        this.ma = new vF75(this, vF42.ma, v$216);
        this.ul = null;
        this.vl = null;
        this.wl = null;
        this.xl = null;
        this.yl = null;
        this.zl = null;
        this.Al = new vF56(v$207);
        v$211.click(function () {
          vF10328.r.Cd();
          vThis72.Bl();
        });
        v$218.click(function () {
          vF10328.r.Cd();
          vThis72.ul.Cl();
        });
        v$219.click(function () {
          vF10328.r.Cd();
          vThis72.ul.Dl();
        });
        v$213.click(function () {
          vF10328.r.Cd();
          vThis72.El(vThis71.ja);
        });
        v$214.click(function () {
          vF10328.r.Cd();
          vThis72.El(vThis71.ka);
        });
        v$215.click(function () {
          vF10328.r.Cd();
          vThis72.El(vThis71.la);
        });
        v$216.click(function () {
          vF10328.r.Cd();
          vThis72.El(vThis71.ma);
        });
        this.tl.push(this.ja);
        this.tl.push(this.ka);
        this.tl.push(this.la);
        this.tl.push(this.ma);
      });
      vF11119.prototype.a = function () {
        vF11119.parent.prototype.a.call(this);
        var vF10329 = f103();
        var vThis73 = this;
        vF10329.p.ca(function () {
          var v1185 = vF10329.p.Ac();
          if (v1185 != null) {
            vThis73.vl = v1185.eyesDict;
            vThis73.wl = v1185.mouthDict;
            vThis73.xl = v1185.glassesDict;
            vThis73.yl = v1185.hatDict;
            vThis73.zl = v1185.colorDict;
            vThis73.ja.Fl(v1185.eyesVariantArray);
            vThis73.ja.Gl(vThis73.vl);
            vThis73.ka.Fl(v1185.mouthVariantArray);
            vThis73.ka.Gl(vThis73.wl);
            vThis73.la.Fl(v1185.glassesVariantArray);
            vThis73.la.Gl(vThis73.xl);
            vThis73.ma.Fl(v1185.hatVariantArray);
            vThis73.ma.Gl(vThis73.yl);
          }
        });
        this.il(false);
        vF10329.t.xh(function () {
          vThis73.il(false);
        });
      };
      vF11119.prototype.Rk = function () {
        vF64.Fk.stop();
        vF64.Fk.fadeOut(50);
        vF64.Gk.stop();
        vF64.Gk.fadeOut(50);
        vF64.Hk.stop();
        vF64.Hk.fadeOut(50);
        vF64.Jk.stop();
        vF64.Jk.fadeOut(50);
        vF64.Ik.stop();
        vF64.Ik.fadeOut(50);
        vF64.Kk.stop();
        vF64.Kk.fadeOut(50);
        vF64.Lk.stop();
        vF64.Lk.fadeOut(50);
        vF64.Mk.stop();
        vF64.Mk.fadeIn(200);
        vF64.Nk.stop();
        vF64.Nk.fadeOut(50);
        vF64.Ok.stop();
        vF64.Ok.fadeOut(50);
      };
      vF11119.prototype.ji = function () {
        f103().r.Dd();
        this.El(this.ul ?? this.ja);
        this.Al.Le(true);
      };
      vF11119.prototype.ei = function () {
        this.Al.Le(false);
      };
      vF11119.prototype.Ra = function () {
        this.Al.Ra();
      };
      vF11119.prototype.Pa = function (p1306, p1307) {
        this.Al.Pa();
      };
      vF11119.prototype.El = function (p1308) {
        this.ul = p1308;
        for (var vLN0204 = 0; vLN0204 < this.tl.length; vLN0204++) {
          this.tl[vLN0204].Xk.removeClass("pressed");
        }
        this.ul.Xk.addClass("pressed");
        this.ul.ii();
      };
      vF11119.prototype.Hl = function () {
        if (this.ul == null) {
          return vF37.Yg();
        } else {
          return vF37.Zg({
            Lb: this.ul.ql(),
            rc: this.ul.rc
          });
        }
      };
      vF11119.prototype.Bl = function () {
        var vThis74 = this;
        this.Hl().ah(function (p1309) {
          vThis74.Ui(p1309.Lb, p1309.rc);
        });
      };
      vF11119.prototype.Ui = function (p1310, p1311) {
        var vThis75 = this;
        var vF10330 = f103();
        var vUndefined28 = undefined;
        switch (p1311) {
          case vF42.ja:
            vUndefined28 = this.vl[p1310].price;
            break;
          case vF42.ka:
            vUndefined28 = this.wl[p1310].price;
            break;
          case vF42.la:
            vUndefined28 = this.xl[p1310].price;
            break;
          case vF42.ma:
            vUndefined28 = this.yl[p1310].price;
            break;
          default:
            return;
        }
        if (!(vF10330.u.zi() < vUndefined28)) {
          this.Sk();
          var v1186 = vF10330.t.ha(vF42.ia);
          var v1187 = vF10330.t.ha(vF42.ja);
          var v1188 = vF10330.t.ha(vF42.ka);
          var v1189 = vF10330.t.ha(vF42.la);
          var v1190 = vF10330.t.ha(vF42.ma);
          vF10330.u.Ui(p1310, p1311, function () {
            vF10330.t.Bh(v1186, vF42.ia);
            vF10330.t.Bh(v1187, vF42.ja);
            vF10330.t.Bh(v1188, vF42.ka);
            vF10330.t.Bh(v1189, vF42.la);
            vF10330.t.Bh(v1190, vF42.ma);
            if (vF10330.u.Ch(p1310, p1311)) {
              vF10330.t.Bh(p1310, p1311);
            }
            vThis75.Qk();
          });
        }
      };
      vF11119.prototype.Il = function (p1312, p1313) {
        switch (p1313) {
          case vF42.ja:
            return this.vl[p1312];
          case vF42.ka:
            return this.wl[p1312];
          case vF42.la:
            return this.xl[p1312];
          case vF42.ma:
            return this.yl[p1312];
        }
        return null;
      };
      vF11119.prototype.il = function (p1314) {
        var vF10331 = f103();
        this.Al.ak(vF10331.t.ha(vF42.ia), false, false);
        this.Al.bk(vF10331.t.ha(vF42.ja), false, false);
        this.Al.ck(vF10331.t.ha(vF42.ka), false, false);
        this.Al.dk(vF10331.t.ha(vF42.la), false, false);
        this.Al.ek(vF10331.t.ha(vF42.ma), false, false);
        var v1191 = this.Hl();
        if (v1191._g()) {
          var v1192 = v1191.$g();
          var v1193 = this.Il(v1192.Lb, v1192.rc);
          var v1194 = false;
          if (vF10331.t.Ja(v1192.Lb, v1192.rc)) {
            v$209.hide();
            v$211.hide();
          } else if (v1193 == null || v1193.nonbuyable == 1) {
            v1194 = true;
            v$209.show();
            v$211.hide();
            v$210.text(f106("index.game.popup.menu.store.locked"));
            if (v1193 != null && v1193.nonbuyable && v1193.nonbuyableCause != null) {
              var v1195 = vF10331.p.Ac().textDict[v1193.nonbuyableCause];
              if (v1195 != null) {
                v$210.text(f107(v1195));
              }
            }
          } else {
            v$209.hide();
            v$211.show();
            v$212.html(v1193.price);
          }
          v$208.html("");
          if (v1193 != null && v1193.description != null) {
            var v1196 = vF10331.p.Ac().textDict[v1193.description];
            if (v1196 != null) {
              v$208.html(f109(f107(v1196)));
            }
          }
          switch (v1192.rc) {
            case vF42.ja:
              this.Al.bk(v1192.Lb, true, v1194);
              break;
            case vF42.ka:
              this.Al.ck(v1192.Lb, true, v1194);
              break;
            case vF42.la:
              this.Al.dk(v1192.Lb, true, v1194);
              break;
            case vF42.ma:
              this.Al.ek(v1192.Lb, true, v1194);
          }
          if (p1314) {
            vF10331.t.Bh(v1192.Lb, v1192.rc);
          }
        }
      };
      var vF75 = function () {
        function f194(p1315, p1316, p1317) {
          this.sl = p1315;
          this.rc = p1316;
          this.Xk = p1317;
          this.Jl = {};
          this.Kl = [[]];
          this.Ll = -10;
          this.Ml = -10;
        }
        f194.prototype.Fl = function (p1318) {
          this.Kl = p1318;
        };
        f194.prototype.Gl = function (p1319) {
          this.Jl = p1319;
        };
        f194.prototype.ii = function () {
          var vF10332 = f103();
          var v1197 = vF10332.t.ha(this.rc);
          for (var vLN0205 = 0; vLN0205 < this.Kl.length; vLN0205++) {
            for (var vLN0206 = 0; vLN0206 < this.Kl[vLN0205].length; vLN0206++) {
              if (this.Kl[vLN0205][vLN0206] == v1197) {
                this.Nl(vLN0205);
                this.Ol(vLN0206);
                return;
              }
            }
          }
          this.Nl(0);
          this.Ol(0);
        };
        f194.prototype.Cl = function () {
          var v1198 = this.Ll - 1;
          if (v1198 < 0) {
            v1198 = this.Kl.length - 1;
          }
          this.Nl(v1198);
          this.Ol(this.Ml % this.Kl[v1198].length);
        };
        f194.prototype.Dl = function () {
          var v1199 = this.Ll + 1;
          if (v1199 >= this.Kl.length) {
            v1199 = 0;
          }
          this.Nl(v1199);
          this.Ol(this.Ml % this.Kl[v1199].length);
        };
        f194.prototype.Nl = function (p1320) {
          var vThis76 = this;
          if (!(p1320 < 0) && !(p1320 >= this.Kl.length)) {
            this.Ll = p1320;
            v$217.empty();
            var v1200 = this.Kl[this.Ll];
            if (v1200.length > 1) {
              for (var vLN0207 = 0; vLN0207 < v1200.length; vLN0207++) {
                (function (p1321) {
                  var v1201 = v1200[p1321];
                  var v1202 = vThis76.Jl[v1201];
                  var v1203 = "#" + vThis76.sl.zl[v1202.prime];
                  var v$220 = $("<div style=\"border-color:" + v1203 + "\"></div>");
                  v$220.click(function () {
                    f103().r.Cd();
                    vThis76.Ol(p1321);
                  });
                  v$217.append(v$220);
                })(vLN0207);
              }
            }
          }
        };
        f194.prototype.Ol = function (p1322) {
          if (!(p1322 < 0) && !(p1322 >= this.Kl[this.Ll].length)) {
            this.Ml = p1322;
            v$217.children().css("background-color", "transparent");
            var v1204 = v$217.children(":nth-child(" + (1 + p1322) + ")");
            v1204.css("background-color", v1204.css("border-color"));
            this.sl.il(true);
          }
        };
        f194.prototype.ql = function () {
          return this.Kl[this.Ll][this.Ml];
        };
        return f194;
      }();
      return vF11119;
    }();
    var vF76 = function () {
      var v$221 = $("#withdraw-consent-yes");
      var v$222 = $("#withdraw-consent-no");
      var vF11120 = f111(vF64, function () {
        vF64.call(this, f106("index.game.popup.menu.consent.tab"), false);
        var vF10333 = f103();
        v$221.click(function () {
          vF10333.r.Cd();
          if (vF10333.Y()) {
            vF10333.s.I(vF10333.s.F);
            vF10333.$(false, true);
            vF10333.s.aa._(new vF81());
          } else {
            vF10333.s.gi();
          }
        });
        v$222.click(function () {
          vF10333.r.Cd();
          vF10333.s.gi();
        });
      });
      vF11120.prototype.a = function () {
        vF11120.parent.prototype.a.call(this);
      };
      vF11120.prototype.Rk = function () {
        vF64.Fk.stop();
        vF64.Fk.fadeOut(50);
        vF64.Gk.stop();
        vF64.Gk.fadeOut(50);
        vF64.Hk.stop();
        vF64.Hk.fadeOut(50);
        vF64.Jk.stop();
        vF64.Jk.fadeOut(50);
        vF64.Ik.stop();
        vF64.Ik.fadeOut(50);
        vF64.Kk.stop();
        vF64.Kk.fadeOut(50);
        vF64.Lk.stop();
        vF64.Lk.fadeOut(50);
        vF64.Mk.stop();
        vF64.Mk.fadeOut(50);
        vF64.Nk.stop();
        vF64.Nk.fadeIn(200);
        vF64.Ok.stop();
        vF64.Ok.fadeOut(50);
      };
      vF11120.prototype.ji = function () {
        f103().r.Dd();
      };
      return vF11120;
    }();
    var vF77 = function () {
      var v$223 = $("#delete-account-timer");
      var v$224 = $("#delete-account-yes");
      var v$225 = $("#delete-account-no");
      var vF11121 = f111(vF64, function () {
        vF64.call(this, f106("index.game.popup.menu.delete.tab"), false);
        var vF10334 = f103();
        v$224.click(function () {
          vF10334.r.Cd();
          if (vF10334.u.P()) {
            vF10334.u.bj();
            vF10334.u.Wi();
          } else {
            vF10334.s.gi();
          }
        });
        v$225.click(function () {
          vF10334.r.Cd();
          vF10334.s.gi();
        });
        this.Pl = [];
      });
      vF11121.prototype.a = function () {
        vF11121.parent.prototype.a.call(this);
      };
      vF11121.prototype.Rk = function () {
        vF64.Fk.stop();
        vF64.Fk.fadeOut(50);
        vF64.Gk.stop();
        vF64.Gk.fadeOut(50);
        vF64.Hk.stop();
        vF64.Hk.fadeOut(50);
        vF64.Jk.stop();
        vF64.Jk.fadeOut(50);
        vF64.Ik.stop();
        vF64.Ik.fadeOut(50);
        vF64.Kk.stop();
        vF64.Kk.fadeOut(50);
        vF64.Lk.stop();
        vF64.Lk.fadeOut(50);
        vF64.Mk.stop();
        vF64.Mk.fadeOut(50);
        vF64.Nk.stop();
        vF64.Nk.fadeOut(50);
        vF64.Ok.stop();
        vF64.Ok.fadeIn(200);
      };
      vF11121.prototype.ji = function () {
        f103().r.Hd();
        v$224.stop();
        v$224.hide();
        v$223.stop();
        v$223.show();
        v$223.text(".. 10 ..");
        this.Ql();
        this.Rl(function () {
          v$223.text(".. 9 ..");
        }, 1000);
        this.Rl(function () {
          v$223.text(".. 8 ..");
        }, 2000);
        this.Rl(function () {
          v$223.text(".. 7 ..");
        }, 3000);
        this.Rl(function () {
          v$223.text(".. 6 ..");
        }, 4000);
        this.Rl(function () {
          v$223.text(".. 5 ..");
        }, 5000);
        this.Rl(function () {
          v$223.text(".. 4 ..");
        }, 6000);
        this.Rl(function () {
          v$223.text(".. 3 ..");
        }, 7000);
        this.Rl(function () {
          v$223.text(".. 2 ..");
        }, 8000);
        this.Rl(function () {
          v$223.text(".. 1 ..");
        }, 9000);
        this.Rl(function () {
          v$223.hide();
          v$224.fadeIn(300);
        }, 10000);
      };
      vF11121.prototype.Rl = function (p1323, p1324) {
        var vSetTimeout2 = setTimeout(p1323, p1324);
        this.Pl.push(vSetTimeout2);
      };
      vF11121.prototype.Ql = function () {
        for (var vLN0208 = 0; vLN0208 < this.Pl.length; vLN0208++) {
          clearTimeout(this.Pl[vLN0208]);
        }
        this.Pl = [];
      };
      return vF11121;
    }();
    var vF78 = function () {
      function f195() {
        this.Ck = function () {};
      }
      f195.prototype.Bk = function () {};
      f195.prototype.ji = function () {};
      return f195;
    }();
    var vF79 = function () {
      var vF11122 = f111(vF78, function (p1325) {
        vF78.call(this);
        var v1205 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $("<div id=\"" + v1205 + "\" class=\"toaster toaster-coins\">    <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />    <div class=\"toaster-coins-val\">+" + p1325 + "</div>    <div class=\"toaster-coins-close\">" + f106("index.game.toaster.continue") + "</div></div>");
        var vThis77 = this;
        this.Sl.find(".toaster-coins-close").click(function () {
          f103().r.Cd();
          vThis77.Ck();
        });
      });
      vF11122.prototype.Bk = function () {
        return this.Sl;
      };
      vF11122.prototype.ji = function () {
        f103().r.Fd();
      };
      return vF11122;
    }();
    var vF80 = function () {
      var vF11123 = f111(vF78, function (p1326) {
        vF78.call(this);
        var v1206 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $("<div id=\"" + v1206 + "\" class=\"toaster toaster-levelup\">    <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />    <div class=\"toaster-levelup-val\">" + p1326 + "</div>    <div class=\"toaster-levelup-text\">" + f106("index.game.toaster.levelup") + "</div>    <div class=\"toaster-levelup-close\">" + f106("index.game.toaster.continue") + "</div></div>");
        var vThis78 = this;
        this.Sl.find(".toaster-levelup-close").click(function () {
          f103().r.Cd();
          vThis78.Ck();
        });
      });
      vF11123.prototype.Bk = function () {
        return this.Sl;
      };
      vF11123.prototype.ji = function () {
        f103().r.Ed();
      };
      return vF11123;
    }();
    var vF81 = function () {
      var vF11124 = f111(vF78, function () {
        vF78.call(this);
        var vThis79 = this;
        var vF10335 = f103();
        var v1207 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $("<div id=\"" + v1207 + "\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\"" + vLSimageslinelogoxmas20 + "\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">" + f106("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + "</span>        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + f106("index.game.toaster.consent.link") + "</a>    </div>    <div class=\"toaster-consent-close\">" + f106("index.game.toaster.consent.iAccept") + "</div></div>");
        this.Tl = this.Sl.find(".toaster-consent-close");
        this.Tl.hide();
        this.Tl.click(function () {
          vF10335.r.Cd();
          if (vF10335.Y()) {
            vF10335.$(true, true);
          }
          vThis79.Ck();
        });
      });
      vF11124.prototype.Bk = function () {
        return this.Sl;
      };
      vF11124.prototype.ji = function () {
        var vThis80 = this;
        var vF10336 = f103();
        if (vF10336.Y() && !vF10336.Z()) {
          vF10336.r.Hd();
          setTimeout(function () {
            vThis80.Tl.fadeIn(300);
          }, 2000);
        } else {
          setTimeout(function () {
            vThis80.Ck();
          }, 0);
        }
      };
      return vF11124;
    }();
    var vO43 = {};
    vO43.main = {
      Ma: f127("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
      K: f127("ltmolilci1iurq1i", "wormate-io_970x250"),
      ra: f124(),
      e: 4,
      oa: false,
      qk: true
    };
    vO43.miniclip = {
      Ma: f127("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
      K: f127("ltmolilci1iurq1i", "wormate-io_970x250"),
      ra: f124(),
      e: 4,
      oa: false,
      qk: false
    };
    var v1208 = vO43[window.ENV];
    v1208 ||= vO43.main;
    $(function () {
      FastClick.attach(document.body);
    });
    addEventListener("contextmenu", function (p1327) {
      p1327.preventDefault();
      p1327.stopPropagation();
      return false;
    });
    f110("//connect.facebook.net/" + vUndefined3 + "/sdk.js", "facebook-jssdk", function () {
      FB.init({
        appId: "861926850619051",
        cookie: true,
        xfbml: true,
        status: true,
        version: "v8.0"
      });
    });
    f110("//apis.google.com/js/api:client.js", null, function () {
      gapi.load("auth2", function () {
        v704 = gapi.auth2.init({
          client_id: "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com"
        });
      });
    });
    vUndefined4 = f128();
    vUndefined4.v();
    if (vF14()) {
      f110("https://haylamday.com/js/joy.min.js", "mobileconfig", function () {
        vF82();
      });
    }
    ;
    let vF82 = function () {
      $("#game-canvas").after("<div id='zoom-container'>\n                                <div id='zoom-in'>-</div>\n                                <div id='zoom-out'>+</div>\n                                         </div>\n               \n                                         \n                                         \n                                         \n                                         ");
    };
    window.keyMove = 81;
    window.addEventListener("keydown", function (p1328) {
      console.log("event.keyCode " + p1328.keyCode);
      p1328 = p1328.which || p1328.keyCode || 0;
      if (p1328 !== 113 && window.keyMove !== p1328 || !v693 || v692) {
        clearInterval(v692);
        v692 = null;
      } else {
        let v1209 = vO28.eventoPrincipal.sk = 0;
        p1328 = window.tuNewScore;
        v692 = setInterval(function () {
          let vParseFloat = parseFloat(vO28.eventoPrincipal.sk);
          vO28.eventoPrincipal.sk = (vParseFloat >= Math.PI ? -vParseFloat : vParseFloat) + (v1209 === 0 ? 0 : Math.PI / 4);
          v1209++;
        }, 500 + (p1328 >= 100000 ? 5 : p1328 >= 10000 ? 10 : 0));
      }
      localStorage.setItem("SaveGameXT", JSON.stringify(vO29));
    }, false);
    let vA22 = [{
      nombre: "chuot 1",
      url: "https://i.imgur.com/SjFtyqp.png"
    }, {
      nombre: "chuot 2",
      url: "https://i.imgur.com/4QC2Exd.png"
    }, {
      nombre: "chuot 3",
      url: "https://i.imgur.com/PfdBkc2.png"
    }, {
      nombre: "chuot 4",
      url: "https://i.imgur.com/vD4zoMk.png"
    }, {
      nombre: "chuot 5",
      url: "https://i.imgur.com/n4N79UI.png"
    }, {
      nombre: "arrow",
      url: "https://cdn.custom-cursor.com/db/234/32/arrow2291.png"
    }, {
      nombre: "Superman",
      url: "https://cdn.custom-cursor.com/db/cursor/32/Superman_Cursor.png"
    }, {
      nombre: "Kratos",
      url: "https://cdn.custom-cursor.com/128/assets/pointers/32/GOW_Kratos_Pointer.png"
    }, {
      nombre: "Pusheen_Ca",
      url: "https://cdn.custom-cursor.com/db/cursor/32/Pusheen_Cat_Cursor.png"
    }, {
      nombre: "lipstick",
      url: "https://cdn.custom-cursor.com/db/15214/32/sailor-moon-fish-eye-and-lipstick-cursor.png"
    }, {
      nombre: "AKM",
      url: "https://cdn.custom-cursor.com/db/cursor/32/PUBG_AKM_Cursor.png"
    }, {
      nombre: "Cherries_Pointer",
      url: "https://cdn.custom-cursor.com/db/pointer/32/Cherries_Pointer.png"
    }, {
      nombre: "Tom_and_JerryCurso",
      url: "https://cdn.custom-cursor.com/db/cursor/32/Tom_and_JerryCursor.png"
    }, {
      nombre: "JerryPointer",
      url: "https://cdn.custom-cursor.com/db/pointer/32/Tom_and_JerryPointer.png"
    }];
    let vA23 = [{
      nombre: "Default",
      url: "https://i.imgur.com/8ubx4RA.png"
    }, {
      nombre: "Schwarze Background",
      url: "https://i.imgur.com/3cxXwZ6.png"
    }, {
      nombre: "light blue",
      url: "https://i.imgur.com/dWtJFIx.png"
    }, {
      nombre: "woman",
      url: "https://i.imgur.com/19YALRi.png"
    }, {
      nombre: "Navidad",
      url: "https://i.imgur.com/qAO9LgC.png"
    }, {
      nombre: "Mal3ab",
      url: "https://i.imgur.com/MlCgOma.png"
    }, {
      nombre: "Galaxy_Star",
      url: "https://i.imgur.com/yayb9Ru.png"
    }, {
      nombre: "Desert",
      url: "https://asserts.wormworld.io/backgrounds/bkgnd7.png"
    }];
    vO29.loading = true;
    var vLS4 = "";
    vLS4 += "</div>";
    vLS4 += "</div>";
    vLS4 += "</div>";
    vLS4 += "<div id=\"wormcerca\">";
    vLS4 += "<img class=\"pwrups v0\" style=\"display: none;\" src=\"https://i.imgur.com/M1LFPpp.png\">";
    vLS4 += "<img class=\"pwrups v1\" style=\"display: none;\" src=\"https://i.imgur.com/z162iYa.png\">";
    vLS4 += "<img class=\"pwrups v2\" style=\"display: none;\" src=\"https://i.imgur.com/kXlF32q.png\">";
    vLS4 += "<img class=\"pwrups v3\" style=\"display: none;\" src=\"https://i.imgur.com/kJ6oz7e.png\">";
    vLS4 += "<img class=\"pwrups v4\" style=\"display: none;\" src=\"https://i.imgur.com/l3ds43O.png\">";
    vLS4 += "<img class=\"pwrups v5\" style=\"display: none;\" src=\"https://i.imgur.com/FqA56k6.png\">";
    vLS4 += "<img class=\"pwrups v6\" style=\"display: none;\" src=\"https://i.imgur.com/mSCZeEp.png\">";
    vLS4 += "</div>";
    vLS4 += "<img class=\"worm_1\" src=\"https://i.imgur.com/iekrYYm.png\"><span class=\"Worm_cerca\"></span>";
    vLS4 += "\n      \n         <div style=\"display:none\" id=\"zoom-container\">\n         <div id=\"zoom-out\">-</div>\n         <div id=\"zoom-in\">+</div>\n         </div>\n        <div class=\"worm_3\">x.<span id=\"zoom-percentage\"></span></div>\n        <div class=\"worm_2\">\n        <button id=\"settingBtn\"><img src=\"https://i.imgur.com/bKAe6W9.png\"/></button>\n        <div id=\"settingContent\">\n        \n        \n        <div class=\"container1\">\n                    <span class=\"settings_span\">Spin-Fast: </span>\n                    <input id=\"smoothCamera\" class=\"range\" type=\"range\" min=\"0.3\" max=\"0.6\" value=\"' + theoKzObjects.smoothCamera + '\" step=\"0.1\" onmousemove=\"smoothCameraValue.value=value\" />\n        </div>         \n        \n        <div class=\"container1\">\n        <span class=\"settings_span\">Power-ups-Size: </span>\n        <input id=\"PortionSize\" class=\"range\" type=\"range\" min=\"1\" max=\"6\" value=\"' + theoKzObjects.PortionSize + '\" step=\"1\" onmousemove=\"rangevalue1.value=value\" />\n        </div>\n        \n      <div class=\"container1\">\n      <span class=\"settings_span\">Power-ups-Aura: </span>\n      <input id=\"PortionAura\" class=\"range\" type=\"range\" min=\"1.2\" max=\"3.2\" value=\"' + theoKzObjects.PortionAura + '\" step=\"0.2\" onmousemove=\"PortionAuravalue.value=value\" />\n      </div>\n       \n      <div class=\"container1\">\n                    <span class=\"settings_span\">Food-Size: </span>\n                    <input id=\"FoodSize\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"' + theoKzObjects.FoodSize + '\" step=\"0.5\" onmousemove=\"rangevalue2.value=value\" />\n                    </div>\n                    <div class=\"container1\">\n                    <span class=\"settings_span\">Food-Shadow: </span>\n                    <input id=\"FoodShadow\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"' + theoKzObjects.FoodShadow + '\" step=\"0.5\" onmousemove=\"FoodShadowvalue.value=value\" />\n                    </div>\n    </div>\n    </div>";
    $("#game-view").append(vLS4);
    function f196(p1329) {
      if (vO29.PropertyManager) {
        p1329.skinId = vO29.PropertyManager.rh;
        p1329.eyesId = vO29.PropertyManager.sh;
        p1329.mouthId = vO29.PropertyManager.th;
        p1329.glassesId = vO29.PropertyManager.uh;
        p1329.hatId = vO29.PropertyManager.vh;
      }
    }
    function f197() {
      $("#mm-event-text").replaceWith("<div class=\"text-vnxx\"><a href=\"https://www.facebook.com/WormateFriendsConnect\">Wormate Friends Connect 2024</a></div>");
      $(".column-right").append("\n          \n          <div class=\"id\" style=\"display: grid !important;\n    grid-template-columns: 4fr 1fr;\n    gap: 8.5px;\">\n          \n          \n          \n          <input type=\"text\" value=\"" + vO29.FB_UserID + "\" class=\"you-idd\" />\n          \n          <div class=\"you-id-copyy\" onclick=\"navigator.clipboard.writeText('" + vO29.FB_UserID + "').then(()=> alert('You ID : " + vO29.FB_UserID + " copy!'));\">COPY</div>\n          </div>\n          ");
      $("#mm-store").after("<div id=\"mm-store\" style=\"float: right;position: relative;margin-right: 40px;min-width: 140px;\">\n            <div style=\"margin: 0;\" id=\"loa831pibur0w4gv\">\n            \n        <div onclick=\"openPopup()\"><i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color:yellow;font-size: 25px;\"> </i> Settings</div>\n        <div id=\"popup\" class=\"popup\">\n        <div class=\"phdr1\"><i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color:yellow;font-size: 25px;\"></i> Wormate Friends Settings</div>\n        <button class=\"close-button\" onclick=\"closePopup()\">Close</button>\n        \n                    <div id=\"kich-hoat\">\n                \n           ID : <input type=\"text\" value=\"" + vO29.FB_UserID + "\" class=\"you-id\" />\n                \n                <button class=\"you-id-copy\" onclick=\"navigator.clipboard.writeText('" + vO29.FB_UserID + "').then(()=> alert('You ID " + vO29.FB_UserID + " copiado! copied!'));\">COPY</button>\n                </div>   \n                \n               \n\n\n<table>\n    <tbody>\n        <tr>\n            <td>\n            <div class=\"settings-lineZoom\">\n                    <span class=\"settings-labelZoom\"><i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> Ability EatingSpeed :</span>\n                    <input class=\"settings-switchZoom\" id=\"settings-Abilityzoom-switch\" type=\"checkbox\"/>\n                    <label for=\"settings-Abilityzoom-switch\"></label>\n                    </div>\n            </td>\n            <td>\n            <div class=\"settings-lineZoom\">\n                    <span class=\"settings-labelZoom\"><i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> Modo Streamer :</span>\n                    <input class=\"settings-switchZoom\" id=\"settings-stremingmode-switch\" type=\"checkbox\"/>\n                    <label for=\"settings-stremingmode-switch\"></label>\n                    </div>\n            </td>\n            <td>\n            <div class=\"settings-lineZoom\">\n                    <span class=\"settings-labelZoom\"><i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> Total Kill : </span>\n                    <input class=\"settings-switchZoom\" id=\"settings-stremingmodesaveheadshot-switch\" type=\"checkbox\"/>\n                    <label for=\"settings-stremingmodesaveheadshot-switch\"></label>\n                    </div>\n            </td>\n        </tr>\n        <tr>\n            <td>\n            <div class=\"settings-lineZoom\">\n                    <span class=\"settings-labelZoom\"><i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> 3 Top Score :</span>\n                    <input class=\"settings-switchZoom\" id=\"settings-stremingmodebatop-switch\" type=\"checkbox\"/>\n                    <label for=\"settings-stremingmodebatop-switch\"></label>\n                    </div>\n            </td>\n            <td>\n            <div class=\"settings-lineZoom\">\n                    <span class=\"settings-labelZoom\"><i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> Off Emoj :</span>\n                    <input class=\"settings-switchZoom\" id=\"settings-stremingmodeemoj-switch\" type=\"checkbox\"/>\n                    <label for=\"settings-stremingmodeemoj-switch\"></label>\n                    </div>\n            </td>\n            <td>\n            <div class=\"settings-lineZoom\">\n                    <span class=\"settings-labelZoom\"><i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> Off Sounds Headshot :</span>\n                    <input class=\"settings-switchZoom\" id=\"settings-stremingmodeheadshot-switch\" type=\"checkbox\"/>\n                    <label for=\"settings-stremingmodeheadshot-switch\"></label>\n                    </div>\n            </td>\n        </tr>\n    </tbody>\n</table>\n                \n                \n                <table>\n    <tbody>\n        <tr>\n            <td>\n            <div class=\"spancursor\"><i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color:#ff8f00;font-size: 25px;\"></i> Select Cursor</div>\n                    <div class=\"cursor-container\"><div id=\"default-cursor-btn\"><img style=\"margin-top: -45px; margin-right: 60px; float: right; width: 25px; height: 28px;\" class=\"img\" alt=\"Imgur-Upload\" src=\"https://i.imgur.com/rI522o3.png\"></div></div>\n            </td>\n            <td>\n            <div class=\"spancursor\"><i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color:#ff8f00;font-size: 25px;\"></i> Select Background</div>\n                    <div class=\"background-container\"></div>\n            </td>\n        </tr>\n    </tbody>\n</table>\n                \n                \n               \n                    \n                    \n                    \n                    \n                    <div class=\"list2\"><i class=\"fa fa-pencil-square-o\" style=\"color: #ce00ff; font-size: 17px;\"></i> Keys <a href=\"/\">Q</a> : Automatically turns around in one place. (Quay Ã„ÂÃ¡ÂºÂ§u VÃƒÂ²ng TrÃƒÂ²n 1 ChÃ¡Â»â€”)</div>\n                    <div class=\"list2\"><i class=\"fa fa-pencil-square-o\" style=\"color: #ce00ff; font-size: 17px;\"></i> Keys <a href=\"/\">R </a> : Quick Revive (HÃ¡Â»â€œi Sinh Nhanh)</div>\n                    \n                    <div class=\"list2\"><i class=\"fa fa-pencil-square-o\" style=\"color: #ce00ff; font-size: 17px;\"></i> Note : This setting is only for activated members . Thank you !</div>\n                    <div class=\"list2\"><i class=\"fa fa-pencil-square-o\" style=\"color: #ce00ff; font-size: 17px;\"></i> LÃ†Â°u ÃƒÂ : PhÃ¡ÂºÂ§n cÃƒ i Ã„â€˜Ã¡ÂºÂ·t nÃƒ y chÃ¡Â»â€° dÃƒ nh cho thÃƒ nh viÃƒÂªn Ã„â€˜ÃƒÂ£ kÃƒÂ­ch hoÃ¡ÂºÂ¡t . Xin cÃ¡ÂºÂ£m Ã†Â¡n !</div>\n                    <center><div class=\"hg\"><a target=\"_blank\" href=\"https://thanhtoan.vuonghiep.com/\">Activated (KÃƒÂ­ch HoÃ¡ÂºÂ¡t)</a></div></center>\n\n           \n        </div>");
      $("#loa831pibur0w4gv").replaceWith("\n           \n           \n           \n           \n           \n           <div style=\"margin: 0;\" id=\"loa831pibur0w4gv\">\n                 <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" />\n           \n                <div class=\"contain-border\" id=\"contain-border\">\n                <div class=\"label\" id=\"titleSetings\">Notification</div>\n                <div class=\"bao-list1\">\n                <div class=\"list1\"><i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color:48ff00;\"></i> Zoom activation fee is $1/month .</div>\n                \n                <input type=\"text\" value=\"" + vO29.FB_UserID + "\" style=\"width: 236px;height: 23px;border-radius: 4px;font-size: 15px;padding: 0 6px;background-color: #fff;color: #806102;display: block;box-sizing: border-box;-webkit-appearance: none;outline: 0;border-width: 0;\">\n        <button style=\"height: 25px;float: right;margin-top: -24px;margin-right: -6px;line-height: 1.2;font-size: 14px;\" onclick=\"navigator.clipboard.writeText('" + vO29.FB_UserID + "').then(()=> alert('You ID " + vO29.FB_UserID + " copiado! copied!'));\">Copy</button>\n                <center><div class=\"hg\"><a target=\"_blank\" href=\"https://thanhtoan.vuonghiep.com/\">Activated (KÃƒÂ­ch HoÃ¡ÂºÂ¡t)</a></div></center>\n                \n             <div class=\"list1\"><i class=\"fa fa-book\" aria-hidden=\"true\" style=\"color:48ff00;\"></i> Instructions for installing on IOS and iPad New 2024: <a style=\"color: #0b2483; font-weight: 600;\" href=\"https://www.youtube.com/watch?v=uyHHXWKHgRw\">https://www.youtube.com/watch?v=uyHHXWKHgRw</a></div>\n                   \n                   <div class=\"list1\"><i class=\"fa fa-book\" aria-hidden=\"true\" style=\"color:48ff00;\"></i> HÃ†Â°Ã¡Â»â€ºng dÃ¡ÂºÂ«n cÃƒ i Ã„â€˜Ã¡ÂºÂ·t trÃƒÂªn IOS vÃƒ  iPad New 2024 : <a style=\"color: #0b2483; font-weight: 600;\" href=\"https://www.youtube.com/watch?v=uyHHXWKHgRw\">https://www.youtube.com/watch?v=uyHHXWKHgRw</a></div>  \n                \n                \n              </div>   \n             </div>\n             </div>\n             ");
      var v1210 = document.getElementById("settingBtn");
      var v1211 = document.getElementById("settingContent");
      v1210.addEventListener("click", function () {
        if (v1211.style.display === "none") {
          v1211.style.display = "block";
        } else {
          v1211.style.display = "none";
        }
      });
      $("#PortionSize").on("input", function () {
        vO29.PortionSize = $(this).val();
        localStorage.PotenciadorSize = vO29.PortionSize;
      });
      $("#PortionAura").on("input", function () {
        vO29.PortionAura = $(this).val();
        localStorage.PotenciadorAura = vO29.PortionAura;
      });
      $("#smoothCamera").on("input", function () {
        vO29.smoothCamera = $(this).val();
        localStorage.smoothCamera = vO29.smoothCamera;
      });
      $("#FoodSize").on("input", function () {
        vO29.FoodSize = $(this).val();
        localStorage.ComidaSize = vO29.FoodSize;
      });
      $("#FoodShadow").on("input", function () {
        vO29.FoodShadow = $(this).val();
        localStorage.ComidaShadow = vO29.FoodShadow;
      });
      $("#mm-advice-cont").html("\n            \n            \n            \n            <div class=\"vietnam\" style=\"display: grid !important; grid-template-columns: 1fr 1fr 1fr;gap: 8.5px;\">\n            \n            \n    <input type=\"button\" value=\"F.SCREEN\" class=\"fullscreen_button\">\n    \n    \n    <input type=\"button\" value=\"RESPAWN\" id=\"hoisinh\" class=\"fullscreen_respawn\">\n    \n    <input type=\"button\" value=\"CONTACT\" onclick=\"window.location.href='https://api.whatsapp.com/send?phone=84924623650&text=Xin%20ch%C3%A0o!%20M%C3%ACnh%20%C4%91ang%20d%C3%B9ng%20Whatsapp'\" class=\"fullscreen_contact\">\n    </div> ");
      $(".mm-merchant-cont").html("\n  <div style=\"display: flex; justify-content: center; align-items: center;\">\n    <a href=\"https://www.youtube.com/@NonaMilano\" target=\"_blank\" style=\"margin-right: 10px;\">\n      <img src=\"https://haylamday.com/images/hiep_img/nona.png\" alt=\"nona\" width=\"155\">\n    </a>\n    <a href=\"https://thanhtoan.vuonghiep.com\" target=\"_blank\">\n      <img src=\"https://i.imgur.com/UptsCxV.png\" alt=\"wfc\" width=\"155\">\n    </a>\n  </div>");
      $(document).ready(function () {
        $(".fullscreen_button").on("click", function () {
          if (document.fullScreenElement && document.fullScreenElement !== null || !document.mozFullScreen && !document.webkitIsFullScreen) {
            if (document.documentElement.requestFullScreen) {
              document.documentElement.requestFullScreen();
            } else if (document.documentElement.mozRequestFullScreen) {
              document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullScreen) {
              document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }
          } else if (document.cancelFullScreen) {
            document.cancelFullScreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          }
        });
      });
      $("#hoisinh").click(function () {
        let vV6912 = v691;
        if (vV6912) {
          anApp.r.Hd();
          anApp.sa(vV6912);
        }
      });
      $(".mm-merchant").replaceWith("");
      $(".description-text").replaceWith("\n            \n            <div class=\"contain-border\" id=\"contain-border\">\n            \n                   <div style=\";padding: 0px;margin: 0;height:338px\" class=\"description-text\">\n                    <div id=\"title\">Wormate Friends Connect</div>\n                    <ul style=\"margin-top: 5px;\" class=\"ui-tabs-nav\">\n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive0 ui-tab-active\" style=\"margin: -5px\">\n                        <a>\n                        <span class=\"flag br\" value=\"https://i.imgur.com/dixYLjk.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive1\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag mx\"  value=\"https://i.imgur.com/JMAvuFN.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive2\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag us\" value=\"https://i.imgur.com/Jb2FF0y.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive3\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag ca\" value=\"https://i.imgur.com/m1skEsB.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive4\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag de\" value=\"https://i.imgur.com/VgCH8iy.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive5\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag fr\" value=\"https://i.imgur.com/QuEjBr0.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive6\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag sg\" value=\"https://i.imgur.com/ErLcgXP.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive7\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag jp\" value=\"https://i.imgur.com/P2rYk1k.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive8\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag au\" value=\"https://i.imgur.com/12e0wp4.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive9\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag gb\" value=\"https://i.imgur.com/8pQY6RW.png\"></span>\n                        </a>\n                    </li>\n                    \n                    </ul>\n                    <div class=\"bao-list2\">\n                    <div class=\"gachngang\"></div>\n                    \n                    <div class=\"servers-container\">\n                    <div class=\"servers-peru\"></div>\n                    <div class=\"servers-mexico\" style=\"display: none;\"></div>\n                    <div class=\"servers-eeuu\" style=\"display: none;\"></div>\n                    <div class=\"servers-canada\" style=\"display: none;\"></div>\n                    <div class=\"servers-germania\" style=\"display: none;\"></div>\n                    <div class=\"servers-francia\" style=\"display: none;\"></div>\n                    <div class=\"servers-singapur\" style=\"display: none;\"></div>\n                    <div class=\"servers-japon\" style=\"display: none;\"></div>\n                    <div class=\"servers-australia\" style=\"display: none;\"></div>\n                    <div class=\"servers-granbretana\" style=\"display: none;\"></div>\n                    \n                    \n                    </div></div>\n                    </div>\n                   \n                    \n                    ");
      $(".ui-tab").on("click", f209);
      $(".flag").click(function () {
        let v1212 = $(this).attr("value");
        vO29.flag = v1212;
        vO32.containerImgS.texture = vO32.onclickServer;
        retundFlagError();
        console.log(v1212);
      });
      for (a = 0; a < vO31.Api_listServer.length; a++) {
        var v1213 = vO31.Api_listServer[a].serverUrl;
        var v1214 = vO31.Api_listServer[a].name;
        var v1215 = vO31.Api_listServer[a].region;
        let v1216 = document.createElement("p");
        v1216.value = v1213;
        v1216.innerHTML = v1214;
        if (v1215 == "peru") {
          $(".servers-peru").prepend(v1216);
        } else if (v1215 == "mexico") {
          $(".servers-mexico").prepend(v1216);
        } else if (v1215 == "eeuu") {
          $(".servers-eeuu").prepend(v1216);
        } else if (v1215 == "canada") {
          $(".servers-canada").prepend(v1216);
        } else if (v1215 == "germania") {
          $(".servers-germania").prepend(v1216);
        } else if (v1215 == "francia") {
          $(".servers-francia").prepend(v1216);
        } else if (v1215 == "singapur") {
          $(".servers-singapur").prepend(v1216);
        } else if (v1215 == "japon") {
          $(".servers-japon").prepend(v1216);
        } else if (v1215 == "australia") {
          $(".servers-australia").prepend(v1216);
        } else if (v1215 == "granbretana") {
          $(".servers-granbretana").prepend(v1216);
        }
        $(v1216).attr("id", v1215);
        $(v1216).attr("class", "selectSala");
        $(v1216).attr("value", v1214);
        $(v1216).click(function () {
          vO32.setServer($(this).text());
          let v1217 = $(this).val();
          vO32.containerImgS.texture = vO32.onclickServer;
          retundFlagError();
          window.server_url = v1217;
          $("#mm-action-play").click();
          $("#adbl-continue").click();
        });
      }
    }
    function f198() {
      $("#getskin").on("click", function () {
        for (var vLN0209 = 0; vLN0209 < vO30.clientesActivos.length; vLN0209++) {
          var v1218 = vO30.clientesActivos[vLN0209].cliente_NOMBRE;
          var v1219 = vO30.clientesActivos[vLN0209].cliente_ID;
          var v1220 = vO30.clientesActivos[vLN0209].Client_VisibleSkin;
          var v1221 = vO30.clientesActivos[vLN0209].Client_VisibleSkin1;
          var v1222 = vO30.clientesActivos[vLN0209].Client_VisibleSkin2;
          var v1223 = vO30.clientesActivos[vLN0209].Client_VisibleSkin3;
          var v1224 = vO30.clientesActivos[vLN0209].Client_VisibleSkin4;
          var v1225 = vO30.clientesActivos[vLN0209].Client_VisibleSkin5;
          var v1226 = vO30.clientesActivos[vLN0209].Client_VisibleSkin6;
          var v1227 = vO30.clientesActivos[vLN0209].Client_VisibleSkin7;
          var v1228 = vO30.clientesActivos[vLN0209].Client_VisibleSkin8;
          var v1229 = vO30.clientesActivos[vLN0209].Client_VisibleSkin9;
          var v1230 = vO30.clientesActivos[vLN0209].Client_VisibleSkin10;
          var v1231 = vO30.clientesActivos[vLN0209].Client_VisibleSkin11;
          var v1232 = vO30.clientesActivos[vLN0209].Client_VisibleSkin12;
          var v1233 = vO30.clientesActivos[vLN0209].Client_VisibleSkin13;
          var v1234 = vO30.clientesActivos[vLN0209].Client_VisibleSkin14;
          var v1235 = vO30.clientesActivos[vLN0209].Client_VisibleSkin15;
          var v1236 = vO30.clientesActivos[vLN0209].Client_VisibleSkin16;
          var v1237 = vO30.clientesActivos[vLN0209].Client_VisibleSkin17;
          var v1238 = vO30.clientesActivos[vLN0209].Client_VisibleSkin18;
          var v1239 = vO30.clientesActivos[vLN0209].Client_VisibleSkin19;
          var v1240 = vO30.clientesActivos[vLN0209].Client_VisibleSkin20;
          var v1241 = vO30.clientesActivos[vLN0209].Client_KeyAccecs;
          if (vO29.FB_UserID == 0) {} else if (vO29.FB_UserID == v1219) {
            if (v1241 == "XTPRIVATESKIN") {
              for (let vLN0210 = 0; vLN0210 < vO29.idSkin.length; vLN0210++) {
                const v1242 = vO29.idSkin[vLN0210];
                if (v1242.id == v1220 || v1242.id == v1221 || v1242.id == v1222 || v1242.id == v1223 || v1242.id == v1224 || v1242.id == v1225 || v1242.id == v1226 || v1242.id == v1227 || v1242.id == v1228 || v1242.id == v1229 || v1242.id == v1230 || v1242.id == v1231 || v1242.id == v1232 || v1242.id == v1233 || v1242.id == v1234 || v1242.id == v1235 || v1242.id == v1236 || v1242.id == v1237 || v1242.id == v1238 || v1242.id == v1239 || v1242.id == v1240) {
                  v1242.nonbuyable = false;
                }
              }
            } else {}
          } else {}
        }
      });
    }
    function f199() {
      vO29.adblock = true;
      $("#loa831pibur0w4gv").replaceWith("\n              \n              <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" />\n              <div class=\"contain-border\" id=\"contain-border\">\n              <div class=\"label\" id=\"titleSetings\">Notification</div>\n                <div class=\"bao-list1\">\n                \n                <div class=\"list1\"><i class=\"fa fa-book\" aria-hidden=\"true\" style=\"color:48ff00;\"></i>\n                Update : 12/05/2025\n                </div>\n                \n                   <div class=\"list1\"><i class=\"fa fa-book\" aria-hidden=\"true\" style=\"color:48ff00;\"></i> Instructions for installing on IOS and iPad New 2024: <a href=\"https://www.youtube.com/watch?v=uyHHXWKHgRw\">https://www.youtube.com/watch?v=uyHHXWKHgRw</a></div>\n                   \n                   \n                   \n                   </div>\n                   ");
      $("#mm-coins-box").replaceWith("<div style=\"margin: 0;\" id=\"mm-coins-box\">\n                \n                <button style='width: 140px;height: 45px;float: right;border-radius: 10px;border: solid #fac 2px;' id='getskin'>Unlock Skins</button>\n                </div>\n                </div>");
      window.multiplier = 0.625;
      window.zoomLevel = 5;
      function f200() {
        window.zoomLevel++;
        window.multiplier *= 0.8;
        changedNf();
        f202();
      }
      function f201() {
        if (window.zoomLevel > 0) {
          window.zoomLevel--;
          window.multiplier /= 0.8;
          changedNf();
          f202();
        }
      }
      function f202() {
        var v1243 = Math.round(window.multiplier / 0.625 * 100);
        v1243 = Math.min(100, v1243);
        var v1244 = document.getElementById("zoom-percentage");
        v1244.textContent = v1243 + "%";
      }
      document.getElementById("zoom-in").addEventListener("touchstart", f200);
      document.getElementById("zoom-out").addEventListener("touchstart", f201);
      window.onwheel = p1330 => {
        p1330.preventDefault();
        if (p1330.deltaY < 0) {
          f200();
        } else {
          f201();
        }
      };
      $("#settings-Abilityzoom-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          vO29.eat_animation = 1;
          localStorage.setItem("mySwitch", "on");
        } else {
          console.log("I'm not checked");
          vO29.eat_animation = 0.0025;
          localStorage.setItem("mySwitch", "off");
        }
      });
      $(document).ready(function () {
        var v1245 = localStorage.getItem("mySwitch");
        if (v1245 === "on") {
          $("#settings-Abilityzoom-switch").prop("checked", true);
          vO29.eat_animation = 1;
        } else {
          $("#settings-Abilityzoom-switch").prop("checked", false);
          vO29.eat_animation = 0.0025;
        }
      });
      $("#settings-stremingmode-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          vO29.ModeStremer = true;
          localStorage.setItem("ModeStremer", "true");
        } else {
          console.log("I'm not checked");
          vO29.ModeStremer = false;
          localStorage.setItem("ModeStremer", "false");
        }
      });
      $(document).ready(function () {
        var v1246 = localStorage.getItem("ModeStremer");
        if (v1246 === "true") {
          vO29.ModeStremer = true;
          $("#settings-stremingmode-switch").prop("checked", true);
        } else {
          vO29.ModeStremer = false;
          $("#settings-stremingmode-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodebatop-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          vO29.ModeStremerbatop = true;
          localStorage.setItem("ModeStremerbatop", "true");
        } else {
          console.log("I'm not checked");
          vO29.ModeStremerbatop = false;
          localStorage.setItem("ModeStremerbatop", "false");
        }
      });
      $(document).ready(function () {
        var v1247 = localStorage.getItem("ModeStremerbatop");
        if (v1247 === "true") {
          vO29.ModeStremerbatop = true;
          $("#settings-stremingmodebatop-switch").prop("checked", true);
        } else {
          vO29.ModeStremerbatop = false;
          $("#settings-stremingmodebatop-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodeemoj-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          vO29.ModeStremeremoj = true;
          localStorage.setItem("ModeStremeremoj", "true");
        } else {
          console.log("I'm not checked");
          vO29.ModeStremeremoj = false;
          localStorage.setItem("ModeStremeremoj", "false");
        }
      });
      $(document).ready(function () {
        var v1248 = localStorage.getItem("ModeStremeremoj");
        if (v1248 === "true") {
          vO29.ModeStremeremoj = true;
          $("#settings-stremingmodeemoj-switch").prop("checked", true);
        } else {
          vO29.ModeStremeremoj = false;
          $("#settings-stremingmodeemoj-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodeheadshot-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          vO29.ModeStremerheadshot = true;
          localStorage.setItem("ModeStremerheadshot", "true");
        } else {
          console.log("I'm not checked");
          vO29.ModeStremerheadshot = false;
          localStorage.setItem("ModeStremerheadshot", "false");
        }
      });
      $(document).ready(function () {
        var v1249 = localStorage.getItem("ModeStremerheadshot");
        if (v1249 === "true") {
          vO29.ModeStremerheadshot = true;
          $("#settings-stremingmodeheadshot-switch").prop("checked", true);
        } else {
          vO29.ModeStremerheadshot = false;
          $("#settings-stremingmodeheadshot-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodeheadshot-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          vO29.ModeStremerheadshot = true;
          localStorage.setItem("ModeStremerheadshot", "true");
        } else {
          console.log("I'm not checked");
          vO29.ModeStremerheadshot = false;
          localStorage.setItem("ModeStremerheadshot", "false");
        }
      });
      $(document).ready(function () {
        var v1250 = localStorage.getItem("ModeStremerheadshot");
        if (v1250 === "true") {
          vO29.ModeStremerheadshot = true;
          $("#settings-stremingmodeheadshot-switch").prop("checked", true);
        } else {
          vO29.ModeStremerheadshot = false;
          $("#settings-stremingmodeheadshot-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodesaveheadshot-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          vO29.ModeStremersaveheadshot = true;
          localStorage.setItem("ModeStremersaveheadshot", "true");
        } else {
          console.log("I'm not checked");
          vO29.ModeStremersaveheadshot = false;
          localStorage.setItem("ModeStremersaveheadshot", "false");
        }
        location.reload();
      });
      $(document).ready(function () {
        var v1251 = localStorage.getItem("ModeStremersaveheadshot");
        if (v1251 === "true") {
          vO29.ModeStremersaveheadshot = true;
          $("#settings-stremingmodesaveheadshot-switch").prop("checked", true);
        } else {
          vO29.ModeStremersaveheadshot = false;
          $("#settings-stremingmodesaveheadshot-switch").prop("checked", false);
        }
      });
      $("#settings-arrowmobile-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          vO29.arrow = false;
        } else {
          console.log("I'm not checked");
          vO29.arrow = true;
        }
      });
      $("#PortionSize").on("input", function () {
        vO29.PortionSize = $(this).val();
        localStorage.PotenciadorSize = vO29.PortionSize;
      });
      $("#PortionAura").on("input", function () {
        vO29.PortionAura = $(this).val();
        localStorage.PotenciadorAura = vO29.PortionAura;
      });
      $("#smoothCamera").on("input", function () {
        vO29.smoothCamera = $(this).val();
        localStorage.smoothCamera = vO29.smoothCamera;
      });
      $("#FoodSize").on("input", function () {
        vO29.FoodSize = $(this).val();
        localStorage.ComidaSize = vO29.FoodSize;
      });
      $("#FoodShadow").on("input", function () {
        vO29.FoodShadow = $(this).val();
        localStorage.ComidaShadow = vO29.FoodShadow;
      });
      $("#KeyRespawn,#KeyAutoMov").on("keydown", function (p1331) {
        if (isValidHotkey(p1331)) {
          var v$226 = $(this);
          var vGetPresedKey = getPresedKey(p1331);
          var v1252 = p1331.keyCode;
          v$226.val(vGetPresedKey);
          v$226.blur();
          window.keyMove = v1252;
          window.localStorage.setItem(v$226.attr("id"), v1252);
        } else {
          p1331.preventDefault();
        }
      });
      for (a = 0; a < vA22.length; a++) {
        var v1253 = vA22[a].url;
        var v1254 = vA22[a].nombre;
        let v1255 = document.createElement("img");
        v1255.src = v1253;
        $(".cursor-container").prepend(v1255);
        $(v1255).attr("class", "cursor");
        $(v1255).click(function () {
          let v1256 = $(this).attr("src");
          localStorage.cursorSeleccionado = v1256;
          $("#game-cont").css({
            cursor: "url(" + v1256 + "), default"
          });
          $("#game-canvas").css({
            cursor: "url(" + v1256 + "), default"
          });
          $("body").css({
            cursor: "url(" + v1256 + "), default"
          });
        });
        $("#default-cursor-btn").click(function () {
          delete localStorage.cursorSeleccionado;
          $("#game-cont, #game-canvas, body").css("cursor", "default");
        });
      }
      $("#game-cont").css({
        cursor: "url(" + localStorage.cursorSeleccionado + "), default"
      });
      $("#game-canvas").css({
        cursor: "url(" + localStorage.cursorSeleccionado + "), default"
      });
      $("body").css({
        cursor: "url(" + localStorage.cursorSeleccionado + "), default"
      });
      for (a = 0; a < vA23.length; a++) {
        var v1257 = vA23[a].url;
        var v1258 = vA23[a].nombre;
        let v1259 = document.createElement("img");
        v1259.src = v1257;
        $(".background-container").prepend(v1259);
        $(v1259).attr("class", "background");
        $(v1259).attr("value", v1258);
        $(v1259).click(function () {
          let v1260 = $(this).attr("src");
          let v1261 = $(this).attr("value");
          backgroundIMG = v1260;
          localStorage.fondoSeleccionado = backgroundIMG;
          alert("You selected the background: " + v1261);
          vUndefined4.q.Cf = new vF17._b(vUndefined4.q.fn_o(v1260));
        });
      }
      $(".background-container").prepend("");
      vUndefined4.q.Cf = new vF17._b(vUndefined4.q.fn_o(localStorage.fondoSeleccionado));
    }
    function f203() {
      $(".description-text").replaceWith("<div class=\"description-text\">");
      $(".description-text").prepend("<p id='title'>Wormate Friends</p>");
      $("#title").after("<div id=\"idwormworld\" style=\"text-align: center\"><div class='logo'><img src='https://haylamday.com/images/hiep_img/logo.png'/></div>\n        <input type=\"text\" value=\"" + vO29.FB_UserID + "\" style=\"width: 230px;text-align: center;border-radius: 4px;font-size: 20px;padding: 0 6px;background-color: #fff;color: #806102;display: block;box-sizing: border-box;-webkit-appearance: none;outline: 0;border-width: 0;\">\n        <button onclick=\"navigator.clipboard.writeText('" + vO29.FB_UserID + "').then(()=> alert('You ID " + vO29.FB_UserID + " copiado! copied!'));\">COPY</button>\n    </div>\n<div></div>\n<div><input type=\"button\" value=\"ACTIVATE ALL\" target=\"_blank\" onclick=\"window.location.href='" + MYPAGE + "'\" style=\"margin-top: 5px; width: 100%\"></div>");
    }
    function f204(p1332, p1333) {
      let vF83 = function (p1334, p1335, p1336, p1337) {
        vO32.setCountGame(p1334, p1335, p1336, p1337);
      };
      if (p1332 === "count") {
        vO29.kill = (vO29.kill || 0) + (p1333 ? 0 : 1);
        vO29.headshot = (vO29.headshot || 0) + (p1333 ? 1 : 0);
        vO29.totalKills = vO29.totalKills + (p1333 ? 0 : 1);
        vO29.totalHeadshots = vO29.totalHeadshots + (p1333 ? 1 : 0);
        vF83(vO29.kill, vO29.headshot, vO29.totalKills, vO29.totalHeadshots);
      }
      if (p1332 === "open") {
        vO29.kill = 0;
        vO29.headshot = 0;
        $("#contadorKill_12").show();
        vF83(vO29.kill, vO29.headshot, vO29.totalKills, vO29.totalHeadshots);
      }
      if (p1332 === "closed") {
        vO27 = {};
      }
      if (p1332 === "cerrar") {
        vO29.kill = 0;
        vO29.headshot = 0;
        vO29.totalKills = 0;
        vO29.totalHeadshots = 0;
      }
    }
    if (!Number.prototype.dotFormat) {
      Number.prototype.dotFormat = function () {
        return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      };
    }
    if (!Number.prototype.dotFormatSelect2) {
      Number.prototype.dotFormatSelect2 = function () {
        return this.toString().substr(3, 2);
      };
    }
    setTimeout(function () {
      var vA24 = ["fuck you", "Ã„â€˜Ã¡Â»â€¹t", "cÃƒÂ¡i lÃ¡Â»â€œn", "chÃƒÂ³", "Ã„â€˜ÃƒÂ©o", "lÃ¡Â»â€œn", "Ã„â€˜ÃƒÂ©o", "Ã„â€˜Ã¡Â»â€¹t", "vÃƒÂ£i lÃ¡Â»â€œn", "cÃ¡ÂºÂ·c"];
      $("#mm-action-play").on("click", function () {
        var v1262 = $("#mm-params-nickname").val();
        var v1263 = vA24.some(function (p1338) {
          return v1262.toLowerCase().includes(p1338.toLowerCase());
        });
        if (v1263) {
          $("#mm-params-nickname").val("VÃ„Æ’n Minh LÃƒÂªn BÃ¡ÂºÂ¡n");
        }
      });
      $(document).ready(function () {
        $("#getskin").click();
      });
      $("#final-share-fb").css("display", "none");
      $("#unl6wj4czdl84o9b").css("display", "none");
      $("#mm-menu-cont").css("display", "block");
      $("#mm-bottom-buttons").css("display", "block");
      $("#mm-player-info").css("display", "block");
      $("#relojHelp").css("position", "absolute");
      $("#relojHelp").css("top", "12px");
      $("#relojHelp").css("left", "5px");
      $("#delete-account-view").css("display", "none");
    }, 3000);
    var v_0x7f127d = function f205() {
      requestAnimationFrame(f205);
      f103().Pa();
    };
    v_0x7f127d();
    function f206() {
      var v1264 = v$227.width();
      var v1265 = v$227.height();
      var v1266 = v$228.outerWidth();
      var v1267 = v$228.outerHeight();
      var v1268 = v$229.outerHeight();
      var v1269 = v$230.outerHeight();
      var v1270 = Math.min(1, Math.min((v1265 - v1269 - v1268) / v1267, v1264 / v1266));
      var v1271 = "translate(-50%, -50%) scale(" + v1270 + ")";
      v$228.css({
        "-webkit-transform": v1271,
        "-moz-transform": v1271,
        "-ms-transform": v1271,
        "-o-transform": v1271,
        transform: v1271
      });
      f103().Ra();
      window.scrollTo(0, 1);
    }
    var v$227 = $("body");
    var v$228 = $("#stretch-box");
    var v$229 = $("#markup-header");
    var v$230 = $("#markup-footer");
    f206();
    $(window).resize(f206);
  })();
  window.anApp.p.Bc = function () {
    var v1272 = window.anApp.p;
    var vO44 = {};
    $.get("https://resources.wormate.io/dynamic/assets/registry.json", function (p1339) {
      vO44 = p1339;
      fetch("https://haylamday.com/api/lan-da-vh.php").then(p1340 => p1340.json()).then(p1341 => {
        vO29.visibleSkin = p1341.visibleSkin;
        delete p1341.visibleSkin;
        for (let v1273 in p1341) {
          if (v1273 !== "propertyList") {
            if (Array.isArray(p1341[v1273])) {
              p1339[v1273] = p1339[v1273].concat(p1341[v1273]);
            } else {
              p1339[v1273] = {
                ...p1339[v1273],
                ...p1341[v1273]
              };
            }
          }
        }
        vO29.pL = p1341.propertyList;
        vO29.idSkin = p1341.skinArrayDict;
        v1272.Cc(p1339);
      }).catch(function (p1342) {
        console.error(p1342);
        v1272.Cc(vO44);
      });
    });
  };
  $("#background-canvas").replaceWith("\n\n<canvas id=\"background-canvas\"></canvas>\n\n");
  $(".mm-logo").replaceWith("\n    \n     <iframe style=\"width: 100%;\" src=\"https://haylamday.com/logo.html\" frameborder=\"0\" scrolling=\"no\"></iframe>");
  $("#popup-login-gg").html("<div class=\"settings-line\" id=\"popup-login-gg1\">Login via Google</div>");
  $("#social-buttons").replaceWith("");
  $("#markup-footer").replaceWith("\n    \n   \n    \n            <footer id=\"markup-footer\">\n            <div class=\"lang-menu\"><button class=\"lang-button\">Language Ã¢â€“Â´</button>\n            <div class=\"lang-list\"><a hreflang=\"en\" href=\"/\">English</a>\n<a hreflang=\"uk\" href=\"/uk/\">ÄžÂ£ÄžÂºÃ‘â‚¬ÄžÂ°Ã‘â€”ÄžÂ½Ã‘ÂÃ‘Å’ÄžÂºÄžÂ°</a>\n<a hreflang=\"de\" href=\"/de/\">Deutsch</a>\n<a hreflang=\"fr\" href=\"/fr/\">FranÃƒÂ§ais</a>\n<a hreflang=\"es\" href=\"/es/\">EspaÃƒÂ±ol</a>\n</div></div>\n            \n            <a class=\"link\" hreflang=\"en\" href=\"https://VuongHiep.Com\">Ã‚Â© 2024 Wormate Friends Connect</a>\n            \n            <a style=\"font-size: 17px;font-weight: 600;\">VuongHiep.Com</a>\n          <a style=\"font-size: 17px;font-weight: 500;color: #ff0;\"> Made with <i class='fa fa-heart animated infinite pulse' style='color:red'></i> in VungTau !</a>\n            </footer>\n\n\n\n\n\n        ");
});
function f207() {
  var v1274 = document.getElementById("popup");
  var v1275 = document.getElementById("overlay");
  v1274.style.display = "block";
  v1275.style.display = "block";
}
function f208() {
  var v1276 = document.getElementById("popup");
  var v1277 = document.getElementById("overlay");
  v1276.style.display = "none";
  v1277.style.display = "none";
}
function f209() {
  $(".mx").on("click", function () {
    $(".servers-mexico").fadeIn(500);
    $("#addflag").attr("class", "flag mx");
    $(".ui-tab-inactive1").attr("class", "ui-tab-active ui-tab-inactive1");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-peru").fadeOut(100);
    $(".servers-eeuu").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".br").on("click", function () {
    $(".servers-mexico").fadeOut(100);
    $(".servers-eeuu").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
    $(".ui-tab-inactive0").attr("class", "ui-tab-active ui-tab-inactive0");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-peru").fadeIn(500);
    $("#addflag").attr("class", "flag br");
  });
  $(".us").on("click", function () {
    $(".servers-eeuu").fadeIn(500);
    $("#addflag").attr("class", "flag us");
    $(".ui-tab-inactive2").attr("class", "ui-tab-active ui-tab-inactive2");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".ca").on("click", function () {
    $(".servers-canada").fadeIn(500);
    $("#addflag").attr("class", "flag ca");
    $(".ui-tab-inactive3").attr("class", "ui-tab-active ui-tab-inactive3");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(500);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".de").on("click", function () {
    $(".servers-germania").fadeIn(500);
    $("#addflag").attr("class", "flag de");
    $(".ui-tab-inactive4").attr("class", "ui-tab-active ui-tab-inactive4");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(500);
    $(".servers-canada").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".fr").on("click", function () {
    $(".servers-francia").fadeIn(500);
    $("#addflag").attr("class", "flag fr");
    $(".ui-tab-inactive5").attr("class", "ui-tab-active ui-tab-inactive5");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".sg").on("click", function () {
    $(".servers-singapur").fadeIn(500);
    $("#addflag").attr("class", "flag sg");
    $(".ui-tab-inactive6").attr("class", "ui-tab-active ui-tab-inactive6");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".jp").on("click", function () {
    $(".servers-japon").fadeIn(500);
    $("#addflag").attr("class", "flag jp");
    $(".ui-tab-inactive7").attr("class", "ui-tab-active ui-tab-inactive7");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".au").on("click", function () {
    $(".servers-australia").fadeIn(500);
    $("#addflag").attr("class", "flag au");
    $(".ui-tab-inactive8").attr("class", "ui-tab-active ui-tab-inactive8");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".gb").on("click", function () {
    $(".servers-granbretana").fadeIn(500);
    $("#addflag").attr("class", "flag gb");
    $(".ui-tab-inactive9").attr("class", "ui-tab-active ui-tab-inactive9");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
  });
}
getPresedKey = function (p1343) {
  var vLS5 = "";
  if (p1343.keyCode == 9) {
    vLS5 += "TAB";
  } else if (p1343.keyCode == 13) {
    vLS5 += "ENTER";
  } else if (p1343.keyCode == 16) {
    vLS5 += "SHIFT";
  } else {
    vLS5 += String.fromCharCode(p1343.keyCode);
  }
  return vLS5;
};
getStringKey = function (p1344) {
  var vLS6 = "";
  if (p1344 == 9) {
    vLS6 += "TAB";
  } else if (p1344 == 13) {
    vLS6 += "ENTER";
  } else if (p1344 == 16) {
    vLS6 += "SHIFT";
  } else if (p1344 == 32) {
    vLS6 += "SPACE";
  } else if (p1344 == 27) {
    vLS6 += "ESC";
  } else {
    vLS6 += String.fromCharCode(p1344);
  }
  return vLS6;
};
isValidHotkey = function (p1345) {
  if (p1345.keyCode >= 48 && p1345.keyCode <= 57 || p1345.keyCode >= 65 && p1345.keyCode <= 90 || p1345.keyCode == 9 || p1345.keyCode == 13 || p1345.keyCode == 16 || p1345.keyCode == 32 || p1345.keyCode == 27) {
    return true;
  } else {
    return false;
  }
};
console.log("Core 2022 THEO Update 2023");