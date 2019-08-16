//=============================================================================
// TMPlugin -  1 人旅行的主選單。
// バージョン: 0.1.3b
// 最終更新日: 2018/10/22
// 配布元    : https://hikimoki.sakura.ne.jp/
//-----------------------------------------------------------------------------
// Copyright (c) 2018 tomoaky
// Released under the MIT license.
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
 * @plugindesc  1 人旅行的主選單。
 *
 * @author tomoaky(翻譯 : ReIris)
 *
 * @param commandWindow
 * @text 命令窗口
 * @type struct<Parameter>
 * @desc 命令窗口參數
 * @default {"x":"0","y":"0","width":"240"}
 * 
 * @param statusWindow
 * @text 狀態窗口
 * @type struct<Parameter>
 * @desc 狀態窗口參數
 * @default {"x":"240","y":"0","width":"576","height":"624"}
 * 
 * @param goldWindow
 * @text 金錢窗口
 * @type struct<Parameter>
 * @desc 金錢窗口參數
 * @default {"x":"0","y":"552","width":"240"}
 * 
 * @param menuFace
 * @text 臉圖
 * @type struct<Parameter>
 * @desc 臉圖參數
 * @default {"x":"0","y":"0","width":"144","height":"144"}
 *
 * @param menuName
 * @text 角色名稱
 * @type struct<Parameter>
 * @desc 角色名稱參數
 * @default {"x":"152","y":"0","width":"168"}
 *
 * @param menuNickname
 * @text 角色暱稱
 * @type struct<Parameter>
 * @desc 暱稱參數
 * @default {"x":"328","y":"0","width":"168","fontSize":"20"}
 *
 * @param menuClass
 * @text 角色職業
 * @type struct<Parameter>
 * @desc 職業參數
 * @default {"x":"152","y":"36","width":"96"}
 *
 * @param menuLevel
 * @text 角色等級
 * @type struct<Parameter>
 * @desc 等級參數
 * @default {"x":"260","y":"36","width":"280"}
 *
 * @param menuHp
 * @text 角色 HP
 * @type struct<Parameter>
 * @desc HP 參數
 * @default {"x":"152","y":"72","width":"186"}
 *
 * @param menuMp
 * @text 角色 MP
 * @type struct<Parameter>
 * @desc MP 參數
 * @default {"x":"152","y":"108","width":"186"}
 *
 * @param menuTp
 * @text 角色 TP
 * @type struct<Parameter>
 * @desc TP 參數
 * @default {"x":"350","y":"108","width":"120"}
 *
 * @param menuIcons
 * @text 角色狀態圖標
 * @type struct<Parameter>
 * @desc 狀態異常圖標參數
 * @default {"x":"0","y":"108","width":"144"}
 *
 * @param menuEquips
 * @text 角色裝備
 * @type struct<Parameter>
 * @desc 裝備參數
 * @default {"x":"340","y":"172","width":"200","fontSize":"20","cols":"1","space":"8"}
 * 
 * @param menuStateRate
 * @text 角色狀態有效度
 * @type struct<Parameter>
 * @desc 狀態有效度參數
 * @default {"x":"0","y":"380","width":"97","fontSize":"20","name":"4 5 6 8 9 10","cols":"2","space":"8"}
 * 
 * @param menuElementRate
 * @text 角色屬性有效度
 * @type struct<Parameter>
 * @desc 屬性有效度參數
 * @default {"x":"233","y":"380","width":"97","fontSize":"20","name":"2 3 4 5 6 7 8 9","cols":"3","space":"8"}
 * 
 * @param menuProfile
 * @text 角色介紹
 * @type struct<Parameter>
 * @desc 介紹參數
 * @default {"x":"0","y":"516","width":"186"}
 * 
 * @param menuMhp
 * @text 角色最大 HP
 * @type struct<Parameter>
 * @desc 最大 HP 參數
 * @default {"name":"最大 HP"}
 *
 * @param menuMmp
 * @text 角色最大 MP
 * @type struct<Parameter>
 * @desc 最大 MP 參數
 * @default {"name":"最大 MP"}
 *
 * @param menuAtk
 * @text 角色攻擊力
 * @type struct<Parameter>
 * @desc 攻撃力參數
 * @default {"x":"0","y":"172","width":"150","fontSize":"20","name":"攻擊力"}
 *
 * @param menuDef
 * @text 角色防禦力
 * @type struct<Parameter>
 * @desc 防禦力參數
 * @default {"x":"160","y":"172","width":"150","fontSize":"20","name":"防禦力"}
 *
 * @param menuMat
 * @text 角色魔法攻擊力
 * @type struct<Parameter>
 * @desc 魔法攻擊力參數
 * @default {"x":"0","y":"208","width":"150","fontSize":"20","name":"魔法攻擊力"}
 *
 * @param menuMdf
 * @text 角色魔法防禦力
 * @type struct<Parameter>
 * @desc 魔法防禦力參數
 * @default {"x":"160","y":"208","width":"150","fontSize":"20","name":"魔法防禦力"}
 *
 * @param menuAgi
 * @text 角色敏捷
 * @type struct<Parameter>
 * @desc 敏捷參數
 * @default {"x":"0","y":"244","width":"150","fontSize":"20","name":"敏捷"}
 *
 * @param menuLuc
 * @text 角色幸運
 * @type struct<Parameter>
 * @desc 幸運參數
 * @default {"x":"160","y":"244","width":"150","fontSize":"20","name":"幸運"}
 *
 * @param menuHit
 * @text 角色命中率
 * @type struct<Parameter>
 * @desc 命中率參數
 * @default {"x":"0","y":"280","width":"150","fontSize":"20","name":"命中"}
 *
 * @param menuEva
 * @text 角色迴避率
 * @type struct<Parameter>
 * @desc 迴避率參數
 * @default {"x":"160","y":"280","width":"150","fontSize":"20","name":"迴避"}
 *
 * @param menuCri
 * @text 角色爆擊率
 * @type struct<Parameter>
 * @desc 爆擊率參數
 * @default {"x":"0","y":"316","width":"150","fontSize":"20","name":"爆擊率"}
 *
 * @param menuCev
 * @text 角色爆擊迴避率
 * @type struct<Parameter>
 * @desc 爆擊迴避率參數
 * @default {"name":"爆擊迴避率"}
 *
 * @param menuMev
 * @text 角色魔法迴避率
 * @type struct<Parameter>
 * @desc 魔魔法迴避率參數
 * @default {"name":"魔法迴避率"}
 *
 * @param menuMrf
 * @text 角色魔法反射率
 * @type struct<Parameter>
 * @desc 魔法反射率參數
 * @default {"name":"魔法反射率"}
 *
 * @param menuCnt
 * @text 角色反擊率
 * @type struct<Parameter>
 * @desc 反擊率參數
 * @default {"x":"160","y":"316","width":"130","fontSize":"20","name":"反撃"}
 *
 * @param menuHrg
 * @text 角色 HP 再生率
 * @type struct<Parameter>
 * @desc HP 再生率參數
 * @default {"name":"HP 再生率"}
 *
 * @param menuMrg
 * @text 角色 MP 再生率
 * @type struct<Parameter>
 * @desc MP 再生率參數
 * @default {"name":"MP 再生率"}
 *
 * @param menuTrg
 * @text 角色 TP 再生率
 * @type struct<Parameter>
 * @desc TP 再生率參數
 * @default {"name":"TP 再生率"}
 * 
 * @param menuTgr
 * @text 角色目標率
 * @type struct<Parameter>
 * @desc 目標率參數
 * @default {"name":"目標率"}
 * 
 * @param menuGrd
 * @text 角色防護效果率
 * @type struct<Parameter>
 * @desc 防護效果率參數
 * @default {"name":"防護效果率"}
 * 
 * @param menuRec
 * @text 角色恢復效果率
 * @type struct<Parameter>
 * @desc 恢復效果率參數
 * @default {"name":"恢復效果率"}
 * 
 * @param menuPha
 * @text 角色藥物
 * @type struct<Parameter>
 * @desc 藥物參數
 * @default {"name":"藥物"}
 * 
 * @param menuMcr
 * @text 角色 MP 消耗率
 * @type struct<Parameter>
 * @desc MP 消耗率參數
 * @default {"name":"MP 消耗率"}
 * 
 * @param menuTcr
 * @text 角色 TP 回復率
 * @type struct<Parameter>
 * @desc TP 回復率參數
 * @default {"name":"TP 回復率"}
 * 
 * @param menuPdr
 * @text 角色物理傷害率
 * @type struct<Parameter>
 * @desc 物理傷害率參數
 * @default {"name":"物理傷害率"}
 * 
 * @param menuMdr
 * @text 角色魔法傷害率
 * @type struct<Parameter>
 * @desc 魔法傷害率參數
 * @default {"name":"魔法傷害率"}
 * 
 * @param menuFdr
 * @text 角色地面傷害率
 * @type struct<Parameter>
 * @desc 地面傷害率參數
 * @default {"name":"地面傷害率"}
 * 
 * @param menuExr
 * @text 角色經驗值獲得率
 * @type struct<Parameter>
 * @desc 經驗值獲得率參數
 * @default {"name":"經驗值獲得率"}
 * 
 * @param horzLine1
 * @text 橫線 1
 * @type struct<Parameter>
 * @desc 橫線 1 參數
 * @default {"x":"0","y":"162","width":"540","height":"2"}
 *
 * @param horzLine2
 * @text 橫線 2
 * @type struct<Parameter>
 * @desc 橫線 2 參數
 * @default {"x":"0","y":"370","width":"540","height":"2"}
 *
 * @param horzLine3
 * @text 橫線 3
 * @type struct<Parameter>
 * @desc 橫線 3 參數
 * @default {"x":"0","y":"506","width":"540","height":"2"}
 *
 * @param horzLine4
 * @text 橫線 4
 * @type struct<Parameter>
 * @desc 橫線 4 參數
 * @default {"height":"2"}
 *
 * @param horzLine5
 * @text 橫線 5
 * @type struct<Parameter>
 * @desc 橫線 5 參數
 * @default {"height":"2"}
 *
 * @param freeText1
 * @text 自由文字 1
 * @type struct<Parameter>
 * @desc 自由文字 1 參數
 * @default {"x":"100","y":"144","width":"186","name":"\\C[16]\\}參數"}
 *
 * @param freeText2
 * @text 自由文字 2
 * @type struct<Parameter>
 * @desc 自由文字 2 參數
 * @default {"x":"396","y":"144","width":"186","name":"\\C[16]\\}裝備"}
 *
 * @param freeText3
 * @text 自由文字 3
 * @type struct<Parameter>
 * @desc 自由文字 3 參數
 * @default {"x":"70","y":"352","width":"186","name":"\\C[16]\\}狀態有效率"}
 *
 * @param freeText4
 * @text 自由文字 4
 * @type struct<Parameter>
 * @desc 自由文字 4 參數
 * @default {"x":"344","y":"352","width":"186","name":"\\C[16]\\}屬性有效率"}
 *
 * @param freeText5
 * @text 自由文字 5
 * @type struct<Parameter>
 * @desc 自由文字 5 參數
 * @default {"x":"240","y":"488","width":"186","name":"\\C[16]\\}介紹"}
 *
 * @param freeText6
 * @text 自由文字 6
 * @type struct<Parameter>
 * @desc 自由文字 6 參數
 * @default {}
 *
 * @param freeText7
 * @text 自由文字 7
 * @type struct<Parameter>
 * @desc 自由文字 7 參數
 * @default {}
 *
 * @param freeText8
 * @text 自由文字 8
 * @type struct<Parameter>
 * @desc 自由文字 8 參數
 * @default {}
 *
 * @param freeText9
 * @text 自由文字 9
 * @type struct<Parameter>
 * @desc 自由文字 9 參數
 * @default {}
 *
 * @param freeText10
 * @text 自由文字 10
 * @type struct<Parameter>
 * @desc 自由文字 10 參數
 * @default {}
 *
 * @param expGaugeColor1
 * @text 經驗條顏色 1
 * @type number
 * @max 31
 * @desc 經驗條顏色 1
 * 初期値: 30
 * @default 30
 * 
 * @param expGaugeColor2
 * @text 經驗條顏色 2
 * @type number
 * @max 31
 * @desc 經驗條顏色 2
 * 初期値: 31
 * @default 31
 * 
 * @param expNextText
 * @text 經驗書寫格式
 * @type string
 * @desc 經驗書寫格式
 * 初期値 : 還有 %1exp
 * @default 還有 %1exp
 * 
 * @param expMaxText
 * @text 最大經驗書寫格式
 * @type string
 * @desc 最大經驗書寫格式
 * 初期値: %1exp
 * @default %1exp
 * 
 * @param expFontSize
 * @text 經驗值文字大小
 * @type number
 * @desc 經驗值文字大小
 * 初期値: 20
 * @default 20
 * 
 * @param equipMax
 * @text 裝備顯示最大數
 * @type number
 * @desc 裝備顯示最大數
 * 初期値: 5
 * @default 5
 * 
 * @param elementIcons
 * @text 屬性圖標
 * @type string
 * @desc 屬性圖標
 * 初期値: 77 64 65 66 67 68 69 70 71
 * @default 77 64 65 66 67 68 69 70 71
 * 
 * @param textBackColor
 * @text 文字背景顏色
 * @type string
 * @desc 文字背景顏色
 * 初期値: #000000
 * @default #000000
 * 
 * @param textBackOpacity
 * @text 文字背景透明度
 * @type number
 * @max 255
 * @desc 文字背景透明度
 * 初期値: 128
 * @default 128
 * 
 * @param horzLineColor
 * @text 橫線顏色
 * @type string
 * @desc 橫線顏色
 * 初期値: #ffffff
 * @default #ffffff
 * 
 * @param horzLineOpacity
 * @text 橫線透明度
 * @type number
 * @max 255
 * @desc 橫線透明度
 * 初期値: 48
 * @default 48
 * 
 * @param forceChangeSoloMenu
 * @text 一人選單模式
 * @type select
 * @option 僅在 1 人時使用 1 人旅行選單
 * @value false
 * @option 始終使用 1 人旅行選單
 * @value true
 * @desc 選單切換根據隊伍數量而定。
 * 預設 : 始終使用 1 人旅行選單 (true)
 * @default true
 * 
 * @param soloItemStatus
 * @text 參數顯示寬度
 * @desc 項目場景中顯示的參數寬度
 * ( 名前 / ステート / HP / MP / TP の順で半角スペース区切り)
 * @default 144 160 144 144 96
 *
 * @help
 * TMPlugin - 1 人旅行選單 ver0.1.3b
 *
 * 使用方法
 *
 *   通過更改插件參數的值，可以自定義所有顯示對象的顯示位置，文字大小等。
 *   此外，省略了選單畫面中的選擇角色的過程。
 *
 *   沒有插件命令。
 * 
 *   此插件已使用 RPG Maker MV 1.6.1 進行了測試。
 * 
 *   此插件根據 MIT 許可證分發，可以自由使用，用於商業用途，修改，再分發等。
 *
 *　 作者：tomoaky
 *   網站：https://hikimoki.sakura.ne.jp/
 *   推特：https://twitter.com/tomoaky
 * 
 * 
 * 插件參數補充：
 * 
 *   通過將寬設置為 0 ，可以隱藏該項。
 *   配置文件和自由文本不反應寬度值，但您可以將其設置為 0 以隱藏它。
 * 
 *   高度值僅反應在以下項目中。
 *     statusWindow / menuFace / horzLine1 ～ horzLine5
 * 
 *   您可以使用\ C [16]和\}等控制字元作為配置文件和自由文本。
 */
/*~struct~Parameter:
 *
 * @param x
 * @text X 座標
 * @type number
 * @min -1000
 * @desc X 座標
 * @default 0
 *
 * @param y
 * @text Y 座標
 * @type number
 * @min -1000
 * @desc Y 座標
 * @default 0
 *
 * @param width
 * @text 寬
 * @type number
 * @desc 寬度
 * @default 0
 * 
 * @param height
 * @text 高
 * @type number
 * @desc 高度
 * @default 36
 * 
 * @param fontSize
 * @text 字體大小
 * @type number
 * @desc 文字大小
 * @default 28
 * 
 * @param name
 * @text 名稱
 * @type string
 * @desc 參數名稱
 * @default 
 * 
 * @param cols
 * @text 列數
 * @type number
 * @desc 列數
 * @default 1
 * 
 * @param space
 * @text 留白
 * @type number
 * @desc 每列的空白區域
 * @default 8
 * 
 * @param fixed
 * @text 位數修正
 * @type number
 * @desc 小數位數
 * @default 0
 * 
 */

var Imported = Imported || {};
Imported.TMSoloMenu = true;

(function() {

  var parameters = PluginManager.parameters('TMSoloMenu');
  var commandWindow = JSON.parse(parameters['commandWindow'] || '{}');
  var statusWindow = JSON.parse(parameters['statusWindow'] || '{}');
  var goldWindow = JSON.parse(parameters['goldWindow'] || '{}');
  var menuFace = JSON.parse(parameters['menuFace'] || '{}');
  var menuName = JSON.parse(parameters['menuName'] || '{}');
  var menuNickname = JSON.parse(parameters['menuNickname'] || '{}');
  var menuClass = JSON.parse(parameters['menuClass'] || '{}');
  var menuLevel = JSON.parse(parameters['menuLevel'] || '{}');
  var menuHp = JSON.parse(parameters['menuHp'] || '{}');
  var menuMp = JSON.parse(parameters['menuMp'] || '{}');
  var menuTp = JSON.parse(parameters['menuTp'] || '{}');
  var menuIcons = JSON.parse(parameters['menuIcons'] || '{}');
  var menuEquips = JSON.parse(parameters['menuEquips'] || '{}');
  var menuStateRate = JSON.parse(parameters['menuStateRate'] || '{}');
  var menuElementRate = JSON.parse(parameters['menuElementRate'] || '{}');
  var menuProfile = JSON.parse(parameters['menuProfile'] || '{}');
  var battleParameters = [];
  ['menuMhp', 'menuMmp', 'menuAtk', 'menuDef', 'menuMat', 'menuMdf', 'menuAgi', 'menuLuc',
   'menuHit', 'menuEva', 'menuCri', 'menuCev', 'menuMev', 'menuMrf', 'menuCnt', 'menuHrg',
   'menuMrg', 'menuTrg', 'menuTgr', 'menuGrd', 'menuRec', 'menuPha', 'menuMcr', 'menuTcr',
   'menuPdr', 'menuMdr', 'menuFdr', 'menuExr'].forEach(function(code) {
    battleParameters.push(JSON.parse(parameters[code] || '{}'));
  });
  var horzLines = [];
  ['horzLine1', 'horzLine2', 'horzLine3', 'horzLine4', 'horzLine5'].forEach(function(code) {
    horzLines.push(JSON.parse(parameters[code] || '{}'));
  });
  var freeTexts = [];
  ['freeText1', 'freeText2', 'freeText3', 'freeText4', 'freeText5',
   'freeText6', 'freeText7', 'freeText8', 'freeText9', 'freeText10'].forEach(function(code) {
    freeTexts.push(JSON.parse(parameters[code] || '{}'));
  });
  var expGaugeColor1 = +(parameters['expGaugeColor1'] || 30);
  var expGaugeColor2 = +(parameters['expGaugeColor2'] || 31);
  var expNextText = parameters['expNextText'];
  var expMaxText = parameters['expMaxText'];
  var expFontSize = +(parameters['expFontSize'] || 28);
  var equipMax = +(parameters['equipMax'] || 6);
  var elementIcons = parameters['elementIcons'].split(' ').map(Number);
  var textBackColor = parameters['textBackColor'] || '#000000';
  var textBackOpacity = +(parameters['textBackOpacity'] || 128);
  var horzLineColor = parameters['horzLineColor'] || '#ffffff';
  var horzLineOpacity = +(parameters['horzLineOpacity'] || 48);
  var forceChangeSoloMenu = JSON.parse(parameters['forceChangeSoloMenu'] || 'true');
  var soloItemStatus = (parameters['soloItemStatus'] != null ? parameters['soloItemStatus'] : '144 160 144 144 96').split(' ').map(Number);

  //-----------------------------------------------------------------------------
  // Game_Party
  //

  Game_Party.prototype.isSoloMenuValid = function() {
    return forceChangeSoloMenu || this.size() === 1;
  };

  //-----------------------------------------------------------------------------
  // Window_MenuCommand
  //

  var _Window_MenuCommand_windowWidth = Window_MenuCommand.prototype.windowWidth;
  Window_MenuCommand.prototype.windowWidth = function() {
    if ($gameParty.isSoloMenuValid()) return +commandWindow.width;
    return _Window_MenuCommand_windowWidth.call(this);
  };

  //-----------------------------------------------------------------------------
  // Window_SoloStatus
  //

  function Window_SoloStatus() {
    this.initialize.apply(this, arguments);
  }

  Window_SoloStatus.prototype = Object.create(Window_Base.prototype);
  Window_SoloStatus.prototype.constructor = Window_SoloStatus;

  Window_SoloStatus.prototype.initialize = function() {
    Window_Base.prototype.initialize.call(this, +statusWindow.x, +statusWindow.y,
                                          +statusWindow.width, +statusWindow.height);
//    this.refresh();
    if (!+statusWindow.width) this.hide();
  };

  Window_SoloStatus.prototype.refresh = function() {
    this.contents.clear();
    var actor = $gameParty.leader();
    if (actor && +statusWindow.width) {
      for (var i = 0; i < 5; i++) {
        this.drawHorzLine(horzLines[i]);
      }
      if (+menuFace.width) {
        this.drawActorFace(actor, +menuFace.x, +menuFace.y, +menuFace.width, +menuFace.height);
      }
      if (+menuIcons.width) {
        this.drawActorIcons(actor, +menuIcons.x, +menuIcons.y, +menuIcons.width);
      }
      this.drawSoloParameter(actor, 'NAME', menuName);
      this.drawSoloParameter(actor, 'NICKNAME', menuNickname);
      this.drawSoloParameter(actor, 'CLASS', menuClass);
      this.drawSoloParameter(actor, 'LEVEL', menuLevel);
      this.drawSoloParameter(actor, 'HP', menuHp);
      this.drawSoloParameter(actor, 'MP', menuMp);
      this.drawSoloParameter(actor, 'TP', menuTp);
      this.drawSoloParameter(actor, 'EQUIP', menuEquips);
      this.drawSoloParameter(actor, 'STATE', menuStateRate);
      this.drawSoloParameter(actor, 'ELEMENT', menuElementRate);
      this.drawSoloParameter(actor, 'PROFILE', menuProfile);
      for (var i = 0; i < 28; i++) {
        this.drawBattleParameter(actor, i, battleParameters[i]);
      }
      for (var i = 0; i < 10; i++) {
        this.drawSoloParameter(null, 'TEXT', freeTexts[i]);
      }
    }
  };

  Window_SoloStatus.prototype.drawSoloParameter = function(actor, code, parameter) {
    var width = +parameter.width;
    if (!width) return;
    var x = +parameter.x;
    var y = +parameter.y;
    this.contents.fontSize = +(parameter.fontSize || 28);
    if (code === 'NAME') {
      this.drawActorName(actor, x, y, width);
    } else if (code === 'NICKNAME') {
      this.drawActorNickname(actor, x, y, width);
    } else if (code === 'CLASS') {
      this.drawActorClass(actor, x, y, width);
    } else if (code === 'LEVEL') {
      this.drawActorLevelAndExp(actor, x, y, width);
    } else if (code === 'HP') {
      this.drawActorHp(actor, x, y, width);
    } else if (code === 'MP') {
      this.drawActorMp(actor, x, y, width);
    } else if (code === 'TP') {
      this.drawActorTp(actor, x, y, width);
    } else if (code === 'EQUIP') {
      this.drawEquipments(actor, x, y, width);
    } else if (code === 'PROFILE') {
      this.drawTextEx(actor.profile(), x, y);
    } else if (code === 'TEXT') {
      this.drawTextEx(parameter.name, x, y);
    } else {
      this.drawRates(actor, x, y, width, code, parameter);
    }
    this.resetFontSettings();
  };

  Window_SoloStatus.prototype.drawActorLevelAndExp = function(actor, x, y, width) {
    var color1 = this.textColor(expGaugeColor1);
    var color2 = this.textColor(expGaugeColor2);
    if (actor.isMaxLevel()) {
      var rate = 100;
    } else {
      var currentExp = actor.currentExp() - actor.currentLevelExp();
      var nextExp = actor.nextLevelExp() - actor.currentLevelExp();
      var rate = currentExp / nextExp;
    }
    this.drawGauge(x, y, width, rate, color1, color2);
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.levelA, x, y, 32);
    this.resetTextColor();
    this.drawText(actor.level, x + 36, y, 32, 'right');
    if (expNextText) {
      var text = actor.isMaxLevel() ? expMaxText.format(actor.currentExp()) :
                                      expNextText.format(actor.nextRequiredExp());
      this.contents.fontSize = expFontSize;
      this.drawText(text, x, y, width, 'right');
    }
  };

  Window_SoloStatus.prototype.drawEquipments = function(actor, x, y, width) {
    var equips = actor.equips();
    var count = Math.min(equips.length, equipMax);
    var cols = +menuEquips.cols;
    for (var i = 0; i < count; i++) {
      var x2 = x + (width + +menuEquips.space) * (i % cols);
      var y2 = y + this.lineHeight() * Math.floor(i / cols);
      this.drawTextBack(x2, y2, width);
      this.drawItemName(equips[i], x2, y2, width);
    }
  };

  Window_SoloStatus.prototype.drawRates = function(actor, x, y, width, code, parameter) {
    var ids = parameter.name.split(' ').map(Number);
    var cols = +parameter.cols;
    var iconBoxWidth = Window_Base._iconWidth + 4;
    for (var i = 0; i < ids.length; i++) {
      var x2 = x + (width + +parameter.space) * (i % cols);
      var y2 = y + this.lineHeight() * Math.floor(i / cols);
      if (code === 'STATE') {
        var state = $dataStates[ids[i]];
        if (!state) return;
        var value = actor.stateRate(state.id) * 100;
        var iconIndex = state.iconIndex;
      } else {
        var value = actor.elementRate(ids[i]) * 100;
        var iconIndex = elementIcons[ids[i] - 1];
      }
      this.drawTextBack(x2, y2, width);
      this.drawIcon(iconIndex, x2 + 2, y2 + 2);
      this.drawText(value.toFixed(+parameter.fixed) + '%', x2 + iconBoxWidth, y2,
                    width - iconBoxWidth, 'right');
    }
  };

  Window_SoloStatus.prototype.drawBattleParameter = function(actor, paramId, parameter) {
    var width = +parameter.width;
    if (!width) return;
    var x = +parameter.x;
    var y = +parameter.y;
    this.contents.fontSize = +(parameter.fontSize || 28);
    var textWidth = this.textWidth('00000');
    this.drawTextBack(x, y, width);
    this.changeTextColor(this.systemColor());
    this.drawText(parameter.name, x, y, width - textWidth);
    this.resetTextColor();
    if (paramId < 8) {
      var value = actor.param(paramId);
    } else if (paramId < 18) {
      var value = (actor.xparam(paramId - 8) * 100).toFixed(+parameter.fixed);
    } else if (paramId < 28) {
      var value = (actor.sparam(paramId - 18) * 100).toFixed(+parameter.fixed);
    }
    this.drawText(value, x + width - textWidth, y, textWidth, 'right');
    this.resetFontSettings();
  };

  Window_SoloStatus.prototype.drawTextBack = function(x, y, width) {
    if (textBackOpacity === 0) return;
    var height = this.contents.fontSize + 4;
    y += Math.floor((this.lineHeight() - height) / 2);
    this.contents.paintOpacity = textBackOpacity;
    if (Imported.TMBitmapEx) {
      this.contents.fillRoundRect(x, y, width, height, 6, textBackColor);
    } else {
      this.contents.fillRect(x, y, width, height, textBackColor);
    }
    this.contents.paintOpacity = 255;
  };

  Window_SoloStatus.prototype.drawHorzLine = function(parameter) {
    if (!+parameter.width) return;
    this.contents.paintOpacity = horzLineOpacity;
    this.contents.fillRect(+parameter.x, +parameter.y, +parameter.width,
                           +parameter.height, horzLineColor);
    this.contents.paintOpacity = 255;
  };

  //-----------------------------------------------------------------------------
  // Window_SoloItemStatus
  //

  function Window_SoloItemStatus() {
    this.initialize.apply(this, arguments);
  }

  Window_SoloItemStatus.prototype = Object.create(Window_Base.prototype);
  Window_SoloItemStatus.prototype.constructor = Window_SoloItemStatus;

  Window_SoloItemStatus.prototype.initialize = function(x, y, width) {
    Window_Base.prototype.initialize.call(this, x, y, width, this.fittingHeight(1));
    this.refresh();
  };

  Window_SoloItemStatus.prototype.refresh = function() {
    var x = 0;
    var actor = $gameParty.leader();
    this.contents.clear();
    if (soloItemStatus[0] > 0) {
      this.drawActorName(actor, x, 0, soloItemStatus[0]);
      x += soloItemStatus[0] + 16;
    }
    if (soloItemStatus[1] > 0) {
      this.drawActorIcons(actor, x, 0, soloItemStatus[1]);
      x += soloItemStatus[1] + 16;
    }
    if (soloItemStatus[2] > 0) {
      this.drawActorHp(actor, x, 0, soloItemStatus[2]);
      x += soloItemStatus[2] + 16;
    }
    if (soloItemStatus[3] > 0) {
      this.drawActorMp(actor, x, 0, soloItemStatus[3]);
      x += soloItemStatus[3] + 16;
    }
    if (soloItemStatus[4] > 0) {
      this.drawActorTp(actor, x, 0, soloItemStatus[4]);
    }
  };

  //-----------------------------------------------------------------------------
  // Scene_Menu
  //

  var _Scene_Menu_createCommandWindow = Scene_Menu.prototype.createCommandWindow;
  Scene_Menu.prototype.createCommandWindow = function() {
    _Scene_Menu_createCommandWindow.call(this);
    if ($gameParty.isSoloMenuValid()) {
      this._commandWindow.x = +commandWindow.x;
      this._commandWindow.y = +commandWindow.y;
      this.addChild(this._windowLayer.removeChild(this._commandWindow));
    }
  };

  var _Scene_Menu_createStatusWindow = Scene_Menu.prototype.createStatusWindow;
  Scene_Menu.prototype.createStatusWindow = function() {
    if ($gameParty.isSoloMenuValid()) {
      this._statusWindow = new Window_SoloStatus();
      this._statusWindow.reserveFaceImages();
      this.addWindow(this._statusWindow);
    } else {
      _Scene_Menu_createStatusWindow.call(this);
    }
  };

  var _Scene_Menu_createGoldWindow = Scene_Menu.prototype.createGoldWindow;
  Scene_Menu.prototype.createGoldWindow = function() {
    _Scene_Menu_createGoldWindow.call(this);
    this._goldWindow.x = +goldWindow.x;
    this._goldWindow.y = +goldWindow.y;
    this.addChild(this._windowLayer.removeChild(this._goldWindow));
    if (!+goldWindow.width) this._goldWindow.hide();
  };

  var _Scene_Menu_commandPersonal = Scene_Menu.prototype.commandPersonal;
  Scene_Menu.prototype.commandPersonal = function() {
    if ($gameParty.isSoloMenuValid()) {
      $gameParty.setTargetActor($gameParty.leader());
      this.onPersonalOk();
    } else {
      _Scene_Menu_commandPersonal.call(this);
    }
  };

  //-----------------------------------------------------------------------------
  // Scene_ItemBase
  //

  var _Scene_ItemBase_itemTargetActors = Scene_ItemBase.prototype.itemTargetActors;
  Scene_ItemBase.prototype.itemTargetActors = function() {
    var action = new Game_Action(this.user());
    action.setItemObject(this.item());
    if ($gameParty.isSoloMenuValid() && action.isForFriend()) {
      return [$gameParty.leader()];
    } else {
      return _Scene_ItemBase_itemTargetActors.call(this);
    }
  };

  var _Scene_ItemBase_determineItem = Scene_ItemBase.prototype.determineItem;
  Scene_ItemBase.prototype.determineItem = function() {
    var action = new Game_Action(this.user());
    action.setItemObject(this.item());
    if ($gameParty.isSoloMenuValid() && action.isForFriend()) {
      if (this.canUse()) {
        this.useItem();
        this._itemWindow.refresh();
        if (this._soloStatusWindow) this._soloStatusWindow.refresh();
      } else {
        SoundManager.playBuzzer();
      }
      this._itemWindow.activate();
    } else {
      _Scene_ItemBase_determineItem.call(this);
    }
  };

  //-----------------------------------------------------------------------------
  // Scene_Item
  //

  var _Scene_Item_createCategoryWindow = Scene_Item.prototype.createCategoryWindow;
  Scene_Item.prototype.createCategoryWindow = function() {
    var enabled = this.isSoloStatusEnabled();
    if (enabled) {
      var wy = this._helpWindow.height;
      this._soloStatusWindow = new Window_SoloItemStatus(0, wy, Graphics.boxWidth);
      this.addWindow(this._soloStatusWindow);
    }
    _Scene_Item_createCategoryWindow.call(this);
    if (enabled) {
      this._categoryWindow.y += this._soloStatusWindow.height;
    }
  };

  Scene_Item.prototype.isSoloStatusEnabled = function() {
    return (sum = soloItemStatus.reduce(function(a, b) {
      return a + b;
    }) > 0);
  };

})();
