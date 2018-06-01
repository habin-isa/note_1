(function(exports) {
  function NoteList() {
    this.noteArray = [];
  };

  NoteList.prototype.add = function(string) {
    this.noteArray.push(string);
  };

  exports.NoteList = NoteList;

}) (this);
