describe("romanNumeral", function() {
  it("returns M for 1000", function() {
    expect(romanNumeral(1000)).to.equal("M");
    expect(romanNumeral(3000)).to.equal("MMM");
  });

  it("returns correct number of hundreds", function() {
    expect(romanNumeral(1300)).to.equal("MCCC");
  });
});
