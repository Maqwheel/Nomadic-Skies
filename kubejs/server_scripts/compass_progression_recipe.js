ServerEvents.recipes(
    event => {
        event.remove({output: 'explorerscompass:explorerscompass'});

        event.shaped(
            'explorerscompass:explorerscompass',
            [
                'ABA',
                'BCB',
                'ABA'
            ],
            {
                A: 'minecraft:ender_eye',
                B: 'minecraft:obsidian',
                C: 'naturescompass:naturescompass'
            }
        )
    }
)
