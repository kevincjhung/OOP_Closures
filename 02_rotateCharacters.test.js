const makeRotate = require('./02_rotateCharacters')

test("makeRotate", () => {
  const rotate = makeRotate("xyz")

  expect(rotate()).toBe("yza")
  expect(rotate()).toBe("zab")
  expect(rotate()).toBe("abc")
})