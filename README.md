ng-soundslice
===

Simple module to integrate [Soundslice](http:///www.soundslice.com) (interactive music scores) with AngularJS

This is part of [Guru De La Guitarra](http://www.gurudelaguitarra.com/).

## Usage

This module provides a directive that looks like this:

```
<score id="{{ score.id }}" show_staff="0" play_type="3" fretboard="1"></score>

<score id="1001" show_staff="0" play_type="3" fretboard="1"></score>
```

You may pass all the attributes supported by the [Player API](https://www.soundslice.com/help/player-api/).
