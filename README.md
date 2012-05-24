Crafty DebugBar
===========

With Crafty DebugBar you can create your games faster.

##What You can do with Crafty DebugBar?
 * view human readable entities list
 * change attributes for choosen entity
 * manage entity (add/remove) components 
 * easly print entity object in browser console.
 * show/hide entity
 * make entity draggable, move entity and read new position atributes

##How You can use this

```javascript
Crafty.modules({ 'crafty-debug-bar': 'release' }, function () {
    Crafty.debugBar.show();
});
```

##What will come?
 * entities selector (like in firebug)
 * easy show entity hitboxes polygons
 * performance grap (entities number, draw time)
 * pause/play, frames forward
 * current browser information, browser support
 * loaded assets (images, sounds)
 * sprites management

##How it look?
![Crafty DebugBar](http://dl.dropbox.com/u/141331/debugbar.PNG)