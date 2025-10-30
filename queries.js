1. db.Restaurants.find({});
2. db.Restaurants.find({}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 });
3. db.Restaurants.find({}, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 });
4 db.Restaurants.find({}, { _id: 0, restaurant_id: 1, name: 1, borough: 1, "address.zipcode": 1 });
5. db.Restaurants.find({ borough: "Bronx" });
6. db.Restaurants.find({ borough: "Bronx" }).limit(5);
7. db.Restaurants.find({ borough: "Bronx" }).skip(5).limit(5);
8. db.Restaurants.find({ "grades.score": { $gt: 90 } });
9. db.Restaurants.find({ "grades.score": { $gt: 80, $lt: 100 } });
10. db.Restaurants.find({ "address.coord.0": { $lt: -95.754168 } });
11. db.Restaurants.find({ cuisine: { $ne: "American" }, "grades.score": { $gt: 70 }, "address.coord.0": { $lt: -65.754168 } });
12. db.Restaurants.find({ cuisine: { $ne: "American" }, "grades.score": { $gt: 70 }, "address.coord.0": { $lt: -65.754168 } });
13. db.Restaurants.find({ cuisine: { $ne: "American" }, "grades.grade": "A", borough: { $ne: "Brooklyn" } }).sort({ cuisine: -1 });
14. db.Restaurants.find({ name: /^Wil/ }, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 });
15. db.Restaurants.find({ name: /ces$/ }, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 });
16. db.Restaurants.find({ name: /Reg/ }, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 });
17. db.Restaurants.find({ borough: "Bronx", cuisine: { $in: ["American", "Chinese"] } });
18. db.Restaurants.find({ borough: { $in: ["Staten Island", "Queens", "Bronx", "Brooklyn"] } }, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 });
19. db.Restaurants.find({ borough: { $nin: ["Staten Island", "Queens", "Bronx", "Brooklyn"] } }, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 });
20. db.Restaurants.find({ "grades.score": { $lte: 10 } }, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 });
21. db.Restaurants.find({ $or: [ { cuisine: "Fish", cuisine: { $nin: ["American", "Chinese"] } }, { name: /^Wil/ } ] }, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 });
22. db.Restaurants.find({ grades: { $elemMatch: { grade: "A", score: 11, date: ISODate("2014-08-11T00:00:00Z") } } }, { _id: 0, restaurant_id: 1, name: 1, grades: 1 });
23. db.Restaurants.find({ "grades.1.grade": "A", "grades.1.score": 9, "grades.1.date": ISODate("2014-08-11T00:00:00Z") }, { _id: 0, restaurant_id: 1, name: 1, grades: 1 });
24. db.Restaurants.find({ "address.coord.1": { $gt: 42, $lte: 52 } }, { _id: 0, restaurant_id: 1, name: 1, address: 1, "address.coord": 1 });
25. db.Restaurants.find().sort({ name: 1 });
26. db.Restaurants.find().sort({ name: -1 });
27. db.Restaurants.find().sort({ cuisine: 1, borough: -1 });


