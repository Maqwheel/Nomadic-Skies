ServerEvents.recipes(
    event => {
        event.remove({output: 'minecraft:gravel'});

        event.recipes.createCrushing(['minecraft:gravel', Item.of('minecraft:moss_block').withChance(0.1)], '#create:scrap_gravel_mossy');
        event.recipes.createCrushing('minecraft:gravel', '#create:scrap_gravel');

        event.recipes.createMilling('minecraft:gravel', 'minecraft:cobblestone');

        event.recipes.farmersdelight.cutting(
            'minecraft:gravel',
            '#forge:tools/shovels',
            [
                Item.of('minecraft:flint').withChance(0.5),
                Item.of('minecraft:gravel').withChance(0.1)
            ]
        );
    }
)
