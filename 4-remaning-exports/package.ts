const name1 = 'Hello 1'
const name2 = 'Hello 2'

export const name3 = 'Hello 3'

export {
    name1 as newName1,
    name2 as newName2
}

/*
Can not combine inline export with export list

You're already exporting name ☝️, don't export me again
export {
  name3
}
*/