PlayerEvents.loggedIn(event => {
    player = event.player;
    stages = player.stages;


    if (!stages.has('baseMana')) {
        player.setAttributeBaseValue('ars_nouveau:ars_nouveau.perk.max_mana', 30);
        player.setAttributeBaseValue('ars_nouveau:ars_nouveau.perk.mana_regen', 2);
        stages.add('baseMana');
    }
    if (!stages.has('baseHealth')) {
        player.setAttributeBaseValue('minecraft:generic.max_health', 10);
        stages.add('baseHealth');
    }
    if (!stages.has('clearInventory')) {
        event.player.inventory.clear('pandora:pandora_necklace');
        stages.add('baseHealth');
    }
})