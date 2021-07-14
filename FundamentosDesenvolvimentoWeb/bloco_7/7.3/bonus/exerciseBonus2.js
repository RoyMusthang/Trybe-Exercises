const factorials = (int) => {
    let factorial = 1;
    for (let index = int; index > 0; index -= 1) factorial *= index;
    return factorial;
  };