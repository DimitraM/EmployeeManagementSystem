package net.dimitra.ems_backend.ems.service;

import net.dimitra.ems_backend.ems.dto.EmployeeDto;

public interface EmployeeService
{
    EmployeeDto createEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployeeById(Long employeeId);

}
