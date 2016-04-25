ng-soundslice
===

Simple module to integrate [Soundslice](http:///www.soundslice.com) (interactive music scores) with AngularJS

This is part of [Guru De La Guitarra](http://www.gurudelaguitarra.com/).

## Usage

### Directive

This module provides a directive that looks like this:

``` html
<score id="score.id" show_staff="0" play_type="3" fretboard="1"></score>

<score id="1001" show_staff="0" play_type="3" fretboard="1"></score>
```

You may pass all the attributes supported by the [Player API](https://www.soundslice.com/help/player-api/).

### Events

You may listen for ```soundsliceEvent``` in ```$rootScope```, these events are described in the [documentation](https://www.soundslice.com/help/player-api/#events).

``` javascript
$rootScope.$on( 'soundsliceEvent', function( e, ssEvent ) {
  console.log( 'Receiving event', ssEvent );
  // Player Events
  console.log( ssEvent.method );
})
```

## License

[MIT](https://github.com/matiasinsaurralde/ng-soundslice/blob/master/LICENSE)
