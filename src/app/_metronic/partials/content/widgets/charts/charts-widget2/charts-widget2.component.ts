import { Component, OnInit, ChangeDetectorRef, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { getCSSVariableValue } from '../../../../../kt/_utils';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-charts-widget2',
  templateUrl: './charts-widget2.component.html',
})
export class ChartsWidget2Component implements OnInit, OnChanges {
  chartOptions: any = {};
  results: any;
  @Input() windSpeedOneData: any;
  @Input() windSpeedThreeData: any;

  yearToggle: boolean = false;
  monthToggle: boolean = false;
  weekToggle: boolean = false;
  chartData: any = [];


  constructor(private http: HttpClient, private cd: ChangeDetectorRef) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.chartOptions = getChartOptions(350, this.windSpeedOneData,this.windSpeedThreeData);
    
  }

 

  ngOnInit(): void {
    this.chartOptions = getChartOptions(350, this.windSpeedOneData,this.windSpeedThreeData);
    this.cd.detectChanges();
  }

  displayYearData = ()=>{
    let yearData1:any = [9,11,10,13,15,16,11,8,11,13,11,12];
    let yearData2: any = [19,18,17,16,15,14,11,8,11,13,11,12];
    this.yearToggle = true;
  this.monthToggle = false;
  this.weekToggle = false;
      this.chartOptions = getChartOptions(350,yearData1,yearData2);
    
  }
  displayMonthData = () => {
    let monthData1:any = [9,15,11,12,13,14,15,16,17,18,11,10];
    let monthData2:any = [9,15,11,12,13,14,15,16,17,18,11,10];
    this.yearToggle = false;
  this.monthToggle = true;
  this.weekToggle = false;
    this.chartOptions = getChartOptions(350,monthData1,monthData2);
  }
  displayWeekData = () => {
    let weekData1:any = [12,11,13,14,15,9,10,11,10,10,11];
    let weekData2:any = [12,11,13,14,15,9,10,11,10,10,11];
    this.yearToggle = false;
  this.monthToggle = false;
  this.weekToggle = true;
    this.chartOptions = getChartOptions(350,weekData1,weekData2);
  }

 

}

function getChartOptions(height: number,windSpeedOneData:any,windSpeedThreeData:any) {
  const labelColor = getCSSVariableValue('--bs-gray-500');
  const borderColor = getCSSVariableValue('--bs-gray-200');
  const baseColor = getCSSVariableValue('--bs-warning');
  const secondaryColor = getCSSVariableValue('--bs-gray-300');

  return {
    series: [
      {
        name: 'wind speed within 1 min',
        data: windSpeedOneData,
      },
      {
        name: 'wind speed within 3 min',
        data: windSpeedThreeData,
      },
      
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'bar',
      height: height,
      toolbar: {
        show: true,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
        borderRadius: 20,
      },
    },
    legend: {
      show: true,
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      show: true,
      width: 5,
      colors: ['transparent'],
    },
    xaxis: {
      categories: [
        '10:30:00',
        '10:31:00',
        '10:32:00',
        '10:33:00',
        ' 10:34:00',
        '10:35:00',
        '10:36:00',
        '10:37:00',
        '10:38:00',
        '10:39:00',
        ' 10:40:00',
        '10:41:00'
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    fill: {
      opacity: 1,
    },
    states: {
      normal: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      hover: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none',
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: '12px',
      },
      y: {
        formatter: function (val: number) {
          return  + val + 'knots';
        },
      },
    },
    colors: [baseColor, secondaryColor],
    grid: {
      borderColor: borderColor,
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
  };
}
