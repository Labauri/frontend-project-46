// import gendiff from '../src/index.js';
// import { fileURLToPath } from 'url';
// import path from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// test('compare nested JSON files', () => {
//   const filepath1 = path.join(__dirname, '../__fixtures__/file1.json');
//   const filepath2 = path.join(__dirname, '../__fixtures__/file2.json');

//   const expected = `{
//     common: {
//       + follow: false
//         setting1: Value 1
//       - setting2: 200
//       - setting3: true
//       + setting3: null
//       + setting4: blah blah
//       + setting5: {
//             key5: value5
//         }
//         setting6: {
//             doge: {
//               - wow:
//               + wow: so much
//             }
//             key: value
//           + ops: vops
//         }
//     }
//     group1: {
//       - baz: bas
//       + baz: bars
//         foo: bar
//       - nest: {
//             key: value
//         }
//       + nest: str
//     }
//   - group2: {
//         abc: 12345
//         deep: {
//             id: 45
//         }
//     }
//   + group3: {
//         deep: {
//             id: {
//                 number: 45
//             }
//         }
//         fee: 100500
//     }
// }`;

//   const result = gendiff(filepath1, filepath2);
//   expect(result).toEqual(expected);
// });

import gendiff from '../src/index.js';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('compare nested JSON files (default stylish format)', () => {
  const filepath1 = path.join(__dirname, '../__fixtures__/file1.json');
  const filepath2 = path.join(__dirname, '../__fixtures__/file2.json');

  const result = gendiff(filepath1, filepath2);
  expect(result).toMatchSnapshot();
});

test('compare nested JSON files in plain format', () => {
  const filepath1 = path.join(__dirname, '../__fixtures__/file1.json');
  const filepath2 = path.join(__dirname, '../__fixtures__/file2.json');

  const result = gendiff(filepath1, filepath2, 'plain');
  expect(result).toMatchSnapshot();
});
