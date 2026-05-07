import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plans',
  imports: [],
  templateUrl: './plans.html',
  styleUrl: './plans.css',
})
export class Plans {
  constructor(private router:Router){}
selectPlan(planeName:string, amount:number){
  this.router.navigate(['/user/payment'],{
    queryParams:{
      plan: planeName,
      price:amount
    }
  })
}
}
