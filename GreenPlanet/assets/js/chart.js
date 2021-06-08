google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart4);

function drawChart4() {
    var data = google.visualization.arrayToDataTable([
        ['Orario', 'CO2 catturata in kg'],
        ['00:00',  0.022],
        ['04:00',  0.023],
        ['08:00',  0.03],
        ['12:00',  0.04],
        ['16:00',  0.048],
        ['20:00',  0.03],
    ]);
  
    var options = {
      hAxis: {title: 'Orario',  titleTextStyle: {color: '#333'}},
      vAxis: {title: 'Quantità CO2 catturata in kg',  titleTextStyle: {color: '#333'}},
      'height': 400,
      'width': 600,
    };
    var chart = new google.visualization.AreaChart(document.getElementById('giornaliero'));
    chart.draw(data, options);
  }

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart1);
function drawChart1() {
    var data = google.visualization.arrayToDataTable([
      ['Giorno', 'CO2 catturata in kg'],
      ['Lunedì',  0.50],
      ['Martedì',  0.45],
      ['Mercoledì',  0.55],
      ['Giovedì',  0.51],
      ['Venerdì',  0.49],
      ['Sabato',  0.47],
      ['Domenica',  0.50]
    ]);
  
    var options = {
      hAxis: {title: 'Giorno',  titleTextStyle: {color: '#333'}},
      vAxis: {title: 'Quantità CO2 catturata in kg',  titleTextStyle: {color: '#333'}},
      'height': 400,
      'width': 600,
    };
  
    var chart = new google.visualization.AreaChart(document.getElementById('settimanale'));
    chart.draw(data, options);
  }

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart2);
function drawChart2() {
    var data = google.visualization.arrayToDataTable([
      ['Data', 'CO2 catturata in kg'],
      ['2',  0.45],
      ['4',  0.51],
      ['6',  0.47],
      ['8',  0.50],
      ['10',  0.50],
      ['12',  0.55],
      ['14',  0.41],
      ['16',  0.45],
      ['18',  0.51],
      ['20',  0.47],
      ['22',  0.55],
      ['24',  0.55],
      ['26',  0.49],
      ['28',  0.52],
      ['30',  0.45]
    ]);
  
    var options = {
      hAxis: {title: 'Data',  titleTextStyle: {color: '#333'}},
      vAxis: {title: 'Quantità CO2 catturata in kg',  titleTextStyle: {color: '#333'}},
      'height': 400,
      'width': 600,
    };
  
    var chart = new google.visualization.AreaChart(document.getElementById('mensile'));
    chart.draw(data, options);
  }
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart3);
function drawChart3() {
    var data = google.visualization.arrayToDataTable([
      ['Mese', 'CO2 catturata in kg'],
      ['Gen',  14.50],
      ['Feb',  14.85],
      ['Mar',  15.00],
      ['Apr',  15.40],
      ['Mag',  15.55],
      ['Giu',  15.70],
      ['Lug',  16.00],
      ['Ago',  16.25],
      ['Set',  15.70],
      ['Ott',  15.40],
      ['Nov',  15.20],
      ['Dic',  14.70]

    ]);
  
    var options = {
      hAxis: {title: 'Mese',  titleTextStyle: {color: '#333'}},
      vAxis: {title: 'Quantità CO2 catturata in kg',  titleTextStyle: {color: '#333'}},
      'height': 400,
      'width': 600,
    };
  
    var chart = new google.visualization.AreaChart(document.getElementById('annuale'));
    chart.draw(data, options);
  }
