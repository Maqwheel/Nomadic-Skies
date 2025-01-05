// Removes sandpaper that is added for mods we don't have
const sandpaperTypes = [
    "arid",
    "blue",
    "brown",
    "coral",
    "foamy",
    "green",
    "mars",
    "mineral",
    "moon",
    "pink",
    "quartzite",
    "red_arid",
    "soulless",
    "venus",
    "violet",
    "windswept"
];

ServerEvents.recipes(
    event => {
        sandpaperTypes.forEach(
            sandpaperType => {
                event.remove({output: `createsandpapers:${sandpaperType}_sand_paper`});
            }
        )
    }
)

ServerEvents.tags(
    'item',
    event => {
        sandpaperTypes.forEach(
            sandpaperType => {
                event.remove('create:sandpaper', `createsandpapers:${sandpaperType}_sand_paper`);
            }
        )
    }
)
