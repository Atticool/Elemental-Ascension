const moveMapPlayers = new Map([]);
const lastUsedMagicMapPlayers = new Map([]);

PlayerEvents.tick(event => {
    let player = event.player;
    let UUID = ''.concat(player.getStringUuid());




    // moveMapPlayers.forEach(function(value, key) {
    //     Utils.server.runCommand('say '.concat(value));
    // })



    // Utils.server.runCommand('say '.concat(moveMapPlayers.has(UUID)));
    
    if (moveMapPlayers.has(UUID)) {
        let moveArray = moveMapPlayers.get(UUID);
        let index = moveArray[0];

        moveArray[index] = player.walkDist;
        moveArray[0] = moveArray[0]+1;
        
        if (moveArray[0] <= 0 || moveArray[0] >= moveArray.length) {
            moveArray[0] = 1;
        } 
        
        // Utils.server.runCommand('say go');
        moveMapPlayers.set(UUID, moveArray);
    } else {
        //first entry should be the iteration index
        moveMapPlayers.set(UUID, [1, 0, 0, 0, 0, 0])
        
        // Utils.server.runCommand('say reset');
    }

    if (lastUsedMagicMapPlayers.has(UUID)) {
        let magicArray = lastUsedMagicMapPlayers.get(UUID);
        let index = magicArray[0];

        magicArray[index] = player.walkDist;
        magicArray[0] = magicArray[0]+1;
        
        if (magicArray[0] <= 0 || magicArray[0] >= magicArray.length) {
            magicArray[0] = 1;
        } 
        
        // Utils.server.runCommand('say go');
        lastUsedMagicMapPlayers.set(UUID, magicArray);
    } else {
        //first entry should be the iteration index
        lastUsedMagicMapPlayers.set(UUID, [1, 0, 0, 0, 0, 0])
        
        // Utils.server.runCommand('say reset');
    }
    

    



    if (player.onGround() && !player.isUsingItem() &&(
        moveMapPlayers.get(UUID).slice(1).every(
            function isEqual(element, index, array) {
                return element == moveMapPlayers.get(UUID)[1];
            }
        )
    )  
    ) {
        // Utils.server.runCommand('say still');
        // player.modifyAttribute('ars_nouveau:ars_nouveau.perk.mana_regen', 'd4af320d-7ab5-4078-b94e-c94d2cda434a', 3, 'addition');
        player.setAttributeBaseValue('ars_nouveau:ars_nouveau.perk.mana_regen', 3)
    } else {
        // Utils.server.runCommand('say moving');
        player.setAttributeBaseValue('ars_nouveau:ars_nouveau.perk.mana_regen', -2000)
        // player.modifyAttribute('ars_nouveau:ars_nouveau.perk.mana_regen', 'd4af320d-7ab5-4078-b94e-c94d2cda434a', 0, 'addition');
    }
})