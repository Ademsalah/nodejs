var generator = require('generate-password');

const passGenerator = () => {
    const password = generator.generate({
        length: 10,
        numbers: true
    });
    console.log('This is new random PASSWORD :', password);
}
module.exports.passGenerator = passGenerator;