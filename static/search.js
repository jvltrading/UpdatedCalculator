//Search through an Array for a specified keyword.
export function search(array, keyword){
  let searchResult = [];

  array.forEach((element, index) => {
    if (element == keyword)
      searchResult.push(index);
  })
  return searchResult;
}