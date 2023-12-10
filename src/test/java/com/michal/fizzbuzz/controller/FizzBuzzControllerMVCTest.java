package com.michal.fizzbuzz.controller;

import com.michal.fizzbuzz.service.FizzBuzzService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

@SpringBootTest
@AutoConfigureMockMvc
public class FizzBuzzControllerMVCTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    FizzBuzzService service;

    @Test
    void contextLoads() {}

    @BeforeEach
    void setupFizzBuzzServiceForInputOfFive() {
        Mockito.when(service.fizzBuzz(5)).thenReturn("1 2 fizz 4 buzz");
    }

    @Test
    void thatFizzControllerReturnsCorrectValue() throws Exception {
        mockMvc.perform(
                MockMvcRequestBuilders.get("/fizzbuzz")
                        .param("upperRange", "5"))
                .andExpect(MockMvcResultMatchers.content().string("1 2 fizz 4 buzz"));
    }

}
