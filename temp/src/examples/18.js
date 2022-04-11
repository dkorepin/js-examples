  // Make obj prop getter;

  const obj = {
    person: {
      name: "joe",
      history: {
        hometown: "bratislava",
        bio: {
          funFact: "I like fishing.",
        },
      },
    },
  };

  const findKey = (obj, key) => {
    if (!obj) return null;
    return obj[key] || null;
  }

  const select = (obj, path) => {
    if (!obj) return null;
    const pathList = path.split('.');
    
    let res = obj;

    pathList.forEach((key) => {
      res = findKey(res, key);

      if (!res) return null;
    });

    return res || null;
  };

  console.log(select(obj, "car")); // null
  console.log(select(obj, "person.history.bio")); // { funFact: 'I like fishing.' }
  console.log(select(obj, "person.history.hometown")); // "bratislava"
  console.log(select(obj, "person.animal.pet.needNoseAntEater")); // null