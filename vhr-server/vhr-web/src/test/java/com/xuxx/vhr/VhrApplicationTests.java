package com.xuxx.vhr;

import com.xuxx.vhr.mapper.MenuMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class VhrApplicationTests {

    @Autowired
    MenuMapper menuMapper;

    @Test
    void contextLoads() {
        System.out.println("menus>>" + menuMapper.getAllMenus());
    }

}
