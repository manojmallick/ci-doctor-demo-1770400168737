const { add } = require('./index');

const result = add(2, 3);
if (result === 5) {
  console.log('✓ add(2, 3) = 5');
  process.exit(0);
}
