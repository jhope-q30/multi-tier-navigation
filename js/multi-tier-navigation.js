$(function(){

    var $MTV = function($args){
        this.target = $($args.target);
        this.init = function(){
            this.prep();
        }
        this.prep = function(){

            var $this = this;
            
            $(this.target).find('ul').each(function(){

                var $parent = $(this).parent();

                if($($parent).children().length > 1){

                    /* add open class + click */

                    $($parent)
                        .addClass('has-sub')
                        .prepend('<span>&nbsp;</span>')

                    $sub_nav = $($parent).find('span').eq(0);
                    $($sub_nav).click(function(){

                        $(this).parent().toggleClass('open');

                    });

                }

            });

        }
    }

    var $mNav = new $MTV({ target: '#multi-tier-nav' });
    $mNav.init();

});