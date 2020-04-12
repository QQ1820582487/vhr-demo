package com.xuxx.vhr.exception;

import com.xuxx.vhr.model.RespBean;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.sql.SQLException;
import java.sql.SQLIntegrityConstraintViolationException;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(SQLException.class)
    public RespBean sqlException(SQLException e) {
//        if (e instanceof MySQLIntegrityConstraintViolationException) {
        if (e instanceof SQLIntegrityConstraintViolationException) {
            return RespBean.error("该数据已存在关联数据,操作失败");
        } else {
            return RespBean.error("操作数据时发生异常,操作失败");
        }
    }
}
