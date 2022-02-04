let secretMessage = [
  'Learning',
  'is',
  'not',
  'about',
  'what',
  'you',
  'get',
  'easily',
  'the',
  'first',
  'time',
  'it',
  'is',
  'about',
  'what',
  'can',
  'you',
  'figure',
  'out',
  '-2015',
  'Chris',
  'Pine',
  'Learn',
  'JavaScript',
];

// 1 Delete last element from secretMessage.
secretMessage.pop();
console.log(secretMessage);

// 2 Check the length of the Array
secretMessage.length;
console.log(secretMessage.length);

// 3  Add 'to' & 'Program' at the end of the Array (push)
secretMessage.push('to', 'Program');
console.log(secretMessage);

// 4 Change the word 'easily' to 'right'
secretMessage[7] = 'right';
console.log(secretMessage);

// 5 Remove first String of the Array.
secretMessage.shift();
console.log(secretMessage);

// 6 Add 'Programming' to the beginning
secretMessage.unshift('Programming');
console.log(secretMessage);

// 7 Remove 'get' 'right' 'the' 'first' 'time' & replaces with 'know'
secretMessage.splice(6, 5, 'know');
console.log(secretMessage);

// Print the secret message as a sentence
console.log(secretMessage.join());
