// Drawback: let Mobile has two dependency - 1) Processor 2) Camera
// if in future we are getting some parameter which is used as features for processor and camera
// And after some time we got another feature for camera then we have to add other parameter
// for camera again 
// Example
// class Mobile {
//     processor;
//     camera;
//     constructor(newParam: any, newParam1: any, newParam2: any) {
//         this.processor = new Processor(newParam);
//         this.camera = new Camera(newParam1, newParam2);
//     }
// }

// class Processor {
//     constructor(newParam: any) {

//     }
// }

// class Camera {
//     constructor(newParam: any, newParam2: any) {

//     }
// }
// DrawBacks::::
// 1. Code is not flexible.
// 2. Any time dependency is changed the Mobile class needs to be changed as well.

/* 2. DI as a design pattern: DI is the coding pattern in which a class recieves its
dependency from external sources rather than creating itself.*/ 

// To overcome this issue DI comes into picture
// Solutions:::::::

class Mobile {
    processor;
    camera;
    constructor(Processor: any, Camera: any) {
        this.processor = Processor;
        this.camera = Camera;
    }
}

class Processor {
    constructor(newParam: any) {

    }
}

class Camera {
    constructor() {

    }
}

// So Even if you changes the dependency it won't affect the mobile class.

/* 3. DI as a framework in Angular.
Step 1. Make a Service.
Step 2. Register the service using Injector (Angular have inbuild Injector where
    you can register the service(or Dependency) required in the application).
Step 3. Declare the dependency in the component where you want to use it.*/

// DI is herarical in nature: If service register at A component then it will only available 
// to use for A component.
