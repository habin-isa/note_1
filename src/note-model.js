(function(exports) {
  function Note(string) {
    this.text = string;
    this.notes = [];
  };

  Note.prototype.displayText = function() {
    return this.text;
  };

  exports.Note = Note;

})(this);
