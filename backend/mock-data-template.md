#Mock data generator template
## To generate mock data
to generate mock data, navigate to [json-generator](https://json-generator.com/) end paste in the following:

```
[
  '{{repeat(5, 7)}}',
  {
    _id: '{{objectId()}}',
    name: '{{company()}}',
    coverImage: '{{random(\
    ["https://i.imgur.com/5yKKhYl.jpg"],\
    ["https://i.imgur.com/gInx4zx.jpg"],\
    ["https://i.imgur.com/QDcxhGV.jpg"],\
    ["https://i.imgur.com/NrYusJX.jpg"],\
    ["https://i.imgur.com/I44m94t.jpg"],\
    ["https://i.imgur.com/ndrpGvY.jpg"],\
    ["https://i.imgur.com/wQZi5IQ.jpg"],\
    )}}',
    location: {
      friendlyName: '{{street()}}',
      coordinates: {
        lat: '60.{{integer([400000], [600000])}}',
        long: '22.{{integer([200000], [400000])}}'
      }
  	}
  }
]
```

```
[
  {
    _id: '{{objectId()}}',
    name: 'John Doe',
    location: {
      friendlyName: "Pispalantie 14, 20540 Turku",
      coordinates: {
        lat: '60.460660',
        long: '22.285900'
      }
  	}
  },
    {
    _id: '{{objectId()}}',
    name: 'Iplax Doe',
    location: {
      coordinates: {
        friendlyName: "Pispalantie 13, 20540 Turku",
        lat: '60.463660',
        long: '22.225900'
      }
  	}
  },
    {
    _id: '{{objectId()}}',
    name: 'Joni Inkivaari',
    location: {
      coordinates: {
        friendlyName: "Pispalantie 12, 20540 Turku",
        lat: '60.461660',
        long: '22.245900'
      }
  	}
  },
    {
    _id: '{{objectId()}}',
    name: '',
    location: {
      friendlyName: "Pispalantie 10, 20540 Turku",
      coordinates: {
        lat: '60.460660',
        long: '22.275900'
      }
  	}
  }
]

[
  '{{repeat(5, 7)}}',
  {
    _id: '{{objectId()}}',
    name: '{{random(\
    ["burger"],\
    ["burger2"],\
    ["pizza1"],\
    ["pizza2"],\
    )}}',
    description: 'asd',
    price:'{{integer(1,10)}}',
    restaurant:'{{objectId()}}',
    coverImage: '{{random(\
    ["https://i.imgur.com/5yKKhYl.jpg"],\
    ["https://i.imgur.com/gInx4zx.jpg"],\
    ["https://i.imgur.com/QDcxhGV.jpg"],\
    ["https://i.imgur.com/NrYusJX.jpg"],\
    ["https://i.imgur.com/I44m94t.jpg"],\
    ["https://i.imgur.com/ndrpGvY.jpg"],\
    ["https://i.imgur.com/wQZi5IQ.jpg"],\
    )}}'
  	}
]
```
