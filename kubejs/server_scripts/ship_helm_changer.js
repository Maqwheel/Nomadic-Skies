// Updates ship helm recipe to use an emerald instead of a diamond
ServerEvents.recipes(
    event => {
        const woodTypes = [
            'acacia',
            'birch',
            'crimson',
            'dark_oak',
            'jungle',
            'oak',
            'spruce',
            'warped'
        ];

        woodTypes.forEach(
            woodType => {
                event.remove({output: `vs_eureka:${woodType}_ship_helm`});

                event.shaped(
                    `vs_eureka:${woodType}_ship_helm`,
                    [
                        'ABA',
                        'BCB',
                        'ADA'
                    ],
                    {
                        A: 'minecraft:stick',
                        B: `minecraft:${woodType}_fence`,
                        C: 'minecraft:emerald',
                        D: `minecraft:${woodType}_slab`
                    }
                );
            }
        )
    }
)