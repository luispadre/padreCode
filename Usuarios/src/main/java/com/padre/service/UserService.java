package com.padre.service;

import com.padre.dao.UserDao;
import com.padre.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserDao userDao;


    public List<User> findAll(){
        return userDao.findAll();
    }
    public User findById(Integer id){
        return userDao.findById(id).get();
    }
    public void add(User user){
        userDao.save(user);
    }
    public void update(User user){
        userDao.save(user);
    }
    public void deleteById(Integer id){
        userDao.deleteById(id);
    }
}
