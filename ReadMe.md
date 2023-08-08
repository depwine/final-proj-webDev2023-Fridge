Glib Lakeev – Winter cohort 2023 – Web Dev Final Project Proposal

Name of Project

“Feed.me” – a tool to stop me from ordering UberEats when I have plenty of food already in the fridge + pantry.
Summary
A resource for people that have a fridge/pantry of leftover ingredients and no idea how to best combine or use them. Basically: enter 4-5 ingredients and receive a list of things you can make using _only_ those ingredients, as well as a few options for things you can “almost” make (but are missing 1-2 key items)
Features
-	Account creation and login through Auth0
o	Login/logout button (whichever is contextually correct)

-	Home page: 
see trending ingredients / finished meals

-	Profile page:
Save favourite recipes, save favourite ingredients
Accessed through a top-right profile pic / username on all pages

-	A “Feed Me” page (core function of site)
Through dropdown with autocomplete, select an ingredient
	Add quantity (ex, 500g ground beef)
Response 1 : Receive a list of all possible recipes that contain (ex, 500g ground beef) but require additional ingredients
+ADD Button : add additional ingredient(s) and quantity(ies) --  (ex, 100g diced onion)
Suggestion Message: “Add 2-3 more ingredients” (possibly suggest the ingredients with recipe previews)
Once user can satisfy all criteria for at least 1 full recipe, display a preview image, name, thumbnail, etc

APIs & Packages Used

Food APIs: https://spoonacular.com
Login: auth0

<!-- Stretch Goals
-	Dark mode for all pages
-	Post your own complete recipes
-	Add other users as friends / communicate with them in private DMs
-	Create-a-recipe wizard (with step by step dropdowns and guides?)
-	Expert Advice section
o	Instructions for basic cooking methods, knife techniques, etc
-	Suggested tools / products (knives, pans, etc) -->
