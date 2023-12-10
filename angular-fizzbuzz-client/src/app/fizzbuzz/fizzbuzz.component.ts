import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FizzbuzzService } from '../fizzbuzz.service';

@Component({
  selector: 'app-fizzbuzz',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './fizzbuzz.component.html',
  styleUrl: './fizzbuzz.component.css'
})
export class FizzbuzzComponent {
  upperRange: number = 20;
  fizzBuzz: string = "ToDo";

  constructor( private service: FizzbuzzService) {}

  ngOnInit() {
     this.service.fizzbuzz(this.upperRange).subscribe( result => this.fizzBuzz = result);
  }

  getFizzBuzz(): void {
     this.service.fizzbuzz(this.upperRange).subscribe( result => this.fizzBuzz = result);
  }

  onInputChange() {
    this.getFizzBuzz();
  }

}
