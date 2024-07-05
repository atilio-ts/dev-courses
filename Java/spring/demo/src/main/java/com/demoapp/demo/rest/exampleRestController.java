package com.demoapp.demo.rest;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class exampleRestController {

    //inject properties
    @Value("${team.name}")
    private String teamName;

    @GetMapping("/teaminfo")
    public String getTeamInfo() {
        return "Team name: " + teamName;
    }


    @GetMapping("/")
    public String index() {
        return "index";
    }

}
