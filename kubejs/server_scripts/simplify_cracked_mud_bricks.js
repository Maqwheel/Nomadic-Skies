// Merging duplicate cracked mud brick recipes
ServerEvents.recipes(
    event => {
        event.remove({output: 'betterarcheology:cracked_mud_brick_slab'});
        event.remove({output: 'betterarcheology:cracked_mud_brick_stairs'});

        event.shaped(
            Item.of('betterarcheology:cracked_mud_brick_slab', 6),
            [
                '   ',
                'AAA',
                '   ',
            ],
            {
                A: 'betterarcheology:cracked_mud_bricks'
            }
        );
        event.shaped(
            Item.of('betterarcheology:cracked_mud_brick_stairs', 4),
            [
                'A  ',
                'AA ',
                'AAA',
            ],
            {
                A: 'betterarcheology:cracked_mud_bricks'
            }
        );

        event.stonecutting(
            Item.of('betterarcheology:cracked_mud_brick_slab', 2),
            'betterarcheology:cracked_mud_bricks'
        );
        event.stonecutting(
            'betterarcheology:cracked_mud_brick_stairs',
            'betterarcheology:cracked_mud_bricks'
        );
    }
)