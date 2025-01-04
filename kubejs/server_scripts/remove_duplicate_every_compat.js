// Removing duplicate compat wood items
ServerEvents.recipes(
    event => {
        event.remove({output: 'everycomp:mcb/biomesoplenty/fir_bridge_pier'});
        event.remove({output: 'everycomp:mcb/biomesoplenty/fir_log_bridge_middle'});
        event.remove({output: 'everycomp:mcb/biomesoplenty/fir_log_bridge_stair'});
        event.remove({output: 'everycomp:mcb/biomesoplenty/fir_rail_bridge'});
        event.remove({output: 'everycomp:mcb/biomesoplenty/fir_rope_bridge_stair'});
        event.remove({output: 'everycomp:mcb/biomesoplenty/jacaranda_bridge_pier'});
        event.remove({output: 'everycomp:mcb/biomesoplenty/jacaranda_log_bridge_middle'});
        event.remove({output: 'everycomp:mcb/biomesoplenty/jacaranda_log_bridge_stair'});
        event.remove({output: 'everycomp:mcb/biomesoplenty/jacaranda_rail_bridge'});
        event.remove({output: 'everycomp:mcb/biomesoplenty/jacaranda_rope_bridge_stair'});
        event.remove({output: 'everycomp:mcb/biomesoplenty/rope_fir_bridge'});
        event.remove({output: 'everycomp:mcb/biomesoplenty/rope_jacaranda_bridge'});
    }
)