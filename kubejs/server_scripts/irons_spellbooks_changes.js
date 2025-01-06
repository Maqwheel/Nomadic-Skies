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
            "minecraft:sculk",
            "#forge:tools/knives",
            [
                Item.of("minecraft:echo_shard").withChance(0.25)
            ]
        );

        event.recipes.farmersdelight.cooking(
            [
                "minecraft:lapis_lazuli",
                "minecraft:lapis_lazuli",
                "minecraft:amethyst_shard",
                "minecraft:amethyst_shard",
                "minecraft:emerald"
            ],
            Item.of("irons_spellbooks:arcane_essence", 7), // output
            10, // exp
            200 // cookTime
        );
        event.recipes.farmersdelight.cooking(
            [
                "irons_spellbooks:arcane_essence",
                "irons_spellbooks:arcane_essence",
                "minecraft:blaze_powder",
                "minecraft:blaze_powder",
                "minecraft:netherite_scrap",
            ],
            Item.of("irons_spellbooks:cinder_essence", 7), // output
            50, // exp
            1000 // cookTime
        );

        event.recipes.farmersdelight.cooking(
            [
                "irons_spellbooks:arcane_essence",
                "irons_spellbooks:arcane_essence",
                "minecraft:ink_sac",
                "minecraft:ink_sac",
                "minecraft:ink_sac"
            ],
            Item.of("irons_spellbooks:common_ink", 3), // output
            10, // exp
            200, // cookTime
            "minecraft:glass_bottle", // container
        );
        event.recipes.farmersdelight.cooking(
            [
                "irons_spellbooks:arcane_essence",
                "irons_spellbooks:arcane_essence",
                "minecraft:glow_ink_sac",
                "irons_spellbooks:common_ink",
                "irons_spellbooks:common_ink"
            ],
            Item.of("irons_spellbooks:uncommon_ink", 3), // output
            20, // exp
            400, // cookTime
            "minecraft:glass_bottle", // container
        );
        event.recipes.farmersdelight.cooking(
            [
                "irons_spellbooks:arcane_essence",
                "irons_spellbooks:arcane_essence",
                "irons_spellbooks:arcane_essence",
                "minecraft:lapis_lazuli",
                "irons_spellbooks:uncommon_ink",
                "irons_spellbooks:uncommon_ink"
            ],
            Item.of("irons_spellbooks:rare_ink", 3), // output
            30, // exp
            600, // cookTime
            "minecraft:glass_bottle", // container
        );
        event.recipes.farmersdelight.cooking(
            [
                "irons_spellbooks:arcane_essence",
                "irons_spellbooks:arcane_essence",
                "irons_spellbooks:arcane_essence",
                "irons_spellbooks:blood_vial",
                "irons_spellbooks:rare_ink",
                "irons_spellbooks:rare_ink"
            ],
            Item.of("irons_spellbooks:epic_ink", 3), // output
            40, // exp
            800, // cookTime
            "minecraft:glass_bottle", // container
        );
        event.recipes.farmersdelight.cooking(
            [
                "irons_spellbooks:arcane_essence",
                "irons_spellbooks:arcane_essence",
                "irons_spellbooks:arcane_essence",
                "irons_spellbooks:lightning_bottle",
                "irons_spellbooks:epic_ink",
                "irons_spellbooks:epic_ink"
            ],
            Item.of("irons_spellbooks:legendary_ink", 3), // output
            100, // exp
            2400, // cookTime
            "minecraft:glass_bottle", // container
        );
    }
)
