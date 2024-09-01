//priority 0
const ManaCap = Java.loadClass("com.hollingsworth.arsnouveau.api.util.ManaUtil");
const ArsManaCap = Java.loadClass("com.hollingsworth.arsnouveau.api.mana.IManaCap")
const CapabilityRegistry = Java.loadClass("com.hollingsworth.arsnouveau.setup.registry.CapabilityRegistry")


//item, ['single', mana, equippedItems],

ItemEvents.rightClicked(event => {
    let itemMapArray = global.manaUsageItemsMap.get(''.concat(event.item.id))
    let manaCap = CapabilityRegistry.getMana(event.player).orElse(null);
    let player = event.player;
    // event.server.runCommand('say a');

    if (itemMapArray) {
        event.server.scheduleInTicks(1, function(ctx) {
                player.cooldowns.removeCooldown(player.getHeldItem('main_hand'));
                // event.server.runCommand('say '.concat(itemMapArray));
            })
        if (!player.isCreative()) {
            itemMapArray.forEach(function(itemValuesArray) {
                let ivaLength = itemValuesArray.length;
                if (itemValuesArray[0] == 'single') {
                    
                    
                    mainSwitch: switch (ivaLength) {
                        case 4:
                            for (let i = 0; i < itemValuesArray[3].length; i++) {
                                if (player.getEquipment(itemValuesArray[3][i][1]) != itemValuesArray[3][i][0]) {
                                    break mainSwitch;
                                }
                            }
    
                        case 3:
                            for (let i = 0; i < itemValuesArray[2].length; i++){
                                if (itemValuesArray[2][i] == 'crouching' && !player.isCrouching()) {
                                    break mainSwitch;
                                } else if (itemValuesArray[2][i] == 'not_crouching' && player.isCrouching()) {
                                    break mainSwitch;
                                }
                            }
                        case 2:
                            if (manaCap.getCurrentMana() > itemValuesArray[1]) {
                                manaCap.removeMana(itemValuesArray[1]);
                            } else {
                                player.tell(Text.of('Not enough Mana.').gold());
                                event.cancel();
                            }
                            break;
                    }
                }
            })
        }
    }






    // Utils.server.runCommand('say '.concat(event.item.id))
    // Utils.server.runCommand('say '.concat(itemMapArray))
})