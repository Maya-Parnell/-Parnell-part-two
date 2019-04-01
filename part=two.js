
var question = 'Hello! What is the temperature today?';
var question2 = 'Is the event casual, semi-formal or formal?';

var tempFahr = prompt(question);
var eventType = prompt(question2);

var clothingSugg = ["something comfy", "a polo", "a suit","coat", "a jacket", "no jacket"];
 
 var num = clothingSugg.length;

var result = 'Since it is ' + tempFahr + ' degrees and you are going to a ' + eventType + ' event, you should wear ' + clothingSugg[i] + ' and ' + clothingSugg[i] + '.';


if (tempFahr <= 54 && eventType === 'casual') { 
    console.log(result)
} else if (54 < tempFahr <= 70 && eventType === 'casual') { 
    console.log(result) 
} else (tempFarh > 70 && eventType === 'casual') {
  console.log(result)
}

if (tempFahr <= 54 && eventType === 'semi-formal') { 
    console.log(result)
} else if (54 < tempFahr <= 70 && eventType === 'semi-formal'); { 
    console.log(result)
} else (tempFahr > 70 && eventType === 'semi-formal') {
  console.log(result)
}


if (tempFahr <= 54 && eventType === 'formal') { 
    console.log(result)
} else if (54 < tempFahr <= 70 && eventType === 'formal') { 
    console.log(result)
} else (tempFahr > 70 && eventType ==='formal') {
  console.log(result)
}

var result = 'Since it is ' + tempFahr + ' degrees and you are going to a ' + eventType + ' event, you should wear ' + clothingSugg[i] + ' and ' + clothingSugg[i] + '.';

	/*
  } else if (tempFahr > 54 && temp =< 70) {
    console.log(clothingSugg[1);
    lastItem = 'and' + clothingSugg[1] + '.';
  } else if (tempFahr > 70) {
    console.log(clothingSugg[2]);
    lastItem = 'and' + clothingSugg[2] + '.';
  } else {
  console.log('Caution, unknown!');


  if (eventType === 'casual') {
    console.log(clothingSugg[3]);
    secondItem = 'you should wear ' + clothingSugg[3];
  } else if (eventType === 'semi-formal') { 
    console.log(clothingSugg[4])
    secondItem = 'you should wear ' + clothingSugg[4];
  } else if (eventType === 'formal') {
    console.log(clothingSugg[5])
    secondItem = 'you should wear ' + clothingSugg[5];
  } else {
  console.log('Caution, unknown!');

var result = 'Since it is'  + tempFahr + 'degrees and you are going to a ' + eventType + 'event, you should wear' + thirdItem + 'and' + lastItem + '.';

console.log(result);
*/