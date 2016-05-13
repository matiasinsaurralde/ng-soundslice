angular.module( 'musicApp', [ 'soundslice' ] )
  .controller( 'scoreController', function( $rootScope ) {
    var self = this;

    self.id = 12802;

    $rootScope.$on( 'soundsliceEvent', function( e, ssEvent ) {
      console.log( 'Receiving event', ssEvent );
      // Player Events
      var data = JSON.parse(ssEvent.data);
      var timeStamp = ssEvent.timeStamp;
      console.log(data.method);
      console.log(timeStamp);
      
    })
    
  });