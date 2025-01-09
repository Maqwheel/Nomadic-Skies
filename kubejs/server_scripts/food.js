ServerEvents.recipes(
    event => {
        // Removing duplicate cake recipe
        event.remove({output: 'minecraft:cake'});

        event.shapeless(
            'minecraft:cake',
            [
                'farmersdelight:cake_slice',
                'farmersdelight:cake_slice',
                'farmersdelight:cake_slice',
                'farmersdelight:cake_slice',
                'farmersdelight:cake_slice',
                'farmersdelight:cake_slice',
                'farmersdelight:cake_slice'
            ]
        );
        
        event.shaped(
            'minecraft:cake',
            [
                'AAA',
                'BCB',
                'DDD'
            ],
            {
                A: '#forge:milk',
                B: 'minecraft:sugar',
                C: '#forge:eggs',
                D: 'minecraft:wheat'
            }
        );
        event.shaped(
            'minecraft:cake',
            [
                ' A ',
                'BCB',
                ' D '
            ],
            {
                A: '#forge:milk',
                B: 'minecraft:sugar',
                C: '#forge:eggs',
                D: '#forge:dough'
            }
        );

        // Removing water-based Alex's Mobs food recipes
        event.remove({output: 'alexsdelight:cooked_catfish_slice'});
        event.remove({output: 'alexsdelight:lobster_pasta'});
        event.remove({output: 'alexsdelight:raw_catfish_slice'});
        event.remove({output: 'alexsmobs:cooked_catfish'});
        event.remove({output: 'alexsmobs:cooked_lobster_tail'});
        event.remove({output: 'alexsmobs:fish_oil'});
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
        // Adding modded meats to origins compatibility
        const meats = [
            "ironsspellsdelight:blood_vial_cake",
            "ironsspellsdelight:blood_vial_cookie",
            "ironsspellsdelight:blood_vial_jam",
            "ironsspellsdelight:blood_vial_pie",
            "mowziesdelight:naga_tail",
            "mowziesdelight:cooked_foliaath",
            "mowziesdelight:frostmaw_steak",
            "mowziesdelight:marinated_naga_tail",
            "mowziesdelight:cooked_grottol_meat",
            "mowziesdelight:cooked_naga_meat",
            "mowziesdelight:cooked_umvuthana",
            "mowziesdelight:cut_cooked_naga_meat",
            "mowziesdelight:cut_cooked_umvuthana",
            "mowziesdelight:cut_frostmaw_steak",
            "mowziesdelight:cut_grottol_meat",
            "mowziesdelight:cut_naga_meat",
            "mowziesdelight:cut_umvuthana",
            "mowziesdelight:grottol_meat",
            "mowziesdelight:grottol_wrap",
            "mowziesdelight:hamburger_of_umvuthana",
            "mowziesdelight:ice_sandwich",
            "mowziesdelight:marinated_naga_heart",
            "mowziesdelight:naga_heart",
            "mowziesdelight:naga_meat",
            "mowziesdelight:naga_soup",
            "mowziesdelight:umvuthana",
            "biomesoplentydelight:cooked_bramble",
            "biomesoplentydelight:flesh",
            "biomesoplentydelight:bramble_and_spider_egg",
            "biomesoplentydelight:bramble_pasta",
            "biomesoplentydelight:bramble_pasta_with_spider_egg",
            "biomesoplentydelight:bramble_sandwich",
            "biomesoplentydelight:cooked_spider_egg",
            "biomesoplentydelight:spider_egg_sandwich",
            "biomesoplentydelight:spider_noodle_soup",
            "alexsdelight:kangaroo_shank",
            "alexsdelight:cooked_kangaroo_shank",
            "alexsdelight:loose_moose_rib",
            "alexsdelight:cooked_loose_moose_rib",
            "alexsdelight:bison_mince",
            "alexsdelight:bison_patty",
            "alexsdelight:raw_bunfungus_drumstick",
            "alexsdelight:cooked_bunfungus_drumstick",
            "alexsdelight:raw_bison",
            "alexsdelight:cooked_bison",
            "alexsdelight:raw_bunfungus",
            "alexsdelight:cooked_bunfungus",
            "alexsdelight:cooked_centipede_leg",
            "alexsdelight:gongylidia_brushcetta",
            "alexsdelight:maggot_salad",
            "alexsdelight:kangaroo_stew",
            "alexsdelight:bison_burger",
            "alexsdelight:bunfunugs_sandwich",
            "alexsdelight:kangaroo_pasta",
            "farmersdelight:minced_beef",
            "farmersdelight:beef_patty",
            "farmersdelight:chicken_cuts",
            "farmersdelight:cooked_chicken_cuts",
            "farmersdelight:bacon",
            "farmersdelight:cooked_bacon",
            "farmersdelight:cod_slice",
            "farmersdelight:cooked_cod_slice",
            "farmersdelight:salmon_slice",
            "farmersdelight:cooked_salmon_slice",
            "farmersdelight:mutton_chops",
            "farmersdelight:cooked_mutton_chops",
            "farmersdelight:ham",
            "farmersdelight:smoked_ham",
            "farmersdelight:egg_sandwich",
            "farmersdelight:chicken_sandwich",
            "farmersdelight:hamburger",
            "farmersdelight:bacon_sandwich",
            "farmersdelight:mutton_wrap",
            "farmersdelight:dumplings",
            "farmersdelight:stuffed_potato",
            "farmersdelight:cabbage_rolls",
            "farmersdelight:salmon_roll",
            "farmersdelight:cod_roll",
            "farmersdelight:bone_broth",
            "farmersdelight:beef_stew",
            "farmersdelight:chicken_soup",
            "farmersdelight:fish_stew",
            "farmersdelight:fried_rice",
            "farmersdelight:baked_cod_stew",
            "farmersdelight:noodle_soup",
            "farmersdelight:bacon_and_eggs",
            "farmersdelight:pasta_with_meatballs",
            "farmersdelight:pasta_with_mutton_chop",
            "farmersdelight:roasted_mutton_chops",
            "farmersdelight:steak_and_potatoes",
            "farmersdelight:squid_ink_pasta",
            "farmersdelight:grilled_salmon",
            "farmersdelight:roast_chicken",
            "farmersdelight:honey_glazed_ham",
            "farmersdelight:shepherds_pie",
            "farmersdelight:dog_food",
            "alexsmobs:mosquito_repellent_stew",
            "alexsmobs:kangaroo_burger",
            "alexsmobs:kangaroo_meat",
            "alexsmobs:cooked_kangaroo_meat",
            "alexsmobs:boiled_emu_egg",
            "alexsmobs:moose_ribs",
            "alexsmobs:cooked_moose_ribs"
        ];
    
        meats.forEach(
            meat => {
                event.get('origins:meat').add(meat);
            }
        );

        // Removing water-based Alex's Mobs food recipes
        event.remove('minecraft:fishes', 'alexsmobs:blobfish');
        event.remove('minecraft:fishes', 'alexsmobs:raw_catfish');
        event.remove('minecraft:fishes', 'alexsmobs:cooked_catfish');
    }
);
