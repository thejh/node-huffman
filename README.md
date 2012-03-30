On npm as `huffman`.

Usage example:

    > probs = [{id: 'A', value: 1}, {id: 'B', value: 2}, {id: 'C', value: 1}]; require('huffman')(probs); probs
    [ { id: 'A',
        value: 1,
        code: [ 1, 1 ] },
      { id: 'B', value: 2, code: [ 0 ] },
      { id: 'C',
        value: 1,
        code: [ 1, 0 ] } ]

