import { Component } from '@angular/core';
import { ClassService } from '../../user/classes/class.service';
import { FormsModule } from '@angular/forms';
import { TrainerService } from '../../services/trainer-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-class-create',
  imports: [FormsModule, CommonModule],
  templateUrl: './class-create.html',
  styleUrl: './class-create.css',
})
export class ClassCreate {
constructor(private service:ClassService, private trainerService: TrainerService){}
trainers: any[] = [];
selectedTrainer: any = null;
c={name:"",trainerId:"",trainerName:"",schedule:"",capacity:""};
 ngOnInit(): void {

    this.trainerService.getAll().subscribe(data => {
      this.trainers = data;
    });
  }
create(){
  this.c.trainerId = this.selectedTrainer.id;

  this.c.trainerName = this.selectedTrainer.name;
   this.service.createClass(this.c).subscribe(
   {
     next:()=>{alert("class created successfully")},
     error:()=>{alert("error")}
   }
  
  );
}
}
