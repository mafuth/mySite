export const load = ({fetch,params})=>{
    // console.log(params);

    const placesDB = {};
    placesDB.male = {
        'folder':params.place,
        'title':{
            'en':`Male'`,
            'mv':`މާލެ`,
        },
        'description':`The Concrete Jungle`,
        'background':`DJI_0627.jpg`,
        'images':[
            '1.JPG',
            '2.JPG',
            '3.JPG',
            '4.JPG',
            '5.JPG',
            '6.JPG',
            '7.JPG'
        ],
    };
    placesDB.kendhoo = {
        'folder':params.place,
        'title':{
            'en':`Kendhoo'`,
            'mv':`ކެންދޫ`,
        },
        'description':`A mini vacation`,
        'background':`DJI_0044.jpg`,
        'images':[
            '1.jpeg',
            '2.jpeg',
            '3.jpeg',
            '4.jpeg',
            '5.jpg',
            '6.jpeg',
            '7.jpeg',
            '8.jpeg',
            '9.jpg',
        ],
    };
    placesDB.hulhumale = {
        'folder':params.place,
        'title':{
            'en':`Hulhumale'`,
            'mv':`ހުޅުމާލެ`,
        },
        'description':`The Concrete Jungle Part 2`,
        'background':`DJI_0513.jpg`,
        'images':[
            '1.jpeg',
            '2.jpeg',
            '3.jpeg',
            '4.jpeg',
            '5.jpeg',
            '6.jpg',
            '7.jpg',
        ],
    };
    placesDB.villingili = {
        'folder':params.place,
        'title':{
            'en':`Villingili'`,
            'mv':`ވިލިގިލި`,
        },
        'description':`A Escape from The Concrete Jungle`,
        'background':`DJI_0173.jpg`,
        'images':[
            '1.PNG',
            '2.jpg',
            '3.jpg',
            '4.jpg',
            '5.jpg',
            '6.jpg',
        ],
    };
    placesDB.hithaadhoo = {
        'folder':params.place,
        'title':{
            'en':`Hithaadhoo'`,
            'mv':`ހިތާދޫ`,
        },
        'description':`Home Sweet Home`,
        'background':`DJI_0043.jpg`,
        'images':[
            '1.jpeg',
            '2.jpeg',
            '3.jpeg',
            '4.JPG',
            '5.JPG',
            '6.JPG',
            '7.JPG',
            '8.JPG',
            '9.JPG',
            '10.JPG',
            '11.JPG',
        ],
    };
    placesDB.furanafushi = {
        'folder':params.place,
        'title':{
            'en':`Furanafushi'`,
            'mv':`ފުރަނަފުޝި`,
        },
        'description':`A place to remember`,
        'background':`DJI_0150.jpg`,
        'images':[
            '1.JPG',
            '2.JPG',
            '3.JPG',
            '4.JPG',
            '5.JPG',
            '6.JPG',
            '7.JPG',
            '8.JPG',
            '9.JPG',
        ],
    };

    let places = Object.keys(placesDB);

    if(places.includes(params.place)){
        return {
            info:placesDB[params.place]
        };
    }else{
        console.log(places);
        return error(404);
    }
}

