// Removing duplicate brass ingot
ServerEvents.recipes(
    event => {
        event.replaceInput({}, 'nebulus_desert_trader:brass_ingot', 'create:brass_ingot');
        event.remove({output: 'nebulus_desert_trader:brass_ingot'});
    }
)
