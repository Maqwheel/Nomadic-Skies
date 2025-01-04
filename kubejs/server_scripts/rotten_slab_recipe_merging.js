// Merging rotten slab recipe
ServerEvents.recipes(
    event => {
        event.remove({output: 'betterarcheology:rotten_slab'});

        event.shaped(
            Item.of('betterarcheology:rotten_slab', 6),
            [
                '   ',
                'AAA',
                '   '
            ],
            {
                A: 'betterarcheology:rotten_planks'
            }
        );
    }
)