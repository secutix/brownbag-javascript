/**
 * Create a simple module with some services
 */

angular.module('BrownbagApp', ['ngResource']).
    service('taxCalculator', function(){
        this.calculate = function(value){
            return value * 0.08;
        }
    }).
    filter('money', function(){
        return function(value, currency){
            var currentCurrency = currency == undefined ? 'CHF' : currency;
            
            return parseFloat(value).toFixed(2) + " (" + currentCurrency + ")";
        }
    }).
    factory('framework', function($resource){
        return $resource('api/frameworks.json', {}, {
            query: {method:'GET', isArray:true}
        });
    });