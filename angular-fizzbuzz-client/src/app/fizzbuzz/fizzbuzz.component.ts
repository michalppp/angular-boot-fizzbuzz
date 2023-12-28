import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FizzbuzzService } from '../fizzbuzz.service';

@Component({
  selector: 'app-fizzbuzz',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './fizzbuzz.component.html',
  styleUrl: './fizzbuzz.component.css'
})
export class FizzbuzzComponent {
  upperRange: number = 20;
  fizzBuzz: string = "";

  private readonly _MIN_UPPER_RANGE = 1;
  private readonly _MAX_UPPER_RANGE = 999;

  constructor( private service: FizzbuzzService) {}

  ngOnInit() {
      this.getFizzBuzz();
  }

  getFizzBuzz(): void {
    if(this.upperRange >= this.MIN_UPPER_RANGE && this.upperRange <= this.MAX_UPPER_RANGE) {
      this.service.fizzbuzz(this.upperRange).subscribe( result => this.fizzBuzz = result);
    } else {
      this.fizzBuzz = "";
    }
  }

  onInputChange() {
    this.getFizzBuzz();
  }

  public get MIN_UPPER_RANGE(): number {
    return this._MIN_UPPER_RANGE;
  }

  public get MAX_UPPER_RANGE(): number {
    return this._MAX_UPPER_RANGE;
  }

}
