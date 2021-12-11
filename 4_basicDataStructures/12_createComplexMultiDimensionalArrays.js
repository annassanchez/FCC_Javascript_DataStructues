//when we think of arrays as data structures, one of the most powerful features is that arrays can contain, or be made up of other arrays
//arrays can contain an infinite depth of arrays that contain other arrays, each with their own arbitrary levels of depth, and so on
//in this way, an array can very quickly become a very complex data stucture, known as multi-dimensional or nested-array.
//consider this exxample
let nestedArray = [
  ['deep'],
  [
    ['deeper'], ['deeper'] 
  ],
  [
    [
      ['deepest'], ['deepest']
    ],
    [
      [
        ['deepest-est?']
      ]
    ]
  ]
];
//'deep' array is nested 2 levels deep
//'deeper' arrays are 3 levels deep
//'deepest' arrays are 3 levels
//'deepest-est?' is 5
let myNestedArray1 = [
    // Only change code below this line
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    ['concat', false, true, 'spread', 'array'],
    ['mutate', 1327.98, 'splice', 'slice', 'push'],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
    // Only change code above this line
  ];
  console.log(myNestedArray1);
  let myNestedArray = [
    // Only change code below this line
    [
      ['deep'],
      [
        ['deeper']
      ],
      [
        [
          ['deepest']
        ]
      ]
    ]
    // Only change code above this line
  ];
  console.log(myNestedArray);