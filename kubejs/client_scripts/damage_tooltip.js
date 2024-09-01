const damageTypeItemMap = new Map ([
    ['mokels_witch_boss:witch_staff', [['physical', 12]]],

    ['l2complements:sonic_shooter', [['magic', 10]]],

    ['mowziesmobs:ice_crystal', [['frost', 10]]],

    ['majruszdifficulty:evoker_fang_scroll', [['magic', 10]]],
    ['majruszdifficulty:sonic_boom_scroll', [['magic', 14]]],

]);

ItemEvents.tooltip(event => {
    damageTypeItemMap.forEach(function(value, key) {
        value.forEach(function(damageArray) {
            let text = '';
            switch (damageArray[0]) {
                case 'magic':
                    text = text.concat('Magic Damage: ');
                    break;
                case 'physical':
                    text = text.concat('Physical Damage: ');
                    break;
                case 'frost':
                    text = text.concat('Frost Damage: ');
                    break;
                case 'fire':
                    text = text.concat('Fire Damage: ');
                    break;
                case 'true':
                    text = text.concat('True Damage: ');
                    break;
                case 'fire':
                    text = text.concat('Fire Damage: ');
                    break;
                case 'sonic':
                    text = text.concat('Sonic Damage: ');
                    break;
            }
            
            text = text.concat(damageArray[1]);
            event.add(key, Text.of(text))
        })
    })
})