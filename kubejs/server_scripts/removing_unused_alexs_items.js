ServerEvents.recipes(
    event => {
        event.remove({output: 'alexsdelight:cooked_catfish_slice'});
        event.remove({output: 'alexsdelight:lobster_pasta'});
        event.remove({output: 'alexsdelight:raw_catfish_slice'});
        event.remove({output: 'alexsmobs:cooked_catfish'});
        event.remove({output: 'alexsmobs:cooked_lobster_tail'});
        event.remove({output: 'alexsmobs:echolocator'});
        event.remove({output: 'alexsmobs:endolocator'});
        event.remove({output: 'alexsmobs:fish_oil'});
        event.remove({output: 'alexsmobs:pupfish_locator'});

        event.recipes.farmersdelight.cooking(
            [
                "#minecraft:fishes",
                "#minecraft:fishes",
                "#minecraft:fishes",
                "#minecraft:fishes"
            ],
            "alexsmobs:fish_oil", // output
            10, // exp
            200, // cookTime
            "minecraft:glass_bottle", // container
        );
    }
)

ServerEvents.tags(
    'item',
    event => {
        event.remove('alexsmobs:animal_dictionary_ingredient', 'alexsmobs:cachalot_whale_tooth');
        event.remove('minecraft:fishes', 'alexsmobs:blobfish');
        event.remove('minecraft:fishes', 'alexsmobs:raw_catfish');
        event.remove('minecraft:fishes', 'alexsmobs:cooked_catfish');
    }
);