export class shoppingCar{



    constructor(){

        this.courses = [
            {
                img : '',
                info: '',
                autor: '',
                price: '',
            }
        ]

    }


    setCourses(course){

        this.courses.push(course);

    }


}

