// Make wool able to be turned into feathers
ServerEvents.recipes(
    event => {
        event.recipes.farmersdelight.cutting(
            '#minecraft:wool',
            '#forge:tools/knives',
            [
                Item.of('minecraft:feather', 2)
            ]
        );
    }
)