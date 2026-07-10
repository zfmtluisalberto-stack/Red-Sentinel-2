var wms_layers = [];

var format_poligono_bcs_0 = new ol.format.GeoJSON();
var features_poligono_bcs_0 = format_poligono_bcs_0.readFeatures(json_poligono_bcs_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poligono_bcs_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poligono_bcs_0.addFeatures(features_poligono_bcs_0);
var lyr_poligono_bcs_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poligono_bcs_0, 
                style: style_poligono_bcs_0,
                popuplayertitle: 'poligono_bcs',
                interactive: true,
                title: '<img src="styles/legend/poligono_bcs_0.png" /> poligono_bcs'
            });
var format_sentinel2_tiles_world_1 = new ol.format.GeoJSON();
var features_sentinel2_tiles_world_1 = format_sentinel2_tiles_world_1.readFeatures(json_sentinel2_tiles_world_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sentinel2_tiles_world_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sentinel2_tiles_world_1.addFeatures(features_sentinel2_tiles_world_1);
var lyr_sentinel2_tiles_world_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sentinel2_tiles_world_1, 
                style: style_sentinel2_tiles_world_1,
                popuplayertitle: 'sentinel2_tiles_world',
                interactive: true,
                title: '<img src="styles/legend/sentinel2_tiles_world_1.png" /> sentinel2_tiles_world'
            });

lyr_poligono_bcs_0.setVisible(true);lyr_sentinel2_tiles_world_1.setVisible(true);
var layersList = [lyr_poligono_bcs_0,lyr_sentinel2_tiles_world_1];
lyr_poligono_bcs_0.set('fieldAliases', {'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOM_MUN': 'NOM_MUN', 'OID_1': 'OID_1', 'cov_': 'cov_', 'cov_id': 'cov_id', 'layer': 'layer', 'path': 'path', });
lyr_sentinel2_tiles_world_1.set('fieldAliases', {'Name': 'Name', });
lyr_poligono_bcs_0.set('fieldImages', {'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'OID_1': 'TextEdit', 'cov_': 'TextEdit', 'cov_id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_sentinel2_tiles_world_1.set('fieldImages', {'Name': 'TextEdit', });
lyr_poligono_bcs_0.set('fieldLabels', {'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOM_MUN': 'no label', 'OID_1': 'no label', 'cov_': 'no label', 'cov_id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_sentinel2_tiles_world_1.set('fieldLabels', {'Name': 'no label', });
lyr_sentinel2_tiles_world_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});