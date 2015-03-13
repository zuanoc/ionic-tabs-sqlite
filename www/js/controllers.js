angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  
  $scope.chats = Chats.all();

  $scope.getAll = function() {
    $scope.chats = Chats.all();
    console.log($scope.chats);
  }
  
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
