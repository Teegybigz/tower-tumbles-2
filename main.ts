controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy += -150
    }
})
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 3 3 3 3 3 3 . . . . . . 
    . . 3 3 3 . . . . 3 3 3 3 3 . . 
    . 3 3 . . . . . . . . . . 3 3 . 
    . 3 . . . . . 3 . . . . . . 3 3 
    . 3 3 . . . . 3 3 . . . 3 . . 3 
    . . 3 . . . . . . . . . 3 . . 3 
    . . 3 3 . . . . . . . . 3 . . 3 
    . . . 3 . . 3 3 . . . . . . . 3 
    . . . 3 3 . . 3 3 . . . 3 . . 3 
    . . . . 3 . . . 3 3 . 3 . . . 3 
    . . . . 3 3 . . . . 3 3 . . . 3 
    . . . . . 3 3 . . . . . . . 3 3 
    . . . . . . . 3 3 3 3 3 3 3 3 . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 62))
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
mySprite.ay += 300
characterAnimations.loopFrames(
mySprite,
assets.animation`Gremblo Idle`,
1000,
characterAnimations.rule(Predicate.FacingRight)
)
characterAnimations.loopFrames(
mySprite,
assets.animation`Gremblo Idle0`,
200,
characterAnimations.rule(Predicate.FacingLeft)
)
