ServerEvents.recipes(
    event => {
        const recyclables = [
            "irons_spellbooks:affinity_ring",
            "irons_spellbooks:cast_time_ring",
            "irons_spellbooks:concentration_amulet",
            "irons_spellbooks:conjurers_talisman",
            "irons_spellbooks:cooldown_ring",
            "irons_spellbooks:emerald_stoneplate_ring",
            "irons_spellbooks:fireward_ring",
            "irons_spellbooks:frostward_ring",
            "irons_spellbooks:heavy_chain_necklace",
            "irons_spellbooks:poisonward_ring"
        ]

        recyclables.forEach(
            recyclable => {
                event.recipes.farmersdelight.cooking(
                    recyclable,
                    "irons_spellbooks:arcane_salvage", // output
                    10, // exp
                    400, // cookTime
                    // "minecraft:bowl", // container
                );
            }
        )

        event.recipes.farmersdelight.cutting(
            'minecraft:sculk',
            '#forge:tools/knives',
            [
                Item.of('minecraft:echo_shard').withChance(0.25)
            ]
        );
    }
)
