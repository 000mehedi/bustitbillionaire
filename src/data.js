const data = [
  {
    id: 1,
    question: "Today is Alice’s lucky day! She wakes up to an email that says she has won 500 dollars in a lottery. She needs to click the link in her email and claim it. Alice presses on the link, super ecstatic already. the link asks Alice to provide her bank details, and social security number. Should Alice provide this information?",
    answers: [
      {
        text: "Yes",
        correct: false,
      },
      {
        text: "No",
        correct: true,
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
    hint:"If an attacker gains access to one of your social media accounts, they can potentially use that same password to try and gain access to your other accounts. 2FA is important because it provides an additional layer of security beyond just a password or PIN. Passwords can be easily compromised through phishing attacks, social engineering, or brute force attacks. With 2FA,  even if a password is compromised, an attacker still needs to have access to the second factor in order to gain access to an account or system.",
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
    hint:"Remember that two factor authentication questions cannot be easily guessable, ambiguous, public information, not memorable. If the questions are ambiguous or not memorable Alice would have a hard time logging into her account. On the other hand, if the answers are easily guessable or public information, attacker can guess the questions and easily get in.",
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
    hint:"Setting up one-time passwords means that a unique password is generated every time you log in from a new device. This approach is particularly useful for preventing unauthorized access to your accounts, as even if someone has your regular password, they won't be able to log in without the one-time password.",
  },
  {
    id: 5,
    question: "Alice also needs to change her password and have a different password for all her accounts. What things Alice needs to be mindful about before setting up her passwords?",
    answers: [
      {
        text: "Set up a unique password that is at least 5-7 characters long.",
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
    hint: "Laws requiring strong passwords are designed to enhance online account security and protect sensitive information from unauthorized access. Strong passwords often use a combination of uppercase and lowercase letters, numbers, and special characters to reduce the risk of account compromise and protect against data breaches.",
  },
  {
    id: 6,
    question: "Alice also wants to be cautions and decided to block her bank account so the attacker cannot get access to her bank account. She decides to call the bank, since she does not have the bank’s number, she decides to look for it online. Alice also wants to be cautions and decided to block her bank account so the attacker cannot get access to her bank account. She decides to call the bank, since she does not have the bank’s number, she decides to look for it online. How can Alice tell if the website she found is the actual website of the bank?",
    answers: [
      {
        text: "The website looks pretty.",
        correct: false,
      },
      {
        text: "We cannot tell from the webiste alone.",
        correct: false,
      },
      {
        text: "Check the HTTP, look for proper privacy policy, check if there are any unsoicited links, fishy contact details. ",
        correct: true,
      },
      {
        text: "She can trust the two reviews that says the website is authentic ",
        correct: false,
      },
    ],
    hint:"If a website is not properly authenticated by the user (Alice), any links or information on that website may be false and pose a risk to the user's security. This can include attempts to steal the user's personal and sensitive information, which could lead to harm such as identity theft or financial fraud.",
    
  },
  
  {
    id: 7,
    question: "Looks like the website is legit so she decides to call the number from there. There is a customer service person on the line, should they just believe that the account holder is Alice that is on the line?",
    answers: [
      {
        text: "No",
        correct: true,
      },
      {
        text: "Yes",
        correct: false,
      }
    ],
    hint:"The customer service on the line needs to verify that it is indeed Alice, if not, anyone can call as Alice and gain access to her account and control it however they please",
  },

  {
    id: 8,
    question: "How can the customer service person identify Alice?",
        answers: [
      {
        text: "Name, Birthdate, Address",
        correct: true,
      },
      {
        text: "Security questions",
        correct: false,
      },
      {
        text: "Alice’s Code",
        correct: false,
      },
      {
        text: "All of the above",
        correct: false,
      },
    ],
    hint:"Authentication methods may vary depending on the context and purpose. While some methods require codes or security questions to verify someone's identity, other methods may rely on different factors.",
  },

  {
    id: 9,
    question: "Should just identifying Alice be enough? Should the customer service person now grant access and control to the person on the line to their bank account?",
    answers: [
      {
        text: "No",
        correct: true,
      },
      {
        text: "Yes",
        correct: false,
      }
    ],
    hint:"The process of identifying typically involves providing some form of information, such as a name, username, or email address, that can be used to uniquely identify them within a system or organization. Anyone who wants to gain access to your account may have this information, like your name or email. The organisation needs to further verify your identity with some information that is not known to public or anyone close to you.",
  },

  {
    id: 10,
    question: "How can customer service on the line, authenticate that it is indeed Alice?",
        answers: [
      {
        text: "Asking the pin for their account",
        correct: false,
      },
      {
        text: "Asking their middle name",
        correct: false,
      },
      {
        text: "Asking their birthdate, phone number and address",
        correct: false,
      },
      {
        text: "None of the above ",
        correct: true,
      },
    ],
    hint:"Authentication works as the second layer after identification. Authentication can help prevent fraud, identity theft, and other types of cyber-attacks that can result in financial losses, reputational damage, or even legal liability. It also helps protect the privacy and security of individuals' personal information, which is essential for building trust and maintaining customer loyalty",
  },
];

const prizeMoney = [
  { id: 1, amount: "$ 5 000" },
  { id: 2, amount: "$ 15 000" },
  { id: 3, amount: "$ 60 000" },
  { id: 4, amount: "$ 150 000" },
  { id: 5, amount: "$ 250 000" },
  { id: 6, amount: "$ 600 000" },
  { id: 7, amount: "$ 1 000 000" },
  { id: 8, amount: "$ 100 000 000" },
  { id: 9, amount: "$ 500 000 000" },
  { id: 10, amount: "$ 1 000 000 000" },
].reverse();

export { prizeMoney, data };
