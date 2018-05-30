(function(exports) {
  var note = new Note();
  var text = 'text';
  var notes = new Note();

    function testTextReturn() {
      if (text !== text) {
        throw new Error("Not a string");
    }};

    function testStringValue() {
      if (text.constructor !== 'string') {
        throw new Error("Text entered is not a string");
    }};

    function testStoredInText() {
      var text = 'This is some test text';
        if (text !== 'This is some test text') {
          throw new Error("Please submit some text");
      }};

    function testTextStoredAsNote() {
      if (notes.includes(text) === false) {
        throw new Error("Note not stored");
      }};



testTextReturn();
testStringValue();
testTextStoredAsNote();

})(this);





// functions take text as an object
// NewNote method - takes text and can write a new note
// StoreNote method - takes text and can store in StoredText object
