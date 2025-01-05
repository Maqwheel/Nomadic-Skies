ServerEvents.recipes(
    event => {
        const foods =  [
            'createfood:raw_ube_cake_base',
            'createfood:raw_ube_cookie',
            'createfood:ube_sugar_dough',
            'createfood:ube_cake_base',
            'createfood:ube_cream_frosted_ube_cake',
            'createfood:ube_cream_frosting',
            'createfood:ube_cream_frosting_bottle',
            'createfood:ube_cream_frosting_bucket'
        ]

        foods.forEach(
            food => {
                event.remove({input: food});
                event.remove({output: food});
            }
        )
    }
)