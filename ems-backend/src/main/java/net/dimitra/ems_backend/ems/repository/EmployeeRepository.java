package net.dimitra.ems_backend.ems.repository;

import net.dimitra.ems_backend.ems.entinty.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee , Long> {

}
