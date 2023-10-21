//1 imort area


//2define area
 export async function GET(request){
  const searchParams = request.nextUrl.searchParams
  const stockName = searchParams.get('stockName')

    
    var start,end,stockPrice,stockPrice1,resData
     switch(stockName) {
      case 'ICICI':
         start = 930;
         end = 945;
         stockPrice = (Math.random() * (end - start + 1)) + start; 
         stockPrice1 = parseFloat(stockPrice.toFixed(2))

         resData={
          //property:value
          stockName,   //stockName:stockName =>> when property and value are same when we use this variable one time
          stockPrice1
        }
        break;
      case 'HDFC':
        start = 1500;
        end = 1550;
        stockPrice = (Math.random() * (end - start + 1)) + start; 
        stockPrice1 = parseFloat(stockPrice.toFixed(2))
       
        resData={
          //property:value
          stockName,   //stockName:stockName =>> when property and value are same when we use this variable one time
          stockPrice1
        }
        break;
      case 'PNB':
        start = 72;
        end = 78;
        stockPrice = (Math.random() * (end - start + 1)) + start; 
        stockPrice1 = parseFloat(stockPrice.toFixed(2))
       
        resData={
          //property:value
          stockName,   //stockName:stockName =>> when property and value are same when we use this variable one time
          stockPrice1
        }
        break;
       default:
        resData={
          msg:'invalid stock name'
        }
    }

      return Response.json(resData )
 }


//export area