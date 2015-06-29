angular.module( 'soundslice', []).
  directive( 'score', function() {
    return {
      restrict: 'E',
      link: function( scope, element, attrs ) {

        /*

          notation options:
           show_tab = 0
           show_staff = 0
           show_chords = 0
           show_track_names = 0
           zoom=X (default = 0, between -25 and 25)

          audio options:
            defer = 1
            recording_idx = x

          video options:
            force_side_video = 1
            narrow_video_height = X

          other options:
            fretboard = 1

        */

        var html = '<iframe src="https://www.soundslice.com/scores/' + attrs.id + '/embed/" width="100%" height="500" frameBorder="0" allowfullscreen></iframe>';
        element.html( html );
      }
    };
  });
