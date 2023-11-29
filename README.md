# M4-Fitmaster-BE

### Backend for the Fitmaster App.
[Link to Front End](https://github.com/Nugget-Meister/M4-Fitmaster-FE)
[Deployed Site](https://startling-douhua-766f69.netlify.app)

###### Requires SQL Database to function properly

## Currently Built Routes

### GET */clothes
- Retrieves all items in clothes table

### GET */clothes/:id
- Retrieves one item in clothes table that matches the id. Id's are currently numeric only.

### POST */clothes
- Attempts to add the item to the table. Required data is (name, category, heat, cold, material, iscomfortable, imageurl)

### PUT */clothes/:id
- Attempts to update entry in table that has the given id. Required data is the same as the POST request

### DELETE */clothes/id
- Attempts to delete entry in table with the given id.
