describe("UPDATE PASSWORD TEST", function() {

    it("Succeed with NEWPASSWORD anhxuan EMAIL xuananh PASSWORD xuananh", async function() {
        var datatest = {
            newpassword: "anhxuan",
            email: "xuananh",
            password: "xuananh"
        };
        expect(true).toBe(JSON.parse(await updatepasswordrequest(datatest)));
    });
    it("Failed password moi giong password cu NEWPASSWORD anhxuan EMAIL xuananh PASSWORD xuananh", async function() {
        var datatest = {
            newpassword: "anhxuan",
            email: "xuananh",
            password: "anhxuan"
        };
        expect(false).toBe(JSON.parse(await updatepasswordrequest(datatest)));
    });
    it("Failed with NEWPASSWORD anhxuan EMAIL xuananh PASSWORD NULL", async function() {
        var datatest = {
            newpassword: "anhxuan",
            email: "xuananh",
            password: ""
        };
        expect(false).toBe(JSON.parse(await updatepasswordrequest(datatest)));
    });
    it("Failed with leng newpassword > 15 NEWPASSWORD lysine.yasuo.nasus EMAIL xuananh PASSWORD anhxuan", async function() {
        var datatest = {
            newpassword: "lysine.yasuo.nasus",
            email: "xuananh",
            password: "anhxuan"
        };
        expect(false).toBe(JSON.parse(await updatepasswordrequest(datatest)));
    });
    

});