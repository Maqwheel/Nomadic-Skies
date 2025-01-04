// Removing duplicate cake recipe
ServerEvents.recipes(
    event => {
        event.remove({output: 'minecraft:cake'});

        event.shapeless(
            'minecraft:cake',
            [
                'farmersdelight:cake_slice',
                'farmersdelight:cake_slice',
                'farmersdelight:cake_slice',
                'farmersdelight:cake_slice',
                'farmersdelight:cake_slice',
                'farmersdelight:cake_slice',
                'farmersdelight:cake_slice'
            ]
        );
        
        event.shaped(
            'minecraft:cake',
            [
                'AAA',
                'BCB',
                'DDD'
            ],
            {
                A: '#forge:milk',
                B: 'minecraft:sugar',
                C: '#forge:eggs',
                D: 'minecraft:wheat'
            }
        );
        event.shaped(
            'minecraft:cake',
            [
                ' A ',
                'BCB',
                ' D '
            ],
            {
                A: '#forge:milk',
                B: 'minecraft:sugar',
                C: '#forge:eggs',
                D: '#forge:dough'
            }
        );
    }
)