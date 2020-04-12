package com.xuxx.vhr.config;

import org.springframework.security.access.AccessDecisionManager;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.access.ConfigAttribute;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.authentication.InsufficientAuthenticationException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.Collection;

/**
 * 判断当前登录用户是否具备所访问的路径的角色
 */
@Component
public class CustomUrlAccessDecisionManager implements AccessDecisionManager {
    // authentication保存了当前登录用户信息，object（FilterInvocation对象，是CustomFilterInvocation类的getAttributes方法中的object参数）用来获取当前请求对象，configAttributes是CustomFilterInvocation类的getAttributes方法的返回值，请求所需的角色
    @Override
    public void decide(Authentication authentication, Object object, Collection<ConfigAttribute> configAttributes) throws AccessDeniedException, InsufficientAuthenticationException {
        for (ConfigAttribute configAttribute : configAttributes) {
            String needRole = configAttribute.getAttribute();
            if ("ROLE_login".equals(needRole)) {
                //根据authentication的实例来判断是否登录
                if (authentication instanceof AnonymousAuthenticationToken) {
                    throw new AccessDeniedException("尚未登录，请登录！");
                } else {
                    return;
                }
            } else {
                //获取当前登录用户的角色
                Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
                //判断
                for (GrantedAuthority authority : authorities) {
                    if (authority.getAuthority().equals(needRole)) {
                        return;
                    }
                }
            }
        }
        throw new AccessDeniedException("权限不足，请联系管理员！");
    }

    @Override//是否支持
    public boolean supports(ConfigAttribute attribute) {
        return true;
    }

    @Override//是否支持
    public boolean supports(Class<?> clazz) {
        return true;
    }
}
