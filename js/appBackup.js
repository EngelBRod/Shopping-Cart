import {course} from  './courseBackup.js/index.js';


const courses =  new course();

const courseValue = async function courseValues(){

  const values= await courses.getSelectedCourse()
  console.log(values);
  return values;
  }
 


courseValue()
  .then( values => {
    console.log("working"); 
    courseValue();
   }
  );

/*
 const addToShoppingCar = document.querySelector('.agregar-carrito');
 addToShoppingCar.addEventListener('click',selectCourse);


function selectCourse (e) {
    e.preventDefault();
    
   const courseElement= e.target.parentElement.parentElement;


   
  
  
  courses.getValues(courseElement);


    


}

*/