describe("DELETE COMMENT TEST", function() {

    it("Success with EMAIL xuananh PASSWORD anhxuan ID 23", async function() {
        var datatest = {
            email: "xuananh",
            password: "anhxuan",
            id: "23"
        };
        expect(true).toBe(JSON.parse(await deletecommentreques(datatest)));
    });
    it("False do khong phai la chu so huu comment, EMAIL xuananh PASSWORD anhxuan ID 25", async function() {
        var datatest = {
            email: "hacker",
            password: "hacker",
            id: "25"
        };
        expect(false).toBe(JSON.parse(await deletecommentreques(datatest)));
    });
    it("False  EMAIL xuananh PASSWORD null ID 27", async function() {
        var datatest = {
            email: "xuananh",
            password: "",
            id: "27"
        };
        expect(false).toBe(JSON.parse(await deletecommentreques(datatest)));
    });

});
