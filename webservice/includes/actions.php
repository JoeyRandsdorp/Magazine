<?php
/**
 * @return array
 */
function getRecipe()
{
      return  [
        [
            "id" => 1,
            "name" => "Indiase curry",
            "imgUrl" => "webservice/includes/images/curry.jpg"
        ],
        [
            "id" => 2,
            "name" => "Pasta",
            "imgUrl" => "webservice/includes/images/spaghetti.jpg"
        ],
        [
            "id" => 3,
            "name" => "Medium-Rare Steak",
           "imgUrl" => "webservice/includes/images/steak.jpg"
        ],
        [
            "id" => 4,
            "name" => "Pizza",
            "imgUrl" => "webservice/includes/images/pizza.jpg"
        ],
        [
            "id" => 5,
            "name" => "Poffertjes",
            "imgUrl" => "webservice/includes/images/poffertjes.jpg"
        ],
        [
             "id" => 6,
             "name" => "Icecream",
             "imgUrl" => "webservice/includes/images/icecream.jpg"
        ]
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getRecipeDetails($id)
{
    $tags = [
        1 => [
            "Graad" => "8",
            "Afkomst" => "India",
            "Omschrijving" => "Pittige kip met een saus gemaakt van indiase kruiden, een explosieve smakencombinatie in bedwang gehouden door koele rijst."
        ],
        2 => [
            "Graad" => "10",
            "Afkomst" => "Italie",
            "Omschrijving" => "Enorm veel variatie's maar de standaard bolognese zal altijd 1 van de beste blijven."
        ],
        3 => [
            "Graad" => "9",
            "Afkomst" => "Onbekend",
            "Omschrijving" => "Een steak kan je avond maken of breken, een medium-rare steak zal ervoor zorgen dat je die avond nooit meer vergeet."
        ],
        4 => [
            "Graad" => "8",
            "Afkomst" => "Italie",
            "Omschrijving" => "Enorm veel variatie's, maar sommige variaties zouden illegaal gemaakt moeten worden."
        ],
        5 => [
            "Graad" => "8.5",
            "Afkomst" => "Nederland",
            "Omschrijving" => "Fantastisch gerecht en hoe vroeger op de dag je ze eet, hoe lekkerder ze worden. Ik bedoel, wie houdt niet van ontbijtpoffertjes."
        ],
        6 => [
            "Graad" => "8.5",
            "Afkomst" => "Italie",
            "Omschrijving" => "De flexibiliteit van dit gerecht is geweldig, een lekkere uitzondering in de winter, noodzaak in de zomer."
        ]
    ];

    return $tags[$id];
}
