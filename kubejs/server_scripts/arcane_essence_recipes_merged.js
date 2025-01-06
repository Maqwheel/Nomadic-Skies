ServerEvents.recipes(
    event => {
        event.remove({output: 'irons_spellbooks:arcane_essence'});

        event.shapeless('irons_spellbooks:arcane_essence', 'arcaneessenceblock:essence_sack');
    }
)
