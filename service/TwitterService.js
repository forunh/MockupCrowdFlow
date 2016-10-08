export function getCurrentDensity(location) {
  let place = {}
  let output = []
  let dens
  place.Geolocation = "13.734760,100.777690"
  place.Name = "KMITL"
  dens = Math.floor(Math.random() * (3))
  if(dens == 0)  
    place.Density = "LOW"
  else if(dens == 1)  
    place.Density = "MEDIUM"
  else
    place.Density = "HIGH"

  output[0]=place
  
  return new Promise((resolve, reject) => {
    resolve(output)
  })
}
