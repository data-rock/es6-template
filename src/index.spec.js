import Talker from './index'

it("says hello", () => {
  expect(new Talker().speak()).toBe("hello")
})
