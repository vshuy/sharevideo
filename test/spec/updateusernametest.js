describe("UPDATE NAME TEST", function() {

    it("Success with newname ceo EMAIL chien PASSWORD chien", async function() {
        var datatest = {
            newname: "ceo",
            email: "chien",
            password: "chien"
        };
        expect(true).toBe(JSON.parse(await updateusernamerequest(datatest)));
    });
    it("Failse newname giong name cu, EMAIL chien PASSWORD chien", async function() {
        var datatest = {
            newname: "ceo",
            email: "chien",
            password: "chien"
        };
        expect(false).toBe(JSON.parse(await updateusernamerequest(datatest)));
    });
    it("Failse with EMAIL null PASSWORD chien", async function() {
        var datatest = {
            newname: "admin",
            email: "",
            password: "chien"
        };
        expect(false).toBe(JSON.parse(await updateusernamerequest(datatest)));
    });
    it("Failse with leng newname > 15  EMAIL chien PASSWORD chien", async function() {
        var datatest = {
            newname: "lysine.yasuo.nasus",
            email: "chien",
            password: "chien"
        };
        expect(false).toBe(JSON.parse(await updateusernamerequest(datatest)));
    });

});
