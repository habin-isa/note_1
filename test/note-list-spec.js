describe('new instance of notes array')
  it('takes an empty array of notes upon instantiation');
  var noteList = new NoteList();
  assert.toBeEqual(noteList.noteArray, []);

  it('stores an array of note models');
  noteList.add('Item one');
  assert.toBeEqual(noteList.noteArray, ['Item one']);

  it('stores an array of multiple note models');
  var noteList = new NoteList();
  noteList.add('Item one');
  noteList.add('Item two');
  noteList.add('Item three');
  assert.toBeEqual(noteList.noteArray, ['Item one', 'Item two', 'Item three']);
