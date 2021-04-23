function* myGen(a, b, c) {  // Noncompliant
  let answer = 15;
  answer += a * b;
}
function* myGen(a, b) {  // Noncompliant
  let answer = 0;
  answer += a * b;
}
function* myGen(a, b) {  // Noncompliant
  let answer = 0;
  answer += a * b;
}
function* myGen(a, b) {  // Noncompliant
  let answer = 0;
  while(answer < 42){
    answer+= a * b;
    yield answer;	  
  }
}
function* myGen(a, b) {  // Noncompliant
  let answer = 0;
  answer += a * b;
}
function* myGen(a, b) {  // Noncompliant
  let answer = 0;
  answer += a * b;
}
function* myGen(a, b) {  // Noncompliant
  let answer = 0;
  answer += a * b;
}
function* myGen(a, b) {  // Noncompliant
  let answer = 0;
  answer += a * b;
}
function* myGen(a, b) {  // Noncompliant
  let answer = 0;
  answer += a * b;
}
function* myGen(a, b) {  // Noncompliant
  let answer = 0;
  answer += a * b;
}
function* myGen(a, b) {  // Noncompliant
  let answer = 0;
  answer += a * b;
}
function* myGen(a, b) {  // Noncompliant
  let answer = 0;
  answer += a * b;
}
