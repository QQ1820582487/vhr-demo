package com.xuxx.vhr.controller.system.basic;

import com.xuxx.vhr.model.Menu;
import com.xuxx.vhr.model.RespBean;
import com.xuxx.vhr.model.Role;
import com.xuxx.vhr.service.MenuService;
import com.xuxx.vhr.service.PermissService;
import com.xuxx.vhr.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/system/basic/permiss")
public class PermissController {

    @Autowired
    PermissService permissService;
    @Autowired
    MenuService menuService;
    @Autowired
    RoleService roleService;

    @GetMapping("/")
    public List<Role> getAllRoles() {
        return permissService.getAllRoles();
    }


    @GetMapping("/menus")
    public List<Menu> getAllMenus() {
        return menuService.getAllMenus();
    }

    @GetMapping("/mids/{rid}")
    public List<Integer> getMidsByRid(@PathVariable Integer rid) {
        return menuService.getMidsByRid(rid);
    }

    @PutMapping("/")
    public RespBean updateMenuRole(Integer rid, Integer[] mids) {
        if (menuService.updateMenuRole(rid, mids)) {
            return RespBean.ok("更新成功");
        }
        return RespBean.ok("更新失败");
    }

    @PostMapping("/role")
    public RespBean addRole(@RequestBody Role role) {
        if (roleService.addRole(role) == 1) {
            return RespBean.ok("添加成功");
        }
        return RespBean.ok("添加失败");
    }

    @DeleteMapping("/role/{rid}")
    public RespBean deleteRoleById(@PathVariable Integer rid) {
        if (roleService.deleteRoleById(rid) == 1) {
            return RespBean.ok("删除成功");
        }
        return RespBean.error("删除失败");
    }
}
