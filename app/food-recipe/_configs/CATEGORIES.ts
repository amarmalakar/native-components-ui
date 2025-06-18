import RECIPES from "./RECIPES"

const CATEGORIES = [
    {
        id: 1,
        title: "Main",
        recipes: RECIPES,
    },
    {
        id: 2,
        title: "Healthy Food",
        recipes: [...RECIPES.slice(4, 8)],
    },
    {
        id: 3,
        title: "Fast Food",
        recipes: [...RECIPES.slice(3, 7)],
    },
    {
        id: 4,
        title: "Drinks",
        recipes: [...RECIPES.slice(2, 6)],
    },
];

export default CATEGORIES;
