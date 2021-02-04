package com.example.WebProject.Controller;

import lombok.RequiredArgsConstructor;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;


@RequiredArgsConstructor
@RestController
public class ResultController {

    @GetMapping("/Result/{level}")
    public String getLevel(@PathVariable int data, Model model){
        String level = "";
        if(data < 5){
            level = "X";
        }
        else if(data < 10){
            level = "Y";
        }
        else{
            level = "Z";
        }
        model.addAttribute("LEVEL", level);
        return "Result/{level}";
    }

}
