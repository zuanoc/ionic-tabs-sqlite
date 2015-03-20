angular.module('starter.services', [])
/*
.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlin',
    lastText: 'Did you get the ice cream?',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
*/

// DB wrapper  https://gist.github.com/jgoux/10738978
.factory('DB', function($q, $log) {
    var self = this;
    self.db = null;
 
    self.init = function() {
        $log.debug("import prepopulated sqlite database....");
        window.sqlitePlugin.importPrepopulatedDatabase({file: "chat.db", "importIfExists": true});

        // Use self.db = window.sqlitPelugin.openDatabase({name: DB_CONFIG.name}); in production
        //self.db = window.openDatabase("chat.db", '1.0', 'database', -1);
        $log.debug("Opening sqlite database  ");
        self.db = window.sqlitePlugin.openDatabase({name: "chat.db"});
        $log.debug("Opening sqlite database ok... ");
        $log.debug(" inicio la bd ", self.db)
    };
 
    self.query = function(query, bindings) {
        $log.debug(query);
        bindings = typeof bindings !== 'undefined' ? bindings : [];
        var deferred = $q.defer();
 
        self.db.transaction(function(transaction) {
            $log.debug(" db.transaction ");
            transaction.executeSql(query, bindings, function(transaction, result) {
                deferred.resolve(result);
            }, function(transaction, error) {
                deferred.reject(error);
            });
        });
 
        return deferred.promise;
    };
 
    self.fetchAll = function(result) {
        $log.debug(" fetchAll ");
        var output = [];
 
        for (var i = 0; i < result.rows.length; i++) {
            //$log.debug( JSON.stringify( result.rows.item(i)  ));
            output.push(result.rows.item(i));
        }
        $log.debug(JSON.stringify(output));
        return output;
    };
 
    self.fetch = function(result) {
        $log.debug(" fetch "); 
        return result.rows.item(0);
    };
 
    return self;
})
// Resource service example
.factory('Chats', function(DB, $log) {
    var self = this;
    
    self.all = function() {
        $log.debug("chats->all...");
        return DB.query('SELECT id, name, face, last_text FROM chats order by id')
        .then(function(result){
            return DB.fetchAll(result);
        });
    };
    
    self.get = function(id) {
        return DB.query('SELECT * FROM chats WHERE id = ?', [id])
        .then(function(result){
            return DB.fetch(result);
        });
    };
    return self;
})
;
///////////////////////////////////////////////////////////////////////////////