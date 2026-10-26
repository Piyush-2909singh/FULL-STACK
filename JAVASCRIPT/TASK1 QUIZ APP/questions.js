// Key = question, Value = { options, answer (index), explanation }
const questions = {
  "Which keyword declares a block-scoped variable that can be reassigned?": {
    options: ["var", "let", "const", "define"],
    answer: 1,
    explanation: "let is block-scoped and can be reassigned. const cannot be reassigned."
  },
  "What does typeof null return?": {
    options: ["null", "undefined", "object", "number"],
    answer: 2,
    explanation: "It is a long-standing JavaScript quirk: typeof null is 'object'."
  },
  "Which method adds an item to the end of an array?": {
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: 0,
    explanation: "push() adds to the end. pop() removes from the end."
  },
  "What is the result of 2 + '2'?": {
    options: ["4", "22", "NaN", "Error"],
    answer: 1,
    explanation: "With a string operand, + concatenates, so the result is '22'."
  },
  "Which operator checks both value and type?": {
    options: ["=", "==", "===", "!="],
    answer: 2,
    explanation: "=== is strict equality, with no type coercion."
  }
};
