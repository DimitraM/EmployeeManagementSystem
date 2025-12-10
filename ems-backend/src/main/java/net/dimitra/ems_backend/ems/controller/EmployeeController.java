package net.dimitra.ems_backend.ems.controller;

import lombok.AllArgsConstructor;
import net.dimitra.ems_backend.ems.dto.EmployeeDto;
import net.dimitra.ems_backend.ems.service.EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/employees")
public class EmployeeController {

    private EmployeeService employeeService;

    //Build Add Employee REST API
    @PostMapping
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto){
        EmployeeDto savedEmployee = employeeService.createEmployee(employeeDto);
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }

    //Build Get Employee REST API
    @GetMapping("{id}")
    public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable("id") Long employeeId)
    {
        EmployeeDto employeeDto=employeeService.getEmployeeById(employeeId);
        return ResponseEntity.ok(employeeDto);
    }

    //Build Get All Employees REST API
    @GetMapping
    public ResponseEntity<List<EmployeeDto>> getAllEmployees(){
        List<EmployeeDto> employees = employeeService.getAllEmployees();
        return ResponseEntity.ok(employees);
    }

    //Build Update Employee byId REST API
    @PutMapping("{Id}")
    public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable("Id") Long employeeId, @RequestBody EmployeeDto updateEmployee){
        EmployeeDto employeeDto= employeeService.updateEmployee(employeeId,updateEmployee);
        return  ResponseEntity.ok(employeeDto);
    }

}
