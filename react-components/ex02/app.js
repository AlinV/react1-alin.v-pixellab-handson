const person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(
  `Folosind obiectul person si reduce, afiseaza in consola un string
  care contine skill-urile de pe pozitiile pare ale arrayului, separate
  prin virgula`,
);
// html,js,java,jquer,

// let accumulator = '';
// for (let i = 0; i < person.skills.length; ++i) {
//   const skill = person.skills[i];
//   let punctuation = ',';

//   if (i === person.skills.length - 1) {
//     punctuation = '';
//   }

//   accumulator += `${skill}${punctuation}`;
// }
// console.log(accumulator);

const message1 = person.skills.reduce((message1, skill, index, skills) => {
  if (index % 2 === 0) {
    let punctuation = skills.length - 1 === index % 2 ? '' : ',';
    return (message1 += `${skill}${punctuation}`);
  }
  return message1;
}, '');

console.log(message1);

console.warn(` In mod similar, afiseaza skill-urile care NU incep cu j.`);

// const NoJSkill = person.skills.reduce((result, skill) => {
//   if (skill[0].toLowerCase() !== 'j') {
//     result += (result ? ', ' : '') + skill;
//   }

//   return result;
// }, '');
// console.log(NoJSkill);

const message2 = person.skills.reduce((filteredSkills, skill) => {
  if (skill.toLowerCase().startsWith('j')) {
    return filteredSkills;
  }

  filteredSkills.push(skill);

  return filteredSkills;
}, []);

console.log(message2.join(','));

console.warn(
  `Folosind reduce afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy, xxx yyy."`,
);

const message3 = person.friends.reduce((message, friend, index, friends) => {
  const { name, surname } = friend;
  const punctuation = friends.length - 1 === index ? '.' : ', ';

  message += `${name} ${surname}${punctuation}`;

  return message;
}, 'Prietenii mei se numesc ');

console.log(message3);

console.warn(`
  Folosind reduce, afiseaza numarul total de ani pe care
  il au persoanele din arrayul friends, doar daca varsta
  este mai mare sau egala cu 30 de ani.
`);

console.log(
  person.friends.reduce((totalAge, { age }) => {
    if (age >= 30) {
      totalAge += age;
    }
    return totalAge;
  }, 0),
);

console.warn(
  ` Folosind reduce, afiseaza suma anilor de nastere a persoanelor.`,
);

console.log(
  person.friends.reduce((sumYears, friend) => {
    const { age } = friend;
    const birthYear = new Date().getFullYear() - age;

    return (sumYears += birthYear);
  }, 0),
);

console.warn(` Afiseaza fraza: "Intre Dragos si
Larry este o diferenta de xx ani. Intre Dragos si
Steven... ", doar daca varsta prietenului este impara.`);

const finalSentence = person.friends.reduce((sentence, friend) => {
  const { name, age } = friend;

  if (age % 2 === 0) {
    return sentence;
  }

  const ageDiff = Math.abs(person.age - age);

  sentence += `Intre ${person.name} si ${name} este o diferenta de ${ageDiff} ani. `;

  return sentence;
}, '');

console.log(finalSentence.trim());

console.warn(`Folosind obiectul person si reduce, afiseaza in consola un string care
contine skillurile persoanei, separate prin virgula`);

const messageSkills = person.skills.reduce((message, skill, index, skills) => {
  let punctuation = index === skills.length - 1 ? '' : ', ';
  message += `${skill}${punctuation}`;

  return message;
}, '');

console.log(messageSkills);

console.warn(`In mod similar, afiseaza skillurile care incep cu c`);

const skillsStartWithC = person.skills.reduce((message, skill) => {
  if (!skill.toLocaleLowerCase().startsWith('c')) {
    return message;
  }

  message.push(skill);

  return message;
}, []);

console.log(skillsStartWithC.join(', '));

console.warn(` Folosind reduce, afiseaza propozitia: "Numele de familie
 ale prietenilor mei sunt: xxx, xxx , xxx."`);

const surnameSentence = person.friends.reduce(
  (message, friend, index, friends) => {
    const { surname } = friend;
    let punctuation = index === friends.length - 1 ? '.' : ', ';
    message += `${surname}${punctuation}`;

    return message;
  },
  'Numele de familie ale prietenilor mei sunt: ',
);

console.log(surnameSentence);

console.warn(
  ` Folosind reduce, afiseaza numarul total de ani pe care il au persoanele din arrayul friends `,
);

const friendsTotalAge = person.friends.reduce((message, friend) => {
  const { age } = friend;

  message += age;

  return message;
}, 0);

console.log(friendsTotalAge);

console.warn(` Folosind reduce, afiseaza suma anilor  persoanelor. `);

const personsTotalAge = person.friends.reduce((message, friend) => {
  const { age } = friend;

  message += age;

  return message;
}, person.age);

console.log(personsTotalAge);

console.warn(
  ` Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends. `,
);

const personFriendsAgeDiff = Math.abs(person.age - friendsTotalAge);

console.log(personFriendsAgeDiff);

console.warn(`Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani.
Intre Dragos si Steven... ". Repeta pentru tot arrayul friends.`);

const ageDiffSentence = person.friends.reduce((message, friend) => {
  const { name, age } = friend;

  const ageDiff = Math.abs(person.age - age);

  let yearsDiff = 'ani';
  if (ageDiff === 1) {
    yearsDiff = 'an';
  }

  message += `Intre ${person.name} si ${name} este o diferenta de ${ageDiff} ${yearsDiff}. `;

  return message;
}, '');

console.log(ageDiffSentence.trim());
