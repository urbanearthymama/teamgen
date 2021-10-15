const Employee = require('../lib/Employee');

test('creates a employee object', () => {
    const employee = new Employee('name');
  
    expect(employee.name).toBe('name');
  });