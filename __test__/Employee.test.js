const Employee = require('../lib/Employee');

test('creates a employee object', () => {
    const employee = new Employee('Patricia','1818','urbanearthymama@gmail.com');
  
    expect(employee.name).toBe('Patricia');
  });