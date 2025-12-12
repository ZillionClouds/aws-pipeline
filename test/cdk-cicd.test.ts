import { handler } from "../services/hello";

describe("Hello describe test suite", () => {
    test('Initial Test', async () => {
        const result = await handler({}, {});
        expect(result.statusCode).toBe(200);
    });
})
