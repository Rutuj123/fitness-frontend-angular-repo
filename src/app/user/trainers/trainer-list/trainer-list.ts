import { Component } from '@angular/core';
import { TrainerService } from '../../../services/trainer-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trainer-list',
  imports: [CommonModule],
  templateUrl: './trainer-list.html',
  styleUrl: './trainer-list.css',
})
export class TrainerList {
  trainers:any[]=[];
constructor(private trainerService:TrainerService){
  this.trainerService.getAll().subscribe(data=>this.trainers=data);
}
}
