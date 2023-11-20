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

console.warn(`Folosind metoda map pe arrayul skills, returneaza si
afiseaza in consola un array in care fiecare consoana este scrisa cu
litera mare (vocalele nu) `);
const vowels = ['a', 'e', 'i', 'o', 'u'];
const arrVowels = person.skills.map((skill) => {
  const letters = skill.split('');
  const upperCaseVowels = letters.map((letter) => {
    if (vowels.includes(letter)) {
      return letter.toUpperCase();
    }

    return letter;
  });

  return upperCaseVowels.join('');
});

console.log(arrVowels);

console.warn(`Folosind map pe arrayul friends, returneaza un array
 in care fiecare pozitie contine propozitia
“Ma numesc {name} {surname} si am {age} ani.”`);

const sentences = person.friends.map((friend) => {
  const { name, surname, age } = friend;

  return `Ma numesc ${name} ${surname} si am ${age} ani.`;
});
console.log(sentences);

console.warn(`Folosind map pe arrayul friends, returneaza un array in care
fiecare pozitie contine propozitia
“Diferenta de varsta dintre {friendName} si {personName} este {diff}”`);

const sentencesDiff = person.friends.map((friend) => {
  const { name: frindName, age: friendAge } = friend;
  const { name: personName, age: personAge } = person;
  const diff = Math.abs(personAge - friendAge);

  let yearsWord = 'ani';

  if (diff === 1) {
    yearsWord = 'an';
  }

  return `Diferenta de varsta dintre ${frindName} si ${personName} este de ${diff} ${yearsWord}.`;
});

console.log(sentencesDiff);

console.warn(`Returneaza si afiseaza un array in care fiecare pozitie contine diferenta
dintre varsta persoanei si lungimea cuvantului de pe arrayul skill `);

const diffAgeSkill = person.skills.map((skill) => {
  const diff = person.age - skill.length;

  return diff;
});

console.log(diffAgeSkill);

console.warn(`Folosind metoda map pe arrayul skills, returneaza un array care contine
 cuvintele cu prima si ultima litera mari. `);

const firstLast = person.skills.map((skill) => {
  const letters = skill.split('');
  const firstLastUpperCase = letters.map((letter, index) => {
    if (index === 0 || index === letters.length - 1) {
      return letter.toUpperCase();
    }

    return letter;
  });

  return firstLastUpperCase.join('');
});

console.log(firstLast);

console.warn(
  `Folosind metoda map pe arrayul skills, returneaza un array care contine cuvintele inversate (exemplu: lmth)`,
);

const skillsReverse = person.skills.map((skill) => {
  const letters = skill.split('').reverse().join('');

  return letters;
});

console.log(skillsReverse);

console.warn(`Folosind metoda map pe arrayul friends, returneaza un array care sa contina propozitiile
“{friendName} are {age} ani.”`);

const ageFriends = person.friends.map((friend) => {
  const { name: friendName, age } = friend;

  return `${friendName} are ${age} ani.`;
});

console.log(ageFriends);

console.warn(`Folosind metoda map pe arrayul friends, returneaza un array care contine numele inversat
 al prietenilor pe fiecare pozitie (exemplu: Stevenson Steven)`);

const reverseFriendsNames = person.friends.map((friend) => {
  const { name, surname } = friend;

  return surname + ' ' + name;
});

console.log(reverseFriendsNames);

console.warn(`Folosind metoda map pe arrayul friends, returneaza un array care contine pe fiecare
 pozitie diferenta dintre lungimea totala al numelui complet (fara spatii) si varsta prietenului de pe iteratie`);

const diffNameLengthAge = person.friends.map((friend) => {
  const { name, surname, age } = friend;
  const diff = Math.abs((name + surname).length - age);

  return diff;
});

console.log(diffNameLengthAge);

console.warn(`Folosind metoda map pe arrayul skills returneaza un array care contine diferenta dintre
lungimea fiecarui skill si varsta prietenului `);

const diffSkillLengthFriendAge = person.skills.map((skill) => {
  const friendAge = person.friends.map((friend) => {
    const { age } = friend;

    return Math.abs(skill.length - age);
  });

  return friendAge;
});

console.log(diffSkillLengthFriendAge);
