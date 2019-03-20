let arr=[
      {
            countery: 'egypt',
            ip: '123.1.23.34',
            url:'post:/user/id',
            status: 200,
            gender: 'male'
        },
        {
            countery: 'egypt',
            ip: '123.1.23.34',
            url:'post:/user/id',
            status: 200
        },
        {
            countery: 'uk',
            ip: '123.1.55.55',
            url:'post:/user/id',
            status: 400
        },
        {
            countery: 'uk',
            ip: '123.1.55.55',
            url:'post:/user/id',
            status: 400
        },
        {
            countery: 'egypt',
            ip: '123.1.23.34',
            url:'post:/user/id',
            status: 200
        }
        
];

let arr2 = [
  {process:{
        country: 'egypt',
        attacks:100,
        vector: 'phishing',
        list: {
            item: 100,
            fitem:300,
            logi: {
                moji: 'goo'
            }
        }
    }},
    {process:{
        attacks:10,
        vector: 'spoof',
        list: {
            item: 100,
            fitem:300,
            logi: {
                let: 'goo'
            }
        }
    },process:{
        attacks:10,
        vector: 'spoof',
        list: {
            item: 100,
            fitem:300,
            logi: {
                let: 'goo'
            }
        }
    }},
    {process2:{
        attacks:90,
        vector: 'injection'
    }},

]

/** desired output */

// {
//     attack: 200,
//     vector: ['injection', 'spoof', 'phishing'],
//     country: ['egypt']
// }




/**
 * convert object to Array of object - containing single property 
 * @param {Object} obj - array of objects 
 * @retrun Array of object
 */
function objectToArray(obj){
    let out=[]
    Object.keys(obj).map(key=>{
     out.push({[key]:obj[key]});
    })
    return out;
}


/**
 * reduces array of objects - containing single property 
 * @param {array} arr - array of objects 
 * @retrun object of keys and values 
 */
function reducer(arr){
    return arr.reduce(function (acc, obj){
        let key=Object.keys(obj)[0];
        if(!acc[key])acc[key]=0;
        acc[key]+=obj[key];
        return acc
    },[])
}



/**
 * reduces array of objects - containing single property 
 * @param {array} arr - array of objects 
 * @retrun object of keys and values 
 */
// function reducer2(arr){
//     return arr.reduce(function (acc, obj){
    
        
//         let keys=Object.keys(obj);
//         console.log(keys);
//        keys.map(key=>{
//          //console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
//            // console.log('before',acc);
//             if(!acc[key])acc[key]=0;
//             acc[key]+=obj[key];
//             //console.log('test',acc);
            
//         })
//         //console.log('After',acc);

//         return acc;
        
//     },[])
// }

/**
 * 
 * @param {*} arr 
 */
function reducer2(arr){
    return arr.reduce(function (acc, obj){
    
       let keys=Object.keys(obj);
       keys.map(key=>{
         let val=obj[key];
            if(!acc[key])acc[key]={[val]:0};
                if(acc[key][val])
                    acc[key][val]++;
                else{
                    acc[key][val]=1;
                }              
        })

        return acc;
        
    },[])
}



function reducer3(arr){
    return arr.reduce(function (acc, obj){
    
       let keys=Object.keys(obj);
       keys.map(key=>{
         let val=obj[key];
            if(!acc[key]){
                if(!isNaN(val)){
                    acc[key]=0;
                }
                else{
                    acc[key]=[];
                }
            }
              if(!isNaN(val))
                    acc[key]+=val;
                else{
                    acc[key].push(val);
                }              
        })

        return acc;
        
    },[])
}
/**
 * 
 * @param {object} obj 
 * @param {object} acc 
 * output concatinate object1 to object2 
 */
function reduceLevel(obj,acc){

    Object.keys(obj).map(key=>{
        console.log(key);
        
        let valueLevel=obj[key];
        switch(typeof valueLevel){
            case 'object':
                    !acc[key] ? acc[key] = reduceLevel(valueLevel,{}) : acc[key] = reduceLevel(valueLevel,acc[key])
                    break;

             case 'string':
                    !acc[key] ? acc[key] = [valueLevel] : acc[key].push(valueLevel)
                    break;
            case 'number':
                    !acc[key] ? acc[key] = valueLevel : acc[key] += valueLevel
                    break;        
        }
   })
    return acc
}
/**
 * input array of objects with multi levels
 * @param {Array} arr 
 * output object 
 */

function reduecMultiLevels(arr){
    return arr.reduce(function (acc, obj){
        
        return reduceLevel(obj,acc);
    },{})
}


function reduecMultiLevels2(arr){
    return arr.reduce(function (acc, obj){
      let x= Object.keys(obj).map(key=>{
            console.log('################',acc);
            console.log('################',obj[key]);

             acc=reduceLevel(obj[key],acc);
        })
        console.log('############################3333',x);
        return x
        
    },{})
}
let s={x:
        { 
          a:200,
          b:300,
          c:{
                d:500,
                f:'eg'
            }    
        }
     }
let count=reduecMultiLevels2(arr2);
console.log(JSON.stringify(count,undefined,2));
// console.log(count.list.logi);

// let z=reduceLevel(s,{})
//             console.log(z);
            
//  let count=reducer(arr)
//  console.log('count1',count);

// let count2=reducer3(arr2)

// console.log('count2',count2);

// let y=objectToArray(count)
// console.log(y)




