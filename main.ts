enum ActionKind {
    walking_right,
    walking_left,
    standing_right,
    standing_left,
    Walking,
    Idle,
    Jumping,
    Patrolling
}
namespace SpriteKind {
    export const background = SpriteKind.create()
}
function create_Titan () {
    Titan = sprites.create(img`
        . . . . d d 1 1 1 d d . . . . . 
        . . . . d 1 f f f 1 d . . . . . 
        . . . . d 1 f f f 1 d d . . . . 
        . . . d d 1 f f f 1 d d . . . . 
        . . d d d 1 1 1 1 1 d d d d . . 
        d d d d d d d d d d d d d d . . 
        d d d d d d d d d d d d d d d d 
        . d d . d d d d d d . d d d d d 
        . . . . . d d d d d . . . . . . 
        . . . . . 9 d d 9 9 . . . . . . 
        . . . . . 9 9 9 9 9 9 9 . . . . 
        . . . . . 9 9 9 9 9 9 9 . . . . 
        . . . . 9 9 9 9 9 9 9 9 9 . . . 
        . . . 9 9 9 . . . 9 9 9 9 . . . 
        . . 9 9 9 9 . . . . 9 9 9 9 9 . 
        d d d d d d . . . . d d d d d d 
        `, SpriteKind.Player)
    controller.moveSprite(Titan, 50, 0)
    Titan.ay = 290
    scene.cameraFollowSprite(Titan)
    scene.placeOnRandomTile(Titan, 9)
    create_walking_animation()
    create_stand_animation()
}
function create_walking_animation () {
    anim_walk_left = animation.createAnimation(ActionKind.walking_left, 200)
    anim_walk_left.addAnimationFrame(img`
        . . . . . . d d d . . . . . . . 
        . . . . . . 1 1 d . . . . . . . 
        . . . . . . f 1 d . . . . . . . 
        . . . . . . f 1 d . . . . . . . 
        . . . . . . f 1 d . . . . . . . 
        . . . . . . 1 1 d . . . . . . . 
        . . . . . . d d d . . . . . . . 
        . . . . . . . d d . . . . . . . 
        . . d . . . d d d d . . . . . . 
        . . d . . . d d d d d d . . . . 
        . . d d d d d d d d d d d d . . 
        . . . . . . d d d d d . . d . . 
        . . . . . . d d d d d . . d . . 
        . . . . . . 9 9 9 9 9 9 . . . . 
        . . . . . 9 9 9 9 9 9 9 9 . . . 
        . . . d d 9 9 9 . . . d d . . . 
        `)
    anim_walk_left.addAnimationFrame(img`
        . . . . . . d d d . . . . . . . 
        . . . . . . 1 1 d . . . . . . . 
        . . . . . . f 1 d . . . . . . . 
        . . . . . . f 1 d . . . . . . . 
        . . . . . . f 1 d . . . . . . . 
        . . . . . . 1 1 d . . . . . . . 
        . . . . . . d d d . . . . . . . 
        . . . . . . . d d . . . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . . d d d d d d d . d . . . 
        . . . . d . d d d d d d d . . . 
        . . . . . . d d d d d . . . . . 
        . . . . . . d d d d d . . . . . 
        . . . . . . 9 9 9 9 9 9 . . . . 
        . . . . . 9 9 9 9 9 9 9 9 . . . 
        . . . d d 9 9 . . . . d d . . . 
        `)
    anim_walk_left.addAnimationFrame(img`
        . . . . . . d d d . . . . . . . 
        . . . . . . 1 1 d . . . . . . . 
        . . . . . . f 1 d . . . . . . . 
        . . . . . . f 1 d . . . . . . . 
        . . . . . . f 1 d . . . . . . . 
        . . . . . . 1 1 d . . . . . . . 
        . . . . . . d d d . . . . . . . 
        . . . . . . . d d . . . . . . . 
        . . d . . . d d d d . . . . . . 
        . . d . . . d d d d d d . . . . 
        . . d d d d d d d d d d d d . . 
        . . . . . . d d d d d . . d . . 
        . . . . . . d d d d d . . d . . 
        . . . . . . 9 9 9 9 9 9 . . . . 
        . . . . . 9 9 9 9 9 9 9 9 . . . 
        . . . d d 9 9 9 . . . d d . . . 
        `)
    anim_walk_left.addAnimationFrame(img`
        . . . . . . d d d . . . . . . . 
        . . . . . . 1 1 d . . . . . . . 
        . . . . . . f 1 d . . . . . . . 
        . . . . . . f 1 d . . . . . . . 
        . . . . . . f 1 d . . . . . . . 
        . . . . . . 1 1 d . . . . . . . 
        . . . . . . d d d . . . . . . . 
        . . . . . . . d d . . . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . . d d d d d d d . d . . . 
        . . . . d . d d d d d d d . . . 
        . . . . . . d d d d d . . . . . 
        . . . . . . d d d d d . . . . . 
        . . . . . . 9 9 9 9 9 9 . . . . 
        . . . . . 9 9 9 9 9 9 9 9 . . . 
        . . . d d 9 9 . . . . d d . . . 
        `)
    anim_walk_right = animation.createAnimation(ActionKind.walking_right, 200)
    anim_walk_right.addAnimationFrame(img`
        . . . . . . . d d d . . . . . . 
        . . . . . . . d 1 1 . . . . . . 
        . . . . . . . d 1 f . . . . . . 
        . . . . . . . d 1 f . . . . . . 
        . . . . . . . d 1 f . . . . . . 
        . . . . . . . d 1 1 . . . . . . 
        . . . . . . . d d d . . . . . . 
        . . . . . . . d d . . . . . . . 
        . . . . . . d d d d . . . d . . 
        . . . . d d d d d d . . . d . . 
        . . d d d d d d d d d d d d . . 
        . . d . . d d d d d . . . . . . 
        . . d . . d d d d d . . . . . . 
        . . . . 9 9 9 9 9 9 . . . . . . 
        . . . 9 9 9 9 9 9 9 9 . . . . . 
        . . . d d . . . 9 9 9 d d . . . 
        `)
    anim_walk_right.addAnimationFrame(img`
        . . . . . . . d d d . . . . . . 
        . . . . . . . d 1 1 . . . . . . 
        . . . . . . . d 1 f . . . . . . 
        . . . . . . . d 1 f . . . . . . 
        . . . . . . . d 1 f . . . . . . 
        . . . . . . . d 1 1 . . . . . . 
        . . . . . . . d d d . . . . . . 
        . . . . . . . d d . . . . . . . 
        . . . d . . d d d d . . . . . . 
        . . . d d d d d d d d d . . . . 
        . . . . d d d d d d . d . . . . 
        . . . . . d d d d d . . . . . . 
        . . . . . d d d d d . . . . . . 
        . . . . 9 9 9 9 9 9 . . . . . . 
        . . . 9 9 9 9 9 9 9 9 . . . . . 
        . . . d d . . . . 9 9 d d . . . 
        `)
    anim_walk_right.addAnimationFrame(img`
        . . . . . . . d d d . . . . . . 
        . . . . . . . d 1 1 . . . . . . 
        . . . . . . . d 1 f . . . . . . 
        . . . . . . . d 1 f . . . . . . 
        . . . . . . . d 1 f . . . . . . 
        . . . . . . . d 1 1 . . . . . . 
        . . . . . . . d d d . . . . . . 
        . . . . . . . d d . . . . . . . 
        . . . . . . d d d d . . . d . . 
        . . . . d d d d d d . . . d . . 
        . . d d d d d d d d d d d d . . 
        . . d . . d d d d d . . . . . . 
        . . d . . d d d d d . . . . . . 
        . . . . 9 9 9 9 9 9 . . . . . . 
        . . . 9 9 9 9 9 9 9 9 . . . . . 
        . . . d d . . . 9 9 9 d d . . . 
        `)
    anim_walk_right.addAnimationFrame(img`
        . . . . . . . d d d . . . . . . 
        . . . . . . . d 1 1 . . . . . . 
        . . . . . . . d 1 f . . . . . . 
        . . . . . . . d 1 f . . . . . . 
        . . . . . . . d 1 f . . . . . . 
        . . . . . . . d 1 1 . . . . . . 
        . . . . . . . d d d . . . . . . 
        . . . . . . . d d . . . . . . . 
        . . . d . . d d d d . . . . . . 
        . . . d d d d d d d d d . . . . 
        . . . . d d d d d d . d . . . . 
        . . . . . d d d d d . . . . . . 
        . . . . . d d d d d . . . . . . 
        . . . . 9 9 9 9 9 9 . . . . . . 
        . . . 9 9 9 9 9 9 9 9 . . . . . 
        . . . d d . . . . 9 9 d d . . . 
        `)
    animation.attachAnimation(Titan, anim_walk_left)
    animation.attachAnimation(Titan, anim_walk_right)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("x = " + Math.trunc(Titan.x) + " y = " + Math.trunc(Titan.y))
})
function create_walls () {
    scene.setBackgroundColor(1)
    scene.setTile(7, img`
        d d d 5 d 1 d d d d d 1 d d d d 
        d d d 5 d 1 d d d d d 1 d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d 5 d d d d d 
        d d d d d d d d d d d d d d d d 
        d d 5 d d d d d d d d d d d d d 
        d d d d d d d d d d 5 5 d d d d 
        d d d d d d d d d d d d d d d d 
        d d 5 d d d d d d d d d d d d d 
        d d 5 d d d d d d d d d d d d d 
        d d d d d d d d d d d d d 1 d d 
        d d d 1 d d d d 5 d d d d d d d 
        d d d 1 1 d d d d d d d d d d d 
        d 5 d d d d d d d d d d d 5 d d 
        d 5 5 d d d d d d d d d d d 5 d 
        d d d d d d d d d d d d d d d d 
        `, true)
    scene.setTile(14, img`
        f f f f f f f f f f f f f f f f 
        f c c c f f f f f f f f c c c f 
        f c c c f f f e f f f f c c c f 
        f c c c f f f f f f f f c c c f 
        f f f e e f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f c c c f f f e f f f f f f f 
        f f c c c f f f f f f f f f f f 
        f f c c c f f f f f f f f f e f 
        f f f f f f f f f f f f f f f f 
        e f f f f f f f f c c c f f f f 
        f f f f e e f f f c c c f f f f 
        f f f f f f f f f c c c f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        `, true)
    scene.setTile(2, img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 4 4 4 5 5 5 4 4 4 4 5 5 5 
        4 4 5 5 5 4 4 4 4 4 4 5 5 5 5 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        2 2 4 4 4 4 4 2 2 2 2 4 4 4 2 2 
        4 4 4 4 2 2 2 4 4 4 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, true)
    scene.setTile(10, img`
        . . . . . . . . . . b b b b b b 
        . . . . . . . . . b b b . b . b 
        . . . . . . . . b b . b . b . b 
        . . . . . . . . b b . b . b . b 
        . . . . . . . b b b . b . b . b 
        . . . . . . . b . b . b . b . b 
        . . . . . . . b . b . b . b . b 
        . . . . . . . b . b . b . b . b 
        . . . . . . . b b b . b . b . b 
        . . . . . . . b 1 b . b . b . b 
        . . . . . . . b 1 b . b . b . b 
        . . . . . . . b b b . b . b . b 
        . . . . . . . b . b . b . b . b 
        . . . . . . . b . b . b . b . b 
        . . . . . . . b b b b b b b b b 
        . . . . . . . b b b b b b b b b 
        `, true)
    scene.setTile(9, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, false)
    scene.setTile(5, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, false)
    scene.setTile(3, img`
        5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 1 7 7 
        7 7 7 1 1 7 7 7 7 7 7 7 1 7 1 7 
        7 7 3 1 1 3 7 7 7 5 7 7 6 1 6 7 
        7 1 1 6 6 1 1 7 7 5 7 7 7 7 7 7 
        7 d 1 7 7 1 d 7 7 6 7 7 7 7 7 7 
        7 6 3 1 1 3 6 7 7 7 7 5 7 7 7 7 
        7 7 6 d d 6 7 7 7 7 5 5 6 7 7 7 
        7 7 7 7 7 7 7 1 7 7 5 6 7 7 7 7 
        7 7 7 7 7 7 1 7 1 7 7 7 1 1 7 7 
        7 7 1 7 7 7 6 1 6 7 7 3 1 1 3 7 
        7 1 7 1 7 7 7 7 7 7 1 1 6 6 1 1 
        7 6 1 6 7 7 7 7 7 7 d 1 7 7 1 d 
        7 7 7 7 7 7 7 7 7 7 6 3 1 1 3 6 
        7 7 7 7 7 7 7 7 7 7 7 6 d d 6 7 
        7 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `, true)
    scene.setTile(1, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, true)
    scene.setTile(4, img`
        d d d d d d d d d d d d d d d d 
        d d d 1 1 d d d d d d d d b d d 
        d d d 1 1 d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d b d d d d d d b b d d d d d 
        d d d d d d d d d b b d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d b d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        1 1 d d d d d d d d d d d d d d 
        1 1 d d d d d d d d d d b d d d 
        d d d d d d 1 d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d b d 
        `, true)
    scene.setTile(6, img`
        . . . . . . d d . . . . . d d . 
        . . . d d . d b d . d d . d b d 
        . . d b e d b b d . d b d e b d 
        . . d b b b b e d . d b e b b d 
        . . . d e b e e d d d b b b d . 
        . . . . d d e e d e d e b b d . 
        . . . . d b d e d b b d e e d . 
        d d . d b b d d d d b b d e d . 
        d b d d b e e d b d b e d e d . 
        d b b e b e b e b b b d d d d d 
        . d b b b d b b e b e d d b b d 
        . . d b b d d b b b e d b b e . 
        d d d e b e d d e b e e b e d d 
        d b b b b b d d d b e b b b b d 
        . d d e e b e e d e b b e d d . 
        . . . d e b b e e e e b d . . . 
        `, false)
    scene.setTile(8, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . c c c c 6 . . . . . 
        . . . . c c 6 7 7 5 5 6 6 . . . 
        . . c c 6 6 6 6 7 5 5 7 c c . . 
        . c 6 6 6 7 7 7 7 7 7 5 6 c c . 
        . c 6 6 7 7 7 5 7 6 7 7 7 6 c c 
        c 6 6 7 7 6 7 7 7 6 7 7 6 6 6 c 
        c c 6 6 6 7 6 7 6 6 6 6 5 7 6 c 
        c c c c 6 7 7 6 7 7 7 6 7 6 6 c 
        . c c 6 6 6 6 c 6 6 6 6 6 c c c 
        . c c 6 6 c 6 6 c 6 c 6 6 c c . 
        . . c c f f 6 6 c f f c c f . . 
        . . . . c f c c c f c f f . . . 
        . . . . . 4 f f f c . e . . . . 
        . . . . . . e e e . . 4 . . . . 
        . . . . . . . e e . e . . . . . 
        `, false)
    scene.setTile(11, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 8 8 . . . . 
        . . . 8 8 . . . . . 8 8 . . . . 
        . . . 8 7 8 . . . 8 7 8 . . . . 
        . . . 8 7 6 8 . 8 8 7 8 . . . . 
        . . . 8 6 7 8 . 8 7 7 8 . 8 8 . 
        . . . 8 8 7 8 8 8 7 7 8 . 8 6 8 
        8 8 8 8 8 7 6 8 6 7 6 8 8 8 8 6 
        6 8 8 8 8 7 7 8 7 7 8 8 6 7 8 6 
        8 8 8 8 8 7 7 8 7 6 8 7 7 6 8 8 
        7 6 8 8 8 6 7 6 7 6 6 7 6 8 8 7 
        8 8 8 7 6 6 7 6 7 6 7 7 8 8 7 7 
        `, false)
}
function create_Enemies () {
    if (level == 1) {
        campe.setPosition(467, 216)
        campe_Action()
        animation.setAction(campe, ActionKind.Patrolling)
    } else if (level == 2) {
        threeSisters1.setFlag(SpriteFlag.Invisible, false)
        threeSisters2.setFlag(SpriteFlag.Invisible, false)
        threeSisters3.setFlag(SpriteFlag.Invisible, false)
        threeSisters1.setFlag(SpriteFlag.Ghost, false)
        threeSisters2.setFlag(SpriteFlag.Ghost, false)
        threeSisters3.setFlag(SpriteFlag.Ghost, false)
        threeSisters1.setPosition(80, 60)
        threeSisters2.setPosition(203, 60)
        threeSisters3.setPosition(369, 50)
    } else if (level == 3) {
        cerberus.setFlag(SpriteFlag.Invisible, false)
        cerberus.setFlag(SpriteFlag.Ghost, false)
        cerberus.setPosition(423, 72)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Titan.isHittingTile(CollisionDirection.Bottom)) {
        Titan.vy = -140
    }
})
function clear_level () {
    for (let value of sprites.allOfKind(SpriteKind.Food)) {
        value.destroy()
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    scroller.scrollBackgroundWithSpeed(10, 0)
    animation.setAction(Titan, ActionKind.walking_left)
})
scene.onHitTile(SpriteKind.Player, 10, function (sprite) {
    if (keyObtained == 0) {
        game.splash("The door is locked...")
        scene.placeOnRandomTile(Titan, 9)
    } else {
        if (level == 3) {
            game.splash("You crawl out of Tartarus, ready for revenge...")
            game.over(true)
        } else if (level == 2) {
            level += 1
            game.splash("You make your way", "to Elysium...")
            setup_level()
            scene.placeOnRandomTile(Titan, 9)
        } else {
            level += 1
            game.splash("You make your way", "to Asphodel Meadow...")
            setup_level()
            scene.placeOnRandomTile(Titan, 9)
        }
        keyObtained += -1
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    scroller.scrollBackgroundWithSpeed(0, 0)
    animation.setAction(Titan, ActionKind.standing_right)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    scroller.scrollBackgroundWithSpeed(0, 0)
    animation.setAction(Titan, ActionKind.standing_left)
})
function story_Intro () {
    story.printText("A hero named Odysseus had slain you,", 80, 60)
    story.printText("and you have been trapped in Tartarus for few centuries... ", 80, 60)
    story.printText("But you've been biding your time for escape,", 80, 60)
    story.printText("and today is the day...", 80, 60)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    scroller.scrollBackgroundWithSpeed(-10, 0)
    animation.setAction(Titan, ActionKind.walking_right)
})
function create_Keys () {
    tile_list = scene.getTilesByType(5)
    for (let value2 of tile_list) {
        key = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . f f f . 
            . . . f f f . . . . . f 1 1 f . 
            . . f 1 1 1 f f . f f 1 1 1 f . 
            . . . f f 1 1 1 f 1 1 1 1 f . . 
            . . . . . f f 1 f 1 5 1 f . . . 
            . . . . . . f 1 f 5 1 1 f . . . 
            . . . . . f 1 1 1 f f f . . . . 
            . . . . . f 1 5 1 1 1 1 f . . . 
            . . . f f f 5 1 1 f f 1 f . . . 
            . . f 1 1 1 f f f . f 1 1 f . . 
            . . f 1 5 1 f . . . . f 1 f . . 
            . . f 5 1 1 f . . . . f 1 f . . 
            . . f f f f . . . . . . f . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
        scene.place(value2, key)
        animation.runMovementAnimation(
        key,
        animation.animationPresets(animation.bobbing),
        2000,
        true
        )
    }
}
function setup_level () {
    clear_level()
    create_map()
    create_Enemies()
    create_Keys()
    set_Sprites_Invisible()
    scroller.scrollBackgroundWithSpeed(0, 0)
}
scene.onHitTile(SpriteKind.Player, 1, function (sprite) {
    info.changeLifeBy(-1)
    level = 1
    game.splash("You fell all the way", "to Tartarus... ")
    setup_level()
    scene.placeOnRandomTile(Titan, 9)
    music.zapped.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    keyObtained += 1
    otherSprite.destroy()
    music.jumpUp.play()
    game.splash("You found a key!")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.background, function (sprite, otherSprite) {
	
})
function create_map () {
    if (level == 1) {
        create_walls()
        scene.setTileMap(img`
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeee.eeeeeeeee
            eeeee.eeeeeeeeeeeeeee..eeeeeeeee
            ..ee......eeeee.eeee....eeeeeeee
            5..e.......eee..ee......eeeeeeee
            ...e..e....ee...e........eeeeeee
            ee....ee........e...........eeee
            9.e................eee.......eee
            ...e.....eee..........e......eee
            ...............eeee...e.e.......
            .....eee..............e..e......
            .............ee................a
            ..ee....e..................eeeee
            ee2222222eee22222222222222222222
            `)
    } else if (level == 2) {
        create_walls()
        scene.setTileMap(img`
            33343333333334333333334333333334
            34444443333334433333444433333334
            4444444444344443333444..4333334.
            4444..44.434..434444....4334444.
            444......434..44444......4344...
            44.....5.444...4......66.444...a
            4......6..4...........776.4...67
            4......7..........666..77....677
            99.666.....6.....6777......6.7..
            ...777.....766...7..7.666.67...6
            66....6.66..7766.7....777.7...67
            77....7.77...777......2222....77
            ........7.........2222eeee2222..
            .222222..222222222eeeeeeeeeeee22
            2eeeeee22eeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            `)
    } else {
        create_walls()
        scene.setTileMap(img`
            ................................
            ..........8b....................
            ..........33.b....8...........ba
            .............333..33.........333
            ....b.833.............33bb.bb3..
            5...333...b........b8...33333...
            .b8.......33.....3333...........
            333...........bb.........b......
            ...3........b.33.b..b.8.33......
            ..........b.3....3..333.........
            ........b.3.....................
            9.......3.......................
            ....b.8b........................
            8.b.3333........................
            333.............................
            33311111111111111111111111111111
            `)
    }
}
function campe_Action () {
    anim_Campe_Patrol = animation.createAnimation(ActionKind.Patrolling, 1000)
    anim_Campe_Patrol.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c . . . . . . . . 
        . . c c 5 5 5 5 c c . . . . . . 
        . c 5 5 5 5 5 5 5 5 c . . . . . 
        c 5 5 5 5 5 1 2 5 5 5 c . . . . 
        c 5 5 5 5 5 2 2 5 5 5 5 c . . . 
        c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
        c c b b 1 b 5 5 5 5 5 5 d c . . 
        c 5 2 2 2 5 5 5 5 5 d d d c . . 
        f b f 5 5 5 5 5 5 5 d d d c . . 
        f . f b b c 5 5 b d d d d c . . 
        f f f b c 5 5 b b d d d d c c c 
        . f c c c c c d d d d d d d d c 
        . f . c c c c d 5 5 b d d c c . 
        . . c b b c c c 5 5 b c c . . . 
        . . c c c c c d 5 5 c . . . . . 
        `)
    anim_Campe_Patrol.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c c . . . . 
        . . . . . . c c 5 5 5 5 c c . . 
        . . . . . c 5 5 5 5 5 5 5 5 c . 
        . . . . c 5 5 5 2 1 5 5 5 5 5 c 
        . . . c 5 5 5 5 2 2 5 5 5 5 5 c 
        . . . c 5 5 5 5 5 5 5 5 5 5 5 c 
        . . c d 5 5 5 5 5 5 b 1 b b c c 
        . . c d d d 5 5 5 5 5 2 2 2 5 c 
        . . c d d d 5 5 5 5 5 5 5 f b f 
        . . c d d d d b 5 5 c b b f . f 
        c c c d d d d b b 5 5 c b f f f 
        c d d d d d d d d c c c c c f . 
        . c c d d b 5 5 d c c c c . f . 
        . . . c c b 5 5 c c c b b c . . 
        . . . . . c 5 5 d c c c c c . . 
        `)
    animation.attachAnimation(campe, anim_Campe_Patrol)
}
function create_stand_animation () {
    anim_stand_right = animation.createAnimation(ActionKind.standing_right, 200)
    anim_stand_right.addAnimationFrame(img`
        . . . . d d 1 1 1 d d . . . . . 
        . . . . d 1 f f f 1 d . . . . . 
        . . . . d 1 f f f 1 d d . . . . 
        . . . d d 1 f f f 1 d d . . . . 
        . . d d d 1 1 1 1 1 d d d d . . 
        d d d d d d d d d d d d d d . . 
        d d d d d d d d d d d d d d d d 
        . d d . d d d d d d . d d d d d 
        . . . . . d d d d d . . . . . . 
        . . . . . 9 d d 9 9 . . . . . . 
        . . . . . 9 9 9 9 9 9 9 . . . . 
        . . . . . 9 9 9 9 9 9 9 . . . . 
        . . . . 9 9 9 9 9 9 9 9 9 . . . 
        . . . 9 9 9 . . . 9 9 9 9 . . . 
        . . 9 9 9 9 . . . . 9 9 9 9 9 . 
        d d d d d d . . . . d d d d d d 
        `)
    anim_stand_right.addAnimationFrame(img`
        . . . . d d 1 1 1 d d . . . . . 
        . . . . d 1 f f f 1 d . . . . . 
        . . . . d 1 f f f 1 d d . . . . 
        . . . d d 1 f f f 1 d d . . . . 
        . . d d d 1 1 1 1 1 d d d d . . 
        d d d d d d d d d d d d d d . . 
        d d d d d d d d d d d d d d d d 
        . d d . d d d d d d . d d d d d 
        . . . . . d d d d d . . . . . . 
        . . . . . 9 d d 9 9 . . . . . . 
        . . . . . 9 9 9 9 9 9 9 . . . . 
        . . . . . 9 9 9 9 9 9 9 . . . . 
        . . . . 9 9 9 9 9 9 9 9 9 . . . 
        . . . 9 9 9 . . . 9 9 9 9 . . . 
        . . 9 9 9 9 . . . . 9 9 9 9 9 . 
        d d d d d d . . . . d d d d d d 
        `)
    anim_stand_left = animation.createAnimation(ActionKind.standing_left, 200)
    anim_stand_left.addAnimationFrame(img`
        . . . . d d 1 1 1 d d . . . . . 
        . . . . d 1 f f f 1 d . . . . . 
        . . . . d 1 f f f 1 d d . . . . 
        . . . d d 1 f f f 1 d d . . . . 
        . . d d d 1 1 1 1 1 d d d d . . 
        d d d d d d d d d d d d d d . . 
        d d d d d d d d d d d d d d d d 
        . d d . d d d d d d . d d d d d 
        . . . . . d d d d d . . . . . . 
        . . . . . 9 d d 9 9 . . . . . . 
        . . . . . 9 9 9 9 9 9 9 . . . . 
        . . . . . 9 9 9 9 9 9 9 . . . . 
        . . . . 9 9 9 9 9 9 9 9 9 . . . 
        . . . 9 9 9 . . . 9 9 9 9 . . . 
        . . 9 9 9 9 . . . . 9 9 9 9 9 . 
        d d d d d d . . . . d d d d d d 
        `)
    anim_stand_left.addAnimationFrame(img`
        . . . . d d 1 1 1 d d . . . . . 
        . . . . d 1 f f f 1 d . . . . . 
        . . . . d 1 f f f 1 d d . . . . 
        . . . d d 1 f f f 1 d d . . . . 
        . . d d d 1 1 1 1 1 d d d d . . 
        d d d d d d d d d d d d d d . . 
        d d d d d d d d d d d d d d d d 
        . d d . d d d d d d . d d d d d 
        . . . . . d d d d d . . . . . . 
        . . . . . 9 d d 9 9 . . . . . . 
        . . . . . 9 9 9 9 9 9 9 . . . . 
        . . . . . 9 9 9 9 9 9 9 . . . . 
        . . . . 9 9 9 9 9 9 9 9 9 . . . 
        . . . 9 9 9 . . . 9 9 9 9 . . . 
        . . 9 9 9 9 . . . . 9 9 9 9 9 . 
        d d d d d d . . . . d d d d d d 
        `)
    animation.attachAnimation(Titan, anim_stand_left)
    animation.attachAnimation(Titan, anim_stand_right)
}
function set_Sprites_Invisible () {
    if (level != 1) {
        campe.setFlag(SpriteFlag.Invisible, true)
        campe.setFlag(SpriteFlag.Ghost, true)
    }
    if (level != 2) {
        threeSisters1.setFlag(SpriteFlag.Invisible, true)
        threeSisters2.setFlag(SpriteFlag.Invisible, true)
        threeSisters3.setFlag(SpriteFlag.Invisible, true)
        threeSisters1.setFlag(SpriteFlag.Ghost, true)
        threeSisters2.setFlag(SpriteFlag.Ghost, true)
        threeSisters3.setFlag(SpriteFlag.Ghost, true)
    }
    if (level != 3) {
        cerberus.setFlag(SpriteFlag.Invisible, true)
        cerberus.setFlag(SpriteFlag.Ghost, true)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.x += -1
    sprite.y += -2
    info.changeLifeBy(-1)
    music.smallCrash.play()
    otherSprite.setFlag(SpriteFlag.Ghost, true)
    pause(500)
    otherSprite.setFlag(SpriteFlag.Ghost, false)
})
scene.onHitTile(SpriteKind.Player, 2, function (sprite) {
    info.changeLifeBy(-1)
    scene.placeOnRandomTile(Titan, 9)
    music.baDing.play()
})
let anim_stand_left: animation.Animation = null
let anim_stand_right: animation.Animation = null
let anim_Campe_Patrol: animation.Animation = null
let key: Sprite = null
let tile_list: tiles.Tile[] = []
let keyObtained = 0
let anim_walk_right: animation.Animation = null
let anim_walk_left: animation.Animation = null
let Titan: Sprite = null
let level = 0
let threeSisters3: Sprite = null
let threeSisters2: Sprite = null
let threeSisters1: Sprite = null
let cerberus: Sprite = null
let campe: Sprite = null
story_Intro()
campe = sprites.create(img`
    . . . . c c c c c . . . . . . . 
    . . c c 5 5 5 5 5 c . . . . . . 
    . c 5 5 5 5 1 2 5 5 c . . . . . 
    c 5 5 5 5 5 2 2 5 5 5 c . . . . 
    c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
    c c b b 1 b 5 5 5 5 5 5 c . . . 
    c 5 2 2 2 5 5 5 5 5 5 5 d c . . 
    c 5 5 5 5 5 5 5 5 5 d d d c . . 
    f c f 5 5 5 b 5 5 5 d d d c . . 
    f . f b b c 5 5 b d d d d c . . 
    f f f b c 5 5 b b d d d d c c c 
    . f c c c c c d d d d d d d d c 
    . f . . c c b 5 5 b d d d c c . 
    . f . . c d 5 5 b b c c c . . . 
    . . . . c c c c c c c . . . . . 
    . . . . c b b b c . . . . . . . 
    `, SpriteKind.Enemy)
cerberus = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . d . . d . . . . e . . . e . 
    . . d d d d . . . . e e e e e . 
    . d f d d f d . . e f e e e f e 
    . d d d d d d . . e e e e e e e 
    . d d f f b d . b e e e f e e . 
    . d d d b b b b b b e e e e e . 
    . . d b b f b b f b b e e e e . 
    . . d b b b b b b b b e e e e . 
    . . d b b b f f b b c e e . . . 
    . . d d b b b b b b c c c c . . 
    . . . d d b b b b b b b b c c . 
    . . . . . b b b b b b b b b c c 
    . . . . . b b b b b b b b b b c 
    . . . . . . b b . b b . . b b c 
    . . . . . . b . . b . . . . b b 
    `, SpriteKind.Enemy)
threeSisters1 = sprites.create(img`
    . . . . . c c . . . . . . . . . 
    . . . . c a a c . . . . . . . . 
    . . . c a a a a c . . . . . . . 
    . . c a a a a a a c . . . . . . 
    . c a a a a a a a a c . . . . . 
    c a a a a a a a a a a c . . . . 
    c c c c c c c c c c c c . . . . 
    . c b b b b b b b b b c c . . . 
    . c 1 2 b b 1 2 b c c c c . . . 
    c b 2 2 b b 2 2 b b c c . . . . 
    c b b b b b b b b b b f 2 2 . . 
    f b 1 2 2 2 1 b b b b f c 2 2 . 
    f b b b 2 b b b b b b f c c 2 2 
    . c b c b c b c b b c f 2 2 2 . 
    . . c b b b c b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `, SpriteKind.Enemy)
threeSisters2 = sprites.create(img`
    . . . . . c c . . . . . . . . . 
    . . . . c 2 2 c . . . . . . . . 
    . . . c 2 2 2 2 c . . . . . . . 
    . . c 2 2 2 2 2 2 c . . . . . . 
    . c 2 2 2 2 2 2 2 2 c . . . . . 
    c 2 2 2 2 2 2 2 2 2 2 c . . . . 
    c c c c c c c c c c c c . . . . 
    . c b b b b b b b b b c c . . . 
    . c 1 2 b b 1 2 b c c c c . . . 
    c b 2 2 b b 2 2 b b c c . . . . 
    c b b b b b b b b b b f 2 2 . . 
    f b 1 2 2 2 1 b b b b f c 2 2 . 
    f b b b 2 b b b b b b f c c 2 2 
    . c b c b c b c b b c f 2 2 2 . 
    . . c b b b c b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `, SpriteKind.Enemy)
threeSisters3 = sprites.create(img`
    . . . . . c c . . . . . . . . . 
    . . . . c f f c . . . . . . . . 
    . . . c f f f f c . . . . . . . 
    . . c f f f f f f c . . . . . . 
    . c f f f f f f f f c . . . . . 
    c f f f f f f f f f f c . . . . 
    c c c c c c c c c c c c . . . . 
    . c b b b b b b b b b c c . . . 
    . c 1 2 b b 1 2 b c c c c . . . 
    c b 2 2 b b 2 2 b b c c . . . . 
    c b b b b b b b b b b f 2 2 . . 
    f b 1 2 2 2 1 b b b b f c 2 2 . 
    f b b b 2 b b b b b b f c c 2 2 
    . c b c b c b c b b c f 2 2 2 . 
    . . c b b b c b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `, SpriteKind.Enemy)
level = 1
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222ff
    22fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222
    22222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222fffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222
    222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222ffffffffffffffffffffffffcccccccccffffffffffffffffffffff22222222222222
    2222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222fffffffffffffffffffcccccccccccccccccfffffffffffffffffff22222222222222
    2222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222fffffffffffffffffffccccccccccccccccccfffffffffff222222222222222222222
    2222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222ffffffffffffffffffcccccccccccccccccccccccffffff2222222222222222222222
    2222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222fffffffffffcccccccccccccccccccccccccccccccfff22222222222222222222222
    2222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222ffffffffffcccccccccccccccccccccccccccccccccff22222222222222222222222
    2222222fffffffffffffffffffffffffffffffff222ffffffffffffffffffffffffffffffffffffffff222222222fffffffffcccccccccccccccccccccccccccccccccccf22ccccccccccccc22222222
    2222222ffffffffffffffffffffffffffffff2222222fffffffffffffffffffffffffffffffffffffff2222222222fffffccccccccccccccccccccccccccccccccccccccccccccccccccccccc2222222
    2222222ffffffffffffffffffffffffffff222222222fffffffffffffffffffffffffffffffffffffff2222222222ffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccc222222
    2222222ffffffffffffffffffffffffff222222222222ffffffffffffffffffffffffffffffffffffff22222222222fffccccccccccccccccccccccccccccccccccccccccccccccccccccccccc222222
    2222222fffffffffffffffffffffffff2222222222222fffffffffffffffffffffffffffffffffffff222222222222fccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc222222
    2222222ffffffffffffffffffffffff22222222222222ffffffffffffffffffffffffffffffffffff2222222222222fccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc222222
    2222222fffffffffffcffffffffffff22222222222222ffffffffffffffffffffffffffffffffffff2222222222222cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc222222
    2222222fffffccccccccfffffffffff22222222222222ffffffffffffffffffffffff22fffffffff22222222222222cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc222222
    2222222ffcccccccccccfffffffffff222222222222222ffffffffffffffffffffff2222222ffff222222222222222cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc222222
    2222222cccccccccccccffffffffff2222222222222222fffffffffffffffffffff2222222222ff222222222222222cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc222222
    2222222cccccccccccccffffffffff2222222222222222fffffffffffffffffffff222222222222222222222222222cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc222222
    2222222ccccccccccccccfffffffff2222222222222222fffffffffffffffffffff222222222222222222222222222cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc222222
    22222ccccccccccccccccfffffffff2222222222222222ffffffffffffffffffff222222222222222222222222222ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc222222
    2222cccccccccccccccccffffff2222222222222222222ffffffffffffffffffff222222222222222222222222222ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc222222
    2222ccccccccccccccccc2222222222222222222222222ff222fffffffffffffff222222222222222222222222222ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc222222
    222cccccccccccccccccc2222222222222222222222222ff2222ffffffffffffff222222222222222222222222222ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc222222
    222cccccccccccccccccc22222222222222222222222222222222fffffffffffff22222222222222222222222222ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc22222
    22ccccccccccccccccccc222222222222222222222222222222222ffffffffffff22222222222222222222222222ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc22222
    22ccccccccccccccccccc222222222222222222222222222222222fffffffffff222222222222222222222222222ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc22222
    2cccccccccccccccccccc222222222222222222222222222222222fffffffffff22222222222222222222222222cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc22222
    2cccccccccccccccccccc222222222222222222222222222222222fffffffffff2222222222222222222222222cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2222
    2cccccccccccccccccccc222222222222ccccc2222222222222222fffffffffff222222222222222222222222ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2222
    cccccccccccccccccccccc22222222222ccccccc22222222222222fffffffffff22222222222222222222222cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccc2222222222cccccccc22222222222222ffffffffff2222222222222222cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccc2222222ccccccccccc2222222222222222222222f22222222222222cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccc2222cccccccccccc222222222222222222222222222222222222ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccc222222222222222222222222222222222222ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccc22222222222222222222222222222222222cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccc22222222222222222222222222222222222cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccc222222222222222222222222222222222cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccc22222222222222222222222222222cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccc22222222222222222222222222ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccc222222222222222222222222ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccc22222222222222222222222ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccc22222222222222222222222ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccc22222222222222222222222ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccc22222222222222222222222ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccc2222222222222222222222ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccc222222222222222222cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc222222ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccffccccccccccccccccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccffffcccccccccccccccccccccccccccfffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffcccccccccccccccc
    ccccccccccccccccccccffffffcccccccccccccccccccccccccccffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffcccccccccccccc
    ccccccccccccccccccccffffffcccccccccccccccccccccccccccffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffcccccccccccc
    ccccccccccccccccccccffffffffcccccccccccccccccccccccccfffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffcccccccccccc
    cccccffccccccccccccccffffffffccccccccccccccccccccccccfffffffffffffccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffccccccccccc
    ccccffffcccccccccccccfffffffffccccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffccccccccc
    cccffffffccccccccccccffffffffffccccccccccccccccccccfffffffffffffffffffffccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ccffffffffcccccccccccfffffffffffcccccccccccccccccfffffffffffffffffffffffcccccccccccccfffffffffccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    cfffffffffffffcccccccfffffffffffffcccccccccccccfffffffffffffffffffffffffccccccccccccfffffffffffffcccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    cfffffffffffffffcccfffffffffffffffffccccccfffffffffffffffffffffffffffffffccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
game.splash("The domain of Hades is not kind...")
game.splash("Beware of the guardians")
game.splash("and the endless", "pit beneath you...")
setup_level()
create_Titan()
info.setLife(5)
forever(function () {
    pause(200)
    threeSisters2.vy = 60
    pause(2000)
    threeSisters2.vy = -60
    pause(2000)
})
forever(function () {
    threeSisters1.vy = 100
    pause(2000)
    threeSisters1.vy = -50
    pause(2000)
})
forever(function () {
    threeSisters3.vy = 40
    pause(2000)
    threeSisters3.vy = -40
    pause(2000)
})
forever(function () {
    cerberus.vx = 60
    pause(1000)
    cerberus.vx = -60
    pause(1000)
})
