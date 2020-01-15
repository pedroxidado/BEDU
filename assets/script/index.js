
 $.datepicker.regional['es'] = {
    minDate: 0,
    closeText: 'Cerrar',
    prevText: '< Ant',
    nextText: 'Sig >',
    currentText: 'Hoy',
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
    dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
    weekHeader: 'Sm',
    dateFormat: 'dd/mm/yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['es']);
    $('#horario-entrega').datetimepicker({
        timeOnlyTitle: 'Horario',
        stepMinute: 10,
        timeText: 'Hora',
        hourText: 'Horas',
        minuteText: 'Мinutos',
        secondText: 'Segundos',
        currentText: 'Ahora',
        closeText: 'Hecho',
        altField: "#horario-entrega_alt",
        dateFormat: 'd M' // HTML 5 ;        
    });
    $('#horario-devolucion').datetimepicker({
        timeOnlyTitle: 'Horario',
        stepMinute: 10,
        timeText: 'Hora',
        hourText: 'Horas',
        minuteText: 'Мinutos',
        secondText: 'Segundos',
        currentText: 'Ahora',
        closeText: 'Hecho',
        altField: "#horario-devolucion_alt",
        dateFormat: 'd M' // HTML 5 ;
    });

  
