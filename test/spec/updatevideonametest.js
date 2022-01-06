describe("UPDATE VIDEO NAME TEST", function() {

    it("Success with EMAIL xuananh PASSWORD anhxuan NEWNAME atten chaliputh xuan anh up date", async function() {
        var datatest = {
            email: "xuananh",
            password: "anhxuan",
            newname: "atten chaliputh xuan anh up date",
            linkimg: "5fe1052548a58.jpg"
        };
        expect(true).toBe(JSON.parse(await updatenamevideorequest(datatest)));
    });
    it("False Ten video moi khong thay doi with EMAIL xuananh PASSWORD anhxuan NEWNAME atten chaliputh", async function() {
        var datatest = {
            email: "xuananh",
            password: "anhxuan",
            newname: "atten chaliputh",
            linkimg: "5fe1052548a58.jpg"
        };
        expect(false).toBe(JSON.parse(await updatenamevideorequest(datatest)));
    });
    it("False with EMAIL xuananh PASSWORD null NEWNAME atten chaliputh", async function() {
        var datatest = {
            email: "xuananh",
            password: "",
            newname: "atten chaliputh",
            linkimg: "5fe1052548a58.jpg"
        };
        expect(false).toBe(JSON.parse(await updatenamevideorequest(datatest)));
    });
    it("False leng > 40 with EMAIL xuananh PASSWORD anhxuan NEWNAME atten chaliputh", async function() {
        var datatest = {
            email: "xuananh",
            password: "anhxuan",
            newname: "lysine.yasuo.nasus.gnar.katarina.rammus.veigar.nunu.masteryi",
            linkimg: "5fe1052548a58.jpg"
        };
        expect(false).toBe(JSON.parse(await updatenamevideorequest(datatest)));
    });

});
