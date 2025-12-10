package net.dimitra.ems_backend.ems.service.impl;

import lombok.AllArgsConstructor;
import net.dimitra.ems_backend.ems.dto.EmployeeDto;
import net.dimitra.ems_backend.ems.entinty.Employee;
import net.dimitra.ems_backend.ems.mapper.EmployeeMapper;
import net.dimitra.ems_backend.ems.repository.EmployeeRepository;
import net.dimitra.ems_backend.ems.service.EmployeeService;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {
    private EmployeeRepository employeeRepository;
    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        employeeRepository.save(employee);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);

    }
}
