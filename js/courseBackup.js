
export class course{

   

    constructor(){
    

        this.selectedCourse = {

            img : '',
            info: '',
            autor: '',
            price: '',
            
            courseListener: function(value){},
            set course( value){
                
                this._img=value.img;
                this._info=value.info;
                this._autor=value.autor;
                this._price=value.price;
                //CALLING LISTENER
                this.courseListener(value);
            },

            get img(){
                return this._img;
            }
            

        }

       

        this.init();

    }
    registerListener(listener){
            
        this.selectedCourse.courseListener=listener;
    }
    

    init(){

       this.addToShoppingCar = document.querySelector('#lista-cursos');
       this.addToShoppingCar.addEventListener('click',this.selectCourse.bind(this));
        
       
        
       // this.getValues();
    }
    setSelectedCourse(selected){


        //this.selectedCourse = {...selected};
        this.selectedCourse.course=selected ;
    }

    
    getSelectedCourse(){

        console.log('getting into get method')
      
        

        return new Promise(
            resolve=>{

                this.registerListener(function(value){
                    //console.log(value);
                    //console.log('WORKING');
                    //console.log(this.selectedCourse.autor);
                    resolve (value);
        
                    
                });
            
               
         });
         
        
       

    }

    

    //SELECT COURSE
    selectCourse (e) {
        e.preventDefault();
        if(e.target.classList.contains('agregar-carrito')){
            const courseElement= e.target.parentElement.parentElement;    
      
            this.getValues(courseElement);
            this.getSelectedCourse();

        }
     

       

    }

    //GET HTML VALUES FROM SELECTED COURSE
      getValues(courseElement){

     let  selectedCourse = {

            img : courseElement.querySelector('img').src,
            info: courseElement.querySelector('.info-card h4').innerText,
            autor: courseElement.querySelector('.info-card p').innerText,
            price: courseElement.querySelector('.precio').innerText


        }
        
        this.setSelectedCourse(selectedCourse);

      //  return selectCourse;

    }


   




}