/******************************************************************************
* app */
/** 
* Main application module.
******************************************************************************/
var app = angular.module("app", ["ngRoute", "ui.grid", "ui.grid.expandable", "ui.grid.autoResize", "ui.bootstrap",
  "ui.grid.saveState", "ui.grid.edit", "ui.grid.draggable-rows"]);

/******************************************************************************
* Config - Route Provider */
/** 
* Configure the route provide.
******************************************************************************/
app.config(function($routeProvider)
  {
  $routeProvider
  .when('/',                  {template: "<welcome></welcome>"})
  .when('/dice',              {template: "<dice></dice>"})
  .when('/initiativeTracker', {template: "<initiative-tracker></initiative-tracker>"})
  .when('/characterSheet',    {template: "<character-sheet></character-sheet>"});
  //.otherwise(       {templateUrl: "app/error.html"});
  });
