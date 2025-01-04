// Added a recipe for the ruined book
ServerEvents.recipes(
    event => {
        event.shaped(
            'irons_spellbooks:ruined_book',
            [
                'ABA',
                'BCB',
                'ABA'
            ],
            {
                A: 'minecraft:amethyst_shard',
                B: 'minecraft:sculk',
                C: 'minecraft:book'
            }
        );
    }
)