
import { ViewChild,Component, OnInit, Input, Output, EventEmitter, OnChanges, ChangeDetectorRef, SimpleChanges} from '@angular/core';
import { getCSSVariableValue } from '../../../../../kt/_utils';
import { HttpClient } from '@angular/common/http'
import { color } from 'd3';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};


@Component({
  selector: 'app-charts-widget3',
  templateUrl: './charts-widget3.component.html',
})
export class ChartsWidget3Component implements OnInit, OnChanges {
  chartOptions: any = {};
  results: any;
  @Input() windSpeedOneData: any;
  @Input() windSpeedThreeData: any;
  @Output() public childEvent = new EventEmitter();
  chartData: any = [];
  @ViewChild("charts") chart : ChartComponent;

  yearToggle: boolean = false;
  monthToggle: boolean = false;
  weekToggle: boolean = false;
 

  constructor(private http: HttpClient, private cd: ChangeDetectorRef ) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.chartOptions = getChartOptions(350, this.windSpeedOneData , this.windSpeedThreeData)
  }

  ngOnInit(): void {
    
      this.chartOptions = getChartOptions(350, this.windSpeedOneData,this.windSpeedThreeData);
      this.cd.detectChanges();
    }

    displayYearData =() =>{
     let yearData1 : any =[12,11,10,13,14,13,12,11,10,9,17] ;
     let yearData2 : any =[17,9,10,11,12,13,14,13,10,11,12];
     this.yearToggle = true;
     this.monthToggle = false;
     this.weekToggle = false;
     this.chartOptions = getChartOptions(350,yearData1,yearData2)
     
    }
    displayMonthData =()=>{
      let monthData1: any = [9,10,11,12,13,14,15,16,17,18,19,11];
      let monthData2: any = [11,19,17,18,16,15,9,10,11,12,13,14];
      this.yearToggle = false;
     this.monthToggle = true;
     this.weekToggle = false;
      this.chartOptions = getChartOptions(350,monthData1,monthData2)
    }
    displayWeekData =()=>{
      let weekData1: any = [10,11,9,8,7,10,11,9,8,7,12,9];
      let weekData2: any = [10,9,7,11,12,12,11,7,10,13,10];
      this.yearToggle = false;
     this.monthToggle = false;
     this.weekToggle = true;
      this.chartOptions = getChartOptions(350,weekData1,weekData2)
    }
    fireEvent() {
      this.childEvent.emit({ "StationId": "43243KVL", "Latitude": 14.9010, "Longitude": 79.9817, "Time": " 10:30:00", "ws-1min": 10, "wd-1min": 330 },)
  
    }
  } 

    
    

  



  // call(){
  //   this.http.get('../../../../../../../assets/db.json').subscribe((result:any) => {
  //     this.data = result;

  //     debugger
  //     console.log('data::1::',this.data);
  //   })



function getChartOptions(height: number ,windSpeedOneData: any, windSpeedThreeData: any) {

  const labelColor = getCSSVariableValue('--bs-gray-500');
  const borderColor = getCSSVariableValue('--bs-gray-200');
  const baseColor = getCSSVariableValue('--bs-info');
  const lightColor = getCSSVariableValue('--bs-light-info');

  return {
    series: [
      {
        name: 'wind speed within 1 min',
        data: windSpeedOneData
      },
      {
        name: 'wind speed within 3 min',
        data: windSpeedThreeData
      }
    ],
    chart: {
      height: 350,
      type: "area"
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth"
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
  };
}


  

//     series: [
//       {
//         name: 'wind speed within 1 min',
//         data: windSpeedOneData,
//       },
//       {
//         name: 'wind speed within 3 min',
//         data: windSpeedThreeData,
//       }
//     ],
//     chart: {
//       fontFamily: 'inherit',
//       type: 'area',
//       height: 350,
//       toolbar: {
//         show: true,
//       },
//     },
//     plotOptions: {},
//     legend: {
//       show: true,
//     },
//     dataLabels: {
//       enabled: true,
//     },
//     fill: {
//       type: 'solid',
//       opacity: 1,
//     },
//     stroke: {
//       curve: 'smooth',
//       show: true,
//       width: 3,
//       colors: [baseColor],
//     },
//     xaxis: {
//       categories:['10:30:00',
//       '10:31:00',
//       '10:32:00',
//       '10:33:00',
//       ' 10:34:00',
//       '10:35:00',
//       '10:36:00',
//       '10:37:00',
//       '10:38:00',
//       '10:39:00',
//       ' 10:40:00',
//       '10:41:00'
//     ],
//       axisBorder: {
//         show: false,
//       },
//       axisTicks: {
//         show: false,
//       },
//       labels: {
//         style: {
//           colors: labelColor,
//           fontSize: '12px',
//         },
//       },
//       crosshairs: {
//         position: 'front',
//         stroke: {
//           color: baseColor,
//           width: 1,
//           dashArray: 3,
//         },
//       },
//       tooltip: {
//         enabled: true,
//         formatter: undefined,
//         offsetY: 0,
//         style: {
//           fontSize: '12px',
//         },
//       },
//     },
//     yaxis: {
//       labels: {
//         style: {
//           colors: labelColor,
//           fontSize: '12px',
//         },
//       },
//     },
//     states: {
//       normal: {
//         filter: {
//           type: 'none',
//           value: 0,
//         },
//       },
//       hover: {
//         filter: {
//           type: 'none',
//           value: 0,
//         },
//       },
//       active: {
//         allowMultipleDataPointsSelection: false,
//         filter: {
//           type: 'none',
//           value: 0,
//         },
//       },
//     },
//     tooltip: {
//       style: {
//         fontSize: '12px',
//       },
//       y: {
//         formatter: function (val: number) {
//           return '$' + val + ' thousands';
//         },
//       },
//     },
//     colors: [lightColor],
//     grid: {
//       borderColor: borderColor,
//       strokeDashArray: 4,
//       yaxis: {
//         lines: {
//           show: true,
//         },
//       },
//     },
//     markers: {
//       strokeColors: baseColor,
//       strokeWidth: 3,
//     },
//   };
// }
// function getdata(data: any): any {
//   throw new Error('Function not implemented.');
// }

