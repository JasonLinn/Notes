//IIFEs
(function (global) {
    console.log('123');
    var Greetr = function(firstName,lastName,language){
        return new Greetr.init(firstName,lastName,language);
    }
    Greetr.prototype = {};
    Greetr.init = function(firstName,lastName,language){
        var _self = this;
        _self.firstName = firstName || '';
        _self.lastName = lastName || '';
        _self.language = language || 'zh-tw';
    }
    Greetr.init.prototype = Greetr.prototype;
    global.Greetr = global.G$ = Greetr;


    console.log(G$('Jason','Lin'));
})(window)