describe('new instance of notes array')
  it('takes an empty array of notes upon instantiation');
  var notes = new Notes();
  assert.toBeEqual(notes.notesArray, []);
