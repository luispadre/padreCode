package com.padre.controller;

import com.padre.pojo.User;
import com.padre.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/user")
@RestController
public class UserController {
    @Autowired
    private UserService userService;
    @RequestMapping(method= RequestMethod.GET)
    public List<User> findAll(){
        return userService.findAll();
    }

    @RequestMapping(value="/{id}",method = RequestMethod.GET)
    public User findById(@PathVariable Integer id){
        return userService.findById(id);
    }

    @RequestMapping(method=RequestMethod.POST)
    public String add(@RequestBody User user){
        userService.add(user);
        return "Usuario Guardado";
    }

    @RequestMapping(value="/{id}",method=RequestMethod.PUT)
    public String update(@RequestBody  User user, @PathVariable Integer id){
        user.setId(id);
        userService.update(user);
        return "usuario guardado";
    }

    @RequestMapping(value="/{id}",method = RequestMethod.DELETE)
    public String deleteById(Integer id){
        userService.deleteById(id);
        return "usuario eliminado";
    }
}
