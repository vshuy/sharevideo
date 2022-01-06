describe("UPDATE COMMENT TEST", function() {

    it("Success with NEWCOMENT video khong hay EMAIL xuananh PASSWORD anhxuan", async function() {
        var datatest = {
            email: "xuananh",
            password: "anhxuan",
            newcomment: "video khong hay xuan anh update test",
            id: "27"
        };
        expect(false).toBe(JSON.parse(await updatecommentreques(datatest)));
    });
    it("False with NEWCOMENT = null EMAIL xuananh PASSWORD anhxuan", async function() {
        var datatest = {
            email: "xuananh",
            password: "anhxuan",
            newcomment: "",
            id: "27"
        };
        expect(false).toBe(JSON.parse(await updatecommentreques(datatest)));
    });
    it("False with NEWCOMENT = tam duoc EMAIL xuananh PASSWORD null", async function() {
        var datatest = {
            email: "xuananh",
            password: "",
            newcomment: "tamduoc",
            id: "27"
        };
        expect(false).toBe(JSON.parse(await updatecommentreques(datatest)));
    });
    it("False do khong phai chu so huu comment,  NEWCOMENT = other haha EMAIL hacker PASSWORD hacker", async function() {
        var datatest = {
            email: "hacker",
            password: "hacker",
            newcomment: "other haha",
            id: "27"
        };
        expect(false).toBe(JSON.parse(await updatecommentreques(datatest)));
    });

});
