# 🧠 MongoDB queries

## 📄 Project Overview  
This repository contains MongoDB queries for exercises based on a Restaurants database.  
All queries are consolidated in the file `queries.js`, and the dataset is stored in `restaurants.json`.

The exercises include:  
- Retrieving and filtering documents  
- Projection and exclusion of fields  
- Querying nested arrays and objects  
- Comparison, logical, and regular expression operators  
- Sorting and pagination of results  
- Geo-spatial queries
  
---

## 🧱 Database Structure  
Restaurants Database  

Each document in the `Restaurants` collection has the following structure:  

```json
{
  "address": {
    "building": "1007",
    "coord": [-73.856077, 40.848447],
    "street": "Morris Park Ave",
    "zipcode": "10462"
  },
  "borough": "Bronx",
  "cuisine": "Bakery",
  "grades": [
    { "date": { "$date": 1393804800000 }, "grade": "A", "score": 2 },
    { "date": { "$date": 1378857600000 }, "grade": "A", "score": 6 }
  ],
  "name": "Morris Park Bake Shop",
  "restaurant_id": "30075445"
}
```
---
## 🧰 Tools & Technologies used
- MongoDB Compass 
- Visual Studio Code 
- Docker 
- Git & GitHub
- Node.js (for running `queries.js`)

--- 

## 💡 Implementation Notes

- All MongoDB queries are written in `queries.js`. 
- Each query is formatted in a single line for simplicity.
- The dataset `restaurants.json` can be imported into MongoDB Compass.
- Queries include filtering by nested fields, using comparison operators, regex, and logical operators.

---

## 📋 Requirements

- Node.js v18 or higher.
- MongoDB 8.0 installed locally.
- MongoDB Compass (optional, for GUI visualization).

---

## 🛠️ Installation

1. **Clone the Repository:**

```bash
git clone https://github.com/christo256/S2.04---MongoDB-queries---Level-1-2
```

2. Navigate into the project folder

```bash
cd S2.04---MongoDB-queries---Level-1-2
```
3. Imoport the `restaurants.json` dataset into MongoDB using Compass or `mongoimport`.

4. Execution
   
   To run the queries locally
   
   ```bash
   node queries.js
    ```

   
  
   
