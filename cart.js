var products = [
    {
      id: 1,
      title: "Motherboard Asus GTX 1000",
      price: 1000000
    },
    {
      id: 2,
      title: "Harddisk Seagate 1TB",
      price: 1500000
    },
    {
      id: 3,
      title: "RAM V-Gen 16GB",
      price: 1600000
    },
    {
      id: 4,
      title: "Monitor Samsung 15 inch",
      price: 1300000
    }
  ]

function cart(idProduct) {
    if (idProduct.length === 0 ) return 'Anda harus memilih product'
    var obj = {
        title : 'Nota Pembayaran',
        cart : [],
        total : 0
    }
    var belanjaan = {}
    for (var a=0; a<idProduct.length; a++) {
        if (!belanjaan[idProduct[a]]) {
            belanjaan[idProduct[a]] = 0
        }
        belanjaan[idProduct[a]] += 1
    }
    var tagKey = Object.keys(belanjaan)
    // console.log(tagKey)
    // console.log(belanjaan)
    for (var i=0; i<tagKey.length; i++) {
        // console.log(tagKey[i])
        for (var j=0; j<products.length; j++) {
            // console.log(products[j]['id'])
            if (tagKey[i] == products[j]['id']) {
                var obj2 = {}
                    obj2.id = products[j]['id']
                    obj2.title = products[j]['title']
                    obj2.qty = belanjaan[tagKey[i]]
                    obj2.subtotal = products[j]['price'] * belanjaan[tagKey[i]]
                obj.total += obj2.subtotal
                obj.cart.push(obj2)
            }
        }
    } 
    return obj
}

console.log(cart([1, 1, 2, 3, 3, 3]));
/* 
    {
        title:"Nota Pembayaran"
        carts:[
            {
                id:1,
                title:"Motherboard Asus GTX 1000"
                qty:2,
                subtotal:2000000
            }
            {
                id:2,
                title:"Harddisk Seagate 1TB"
                qty:1,
                subtotal:1500000
            },
            {
                id:3,
                title:"RAM V-Gen 16GB"
                qty:3,
                subtotal:4800000
            }
        ],
        total:8300000
    }
*/

console.log(cart([1,3,2,1,4,3]))
/* 
    { title: 'Nota Pembayaran',
    cart:
    [{ id: 1,
        title: 'Motherboard Asus GTX 1000',
        qty: 2,
        subtotal: 2000000 },
        { id: 3, title: 'RAM V-Gen 16GB', qty: 2, subtotal: 3200000 },
        { id: 2,
          title: 'Harddisk Seagate 1TB',
          qty: 1,
          subtotal: 1500000 
        },
        { id: 4,
          title: 'Monitor Samsung 15 inch',
          qty: 1,
          subtotal: 1300000 
        }],
    total: 8000000 }
*/

console.log(cart([]))
// anda harus memilih product 