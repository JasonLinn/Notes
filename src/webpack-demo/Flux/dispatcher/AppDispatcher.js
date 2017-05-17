import Flux from 'flux';
// window.App.AppDispatcher = new Flux.Dispatcher();

var Dispatcher = new Flux.Dispatcher();
var callMe = function(e){
    console.log('calssMe');
};

var token1 = Dispatcher.register(callMe);

