// Removing OP crushing recipe
ServerEvents.recipes(
    event => {
        event.remove({output: 'minecraft:amethyst_shard'});

        event.recipes.createCrushing(['minecraft:copper_ingot', Item.of('minecraft:amethyst_shard').withChance(0.5)], 'minecraft:spyglass');
        event.recipes.createCrushing([Item.of('minecraft:amethyst_shard', 7), Item.of('minecraft:amethyst_shard').withChance(0.5)], 'minecraft:amethyst_cluster');
        event.recipes.createCrushing([Item.of('minecraft:amethyst_shard', 3), Item.of('minecraft:amethyst_shard').withChance(0.5)], 'minecraft:amethyst_block');
    }
)