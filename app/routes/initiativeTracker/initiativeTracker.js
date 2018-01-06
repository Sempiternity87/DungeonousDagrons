(function()
  {
  "use strict"

  angular.module("app")
 
  /*****************************************************************************
  * Component: InitiativeTracker */
  /**
  * Defines the component for the Initiative Tracker.
  *****************************************************************************/
  .component("initiativeTracker",
    {
    templateUrl:"app/routes/initiativeTracker/initiativeTracker.html",
    controller: InitiativeTrackerController
    });
    
  /*****************************************************************************
  * InitiativeTrackerController */
  /**
  * Controller for the Initiative Tracker component.
  *****************************************************************************/
  function InitiativeTrackerController($scope)
    {
    /** Reference to self. */ var mThis = this;
    var id = 0;
    
    /** Definition for an object on the grid. */
    mThis.trackableObj =
      {
      name: "", //Name of character.
      init: 0,  //Initiative.
      hp: 0,    //Health Points.
      ac: 0,    //Armor Class.
      bab: 0,   //Base Attack Bonus.
      cmb: 0,   //Combat Maneuver Bonus.
      cmd: 0,   //Combat Maneuver Defense.
      id: 0     //ID of object.
      };
    
    mThis.trackerGrid = 
      {
      rowTemplate: '<div grid="grid" class="ui-grid-draggable-row" draggable="true"><div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader, \'custom\': true }" ui-grid-cell></div></div>',
      appScopeProvider: $scope,
      minRowsToShow: 5,
      enableColumnMenus: false,
      enableFiltering: false,
      enableSorting: false,
      enableCellEditOnFocus: true,
      columnDefs:[{field: "name", displayName: "Name"},
                  {field: "init", displayName: "Initiative"},
                  {field: "hp",   displayName: "HP"},
                  {field: "ac",   displayName: "AC"},
                  {field: "bab",  displayName: "BAB"},
                  {field: "cmb",  displayName: "CMB"},
                  {field: "cmd",  displayName: "CMD"},
                  {field: "id",   displayName: "-", cellTemplate:"<button ng-click='grid.appScope.$ctrl.remove(row.entity.id)'>Remove</button>"}],
      data: []
      };
      
    /**************************************************************************
    * $onInit */
    /**
    * Initialize the controller.
    **************************************************************************/
    mThis.$onInit = function()
      {
      };
      
    /**************************************************************************
    * add */
    /**
    * Adds a new row to the data grid.
    **************************************************************************/
    mThis.add = function()
      {
      id++;
      mThis.trackerGrid.data.push({id: id});
      };
      
    /**************************************************************************
    * remove */
    /**
    * Removes object from Tracker Grid.
    **************************************************************************/
    mThis.remove = function(id)
      {
      mThis.trackerGrid.data = mThis.trackerGrid.data.filter(function(e){ return e.id != id; });
      };
      
    }//END InitiativeTrackerController
  })();