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
