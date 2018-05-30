describe('new instance of a note')
  it('takes the text of a note upon instantiation');
  var note = new Note('Sam mr bracket');
  assert.toBeEqual(note.text, 'Sam mr bracket');

  it('stores new text in text property of note');
  assert.toBeEqual(note.displayText(), 'Sam mr bracket');
