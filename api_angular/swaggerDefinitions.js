const swaggerDefinitions = {
  // #region PAU

  "/pauSelect": {
    get: {
      tags: ["Pau"],
      summary: "Retrieve all data from 'pau' table",
      description: "Fetches all records from the 'pau' table in the database",
      responses: {
        200: {
          description: "Successful response",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  type: "object",
                },
              },
            },
          },
        },
        500: {
          description: "Internal Server Error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Error getting data.",
                  },
                  err: {
                    type: "string",
                  },
                },
              },
            },
          },
        },
      },
    },
  },

  "/pauPost": {
    post: {
      tags: ["Pau"],
      summary: "Insert a new record into 'pau' table",
      description: "Inserts a new record into the 'pau' table in the database",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                nReference: {
                  type: "string",
                  description: "Product reference number",
                },
                name: {
                  type: "string",
                  description: "Product name",
                },
                price: {
                  type: "number",
                  description: "Product price",
                },
                description: {
                  type: "string",
                  description: "Product description",
                },
                type: {
                  type: "string",
                  description: "Product type",
                },
                legal: {
                  type: "boolean",
                  description: "Legal status of the product",
                },
              },
              required: [
                "nReference",
                "name",
                "price",
                "description",
                "type",
                "legal",
              ],
            },
          },
        },
      },
      responses: {
        200: {
          description: "Successful response",
          content: {
            "application/json": {
              schema: {
                type: "object",
              },
            },
          },
        },
        500: {
          description: "Internal Server Error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Error inserting data.",
                  },
                  err: {
                    type: "string",
                  },
                },
              },
            },
          },
        },
      },
    },
  },

  "/pauPut": {
    put: {
      tags: ["Pau"],
      summary: "Update a record in 'pau' table",
      description: "Updates a record in the 'pau' table in the database",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                nReference: {
                  type: "string",
                  description: "Product reference number",
                },
                name: {
                  type: "string",
                  description: "Updated product name (optional)",
                },
                price: {
                  type: "number",
                  description: "Updated product price (optional)",
                },
                description: {
                  type: "string",
                  description: "Updated product description (optional)",
                },
                type: {
                  type: "string",
                  description: "Updated product type (optional)",
                },
                legal: {
                  type: "boolean",
                  description: "Updated legal status of the product (optional)",
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Successful response",
          content: {
            "application/json": {
              schema: {
                type: "object",
              },
            },
          },
        },
        500: {
          description: "Internal Server Error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Error updating data.",
                  },
                  err: {
                    type: "string",
                  },
                },
              },
            },
          },
        },
      },
    },
  },

  "/pauDelete": {
    delete: {
      tags: ["Pau"],
      summary: "Delete a record from 'pau' table",
      description: "Deletes a record from the 'pau' table in the database",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                nReference: {
                  type: "string",
                  description: "Product reference number to delete",
                },
              },
              required: ["nReference"],
            },
          },
        },
      },
      responses: {
        200: {
          description: "Successful response",
          content: {
            "application/json": {
              schema: {
                type: "object",
              },
            },
          },
        },
        500: {
          description: "Internal Server Error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Error deleting data.",
                  },
                  err: {
                    type: "string",
                  },
                },
              },
            },
          },
        },
      },
    },
  },

  // #endregion PAU

  // #region DYLAN

  "/dylanSelect": {
    get: {
      tags: ["Dylan"],
      summary: "Retrieve all data from 'dylan' table",
      description: "Fetches all records from the 'dylan' table in the database",
      responses: {
        200: {
          description: "Successful response",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  type: "object",
                },
              },
            },
          },
        },
        500: {
          description: "Internal Server Error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Error getting data.",
                  },
                  err: {
                    type: "string",
                  },
                },
              },
            },
          },
        },
      },
    },
  },

  "/dylanPost": {
    post: {
      tags: ["Dylan"],
      summary: "Insert a new record into 'dylan' table",
      description:
        "Inserts a new record into the 'dylan' table in the database",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                seriesNumber: {
                  type: "number",
                  description: "Series number of the product",
                },
                model: {
                  type: "string",
                  description: "Model of the product",
                },
                category: {
                  type: "string",
                  description: "Category of the product",
                },
                image: {
                  type: "string",
                  description: "URL of the product image",
                },
                cv: {
                  type: "number",
                  description: "CV (horsepower) of the product",
                },
                maxSpeed: {
                  type: "number",
                  description: "Max speed of the product",
                },
                accelerationTime: {
                  type: "number",
                  description: "Acceleration time of the product",
                },
                price: {
                  type: "number",
                  description: "Price of the product",
                },
                available: {
                  type: "boolean",
                  description: "Availability status of the product",
                },
              },
              required: [
                "seriesNumber",
                "model",
                "category",
                "image",
                "cv",
                "maxSpeed",
                "accelerationTime",
                "price",
                "available",
              ],
            },
          },
        },
      },
      responses: {
        200: {
          description: "Successful response",
          content: {
            "application/json": {
              schema: {
                type: "object",
              },
            },
          },
        },
        500: {
          description: "Internal Server Error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Error inserting data.",
                  },
                  err: {
                    type: "string",
                  },
                },
              },
            },
          },
        },
      },
    },
  },

  "/dylanPut": {
    put: {
      tags: ["Dylan"],
      summary: "Update a record in 'dylan' table",
      description: "Updates a record in the 'dylan' table in the database",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                seriesNumber: {
                  type: "number",
                  description: "Series number of the product to update",
                },
                model: {
                  type: "string",
                  description: "Updated model of the product (optional)",
                },
                category: {
                  type: "string",
                  description: "Updated category of the product (optional)",
                },
                image: {
                  type: "string",
                  description: "Updated image URL of the product (optional)",
                },
                cv: {
                  type: "number",
                  description:
                    "Updated CV (horsepower) of the product (optional)",
                },
                maxSpeed: {
                  type: "number",
                  description: "Updated max speed of the product (optional)",
                },
                accelerationTime: {
                  type: "number",
                  description:
                    "Updated acceleration time of the product (optional)",
                },
                price: {
                  type: "number",
                  description: "Updated price of the product (optional)",
                },
                available: {
                  type: "boolean",
                  description:
                    "Updated availability status of the product (optional)",
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Successful response",
          content: {
            "application/json": {
              schema: {
                type: "object",
              },
            },
          },
        },
        500: {
          description: "Internal Server Error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Error updating data.",
                  },
                  err: {
                    type: "string",
                  },
                },
              },
            },
          },
        },
      },
    },
  },

  "/dylanDelete": {
    delete: {
      tags: ["Dylan"],
      summary: "Delete a record from 'dylan' table",
      description: "Deletes a record from the 'dylan' table in the database",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                seriesNumber: {
                  type: "number",
                  description: "Series number of the product to delete",
                },
              },
              required: ["seriesNumber"],
            },
          },
        },
      },
      responses: {
        200: {
          description: "Successful response",
          content: {
            "application/json": {
              schema: {
                type: "object",
              },
            },
          },
        },
        500: {
          description: "Internal Server Error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Error deleting data.",
                  },
                  err: {
                    type: "string",
                  },
                },
              },
            },
          },
        },
      },
    },
  },

  // #endregion DYLAN

  // #region ALBERT

  "/albertSelect": {
    get: {
      tags: ["Albert"],
      summary: "Retrieve all data from 'albert' table",
      description:
        "Fetches all records from the 'albert' table in the database",
      responses: {
        200: {
          description: "Successful response",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  type: "object",
                },
              },
            },
          },
        },
        500: {
          description: "Internal Server Error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Error getting data.",
                  },
                  err: {
                    type: "string",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  "/albertPost": {
    post: {
      tags: ["Albert"],
      summary: "Insert a new record into 'albert' table",
      description:
        "Inserts a new record into the 'albert' table in the database",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                artistName: {
                  type: "string",
                  description: "Name of the artist",
                },
                printTitle: {
                  type: "string",
                  description: "Title of the print",
                },
                price: {
                  type: "number",
                  description: "Price of the print",
                },
                description: {
                  type: "string",
                  description: "Description of the print",
                },
                certification: {
                  type: "string",
                  description: "Certification of the print",
                },
                disponible: {
                  type: "boolean",
                  description: "Availability status of the print",
                },
              },
              required: [
                "artistName",
                "printTitle",
                "price",
                "description",
                "certification",
                "disponible",
              ],
            },
          },
        },
      },
      responses: {
        200: {
          description: "Successful response",
          content: {
            "application/json": {
              schema: {
                type: "object",
              },
            },
          },
        },
        500: {
          description: "Internal Server Error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Error inserting data.",
                  },
                  err: {
                    type: "string",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  "/albertPut": {
    put: {
      tags: ["Albert"],
      summary: "Update a record in 'albert' table",
      description: "Updates a record in the 'albert' table in the database",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                artistName: {
                  type: "string",
                  description: "Updated name of the artist (optional)",
                },
                printTitle: {
                  type: "string",
                  description: "Title of the print",
                },
                price: {
                  type: "number",
                  description: "Updated price of the print (optional)",
                },
                description: {
                  type: "string",
                  description: "Updated description of the print (optional)",
                },
                certification: {
                  type: "string",
                  description: "Updated certification of the print (optional)",
                },
                disponible: {
                  type: "boolean",
                  description:
                    "Updated availability status of the print (optional)",
                },
                printTitle: {
                  type: "string",
                  description: "Title of the print to update",
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Successful response",
          content: {
            "application/json": {
              schema: {
                type: "object",
              },
            },
          },
        },
        500: {
          description: "Internal Server Error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Error updating data.",
                  },
                  err: {
                    type: "string",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  "/albertDelete": {
    delete: {
      tags: ["Albert"],
      summary: "Delete a record from 'albert' table",
      description: "Deletes a record from the 'albert' table in the database",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                printTitle: {
                  type: "string",
                  description: "Title of the print to delete",
                },
              },
              required: ["printTitle"],
            },
          },
        },
      },
      responses: {
        200: {
          description: "Successful response",
          content: {
            "application/json": {
              schema: {
                type: "object",
              },
            },
          },
        },
        500: {
          description: "Internal Server Error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Error deleting data.",
                  },
                  err: {
                    type: "string",
                  },
                },
              },
            },
          },
        },
      },
    },
  },

  // #endregion ALBERT
};

module.exports = swaggerDefinitions;
