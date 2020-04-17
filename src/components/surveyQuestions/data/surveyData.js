const questions = [
  {
    question: 'What is an acceptable cost of living index for your new city?',
    name: 'col',
    options: [
      { description: 'Very low 75', value: '1' },
      { description: 'Low 76 - 99', value: '2' },
      { description: 'Medium 100 - 110', value: '3' },
      { description: 'High 111 - 149', value: '4' },
      { description: 'Very high 150+', value: '5' },
    ],
  },
  {
    question: 'What is your age group?',
    name: 'age',
    options: [
      { description: '17 and younger', value: '1' },
      { description: '18 - 29', value: '2' },
      { description: '30 - 46', value: '3' },
      { description: '47 - 65', value: '4' },
      { description: '66+', value: '5' },
    ],
  },
  {
    question: 'What is the population of your dream city?',
    name: 'pop',

    options: [
      { description: 'No preference', value: '1' },
      { description: 'Below 10k', value: '2' },
      { description: '10K - 30K', value: '3' },
      { description: '31k - 99k', value: '4' },
      { description: 'Above 1 million', value: '5' },
    ],
  },
  {
    question: 'What is a reasonable commute time for routine travel?',
    name: 'cmt',
    options: [
      { description: 'No preference', value: '1' },
      { description: '0 - 10 minutes', value: '2' },
      { description: '10 - 20 minutes', value: '3' },
      { description: '20 - 30 minutes', value: '4' },
      { description: '45+ minutes', value: '5' },
    ],
  },
];

export default questions;
