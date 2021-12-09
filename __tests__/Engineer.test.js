const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Ashley', 11, 'email@email.com', 'acho93');
    
    expect(engineer.github).toEqual(expect.any(String));
});

test('gets engineer github', () => {
    const engineer = new Engineer('Ashley', 11, 'email@email.com', 'acho93');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets employee role', () => {
    const engineer = new Engineer('Ashley', 11, 'email@email.com', 'acho93');

    expect(engineer.getRole()).toEqual("Engineer");
});