angular.module('CalculatorAppAngular', [])
.controller('calculatorController', function($scope) {
    $scope.summa = function() {
        if ($scope.operator == '+') {
            return $scope.a + $scope.b;
        }
        if ($scope.operator == '-') {
            return $scope.a - $scope.b;
        }
        if ($scope.operator == '*') {
            return $scope.a * $scope.b;
        }
        if ($scope.operator == '/') {
            return $scope.a / $scope.b;
        }
    };
});

