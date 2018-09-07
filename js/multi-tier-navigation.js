$(function(){

    var $MTV = function(){
        this.init = function(){
            this.prep();
        }
        this.prep = function(){
            console.log('this is prep');
        }
    }

    var $mNav = new $MTV();
    $mNav.init();

});