let backButton = document.querySelector("#back");
let nextButton = document.querySelector("#next");

let students = [
  {
    profileImage: "https://cdn.glitch.com/e1e69fee-4745-4936-8930-10497f271553%2F537DDCA7-8C76-43E7-980A-2BBA1192A3ED.jpeg?v=1585182496031",
    name: "Abigail",
    quote: "dont try to play me",
    superlative: "Best Laugh"
  },
  {
    profileImage: "https://cdn.glitch.com/e1e69fee-4745-4936-8930-10497f271553%2FBC4C9F0C-2132-4B20-8A87-1C2F65DD4AC0.jpeg?v=1585182522522",
    name: "Miguel",
    quote: "agree to disagree",
    superlative: "best hair",
  },
    {
    profileImage: "https://cdn.glitch.com/e1e69fee-4745-4936-8930-10497f271553%2FB9E6E6B0-A9DF-4308-B850-930F4D53E955.jpeg?v=1585182533728",
    name: "Ambar",
    quote: "Beeeeetch",
    superlative: "Best Dressed (girls)"
  } ,
  {
    profileImage: "https://cdn.glitch.com/e1e69fee-4745-4936-8930-10497f271553%2F37E24908-B7C9-4B66-B34F-59B0BA200D26.jpeg?v=1585182547097",
    name: "Demian",
    quote: "Bruh",
    superlative: "best dressed"
  } ,
{
    profileImage: "https://cdn.glitch.com/e1e69fee-4745-4936-8930-10497f271553%2FD38EA3F0-C6D5-48AC-BF58-12E7C80DA602.jpeg?v=1585182563713",
    name: "nixon",
    quote: "so youre not going to say hi",
    superlative: "most sarcastic"
  } ,
{
    profileImage: "https://cdn.glitch.com/e1e69fee-4745-4936-8930-10497f271553%2F1CCE7D24-04E0-43F1-8854-B7EC0F945DFA.jpeg?v=1585182599382",
    name: "eli",
    quote: "hey mammas",
    superlative: "Nicest"
  }  ,
{
    profileImage: "https://cdn.glitch.com/e1e69fee-4745-4936-8930-10497f271553%2FC819F4E8-498E-48A6-B3B7-3591AD16EFD6.jpeg?v=1585182827331",
    name: "Miranda",
    quote: "shhhhtoppppp",
    superlative: "class clown"
  } ,
{
    profileImage: "https://cdn.glitch.com/e1e69fee-4745-4936-8930-10497f271553%2F520F1C55-C43D-4211-A3AA-EFC208AE2630.jpeg?v=1585182588856",
    name: "Adriana",
    quote: "hellll nawww",
    superlative: "Most Loud"
  },
];
let studentLoop = students.length -1
let count = 0;
document.querySelector("#pic").src = students[count].profileImage;
document.querySelector("#name").innerHTML = students[count].name;
document.querySelector("#quote").innerHTML = students[count].quote;
document.querySelector("#superlative").innerHTML = students[count].superlative;

nextButton.addEventListener("click", () => {
  console.log("next");
  count++;
  if (count > studentLoop){
    count = 0
  }
  console.log(count);
  document.querySelector("#pic").src = students[count].profileImage;
  document.querySelector("#name").innerHTML = students[count].name;
  document.querySelector("#quote").innerHTML= students[count].quote;
  document.querySelector("#superlative").innerHTML = students[count].superlative;
  
});

backButton.addEventListener("click", () => {
  console.log("back");
  count--;
  if (count <0){
    count= studentLoop
  }
  console.log(count);
  document.querySelector("#pic").src = students[count].profileImage;
  document.querySelector("#name").innerHTML = students[count].name;
  document.querySelector("#quote").innerHTML = students[count].quote;
  document.querySelector("#superlative").innerHTML = students[count].superlative;
});


