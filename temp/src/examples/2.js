function convertToBinary (number) {
    return number > 0 ? convertToBinary( parseInt(number / 2) ) + (number % 2) : ''
  }

  function getMaxBinaryGap (number) {
    const binary = convertToBinary(number);
    const result = [];
    let startIndex = -1;
    let resultValue = 0;

    for (let index = 0; index < binary.length; index++) {
      const current = Number(binary[index]);

      if (current === 1) {
        if (startIndex > -1) {
          result.push(index-startIndex-1);
        }
        startIndex = index;
      }
    }

    result.forEach(num => {
      if (num > resultValue) resultValue = num;
    });

    return resultValue;
  }

  const testCase = () => {
    // console.log(32+'-'+getMaxBinaryGap(32));

    const start= new Date().getTime();
    for (let index = 0; index < 30000; index++) {
      getMaxBinaryGap(index)
      // console.log(index+'-'+getMaxBinaryGap(index));
    }
    const final = new Date().getTime() - start;
    console.log('completed in '+final+'ms');
  }
 
  testCase();