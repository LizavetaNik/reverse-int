module.exports = function reverse (n) {
    
    if( n < 0 )
    {
        n = n *(-1);
    }

    const std = (n).toString();
    let newStd = '';
    
    for( let i = Number( (n).toString().length - 1); i >= 0; i--){
        newStd = newStd + std[i];
    }
     
    return Number( newStd );
}
