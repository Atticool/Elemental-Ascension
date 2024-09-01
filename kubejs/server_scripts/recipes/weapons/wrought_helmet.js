ServerEvents.recipes(event => {

  event.shaped(
      Item.of('mowziesmobs:wrought_helmet', 1), 

      [
        'AAA',
        'A A', 
        '   '
      ],
      {
        A: 'kubejs:thousand_metal_ingot'
      }
    )
})
