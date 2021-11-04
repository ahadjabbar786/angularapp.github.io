 const URL = "http://covid19.mathdro.id/api";
let app=angular.module('myApp',[]);

app.controller('MyCtrl',($scope,$http)=>{
    // this is controller
    $scope.tittle="stay home stay safe";

    console.log("App Loaded");


    $http.get(URL).then(
        (response)=>{
        //success coading
        console.log("Inside Success");
        console.log(response.data);
        $scope.all_data=response.data;


    },
    (error) =>{

        console.log(error)
    
    }
    );


    //get country

    $scope.get_c_data =() =>{
        let country=$scope.c;
        if(country==""){
            $scope.c_data = undefined

            return;
        }
        $http.get(`${URL}/countries/${country}`)
        .then((response) =>{
          console.log(response.data)
          $scope.c_data=response.data;
        }, (error)=>{
            console.log(error);
        }

        );
    };


   
});
