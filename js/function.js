var TempApp = {
    lgWidth: 1200,
    mdWidth: 992,
    smWidth: 768,
    resized: false,
    iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
    touchDevice: function() { return navigator.userAgent.match(/iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile/i); }
};

function isLgWidth() { return $(window).width() >= TempApp.lgWidth; } // >= 1200
function isMdWidth() { return $(window).width() >= TempApp.mdWidth && $(window).width() < TempApp.lgWidth; } //  >= 992 && < 1200
function isSmWidth() { return $(window).width() >= TempApp.smWidth && $(window).width() < TempApp.mdWidth; } // >= 768 && < 992
function isXsWidth() { return $(window).width() < TempApp.smWidth; } // < 768
function isIOS() { return TempApp.iOS(); } // for iPhone iPad iPod
function isTouch() { return TempApp.touchDevice(); } // for touch device

$(document).ready(function() {

    // Хак для клика по ссылке на iOS
    if (isIOS()) {
        $(function(){$(document).on('touchend', 'a', $.noop)});
    }

   	fontResize();
});

$(window).resize(function(event) {
	checkOnResize()
});

function checkOnResize() {
    var windowWidth = $(window).width();
    // Запрещаем выполнение скриптов при смене только высоты вьюпорта (фикс для скролла в IOS и Android >=v.5)
    if (TempApp.resized == windowWidth) { return; }
    TempApp.resized = windowWidth;

   	fontResize();
}

function fontResize() {
    var windowWidth = $(window).width();
    var fontSize = windowWidth/12;
    if (windowWidth <= 1690) {
    	var fontSize = windowWidth/8;
    }
    if (windowWidth <= 1280) {
    	var fontSize = windowWidth/7;
    }
    if (windowWidth <= 991) {
    	var fontSize = windowWidth/7;
    }
    if ($(window).height() <= 420) {
    	var fontSize = windowWidth/9;
    }
	$('.main__content').css('fontSize', fontSize + '%');
}

