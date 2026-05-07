import { Component } from '@angular/core';
import { TrainerService } from '../../../services/trainer-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-trainer-create',
  imports: [FormsModule],
  templateUrl: './trainer-create.html',
  styleUrl: './trainer-create.css',
})
export class TrainerCreate {
  trainer:any={}
constructor(private service:TrainerService){};
create(){
this.service.create(this.trainer).subscribe(()=>
alert("Trainer Added")
);
}

}
