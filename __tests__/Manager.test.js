const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Ashley', 11, 'email@email.com', 5);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets manager role', () => {
    const manager = new Manager('Ashley', 11, 'email@email.com', 5);

    expect(manager.getRole()).toEqual("Manager");
}); 