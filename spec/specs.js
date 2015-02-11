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

});
