
export class course{

   

    constructor(){
    

        this.selectedCourse = {

            img : '',
            info: '',
            autor: '',
            price: '',
            id: '',
            
            
            set setCourse( value){
                
                this.img=value.img;
                this.info=value.info;
                this.autor=value.autor;
                this.price=value.price;
                this.id=value.id;
                
            }

           
            

        }

        this.shoppingCar = document.querySelector('#lista-carrito tbody');

       

        

    }
  

  
    setSelectedCourse(selected){


        //this.selectedCourse = {...selected};
       
    }

    
    getSelectedCourse(){


        return this.selectedCourse;
      /*  console.log('getting into get method')
      
        

        return new Promise(
            resolve=>{

                this.registerListener(function(value){
                    //console.log(value);
                    //console.log('WORKING');
                    //console.log(this.selectedCourse.autor);
                    resolve (value);
        
                    
                });
            
               
         });
         */
        
       

    }

    

    //SELECT COURSE
    selectCourse (e) {
        e.preventDefault();
        if(e.target.classList.contains('agregar-carrito')){
            const courseElement= e.target.parentElement.parentElement;    
            
            this.getValues(courseElement);
            console.log(this.selectedCourse);
            this.setShoppingCar(this.selectedCourse);
            this.addToLocalStorage(this.selectedCourse);
           
          //  this.getSelectedCourse();

        }
     

       

    }
    
    //DELETE COURSE FROM SHOPPING CAR

    deleteCourse(e){
        e.preventDefault();
        let carElement,carID;

        if(e.target.classList.contains('borrar-curso')){
          carElement=  e.target.parentElement.parentElement;
          carID = e.target.getAttribute('data-id');
          this.deleteFromLocalStorage(carID);
          carElement.remove();

        }
    }
   


    //GET HTML VALUES FROM SELECTED COURSE
    getValues(courseElement){

     let  selected= {

            img : courseElement.querySelector('img').src,
            info: courseElement.querySelector('.info-card h4').innerText,
            autor: courseElement.querySelector('.info-card p').innerText,
            price: courseElement.querySelector('.precio').innerText,
            id: courseElement.querySelector('.agregar-carrito').getAttribute('data-id')


        }
        //SETTING HTML VALUES ON CURRENT OBJECT
        this.selectedCourse.setCourse=selected ;

       // console.log(this.selectedCourse);
      //  this.setSelectedCourse(selectedCourse);

      //  return selectCourse;

    }


    //SET SHOPPING CAR METHOD 

    setShoppingCar(course){

       
        let row= document.createElement('tr');        
        row.innerHTML+=
        `
            <td><img src="${course.img}"/></td>
            <td>${course.info}</td>
            <td>${course.price}</td>
            <td><a href="#" class="borrar-curso" data-id="${course.id}" >X</a></td>
        
        
        `;

        this.shoppingCar.appendChild(row);



    }

    //ADDING COURSES TO BROWSER LOCAL STORAGE
    addToLocalStorage(courseElement)
    {
        let courses;
        courses = this.getFromLocalStorage();
        courses.push(courseElement);
        localStorage.setItem('shoppingCar',JSON.stringify(courses));
    }

    //GETTING COURSES FROM BROWSER LOCAL STORAGE
    getFromLocalStorage(){
        let courses;
        
        if(localStorage.getItem('shoppingCar')===null){
            courses=[];
            localStorage.setItem('shoppingCar',JSON.stringify(courses));
        }else{
            courses=JSON.parse(localStorage.getItem('shoppingCar'));
        }
        return courses;


    }

    //DELETING COURSES FROM LOCAL STORAGE
    deleteFromLocalStorage(carID){
        let courses;
        

        courses=this.getFromLocalStorage();

        courses.forEach((course,index)=>{

            if(course.id===carID){
                courses.splice(index,1);
            }

        });
       
        localStorage.setItem('shoppingCar',JSON.stringify(courses));




    }
    //LOADING COURSES FROM THE LOCAL STORAGE TO THE SHOPPING CAR
    loadFromLocalStorage(){

        let courses;
        courses=this.getFromLocalStorage();
        
        courses.forEach((course)=>{
            this.setShoppingCar(course);
        })

    }

    //CLEANNING THE SHOPPING CAR

    cleanShoppingCar(){
        localStorage.clear();
        this.shoppingCar.innerHTML='';
    }




   




}