import { app, generateRandomNumber } from '../index.js';

const primeNumbers = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97, 101, 103, 107, 109, 113,
];

const isPrime = (number) => primeNumbers.includes(number);

const createQuestion = () => {
  const number = generateRandomNumber();
  const answer = isPrime(number) ? 'yes' : 'no';
  return [number, answer];
};

export default () => {
  app({
    description:
      'Answer "yes" if given number is prime. Otherwise answer "no".',
    generateQuestion: createQuestion,
    incorrectAnswer: `'<USER_ANSWER>' is wrong answer ;(. Correct answer was '<ANSWER>'.
  Let's try again, <NAME>!`,
    congratulation: 'Congratulations, <NAME>!',
  });
};
