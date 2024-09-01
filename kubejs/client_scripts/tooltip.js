ItemEvents.tooltip(event => {
    event.add('mokels_witch_boss:witch_staff', Text.of('Consumes 1 XP per cast').green());
    event.add(['reliquary:pyromancer_staff', 'reliquary:ice_magus_rod', 'reliquary:glacial_staff'], Text.of('Needs at least 1 charge, but doesn\'t consume any.').green());



})