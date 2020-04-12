package com.xuxx.vhr.config;

import com.xuxx.vhr.model.Menu;
import com.xuxx.vhr.model.Role;
import com.xuxx.vhr.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.ConfigAttribute;
import org.springframework.security.access.SecurityConfig;
import org.springframework.security.web.FilterInvocation;
import org.springframework.security.web.access.intercept.FilterInvocationSecurityMetadataSource;
import org.springframework.stereotype.Component;
import org.springframework.util.AntPathMatcher;

import java.util.Collection;
import java.util.List;

/**
 * 根据用户传来的请求地址，分析出请求所需要的角色
 */
@Component
public class CustomFilterInvocation implements FilterInvocationSecurityMetadataSource {
    @Autowired
    MenuService menuService;

    //路径匹配器
    AntPathMatcher pathMatcher = new AntPathMatcher();

    //根据请求地址分析所需的角色
    @Override
    public Collection<ConfigAttribute> getAttributes(Object object) throws IllegalArgumentException {
        String requestUrl = ((FilterInvocation) object).getRequestUrl();//请求的URl
        List<Menu> menus = menuService.getAllMenusWithRole();
        for (Menu menu : menus) {
            if (pathMatcher.match(menu.getUrl(), requestUrl)) {
                List<Role> roles = menu.getRoles();
                String[] rolesStr = new String[roles.size()];
                for (int i = 0; i < roles.size(); i++) {
                    rolesStr[i] = roles.get(i).getName();
                }
                return SecurityConfig.createList(rolesStr);
            }
        }
        //如果数据库的URl匹配不上，返回ROLE_login(只是一个标记)
        return SecurityConfig.createList("ROLE_login");
    }

    @Override
    public Collection<ConfigAttribute> getAllConfigAttributes() {
        return null;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return true;
    }
}
