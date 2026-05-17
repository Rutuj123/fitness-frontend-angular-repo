import { Component } from '@angular/core';
import { TrainerService } from '../../../services/trainer-service';


@Component({
  selector: 'app-trainer-list',
  imports: [],
  templateUrl: './trainer-list.html',
  styleUrl: './trainer-list.css',
})
export class TrainerList {
  trainers:any[]=[];
constructor(private trainerService:TrainerService){
  this.trainerService.getAll().subscribe(data=>this.trainers=data);
}
}
