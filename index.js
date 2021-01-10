
Hooks.once('init', async function() {
    game.settings.register('Shortcuts', 'Enable', {
        name: 'Enable preconfigured shortcuts',
        default: false,
        type: Boolean,
        scope: 'world',
        config: true,
        hint: 'Enable preconfigured shortcuts'
    });
});



Hooks.on('canvasReady', function(){
  (function shortcuts($) {
    $('body').on('keydown', (e) => {
      var t = e.target;
      console.log(e.keyCode)
  
      if(t.className.match(/vtt.*game/)) {
        switch(e.keyCode) {
          case 84: /* token target */
            $('#controls > li.scene-control[data-control="token"]').click()
            $('#controls > li.scene-control[data-control="token"] > ol > li[data-tool="target"]').click();
            break;
          case 85: /* token unselect */
            game.user.targets.forEach((t) => {t.setTarget(false, game.user, true, false)});
            canvas.tokens.releaseAll();
            break;
          case 89: /* token select */
            $('#controls > li.scene-control[data-control="token"]').click()
            $('#controls > li.scene-control[data-control="token"] > ol > li[data-tool="select"]').click();
            break;
          case 82: /* ruler */
            $('#controls > li.scene-control[data-control="token"]').click()
            $('#controls > li.scene-control[data-control="token"] > ol > li[data-tool="ruler"]').click();
            break;
        
        }
      }
    })
  })(jQuery);
});