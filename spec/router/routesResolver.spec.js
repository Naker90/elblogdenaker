require("../../src/router/routesResolver");

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

    it("returns route solver when routes match", () => {
        let receivedPath = "test";

        let solver = routesResolver.getRouteSolver(receivedPath);

        expect(solver.route).toBe("test");
        expect(solver.solve).toBe("function");
    });

});