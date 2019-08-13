//=============================================================================
// TsumioMenuSystem.js
// ----------------------------------------------------------------------------
// Copyright (c) 2017 Tsumio
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
// ----------------------------------------------------------------------------
// Version
// 1.1.4 2019/07/12 SVアクターが正常に表示されない不具合を修正。
// 1.1.3 2017/10/27 情報ウィンドウのリアルタイム更新機能を追加。
// 1.1.2 2017/10/13 メソッド名を修正。
// 1.1.1 2017/10/12 バグ修正。背景設定・ウィンドウスキン設定・DestinationWindow.jsとの連携機能の追加。
// 1.1.0 2017/10/11 コンテンツの高さパラメーターの追加とコードの改善。
// 1.0.2 2017/10/10 バグ修正とコードの改善。
// 1.0.1 2017/10/10 バグ修正と設定項目の追加。
// 1.0.0 2017/10/09 公開。
// ----------------------------------------------------------------------------
// [GitHub] : https://github.com/Tsumio/rmmv-plugins
// [Blog]   : http://ntgame.wpblog.jp/
// [Twitter]: https://twitter.com/TsumioNtGame
//=============================================================================
/*:
 * @plugindesc 選單畫面改造插件
 * @author ツミオ(翻譯 : ReIris)
 *
 * @param ----基本的な設定----
 * @text ----基本設定----
 * @desc 
 * @default 
 * 
 * @param メニューの行数
 * @text 選單行數
 * @type number
 * @max 10
 * @desc 設置選單行數。
 * @default 2
 * 
 * @param メニューの最大列数
 * @text 選單列數
 * @type number
 * @max 10
 * @desc 設置選單列的最大數量。
 * @default 5
 * 
 * @param ステータスの最大列数
 * @text 狀態最大列數
 * @type number
 * @max 10
 * @desc 設置狀態窗口中的最大列數。推薦 3 - 5 列。
 * @default 4
 * 
 * @param 章ウィンドウを表示する
 * @text 章節窗口顯示
 * @type boolean
 * @desc 設置是否顯示章節窗口。
 * @default true
 * 
 * @param 章ウィンドウの高さ
 * @text 章節窗口高度
 * @type number
 * @max 1000
 * @desc 設置章節窗口高度。
 * @default 70
 * 
 * @param ステータスウィンドウの高さ
 * @text 狀態窗口高度
 * @type number
 * @max 1000
 * @desc 設置狀態窗口的高度。
 * @default 290
 * 
 * 
 * @param 顔グラフィックのサイズ
 * @text 臉圖尺寸
 * @type struct<Size>
 * @desc 設置臉圖的大小。
 * 初期 : 105*30 / 全尺寸 : 144*144
 * @default {"width":"105","height":"30"}
 * 
 * 
 * @param サブウィンドウのフォントサイズ
 * @text 子窗口字體大小
 * @type number
 * @max 1000
 * @desc 設置子窗口的字體大小（小技巧窗口和訊息窗口）。
 * @default 17
 * 
 * @param ----ヘルプの設定----
 * @text ----幫助窗口設定----
 * @desc 
 * @default 
 * 
 * @param ヘルプを利用する
 * @text 是否使用幫助窗口？
 * @type select
 * @option 利用
 * @value On
 * @option 開關
 * @value Switching
 * @option 不利用
 * @value Off
 * @desc 設置是否使用幫助。
 * @default Switching
 * 
 * @param ヘルプ用テキスト
 * @text 幫助窗口文字內容
 * @type string[]
 * @desc 按命令的順序設置幫助文本。
 * @default ["移動到道具頁面。", "移動到技能頁面。", "移動到裝備頁面。", "移動到狀態頁面。", "進行組隊功能。", "移動到設置頁面。", "移動到存檔頁面。", "結束遊戲"]
 * 
 * @param ----文字列の設定----
 * @text ----文字設定----
 * @desc 
 * @default 
 * 
 * @param 項目名の色
 * @text 項目名稱顏色
 * @type number
 * @max 31
 * @desc 設置子窗口中項目名稱的顏色。
 * 顏色和數字之間的對應關係基於窗口圖片(Windowskin)。
 * @default 1
 * 
 * @param 項目内容の色
 * @text 項目內容顏色
 * @type number
 * @max 31
 * @desc 設置子窗口中項目內容的顏色。
 * 顏色和數字之間的對應關係基於窗口圖片(Windowskin)。
 * @default 0
 * 
 * @param 現在地を表す文字列
 * @text 所在地點的顯示文字
 * @type string
 * @desc 設置表示所在地點的文字。
 * @default 所在地點
 * 
 * @param 所持金を表す文字列
 * @text 金錢的顯示文字
 * @type string
 * @desc 設置表示所持金錢的文字。
 * @default 金錢
 * 
 * @param 戦闘回数を表す文字列
 * @text 戰鬥次數的顯示文字
 * @type string
 * @desc 設置表示戰鬥次數的文字。
 * @default 戰鬥次數
 * 
 * @param プレイ時間を表す文字列
 * @text 遊玩時間的顯示文字
 * @type string
 * @desc 設置表示遊玩時間的文字。
 * @default 遊玩時間
 * 
 * @param オプション1
 * @text 項目 1
 * @type string
 * @desc 設置表示項目 1 的文字。
 * @default 項目 1
 * 
 * @param オプション1の内容
 * @text 項目 1 的內容
 * @type string
 * @desc 設置項目 1 的內容。如果要指定變數內容，請輸入例如 \V[1]。
 * @default \V[1]
 * 
 * @param オプション2
 * @text 項目 2
 * @type string
 * @desc 設置表示項目 2 的文字。
 * @default 項目 2
 * 
 * @param オプション2の内容
 * @text 項目 2 的內容
 * @type string
 * @desc 設置項目 2 的內容。與 Chronus.js 併用的情況，分別寫入[Chronus1]或[Chronus2]。
 * @default [Chronus2]
 * 
 * 
 * @param ----背景の設定----
 * @text ----背景設定----
 * @desc 
 * @default 
 * 
 * @param メイン背景の画像
 * @text 主選單背景圖片
 * @type file
 * @require 1
 * @desc 設置主選單背景圖片。
 * @dir img/tsumio
 * @default
 * 
 * @param メイン背景の設定
 * @text 主選單背景設定
 * @type struct<Background>
 * @desc 設定主選單背景設置。如果為寬度和高度設置負值，則替換為畫面大小。
 * @default {"x":"0", "y":"0", "width":"-1", "height":"-1", "speedX":"0.00", "speedY":"0.00"}
 * 
 * @param サブ背景の画像
 * @text 子選單背景圖片
 * @type file
 * @require 1
 * @desc 設置子選單背景圖片。
 * @dir img/tsumio
 * @default
 * 
 * @param サブ背景の設定
 * @text 子選單背景設定
 * @type struct<Background>
 * @desc 設置子選單背景設置。如果為寬度和高度設置負值，則替換為畫面大小。
 * @default {"x":"0", "y":"0", "width":"-1", "height":"-1", "speedX":"0.00", "speedY":"0.00"}
 * 
 * @param パーティクルの画像
 * @text 粒子圖片
 * @type file
 * @require 1
 * @desc 設置粒子圖片。
 * @dir img/tsumio
 * @default
 * 
 * @param パーティクルの設定
 * @text 粒子設定
 * @type struct<Particle>
 * @desc 設定粒子設置。如果為寬度和高度設置負值，則替換為畫面大小。
 * @default {"x":"0", "y":"0", "width":"-1", "height":"-1", "speedX":"-1.00", "speedY":"1.00", "opacity":"150", "blendMode":"0"}
 * 
 * @param パーティクルの点滅
 * @text 粒子是否閃爍？
 * @type boolean
 * @desc 設置是否使粒子閃爍。
 * @default true
 * 
 * @param ----特殊な設定----
 * @text ----特殊設定----
 * @desc 
 * @default 
 * 
 * @param 比率
 * @text 比例
 * @type number[]
 * @max 1
 * @decimals 2
 * @desc 設置子窗口中文本的排列比例。
 * @default ["0.00", "0.35", "0.70"]
 * 
 * @param コンテンツの高さ
 * @text 內容高度
 * @type struct<LineHeight>
 * @desc 設置狀態窗口中的內容高度。數字越大，顯示的越低。
 * @default {"class":"-1", "face":"0", "name":"1", "level":"2", "icons":"2", "hp":"3", "mp":"4", "tp":"5", "exp":"6"}
 * 
 * @param ウィンドウスキン
 * @text 窗口樣式
 * @type struct<WindowSkin>
 * @desc 設置每個窗口的外觀樣式。
 * @default {"command":"", "status":"", "chapter":"", "tips":"", "info":""}
 * 
 * @param 情報ウィンドウの更新
 * @text 情報窗口更新
 * @type number
 * @min -1
 * @desc 使用指定幀數更新訊息窗口。如果設置了負值，則不會更新。
 * @default -1
 * 
 * 
 * @help 更改選單畫面的插件
 * 
 * 【特色】
 *  修改選單排版。
 *  改進了選單的按鍵操作。
 *  提供章節顯示窗口。
 *  提供用於顯示小技巧的窗口。
 *  可以在訊息窗口中顯示任意變數內容。
 *  插件命令設置的訊息將保存在儲存檔案中。
 *  可以連接トリアコンタンさん創建的 Chronus.js 插件。
 * 
 * 【使用方法】
 * 安裝插件後，您可以通過設置插件參數來使用它。
 * 側視戰鬥圖繪顯示在選單畫面，但當資料庫「使用側視圖戰鬥」為關閉時不顯示。
 * 
 * 【章節窗口】
 * 您可以從插件命令設置章節標題。
 * 它還可用於顯示選單幫助。
 * 有關詳細信息，請參閱插件參數中的「使用幫助」。
 * 可以使用控制字元。
 * 
 * 從 v1.0.1 版本開始，可以隱藏章節窗口。
 * 隱藏章節窗口的情況，參數中設定的章節窗口高度會分給其他窗口顯示。
 * 此時，要放大的窗口是小技巧窗口和訊息窗口。
 * 如果要放大狀態窗口，請使用插件參數更改狀態窗口的高度。
 * 
 * 【小技巧窗口】
 * 可以通過插件命令設置每個小技巧說明。
 * 可以使用控制字元。
 * 
 * 【項目】
 * 可以在插件參數的「項目」中寫入任意訊息。
 * 例如，如果輸入「\V[1]」，項目將顯示變數 1 的內容。
 * 
 * 【與 Chronus.js 併用】
 * 該插件支持與トリアコンタンさん的 Chronus.js 的併用。
 * 如果在選項內容中輸入「[Chronus1]」，將獲取日期和時間格式 1。
 * 如果輸入「[Chronus2]」，將獲取日期和時間格式 2。
 * 
 * 参考URL：https://raw.githubusercontent.com/triacontane/RPGMakerMV/master/Chronus.js
 * 
 * 【與 DestinationWindow.js 併用】
 * 此插件支持與トリアコンタンさん的 DestinationWindow.js 的併用。
 * 如果您在項目內容中輸入「[Destination]」，將獲得設定的操作目標。
 * 
 * 参考URL：https://raw.githubusercontent.com/triacontane/RPGMakerMV/master/DestinationWindow.js
 * 
 *【內容高度】
 * 通過設置插件參數內容的高度，您可以更改狀態窗口中顯示內容的高度。
 * 數字越大，顯示內容越下方。
 * 請注意，高度不是以像素為單位指定，而是以行的形式指定。
 * 
 * 【背景圖片和粒子】
 * 您可以設置背景圖片和粒子。
 * 子背景顯示在主背景上方。
 * 通過更改 X 座標和 Y 座標速度，您還可以循環和移動圖片。
 * 
 * 【窗口樣式】
 * 如果未設置窗口樣式，則使用標準窗口樣式。
 * 
 * 【情報窗口更新】
 * 訊息窗口在指定的幀更新（如果指定了-1，則不執行更新）。
 * 推薦使用 60 幀。
 * 另外，使用 Chronus.js 不能更新。
 * 
 * 【插件命令】
 * 所有插件命令均以「TMS」開頭。
 * 另外，在說明中，括號用於提醒，但實際輸入插件命令時不必輸入括號。
 * 
 * 所有插件命令都區分大小寫。
 * 用半形空格（不是全形）分隔每個字。
 * 請注意不要犯錯誤。
 * 
 * 「TMS setChapterName 設定的文字內容」 : 設置在章節窗口中的文本。可以使用控制字元。
 * 「TMS setTips1 設定的文字內容」 : 設置在小技巧窗口上部的文本。可以使用控制字元。
 * 「TMS setTips2 設定的文字內容」 : 設置在小技巧窗口下部的文本。可以使用控制字元。
 * 
 * 【其他】
 * 選單畫面上的關鍵操作規範與普通 MV 不同。
 * 基本上，如果您認為可操作性已經提高，則沒有問題。
 * 但如果您使用插件來改善按鍵操作，則可能會發生衝突。
 * 
 * 此外，如果您更改解析度或更改行數或列數，您可能會遇到錯誤。
 * 
 * 【更新紀錄】
 * 1.1.4 2019/07/12 SVアクターが正常に表示されない不具合を修正。
 * 1.1.3 2017/10/27 情報ウィンドウのリアルタイム更新機能を追加。
 * 1.1.2 2017/10/13 メソッド名の修正。
 * 1.1.1 2017/10/12 バグ修正。背景設定・ウィンドウスキン設定・DestinationWindow.jsとの連携機能の追加。
 * 1.1.0 2017/10/11 コンテンツの高さパラメーターの追加とコードの改善。
 * 1.0.2 2017/10/10 バグ修正とコードの改善。
 * 1.0.1 2017/10/10 バグ修正と設定項目の追加。
 * 1.0.0 2017/10/09 公開。
 * 
 * 【備註】
 * 對於因使用此插件而造成的任何損害，製作人不承擔任何責任。
 * 
 * 【使用聲明】
 * 除非他聲稱自己是插件作者，否則未經作者許可，可以對其進行修改和二次發布。
 * 使用形式沒有限制（商業用途，18禁止使用）。
 * 請自由使用。
 * 作者 ツミオ 聯絡 :
 * [GitHub] : https://github.com/Tsumio/rmmv-plugins
 * [Blog]   : http://ntgame.wpblog.jp/
 * [Twitter]: https://twitter.com/TsumioNtGame
 * 
 */
/*~struct~Size:
 *
 * @param width
 * @text 寬
 * @type number
 * @desc 寬度。
 * 
 * @param height
 * @text 高
 * @type number
 * @desc 高度。
 */
/*~struct~Background:
 *
 * @param x
 * @text X 座標
 * @type number
 * @min -2000
 * @max 2000
 * @desc X座標。
 * 
 * @param y
 * @text Y 座標
 * @type number
 * @min -2000
 * @max 2000
 * @desc Y 座標。
 * 
 * @param width
 * @text 寬
 * @type number
 * @min -2000
 * @max 2000
 * @desc 寬度。
 * 
 * @param height
 * @text 高
 * @type number
 * @min -2000
 * @max 2000
 * @desc 高度。
 * 
 * @param speedX
 * @text X 座標速度
 * @type number
 * @min -255
 * @max 255
 * @decimals 2
 * @desc X 座標的速度。
 * 
 * @param speedY
 * @text Y 座標速度
 * @type number
 * @min -255
 * @max 255
 * @decimals 2
 * @desc Y 座標的速度。
 * 
 */
/*~struct~Particle:
 *
 * @param x
 * @text X 座標
 * @type number
 * @min -2000
 * @max 2000
 * @desc X 座標。
 * 
 * @param y
 * @text Y 座標
 * @type number
 * @min -2000
 * @max 2000
 * @desc Y座標。
 * 
 * @param width
 * @text 寬
 * @type number
 * @min -2000
 * @max 2000
 * @desc 寬度。
 * 
 * @param height
 * @text 高
 * @type number
 * @min -2000
 * @max 2000
 * @desc 高度。
 * 
 * @param speedX
 * @text X 座標速度
 * @type number
 * @min -255
 * @max 255
 * @decimals 2
 * @desc X 座標的速度。
 * 
 * @param speedY
 * @text Y 座標速度
 * @type number
 * @min -255
 * @max 255
 * @decimals 2
 * @desc Y 座標的速度。
 * 
 * @param opacity
 * @text 透明度
 * @type number
 * @max 255
 * @desc 透明度。
 * 
 * @param blendMode
 * @text 合成模式
 * @type number
 * @max 3
 * @desc 合成模式。0：通常 1：加算 2：乗算 3：畫面
 * (0:Normal 1:Addition 2:Multiplication 3:Screen)。
 * 
 */
/*~struct~LineHeight:
 * 
 * @param class
 * @text 職業
 * @type number
 * @min -255
 * @max 255
 * @desc 職業。
 * 
 * @param face
 * @text 臉圖
 * @type number
 * @min -255
 * @max 255
 * @desc 臉圖。
 * 
 * @param name
 * @text 名稱
 * @type number
 * @min -255
 * @max 255
 * @desc 名稱。
 * 
 * @param level
 * @text 等級
 * @type number
 * @min -255
 * @max 255
 * @desc 等級。
 * 
 * @param icons
 * @text 圖標
 * @type number
 * @min -255
 * @max 255
 * @desc 圖標。
 * 
 * @param hp
 * @text HP
 * @type number
 * @min -255
 * @max 255
 * @desc HP
 * 
 * @param mp
 * @text MP
 * @type number
 * @min -255
 * @max 255
 * @desc MP
 * 
 * @param tp
 * @text TP
 * @type number
 * @min -255
 * @max 255
 * @desc TP
 * 
 * @param exp
 * @text 經驗值
 * @type number
 * @min -255
 * @max 255
 * @desc 經驗值
 */
/*~struct~WindowSkin:
 *
 * @param command
 * @text 選單命令
 * @type file
 * @require 1
 * @desc 命令窗口樣式。
 * @dir img/tsumio
 * 
 * @param status
 * @text 狀態窗口
 * @type file
 * @require 1
 * @desc 狀態窗口樣式。
 * @dir img/tsumio
 * 
 * @param chapter
 * @text 章節窗口
 * @type file
 * @require 1
 * @desc 章節窗口樣式。
 * @dir img/tsumio
 * 
 * @param tips
 * @text 小技巧窗口
 * @type file
 * @require 1
 * @desc 小技巧窗口樣式。
 * @dir img/tsumio
 * 
 * @param info
 * @text 情報窗口
 * @type file
 * @require 1
 * @desc 情報窗口樣式。
 * @dir img/tsumio
 * 
 */

function Game_TMenuSys() {
    this.initialize.apply(this, arguments);
}

(function() {
    'use strict';
    var pluginName = 'TsumioMenuSystem';

////=============================================================================
//// NTMO
////  Declare NTMO namespace.
////=============================================================================
    var NTMO = NTMO || {};
    NTMO.TMS = function(){
    };

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

    /**
     * Convert to number.Receive converted JSON object.
     * @param {Object} obj
     * 
     */
    //This function is not written by Triacontane.Tsumio wrote this function !
    var convertToNumber = function(obj) {
        for(var prop in obj) {
            obj[prop] = Number(obj[prop]);
        }
        return obj;
    }

    var _DataManager_extractSaveContents = DataManager.extractSaveContents;
    DataManager.extractSaveContents      = function(contents) {
        _DataManager_extractSaveContents.apply(this, arguments);
        $gameSystem.onLoad();
    };

////=============================================================================
//// Get and set pluguin parameters.
////=============================================================================
    var param                          = {};
    //Basic Stteings
    param.menuRows         = getParamNumber(['MenuRows', 'メニューの行数']);
    param.menuMaxCols      = getParamNumber(['MenuMaxCols', 'メニューの最大列数']);
    param.shouldUseChapWin = getParamString(['ShowChapterWindow', '章ウィンドウを表示する']);
    param.chapWinHeight    = getParamNumber(['ChapterWindowHeight', '章ウィンドウの高さ']);
    param.statusWinHeight  = getParamNumber(['StatusWindowHeight', 'ステータスウィンドウの高さ']);
    param.faceSize         = getParamString(['FaceSize', '顔グラフィックのサイズ']);
    param.subWinfontSize   = getParamNumber(['SubWIndowsFontSize', 'サブウィンドウのフォントサイズ']);
    param.statusMaxCols    = getParamNumber(['StatusMaxCols', 'ステータスの最大列数']);
    //Help Settings
    param.shouldUseHelp   = getParamString(['UseHelp',  'ヘルプを利用する']);
    param.textHelp        = getParamString(['HelpText', 'ヘルプ用テキスト']);
    //Chars Settings
    param.colorItemName   = getParamNumber(['ItemNameColor', '項目名の色']);
    param.colorContents   = getParamNumber(['ItemContentsColor', '項目内容の色']);
    param.charsLocation   = getParamString(['LocationChars', '現在地を表す文字列']);
    param.charsFortune    = getParamString(['FortuneChars', '所持金を表す文字列']);
    param.charsCombatNum  = getParamString(['CombatNumberChars', '戦闘回数を表す文字列']);
    param.charsPlayTime   = getParamString(['PlayTimeChars', 'プレイ時間を表す文字列']);
    param.option1         = getParamString(['Option1', 'オプション1']);
    param.op1Contents     = getParamString(['Option1Contents', 'オプション1の内容']);
    param.option2         = getParamString(['Option2', 'オプション2']);
    param.op2Contents     = getParamString(['Option2Contents', 'オプション2の内容']);
    //Background Settings
    param.mainBackImg     = getParamString(['MainBackgroundImage', 'メイン背景の画像']);
    param.mainBackSet     = getParamString(['MainBackgroundSettings', 'メイン背景の設定']);
    param.subBackImg      = getParamString(['SubBackgroundImage', 'サブ背景の画像']);
    param.subBackSet      = getParamString(['SubBackgroundSettings', 'サブ背景の設定']);
    param.particleImg     = getParamString(['ParticleImage', 'パーティクルの画像']);
    param.particleSet     = getParamString(['ParticleSettings', 'パーティクルの設定']);
    param.particleFlash   = getParamString(['ParticleFlashing', 'パーティクルの点滅']);
    //Special Settings
    param.ratio           = getParamString(['Ratio', '比率']);
    param.lineHeight      = getParamString(['LineHeight', 'コンテンツの高さ']);
    param.windowSkin      = getParamString(['WindowSkin', 'ウィンドウスキン']);
    param.infoUpdateFrame = getParamNumber(['UpdateInfoWindow', '情報ウィンドウの更新']);


////==============================
//// Convert parameters.
////==============================
    param.ratio    = convertParam(param.ratio);
    param.textHelp = convertParam(param.textHelp);
    param.faceSize = convertParam(param.faceSize);
    param.shouldUseChapWin = convertParam(param.shouldUseChapWin);
    param.lineHeight       = convertParam(param.lineHeight);
    param.windowSkin       = convertParam(param.windowSkin);
    param.mainBackSet      = convertParam(param.mainBackSet);
    param.subBackSet       = convertParam(param.subBackSet);
    param.particleSet      = convertParam(param.particleSet);
    param.particleFlash    = convertParam(param.particleFlash);
////==============================
//// Convert to Number.
////==============================
    param.faceSize    = convertToNumber(param.faceSize);
    param.lineHeight  = convertToNumber(param.lineHeight);
    param.mainBackSet = convertToNumber(param.mainBackSet);
    param.subBackSet  = convertToNumber(param.subBackSet);
    param.particleSet = convertToNumber(param.particleSet);

//-----------------------------------------------------------------------------
// Settings for plugin command.
//-----------------------------------------------------------------------------
    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function (command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        if (command === 'TMS') {
            switch (args[0]) {
                case 'setChapterName':
                    $gameSystem.tMenuSys().setChapterName(args);
                    break;
                case 'setTips1':
                    $gameSystem.tMenuSys().setTips1(args);
                    break;
                case 'setTips2':
                    $gameSystem.tMenuSys().setTips2(args);
                    break;
            }
        }
    };

////==============================
//// Add tsumio folder to ImageManager.
////==============================
    ImageManager.loadTsumio = function(filename) {
        return this.loadBitmap('img/tsumio/', filename, 0, true);
    };

////==============================
//// Scene_Boot
///   Override this class for loading images.
////==============================
    var _Scene_Boot_loadSystemWindowImage      = Scene_Boot.prototype.loadSystemWindowImage;
    Scene_Boot.prototype.loadSystemWindowImage = function() {
        _Scene_Boot_loadSystemWindowImage.call(this);

        //Addtional window images.
        if(param.windowSkin.command){
            ImageManager.loadTsumio(param.windowSkin.command);
        }
        if(param.windowSkin.status){
            ImageManager.loadTsumio(param.windowSkin.status);
        }
        if(param.windowSkin.chapter){
            ImageManager.loadTsumio(param.windowSkin.chapter);
        }
        if(param.windowSkin.tips){
            ImageManager.loadTsumio(param.windowSkin.tips);
        }
        if(param.windowSkin.info){
            ImageManager.loadTsumio(param.windowSkin.info);
        }
    };

//////=============================================================================
///// NTMO.TMS.Base
/////  This is static class for getting various information.
/////=============================================================================
    NTMO.TMS.Base = class {
        static getActorState(actor) {
            if(actor.isStateAffected(1)){//If actor is died.
                return 'dead';
            }else if (actor.hpRate() <= 25 / 100){//If actor HP is below 25%.
                return 'dying';
            }else{
                return 'walk';
            }
        }

        static isNumberMinus(num) {
            if(num < 0){
                return true;
            }
            return false;
        }

        static convertBackgroundWidth(num) {
            if(this.isNumberMinus(num)){
                return Graphics.width; 
            }else{
                return num;
            }
        }

        static convertBackgroundHeight(num) {
            if(this.isNumberMinus(num)){
                return Graphics.height; 
            }else{
                return num;
            }
        }
    };

//////=============================================================================
///// Game_System
/////  Add a game system called Game_TMenuSys.
/////==============================================================================
    var _Game_System_initialize      = Game_System.prototype.initialize;
    Game_System.prototype.initialize = function() {
        _Game_System_initialize.call(this);
        this._tMenuSys = new Game_TMenuSys();
    };

    Game_System.prototype.tMenuSys = function() {
        return this._tMenuSys;
    };

    var _Game_System_onLoad      = Game_System.prototype.onLoad;
    Game_System.prototype.onLoad = function() {
        if (_Game_System_onLoad) _Game_System_onLoad.apply(this, arguments);
        if (!this.tMenuSys()) this._tMenuSys = new Game_TMenuSys();
        this._tMenuSys.onLoad();
    };

//////=============================================================================
///// Game_TMenuSys
/////  This class manage TsumioMenuSystem's data.
/////=============================================================================
    Game_TMenuSys.prototype             = Object.create(Game_TMenuSys.prototype);
    Game_TMenuSys.prototype.constructor = Game_TMenuSys;

    Game_TMenuSys.prototype.initialize = function() {
        this._chapterName = null;
        this._tips1       = null;
        this._tips2       = null;
    };

    Game_TMenuSys.prototype.onLoad = function() {
        //When system is loaded, execute any function if necessary.
    };

    Game_TMenuSys.prototype.getChapterName = function() {
        return this._chapterName;
    };

    Game_TMenuSys.prototype.setChapterName = function(name) {
        this._chapterName = '';
        name.forEach(function(element, index) {
            if(index > 0){
                this._chapterName += element + ' ';
            }
        }, this);
    };

    Game_TMenuSys.prototype.setTips1 = function(content) {
        this._tips1 = '';
        content.forEach(function(element, index) {
            if(index > 0){
                this._tips1 += element + ' ';
            }
        }, this);
    };

    Game_TMenuSys.prototype.getTips1 = function() {
        return this._tips1;
    };

    Game_TMenuSys.prototype.setTips2 = function(content) {
        this._tips2 = '';
        content.forEach(function(element, index) {
            if(index > 0){
                this._tips2 += element + ' ';
            }
        }, this);
    };

    Game_TMenuSys.prototype.getTips2 = function() {
        return this._tips2;
    };

//////=============================================================================
///// Scene_Menu
/////  Override this class for creating original menu.
/////=============================================================================

    var _Scene_Menu_create      = Scene_Menu.prototype.create;
    Scene_Menu.prototype.create = function() {
        //Call original create method.
        _Scene_Menu_create.call(this);

        //Create original windows.
        this.createChapterWindow();
        this.createTipsWindow();
        this.createInfoWindow();

        /*
          Note : Create Particle.
          Should be created with createBackground() or here.
          I can not decide which is better.
        */
        //this.createParticle();

        //Hide unnecessary window.
        this.hideUnnecessaryWindows();

        //Reset and refresh windows position.
        this.resetWindowsPosAndSize();
        this.refreshWindow_TMS();

        //Add eventListener.
        this.addEventListenerToCommandWindow();
        this.addEventListenerToStatusWindow();
    };

    var _Scene_Menu_update      = Scene_Menu.prototype.update;
    Scene_Menu.prototype.update = function() {
        _Scene_Menu_update.call(this);

        this.scrollBackImages.update();
        this.particleImage.update();
    };
    
    var _Scene_Menu_createBackground      = Scene_Menu.prototype.createBackground;
    Scene_Menu.prototype.createBackground = function() {
        _Scene_Menu_createBackground.call(this);

        this.createScrollBackground();
        this.createParticle();//Refer -> Note : Create Particle.
    };

    Scene_Menu.prototype.createScrollBackground = function() {
        //Initialize background settings.
        var main_x      = param.mainBackSet.x;
        var main_y      = param.mainBackSet.y;
        var main_width  = NTMO.TMS.Base.convertBackgroundWidth(param.mainBackSet.width);
        var main_height = NTMO.TMS.Base.convertBackgroundHeight(param.mainBackSet.height);
        var sub_x       = param.subBackSet.x;
        var sub_y       = param.subBackSet.y;
        var sub_width   = NTMO.TMS.Base.convertBackgroundWidth(param.subBackSet.width);
        var sub_height  = NTMO.TMS.Base.convertBackgroundHeight(param.subBackSet.height);

        //Create scrolling background.You should 'move()' each image, if you want to draw a certain range.
        this.scrollBackImages = new ScrollBackImages(this, param.mainBackImg, param.subBackImg);
        this.scrollBackImages.setMainSpeed(param.mainBackSet.speedX, param.mainBackSet.speedY);
        this.scrollBackImages.setSubSpeed(param.subBackSet.speedX, param.subBackSet.speedY);
        this.scrollBackImages.moveMainSprite(main_x, main_y, main_width, main_height);
        this.scrollBackImages.moveSubSprite(sub_x, sub_y, sub_width, sub_height);
    };

    Scene_Menu.prototype.createParticle = function() {
        //Initialize particle settings.
        var fileName    = param.particleImg;
        var opacity     = param.particleSet.opacity;
        var blendMode   = param.particleSet.blendMode;
        var flashing    = param.particleFlash;
        var x           = param.particleSet.x;
        var y           = param.particleSet.y;
        var width       = NTMO.TMS.Base.convertBackgroundWidth(param.particleSet.width);
        var height      = NTMO.TMS.Base.convertBackgroundHeight(param.particleSet.height);

        //Create particle.You should 'move()' each image, if you want to draw a certain range.
        this.particleImage = new ParticleImage(this, fileName, opacity, blendMode, flashing);
        this.particleImage.setSpeed(param.particleSet.speedX, param.particleSet.speedY);
        this.particleImage.moveSprite(x, y, width, height);
    };

    var _Scene_Menu_createStatusWindow      = Scene_Menu.prototype.createStatusWindow;
    Scene_Menu.prototype.createStatusWindow = function() {
        _Scene_Menu_createStatusWindow.call(this);
        this._genSwapSVActors = this.genSkipFirstCalling(this._statusWindow.swapSVActors.bind(this._statusWindow));
    };

    Scene_Menu.prototype.createChapterWindow = function() {
        //Initialize.
        var x      = 0;
        var y      = 0;
        var width  = Graphics.boxWidth;
        var height = param.chapWinHeight;

        //Create and add.
        this._chapterWindow = new NTMO.TMS.Window_Chapter(x, y, width, height);
        this.addWindow(this._chapterWindow);
    };

    Scene_Menu.prototype.createTipsWindow = function() {
        //Initialize.
        var x      = 0;
        var y      = 0;
        var width  = Graphics.boxWidth;
        var height = Graphics.boxHeight;

        //Create and add.
        this._tipsWindow = new NTMO.TMS.Window_Tips(x, y, width, height);
        this.addWindow(this._tipsWindow);
    };

    Scene_Menu.prototype.createInfoWindow = function() {
        //Initialize.
        var x      = 0;
        var y      = 0;
        var width  = Graphics.boxWidth;
        var height = Graphics.boxHeight;

        //Create and add.
        this._infoWindow = new NTMO.TMS.Window_Info(x, y, width, height);
        this.addWindow(this._infoWindow);
    };

    Scene_Menu.prototype.resetWindowsPosAndSize = function() {
        //Set command window position.
        this._commandWindow.y = this._chapterWindow.height;
        //Set status window position.
        this._statusWindow.x = 0;
        this._statusWindow.y = this._commandWindow.y + this._commandWindow.height;
        //Set tips window pos and size.
        this._tipsWindow.y      = this._statusWindow.y + this._statusWindow.height;
        this._tipsWindow.height = (Graphics.boxHeight - this._tipsWindow.y)/2;
        //Set info window pos and size.
        this._infoWindow.y      = this._tipsWindow.y + this._tipsWindow.height;
        this._infoWindow.height = this._tipsWindow.height;
    };

    Scene_Menu.prototype.refreshWindow_TMS = function() {
        this._tipsWindow.refresh();
        this._infoWindow.refresh();
        this._statusWindow.modifySVActorsVisible();
    };

    Scene_Menu.prototype.addEventListenerToCommandWindow = function() {
        this._commandWindow.eventListener['onDown'].register(this.onDownTMS.bind(this));
        this._commandWindow.eventListener['onUp'].register(this.onUpTMS.bind(this));
        this._commandWindow.eventListener['onRight'].register(this.onRightTMS.bind(this));
        this._commandWindow.eventListener['onLeft'].register(this.onLeftTMS.bind(this));
        this._commandWindow.eventListener['onSelect'].register(this.onSelectTMS.bind(this));
    };

    Scene_Menu.prototype.addEventListenerToStatusWindow = function() {
        this._genUpdatePages = this.genSkipFirstCalling(this._statusWindow.modifySVActorsVisible.bind(this._statusWindow));
        this._statusWindow.eventListener['onSelect'].register(this.onSelectTMS_Status.bind(this));
    };

    Scene_Menu.prototype.getCommandIndex = function() {
        return this._commandWindow.index();
    };

    Scene_Menu.prototype.hideUnnecessaryWindows = function() {
        this._goldWindow.hide();
        if(!param.shouldUseChapWin){
            this._chapterWindow.hide();
            //Adjust the position of other windows by setting the height to 0.
            this._chapterWindow.height = 0;
        }
    };

    Scene_Menu.prototype.onDownTMS = function() {
        
    };

    Scene_Menu.prototype.onUpTMS = function() {
        
    };

    Scene_Menu.prototype.onRightTMS = function() {
        
    };

    Scene_Menu.prototype.onLeftTMS = function() {
        
    };

    Scene_Menu.prototype.onSelectTMS = function() {
        this._chapterWindow.reDrawContents(this.getCommandIndex());
    };

    Scene_Menu.prototype.onSelectTMS_Status = function() {
        this._genUpdatePages.next();
    };

    //Hack: This process is called many times.
    //But, I think that it is better than calling this function repeatedly in the update function.
    /**
     * @param {function} func
     */
    Scene_Menu.prototype.genSkipFirstCalling = function*(func) {
        var count = 0;
        while(true){
            if(count > 0){//Main process
                func();
            }
            count++;
            yield count;
        }
    };

    var _Scene_Menu_onFormationOk      = Scene_Menu.prototype.onFormationOk;
    Scene_Menu.prototype.onFormationOk = function() {
        _Scene_Menu_onFormationOk.call(this);
        
        //HACK: Not best answer.But anyway works.
        //This is a process to guard SVActors from flickering.
        //See the "onFormationCancel()".
        var count = this._genSwapSVActors.next();
        if(count.value >= 2){
            this._genSwapSVActors = this.genSkipFirstCalling(this._statusWindow.swapSVActors.bind(this._statusWindow));
        }
    };

    var _Scene_Menu_onFormationCancel      = Scene_Menu.prototype.onFormationCancel;
    Scene_Menu.prototype.onFormationCancel = function() {
        _Scene_Menu_onFormationCancel.call(this);

        //HACK: Not best answer.But anyway works.
        //This is a process to guard SVActors from flickering.
        //See the "onFormationOk()".
        this._genSwapSVActors = this.genSkipFirstCalling(this._statusWindow.swapSVActors.bind(this._statusWindow));
    };

//////=============================================================================
///// Window_MenuCommand
/////  Override Window_MenuCommand.
/////=============================================================================
    Window_MenuCommand.prototype.windowWidth = function() {
        return Graphics.boxWidth;
    };

    Window_MenuCommand.prototype.numVisibleRows = function() {
        return param.menuRows;
    };

    Window_MenuCommand.prototype.maxCols = function() {
        return param.menuMaxCols;
    };

    Window_MenuCommand.prototype.loadWindowskin = function() {
        if (param.windowSkin.command) {
            this.windowskin = ImageManager.loadTsumio(param.windowSkin.command);
        } else {
            Window_Base.prototype.loadWindowskin.call(this);
        }
    };

    var _Window_MenuCommand_initialize = Window_MenuCommand.prototype.initialize;
    Window_MenuCommand.prototype.initialize = function(x, y, width, height) {
        this.createEventListener();
        _Window_MenuCommand_initialize.call(this,x, y, width, height);
    };

    Window_MenuCommand.prototype.createEventListener = function(){
        this.eventListener = new Map([['onUp',null],['onDown',null],['onLeft',null],['onRight',null],['onSelect',null]]);
        for(var key of this.eventListener.keys()){
            this.eventListener[key] = new EventListener();
        }
    };
    
    //Override.
    Window_MenuCommand.prototype.cursorDown = function(wrap) {
        var temp_index = this.index();
        if((this.maxCols()*this.maxRows()-this.maxCols()) <= this.index()){
            var oppositIndex = (this.maxCols()*this.maxRows()-this.maxCols()) - this.index();
            this.select(Math.abs(oppositIndex));
        }else{
            var index = this.index();
            var maxItems = this.maxItems();
            var maxCols = this.maxCols();
            if (index < maxItems - maxCols || (wrap && maxCols === 1)) {
                this.select((index + maxCols) % maxItems);
            }
        }

        if(temp_index === this.index()){
            if(this.index()-this.maxCols() > 0){
                this.select(this.index()-this.maxCols());
            }
        }

        this.eventListener.onDown.fire();
    };

    //Override.
    Window_MenuCommand.prototype.cursorUp = function(wrap) {
        var temp_index = this.index();
        if(this.maxCols() > this.index()){
            var oppositIndex = (this.maxCols()*this.maxRows()-this.maxCols()) + this.index();
            var newIndex     = (oppositIndex < this.maxItems()) ? oppositIndex : this.index();
            this.select(newIndex);
        }else{
            var index = this.index();
            var maxItems = this.maxItems();
            var maxCols = this.maxCols();
            if (index >= maxCols || (wrap && maxCols === 1)) {
                this.select((index - maxCols + maxItems) % maxItems);
            }
        }

        if(temp_index === this.index()){
            if(this.index()+this.maxCols() < this.maxItems()){
                this.select(this.index()+this.maxCols());
            }
        }

        this.eventListener.onUp.fire();
    };
    
    //Override.
    Window_MenuCommand.prototype.cursorRight = function(wrap) {
        if((this.index() === this.maxItems()-1)){
            this.select(0);
        }else{
            var index = this.index();
            var maxItems = this.maxItems();
            var maxCols = this.maxCols();
            if (maxCols >= 2 && (index < maxItems - 1 || (wrap && this.isHorizontal()))) {
                this.select((index + 1) % maxItems);
            }
        }

        this.eventListener.onRight.fire();
    };
    
    //Override.
    Window_MenuCommand.prototype.cursorLeft = function(wrap) {
        if((this.index() === 0)){
            this.select(this.maxItems()-1);
        }else{
            var index = this.index();
            var maxItems = this.maxItems();
            var maxCols = this.maxCols();
            if (maxCols >= 2 && (index > 0 || (wrap && this.isHorizontal()))) {
                this.select((index - 1 + maxItems) % maxItems);
            }
        }

        this.eventListener.onLeft.fire();
    };

    //Override.
    var _Window_MenuCommand_select = Window_MenuCommand.prototype.select;
    Window_MenuCommand.prototype.select = function(index) {
        _Window_MenuCommand_select.call(this, index);

        this.eventListener.onSelect.fire();
    };

//////=============================================================================
///// Window_MenuStatus
/////  Override Window_MenuStatus.
/////=============================================================================
    var _Window_MenuStatus_initialize = Window_MenuStatus.prototype.initialize;
    Window_MenuStatus.prototype.initialize = function(x, y, width, height) {
        this.createEventListener();
        _Window_MenuStatus_initialize.call(this,x, y, width, height);
    };

    Window_MenuStatus.prototype.loadWindowskin = function() {
        if (param.windowSkin.status) {
            this.windowskin = ImageManager.loadTsumio(param.windowSkin.status);
        } else {
            Window_Base.prototype.loadWindowskin.call(this);
        }
    };

    Window_MenuStatus.prototype.createEventListener = function(){
        this.eventListener = new Map([['onUp',null],['onDown',null],['onLeft',null],['onRight',null],['onSelect',null]]);
        for(var key of this.eventListener.keys()){
            this.eventListener[key] = new EventListener();
        }
    };

    var _Window_MenuStatus_select = Window_MenuStatus.prototype.select;
    Window_MenuStatus.prototype.select = function(index) {
        _Window_MenuStatus_select.call(this, index);

        this.eventListener.onSelect.fire();
    };

    var _Window_MenuStatus_update = Window_MenuStatus.prototype.update;
    Window_MenuStatus.prototype.update = function() {
        _Window_MenuStatus_update.call(this);
        this.sVActors.update();
    };

    var _Window_MenuCommand_createContents = Window_MenuCommand.prototype.createContents;
    Window_MenuStatus.prototype.createContents = function() {
        _Window_MenuCommand_createContents.call(this);
        this.sVActors = new SVActors(this, this.lineHeight(), this.getCorrectY());
    };

    var _Window_MenuStatus_refresh = Window_MenuStatus.prototype.refresh;
    Window_MenuStatus.prototype.refresh = function() {
        _Window_MenuStatus_refresh.call(this);
        this.sVActors.modifyVisible();
    };

    Window_MenuStatus.prototype.modifySVActorsVisible = function() {
        this.sVActors.modifyVisible();
    };

    Window_MenuStatus.prototype.swapSVActors = function() {
        Debug.log('swapSVActors()でswap発生');
        this.sVActors.swap();
    };

    //If do not use chapter window, lower the contents of the status window by the height of the chapter window.
    Window_MenuStatus.prototype.getCorrectY = function() {
        var initHeight = 290;
        return this.height - initHeight;
        /*
          [Obsolete]
          return (param.shouldUseChapWin) ? 0 : this.height-initHeight;
          WHY : When user shows chapter window, the contents position will be corrupted.
                Should simply return "this.height - initHeight".
        */
    };

    //Override.
    Window_MenuStatus.prototype.drawItem = function(index) {
        if(index < this.topIndex()){
            //HACK: This is for not drawing unnecessary actor.
            //But I think there is a better solution.
            return;
        }
        var correctY   = this.getCorrectY();

        //Draw all contents.
        this.drawItemBackground(index);
        this.drawFaceImage(index, correctY);
        this.drawUpperArea(index, correctY);
        this.drawLowerArea(index, correctY);
    };

    Window_MenuStatus.prototype.drawFaceImage = function(index, correctY) {
        var actor  = $gameParty.members()[index];
        var rect   = this.itemRect(index);
        var width  = param.faceSize.width;
        var height = param.faceSize.height;
        var margin = 5;
        var lineHeight = this.lineHeight() * param.lineHeight.face;
        var y      = rect.y + margin + correctY + lineHeight;
        this.changePaintOpacity(actor.isBattleMember());
        this.drawActorFace(actor, rect.x + margin, y, width, height);
        this.changePaintOpacity(true);
    };

    Window_MenuStatus.prototype.drawUpperArea = function (index, yCorrect) {
        var actor      = $gameParty.members()[index];
        var rect       = this.itemRect(index);
        var x          = rect.x;
        var y          = rect.y + yCorrect;
        var width      = rect.width;
        var lineHeight = this.lineHeight();
        var margin     = 10;
        var levelWidth = this.drawActorLevelTMS(actor, x, y + lineHeight * param.lineHeight.level, width);
        this.drawActorClass(actor, x, y + lineHeight * param.lineHeight.class, width);
        this.drawActorName(actor, x, y + lineHeight * param.lineHeight.name, width);
        this.drawActorIcons(actor, levelWidth + margin, y + lineHeight * param.lineHeight.icons, width);
    };

    Window_MenuStatus.prototype.drawLowerArea = function (index, yCorrect) {
        var actor      = $gameParty.members()[index];
        var rect       = this.itemRect(index);
        var lineHeight = this.lineHeight();
        var width      = rect.width;
        var x = rect.x;
        this.drawActorHp(actor, x, yCorrect + lineHeight * param.lineHeight.hp,  width);
        this.drawActorMp(actor, x, yCorrect + lineHeight * param.lineHeight.mp,  width);
        this.drawTpPoint(actor, x, yCorrect + lineHeight * param.lineHeight.tp,  width);
        this.drawNextExp(index, x, yCorrect + lineHeight * param.lineHeight.exp, width);
    };

    /**
     * @return {number}
     */
    Window_MenuStatus.prototype.drawActorLevelTMS = function (actor, x, y) {
        var width   = this.textWidth(TextManager.levelA);
        var padding = 5;
        this.changeTextColor(this.systemColor());
        this.drawText(TextManager.levelA, x, y, 48);
        this.resetTextColor();
        this.drawText(actor.level, x + width + padding, y, 36, 'left');

        var resultWidth = x + width + padding + this.textWidth(actor.level);
        return resultWidth;
    };

    Window_MenuStatus.prototype.drawNextExp = function (index, x, lineHeight, width) {
        //Initialize.
        var actor           = $gameParty.members()[index];
        var rect            = this.itemRect(index);
        var requiredPercent = this.calcNextExpPercent(actor);

        //Draw gauge.
        var gaugeRate = (typeof(requiredPercent)==='number') ? requiredPercent / 100 : 0;
        var color1 = "#FFD21E";
        var color2 = "#FF9900";
        width = width || 96;
        this.drawGauge(x, lineHeight, width, gaugeRate, color1, color2);

        //Text width.
        var perWidth = this.textWidth('%');
        var expWidth = this.textWidth('EXP');
        var numWidth = this.textWidth(requiredPercent);
        var empWidth = this.textWidth('0');
        var numY     = x + rect.width - perWidth - numWidth - empWidth;
        
        //Draw text.
        this.changeTextColor(this.systemColor());
        this.drawText('EXP', x, lineHeight, expWidth,'left');
        this.resetTextColor();
        this.drawText(requiredPercent, numY, lineHeight, numWidth, 'right');
        this.changeTextColor(this.systemColor());
        this.drawText('%', x + rect.width - perWidth, lineHeight, perWidth, 'right');
        this.resetTextColor();
    }

    Window_MenuStatus.prototype.calcNextExpPercent = function (actor) {
        //Initialize
        var requiredExp       = actor.nextRequiredExp();
        var nextLevelExp      = actor.nextLevelExp();
        var currentExp        = actor.currentExp();
        var previousLevelExp  = actor.expForLevel(actor.level);//Get the previous require level exp.

        //Calculate next exp percentage.
        if (actor.level === 1) {
            return currentExp / nextLevelExp * 100;
        }else if(actor.isMaxLevel()){
            return this.calcAppropriateMaxExpExpression();
        }else{
            var pow          = Math.pow(10, 2);
            var remainingPer = 100 - (requiredExp / (nextLevelExp - previousLevelExp) * 100)//The remaining percentage
            return Math.floor(remainingPer * pow) / pow;
        }
    };

    Window_MenuStatus.prototype.calcAppropriateMaxExpExpression = function () {
        var rectWidth = this.itemWidth();
        var textMax   = '-------';
        var maxWidth  = this.textWidth(textMax);
        var textExp   = 'Exp%';
        var expWidth  = this.textWidth(textExp);
        if(maxWidth+expWidth > rectWidth){ 
            return '---';
        }else {
            return textMax;
        }
    };

    Window_MenuStatus.prototype.drawTpPoint = function (actor, x, y, width) {
        width = width || 96;
        //Get text width.
        var labelWidth = this.textWidth(TextManager.tpA);
        var valueWidth = this.textWidth('0000');//Max tp is usually 100, but should align according to other digits.
        var slashWidth = this.textWidth('/');
        //Set x position.
        var maxTpX     = x + width - valueWidth;
        var slashX     = maxTpX - slashWidth;
        var currentTpX = slashX - valueWidth;
        //Get tp color.
        var color1 = this.tpGaugeColor1();
        var color2 = this.tpGaugeColor2();
        //Draw gauge.
        this.drawGauge(x, y, width, actor.tpRate(), color1, color2);
        //Draw TP texts.
        this.changeTextColor(this.systemColor());
        this.drawText(TextManager.tpA, x, y, 44);
        this.changeTextColor(this.tpColor(actor));
        //Draw number and slash.
        this.drawText(actor.tp, currentTpX, y, valueWidth, 'right');//current
        this.drawText("/", slashX, y, slashWidth, 'right');
        this.drawText(actor.maxTp(), maxTpX, y, valueWidth, 'right');
    };

    Window_MenuStatus.prototype.windowWidth = function() {
        return Graphics.boxWidth;
    };

    Window_MenuStatus.prototype.windowHeight = function() {
        return param.statusWinHeight;
    };

    Window_MenuStatus.prototype.numVisibleRows = function() {
        return 1;
    };

    Window_MenuStatus.prototype.maxCols = function() {
        return param.statusMaxCols;
    };

//////=============================================================================
///// NTMO.TMS.Window_Chapter
/////  Window of menu for drawing chapter chars.
/////=============================================================================
    NTMO.TMS.Window_Chapter = function() {
        this.initialize.apply(this, arguments);
    };

    NTMO.TMS.Window_Chapter.prototype = Object.create(Window_Base.prototype);
    NTMO.TMS.Window_Chapter.prototype.constructor = NTMO.TMS.Window_Chapter;

    NTMO.TMS.Window_Chapter.prototype.initialize = function(x, y, width, height) {
        Window_Base.prototype.initialize.call(this, x, y, width, height);

        this.drawChapterText();
    };

    NTMO.TMS.Window_Chapter.prototype.loadWindowskin = function() {
        if (param.windowSkin.chapter) {
            this.windowskin = ImageManager.loadTsumio(param.windowSkin.chapter);
        } else {
            Window_Base.prototype.loadWindowskin.call(this);
        }
    };

    NTMO.TMS.Window_Chapter.prototype.drawChapterText = function() {
        var x     = 0;
        var y     = 0;
        var text  = (param.shouldUseHelp==='On') ? param.textHelp[0] : $gameSystem.tMenuSys().getChapterName();
        this.drawTextEx(text, x, y);
    };

    NTMO.TMS.Window_Chapter.prototype.drawHelpText = function(index) {
        var x     = 0;
        var y     = 0;
        var text  = param.textHelp[index];
        this.contents.clear();
        this.drawTextEx(text, x, y);
    };

    NTMO.TMS.Window_Chapter.prototype.reDrawContents = function(index) {
        switch(param.shouldUseHelp){
            case 'On':
            case 'Switching':
                this.drawHelpText(index);
                break;
            default:
                break;
        }
    };

//////=============================================================================
///// NTMO.TMS.Window_Tips
/////  Window of menu for drawing Tips.
/////=============================================================================
    NTMO.TMS.Window_Tips = function() {
        this.initialize.apply(this, arguments);
    };

    NTMO.TMS.Window_Tips.prototype = Object.create(Window_Base.prototype);
    NTMO.TMS.Window_Tips.prototype.constructor = NTMO.TMS.Window_Tips;

    NTMO.TMS.Window_Tips.prototype.initialize = function(x, y, width, height) {
        Window_Base.prototype.initialize.call(this, x, y, width, height);
    };

    NTMO.TMS.Window_Tips.prototype.loadWindowskin = function() {
        if (param.windowSkin.tips) {
            this.windowskin = ImageManager.loadTsumio(param.windowSkin.tips);
        } else {
            Window_Base.prototype.loadWindowskin.call(this);
        }
    };

    NTMO.TMS.Window_Tips.prototype.refresh = function() {
        this.drawTipsText($gameSystem.tMenuSys().getTips1(), 1);
        this.drawTipsText($gameSystem.tMenuSys().getTips2(), 2);
    };

    NTMO.TMS.Window_Tips.prototype.drawTipsText = function(text, tipsNum) {
        var x     = 0;
        //If 2 was set in tipsNum, draw on the lower half.
        var y     = (tipsNum===1) ? 0 : this.contentsHeight()/2;
        this.drawTextEx(text, x, y);
    };

    NTMO.TMS.Window_Tips.prototype.standardFontSize = function() {
        return param.subWinfontSize;
    };

//////=============================================================================
///// NTMO.TMS.Window_Info
/////  Window of menu for drawing detailed information.
/////=============================================================================
    NTMO.TMS.Window_Info = function() {
        this.initialize.apply(this, arguments);
    };

    NTMO.TMS.Window_Info.prototype = Object.create(Window_Base.prototype);
    NTMO.TMS.Window_Info.prototype.constructor = NTMO.TMS.Window_Info;

    NTMO.TMS.Window_Info.prototype.initialize = function(x, y, width, height) {
        Window_Base.prototype.initialize.call(this, x, y, width, height);

        this.itCountUpFrame = this.countUpFrame();
    };

    NTMO.TMS.Window_Info.prototype.countUpFrame = function*() {
        if(param.infoUpdateFrame < 0){
            return;
        }

        let frame = 0;
        while(true){
            if(frame % param.infoUpdateFrame === 0){
                this.refresh();
            }
            frame++;
            yield;
        }
    };

    NTMO.TMS.Window_Info.prototype.loadWindowskin = function() {
        if (param.windowSkin.info) {
            this.windowskin = ImageManager.loadTsumio(param.windowSkin.info);
        } else {
            Window_Base.prototype.loadWindowskin.call(this);
        }
    };

    NTMO.TMS.Window_Info.prototype.refresh = function() {
        this.contents.clear();
        
        this.drawLeftArea();
        this.drawCenterArea();
        this.drawRightArea();
    };

    NTMO.TMS.Window_Info.prototype.drawLeftArea = function() {
        var x       = Number(param.ratio[0]);//Default is 0.00.
        var locationWidth = this.textWidth(param.charsLocation);
        var fortuneWidth  = this.textWidth(param.charsFortune);
        //Location.
        this.drawInfoText(param.charsLocation, $gameMap.displayName(), x, true, locationWidth, fortuneWidth);
        //The money in player's possession.
        this.drawInfoText(param.charsFortune, $gameParty.gold()+' \\G', x, false, locationWidth, fortuneWidth);
    };

    NTMO.TMS.Window_Info.prototype.drawCenterArea = function() {
        var ratio   = Number(param.ratio[1]);//Default is 0.35.
        var x       = this.contentsWidth() * ratio;
        var unit    = ($gameSystem.isJapanese) ? '回' : 'times';
        //Width
        var combNumWidth   = this.textWidth(param.charsCombatNum);
        var playTimeWidth  = this.textWidth(param.charsPlayTime);
        //Numbers of combat.
        this.drawInfoText(param.charsCombatNum, `${$gameSystem.battleCount()} ${unit}`, x, true, combNumWidth, playTimeWidth);
        //Play Time.
        this.drawInfoText(param.charsPlayTime, $gameSystem.playtimeText(), x, false, combNumWidth, playTimeWidth);
    };

    NTMO.TMS.Window_Info.prototype.drawRightArea = function() {
        //Initialize.
        var ratio   = Number(param.ratio[2]);//Default is 0.7.
        var x       = this.contentsWidth() * ratio;
        //Try to parse
        var op1Text = this.tryToParse(param.op1Contents);
        var op2Text = this.tryToParse(param.op2Contents);
        //Drawing.
        this.drawInfoText(param.option1, op1Text, x - 100, true);
        this.drawInfoText(param.option2, op2Text, x - 100, false);
    };

    /**
     * @param {string} itemName
     * @param {string} contents
     * @param {number} x
     * @param {boolean} isUpper
     * @param {number} upperWidth
     * @param {number} bottomWidth
     */
    NTMO.TMS.Window_Info.prototype.drawInfoText = function(itemName, contents, x, isUpper, upperWidth, bottomWidth) {
        //Color settings.
        var itemNameColor = param.colorItemName;
        var contentsColor = param.colorContents;
        
        //Align.
        var margin;
        if(isUpper){
            margin = (upperWidth - bottomWidth)<0 ? Math.abs(upperWidth - bottomWidth) : 0;
        }else{
            margin = (bottomWidth - upperWidth)<0 ? Math.abs(bottomWidth - upperWidth) : 0;
        }

        //Text drawing.
        var y     = (isUpper) ? 0 : this.contentsHeight()/2;//If 'isUpper' is true, draw on the higher half.
        var text  = `\\C[${itemNameColor}]${itemName} \\C[${contentsColor}]${contents}`;
        this.drawTextEx(text, x + margin, y);
    };

    NTMO.TMS.Window_Info.prototype.standardFontSize = function() {
        return param.subWinfontSize;
    };

    NTMO.TMS.Window_Info.prototype.tryToParse = function(data) {
        data = this.tryToParseChronus(data);
        data = this.tryToParseDestination(data);

        return data;
    };

    NTMO.TMS.Window_Info.prototype.tryToParseDestination = function(data) {
        if(data !== '[Destination]'){
            //When data is not Destination, return data as is. 
            Debug.log('Dest:parse不実行');
            return data;
        }

        if('getDestination' in $gameSystem){
            Debug.log('Dest:parse実行');
            return $gameSystem.getDestination().trim();
        }else{
            return 'Destination is not found.';
        }
    };

    NTMO.TMS.Window_Info.prototype.tryToParseChronus = function(data) {
        if(data !== '[Chronus1]' && data !== '[Chronus2]'){
            //When data is not Chronus, return data as is. 
            Debug.log('Chronus:parse不実行');
            return data;
        }

        if('Game_Chronus' in window){
            //Collaborate with Chronus and acquire time data.
            //1 is Years etc.2 is 24hours.
            Debug.log('Chronus:parse実行');
            return (data==='[Chronus1]') ? $gameSystem.chronus().getDateFormat(1) : $gameSystem.chronus().getDateFormat(2);
        }else{
            return 'Chronus is not found.';
        }
    };

    NTMO.TMS.Window_Info.prototype.update = function() {
        Window_Base.prototype.update.call(this);
        this.itCountUpFrame.next();
    };

////=============================================================================
//// SVActors
////  This is a wrapper class of the side view actor.
////=============================================================================
    class SVActors {
        /**
         * @param {Window_Base} parent
         * @param {number} lineHeight
         * @param {number} correctY
         */
        constructor(parent, lineHeight, correctY) {
            this._parent      = parent;//Parent window.
            this._lineHeight  = lineHeight;
            this._correctY    = correctY;
            this._sprites     = [];

            this.create();
        }

        get parent() {
            return this._parent;
        }

        get lineHeight() {
            return this._lineHeight;
        }

        get correctY() {
            //8 is usually correction.
            return this._correctY+8;
        }

        get sprites() {
            return this._sprites;
        }

        create() {
            if(!this._canDraw()){
                return;
            }
    
            $gameParty.members().forEach(function(actor, i) {
                this.sprites[i] = new Sprite_Actor(actor);
                this.sprites[i].setBattler(actor);
                this.sprites[i].startMotion(NTMO.TMS.Base.getActorState(actor));
                this.parent.addChild(this.sprites[i]);
            }, this);
        }

        /**
         * Modify side view actors.Show and hide.
         * @param {number} topIndex
         */
        modifyVisible() {
            if(!this._canDraw()){
                return;
            }

            var topIndex = this.parent.topIndex();
    
            this.sprites.forEach(function(element, index) {
                if((index >= topIndex) && (index <= topIndex+this.parent.maxCols()-1)){
                    //When window contains the Actor.
                    element.show();
                }else{
                    //Not contains the Actor.Actor is next(or else) page.
                    element.hide();
                }
            }, this);
        }

        update() {
            if(!this._canDraw()){
                return;
            }
    
            var padding    = 20;
            //If do not use chapter window, lower the contents of the status window by the height of the chapter window.
            var y     = this.lineHeight*2 + this.correctY;
    
            $gameParty.members().forEach(function(actor, i) {
                var rect = this.parent.itemRect(i);
                this.sprites[i].startMotion(NTMO.TMS.Base.getActorState(actor));
                this.sprites[i].x = rect.x + rect.width - padding;
                this.sprites[i].y = y;
            }, this);
        }

        swap() {
            if(!this._canDraw()){
                return;
            }
    
            this.sprites.forEach(function(element, index) {
                this.parent.removeChild(element);
            }, this);
            
            this.create();
            this.modifyVisible();
        }

        /**
         * This methos is private.
         * @return {boolean}
         */
        _canDraw() {
            return $dataSystem.optSideView;
        }
    };

////=============================================================================
//// ScrollBackImages
////  This class is for scrolling back image.
////=============================================================================
    class ScrollBackImages {

        /**
         * @param {Scene_Base} parent
         * @param {string} mainFileName
         * @param {string} subFileName
         */
        constructor(parent, mainFileName, subFileName) {
            this.initialize.apply(this, arguments);
        }

        initialize(parent, mainFileName, subFileName) {
            //Initialize
            this._parent         = parent;//parent scene.
            this._backMainSprite = null;
            this._backSubSprite  = null;
            this._mainSpeedX     = 0;
            this._mainSpeedY     = 0;
            this._subSpeedX      = 0;
            this._subSpeedY      = 0;
            this._mainFileName   = mainFileName;
            this._subFileName    = subFileName;

            //Create.
            this.createSprites();
            this.moveMainSprite(0, 0, Graphics.width, Graphics.height);
            this.moveSubSprite(0, 0, Graphics.width, Graphics.height);
        }

        get mainFileName() {
            if(this._mainFileName){
                return this._mainFileName;
            }
            return null;
        }

        get subFileName() {
            if(this._subFileName){
                return this._subFileName;
            }
            return null;
        }

        get parent() {
            return this._parent;
        }

        createSprites() {
            //Create.
            this._backMainSprite = new TilingSprite(ImageManager.loadTsumio(this.mainFileName));
            this._backSubSprite  = new TilingSprite(ImageManager.loadTsumio(this.subFileName));
            //AddChild.
            this.parent.addChild(this._backMainSprite);
            this.parent.addChild(this._backSubSprite);
        }

        moveMainSprite(x, y, width, height) {
            this._backMainSprite.move(x, y, width, height);
        }

        moveSubSprite(x, y, width, height) {
            this._backSubSprite.move(x, y, width, height);
        }

        setMainSpeed(speedX, speedY) {
            this._mainSpeedX = (isFinite(speedX)) ? speedX : 0;
            this._mainSpeedY = (isFinite(speedY)) ? speedY : 0;
        }

        setSubSpeed(speedX, speedY) {
            this._subSpeedX = (isFinite(speedX)) ? speedX : 0;
            this._subSpeedY = (isFinite(speedY)) ? speedY : 0;
        }

        update() {
            this._updateOriginPosition();
        }

        _updateOriginPosition() {
            //Main.
            this._backMainSprite.origin.x += this._mainSpeedX;
            this._backMainSprite.origin.y += this._mainSpeedY;
            //Sub.
            this._backSubSprite.origin.x  += this._subSpeedX;
            this._backSubSprite.origin.y  += this._subSpeedY;
        }
    }

////=============================================================================
//// ParticleImage
////  This class implements particle image.
////=============================================================================
    class ParticleImage {
        
        /**
         * @param {Scene_Base} parent
         * @param {string} fileName
         * @param {number} opacity
         * @param {number} blendMode
         * @param {boolean} isFlashing
         */
        constructor(parent, fileName, opacity, blendMode, isFlashing) {
            this.initialize.apply(this, arguments);
        }

        initialize(parent, fileName, opacity, blendMode, isFlashing) {
            //Initialize basic settings.
            this._parent         = parent;//parent scene.
            this._particleSprite = null;
            this._speedX         = 0;
            this._speedY         = 0;
            this._fileName       = fileName;

            //Flashing settings.
            this._opacity        = Number(opacity);
            this._blendMode      = Number(blendMode);//0:Normal 1:Addition 2:Multiplication 3:Screen
            this._amp            = this._opacity / 2;//Wave amplitude
            this._phase          = 0;//Wave phase
            this._isFlashing     = isFlashing;

            //Create.
            this.createSprite();
            this.moveSprite(0, 0, Graphics.width, Graphics.height);
        }

        /**
         * CENTER_OPACITY is used to calculate flashing.
         */
        get CENTER_OPACITY() {
            return 127;// -> 255 / 2;
        }

        get fileName() {
            if(this._fileName){
                return this._fileName;
            }
            return null;
        }

        get parent() {
            return this._parent;
        }

        get blendMode() {
            return this._blendMode;
        }

        get opacity() {
            return this._opacity;
        }

        set opacity(value) {
            this._opacity = value;
        }

        createSprite() {
            //Create and set.
            this._particleSprite           = new TilingSprite(ImageManager.loadTsumio(this.fileName));
            this._particleSprite.blendMode = this.blendMode;
            this._particleSprite.opacity   = this.opacity;
            //AddChild.
            this.parent.addChild(this._particleSprite);
        }

        moveSprite(x, y, width, height) {
            this._particleSprite.move(x, y, width, height);
        }

        setSpeed(speedX, speedY) {
            this._speedX = (isFinite(speedX)) ? speedX : 0;
            this._speedY = (isFinite(speedY)) ? speedY : 0;
        }

        isFlashing() {
            return this._isFlashing;
        }

        /**
         * Count up wave phase for flashing.
         */
        countUpWavePhase() {
            this._phase++;
        }

        update() {
            this.updateOriginPosition();
            this.updateOpacity();
        }

        updateOriginPosition() {
            this._particleSprite.origin.x += this._speedX;
            this._particleSprite.origin.y += this._speedY;
        }

        updateOpacity() {
            if(this.isFlashing()){
                //Get new opacity.
                var d         = Math.sin(this._phase * Math.PI / 180);
                this.opacity  = d * this._amp + this.CENTER_OPACITY;
                this.countUpWavePhase();
                //Set new opacity.
                this._particleSprite.opacity = this.opacity;
            }
        }
    }

////=============================================================================
//// EventListener
////  This class is event listener for window system.
////  I use the class syntax to test the class syntax.There is no deep meaning.
////=============================================================================
    class EventListener {
        constructor() {
            this._callbacks  = [];
        }

        register(fnc) {
            if(fnc && typeof(fnc) === 'function'){
                this._callbacks.push(fnc);
            }
        }

        fire() {
            for(var fnc of this._callbacks){
                fnc();
            }
        }
    };

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
            return 'TsumioMenuSystem';
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
