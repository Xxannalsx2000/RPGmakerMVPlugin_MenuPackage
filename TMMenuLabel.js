//=============================================================================
// TMPlugin - 選單變數
// バージョン: 1.1.1
// 最終更新日: 2017/02/07
// 配布元    : http://hikimoki.sakura.ne.jp/
//-----------------------------------------------------------------------------
// Copyright (c) 2016 tomoaky
// Released under the MIT license.
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
 * @plugindesc 在主選單顯示變數的值。
 * 您還可以顯示步數和戰鬥次數。
 *
 * @author tomoaky(翻譯 : ReIris)
 *
 * @param labelAName
 * @text A 變數名稱 
 * @desc A 變數名稱 
 * 預設 : A 變數
 * @default A 變數
 *
 * @param labelAId
 * @text A 變數 ID 
 * @desc A 變數的遊戲變數 ID 
 * 預設 : 10（ 0 為不顯示 / 1 以上顯示）
 * @default 10
 *
 * @param labelAMax
 * @text A 變數最大值
 * @desc A 變數最大值
 * 預設 : 9999
 * @default 9999
 *
 * @param labelAFooter
 * @text A 後綴文本
 * @desc A 變數的後綴文本
 * 預設 : 
 * @default 
 *
 * @param labelBName
 * @text B 變數名稱 
 * @desc B 變數名稱 
 * 預設 : B 變數
 * @default B 變數
 *
 * @param labelBId
 * @text B 變數 ID 
 * @desc B 變數的遊戲變數 ID 
 * 預設 : 0（ 0 為不顯示 / 1 以上顯示）
 * @default 0
 *
 * @param labelBMax
 * @text B 變數最大值
 * @desc B 變數最大值
 * 預設 : 9999
 * @default 9999
 *
 * @param labelBFooter
 * @text B 後綴文本
 * @desc B 變數的後綴文本
 * 預設 : 
 * @default 
 *
 * @param labelCName
 * @text C 變數名稱
 * @desc C 變數名稱
 * 預設 : C 變數
 * @default C 變數
 *
 * @param labelCId
 * @text C 變數 ID 
 * @desc C 變數的遊戲變數 ID 
 * 預設 : 0（ 0 為不顯示 / 1 以上顯示）
 * @default 0
 *
 * @param labelCMax
 * @text C 變數最大值
 * @desc C 變數最大值
 * 預設 : 9999
 * @default 9999
 *
 * @param labelCFooter
 * @text C 後綴文本
 * @desc C 變數的後綴文本
 * 預設 : 
 * @default 
 *
 * @param labelDName
 * @text D 變數名稱
 * @desc D 變數名稱
 * 預設 : D 變數
 * @default D 變數
 *
 * @param labelDId
 * @text D 變數 ID 
 * @desc D 變數的遊戲變數 ID 
 * 預設 : 0（ 0 為不顯示 / 1 以上顯示）
 * @default 0
 *
 * @param labelDMax
 * @text D 變數最大值
 * @desc D 變數最大值
 * 預設: 9999
 * @default 9999
 *
 * @param labelDFooter
 * @text D 後綴文本
 * @desc D 變數的後綴文本
 * 預設 : 
 * @default 
 *
 * @param labelNameWidth
 * @text 變數名稱寬度
 * @desc 變數名稱顯示寬度
 * 預設 : 128
 * @default 128
 *
 * @param labelValueWidth
 * @text 變數值寬度
 * @desc 變數值顯示寬度
 * 預設 : 72
 * @default 72
 *
 * @param labelNameColorId
 * @text 變數名稱顏色
 * @desc 變數名稱文字顏色編號
 * 預設 : 16
 * @default 16
 *
 * @param labelValueColorId
 * @text 變數值顏色
 * @desc 變數值文字顏色編號
 * 預設 : 0
 * @default 0
 *
 * @param labelMaxColorId
 * @text 變數最大值顏色
 * @desc 變數最大值的文字顏色編號
 * 預設 : 2
 * @default 2
 *
 * @param labelFooterColorId
 * @text 後綴顏色
 * @desc 後綴的文字顏色編號
 * 預設 : 0
 * @default 0
 *
 * @param footerSpace
 * @text 後綴間隔
 * @desc 後綴和變數值之間的間距
 * 預設 : 0
 * @default 0
 *
 * @param reverseMenuWindow
 * @text 窗口左右反轉
 * @desc 水平翻轉選單畫面窗口排版
 * 預設 : 0 ( 0 = 無効 / 1 = 有効)
 * @default 0
 *
 * @param menuTextAlign
 * @text 選單文本對齊
 * @desc 選單文本對齊位置
 * 預設 : left ( left / center / right)
 * @default left
 *
 * @help
 * TMPlugin - 選單變數 ver1.1.1

 * 使用方法 :
 *
 *   通過安裝此插件，您可以在主選單的左下角顯示最多4個遊戲變數值。
 *
 *   此插件已使用 RPG Maker MV 1.3.4 進行了測試。
 *
 * 插件命令 :
 *
 *   stopMenuLabel
 *     禁用選單變數。
 *     此設置會記錄在保存數據中，並在執行 startMenuLabel 命令之前不會顯示標籤。
 *
 *   startMenuLabel
 *     啟用被禁用的選單變數。
 *     遊戲開始時啟用選單變數。
 *
 *
 * 插件參數補充 :
 *
 *   labelAId ～ labelDId
 *     當該值為 1 或更大時，將顯示變數的值。
 *     否則，以下方規則顯示值。
 *      0 … 無效變數（不顯示）
 *     -1 … 步數
 *     -2 … 存檔次數
 *     -3 … 戰鬥次數
 *     -4 … 勝利次數
 *     -5 … 敗北次數
 *
 *   A 變數最大值 ～ D 變數最大值
 *     如果遊戲變數值大於或等於這些值，
 *     則標籤上顯示的變數值文本顏色編號將從「變數值顏色」更改為「變數最大值顏色」。
 *     如果遊戲變數值大於最大值，則顯示最大值。
 *     設置為 0 時，禁用上述功能。
 *
 *   A 後綴名稱 ～ D 後綴名稱
 *     設置要在變數值後面顯示的文本。
 *     例如顯示「1234 點」，「第12天」等的功能。
 *     與值之間調整間隔可以使用半形空格。
 *
 *   變數名稱顏色
 *   變數值顏色
 *   變數最大值顏色
 *   後綴顏色
 *     設置變數每個部分的文本顏色編號。
 *     該數字與事件命令「顯示文字」中使用的控制字元 \ C [n] 的 n 部分相同。
 * 
 *   後綴間隔
 *     如果希望變數值和後綴位置與窗口對齊，請調整此參數。
 *     如果後綴和金錢單位都是單字節文字，則設置 6 將完全相同。
 *
 *　作者：tomoaky
 *   網站：https://hikimoki.sakura.ne.jp/
 *   推特：https://twitter.com/tomoaky
 *
 */

var Imported = Imported || {};
Imported.TMMenuLabel = true;

var TMPlugin = TMPlugin || {};
TMPlugin.MenuLabel = {};
TMPlugin.MenuLabel.Parameters = PluginManager.parameters('TMMenuLabel');
TMPlugin.MenuLabel.Labels = [];
TMPlugin.MenuLabel.Labels[0] = {name: TMPlugin.MenuLabel.Parameters['labelAName'],
                                id: +(TMPlugin.MenuLabel.Parameters['labelAId'] || 10),
                                max: +(TMPlugin.MenuLabel.Parameters['labelAMax'] || 9999),
                                footer: TMPlugin.MenuLabel.Parameters['labelAFooter']};
TMPlugin.MenuLabel.Labels[1] = {name: TMPlugin.MenuLabel.Parameters['labelBName'],
                                id: +(TMPlugin.MenuLabel.Parameters['labelBId'] || 10),
                                max: +(TMPlugin.MenuLabel.Parameters['labelBMax'] || 9999),
                                footer: TMPlugin.MenuLabel.Parameters['labelBFooter']};
TMPlugin.MenuLabel.Labels[2] = {name: TMPlugin.MenuLabel.Parameters['labelCName'],
                                id: +(TMPlugin.MenuLabel.Parameters['labelCId'] || 10),
                                max: +(TMPlugin.MenuLabel.Parameters['labelCMax'] || 9999),
                                footer: TMPlugin.MenuLabel.Parameters['labelCFooter']};
TMPlugin.MenuLabel.Labels[3] = {name: TMPlugin.MenuLabel.Parameters['labelDName'],
                                id: +(TMPlugin.MenuLabel.Parameters['labelDId'] || 10),
                                max: +(TMPlugin.MenuLabel.Parameters['labelDMax'] || 9999),
                                footer: TMPlugin.MenuLabel.Parameters['labelDFooter']};
TMPlugin.MenuLabel.NameWidth     = +(TMPlugin.MenuLabel.Parameters['labelNameWidth'] || 160);
TMPlugin.MenuLabel.ValueWidth    = +(TMPlugin.MenuLabel.Parameters['labelValueWidth'] || 96);
TMPlugin.MenuLabel.NameColorId   = +(TMPlugin.MenuLabel.Parameters['labelNameColorId'] || 16);
TMPlugin.MenuLabel.ValueColorId  = +(TMPlugin.MenuLabel.Parameters['labelValueColorId'] || 0);
TMPlugin.MenuLabel.MaxColorId    = +(TMPlugin.MenuLabel.Parameters['labelMaxColorId'] || 2);
TMPlugin.MenuLabel.FooterColorId = +(TMPlugin.MenuLabel.Parameters['labelFooterColorId'] || 0);
TMPlugin.MenuLabel.FooterSpace   = +(TMPlugin.MenuLabel.Parameters['footerSpace'] || 0);
TMPlugin.MenuLabel.ReverseMenuWindow = TMPlugin.MenuLabel.Parameters['reverseMenuWindow'] === '1';
TMPlugin.MenuLabel.MenuTextAlign = TMPlugin.MenuLabel.Parameters['menuTextAlign'] || 'left';

(function() {

  //-----------------------------------------------------------------------------
  // Game_System
  //

  Game_System.prototype.isMenuLabelEnabled = function() {
    if (this._menuLabelEnabled === undefined) this._menuLabelEnabled = true;
    return this._menuLabelEnabled;
  };

  Game_System.prototype.setMenuLabel = function(flag) {
    this._menuLabelEnabled = flag;
  };

  //-----------------------------------------------------------------------------
  // Game_Interpreter
  //

  var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function(command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'startMenuLabel') {
      $gameSystem.setMenuLabel(true);
    } else if (command === 'stopMenuLabel') {
      $gameSystem.setMenuLabel(false);
    }
  };
  
  //-----------------------------------------------------------------------------
  // Window_MenuCommand
  //

  Window_MenuCommand.prototype.itemTextAlign = function() {
    return TMPlugin.MenuLabel.MenuTextAlign;
  };

  //-----------------------------------------------------------------------------
  // Window_MenuLabel
  //

  function Window_MenuLabel() {
    this.initialize.apply(this, arguments);
  }

  Window_MenuLabel.prototype = Object.create(Window_Base.prototype);
  Window_MenuLabel.prototype.constructor = Window_MenuLabel;

  Window_MenuLabel.prototype.initialize = function(x, y) {
    var width = this.windowWidth();
    var height = this.windowHeight();
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this.refresh();
  };

  Window_MenuLabel.prototype.maxItems = function() {
    var n = 0;
    for (var i = 0; i < 4; i++) {
      if (TMPlugin.MenuLabel.Labels[i].id !== 0) n++;
    }
    return n;
  };

  Window_MenuLabel.prototype.windowWidth = function() {
    return 240;
  };

  Window_MenuLabel.prototype.windowHeight = function() {
    return this.fittingHeight(this.maxItems());
  };

  Window_MenuLabel.prototype.refresh = function() {
    var x = this.textPadding();
    var width = this.contents.width - this.textPadding() * 2;
    var lineHeight = this.lineHeight();
    this.contents.clear();
    var x = this.contents.width - this.textPadding();
    var y = 0;
    for (var i = 0; i < 4; i++) {
      var label = TMPlugin.MenuLabel.Labels[i];
      var value = this.labelValue(label.id);
      if (value != null) {
        this.drawMenuLabel(x, y, label, value);
        y += lineHeight;
      }
    }
  };

  Window_MenuLabel.prototype.labelValue = function(id) {
    if (id > 0) {
      return $gameVariables.value(id);
    } else if (id === -1) {
      return $gameParty.steps();
    } else if (id === -2) {
      return $gameSystem.saveCount();
    } else if (id === -3) {
      return $gameSystem.battleCount();
    } else if (id === -4) {
      return $gameSystem.winCount();
    } else if (id === -5) {
      return $gameSystem.escapeCount();
    }
    return null;
  };

  Window_MenuLabel.prototype.drawMenuLabel = function(x, y, label, value) {
    if (label.footer) {
      var footerWidth = this.textWidth(label.footer);
      x -= footerWidth;
      this.changeTextColor(this.textColor(TMPlugin.MenuLabel.FooterColorId));
      this.drawText(label.footer, x, y, footerWidth);
      x -= TMPlugin.MenuLabel.FooterSpace;
    }
    x -= TMPlugin.MenuLabel.ValueWidth;
    this.changeTextColor(this.textColor(TMPlugin.MenuLabel.ValueColorId));
    if (label.max && value >= label.max) {
      value = label.max;
      this.changeTextColor(this.textColor(TMPlugin.MenuLabel.MaxColorId));
    }
    this.drawText(value, x, y, TMPlugin.MenuLabel.ValueWidth, 'right');
    if (label.name) {
      this.changeTextColor(this.textColor(TMPlugin.MenuLabel.NameColorId));
      this.drawText(label.name, this.textPadding(), y, TMPlugin.MenuLabel.NameWidth);
    }
  };

  //-----------------------------------------------------------------------------
  // Scene_Menu
  //

  var _Scene_Menu_create = Scene_Menu.prototype.create;
  Scene_Menu.prototype.create = function() {
    _Scene_Menu_create.call(this);
    if ($gameSystem.isMenuLabelEnabled()) this.createMenuLabelWindow();
    if (TMPlugin.MenuLabel.ReverseMenuWindow) {
      this._statusWindow.x = 0;
      this._commandWindow.x = this._statusWindow.width;
      this._goldWindow.x = this._commandWindow.x
      if (this._menuLabelWindow) this._menuLabelWindow.x = this._commandWindow.x
    }
  };

  Scene_Menu.prototype.createMenuLabelWindow = function() {
    this._menuLabelWindow = new Window_MenuLabel(0, 0);
    this._menuLabelWindow.y = this._goldWindow.y - this._menuLabelWindow.height;
    this.addWindow(this._menuLabelWindow);
  };

})();
