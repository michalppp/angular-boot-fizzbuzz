import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { FizzbuzzService } from './fizzbuzz.service';
import {  of } from 'rxjs';

describe('FizzbuzzService HTTP calls', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: FizzbuzzService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });

    // Inject the http service and test controller for each test
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

    service = new FizzbuzzService(httpClient);
  });

  it('returns response body as observable text  ', () => {
    service.fizzbuzz(5).subscribe(body => 
       expect(body).toEqual('1 2 fizz 4 buzz')
    );

    const req = httpTestingController.expectOne( 'http://localhost:8080/fizzbuzz?upperRange=5');
    expect(req.request.method).toEqual('GET');
    
    req.flush('1 2 fizz 4 buzz');  
  });


});
