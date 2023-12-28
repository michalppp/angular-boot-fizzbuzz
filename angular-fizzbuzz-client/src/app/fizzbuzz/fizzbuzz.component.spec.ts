import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FizzbuzzComponent } from './fizzbuzz.component';
import { FizzbuzzService } from '../fizzbuzz.service';
import {  of } from 'rxjs';


describe('FizzbuzzComponent', () => {
  let component: FizzbuzzComponent;
  let fixture: ComponentFixture<FizzbuzzComponent>;
  let service : jasmine.SpyObj<FizzbuzzService>;

  beforeEach(async () => {
    service = jasmine.createSpyObj('FizzbuzzService', ['fizzbuzz']);
    
    await TestBed.configureTestingModule({
      imports: [FizzbuzzComponent],
      providers: [{ provide: FizzbuzzService, useValue: service }],
    })
    .compileComponents();

    fixture = TestBed.createComponent(FizzbuzzComponent);
    component = fixture.componentInstance;
  });

  it('on creation calls service with default argument of 20', () => {
    
    const div = fixture.nativeElement.querySelector('#result');

    service.fizzbuzz.and.returnValue(of('1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz 16 17 18 19 buzz'));

    fixture.detectChanges();

    expect(service.fizzbuzz).toHaveBeenCalledWith(20);
    expect(component.fizzBuzz).toEqual('1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz 16 17 18 19 buzz');
    expect(div.textContent).toBe('1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz 16 17 18 19 buzz');
  });

 
  it('on value change to 5 the service is called with 5 and result shown', () => {
    service.fizzbuzz.and.returnValue(of('1 2 fizz 4 buzz'));
    const input = fixture.nativeElement.querySelector('input');
    const div = fixture.nativeElement.querySelector('#result');
    fixture.detectChanges();
    input.value = 5;
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(service.fizzbuzz).toHaveBeenCalledWith(5);
    expect(component.fizzBuzz).toEqual('1 2 fizz 4 buzz');
    expect(div.textContent).toBe('1 2 fizz 4 buzz');
  });

});
