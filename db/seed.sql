\c clothes_dev

INSERT INTO clothes (
    name,
    category, 
    heat, 
    cold, 
    material, 
    iscomfortable,
    imageurl
)
VALUES (
        't-shirt',
        'torso',
        2,
        3,
        'cotton',
        TRUE,
        'www.google.com'
    ),
    (
        'jeans',
        'legs',
        4,
        1,
        'denim',
        TRUE,
        'https://m.media-amazon.com/images/I/918vV4ZqEIL._AC_SY550_.jpg'
    );