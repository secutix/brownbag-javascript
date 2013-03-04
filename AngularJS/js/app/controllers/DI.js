/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


function DICtrl($scope, taxCalculator, framework){
    
    $scope.amount = 100;
    
    $scope.frameworks = framework.query();
    
    $scope.calculateTaxes = function(amount){
        //call injected service from MyApp.js
        return taxCalculator.calculate(amount);
    }
    
}