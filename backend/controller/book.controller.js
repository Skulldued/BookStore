import Book from "../module/bookSchema.model.js";

export const getBook = async (req, res) => {
  try {
    const book = await Book.find();
    // console.log(book);
    res.status(200).json(book);
  } catch (error) {
    console.log("Error" + error.message);
    res.status(500).json(error);
  }
};
