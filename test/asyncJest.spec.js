const answerPhone = require('../src/asyncJest');

describe('1 - O retorno do telefonema', () => {
  test('atende', async () => {
    await answerPhone(true).then((answerTrue) => {
      expect(answerTrue).toBe('Oi!');
    });
  });
  test('ocupado', async () => {
    try {
      await answerPhone(false);
    } catch (error) {
      expect(error).toEqual(new Error('Infelizmente não podemos atender...'));
    }
  });
});
