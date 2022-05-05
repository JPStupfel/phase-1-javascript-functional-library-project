

function myEach(collection, callback){

    for (let i = 0; i< Object.values(collection).length; i++){
        callback(Object.values(collection)[i])
    }
return collection
}

function myMap(collection, callback){
    let newArray = []
    for (let i = 0; i< Object.values(collection).length; i++){
        newArray.push(callback(Object.values(collection)[i]))
    }
return newArray
}

function myReduce(collection, callback, acc){

    //below adjusts startIndex to 1 and acc to array[0] if no acc has been passed into the function
    let startIndex = 0
   if(typeof(acc)!=="number"){
    startIndex ++;  acc = Object.values(collection)[0]
   }

    for (let i = startIndex; i< Object.values(collection).length; i++){
       acc = callback(acc , Object.values(collection)[i])
    }

return acc

}

function myFind(collection, predicate){
    for (let i=0;i<Object.values(collection).length; i++){
         if( predicate(Object.values(collection)[i]) ) {return Object.values(collection)[i] }
    }
}

function myFilter(collection, predicate){
    let newArray = [];

    for (let i=0;i<Object.values(collection).length; i++){
        if( predicate(Object.values(collection)[i]) ) {newArray.push(Object.values(collection)[i]) }
   }
   return newArray
}

function mySize(collection){
    let counter = 0
    for (let i=0;i<Object.values(collection).length; i++){
        counter ++ }
        return counter
   }

function myFirst(array, n=1){
    let newArray = []
    
    for (let i=0; i < n; i++){
        newArray.push(array[i])
    }
    //they want an integer if only one item is to be returned, else they want an array
    return newArray.length > 1 ? newArray : newArray[0]

}

 function myLast(array, n=1){
    let newArray = []
    
    for (let i= array.length-1 ; i > array.length-1-n; i--){
        newArray.unshift(array[i])
    }
    //they want an integer if only one item is to be returned, else they want an array
    return newArray.length > 1 ? newArray : newArray[0]
 }


function myKeys(object){
    //fist lets take the object and stringify it
    let objectString = JSON.stringify(object);
    //remove the first bracket and last bracket
    let objectArray = [...objectString];
    //console.log(objectString)

    objectArray = objectArray.slice(1,objectArray.length-1).join('').split(',').map(x=>x.split(':'))

   

    
    //for each nested element, remove the quotes
    objectArray = objectArray.map(pair=>pair.map(
        elm => elm.split('').slice(1,elm.length-1).join('')
        ))


    //console.log(objectArray)

    let objKeys = []
    for (let i = 0; i<objectArray.length; i++){
        objKeys.push(objectArray[i][0])
    }
    
    //console.log(objKeys)
    return objKeys
}

// myValues(object)

function myValues(object){
    //fist lets take the object and stringify it
    let objectString = JSON.stringify(object);
    //remove the first bracket and last bracket
    let objectArray = [...objectString];
    //console.log(objectString)

    objectArray = objectArray.slice(1,objectArray.length-1).join('').split(',').map(x=>x.split(':'))

   
    //console.log(objectArray)

    let objValues = []
    for (let i = 0; i<objectArray.length; i++){
        objValues.push(objectArray[i][1])
    }

    objValues = objValues.map(x=>parseInt(x),10)
    
    //console.log(objKeys)
    return objValues
}

// mySortBy(array, callback)

// myFlatten(array, [shallow], newArr=[])






/////////////////
const test = {me:'hi',you:'we'}

const unmodifiedTestArr = [1, 2, 3, 4]
  const unmodifiedTestObj = {one: 1, two: 2, three: 3, four: 4}

const testArr = unmodifiedTestArr.slice() // arr is [1, 2, 3, 4]
    const testObj = Object.assign({}, unmodifiedTestObj) // obj is {one: 1, two: 2, three: 3, four: 4}
    const callback = (acc, val, collection) => (acc + (val * 3))


    //////////////

