import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
} from 'ng-apexcharts';
export const NAVIGATE = {
  CART: '/cart',
  HOME: '',
  PRODUCT: '/product_category',
};

export interface CART {
  id: any;
  name: string;
  cost?: any;
  specifications: string;
  images: string[];
  isDeleted: boolean;
  quantity: number;
}

export interface User {
  fullname: string;
  email: string;
  phone: string;
  address: string;
}

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};
