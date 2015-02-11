describe("romanNumeral", function() {
  it("returns correct number of thousands", function() {
    expect(romanNumeral("1000")).to.equal("M");
  });

  it("returns correct number of hundreds", function() {
    expect(romanNumeral("300")).to.equal("CCC");
  });

  it("returns correct number of hundreds", function() {
    expect(romanNumeral("400")).to.equal("CD");
  });

  it("returns correct number of hundreds", function() {
    expect(romanNumeral("700")).to.equal("DCC");
  });

  it("returns correct number of hundreds", function() {
    expect(romanNumeral("900")).to.equal("CM");
  });

  it("returns correct number of hundreds", function() {
    expect(romanNumeral("500")).to.equal("D");
  });

  it("returns correct number of tens", function() {
    expect(romanNumeral("10")).to.equal("X");
  });

  it("returns correct number of tens", function() {
    expect(romanNumeral("40")).to.equal("XL");
  });

  it("returns correct number of tens", function() {
    expect(romanNumeral("70")).to.equal("LXX");
  });

  it("returns correct number of tens", function() {
    expect(romanNumeral("90")).to.equal("XC");
  });

  it("returns correct number of tens", function() {
    expect(romanNumeral("50")).to.equal("L");
  });

  it("returns correct number of ones", function() {
    expect(romanNumeral("1")).to.equal("I");
  });

  it("returns correct number of ones", function() {
    expect(romanNumeral("4")).to.equal("IV");
  });

  it("returns correct number of ones", function() {
    expect(romanNumeral("7")).to.equal("VII");
  });

  it("returns correct number of ones", function() {
    expect(romanNumeral("9")).to.equal("IX");
  });

  it("returns correct number of ones", function() {
    expect(romanNumeral("5")).to.equal("V");
  });
});
