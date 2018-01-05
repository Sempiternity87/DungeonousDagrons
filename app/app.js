/******************************************************************************
* app */
/** 
* Main application module.
******************************************************************************/
var app = angular.module('app', ['ngRoute']);

/******************************************************************************
* Config - Route Provider */
/** 
* Configure the route provide.
******************************************************************************/
app.config(function($routeProvider)
  {
  $routeProvider
  //.when('/',        {templateUrl: "index.html"}) //TODO CH  FOR SOME REASON  I GET MASSIVE NG-VIEW RECURSION IF USE INDEX IN ROUTE
  .when('/',                  {template: "<welcome></welcome>"})
  .when('/dice',              {template: "<dice></dice>"})
  .when('/initiativeTracker', {template: "<initiative-tracker></initiative-tracker>"})
  .when('/characterSheet',    {template: "<character-sheet></character-sheet>"});
  //.otherwise(       {templateUrl: "app/error.html"});
  });
