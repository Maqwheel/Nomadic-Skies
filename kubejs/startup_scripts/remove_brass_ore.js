WorldgenEvents.remove(
    event => {
        event.removeOres(
            ores => {
                ores.blocks = ['nebulus_desert_trader:brass']
            }
        )
    }
)