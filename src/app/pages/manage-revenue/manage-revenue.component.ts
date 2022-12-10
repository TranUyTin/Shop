import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartOptions } from 'src/app/constant/type';
import { NavigateService } from 'src/app/service/navigate.service';
import { ChartComponent } from 'ng-apexcharts';
@Component({
  selector: 'app-manage-revenue',
  templateUrl: './manage-revenue.component.html',
  styleUrls: ['./manage-revenue.component.css'],
})
export class ManageRevenueComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  constructor(private navigateService: NavigateService) {
    this.chartOptions = {
      series: [
        {
          name: 'Doanh thu',
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 10, 20, 30],
          color: '#a70404',
        },
      ],
      chart: {
        height: 660,
        type: 'bar',
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          export: {
            csv: {
              filename: 'Report-CSV',
              columnDelimiter: ',',
              headerCategory: 'Tháng',
              headerValue: 'Doanh Thu',
            },
            png: {
              filename: 'Report-PNG',
            },
            svg: {
              filename: 'Report-SVG',
            },
          },
        },
      },
      title: {
        text: 'Quản lý doanh thu',
        align: 'left',
        margin: 0,
        offsetX: 5,
        offsetY: 0,
        floating: false,
        style: {
          fontSize: '30px',
          fontWeight: 'bold',
          fontFamily: undefined,
          color: '#000',
        },
      },
      xaxis: {
        categories: [
          'Tháng 1',
          'Tháng 2',
          'Tháng 3',
          'Tháng 4',
          'Tháng 5',
          'Tháng 6',
          'Tháng 7',
          'Tháng 8',
          'Tháng 9',
          'Tháng 10',
          'Tháng 11',
          'Tháng 12',
        ],
        labels: {
          style: {
            colors: '#000',
            fontSize: '16px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 400,
            cssClass: 'apexcharts-xaxis-label',
          },
        },
      },
    };
  }

  ngOnInit(): void {
    this.navigateService.currentUrl = this.navigateService.getCurrentUrl();
  }
  ngOnDestroy(): void {
    this.navigateService.currentUrl = '';
  }
}
