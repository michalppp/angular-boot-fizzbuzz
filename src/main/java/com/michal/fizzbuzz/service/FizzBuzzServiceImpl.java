package com.michal.fizzbuzz.service;

import org.springframework.stereotype.Service;

import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Service
public class FizzBuzzServiceImpl implements FizzBuzzService {

    static final Function<Integer, String> mapper = i ->
        switch(i) {
            case Integer in when in % 15 == 0 -> "fizzbuzz";
            case Integer in when  in % 5 == 0 -> "buzz";
            case Integer in when in % 3 == 0 -> "fizz";
            default -> String.valueOf(i);
        };

    @Override
    public String fizzBuzz(int upperRange) {
        return  IntStream.range(1, upperRange + 1).boxed().map(mapper).collect(Collectors.joining(" "));
    }
}
