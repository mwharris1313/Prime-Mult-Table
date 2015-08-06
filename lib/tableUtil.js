module.exports = {

  cellSize: function(maxElement){
    return ('' + maxElement).length * 2; // twice size for multiplication table
  },

  padElement: function(element, maxSize){
    if (element === undefined || maxSize === undefined) return null;
    var element = '' + element;
    if (maxSize <= element.length) return element;
    return Array(1 + maxSize - element.length).join(' ') + element; // pad left of element with spaces
  },

  printHeader: function(array, cellWidth){
    var row = Array(cellWidth + 1).join(' ') + ' | ';
    for (var i=0; i<array.length; i++) {
      row += this.formatCell(array[i], cellWidth);
    }
    console.log(row);
  },

  printRow: function(rowTitle, array, cellWidth){
    var row = '| ' + this.formatCell(rowTitle, cellWidth);
    for (var i=0; i<array.length; i++) {
      row += this.formatCell(array[i], cellWidth);
    }
    console.log(row);
  },

  formatCell: function(element, cellWidth){
    return this.padElement(element, cellWidth) + ' | '
  },

  printHorizontalLine: function(numberOfCells, cellWidth){
    var length = 1 + (numberOfCells + 1) * (cellWidth + 3);
    var line = Array(length+1).join('-');
    console.log(line);
  },

  printTable: function(array){
    this.printHeader(array);
  },

};

