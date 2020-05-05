'use strict';


function attempt(available, allowed, preferred) {

    const listValues = available.find(elem => allowed.find(el => elem === el));
    if(!listValues) return [];
  
    if(allowed.length === 4) {
    const listValues = available.map(elem => allowed.find(el => elem === el));
    listValues.length = 2
    return listValues;
   }
  
   if(allowed.includes('any')) {
     return preferred;
    }
  
    if(preferred.includes('any')) {
      const listValues = available.filter(elem => allowed.find(el => elem === el));
      return listValues;
    }
  
  
   if(preferred.length === 2 && preferred.map(elem => elem > 360) && allowed.length === 2){
    const listValues = available.map(elem => allowed.find(el => elem === el));
    return listValues.splice(1)
   }
  
  
    return [listValues];
  }
  
  
  console.log(attempt([240, 360, 720], [360, 720], [1080]));
  console.log(attempt([240, 720], [360, 720], [1080]));
  console.log(attempt([240], [360, 720], [1080]));
  
  console.log(attempt([240, 360, 720], [240, 360, 720, 1080], [240, 360]));
  console.log(attempt([240, 720], [240, 360, 720, 1080], [240, 360]));
  console.log(attempt([240, 720], [240, 360, 1080], [240, 360]));
  console.log(attempt([720], [240, 360, 1080], [240, 360]));
  console.log(attempt([240, 360], [240, 360], [720, 1080]));
  
  console.log(attempt([240, 360, 720], [360, 'any'], [360, 720]));
  console.log(attempt([240, 360, 720], [240, 360, 720], ['any', 720]));
  console.log(attempt([240, 360, 720], [360, 1080], ['any', 720]));
  console.log(attempt([240, 360, 720], [1080], ['any', 720]));
  
