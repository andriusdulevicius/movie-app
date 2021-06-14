const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//reikia apibrezti kokio tipo duomenys bus saugomi DB
// {title:string,
// body:string,
// }

const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    isDone: {
      type: Boolean,
      required: true,
      default: false,
    },
    isEditOn: {
      type: Boolean,
      required: true,
      default: false,
    },
    isFavourite: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

//eksportuoti naujai sukurta objekta pagal sia schema
// dazniausiai turetu buti todo vienaskaitai , jei kolekcijos pavadinimas todos
const Todo = mongoose.model('Todo', todoSchema);
//sukurem todo modeli pagal todoSchema

module.exports = Todo;
