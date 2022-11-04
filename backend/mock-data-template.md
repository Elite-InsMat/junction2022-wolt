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
