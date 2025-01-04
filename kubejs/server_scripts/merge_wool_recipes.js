// Merging Quark and Vanilla wool dying recipes
ServerEvents.recipes(
    event => {
        const colours = [
            'black',
            'blue',
            'brown',
            'cyan',
            'gray',
            'green',
            'light_blue',
            'light_gray',
            'lime',
            'magenta',
            'orange',
            'pink',
            'purple',
            'red',
            'white',
            'yellow'
        ];

        colours.forEach(
            colour => {
                event.remove({output: `minecraft:${colour}_wool`});

                event.shapeless(
                   `minecraft:${colour}_wool`,
                   [
                    `minecraft:${colour}_dye`,
                    '#minecraft:wool'
                   ] 
                );
            }
        );

        event.shaped(
            'minecraft:white_wool',
            [
                'AA ',
                'AA ',
                '   '
            ],
            {
                A: 'minecraft:string'
            }
        );

        event.shaped(
            'minecraft:brown_wool',
            [
                'AA ',
                'AA ',
                '   '
            ],
            {
                A: 'alexsmobs:bison_fur'
            }
        );
    }
)