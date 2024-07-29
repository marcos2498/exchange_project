# Commodity and FX exchange 
https://floating-hamlet-86138-75cccbd1187a.herokuapp.com/

# Description
The Commodity and FX exchange is a web applications that allows users to keep track of their securities. The application is built using Django for the backend, React for the frontend, PostgreSql for the database, and Heroku for hosting. 

Features

* Add new Fx or Commodity securities
* Search database for security based on asset class and name
* Remove securities using partial name matching
* Display entire databased based on different filters


# Prerequisites
* Python 3.11+
* Node.js 14+
* PostgreSQL (for production)
* gunicorn 22.0.0 (for production)


# Usage 
To use the Commodity and FX exchange web application, follow these instructions:

1. Accessing the Application:

Open your web browser and navigate to Commodity and FX Exchange.
https://floating-hamlet-86138-75cccbd1187a.herokuapp.com/

2. Adding Securities:

Click on the "Add" button to open the form for adding a new security.

Fill in the form with the following details:
Name: The name of the security (e.g., "Gold").
Description: Select the type of security (e.g., "Commodity" or "FX").
Price: The price of the security.
Unit: The unit of the security (e.g., "ounce" or "lot" or type such as "spot" or "forward").
Click "Submit" to add the security to the database.
3. Searching for Securities:

Use the search functionality to find securities by name. Case insensitive. 
The application will display matching securities based on your query.

4. Removing Securities:

To remove a security, use the "Remove" button.
Enter the name of the security you want to delete in the form.
Click "Submit" to remove the security from the database. Verify this by using Display and clicking on ALL 

5. Viewing All Securities:

To view all securities, click on the "View All" button.
You can filter the displayed securities based on different criteria (e.g., commodity or FX).
The application will show a list of all securities matching the selected filter.

6. Handling Errors:

If you encounter any errors, such as missing fields or non-existent securities, the application will display relevant error messages to guide you.
# Roadmap
- [ ] Adding individual accounts
- [ ] Approximate matching for search 
# Contact info

Marcos Rivera - marcosrivera2495@gmail.com
Project Link - to be filled in 

