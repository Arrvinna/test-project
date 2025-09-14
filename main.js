const recipes = [
    {
        id: 1,
        title: "Spaghetti Carbonara",
        type: "Main Course",
        ingredients: ["Spaghetti", "Eggs", "Pancetta", "Parmesan Cheese", "Black Pepper"],
        instructions: "1. Cook the spaghetti according to package directions.<br>2. While the pasta is cooking, cook the pancetta in a large skillet over medium heat until crisp.<br>3. In a small bowl, whisk together the eggs and Parmesan cheese.<br>4. Drain the pasta and add it to the skillet with the pancetta.<br>5. Remove the skillet from the heat and stir in the egg and cheese mixture.<br>6. Season with black pepper and serve immediately.",
        prepTime: "20 minutes",
        image: "images/spaghetti-carbonara.jpeg"
    },
    {
        id: 2,
        title: "Chicken Alfredo",
        type: "Main Course",
        ingredients: ["Fettuccine", "Chicken Breast", "Heavy Cream", "Garlic", "Butter"],
        instructions: "1. Cook fettuccine according to package directions. <br>2. Season chicken with salt and pepper, then cook in a skillet until browned and cooked through. <br>3. Remove chicken and set aside. <br>4. In the same skillet, melt butter, add garlic, then stir in heavy cream and bring to a simmer. <br>5. Add Parmesan cheese and cook until the sauce thickens. <br>6. Return chicken to the skillet, add the cooked pasta, and toss to coat.",
        prepTime: "30 minutes",
        image: "images/chicken-alfredo.jpg"
    },
    {
        id: 3,
        title: "Fish and Chips",
        type: "Main Course",
        ingredients: ["Fish fillets", "Potatoes", "Flour", "Beer", "Baking powder"],
        instructions: "1. Cut potatoes into fries and prepare the batter by whisking together flour, beer, and baking powder. <br>2. Dip fish fillets in the batter. <br>3. Heat oil to 350°F (175°C) and fry the fish for 5-7 minutes until golden brown. <br>4. Fry the potatoes for 7-10 minutes until crispy. <br>5. Serve with tartar sauce and lemon wedges.",
        prepTime: "40 minutes",
        image: "images/fish-and-chips.jpg"
    },
    {
        id: 4,
        title: "Grilled Chicken",
        type: "Main Course",
        ingredients: ["Chicken breasts", "Olive oil", "Lemon juice", "Garlic", "Herbs"],
        instructions: "1. Whisk together olive oil, lemon juice, garlic, and herbs to create a marinade. <br>2. Marinate chicken breasts for at least 30 minutes. <br>3. Preheat grill to medium-high heat. <br>4. Grill chicken for 6-8 minutes per side, or until cooked through. <br>5. Let the chicken rest for 5 minutes before serving.",
        prepTime: "25 minutes",
        image: "images/grilled-chicken.jpg"
    },
    {
        id: 5,
        title: "Fish Burger",
        type: "Main Course",
        ingredients: ["Fish fillet", "Burger bun", "Lettuce", "Tomato", "Tartar sauce"],
        instructions: "1. Chop the fish fillet and mix with bread crumbs, mayonnaise, and seasonings. <br>2. Form the mixture into patties. <br>3. Cook the patties in a skillet for 3-4 minutes per side until golden brown. <br>4. Serve on buns with lettuce, tomato, and tartar sauce.",
        prepTime: "15 minutes",
        image: "images/fish-burger.jpg"
    },
    {
        id: 6,
        title: "Fish Curry",
        type: "Main Course",
        ingredients: ["Fish Fillets", "Onion", "Tomatoes", "Coconut Milk", "Ginger-Garlic Paste"],
        instructions: "1. Heat oil in a pan and sauté onions until golden brown. <br>2. Add ginger-garlic paste and cook for a minute. <br>3. Add chopped tomatoes and cook until they turn soft. <br>4. Add turmeric powder, red chili powder, and coriander powder. <br>5. Add coconut milk and bring it to a simmer. <br>6. Add the fish fillets and cook for 5-7 minutes until the fish is cooked through.",
        prepTime: "35 minutes",
        image: "images/fish-curry.jpg"
    },
    {
        id: 7,
        title: "Chicken Curry",
        type: "Main Course",
        ingredients: ["Chicken", "Onion", "Tomatoes", "Yogurt", "Ginger-Garlic Paste"],
        instructions: "1. Heat oil in a pan and sauté onions until golden brown. <br>2. Add ginger-garlic paste and cook for a minute. <br>3. Add chopped tomatoes and cook until they turn soft. <br>4. Add turmeric powder, red chili powder, and coriander powder. <br>5. Add yogurt and cook for a few minutes. <br>6. Add the chicken pieces and cook until they are browned. <br>7. Add water and bring it to a simmer. Cook for 15-20 minutes until the chicken is cooked through.",
        prepTime: "45 minutes",
        image: "images/chicken-curry.jpg"
    },
    {
        id: 8,
        title: "Salted Fish Curry",
        type: "Main Course",
        ingredients: ["Salted Fish", "Onion", "Tomatoes", "Tamarind", "Coconut Milk"],
        instructions: "1. Soak the salted fish in water for 30 minutes to remove excess salt. <br>2. Heat oil in a pan and sauté onions until golden brown. <br>3. Add ginger-garlic paste and cook for a minute. <br>4. Add chopped tomatoes and cook until they turn soft. <br>5. Add turmeric powder, red chili powder, and coriander powder. <br>6. Add tamarind pulp and coconut milk and bring it to a simmer. <br>7. Add the salted fish and cook for 10-15 minutes until the fish is cooked through.",
        prepTime: "50 minutes",
        image: "images/salted-fish-curry.jpg"
    },
    {
        id: 9,
        title: "Crab Curry",
        type: "Main Course",
        ingredients: ["Crabs", "Onion", "Tomatoes", "Coconut", "Ginger-Garlic Paste"],
        instructions: "1. Clean the crabs and set them aside. <br>2. Grind coconut, green chilies, and cumin seeds to a fine paste. <br>3. Heat oil in a pan and sauté onions until golden brown. <br>4. Add ginger-garlic paste and cook for a minute. <br>5. Add chopped tomatoes and cook until they turn soft. <br>6. Add the coconut paste and cook for a few minutes. <br>7. Add the crabs and cook for 10-15 minutes until they are cooked through.",
        prepTime: "60 minutes",
        image: "images/crab-curry.jpg"
    },
    {
        id: 10,
        title: "Vegetarian Curry",
        type: "Main Course",
        ingredients: ["Mixed Vegetables", "Onion", "Tomatoes", "Coconut Milk", "Ginger-Garlic Paste"],
        instructions: "1. Heat oil in a pan and sauté onions until golden brown. <br>2. Add ginger-garlic paste and cook for a minute. <br>3. Add chopped tomatoes and cook until they turn soft. <br>4. Add turmeric powder, red chili powder, and coriander powder. <br>5. Add mixed vegetables and cook for a few minutes. <br>6. Add coconut milk and bring it to a simmer. Cook for 10-15 minutes until the vegetables are cooked through.",
        prepTime: "40 minutes",
        image: "images/vegetarian-curry.jpg"
    },
    {
        id: 11,
        title: "Waffle",
        type: "Dessert",
        ingredients: ["1 3/4 cups all-purpose flour", "1 tbsp white sugar", "1 tsp baking powder", "1/2 tsp salt", "2 egg yolks", "1 3/4 cups milk", "1/2 cup vegetable oil", "2 egg whites"],
        instructions: "1. In a large bowl, mix together flour, sugar, baking powder and salt.<br>2. In a separate bowl, beat egg yolks, then stir in milk and oil.<br>3. Stir the wet ingredients into the dry ingredients until just combined.<br>4. In a separate bowl, beat egg whites until stiff peaks form.<br>5. Fold the egg whites into the batter.<br>6. Cook in a preheated waffle iron according to manufacturer's directions.",
        prepTime: "20 minutes",
        image: "images/waffle.jpg"
    },
    {
        id: 12,
        title: "Pancake",
        type: "Dessert",
        ingredients: ["1 1/2 cups all-purpose flour", "3 1/2 tsp baking powder", "1 tsp salt", "1 tbsp white sugar", "1 1/4 cups milk", "1 egg", "3 tbsp butter, melted"],
        instructions: "1. In a large bowl, sift together the flour, baking powder, salt and sugar.<br>2. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.<br>3. Heat a lightly oiled griddle or frying pan over medium high heat.<br>4. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake.<br>5. Brown on both sides and serve hot.",
        prepTime: "20 minutes",
        image: "images/pancake.jpg"
    },
    {
        id: 13,
        title: "Brownies with Ice Cream",
        type: "Dessert",
        ingredients: ["1/2 cup butter", "1 cup white sugar", "2 eggs", "1 tsp vanilla extract", "1/3 cup unsweetened cocoa powder", "1/2 cup all-purpose flour", "1/4 tsp salt", "1/4 tsp baking powder", "Vanilla ice cream"],
        instructions: "1. Preheat oven to 350 degrees F (175 degrees C).<br>2. Grease and flour an 8-inch square pan.<br>3. In a large saucepan, melt 1/2 cup butter.<br>4. Remove from heat, and stir in sugar, eggs, and 1 teaspoon vanilla.<br>5. Beat in 1/3 cup cocoa, 1/2 cup flour, salt, and baking powder.<br>6. Spread batter into prepared pan.<br>7. Bake for 25 to 30 minutes in the preheated oven.<br>8. Cool in pan for 15 minutes before cutting into squares.<br>9. Serve warm with a scoop of vanilla ice cream.",
        prepTime: "45 minutes",
        image: "images/brownies-with-ice-cream.jpg"
    },
    {
        id: 14,
        title: "Strawberry Jelly",
        type: "Dessert",
        ingredients: ["4 cups crushed strawberries", "4 cups white sugar", "1 (1.75 ounce) package powdered fruit pectin"],
        instructions: "1. In a large bowl, combine strawberries and sugar.<br>2. Let stand for 10 minutes.<br>3. In a small saucepan, combine pectin and 3/4 cup water.<br>4. Bring to a boil over high heat, stirring constantly.<br>5. Boil for 1 minute.<br>6. Stir the hot pectin mixture into the strawberry mixture.<br>7. Stir until the sugar is completely dissolved.<br>8. Pour into sterile containers.<br>9. Let stand at room temperature for 24 hours, or until set.<br>10. Store in the refrigerator.",
        prepTime: "30 minutes",
        image: "images/strawberry-jelly.jpg"
    },
    {
        id: 15,
        title: "Bingsu",
        type: "Dessert",
        ingredients: ["2 cups milk", "1/4 cup sweetened condensed milk", "Toppings of your choice (e.g., chopped fruit, red bean paste, mochi, ice cream)"],
        instructions: "1. In a bowl, mix together milk and sweetened condensed milk.<br>2. Pour the mixture into ice cube trays and freeze until solid.<br>3. Place the milk ice cubes in a blender and blend until you get a fluffy, snow-like texture.<br>4. Transfer the shaved ice to a serving bowl.<br>5. Add your favorite toppings and serve immediately.",
        prepTime: "15 minutes + freezing time",
        image: "images/bingsu.jpg"
    },
    {
        id: 16,
        title: "Apple Juice",
        type: "Juice",
        ingredients: ["4-5 medium-sized apples, washed and cored", "1/2 cup water", "1-2 tablespoons of sugar or honey (optional, to taste)"],
        instructions: "1. Cut the apples into small pieces. 2. Place the apple pieces and water in a blender. 3. Blend until smooth. 4. Strain the mixture through a fine-mesh sieve or cheesecloth to separate the juice from the pulp. 5. Add sugar or honey if desired and stir until dissolved. 6. Serve chilled.",
        prepTime: "10 minutes",
        image: "images/apple-juice.jpg"
    },
    {
        id: 17,
        title: "Carrot Juice",
        type: "Juice",
        ingredients: ["4-5 medium-sized carrots, washed and peeled", "1/2 cup water", "1/2 inch ginger (optional)", "1/2 lemon, juiced (optional)"],
        instructions: "1. Cut the carrots into small pieces. 2. Place the carrot pieces, water, and ginger (if using) in a blender. 3. Blend until smooth. 4. Strain the mixture through a fine-mesh sieve or cheesecloth. 5. Stir in lemon juice if desired. 6. Serve immediately.",
        prepTime: "10 minutes",
        image: "images/carrot-juice.jpg"
    },
    {
        id: 18,
        title: "Orange Juice",
        type: "Juice",
        ingredients: ["4-5 medium-sized oranges, peeled and deseeded"],
        instructions: "1. Place the orange segments in a blender. 2. Blend until smooth. 3. Strain the mixture through a fine-mesh sieve to remove pulp. 4. Serve immediately.",
        prepTime: "5 minutes",
        image: "images/orange-juice.jpg"
    },
    {
        id: 19,
        title: "Watermelon Juice",
        type: "Juice",
        ingredients: ["2 cups of diced watermelon, seeds removed", "A few mint leaves (optional)", "1/2 lime, juiced (optional)"],
        instructions: "1. Place the watermelon chunks in a blender. 2. Add mint leaves and lime juice if desired. 3. Blend until smooth. 4. Serve immediately, over ice if preferred.",
        prepTime: "5 minutes",
        image: "images/watermelon-juice.jpg"
    },
    {
        id: 20,
        title: "Mango Juice",
        type: "Juice",
        ingredients: ["2 ripe mangoes, peeled and chopped", "1/2 cup water or coconut water", "1-2 tablespoons of sugar or honey (optional, to taste)"],
        instructions: "1. Place the mango chunks and water/coconut water in a blender. 2. Blend until smooth. 3. Add sugar or honey if the mangoes are not sweet enough and blend again. 4. Serve chilled.",
        prepTime: "10 minutes",
        image: "images/mango-juice.jpg"
    }
];

const searchBar = document.getElementById("search-bar");
const filterDropdown = document.getElementById("filter-dropdown");

if (searchBar) {
    searchBar.addEventListener("keyup", renderRecipes);
}
if (filterDropdown) {
    filterDropdown.addEventListener("change", renderRecipes);
}

function renderRecipes() {
    const recipeList = document.getElementById("recipe-list");
    if (recipeList) {
        const searchTerm = searchBar ? searchBar.value.toLowerCase() : "";
        const filterTerm = filterDropdown ? filterDropdown.value.toLowerCase() : "all";

        const filteredRecipes = recipes.filter(recipe => {
            const titleMatch = recipe.title.toLowerCase().includes(searchTerm);
            const typeMatch = filterTerm === "all" || recipe.type.toLowerCase() === filterTerm;
            return titleMatch && typeMatch;
        });

        recipeList.innerHTML = ""; // Clear existing recipes

        filteredRecipes.forEach(recipe => {
            const recipeCard = document.createElement("div");
            recipeCard.classList.add("recipe-card");
            recipeCard.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.title}">
                <h3>${recipe.title}</h3>
                <p>Prep time: ${recipe.prepTime}</p>
                <a href="recipe.html?id=${recipe.id}" class="view-recipe-btn">View Recipe</a>
            `;
            recipeList.appendChild(recipeCard);
        });
    }
}

function renderRecipeDetail() {
    const recipeDetail = document.getElementById("recipe-detail");
    if (recipeDetail) {
        const urlParams = new URLSearchParams(window.location.search);
        const recipeId = parseInt(urlParams.get('id'));
        const recipe = recipes.find(r => r.id === recipeId);

        if (recipe) {
            recipeDetail.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.title}">
                <div class="recipe-content">
                    <h2>${recipe.title}</h2>
                    <p><strong>Prep time:</strong> ${recipe.prepTime}</p>
                    <h3>Ingredients</h3>
                    <p>${recipe.ingredients.join(', ')}</p>
                    <h3>Instructions</h3>
                    <table>
                        ${recipe.instructions.split('<br>').map(instruction => {
                            const parts = instruction.split('. ');
                            const number = parts[0];
                            const text = parts.slice(1).join('. ');
                            return `
                                <tr>
                                    <td style="vertical-align: top; padding-right: 10px;">${number}.</td>
                                    <td>${text}</td>
                                </tr>
                            `;
                        }).join('')}
                    </table>
                </div>
            `;
        } else {
            recipeDetail.innerHTML = "<p>Recipe not found.</p>";
        }
    }
}

const featuredRecipeList = document.getElementById("featured-recipe-list");

function renderFeaturedRecipes() {
    const featuredRecipes = recipes.slice(0, 3);
    featuredRecipes.forEach(recipe => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");
        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
            <p>Prep Time: ${recipe.prepTime}</p>
            <a href="recipe.html?id=${recipe.id}" class="view-recipe-btn">View Recipe</a>
        `;
        featuredRecipeList.appendChild(recipeCard);
    });
}

if (window.location.pathname.endsWith("index.html")) {
    renderFeaturedRecipes();
} else if (window.location.pathname.endsWith("recipes.html")) {
    renderRecipes();
} else if (window.location.pathname.endsWith("recipe.html")) {
    renderRecipeDetail();
}