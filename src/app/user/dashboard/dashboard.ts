
import { Component, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserdashboardService } from '../../services/userdashboard-service';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  constructor(private dashboardService: UserdashboardService) {}
  
  dashboard:any;
 chart: any;
  members:number=0;
  ngOnInit() {
   const userId = localStorage.getItem("userId");
   console.log("userId  "+userId);
   this.dashboardService
      .getDashboard(userId)
      .subscribe((response:any)=>{
        this.dashboard = response;
        console.log(this.dashboard);
      });
      this.getPerMonthAttendance();
  }

  getPerMonthAttendance() {
  const userId = localStorage.getItem("userId");
 // console.log("userId "+userId);
      this.dashboardService.getPerMonthAttendance(userId).subscribe((response: any) => {
  //  console.log("in getPerMonthAttendance method"+response);
  
        const months = response.map((item: any) => item[0]);
        const totals = response.map((item: any) => item[1]);
        //console.log("months "+months);
        this.members = totals.reduce((a: number, b: number) => a + b, 0);
         console.log(totals);
        this.chart = new Chart('attendanceChart', {
          type: 'bar',  
          data: {
            labels: months,
            datasets: [
              {
                label: 'Attendance Growth',
                data: totals,
                borderWidth: 1
              }
            ]
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      });
    }
features = [
 // { title: 'Gym Facilities', desc: 'Equipment & amenities', link: '/user/facilities' },
  /* { title: 'Gym Classes', desc: 'Equipment & amenities', link: '/user/classes' },
  { title: 'Trainers', desc: 'Meet our trainers', link: '/user/trainers' },
  { title: 'Membership Plans', desc: 'Choose your plan', link: '/user/plans' } */
];

}
