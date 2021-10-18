const Engineer = require('../lib/Engineer');

test('creates a engineer object', () => {
    const engineer = new Engineer('Patricia','1818','urbanearthymama@gmail.com', 'urbanearthymama');
  
    expect(engineer.name).toBe('Patricia');
  });