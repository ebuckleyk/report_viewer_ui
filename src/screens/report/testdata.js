export const reportA = {
  id: 123,
  name: 'Report A',
  description: 'Description of Report A',
  columns: [{
    name: 'ColumnA',
    key: 'columnA',
    type: 'integer',
    sortable: true
  }, {
    name: 'ColumnB',
    key: 'columnB',
    type: 'integer',
    sortable: false
  }, {
    name: 'ColumnC',
    key: 'columnC',
    type: 'string',
    sortable: false
  }, {
    name: 'ColumnD',
    key: 'columnD',
    type: 'string',
    sortable: false
  }],
  data: [{
    columnA: 123,
    columnB: 898,
    columnC: 'Apples',
    columnD: 'Oranges'
  }, {
    columnA: 654,
    columnB: 11,
    columnC: 'Pineapple',
    columnD: 'Mango'
  }, {
    columnA: 90,
    columnB: 4,
    columnC: 'Apples',
    columnD: 'Pineapple'
  }, {
    columnA: 99,
    columnB: 100,
    columnC: 'Grapes',
    columnD: 'Oranges'
  }]
}

export const reportB = {
  id: 233,
  name: 'Report B',
  description: 'Description of Report B',
  columns: [{
    name: 'ColumnR',
    key: 'columnR',
    type: 'integer',
    sortable: true
  }, {
    name: 'ColumnS',
    key: 'columnS',
    type: 'integer',
    sortable: false
  }, {
    name: 'ColumnT',
    key: 'columnT',
    type: 'string',
    sortable: false
  }, {
    name: 'ColumnU',
    key: 'columnU',
    type: 'string',
    sortable: false
  }, {
    name: 'ColumnV',
    key: 'columnV',
    type: 'string',
    sortable: false
  }, {
    name: 'ColumnW',
    key: 'columnW',
    type: 'string',
    sortable: false
  }],
  data: [{
    columnR: 123,
    columnS: 898,
    columnS: 'Cats',
    columnT: 'Dogs',
    columnU: 'Extra',
    columnV: 'Data',
    columnW: 'To Test'
  }, {
    columnR: 55,
    columnS: 7,
    columnS: 'Giraffe',
    columnT: 'Lion',
    columnU: 'Extra',
    columnV: 'Data',
    columnW: 'To Test'
  }, {
    columnR: 89,
    columnS: 3,
    columnS: 'Camel',
    columnT: 'Wolf',
    columnU: 'Extra',
    columnV: 'Data',
    columnW: 'To Test'
  }, {
    columnR: 53,
    columnS: 1232,
    columnS: 'Bird',
    columnT: 'Pig',
    columnU: 'Extra',
    columnV: 'Data',
    columnW: 'To Test'
  }]
}

export const reportC = {
  id: 333,
  name: 'Report C',
  description: 'Description of Report C',
  columns: [{
    name: 'ColumnA',
    key: 'columnA',
    type: 'integer',
    sortable: true
  }, {
    name: 'ColumnB',
    key: 'columnB',
    type: 'integer',
    sortable: false
  }, {
    name: 'ColumnC',
    key: 'columnC',
    type: 'string',
    sortable: false
  }, {
    name: 'ColumnD',
    key: 'columnD',
    type: 'string',
    sortable: false
  }],
  data: [{
    columnA: 123,
    columnB: 898,
    columnC: 'Apples',
    columnD: 'Oranges'
  }, {
    columnA: 654,
    columnB: 11,
    columnC: 'Pineapple',
    columnD: 'Mango'
  }, {
    columnA: 90,
    columnB: 4,
    columnC: 'Apples',
    columnD: 'Pineapple'
  }, {
    columnA: 99,
    columnB: 100,
    columnC: 'Grapes',
    columnD: 'Oranges'
  }]
}

export const reportD = {
  id: 124,
  name: 'Report D',
  description: 'Description of Report D',
  columns: [{
    name: 'ColumnA',
    key: 'columnA',
    type: 'integer',
    sortable: true
  }, {
    name: 'ColumnB',
    key: 'columnB',
    type: 'integer',
    sortable: false
  }],
  data: [{
    columnA: 123,
    columnB: 898,
  }, {
    columnA: 654,
    columnB: 11,
  }, {
    columnA: 90,
    columnB: 4,
  }, {
    columnA: 99,
    columnB: 100,
  }]
}

export const reportList = [{
  id: 123,
  name: 'Report A',
  description: 'Description of Report A',
  reportData: reportA
}, {
  id: 233,
  name: 'Report B',
  description: 'Description of Report B',
  reportData: reportB
}, {
  id: 333,
  name: 'Report C',
  description: 'Description of Report C',
  reportData: reportC
}, {
  id: 124,
  name: 'Report B',
  description: 'Description of Report D',
  reportData: reportD
}]

