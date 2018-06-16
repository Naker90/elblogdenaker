describe("routesResolver", () => {

    let routesResolver;

    beforeEach(() => {
        const routes = [
            {
                route: "test",
                solve: function(){},
            },
            {
                route: "default",
                solve: function(){},
                routeByDefault: true
            }
        ];
        routesResolver = NakerNoventa.RoutesResolver(routes);
    });

    it("returns route solver when routes match", async () => {
        let receivedPath = "test";

        let solver = await routesResolver.getRouteSolver(receivedPath);

        expect(solver.route).toBe("test");
    });

    it("returns default route solver when routes not match", async () => {
        let receivedPath = "notMatchRoute";

        let solver = await routesResolver.getRouteSolver(receivedPath);

        expect(solver.route).toBe("default");
        expect(solver.routeByDefault).toBe(true);
    });
});