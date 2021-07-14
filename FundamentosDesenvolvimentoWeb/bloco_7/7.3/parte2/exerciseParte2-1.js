const addOne = (array) => {
    const output = [];
    for (let index = 0; index < array.length; index += 1) {
      output.push(array[index] + 1);
    }
    return output;
  };