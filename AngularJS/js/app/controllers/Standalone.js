/**
 * This is a standalone controller, don't need modules to be loaded
 */

function StandaloneCtrl($scope){
    $scope.message = "Hello world !";
    
    $scope.inputValue = "Change me !";
    
    $scope.people = [
        {
            firstname: 'Jonas',
            visa: 'JRE'
        },
        {
            firstname: 'Claudio',
            visa: 'CPI'
        },
        {
            firstname: 'François',
            visa: 'FBU'
        }
    ];
    
    $scope.showInput = function(){
        alert($scope.inputValue);
    }
    
    /**
     * Remove the given person from the list
     */
    $scope.remove = function(person){
        for(var i = 0; i < $scope.people.length; i ++){
            if($scope.people[i] == person){
                $scope.people.splice(i, 1);
            }
        }
    }
    
    /**
     * Get new person informations
     */
    $scope.addPeople = function(){
        var firstname, visa;
        
        firstname = prompt("Firstname :");
        visa = prompt("Visa :");
        
        $scope.people.push({
            firstname: firstname,
            visa: visa
        })
    }
}