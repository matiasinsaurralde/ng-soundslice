ng-soundslice
===

Simple module to integrate [Soundslice](http:///www.soundslice.com) (interactive music scores) with AngularJS

This is part of [Guru De La Guitarra](http://www.gurudelaguitarra.com/).

## Usage

This module provides a directive that looks like this:

``` html
<score id="score.id" show_staff="0" play_type="3" fretboard="1"></score>

<score id="1001" show_staff="0" play_type="3" fretboard="1"></score>
```

## Instructions

In scoreController you're reciving the [Player Events](https://www.soundslice.com/help/player-api/#events) from the [Javascript API of Soundslice](https://www.soundslice.com/help/player-api/)

``` javascript
$rootScope.$on( 'soundsliceEvent', function( e, ssEvent ) {
  console.log( 'Receiving event', ssEvent )
  console.log( ssEvent.method );
})
```

You may pass all the attributes supported by the [Player API](https://www.soundslice.com/help/player-api/).

## License

[MIT](https://github.com/matiasinsaurralde/ng-soundslice/blob/master/LICENSE)
