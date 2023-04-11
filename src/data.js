const data = [
  {
    id: 1,
    question: "Today is Alice’s lucky day! She wakes up to an email that says she has won 500 dollars in a lottery. She needs to click the link in her email and claim it. Alice presses on the link, super ecstatic already. the link asks Alice to provide her bank details, and social security number. Should Alice provide this information?",
    answers: [
      {
        text: "Yes",
        correct: true,
      },
      {
        text: "No",
        correct: false,
      },
      
    ],
    hint: "Phishing emails and links are a common tactic used by attackers to gain access to sensitive information, and it's important for everyone to be aware of the risks these links create for you sensitive information like banking details, credit card information, passwords and emails!",

  },
  {
    id: 2,
    question: "A few days later Alice wakes up with her friends calling her non-stop asking what all the messages are she is sending everyone on Facebook, to her absolute shock Alice had no idea about what was happening. She goes into her messenger and sees all her Facebook friends got a link from her Facebook account and realised she was just hacked. Why do you think Alice had her account hacked?",
    answers: [
      {
        text: "She clicked on the phishing link the other day",
        correct: false,
      },
      {
        text: "She did not have her two-factor authentication turned on for any of her accounts",
        correct: false,
      },
      {
        text: "She had the same password for her email and her Facebook",
        correct: false,
      },
      {
        text: "All the above ",
        correct: true,
      },
    ],
  },
  {
    id: 3,
    question:
      "Alice wants to protect her accounts, so it never gets hacked. She thinks of setting up security questions for her accounts. What questions can Alice choose?",
    answers: [
      {
        text: "What is your middle name?",
        correct: false,
      },
      {
        text: "What is your favorite childhood memory?",
        correct: false,
      },
      {
        text: "Where did your parents first meet?",
        correct: true,
      },
      {
        text: "What was your 1st grade teacher’s name?",
        correct: false,
      },
      
    ],
  },
  {
    id: 4,
    question: "What other way can Alice protect her accounts apart from setting up some security questions?",
    answers: [
      {
        text: "Having different passwords for all her accounts",
        correct: false,
      },
      {
        text: "Setting up One-time passwords for every time a new device tries to log in",
        correct: false,
      },
      {
        text: "Risk based authentication",
        correct: false,
      },
      {
        text: "All the above",
        correct: true,
      },
    ],
  },
  {
    id: 5,
    question: "Alice also needs to change her password and have a different password for all her accounts. What things Alice needs to be mindful about before setting up her passwords?",
    answers: [
      {
        text: "Set up a unique password that is at least 10-15 characters long.",
        correct: false,
      },
      {
        text: "Set up a short password, so it is easy to remember",
        correct: false,
      },
      {
        text: "Set up a password that makes use of letters, numbers, and special characters and easy to remember. ",
        correct: true,
      },
      {
        text: "Using her name and birthday so she can remember the password easily.",
        correct: false,
      },
    ],
  },
  {
    id: 6,
    question: "Alice also wants to be cautions and decided to block her bank account so the attacker cannot get access to her bank account. She decides to call the bank, since she does not have the bank’s number, she decides to look for it online. How can Alice tell if the website she found is the actual website of the bank?",
    answers: [
      {
        text: "Set up a unique password that is at least 10-15 characters long.",
        correct: false,
      },
      {
        text: "Set up a short password, so it is easy to remember",
        correct: false,
      },
      {
        text: "Set up a password that makes use of letters, numbers, and special characters and easy to remember. ",
        correct: true,
      },
      {
        text: "Using her name and birthday so she can remember the password easily.",
        correct: false,
      },
    ],
  },
  
  {
    id: 7,
    question: "Alice also wants to be cautions and decided to block her bank account so the attacker cannot get access to her bank account. She decides to call the bank, since she does not have the bank’s number, she decides to look for it online. How can Alice tell if the website she found is the actual website of the bank?",
    answers: [
      {
        text: "Set up a unique password that is at least 10-15 characters long.",
        correct: false,
      },
      {
        text: "Set up a short password, so it is easy to remember",
        correct: false,
      },
      {
        text: "Set up a password that makes use of letters, numbers, and special characters and easy to remember. ",
        correct: true,
      },
      {
        text: "Using her name and birthday so she can remember the password easily.",
        correct: false,
      },
    ],
  },

  {
    id: 8,
    question: "Alice also wants to be cautions and decided to block her bank account so the attacker cannot get access to her bank account. She decides to call the bank, since she does not have the bank’s number, she decides to look for it online. How can Alice tell if the website she found is the actual website of the bank?",
    answers: [
      {
        text: "Set up a unique password that is at least 10-15 characters long.",
        correct: false,
      },
      {
        text: "Set up a short password, so it is easy to remember",
        correct: false,
      },
      {
        text: "Set up a password that makes use of letters, numbers, and special characters and easy to remember. ",
        correct: true,
      },
      {
        text: "Using her name and birthday so she can remember the password easily.",
        correct: false,
      },
    ],
  },

  {
    id: 9,
    question: "Alice also wants to be cautions and decided to block her bank account so the attacker cannot get access to her bank account. She decides to call the bank, since she does not have the bank’s number, she decides to look for it online. How can Alice tell if the website she found is the actual website of the bank?",
    answers: [
      {
        text: "Set up a unique password that is at least 10-15 characters long.",
        correct: false,
      },
      {
        text: "Set up a short password, so it is easy to remember",
        correct: false,
      },
      {
        text: "Set up a password that makes use of letters, numbers, and special characters and easy to remember. ",
        correct: true,
      },
      {
        text: "Using her name and birthday so she can remember the password easily.",
        correct: false,
      },
    ],
  },

  {
    id: 10,
    question: "Alice also wants to be cautions and decided to block her bank account so the attacker cannot get access to her bank account. She decides to call the bank, since she does not have the bank’s number, she decides to look for it online. How can Alice tell if the website she found is the actual website of the bank?",
    answers: [
      {
        text: "Set up a unique password that is at least 10-15 characters long.",
        correct: false,
      },
      {
        text: "Set up a short password, so it is easy to remember",
        correct: false,
      },
      {
        text: "Set up a password that makes use of letters, numbers, and special characters and easy to remember. ",
        correct: true,
      },
      {
        text: "Using her name and birthday so she can remember the password easily.",
        correct: false,
      },
    ],
  },
];

const prizeMoney = [
  { id: 1, amount: "$ 5000" },
  { id: 2, amount: "$ 15000" },
  { id: 3, amount: "$ 60000" },
  { id: 4, amount: "$ 150000" },
  { id: 5, amount: "$ 250000" },
  { id: 6, amount: "$ 600000" },
  { id: 7, amount: "$ 1000000" },
  { id: 8, amount: "$ 100000000" },
  { id: 9, amount: "$ 500000000" },
  { id: 10, amount: "$ 1000000000" },
].reverse();

export { prizeMoney, data };
