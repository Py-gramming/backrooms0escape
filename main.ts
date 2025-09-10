namespace SpriteKind {
    export const Frente = SpriteKind.create()
    export const camera = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.moveWithController(5, 3, 1)
    Render.setSpriteAttribute(player2, RCSpriteAttribute.ZOffset, 3)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.moveWithController(1, 3, 0)
    Render.setSpriteAttribute(player2, RCSpriteAttribute.ZOffset, 0)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    Render.moveWithController(2, 3, 1)
    Render.setSpriteAttribute(player2, RCSpriteAttribute.ZOffset, 3)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Backrooms_Wall_exit`, function (sprite, location) {
    game.setGameOverMessage(true, "Level 0: Completo")
    game.gameOver(true)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    Render.moveWithController(2, 3, 1)
    Render.setSpriteAttribute(player2, RCSpriteAttribute.ZOffset, 3)
})
let player2: Sprite = null
color.setPalette(
color.originalPalette
)
Render.setViewMode(ViewMode.raycastingView)
tiles.setCurrentTilemap(tilemap`Backrooms_Level_0`)
scene.setBackgroundImage(assets.image`backrooms_background`)
player2 = Render.getRenderSpriteVariable()
tiles.placeOnTile(player2, tiles.getTileLocation(7, 26))
game.showLongText("Que Lugar é esse? Onde eu estou?", DialogLayout.Bottom)
game.showLongText("Espera!", DialogLayout.Bottom)
pause(200)
game.showLongText("Isso... Isso é... Não!", DialogLayout.Bottom)
game.showLongText("Não pode ser!", DialogLayout.Bottom)
game.showLongText("Eu preciso sair daquí. RÁPIDO!", DialogLayout.Bottom)
pause(1000)
Render.moveWithController(2, 3, 1)
Render.setSpriteAttribute(player2, RCSpriteAttribute.ZOffset, 3)
