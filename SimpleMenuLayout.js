//=============================================================================
// SimpleMenuLayout.js
// ----------------------------------------------------------------------------
// Copyright (c) 2017 Tsumio
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
// ----------------------------------------------------------------------------
// Version
// 1.0.0 2017/10/28 公開。
// ----------------------------------------------------------------------------
// [GitHub] : https://github.com/Tsumio/rmmv-plugins
// [Blog]   : http://ntgame.wpblog.jp/
// [Twitter]: https://twitter.com/TsumioNtGame
//=============================================================================
/*:
 * @plugindesc 實裝一個簡單的選單畫面。
 * @author ツミオ(翻譯 : ReIris)
 *
 * @param ----基本的な設定----
 * @text ----基本設定----
 * @desc 
 * @default 
 * 
 * @param メニュー幅
 * @text 選單窗口寬度
 * @type number
 * @desc 指定選單窗口的寬。
 * @default 240
 * 
 * @param メニュー列数
 * @text 選單窗口列數
 * @type number
 * @desc 指定選單窗口的列數。
 * @default 1
 * 
 * @param メニューX座標
 * @text 選單窗口 X 座標
 * @type struct<XPos>
 * @desc 指定選單窗口的 X 座標。
 * @default {"basis":"center","correction":"0"}
 * 
 * @param メニューY座標
 * @text 選單窗口 Y 座標
 * @type struct<YPos>
 * @desc 指定選單窗口的 Y 座標。
 * @default {"basis":"center","correction":"0"}
 * 
 * @help 實裝一個簡單的選單畫面。
 * 
 * 【特色】
 * ・更改選單畫面的設計。
 * ・可以根據隊長角色顯示單個圖片。
 * 
 * 【使用方法】
 * 安裝插件後，選單畫面的設計會發生變化。
 * 
 * 要顯示與隊長一致的立繪圖片，請在角色的注釋欄中寫下以下內容。
 * <stand_sml:["圖片名稱","X 座標","Y 座標"]>
 * 
 * 範例：<stand_sml:["Package1_2","400","50"]>
 * 
 * 從 img / tsumio 資料夾中讀取圖片。
 * 
 * 
 * 【插件命令】
 * 沒有插件命令。
 * 
 * 
 * 【更新履歴】
 * 1.0.0 2017/10/28 公開。
 * 
 * 【備考】
 * 對於因使用此插件而造成的任何損害，製作人不承擔任何責任。
 * 
 * 【利用規約】
 * 除非他聲稱自己是插件作者，否則未經作者許可，可以對其進行修改和二次發布。
 * 使用形式沒有限制（商業用途，18禁止使用）。
 * 請自由使用。
 * 作者 ツミオ 聯絡 :
 * [GitHub] : https://github.com/Tsumio/rmmv-plugins
 * [Blog]   : http://ntgame.wpblog.jp/
 * [Twitter]: https://twitter.com/TsumioNtGame
 * 
 */
/*~struct~XPos:
 *
 * @param basis
 * @text 基本
 * @type select
 * @option right
 * @option left
 * @option center
 * @desc 基本位置。
 * 
 * @param correction
 * @text 補正值
 * @type number
 * @min -3000
 * @max 3000
 * @desc 補正。
 */
/*~struct~YPos:
 *
 * @param basis
 * @text 基本
 * @type select
 * @option top
 * @option bottom
 * @option center
 * @desc 基本位置。
 * 
 * @param correction
 * @text 補正值
 * @type number
 * @min -3000
 * @max 3000
 * @desc 補正。
 */

(function() {
    'use strict';
    var pluginName = 'SimpleMenuLayout';


////=============================================================================
//// Local function
////  These functions checks & formats pluguin's command parameters.
////  I borrowed these functions from Triacontane.Thanks!
////=============================================================================
    var getParamString = function(paramNames) {
        if (!Array.isArray(paramNames)) paramNames = [paramNames];
        for (var i = 0; i < paramNames.length; i++) {
            var name = PluginManager.parameters(pluginName)[paramNames[i]];
            if (name) return name;
        }
        return '';
    };

    var getParamNumber = function(paramNames, min, max) {
        var value = getParamString(paramNames);
        if (arguments.length < 2) min = -Infinity;
        if (arguments.length < 3) max = Infinity;
        return (parseInt(value) || 0).clamp(min, max);
    };

    //This function is not written by Triacontane.Tsumio wrote this function !
    var convertParam = function(param) {
        if(param !== undefined){
            try {
                return JSON.parse(param);
            }catch(e){
                console.group();
                console.error('%cParameter is invalid ! You should check the following parameter !','background-color: #5174FF');
                console.error('Parameter:' + eval(param));
                console.error('Error message :' + e);
                console.groupEnd();
            }
        }
    };

////=============================================================================
//// Get and set pluguin parameters.
////=============================================================================
    var param                          = {};
    //Basic Stteings
    param.menuWidth         = getParamNumber(['MenuWidth', 'メニュー幅']);
    param.menuCols          = getParamNumber(['MenuCols', 'メニュー列数']);
    param.menuXPos          = getParamString(['MenuXPosition', 'メニューX座標']);
    param.menuYPos          = getParamString(['MenuYPosition', 'メニューY座標']);

////==============================
//// Convert parameters.
////==============================
    param.menuXPos    = convertParam(param.menuXPos);
    param.menuYPos    = convertParam(param.menuYPos);

////==============================
//// Convert to Number.
////==============================
    //None

////==============================
//// Add tsumio folder to ImageManager.
////==============================
    ImageManager.loadTsumio = function(filename) {
        return this.loadBitmap('img/tsumio/', filename, 0, true);
    };

////=============================================================================
//// SceneManager
////  Snap clear background.
////=============================================================================
    const _SceneManager_snapForBackground = SceneManager.snapForBackground;
    SceneManager.snapForBackground = function() {
        _SceneManager_snapForBackground.call(this);
        
        if(SceneManager.isNextScene(Scene_Menu)){
            this._backgroundBitmap = this.snap();
        }
    };

////=============================================================================
//// Scene_Menu
////  New simple menu scene!
////=============================================================================
    const _Scene_Menu_initialize = Scene_Menu.prototype.initialize;
    Scene_Menu.prototype.initialize = function() {
        _Scene_Menu_initialize.call(this);

        this._metaData = null;
    };

    const _Scene_Menu_start = Scene_Menu.prototype.start;
    Scene_Menu.prototype.start = function() {
        _Scene_Menu_start.call(this);
        this.hideUnnecessaryWindows();
        this.resetMenuWindowPos();
    };

    const _Scene_Menu_create = Scene_Menu.prototype.create;
    Scene_Menu.prototype.create = function() {
        _Scene_Menu_create.call(this);

        const actor = $gameParty.members()[0];
        this.setMetaData(actor);
        this.createStandPicture();
    };

    Scene_Menu.prototype.createStandPicture = function() {
        const fileName = this.getMetaData()[0];
        const x        = Number(this.getMetaData()[1]);
        const y        = Number(this.getMetaData()[2]);

        if(!fileName){
            return;
        }
        //Create and addChild.
        const picture = new Sprite(ImageManager.loadTsumio(fileName));
        picture.x = x;
        picture.y = y;
        this.addChild(picture);
    };

    const _Scene_Menu_commandPersonal = Scene_Menu.prototype.commandPersonal;
    Scene_Menu.prototype.commandPersonal = function() {
        _Scene_Menu_commandPersonal.call(this);
        this.onPersonalOk();//Skip selecting character in status window. 
    };

    Scene_Menu.prototype.hideUnnecessaryWindows = function() {
        this._statusWindow.hide();
        this._goldWindow.hide();
    };

    Scene_Menu.prototype.resetMenuWindowPos = function() {
        const width  = this._commandWindow.width;
        const height = this._commandWindow.height;
        this._commandWindow.x = MenuPosition.x(width);
        this._commandWindow.y = MenuPosition.y(height);
    };

    Scene_Menu.prototype.setMetaData = function(actor) {
        const actorId = actor.actorId();
        if($dataActors[actorId].meta['stand_sml']){
            this._metaData = JSON.parse($dataActors[actorId].meta['stand_sml']);
        }else{
            //Assign blank data.
            this._metaData = [null, 0, 0];
        }
    };

    Scene_Menu.prototype.getMetaData = function() {
        return this._metaData;
    };


////=============================================================================
//// Scene_Menu
////  New simple menu window!
////=============================================================================
    Window_MenuCommand.prototype.windowWidth = function() {
        return param.menuWidth;
    };

    Window_MenuCommand.prototype.maxCols = function() {
        return param.menuCols;
    };

    Window_MenuCommand.prototype.windowHeight = function() {
        return this.fittingHeight(this.numVisibleRows());
    };
    
    Window_MenuCommand.prototype.numVisibleRows = function() {
        return Math.ceil(this.maxItems() / this.maxCols());
    };

////=============================================================================
//// MenuPosition
////  This static class is for calculate Window position.
////=============================================================================
    class MenuPosition {
        static basisX(width){
            switch(param.menuXPos.basis){
                case 'right' :
                    return Graphics.boxWidth - width;
                    break;
                case 'left' :
                    return 0;
                    break;
                case 'center' :
                    return Graphics.boxWidth/2 - width/2;
                    break;
                default :
                    return 0;
                    break;
            }
        }

        static get correctX(){
            return Number(param.menuXPos.correction);
        }

        static x(width){
            return this.basisX(width) + this.correctX;
        }

        static basisY(height){
            switch(param.menuYPos.basis){
                case 'top' :
                    return 0;
                    break;
                case 'bottom' :
                    return Graphics.boxHeight - height;
                    break;
                case 'center' :
                    return Graphics.boxHeight/2 - height/2;
                    break;
                default :
                    return 0;
                    break;
            }
        }

        static get correctY(){
            return Number(param.menuYPos.correction);
        }

        static y(height){
            return this.basisY(height) + this.correctY;
        }
    }


////=============================================================================
//// Debug
////  This static class is for simple debugging.I/O.
////=============================================================================
    class Debug {
        /**
         * Instead of constructor.
         * At debugging, this method should be executed on loaded.
         */
        static on() {
            this._debugMode = true;
            this._stack     = [];
            console.warn(`${this.FILENAME} : Debug mode turned ON.`);
        }

        /**
         * Instead of constructor.
         * At release, this method should be executed on loaded.
         */
        static off() {
            this._debugMode = false;
            this._stack     = [];
            console.warn(`${this.FILENAME} : Debug mode turned OFF.`);
        }

        static get FILENAME(){
            return 'SimpleMenuLayout';
        }

        static get isDebugMode() {
            return this._debugMode;
        }

        static outputStack() {
            if(!this.isDebugMode){
                return;
            }

            if(this._stack.length > 0){
                this._stack.forEach(function(element) {
                    console.log(element);
                }, this);
                return `Stack length is ${this._stack.length}.`;
            }
            return 'Stack length is 0.';
        }

        static clearStack() {
            if(!this.isDebugMode){
                return;
            }

            this._stack = [];
        }

        static push(arg) {
            if(!this.isDebugMode){
                return;
            }

            this._stack.push(arg);
        }

        /**
         * Private method.
         * @param {Function} func
         * @param {Array} args
         */
        static _output(func, args) {
            if(!this.isDebugMode){
                return;
            }

            args = Array.prototype.slice.call(args);//ES6: Array.from(args);
            for(var arg of args) {
                console[func](arg);
                this.push(args);
            }
        }

        static log(args) {
            this._output('log', arguments);
        }

        static dir(args) {
            this._output('dir', arguments);
        }

        static info(args) {
            this._output('info', arguments);
        }

        static warn(args) {
            this._output('warn', arguments);
        }

        static error(args) {
            this._output('error', arguments);
        }

        static assert(test, message, optionalParam) {
            if(!this.isDebugMode){
                return;
            }

            console.assert(test, message, optionalParam);
        }

        static modify() {
            this._debugMode = !this._debugMode;
            var status      = this._debugMode ? 'ON' : 'OFF';
            console.warn(`Debug mode turned ${status}.`);
        }
    }

    //Debug.on();
    Debug.off();

})();
