describe("Delete video test", function() {

    it(" Success with EMAIL xuananh PASSWORD anhxuan LINKIMG 5fe109c68856c.jpg", async function() {
        var datatest = {
            email: "xuananh",
            password: "anhxuan",
            linkimg: "5fe109c68856c.jpg"
        };
        expect(true).toBe(JSON.parse(await deletevideorequest(datatest)));
    });
    it(" False do khong phai la chu so huu video EMAIL hacker PASSWORD hacker LINKIMG 5fe1052548a58.jpg", async function() {
        var datatest = {
            email: "hacker",
            password: "hacker",
            linkimg: "5fe1052548a58.jpg"
        };
        expect(false).toBe(JSON.parse(await deletevideorequest(datatest)));
    });
    it("False with EMAIL xuananh PASSWORD null LINKIMG 5fe1052548a58.jpg", async function() {
        var datatest = {
            email: "xuananh",
            password: "",
            linkimg: "5fe1052548a58.jpg"
        };
        expect(false).toBe(JSON.parse(await deletevideorequest(datatest)));
    });

});
