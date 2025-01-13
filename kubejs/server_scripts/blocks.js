ServerEvents.recipes(
    event => {
        // Remove gravel duplication glitch
        event.remove({output: 'minecraft:gravel'});

        event.recipes.farmersdelight.cutting(
            'minecraft:gravel',
            '#forge:tools/shovels',
            [
                Item.of('minecraft:flint').withChance(0.5),
                Item.of('minecraft:gravel').withChance(0.1)
            ]
        );

        // Be able to obtain sand easily
        event.smelting('minecraft:sand', 'minecraft:gravel');

        // Updates ship helm recipe to use an emerald instead of a diamond
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

        // Painted Acacia Cabinet recipe fixing
        event.remove({output: 'mowziesdelight:painted_acacia_cabinet'});

        event.shaped(
            'mowziesdelight:painted_acacia_cabinet',
            [
                'AAA',
                'B B',
                'AAA'
            ],
            {
                A: 'mowziesmobs:painted_acacia_slab',
                B: 'minecraft:acacia_trapdoor'
            }
        );
    }
)
