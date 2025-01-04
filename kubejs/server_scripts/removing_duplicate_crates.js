// Removing duplicate carrot and beetroot crates
ServerEvents.recipes(
    event => {
        const vegetables = [
            'beetroot',
            'carrot',
            'potato'
        ];

        vegetables.forEach(
            vegetable => {
                event.remove({input: `quark:${vegetable}_crate`});

                event.remove({output: `quark:${vegetable}_crate`});
            }
        );
    }
)