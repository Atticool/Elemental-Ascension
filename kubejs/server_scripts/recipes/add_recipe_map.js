const recipeMap = [
    ["shaped", 'kubejs:mana_crystal', [' F ', 'FFF', ' F '], {F: 'starmetal:star_fragment'}]
];

ServerEvents.recipes(event => {
    recipeMap.forEach(function(value) {

        switch (value[0]) {
            case "shaped":
                event.shaped(value[1], value[2], value[3]);
                break;
            case "shapeless":
                event.shapeless(value[1], value[2]);
                break;
        }

    })
})