describe("pow", function () {

    it("2^3 = 8", function () {
        chai.assert.equal(pow(2, 3), 8);
    });

    it("2^6 = 64", function () {
        chai.assert.equal(pow(2, 6), 64);
    });

    it("7^3 = 343", function () {
        chai.assert.equal(pow(7, 3), 343);
    });

    it("5^3 = 125", function () {
        chai.assert.equal(pow(5, 3), 125);
    });

    it("4^4 = 256", function () {
        chai.assert.equal(pow(4, 4), 256);
    });

    it("8^2 = 64", function () {
        chai.assert.equal(pow(8, 2), 64);
    });
});