Crafty DebugBar
===========

With Crafty DebugBar you can create your games faster.

##What can I do with Crafty DebugBar?
 * view a human readable entities list
 * change the attributes of a choosen entity
 * manage entity (add/remove) components 
 * easily print entity objects in the browser console
 * show/hide entities
 * make an entity draggable, move an entity and read the new position's attributes

##How can you use this?

```javascript
Crafty.modules({ 'crafty-debug-bar': 'release' }, function () {
    Crafty.debugBar.show();
});
```

##Plans for future relases
 * entity selector (like in firebug)
 * easily show entity hitbox polygons
 * performance graph (entity numbers, drawing time)
 * pause/play, fast-forward
 * current browser and browser support information
 * list of loaded assets (images, sounds)
 * sprite management

##How does it look?
![Crafty DebugBar](http://dl.dropbox.com/u/141331/debugbar.PNG)