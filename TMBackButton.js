//=============================================================================
// TMPlugin - 返回按鈕
// バージョン: 1.0.0
// 最終更新日: 2016/10/28
// 配布元    : http://hikimoki.sakura.ne.jp/
//-----------------------------------------------------------------------------
// Copyright (c) 2016 tomoaky
// Released under the MIT license.
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
 * @plugindesc 在選單中顯示用於點擊操作的返回按鈕。
 *
 * @author tomoaky(翻譯 : ReIris)
 *
 * @param buttonImage
 * @text 按鈕圖片
 * @desc 顯示的按鈕圖片。
 * 初期値: backButton
 * @default backButton
 * @require 1
 * @dir img/system/
 * @type file
 *
 * @param sceneMenuX
 * @text 主選單 X 座標
 * @desc 主選單的返回按鈕 X 座標。
 * 初期値: 0
 * @default 0
 *
 * @param sceneMenuY
 * @text 主選單 Y 座標
 * @desc 主選單的返回按鈕 Y 座標。
 * 初期値: 0
 * @default 0
 *
 * @param sceneItemX
 * @text 道具選單 X 座標
 * @desc 道具選單的返回按鈕 X 座標。
 * 初期値: 0
 * @default 0
 *
 * @param sceneItemY
 * @text 道具選單 Y 座標
 * @desc 道具選單的返回按鈕 Y 座標。
 * 初期値: 0
 * @default 0
 *
 * @param sceneSkillX
 * @text 技能選單 X 座標
 * @desc 技能選單的返回按鈕 X 座標。
 * 初期値: 0
 * @default 0
 *
 * @param sceneSkillY
 * @text 技能選單 Y 座標
 * @desc 技能選單的返回按鈕 Y 座標。
 * 初期値: 0
 * @default 0
 *
 * @param sceneEquipX
 * @text 裝備選單 X 座標
 * @desc 裝備選單的返回按鈕 X 座標。
 * 初期値: 0
 * @default 0
 *
 * @param sceneEquipY
 * @text 裝備選單 Y 座標
 * @desc 裝備選單的返回按鈕 Y 座標。
 * 初期値: 0
 * @default 0
 *
 * @param sceneStatusX
 * @text 狀態選單 X 座標
 * @desc 狀態選單的返回按鈕 X 座標。
 * 初期値: 0
 * @default 0
 *
 * @param sceneStatusY
 * @text 狀態選單 Y 座標
 * @desc 狀態選單的返回按鈕 Y 座標。
 * 初期値: 0
 * @default 0
 *
 * @param sceneOptionsX
 * @text 設置選單 X 座標
 * @desc 設置選單的返回按鈕 X 座標。
 * 初期値: 0
 * @default 0
 *
 * @param sceneOptionsY
 * @text 設置選單 Y 座標
 * @desc 設置選單的返回按鈕 Y 座標。
 * 初期値: 0
 * @default 0
 *
 * @param sceneSaveX
 * @text 保存選單 X 座標
 * @desc 保存選單的返回按鈕 X 座標。
 * 初期値: 0
 * @default 0
 *
 * @param sceneSaveY
 * @text 保存選單 Y 座標
 * @desc 保存選單的返回按鈕 Y 座標。
 * 初期値: 0
 * @default 0
 *
 * @param sceneLoadX
 * @text 讀取選單 X 座標
 * @desc 讀取選單的返回按鈕 X 座標。
 * 初期値: 0
 * @default 0
 *
 * @param sceneLoadY
 * @text 讀取選單 Y 座標
 * @desc 讀取選單的返回按鈕 Y 座標。
 * 初期値: 0
 * @default 0
 *
 * @param sceneGameEndX
 * @text 遊戲結束選單 X 座標
 * @desc 遊戲結束選單的返回按鈕 X 座標。
 * 初期値: 0
 * @default 0
 *
 * @param sceneGameEndY
 * @text 遊戲結束選單 Y 座標
 * @desc 遊戲結束選單的返回按鈕 Y 座標。
 * 初期値: 0
 * @default 0
 *
 * @param sceneShopX
 * @text 商店選單 X 座標
 * @desc 商店選單的返回按鈕 X 座標。
 * 初期値: 0
 * @default 0
 *
 * @param sceneShopY
 * @text 商店選單 Y 座標
 * @desc 商店選單的返回按鈕 Y 座標。
 * 初期値: 0
 * @default 0
 *
 * @param sceneNameX
 * @text 名稱選單 X 座標
 * @desc 名稱選單的返回按鈕 X 座標。
 * 初期値: 0
 * @default 0
 *
 * @param sceneNameY
 * @text 名稱選單 Y 座標
 * @desc 名稱選單的返回按鈕 Y 座標。
 * 初期値: 0
 * @default 0
 *
 * @help
 * 準備：
 *
 *   將按鈕圖片保存在 img / system 中。
 *   圖片名是 backButton.png。
 *   如果要使用自定義按鈕圖像，請準備與上面相同的文件名或
 *   更改插件參數「按鈕圖片」。
 *
 * 使用方法：
 *
 *   如果使用 img / system 資料夾中的按鈕圖像安裝此插件。
 *   將自動顯示返回按鈕。
 *
 *   可以使用插件參數為每個畫面調整按鈕顯示位置。
 *   按鈕圖像的透明部分（alpha 值 0）不觸發點擊。
 *
 *   這個插件沒有插件命令。
 *
 *   此插件已使用 RPG Maker MV 1.3.3 進行了測試。
 *
 *　作者：tomoaky
 *   網站：https://hikimoki.sakura.ne.jp/
 *   推特：https://twitter.com/tomoaky
 *
 */

var Imported = Imported || {};
Imported.TMBackButton = true;

var TMPlugin = TMPlugin || {};
TMPlugin.BackButton = {};
TMPlugin.BackButton.Parameters = PluginManager.parameters('TMBackButton');
TMPlugin.BackButton.ButtonImage = TMPlugin.BackButton.Parameters['buttonImage'] || 'backButton';
TMPlugin.BackButton.SceneMenuX = +(TMPlugin.BackButton.Parameters['sceneMenuX'] || 0);
TMPlugin.BackButton.SceneMenuY = +(TMPlugin.BackButton.Parameters['sceneMenuY'] || 0);
TMPlugin.BackButton.SceneItemX = +(TMPlugin.BackButton.Parameters['sceneItemX'] || 0);
TMPlugin.BackButton.SceneItemY = +(TMPlugin.BackButton.Parameters['sceneItemY'] || 0);
TMPlugin.BackButton.SceneSkillX = +(TMPlugin.BackButton.Parameters['sceneSkillX'] || 0);
TMPlugin.BackButton.SceneSkillY = +(TMPlugin.BackButton.Parameters['sceneSkillY'] || 0);
TMPlugin.BackButton.SceneEquipX = +(TMPlugin.BackButton.Parameters['sceneEquipX'] || 0);
TMPlugin.BackButton.SceneEquipY = +(TMPlugin.BackButton.Parameters['sceneEquipY'] || 0);
TMPlugin.BackButton.SceneStatusX = +(TMPlugin.BackButton.Parameters['sceneStatusX'] || 0);
TMPlugin.BackButton.SceneStatusY = +(TMPlugin.BackButton.Parameters['sceneStatusY'] || 0);
TMPlugin.BackButton.SceneOptionsX = +(TMPlugin.BackButton.Parameters['sceneOptionsX'] || 0);
TMPlugin.BackButton.SceneOptionsY = +(TMPlugin.BackButton.Parameters['sceneOptionsY'] || 0);
TMPlugin.BackButton.SceneSaveX = +(TMPlugin.BackButton.Parameters['sceneSaveX'] || 0);
TMPlugin.BackButton.SceneSaveY = +(TMPlugin.BackButton.Parameters['sceneSaveY'] || 0);
TMPlugin.BackButton.SceneLoadX = +(TMPlugin.BackButton.Parameters['sceneLoadX'] || 0);
TMPlugin.BackButton.SceneLoadY = +(TMPlugin.BackButton.Parameters['sceneLoadY'] || 0);
TMPlugin.BackButton.SceneGameEndX = +(TMPlugin.BackButton.Parameters['sceneGameEndX'] || 0);
TMPlugin.BackButton.SceneGameEndY = +(TMPlugin.BackButton.Parameters['sceneGameEndY'] || 0);
TMPlugin.BackButton.SceneShopX = +(TMPlugin.BackButton.Parameters['sceneShopX'] || 0);
TMPlugin.BackButton.SceneShopY = +(TMPlugin.BackButton.Parameters['sceneShopY'] || 0);
TMPlugin.BackButton.SceneNameX = +(TMPlugin.BackButton.Parameters['sceneNameX'] || 0);
TMPlugin.BackButton.SceneNameY = +(TMPlugin.BackButton.Parameters['sceneNameY'] || 0);

(function() {

  //-----------------------------------------------------------------------------
  // Window_Selectable
  //

  var _Window_Selectable_processTouch = Window_Selectable.prototype.processTouch;
  Window_Selectable.prototype.processTouch = function() {
    if (this.isOpenAndActive() && TouchInput.isTriggered()) {
      var backButton = SceneManager._scene._backButtonSprite;
      if (this.isCancelEnabled() && backButton && backButton.width) {
        var x = backButton.x;
        var y = backButton.y;
        if (TouchInput.x >= x && TouchInput.x < x + backButton.width &&
            TouchInput.y >= y && TouchInput.y < y + backButton.height &&
            +backButton.bitmap.getAlphaPixel(TouchInput.x - x, TouchInput.y - y) > 0) {
          this.processCancel();
          return;
        }
      }
    }
    _Window_Selectable_processTouch.call(this);
  };

  //-----------------------------------------------------------------------------
  // Scene_MenuBase
  //

  var _Scene_MenuBase_create = Scene_MenuBase.prototype.create;
  Scene_MenuBase.prototype.create = function() {
    _Scene_MenuBase_create.call(this);
    this.createBackButton();
  };

  Scene_MenuBase.prototype.createBackButton = function() {
    this._backButtonSprite = new Sprite();
    this._backButtonSprite.bitmap = ImageManager.loadSystem(TMPlugin.BackButton.ButtonImage);
    this._backButtonSprite.x = this.backButtonX();
    this._backButtonSprite.y = this.backButtonY();
    this.addChild(this._backButtonSprite);
  };

  Scene_MenuBase.prototype.backButtonX = function() {
    return 0;
  };

  Scene_MenuBase.prototype.backButtonY = function() {
    return 0;
  };

  //-----------------------------------------------------------------------------
  // Scene_Menu
  //

  Scene_Menu.prototype.backButtonX = function() {
    return TMPlugin.BackButton.SceneMenuX;
  };

  Scene_Menu.prototype.backButtonY = function() {
    return TMPlugin.BackButton.SceneMenuY;
  };

  //-----------------------------------------------------------------------------
  // Scene_Item
  //

  Scene_Item.prototype.backButtonX = function() {
    return TMPlugin.BackButton.SceneItemX;
  };

  Scene_Item.prototype.backButtonY = function() {
    return TMPlugin.BackButton.SceneItemY;
  };

  //-----------------------------------------------------------------------------
  // Scene_Skill
  //

  Scene_Skill.prototype.backButtonX = function() {
    return TMPlugin.BackButton.SceneSkillX;
  };

  Scene_Skill.prototype.backButtonY = function() {
    return TMPlugin.BackButton.SceneSkillY;
  };

  //-----------------------------------------------------------------------------
  // Scene_Equip
  //

  Scene_Equip.prototype.backButtonX = function() {
    return TMPlugin.BackButton.SceneEquipX;
  };

  Scene_Equip.prototype.backButtonY = function() {
    return TMPlugin.BackButton.SceneEquipY;
  };

  //-----------------------------------------------------------------------------
  // Scene_Status
  //

  Scene_Status.prototype.backButtonX = function() {
    return TMPlugin.BackButton.SceneStatusX;
  };

  Scene_Status.prototype.backButtonY = function() {
    return TMPlugin.BackButton.SceneStatusY;
  };

  //-----------------------------------------------------------------------------
  // Scene_Options
  //

  Scene_Options.prototype.backButtonX = function() {
    return TMPlugin.BackButton.SceneOptionsX;
  };

  Scene_Options.prototype.backButtonY = function() {
    return TMPlugin.BackButton.SceneOptionsY;
  };

  //-----------------------------------------------------------------------------
  // Scene_Save
  //

  Scene_Save.prototype.backButtonX = function() {
    return TMPlugin.BackButton.SceneSaveX;
  };

  Scene_Save.prototype.backButtonY = function() {
    return TMPlugin.BackButton.SceneSaveY;
  };

  //-----------------------------------------------------------------------------
  // Scene_Load
  //

  Scene_Load.prototype.backButtonX = function() {
    return TMPlugin.BackButton.SceneLoadX;
  };

  Scene_Load.prototype.backButtonY = function() {
    return TMPlugin.BackButton.SceneLoadY;
  };

  //-----------------------------------------------------------------------------
  // Scene_GameEnd
  //

  Scene_GameEnd.prototype.backButtonX = function() {
    return TMPlugin.BackButton.SceneGameEndX;
  };

  Scene_GameEnd.prototype.backButtonY = function() {
    return TMPlugin.BackButton.SceneGameEndY;
  };

  //-----------------------------------------------------------------------------
  // Scene_Shop
  //

  Scene_Shop.prototype.backButtonX = function() {
    return TMPlugin.BackButton.SceneShopX;
  };

  Scene_Shop.prototype.backButtonY = function() {
    return TMPlugin.BackButton.SceneShopY;
  };

  //-----------------------------------------------------------------------------
  // Scene_Name
  //

  Scene_Name.prototype.backButtonX = function() {
    return TMPlugin.BackButton.SceneNameX;
  };

  Scene_Name.prototype.backButtonY = function() {
    return TMPlugin.BackButton.SceneNameY;
  };

})();
