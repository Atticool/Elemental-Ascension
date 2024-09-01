ServerEvents.entityLootTables(event => {
    event.addEntity('mowziesmobs:ferrous_wroughtnaut', table => {
      table.addPool(pool => {pool.addItem('kubejs:thousand_metal_ingot', 3, [3, 5])})
    })
})