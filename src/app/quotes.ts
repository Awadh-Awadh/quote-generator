export class Quotes {
 public quote:string
 public author:string
 public name: string
 showDetails:boolean

 constructor(quote:string,author:string,name:string ){
   this.quote = quote
   this.author = author
   this.name = name;
   this.showDetails = true
 }
}
