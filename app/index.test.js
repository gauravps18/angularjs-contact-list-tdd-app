const testContext = require.context('./modules', true, /\.js$/);
testContext.keys().forEach(testContext);

const codeContext = require.context('./modules', true, /\.js$/);
codeContext.keys().forEach(codeContext);