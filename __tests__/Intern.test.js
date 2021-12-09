const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Ashley', 11, 'email@email.com', 'UC Berkeley');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('gets intern school', () => {
    const intern = new Intern('Ashley', 11, 'email@email.com', 'UC Berkeley');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets employee role', () => {
    const intern = new Intern('Ashley', 11, 'email@email.com', 'UC Berkeley');

    expect(intern.getRole()).toEqual("Intern");
}); 