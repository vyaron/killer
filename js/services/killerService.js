angular.module('killerService', []).service('killerService', ['webStorage',
    function(webStorage) {
        this.numPlayers = 0;
        //this.players = [];
        //this.currentPlayer = {};
        this.winner = {};
        this.he = ['קלמנטינה', 'בת-יענה', 'קמצן', 'משוגע', 'טלויזיה', 'קופיף', 'מחשבון', 'משחק', 'פלזמה', 'ארנבים', 'ארגזים', 'עקום', 'מגלשיים', 'חוטם', 'גילבוע', 'כרמל', 'שדרנית', 'משקפי שמש', 'פירחוני', 'צבוע', 'גיבעה', 'שלהבת', 'קרוקס', 'טרומבון', 'מולקולה', 'סינגפור', 'סווטלנה', 'סברי מרנן', 'מפלצת', 'טריבונה', 'שיהוק', 'מחברת', 'נוכל', 'ביקוש', 'צרפתיה', 'עקרב', 'חצוצרה', 'שלג', 'בולגרית', 'חפרפרת', 'צינורות', 'דחליל', 'דמקה', 'שקשוקה'];
        this.en = ['orange', 'nervous', 'snail', 'trust', 'TV', 'monkey', 'calculator', 'game', 'impulse', 'rabbits', 'boxes', 'chunky', 'excited', 'nose', 'yoke', 'wine', 'humdrum', 'woebegone', 'thankful', 'addicted', 'proud', 'crazy', 'dolls', 'stupid', 'advice', 'shaky', 'bikes', 'army', 'guide', 'ruthless', 'slow', 'dress', 'idiotic', 'amusing', 'abstracted', 'language', 'offer', 'jail', 'swing', 'psychotic', 'brass', 'sneeze', 'industry', 'glorious'];
        this.currentLang = this.en;
        this.words = _.shuffle(this.currentLang);


        this.changeWordsLang = function(lang)
        {
            this.words = _.shuffle(this[lang]);

        }
        this.setNumberPlayers = function(numPlayers) {
            this.numPlayers = numPlayers;
        }
        // this.setPlayers = function(players) {
        //     this.players = _.shuffle(players);
        // }
        this.setPlayersToSession = function(players) {
            webStorage.local.add('players',players);
        }
        this.getPlayersFromSession = function() {
            return webStorage.local.get('players');
        }
         this.setCurrentPlayerToSession = function(player) {
            webStorage.local.add('currentPlayer', player);
        }
        this.getCurrentPlayerFromSession = function() {
            return webStorage.local.get('currentPlayer');
        }
        // this.setCurrentPlayer = function(player) {
        //     this.currentPlayer = player;
        // }
        this.setWinner = function(winner) {
            this.winner = winner;
        }
        this.newGame = function() {
            webStorage.local.remove('currentPlayer');
            webStorage.local.remove('players');
        }
        this.setLang = function(lang) {

            webStorage.local.add('lang', lang);
        }
        this.getLang = function(lang) {
            return webStorage.local.get('lang');
        }


    }
]);