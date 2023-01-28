const PlateItemExample = {
    display_name: 'Item',
    picture: 'plate-item.svg',
    features: {
        A: 50,
        B: 40,
        C: 30,
    },
};
const PlateItems = [
    {...PlateItemExample},
    {...PlateItemExample},
    {...PlateItemExample},
    {...PlateItemExample},
    {...PlateItemExample},
    {...PlateItemExample},
    {...PlateItemExample},
    {...PlateItemExample},
];
const PlateState = {
    features: {
        A: 0,
        B: 0,
        C: 0,
    },
};
const RunFeatures = () => {
    PlateState.features.A = PlateItems.reduce(
        (sum,o) => 1*sum + ( o.selected ? o.features.A : 0),
        0
    )
    PlateState.features.B = PlateItems.reduce(
        (sum,o) => 1*sum + ( o.selected ? o.features.B : 0),
        0
    )
    PlateState.features.C = PlateItems.reduce(
        (sum,o) => 1*sum + ( o.selected ? o.features.C : 0),
        0
    )
    renderFeatures()
    console.log('PlateState.features', PlateState.features)
}
const PlateItemSelect = (item) => {
    console.log('PlateItemSelect', item)
    item.selected = !item.selected
    item.selected && item.el.classList.add('selected')
   !item.selected && item.el.classList.remove('selected')
    RunFeatures()
};

const domPlateWrap = document.querySelector(".PlateWrap")
const domItemWrapA = document.querySelector(".itemsA")
const domItemWrapB = document.querySelector(".itemsB")
const domFeatureValueA = document.querySelector(".FeatureValueA")
const domFeatureValueB = document.querySelector(".FeatureValueB")
const domFeatureValueC = document.querySelector(".FeatureValueC")

const renderItem = (item, keyIndex) => {
    const elFIGURE = document.createElement('figure')
    const elIMG = document.createElement('img')
    elIMG.src = `./art/${item.picture}`
    elIMG.alt = item.display_name
    elFIGURE.classList.add('box')
    elFIGURE.append(elIMG)
    elFIGURE.addEventListener('click', (ev) => PlateItemSelect(item))
    item.el = elFIGURE
    const domParent = keyIndex % 2 ? domItemWrapB : domItemWrapA
    domParent.append(elFIGURE)
}
const renderPlateItems = () => {
    PlateItems.map(
        (item, keyIndex) => {
            renderItem(item, keyIndex)
        }
    );
};
const renderFeatures = () => {
    domFeatureValueA.style.width = `${PlateState.features.A}px`
    domFeatureValueB.style.width = `${PlateState.features.B}px`
    domFeatureValueC.style.width = `${PlateState.features.C}px`
}

// Run

renderPlateItems()
