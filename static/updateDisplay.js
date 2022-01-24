const displayOperationElement = document.querySelector('.operation .value');
const displayResultElement = document.querySelector('.result .value');

//Update Display Operation & Result.
export function updateDisplayOperation(operation) {
  displayOperationElement.innerHTML = operation;
}

export function updateDisplayResult(result) {
  displayResultElement.innerHTML = result;
}
