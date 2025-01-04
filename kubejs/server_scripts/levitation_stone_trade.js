// Updates levitation stone trading requirements
MoreJSEvents.villagerTrades(
    event => {
        event.removeModdedTrades(
            'minecraft:cartographer',
            5
        );

        event.addTrade(
            'minecraft:cartographer',
            5,
            [
                'explorerscompass:explorerscompass',
                Item.of('minecraft:amethyst_shard', 15)
            ],
            'castle_in_the_sky:levitation_stone'
        );
    }
)
