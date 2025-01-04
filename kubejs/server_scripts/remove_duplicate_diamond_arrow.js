// Removing duplicate diamond arrow
ServerEvents.recipes(
    event => {
        event.remove({output: 'archers_paradox:diamond_arrow'});
    }
)