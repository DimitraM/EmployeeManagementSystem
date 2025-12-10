package net.dimitra.ems_backend.ems.mapper;

import net.dimitra.ems_backend.ems.dto.EmployeeDto;
import net.dimitra.ems_backend.ems.entinty.Employee;

public class EmployeeMapper {
    public static EmployeeDto mapToEmployeeDto(Employee employee)
    {
        return new EmployeeDto(
            employee.getId(),
            employee.getFName(),
            employee.getLName(),
            employee.getEmail()
        );
    }
    public static Employee mapToEmployee(EmployeeDto employeeDto)
    {
        return new Employee(
                employeeDto.getId(),
                employeeDto.getFName(),
                employeeDto.getLName(),
                employeeDto.getEmail()
        );
    }
}
