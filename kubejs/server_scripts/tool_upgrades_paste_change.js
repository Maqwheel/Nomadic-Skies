// Updating paste recipe
ServerEvents.recipes(
    event => {
        const pasteTypes = [
            'blaze_powder',
            'redstone',
            'sugar'
        ];

        pasteTypes.forEach(
            pasteType => {
                event.remove({output: `toolupgrades:paste_${pasteType}`});

                event.shaped(
                    `toolupgrades:paste_${pasteType}`,
                    [
                        'ABA',
                        'BCB',
                        'ABA'
                    ],
                    {
                        A: `minecraft:${pasteType}`,
                        B: 'minecraft:amethyst_shard',
                        C: '#forge:water_bottles'
                    }
                )
            }
        )

        event.remove({output: 'toolupgrades:paste_bone'});
        event.remove({output: 'toolupgrades:paste_clay'});
        event.remove({output: 'toolupgrades:paste_glowstone'});
        event.remove({output: 'toolupgrades:paste_gun_powder'});
        event.remove({output: 'toolupgrades:paste_ink'});
        event.remove({output: 'toolupgrades:paste_lapis'});
        event.remove({output: 'toolupgrades:paste_slime'});

        event.shaped(
            'toolupgrades:paste_bone',
            [
                'ABA',
                'BCB',
                'ABA'
            ],
            {
                A: 'minecraft:bone_meal',
                B: 'minecraft:amethyst_shard',
                C: '#forge:water_bottles'
            }
        )
        event.shaped(
            'toolupgrades:paste_clay',
            [
                'ABA',
                'BCB',
                'ABA'
            ],
            {
                A: 'minecraft:clay_ball',
                B: 'minecraft:amethyst_shard',
                C: '#forge:water_bottles'
            }
        )
        event.shaped(
            'toolupgrades:paste_glowstone',
            [
                'ABA',
                'BCB',
                'ABA'
            ],
            {
                A: 'minecraft:glowstone_dust',
                B: 'minecraft:amethyst_shard',
                C: '#forge:water_bottles'
            }
        )
        event.shaped(
            'toolupgrades:paste_gun_powder',
            [
                'ABA',
                'BCB',
                'ABA'
            ],
            {
                A: 'minecraft:gunpowder',
                B: 'minecraft:amethyst_shard',
                C: '#forge:water_bottles'
            }
        )
        event.shaped(
            'toolupgrades:paste_ink',
            [
                'ABA',
                'BCB',
                'ABA'
            ],
            {
                A: 'minecraft:ink_sac',
                B: 'minecraft:amethyst_shard',
                C: '#forge:water_bottles'
            }
        )
        event.shaped(
            'toolupgrades:paste_lapis',
            [
                'ABA',
                'BCB',
                'ABA'
            ],
            {
                A: 'minecraft:lapis_lazuli',
                B: 'minecraft:amethyst_shard',
                C: '#forge:water_bottles'
            }
        )
        event.shaped(
            'toolupgrades:paste_slime',
            [
                'ABA',
                'BCB',
                'ABA'
            ],
            {
                A: '#forge:slimeballs',
                B: 'minecraft:amethyst_shard',
                C: '#forge:water_bottles'
            }
        )
    }
)