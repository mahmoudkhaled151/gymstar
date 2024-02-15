const { name } = require("ejs");
const Program = require("../model/programs.model");
var fs = require("fs");
var path = require("path");
var appRoot = path.dirname(require.main.filename);

// ----------------------------------------------------------------
// Create a new program instance
// ----------------------------------------------------------------
exports.addNewProgram = async (req, res) => {
  try {
    // get the latest id from the server's database and increment it by one for our new object
    let lastId = await Program.findOne().sort({ id: "desc" }).exec();
    if (!lastId) lastId = 0;
    else lastId = lastId.id + 1;
    req.body.id = lastId;
    if (req.files.length > 0) {
      var imgList = req.files.map((item) => ({
        name: item.filename,
        originalname: item.originalname,
        path: "/uploads/" + item.filename,
      }));
    }
    else
    {
      console.log('No image uploaded');
      return res.status(487).send({status:false, message: 'Please upload an Image.' });
    }
    let obj = {
      name: req.body.name,
      title: req.body.title,
      description: req.body.description,
      images: imgList,
      id: req.body.id,
    };

    // Check if the user has provided all required fields
    if (!obj.name || !obj.title || !obj.images) {
      return res
        .status(400)
        .send({ status: false, message: "Please fill out all fields!" });
    }

    var progIdQuery = await Program.findOne({ id: obj.id }).exec();

    if (progIdQuery) {
      console.log("ID already exists!");
      return res
        .status(409)
        .send({ status: false, message: "This ID is already in use." });
    }

    // Save the new program to the database
    let newPrograms = new Program(obj); //create a new instance of the model with data from req.body
    let data = await newPrograms.save(); // save that new instance to the database and return it as a promise
    return res.status(201).send({
      status: true,
      message: "program added Successfully",
      results: data,
    });
  } catch (err) {
    console.log("failed add new program : ", err.message);
    return res
      .status(500)
      .send({ status: false, message: "Internal Server Error...!" });
  }
};

// ----------------------------------------------------------------
// Get all programs
// ----------------------------------------------------------------
exports.getAllPrograms = async (req, res) => {
  try {
    let data = await Program.find({}, { _id: 0, __v: 0 }).sort({ id: "asc" }); // get all records in the database
    if (!data) {
      return res
        .status(404)
        .json({ status: false, message: "No Data Found...!" });
    }
    return res.status(200).json({ status: true, results: data }); // return data to client-side
  } catch (err) {
    console.error(`Server Error : ${err.message}`);
    return res
      .status(500)
      .json({ status: false, message: "Internal Server Error...!" });
  }
};

// ----------------------------------------------------------------
// Get one program by ID
// ----------------------------------------------------------------
exports.getOneProgram = async (req, res) => {
  const id = req.params.id;
  try {
    let data = await Program.findOne({ id: id }, { _id: 0, __v: 0 });
    if (!data)
      return res
        .status(404)
        .send({ status: false, message: `Data not found for the given Id` });

    return res.status(200).send({ status: true, results: data }); // return data to client-side
  } catch (err) {
    console.error(`Server Error : ${err.message}`);
    return res
      .status(404)
      .json({ status: false, message: `Internal Server Error...!` });
  }
};

// ----------------------------------------------------------------
// Update a program
// ----------------------------------------------------------------
exports.updateProgram = async (req, res) => {
  const id = req.params.id;
  const updateOps = req.body;
  try {
    let data = await Program.updateOne({ id: id }, { $set: updateOps });
    if (!data) {
      return res.status(400).json({
        status: false,
        message: "Operation failed!",
      }); 
    }
    return res.status(200).json({
      status: true,
      message: "Program has been updated successfully",
    });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({
      status: false,
      message: `Error updating program: ${err}`,
    });
  }
};

// ----------------------------------------------------------------
// Delete a program by its ID
// ----------------------------------------------------------------
exports.deleteProgram = async (req, res) => {
  const id = req.params.id;

  //   // Checking if the user is authorized to delete this resource
  //   const token = req.header('auth-token');
  //   let verifiedUser = jwt.verify(token, process.env.JWT_SECRET);
  //   if (!verifiedUser.userID) return res.status(401).json({ auth: false, message: 'Unauthorized.' });

  try {
    let data = await Program.findByIdAndDelete(id);

    if (!data) {
      return res.status(404).json({
        status: false,
        message: "No record found with provided ID",
      });
    } 

      return res.status(200).json({
        status: true,
        data: data,
        message: "Record deleted Successfully",
      });
    
  } catch (err) {
    console.error(err.message);
    return res.status(500).send({status:false , message:"Internal Server Error...!"});
  }
};
