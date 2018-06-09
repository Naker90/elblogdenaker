describe("routesResolver", () => {

    let routesResolver;

    beforeEach(() => {
        const routes = [
            {
                route: "test",
                solve: function(){}
            }
        ];
        routesResolver = NakerNoventa.RoutesResolver(routes);
    });

    it("returns route solver when routes match", testAsync(async () => {
        let receivedPath = "test";

        let solver = await routesResolver.getRouteSolver(receivedPath);

        expect(solver.route).toBe("test");
    }));

    function testAsync(runAsync) {
        return () => {
            runAsync().then(done => { done(); });
        };
    }
});