const wordLengths = (array) => {
    const output = [];
    for (let index = 0; index < array.length; index += 1) {
      output.push(array[index].length);
    }
    return output;
  };