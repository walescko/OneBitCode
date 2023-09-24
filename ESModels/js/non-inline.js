function group(){
    console.log('Export non-named non-inline (agrouped)')
}

function a (){
    console.log('a')
}
function b (){
    console.log('b')
}
function c (){
    console.log('c')
}
function d (){
    console.log('d')
}

function exportDefault(){
    console.log('Export default non-inline')
}

export {group, a, b, c, d}
export default exportDefault