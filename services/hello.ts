

async function handler(event: any, context: any) {
    return {
        statusCode: 400,
        body: "Test Lambda"
    }
}

export = { handler };