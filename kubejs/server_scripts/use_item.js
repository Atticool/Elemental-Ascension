const maxManaCrystals = 7;
const maxLifeCrystals = 15;

ItemEvents.rightClicked(event => {
    let item = event.getItem();
    let hand = event.getHand();
    let player = event.getPlayer();
    let playerData = player.data;
    let consumedManaCrystals = player.data.get('manacrystals');
    let consumedLifeCrystals = player.data.get('lifecrystals');
    switch (item) {

        /*-------------------Mana Crystal---------------------*/
        case Item.of('kubejs:mana_crystal'):

            //check if the player data for 'manacrystals' is less than the max;
            if (consumedManaCrystals < maxManaCrystals) {
                
                //adds / replaces the data to be one greater than what it was previously
                    //if the data hasn't been set, it seems like it just uses 0
                playerData.add('manacrystals', consumedManaCrystals+1);

                //set the base max mana to the new value
                player.setAttributeBaseValue('ars_nouveau:ars_nouveau.perk.max_mana', 30+(10*(consumedManaCrystals+1)));

                //play a nice sound to notify that it works
                player.playNotifySound('apotheosis:reforge', 'players', 1, 1);


                //checks what hand the player is using the item in, then subtracts 1 from that slot after using the item
                if (hand.toString() == 'MAIN_HAND') {   
                    player.getInventory().extractItem(player.getSelectedSlot(), 1, false)
                } else if (hand.toString() == 'OFF_HAND') {
                    player.getInventory().extractItem(40, 1, false)
                }


            } else {
                //otherwise tell them that max mana has been reached.
                player.tell(Text.of('* You can use no more Mana Crystals').blue())
            }
            
            
            //don't forget the break;
            break;
        /*-------------------Life Crystal---------------------*/
            //using similar code to the mana crystal
        case Item.of('kubejs:life_crystal'):
            if (consumedLifeCrystals < maxLifeCrystals) {
                playerData.add('lifecrystals', consumedLifeCrystals+1);
                player.setAttributeBaseValue('minecraft:generic.max_health', 10+(2*(consumedLifeCrystals+1)));
                player.playNotifySound('apotheosis:reforge', 'players', 1, 1);

                if (hand.toString() == 'MAIN_HAND') {   
                    player.getInventory().extractItem(player.getSelectedSlot(), 1, false)
                } else if (hand.toString() == 'OFF_HAND') {
                    player.getInventory().extractItem(40, 1, false)
                }
            } else {
                player.tell(Text.of('* You can use no more Heart Crystals').red())
            }
            break;




        /*-------------------Paper (DEBUG)---------------------*/

        // case Item.of('minecraft:paper', 1):
        //     Utils.server.runCommand('say '.concat(consumedManaCrystals));
        //     Utils.server.runCommand('say '.concat(consumedLifeCrystals));
        //     player.playNotifySound('apotheosis:reforge', 'players', 1, 1);

        //     playerData.add('manacrystals', 0);
        //     playerData.add('lifecrystals', 0);
        //     player.setAttributeBaseValue('minecraft:generic.max_health', 10);
        //     player.setAttributeBaseValue('ars_nouveau:ars_nouveau.perk.max_mana', 30);
        //     Utils.server.runCommand('say '.concat(player.getAttributeBaseValue('ars_nouveau:ars_nouveau.perk.max_mana')));
        //     Utils.server.runCommand('say '.concat(player.getAttributeBaseValue('minecraft:generic.max_health')));
        //     break;
    }
})