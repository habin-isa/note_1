(function(exports) {
  function NoteList() {
    this.noteArray = [];
  };

  NoteList.prototype.add = function(string) {
    this.noteArray.push(string);
  };

  NoteList.prototype.displayArray = function() {
    return this.noteArray;
  };

  exports.NoteList = NoteList;

}) (this);
