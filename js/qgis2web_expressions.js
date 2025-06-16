// Aggregates

// Color

// Conditionals
function fnc_coalesce(values, context) {
    for (i = 0; i < values.length; i++) {
        if (values[i] !== null) {
            return values[i];
        }
        
    }
    return 'ERROR';
};

// Conversions

// Custom

// Date and Time

// Fields and Values

// Fuzzy Matching

// General

// Geometry
function fnc_azimuth(values, context) {
    return false;
};

function fnc_project(values, context) {
    return false;
};

// Math
function fnc_abs(values, context) {
    return Math.abs(values[0]);
};

function fnc_degrees(values, context) {
    return values[0] * (180/Math.PI);
};

function fnc_radians(values, context) {
    return values[0] * (Math.PI/180);
};

function fnc_sqrt(values, context) {
    return Math.sqrt(values[0]);
};

function fnc_cos(values, context) {
    return Math.cos(values[0]);
};

function fnc_sin(values, context) {
    return Math.sin(values[0]);
};

function fnc_tan(values, context) {
    return Math.tan(values[0]);
};

function fnc_asin(values, context) {
    return Math.asin(values[0]);
};

function fnc_acos(values, context) {
    return Math.acos(values[0]);
};

function fnc_atan(values, context) {
    return Math.atan(values[0]);
};

function fnc_atan2(values, context) {
    return Math.atan2(values[0]);
};

function fnc_exp(values, context) {
    return Math.exp(values[0]);
};

function fnc_ln(values, context) {
    return Math.log(values[0]);
};

function fnc_log10(values, context) {
    return Math.log10(values[0]);
};

function fnc_log(values, context) {
    return Math.log(values[0]) / Math.log(values[1]);
};

function fnc_round(values, context) {
    return false;
};

function fnc_rand(values, context) {
    return Math.floor(Math.random()*(values[1]-values[0]+1)+values[0]);
};

function fnc_randf(values, context) {
    return Math.random()*(values[1]-values[0]+1)+values[0];
};

function fnc_max(values, context) {
    return Math.max.apply(this, values);
};

function fnc_min(values, context) {
    return Math.min.apply(this, values);
};

function fnc_clamp(values, context) {
    return false;
};

// Operators

// Record

// String

// TimeManager

// Variables



function fnc_scale_linear(values, context) {
    return false;
};

function fnc_scale_exp(values, context) {
    return false;
};

function fnc_floor(values, context) {
    return false;
};

function fnc_ceil(values, context) {
    return false;
};

function fnc_pi(values, context) {
    return false;
};

function fnc_to_int(values, context) {
    return false;
};

function fnc_to_real(values, context) {
    return false;
};

function fnc_to_string(values, context) {
    return false;
};

function fnc_to_datetime(values, context) {
    return false;
};

function fnc_to_date(values, context) {
    return false;
};

function fnc_to_time(values, context) {
    return false;
};

function fnc_to_interval(values, context) {
    return false;
};

function fnc_if(values, context) {
    return false;
};

function fnc_aggregate(values, context) {
    return false;
};

function fnc_relation_aggregate(values, context) {
    return false;
};

function fnc_count(values, context) {
    return false;
};

function fnc_count_distinct(values, context) {
    return false;
};

function fnc_count_missing(values, context) {
    return false;
};

function fnc_minimum(values, context) {
    return false;
};

function fnc_maximum(values, context) {
    return false;
};

function fnc_sum(values, context) {
    return false;
};

function fnc_mean(values, context) {
    return false;
};

function fnc_median(values, context) {
    return false;
};

function fnc_stdev(values, context) {
    return false;
};

function fnc_range(values, context) {
    return false;
};

function fnc_minority(values, context) {
    return false;
};

function fnc_majority(values, context) {
    return false;
};

function fnc_q1(values, context) {
    return false;
};

function fnc_q3(values, context) {
    return false;
};

function fnc_iqr(values, context) {
    return false;
};

function fnc_min_length(values, context) {
    return false;
};

function fnc_max_length(values, context) {
    return false;
};

function fnc_concatenate(values, context) {
    return false;
};

function fnc_regexp_match(values, context) {
    return false;
};

function fnc_now(values, context) {
    return false;
};

function fnc_age(values, context) {
    return false;
};

function fnc_year(values, context) {
    return false;
};

function fnc_month(values, context) {
    return false;
};

function fnc_week(values, context) {
    return false;
};

function fnc_day(values, context) {
    return false;
};

function fnc_hour(values, context) {
    return false;
};

function fnc_minute(values, context) {
    return false;
};

function fnc_second(values, context) {
    return false;
};

function fnc_day_of_week(values, context) {
    return false;
};

function fnc_lower(values, context) {
    return values[0].toLowerCase();
};

function fnc_upper(values, context) {
    return false;
};

function fnc_title(values, context) {
    return false;
};

function fnc_trim(values, context) {
    return false;
};

function fnc_levenshtein(values, context) {
    return false;
};

function fnc_longest_common_substring(values, context) {
    return false;
};

function fnc_hamming_distance(values, context) {
    return false;
};

function fnc_soundex(values, context) {
    return false;
};

function fnc_char(values, context) {
    return false;
};

function fnc_wordwrap(values, context) {
    return false;
};

function fnc_length(values, context) {
    return false;
};

function fnc_replace(values, context) {
    return false;
};

function fnc_regexp_replace(values, context) {
    return false;
};

function fnc_regexp_substr(values, context) {
    return false;
};

function fnc_substr(values, context) {
    return false;
};

function fnc_concat(values, context) {
    return false;
};

function fnc_strpos(values, context) {
    return false;
};

function fnc_left(values, context) {
    return false;
};

function fnc_right(values, context) {
    return false;
};

function fnc_rpad(values, context) {
    return false;
};

function fnc_lpad(values, context) {
    return false;
};

function fnc_format(values, context) {
    return false;
};

function fnc_format_number(values, context) {
    return false;
};

function fnc_format_date(values, context) {
    return false;
};

function fnc_color_rgb(values, context) {
    return false;
};

function fnc_color_rgba(values, context) {
    return false;
};

function fnc_ramp_color(values, context) {
    return false;
};

function fnc_color_hsl(values, context) {
    return false;
};

function fnc_color_hsla(values, context) {
    return false;
};

function fnc_color_hsv(values, context) {
    return false;
};

function fnc_color_hsva(values, context) {
    return false;
};

function fnc_color_cmyk(values, context) {
    return false;
};

function fnc_color_cmyka(values, context) {
    return false;
};

function fnc_color_part(values, context) {
    return false;
};

function fnc_darker(values, context) {
    return false;
};

function fnc_lighter(values, context) {
    return false;
};

function fnc_set_color_part(values, context) {
    return false;
};

function fnc_area(values, context) {
    return false;
};

function fnc_perimeter(values, context) {
    return false;
};

function fnc_x(values, context) {
    return false;
};

function fnc_y(values, context) {
    return false;
};

function fnc_z(values, context) {
    return false;
};

function fnc_m(values, context) {
    return false;
};

function fnc_point_n(values, context) {
    return false;
};

function fnc_start_point(values, context) {
    return false;
};

function fnc_end_point(values, context) {
    return false;
};

function fnc_nodes_to_points(values, context) {
    return false;
};

function fnc_segments_to_lines(values, context) {
    return false;
};

function fnc_make_point(values, context) {
    return false;
};

function fnc_make_point_m(values, context) {
    return false;
};

function fnc_make_line(values, context) {
    return false;
};

function fnc_make_polygon(values, context) {
    return false;
};

function fnc_x_min(values, context) {
    return false;
};

function fnc_x_max(values, context) {
    return false;
};

function fnc_y_min(values, context) {
    return false;
};

function fnc_y_max(values, context) {
    return false;
};

function fnc_geom_from_wkt(values, context) {
    return false;
};

function fnc_geom_from_gml(values, context) {
    return false;
};

function fnc_relate(values, context) {
    return false;
};

function fnc_intersects_bbox(values, context) {
    return false;
};

function fnc_disjoint(values, context) {
    return false;
};

function fnc_intersects(values, context) {
    return false;
};

function fnc_touches(values, context) {
    return false;
};

function fnc_crosses(values, context) {
    return false;
};

function fnc_contains(values, context) {
    return false;
};

function fnc_overlaps(values, context) {
    return false;
};

function fnc_within(values, context) {
    return false;
};

function fnc_translate(values, context) {
    return false;
};

function fnc_buffer(values, context) {
    return false;
};

function fnc_centroid(values, context) {
    return false;
};

function fnc_point_on_surface(values, context) {
    return false;
};

function fnc_reverse(values, context) {
    return false;
};

function fnc_exterior_ring(values, context) {
    return false;
};

function fnc_interior_ring_n(values, context) {
    return false;
};

function fnc_geometry_n(values, context) {
    return false;
};

function fnc_boundary(values, context) {
    return false;
};

function fnc_line_merge(values, context) {
    return false;
};

function fnc_bounds(values, context) {
    return false;
};

function fnc_num_points(values, context) {
    return false;
};

function fnc_num_interior_rings(values, context) {
    return false;
};

function fnc_num_rings(values, context) {
    return false;
};

function fnc_num_geometries(values, context) {
    return false;
};

function fnc_bounds_width(values, context) {
    return false;
};

function fnc_bounds_height(values, context) {
    return false;
};

function fnc_is_closed(values, context) {
    return false;
};

function fnc_convex_hull(values, context) {
    return false;
};

function fnc_difference(values, context) {
    return false;
};

function fnc_distance(values, context) {
    return false;
};

function fnc_intersection(values, context) {
    return false;
};

function fnc_sym_difference(values, context) {
    return false;
};

function fnc_combine(values, context) {
    return false;
};

function fnc_union(values, context) {
    return false;
};

function fnc_geom_to_wkt(values, context) {
    return false;
};

function fnc_geometry(values, context) {
    return false;
};

function fnc_transform(values, context) {
    return false;
};

function fnc_extrude(values, context) {
    return false;
};

function fnc_order_parts(values, context) {
    return false;
};

function fnc_closest_point(values, context) {
    return false;
};

function fnc_shortest_line(values, context) {
    return false;
};

function fnc_line_interpolate_point(values, context) {
    return false;
};

function fnc_line_interpolate_angle(values, context) {
    return false;
};

function fnc_line_locate_point(values, context) {
    return false;
};

function fnc_angle_at_vertex(values, context) {
    return false;
};

function fnc_distance_to_vertex(values, context) {
    return false;
};

function fnc_uuid(values, context) {
    return false;
};

function fnc_get_feature(values, context) {
    return false;
};

function fnc_layer_property(values, context) {
    return false;
};

function fnc_var(values, context) {
    return false;
};

function fnc_eval(values, context) {
    return false;
};

function fnc_attribute(values, context) {
    return false;
};

function fnc__specialcol_(values, context) {
    return false;
};

function fnc_project_color(values, context) {
    return false;
};



function exp__1rule0_eval_expression(context) {
    // landuse = 'forest'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['landuse']  == 'forest');
    } else {
        return (feature['landuse']  == 'forest');
    }
}


function exp__1rule1_eval_expression(context) {
    // landuse = 'reservoir' OR landuse = 'basin'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['landuse']  == 'reservoir') || (feature.properties['landuse']  == 'basin'));
    } else {
        return ((feature['landuse']  == 'reservoir') || (feature['landuse']  == 'basin'));
    }
}


function exp__1rule2_eval_expression(context) {
    // landuse = 'residential'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['landuse']  == 'residential');
    } else {
        return (feature['landuse']  == 'residential');
    }
}


function exp__1rule3_eval_expression(context) {
    // landuse = 'commercial' OR landuse = 'retail'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['landuse']  == 'commercial') || (feature.properties['landuse']  == 'retail'));
    } else {
        return ((feature['landuse']  == 'commercial') || (feature['landuse']  == 'retail'));
    }
}


function exp__1rule4_eval_expression(context) {
    // amenity = 'parking'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['amenity']  == 'parking');
    } else {
        return (feature['amenity']  == 'parking');
    }
}


function exp__1rule5_eval_expression(context) {
    // landuse = 'recreation_ground' OR leisure = 'park'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['landuse']  == 'recreation_ground') || (feature.properties['leisure']  == 'park'));
    } else {
        return ((feature['landuse']  == 'recreation_ground') || (feature['leisure']  == 'park'));
    }
}


function exp__1rule6_eval_expression(context) {
    // leisure = 'stadium' OR leisure = 'pitch' OR leisure = 'playground' OR leisure = 'sports_centre' OR leisure = 'fitness_station'

    var feature = context.feature;
    
    if (feature.properties) {
        return (((((feature.properties['leisure']  == 'stadium') || (feature.properties['leisure']  == 'pitch')) || (feature.properties['leisure']  == 'playground')) || (feature.properties['leisure']  == 'sports_centre')) || (feature.properties['leisure']  == 'fitness_station'));
    } else {
        return (((((feature['leisure']  == 'stadium') || (feature['leisure']  == 'pitch')) || (feature['leisure']  == 'playground')) || (feature['leisure']  == 'sports_centre')) || (feature['leisure']  == 'fitness_station'));
    }
}


function exp__1rule7_eval_expression(context) {
    // landuse = 'religious'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['landuse']  == 'religious');
    } else {
        return (feature['landuse']  == 'religious');
    }
}


function exp__1rule8_eval_expression(context) {
    // landuse = 'cemetery'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['landuse']  == 'cemetery');
    } else {
        return (feature['landuse']  == 'cemetery');
    }
}


function exp__1rule9_eval_expression(context) {
    // landuse = 'construction'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['landuse']  == 'construction');
    } else {
        return (feature['landuse']  == 'construction');
    }
}


function exp__1rule10_eval_expression(context) {
    // landuse = 'industrial'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['landuse']  == 'industrial');
    } else {
        return (feature['landuse']  == 'industrial');
    }
}


function exp__1rule11_eval_expression(context) {
    // landuse = 'quarry'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['landuse']  == 'quarry');
    } else {
        return (feature['landuse']  == 'quarry');
    }
}


function exp__1rule12_eval_expression(context) {
    // landuse = 'landfill'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['landuse']  == 'landfill');
    } else {
        return (feature['landuse']  == 'landfill');
    }
}


function exp__1rule13_eval_expression(context) {
    // landuse = 'railway'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['landuse']  == 'railway');
    } else {
        return (feature['landuse']  == 'railway');
    }
}


function exp__1rule14_eval_expression(context) {
    // landuse = 'allotments' OR landuse = 'orchard'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['landuse']  == 'allotments') || (feature.properties['landuse']  == 'orchard'));
    } else {
        return ((feature['landuse']  == 'allotments') || (feature['landuse']  == 'orchard'));
    }
}


function exp__1rule15_eval_expression(context) {
    // landuse = 'farmland'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['landuse']  == 'farmland');
    } else {
        return (feature['landuse']  == 'farmland');
    }
}


function exp__1rule16_eval_expression(context) {
    // landuse = 'farmyard'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['landuse']  == 'farmyard');
    } else {
        return (feature['landuse']  == 'farmyard');
    }
}


function exp__1rule17_eval_expression(context) {
    // landuse = 'garages'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['landuse']  == 'garages');
    } else {
        return (feature['landuse']  == 'garages');
    }
}


function exp__1rule18_eval_expression(context) {
    // landuse = 'meadow'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['landuse']  == 'meadow');
    } else {
        return (feature['landuse']  == 'meadow');
    }
}


function exp__1rule19_eval_expression(context) {
    // landuse = 'grass'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['landuse']  == 'grass');
    } else {
        return (feature['landuse']  == 'grass');
    }
}


function exp__1rule20_eval_expression(context) {
    // landuse = 'greenhouse_horticulture'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['landuse']  == 'greenhouse_horticulture');
    } else {
        return (feature['landuse']  == 'greenhouse_horticulture');
    }
}


function exp__5rule0_eval_expression(context) {
    // WATERWAY = 'big_river'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['WATERWAY']  == 'big_river');
    } else {
        return (feature['WATERWAY']  == 'big_river');
    }
}


function exp__5rule1_eval_expression(context) {
    // WATERWAY = 'river'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['WATERWAY']  == 'river');
    } else {
        return (feature['WATERWAY']  == 'river');
    }
}


function exp__5rule2_eval_expression(context) {
    // WATERWAY = 'stream'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['WATERWAY']  == 'stream');
    } else {
        return (feature['WATERWAY']  == 'stream');
    }
}


function exp__8rule0_eval_expression(context) {
    // fclass = 'primary'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['fclass']  == 'primary');
    } else {
        return (feature['fclass']  == 'primary');
    }
}


function exp__8rule1_eval_expression(context) {
    // fclass = 'tertiary'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['fclass']  == 'tertiary');
    } else {
        return (feature['fclass']  == 'tertiary');
    }
}