angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats, $log) {
  //$log.debug("ChatsCtrl");
  Chats.all().then(function(result){
    $scope.chats = result;
    $log.debug("$scope.chats :"+ JSON.stringify($scope.chats)  );
  });

  $scope.remove = function(chat) {
    Chats.remove(chat);
  }

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats, $log) {
  Chats.get($stateParams.chatId).then(function(result){
    $scope.chat = result;
    $log.debug("$scope.chat :"+ JSON.stringify($scope.chat)  );
  });
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
