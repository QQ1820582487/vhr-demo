package com.xuxx.vhr.controller;

import com.xuxx.vhr.model.RespBean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {
    @GetMapping("/login")
//    @CrossOrigin("*")//跨域问题
    public RespBean login() {
        return RespBean.error("尚未登录，请登录！");
    }
}
