var wms_layers = [];


        var lyr_MAPS_0 = new ol.layer.Tile({
            'title': 'MAPS',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_CDMX_1 = new ol.format.GeoJSON();
var features_CDMX_1 = format_CDMX_1.readFeatures(json_CDMX_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CDMX_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CDMX_1.addFeatures(features_CDMX_1);
var lyr_CDMX_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CDMX_1, 
                style: style_CDMX_1,
                interactive: true,
                title: '<img src="styles/legend/CDMX_1.png" /> CDMX'
            });
var format_15062023prueba_2 = new ol.format.GeoJSON();
var features_15062023prueba_2 = format_15062023prueba_2.readFeatures(json_15062023prueba_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15062023prueba_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15062023prueba_2.addFeatures(features_15062023prueba_2);
var lyr_15062023prueba_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_15062023prueba_2, 
                style: style_15062023prueba_2,
                interactive: true,
                title: '<img src="styles/legend/15062023prueba_2.png" /> 15062023prueba'
            });

lyr_MAPS_0.setVisible(true);lyr_CDMX_1.setVisible(true);lyr_15062023prueba_2.setVisible(true);
var layersList = [lyr_MAPS_0,lyr_CDMX_1,lyr_15062023prueba_2];
lyr_CDMX_1.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'NOM_ENT': 'NOM_ENT', 'NOM_MUN': 'NOM_MUN', 'TRATA22': 'TRATA22', 'TRATA23': 'TRATA23', 'APPS': 'APPS', 'EXTOR': 'EXTOR', 'DISIAVID': 'DISIAVID', 'CHE02': 'CHE02', 'SUIC': 'SUIC', 'TASASUIC': 'TASASUIC', 'VIO': 'VIO', 'AS': 'AS', 'LD': 'LD', 'FEM': 'FEM', 'CHE': 'CHE', 'HOMBRES': 'HOMBRES', 'VIOFAM': 'VIOFAM', 'ECO': 'ECO', 'TRATA222': 'TRATA222', 'COMPA': 'COMPA', 'ECON': 'ECON', 'JOV22': 'JOV22', 'SEC22': 'SEC22', 'MUN19': 'MUN19', 'MUN21': 'MUN21', 'ENSUSEP21': 'ENSUSEP21', 'ENSUJSEP21': 'ENSUJSEP21', 'ENSUDIC212': 'ENSUDIC212', 'ENSUJDIC21': 'ENSUJDIC21', 'ENSUMAR22': 'ENSUMAR22', 'ENSUJMAR22': 'ENSUJMAR22', 'ENSUJUN22': 'ENSUJUN22', 'ENSUJUN222': 'ENSUJUN222', 'COMPA2': 'COMPA2', 'COMPA3': 'COMPA3', 'DIFE19': 'DIFE19', 'DIFE21': 'DIFE21', 'VIOFAM21': 'VIOFAM21', 'VIOFAM22': 'VIOFAM22', 'ALUMNOS': 'ALUMNOS', 'ADICCIONES': 'ADICCIONES', 'PARTICIPAC': 'PARTICIPAC', 'POBREZA': 'POBREZA', 'VIDAMARZO': 'VIDAMARZO', 'MEN20': 'MEN20', 'MEN21': 'MEN21', 'MEN22': 'MEN22', 'VIOEQUI': 'VIOEQUI', 'CUENTA202': 'CUENTA202', 'PASCOND203': 'PASCOND203', 'PESER2022': 'PESER2022', 'TAXI2022': 'TAXI2022', 'NNA2': 'NNA2', 'VIDA22': 'VIDA22', 'NNA': 'NNA', 'AMIGOS': 'AMIGOS', 'SEC21': 'SEC21', 'ANSDEPRE22': 'ANSDEPRE22', 'DEPRE22': 'DEPRE22', 'CONT2022': 'CONT2022', 'VIOEQ21': 'VIOEQ21', 'VIOLA21': 'VIOLA21', 'VIDA2021': 'VIDA2021', 'CHATS': 'CHATS', 'SEC2021': 'SEC2021', 'PARIENTES': 'PARIENTES', 'MUJERES': 'MUJERES', 'PASAJERO': 'PASAJERO', 'PESERO': 'PESERO', 'HOMICIDIO': 'HOMICIDIO', 'TAXI': 'TAXI', 'CUENTAHABI': 'CUENTAHABI', 'SEC212': 'SEC212', 'MUJERES202': 'MUJERES202', 'MALTRATOIN': 'MALTRATOIN', 'VIO19': 'VIO19', 'VIO20': 'VIO20', 'VIO21': 'VIO21', 'PARIENTE': 'PARIENTE', 'DIVER': 'DIVER', 'DVIDA': 'DVIDA', 'ADULTOS21': 'ADULTOS21', 'SALUDMENTA': 'SALUDMENTA', 'ATENCIONES': 'ATENCIONES', 'EXTCONS': 'EXTCONS', 'EXTORSI': 'EXTORSI', 'FRAUDE': 'FRAUDE', 'AUTOVIO': 'AUTOVIO', 'AUTOSIN': 'AUTOSIN', 'COMPA22': 'COMPA22', 'PERSONA': 'PERSONA', 'SUICI20': 'SUICI20', 'SUICI21': 'SUICI21', 'VIOFAM212': 'VIOFAM212', 'COBRA21': 'COBRA21', 'ELECCIONES': 'ELECCIONES', 'ATENCIONE2': 'ATENCIONE2', 'VIOFAM20': 'VIOFAM20', 'VIOFAM2122': 'VIOFAM2122', 'CARPETAS_V': 'CARPETAS_V', 'ROBOTRANSE': 'ROBOTRANSE', 'ROBOMETROB': 'ROBOMETROB', 'ROBOPESERO': 'ROBOPESERO', 'TAXICONVIO': 'TAXICONVIO', 'ROBOPASVEH': 'ROBOPASVEH', 'ROBOCUENTA': 'ROBOCUENTA', 'ROBOREPART': 'ROBOREPART', 'ROBOVEHIC': 'ROBOVEHIC', 'ROBOTPC': 'ROBOTPC', 'ABUSOSEX': 'ABUSOSEX', 'ACOSOSEX': 'ACOSOSEX', 'SAIKUTRATA': 'SAIKUTRATA', 'SEXUALES': 'SEXUALES', 'EJECUTIVOD': 'EJECUTIVOD', 'EJECUTIVOF': 'EJECUTIVOF', 'EXTORSION': 'EXTORSION', 'COMPA20': 'COMPA20', 'COMPA21': 'COMPA21', 'SUICACTASA': 'SUICACTASA', 'SUICIDIOAC': 'SUICIDIOAC', 'SUICONSEJO': 'SUICONSEJO', 'NUMEXTOR': 'NUMEXTOR', 'VIOFAM2': 'VIOFAM2', 'MALTRATOI2': 'MALTRATOI2', 'DIGNIDADMA': 'DIGNIDADMA', 'ADICCIONE2': 'ADICCIONE2', 'MUJERES2': 'MUJERES2', 'MUJERES1': 'MUJERES1', 'PAOT': 'PAOT', 'OID_1': 'OID_1', 'INSEGURIDA': 'INSEGURIDA', 'DELITOS_1': 'DELITOS_1', });
lyr_15062023prueba_2.set('fieldAliases', {'longitud': 'longitud', 'latitud': 'latitud', });
lyr_CDMX_1.set('fieldImages', {'CVEGEO': 'TextEdit', 'NOM_ENT': 'TextEdit', 'NOM_MUN': 'TextEdit', 'TRATA22': 'Range', 'TRATA23': 'Range', 'APPS': 'Range', 'EXTOR': 'Range', 'DISIAVID': 'TextEdit', 'CHE02': 'Range', 'SUIC': 'Range', 'TASASUIC': 'TextEdit', 'VIO': 'Range', 'AS': 'TextEdit', 'LD': 'TextEdit', 'FEM': 'TextEdit', 'CHE': 'Range', 'HOMBRES': 'Range', 'VIOFAM': 'Range', 'ECO': 'Range', 'TRATA222': 'Range', 'COMPA': 'Range', 'ECON': 'Range', 'JOV22': 'Range', 'SEC22': 'TextEdit', 'MUN19': 'TextEdit', 'MUN21': 'TextEdit', 'ENSUSEP21': 'TextEdit', 'ENSUJSEP21': 'TextEdit', 'ENSUDIC212': 'TextEdit', 'ENSUJDIC21': 'TextEdit', 'ENSUMAR22': 'TextEdit', 'ENSUJMAR22': 'TextEdit', 'ENSUJUN22': 'TextEdit', 'ENSUJUN222': 'TextEdit', 'COMPA2': 'TextEdit', 'COMPA3': 'TextEdit', 'DIFE19': 'TextEdit', 'DIFE21': 'TextEdit', 'VIOFAM21': 'TextEdit', 'VIOFAM22': 'TextEdit', 'ALUMNOS': 'TextEdit', 'ADICCIONES': 'TextEdit', 'PARTICIPAC': 'TextEdit', 'POBREZA': 'TextEdit', 'VIDAMARZO': 'TextEdit', 'MEN20': 'TextEdit', 'MEN21': 'TextEdit', 'MEN22': 'TextEdit', 'VIOEQUI': 'TextEdit', 'CUENTA202': 'TextEdit', 'PASCOND203': 'TextEdit', 'PESER2022': 'TextEdit', 'TAXI2022': 'TextEdit', 'NNA2': 'TextEdit', 'VIDA22': 'TextEdit', 'NNA': 'TextEdit', 'AMIGOS': 'TextEdit', 'SEC21': 'TextEdit', 'ANSDEPRE22': 'Range', 'DEPRE22': 'Range', 'CONT2022': 'Range', 'VIOEQ21': 'TextEdit', 'VIOLA21': 'TextEdit', 'VIDA2021': 'TextEdit', 'CHATS': 'TextEdit', 'SEC2021': 'TextEdit', 'PARIENTES': 'Range', 'MUJERES': 'Range', 'PASAJERO': 'TextEdit', 'PESERO': 'TextEdit', 'HOMICIDIO': 'TextEdit', 'TAXI': 'TextEdit', 'CUENTAHABI': 'TextEdit', 'SEC212': 'TextEdit', 'MUJERES202': 'Range', 'MALTRATOIN': 'Range', 'VIO19': 'Range', 'VIO20': 'Range', 'VIO21': 'Range', 'PARIENTE': 'Range', 'DIVER': 'Range', 'DVIDA': 'Range', 'ADULTOS21': 'Range', 'SALUDMENTA': 'Range', 'ATENCIONES': 'Range', 'EXTCONS': 'Range', 'EXTORSI': 'Range', 'FRAUDE': 'Range', 'AUTOVIO': 'Range', 'AUTOSIN': 'Range', 'COMPA22': 'Range', 'PERSONA': 'Range', 'SUICI20': 'TextEdit', 'SUICI21': 'TextEdit', 'VIOFAM212': 'TextEdit', 'COBRA21': 'TextEdit', 'ELECCIONES': 'TextEdit', 'ATENCIONE2': 'Range', 'VIOFAM20': 'TextEdit', 'VIOFAM2122': 'TextEdit', 'CARPETAS_V': 'Range', 'ROBOTRANSE': 'TextEdit', 'ROBOMETROB': 'TextEdit', 'ROBOPESERO': 'TextEdit', 'TAXICONVIO': 'TextEdit', 'ROBOPASVEH': 'TextEdit', 'ROBOCUENTA': 'TextEdit', 'ROBOREPART': 'TextEdit', 'ROBOVEHIC': 'TextEdit', 'ROBOTPC': 'TextEdit', 'ABUSOSEX': 'TextEdit', 'ACOSOSEX': 'TextEdit', 'SAIKUTRATA': 'TextEdit', 'SEXUALES': 'TextEdit', 'EJECUTIVOD': 'TextEdit', 'EJECUTIVOF': 'TextEdit', 'EXTORSION': 'TextEdit', 'COMPA20': 'TextEdit', 'COMPA21': 'TextEdit', 'SUICACTASA': 'TextEdit', 'SUICIDIOAC': 'TextEdit', 'SUICONSEJO': 'TextEdit', 'NUMEXTOR': 'TextEdit', 'VIOFAM2': 'TextEdit', 'MALTRATOI2': 'TextEdit', 'DIGNIDADMA': 'TextEdit', 'ADICCIONE2': 'TextEdit', 'MUJERES2': 'TextEdit', 'MUJERES1': 'TextEdit', 'PAOT': 'TextEdit', 'OID_1': 'Range', 'INSEGURIDA': 'TextEdit', 'DELITOS_1': 'Range', });
lyr_15062023prueba_2.set('fieldImages', {'longitud': '', 'latitud': '', });
lyr_CDMX_1.set('fieldLabels', {'CVEGEO': 'no label', 'NOM_ENT': 'no label', 'NOM_MUN': 'inline label', 'TRATA22': 'no label', 'TRATA23': 'no label', 'APPS': 'no label', 'EXTOR': 'no label', 'DISIAVID': 'no label', 'CHE02': 'no label', 'SUIC': 'no label', 'TASASUIC': 'no label', 'VIO': 'no label', 'AS': 'no label', 'LD': 'no label', 'FEM': 'no label', 'CHE': 'no label', 'HOMBRES': 'no label', 'VIOFAM': 'no label', 'ECO': 'no label', 'TRATA222': 'no label', 'COMPA': 'no label', 'ECON': 'no label', 'JOV22': 'no label', 'SEC22': 'no label', 'MUN19': 'no label', 'MUN21': 'no label', 'ENSUSEP21': 'no label', 'ENSUJSEP21': 'no label', 'ENSUDIC212': 'no label', 'ENSUJDIC21': 'no label', 'ENSUMAR22': 'no label', 'ENSUJMAR22': 'no label', 'ENSUJUN22': 'no label', 'ENSUJUN222': 'no label', 'COMPA2': 'no label', 'COMPA3': 'no label', 'DIFE19': 'no label', 'DIFE21': 'no label', 'VIOFAM21': 'no label', 'VIOFAM22': 'no label', 'ALUMNOS': 'no label', 'ADICCIONES': 'no label', 'PARTICIPAC': 'no label', 'POBREZA': 'no label', 'VIDAMARZO': 'no label', 'MEN20': 'no label', 'MEN21': 'no label', 'MEN22': 'no label', 'VIOEQUI': 'no label', 'CUENTA202': 'no label', 'PASCOND203': 'no label', 'PESER2022': 'no label', 'TAXI2022': 'no label', 'NNA2': 'no label', 'VIDA22': 'no label', 'NNA': 'no label', 'AMIGOS': 'no label', 'SEC21': 'no label', 'ANSDEPRE22': 'no label', 'DEPRE22': 'no label', 'CONT2022': 'no label', 'VIOEQ21': 'no label', 'VIOLA21': 'no label', 'VIDA2021': 'no label', 'CHATS': 'no label', 'SEC2021': 'no label', 'PARIENTES': 'no label', 'MUJERES': 'no label', 'PASAJERO': 'no label', 'PESERO': 'no label', 'HOMICIDIO': 'no label', 'TAXI': 'no label', 'CUENTAHABI': 'no label', 'SEC212': 'no label', 'MUJERES202': 'no label', 'MALTRATOIN': 'no label', 'VIO19': 'no label', 'VIO20': 'no label', 'VIO21': 'no label', 'PARIENTE': 'no label', 'DIVER': 'no label', 'DVIDA': 'no label', 'ADULTOS21': 'no label', 'SALUDMENTA': 'no label', 'ATENCIONES': 'no label', 'EXTCONS': 'no label', 'EXTORSI': 'no label', 'FRAUDE': 'no label', 'AUTOVIO': 'no label', 'AUTOSIN': 'no label', 'COMPA22': 'no label', 'PERSONA': 'no label', 'SUICI20': 'no label', 'SUICI21': 'no label', 'VIOFAM212': 'no label', 'COBRA21': 'no label', 'ELECCIONES': 'no label', 'ATENCIONE2': 'no label', 'VIOFAM20': 'no label', 'VIOFAM2122': 'no label', 'CARPETAS_V': 'no label', 'ROBOTRANSE': 'no label', 'ROBOMETROB': 'no label', 'ROBOPESERO': 'no label', 'TAXICONVIO': 'no label', 'ROBOPASVEH': 'no label', 'ROBOCUENTA': 'no label', 'ROBOREPART': 'no label', 'ROBOVEHIC': 'no label', 'ROBOTPC': 'no label', 'ABUSOSEX': 'no label', 'ACOSOSEX': 'no label', 'SAIKUTRATA': 'no label', 'SEXUALES': 'no label', 'EJECUTIVOD': 'no label', 'EJECUTIVOF': 'no label', 'EXTORSION': 'no label', 'COMPA20': 'no label', 'COMPA21': 'no label', 'SUICACTASA': 'no label', 'SUICIDIOAC': 'no label', 'SUICONSEJO': 'no label', 'NUMEXTOR': 'no label', 'VIOFAM2': 'no label', 'MALTRATOI2': 'no label', 'DIGNIDADMA': 'no label', 'ADICCIONE2': 'no label', 'MUJERES2': 'no label', 'MUJERES1': 'no label', 'PAOT': 'no label', 'OID_1': 'no label', 'INSEGURIDA': 'no label', 'DELITOS_1': 'no label', });
lyr_15062023prueba_2.set('fieldLabels', {'longitud': 'inline label', 'latitud': 'inline label', });
lyr_15062023prueba_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});