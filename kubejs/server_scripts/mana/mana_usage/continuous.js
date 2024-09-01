

PlayerEvents.tick(event => {
    let player = event.player;
    let itemMapArray = global.manaUsageItemsMap.get(''.concat(player.useItem.id))
    let manaCap = CapabilityRegistry.getMana(event.player).orElse(null);


    if (itemMapArray) {

        if (!player.isCreative()) {


            itemMapArray.forEach(function(itemValuesArray) {
                let ivaLength = itemValuesArray.length;
                if (itemValuesArray[0] == 'continuous') {
                    
                    
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
                                player.stopUsingItem();
                            }
                            break;
                    }
                }
            })
        }
    }


})