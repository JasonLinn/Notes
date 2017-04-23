/*
    select 點選時變成tab頁籤形式
    版本： 1.0
    作者： Mi70
    先建構optionTabCheck
    裡面帶兩個值分別為 , 哪一個select 和要顯示隱藏對象的名稱
    var name = new optionTabCheck(target,who);
    在呼叫裡面的方法changing()
    name.changing()

*/
    //設定option選到切換建構子
    var optionTabCheck = function(tagName, changeName) {
            this.tagName = tagName; //主要的select是誰
            this.changeName = changeName; //需要改變的類別名
            this.newTag; //存放新的option
            this.oldTag = changeName + "0"; //存放新的option

        }
        //變更時觸發
    optionTabCheck.prototype.changing = function() {
        var callChangeName = this.changeName;
        var callOldTag = this.oldTag;
        $(this.tagName).change(function() {
            //目前選到option是誰
            this.newTag = callChangeName + this.selectedIndex;
            //判斷有無類別存在
            if ($(this.newTag).length > 0) {
                $(this.newTag).css("display", "block");
            }
            //替換舊的並把其他隱藏
            $(callOldTag).css("display", "none");
            callOldTag = this.newTag;
        })
    }