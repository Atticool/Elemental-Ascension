ServerEvents.recipes(event => {

  event.shaped(
      Item.of('minecraft:shield', 1), 

      [
        'ABA',
        'BAB', 
        ' B '
      ],
      {
        A: 'kubejs:thousand_metal_ingot',
        B: '#minecraft:planks'  
      }
    )
})
