const taxirankspointsPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-taxi" aria-hidden="true"></i><p class="title">Taxi Ranks</p>
  <p></p>
  <p class="info">Name: ${feature.properties.desc}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

export {
  taxirankspointsPopup
}