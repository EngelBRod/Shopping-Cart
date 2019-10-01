import {course} from  './course.js';

//COURSE OBJECT INSTANCE
const courses =  new course();

//VARIABLES DECLARATIONS
const addToShoppingCar = document.querySelector('#lista-cursos');
const removeFromShoppingCar = document.querySelector('#lista-carrito');
const cleanShoppingCar = document.querySelector('#vaciar-carrito');
//DOM EVENT LISTENERS DECLARATION

//SELECTING CLICKED COURSE AND GETTING ITS HTML VALUES
addToShoppingCar.addEventListener('click',courses.selectCourse.bind(courses));

//REMOVING CLICKED COURSE FROM SHOPPING CAR AND LOCALSTORAGE
removeFromShoppingCar.addEventListener('click',courses.deleteCourse.bind(courses));

//LOADING ELEMENTS FROM LOCAL STORAGE TO SHOPPING CAR
document.addEventListener('DOMContentLoaded',courses.loadFromLocalStorage.bind(courses));

//REMOVING ALL ITEMS FROM SHOPPING CAR AND LOCAL STORAGE
cleanShoppingCar.addEventListener('click',courses.cleanShoppingCar.bind(courses));



