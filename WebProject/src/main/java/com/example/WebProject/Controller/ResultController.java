package com.example.WebProject.Controller;

import lombok.RequiredArgsConstructor;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;


@RequiredArgsConstructor
@RestController
@RequestMapping("/Result/{points}") // url mapping / class에 선언을 해주면 이 controller에서 선언된 주소로 시작하는 모든 페이지를 관리하겠다는 뜻.
public class ResultController {

/*
    @GetMapping("/level")
    public String getLevel(@PathVariable int data, Model model){
        String level = "";
        if(data < 2){
                level = "수습생";
    }
        else if(2 <= data && data < 4){
        level = "수련공";
    }
        else
    level = "장인";
}
        model.addAttribute("LEVEL", level);
                return level;
                }
                */

    @GetMapping("/level") // url 추가.
    public String getRequest(@PathVariable int points){

        if(points < 2){
            return "수습생";
        }
        else if((2 <= points) && (points < 4)){
            return "수련공";
        }
        else{
            return "장인";
        }
    }
}
