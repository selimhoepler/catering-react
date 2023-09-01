import React from 'react';



const hauptspeisenBuffet = [
    {
        category: "Fleisch",
        dishes: [
            "Gekochtes Rindfleisch mit Kartoffelschmarren und Schnittlauch Sauce und Apfelkren",
            "Rindersaftgulasch mit Butternockerl",
            "Schweinsbraten mit Sauerkraut und Serviettenknödel",
            "Piccata Milanese vom Huhn oder Schwein mit Tomatenspaghetti",
            "Faschierte Laibchen mit Petersilienkartoffel",
            "Gebackene Ausgelöste Hühnerhaxen mit Kartoffel-Vogerlsalat",
            "Kalbsrahmgulasch mit Nockerl",
            "Überbackene Schinkenrahmfleckerl mit Grünem Salat",
            "Geschnetzeltes von der Pute mit Butterreis",
            "Burgunderrindsbraten mit Serviettenknödel",
            "Asiatischer Hühner Wok mit Basmatireis",
            "Geschnetzeltes vom Schwein „Züricher Art „mit Nockerl",
            "Geselchtes mit Cremelinsen und Serviettenknödel",
            "Gebackenes Hühner oder Schweinschnitzel mit Kartoffelsalat (evtl. Kürbis, Sesam, Cornflakes Panade)",
            "Gebratener Leberkäse mit Buttergemüse, Petersilienkartoffeln und Spiegelei",
            "Champignonschnitzel vom Schwein mit Duft reis",
            "Lasagne „al Forno“ mit Tomatensauce und grünem Salat",
            "Paprikahuhn mit Butternockerln",
        ],
    },
    {
        category: "Vegetarisch",
        dishes: [
            "Spinat-Schafkäse Strudel mit Salzkartoffel und Kräuterdip",
            "Gemüsestrudel mit Schnittlauch Dip",
            "Gemüselasagne auf Tomatensauce",
            "Cremige Kartoffel Gnocchi mit Blatt Spinat und Kirschtomaten",
            "Pilzsauce mit frischen Kräutern und Serviettenknödel",
            "Asiatischer Gemüsewok mit frischen Sprossen und Basmatireis",
            "Chili sin Carne mit Tofu und frischem Baguette",
            "Krautfleckerln",
            "Quinoa-Brokkoli Auflauf mit pikantem Dip",
            "Rucola-Ricotta Tortellini mit brauner Butter, Grana und Salat",
            "Gemüse-Nudelauflauf mit pikantem Dip",
            "Polenta schnitte überbacken mit Blatt Spinat und Tomaten",
            "Kartoffel-Pilzgratin mit Blattsalat",
            "Kürbis-Gnocchi in Gorgonzolasauce",
        ],
    },
    {
        category: "Vegan",
        dishes: [
            "Buchweizen Risotto mit Salat",
            "Penne mit Grünkernbolognese und grünen Salat",
            "Asiatischer Gemüsewok mit frischen Sprossen und Basmatireis",
            "Krautfleckerln",
            "Gemüsecurry mit Reis",
            "Kichererbsen Eintopf mit Reis",
        ],
    },
    {
        category: "Fisch",
        dishes: [
            "Gebratenes Zanderfilet auf Rahmtagliatelle",
            "Gegrilltes Lachssteak auf Cremigen Blattsalat mit Petersilienkartoffel",
            "Gebackene Scholle mit Kartoffelsalat",
            "Wels im Backteig mit Petersilienkartoffel und Sauce Tatar",
            "Gebratenes Wels Filet auf Dillsauce mit Salzkartoffel",
        ],
    },
];

const vorspeisenBuffet = [
    {
        category: "Fleisch",
        dishes: [
            "Hühnercurrysalat mit Ananas",
            "Gefüllte Schinkenröllchen auf buntem Blattsalat",
            "Roastbeef mit Essig Gemüse und Sauce Tatar",
            "Prosciutto mit Melone",
            "Warp mit Schinken, Käse (in der Manschette wenn Fingerfood)",
            "Gefüllte Eier auf Blattsalat",
            "Rindfleischsalat mit rotem Zwiebel Paprika und Kürbiskernöl",
            "Schweizer Wurst-Käse Salat",
        ],
    },
    {
        category: "Vegetarisch",
        dishes: [
            "Cous cous Salat",
            "Cremiger oder Nudelsalat Natur mit Gemüse",
            "Warp mit Gemüse",
            "Palatschinken-Röllchen mit Frischkäse und Blattspinat",
            "Griechischer Bauernsalat",
            "Mozzarella mit Kirschtomaten Rucola und hausgemachtem Pesto",
        ],
    },
    {
        category: "Vegan",
        dishes: [
            "Antipasti",
            "Cous cous Salat",
            "Rote Rüben Carpaccio mit Nüssen und Rucola",
            "Gefüllte Weinbergblätter",
            "Linsensalat",
        ],
    },
    {
        category: "Fisch",
        dishes: [
            "Palatschinken-Röllchen mit Frischkäse und Räucherlachs",
            "Räucherlachsrose auf Blattsalat mit Dill-Senfsauce",
            "Shrimps-Salat mit Kren und Cocktailsauce",
        ],
    },
];

const fingerfoodBuffet = [
    {
        category: "Kalt",
        dishes: [
            "Tomaten-Mozzarella Spießchen auf Pesto",
            "Asiatischer Glasnudelsalat mit gehackten Cashewnüssen",
            "Hühnercurrysalat mit Ananas",
            "Pikanter Cous cous Salat",
            "Gefüllte Weinbergblätter auf Kräuterjoghurtdip",
            "Shrimps-Salat mit Kren und Cocktailsauce",
            "Griechischer Bauernsalat",
            "Roastbeef Röllchen mit Schnittlauchrahm",
            "Vitello Tonnato",
            "Antipasti",
            "Prosciutto mit Honig Melone",
            "Geräucherte Entenbrust auf Belugalinsen Salat",
            "Geräucherte Lachs mit Dillsenfsauce",
            "Hausgebeizter Lachs",
            "Graved Lachs",
            "Rindfleischsalat",
            "Schweizer Wurstsalat",
            "Mini Wraps mit Lachs, Schinken, Käse, Gemüse"
        ],
    },
    {
        category: "Warm",
        dishes: [
            "Kleine Faschierte Laibchen auf Gurkenrahmsalat",
            "Kleine Hühnerschnitzel auf Kartoffelsalat",
            "Garnelen im Tempura Teig auf Sweet Chili Sauce",
            "Mini Frühlingsrolle auf asiatischem Glasnudelsalat",
            "Spinattaschen auf Kräuterdip",
            "Schinkenkipferl",
            "Würstel im Schlafrock auf Cocktailsauce",
            "Gemüselaibchen auf pikantem Dip",
            "Spinatstrudel mit Schafkäse und Kräuterrahm",
            "Gebackene Risotto Bällchen auf Tomatensauce",
            "Falafel auf Humus",
            "Karfiolwings mit BBQ Sauce"
        ],
    },
    {
        category: "Desserts",
        dishes: [
            "Punschwürfel",
            "Schokowürfel",
            "Hausgemachter Blechkuchen (Marille oder Zwetsche, Apfel, Birne)",
            "Schokomousse mit frischen Früchten, Beerensauce oder Sauerkirschen",
            "Topfen-Limettencreme",
            "Topfen-Joghurtcreme mit Heidelbeeren",
            "Apfelstrudel",
            "Topfenstrudel"
        ],
    },
];

const BroetchenBuffet = [
    {
        category: "Brötchen",
        dishes: [
            "Putenschinken mit Silberzwiebel",
            "Putenschinken mit Käse",
            "Gouda mit Trauben und Nüssen",
            "Salami mit Essiggurken",
            "Camembert mit Preiselbeeren und Petersilie",
            "Tomaten-Mozzarella mit hausgemachtem Pesto",
            "Salami-Käse",
            "Schinken-Salami",
            "Prosciutto mit Melone",
            "Speckbrot mit Kren",
            "Räucherlachs mit Zitrone und Kapern",
            "Gebratene Hühnerbrust auf Waldorfsalat",
            "Roastbeef mit Essiggemüse"
        ],
    },
    {
        category: "Aufstriche",
        dishes: [
            "Ei-Aufstrich mit frischen Schnittlauch",
            "Thunfischaufstrich",
            "Gemüseaufstrich (Vegan oder Vegetarisch)",
            "Liptauer",
            "Avocadoaufstrich",
            "Schinkenaufstrich",
            "Kräuterfrischkäseaufstrich",
            "Hummus Natur oder mit Rote Rüben (Vegan)",
            "Kürbiskernaufstrich (Vegan oder Vegetarisch)",
            "Erdäpfelkas mit Paprikastreifen",
            "Tomatenaufstrich mit Basilikum (Vegan oder Vegetarisch)",
            "Grünkernaufstrich (Vegan oder Vegetarisch)",
            "Chili Bohnen (Vegan oder Vegetarisch)"
        ],
    },
    {
        category: "Vegane Aufstriche",
        dishes: [
            "Grünkernaufstrich",
            "Roter Linsenaufstrich",
            "Roterüben Humus",
            "Hummus",
            "Mediterranen Tomatenaufstrich",
            "Linsen-Kürbis-Aufstrich",
            "Avocado-Humus"
        ],
    },
];

const salatbuffet = [
    {
        category: "Salate",
        dishes: [
            "Kartoffelsalat",
            "Krautsalat",
            "Karottensalat",
            "Tomatensalat mit Rotem Zwiebel",
            "Gurkensalat mit oder ohne Rahm",
            "Fisolen Salat",
            "Rote Rübensalat",
            "Blattsalat",
            "Rucola",
            "Kartoffel-Vogerlsalat"

        ],
    },
    {
        category: "Dressings",
        dishes: [
            "Hausdressing (Essig öl mit Gorgonzola)",
            "French Dressing",
            "Joghurt Dressing",
            "Essig Öl"

        ],
    },

];

const dessertBuffet = [
    {
        category: "Desserts",
        dishes: [
            "Kaiserschmarren mit Zwetschkenröster",
            "Grießschmarren mit Apfelmus",
            "Mohnnudel",
            "Nussnudel",
            "Apfelstrudel mit oder ohne Vanillesauce",
            "Topfenstrudel",
            "Haugemachter Blechkuchen (Marille oder Zwetsche, Apfel)",
            "Panna Cotta mit Mango Sauce oder Beerensauce",
            "Schokomousse mit frischen Früchten, Beerensauce oder Sauerkirschen",
            "Topfen-Limettencreme",
            "Topfen-Joghurtcreme mit frischen Früchten",
            "Tiramisu (Klassisch, Erdbeere, Himbeere, Limette)",
            "Schokowürfel",
            "Punschwürfel",
            "Nougatknödel",
            "Schwarzwälder Kirsch im Glas",
            "Grießflammarie",
            "Topfenpalatschinken",
            "Muffins Schoko oder Heidelbeere (auch Vegan erhältlich)",
            "Amaretto Mousse",
            "Baileys Mousse"
        ],
    },
    {
        category: "Vegane Desserts",
        dishes: [
            "Vegan:",
            "Karottenkuchen",
            "Veganes Schokomousse",
            "Zitronenkuchen",
            "Kokos Panna Cotta mit Kokosmilch"
        ],
    }
];


const getraenkBuffet = [
    {
        category: "Alkoholfrei",
        dishes: [
            "Orangensaft",
            "Apfelsaft",
            "Ananas pro liter",
            "Mineralwasser still - pricklend pro Liter / 4.20€",
            "Cola / Cola Zero"
        ],
    },
    {
        category: "Alkoholisch",
        dishes: [
            "Ottakringer",
            "Weingut Schrey",
            "Weisswein Grüner Verltliner 0.75",
            "Rotwein Zweigelt 0.75",
            "Prosecco 0.75"
        ],
    }
];


const checkMaxMeals = (id, groupSize) => {

    console.log(id, groupSize);
    var maxMeals = 3;

    if (groupSize < 20) {
        maxMeals = 2;
    } else {
        maxMeals = 3;
    }

    const container = document.getElementById(id);
    const checkedMeals = container.querySelectorAll('input[name="meal"]:checked');
    if (checkedMeals.length >= maxMeals) {
        ;
        const allMeals = container.querySelectorAll('input[name="meal"]');
        allMeals.forEach((mealCheckbox) => {
            if (!mealCheckbox.checked) {
                mealCheckbox.disabled = true;
                mealCheckbox.classList.add('off');
            }
        });
    } else {
        const allMeals = container.querySelectorAll('input[name="meal"]');
        allMeals.forEach((mealCheckbox) => {
            mealCheckbox.disabled = false;
            mealCheckbox.classList.remove('off');
        });
    }

};


const HauptspeisenContainer = ({ handleChange, formData }) => {
    return (
        <div className='menu-selection-container'>
            {hauptspeisenBuffet.map((categoryItem) => (
                <div key={categoryItem.category} className="card menu-card" id={categoryItem.category.toLowerCase()}>
                    <h4>{categoryItem.category}</h4>
                    {categoryItem.dishes.map((dish) => (
                        <div className='food-choice-cont' key={dish} >
                            
                            <input
                                type="checkbox"
                                className='ui-checkbox'
                                name="meal"
                                value={dish}
                                category={categoryItem.category}
                                onChange={e => {
                                    checkMaxMeals(categoryItem.category.toLowerCase(), formData.groupSize);
                                    handleChange(e);
                                }
                                }
                            />
                            <label key={dish} >
                            {dish}
                        </label>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
const BroetchenContainer = ({ handleChange, formData }) => {
    return (
        <div className='menu-selection-container'>
            {BroetchenBuffet.map((categoryItem) => (
                <div key={categoryItem.category} className="card menu-card" id={categoryItem.category.toLowerCase()}>
                    <h4>{categoryItem.category}</h4>
                    {categoryItem.dishes.map((dish) => (
                        <div className='food-choice-cont' key={dish} >
                            
                        <input
                            type="checkbox"
                            className='ui-checkbox'
                            name="meal"
                            value={dish}
                            onChange={e => {
                                checkMaxMeals(categoryItem.category.toLowerCase(), formData.groupSize);
                                handleChange(e);
                            }
                            }
                        />
                        <label key={dish} >
                        {dish}
                    </label>
                    </div>
                    ))}
                </div>
            ))}
        </div>
    );
}


const VorspeisenContainer = ({ handleChange, formData }) => {
    return (
        <div className='menu-selection-container'>
            {vorspeisenBuffet.map((categoryItem) => (
                <div key={categoryItem.category} className="card menu-card" id={categoryItem.category.toLowerCase()}>
                    <h4>{categoryItem.category}</h4>
                    {categoryItem.dishes.map((dish) => (
                        <div className='food-choice-cont' key={dish} >
                            
                        <input
                            type="checkbox"
                            className='ui-checkbox'
                            name="meal"
                            value={dish}
                            onChange={e => {
                                checkMaxMeals(categoryItem.category.toLowerCase(), formData.groupSize);
                                handleChange(e);
                            }
                            }
                        />
                        <label key={dish} >
                        {dish}
                    </label>
                    </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

const FingerfoodContainer = ({ handleChange, formData }) => {
    return (
        <div className='menu-selection-container'>
            {fingerfoodBuffet.map((categoryItem) => (
                <div key={categoryItem.category} className="card menu-card" id={categoryItem.category.toLowerCase()}>
                    <h4>{categoryItem.category}</h4>
                    {categoryItem.dishes.map((dish) => (
                        <div className='food-choice-cont' key={dish} >
                            
                        <input
                            type="checkbox"
                            className='ui-checkbox'
                            name="meal"
                            value={dish}
                            onChange={e => {
                                checkMaxMeals(categoryItem.category.toLowerCase(), formData.groupSize);
                                handleChange(e);
                            }
                            }
                        />
                        <label key={dish} >
                        {dish}
                    </label>
                    </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

const SalatContainer = ({ handleChange, formData }) => {
    return (
        <div className='menu-selection-container'>
            {salatbuffet.map((categoryItem) => (
                <div key={categoryItem.category} className="card menu-card" id={categoryItem.category.toLowerCase()}>
                    <h4>{categoryItem.category}</h4>
                    {categoryItem.dishes.map((dish) => (
                        <div className='food-choice-cont' key={dish} >
                            
                        <input
                            type="checkbox"
                            className='ui-checkbox'
                            name="meal"
                            value={dish}
                            onChange={e => {
                                checkMaxMeals(categoryItem.category.toLowerCase(), formData.groupSize);
                                handleChange(e);
                            }
                            }
                        />
                        <label key={dish} >
                        {dish}
                    </label>
                    </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

const DesserContainer = ({ handleChange, formData }) => {
    return (
        <div className='menu-selection-container'>
            {dessertBuffet.map((categoryItem) => (
                <div key={categoryItem.category} className="card menu-card" id={categoryItem.category.toLowerCase()}>
                    <h4>{categoryItem.category}</h4>
                    {categoryItem.dishes.map((dish) => (
                        <div className='food-choice-cont' key={dish} >
                            
                        <input
                            type="checkbox"
                            className='ui-checkbox'
                            name="meal"
                            value={dish}
                            onChange={e => {
                                checkMaxMeals(categoryItem.category.toLowerCase(), formData.groupSize);
                                handleChange(e);
                            }
                            }
                        />
                        <label key={dish} >
                        {dish}
                    </label>
                    </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

const GetraenkeContainer = ({ handleChange }) => {
    return (
        <div className='menu-selection-container'>
            {getraenkBuffet.map((categoryItem) => (
                <div key={categoryItem.category} className="card menu-card" id={categoryItem.category.toLowerCase()}>
                    <h4>{categoryItem.category}</h4>
                    {categoryItem.dishes.map((dish) => (
                        <div className='food-choice-cont' key={dish} >
                            
                        <input
                            type="checkbox"
                            className='ui-checkbox'
                            name="drinks"
                            value={dish}
                            onChange={handleChange
                            }
                        />
                        <label key={dish} >
                        {dish}
                    </label>
                    </div>
                    ))}
                </div>
            ))}
        </div>
    );
}


export { VorspeisenContainer, HauptspeisenContainer, FingerfoodContainer, BroetchenContainer, SalatContainer, DesserContainer, GetraenkeContainer };