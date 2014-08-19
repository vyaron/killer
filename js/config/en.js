module.exports = function($translateProvider) {
    var lang = localStorage.getItem('lang');
    if(lang == 1) {
        var a = 'he';
    }else {
        var a = 'en';
    }
    $translateProvider.preferredLanguage(a);
}