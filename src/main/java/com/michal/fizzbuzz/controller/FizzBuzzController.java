package com.michal.fizzbuzz.controller;


import com.michal.fizzbuzz.service.FizzBuzzService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class FizzBuzzController {
    private FizzBuzzService service;

    public FizzBuzzController(FizzBuzzService service) {
        this.service = service;
    }

    @RequestMapping("/fizzbuzz")
    public String get(@RequestParam Integer upperRange) {
        return service.fizzBuzz(upperRange);
    }
}
