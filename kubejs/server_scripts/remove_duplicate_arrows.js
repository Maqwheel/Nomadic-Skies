// Removing duplicate diamond arrow
ServerEvents.recipes(
    event => {
        event.remove({output: 'archers_paradox:diamond_arrow'});
        event.remove({output: 'archers_paradox:lightning_arrow'});
    }
)

MoreJSEvents.villagerTrades(
    event => {
        const arrows = [
            "blaze",
            "frost"
        ];

        event.removeModdedTrades(
            'minecraft:fletcher',
            3
        );

        arrows.forEach(
            arrow => {
                event.addTrade(
                    'minecraft:fletcher',
                    3,
                    [
                        Item.of('minecraft:emerald', 3),
                        Item.of('minecraft:arrow', 4)
                    ],
                    `archers_paradox:${arrow}_arrow`
                );
            }
        )
    }
)
