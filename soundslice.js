angular.module( 'soundslice', [] ).
  directive( 'score', function($window, $rootScope) {
    return {
      scope: {
        options: '=',
        id: '='
      },
      link: function( scope, element, attrs ) {

        $window.addEventListener('message', function(event) {
          if (event.origin === "https://www.soundslice.com") {
              event = JSON.parse(event.data);
              $rootScope.$emit( 'soundsliceEvent', event );
          }
        })
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

        function rewrite_attr( name ) {
          var newname = '';

          name.split('').forEach( function( ch ) {
            var lowercase_ch = ch.toLowerCase();
            if( lowercase_ch != ch ) {
              newname += '_';
            };
            newname += lowercase_ch;
          });

          return newname;

        };

        attrs.$observe( 'id', function( v ) {
          var attrs_body = '';

          for( attr_key in attrs.$attr ) {
            var value = attrs[ attr_key ],
                attr = [ rewrite_attr(attr_key), value ].join( '=' );
            attrs_body += '&' + attr;
          };

          attrs_body = attrs_body.slice( 1, attrs_body.length );

          // always enable API
          attrs_body += '&api=1';

          var html = '<iframe id="soundslice-score" src="https://www.soundslice.com/scores/' + scope.id + '/embed/?' + attrs_body + '" width="100%" height="500" frameBorder="0" allowfullscreen></iframe>';
          element.html( html );
        });

      }
    };
  });
