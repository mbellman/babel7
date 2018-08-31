const a = {
  b: {
    c: 5,
    getX: () => ({
      x: {
        y: {
          z: 10
        }
      }
    })
  }
};

const c = a?.b?.c;
const z = c?.getX?.().y?.z;
