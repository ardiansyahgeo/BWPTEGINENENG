var wms_layers = [];


        var lyr_HYBRID_0 = new ol.layer.Tile({
            'title': 'HYBRID',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_google_1 = new ol.layer.Tile({
            'title': 'google',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_KI_MP_2 = new ol.format.GeoJSON();
var features_KI_MP_2 = format_KI_MP_2.readFeatures(json_KI_MP_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KI_MP_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KI_MP_2.addFeatures(features_KI_MP_2);
var lyr_KI_MP_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KI_MP_2, 
                style: style_KI_MP_2,
                interactive: true,
                title: '<img src="styles/legend/KI_MP_2.png" /> KI_MP'
            });
var format_KPI_3 = new ol.format.GeoJSON();
var features_KPI_3 = format_KPI_3.readFeatures(json_KPI_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KPI_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KPI_3.addFeatures(features_KPI_3);
var lyr_KPI_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KPI_3, 
                style: style_KPI_3,
                interactive: true,
                title: '<img src="styles/legend/KPI_3.png" /> KPI'
            });
var format_batas_desa_4 = new ol.format.GeoJSON();
var features_batas_desa_4 = format_batas_desa_4.readFeatures(json_batas_desa_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batas_desa_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batas_desa_4.addFeatures(features_batas_desa_4);
var lyr_batas_desa_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_batas_desa_4, 
                style: style_batas_desa_4,
                interactive: true,
                title: '<img src="styles/legend/batas_desa_4.png" /> batas_desa'
            });
var format_LBS_TERKOREKSI_WP_5 = new ol.format.GeoJSON();
var features_LBS_TERKOREKSI_WP_5 = format_LBS_TERKOREKSI_WP_5.readFeatures(json_LBS_TERKOREKSI_WP_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LBS_TERKOREKSI_WP_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LBS_TERKOREKSI_WP_5.addFeatures(features_LBS_TERKOREKSI_WP_5);
var lyr_LBS_TERKOREKSI_WP_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LBS_TERKOREKSI_WP_5, 
                style: style_LBS_TERKOREKSI_WP_5,
                interactive: true,
                title: '<img src="styles/legend/LBS_TERKOREKSI_WP_5.png" /> LBS_TERKOREKSI_WP'
            });

lyr_HYBRID_0.setVisible(false);lyr_google_1.setVisible(true);lyr_KI_MP_2.setVisible(false);lyr_KPI_3.setVisible(false);lyr_batas_desa_4.setVisible(true);lyr_LBS_TERKOREKSI_WP_5.setVisible(false);
var layersList = [lyr_HYBRID_0,lyr_google_1,lyr_KI_MP_2,lyr_KPI_3,lyr_batas_desa_4,lyr_LBS_TERKOREKSI_WP_5];
lyr_KI_MP_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KODSWP': 'KODSWP', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_KPI_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KODSWP': 'KODSWP', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_batas_desa_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKD': 'WADMKD', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_LBS_TERKOREKSI_WP_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMPR': 'WADMPR', 'Update2020': 'Update2020', 'Luas2020': 'Luas2020', 'Update2021': 'Update2021', 'Luas_2021': 'Luas_2021', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_KI_MP_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'KODSWP': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_KPI_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'KODSWP': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_batas_desa_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKD': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_LBS_TERKOREKSI_WP_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMPR': 'TextEdit', 'Update2020': 'TextEdit', 'Luas2020': 'TextEdit', 'Update2021': 'TextEdit', 'Luas_2021': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_KI_MP_2.set('fieldLabels', {'OBJECTID': 'inline label', 'KODSWP': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_KPI_3.set('fieldLabels', {'OBJECTID': 'inline label', 'KODSWP': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_batas_desa_4.set('fieldLabels', {'OBJECTID': 'inline label', 'WADMKD': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_LBS_TERKOREKSI_WP_5.set('fieldLabels', {'OBJECTID': 'inline label', 'WADMPR': 'inline label', 'Update2020': 'inline label', 'Luas2020': 'inline label', 'Update2021': 'inline label', 'Luas_2021': 'inline label', 'SHAPE_Leng': 'inline label', 'SHAPE_Area': 'inline label', });
lyr_LBS_TERKOREKSI_WP_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});