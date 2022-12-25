const makeLoadedDie = require("./01_loadedDie")

test("makeLoadedDie", () => {
  const values = [1,2,3,4]
  const roll = makeLoadedDie(values)
  values.forEach(value => {
    expect(roll()).toBe(value)
  })
  values.forEach(value => {
    expect(roll()).toBe(value)
  })
})