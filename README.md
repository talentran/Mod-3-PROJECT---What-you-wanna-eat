# "What do you wanna eat?"

This application still on progress and has yet complete.

## Idea of the app:

### Step 1: Zoning and Selecting
- Two input fields for user to fill in, including "Ingredients" and "Country".
- User can fill in one or both fields before submitting.
- If user enter the [Ingredients] field and submit: The application will fetch the API and display a list of dish names that include the ingredients entered by the user.
- If user enter the [Country] field and submit: The application will fetch the API and display a list of dish names from the entered country by the user.
- If user enter both the [Ingredients] and [Country] fields and submit: The application will fetch the API and display a list of dish names that match both the ingredients and the country entered by the user.
- The displayed dish information will include the dish name, its country of origin, and the main ingredients.
- The app use [this API for dishes](https://food-api-c4eu.onrender.com/), including the dish name, its country, and its main ingredients. [Link GitHub](https://github.com/talentran/Make-An-API).

### Step 2: Suggest and Advise
- After the dish list is displayed, there is a button below the list for user to click on: [Pick for me]. It will randomly select one dish from the displayed list for the user.
- Once the dish is selected, user will have three options to choose: "Take!", "Pick Again", or "Skip!".
- If user click on [Take!] the application will send a greeting message, "Enjoy your meal!" and provide two options: "Thank you" and "Goodbye." If user choose [Thank you] they will be redirected to the application's home page. If they choose [Goodbye] the application will exit.
- If user click on [Pick Again] the application will create a sub-list, copy the selected dish into the sub-list, and randomly select another dish from the previously displayed list for the user.
- If user click [Skip!] the application will remove the selected dish from the list and randomly select another dish from the previously displayed list for the user.

### Step 3 (Optional): In case user still hasn't decide what to eat.
- In the sub-list that was created from the steps above, it will repeat the steps in **step 2** with the dishes selected. User will have three options to choose: "Take!", "Pick Again", or "Skip!".
- If user click on [Pick Again] the application will create a second sub-list, copy the selected dish into the second sub-list, and randomly select another dish from the previously displayed sub-list.
- The process of selecting dishes and creating number of sub-lists will repeat until user select a dish or there is only one dish left in the sub-list.
