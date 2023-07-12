# "What do you wanna eat?"

##This is the idea of the app:

We already have an [API for dishes](https://food-api-c4eu.onrender.com/), including the dish name, its country, and the main ingredients. [Link GitHub](https://github.com/talentran/Make-An-API).

Create two input fields for users to fill in, including "Ingredients" and "Country". Also, include a submit button.
Users can fill in one or both fields before submitting.
If users enter the "Ingredients" field and submit: The application will fetch the API and display a list of dish names that include the ingredients entered by the user.
If users enter the "Country" field and submit: The application will fetch the API and display a list of dish names from the specified country.
If users enter both the "Ingredients" and "Country" fields and submit: The application will fetch the API and display a list of dish names that match both the ingredients and the country entered by the user.
The displayed dish information will include the dish name, its country of origin, and the main ingredients, all of which are already available in the API.
After the dish list is displayed, create an additional functionality below the list for users to click on: This functionality will randomly select one dish from the displayed list.
Once the dish is selected, users will have three options to choose from: "Agree," "Choose Again," or "Skip."
If users click "Agree," the application will send a greeting message, "Enjoy your meal," and provide two options: "Thank you" and "Goodbye." If users choose "Thank you," they will be redirected to the application's home page. If they choose "Goodbye," the application will exit.
If users click "Choose Again," the application will create a sub-list, copy the selected dish into the sub-list, and randomly select another dish from the previously displayed list.
If users click "Skip," the application will remove the selected dish from the list and randomly select another dish from the previously displayed list.
In the sub-list created when users click "Choose Again," create an additional functionality that will randomly select one dish from the sub-list.
Once the dish is selected from the sub-list, users will have three options to choose from: "Agree," "Choose Again," or "Skip."
If users click "Agree," the application will send a greeting message, "Enjoy your meal," and provide two options: "Thank you" and "Goodbye." If users choose "Thank you," they will be redirected to the application's home page. If they choose "Goodbye," the application will exit.
If users click "Choose Again," the application will create a second sub-list, copy the selected dish into the second sub-list, and randomly select another dish from the previously displayed sub-list.
If users click "Skip," the application will remove the selected dish from the sub-list and randomly select another dish from the previously displayed sub-list.
The process of selecting dishes and creating sub-lists will repeat until users select a dish or there is only one dish left in the sub-list.
