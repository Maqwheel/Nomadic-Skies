ServerEvents.recipes(
    event => {
        event.remove({output: 'minecraft:gravel'});

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
