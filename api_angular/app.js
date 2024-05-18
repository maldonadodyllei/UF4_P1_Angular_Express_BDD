const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const specs = require("./swagger");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "212.227.227.190",
  user: "pauporbla",
  password: "pauporbla",
  database: "fitxa_angularDB",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to the database");
  }
});

// #region PAU

app.get("/pauSelect", (req, res) => {
  try {
    const query = "SELECT * FROM pau;";
    db.query(query, (err, results) => {
      if (err) {
        console.error("Error in database query:", err);
        return res.status(500).json("Getting data.", err);
      }
      res.status(200).json(results);
    });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
});

app.post("/pauPost", (req, res) => {
  const product = req.body;

  try {
    const query =
      "INSERT INTO pau (nReference, name, price, description, type, legal) VALUES(?,?,?,?,?,?);";
    db.query(
      query,
      [
        product.nReference,
        product.name,
        product.price,
        product.description,
        product.type,
        product.legal,
      ],
      (err, results) => {
        if (err) {
          console.error("Error in database query:", err);
          return res.status(500).json("Getting data.", err);
        }
        res.status(200).json(results);
      }
    );
  } catch (err) {
    return res.status(500).json({ message: err });
  }
});

app.put("/pauPut", (req, res) => {
  const product = req.body;
  const queryParams = [];
  let setClause = "";

  if (product.name !== undefined) {
    setClause += "name = ?, ";
    queryParams.push(product.name);
  }
  if (product.price !== undefined) {
    setClause += "price = ?, ";
    queryParams.push(product.price);
  }
  if (product.description !== undefined) {
    setClause += "description = ?, ";
    queryParams.push(product.description);
  }
  if (product.type !== undefined) {
    setClause += "type = ?, ";
    queryParams.push(product.type);
  }
  if (product.legal !== undefined) {
    setClause += "legal = ?, ";
    queryParams.push(product.legal);
  }

  setClause = setClause.slice(0, -2);

  try {
    const query = `UPDATE pau SET ${setClause} WHERE nReference = ?;`;

    queryParams.push(product.nReference);

    db.query(query, queryParams, (err, results) => {
      if (err) {
        console.error("Error in database query:", err);
        return res.status(500).json("Getting data.", err);
      }
      res.status(200).json(results);
    });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
});

app.delete("/pauDelete", (req, res) => {
  const { nReference } = req.body;

  try {
    const query = "DELETE FROM pau WHERE nReference = ?;";
    db.query(query, [nReference], (err, results) => {
      if (err) {
        console.error("Error in database query:", err);
        return res.status(500).json({ message: "Error deleting data.", err });
      }
      res.status(200).json(results);
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// #endregion PAU

// #region DYLAN

app.get("/dylanSelect", (req, res) => {
  try {
    const query = "SELECT * FROM dylan;";
    db.query(query, (err, results) => {
      if (err) {
        console.error("Error in database query:", err);
        return res.status(500).json("Getting data.", err);
      }
      res.status(200).json(results);
    });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
});

app.post("/dylanPost", (req, res) => {
  const product = req.body;

  try {
    const query =
      "INSERT INTO dylan (seriesNumber, model, category, image, cv, maxSpeed, accelerationTime, price, available) VALUES(?,?,?,?,?,?,?,?,?);";
    db.query(
      query,
      [
        product.seriesNumber,
        product.model,
        product.category,
        product.image,
        product.cv,
        product.maxSpeed,
        product.accelerationTime,
        product.price,
        product.available,
      ],
      (err, results) => {
        if (err) {
          console.error("Error in database query:", err);
          return res.status(500).json("Getting data.", err);
        }
        res.status(200).json(results);
      }
    );
  } catch (err) {
    return res.status(500).json({ message: err });
  }
});

app.put("/dylanPut", (req, res) => {
  const product = req.body;
  const queryParams = [];
  let setClause = "";

  if (product.model !== undefined) {
    setClause += "model = ?, ";
    queryParams.push(product.model);
  }
  if (product.category !== undefined) {
    setClause += "category = ?, ";
    queryParams.push(product.category);
  }
  if (product.image !== undefined) {
    setClause += "image = ?, ";
    queryParams.push(product.image);
  }
  if (product.cv !== undefined) {
    setClause += "cv = ?, ";
    queryParams.push(product.cv);
  }
  if (product.maxSpeed !== undefined) {
    setClause += "maxSpeed = ?, ";
    queryParams.push(product.maxSpeed);
  }
  if (product.accelerationTime !== undefined) {
    setClause += "accelerationTime = ?, ";
    queryParams.push(product.accelerationTime);
  }
  if (product.price !== undefined) {
    setClause += "price = ?, ";
    queryParams.push(product.price);
  }
  if (product.available !== undefined) {
    setClause += "available = ?, ";
    queryParams.push(product.available);
  }

  setClause = setClause.slice(0, -2);

  try {
    const query = `UPDATE dylan SET ${setClause} WHERE seriesNumber = ?;`;

    queryParams.push(product.seriesNumber);

    db.query(query, queryParams, (err, results) => {
      if (err) {
        console.error("Error in database query:", err);
        return res.status(500).json("Getting data.", err);
      }
      res.status(200).json(results);
    });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
});

app.delete("/dylanDelete", (req, res) => {
  const { seriesNumber } = req.body;

  try {
    const query = "DELETE FROM dylan WHERE seriesNumber = ?;";
    db.query(query, [seriesNumber], (err, results) => {
      if (err) {
        console.error("Error in database query:", err);
        return res.status(500).json({ message: "Error deleting data.", err });
      }
      res.status(200).json(results);
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// #endregion DYLAN

// #region ALBERT

app.get("/albertSelect", (req, res) => {
  try {
    const query = "SELECT * FROM albert;";
    db.query(query, (err, results) => {
      if (err) {
        console.error("Error in database query:", err);
        return res.status(500).json("Getting data.", err);
      }
      res.status(200).json(results);
    });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
});

app.post("/albertPost", (req, res) => {
  const product = req.body;

  try {
    const query =
      "INSERT INTO albert (artistName, printTitle, price, description, certification, disponible) VALUES(?,?,?,?,?,?);";
    db.query(
      query,
      [
        product.artistName,
        product.printTitle,
        product.price,
        product.description,
        product.certification,
        product.disponible,
      ],
      (err, results) => {
        if (err) {
          console.error("Error in database query:", err);
          return res.status(500).json("Getting data.", err);
        }
        res.status(200).json(results);
      }
    );
  } catch (err) {
    return res.status(500).json({ message: err });
  }
});

app.put("/albertPut", (req, res) => {
  const product = req.body;
  const queryParams = [];
  let setClause = "";

  if (product.artistName !== undefined) {
    setClause += "artistName = ?, ";
    queryParams.push(product.artistName);
  }
  if (product.price !== undefined) {
    setClause += "price = ?, ";
    queryParams.push(product.price);
  }
  if (product.description !== undefined) {
    setClause += "description = ?, ";
    queryParams.push(product.description);
  }
  if (product.certification !== undefined) {
    setClause += "certification = ?, ";
    queryParams.push(product.certification);
  }
  if (product.disponible !== undefined) {
    setClause += "disponible = ?, ";
    queryParams.push(product.disponible);
  }

  setClause = setClause.slice(0, -2);

  try {
    const query = `UPDATE albert SET ${setClause} WHERE printTitle = ?;`;

    queryParams.push(product.printTitle);

    db.query(query, queryParams, (err, results) => {
      if (err) {
        console.error("Error in database query:", err);
        return res.status(500).json("Getting data.", err);
      }
      res.status(200).json(results);
    });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
});

app.delete("/albertDelete", (req, res) => {
  const { printTitle } = req.body;

  try {
    const query = "DELETE FROM albert WHERE printTitle = ?;";
    db.query(query, [printTitle], (err, results) => {
      if (err) {
        console.error("Error in database query:", err);
        return res.status(500).json({ message: "Error deleting data.", err });
      }
      res.status(200).json(results);
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// #endregion ALBERT

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
