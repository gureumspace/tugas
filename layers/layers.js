var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_googlesattelite_1 = new ol.layer.Tile({
            'title': 'google sattelite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_Perusahaan_23_2 = new ol.format.GeoJSON();
var features_Perusahaan_23_2 = format_Perusahaan_23_2.readFeatures(json_Perusahaan_23_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perusahaan_23_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perusahaan_23_2.addFeatures(features_Perusahaan_23_2);
var lyr_Perusahaan_23_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Perusahaan_23_2, 
                style: style_Perusahaan_23_2,
                interactive: true,
                title: '<img src="styles/legend/Perusahaan_23_2.png" /> Perusahaan_23'
            });
var format_pemukimantidakteratur_3 = new ol.format.GeoJSON();
var features_pemukimantidakteratur_3 = format_pemukimantidakteratur_3.readFeatures(json_pemukimantidakteratur_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pemukimantidakteratur_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pemukimantidakteratur_3.addFeatures(features_pemukimantidakteratur_3);
var lyr_pemukimantidakteratur_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pemukimantidakteratur_3, 
                style: style_pemukimantidakteratur_3,
                interactive: true,
                title: '<img src="styles/legend/pemukimantidakteratur_3.png" /> pemukiman tidak teratur'
            });
var format_lahanterbuka_23_4 = new ol.format.GeoJSON();
var features_lahanterbuka_23_4 = format_lahanterbuka_23_4.readFeatures(json_lahanterbuka_23_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lahanterbuka_23_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lahanterbuka_23_4.addFeatures(features_lahanterbuka_23_4);
var lyr_lahanterbuka_23_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lahanterbuka_23_4, 
                style: style_lahanterbuka_23_4,
                interactive: true,
                title: '<img src="styles/legend/lahanterbuka_23_4.png" /> lahan terbuka_23'
            });
var format_pendidikan_23_5 = new ol.format.GeoJSON();
var features_pendidikan_23_5 = format_pendidikan_23_5.readFeatures(json_pendidikan_23_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pendidikan_23_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pendidikan_23_5.addFeatures(features_pendidikan_23_5);
var lyr_pendidikan_23_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pendidikan_23_5, 
                style: style_pendidikan_23_5,
                interactive: true,
                title: '<img src="styles/legend/pendidikan_23_5.png" /> pendidikan_23'
            });
var format_pemukimantertata_23_6 = new ol.format.GeoJSON();
var features_pemukimantertata_23_6 = format_pemukimantertata_23_6.readFeatures(json_pemukimantertata_23_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pemukimantertata_23_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pemukimantertata_23_6.addFeatures(features_pemukimantertata_23_6);
var lyr_pemukimantertata_23_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pemukimantertata_23_6, 
                style: style_pemukimantertata_23_6,
                interactive: true,
                title: '<img src="styles/legend/pemukimantertata_23_6.png" /> pemukiman tertata_23'
            });
var format_pemukimanteratur_7 = new ol.format.GeoJSON();
var features_pemukimanteratur_7 = format_pemukimanteratur_7.readFeatures(json_pemukimanteratur_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pemukimanteratur_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pemukimanteratur_7.addFeatures(features_pemukimanteratur_7);
var lyr_pemukimanteratur_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pemukimanteratur_7, 
                style: style_pemukimanteratur_7,
                interactive: true,
                title: '<img src="styles/legend/pemukimanteratur_7.png" /> pemukiman teratur'
            });
var format_Lahanterbuka_8 = new ol.format.GeoJSON();
var features_Lahanterbuka_8 = format_Lahanterbuka_8.readFeatures(json_Lahanterbuka_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lahanterbuka_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lahanterbuka_8.addFeatures(features_Lahanterbuka_8);
var lyr_Lahanterbuka_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lahanterbuka_8, 
                style: style_Lahanterbuka_8,
                interactive: true,
                title: '<img src="styles/legend/Lahanterbuka_8.png" /> Lahan terbuka'
            });
var format_3kecamatandissolved_9 = new ol.format.GeoJSON();
var features_3kecamatandissolved_9 = format_3kecamatandissolved_9.readFeatures(json_3kecamatandissolved_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3kecamatandissolved_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3kecamatandissolved_9.addFeatures(features_3kecamatandissolved_9);
var lyr_3kecamatandissolved_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_3kecamatandissolved_9, 
                style: style_3kecamatandissolved_9,
                interactive: true,
                title: '<img src="styles/legend/3kecamatandissolved_9.png" /> 3kecamatan — dissolved'
            });
var format_tambaksarii_10 = new ol.format.GeoJSON();
var features_tambaksarii_10 = format_tambaksarii_10.readFeatures(json_tambaksarii_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tambaksarii_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tambaksarii_10.addFeatures(features_tambaksarii_10);
var lyr_tambaksarii_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tambaksarii_10, 
                style: style_tambaksarii_10,
                interactive: true,
                title: '<img src="styles/legend/tambaksarii_10.png" /> tambaksarii'
            });
var format_jalandipotongcopy_11 = new ol.format.GeoJSON();
var features_jalandipotongcopy_11 = format_jalandipotongcopy_11.readFeatures(json_jalandipotongcopy_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalandipotongcopy_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalandipotongcopy_11.addFeatures(features_jalandipotongcopy_11);
var lyr_jalandipotongcopy_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalandipotongcopy_11, 
                style: style_jalandipotongcopy_11,
                interactive: true,
                title: '<img src="styles/legend/jalandipotongcopy_11.png" /> jalan dipotong copy'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_googlesattelite_1.setVisible(true);lyr_Perusahaan_23_2.setVisible(true);lyr_pemukimantidakteratur_3.setVisible(true);lyr_lahanterbuka_23_4.setVisible(true);lyr_pendidikan_23_5.setVisible(true);lyr_pemukimantertata_23_6.setVisible(true);lyr_pemukimanteratur_7.setVisible(true);lyr_Lahanterbuka_8.setVisible(true);lyr_3kecamatandissolved_9.setVisible(true);lyr_tambaksarii_10.setVisible(true);lyr_jalandipotongcopy_11.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_googlesattelite_1,lyr_Perusahaan_23_2,lyr_pemukimantidakteratur_3,lyr_lahanterbuka_23_4,lyr_pendidikan_23_5,lyr_pemukimantertata_23_6,lyr_pemukimanteratur_7,lyr_Lahanterbuka_8,lyr_3kecamatandissolved_9,lyr_tambaksarii_10,lyr_jalandipotongcopy_11];
lyr_Perusahaan_23_2.set('fieldAliases', {'id': 'id', });
lyr_pemukimantidakteratur_3.set('fieldAliases', {'id': 'id', 'luas_ha': 'luas_ha', });
lyr_lahanterbuka_23_4.set('fieldAliases', {'id': 'id', });
lyr_pendidikan_23_5.set('fieldAliases', {'id': 'id', });
lyr_pemukimantertata_23_6.set('fieldAliases', {'id': 'id', });
lyr_pemukimanteratur_7.set('fieldAliases', {'id': 'id', });
lyr_Lahanterbuka_8.set('fieldAliases', {'id': 'id', 'luas_ha': 'luas_ha', });
lyr_3kecamatandissolved_9.set('fieldAliases', {'fid': 'fid', 'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_tambaksarii_10.set('fieldAliases', {});
lyr_jalandipotongcopy_11.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Perusahaan_23_2.set('fieldImages', {'id': '', });
lyr_pemukimantidakteratur_3.set('fieldImages', {'id': 'TextEdit', 'luas_ha': 'TextEdit', });
lyr_lahanterbuka_23_4.set('fieldImages', {'id': '', });
lyr_pendidikan_23_5.set('fieldImages', {'id': '', });
lyr_pemukimantertata_23_6.set('fieldImages', {'id': '', });
lyr_pemukimanteratur_7.set('fieldImages', {'id': '', });
lyr_Lahanterbuka_8.set('fieldImages', {'id': 'TextEdit', 'luas_ha': 'TextEdit', });
lyr_3kecamatandissolved_9.set('fieldImages', {'fid': 'TextEdit', 'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_tambaksarii_10.set('fieldImages', {});
lyr_jalandipotongcopy_11.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Perusahaan_23_2.set('fieldLabels', {'id': 'no label', });
lyr_pemukimantidakteratur_3.set('fieldLabels', {'id': 'no label', 'luas_ha': 'no label', });
lyr_lahanterbuka_23_4.set('fieldLabels', {'id': 'no label', });
lyr_pendidikan_23_5.set('fieldLabels', {'id': 'no label', });
lyr_pemukimantertata_23_6.set('fieldLabels', {'id': 'no label', });
lyr_pemukimanteratur_7.set('fieldLabels', {'id': 'no label', });
lyr_Lahanterbuka_8.set('fieldLabels', {'id': 'no label', 'luas_ha': 'no label', });
lyr_3kecamatandissolved_9.set('fieldLabels', {'fid': 'no label', 'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_tambaksarii_10.set('fieldLabels', {});
lyr_jalandipotongcopy_11.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_jalandipotongcopy_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});