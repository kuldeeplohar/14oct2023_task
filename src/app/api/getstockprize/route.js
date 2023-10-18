//1 imort area


//2define area
 export async function GET(){
     const start = 122;
     const end = 126;
     const randomValueBetween = getRandomValueBetween(start, end); 
     const Price = parseFloat(randomValueBetween.toFixed(2))
     
     function getRandomValueBetween(start, end) {
         return (Math.random() * (end - start + 1)) + start;
       }


      return Response.json(
       {Price}
    )
 }


//export area