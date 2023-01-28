const PlateItemExample = {
    display_name: 'Item',
    picture: 'plate-item.svg',
    plate_area: '--x:-15; --y:+10;',
    features: {
        A: 50,
        B: 40,
        C: 30,
    },
};
const PlateItems = [
    {
        display_name: 'Item',
        picture: 'cartoons/item1.png',
        plate_area: '--x:-15; --y:10;',
        features: {
            A: 50,
            B: 40,
            C: 30,
        },
    },
    {
        display_name: 'Item',
        picture: 'cartoons/item6.png',
        plate_area: '--x:15; --y:-10;',
        features: {
            A: 50,
            B: 40,
            C: 30,
        },
    },
    {
        display_name: 'Item',
        picture: 'cartoons/item4.png',
        plate_area: '--x:10; --y:10;',
        features: {
            A: 50,
            B: 40,
            C: 30,
        },
    },
    {
        display_name: 'Item',
        picture: 'cartoons/item3.png',
        plate_area: '--x:-5; --y:20;',
        features: {
            A: 50,
            B: 40,
            C: 30,
        },
    },
    {
        display_name: 'Item',
        picture: 'cartoons/item7.png',
        plate_area: '--x:-15; --y:-15;',
        features: {
            A: 50,
            B: 40,
            C: 30,
        },
    },
    {
        display_name: 'Item',
        picture: 'cartoons/item2.png',
        plate_area: '--x:-5; --y:-20;',
        features: {
            A: -20,
            B: 50,
            C: 30,
        },
    },
    {
        display_name: 'Item',
        picture: 'cartoons/item5.png',
        plate_area: '--x:3; --y:-10;',
        features: {
            A: 50,
            B: 40,
            C: 30,
        },
    },
    {
        display_name: 'Item',
        picture: 'cartoons/item8.png',
        plate_area: '--x:0; --y:5;',
        features: {
            A: 50,
            B: 40,
            C: 30,
        },
    },
];
const PlateState = {
    features: {
        A: 50,
        B: 0,
        C: 0,
    },
};
const RunFeatures = () => {
    PlateState.features.A = PlateItems.reduce(
        (sum,o) => 1*sum + ( o.selected ? o.features.A : 0),
        50
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
    item.selected && item.elp.classList.add('selected')
   !item.selected && item.elp.classList.remove('selected')
    RunFeatures()
};

const domPlateWrap = document.querySelector(".PlateWrap")
const domItemWrapA = document.querySelector(".itemsA")
const domItemWrapB = document.querySelector(".itemsB")
const domPlateItems = document.querySelector(".plateA .items")
const domFeatureValueA = document.querySelector(".featureA")
const domFeatureValueB = document.querySelector(".featureB")
const domFeatureValueC = document.querySelector(".featureC")

const renderItem = (item, keyIndex) => {
    const elFIGURE = document.createElement('figure')
    const elIMG = document.createElement('img')
    const elIMP = document.createElement('img')
    elIMG.src = `./art/${item.picture}`
    elIMP.src = `./art/${item.picture}`
    elIMG.alt = item.display_name
    elIMP.alt = item.display_name
    elIMP.style = item.plate_area
    elFIGURE.classList.add('box')
    elFIGURE.append(elIMG)
    elFIGURE.addEventListener('click', (ev) => PlateItemSelect(item))
    elIMP.addEventListener('click', (ev) => PlateItemSelect(item))
    item.el = elFIGURE
    item.elp = elIMP
    const domParent = keyIndex % 2 ? domItemWrapB : domItemWrapA
    domParent.append(elFIGURE)
    domPlateItems.append(elIMP)
}
const renderPlateItems = () => {
    PlateItems.map(
        (item, keyIndex) => {
            renderItem(item, keyIndex)
        }
    );
};
const renderFeatures = () => {
    domFeatureValueA.style = `--value: ${PlateState.features.A};`
    domFeatureValueB.style = `--value: ${PlateState.features.B};`
    domFeatureValueC.style = `--value: ${PlateState.features.C};`
}

// Run

renderPlateItems()
renderFeatures()
