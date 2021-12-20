var app = angular.module('todoApp', []);

app.controller('MainCtrl', ['$scope', function($scope, $http){
  $scope.todoList = [{
      tarefa: ' Mantenção Preventiva',
      setor: ' TI',
      datai: ' 20/01/2022',
      dataf: ' 20/02/2022',
      completed: false
    },
    {
      tarefa: ' Entrega de Alimento',
      setor: ' RH',
      datai: ' 22/12/2021',
      dataf: ' 20/01/2022',
      completed: false
    },
    {
      tarefa: ' Acesso remoto Clinete',
      setor: ' TI',
      datai: ' 01/12/2021',
      dataf: ' 29/01/2022',
      completed: false
    }
  ];

  function Task() {
    this.tarefa = '';
    this.setor = '';
    this.datai = '';
    this.dataf = '';
    this.completed = false;
  }

  function updateProgress() {
    $scope.progress = {
      total: $scope.todoList.length,
      getProgress: function() {
        var complete = 0;
        $scope.todoList.forEach(function(item) {
          if (item.completed) {
            complete++;
          }
        });
        return (complete * 100) / this.total + '%';
      }
    }
  }


  $scope.task = new Task();

  $scope.addItem = function() {
    $scope.todoList.push($scope.task);
    $scope.task = new Task();
    updateProgress();
  }

  $scope.editarTasks = function() {
    var newList = [];
    $scope.todoList.forEach(function(item) {
      if (!item.completed) {
        newList.push(item);
      }
    });
  }

  $scope.deleteTasks = function() {
    var newList = [];
    $scope.todoList.forEach(function(item) {
      if (!item.completed) {
        newList.push(item);
      }
    });

    $scope.todoList = newList;
    updateProgress();
  }

  updateProgress();
}]);
