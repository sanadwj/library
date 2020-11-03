function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    console.log(this.name + 'by' + this.author + ',' + this.pages + ', not' + this.read + 'yet')
  }

}