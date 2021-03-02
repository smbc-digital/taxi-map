const taxirankspointsPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-taxi smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Taxi Ranks</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Location: ${feature.properties.desc}</p>
    </div>
  </div>`
 
  layer.bindPopup(content)
 }

export {
  taxirankspointsPopup
}