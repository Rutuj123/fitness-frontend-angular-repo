import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../../services/trainer-service';
import { init } from 'aos';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-admin-dashboard',
  imports: [],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard implements OnInit {
  constructor(private trainerService: TrainerService){} 
  chart: any;
  members:number=0;
   ngOnInit(): void {
     this.loadMembershipGrowth();
     this.getVisitorStats();
   }
loadMembershipGrowth() {

    this.trainerService.getMembershipGrowth().subscribe((response: any) => {
  console.log("in getMembershipGrowth method");
 console.log(response);
      const months = response.map((item: any) => item[0]);
      const totals = response.map((item: any) => item[1]);
      this.members = totals.reduce((a: number, b: number) => a + b, 0);
       console.log(totals);
      this.chart = new Chart('membershipChart', {
        type: 'line',  
        data: {
          labels: months,
          datasets: [
            {
              label: 'Membership Growth',
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

  getVisitorStats(){
    this.trainerService.getVisitorStats().subscribe((data: any) => {

      const labels = data.map((x:any) => x.date);
      const counts = data.map((x:any) => x.count);

      new Chart('visitorChart', {

        type: 'bar',

        data: {
          labels: labels,

          datasets: [{
            label: 'Website Visitors',
            data: counts,
            borderWidth: 2
          }]
        },

        options: {
          responsive: true
        }
      });

    });

  }

  }


