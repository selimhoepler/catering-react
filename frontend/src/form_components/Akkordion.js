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
  

const HauptspeisenContainer = ({ handleChange }) => {
    return (
        <div className='hauptspeisen-container'>
            {hauptspeisenBuffet.map((categoryItem) => (
                <div key={categoryItem.category} className="card" id={categoryItem.category.toLowerCase()}>
                    <h4>{categoryItem.category}</h4>
                    {categoryItem.dishes.map((dish) => (
                        <label key={dish}>
                            <input
                                type="checkbox"
                                name="meal"
                                value={dish}
                                onChange={handleChange}
                            />
                            {dish}
                        </label>
                    ))}
                </div>
            ))}
        </div>
    );
}

const VorspeisenContainer = ({ handleChange }) => {
    return (
        <div className='vorspeisen-container'>
            {vorspeisenBuffet.map((categoryItem) => (
                <div key={categoryItem.category} className="card" id={categoryItem.category.toLowerCase()}>
                    <h4>{categoryItem.category}</h4>
                    {categoryItem.dishes.map((dish) => (
                        <label key={dish}>
                            <input
                                type="checkbox"
                                name="meal"
                                value={dish}
                                onChange={handleChange}
                            />
                            {dish}
                        </label>
                    ))}
                </div>
            ))}
        </div>
    );
}




export { VorspeisenContainer, HauptspeisenContainer };