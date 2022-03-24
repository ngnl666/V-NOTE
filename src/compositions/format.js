const nonHighLightList = ['*(', ')*', '_(', ')_', '"(', '")'];

const selectedArea = (content, start, end) => {
  const selectWord = content.slice(start, end).split('\n')[0];
  return [start, start + selectWord.length - 1];
};

const formatWord = (content, word, type) => {
  let tempCotent = content.split('');

  switch (type) {
    case 'font':
      tempCotent[word[0]] = `#(${tempCotent[word[0]]}`;
      tempCotent[word[1]] = `${tempCotent[word[1]]})#`;
      break;
    case 'bold':
      tempCotent[word[0]] = `*(${tempCotent[word[0]]}`;
      tempCotent[word[1]] = `${tempCotent[word[1]]})*`;
      break;
    case 'underline':
      tempCotent[word[0]] = `_(${tempCotent[word[0]]}`;
      tempCotent[word[1]] = `${tempCotent[word[1]]})_`;
      break;
    case 'quote':
      tempCotent[word[0]] = `"(${tempCotent[word[0]]}`;
      tempCotent[word[1]] = `${tempCotent[word[1]]})"`;
      break;
  }
  return tempCotent.join('');
};

const markup = content => {
  return content
    .replaceAll('#(', '<div class="text-3xl">')
    .replaceAll(')#', '</div>')
    .replaceAll('*(', '<span class="font-extrabold">')
    .replaceAll(')*', '</span>')
    .replaceAll('_(', '<span class="underline">')
    .replaceAll(')_', '</span>')
    .replaceAll('"(', '<div class="bg-gray-300/30 rounded-md px-4 py-2">')
    .replaceAll(')"', '</div>')
    .replaceAll('\n', '<br/>');
};

export default {
  nonHighLightList,
  formatWord,
  markup,
  selectedArea,
};
