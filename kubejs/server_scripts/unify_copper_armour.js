// Removing duplicate copper armour
ServerEvents.recipes(
    event => {
        event.remove({output: 'create_sa:copper_helmet'})
        event.remove({output: 'create_sa:copper_chestplate'})
        event.remove({output: 'create_sa:copper_leggings'})
        event.remove({output: 'create_sa:copper_boots'})
    }
)