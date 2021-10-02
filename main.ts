controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy += -150
    }
})
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level1`)
scene.setBackgroundImage(assets.image`Brick`)
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
assets.animation`Gremblo jump`,
100,
characterAnimations.rule(Predicate.MovingUp)
)
characterAnimations.loopFrames(
mySprite,
assets.animation`Gremblo fall`,
100,
characterAnimations.rule(Predicate.MovingDown)
)
characterAnimations.loopFrames(
mySprite,
assets.animation`Gremblo Idle`,
1000,
characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
)
characterAnimations.loopFrames(
mySprite,
assets.animation`Gremblo Idle0`,
1000,
characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
)
characterAnimations.loopFrames(
mySprite,
assets.animation`Gremblo Idle`,
100,
characterAnimations.rule(Predicate.MovingRight, Predicate.FacingRight)
)
characterAnimations.loopFrames(
mySprite,
assets.animation`Gremblo Idle0`,
100,
characterAnimations.rule(Predicate.MovingLeft, Predicate.FacingLeft)
)
