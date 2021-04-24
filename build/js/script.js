/* components */

/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-webp-setclasses !*/
!function(e,n,A){function o(e,n){return typeof e===n}function t(){var e,n,A,t,a,i,l;for(var f in r)if(r.hasOwnProperty(f)){if(e=[],n=r[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(A=0;A<n.options.aliases.length;A++)e.push(n.options.aliases[A].toLowerCase());for(t=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],l=i.split("."),1===l.length?Modernizr[l[0]]=t:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=t),s.push((t?"":"no-")+l.join("-"))}}function a(e){var n=u.className,A=Modernizr._config.classPrefix||"";if(c&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+A+"no-js(\\s|$)");n=n.replace(o,"$1"+A+"js$2")}Modernizr._config.enableClasses&&(n+=" "+A+e.join(" "+A),c?u.className.baseVal=n:u.className=n)}function i(e,n){if("object"==typeof e)for(var A in e)f(e,A)&&i(A,e[A]);else{e=e.toLowerCase();var o=e.split("."),t=Modernizr[o[0]];if(2==o.length&&(t=t[o[1]]),"undefined"!=typeof t)return Modernizr;n="function"==typeof n?n():n,1==o.length?Modernizr[o[0]]=n:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=n),a([(n&&0!=n?"":"no-")+o.join("-")]),Modernizr._trigger(e,n)}return Modernizr}var s=[],r=[],l={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var A=this;setTimeout(function(){n(A[e])},0)},addTest:function(e,n,A){r.push({name:e,fn:n,options:A})},addAsyncTest:function(e){r.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=l,Modernizr=new Modernizr;var f,u=n.documentElement,c="svg"===u.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;f=o(e,"undefined")||o(e.call,"undefined")?function(e,n){return n in e&&o(e.constructor.prototype[n],"undefined")}:function(n,A){return e.call(n,A)}}(),l._l={},l.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},l._trigger=function(e,n){if(this._l[e]){var A=this._l[e];setTimeout(function(){var e,o;for(e=0;e<A.length;e++)(o=A[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){l.addTest=i}),Modernizr.addAsyncTest(function(){function e(e,n,A){function o(n){var o=n&&"load"===n.type?1==t.width:!1,a="webp"===e;i(e,a&&o?new Boolean(o):o),A&&A(n)}var t=new Image;t.onerror=o,t.onload=o,t.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],A=n.shift();e(A.name,A.uri,function(A){if(A&&"load"===A.type)for(var o=0;o<n.length;o++)e(n[o].name,n[o].uri)})}),t(),a(s),delete l.addTest,delete l.addAsyncTest;for(var p=0;p<Modernizr._q.length;p++)Modernizr._q[p]();e.Modernizr=Modernizr}(window,document);
//=include ../../bower_components/jquery/dist/jquery.min.js
//=include ../../bower_components/vanilla-lazyload/dist/lazyload.js
//=include ../../bower_components/fancybox/dist/jquery.fancybox.js
//=include ../../bower_components/slick-carousel/slick/slick.min.js
//=include ../../bower_components/jquery.maskedinput/dist/jquery.maskedinput.js
//=include ../../bower_components/select2/dist/js/select2.js
//=include ../../bower_components/select2/dist/js/i18n/ru.js

var uikit = {

    mask: function() {
        $('[data-mask]').each(function () {
            $(this).mask($(this).data('mask'));
        })
    },

    validation: function () {
        var
          classValidate = 'is-validate',
          classParent = '.form-group',
          classError = 'is-error';
        function error(el) {
            $(el)
              .addClass(classError)
              .removeClass(classValidate)
              .closest(classParent)
              .addClass(classError)
              .removeClass(classValidate);
        }
        function validate(el) {
            $(el)
              .removeClass(classError)
              .addClass(classValidate)
              .closest(classParent)
              .removeClass(classError)
              .addClass(classValidate);
        }
        function reset(el) {
            $(el)
              .removeClass(classValidate + ' ' + classError)
              .closest(classParent)
              .removeClass(classError)
              .removeClass(classValidate + ' ' + classError)
        }
        $('.form-control').focus(function () {
            reset($(this))
        });
        $('select').change(function () {
            reset($(this))
        });
        $('input[type="checkbox"]').change(function () {
            reset($(this))
        });
        function checkInput(el) {
            var $form = $(el);
            $form.find('select.js-required').each(function () {
                if ($(this).val() != '') {
                    validate($(this));
                } else {
                    error($(this));
                }
            });
            $form.find('input[type=text].js-required').each(function () {
                if ($(this).val() != '') {
                    validate($(this));
                } else {
                    error($(this));
                }
            });
            $form.find('input[type=password].js-required').each(function () {
                if ($(this).val() != '') {
                    validate($(this));
                } else {
                    error($(this));
                }
            });
            if ($('.js-pass1', $form).length != 0) {
                var pass01 = $form.find('.js-pass1').val();
                var pass02 = $form.find('.js-pass2').val();
                if (pass01 == pass02) {
                    validate($('.js-pass1, .js-pass2', $form));
                }else{
                    error($('.js-pass1, .js-pass2', $form));
                }
            }
            $form.find('textarea.js-required').each(function () {
                if ($(this).val() != '') {
                    validate($(this));
                } else {
                    error($(this));
                }
            });
            $form.find('input[type=email]').each(function () {
                var regexp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i;
                var $this = $(this);
                if ($this.hasClass('js-required')) {
                    if (regexp.test($this.val())) {
                        validate($this);
                    } else {
                        error($this);
                    }
                } else {
                    if ($this.val() != '') {
                        if (regexp.test($this.val())) {
                            validate($this);
                        } else {
                            error($this);
                        }
                    } else {
                        reset($this)
                    }
                }
            });

            $form.find('input[type=checkbox].js-required').each(function () {
                if ($(this).is(':checked')) {
                    validate($(this));
                } else {
                    error($(this));
                }
            });
        }

        $('.js-submit').click(function () {
            var $form = $(this).closest('form');
            checkInput($form);
            var errors = $form.find('.is-error:visible').length;
            if (errors) {
                return false;
            }
        });
    },

    footerEmpty: function() {
        if ($('.footer-empty').length) {
          $('.footer-empty').height($('footer').outerHeight());
        }
    },

    tabs: function() {
        $('[data-tab]').click(function (e) {
            e.preventDefault();
            let tab = typeof ($(this).attr('href')) != 'undefined'?  $(this).attr('href'): $(this).attr('data-tab');
            if (typeof ($(this).attr('data-parent'))!= 'undefined') {
                $('[href="'+tab+'"], [data-tab="'+tab+'"]').closest($(this).attr('data-parent')).addClass('is-active').siblings().removeClass('is-active');
            } else {
                $(this).addClass('is-active').siblings().removeClass('is-active');
            }
            $(tab).addClass('is-visible').siblings().removeClass('is-visible');
        });
    },

    select: function () {
        $('.form-select').each(function () {
            let pl = $(this).attr('placeholder'),
              search = (typeof $(this).data('search') != "undefined") ? '' : Infinity,
              addClass = typeof $(this).data('class') != "undefined" ? $(this).data('class') : '' ;
            $(this).select2({
                language: 'ru',
                placeholder: pl,
                minimumResultsForSearch: search
            })
              .on('select2:open', function (e) {
                  $('.select2-dropdown').addClass(addClass);
              });
        });


    },

    lazy: function() {

        function logElementEvent(eventName, element) {
        }
        var callback_enter = function (element) {
        };
        var callback_exit = function (element) {
        };
        var callback_loading = function (element) {
        };
        var callback_loaded = function (element) {
        };
        var callback_error = function (element) {
        };
        var callback_finish = function () {
        };
        var callback_cancel = function (element) {

        };

        var lazyLoadOb = new LazyLoad({
            class_applied: "lz-applied",
            class_loading: "lz-loading",
            class_loaded: "lz-loaded",
            class_error: "lz-error",
            class_entered: "lz-entered",
            class_exited: "lz-exited",
            // Assign the callbacks defined above
            callback_enter: callback_enter,
            callback_exit: callback_exit,
            callback_cancel: callback_cancel,
            callback_loading: callback_loading,
            callback_loaded: callback_loaded,
            callback_error: callback_error,
            callback_finish: callback_finish
        });
        lazyLoadOb.update();
    },

    mainInit: function () {
        this.validation();
        this.footerEmpty();
        this.tabs();
        this.select();
        this.mask();
    }
};
$(document).ready(function () {
    uikit.mainInit();

});
var clrTimeOut;
$(window).on('load', function (e) {
    clearTimeout(clrTimeOut);
    clrTimeOut = setTimeout(function () {
        uikit.footerEmpty();
    }, 200);
});

$(window).resize(function () {
    clearTimeout(clrTimeOut);
    clrTimeOut = setTimeout(function () {
        uikit.footerEmpty();
    }, 200);

});

$(window).scroll(function () {
});


