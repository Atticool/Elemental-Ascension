ServerEvents.recipes(event => {

  event.shaped(
      Item.of('mowziesmobs:wrought_axe', 1), 

      [
        'AAA',
        'ABA', 
        ' B '
      ],
      {
        A: 'kubejs:thousand_metal_ingot',
        B: '#forge:rods/wooden' 
      }
    )
})
