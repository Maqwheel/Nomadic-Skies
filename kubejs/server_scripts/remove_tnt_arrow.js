// Removing duplicate TNT arrow
ServerEvents.recipes(
    event => {
        event.remove({output: 'more_bows_and_arrows:tnt_arrow'});
    }
)