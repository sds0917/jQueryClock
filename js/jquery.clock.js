/**
 * 基于jQuery、CSS3开发时钟插件
 * @author 孙东升
 * @date 2017年5月12日
 */
;
(function($, window, document, undefined) {

    var Clock = function(ele, opt) {
        this.$ele = ele;
        this.defaults = {
            width: 400,
            height: 400,
            background: '#EAEAEA',
            nColor: '#000000',
            hColor: '#000000',
            mColor: '#000000',
            sColor: '#000000',
            spotColor: '#000000'
        };
        this.options = $.extend({}, this.defaults, opt);
    };

    Clock.prototype = {
        beautify: function() {
            var opt = this.options;
            this.$ele.css({
                width: opt.width,
                height: opt.height,
                borderRadius: '50%',
                position: 'relative',
                boxShadow: '0px 0px 10px 1px #000000'
            });
            this.initNum();
        },
        initNum: function() {
            var opt = this.options,
                _rotate = [0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96, 102, 108, 114, 120, 126, 132, 138, 144, 150, 156, 162, 168, 174];
            this.$ele.find('.num').remove().end().append('<ul class="num">\
            	<li class="fontsize">\
            		<div>12</div>\
            		<div>6</div>\
            	</li>\
            	<li class="s"><div>-</div><div>-</div></li><li class="s"><div>-</div><div>-</div></li><li class="s"><div>-</div><div>-</div></li><li class="s"><div>-</div><div>-</div></li>\
            	<li>\
            		<div>1</div>\
            		<div>7</div>\
            	</li>\
            	<li class="s"><div>-</div><div>-</div></li><li class="s"><div>-</div><div>-</div></li><li class="s"><div>-</div><div>-</div></li><li class="s"><div>-</div><div>-</div></li>\
            	<li>\
            		<div>2</div>\
            		<div>8</div>\
            	</li>\
            	<li class="s"><div>-</div><div>-</div></li><li class="s"><div>-</div><div>-</div></li><li class="s"><div>-</div><div>-</div></li><li class="s"><div>-</div><div>-</div></li>\
            	<li class="rotate fontsize">\
            		<div>3</div>\
            		<div>9</div>\
            	</li>\
            	<li class="s"><div>-</div><div>-</div></li><li class="s"><div>-</div><div>-</div></li><li class="s"><div>-</div><div>-</div></li><li class="s"><div>-</div><div>-</div></li>\
            	<li class="rotate">\
            		<div>4</div>\
            		<div>10</div>\
            	</li>\
            	<li class="s"><div>-</div><div>-</div></li><li class="s"><div>-</div><div>-</div></li><li class="s"><div>-</div><div>-</div></li><li class="s"><div>-</div><div>-</div></li>\
            	<li class="rotate">\
            		<div>5</div>\
            		<div>11</div>\
            	</li>\
            	<li class="s"><div>-</div><div>-</div></li><li class="s"><div>-</div><div>-</div></li><li class="s"><div>-</div><div>-</div></li><li class="s"><div>-</div><div>-</div></li>\
            </ul>').find('.num').css({
                height: opt.height,
                left: (opt.width - 40) / 2,
                width: 40,
                position: 'absolute'
            }).find('li').css({
                listStyle: 'none',
                height: opt.height,
                width: 40,
                position: 'absolute',
                textAlign: 'center',
                fontSize: '16px'
            }).each(function(j) {
                $(this).css({
                    transform: 'rotate(' + _rotate[j] + 'deg)'
                }).find('>div').css({
                    color: opt.nColor,
                    width: 40,
                    fontSize: ($(this).hasClass('fontsize') ? (opt.width / 16) : (opt.width / 20)),
                    fontWeight: ($(this).hasClass('fontsize') ? 'bold' : ''),
                    position: 'absolute',
                    transform: ('rotate(' + ($(this).hasClass('s') ? '90' : ('-' + _rotate[j])) + 'deg)')
                }).eq(1).css({
                    bottom: 0
                });
            });
            this.initPointer();
        },
        initPointer: function() {
            var opt = this.options,
                _w = 20,
                _sw = 2,
                _mw = 4,
                _hw = 6;
            this.$ele.find('.pointer').remove().end().append('<div class="pointer">\
            	<div class="spot"></div>\
            	<div class="hour"></div>\
            	<div class="minute"></div>\
            	<div class="second"></div>\
            </div>').find('.pointer').css({
                position: 'absolute',
                height: opt.height,
                width: _w,
                left: (opt.width - _w) / 2
            }).find('.spot').css({
                width: _w,
                height: _w,
                position: 'absolute',
                top: (opt.height - _w) / 2,
                background: opt.spotColor,
                borderRadius: '50%',
            }).end().find('.second').css({
                position: 'absolute',
                height: opt.height,
                left: (_w - _sw) / 2,
                width: _sw
            }).each(function() {
                $(this).append($('<div/>', {
                    css: {
                        width: _sw,
                        background: opt.sColor,
                        height: $(this).height() * 0.4,
                        marginTop: $(this).height() * 0.1,
                        borderTopLeftRadius: '50%',
                        borderTopRightRadius: '50%'
                    }
                }));
            }).end().find('.minute').css({
                position: 'absolute',
                height: opt.height,
                left: (_w - _mw) / 2,
                width: _mw
            }).each(function() {
                $(this).append($('<div/>', {
                    css: {
                        height: _mw,
                        background: opt.mColor,
                        height: $(this).height() * 0.3,
                        marginTop: $(this).height() * 0.2,
                        borderTopLeftRadius: '50%',
                        borderTopRightRadius: '50%'
                    }
                }));
            }).end().find('.hour').css({
                position: 'absolute',
                height: opt.height,
                left: (_w - _hw) / 2,
                width: _hw
            }).each(function() {
                $(this).append($('<div/>', {
                    css: {
                        height: _hw,
                        background: opt.hColor,
                        height: $(this).height() * 0.25,
                        marginTop: $(this).height() * 0.25,
                        borderTopLeftRadius: '50%',
                        borderTopRightRadius: '50%'
                    }
                }));
            });
            this.initDateStr();
        },
        initDateStr: function() {
            var $ele = this.$ele,
                opt = this.options;
            $('<div/>', {
                css: {
                    width: opt.width,
                    position: 'absolute',
                    top: (opt.height * 0.6),
                    textAlign: 'center',
                    fontSize: opt.width / 15
                },
                'class': 'datestr'
            }).appendTo($ele);
            this.initPosition();
        },
        initPosition: function() {
            var $ele = this.$ele,
                opt = this.options;
            setInterval(function() {
                var now = new Date(),
                    _y = now.getFullYear(),
                    _mo = (now.getMonth() + 1),
                    _d = now.getDate(),
                    _h = now.getHours(),
                    _m = now.getMinutes(),
                    _s = now.getSeconds();
                $ele.find('.second').css({
                    transform: ('rotate(' + (_s * 6) + 'deg)')
                }).end().find('.minute').css({
                    transform: ('rotate(' + (_m * 6 + (_s * 0.1)) + 'deg)')
                }).end().find('.hour').css({
                    transform: ('rotate(' + (_h * 30 + (_m * 0.5)) + 'deg)')
                }).end().find('.datestr').html(_y + '-' + ((_mo < 10 ? '0' : '') + _mo) + '-' + ((_d < 10 ? '0' : '') + _d) + '<br/>' + ((_h < 10 ? '0' : '') + _h) + ':' + ((_m < 10 ? '0' : '') + _m) + ':' + ((_s < 10 ? '0' : '') + _s));
            }, 1000);
        }
    };

    $.fn.clock = function(options) {
        return this.each(function(i, el) {
            new Clock($(this), options).beautify();
        });
    };
})(jQuery, window, document);
