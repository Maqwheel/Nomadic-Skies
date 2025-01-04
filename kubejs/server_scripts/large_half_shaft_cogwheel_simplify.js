// Simplifying large half shaft cogwheel recipe to avoid recipe conflict
ServerEvents.recipes(
    event => {
        event.remove({output: 'extendedgears:large_half_shaft_cogwheel'});

        event.shapeless(
            'extendedgears:large_half_shaft_cogwheel',
            [
                'extendedgears:half_shaft_cogwheel',
                '#minecraft:planks'
            ]
        );
    }
)