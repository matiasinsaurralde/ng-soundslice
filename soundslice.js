angular.module( 'soundslice', []).
  directive( 'score', function() {
    return {
      restrict: 'E',
      link: function( scope, element, attrs ) {
        var html = '<iframe src="https://www.soundslice.com/scores/' + attrs.id + '/embed/" width="100%" height="500" frameBorder="0" allowfullscreen></iframe>';
        element.html( html );
      }
    };
  });
