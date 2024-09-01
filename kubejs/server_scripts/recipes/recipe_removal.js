const recipeIDtoRemove = [
    'minecraft:shield',
    'starmetal:star_fragment_to_star_metal',
    'starmetal:star_metal_to_nether_star',
  ];


ServerEvents.recipes(event => {

    
  recipeIDtoRemove.forEach(function(value) {
    event.remove({ id: value })
  })

})