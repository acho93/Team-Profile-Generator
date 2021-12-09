const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Ashley', 11, 'email@email.com');

    expect(employee.name).toBe('Ashley');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Employee('Ashley', 11, 'email@email.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee ID', () => {
    const employee = new Employee('Ashley', 11, 'email@email.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email', () => {
    const employee = new Employee('Ashley', 11, 'email@email.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('gets employee role', () => {
    const employee = new Employee('Ashley', 11, 'email@email.com');

    expect(employee.getRole()).toEqual("Employee");
}); 