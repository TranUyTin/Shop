import { UserService } from 'src/app/service/user-service.service';
import { AfterViewInit, Component, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import { ChartOptions } from 'src/app/constant/type';
import { NavigateService } from 'src/app/service/navigate.service';
import { ChartComponent } from 'ng-apexcharts';
@Component({
  selector: 'app-manage-revenue',
  templateUrl: './manage-revenue.component.html',
  styleUrls: ['./manage-revenue.component.css'],
})
export class ManageRevenueComponent implements OnInit, AfterViewChecked {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  listRevenue: any = [];
  isCallApi = false;
  constructor(private navigateService: NavigateService,
    public userService: UserService) {
  }

  getListRevenue(){
    this.userService.getRevenue().subscribe
     ((res: any)  => {
       for(let i =1 ; i<=12;i++){
         res.forEach((element, index) => {
           if( element['key'] == i) {
             this.listRevenue.push(element['value'])
           }
         });
         this.isCallApi = true;
       }
       console.log(this.listRevenue)
    },error => {
      console.log(error)
      this.isCallApi = false;;

    })
  }
  

  chartRevenue(){
    this.chartOptions = {
      series: [
        {
          name: 'Doanh thu (VNĐ)',
          data: this.listRevenue,
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
          formatter: function (value) {
            return value ;
          },
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

  ngOnInit() {
    this.chartRevenue();
    this.getListRevenue();
    this.navigateService.currentUrl = this.navigateService.getCurrentUrl();
    
  }

  ngAfterViewChecked(): void {
    if(this.isCallApi) {
      this.chartRevenue();
      this.isCallApi = false;
    }
  }
  ngOnDestroy(): void {
    this.navigateService.currentUrl = '';
  }
}
