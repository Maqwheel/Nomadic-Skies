execute positioned ~-1 ~ ~ if block ~ ~ ~ #custom_nether_portals:air if entity @e[type=minecraft:area_effect_cloud,tag=cusNetPor.marker,distance=..0.1] run scoreboard players set #success cusNetPor.dummy -1
execute positioned ~1 ~ ~ if block ~ ~ ~ #custom_nether_portals:air if entity @e[type=minecraft:area_effect_cloud,tag=cusNetPor.marker,distance=..0.1] run scoreboard players set #success cusNetPor.dummy -1