let coucou = 'abc';
const button = document.querySelector('button')!; // exclamation tells ts that we know that the button will be not null, if you are not certain wrap your code in a if statement


function add (n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  return;
}
function clickHandler(message: string) {
  console.log('clicked' + message)
}
if (button) {
  button.addEventListener('click', clickHandler.bind(null, 'cc'));
  console.log('coucou...');
}
 