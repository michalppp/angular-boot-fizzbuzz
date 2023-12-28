package com.michal.fizzbuzz.service;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

public class FizzBuzzServiceImplTest {
    FizzBuzzService service;

    @BeforeEach
    void beforeEach() {
        service = new FizzBuzzServiceImpl();
    }

    @Test
    void thatServiceReturnsCorrectValue() {
        String actual = service.fizzBuzz(16);
        String expected = "1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz 16";

        Assertions.assertEquals(expected, actual);
    }
}
