
ItemEvents.tooltip(event => {
    console.log('testing manaUsageItemsMap')
    console.log(global.manaUsageItemsMap)
    global.manaUsageItemsMap.forEach(function(value, key) {
        console.log('run mapLoop');
        console.log(key);
        console.log(value);
        value.forEach(function(manaValues) {
            let description = 'Mana Usage: '.concat(manaValues[1]);
            if (manaValues[0] == 'continuous') {
                description = description.concat('/tick')
            }
            if (manaValues.length >= 3) {
                for (let i = 0; i < manaValues[2].length; i++) {
                    if (manaValues[2][i] == 'crouching') {
                        description = description.concat(' (While Crouching)')
                    } else if (manaValues[2][i] == 'not_crouching') {
                        description = description.concat(' (While Not Crouching)')
                    }
                }
            }

            event.add(key, Text.of(description).lightPurple());
        }) 
    });
})
