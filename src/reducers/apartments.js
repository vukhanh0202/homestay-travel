import Images from "../constants/images";

var initialState = [
    {
        title: 'Premium King Room',
        price: '198$',
        size: '30 ft',
        capacity: 'Max person 5',
        bed: 'King Bed',
        service: 'Wifi, Television, Bathroom,...',
        img: Images.ROOM_1
    },
    {
        title: 'Deluxe Room',
        price: '198$',
        size: '30 ft',
        capacity: 'Max person 5',
        bed: 'King Bed',
        service: 'Wifi, Television, Bathroom,...',
        img: Images.ROOM_2
    },
    {
        title: 'Double Room',
        price: '198$',
        size: '30 ft',
        capacity: 'Max person 5',
        bed: 'King Bed',
        service: 'Wifi, Television, Bathroom,...',
        img: Images.ROOM_3
    },
    {
        title: 'Luxury Room',
        price: '198$',
        size: '30 ft',
        capacity: 'Max person 5',
        bed: 'King Bed',
        service: 'Wifi, Television, Bathroom,...',
        img: Images.ROOM_4
    },
    {
        title: 'Room With View',
        price: '198$',
        size: '30 ft',
        capacity: 'Max person 5',
        bed: 'King Bed',
        service: 'Wifi, Television, Bathroom,...',
        img: Images.ROOM_5
    },
    {
        title: 'Small View',
        price: '198$',
        size: '30 ft',
        capacity: 'Max person 5',
        bed: 'King Bed',
        service: 'Wifi, Television, Bathroom,...',
        img: Images.ROOM_6
    },
];


const apartments = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    }
}

export default apartments;